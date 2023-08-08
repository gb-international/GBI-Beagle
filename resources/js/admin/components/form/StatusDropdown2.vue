<template>
  <div class="dropdown-field" v-if="itemList" v-click-outside="closeEvent">
    <input
      v-if="Object.keys(selectedItem).length === 0"
      ref="dropdowninput"
      v-model.trim="inputValue"
      class="form-control dropdown-input"
      type="text"
      :placeholder="placeholder"
      @focus="showlist = true; remodeReadOnlyError()"
      autocomplete="off"
    />

    <div v-else @click="resetSelection" class="dropdown-selected">
      {{ selectedItem.name }}
    </div>
    <i class="fas fa-caret-down" @click="showToggle()"></i>
    <div v-if="showlist == true" class="dropdown-list" @keyup="nextItem">
      <ul ref="scrollContainer">
        <li
          @click="selectItem(item)"
          v-show="itemVisible(item)"
          v-for="(item, index) in itemList"
          :key="item.id"
          @keydown.enter="selectItem(matches[arrowCounter])"
          :class="{ 'active-item': arrowCounter === index }"
          class="dropdown-item"
          @keydown.esc="showlist = false"
          ref="options"
        >
          <label
            ><input class="d-none" type="checkbox" :value="item.id" />{{
              item.name
            }}</label
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "@/admin/directive/click-away.js";

export default {
  name: "DropDownFilter",
  props: {
    itemList: {
      type: Array,
      required: true,
    },
    value:{

    },
    placeholder: {
      type: String,
      default: "Choose an Option",
    },
  },
  data() {
    return {
      selectedItem: {},
      arrowCounter: 0,
      inputValue: "",
      apiLoaded: false,
      showlist: false,
      edit_flag: false,
      content:this.value,
    };
  },
  watch: {
    itemList:function(){
      if(this.itemList.length > 0){
        this.getSelected(this.content);
      }
    },
  },
  created() {
    if(this.value){
      this.getSelected(this.value);
    }
    document.addEventListener("keyup", this.nextItem);
  },

  methods: {
    nextItem(event) {
      event.preventDefault();
      if (event.keyCode == 38 && this.arrowCounter > 1) {
        this.arrowCounter--;
        this.fixScrolling();
      } else if (
        event.keyCode == 40 &&
        this.arrowCounter < this.itemList.length - 1
      ) {
        this.arrowCounter++;
        this.fixScrolling();
      }
    },
    fixScrolling() {
      if(this.showlist){
        if (this.$refs.options[this.arrowCounter]) {
          var liH = this.$refs.options[this.arrowCounter].clientHeight;
        }
        if (this.$refs.scrollContainer) {
          this.$refs.scrollContainer.scrollTop = liH * this.arrowCounter;
        }
      }
    },
    closeEvent: function () {
      if(this.showlist){
        this.edit_flag = false;
        this.getSelected(this.content);
        this.showlist = false;
        this.arrowCounter = 0;
      }
    },
    getSelected(value) {
      if (this.itemList != undefined && this.edit_flag == false) {
        for (let i = 0; i < this.itemList.length; i++) {
          if (this.itemList[i].id == value) {
            this.selectedItem = this.itemList[i];
            this.inputValue = this.itemList[i].name;
            this.edit_flag = true;
          }
        }
      }
    },
    showToggle() {
      this.showlist = !this.showlist;
    },
    optionChanged() {
      this.$emit("input", this.selectedItem.id);
    },
    
    resetSelection() {
      this.selectedItem = {};
      this.inputValue = "";
      this.showlist = true;
      this.$nextTick(() => this.$refs.dropdowninput.focus());
      this.$emit("on-item-reset");
    },
    remodeReadOnlyError() {
      $(".dropdown-input").attr("readonly", true);
    },
    selectItem(theItem) {
      this.selectedItem = theItem;
      this.content = theItem.id;
      this.$emit("input", this.content);
      this.inputValue = "";
      this.showlist = false;
      this.$emit("change", theItem.id);
    },
    itemVisible(item) {
      let currentName = item.name.toLowerCase();
      let currentInput = this.inputValue.toLowerCase();
      return currentName.includes(currentInput);
    },
  },
  destroyed() {
    document.removeEventListener("keyup", this.nextItem);
  },
};
</script>