"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/hotelview"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/BackButton.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/BackButton.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BackButtonGBI",
  props: ['url'],
  methods: {
    goBack: function goBack() {
      this.$router.back();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/ViewLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/ViewLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_components_buttons_BackButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/admin/components/buttons/BackButton.vue */ "./resources/js/admin/components/buttons/BackButton.vue");
//
//
//
//
//
//
//
//
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
  name: "ViewLayoutGBI",
  components: {
    'back-button': _admin_components_buttons_BackButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['backurl']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/hotel/View_hotel.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/hotel/View_hotel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_components_layout_ViewLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/admin/components/layout/ViewLayout.vue */ "./resources/js/admin/components/layout/ViewLayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ViewHotel",
  components: {
    "view-layout": _admin_components_layout_ViewLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      hotels: []
    };
  },
  created: function created() {
    this.hotelView();
  },
  methods: {
    hotelView: function hotelView() {
      var _this = this;

      axios.get("/api/hotel/".concat(this.$route.params.id)).then(function (res) {
        _this.hotels = res.data;
        console.log(res);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/components/buttons/BackButton.vue":
/*!**************************************************************!*\
  !*** ./resources/js/admin/components/buttons/BackButton.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BackButton_vue_vue_type_template_id_3b4fca32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackButton.vue?vue&type=template&id=3b4fca32& */ "./resources/js/admin/components/buttons/BackButton.vue?vue&type=template&id=3b4fca32&");
/* harmony import */ var _BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackButton.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/buttons/BackButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackButton_vue_vue_type_template_id_3b4fca32___WEBPACK_IMPORTED_MODULE_0__.render,
  _BackButton_vue_vue_type_template_id_3b4fca32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/buttons/BackButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/layout/ViewLayout.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/components/layout/ViewLayout.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ViewLayout_vue_vue_type_template_id_19749bd9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewLayout.vue?vue&type=template&id=19749bd9& */ "./resources/js/admin/components/layout/ViewLayout.vue?vue&type=template&id=19749bd9&");
/* harmony import */ var _ViewLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewLayout.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/layout/ViewLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewLayout_vue_vue_type_template_id_19749bd9___WEBPACK_IMPORTED_MODULE_0__.render,
  _ViewLayout_vue_vue_type_template_id_19749bd9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/layout/ViewLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/hotel/View_hotel.vue":
/*!*******************************************************!*\
  !*** ./resources/js/admin/pages/hotel/View_hotel.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_hotel_vue_vue_type_template_id_42adc81e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View_hotel.vue?vue&type=template&id=42adc81e& */ "./resources/js/admin/pages/hotel/View_hotel.vue?vue&type=template&id=42adc81e&");
/* harmony import */ var _View_hotel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View_hotel.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/hotel/View_hotel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_hotel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_hotel_vue_vue_type_template_id_42adc81e___WEBPACK_IMPORTED_MODULE_0__.render,
  _View_hotel_vue_vue_type_template_id_42adc81e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/hotel/View_hotel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/buttons/BackButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/components/buttons/BackButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/BackButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/layout/ViewLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/components/layout/ViewLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/ViewLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/hotel/View_hotel.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/pages/hotel/View_hotel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_hotel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View_hotel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/hotel/View_hotel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_hotel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/buttons/BackButton.vue?vue&type=template&id=3b4fca32&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/components/buttons/BackButton.vue?vue&type=template&id=3b4fca32& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_3b4fca32___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_3b4fca32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_3b4fca32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackButton.vue?vue&type=template&id=3b4fca32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/BackButton.vue?vue&type=template&id=3b4fca32&");


/***/ }),

/***/ "./resources/js/admin/components/layout/ViewLayout.vue?vue&type=template&id=19749bd9&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/components/layout/ViewLayout.vue?vue&type=template&id=19749bd9& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewLayout_vue_vue_type_template_id_19749bd9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewLayout_vue_vue_type_template_id_19749bd9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewLayout_vue_vue_type_template_id_19749bd9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ViewLayout.vue?vue&type=template&id=19749bd9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/ViewLayout.vue?vue&type=template&id=19749bd9&");


/***/ }),

/***/ "./resources/js/admin/pages/hotel/View_hotel.vue?vue&type=template&id=42adc81e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/pages/hotel/View_hotel.vue?vue&type=template&id=42adc81e& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_hotel_vue_vue_type_template_id_42adc81e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_hotel_vue_vue_type_template_id_42adc81e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_hotel_vue_vue_type_template_id_42adc81e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View_hotel.vue?vue&type=template&id=42adc81e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/hotel/View_hotel.vue?vue&type=template&id=42adc81e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/BackButton.vue?vue&type=template&id=3b4fca32&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/BackButton.vue?vue&type=template&id=3b4fca32& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "span",
    [
      _vm.url
        ? _c(
            "router-link",
            {
              staticClass:
                "btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",
              attrs: { to: _vm.url },
              on: {
                click: function ($event) {
                  return _vm.goBack()
                },
              },
            },
            [_vm._t("default", [_vm._v("Back")])],
            2
          )
        : _c(
            "button",
            {
              staticClass:
                "btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.goBack()
                },
              },
            },
            [_vm._t("default", [_vm._v("Back")])],
            2
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/ViewLayout.vue?vue&type=template&id=19749bd9&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/ViewLayout.vue?vue&type=template&id=19749bd9& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "row pt-3 pb-4" }, [
      _c(
        "div",
        { staticClass: "col-sm-12 card_view" },
        [
          _vm._t("viewdata"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center" },
            [_c("back-button", { attrs: { url: _vm.backurl } })],
            1
          ),
        ],
        2
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/hotel/View_hotel.vue?vue&type=template&id=42adc81e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/hotel/View_hotel.vue?vue&type=template&id=42adc81e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("view-layout", {
    attrs: { backurl: "/hotel-list" },
    scopedSlots: _vm._u([
      {
        key: "viewdata",
        fn: function () {
          return [
            _c("div", { staticClass: "row pl-3" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Name")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.name))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Email")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.email))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Phone Number")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.phoneno))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Hotel Star")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.type))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Address")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.address))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Room")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.room) + "/-")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Api Single")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.api_single))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Api Double")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.api_double))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Api Triple")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.api_triple))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Api Quad")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.api_quad))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Mapai Single")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.mapi_single))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Mapai Double")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.mapi_double))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Mapai Triple")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.mapi_triple))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Mapai Quad")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.mapi_quad))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Cpai Single")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.cpai_single))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Cpai Double")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.cpai_double))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Cpai Triple")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.cpai_triple))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Cpai Quad")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.cpai_quad))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Created At")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.created_at))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Updated At")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.hotels.updated_at))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("h5", [_vm._v("Image")]),
                _vm._v(" "),
                _c("p", [
                  _c("img", {
                    staticClass: "width-140",
                    attrs: { src: _vm.hotels.image },
                  }),
                ]),
              ]),
            ]),
          ]
        },
        proxy: true,
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);