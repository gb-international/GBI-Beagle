"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8423],{2347:(t,e,r)=>{r(70538).default.directive("click-outside",{bind:function(t,e,r){window.event=function(o){t==o.target||t.contains(o.target)||r.context[e.expression](o)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},59809:(t,e,r)=>{r.d(e,{$:()=>o});var o=function(t){var e=t,r=new Date,o=new Date(e),n=r.getFullYear()-o.getFullYear(),s=r.getMonth()-o.getMonth(),a=r.getDate()-o.getDate();return(s<0||0===s&&r.getDate()<o.getDate())&&n--,s<0&&(s+=12),a<0&&(a+=30),n>=20}},96157:(t,e,r)=>{r.d(e,{Z:()=>s});var o=r(1519),n=r.n(o)()((function(t){return t[1]}));n.push([t.id,"input[type=password][data-v-0284745a]{height:53px}input[type=password][data-v-0284745a],select[data-v-0284745a]{background-color:#fff;border:0;color:#737879;display:block;font-size:15px;font-weight:600;margin-bottom:5px;width:100%}select[data-v-0284745a]{height:52px}",""]);const s=n},1519:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,o){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(o)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(n[a]=!0)}for(var i=0;i<t.length;i++){var l=[].concat(t[i]);o&&n[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),e.push(l))}},e}},93379:(t,e,r)=>{var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},s=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),a=[];function i(t){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===t){e=r;break}return e}function l(t,e){for(var r={},o=[],n=0;n<t.length;n++){var s=t[n],l=e.base?s[0]+e.base:s[0],c=r[l]||0,d="".concat(l," ").concat(c);r[l]=c+1;var u=i(d),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:d,updater:h(m,e),references:1}),o.push(d)}return o}function c(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var n=r.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=s(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function m(t,e,r,o){var n=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(e,n);else{var s=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function f(t,e,r){var o=r.css,n=r.media,s=r.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var p=null,v=0;function h(t,e){var r,o,n;if(e.singleton){var s=v++;r=p||(p=c(e)),o=m.bind(null,r,s,!1),n=m.bind(null,r,s,!0)}else r=c(e),o=f.bind(null,r,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var r=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<r.length;o++){var n=i(r[o]);a[n].references--}for(var s=l(t,e),c=0;c<r.length;c++){var d=i(r[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=s}}}},20947:(t,e,r)=>{r.d(e,{Z:()=>n});const o={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const n=(0,r(51900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[t.url?r("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):r("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},91178:(t,e,r)=>{r.d(e,{Z:()=>a});var o=r(20947),n=r(53116);const s={name:"FormButtonGBI",components:{"back-button":o.Z,"submit-button":n.Z}};const a=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-sm-9 text-center"},[r("back-button"),t._v(" "),r("submit-button")],1)])}),[],!1,null,null,null).exports},53116:(t,e,r)=>{r.d(e,{Z:()=>n});const o={name:"SubmitButtonGBI",data:function(){return{}}};const n=(0,r(51900).Z)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v("submit")])],2)}),[],!1,null,null,null).exports},79577:(t,e,r)=>{r.d(e,{Z:()=>s});r(2347);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const n={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},selectedId:void 0,value:{},placeholder:{type:String,default:"Type to search"}},data:function(){var t;return o(t={selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1},"selectedItem",""),o(t,"edit_flag",!1),t},watch:{selectedItem:function(){this.optionChanged()}},mounted:function(){document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},getSelected:function(){if(null!=this.itemList&&0==this.edit_flag)for(var t=0;t<this.itemList.length;t++)this.itemList[t].id==this.selectedId&&(this.selectedItem=this.itemList[t],this.inputValue=this.itemList[t].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("update:option",this.selectedItem)},closeEvent:function(){this.showlist&&(this.showlist=!1,this.arrowCounter=0)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.inputValue="",this.$emit("on-item-selected",t),this.showlist=!1},itemVisible:function(t){var e=t.name.toLowerCase(),r=this.inputValue.toLowerCase();return e.includes(r)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}};const s=(0,r(51900).Z)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.itemList?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):r("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),r("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),null!=t.selectedId?r("span",[t._v(t._s(t.getSelected()))]):t._e(),t._v(" "),1==t.showlist&&null==t.selectedId?r("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[r("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,o){return r("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===o},on:{click:function(r){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)]):t._e()]):t._e()}),[],!1,null,null,null).exports},85516:(t,e,r)=>{r.d(e,{Z:()=>n});const o={name:"FromLayoutGBI",data:function(){return{}}};const n=(0,r(51900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"content"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row justify-content-around"},[r("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},57586:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var o=r(50175),n=r(91178),s=r(85516),a=r(79577),i=r(59809);const l={name:"NewMember",components:{Form:o.Form,"has-error":o.HasError,"form-buttons":n.Z,"form-layout":s.Z,"dropdown-filter":a.Z},data:function(){return{role_list:[],departments:[],form:new o.Form({name:"",gender:"",email:"",password:"",c_password:"",phone_no:"",address:"",dob:"",role_id:"",department_id:""})}},created:function(){this.getRoles(),this.getDepartment()},methods:{getRoles:function(){var t=this;axios.get("/api/role").then((function(e){if(e)for(var r=0;r<e.data.length;r++)t.role_list.push({name:e.data[r].name,id:e.data[r].id})}))},getDepartment:function(){var t=this;axios.get("/api/departments").then((function(e){if(e)for(var r=0;r<e.data.length;r++)t.departments.push({name:e.data[r].name,id:e.data[r].id})}))},updateRole:function(t){this.form.role_id=t.id},updateDepartment:function(t){this.form.department_id=t.id},addMember:function(){var t=this;return 0==(0,i.$)(this.form.dob)?(this.$toast.fire({icon:"warning",title:"A GBI Member must be of age 20 or above."}),!1):10!==this.form.phone_no.length?(this.$toast.fire({icon:"warning",title:"Please enter a valid phone number."}),!1):void this.form.post("/api/members/create").then((function(e){t.$router.push("/list-member"),t.$toast.fire({icon:"success",title:"GBI Member Added Successfully"})})).catch((function(){}))}}};var c=r(93379),d=r.n(c),u=r(96157),m={insert:"head",singleton:!1};d()(u.Z,m);u.Z.locals;const f=(0,r(51900).Z)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[r("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addMember()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",placeholder:"Enter Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"gender"}},[t._v("Gender")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.gender,expression:"form.gender"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("gender")},attrs:{name:"gender",placeholder:"Select Gender"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"gender",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"M"}},[t._v("Male")]),t._v(" "),r("option",{attrs:{value:"F"}},[t._v("Female")])]),t._v(" "),r("has-error",{attrs:{form:t.form,field:"gender"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",placeholder:"Enter Email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phone_no"}},[t._v("Phone Number")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone_no,expression:"form.phone_no"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phone_no")},attrs:{type:"number",placeholder:"Enter Phone No",name:"phone_no"},domProps:{value:t.form.phone_no},on:{input:function(e){e.target.composing||t.$set(t.form,"phone_no",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"phone_no"}})],1)])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",placeholder:"Enter Password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"c_password"}},[t._v("Confirm Password")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.c_password,expression:"form.c_password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("c_password")},attrs:{type:"password",placeholder:"Enter Confirm Password",name:"c_password"},domProps:{value:t.form.c_password},on:{input:function(e){e.target.composing||t.$set(t.form,"c_password",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"c_password"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[t._v("Address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{type:"text",placeholder:"Enter Address",name:"address"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"address"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group date_input"},[r("label",{attrs:{for:"dob"}},[t._v("DOB")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.dob,expression:"form.dob"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("dob")},attrs:{type:"date",placeholder:"Enter dob",name:"journy"},domProps:{value:t.form.dob},on:{input:function(e){e.target.composing||t.$set(t.form,"dob",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"dob"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"role_id"}},[t._v("Department")]),t._v(" "),r("dropdown-filter",{staticClass:"mb-2",class:{"is-invalid":t.form.errors.has("department_id")},attrs:{itemList:t.departments},on:{"update:option":t.updateDepartment}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"department_id"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"role_id"}},[t._v("Role Assign")]),t._v(" "),r("dropdown-filter",{staticClass:"mb-2",class:{"is-invalid":t.form.errors.has("role_id")},attrs:{itemList:t.role_list},on:{"update:option":t.updateRole}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"role_id"}})],1)])]),t._v(" "),r("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,"0284745a",null).exports}}]);