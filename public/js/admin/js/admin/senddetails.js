"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/senddetails"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/sales/Submit-details.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/sales/Submit-details.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewItineraryAccount",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__.Form,
    'has-error': vform__WEBPACK_IMPORTED_MODULE_0__.HasError
  },
  data: function data() {
    return {
      // Create a new form instance
      itineraryData: '',
      SchoolData: '',
      form: new vform__WEBPACK_IMPORTED_MODULE_0__.Form({
        title: '',
        selling_price: '',
        no_of_client: '',
        start_date: '',
        end_date: '',
        client_id: ''
      })
    };
  },
  created: function created() {
    var _this = this;

    this.$store.dispatch('getEditData', "/account/edit/".concat(this.$route.params.id));
    var api = "/api/school";
    window.axios.get(api).then(function (_ref) {
      var data = _ref.data;
      _this.SchoolData = data.data;
    });
  },
  computed: {
    // Get the data to the edit and fill the form with data to show in the form
    editData: function editData() {
      setTimeout(function () {
        return $('#example').DataTable();
      }, 1000);
      this.form.fill(this.$store.getters.getEditData); // Fill the form with the data
    }
  },
  methods: {
    // Function to add the form data 
    addAccount: function addAccount() {
      var _this2 = this;

      var api = "/account_booking/store/" + this.$route.params.id;
      this.form.post(api).then(function (response) {
        if (response.data == 'error') {
          _this2.$swal.fire({
            title: 'opps',
            text: "Something Wrong Try again",
            type: 'error'
          });
        } else {
          _this2.$router.push('/itinerary-from-account');

          _this2.$toast.fire({
            icon: 'success',
            title: 'Successfull'
          });
        } // End if else part

      })["catch"](function () {});
    } // End the function

  }
});

/***/ }),

/***/ "./resources/js/admin/pages/sales/Submit-details.vue":
/*!***********************************************************!*\
  !*** ./resources/js/admin/pages/sales/Submit-details.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Submit_details_vue_vue_type_template_id_a36f0f8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submit-details.vue?vue&type=template&id=a36f0f8e& */ "./resources/js/admin/pages/sales/Submit-details.vue?vue&type=template&id=a36f0f8e&");
/* harmony import */ var _Submit_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submit-details.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/sales/Submit-details.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Submit_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Submit_details_vue_vue_type_template_id_a36f0f8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Submit_details_vue_vue_type_template_id_a36f0f8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/sales/Submit-details.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/sales/Submit-details.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/admin/pages/sales/Submit-details.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Submit_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Submit-details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/sales/Submit-details.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Submit_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/sales/Submit-details.vue?vue&type=template&id=a36f0f8e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/pages/sales/Submit-details.vue?vue&type=template&id=a36f0f8e& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submit_details_vue_vue_type_template_id_a36f0f8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submit_details_vue_vue_type_template_id_a36f0f8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submit_details_vue_vue_type_template_id_a36f0f8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Submit-details.vue?vue&type=template&id=a36f0f8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/sales/Submit-details.vue?vue&type=template&id=a36f0f8e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/sales/Submit-details.vue?vue&type=template&id=a36f0f8e&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/sales/Submit-details.vue?vue&type=template&id=a36f0f8e& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _vm._v("\n  " + _vm._s(_vm.editData) + "\n      "),
      _c("div", { staticClass: "row justify-content-around" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "form",
            {
              attrs: { role: "form", enctype: "multipart/form-data" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.addAccount()
                },
              },
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "name" } }, [
                        _vm._v("Itinerary Title "),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.title,
                            expression: "form.title",
                          },
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("title") },
                        attrs: { type: "text", name: "title", readonly: "" },
                        domProps: { value: _vm.form.title },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "title", $event.target.value)
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
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "position" } }, [
                        _vm._v("Selling Price"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.selling_price,
                            expression: "form.selling_price",
                          },
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("selling_price"),
                        },
                        attrs: {
                          type: "number",
                          placeholder: "Enter selling_price",
                          name: "selling_price",
                          min: "1",
                        },
                        domProps: { value: _vm.form.selling_price },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "selling_price",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "selling_price" },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "Location" } }, [
                        _vm._v("No Of Client"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.no_of_client,
                            expression: "form.no_of_client",
                          },
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("no_of_client"),
                        },
                        attrs: {
                          type: "number",
                          placeholder: "Enter no_of_client",
                          name: "no_of_client",
                          min: "1",
                        },
                        domProps: { value: _vm.form.no_of_client },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "no_of_client",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "no_of_client" },
                      }),
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
                      _c("label", { attrs: { for: "Location" } }, [
                        _vm._v("Tour Start Date"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.start_date,
                            expression: "form.start_date",
                          },
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("start_date"),
                        },
                        attrs: {
                          type: "date",
                          placeholder: "Enter start_date",
                          name: "start_date",
                        },
                        domProps: { value: _vm.form.start_date },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "start_date",
                              $event.target.value
                            )
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "start_date" },
                      }),
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
                      _c("label", { attrs: { for: "Location" } }, [
                        _vm._v("Tour End Date"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.end_date,
                            expression: "form.end_date",
                          },
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("end_date"),
                        },
                        attrs: {
                          type: "date",
                          placeholder: "Enter end_date",
                          name: "end_date",
                        },
                        domProps: { value: _vm.form.end_date },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "end_date", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "end_date" },
                      }),
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
                      _c("label", { attrs: { for: "client_id" } }, [
                        _vm._v("School Name"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.client_id,
                              expression: "form.client_id",
                            },
                          ],
                          staticClass: "form-control select-field",
                          class: {
                            "is-invalid": _vm.form.errors.has("client_id"),
                          },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "client_id",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        _vm._l(_vm.SchoolData, function (school) {
                          return _c(
                            "option",
                            { key: school.id, domProps: { value: school.id } },
                            [_vm._v(_vm._s(school.school_name))]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "client_id" },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
              _vm._v(" "),
              _vm._m(0),
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-4" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-4" }, [
        _c("div", { staticClass: "form-group text-center" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-block itrn_add_btn",
              attrs: { type: "submit" },
            },
            [_vm._v("Submit")]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-4" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);