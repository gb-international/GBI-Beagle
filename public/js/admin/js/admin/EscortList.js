"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/EscortList"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ListEscrtUpdate",
  data: function data() {
    return {
      escort: ""
    };
  },
  created: function created() {
    this.escortUpdate();
  },
  methods: {
    escortUpdate: function escortUpdate() {
      var _this = this;

      axios.get("/api/escortUpdates/".concat(this.$route.params.tour_code)).then(function (res) {
        _this.escort = res.data;
      });
    },
    goBack: function goBack() {
      this.$router.push("/booked-tour/".concat(this.$route.params.id));
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue":
/*!******************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _New_EscortUpdate_vue_vue_type_template_id_020708f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New-EscortUpdate.vue?vue&type=template&id=020708f0& */ "./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue?vue&type=template&id=020708f0&");
/* harmony import */ var _New_EscortUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New-EscortUpdate.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_EscortUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_EscortUpdate_vue_vue_type_template_id_020708f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _New_EscortUpdate_vue_vue_type_template_id_020708f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bookedtour/New-EscortUpdate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_EscortUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./New-EscortUpdate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_EscortUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue?vue&type=template&id=020708f0&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue?vue&type=template&id=020708f0& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_EscortUpdate_vue_vue_type_template_id_020708f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_EscortUpdate_vue_vue_type_template_id_020708f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_EscortUpdate_vue_vue_type_template_id_020708f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./New-EscortUpdate.vue?vue&type=template&id=020708f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue?vue&type=template&id=020708f0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue?vue&type=template&id=020708f0&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/New-EscortUpdate.vue?vue&type=template&id=020708f0& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "reservation" }, [
            _c("div", { staticClass: "ml-4" }, [
              _c("div", { staticClass: "ml-1" }, [
                _vm._m(0),
                _vm._v(" "),
                _vm.escort.escort
                  ? _c("div", { staticClass: "w-100" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("table", { staticClass: "table" }, [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("tbody", [
                            _c("tr", [
                              _c("td", { staticClass: "border-0" }, [
                                _vm._v("Male"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-center border-0" },
                                [
                                  _vm._v(
                                    "\n                          " +
                                      _vm._s(_vm.escort.total_male) +
                                      "\n                        "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-center border-0" },
                                [
                                  _vm._v(
                                    "\n                          " +
                                      _vm._s(_vm.escort.absent_male) +
                                      "\n                        "
                                  ),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "border-0" }, [
                                _vm._v("Female"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-center border-0" },
                                [
                                  _vm._v(
                                    "\n                          " +
                                      _vm._s(_vm.escort.total_male) +
                                      "\n                        "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-center border-0" },
                                [
                                  _vm._v(
                                    "\n                          " +
                                      _vm._s(_vm.escort.absent_male) +
                                      "\n                        "
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c("p", { staticClass: "m-0" }, [
                        _vm._v(_vm._s(_vm.escort.message)),
                      ]),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _c("p", {}, [_vm._v(_vm._s(_vm.escort.escort.name))]),
                    ])
                  : _c("div", { staticClass: "mt-5 text-center" }, [
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("No Updates from escort"),
                      ]),
                    ]),
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
    return _c("p", [_c("label", [_vm._v("Update from Escort")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", { staticClass: "border-0" }, [_vm._v("Gender")]),
      _vm._v(" "),
      _c("th", { staticClass: "text-center border-0" }, [_vm._v("Passenger")]),
      _vm._v(" "),
      _c("th", { staticClass: "text-center border-0" }, [
        _vm._v("Absent Passenger"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "m-0" }, [
      _c("label", [_vm._v("Comment from Escort")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "m-0 mt-3" }, [
      _c("label", [_vm._v("Escort Name")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);