"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8120],{2347:(t,e,i)=>{i(70538).default.directive("click-outside",{bind:function(t,e,i){window.event=function(n){t==n.target||t.contains(n.target)||i.context[e.expression](n)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},20947:(t,e,i)=>{i.d(e,{Z:()=>s});const n={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const s=(0,i(51900).Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[t.url?i("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):i("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},35803:(t,e,i)=>{i.d(e,{Z:()=>s});const n={name:"FormButtonGBI",props:["loading"],components:{"back-button":i(20947).Z}};const s=(0,i(51900).Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-sm-9 text-center"},[i("back-button"),t._v(" "),i("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v(t._s(t.loading?"submitting":"submit"))])],2)],1)])}),[],!1,null,null,null).exports},99310:(t,e,i)=>{i.d(e,{Z:()=>s});i(2347);const n={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},value:{},placeholder:{type:String,default:"Enter name to search"}},data:function(){return{selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1,edit_flag:!1,content:this.value}},watch:{itemList:function(){this.itemList.length>0&&this.getSelected(this.content)}},created:function(){this.value&&this.getSelected(this.value),document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},closeEvent:function(){this.showlist&&(this.edit_flag=!1,this.getSelected(this.content),this.showlist=!1,this.arrowCounter=0)},getSelected:function(t){if(null!=this.itemList&&0==this.edit_flag)for(var e=0;e<this.itemList.length;e++)this.itemList[e].id==t&&(this.selectedItem=this.itemList[e],this.inputValue=this.itemList[e].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("input",this.selectedItem.id)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.content=t.id,this.$emit("input",this.content),this.inputValue="",this.showlist=!1,this.$emit("change",t.id)},itemVisible:function(t){var e=t.name.toLowerCase(),i=this.inputValue.toLowerCase();return e.includes(i)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}};const s=(0,i(51900).Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.itemList?i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):i("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),i("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),1==t.showlist?i("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[i("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,n){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===n},on:{click:function(i){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[i("label",[i("input",{staticClass:"d-none",attrs:{type:"checkbox"},domProps:{value:e.id}}),t._v(t._s(e.name))])])})),0)]):t._e()]):t._e()}),[],!1,null,null,null).exports},85516:(t,e,i)=>{i.d(e,{Z:()=>s});const n={name:"FromLayoutGBI",data:function(){return{}}};const s=(0,i(51900).Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"content"},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row justify-content-around"},[i("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},14463:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var n=i(50175),s=i(35803),o=i(85516),r=i(99310);const a={name:"NewBus",components:{Form:n.Form,"has-error":n.HasError,"form-buttons":s.Z,"form-layout":o.Z,"dropdown-filter":r.Z},data:function(){return{seater_list:[{name:"10",id:"10"},{name:"20",id:"20"},{name:"30",id:"30"},{name:"35",id:"35"},{name:"40",id:"40"},{name:"45",id:"45"},{name:"50",id:"50"}],seat_type:[{name:"2*2",id:"2*2"},{name:"3*2",id:"3*2"},{name:"Sigle seater",id:"Sigle seater"},{name:"Multi seater",id:"Multi seater"}],form:new n.Form({company_name:"",seater:"",seat_type:"",price:""})}},created:function(){this.editBus()},methods:{editBus:function(){var t=this;axios.get("/api/bus/".concat(this.$route.params.id,"/edit")).then((function(e){t.form.fill(e.data)}))},UpdateBus:function(){var t=this;this.form.put("/api/bus/".concat(this.$route.params.id)).then((function(e){t.$toast.fire({icon:"success",title:"Successfully Updated"})})).catch((function(){}))}}};const l=(0,i(51900).Z)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[i("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.UpdateBus()}}},[t.form.company_name?i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"company_name"}},[t._v("Bus Company name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.company_name,expression:"form.company_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("company_name")},attrs:{type:"text",placeholder:"Enter name"},domProps:{value:t.form.company_name},on:{input:function(e){e.target.composing||t.$set(t.form,"company_name",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"company_name"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"seater"}},[t._v("Seater")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.seater,expression:"form.seater"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("seater")},attrs:{type:"number",min:"2",placeholder:"Enter seater"},domProps:{value:t.form.seater},on:{input:function(e){e.target.composing||t.$set(t.form,"seater",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"seater"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"seat_type"}},[t._v("Seat type")]),t._v(" "),i("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.seat_type},model:{value:t.form.seat_type,callback:function(e){t.$set(t.form,"seat_type",e)},expression:"form.seat_type"}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"seat_type"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"price"}},[t._v("Price")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("price")},attrs:{type:"number",min:"0",placeholder:"Enter price",rows:"5"},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"price"}})],1)])]):t._e(),t._v(" "),i("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);