<<<<<<< Updated upstream
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/escortedit"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/FormButtons.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/FormButtons.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
 //import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FormButtonGBI",
  props: ['loading'],
  components: {
    'back-button': _admin_components_buttons_BackButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"] //'submit-button':SubmitButton

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/FormLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/FormLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FromLayoutGBI",
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/escort/Edit-escort.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/escort/Edit-escort.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EditEscort",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__.Form,
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__.HasError,
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__.Form({
        name: "",
        salaryPerday: "",
        phoneno: "",
        email: "",
        address: ""
      })
    };
  },
  created: function created() {
    this.escortData();
  },
  methods: {
    escortData: function escortData() {
      var _this = this;

      axios.get("/api/escort/".concat(this.$route.params.id, "/edit")).then(function (response) {
        _this.form.fill(response.data);
      });
    },
    updateEscort: function updateEscort() {
      var _this2 = this;

      this.form.put("/api/escort/".concat(this.$route.params.id)).then(function (response) {
        _this2.$router.push("/escort-list");

        _this2.$toast.fire({
          icon: "success",
          title: "Escort Updated successfully"
        });
      })["catch"](function () {});
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

/***/ "./resources/js/admin/components/buttons/FormButtons.vue":
/*!***************************************************************!*\
  !*** ./resources/js/admin/components/buttons/FormButtons.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormButtons_vue_vue_type_template_id_06170d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormButtons.vue?vue&type=template&id=06170d98& */ "./resources/js/admin/components/buttons/FormButtons.vue?vue&type=template&id=06170d98&");
/* harmony import */ var _FormButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormButtons.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/buttons/FormButtons.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormButtons_vue_vue_type_template_id_06170d98___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormButtons_vue_vue_type_template_id_06170d98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/buttons/FormButtons.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/layout/FormLayout.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/components/layout/FormLayout.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormLayout_vue_vue_type_template_id_25c09338___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLayout.vue?vue&type=template&id=25c09338& */ "./resources/js/admin/components/layout/FormLayout.vue?vue&type=template&id=25c09338&");
/* harmony import */ var _FormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLayout.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/layout/FormLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLayout_vue_vue_type_template_id_25c09338___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormLayout_vue_vue_type_template_id_25c09338___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/layout/FormLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/escort/Edit-escort.vue":
/*!*********************************************************!*\
  !*** ./resources/js/admin/pages/escort/Edit-escort.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_escort_vue_vue_type_template_id_74a7f395___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit-escort.vue?vue&type=template&id=74a7f395& */ "./resources/js/admin/pages/escort/Edit-escort.vue?vue&type=template&id=74a7f395&");
/* harmony import */ var _Edit_escort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit-escort.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/escort/Edit-escort.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_escort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_escort_vue_vue_type_template_id_74a7f395___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_escort_vue_vue_type_template_id_74a7f395___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/escort/Edit-escort.vue"
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

/***/ "./resources/js/admin/components/buttons/FormButtons.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/components/buttons/FormButtons.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormButtons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/FormButtons.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/layout/FormLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/components/layout/FormLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/FormLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/escort/Edit-escort.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/pages/escort/Edit-escort.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_escort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit-escort.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/escort/Edit-escort.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_escort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/admin/components/buttons/FormButtons.vue?vue&type=template&id=06170d98&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/components/buttons/FormButtons.vue?vue&type=template&id=06170d98& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButtons_vue_vue_type_template_id_06170d98___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButtons_vue_vue_type_template_id_06170d98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButtons_vue_vue_type_template_id_06170d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormButtons.vue?vue&type=template&id=06170d98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/FormButtons.vue?vue&type=template&id=06170d98&");


/***/ }),

/***/ "./resources/js/admin/components/layout/FormLayout.vue?vue&type=template&id=25c09338&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/components/layout/FormLayout.vue?vue&type=template&id=25c09338& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_template_id_25c09338___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_template_id_25c09338___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_template_id_25c09338___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormLayout.vue?vue&type=template&id=25c09338& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/FormLayout.vue?vue&type=template&id=25c09338&");


/***/ }),

/***/ "./resources/js/admin/pages/escort/Edit-escort.vue?vue&type=template&id=74a7f395&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/pages/escort/Edit-escort.vue?vue&type=template&id=74a7f395& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_escort_vue_vue_type_template_id_74a7f395___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_escort_vue_vue_type_template_id_74a7f395___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_escort_vue_vue_type_template_id_74a7f395___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit-escort.vue?vue&type=template&id=74a7f395& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/escort/Edit-escort.vue?vue&type=template&id=74a7f395&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/FormButtons.vue?vue&type=template&id=06170d98&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/FormButtons.vue?vue&type=template&id=06170d98& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c(
      "div",
      { staticClass: "col-sm-9 text-center" },
      [
        _c("back-button"),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",
          },
          [
            _vm._t("default", [
              _vm._v(_vm._s(_vm.loading ? "submitting" : "submit")),
            ]),
          ],
          2
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/FormLayout.vue?vue&type=template&id=25c09338&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/FormLayout.vue?vue&type=template&id=25c09338& ***!
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
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row justify-content-around" }, [
        _c(
          "div",
          {
            staticClass: "col-md-12 pl-4 pb-5",
            staticStyle: { position: "relative" },
          },
          [_vm._t("formdata")],
          2
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/escort/Edit-escort.vue?vue&type=template&id=74a7f395&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/escort/Edit-escort.vue?vue&type=template&id=74a7f395& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("form-layout", {
    scopedSlots: _vm._u([
      {
        key: "formdata",
        fn: function () {
          return [
            _c(
              "form",
              {
                attrs: { role: "form", enctype: "multipart/form-data" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.updateEscort()
                  },
                },
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Name"),
                        ]),
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
                            placeholder: "Add Name",
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
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "name" },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "salaryPerday" } }, [
                          _vm._v("Salary Per Day"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.salaryPerday,
                              expression: "form.salaryPerday",
                            },
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("salaryPerday"),
                          },
                          attrs: {
                            type: "text",
                            id: "salaryPerday",
                            placeholder: "Salary Per Day",
                            name: "salaryPerday",
                          },
                          domProps: { value: _vm.form.salaryPerday },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "salaryPerday",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "salaryPerday" },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "phoneno" } }, [
                          _vm._v("Phone Number"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.phoneno,
                              expression: "form.phoneno",
                            },
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("phoneno"),
                          },
                          attrs: {
                            type: "text",
                            id: "phoneno",
                            placeholder: "Phone Number",
                            name: "phoneno",
                          },
                          domProps: { value: _vm.form.phoneno },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "phoneno", $event.target.value)
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "phoneno" },
                        }),
                      ],
                      1
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v("Email"),
                        ]),
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
                            type: "email",
                            id: "email",
                            placeholder: "Enter Email",
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
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "email" },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-8" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "address" } }, [
                          _vm._v("Address"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.address,
                              expression: "form.address",
                            },
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("address"),
                          },
                          attrs: {
                            type: "text",
                            id: "address",
                            placeholder: "Enter Address",
                            name: "address",
                          },
                          domProps: { value: _vm.form.address },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "address", $event.target.value)
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "address" },
                        }),
                      ],
                      1
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("form-buttons"),
              ],
              1
            ),
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
=======
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5867],{20947:(t,a,r)=>{r.d(a,{Z:()=>o});const e={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const o=(0,r(51900).Z)(e,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("span",[t.url?r("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(a){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):r("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(a){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},35803:(t,a,r)=>{r.d(a,{Z:()=>o});const e={name:"FormButtonGBI",props:["loading"],components:{"back-button":r(20947).Z}};const o=(0,r(51900).Z)(e,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-sm-9 text-center"},[r("back-button"),t._v(" "),r("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v(t._s(t.loading?"submitting":"submit"))])],2)],1)])}),[],!1,null,null,null).exports},85516:(t,a,r)=>{r.d(a,{Z:()=>o});const e={name:"FromLayoutGBI",data:function(){return{}}};const o=(0,r(51900).Z)(e,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("section",{staticClass:"content"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row justify-content-around"},[r("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},59730:(t,a,r)=>{r.r(a),r.d(a,{default:()=>i});var e=r(50175),o=r(35803),s=r(85516);const n={name:"EditEscort",components:{Form:e.Form,"has-error":e.HasError,"form-buttons":o.Z,"form-layout":s.Z},data:function(){return{form:new e.Form({name:"",salaryPerday:"",phoneno:"",email:"",address:""})}},created:function(){this.escortData()},methods:{escortData:function(){var t=this;axios.get("/api/escort/".concat(this.$route.params.id,"/edit")).then((function(a){t.form.fill(a.data)}))},updateEscort:function(){var t=this;this.form.put("/api/escort/".concat(this.$route.params.id)).then((function(a){t.$router.push("/escort-list"),t.$toast.fire({icon:"success",title:"Escort Updated successfully"})})).catch((function(){}))}}};const i=(0,r(51900).Z)(n,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[r("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.updateEscort()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",id:"name",placeholder:"Add Name",name:"name"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"salaryPerday"}},[t._v("Salary Per Day")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.salaryPerday,expression:"form.salaryPerday"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("salaryPerday")},attrs:{type:"text",id:"salaryPerday",placeholder:"Salary Per Day",name:"salaryPerday"},domProps:{value:t.form.salaryPerday},on:{input:function(a){a.target.composing||t.$set(t.form,"salaryPerday",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"salaryPerday"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phoneno"}},[t._v("Phone Number")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phoneno,expression:"form.phoneno"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phoneno")},attrs:{type:"text",id:"phoneno",placeholder:"Phone Number",name:"phoneno"},domProps:{value:t.form.phoneno},on:{input:function(a){a.target.composing||t.$set(t.form,"phoneno",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"phoneno"}})],1)])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",id:"email",placeholder:"Enter Email",name:"email"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-8"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[t._v("Address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{type:"text",id:"address",placeholder:"Enter Address",name:"address"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"address"}})],1)])]),t._v(" "),r("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);
>>>>>>> Stashed changes
