(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/accountitineraryview"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Account-itinerary-view.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/itinerary/Account-itinerary-view.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EditSaleAccountItinerary",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"]
  },
  data: function data() {
    return {
      // Create a new form instance
      booking_fieldz: false,
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        title: "",
        price: "",
        name: "",
        phoneno: "",
        selling_price: "",
        no_of_client: "",
        start_date: "",
        end_date: "",
        booking_id: "",
        status: ""
      })
    };
  },
  created: function created() {
    this.getData(); // this.$store.dispatch(
    //   "getEditData",
    //   `/accounts/${this.$route.params.id}/show`
    // );
  },
  // computed: {
  //   editData() {
  //     this.form.fill(this.$store.getters.getEditData); // Fill the form with the data
  //   },
  // },
  methods: {
    // Function to add the form data
    getData: function getData() {
      var api = "/api/accounts/".concat(this.$route.params.id);
      axios.get(api).then(function (res) {
        console.log(res);
      });
    },
    editSalesdp: function editSalesdp() {
      var _this = this;

      if (this.booking_fieldz == false) {
        this.$swal.fire("Enter Booking ID", "Booking Id should be Unique.", "alert"); // tour code

        axios.get("/api/tour").then(function (response) {
          if (response.data) {
            _this.tours = response.data.data;

            if (_this.tours.length >= 1) {
              var last_id = _this.tours[_this.tours.length - 1].id;
              last_id++;
              var javaScriptRelease = "TOURCODE000" + last_id;
              _this.form.booking_id = javaScriptRelease;
            } else {
              var javaScriptRelease = "TOURCODE000" + "0";
              _this.form.booking_id = javaScriptRelease;
            }
          }
        }); //end tour code

        return this.booking_fieldz = true;
      } else {
        this.form.status = "confirm";
        this.form.post("/account/update/".concat(this.$route.params.id)).then(function (response) {
          _this.$router.push("/account-itinerary");

          _this.$toast.fire({
            icon: "success",
            title: "Successfully Updated !!!"
          });
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    // End the function
    // Cancel Function
    BookingCancel: function BookingCancel() {
      var _this2 = this;

      this.form.status = "cancel";
      this.form.post("/account/update/".concat(this.$route.params.id)).then(function (response) {
        _this2.$router.push("/account-itinerary");

        _this2.$toast.fire({
          icon: "error",
          title: "Successfully Canceled !!!"
        });
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Account-itinerary-view.vue?vue&type=template&id=7defd0d8&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/itinerary/Account-itinerary-view.vue?vue&type=template&id=7defd0d8& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
                  return _vm.editSalesdp()
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
                        _vm._v("Itinerary Title"),
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
                        attrs: {
                          type: "text",
                          name: "title",
                          placeholder: "Enter title",
                          readonly: "",
                        },
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
                        attrs: { form: _vm.form, field: "title" },
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
                      _c("label", { attrs: { for: "position" } }, [
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
                        class: { "is-invalid": _vm.form.errors.has("price") },
                        attrs: {
                          type: "text",
                          placeholder: "Enter price",
                          name: "price",
                          readonly: "",
                        },
                        domProps: { value: _vm.form.price },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "price", $event.target.value)
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
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "salary" } }, [
                        _vm._v("name"),
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
                          placeholder: "Enter name",
                          name: "name",
                          readonly: "",
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
                _c("div", { staticClass: "col-sm-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "phoneno" } }, [
                        _vm._v("Phoneno"),
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
                        class: { "is-invalid": _vm.form.errors.has("phoneno") },
                        attrs: {
                          type: "text",
                          placeholder: "Enter phoneno",
                          name: "phoneno",
                          readonly: "",
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
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "address" } }, [
                        _vm._v("Selling price(Sales Dep)"),
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
                          type: "text",
                          placeholder: "Enter selling_price",
                          name: "selling_price",
                          readonly: "",
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
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "no_of_client" } }, [
                        _vm._v("No Of Clients"),
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
                          type: "text",
                          name: "no_of_client",
                          readonly: "",
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "start_date" } }, [
                        _vm._v("Start Date"),
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
                          placeholder: "Enter Email",
                          id: "start_date",
                          rows: "5",
                          name: "start_date",
                          readonly: "",
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
                _c("div", { staticClass: "col-sm-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "end_date" } }, [
                        _vm._v("End Date"),
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
                          id: "end_date",
                          rows: "5",
                          name: "end_date",
                          readonly: "",
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
                _vm.booking_fieldz
                  ? _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "booking_id" } }, [
                            _vm._v("Booking ID(Unique)"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.booking_id,
                                expression: "form.booking_id",
                              },
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("booking_id"),
                            },
                            attrs: {
                              type: "text",
                              id: "booking_id",
                              name: "booking_id",
                            },
                            domProps: { value: _vm.form.booking_id },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "booking_id",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "booking_id" },
                          }),
                        ],
                        1
                      ),
                    ])
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c(
                    "div",
                    { staticClass: "form-group text-center" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-success itrn_add_btn back_btn",
                          attrs: { to: "/account-itinerary" },
                        },
                        [_vm._v("Back")]
                      ),
                      _vm._v(" "),
                      _vm.form.selling_price != null
                        ? _c("span", [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-primary itrn_add_btn back_btn",
                                attrs: { type: "submit" },
                              },
                              [
                                _vm._v(
                                  "\n                    CONFIRM / UPDATE\n                  "
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-primary itrn_add_btn cancel",
                                attrs: { type: "button" },
                                on: {
                                  click: function ($event) {
                                    return _vm.BookingCancel()
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                    CANCEL\n                  "
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
                _c("div", { staticClass: "col-sm-4" }),
              ]),
            ]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/itinerary/Account-itinerary-view.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/Account-itinerary-view.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Account_itinerary_view_vue_vue_type_template_id_7defd0d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account-itinerary-view.vue?vue&type=template&id=7defd0d8& */ "./resources/js/admin/pages/itinerary/Account-itinerary-view.vue?vue&type=template&id=7defd0d8&");
/* harmony import */ var _Account_itinerary_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Account-itinerary-view.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/itinerary/Account-itinerary-view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Account_itinerary_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Account_itinerary_view_vue_vue_type_template_id_7defd0d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Account_itinerary_view_vue_vue_type_template_id_7defd0d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/itinerary/Account-itinerary-view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/itinerary/Account-itinerary-view.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/Account-itinerary-view.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_itinerary_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Account-itinerary-view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Account-itinerary-view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_itinerary_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/itinerary/Account-itinerary-view.vue?vue&type=template&id=7defd0d8&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/Account-itinerary-view.vue?vue&type=template&id=7defd0d8& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_itinerary_view_vue_vue_type_template_id_7defd0d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Account-itinerary-view.vue?vue&type=template&id=7defd0d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Account-itinerary-view.vue?vue&type=template&id=7defd0d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_itinerary_view_vue_vue_type_template_id_7defd0d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_itinerary_view_vue_vue_type_template_id_7defd0d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);