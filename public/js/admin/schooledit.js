(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/schooledit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/SendLoginDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/SendLoginDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SendLoginDetail",
  props: {
    text: {
      required: false
    },
    url: {
      required: true
    }
  },
  data: function data() {
    return {
      error: false,
      success: false
    };
  },
  methods: {
    sendDetail: function sendDetail() {
      var _this = this;

      axios.get(this.url).then(function (res) {
        _this.$toast.fire({
          icon: "success",
          title: "Login Details Sent Successfully !!!"
        });

        _this.success = "Login Details Sent Successfully";
        _this.error = '';
      })["catch"](function (error) {
        _this.error = "Try Again !!!";
        _this.success = '';
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/school/Edit-school.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/school/Edit-school.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_components_SendLoginDetail_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/SendLoginDetail.vue */ "./resources/js/admin/components/SendLoginDetail.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewSchool",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "send-login-detail": _admin_components_SendLoginDetail_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        school_name: "",
        street: "",
        city_name: "",
        state_name: "",
        country_name: "",
        finance_email_id: "",
        principal_email_id: "",
        principal_name: "",
        principal_mobile_number: "",
        pincode: "",
        mobile: "",
        address: ""
      }),
      loading: false
    };
  },
  created: function created() {
    this.schoolData();
  },
  methods: {
    schoolData: function schoolData() {
      var _this = this;

      axios.get("/api/school/".concat(this.$route.params.id, "/edit")).then(function (res) {
        _this.form.fill(res.data);
      });
    },
    UpdateHotel: function UpdateHotel() {
      var _this2 = this;

      this.form.put("/api/school/".concat(this.$route.params.id)).then(function (res) {
        _this2.loading = true;

        _this2.$toast.fire({
          icon: "success",
          title: "Successfully Updated"
        });

        _this2.loading = false;
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/SendLoginDetail.vue?vue&type=template&id=3dd30a17&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/SendLoginDetail.vue?vue&type=template&id=3dd30a17& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn-outline-blue font-weight-bold",
        attrs: { type: "button" },
        on: { click: _vm.sendDetail },
      },
      [
        _vm.text
          ? _c("span", [
              _c("img", {
                attrs: { src: _vm.$gbiAssets + "/images/icons/send_icon.png" },
              }),
              _vm._v(" " + _vm._s(_vm.text)),
            ])
          : _c("span", [
              _c("img", {
                attrs: { src: _vm.$gbiAssets + "/images/icons/send_icon.png" },
              }),
              _vm._v(" Send Login Details"),
            ]),
      ]
    ),
    _c("br"),
    _vm._v(" "),
    _vm.success
      ? _c("small", { staticClass: "text-success" }, [
          _vm._v(_vm._s(_vm.success)),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.error
      ? _c("small", { staticClass: "text-danger" }, [_vm._v(_vm._s(_vm.error))])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/school/Edit-school.vue?vue&type=template&id=59bd7876&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/school/Edit-school.vue?vue&type=template&id=59bd7876& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "section",
    [
      !_vm.loading
        ? _c("form-layout", {
            scopedSlots: _vm._u(
              [
                {
                  key: "formdata",
                  fn: function () {
                    return [
                      _c(
                        "form",
                        {
                          attrs: {
                            role: "form",
                            enctype: "multipart/form-data",
                          },
                          on: {
                            submit: function ($event) {
                              $event.preventDefault()
                              return _vm.UpdateHotel()
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
                                  _c(
                                    "label",
                                    { attrs: { for: "school_name" } },
                                    [_vm._v("School name")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.school_name,
                                        expression: "form.school_name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.form.errors.has("school_name"),
                                    },
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter School name",
                                    },
                                    domProps: { value: _vm.form.school_name },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "school_name",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "school_name",
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
                                  _c("label", { attrs: { for: "mobile" } }, [
                                    _vm._v("Contact Number"),
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.mobile,
                                        expression: "form.mobile",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.form.errors.has("mobile"),
                                    },
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter Contact Number",
                                    },
                                    domProps: { value: _vm.form.mobile },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "mobile",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "mobile" },
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
                                  _c("label", { attrs: { for: "email" } }, [
                                    _vm._v("Finance Email"),
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.finance_email_id,
                                        expression: "form.finance_email_id",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.form.errors.has("finance_email_id"),
                                    },
                                    attrs: {
                                      type: "email",
                                      placeholder: "Enter Email",
                                      rows: "5",
                                    },
                                    domProps: {
                                      value: _vm.form.finance_email_id,
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "finance_email_id",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "finance_email_id",
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
                                  _c("label", { attrs: { for: "name" } }, [
                                    _vm._v("Principal Name"),
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.principal_name,
                                        expression: "form.principal_name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.form.errors.has("principal_name"),
                                    },
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter Principal Name",
                                      rows: "5",
                                    },
                                    domProps: {
                                      value: _vm.form.principal_name,
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "principal_name",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "principal_name",
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
                                  _c("label", { attrs: { for: "email" } }, [
                                    _vm._v("Principal Email"),
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.principal_email_id,
                                        expression: "form.principal_email_id",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.form.errors.has(
                                          "principal_email_id"
                                        ),
                                    },
                                    attrs: {
                                      type: "email",
                                      placeholder: "Enter Email",
                                      rows: "5",
                                    },
                                    domProps: {
                                      value: _vm.form.principal_email_id,
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "principal_email_id",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "principal_email_id",
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
                                  _c(
                                    "label",
                                    {
                                      attrs: { for: "principal_mobile_number" },
                                    },
                                    [_vm._v("Principal Mobile Number")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.principal_mobile_number,
                                        expression:
                                          "form.principal_mobile_number",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "principal_mobile_number"
                                      ),
                                    },
                                    attrs: {
                                      type: "text",
                                      placeholder:
                                        "Enter Principal Mobile Number",
                                    },
                                    domProps: {
                                      value: _vm.form.principal_mobile_number,
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "principal_mobile_number",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "principal_mobile_number",
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
                                  _c("label", { attrs: { for: "street" } }, [
                                    _vm._v("Street"),
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.street,
                                        expression: "form.street",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.form.errors.has("street"),
                                    },
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter street",
                                    },
                                    domProps: { value: _vm.form.street },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "street",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "street" },
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
                                  _c("label", { attrs: { for: "city" } }, [
                                    _vm._v("City"),
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.city_name,
                                        expression: "form.city_name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.form.errors.has("city_name"),
                                    },
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter city",
                                    },
                                    domProps: { value: _vm.form.city_name },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "city_name",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "city_name",
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
                                  _c("label", { attrs: { for: "state" } }, [
                                    _vm._v("State"),
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.state_name,
                                        expression: "form.state_name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.form.errors.has("state_name"),
                                    },
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter State",
                                    },
                                    domProps: { value: _vm.form.state_name },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "state_name",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "state_name",
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
                                  _c("label", { attrs: { for: "country" } }, [
                                    _vm._v("Country"),
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.country_name,
                                        expression: "form.country_name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.form.errors.has("country_name"),
                                    },
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter country",
                                    },
                                    domProps: { value: _vm.form.country_name },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "country_name",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "country_name",
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
                                  _c("label", { attrs: { for: "pincode" } }, [
                                    _vm._v("School Pincode"),
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pincode,
                                        expression: "form.pincode",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.form.errors.has("pincode"),
                                    },
                                    attrs: {
                                      type: "number",
                                      placeholder: "Enter pincode",
                                    },
                                    domProps: { value: _vm.form.pincode },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pincode",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "pincode" },
                                  }),
                                ],
                                1
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-12" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", { attrs: { for: "address" } }, [
                                    _vm._v("School Address"),
                                  ]),
                                  _vm._v(" "),
                                  _c("textarea", {
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
                                      "is-invalid":
                                        _vm.form.errors.has("address"),
                                    },
                                    attrs: {
                                      placeholder: "School Address",
                                      rows: "3",
                                    },
                                    domProps: { value: _vm.form.address },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "address",
                                          $event.target.value
                                        )
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
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-12" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("send-login-detail", {
                                    attrs: {
                                      url:
                                        "/api/schools-login-details/" +
                                        _vm.$route.params.id,
                                      text: "Send Email & Password",
                                    },
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
              ],
              null,
              false,
              155125369
            ),
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.loading,
              expression: "loading",
            },
          ],
          staticClass: "LoaderDiv",
        },
        [
          _c("img", {
            staticClass: "loaderLogo",
            attrs: { src: "/loader/logo_gif.gif" },
          }),
          _vm._v(" "),
          _c(
            "p",
            {
              staticStyle: {
                "padding-left": "33px",
                "margin-top": "12px",
                "font-weight": "500",
              },
            },
            [_vm._v("Loading..")]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/components/SendLoginDetail.vue":
/*!***********************************************************!*\
  !*** ./resources/js/admin/components/SendLoginDetail.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SendLoginDetail_vue_vue_type_template_id_3dd30a17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SendLoginDetail.vue?vue&type=template&id=3dd30a17& */ "./resources/js/admin/components/SendLoginDetail.vue?vue&type=template&id=3dd30a17&");
/* harmony import */ var _SendLoginDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SendLoginDetail.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/SendLoginDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SendLoginDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SendLoginDetail_vue_vue_type_template_id_3dd30a17___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SendLoginDetail_vue_vue_type_template_id_3dd30a17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/SendLoginDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/SendLoginDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/admin/components/SendLoginDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SendLoginDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SendLoginDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/SendLoginDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SendLoginDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/SendLoginDetail.vue?vue&type=template&id=3dd30a17&":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/components/SendLoginDetail.vue?vue&type=template&id=3dd30a17& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SendLoginDetail_vue_vue_type_template_id_3dd30a17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SendLoginDetail.vue?vue&type=template&id=3dd30a17& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/SendLoginDetail.vue?vue&type=template&id=3dd30a17&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SendLoginDetail_vue_vue_type_template_id_3dd30a17___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SendLoginDetail_vue_vue_type_template_id_3dd30a17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/pages/school/Edit-school.vue":
/*!*********************************************************!*\
  !*** ./resources/js/admin/pages/school/Edit-school.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_school_vue_vue_type_template_id_59bd7876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit-school.vue?vue&type=template&id=59bd7876& */ "./resources/js/admin/pages/school/Edit-school.vue?vue&type=template&id=59bd7876&");
/* harmony import */ var _Edit_school_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit-school.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/school/Edit-school.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_school_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_school_vue_vue_type_template_id_59bd7876___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_school_vue_vue_type_template_id_59bd7876___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/school/Edit-school.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/school/Edit-school.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/pages/school/Edit-school.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_school_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-school.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/school/Edit-school.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_school_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/school/Edit-school.vue?vue&type=template&id=59bd7876&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/pages/school/Edit-school.vue?vue&type=template&id=59bd7876& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_school_vue_vue_type_template_id_59bd7876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-school.vue?vue&type=template&id=59bd7876& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/school/Edit-school.vue?vue&type=template&id=59bd7876&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_school_vue_vue_type_template_id_59bd7876___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_school_vue_vue_type_template_id_59bd7876___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);