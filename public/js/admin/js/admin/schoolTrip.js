(self.webpackChunk=self.webpackChunk||[]).push([[7302],{87757:(t,e,n)=>{t.exports=n(35666)},31606:t=>{t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({f6fd:function(t,e){!function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})}(document)},fb15:function(t,e,n){"use strict";var r;(n.r(e),"undefined"!=typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var a={props:{data:{type:Object,default:function(){}},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!1},size:{type:String,default:"default",validator:function(t){return-1!==["small","default","large"].indexOf(t)}},align:{type:String,default:"left",validator:function(t){return-1!==["left","center","right"].indexOf(t)}}},computed:{isApiResource:function(){return!!this.data.meta},currentPage:function(){return this.isApiResource?this.data.meta.current_page:this.data.current_page},firstPageUrl:function(){return this.isApiResource?this.data.links.first:null},from:function(){return this.isApiResource?this.data.meta.from:this.data.from},lastPage:function(){return this.isApiResource?this.data.meta.last_page:this.data.last_page},lastPageUrl:function(){return this.isApiResource?this.data.links.last:null},nextPageUrl:function(){return this.isApiResource?this.data.links.next:this.data.next_page_url},perPage:function(){return this.isApiResource?this.data.meta.per_page:this.data.per_page},prevPageUrl:function(){return this.isApiResource?this.data.links.prev:this.data.prev_page_url},to:function(){return this.isApiResource?this.data.meta.to:this.data.to},total:function(){return this.isApiResource?this.data.meta.total:this.data.total},pageRange:function(){if(-1===this.limit)return 0;if(0===this.limit)return this.lastPage;for(var t,e=this.currentPage,n=this.lastPage,r=this.limit,a=e-r,i=e+r+1,o=[],s=[],l=1;l<=n;l++)(1===l||l===n||l>=a&&l<i)&&o.push(l);return o.forEach((function(e){t&&(e-t==2?s.push(t+1):e-t!=1&&s.push("...")),s.push(e),t=e})),s}},methods:{previousPage:function(){this.selectPage(this.currentPage-1)},nextPage:function(){this.selectPage(this.currentPage+1)},selectPage:function(t){"..."!==t&&this.$emit("pagination-change-page",t)}},render:function(){var t=this;return this.$scopedSlots.default({data:this.data,limit:this.limit,showDisabled:this.showDisabled,size:this.size,align:this.align,computed:{isApiResource:this.isApiResource,currentPage:this.currentPage,firstPageUrl:this.firstPageUrl,from:this.from,lastPage:this.lastPage,lastPageUrl:this.lastPageUrl,nextPageUrl:this.nextPageUrl,perPage:this.perPage,prevPageUrl:this.prevPageUrl,to:this.to,total:this.total,pageRange:this.pageRange},prevButtonEvents:{click:function(e){e.preventDefault(),t.previousPage()}},nextButtonEvents:{click:function(e){e.preventDefault(),t.nextPage()}},pageButtonEvents:function(e){return{click:function(n){n.preventDefault(),t.selectPage(e)}}}})}};function i(t,e,n,r,a,i,o,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}var o=i(a,undefined,undefined,!1,null,null,null).exports,s=i({props:{data:{type:Object,default:function(){}},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!1},size:{type:String,default:"default",validator:function(t){return-1!==["small","default","large"].indexOf(t)}},align:{type:String,default:"left",validator:function(t){return-1!==["left","center","right"].indexOf(t)}}},methods:{onPaginationChangePage:function(t){this.$emit("pagination-change-page",t)}},components:{RenderlessLaravelVuePagination:o}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("renderless-laravel-vue-pagination",{attrs:{data:t.data,limit:t.limit,"show-disabled":t.showDisabled,size:t.size,align:t.align},on:{"pagination-change-page":t.onPaginationChangePage},scopedSlots:t._u([{key:"default",fn:function(e){e.data,e.limit;var r=e.showDisabled,a=e.size,i=e.align,o=e.computed,s=e.prevButtonEvents,l=e.nextButtonEvents,c=e.pageButtonEvents;return o.total>o.perPage?n("ul",{staticClass:"pagination",class:{"pagination-sm":"small"==a,"pagination-lg":"large"==a,"justify-content-center":"center"==i,"justify-content-end":"right"==i}},[o.prevPageUrl||r?n("li",{staticClass:"page-item pagination-prev-nav",class:{disabled:!o.prevPageUrl}},[n("a",t._g({staticClass:"page-link",attrs:{href:"#","aria-label":"Previous",tabindex:!o.prevPageUrl&&-1}},s),[t._t("prev-nav",[n("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),n("span",{staticClass:"sr-only"},[t._v("Previous")])])],2)]):t._e(),t._l(o.pageRange,(function(e,r){return n("li",{key:r,staticClass:"page-item pagination-page-nav",class:{active:e==o.currentPage}},[n("a",t._g({staticClass:"page-link",attrs:{href:"#"}},c(e)),[t._v("\n                "+t._s(e)+"\n                "),e==o.currentPage?n("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])])})),o.nextPageUrl||r?n("li",{staticClass:"page-item pagination-next-nav",class:{disabled:!o.nextPageUrl}},[n("a",t._g({staticClass:"page-link",attrs:{href:"#","aria-label":"Next",tabindex:!o.nextPageUrl&&-1}},l),[t._t("next-nav",[n("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),n("span",{staticClass:"sr-only"},[t._v("Next")])])],2)]):t._e()],2):t._e()}}],null,!0)})}),[],!1,null,null,null).exports;e.default=s}}).default},35666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),o=new j(r||[]);return i._invoke=function(t,e,n){var r=p;return function(a,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw i;return S()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var s=k(o,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var l=u(t,e,n);if("normal"===l.type){if(r=n.done?h:f,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=h,n.method="throw",n.arg=l.arg)}}}(t,n,o),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var p="suspendedStart",f="suspendedYield",d="executing",h="completed",g={};function m(){}function v(){}function y(){}var b={};l(b,i,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==n&&r.call(w,i)&&(b=w);var P=y.prototype=m.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(a,i,o,s){var l=u(t[a],t,i);if("throw"!==l.type){var c=l.arg,p=c.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(p).then((function(t){c.value=t,o(c)}),(function(t){return n("throw",t,o,s)}))}s(l.arg)}var a;this._invoke=function(t,r){function i(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(i,i):i()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=u(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:S}}function S(){return{value:e,done:!0}}return v.prototype=y,l(P,"constructor",y),l(y,"constructor",v),v.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(P),t},t.awrap=function(t){return{__await:t}},x(C.prototype),l(C.prototype,o,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new C(c(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(P),l(P,s,"Generator"),l(P,i,(function(){return this})),l(P,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return s.type="throw",s.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:L(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},28111:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const r={name:"TableLoader"};const a=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center admin-bg-color my-2"},[n("b-spinner",{staticClass:"align-middle"}),t._v(" "),n("strong",[t._v("Loading...")])],1)}),[],!1,null,null,null).exports},41583:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const r={name:"AddButtonGBI",props:["url"],computed:{hasPerms:function(){var t=this;if(1==window.userRole)return!0;return window.createPerms.some((function(e){return e.permission_id===t.$route.meta.permId}))}}};const a=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hasPerms?n("router-link",{staticClass:"text-capitalize font-weight-bold",attrs:{to:t.url}},[t._t("default",[t._v("add")])],2):t._e()}),[],!1,null,null,null).exports},63562:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const r={name:"DeleteButtonGBI",data:function(){return{}},computed:{hasPerms:function(){var t=this;if(1==window.userRole)return!0;return window.deletePerms.some((function(e){return e.permission_id===t.$route.meta.permId}))}}};const a=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hasPerms?n("span",{staticClass:"delete_link",attrs:{title:"Delete Item"}},[t._m(0)]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"badge badge-danger incrIconSize pointer"},[e("i",{staticClass:"far fa-trash-alt"})])}],!1,null,null,null).exports},39567:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const r={name:"EditIconButtonGBI",props:["url"],data:function(){return{}},computed:{hasPerms:function(){var t=this;if(1==window.userRole)return!0;return window.editPerms.some((function(e){return e.permission_id===t.$route.meta.permId}))}}};const a=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hasPerms?n("router-link",{staticClass:"edit_link",attrs:{to:t.url}},[n("span",{staticClass:"badge badge-primary incrIconSize",attrs:{title:"Edit Item"}},[n("i",{staticClass:"fas fa-pencil-alt"})])]):t._e()}),[],!1,null,null,null).exports},11801:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const r={name:"ViewsIconButtonGBI",props:["url"],data:function(){return{}}};const a=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"edit_link",attrs:{to:t.url}},[n("span",{staticClass:"badge badge-primary incrIconSize",attrs:{title:"View Item"}},[n("i",{staticClass:"fas fa-eye"})])])}),[],!1,null,null,null).exports},59216:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});const r={name:"ListLayoutGBI",components:{"add-button":n(41583).Z},props:["addurl","buttontext"],computed:{hasPerms:function(){var t=this;if(1==window.userRole)return!0;return window.createPerms.some((function(e){return e.permission_id===t.$route.meta.permId}))}}};const a=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("div",{staticClass:"row justify-content-around"},[n("div",{staticClass:"col-md-12 pb-5"},[n("div",{staticClass:"container container_admin_body list-section pb-5"},[n("b-row",{staticClass:"mb-1 mt-1",attrs:{"align-h":"between"}},[n("b-col",{staticClass:"top_btn p-0",attrs:{md:"3",cols:"4"}},[t.addurl&&t.hasPerms?n("div",[n("add-button",{attrs:{url:t.addurl}},[t._v(t._s(t.buttontext))])],1):t._e()]),t._v(" "),n("b-col",{attrs:{cols:"2"}}),t._v(" "),n("b-col",{staticClass:"p-0",attrs:{cols:"3"}},[t._t("perpage")],2),t._v(" "),n("b-col",{staticClass:"p-0",attrs:{md:"3",cols:"4"}},[t._t("searchbar")],2)],1),t._v(" "),n("b-row",{staticClass:"text-capitalize h-100"},[t._t("table"),t._v(" "),n("div",{staticClass:"w-100"},[t._t("pagination")],2)],2)],1)])])])}),[],!1,null,null,null).exports},97747:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>_});var r=n(59216),a=n(31606),i=n.n(a),o=n(39567),s=n(63562),l=n(11801),c=n(87757),u=n.n(c);function p(t,e,n,r,a,i,o){try{var s=t[i](o),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(r,a)}const f={name:"CopyIconButtonGBI",props:["url"],data:function(){return{}},methods:{copyURL:function(t){var e,n=this;return(e=u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(window.location.host+t);case 3:n.$toast.fire({icon:"success",title:"Url Link Copied"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n.$toast.fire({icon:"error",title:"Url not Copied"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(t){p(i,r,a,o,s,"next",t)}function s(t){p(i,r,a,o,s,"throw",t)}o(void 0)}))})()}}};var d=n(51900);const h=(0,d.Z)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"delete_link",attrs:{title:"Copy Link"},on:{click:function(e){return t.copyURL(t.url)}}},[t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"badge badge-info pointer incrIconSize"},[e("i",{staticClass:"fas fa-copy"})])}],!1,null,null,null).exports;var g=n(28111),m=n(20629);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const b={name:"List",components:{"list-layout":r.Z,"table-loader":g.Z,pagination:i(),"edit-icon":o.Z,"delete-icon":s.Z,"view-icon":l.Z,"copy-icon":h},data:function(){return{fields:[{key:"school_name",label:"school",sortable:!0,thClass:"table-head"},{key:"trip_name",label:"trip",sortable:!0,thClass:"table-head"},{key:"booking_status",label:"booking",sortable:!0,thClass:"table-head"},{key:"payment_status",label:"payment",thClass:"table-head"},{key:"start_date",label:"start",sortable:!0,thClass:"table-head"},{key:"end_date",label:"end",sortable:!0,thClass:"table-head"},{key:"action",label:"action",thClass:"table-head"}],limit:2,filter:"",perPage:7,options:[7,25,50,100]}},mounted:function(){this.getitems()},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,m.rn)(["items"])),watch:{perPage:function(){this.getitems(1,this.perPage)}},methods:{getitems:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.perPage;this.$store.dispatch("getItems","/schooltrip/all/"+e+"?page="+t)},deleteItem:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=y({api:"/schooltrip/"+t,index:e},"index",e);this.$store.dispatch("deleteItem",n)}}};const _=(0,d.Z)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("list-layout",{attrs:{addurl:"/school-trip/add",buttontext:"add trip"},scopedSlots:t._u([{key:"perpage",fn:function(){return[n("b-form-group",{staticClass:"mb-0",attrs:{label:"Per page","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[n("b-form-select",{staticClass:"radius-0",attrs:{id:"per-page-select",options:t.options},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)]},proxy:!0},{key:"searchbar",fn:function(){return[n("b-form-input",{staticClass:"radius-0",attrs:{type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"table",fn:function(){return[n("b-table",{staticClass:"w-100 table-layout",attrs:{id:"table-transition",striped:"",hover:"","sticky-header":"460px",fields:t.fields,items:t.items.data,busy:t.$store.getters.isBusy,filter:t.filter,"primary-key":"updated_at"},scopedSlots:t._u([{key:"table-busy",fn:function(){return[n("table-loader")]},proxy:!0},{key:"cell(booking_status)",fn:function(e){return[1==e.item.booking_status?n("span",{staticClass:"badge badge-success"},[t._v("Confirmed")]):n("span",{staticClass:"badge badge-warning"},[t._v("In progress")])]}},{key:"cell(payment_status)",fn:function(e){return[1==e.item.payment_status?n("span",{staticClass:"badge badge-success"},[t._v("Complete\n        ")]):3==e.item.payment_status?n("span",{staticClass:"badge badge-info"},[t._v("In progress")]):n("span",{staticClass:"badge badge-warning"},[t._v("Pending")])]}},{key:"cell(action)",fn:function(e){return[n("edit-icon",{attrs:{url:"/school-trip/edit/"+e.item.id}}),t._v(" "),n("copy-icon",{attrs:{url:"/tour-page/"+e.item.slug1+"/"+e.item.slug2}}),t._v(" "),n("delete-icon",{nativeOn:{click:function(n){return t.deleteItem(e.item.id,e.index)}}})]}}])})]},proxy:!0},t.items.data?{key:"pagination",fn:function(){return[n("div",{staticClass:"w-100"},[n("pagination",{attrs:{data:t.items,align:"right",limit:t.limit},on:{"pagination-change-page":t.getitems}},[n("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("Previous")]),t._v(" "),n("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next")])])],1)]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null).exports}}]);