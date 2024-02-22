"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9864],{2347:(t,e,i)=>{i(70538).default.directive("click-outside",{bind:function(t,e,i){window.event=function(r){t==r.target||t.contains(r.target)||i.context[e.expression](r)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},34022:(t,e,i)=>{i.d(e,{Z:()=>o});const r={name:"CitySelectGBI",data:function(){return{list:[],selectedCity:""}},created:function(){var t=this;axios.get("/api/city").then((function(e){t.list=e.data.data}))},methods:{optionChanged:function(){this.$emit("update:option",this.selectedCity)}}};const o=(0,i(51900).Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCity,expression:"selectedCity"}],staticClass:"form-control select-field",on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedCity=e.target.multiple?i:i[0]},t.optionChanged]}},[i("option",{attrs:{value:"",disabled:"",hidden:""}},[t._v("Select City")]),t._v(" "),t._l(t.list,(function(e){return i("option",{key:e.id,domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)])}),[],!1,null,null,null).exports},20947:(t,e,i)=>{i.d(e,{Z:()=>o});const r={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const o=(0,i(51900).Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[t.url?i("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):i("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},35803:(t,e,i)=>{i.d(e,{Z:()=>o});const r={name:"FormButtonGBI",props:["loading"],components:{"back-button":i(20947).Z}};const o=(0,i(51900).Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-sm-9 text-center"},[i("back-button"),t._v(" "),i("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v(t._s(t.loading?"submitting":"submit"))])],2)],1)])}),[],!1,null,null,null).exports},79577:(t,e,i)=>{i.d(e,{Z:()=>n});i(2347);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const o={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},selectedId:void 0,value:{},placeholder:{type:String,default:"Type to search"}},data:function(){var t;return r(t={selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1},"selectedItem",""),r(t,"edit_flag",!1),t},watch:{selectedItem:function(){this.optionChanged()}},mounted:function(){document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},getSelected:function(){if(null!=this.itemList&&0==this.edit_flag)for(var t=0;t<this.itemList.length;t++)this.itemList[t].id==this.selectedId&&(this.selectedItem=this.itemList[t],this.inputValue=this.itemList[t].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("update:option",this.selectedItem)},closeEvent:function(){this.showlist&&(this.showlist=!1,this.arrowCounter=0)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.inputValue="",this.$emit("on-item-selected",t),this.showlist=!1},itemVisible:function(t){var e=t.name.toLowerCase(),i=this.inputValue.toLowerCase();return e.includes(i)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}};const n=(0,i(51900).Z)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.itemList?i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):i("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),i("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),null!=t.selectedId?i("span",[t._v(t._s(t.getSelected()))]):t._e(),t._v(" "),1==t.showlist&&null==t.selectedId?i("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[i("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,r){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===r},on:{click:function(i){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)]):t._e()]):t._e()}),[],!1,null,null,null).exports},85516:(t,e,i)=>{i.d(e,{Z:()=>o});const r={name:"FromLayoutGBI",data:function(){return{}}};const o=(0,i(51900).Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"content"},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row justify-content-around"},[i("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},96815:(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var r=i(50175),o=i(34022),n=i(35803),s=i(85516),a=i(79577);const l={name:"ListNewFlight",components:{CitySelect:o.Z,Form:r.Form,"has-error":r.HasError,"form-buttons":n.Z,"form-layout":s.Z,"dropdown-filter":a.Z},data:function(){return{row_input:"",flight_list:[],tour:"",city_list:[],form:new r.Form({tour_id:"",tour_code:"",flight_id:"",source:"",destination:"",flight_number:"",departure:"",arrival:"",price:""})}},created:function(){var t=this;axios.get("/api/flight").then((function(e){if(e)for(var i=0;i<e.data.length;i++)t.flight_list.push({name:e.data[i].name,id:e.data[i].id})})),axios.get("/api/tour/".concat(this.$route.params.id,"/edit")).then((function(e){t.tour=e.data})),this.cityList()},methods:{UpdatedFlight:function(t){this.form.flight_id=t.id},UpdatedSource:function(t){this.form.source=t.name},UpdatedDestination:function(t){this.form.destination=t.name},cityList:function(){var t=this;axios.get("/api/city").then((function(e){if(e)for(var i=0;i<e.data.data.length;i++)t.city_list.push({name:e.data.data[i].name,id:e.data.data[i].id})}))},addFlight:function(){var t=this;this.form.tour_id=this.$route.params.id,this.form.tour_code=this.tour.tour_id,this.form.post("/api/bookedflights").then((function(e){if(console.log(e),1==e.data)return t.$toast.fire({icon:"error",title:"Already Booked !!!"}),!1;t.$toast.fire({icon:"success",title:"Flight Added successfully"})})).catch((function(){}))},SourceUpdate:function(t){this.form.source=t},DestinationUpdate:function(t){this.form.destination=t},goBack:function(){this.$router.push("/booked-tour/".concat(this.$route.params.id))}}};const c=(0,i(51900).Z)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[i("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addFlight()}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"flight_id"}},[t._v("Airline name")]),t._v(" "),i("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.flight_list},on:{"update:option":t.UpdatedFlight}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"flight_id"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"flight_number"}},[t._v("Flight Number")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.flight_number,expression:"form.flight_number"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("flight_number")},attrs:{type:"text",placeholder:"Enter flight number"},domProps:{value:t.form.flight_number},on:{input:function(e){e.target.composing||t.$set(t.form,"flight_number",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"flight_number"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"source"}},[t._v("Source")]),t._v(" "),i("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.city_list},on:{"update:option":t.UpdatedSource}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"source"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"destination"}},[t._v("Destination")]),t._v(" "),i("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.city_list},on:{"update:option":t.UpdatedDestination}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"destination"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"departure"}},[t._v("Departure")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.departure,expression:"form.departure"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("departure")},attrs:{type:"datetime-local",placeholder:"Enter departure"},domProps:{value:t.form.departure},on:{input:function(e){e.target.composing||t.$set(t.form,"departure",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"departure"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"arrival"}},[t._v("Arrival")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.arrival,expression:"form.arrival"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("arrival")},attrs:{type:"datetime-local",placeholder:"Enter arrival"},domProps:{value:t.form.arrival},on:{input:function(e){e.target.composing||t.$set(t.form,"arrival",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"arrival"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"price"}},[t._v("Price")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("price")},attrs:{type:"number",placeholder:"Enter Price"},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"price"}})],1)])]),t._v(" "),i("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);