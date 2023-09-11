(self.webpackChunk=self.webpackChunk||[]).push([[3202],{85498:function(t){"undefined"!=typeof self&&self,t.exports=function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,n,i,a,s){var o,r=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,r=t.default);var l,u="function"==typeof r?r.options:r;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId=a),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):i&&(l=i),l){var d=u.functional,h=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(t,e){return l.call(e),h(t,e)}):u.beforeCreate=h?[].concat(h,l):[l]}return{esModule:o,exports:r,options:u}}},function(t,e,n){"use strict";var i=n(2),a=n(4),s=n(14);e.a={name:"form-wizard",components:{WizardButton:i.a,WizardStep:a.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,n=e.indexOf(t);n>-1&&(n===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),n<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(n,1))},reset:function(){this.maxStep=0,this.tabs.forEach((function(t){t.checked=!1})),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach((function(t){t.checked=!0}))},navigateToTab:function(t){var e=this,n=t>this.activeTabIndex;if(t<=this.maxStep){var i=function i(){n&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,i)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};n?this.beforeTabChange(this.activeTabIndex,i):(this.setValidationError(null),i())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(s.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(s.a)(e.tabId)}},focusPrevTab:function(){var t=Object(s.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(s.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var n=this;if(this.setValidationError(null),Object(s.c)(t))this.setLoading(!0),t.then((function(t){n.setLoading(!1);var i=!0===t;n.executeBeforeChange(i,e)})).catch((function(t){n.setLoading(!1),n.setValidationError(t)}));else{var i=!0===t;this.executeBeforeChange(i,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var n=this.tabs[t];if(n&&void 0!==n.beforeChange){var i=n.beforeChange();this.validateBeforeChange(i,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this.tabs[t],a=this.tabs[e];return i&&(i.active=!1),a&&(a.active=!0),n&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,n=this.tabs.find((function(n,i){var a=n.route===t;return a&&(e=i),a}));if(n&&!n.active){var i=e>this.activeTabIndex;this.navigateToTab(e,i)}},deactivateTabs:function(){this.tabs.forEach((function(t){t.active=!1}))},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,n){"use strict";function i(t){n(10)}var a=n(3),s=n(11),o=i,r=n(0)(a.a,s.a,!1,o,null,null);e.a=r.exports},function(t,e,n){"use strict";e.a={}},function(t,e,n){"use strict";function i(t){n(12)}var a=n(5),s=n(13),o=i,r=n(0)(a.a,s.a,!1,o,null,null);e.a=r.exports},function(t,e,n){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,n){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),a=n(16),s=n(2),o=n(4);n.d(e,"FormWizard",(function(){return i.a})),n.d(e,"TabContent",(function(){return a.a})),n.d(e,"WizardButton",(function(){return s.a})),n.d(e,"WizardStep",(function(){return o.a}));var r={install:function(t){t.component("form-wizard",i.a),t.component("tab-content",a.a),t.component("wizard-button",s.a),t.component("wizard-step",o.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),e.default=r},function(t,e,n){"use strict";function i(t){n(9)}var a=n(1),s=n(15),o=i,r=n(0)(a.a,s.a,!1,o,null,null);e.a=r.exports},function(t,e){},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},a={render:i,staticRenderFns:[]};e.a=a},function(t,e){},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{active:t.tab.active}},[n("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[n("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[n("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?n("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?n("i",{staticClass:"wizard-icon",class:t.tab.icon}):n("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?n("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():n("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[n("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},a={render:i,staticRenderFns:[]};e.a=a},function(t,e,n){"use strict";function i(){return document.activeElement.id}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=i();return t.findIndex((function(t){return t.tabId===e}))}function s(t){document.getElementById(t).focus()}function o(t){return t.then&&"function"==typeof t.then}e.b=a,e.a=s,e.c=o},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[n("div",{staticClass:"wizard-header"},[t._t("title",[n("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),n("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():n("div",{staticClass:"wizard-progress-with-circle"},[n("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),n("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,(function(e,i){return t._t("step",[n("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:i},nativeOn:{click:function(e){t.navigateToTab(i)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(i)}}})],{tab:e,index:i,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})}))],2),t._v(" "),n("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():n("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[n("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?n("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[n("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),n("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?n("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[n("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):n("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[n("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},a={render:i,staticRenderFns:[]};e.a=a},function(t,e,n){"use strict";var i=n(6),a=n(17),s=n(0)(i.a,a.a,!1,null,null,null);e.a=s.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},a={render:i,staticRenderFns:[]};e.a=a}])},6053:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var i=n(85498);const a={name:"ProfileEdit",components:{FormWizard:i.FormWizard,TabContent:i.TabContent},data:function(){return{name:"",address:"",school_field:!1,namefield:!1,addressfield:!1,institutionfield:!1,second_step:!1,label_name:"",oddclass:!1,evenclass:!0,loadingWizard:!1,errorMsg:null,school_list:"",profession:"",institution:"",institution_code:""}},beforeMount:function(){null==this.$cookies.get("access_token")&&this.$router.push("/")},mounted:function(){var t=this;this.$axios.get("/api/school-list").then((function(e){t.school_list=e.data}));this.$api.POST("/api/user-show",[]).then((function(e){1==e.success.status&&t.$router.push("/dashboard")})).catch((function(e){t.handleError(e)}))},watch:{institution:function(){""!=this.institution&&(this.second_step=!0),"other"==this.institution?(this.namefield=!0,this.addressfield=!0,this.label_name="Educational Institution"):(this.namefield=!1,this.addressfield=!1)},profession:function(){this.namefield=!1,this.addressfield=!1,this.school_field=!1,console.log(this.school_field),"corporate"==this.profession?(this.namefield=!0,this.addressfield=!0,this.label_name="Corporate"):"other"==this.profession?(this.namefield=!0,this.label_name="Occupation"):this.school_field=!0},name:function(){""!=this.name&&(this.second_step=!0)},address:function(){""!=this.address&&(this.second_step=!0)}},methods:{onComplete:function(){var t=this,e={user_profession:this.profession,school_id:this.institution,profession_name:this.name,profession_address:this.address,institution_code:this.institution_code};this.$axios.post("/api/user-info-update",e,{headers:{Authorization:"Bearer ".concat(this.$cookies.get("access_token"))}}).then((function(e){var n=t.$cookies.get("user");n.status=1,n.user_profession=t.profession,t.$cookies.remove("user"),t.$cookies.set("user",n),t.$router.push("/dashboard")})).catch((function(e){t.$swal.fire({icon:"error",title:"Please fill all the fields"})}))},setLoading:function(t){this.loadingWizard=t},handleValidation:function(t,e){console.log("Tab: "+e+" valid: "+t)},handleErrorMessage:function(t){this.errorMsg=t},validateAsync:function(){var t=this;return new Promise((function(e,n){setTimeout((function(){""==t.profession?n("Select your profession"):e(!0)}),500)}))},validateAsyncSecond:function(){var t=this;return new Promise((function(e,n){setTimeout((function(){1!=t.second_step?n("Please enter additional information"):e(!0)}),500)}))},validateAsyncLast:function(){var t=this;return new Promise((function(e,n){setTimeout((function(){""==t.institution_code?n("Enter your institution code"):e(!0)}),500)}))}}};const s=(0,n(51900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user_inform_model"}},[n("div",{staticClass:"row justify-content-center w-100"},[n("div",{staticClass:"col-sm-7"},[n("div",{staticClass:"user-model card p-20 mt-15"},[n("label",[t._v("Three Step Verification")]),t._v(" "),n("form-wizard",{attrs:{shape:"circle",color:"#1c1650","error-color":"#e74c3c"},on:{"on-complete":t.onComplete,"on-loading":t.setLoading,"on-validate":t.handleValidation,"on-error":t.handleErrorMessage}},[n("tab-content",{attrs:{title:"Personal details","before-change":t.validateAsync}},[n("label",[t._v("Select Your Profession")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.profession,expression:"profession"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.profession=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"student"}},[t._v("Student")]),t._v(" "),n("option",{attrs:{value:"teacher"}},[t._v("Teacher/Principal/Dean")]),t._v(" "),n("option",{attrs:{value:"corporate"}},[t._v("Corporate")]),t._v(" "),n("option",{attrs:{value:"other"}},[t._v("Other")])])]),t._v(" "),n("tab-content",{attrs:{title:"Additional Info","before-change":t.validateAsyncSecond}},[t.school_field?n("div",{staticClass:"form-group"},[n("label",[t._v("Select Your Educational Institution")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.institution,expression:"institution"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.institution=e.target.multiple?n:n[0]}}},[t._l(t.school_list,(function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v("\n                  "+t._s(e.school_name)+"\n                ")])})),t._v(" "),n("option",{attrs:{value:"other"}},[t._v("Other")])],2)]):t._e(),t._v(" "),t.namefield?n("div",{staticClass:"form-group"},[n("label",[t._v("Enter "+t._s(t.label_name)+" Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]):t._e(),t._v(" "),t.addressfield?n("div",{staticClass:"form-group"},[n("label",[t._v("Enter Address")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control",domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]):t._e()]),t._v(" "),n("tab-content",{attrs:{title:"Last step","before-change":t.validateAsyncLast}},[n("div",{staticClass:"form-group"},["student"==t.profession?n("label",[t._v("Enter Your School/College ID")]):n("label",[t._v("Enter Your Affiliation Number")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.institution_code,expression:"institution_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"student"==t.profession?"Enter Your School/College ID":"Enter Your Affiliation Number"},domProps:{value:t.institution_code},on:{input:function(e){e.target.composing||(t.institution_code=e.target.value)}}})])]),t._v(" "),t.loadingWizard?n("div",{staticClass:"loader"}):t._e(),t._v(" "),t.errorMsg?n("div",[n("span",{staticClass:"error"},[t._v(t._s(t.errorMsg))])]):t._e()],1)],1)])])])}),[],!1,null,null,null).exports}}]);