(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/Dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isStudent: false,
      isTeacher: false,
      isCorporate: false
    };
  },
  components: {
    DashboardStudent: function DashboardStudent() {
      return Promise.all(/*! import() | js/front/DashboardStudent */[__webpack_require__.e("vendors~js/front/BlogsList~js/front/DashboardCorp~js/front/DashboardStudent~js/front/DashboardTeache~70fee0aa"), __webpack_require__.e("vendors~js/front/BlogDetail~js/front/DashboardCorp~js/front/DashboardStudent~js/front/DashboardTeach~c5f0408e"), __webpack_require__.e("js/front/DashboardCorp~js/front/DashboardStudent~js/front/DashboardTeacher"), __webpack_require__.e("js/front/DashboardStudent")]).then(__webpack_require__.bind(null, /*! @/front/pages/user/student/Dashboard.vue */ "./resources/js/front/pages/user/student/Dashboard.vue"));
    },
    DashboardTeacher: function DashboardTeacher() {
      return Promise.all(/*! import() | js/front/DashboardTeacher */[__webpack_require__.e("vendors~js/front/BlogsList~js/front/DashboardCorp~js/front/DashboardStudent~js/front/DashboardTeache~70fee0aa"), __webpack_require__.e("vendors~js/front/BlogDetail~js/front/DashboardCorp~js/front/DashboardStudent~js/front/DashboardTeach~c5f0408e"), __webpack_require__.e("js/front/DashboardCorp~js/front/DashboardStudent~js/front/DashboardTeacher"), __webpack_require__.e("js/front/DashboardTeacher")]).then(__webpack_require__.bind(null, /*! @/front/pages/user/teacher/Dashboard.vue */ "./resources/js/front/pages/user/teacher/Dashboard.vue"));
    },
    DashboardCorp: function DashboardCorp() {
      return Promise.all(/*! import() | js/front/DashboardCorp */[__webpack_require__.e("vendors~js/front/BlogsList~js/front/DashboardCorp~js/front/DashboardStudent~js/front/DashboardTeache~70fee0aa"), __webpack_require__.e("vendors~js/front/BlogDetail~js/front/DashboardCorp~js/front/DashboardStudent~js/front/DashboardTeach~c5f0408e"), __webpack_require__.e("js/front/DashboardCorp~js/front/DashboardStudent~js/front/DashboardTeacher"), __webpack_require__.e("js/front/DashboardCorp")]).then(__webpack_require__.bind(null, /*! @/front/pages/user/corporate/Dashboard.vue */ "./resources/js/front/pages/user/corporate/Dashboard.vue"));
    }
  },
  created: function created() {
    var user = this.$cookies.get('user');

    if (user.user_profession == 'student') {
      this.isStudent = true;
    }

    if (user.user_profession == 'teacher') {
      this.isTeacher = true;
    }

    if (user.user_profession == 'corporate' || user.user_profession == 'director' || user.user_profession == 'employee') {
      this.isCorporate = true;
    }

    console.log(this.isCorporate);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/Dashboard.vue?vue&type=template&id=39a2877f&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/Dashboard.vue?vue&type=template&id=39a2877f& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.isStudent ? _c("dashboard-student") : _vm._e(),
      _vm._v(" "),
      _vm.isTeacher ? _c("dashboard-teacher") : _vm._e(),
      _vm._v(" "),
      _vm.isCorporate ? _c("dashboard-corp") : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/pages/user/Dashboard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/front/pages/user/Dashboard.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_39a2877f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=39a2877f& */ "./resources/js/front/pages/user/Dashboard.vue?vue&type=template&id=39a2877f&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_39a2877f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_39a2877f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/front/pages/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/Dashboard.vue?vue&type=template&id=39a2877f&":
/*!************************************************************************************!*\
  !*** ./resources/js/front/pages/user/Dashboard.vue?vue&type=template&id=39a2877f& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_39a2877f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=39a2877f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/Dashboard.vue?vue&type=template&id=39a2877f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_39a2877f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_39a2877f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);