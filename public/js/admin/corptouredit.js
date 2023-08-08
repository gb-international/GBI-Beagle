(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/corptouredit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/corporate/tour/Edit-tour.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/corporate/tour/Edit-tour.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EditTour",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "dropdown-filter": _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      itinerary_list: [],
      school_list: [],
      company_list: [],
      tours: [],
      minDate: '',
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        tour_id: "",
        travel_code: "",
        itinerary_id: "",
        school_id: "NA",
        company_id: "",
        customer_type: "",
        tour_start_date: "",
        tour_end_date: "",
        tour_price: ""
      })
    };
  },
  mounted: function mounted() {
    this.tourData();
    this.schoolData();
    this.companyData();
    this.itineraryData();
  },
  methods: {
    tourData: function tourData() {
      var _this = this;

      axios.get("/api/tour/".concat(this.$route.params.id, "/edit")).then(function (response) {
        _this.form.fill(response.data);

        _this.minDate = response.data.tour_start_date;
      });
    },
    schoolData: function schoolData() {
      var _this2 = this;

      axios.get("/api/school").then(function (response) {
        if (response.data) {
          for (var i = 0; i < response.data.length; i++) {
            _this2.school_list.push({
              name: response.data[i].school_name,
              id: response.data[i].id
            });
          }
        }
      });
    },
    companyData: function companyData() {
      var _this3 = this;

      axios.get("/api/company").then(function (response) {
        if (response.data) {
          for (var i = 0; i < response.data.length; i++) {
            _this3.company_list.push({
              name: response.data[i].company_name,
              id: response.data[i].id
            });
          }
        }
      });
    },
    itineraryData: function itineraryData() {
      var _this4 = this;

      axios.get("/api/itinerary").then(function (response) {
        if (response.data) {
          for (var i = 0; i < response.data.length; i++) {
            _this4.itinerary_list.push({
              name: response.data[i].title,
              id: response.data[i].id
            });
          }
        }
      });
    },
    UpdateTour: function UpdateTour() {
      var _this5 = this;

      this.form.put("/api/tour/".concat(this.$route.params.id)).then(function (response) {
        // this.$router.push(`/tours/`);
        _this5.$toast.fire({
          icon: "success",
          title: "Successfully Updated"
        });
      })["catch"](function () {});
    },
    schoolUpdate: function schoolUpdate(value) {
      this.form.school_id = value.id;
    },
    companyUpdate: function companyUpdate(value) {
      this.form.company_id = value.id;
    },
    itineraryUpdate: function itineraryUpdate(value) {
      this.form.itinerary_id = value.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/corporate/tour/Edit-tour.vue?vue&type=template&id=5828e7b7&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/corporate/tour/Edit-tour.vue?vue&type=template&id=5828e7b7& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                    return _vm.UpdateTour()
                  },
                },
              },
              [
                _vm.form.tour_id
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-6 d-hidden" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "tour_id" } }, [
                              _vm._v("Tour Code"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.tour_id,
                                  expression: "form.tour_id",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("tour_id"),
                              },
                              attrs: {
                                type: "text",
                                readonly: "",
                                placeholder: "Enter Tour name",
                              },
                              domProps: { value: _vm.form.tour_id },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "tour_id",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "tour_id" },
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
                            _c("label", { attrs: { for: "travel_code" } }, [
                              _vm._v("Travel Code"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.travel_code,
                                  expression: "form.travel_code",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid":
                                  _vm.form.errors.has("travel_code"),
                              },
                              attrs: {
                                type: "text",
                                placeholder:
                                  "Enter Travel Code to share with client",
                              },
                              domProps: { value: _vm.form.travel_code },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "travel_code",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "travel_code" },
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
                            _c("label", { attrs: { for: "itinerary_id" } }, [
                              _vm._v("Itinerary"),
                            ]),
                            _vm._v(" "),
                            _c("dropdown-filter", {
                              staticClass: "mb-2",
                              attrs: { itemList: _vm.itinerary_list },
                              model: {
                                value: _vm.form.itinerary_id,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "itinerary_id", $$v)
                                },
                                expression: "form.itinerary_id",
                              },
                            }),
                            _vm._v(" "),
                            _vm.form.errors.has("itinerary_id")
                              ? _c("div", { staticClass: "error" }, [
                                  _c(
                                    "label",
                                    { staticClass: "danger text-danger" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.form.errors.get("itinerary_id")
                                        )
                                      ),
                                    ]
                                  ),
                                ])
                              : _vm._e(),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _vm.form.customer_type == "school"
                        ? _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: "itinerary_id" } },
                                  [_vm._v("School")]
                                ),
                                _vm._v(" "),
                                _c("dropdown-filter", {
                                  staticClass: "mb-2",
                                  attrs: { itemList: _vm.school_list },
                                  model: {
                                    value: _vm.form.school_id,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.form, "school_id", $$v)
                                    },
                                    expression: "form.school_id",
                                  },
                                }),
                                _vm._v(" "),
                                _vm.form.errors.has("school_id")
                                  ? _c("div", { staticClass: "error" }, [
                                      _c(
                                        "label",
                                        { staticClass: "danger text-danger" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.form.errors.get("school_id")
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.customer_type == "corporate"
                        ? _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: "itinerary_id" } },
                                  [_vm._v("Company")]
                                ),
                                _vm._v(" "),
                                _c("dropdown-filter", {
                                  staticClass: "mb-2",
                                  attrs: { itemList: _vm.company_list },
                                  model: {
                                    value: _vm.form.company_id,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.form, "company_id", $$v)
                                    },
                                    expression: "form.company_id",
                                  },
                                }),
                                _vm._v(" "),
                                _vm.form.errors.has("company_id")
                                  ? _c("div", { staticClass: "error" }, [
                                      _c(
                                        "label",
                                        { staticClass: "danger text-danger" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.form.errors.get("company_id")
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "tour_start_date" } }, [
                              _vm._v("Tour Start Date"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.tour_start_date,
                                  expression: "form.tour_start_date",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid":
                                  _vm.form.errors.has("tour_start_date"),
                              },
                              attrs: {
                                type: "date",
                                placeholder: "Enter Tour Start Date",
                                min: _vm.minDate,
                              },
                              domProps: { value: _vm.form.tour_start_date },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "tour_start_date",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: {
                                form: _vm.form,
                                field: "tour_start_date",
                              },
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
                            _c("label", { attrs: { for: "tour_end_date" } }, [
                              _vm._v("Tour End Date"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.tour_end_date,
                                  expression: "form.tour_end_date",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid":
                                  _vm.form.errors.has("tour_end_date"),
                              },
                              attrs: {
                                type: "date",
                                placeholder: "Enter Enter Date",
                                min: _vm.form.tour_start_date,
                              },
                              domProps: { value: _vm.form.tour_end_date },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "tour_end_date",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "tour_end_date" },
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
                            _c("label", { attrs: { for: "tour_price" } }, [
                              _vm._v("Tour Price"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.tour_price,
                                  expression: "form.tour_price",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("tour_price"),
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter Tour Price",
                              },
                              domProps: { value: _vm.form.tour_price },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "tour_price",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "tour_price" },
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

/***/ "./resources/js/admin/pages/corporate/tour/Edit-tour.vue":
/*!***************************************************************!*\
  !*** ./resources/js/admin/pages/corporate/tour/Edit-tour.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_tour_vue_vue_type_template_id_5828e7b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit-tour.vue?vue&type=template&id=5828e7b7& */ "./resources/js/admin/pages/corporate/tour/Edit-tour.vue?vue&type=template&id=5828e7b7&");
/* harmony import */ var _Edit_tour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit-tour.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/corporate/tour/Edit-tour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_tour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_tour_vue_vue_type_template_id_5828e7b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_tour_vue_vue_type_template_id_5828e7b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/corporate/tour/Edit-tour.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/corporate/tour/Edit-tour.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/pages/corporate/tour/Edit-tour.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_tour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-tour.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/corporate/tour/Edit-tour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_tour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/corporate/tour/Edit-tour.vue?vue&type=template&id=5828e7b7&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/pages/corporate/tour/Edit-tour.vue?vue&type=template&id=5828e7b7& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_tour_vue_vue_type_template_id_5828e7b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-tour.vue?vue&type=template&id=5828e7b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/corporate/tour/Edit-tour.vue?vue&type=template&id=5828e7b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_tour_vue_vue_type_template_id_5828e7b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_tour_vue_vue_type_template_id_5828e7b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);