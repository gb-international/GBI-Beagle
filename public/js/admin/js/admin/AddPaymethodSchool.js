<<<<<<< Updated upstream
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/AddPaymethodSchool"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Tour-listPaymentAdd",
  components: {
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__.HasError
  },
  data: function data() {
    var _ref;

    return _ref = {
      chequePage: false,
      tours: "",
      formShow: false,
      payment_mode: "self",
      self_pay_mode: "cheque",
      teacher_section: false,
      student_section: false,
      student_bank: [],
      bankdetail: [],
      banknames: [],
      userinfo: "",
      robot: false,
      totalTeachers: "",
      totalStudents: "",
      teacherform: new vform__WEBPACK_IMPORTED_MODULE_0__.Form({
        payment_mode: "self",
        payment_type: "",
        tour_code: this.$route.params.tour_code,
        schoolbankdetail_id: "",
        amount: "",
        user_id: "",
        school_id: this.$route.params.school_id,
        cheque_bank_name: "",
        date_of_issue: "",
        ifsc_code: "",
        cheque_number: "",
        added_by: "GBI"
      }),
      form: new vform__WEBPACK_IMPORTED_MODULE_0__.Form({
        name: "",
        bank_name: "",
        account_number: "",
        account_type: "",
        ifsc_code: "",
        tour_code: this.$route.params.tour_code
      }),
      account_type: ["Current Account", "Saving Account", "Recurring Deposit Account", "Fixed Deposit Account"]
    }, _defineProperty(_ref, "banknames", []), _defineProperty(_ref, "touruser", ''), _defineProperty(_ref, "perhead", 0), _ref;
  },
  mounted: function mounted() {
    this.userData();
  },
  methods: {
    onVerify: function onVerify(response) {
      if (response) this.robot = true;
    },
    onCaptchaExpired: function onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
    userData: function userData() {
      var _this = this;

      var data = {
        school_id: this.$route.params.school_id,
        tour_code: this.$route.params.tour_code
      };
      axios.post("/api/gettourusers", data).then(function (response) {
        _this.teacherform.user_id = response.data.user_id;
        _this.perhead = response.data.amount;
        _this.touruser = response.data.tour;
        _this.teacherform.amount = _this.touruser[0].total * _this.perhead;
        _this.totalTeachers = response.data.teachers;
        _this.totalStudents = response.data.students;
        console.log(response);
      })["catch"](function (error) {});
    },
    submitPayment: function submitPayment() {
      this.teacherform.school_id = this.$route.params.school_id;

      if (this.teacherform.payment_mode == "self" && this.teacherform.payment_type == "cheque") {
        this.chequePage = true;
      }

      if (this.teacherform.payment_mode == "self" && this.teacherform.payment_type == "cash") {
        this.submitForm();
      }

      if (this.teacherform.payment_mode == "student") {
        this.teacherform.payment_type = "";
        this.submitForm();
      }

      return false;
    },
    bankNameList: function bankNameList() {
      var _this2 = this;

      axios.get("/api/banknames").then(function (response) {
        _this2.banknames = response.data;
      });
    },
    StudentBank: function StudentBank() {
      var _this3 = this;

      var data = {
        tour_code: this.$route.params.id
      };
      this.$axios.post("/api/tour-bankdetail-student").then(function (response) {
        _this3.student_bank = response.data;
      })["catch"](function (error) {
        _this3.handleError(error);
      });
    },
    submitForm: function submitForm() {
      var _this4 = this;

      this.teacherform.post("/api/addtourpayment").then(function (res) {
        if (res.data["error"]) {
          _this4.$swal.fire({
            icon: "error",
            title: res.data.error
          });

          return false;
        }

        _this4.$swal.fire({
          icon: "success",
          title: "Successfully Added !!"
        });

        _this4.$router.push("/payments-school/".concat(_this4.$route.params.school_id, "/").concat(_this4.$route.params.tour_code));
      })["catch"](function (error) {
        _this4.$swal.fire({
          icon: "error",
          title: "Try again !!"
        });

        _this4.handleError(error);
      });
    },
    backReset: function backReset() {
      this.chequePage = false;
      this.teacherform.cheque_bank_name = "";
      this.teacherform.date_of_issue = "";
      this.teacherform.ifsc_code = "";
      this.teacherform.cheque_number = "";
    },
    validateCheque: function validateCheque() {
      if (this.teacherform.cheque_bank_name != "" && this.teacherform.date_of_issue != "" && this.teacherform.ifsc_code != "" && this.teacherform.cheque_number != "") {
        this.submitForm();
      } else {
        this.$swal.fire({
          icon: "error",
          title: "Please fill all the fields !!"
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_payment_vue_vue_type_template_id_9bb1e2e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add-payment.vue?vue&type=template&id=9bb1e2e8& */ "./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue?vue&type=template&id=9bb1e2e8&");
/* harmony import */ var _Add_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add-payment.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_payment_vue_vue_type_template_id_9bb1e2e8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_payment_vue_vue_type_template_id_9bb1e2e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add-payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue?vue&type=template&id=9bb1e2e8&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue?vue&type=template&id=9bb1e2e8& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_payment_vue_vue_type_template_id_9bb1e2e8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_payment_vue_vue_type_template_id_9bb1e2e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_payment_vue_vue_type_template_id_9bb1e2e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add-payment.vue?vue&type=template&id=9bb1e2e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue?vue&type=template&id=9bb1e2e8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue?vue&type=template&id=9bb1e2e8&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/school/payment/Add-payment.vue?vue&type=template&id=9bb1e2e8& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", [
      _c("div", { staticClass: "pb-4", attrs: { id: "tour_payment" } }, [
        _vm.chequePage == false
          ? _c("div", [
              _c("div", { staticClass: "container p-t-15 mb-20" }, [
                _c("form", [
                  _vm.touruser
                    ? _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("label", [_vm._v("Total Pax")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(
                                _vm.touruser[0].total + _vm.touruser[1].total
                              )
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("label", [_vm._v("Complimentary Pax")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.touruser[1].total))]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("label", [_vm._v("Students")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.totalStudents))]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("label", [_vm._v("Teachers")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.totalTeachers))]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("label", [_vm._v("Amount")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.perhead) + " /per head")]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("label", [_vm._v("Total Amount")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.teacherform.amount) + " /-"),
                          ]),
                        ]),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("label", { attrs: { for: "payment_mode mt-20" } }, [
                        _vm._v("Payment By"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "teacher-section" }, [
                        _c("div", { staticClass: "form-check-inline" }, [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.teacherform.payment_mode,
                                  expression: "teacherform.payment_mode",
                                },
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                value: "student",
                                name: "payment_mode",
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.teacherform.payment_mode,
                                  "student"
                                ),
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.$set(
                                    _vm.teacherform,
                                    "payment_mode",
                                    "student"
                                  )
                                },
                              },
                            }),
                            _vm._v(
                              "By Student / Teacher\n                    "
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-check-inline" }, [
                          _c("label", { staticClass: "form-check-label" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.teacherform.payment_mode,
                                  expression: "teacherform.payment_mode",
                                },
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                value: "self",
                                name: "payment_mode",
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.teacherform.payment_mode,
                                  "self"
                                ),
                              },
                              on: {
                                change: function ($event) {
                                  return _vm.$set(
                                    _vm.teacherform,
                                    "payment_mode",
                                    "self"
                                  )
                                },
                              },
                            }),
                            _vm._v(
                              "By Self (School Incharge)\n                    "
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm.teacherform.payment_mode == "self"
                    ? _c("div", { staticClass: "row mt-20" }, [
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("div", { staticClass: "form-check" }, [
                            _c("label", { staticClass: "form-check-label" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.teacherform.payment_type,
                                    expression: "teacherform.payment_type",
                                  },
                                ],
                                staticClass: "form-check-input",
                                attrs: {
                                  type: "radio",
                                  name: "option",
                                  value: "cheque",
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.teacherform.payment_type,
                                    "cheque"
                                  ),
                                },
                                on: {
                                  change: function ($event) {
                                    return _vm.$set(
                                      _vm.teacherform,
                                      "payment_type",
                                      "cheque"
                                    )
                                  },
                                },
                              }),
                              _vm._v(
                                "\n                    Cheque/DD\n                  "
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("div", { staticClass: "form-check" }, [
                            _c("label", { staticClass: "form-check-label" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.teacherform.payment_type,
                                    expression: "teacherform.payment_type",
                                  },
                                ],
                                staticClass: "form-check-input",
                                attrs: {
                                  type: "radio",
                                  name: "option",
                                  value: "cash",
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.teacherform.payment_type,
                                    "cash"
                                  ),
                                },
                                on: {
                                  change: function ($event) {
                                    return _vm.$set(
                                      _vm.teacherform,
                                      "payment_type",
                                      "cash"
                                    )
                                  },
                                },
                              }),
                              _vm._v(
                                "\n                    Cash\n                  "
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("div", { staticClass: "form-check" }, [
                            _c("label", { staticClass: "form-check-label" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.teacherform.payment_type,
                                    expression: "teacherform.payment_type",
                                  },
                                ],
                                staticClass: "form-check-input",
                                attrs: {
                                  type: "radio",
                                  name: "option",
                                  value: "net",
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.teacherform.payment_type,
                                    "net"
                                  ),
                                },
                                on: {
                                  change: function ($event) {
                                    return _vm.$set(
                                      _vm.teacherform,
                                      "payment_type",
                                      "net"
                                    )
                                  },
                                },
                              }),
                              _vm._v(
                                "\n                    Net Banking\n                  "
                              ),
                            ]),
                          ]),
                        ]),
                      ])
                    : _vm._e(),
                ]),
              ]),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.teacherform.payment_mode == "self" &&
        _vm.teacherform.payment_type == "cheque"
          ? _c("div", [
              _c("div", { staticClass: "container pt-20" }, [
                _c("p", [_vm._v("Please Fill Cheque/DD Details..")]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "father_name" } }, [
                        _vm._v("Bank Name"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.teacherform.cheque_bank_name,
                            expression: "teacherform.cheque_bank_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.teacherform.cheque_bank_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.teacherform,
                              "cheque_bank_name",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "father_name" } }, [
                        _vm._v("Date of Issue"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.teacherform.date_of_issue,
                            expression: "teacherform.date_of_issue",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "date" },
                        domProps: { value: _vm.teacherform.date_of_issue },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.teacherform,
                              "date_of_issue",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "father_name" } }, [
                        _vm._v("IFSC Code"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.teacherform.ifsc_code,
                            expression: "teacherform.ifsc_code",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.teacherform.ifsc_code },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.teacherform,
                              "ifsc_code",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "father_name" } }, [
                        _vm._v("Cheque Number"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.teacherform.cheque_number,
                            expression: "teacherform.cheque_number",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.teacherform.cheque_number },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.teacherform,
                              "cheque_number",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-center" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-outline-primary btn-square itrn_add_btn",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          return _vm.backReset()
                        },
                      },
                    },
                    [_vm._v("\n              BACK\n            ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-outline-primary btn-square itrn_add_btn",
                      attrs: { type: "button" },
                      on: {
                        click: function ($event) {
                          return _vm.validateCheque()
                        },
                      },
                    },
                    [_vm._v("\n              SUBMIT\n            ")]
                  ),
                ]),
              ]),
            ])
          : _c("div", { staticClass: "row justify-content-center mt-5" }, [
              _c(
                "button",
                {
                  staticClass:
                    "btn btn-outline-primary btn-square itrn_add_btn",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.submitPayment()
                    },
                  },
                },
                [_vm._v("\n          SUBMIT\n        ")]
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
=======
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3787],{2517:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var s=a(50175);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const o={name:"Tour-listPaymentAdd",components:{"has-error":s.HasError},data:function(){var e;return r(e={chequePage:!1,tours:"",formShow:!1,payment_mode:"self",self_pay_mode:"cheque",teacher_section:!1,student_section:!1,student_bank:[],bankdetail:[],banknames:[],userinfo:"",robot:!1,totalTeachers:"",totalStudents:"",teacherform:new s.Form({payment_mode:"self",payment_type:"",tour_code:this.$route.params.tour_code,schoolbankdetail_id:"",amount:"",user_id:"",school_id:this.$route.params.school_id,cheque_bank_name:"",date_of_issue:"",ifsc_code:"",cheque_number:"",added_by:"GBI"}),form:new s.Form({name:"",bank_name:"",account_number:"",account_type:"",ifsc_code:"",tour_code:this.$route.params.tour_code}),account_type:["Current Account","Saving Account","Recurring Deposit Account","Fixed Deposit Account"]},"banknames",[]),r(e,"touruser",""),r(e,"perhead",0),e},mounted:function(){this.userData()},methods:{onVerify:function(e){e&&(this.robot=!0)},onCaptchaExpired:function(){this.$refs.recaptcha.reset()},userData:function(){var e=this,t={school_id:this.$route.params.school_id,tour_code:this.$route.params.tour_code};axios.post("/api/gettourusers",t).then((function(t){e.teacherform.user_id=t.data.user_id,e.perhead=t.data.amount,e.touruser=t.data.tour,e.teacherform.amount=e.touruser[0].total*e.perhead,e.totalTeachers=t.data.teachers,e.totalStudents=t.data.students,console.log(t)})).catch((function(e){}))},submitPayment:function(){return this.teacherform.school_id=this.$route.params.school_id,"self"==this.teacherform.payment_mode&&"cheque"==this.teacherform.payment_type&&(this.chequePage=!0),"self"==this.teacherform.payment_mode&&"cash"==this.teacherform.payment_type&&this.submitForm(),"student"==this.teacherform.payment_mode&&(this.teacherform.payment_type="",this.submitForm()),!1},bankNameList:function(){var e=this;axios.get("/api/banknames").then((function(t){e.banknames=t.data}))},StudentBank:function(){var e=this;this.$route.params.id;this.$axios.post("/api/tour-bankdetail-student").then((function(t){e.student_bank=t.data})).catch((function(t){e.handleError(t)}))},submitForm:function(){var e=this;this.teacherform.post("/api/addtourpayment").then((function(t){if(t.data.error)return e.$swal.fire({icon:"error",title:t.data.error}),!1;e.$swal.fire({icon:"success",title:"Successfully Added !!"}),e.$router.push("/payments-school/".concat(e.$route.params.school_id,"/").concat(e.$route.params.tour_code))})).catch((function(t){e.$swal.fire({icon:"error",title:"Try again !!"}),e.handleError(t)}))},backReset:function(){this.chequePage=!1,this.teacherform.cheque_bank_name="",this.teacherform.date_of_issue="",this.teacherform.ifsc_code="",this.teacherform.cheque_number=""},validateCheque:function(){""!=this.teacherform.cheque_bank_name&&""!=this.teacherform.date_of_issue&&""!=this.teacherform.ifsc_code&&""!=this.teacherform.cheque_number?this.submitForm():this.$swal.fire({icon:"error",title:"Please fill all the fields !!"})}}};const n=(0,a(51900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("div",{staticClass:"pb-4",attrs:{id:"tour_payment"}},[0==e.chequePage?a("div",[a("div",{staticClass:"container p-t-15 mb-20"},[a("form",[e.touruser?a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-2"},[a("label",[e._v("Total Pax")]),e._v(" "),a("p",[e._v(e._s(e.touruser[0].total+e.touruser[1].total))])]),e._v(" "),a("div",{staticClass:"col-sm-3"},[a("label",[e._v("Complimentary Pax")]),e._v(" "),a("p",[e._v(e._s(e.touruser[1].total))])]),e._v(" "),a("div",{staticClass:"col-sm-2"},[a("label",[e._v("Students")]),e._v(" "),a("p",[e._v(e._s(e.totalStudents))])]),e._v(" "),a("div",{staticClass:"col-sm-2"},[a("label",[e._v("Teachers")]),e._v(" "),a("p",[e._v(e._s(e.totalTeachers))])]),e._v(" "),a("div",{staticClass:"col-sm-2"},[a("label",[e._v("Amount")]),e._v(" "),a("p",[e._v(e._s(e.perhead)+" /per head")])]),e._v(" "),a("div",{staticClass:"col-sm-3"},[a("label",[e._v("Total Amount")]),e._v(" "),a("p",[e._v(e._s(e.teacherform.amount)+" /-")])])]):e._e(),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("label",{attrs:{for:"payment_mode mt-20"}},[e._v("Payment By")]),e._v(" "),a("div",{staticClass:"teacher-section"},[a("div",{staticClass:"form-check-inline"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.payment_mode,expression:"teacherform.payment_mode"}],staticClass:"form-check-input",attrs:{type:"radio",value:"student",name:"payment_mode"},domProps:{checked:e._q(e.teacherform.payment_mode,"student")},on:{change:function(t){return e.$set(e.teacherform,"payment_mode","student")}}}),e._v("By Student / Teacher\n                    ")])]),e._v(" "),a("div",{staticClass:"form-check-inline"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.payment_mode,expression:"teacherform.payment_mode"}],staticClass:"form-check-input",attrs:{type:"radio",value:"self",name:"payment_mode"},domProps:{checked:e._q(e.teacherform.payment_mode,"self")},on:{change:function(t){return e.$set(e.teacherform,"payment_mode","self")}}}),e._v("By Self (School Incharge)\n                    ")])])])])]),e._v(" "),"self"==e.teacherform.payment_mode?a("div",{staticClass:"row mt-20"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.payment_type,expression:"teacherform.payment_type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"option",value:"cheque"},domProps:{checked:e._q(e.teacherform.payment_type,"cheque")},on:{change:function(t){return e.$set(e.teacherform,"payment_type","cheque")}}}),e._v("\n                    Cheque/DD\n                  ")])])]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.payment_type,expression:"teacherform.payment_type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"option",value:"cash"},domProps:{checked:e._q(e.teacherform.payment_type,"cash")},on:{change:function(t){return e.$set(e.teacherform,"payment_type","cash")}}}),e._v("\n                    Cash\n                  ")])])]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.payment_type,expression:"teacherform.payment_type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"option",value:"net"},domProps:{checked:e._q(e.teacherform.payment_type,"net")},on:{change:function(t){return e.$set(e.teacherform,"payment_type","net")}}}),e._v("\n                    Net Banking\n                  ")])])])]):e._e()])])]):e._e(),e._v(" "),"self"==e.teacherform.payment_mode&&"cheque"==e.teacherform.payment_type?a("div",[a("div",{staticClass:"container pt-20"},[a("p",[e._v("Please Fill Cheque/DD Details..")]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"father_name"}},[e._v("Bank Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.cheque_bank_name,expression:"teacherform.cheque_bank_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.teacherform.cheque_bank_name},on:{input:function(t){t.target.composing||e.$set(e.teacherform,"cheque_bank_name",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"father_name"}},[e._v("Date of Issue")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.date_of_issue,expression:"teacherform.date_of_issue"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:e.teacherform.date_of_issue},on:{input:function(t){t.target.composing||e.$set(e.teacherform,"date_of_issue",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"father_name"}},[e._v("IFSC Code")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.ifsc_code,expression:"teacherform.ifsc_code"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.teacherform.ifsc_code},on:{input:function(t){t.target.composing||e.$set(e.teacherform,"ifsc_code",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"father_name"}},[e._v("Cheque Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.cheque_number,expression:"teacherform.cheque_number"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.teacherform.cheque_number},on:{input:function(t){t.target.composing||e.$set(e.teacherform,"cheque_number",t.target.value)}}})])])]),e._v(" "),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-outline-primary btn-square itrn_add_btn",attrs:{type:"button"},on:{click:function(t){return e.backReset()}}},[e._v("\n              BACK\n            ")]),e._v(" "),a("button",{staticClass:"btn btn-outline-primary btn-square itrn_add_btn",attrs:{type:"button"},on:{click:function(t){return e.validateCheque()}}},[e._v("\n              SUBMIT\n            ")])])])]):a("div",{staticClass:"row justify-content-center mt-5"},[a("button",{staticClass:"btn btn-outline-primary btn-square itrn_add_btn",attrs:{type:"button"},on:{click:function(t){return e.submitPayment()}}},[e._v("\n          SUBMIT\n        ")])])])])])}),[],!1,null,null,null).exports}}]);
>>>>>>> Stashed changes
