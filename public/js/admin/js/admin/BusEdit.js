"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8120],{2347:(t,e,n)=>{n(70538).default.directive("click-outside",{bind:function(t,e,n){window.event=function(i){t==i.target||t.contains(i.target)||n.context[e.expression](i)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},20947:(t,e,n)=>{n.d(e,{Z:()=>s});const i={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const s=(0,n(51900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.url?n("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):n("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},91178:(t,e,n)=>{n.d(e,{Z:()=>r});var i=n(20947),s=n(53116);const o={name:"FormButtonGBI",components:{"back-button":i.Z,"submit-button":s.Z}};const r=(0,n(51900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-sm-9 text-center"},[n("back-button"),t._v(" "),n("submit-button")],1)])}),[],!1,null,null,null).exports},53116:(t,e,n)=>{n.d(e,{Z:()=>s});const i={name:"SubmitButtonGBI",data:function(){return{}}};const s=(0,n(51900).Z)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v("submit")])],2)}),[],!1,null,null,null).exports},99310:(t,e,n)=>{n.d(e,{Z:()=>s});n(2347);const i={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},value:{},placeholder:{type:String,default:"Enter name to search"}},data:function(){return{selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1,edit_flag:!1,content:this.value}},watch:{itemList:function(){this.itemList.length>0&&this.getSelected(this.content)}},created:function(){this.value&&this.getSelected(this.value),document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},closeEvent:function(){this.showlist&&(this.edit_flag=!1,this.getSelected(this.content),this.showlist=!1,this.arrowCounter=0)},getSelected:function(t){if(null!=this.itemList&&0==this.edit_flag)for(var e=0;e<this.itemList.length;e++)this.itemList[e].id==t&&(this.selectedItem=this.itemList[e],this.inputValue=this.itemList[e].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("input",this.selectedItem.id)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.content=t.id,this.$emit("input",this.content),this.inputValue="",this.showlist=!1,this.$emit("change",t.id)},itemVisible:function(t){var e=t.name.toLowerCase(),n=this.inputValue.toLowerCase();return e.includes(n)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}};const s=(0,n(51900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.itemList?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):n("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),n("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),1==t.showlist?n("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[n("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,i){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===i},on:{click:function(n){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[n("label",[n("input",{staticClass:"d-none",attrs:{type:"checkbox"},domProps:{value:e.id}}),t._v(t._s(e.name))])])})),0)]):t._e()]):t._e()}),[],!1,null,null,null).exports},85516:(t,e,n)=>{n.d(e,{Z:()=>s});const i={name:"FromLayoutGBI",data:function(){return{}}};const s=(0,n(51900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-around"},[n("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},10322:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var i=n(50175),s=n(91178),o=n(85516),r=n(99310);const a={name:"NewBus",components:{Form:i.Form,"has-error":i.HasError,"form-buttons":s.Z,"form-layout":o.Z,"dropdown-filter":r.Z},data:function(){return{seater_list:[{name:"10",id:"10"},{name:"20",id:"20"},{name:"30",id:"30"},{name:"35",id:"35"},{name:"40",id:"40"},{name:"45",id:"45"},{name:"50",id:"50"}],seat_type:[{name:"2*2",id:"2*2"},{name:"3*2",id:"3*2"},{name:"Sigle seater",id:"Sigle seater"},{name:"Multi seater",id:"Multi seater"}],form:new i.Form({company_name:"",seater:"",seat_type:"",price:""})}},created:function(){this.editBus()},methods:{editBus:function(){var t=this;axios.get("/api/bus/".concat(this.$route.params.id,"/edit")).then((function(e){t.form.fill(e.data)}))},UpdateBus:function(){var t=this;this.form.put("/api/bus/".concat(this.$route.params.id)).then((function(e){t.$toast.fire({icon:"success",title:"Successfully Updated"})})).catch((function(){}))}}};const l=(0,n(51900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[n("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.UpdateBus()}}},[t.form.company_name?n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"company_name"}},[t._v("Bus Company name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.company_name,expression:"form.company_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("company_name")},attrs:{type:"text",placeholder:"Enter name"},domProps:{value:t.form.company_name},on:{input:function(e){e.target.composing||t.$set(t.form,"company_name",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"company_name"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"seater"}},[t._v("Seater")]),t._v(" "),n("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.seater_list},model:{value:t.form.seater,callback:function(e){t.$set(t.form,"seater","string"==typeof e?e.trim():e)},expression:"form.seater"}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"seater"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"seat_type"}},[t._v("Seat type")]),t._v(" "),n("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.seat_type},model:{value:t.form.seat_type,callback:function(e){t.$set(t.form,"seat_type",e)},expression:"form.seat_type"}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"seat_type"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"price"}},[t._v("Price")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("price")},attrs:{type:"number",placeholder:"Enter price",rows:"5"},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"price"}})],1)])]):t._e(),t._v(" "),n("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);