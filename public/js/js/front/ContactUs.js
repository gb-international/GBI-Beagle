(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/front/ContactUs"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/ContactusForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/ContactusForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__.Form,
    HasError: vform__WEBPACK_IMPORTED_MODULE_0__.HasError
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__.Form({
        name: "",
        email: "",
        mobile: "",
        messagecon: ""
      })
    };
  },
  methods: {
    sendmail: function sendmail() {
      var _this = this;

      if (this.form.name == '' || this.form.email == '' || this.form.mobile == '' || this.form.messagecon == '') {
        /*this.$swal.fire({
            text: "Please fillup all the fields!",
            icon: "info",
            animation: true,
          });*/
      }

      this.form.post("/api/contact-us/send").then(function (response) {
        _this.$swal.fire({
          text: "Thank you for contacting us !",
          icon: "success",
          animation: true
        });

        _this.form.reset();
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['text'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _front_components_ContactusForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/components/ContactusForm.vue */ "./resources/js/front/components/ContactusForm.vue");
/* harmony import */ var _front_components_layout_Heading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/layout/Heading.vue */ "./resources/js/front/components/layout/Heading.vue");
/* harmony import */ var _front_pages_ContactUs_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/front/pages/ContactUs/counter.js */ "./resources/js/front/pages/ContactUs/counter.js");
/* harmony import */ var _front_pages_ContactUs_counter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_front_pages_ContactUs_counter_js__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ContactUs",
  metaInfo: {
    title: 'Contact Us | We Are Just A Call Away',
    meta: [{
      name: 'description',
      content: 'Address: Triveni complex, G-32, Sheikh Sarai Phase 1, Sheikh Sarai, New Delhi, Delhi 110017 | Contact No.: +91 9717922240 | E-Mail: csrikhi@gbinternational.in'
    }, {
      name: 'keywords',
      content: '@GoWithGBI,GB International,Connect With GB International,Email Us,Talk To Us,Need a travel solution'
    }, {
      name: 'url',
      content: 'https://www.gowithgbi.com/contact-us'
    }]
  },
  components: {
    ContactusForm: _front_components_ContactusForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    counter: (_front_pages_ContactUs_counter_js__WEBPACK_IMPORTED_MODULE_2___default()),
    Heading: _front_components_layout_Heading_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showCount: true
    };
  },
  beforeCreate: function beforeCreate() {
    var metaInfo = {
      title: 'GBI Contact Us',
      description: 'Connect With GB International for organizing your educational travel plans any where any time',
      keywords: '@GoWithGBI,GB International,Connect With GB International,Email Us,Talk To Us,Need a travel solution',
      url: 'https://www.gowithgbi.com/contact-us',
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  }
});

/***/ }),

/***/ "./resources/js/front/pages/ContactUs/counter.js":
/*!*******************************************************!*\
  !*** ./resources/js/front/pages/ContactUs/counter.js ***!
  \*******************************************************/
/***/ (() => {

// Set the date we're counting down to
var countDownDate = new Date("Jan 15, 2023 15:00:00").getTime(); // Update the count down every 1 second

var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime(); // Find the distance between now and the count down date

  var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(distance % (1000 * 60) / 1000); // Output the result in an element with id="countDown"

  document.getElementById("countDownD1").innerHTML = (' 0' + days).toString()[days.toString().length];
  document.getElementById("countDownD2").innerHTML = (' 0' + days).slice(-1);
  document.getElementById("countDownH1").innerHTML = (' 0' + hours).toString()[hours.toString().length];
  document.getElementById("countDownH2").innerHTML = (' 0' + hours).slice(-1);
  document.getElementById("countDownM1").innerHTML = (' 0' + minutes).toString()[minutes.toString().length];
  document.getElementById("countDownM2").innerHTML = (' 0' + minutes).slice(-1);
  document.getElementById("countDownS1").innerHTML = (' 0' + seconds).toString()[seconds.toString().length];
  document.getElementById("countDownS2").innerHTML = (' 0' + seconds).slice(-1); // If the count down is over, write some text 

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "Ready";
  }
}, 1000);

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/ContactusForm.vue?vue&type=style&index=0&id=29a4e4ed&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/ContactusForm.vue?vue&type=style&index=0&id=29a4e4ed&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.contact-btn[data-v-29a4e4ed] {\r\n    padding: 12px 35px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    background: #f77736;\r\n    color: white;\n}\n.contact-btn[data-v-29a4e4ed]:hover{\r\n  background: white;\r\n  border: 1px solid #f77736;\r\n  color: #f77736;\n}\n.contact-title[data-v-29a4e4ed]{\r\n    color: black;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=style&index=0&id=b108d124&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=style&index=0&id=b108d124&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.contact-h2[data-v-b108d124] {\r\n    font-size: 21px;\r\n    padding-top: 26px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    color: black;\n}\n.counter-title[data-v-b108d124]{\r\n  font-size: 39px;\r\n  font-family: 'Nunito Sans';\r\n  font-weight: 700;\r\n  color: #212529;\r\n  text-align: center;\r\n  padding: 5px;\r\n  margin-right: 1.6vw;\r\n  margin-bottom: 15px;\n}\n.counter-text[data-v-b108d124]{\r\n  font-size: 18px;\r\n  font-family: 'Nunito Sans';\r\n  font-weight: 600;\r\n  color: #212529;\r\n  text-align: center;\r\n  padding: 5px;\r\n  margin-right: 1.6vw;\r\n  margin-bottom: 50px;\n}\n.counterDigits[data-v-b108d124]{\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-right: 1.6vw;\n}\n.counter-style1[data-v-b108d124]{\r\n  font-size: 28px;\r\n  font-family: 'Nunito Sans';\r\n  font-weight: 600;\r\n  color: white;\r\n  background: black;\r\n  text-align: center;\r\n  border: solid 1px;\r\n  border-radius: 5px;\r\n  margin-right: 1px;\r\n  padding: 5px 10px;\n}\n.counter-style2[data-v-b108d124]{\r\n  font-size: 15px;\r\n  font-family: 'Nunito Sans';\r\n  font-weight: 600;\r\n  color: black;\r\n  text-align: center;\r\n  margin-right: 1.6vw;\r\n  padding: 5px;\r\n  margin-top: -10px;\n}\n.CountDiv[data-v-b108d124]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\n}\n.CountDiv2[data-v-b108d124]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\n}\n.modal-div[data-v-b108d124] {\r\n    display: inline-block;\r\n    text-align: center;\r\n    width: 650px;\n}\n.modal-head[data-v-b108d124] {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    padding: 1rem 1rem;\r\n    border-bottom: none !important;\n}\n@media (max-width: 665px) {\n.modal-div[data-v-b108d124] {\r\n    display: inline-block;\r\n    text-align: center;\r\n    width: 350px;\n}\n.counter-title[data-v-b108d124]{\r\n  font-size: 22px;\r\n  margin-bottom: 5px;\n}\n.counter-text[data-v-b108d124]{\r\n  font-size: 14px;\r\n  margin-bottom: 30px;\n}\n.counter-style1[data-v-b108d124]{\r\n  font-size: 17px;\n}\n.counter-style2[data-v-b108d124]{\r\n  font-size: 13px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/ContactusForm.vue?vue&type=style&index=0&id=29a4e4ed&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/ContactusForm.vue?vue&type=style&index=0&id=29a4e4ed&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactusForm_vue_vue_type_style_index_0_id_29a4e4ed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactusForm.vue?vue&type=style&index=0&id=29a4e4ed&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/ContactusForm.vue?vue&type=style&index=0&id=29a4e4ed&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactusForm_vue_vue_type_style_index_0_id_29a4e4ed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactusForm_vue_vue_type_style_index_0_id_29a4e4ed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=style&index=0&id=b108d124&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=style&index=0&id=b108d124&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_b108d124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactUs.vue?vue&type=style&index=0&id=b108d124&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=style&index=0&id=b108d124&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_b108d124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_b108d124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/front/components/ContactusForm.vue":
/*!*********************************************************!*\
  !*** ./resources/js/front/components/ContactusForm.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactusForm_vue_vue_type_template_id_29a4e4ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactusForm.vue?vue&type=template&id=29a4e4ed&scoped=true& */ "./resources/js/front/components/ContactusForm.vue?vue&type=template&id=29a4e4ed&scoped=true&");
/* harmony import */ var _ContactusForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactusForm.vue?vue&type=script&lang=js& */ "./resources/js/front/components/ContactusForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _ContactusForm_vue_vue_type_style_index_0_id_29a4e4ed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactusForm.vue?vue&type=style&index=0&id=29a4e4ed&scoped=true&lang=css& */ "./resources/js/front/components/ContactusForm.vue?vue&type=style&index=0&id=29a4e4ed&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ContactusForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactusForm_vue_vue_type_template_id_29a4e4ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContactusForm_vue_vue_type_template_id_29a4e4ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "29a4e4ed",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/ContactusForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/layout/Heading.vue":
/*!**********************************************************!*\
  !*** ./resources/js/front/components/layout/Heading.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading.vue?vue&type=template&id=431e53a2& */ "./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&");
/* harmony import */ var _Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading.vue?vue&type=script&lang=js& */ "./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/layout/Heading.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/ContactUs/ContactUs.vue":
/*!**********************************************************!*\
  !*** ./resources/js/front/pages/ContactUs/ContactUs.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactUs_vue_vue_type_template_id_b108d124_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=template&id=b108d124&scoped=true& */ "./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=template&id=b108d124&scoped=true&");
/* harmony import */ var _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=script&lang=js&");
/* harmony import */ var _ContactUs_vue_vue_type_style_index_0_id_b108d124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=style&index=0&id=b108d124&scoped=true&lang=css& */ "./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=style&index=0&id=b108d124&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactUs_vue_vue_type_template_id_b108d124_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ContactUs_vue_vue_type_template_id_b108d124_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b108d124",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/ContactUs/ContactUs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/ContactusForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/front/components/ContactusForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactusForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactusForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/ContactusForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactusForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Heading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/ContactusForm.vue?vue&type=style&index=0&id=29a4e4ed&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/front/components/ContactusForm.vue?vue&type=style&index=0&id=29a4e4ed&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactusForm_vue_vue_type_style_index_0_id_29a4e4ed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactusForm.vue?vue&type=style&index=0&id=29a4e4ed&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/ContactusForm.vue?vue&type=style&index=0&id=29a4e4ed&scoped=true&lang=css&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactusForm_vue_vue_type_style_index_0_id_29a4e4ed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=style&index=0&id=b108d124&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=style&index=0&id=b108d124&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_b108d124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactUs.vue?vue&type=style&index=0&id=b108d124&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=style&index=0&id=b108d124&scoped=true&lang=css&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_b108d124_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/ContactusForm.vue?vue&type=template&id=29a4e4ed&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/front/components/ContactusForm.vue?vue&type=template&id=29a4e4ed&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactusForm_vue_vue_type_template_id_29a4e4ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactusForm_vue_vue_type_template_id_29a4e4ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactusForm_vue_vue_type_template_id_29a4e4ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactusForm.vue?vue&type=template&id=29a4e4ed&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/ContactusForm.vue?vue&type=template&id=29a4e4ed&scoped=true&");


/***/ }),

/***/ "./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Heading.vue?vue&type=template&id=431e53a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&");


/***/ }),

/***/ "./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=template&id=b108d124&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=template&id=b108d124&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_b108d124_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_b108d124_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_b108d124_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactUs.vue?vue&type=template&id=b108d124&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=template&id=b108d124&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/ContactusForm.vue?vue&type=template&id=29a4e4ed&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/ContactusForm.vue?vue&type=template&id=29a4e4ed&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        attrs: { role: "form", enctype: "multipart/form-data" },
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.sendmail()
          },
        },
      },
      [
        _c(
          "div",
          { staticClass: "form-fullwidth" },
          [
            _c("label", { staticClass: "contact-title" }, [_vm._v("Name")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.name,
                  expression: "form.name",
                },
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.form.errors.has("name") },
              attrs: {
                type: "text",
                id: "name",
                placeholder: "Name",
                name: "name",
              },
              domProps: { value: _vm.form.name },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "name", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "name" } }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-fullwidth" },
          [
            _c("label", { staticClass: "contact-title" }, [_vm._v("E-Mail")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.email,
                  expression: "form.email",
                },
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.form.errors.has("email") },
              attrs: {
                type: "text",
                id: "email",
                placeholder: "Email",
                name: "email",
              },
              domProps: { value: _vm.form.email },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "email", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "email" } }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-fullwidth" },
          [
            _c("label", { staticClass: "contact-title" }, [_vm._v("Mobile")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.mobile,
                  expression: "form.mobile",
                },
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.form.errors.has("mobile") },
              attrs: {
                type: "text",
                id: "mobile",
                placeholder: "Mobile",
                name: "mobile",
              },
              domProps: { value: _vm.form.mobile },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "mobile", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "mobile" } }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-fullwidth" },
          [
            _c("label", { staticClass: "contact-title" }, [_vm._v("Message")]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.messagecon,
                  expression: "form.messagecon",
                },
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.form.errors.has("messagecon") },
              attrs: { rows: "5", placeholder: "Message....." },
              domProps: { value: _vm.form.messagecon },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "messagecon", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "messagecon" } }),
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(0),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-fullwidth alignbtn" }, [
      _c("button", { staticClass: "contact-btn" }, [_vm._v("Submit")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("h1", { staticClass: "gbi_main-heading pt-3 text-capitalize" }, [
    _vm._v("\n    " + _vm._s(_vm.text) + "\n"),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=template&id=b108d124&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/ContactUs/ContactUs.vue?vue&type=template&id=b108d124&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "contactus" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("main", [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12 p-t-15" }, [
          _c("article", { staticClass: "container contactus" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12 icons" },
                  [
                    _c("heading", {
                      staticClass: "mb-3",
                      attrs: { text: "Head Office" },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-3" }, [
                      _c("div", { staticClass: "col-1" }, [
                        _c(
                          "figure",
                          {
                            directives: [
                              { name: "lazyload", rawName: "v-lazyload" },
                            ],
                            staticClass: "image__wrapper",
                          },
                          [
                            _c("ImageSpinner", {
                              staticClass: "image__spinner",
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "image__item",
                              attrs: {
                                "data-url":
                                  "assets/front/images/address_icon.png",
                                alt: "address",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-11" }, [
                        _vm._v(
                          "G-32,DDA Commercial Complex, Sheikh Sarai Phase-1, New Delhi 110017"
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-3" }, [
                      _c("div", { staticClass: "col-1" }, [
                        _c(
                          "figure",
                          {
                            directives: [
                              { name: "lazyload", rawName: "v-lazyload" },
                            ],
                            staticClass: "image__wrapper",
                          },
                          [
                            _c("ImageSpinner", {
                              staticClass: "image__spinner",
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "image__item",
                              attrs: {
                                "data-url":
                                  "assets/front/images/phone_icon.png",
                                alt: "address",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._m(1),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-3" }, [
                      _c("div", { staticClass: "col-1" }, [
                        _c(
                          "figure",
                          {
                            directives: [
                              { name: "lazyload", rawName: "v-lazyload" },
                            ],
                            staticClass: "image__wrapper",
                          },
                          [
                            _c("ImageSpinner", {
                              staticClass: "image__spinner",
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "image__item ic-mail",
                              attrs: {
                                "data-url":
                                  "assets/front/images/email_icon.png",
                                alt: "address",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._m(2),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "headline mb-3" },
                      [_c("heading", { attrs: { text: "Regional Office" } })],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-3" }, [
                      _c("div", { staticClass: "col-1" }, [
                        _c(
                          "figure",
                          {
                            directives: [
                              { name: "lazyload", rawName: "v-lazyload" },
                            ],
                            staticClass: "image__wrapper",
                          },
                          [
                            _c("ImageSpinner", {
                              staticClass: "image__spinner",
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "image__item ic-add",
                              attrs: {
                                "data-url":
                                  "assets/front/images/address_icon.png",
                                alt: "address",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-11" }, [
                        _vm._v(
                          "302, Zeenath Residency Srinagar Colony, Plot #29, Hyderabad - 500073 Andhra Pradesh"
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-3" }, [
                      _c("div", { staticClass: "col-1" }, [
                        _c(
                          "figure",
                          {
                            directives: [
                              { name: "lazyload", rawName: "v-lazyload" },
                            ],
                            staticClass: "image__wrapper",
                          },
                          [
                            _c("ImageSpinner", {
                              staticClass: "image__spinner",
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "image__item ic-cal-re",
                              attrs: {
                                "data-url":
                                  "assets/front/images/phone_icon.png",
                                alt: "number",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _vm._m(3),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(4),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c(
                  "article",
                  { staticClass: "contact-form" },
                  [_vm._m(5), _vm._v(" "), _c("ContactusForm")],
                  1
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "contact_us_banner text_on_image banner_bg" },
      [
        _c("div", { staticClass: "content" }, [
          _c("p", { staticClass: "heading" }, [_vm._v("Contact Us")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-11" }, [
      _vm._v("011-26017120, 26011683 ,\n                        "),
      _c("br"),
      _vm._v("+91 9810055102"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-11" }, [
      _vm._v("info@gbinternational.in\n                        "),
      _c("br"),
      _vm._v("reservations@gbinternational.in"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-11" }, [
      _vm._v("+91 9717922240,"),
      _c("br"),
      _vm._v("+91 9810055102"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("iframe", {
        staticStyle: { border: "0" },
        attrs: {
          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1110823555123!2d77.22139051508042!3d28.536380682455928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2214a7825c5%3A0xbef6ae1702026f1c!2sGB+International!5e0!3m2!1sen!2sin!4v1554198180729!5m2!1sen!2sin",
          width: "100%",
          height: "190",
          frameborder: "0",
          loading: "lazy",
          allowfullscreen: "",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title-contact" }, [
      _c("h2", { staticClass: "contact-h2" }, [_vm._v("Contact Us")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);