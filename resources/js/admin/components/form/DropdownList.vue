<template>
  <div class="dropdown-field" v-if="itemList" v-click-outside="closeEvent">
    <input
      v-if="Object.keys(selectedItem).length === 0"
      ref="dropdowninput"
      v-model.trim="inputValue"
      class="dropdown-input"
      type="text"
      placeholder="Find country"
      @focus="showlist = true"
    />
    
    <div
      v-else
      @click="resetSelection"
      class="dropdown-selected"
    >
      {{ selectedItem.school_name }}
    </div>
    <div v-show="showlist" class="dropdown-list">
      <div
        @click="selectItem(item)"
        v-show="itemVisible(item)"
        v-for="item in itemList"
        :key="item.id"
        class="dropdown-item"
        
      >
        {{ item.school_name }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import clickOutside from "@/admin/directive/click-away.js";

export default {
  props: ["itemList", "selected"],
  data() {
    return {
      selectedItem: {},
      inputValue: "",
      apiLoaded: false,
      showlist: false,
      selectedItem: "",
    };
  },
  watch: {
    selectedItem: function () {
      this.optionChanged();
    },
  },
  mounted(){
    console.log(this.selected);
  },

  methods: {
    optionChanged() {
      this.$emit("update:option", this.selectedItem);
    },
    closeEvent: function () {
      // console.log("close event called");
      this.showlist = false;
    },
    resetSelection() {
      this.selectedItem = {};
      this.inputValue = '';
      console.log('hi');
      this.$nextTick(() => this.$refs.dropdowninput.focus());
      this.$emit("on-item-reset");
      this.showlist = true;
    },
    selectItem(theItem) {
      this.selectedItem = theItem;
      this.inputValue = "";
      this.$emit("on-item-selected", theItem);
      this.showlist = false;
    },
    itemVisible(item) {
      let currentName = item.school_name.toLowerCase();
      let currentInput = this.inputValue.toLowerCase();
      return currentName.includes(currentInput);
    },
    
  },
};
</script>