"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8053],{2347:(t,e,i)=>{i(70538).default.directive("click-outside",{bind:function(t,e,i){window.event=function(s){t==s.target||t.contains(s.target)||i.context[e.expression](s)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},20947:(t,e,i)=>{i.d(e,{Z:()=>r});const s={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const r=(0,i(51900).Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[t.url?i("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):i("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},35803:(t,e,i)=>{i.d(e,{Z:()=>r});const s={name:"FormButtonGBI",props:["loading"],components:{"back-button":i(20947).Z}};const r=(0,i(51900).Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-sm-9 text-center"},[i("back-button"),t._v(" "),i("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v(t._s(t.loading?"submitting":"submit"))])],2)],1)])}),[],!1,null,null,null).exports},99310:(t,e,i)=>{i.d(e,{Z:()=>r});i(2347);const s={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},value:{},placeholder:{type:String,default:"Enter name to search"}},data:function(){return{selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1,edit_flag:!1,content:this.value}},watch:{itemList:function(){this.itemList.length>0&&this.getSelected(this.content)}},created:function(){this.value&&this.getSelected(this.value),document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},closeEvent:function(){this.showlist&&(this.edit_flag=!1,this.getSelected(this.content),this.showlist=!1,this.arrowCounter=0)},getSelected:function(t){if(null!=this.itemList&&0==this.edit_flag)for(var e=0;e<this.itemList.length;e++)this.itemList[e].id==t&&(this.selectedItem=this.itemList[e],this.inputValue=this.itemList[e].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("input",this.selectedItem.id)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.content=t.id,this.$emit("input",this.content),this.inputValue="",this.showlist=!1,this.$emit("change",t.id)},itemVisible:function(t){var e=t.name.toLowerCase(),i=this.inputValue.toLowerCase();return e.includes(i)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}};const r=(0,i(51900).Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.itemList?i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):i("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),i("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),1==t.showlist?i("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[i("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,s){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===s},on:{click:function(i){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[i("label",[i("input",{staticClass:"d-none",attrs:{type:"checkbox"},domProps:{value:e.id}}),t._v(t._s(e.name))])])})),0)]):t._e()]):t._e()}),[],!1,null,null,null).exports},85516:(t,e,i)=>{i.d(e,{Z:()=>r});const s={name:"FromLayoutGBI",data:function(){return{}}};const r=(0,i(51900).Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"content"},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row justify-content-around"},[i("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},86959:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});var s=i(50175),r=i(35803),o=i(85516),a=i(99310);const n={name:"NewSightseeing",components:{Form:s.Form,"has-error":s.HasError,"form-buttons":r.Z,"form-layout":o.Z,"dropdown-list":a.Z},data:function(){return{img_image:"",options:[],city_list:[],form:new s.Form({name:"",state_id:"",city_id:"",image:"",alt:"",adult_price:"",child_price:"",address:"",description:""})}},watch:{"form.state_id":function(){this.cityData(this.form.state_id)}},mounted:function(){this.sightSeeing()},methods:{stateData:function(){var t=this;axios.get("/api/state").then((function(e){e.data&&(t.options=[],t.options=e.data)}))},cityData:function(t){var e=this;axios.get("/api/state-city/"+t).then((function(t){t.data&&(e.city_list=[],e.city_list=t.data)}))},sightSeeing:function(){var t=this;axios.get("/api/sightseeings/".concat(this.$route.params.id,"/edit")).then((function(e){t.form.fill(e.data),t.img_image=t.form.image,t.stateData()}))},updateSightseeing:function(){var t=this;this.form.put("/api/sightseeings/".concat(this.$route.params.id)).then((function(e){console.log(e),t.$toast.fire({icon:"success",title:"Successfully Updated"})})).catch((function(){}))},changeDetailPhoto:function(t){var e=this,i=t.target.files[0],s=new FileReader;s.onload=function(t){e.form.image=t.target.result,e.form.alt=i.name,e.img_image=t.target.result},s.readAsDataURL(i)},StateUpdate:function(t){this.form.state_id=t.id},CityUpdate:function(t){this.form.city_id=t.id}}};const l=(0,i(51900).Z)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[i("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.updateSightseeing()}}},[t.form.state_id?i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"state"}},[t._v("State")]),t._v(" "),i("dropdown-list",{staticClass:"mb-2",attrs:{itemList:t.options},model:{value:t.form.state_id,callback:function(e){t.$set(t.form,"state_id",e)},expression:"form.state_id"}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"state_id"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"city"}},[t._v("City")]),t._v(" "),i("dropdown-list",{staticClass:"mb-2",attrs:{itemList:t.city_list},model:{value:t.form.city_id,callback:function(e){t.$set(t.form,"city_id",e)},expression:"form.city_id"}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"city_id"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"name"}},[t._v("Sightseeing Name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:"Enter Sightseeing Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"address"}},[t._v("Address")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{type:"text",placeholder:"Enter Address",id:"address"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"address"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"adult_price"}},[t._v("Ticket ( Adult Price )")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.adult_price,expression:"form.adult_price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("adult_price")},attrs:{type:"number",placeholder:"Enter Adult price",id:"adult_price"},domProps:{value:t.form.adult_price},on:{input:function(e){e.target.composing||t.$set(t.form,"adult_price",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"adult_price"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"child_price"}},[t._v("Ticket ( Child Price )")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.child_price,expression:"form.child_price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("child_price")},attrs:{type:"number",placeholder:"Enter child price",id:"child_price"},domProps:{value:t.form.child_price},on:{input:function(e){e.target.composing||t.$set(t.form,"child_price",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"child_price"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"description"}},[t._v("Description")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"form-control textarea",class:{"is-invalid":t.form.errors.has("description")},attrs:{rows:"3",placeholder:"Enter Description",id:"description"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"description"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"image"}},[t._v("Image")]),t._v(" "),i("br"),t._v(" "),i("input",{class:{"is-invalid":t.form.errors.has("image")},attrs:{name:"image",type:"file"},on:{change:function(e){return t.changeDetailPhoto(e)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"image"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-2"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"image"}}),t._v(" "),i("br"),t._v(" "),i("img",{staticClass:"image width-140",attrs:{src:t.img_image,alt:""}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"image"}})],1)])]):t._e(),t._v(" "),i("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);