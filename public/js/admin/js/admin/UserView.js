"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/UserView"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/website/user/View.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/website/user/View.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ViewUsers",
  data: function data() {
    return {
      user: []
    };
  },
  created: function created() {
    this.busView();
  },
  methods: {
    busView: function busView() {
      var _this = this;

      axios.get("/api/user/".concat(this.$route.params.id)).then(function (response) {
        _this.user = response.data;
      });
    },
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/pages/website/user/View.vue":
/*!********************************************************!*\
  !*** ./resources/js/admin/pages/website/user/View.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_vue_vue_type_template_id_5f4de73c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=5f4de73c& */ "./resources/js/admin/pages/website/user/View.vue?vue&type=template&id=5f4de73c&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/website/user/View.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_5f4de73c___WEBPACK_IMPORTED_MODULE_0__.render,
  _View_vue_vue_type_template_id_5f4de73c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/website/user/View.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/website/user/View.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/pages/website/user/View.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/website/user/View.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/website/user/View.vue?vue&type=template&id=5f4de73c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/pages/website/user/View.vue?vue&type=template&id=5f4de73c& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_5f4de73c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_5f4de73c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_5f4de73c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=template&id=5f4de73c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/website/user/View.vue?vue&type=template&id=5f4de73c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/website/user/View.vue?vue&type=template&id=5f4de73c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/website/user/View.vue?vue&type=template&id=5f4de73c& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row justify-content-around" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "container container_admin_body" }, [
          _c("div", { staticClass: "card_view" }, [
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c("h5", [_vm._v("Name")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.user.name))]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("h5", [_vm._v("Email")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.user.email))]),
              ]),
              _vm._v(" "),
              _vm.user.information
                ? _c("div", { staticClass: "col-sm-6 text-center" }, [
                    _c("img", {
                      staticClass: "img-circle w-80",
                      attrs: { src: _vm.user.information.photo },
                    }),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _vm.user.information
              ? _c("div", { staticClass: "information" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("h5", [_vm._v("Phone Number")]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.user.information.phone_no))]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("h5", [_vm._v("Father Name")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.user.information.father_name)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("h5", [_vm._v("Mother Name")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.user.information.mother_name)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("h5", [_vm._v("DOB")]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.user.information.dob))]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("h5", [_vm._v("Gender")]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.user.information.gender))]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("h5", [_vm._v("User Profession")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.user.information.user_profession)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm.user.information.school_id != null
                      ? _c("div", { staticClass: "col-sm-6" }, [
                          _c("h5", [_vm._v("School")]),
                          _vm._v(" "),
                          _c(
                            "p",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to:
                                      "/view-school/" +
                                      _vm.user.information.school.id,
                                  },
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.user.information.school.school_name
                                    ) +
                                      " (ID :\n                    " +
                                      _vm._s(_vm.user.information.school.id) +
                                      ")"
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.information.user_profession == "corporate"
                      ? _c("div", { staticClass: "col-sm-6" }, [
                          _c("h5", [_vm._v("Corporate")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.user.information.profession_name)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _c("b", [_vm._v("Address: ")]),
                            _vm._v(
                              _vm._s(_vm.user.information.profession_address) +
                                "\n                "
                            ),
                          ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c("h5", [_vm._v("Code")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.user.information.institution_code)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("h5", [_vm._v("Address")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                  " +
                            _vm._s(_vm.user.information.address) +
                            "\n                  " +
                            _vm._s(_vm.user.information.city) +
                            "," +
                            _vm._s(_vm.user.information.zip_code) +
                            ",\n                  " +
                            _vm._s(_vm.user.information.state) +
                            "," +
                            _vm._s(_vm.user.information.country) +
                            "\n                "
                        ),
                      ]),
                    ]),
                  ]),
                ])
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary itrn_add_btn back_btn",
              on: {
                click: function ($event) {
                  return _vm.goBack()
                },
              },
            },
            [_vm._v("\n          Back\n        ")]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);