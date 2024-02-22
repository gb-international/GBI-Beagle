"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/front/FeedbackForm2"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: "FeedbackLink",
  components: {},
  data: function data() {
    return {
      itinerary: "",
      feedback: {
        name: "",
        ph_no: "",
        email: "",
        tour_id: "",
        trip_itenerary: 0,
        place_of_stay: 0,
        food_quality: 0,
        transport_arrangements: 0,
        recommend_to_others: 0,
        travel_again: 0,
        escort_hospitality: 0,
        comments: ""
      }
    };
  },
  beforeCreate: function beforeCreate() {
    var metaInfo = {
      title: 'GBI Feedback Form',
      description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
      keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
      url: 'https://www.gowithgbi.com/feedback',
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  mounted: function mounted() {
    $(".feedback-slider").mousemove(function (e) {
      var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      var percent = val * 100;
      $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + percent + '%, #17a2b8), ' + 'color-stop(' + percent + '%, #d3d3d3)' + ')');
      $(this).css('background-image', '-moz-linear-gradient(left center, #17a2b8 0%, #17a2b8 ' + percent + '%, #17a2b8 ' + percent + '%, #17a2b8 100%)');
    });
    $(".feedback-slider").on("touchmove", function (e) {
      var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      var percent = val * 100;
      $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + percent + '%, #17a2b8), ' + 'color-stop(' + percent + '%, #d3d3d3)' + ')');
      $(this).css('background-image', '-moz-linear-gradient(left center, #17a2b8 0%, #17a2b8 ' + percent + '%, #17a2b8 ' + percent + '%, #17a2b8 100%)');
    });
    $(".feedback-slider").on("tap", function (e) {
      var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      var percent = val * 100;
      $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + percent + '%, #17a2b8), ' + 'color-stop(' + percent + '%, #d3d3d3)' + ')');
      $(this).css('background-image', '-moz-linear-gradient(left center, #17a2b8 0%, #17a2b8 ' + percent + '%, #17a2b8 ' + percent + '%, #17a2b8 100%)');
    });
    this.feedback.tour_id = this.$route.params.tourID;
    this.getTour();
  },
  computed: {},
  methods: {
    getTour: function getTour() {
      var _this = this;

      this.$axios.get("/api/get-tour/" + this.$route.params.tourID).then(function (response) {
        _this.itinerary = response.data;
      });
    },
    submitFeedback: function submitFeedback() {
      var _this2 = this;

      if (this.feedback.name == "" || this.feedback.ph_no == "" || this.feedback.email == "" || this.feedback.tour_id == "" || this.feedback.trip_itenerary == 0 || this.feedback.place_of_stay == 0 || this.feedback.food_quality == 0 || this.feedback.transport_arrangements == 0 || this.feedback.recommend_to_others == 0 || this.feedback.travel_again == 0 || this.feedback.escort_hospitality == 0) {
        this.$swal.fire({
          icon: 'warning',
          title: "Error",
          text: "Please fill out all the fields correctly."
        });
      } else if (String(this.feedback.ph_no).length !== 10) {
        this.$toast.fire({
          icon: "error",
          title: "Please provide a valid phone number."
        });
      } else {
        this.$axios.post("/api/feedback-submit", this.feedback, {}).then(function (response) {
          if (response.data == "error") {
            _this2.$swal.fire({
              icon: 'warning',
              title: "Error",
              text: "Error Occured, Please Try Again."
            });
          }
        })["catch"](function (error) {});
        this.$swal.fire("Success", "Feedback Submitted", "success");
        window.location.href = '/';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=style&index=0&id=cf0e77d0&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=style&index=0&id=cf0e77d0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.feedback-container[data-v-cf0e77d0] {\r\n  height: 100%;\r\n  width: 60%;\r\n  font-family: sans-serif;\r\n  margin: auto;\n}\n.FormTitle[data-v-cf0e77d0]{\r\n  text-align: center;\r\n  font-size: 35px;\r\n  padding-top: 60px; \r\n  padding-bottom: 40px;\r\n  font-weight: 550;\r\n  margin-left: -10px\n}\n.TourDetails[data-v-cf0e77d0]{\r\n  font-size: 25px;\r\n  font-weight: 550;\r\n  padding-bottom: 35px;\n}\n.FeedbackQ[data-v-cf0e77d0]{\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  color: black;\r\n  margin-bottom: 45px;\n}\n.inputDiv[data-v-cf0e77d0]{\r\n  display: flex;\n}\n.form-control[data-v-cf0e77d0]{\r\n  border: solid gray 1px;\r\n  height: 50px;\r\n  border-radius: 0px;\r\n  width: 98%;\n}\n.feedback-slider[data-v-cf0e77d0] {\r\n  -webkit-appearance: none;\r\n  width: 300px;\r\n  height: 12.5px;\r\n  background: #d3d3d3;\r\n  border-radius: 15px;\r\n  margin-right: 7px;\n}\n.feedback-slider[data-v-cf0e77d0]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  border: solid #17a2b8 6px;\r\n  background: white;\r\n  cursor: pointer;\n}\n.feedback-slider[data-v-cf0e77d0]::-moz-range-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  border: solid #17a2b8 6px;\r\n  background: white;\r\n  cursor: pointer;\n}\n.feedback-slide[data-v-cf0e77d0]::-ms-thumb {\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  border: solid #17a2b8 6px;\r\n  background: white;\r\n  cursor: pointer;\n}\n.range-value[data-v-cf0e77d0] {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 60px;\r\n  color: #fff;\r\n  font-size: 16px;\r\n  font-weight:bold;\r\n  line-height: 20px;\r\n  text-align: center;\r\n  border-radius: 3px;\r\n  background: #17a2b8;\r\n  padding: 5px 10px;\r\n  margin-left: 7px;\n}\n.range-value[data-v-cf0e77d0]:after {\r\n  position: absolute;\r\n  top: 8px;\r\n  left: -7px;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 7px solid transparent;\r\n  border-right: 7px solid #17a2b8;\r\n  border-bottom: 7px solid transparent;\r\n  content: '';\n}\n.commentArea[data-v-cf0e77d0]{\r\n  background: #d3d3d3;\r\n  border: none;\r\n  outline-color: #17a2b8;\r\n  width: 100%;\n}\n.submitButton[data-v-cf0e77d0]{\r\n  border-radius: 3px;\r\n  border: 1px;\r\n  border-radius: 0px;\r\n  outline: none;\r\n  padding: 15px 70px;\r\n  margin-top: 10px;\r\n  color: white;\r\n  font-size: 20px !important;\r\n  font-weight: 500;\r\n  font-family: sans-serif;\r\n  background-color: #17a2b8;\n}\n.submitDiv[data-v-cf0e77d0]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\n}\n.emailField[data-v-cf0e77d0]{\r\n  width: 98.9%\n}\n.valDiv[data-v-cf0e77d0]{\r\n  margin-top: -5px; \r\n  font-size: 15px; \r\n  font-weight: 500;\r\n  padding:  6px;\r\n  background: grey;\n}\ninput[type=range][data-v-cf0e77d0] {\r\n  pointer-events: none;\n}\ninput[type=range][data-v-cf0e77d0]::-webkit-slider-thumb {\r\n  pointer-events: auto;\n}\ninput[type=range][data-v-cf0e77d0]::-moz-range-thumb {\r\n  pointer-events: auto;\n}\ninput[type=range][data-v-cf0e77d0]::-ms-thumb {\r\n  pointer-events: auto;\n}\n@media only screen and (max-width: 1024px) {\n.feedback-container[data-v-cf0e77d0] {\r\n    width: 90%;\n}\n.submitDiv[data-v-cf0e77d0]{\r\n    width: 90%;\n}\n.FormTitle[data-v-cf0e77d0]{\r\n    font-size: 25px;\n}\n.TourDetails[data-v-cf0e77d0]{\r\n    font-size: 20px;\n}\n.feedback-slider[data-v-cf0e77d0] {\r\n    width: 200px;\n}\n}\n@media only screen and (max-width: 720px) {\n.commentArea[data-v-cf0e77d0] {\r\n     width: 100%;\n}\n.emailField[data-v-cf0e77d0]{\r\n    width: 100%\n}\n.submitDiv[data-v-cf0e77d0]{\r\n    width: 100%;\n}\n}\r\n\r\n\r\n/* Chrome, Safari, Edge, Opera */\ninput[data-v-cf0e77d0]::-webkit-outer-spin-button,\r\ninput[data-v-cf0e77d0]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\n}\r\n\r\n/* Firefox */\ninput[type=number][data-v-cf0e77d0] {\r\n  -moz-appearance: textfield;\n}\nul[data-v-cf0e77d0], li[data-v-cf0e77d0] { padding:0; margin:0; list-style: none;\n}\n.listblock li[data-v-cf0e77d0] { float: left;  margin: 4px; padding: 0px 0px 0px 0px; cursor: pointer; position: relative;\r\n   transition: all 0.5s ease-in-out; -webkit-transition: all 0.5s ease-in-out;\r\n   -moz-transition: all 0.5s ease-in-out; border-radius: 50%;\n}\n.listblock li[data-v-cf0e77d0]:hover, .listblock li.active[data-v-cf0e77d0] { background:#2f2a52; border: 3px solid #2f2a52;\n}\n.listblock ul li img[data-v-cf0e77d0]{ height: 33px; margin-top: -3px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=style&index=0&id=cf0e77d0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=style&index=0&id=cf0e77d0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_old_vue_vue_type_style_index_0_id_cf0e77d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./feedback_old.vue?vue&type=style&index=0&id=cf0e77d0&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=style&index=0&id=cf0e77d0&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_old_vue_vue_type_style_index_0_id_cf0e77d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_old_vue_vue_type_style_index_0_id_cf0e77d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/front/pages/Feedback/feedback_old.vue":
/*!************************************************************!*\
  !*** ./resources/js/front/pages/Feedback/feedback_old.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _feedback_old_vue_vue_type_template_id_cf0e77d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback_old.vue?vue&type=template&id=cf0e77d0&scoped=true& */ "./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=template&id=cf0e77d0&scoped=true&");
/* harmony import */ var _feedback_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback_old.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=script&lang=js&");
/* harmony import */ var _feedback_old_vue_vue_type_style_index_0_id_cf0e77d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback_old.vue?vue&type=style&index=0&id=cf0e77d0&scoped=true&lang=css& */ "./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=style&index=0&id=cf0e77d0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _feedback_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _feedback_old_vue_vue_type_template_id_cf0e77d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _feedback_old_vue_vue_type_template_id_cf0e77d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cf0e77d0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/Feedback/feedback_old.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./feedback_old.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_old_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=style&index=0&id=cf0e77d0&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=style&index=0&id=cf0e77d0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_old_vue_vue_type_style_index_0_id_cf0e77d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./feedback_old.vue?vue&type=style&index=0&id=cf0e77d0&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=style&index=0&id=cf0e77d0&scoped=true&lang=css&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_old_vue_vue_type_style_index_0_id_cf0e77d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=template&id=cf0e77d0&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=template&id=cf0e77d0&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_old_vue_vue_type_template_id_cf0e77d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_old_vue_vue_type_template_id_cf0e77d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_old_vue_vue_type_template_id_cf0e77d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./feedback_old.vue?vue&type=template&id=cf0e77d0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=template&id=cf0e77d0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=template&id=cf0e77d0&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/Feedback/feedback_old.vue?vue&type=template&id=cf0e77d0&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "feedback-container" }, [
    _c("h1", { staticClass: "FormTitle" }, [_vm._v("GBI FEEDBACK FORM")]),
    _vm._v(" "),
    _vm.itinerary !== ""
      ? _c("h2", { staticClass: "TourDetails" }, [
          _vm._v(
            _vm._s(_vm.itinerary.noofdays) +
              " DAYS TOUR TO " +
              _vm._s(_vm.itinerary.title)
          ),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("form", [
      _c("div", { staticClass: "feedback-section " }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [_vm._v("How Would You Rate Your Place Of Stay?")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.place_of_stay,
                expression: "feedback.place_of_stay",
              },
            ],
            staticClass: "feedback-slider",
            attrs: { type: "range", min: "1", max: "10" },
            domProps: { value: _vm.feedback.place_of_stay },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "place_of_stay",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.place_of_stay)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [_vm._v("How Would You Rate the food quality and service?")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.food_quality,
                expression: "feedback.food_quality",
              },
            ],
            staticClass: "feedback-slider",
            attrs: { type: "range", min: "1", max: "10" },
            domProps: { value: _vm.feedback.food_quality },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "food_quality",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.food_quality)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [
            _vm._v("How were your Transportation and other arrangements?"),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.transport_arrangements,
                expression: "feedback.transport_arrangements",
              },
            ],
            staticClass: "feedback-slider",
            attrs: { type: "range", min: "1", max: "10" },
            domProps: { value: _vm.feedback.transport_arrangements },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "transport_arrangements",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.transport_arrangements)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [
            _vm._v(
              "How likely would you Recommend GB International To Others?"
            ),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.recommend_to_others,
                expression: "feedback.recommend_to_others",
              },
            ],
            staticClass: "feedback-slider",
            attrs: { type: "range", min: "1", max: "10" },
            domProps: { value: _vm.feedback.recommend_to_others },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "recommend_to_others",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.recommend_to_others)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [
            _vm._v("Would you like to Travel with GBI again on a new Journey?"),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.travel_again,
                expression: "feedback.travel_again",
              },
            ],
            staticClass: "feedback-slider",
            attrs: { type: "range", min: "1", max: "10" },
            domProps: { value: _vm.feedback.travel_again },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "travel_again",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.travel_again)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [
            _vm._v(
              "How hospitable was our GBI Escort who accompanied with you on this trip?"
            ),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.escort_hospitality,
                expression: "feedback.escort_hospitality",
              },
            ],
            staticClass: "feedback-slider",
            attrs: { type: "range", min: "1", max: "10" },
            domProps: { value: _vm.feedback.escort_hospitality },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "escort_hospitality",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.escort_hospitality)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [_vm._v("Other Comments")]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.comments,
                expression: "feedback.comments",
              },
            ],
            staticClass: "commentArea",
            attrs: { placeholder: "", cols: "", rows: "5" },
            domProps: { value: _vm.feedback.comments },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.feedback, "comments", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.feedback.name,
                        expression: "feedback.name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Name" },
                    domProps: { value: _vm.feedback.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.feedback, "name", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("has-error", { attrs: { form: _vm.form, field: "name" } }),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "ph_no" } }, [
                    _vm._v("Phone Number"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.feedback.ph_no,
                        expression: "feedback.ph_no",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", placeholder: "Phone Number" },
                    domProps: { value: _vm.feedback.ph_no },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.feedback, "ph_no", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "ph_no" },
                  }),
                ],
                1
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c(
                "div",
                { staticClass: "form-group emailField" },
                [
                  _c("label", { attrs: { for: "email" } }, [
                    _vm._v("Email ID "),
                    _vm.$route.name == "FeedbackForm2"
                      ? _c("span", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v("(Please enter your registered Email ID)"),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.feedback.email,
                        expression: "feedback.email",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "email", placeholder: "Email ID" },
                    domProps: { value: _vm.feedback.email },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.feedback, "email", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "email" },
                  }),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "submitDiv" }, [
        _c(
          "button",
          { staticClass: "submitButton", on: { click: _vm.submitFeedback } },
          [_vm._v("SUBMIT")]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "FeedbackQ" }, [
      _c("p", [_vm._v("Did you like the Itinerary of this trip?")]),
      _vm._v(" "),
      _c("div", { staticClass: "listblock" }, [
        _c("ul", [
          _c("li", { staticClass: "active" }, [
            _c("img", {
              attrs: { src: "http://localhost:8000/sad.svg", alt: "" },
            }),
          ]),
          _vm._v(" "),
          _c("li", {}, [
            _c("img", {
              attrs: { src: "http://localhost:8000/sad.svg", alt: "" },
            }),
          ]),
          _vm._v(" "),
          _c("li", {}, [
            _c("img", {
              attrs: { src: "http://localhost:8000/sad.svg", alt: "" },
            }),
          ]),
          _vm._v(" "),
          _c("li", {}, [
            _c("img", {
              attrs: { src: "http://localhost:8000/smiley.svg", alt: "" },
            }),
          ]),
          _vm._v(" "),
          _c("li", {}, [
            _c("img", {
              attrs: { src: "http://localhost:8000/smiley.svg", alt: "" },
            }),
          ]),
          _vm._v(" "),
          _c("li", {}, [
            _c("img", {
              attrs: { src: "http://localhost:8000/smiley.svg", alt: "" },
            }),
          ]),
          _vm._v(" "),
          _c("li", {}, [
            _c("img", {
              attrs: { src: "http://localhost:8000/smiley.svg", alt: "" },
            }),
          ]),
          _vm._v(" "),
          _c("li", {}, [
            _c("img", {
              attrs: { src: "http://localhost:8000/smiley.svg", alt: "" },
            }),
          ]),
          _vm._v(" "),
          _c("li", {}, [
            _c("img", {
              attrs: { src: "http://localhost:8000/smiley.svg", alt: "" },
            }),
          ]),
          _vm._v(" "),
          _c("li", {}, [
            _c("img", {
              attrs: { src: "http://localhost:8000/smiley.svg", alt: "" },
            }),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);