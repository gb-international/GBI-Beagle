"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8423],{2347:(e,t,r)=>{r(70538).default.directive("click-outside",{bind:function(e,t,r){window.event=function(o){e==o.target||e.contains(o.target)||r.context[t.expression](o)},document.body.addEventListener("click",window.event)},unbind:function(e){document.body.removeEventListener("click",window.event)}})},59809:(e,t,r)=>{r.d(t,{$:()=>o});var o=function(e){var t=e,r=new Date,o=new Date(t),n=r.getFullYear()-o.getFullYear(),s=r.getMonth()-o.getMonth(),a=r.getDate()-o.getDate();return(s<0||0===s&&r.getDate()<o.getDate())&&n--,s<0&&(s+=12),a<0&&(a+=30),n>=20}},96157:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(1519),n=r.n(o)()((function(e){return e[1]}));n.push([e.id,"input[type=password][data-v-0284745a]{height:53px}input[type=password][data-v-0284745a],select[data-v-0284745a]{background-color:#fff;border:0;color:#737879;display:block;font-size:15px;font-weight:600;margin-bottom:5px;width:100%}select[data-v-0284745a]{height:52px}",""]);const s=n},1519:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(n[a]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);o&&n[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},93379:(e,t,r)=>{var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},s=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function i(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},o=[],n=0;n<e.length;n++){var s=e[n],l=t.base?s[0]+t.base:s[0],c=r[l]||0,d="".concat(l," ").concat(c);r[l]=c+1;var u=i(d),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:d,updater:h(m,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var n=r.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=s(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,r,o){var n=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,n);else{var s=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function f(e,t,r){var o=r.css,n=r.media,s=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,v=0;function h(e,t){var r,o,n;if(t.singleton){var s=v++;r=p||(p=c(t)),o=m.bind(null,r,s,!1),n=m.bind(null,r,s,!0)}else r=c(t),o=f.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<r.length;o++){var n=i(r[o]);a[n].references--}for(var s=l(e,t),c=0;c<r.length;c++){var d=i(r[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=s}}}},20947:(e,t,r)=>{r.d(t,{Z:()=>n});const o={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const n=(0,r(51900).Z)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e.url?r("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:e.url},on:{click:function(t){return e.goBack()}}},[e._t("default",[e._v("Back")])],2):r("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(t){return e.goBack()}}},[e._t("default",[e._v("Back")])],2)],1)}),[],!1,null,null,null).exports},35803:(e,t,r)=>{r.d(t,{Z:()=>n});const o={name:"FormButtonGBI",props:["loading"],components:{"back-button":r(20947).Z}};const n=(0,r(51900).Z)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-sm-9 text-center"},[r("back-button"),e._v(" "),r("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[e._t("default",[e._v(e._s(e.loading?"submitting":"submit"))])],2)],1)])}),[],!1,null,null,null).exports},79577:(e,t,r)=>{r.d(t,{Z:()=>s});r(2347);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const n={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},selectedId:void 0,value:{},placeholder:{type:String,default:"Type to search"}},data:function(){var e;return o(e={selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1},"selectedItem",""),o(e,"edit_flag",!1),e},watch:{selectedItem:function(){this.optionChanged()}},mounted:function(){document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(e){e.preventDefault(),38==e.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==e.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var e=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=e*this.arrowCounter)}},getSelected:function(){if(null!=this.itemList&&0==this.edit_flag)for(var e=0;e<this.itemList.length;e++)this.itemList[e].id==this.selectedId&&(this.selectedItem=this.itemList[e],this.inputValue=this.itemList[e].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("update:option",this.selectedItem)},closeEvent:function(){this.showlist&&(this.showlist=!1,this.arrowCounter=0)},resetSelection:function(){var e=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return e.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(e){this.selectedItem=e,this.inputValue="",this.$emit("on-item-selected",e),this.showlist=!1},itemVisible:function(e){var t=e.name.toLowerCase(),r=this.inputValue.toLowerCase();return t.includes(r)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}};const s=(0,r(51900).Z)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.itemList?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(e.selectedItem).length?r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:e.placeholder,autocomplete:"off"},domProps:{value:e.inputValue},on:{focus:function(t){e.showlist=!0},click:function(t){return e.remodeReadOnlyError()},input:function(t){t.target.composing||(e.inputValue=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}):r("div",{staticClass:"dropdown-selected",on:{click:e.resetSelection}},[e._v("\n    "+e._s(e.selectedItem.name)+"\n  ")]),e._v(" "),r("i",{staticClass:"fas fa-caret-down",on:{click:function(t){return e.showToggle()}}}),e._v(" "),null!=e.selectedId?r("span",[e._v(e._s(e.getSelected()))]):e._e(),e._v(" "),1==e.showlist&&null==e.selectedId?r("div",{staticClass:"dropdown-list",on:{keyup:e.nextItem}},[r("ul",{ref:"scrollContainer"},e._l(e.itemList,(function(t,o){return r("li",{directives:[{name:"show",rawName:"v-show",value:e.itemVisible(t),expression:"itemVisible(item)"}],key:t.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":e.arrowCounter===o},on:{click:function(r){return e.selectItem(t)},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectItem(e.matches[e.arrowCounter])},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.showlist=!1}]}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),0)]):e._e()]):e._e()}),[],!1,null,null,null).exports},85516:(e,t,r)=>{r.d(t,{Z:()=>n});const o={name:"FromLayoutGBI",data:function(){return{}}};const n=(0,r(51900).Z)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"content"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row justify-content-around"},[r("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[e._t("formdata")],2)])])])}),[],!1,null,null,null).exports},57586:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var o=r(50175),n=r(35803),s=r(85516),a=r(79577),i=r(59809);const l={name:"NewMember",components:{Form:o.Form,"has-error":o.HasError,"form-buttons":n.Z,"form-layout":s.Z,"dropdown-filter":a.Z},data:function(){return{role_list:[],departments:[],form:new o.Form({name:"",gender:"",email:"",password:"",c_password:"",phone_no:"",address:"",dob:"",role_id:"",department_id:""})}},created:function(){this.getRoles(),this.getDepartment()},methods:{getRoles:function(){var e=this;axios.get("/api/role").then((function(t){if(t)for(var r=0;r<t.data.length;r++)e.role_list.push({name:t.data[r].name,id:t.data[r].id})}))},getDepartment:function(){var e=this;axios.get("/api/departments").then((function(t){if(t)for(var r=0;r<t.data.length;r++)e.departments.push({name:t.data[r].name,id:t.data[r].id})}))},updateRole:function(e){this.form.role_id=e.id},updateDepartment:function(e){this.form.department_id=e.id},addMember:function(){var e=this;return 0==(0,i.$)(this.form.dob)?(this.$toast.fire({icon:"warning",title:"A GBI Member must be of age 20 or above."}),!1):10!==this.form.phone_no.length?(this.$toast.fire({icon:"warning",title:"Please enter a valid phone number."}),!1):void this.form.post("/api/members/create").then((function(t){e.$router.push("/list-member"),e.$toast.fire({icon:"success",title:"GBI Member Added Successfully"})})).catch((function(){}))}}};var c=r(93379),d=r.n(c),u=r(96157),m={insert:"head",singleton:!1};d()(u.Z,m);u.Z.locals;const f=(0,r(51900).Z)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form-layout",{scopedSlots:e._u([{key:"formdata",fn:function(){return[r("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.addMember()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("name")},attrs:{type:"text",name:"name",placeholder:"Enter Name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"name"}})],1)]),e._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"gender"}},[e._v("Gender")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("gender")},attrs:{name:"gender",placeholder:"Select Gender"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"gender",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"M"}},[e._v("Male")]),e._v(" "),r("option",{attrs:{value:"F"}},[e._v("Female")])]),e._v(" "),r("has-error",{attrs:{form:e.form,field:"gender"}})],1)]),e._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("email")},attrs:{type:"email",placeholder:"Enter Email",name:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"email"}})],1)]),e._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phone_no"}},[e._v("Phone Number")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_no,expression:"form.phone_no"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("phone_no")},attrs:{type:"number",placeholder:"Enter Phone No",name:"phone_no"},domProps:{value:e.form.phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_no",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"phone_no"}})],1)])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("password")},attrs:{type:"password",placeholder:"Enter Password",name:"password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"password"}})],1)]),e._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"c_password"}},[e._v("Confirm Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.c_password,expression:"form.c_password"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("c_password")},attrs:{type:"password",placeholder:"Enter Confirm Password",name:"c_password"},domProps:{value:e.form.c_password},on:{input:function(t){t.target.composing||e.$set(e.form,"c_password",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"c_password"}})],1)]),e._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[e._v("Address")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("address")},attrs:{type:"text",placeholder:"Enter Address",name:"address"},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"address"}})],1)]),e._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group date_input"},[r("label",{attrs:{for:"dob"}},[e._v("DOB")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.dob,expression:"form.dob"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("dob")},attrs:{type:"date",placeholder:"Enter dob",name:"journy"},domProps:{value:e.form.dob},on:{input:function(t){t.target.composing||e.$set(e.form,"dob",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"dob"}})],1)]),e._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"role_id"}},[e._v("Department")]),e._v(" "),r("dropdown-filter",{staticClass:"mb-2",class:{"is-invalid":e.form.errors.has("department_id")},attrs:{itemList:e.departments},on:{"update:option":e.updateDepartment}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"department_id"}})],1)]),e._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"role_id"}},[e._v("Role Assign")]),e._v(" "),r("dropdown-filter",{staticClass:"mb-2",class:{"is-invalid":e.form.errors.has("role_id")},attrs:{itemList:e.role_list},on:{"update:option":e.updateRole}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"role_id"}})],1)])]),e._v(" "),r("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,"0284745a",null).exports}}]);