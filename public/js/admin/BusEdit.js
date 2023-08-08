(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/BusEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bus/Edit-bus.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bus/Edit-bus.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/form/DropdownList.vue */ "./resources/js/admin/components/form/DropdownList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NewBus",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "dropdown-filter": _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      // Create a new form instance
      seater_list: [{
        name: '10',
        id: '10'
      }, {
        name: '20',
        id: '20'
      }, {
        name: '30',
        id: '30'
      }, {
        name: '35',
        id: '35'
      }, {
        name: '40',
        id: '40'
      }, {
        name: '45',
        id: '45'
      }, {
        name: '50',
        id: '50'
      }],
      seat_type: [{
        name: '2*2',
        id: '2*2'
      }, {
        name: '3*2',
        id: '3*2'
      }, {
        name: 'Sigle seater',
        id: 'Sigle seater'
      }, {
        name: 'Multi seater',
        id: 'Multi seater'
      }],
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        company_name: "",
        seater: "",
        seat_type: "",
        price: ""
      })
    };
  },
  created: function created() {
    this.editBus();
  },
  methods: {
    editBus: function editBus() {
      var _this = this;

      axios.get("/api/bus/".concat(this.$route.params.id, "/edit")).then(function (response) {
        _this.form.fill(response.data);
      });
    },
    UpdateBus: function UpdateBus() {
      var _this2 = this;

      this.form.put("/api/bus/".concat(this.$route.params.id)).then(function (response) {
        _this2.$toast.fire({
          icon: "success",
          title: "Successfully Updated"
        });
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bus/Edit-bus.vue?vue&type=template&id=d8b95596&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bus/Edit-bus.vue?vue&type=template&id=d8b95596& ***!
  \****************************************************************************************************************************************************************************************************************/
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
                    return _vm.UpdateBus()
                  },
                },
              },
              [
                _vm.form.company_name
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "company_name" } }, [
                              _vm._v("Bus Company name"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.company_name,
                                  expression: "form.company_name",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid":
                                  _vm.form.errors.has("company_name"),
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter name",
                              },
                              domProps: { value: _vm.form.company_name },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "company_name",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "company_name" },
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
                            _c("label", { attrs: { for: "seater" } }, [
                              _vm._v("Seater"),
                            ]),
                            _vm._v(" "),
                            _c("dropdown-filter", {
                              staticClass: "mb-2",
                              attrs: { itemList: _vm.seater_list },
                              model: {
                                value: _vm.form.seater,
                                callback: function ($$v) {
                                  _vm.$set(
                                    _vm.form,
                                    "seater",
                                    typeof $$v === "string" ? $$v.trim() : $$v
                                  )
                                },
                                expression: "form.seater",
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "seater" },
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
                            _c("label", { attrs: { for: "seat_type" } }, [
                              _vm._v("Seat type"),
                            ]),
                            _vm._v(" "),
                            _c("dropdown-filter", {
                              staticClass: "mb-2",
                              attrs: { itemList: _vm.seat_type },
                              model: {
                                value: _vm.form.seat_type,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "seat_type", $$v)
                                },
                                expression: "form.seat_type",
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "seat_type" },
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
                            _c("label", { attrs: { for: "price" } }, [
                              _vm._v("Price"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.price,
                                  expression: "form.price",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("price"),
                              },
                              attrs: {
                                type: "number",
                                placeholder: "Enter price",
                                rows: "5",
                              },
                              domProps: { value: _vm.form.price },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "price",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "price" },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ])
                  : _vm._e(),
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



/***/ }),

/***/ "./resources/js/admin/pages/bus/Edit-bus.vue":
/*!***************************************************!*\
  !*** ./resources/js/admin/pages/bus/Edit-bus.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_bus_vue_vue_type_template_id_d8b95596___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit-bus.vue?vue&type=template&id=d8b95596& */ "./resources/js/admin/pages/bus/Edit-bus.vue?vue&type=template&id=d8b95596&");
/* harmony import */ var _Edit_bus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit-bus.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bus/Edit-bus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_bus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_bus_vue_vue_type_template_id_d8b95596___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_bus_vue_vue_type_template_id_d8b95596___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bus/Edit-bus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bus/Edit-bus.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/admin/pages/bus/Edit-bus.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_bus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-bus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bus/Edit-bus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_bus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bus/Edit-bus.vue?vue&type=template&id=d8b95596&":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/pages/bus/Edit-bus.vue?vue&type=template&id=d8b95596& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_bus_vue_vue_type_template_id_d8b95596___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-bus.vue?vue&type=template&id=d8b95596& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bus/Edit-bus.vue?vue&type=template&id=d8b95596&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_bus_vue_vue_type_template_id_d8b95596___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_bus_vue_vue_type_template_id_d8b95596___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);