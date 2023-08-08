"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7213],{2347:(t,e,n)=>{n(70538).default.directive("click-outside",{bind:function(t,e,n){window.event=function(r){t==r.target||t.contains(r.target)||n.context[e.expression](r)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},53866:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(1519),i=n.n(r)()((function(t){return t[1]}));i.push([t.id,"input[data-v-708af1d8]::-webkit-inner-spin-button,input[data-v-708af1d8]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-708af1d8]{-moz-appearance:textfield}input[type=text][data-v-708af1d8]{background:#fff!important}",""]);const o=i},1519:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},93379:(t,e,n)=>{var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function a(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},r=[],i=0;i<t.length;i++){var o=t[i],l=e.base?o[0]+e.base:o[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=a(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(s[d].references++,s[d].updater(f)):s.push({identifier:u,updater:v(f,e),references:1}),r.push(u)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var s=o(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function m(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(t,e){var n,r,i;if(e.singleton){var o=h++;n=p||(p=c(e)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=c(e),r=m.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=a(n[r]);s[i].references--}for(var o=l(t,e),c=0;c<n.length;c++){var u=a(n[c]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=o}}}},27607:(t,e,n)=>{n.d(e,{Z:()=>i});const r={name:"SendLinkButtonGBI",data:function(){return{}}};const i=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold text-center"},[t._t("default",[t._v("SEND")])],2)])}),[],!1,null,null,null).exports},79577:(t,e,n)=>{n.d(e,{Z:()=>o});n(2347);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const i={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},selectedId:void 0,value:{},placeholder:{type:String,default:"Type to search"}},data:function(){var t;return r(t={selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1},"selectedItem",""),r(t,"edit_flag",!1),t},watch:{selectedItem:function(){this.optionChanged()}},mounted:function(){document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},getSelected:function(){if(null!=this.itemList&&0==this.edit_flag)for(var t=0;t<this.itemList.length;t++)this.itemList[t].id==this.selectedId&&(this.selectedItem=this.itemList[t],this.inputValue=this.itemList[t].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("update:option",this.selectedItem)},closeEvent:function(){this.showlist&&(this.showlist=!1,this.arrowCounter=0)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.inputValue="",this.$emit("on-item-selected",t),this.showlist=!1},itemVisible:function(t){var e=t.name.toLowerCase(),n=this.inputValue.toLowerCase();return e.includes(n)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}};const o=(0,n(51900).Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.itemList?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):n("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),n("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),null!=t.selectedId?n("span",[t._v(t._s(t.getSelected()))]):t._e(),t._v(" "),1==t.showlist&&null==t.selectedId?n("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[n("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,r){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===r},on:{click:function(n){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)]):t._e()]):t._e()}),[],!1,null,null,null).exports},85516:(t,e,n)=>{n.d(e,{Z:()=>i});const r={name:"FromLayoutGBI",data:function(){return{}}};const i=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-around"},[n("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},57236:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var r=n(50175),i=n(27607),o=n(85516),s=n(79577);const a={name:"SendPaymentLink",components:{Form:r.Form,"has-error":r.HasError,SendLinkButton:i.Z,"form-layout":o.Z,"dropdown-filter":s.Z},data:function(){return{tour_list:[],itineraryList:[],itinerary:"",form:new r.Form({ph_no:"",it_name:"",link:"",start_date:""})}},mounted:function(){},methods:{checkLen:function(t){t.length>=30&&this.$toast.fire({icon:"warning",title:"cannot exceed 30 characters"})},SendMsg:function(){this.form.ph_no&&this.form.it_name&&this.form.link&&this.form.start_date?(this.form.ph_no=this.form.ph_no.replace(/ /g,""),this.form.post("/api/finalprogram/send").then((function(t){})).catch((function(){})),this.$toast.fire({icon:"success",title:"Itinerary SMS Sent Successfully"})):this.$toast.fire({icon:"error",title:"Please fillup all the fields."})}}};var l=n(93379),c=n.n(l),u=n(53866),d={insert:"head",singleton:!1};c()(u.Z,d);u.Z.locals;const f=(0,n(51900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[t.Sending?t._e():n("form",{staticStyle:{margin:"21px"},attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.SendMsg()}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"it_name"}},[t._v("Itinerary Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.it_name,expression:"form.it_name"}],staticClass:"form-control",attrs:{type:"text",maxlength:"30",required:""},domProps:{value:t.form.it_name},on:{keyup:function(e){return t.checkLen(t.form.it_name)},input:function(e){e.target.composing||t.$set(t.form,"it_name",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"it_name"}})],1)])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"ph_no"}},[t._v("Customer Mobile Numbers")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.ph_no,expression:"form.ph_no"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("ph_no")},attrs:{type:"text",placeholder:"Mobile numbers",rows:"3",required:""},domProps:{value:t.form.ph_no},on:{input:function(e){e.target.composing||t.$set(t.form,"ph_no",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"ph_no"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"start_date"}},[t._v("Itinerary Start Date")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.start_date,expression:"form.start_date"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("start_date")},attrs:{type:"date",placeholder:"Enter start date",rows:"5",min:"today"},domProps:{value:t.form.start_date},on:{input:function(e){e.target.composing||t.$set(t.form,"start_date",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"start_date"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"link"}},[t._v("Itinerary PDF Link")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.link,expression:"form.link"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("link")},attrs:{type:"text",placeholder:"Enter PDF Link",rows:"5",maxlength:"30"},domProps:{value:t.form.link},on:{keyup:function(e){return t.checkLen(t.form.link)},input:function(e){e.target.composing||t.$set(t.form,"link",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"link"}})],1)])]),t._v(" "),n("SendLinkButton")],1)]},proxy:!0}])})}),[],!1,null,"708af1d8",null).exports}}]);