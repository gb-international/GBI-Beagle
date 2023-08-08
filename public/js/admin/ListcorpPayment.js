(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/ListcorpPayment"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_mixins_GroupExcelUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/mixins/GroupExcelUpload */ "./resources/js/admin/mixins/GroupExcelUpload.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AddGroupCorporateExcelUpload",
  mixins: [_admin_mixins_GroupExcelUpload__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"]
  },
  data: function data() {
    return {
      lastSr: 0,
      excel_form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        excel_file: ""
      })
    };
  },
  mounted: function mounted() {
    this.groupMember(); //console.log(this.selectAll);
  },
  methods: {
    groupMember: function groupMember() {
      var _this = this;

      axios.get("/api/corp-group/".concat(this.$route.params.tour_code, "/corporate")).then(function (res) {
        if (res.data) {
          for (var i = 0; i < res.data.length; i++) {
            res.data[i].srNo = i + 1;
            _this.lastSr += 1;
          }

          _this.total_row = res.data;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=style&index=0&id=0f4e48a2&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=style&index=0&id=0f4e48a2&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nselect[data-v-0f4e48a2] {\n  width: 100%;\n  height: 50px;\n  font-size: 90%;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 0;\n  border: none;\n  padding: 10px;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  padding: 10px;\n  background: #f4f6f9 !important;\n}\n/* For IE <= 11 */\nselect[data-v-0f4e48a2]::-ms-expand {\n  display: none;\n}\n/* Chrome, Safari, Edge, Opera */\ninput[data-v-0f4e48a2]::-webkit-outer-spin-button,\ninput[data-v-0f4e48a2]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/* Firefox */\ninput[type=number][data-v-0f4e48a2] {\n  -moz-appearance: textfield;\n}\ninput[data-v-0f4e48a2] {\n  background: #f4f6f9 !important\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=style&index=0&id=0f4e48a2&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=style&index=0&id=0f4e48a2&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListPayment.vue?vue&type=style&index=0&id=0f4e48a2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=style&index=0&id=0f4e48a2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=template&id=0f4e48a2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=template&id=0f4e48a2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "AddGroup p-t-15" }, [
      _c("div", { staticClass: "row mb-10 pt-3" }, [
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "input-group filter-search" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.searchQuery,
                  expression: "searchQuery",
                },
              ],
              staticClass: "form-control py-2 border-right-0 border",
              attrs: {
                type: "search",
                value: "search",
                id: "example-search-input",
                placeholder: "Search ..",
              },
              domProps: { value: _vm.searchQuery },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.searchQuery = $event.target.value
                },
              },
            }),
            _vm._v(" "),
            _vm._m(0),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row group_list simple-form list-form pl-2 font-12" },
        [
          _c(
            "table",
            {
              staticClass: "table text-dark table-bordered",
              staticStyle: { background: "#f4f6f9" },
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.resultQuery, function (data, index) {
                  return _c("tr", { key: data.id, staticClass: "hidden" }, [
                    _c("td", { staticClass: "text-center padding-top-10" }, [
                      _vm._v(_vm._s(data.srNo)),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: data.first_name,
                            expression: "data.first_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", readonly: "" },
                        domProps: { value: data.first_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(data, "first_name", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: data.last_name,
                            expression: "data.last_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", readonly: "" },
                        domProps: { value: data.last_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(data, "last_name", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: data.gender,
                              expression: "data.gender",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { disabled: "" },
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
                                data,
                                "gender",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { value: "M" } }, [
                            _vm._v("Male"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "F" } }, [
                            _vm._v("Female"),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: data.age,
                            expression: "data.age",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number", readonly: "" },
                        domProps: { value: data.age },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(data, "age", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: data.is_paid,
                              expression: "data.is_paid",
                            },
                          ],
                          staticClass: "form-control",
                          attrs: { disabled: "" },
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
                                data,
                                "is_paid",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                          },
                        },
                        [
                          _c("option", { attrs: { value: "true" } }, [
                            _vm._v("Paid"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "false" } }, [
                            _vm._v("Free"),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: data.email,
                            expression: "data.email",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", readonly: "" },
                        domProps: { value: data.email },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(data, "email", $event.target.value)
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-7" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.mobile,
                                expression: "data.mobile",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", readonly: "" },
                            domProps: { value: data.mobile },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(data, "mobile", $event.target.value)
                              },
                            },
                          }),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      data.is_paid == true
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.payment_status,
                                expression: "data.payment_status",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", readonly: "" },
                            domProps: { value: data.payment_status },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  data,
                                  "payment_status",
                                  $event.target.value
                                )
                              },
                            },
                          })
                        : _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", value: "N/A", readonly: "" },
                          }),
                    ]),
                  ])
                }),
                0
              ),
            ]
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-append" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-outline-secondary border-left-0 border",
          attrs: { type: "button" },
        },
        [_c("i", { staticClass: "fa fa-search" })]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", { staticClass: "w-80" }, [_vm._v("Sr no")]),
      _vm._v(" "),
      _c("th", [_vm._v("First Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Last Name")]),
      _vm._v(" "),
      _c("th", { staticClass: "w-80" }, [_vm._v("Gender")]),
      _vm._v(" "),
      _c("th", { staticClass: "width-70" }, [_vm._v("Age")]),
      _vm._v(" "),
      _c("th", { staticClass: "width-80" }, [_vm._v("Paid/Free")]),
      _vm._v(" "),
      _c("th", { staticClass: "width-160" }, [_vm._v("Email")]),
      _vm._v(" "),
      _c("th", { staticClass: "w-160" }, [_vm._v("Contact No.")]),
      _vm._v(" "),
      _c("th", { staticClass: "w-160" }, [_vm._v("Payment Status")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/mixins/GroupExcelUpload.js":
/*!*******************************************************!*\
  !*** ./resources/js/admin/mixins/GroupExcelUpload.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var GroupExcelUpload = {
  data: function data() {
    return {
      selected: [],
      checkbox_state: 0,
      searchQuery: null,
      total_row: [{
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        age: "",
        mobile: "",
        tour_id: this.$route.params.id,
        school_id: this.$route.params.school_id,
        user_type: "student",
        is_paid: "1"
      }],
      new_row: [],
      error: false,
      message: '',
      edit_index: -1,
      row_input: "",
      new_row_add: false
    };
  },
  watch: {
    new_row: function new_row() {
      if (this.new_row.length > 0) {
        this.new_row_add = true;
      } else {
        this.new_row_add = false;
      }
    }
  },
  methods: {
    generatePdf: function generatePdf() {
      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_0___default.a('p', 'pt', 'A4');
      var margins = {
        top: 10,
        bottom: 10,
        left: 10,
        width: 810
      };
      var data = [];
      var j = 1;

      for (var i = 0; i < this.resultQuery.length; i++) {
        var d = this.resultQuery[i];
        var rows = [j++, d.first_name, d.last_name, d.email, d.gender, d.age, d.mobile];
        data.push(rows);
      }

      doc.autoTable({
        head: [['S.No', 'First Name', 'Last Name', 'Email', 'Gender', 'Age', 'Contact']],
        body: data
      });
      doc.save('gbi-groupmember.pdf');
    },
    sendLoginDetails: function sendLoginDetails() {
      var _this = this;

      axios.post("/api/groupmembers/addlogindetail", this.selected).then(function (response) {
        if (response.data == "error") {
          _this.$swal.fire({
            icon: "error",
            title: "Try again",
            text: "Please enter valid travel code!"
          });
        } else {
          _this.$swal.fire("Success", "Students saved and notifications has been sent !!!", "success");
        }
      })["catch"](function (error) {
        _this.$swal.fire({
          icon: "error",
          title: "Try again",
          text: error.data
        });

        _this.handleError(error);
      });
    },
    // Delete Row
    delete_row: function delete_row(index, id) {
      var _this2 = this;

      this.$swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          var data = {
            id: id
          };
          axios.post("/api/groupmember/destroy", data).then(function (response) {
            _this2.$swal.fire("Deleted!", "Member Deleted deleted.", "success");

            _this2.total_row.splice(index, 1);
          })["catch"](function (error) {
            _this2.handleError(error);
          });
        }
      });
    },
    delete_new_row: function delete_new_row(index) {
      this.new_row.splice(index, 1);
    },
    edit_row: function edit_row(index) {
      this.edit_index = index;
    },
    update_row: function update_row(index) {
      this.UserTourUpdate(this.total_row[index]);
      this.edit_index = "";
    },
    UserTourUpdate: function UserTourUpdate(data) {
      var _this3 = this;

      axios.post("/api/groupmembers/update", data).then(function (response) {
        if (response.data == "error") {
          _this3.$swal.fire({
            icon: "error",
            title: "Try again",
            text: "Please enter valid travel code!"
          });
        } else {
          _this3.edit_index = -1;

          _this3.$swal.fire("Success", "Member updated !!!", "success");
        }
      })["catch"](function (error) {
        _this3.$swal.fire({
          icon: "error",
          title: "Try again",
          text: error.data
        });

        _this3.handleError(error);
      });
    },
    UserGroupSave: function UserGroupSave() {
      var _this4 = this;

      this.checkDuplicateEmail();

      if (this.error == true) {
        return false;
      }

      for (var i = this.new_row.length - 1; i >= 0; i--) {
        if (this.new_row[i]["first_name"] == "") {
          this.new_row.splice(i, 1);
        }
      }

      axios.post("/api/groupmember/add", this.new_row).then(function (response) {
        if (response.data == "error") {
          _this4.$swal.fire({
            icon: "error",
            title: "Try again",
            text: "Please enter valid travel code!"
          });
        } else {
          _this4.$swal.fire("Success", "Group data has added", "success");

          _this4.new_row = [];
          _this4.new_row_add = false;

          _this4.groupMember();
        }
      })["catch"](function (error) {
        _this4.handleError(error);
      });
    },
    checkedBox: function checkedBox() {
      if (this.selected.length > 0) {
        this.checkbox_state = 1;
      } else {
        this.checkbox_state = 0;
      }
    },
    checkDuplicateEmail: function checkDuplicateEmail() {
      var merged = [];
      var merged = [].concat(_toConsumableArray(this.total_row), _toConsumableArray(this.new_row));
      var valueArr = merged.map(function (item) {
        return item.email;
      });
      var isDuplicate = valueArr.some(function (item, idx) {
        return valueArr.indexOf(item) != idx;
      });
      console.log(merged);

      if (isDuplicate == true) {
        this.message = 'Duplicate Email Found';
        this.error = true;
      } else {
        this.message = '';
        this.error = false;
      }
    }
  },
  computed: {
    resultQuery: function resultQuery() {
      var _this5 = this;

      if (this.searchQuery) {
        return this.total_row.filter(function (item) {
          return _this5.searchQuery.toLowerCase().split(" ").every(function (v) {
            return item.first_name.toLowerCase().includes(v);
          });
        });
      } else {
        return this.total_row;
      }
    },
    selectAll: {
      get: function get() {
        return this.resultQuery ? this.selected.length == this.resultQuery.length : false;
      },
      set: function set(value) {
        var selected = [];

        if (value) {
          this.resultQuery.forEach(function (user) {
            selected.push(user);
          });
        }

        this.selected = selected;
        this.checkedBox();
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GroupExcelUpload);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListPayment_vue_vue_type_template_id_0f4e48a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListPayment.vue?vue&type=template&id=0f4e48a2&scoped=true& */ "./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=template&id=0f4e48a2&scoped=true&");
/* harmony import */ var _ListPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListPayment.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListPayment_vue_vue_type_style_index_0_id_0f4e48a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListPayment.vue?vue&type=style&index=0&id=0f4e48a2&scoped=true&lang=css& */ "./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=style&index=0&id=0f4e48a2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListPayment_vue_vue_type_template_id_0f4e48a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListPayment_vue_vue_type_template_id_0f4e48a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0f4e48a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListPayment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=style&index=0&id=0f4e48a2&scoped=true&lang=css&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=style&index=0&id=0f4e48a2&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPayment_vue_vue_type_style_index_0_id_0f4e48a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListPayment.vue?vue&type=style&index=0&id=0f4e48a2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=style&index=0&id=0f4e48a2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPayment_vue_vue_type_style_index_0_id_0f4e48a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPayment_vue_vue_type_style_index_0_id_0f4e48a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPayment_vue_vue_type_style_index_0_id_0f4e48a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPayment_vue_vue_type_style_index_0_id_0f4e48a2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=template&id=0f4e48a2&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=template&id=0f4e48a2&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPayment_vue_vue_type_template_id_0f4e48a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListPayment.vue?vue&type=template&id=0f4e48a2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/corporate/payment/ListPayment.vue?vue&type=template&id=0f4e48a2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPayment_vue_vue_type_template_id_0f4e48a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListPayment_vue_vue_type_template_id_0f4e48a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);