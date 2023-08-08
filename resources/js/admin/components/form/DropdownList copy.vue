<template>
  <div class="dropdown-field" v-if="itemList" v-click-outside="closeEvent">
    <input
      v-if="Object.keys(selectedItem).length === 0"
      ref="dropdowninput"
      v-model.trim="inputValue"
      class="form-control dropdown-input"
      type="text"
      :placeholder="placeholder"
      @focus="showlist = true"
      @click="remodeReadOnlyError()"
      autocomplete="off"
      
    />
    
    <div
      v-else
      @click="resetSelection"
      class="dropdown-selected"
    >
      {{ selectedItem.name }}
    </div>
    <i class="fas fa-caret-down" @click="showToggle()"></i>
    <span v-if="selectedId != undefined">{{ getSelected() }}</span>
    <div v-if="showlist== true && selectedId == undefined" class="dropdown-list" @keyup='nextItem'>
      <ul ref="scrollContainer">
        <li
          @click="selectItem(item)"
          v-show="itemVisible(item)"
          v-for="(item,index) in itemList"
          :key="item.id"
          @keydown.enter="selectItem(matches[arrowCounter ])"
          :class='{"active-item": arrowCounter  === index}'
          class="dropdown-item"
          @keydown.esc="showlist = false"
          ref="options"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "@/admin/directive/click-away.js";

export default {
  name:"DropDownFilter",
  props: {
    itemList:{
      type:Array,
      required:true
    },
    select:{
      required:true
    },
    placeholder:{
      type:String,
      default:'Enter name to search'
    }
  },
  data() {
    return {
      selectedItem: {},
      arrowCounter :0,
      inputValue: "",
      apiLoaded: false,
      showlist: false,
      edit_flag:false,
    };
  },
  watch: {
    selectedItem: function () {
      this.optionChanged();
    }
  },
  mounted () {
    document.addEventListener("keyup", this.nextItem);
  },

  methods: {
    nextItem(event) {
       event.preventDefault()
      if (event.keyCode == 38 && this.arrowCounter  > 1) {
        this.arrowCounter --;
         this.fixScrolling();
      } else if (event.keyCode == 40 && this.arrowCounter  < this.itemList.length-1) {
        this.arrowCounter ++;
         this.fixScrolling();
      }
    },
    fixScrolling(){
        if(this.$refs.options[this.arrowCounter]){
          var liH = this.$refs.options[this.arrowCounter].clientHeight;
        }
        if(this.$refs.scrollContainer){
          this.$refs.scrollContainer.scrollTop = liH * this.arrowCounter;
        }
    },
    getSelected(){
      if(this.itemList != undefined && this.edit_flag == false){
        for(let i=0;i<this.itemList.length; i++){
          if(this.itemList[i].id == this.selectedId){
            this.selectedItem = this.itemList[i];
            this.inputValue = this.itemList[i].name;
            this.edit_flag = true;
          }
        }
      }
    },
    showToggle(){
      this.showlist = !this.showlist;
    },
    optionChanged() {
      if(this.select == 'id'){
        this.$emit("input", this.selectedItem.id);
      }else{
        this.$emit("input",this.selectedItem.name);
      }
    },
    closeEvent: function () {
      // console.log("close event called");
      this.showlist = false;
      this.arrowCounter  = 0;
    },
    resetSelection() {
      this.selectedItem = {};
      this.inputValue = '';
      this.showlist = true;
      this.$nextTick(() => this.$refs.dropdowninput.focus());
      this.$emit("on-item-reset");
    },
    remodeReadOnlyError(){
      $(".dropdown-input").attr('readonly',false);
    },
    selectItem(theItem) {
      this.selectedItem = theItem;
      this.inputValue = "";
      this.$emit("on-item-selected", theItem);
      this.showlist = false;
    },
    itemVisible(item) {
      let currentName = item.name.toLowerCase();
      let currentInput = this.inputValue.toLowerCase();
      return currentName.includes(currentInput);
    },
    
  },
  destroyed() {
    document.removeEventListener("keyup", this.nextItem);
  }
};
</script>