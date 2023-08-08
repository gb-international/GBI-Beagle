(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/UserInformation"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/User-information.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/User-information.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProfileEdit",
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"]
  },
  data: function data() {
    return {
      name: "",
      address: "",
      school_field: false,
      namefield: false,
      addressfield: false,
      institutionfield: false,
      second_step: false,
      label_name: "",
      oddclass: false,
      evenclass: true,
      loadingWizard: false,
      errorMsg: null,
      school_list: "",
      profession: "",
      institution: "",
      institution_code: ""
    };
  },
  beforeMount: function beforeMount() {
    if (this.$cookies.get("access_token") == null) {
      this.$router.push("/");
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$axios.get("/api/school-list").then(function (response) {
      _this.school_list = response.data;
    });
    var data = [];
    this.$api.POST("/api/user-show", []).then(function (response) {
      if (response.success.status == 1) {
        _this.$router.push("/dashboard");
      }
    })["catch"](function (error) {
      _this.handleError(error);
    });
  },
  watch: {
    institution: function institution() {
      if (this.institution != "") {
        this.second_step = true;
      }

      if (this.institution == "other") {
        this.namefield = true;
        this.addressfield = true;
        this.label_name = "Educational Institution";
      } else {
        this.namefield = false;
        this.addressfield = false;
      }
    },
    profession: function profession() {
      this.namefield = false;
      this.addressfield = false;
      this.school_field = false;
      console.log(this.school_field);

      if (this.profession == "corporate") {
        this.namefield = true;
        this.addressfield = true;
        this.label_name = "Corporate";
      } else if (this.profession == "other") {
        this.namefield = true;
        this.label_name = "Occupation";
      } else {
        this.school_field = true;
      }
    },
    name: function name() {
      if (this.name != "") {
        this.second_step = true;
      }
    },
    address: function address() {
      if (this.address != "") {
        this.second_step = true;
      }
    }
  },
  methods: {
    onComplete: function onComplete() {
      var _this2 = this;

      var data = {
        user_profession: this.profession,
        school_id: this.institution,
        profession_name: this.name,
        profession_address: this.address,
        institution_code: this.institution_code
      };
      this.$axios.post("/api/user-info-update", data, {
        headers: {
          Authorization: "Bearer ".concat(this.$cookies.get("access_token"))
        }
      }).then(function (response) {
        var data = _this2.$cookies.get("user");

        data.status = 1;
        data.user_profession = _this2.profession;

        _this2.$cookies.remove("user");

        _this2.$cookies.set("user", data);

        _this2.$router.push("/dashboard");
      })["catch"](function (error) {
        _this2.$swal.fire({
          icon: "error",
          title: "Please fill all the fields"
        });
      });
    },
    setLoading: function setLoading(value) {
      this.loadingWizard = value;
    },
    handleValidation: function handleValidation(isValid, tabIndex) {
      console.log("Tab: " + tabIndex + " valid: " + isValid);
    },
    handleErrorMessage: function handleErrorMessage(errorMsg) {
      this.errorMsg = errorMsg;
    },
    validateAsync: function validateAsync() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (_this3.profession == "") {
            reject("Select your profession");
          } else {
            resolve(true);
          }
        }, 500);
      });
    },
    validateAsyncSecond: function validateAsyncSecond() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (_this4.second_step != true) {
            reject("Please enter additional information");
          } else {
            resolve(true);
          }
        }, 500);
      });
    },
    validateAsyncLast: function validateAsyncLast() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (_this5.institution_code == "") {
            reject("Enter your institution code");
          } else {
            resolve(true);
          }
        }, 500);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/User-information.vue?vue&type=template&id=4f49600f&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/User-information.vue?vue&type=template&id=4f49600f& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "user_inform_model" } }, [
    _c("div", { staticClass: "row justify-content-center w-100" }, [
      _c("div", { staticClass: "col-sm-7" }, [
        _c(
          "div",
          { staticClass: "user-model card p-20 mt-15" },
          [
            _c("label", [_vm._v("Three Step Verification")]),
            _vm._v(" "),
            _c(
              "form-wizard",
              {
                attrs: {
                  shape: "circle",
                  color: "#1c1650",
                  "error-color": "#e74c3c",
                },
                on: {
                  "on-complete": _vm.onComplete,
                  "on-loading": _vm.setLoading,
                  "on-validate": _vm.handleValidation,
                  "on-error": _vm.handleErrorMessage,
                },
              },
              [
                _c(
                  "tab-content",
                  {
                    attrs: {
                      title: "Personal details",
                      "before-change": _vm.validateAsync,
                    },
                  },
                  [
                    _c("label", [_vm._v("Select Your Profession")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.profession,
                            expression: "profession",
                          },
                        ],
                        staticClass: "form-control",
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
                            _vm.profession = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "student" } }, [
                          _vm._v("Student"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "teacher" } }, [
                          _vm._v("Teacher/Principal/Dean"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "corporate" } }, [
                          _vm._v("Corporate"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "other" } }, [
                          _vm._v("Other"),
                        ]),
                      ]
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tab-content",
                  {
                    attrs: {
                      title: "Additional Info",
                      "before-change": _vm.validateAsyncSecond,
                    },
                  },
                  [
                    _vm.school_field
                      ? _c("div", { staticClass: "form-group" }, [
                          _c("label", [
                            _vm._v("Select Your Educational Institution"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.institution,
                                  expression: "institution",
                                },
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.institution = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                              },
                            },
                            [
                              _vm._l(_vm.school_list, function (school) {
                                return _c(
                                  "option",
                                  {
                                    key: school.id,
                                    domProps: { value: school.id },
                                  },
                                  [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(school.school_name) +
                                        "\n                "
                                    ),
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "other" } }, [
                                _vm._v("Other"),
                              ]),
                            ],
                            2
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.namefield
                      ? _c("div", { staticClass: "form-group" }, [
                          _c("label", [
                            _vm._v("Enter " + _vm._s(_vm.label_name) + " Name"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.name,
                                expression: "name",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.name },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.name = $event.target.value
                              },
                            },
                          }),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.addressfield
                      ? _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Enter Address")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.address,
                                expression: "address",
                              },
                            ],
                            staticClass: "form-control",
                            domProps: { value: _vm.address },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.address = $event.target.value
                              },
                            },
                          }),
                        ])
                      : _vm._e(),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tab-content",
                  {
                    attrs: {
                      title: "Last step",
                      "before-change": _vm.validateAsyncLast,
                    },
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _vm.profession == "student"
                        ? _c("label", [_vm._v("Enter Your School/College ID")])
                        : _c("label", [
                            _vm._v("Enter Your Affiliation Number"),
                          ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.institution_code,
                            expression: "institution_code",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Enter Your School/College ID",
                        },
                        domProps: { value: _vm.institution_code },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.institution_code = $event.target.value
                          },
                        },
                      }),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _vm.loadingWizard
                  ? _c("div", { staticClass: "loader" })
                  : _vm._e(),
                _vm._v(" "),
                _vm.errorMsg
                  ? _c("div", [
                      _c("span", { staticClass: "error" }, [
                        _vm._v(_vm._s(_vm.errorMsg)),
                      ]),
                    ])
                  : _vm._e(),
              ],
              1
            ),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/pages/user/User-information.vue":
/*!************************************************************!*\
  !*** ./resources/js/front/pages/user/User-information.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_information_vue_vue_type_template_id_4f49600f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User-information.vue?vue&type=template&id=4f49600f& */ "./resources/js/front/pages/user/User-information.vue?vue&type=template&id=4f49600f&");
/* harmony import */ var _User_information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User-information.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/User-information.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_information_vue_vue_type_template_id_4f49600f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_information_vue_vue_type_template_id_4f49600f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/User-information.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/User-information.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/front/pages/user/User-information.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User-information.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/User-information.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/User-information.vue?vue&type=template&id=4f49600f&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/front/pages/user/User-information.vue?vue&type=template&id=4f49600f& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_information_vue_vue_type_template_id_4f49600f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User-information.vue?vue&type=template&id=4f49600f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/User-information.vue?vue&type=template&id=4f49600f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_information_vue_vue_type_template_id_4f49600f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_information_vue_vue_type_template_id_4f49600f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);