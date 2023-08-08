"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4358],{2347:(t,e,o)=>{o(70538).default.directive("click-outside",{bind:function(t,e,o){window.event=function(i){t==i.target||t.contains(i.target)||o.context[e.expression](i)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},20947:(t,e,o)=>{o.d(e,{Z:()=>n});const i={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const n=(0,o(51900).Z)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[t.url?o("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):o("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},91178:(t,e,o)=>{o.d(e,{Z:()=>s});var i=o(20947),n=o(53116);const r={name:"FormButtonGBI",components:{"back-button":i.Z,"submit-button":n.Z}};const s=(0,o(51900).Z)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-sm-9 text-center"},[o("back-button"),t._v(" "),o("submit-button")],1)])}),[],!1,null,null,null).exports},53116:(t,e,o)=>{o.d(e,{Z:()=>n});const i={name:"SubmitButtonGBI",data:function(){return{}}};const n=(0,o(51900).Z)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v("submit")])],2)}),[],!1,null,null,null).exports},79577:(t,e,o)=>{o.d(e,{Z:()=>r});o(2347);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const n={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},selectedId:void 0,value:{},placeholder:{type:String,default:"Type to search"}},data:function(){var t;return i(t={selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1},"selectedItem",""),i(t,"edit_flag",!1),t},watch:{selectedItem:function(){this.optionChanged()}},mounted:function(){document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},getSelected:function(){if(null!=this.itemList&&0==this.edit_flag)for(var t=0;t<this.itemList.length;t++)this.itemList[t].id==this.selectedId&&(this.selectedItem=this.itemList[t],this.inputValue=this.itemList[t].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("update:option",this.selectedItem)},closeEvent:function(){this.showlist&&(this.showlist=!1,this.arrowCounter=0)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.inputValue="",this.$emit("on-item-selected",t),this.showlist=!1},itemVisible:function(t){var e=t.name.toLowerCase(),o=this.inputValue.toLowerCase();return e.includes(o)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}};const r=(0,o(51900).Z)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.itemList?o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):o("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),o("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),null!=t.selectedId?o("span",[t._v(t._s(t.getSelected()))]):t._e(),t._v(" "),1==t.showlist&&null==t.selectedId?o("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[o("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,i){return o("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===i},on:{click:function(o){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)]):t._e()]):t._e()}),[],!1,null,null,null).exports},85516:(t,e,o)=>{o.d(e,{Z:()=>n});const i={name:"FromLayoutGBI",data:function(){return{}}};const n=(0,o(51900).Z)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"content"},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row justify-content-around"},[o("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},97811:(t,e,o)=>{o.r(e),o.d(e,{default:()=>c});var i=o(50175),n=o(91178),r=o(85516),s=o(79577);const a={name:"ListNewHOtels",components:{Form:i.Form,"has-error":i.HasError,"form-buttons":n.Z,"form-layout":r.Z,"dropdown-filter":s.Z},data:function(){return{row_input:"",hotel_list:[],tour:"",form:new i.Form({tour_id:"",tour_code:"",hotel_id:"",check_in:"",check_out:"",price:""})}},created:function(){this.hotelData(),this.tourData()},methods:{hotelData:function(){var t=this;axios.get("/api/hotel").then((function(e){if(e)for(var o=0;o<e.data.length;o++)t.hotel_list.push({name:e.data[o].name,id:e.data[o].id})}))},UpdatedItem:function(t){this.form.hotel_id=t.id},tourData:function(){var t=this;axios.get("/api/tour/".concat(this.$route.params.id,"/edit")).then((function(e){t.tour=e.data}))},addHotel:function(){var t=this;this.form.tour_id=this.$route.params.id,this.form.tour_code=this.tour.tour_id,this.form.post("/api/bookedhotels").then((function(e){if(1==e.data)return t.$toast.fire({icon:"error",title:"Tour Manager already going on this tour !!!"}),!1;t.$toast.fire({icon:"success",title:"Hotel Added successfully"})})).catch((function(){}))},goBack:function(){this.$router.push("/booked-tour/".concat(this.$route.params.id))}}};const c=(0,o(51900).Z)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[o("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addHotel()}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"name"}},[t._v("Hotel Name")]),t._v(" "),o("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.hotel_list},on:{"update:option":t.UpdatedItem}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"check_in"}},[t._v("Check In")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.check_in,expression:"form.check_in"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("check_in")},attrs:{type:"datetime-local",placeholder:"Enter Salary Per Day",name:"check_in"},domProps:{value:t.form.check_in},on:{input:function(e){e.target.composing||t.$set(t.form,"check_in",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"check_in"}})],1)]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"check_out"}},[t._v("Check Out")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.check_out,expression:"form.check_out"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("check_out")},attrs:{type:"datetime-local",placeholder:"Enter check Out",name:"check_out"},domProps:{value:t.form.check_out},on:{input:function(e){e.target.composing||t.$set(t.form,"check_out",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"check_out"}})],1)])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"price"}},[t._v("Price")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("price")},attrs:{type:"number",placeholder:"Enter Price"},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"price"}})],1)])]),t._v(" "),o("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);