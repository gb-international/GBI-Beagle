"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2646],{2347:(t,e,n)=>{n(70538).default.directive("click-outside",{bind:function(t,e,n){window.event=function(r){t==r.target||t.contains(r.target)||n.context[e.expression](r)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},59809:(t,e,n)=>{n.d(e,{$:()=>r});var r=function(t){var e=t,n=new Date,r=new Date(e),o=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth(),a=n.getDate()-r.getDate();return(i<0||0===i&&n.getDate()<r.getDate())&&o--,i<0&&(i+=12),a<0&&(a+=30),o>=20}},74880:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(1519),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"select[data-v-0b334e3c]{background-color:#fff;border:0;color:#737879;display:block;font-size:15px;font-weight:600;height:52px;margin-bottom:5px;width:100%}",""]);const i=o},1519:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},93379:(t,e,n)=>{var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],l=e.base?i[0]+e.base:i[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=s(d),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:d,updater:v(m,e),references:1}),r.push(d)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function m(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(t,e){var n,r,o;if(e.singleton){var i=h++;n=p||(p=c(e)),r=m.bind(null,n,i,!1),o=m.bind(null,n,i,!0)}else n=c(e),r=f.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=l(t,e),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},20947:(t,e,n)=>{n.d(e,{Z:()=>o});const r={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const o=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.url?n("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):n("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},91178:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(20947),o=n(53116);const i={name:"FormButtonGBI",components:{"back-button":r.Z,"submit-button":o.Z}};const a=(0,n(51900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-sm-9 text-center"},[n("back-button"),t._v(" "),n("submit-button")],1)])}),[],!1,null,null,null).exports},53116:(t,e,n)=>{n.d(e,{Z:()=>o});const r={name:"SubmitButtonGBI",data:function(){return{}}};const o=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v("submit")])],2)}),[],!1,null,null,null).exports},99310:(t,e,n)=>{n.d(e,{Z:()=>o});n(2347);const r={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},value:{},placeholder:{type:String,default:"Enter name to search"}},data:function(){return{selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1,edit_flag:!1,content:this.value}},watch:{itemList:function(){this.itemList.length>0&&this.getSelected(this.content)}},created:function(){this.value&&this.getSelected(this.value),document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},closeEvent:function(){this.showlist&&(this.edit_flag=!1,this.getSelected(this.content),this.showlist=!1,this.arrowCounter=0)},getSelected:function(t){if(null!=this.itemList&&0==this.edit_flag)for(var e=0;e<this.itemList.length;e++)this.itemList[e].id==t&&(this.selectedItem=this.itemList[e],this.inputValue=this.itemList[e].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("input",this.selectedItem.id)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.content=t.id,this.$emit("input",this.content),this.inputValue="",this.showlist=!1,this.$emit("change",t.id)},itemVisible:function(t){var e=t.name.toLowerCase(),n=this.inputValue.toLowerCase();return e.includes(n)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}};const o=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.itemList?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):n("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),n("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),1==t.showlist?n("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[n("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,r){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===r},on:{click:function(n){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[n("label",[n("input",{staticClass:"d-none",attrs:{type:"checkbox"},domProps:{value:e.id}}),t._v(t._s(e.name))])])})),0)]):t._e()]):t._e()}),[],!1,null,null,null).exports},85516:(t,e,n)=>{n.d(e,{Z:()=>o});const r={name:"FromLayoutGBI",data:function(){return{}}};const o=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-around"},[n("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},64549:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var r=n(50175),o=n(91178),i=n(85516),a=n(99310),s=n(59809);const l={name:"NewMember",components:{Form:r.Form,"has-error":r.HasError,"form-buttons":o.Z,"form-layout":i.Z,"dropdown-list":a.Z},data:function(){return{role_list:[],departments:[],form:new r.Form({name:"",gender:"",email:"",phone_no:"",address:"",dob:"",role_id:"",old_role:"",department_id:""})}},created:function(){this.getData(),this.getRoles(),this.getDepartment()},methods:{getRoles:function(){var t=this;axios.get("/api/role").then((function(e){if(e)for(var n=0;n<e.data.length;n++)t.role_list.push({name:e.data[n].name,id:e.data[n].id})}))},getDepartment:function(){var t=this;axios.get("/api/departments").then((function(e){if(e)for(var n=0;n<e.data.length;n++)t.departments.push({name:e.data[n].name,id:e.data[n].id})}))},updateRole:function(t){this.form.role_id=t.id},updateDepartment:function(t){this.form.department_id=t.id},getData:function(){var t=this;axios.get("/api/members/".concat(this.$route.params.id,"/edit")).then((function(e){t.form.fill(e.data.data),t.form.role_id=e.data.data.role,t.form.department_id=e.data.data.department}))},updateMember:function(){var t=this;return console.log(this.form),0==(0,s.$)(this.form.dob)?(this.$toast.fire({icon:"warning",title:"A GBI Member must be of age 20 or above."}),!1):10!==this.form.phone_no.length?(this.$toast.fire({icon:"warning",title:"Please enter a valid phone number."}),!1):(console.log(this.form.gender),void this.form.put("/api/members/".concat(this.$route.params.id)).then((function(e){t.$router.push("/list-member"),t.$toast.fire({icon:"success",title:"GBI Member Update Successfully"})})).catch((function(){})))}}};var c=n(93379),d=n.n(c),u=n(74880),m={insert:"head",singleton:!1};d()(u.Z,m);u.Z.locals;const f=(0,n(51900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[n("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.updateMember()}}},[t.form.name?n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",placeholder:"Enter Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"gender"}},[t._v("Gender")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.form.gender,expression:"form.gender"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("gender")},attrs:{name:"gender",placeholder:"Select Gender"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"gender",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"M"}},[t._v("Male")]),t._v(" "),n("option",{attrs:{value:"F"}},[t._v("Female")])]),t._v(" "),n("has-error",{attrs:{form:t.form,field:"gender"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",placeholder:"Enter Email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"phone_no"}},[t._v("Phone Number")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone_no,expression:"form.phone_no"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phone_no")},attrs:{type:"number",placeholder:"Enter Phone No",name:"phone_no"},domProps:{value:t.form.phone_no},on:{input:function(e){e.target.composing||t.$set(t.form,"phone_no",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"phone_no"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group date_input"},[n("label",{attrs:{for:"dob"}},[t._v("DOB")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dob,expression:"form.dob"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("dob")},attrs:{type:"date",placeholder:"Enter dob",name:"journy"},domProps:{value:t.form.dob},on:{input:function(e){e.target.composing||t.$set(t.form,"dob",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"dob"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"role_id"}},[t._v("Department")]),t._v(" "),n("dropdown-list",{staticClass:"mb-2",class:{"is-invalid":t.form.errors.has("department_id")},attrs:{itemList:t.departments},model:{value:t.form.department_id,callback:function(e){t.$set(t.form,"department_id",e)},expression:"form.department_id"}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"department_id"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"role_id"}},[t._v("Role Assign")]),t._v(" "),n("dropdown-list",{staticClass:"mb-2",class:{"is-invalid":t.form.errors.has("role_id")},attrs:{itemList:t.role_list},model:{value:t.form.role_id,callback:function(e){t.$set(t.form,"role_id",e)},expression:"form.role_id"}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"role_id"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-8"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"address"}},[t._v("Address")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{placeholder:"Enter Address",name:"address"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"address"}})],1)])]):t._e(),t._v(" "),n("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,"0b334e3c",null).exports}}]);