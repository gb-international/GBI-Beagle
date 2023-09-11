"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/corppayadd"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NewPaymentUser",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__.Form,
    'has-error': vform__WEBPACK_IMPORTED_MODULE_0__.HasError
  },
  data: function data() {
    return {
      // Create a new form instance
      form: new vform__WEBPACK_IMPORTED_MODULE_0__.Form({
        name: ""
      })
    };
  },
  methods: {
    AddPaymnt: function AddPaymnt() {
      var _this = this;

      var path = "/api/tourtype";
      this.form.post(path).then(function (response) {
        _this.$router.push("/tourtype");

        _this.$toast.fire({
          icon: "success",
          title: "Successfully Updated !!!"
        });
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.errors = error.response.data.errors || {};
        }
      });
    },
    goBack: function goBack() {
      this.$router.push("/tourtype");
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _New_payment_vue_vue_type_template_id_10a9b3be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New-payment.vue?vue&type=template&id=10a9b3be& */ "./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue?vue&type=template&id=10a9b3be&");
/* harmony import */ var _New_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New-payment.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_payment_vue_vue_type_template_id_10a9b3be___WEBPACK_IMPORTED_MODULE_0__.render,
  _New_payment_vue_vue_type_template_id_10a9b3be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./New-payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue?vue&type=template&id=10a9b3be&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue?vue&type=template&id=10a9b3be& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_payment_vue_vue_type_template_id_10a9b3be___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_payment_vue_vue_type_template_id_10a9b3be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_payment_vue_vue_type_template_id_10a9b3be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./New-payment.vue?vue&type=template&id=10a9b3be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue?vue&type=template&id=10a9b3be&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue?vue&type=template&id=10a9b3be&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/corporate/tour/userpayment/New-payment.vue?vue&type=template&id=10a9b3be& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "form",
            {
              attrs: { role: "form", enctype: "multipart/form-data" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.AddPaymnt()
                },
              },
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "name" } }, [
                        _vm._v("tourtype Name"),
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
                          placeholder: "Enter tourtype Name",
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-2" }),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group text-center" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary itrn_add_btn",
                        on: {
                          click: function ($event) {
                            return _vm.goBack()
                          },
                        },
                      },
                      [_vm._v("Back")]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-2" }),
              ]),
            ]
          ),
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
    return _c("div", { staticClass: "col-sm-4" }, [
      _c("div", { staticClass: "form-group text-center" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-block itrn_add_btn",
            attrs: { type: "submit" },
          },
          [_vm._v("SUBMIT")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);