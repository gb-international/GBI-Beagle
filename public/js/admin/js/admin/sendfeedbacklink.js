"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2805],{2347:(t,e,n)=>{n(70538).default.directive("click-outside",{bind:function(t,e,n){window.event=function(i){t==i.target||t.contains(i.target)||n.context[e.expression](i)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},79117:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(1519),r=n.n(i)()((function(t){return t[1]}));r.push([t.id,"input[data-v-2e8e7eae]::-webkit-inner-spin-button,input[data-v-2e8e7eae]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-2e8e7eae]{-moz-appearance:textfield}",""]);const o=r},1519:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);i&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},93379:(t,e,n)=>{var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function a(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},i=[],r=0;r<t.length;r++){var o=t[r],l=e.base?o[0]+e.base:o[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=a(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(s[d].references++,s[d].updater(f)):s.push({identifier:u,updater:v(f,e),references:1}),i.push(u)}return i}function c(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var s=o(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=d(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function m(t,e,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var p=null,h=0;function v(t,e){var n,i,r;if(e.singleton){var o=h++;n=p||(p=c(e)),i=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=c(e),i=m.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var r=a(n[i]);s[r].references--}for(var o=l(t,e),c=0;c<n.length;c++){var u=a(n[c]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=o}}}},27607:(t,e,n)=>{n.d(e,{Z:()=>r});const i={name:"SendLinkButtonGBI",data:function(){return{}}};const r=(0,n(51900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold text-center"},[t._t("default",[t._v("SEND")])],2)])}),[],!1,null,null,null).exports},79577:(t,e,n)=>{n.d(e,{Z:()=>o});n(2347);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const r={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},selectedId:void 0,value:{},placeholder:{type:String,default:"Type to search"}},data:function(){var t;return i(t={selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1},"selectedItem",""),i(t,"edit_flag",!1),t},watch:{selectedItem:function(){this.optionChanged()}},mounted:function(){document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},getSelected:function(){if(null!=this.itemList&&0==this.edit_flag)for(var t=0;t<this.itemList.length;t++)this.itemList[t].id==this.selectedId&&(this.selectedItem=this.itemList[t],this.inputValue=this.itemList[t].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("update:option",this.selectedItem)},closeEvent:function(){this.showlist&&(this.showlist=!1,this.arrowCounter=0)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.inputValue="",this.$emit("on-item-selected",t),this.showlist=!1},itemVisible:function(t){var e=t.name.toLowerCase(),n=this.inputValue.toLowerCase();return e.includes(n)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}};const o=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.itemList?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):n("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),n("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),null!=t.selectedId?n("span",[t._v(t._s(t.getSelected()))]):t._e(),t._v(" "),1==t.showlist&&null==t.selectedId?n("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[n("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,i){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===i},on:{click:function(n){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)]):t._e()]):t._e()}),[],!1,null,null,null).exports},85516:(t,e,n)=>{n.d(e,{Z:()=>r});const i={name:"FromLayoutGBI",data:function(){return{}}};const r=(0,n(51900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-around"},[n("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},85575:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var i=n(50175),r=n(27607),o=n(85516),s=n(79577);const a={name:"SendFeedbackLink",components:{Form:i.Form,"has-error":i.HasError,SendLinkButton:r.Z,"form-layout":o.Z,"dropdown-filter":s.Z},data:function(){return{tour_list:[],itineraryList:[],itinerary:"",form:new i.Form({tour_id:"",ph_no:"",email:""})}},mounted:function(){this.tourData()},methods:{tourData:function(){var t=this;axios.get("/api/tour").then((function(e){if(e.data.data)for(var n=0;n<e.data.data.length;n++)t.tour_list.push({name:e.data.data[n].tour_id,id:e.data.data[n].id,itineraryId:e.data.data[n].itinerary_id})}))},getItinerary:function(t){var e=this;axios.get("/api/get-tour/"+t).then((function(t){e.itinerary=t.data.title}))},SendLink:function(){this.form.tour_id&&this.form.email&&this.form.ph_no?10!==String(this.form.ph_no).length?this.$toast.fire({icon:"error",title:"Please provide a valid phone number."}):(this.form.post("/api/feedback/send-link").then((function(t){})).catch((function(t){console.log(t)})),this.$router.push("/send-feedback-link/"),this.$toast.fire({icon:"success",title:"Feedback Link Sent successfully"})):this.$toast.fire({icon:"error",title:"Please fillup all the fields."})},tourUpdate:function(t){this.form.tour_id=t.id,this.getItinerary(t.id)}}};var l=n(93379),c=n.n(l),u=n(79117),d={insert:"head",singleton:!1};c()(u.Z,d);u.Z.locals;const f=(0,n(51900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[t.Sending?n("div",[n("p",[t._v("Sending...")])]):n("form",{staticStyle:{margin:"21px"},attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.SendLink()}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"tour_id"}},[t._v("Tour Code")]),t._v(" "),n("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.tour_list},on:{"update:option":t.tourUpdate}}),t._v(" "),t.form.errors.has("tour_id")?n("div",{staticClass:"error"},[n("label",{staticClass:"danger text-danger"},[t._v(t._s(t.form.errors.get("tour_id")))])]):t._e()],1)])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"itinerary"}},[t._v("Itinerary")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.itinerary,expression:"itinerary"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.itinerary},on:{input:function(e){e.target.composing||(t.itinerary=e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"itinerary"}})],1)])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"ph_no"}},[t._v("Customer Phone Number")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.ph_no,expression:"form.ph_no"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Enter Phone Number"},domProps:{value:t.form.ph_no},on:{input:function(e){e.target.composing||t.$set(t.form,"ph_no",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"ph_no"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[t._v("Customer Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",placeholder:"Enter Email",rows:"5"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"email"}})],1)])]),t._v(" "),n("SendLinkButton")],1)]},proxy:!0}])})}),[],!1,null,"2e8e7eae",null).exports}}]);