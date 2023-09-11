"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/PnrUser"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/PnrUser.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/PnrUser.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
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
  name: "UserPnrList",
  data: function data() {
    return {
      pnrList: {},
      userList: {},
      transport_info: {},
      total_row: [],
      update_task: false,
      heading: 'Assign PNRs To Users',
      searchQuery: null
    };
  },
  mounted: function mounted() {
    this.getPnr();
    this.getTrain();
    this.getPnrUser();
  },
  methods: {
    getTrain: function getTrain() {
      var _this = this;

      if (this.$route.params.transport == 'train') {
        var api = '/api/bookedtrains/' + this.$route.params.id + '/edit';
      } else if (this.$route.params.transport == 'flight') {
        var api = '/api/bookedflights/' + this.$route.params.id + '/edit';
      } else {
        var api = '/api/bookedbuses/' + this.$route.params.id + '/edit';
      }

      axios.get(api).then(function (response) {
        _this.headerFormat(response.data);
      });
    },
    getPnr: function getPnr() {
      var _this2 = this;

      var api = "/api/pnrs/get";
      var data = {
        transport_id: this.$route.params.id,
        tour_code: this.$route.params.tour_id,
        transport_type: this.$route.params.transport
      };
      axios.post(api, data).then(function (response) {
        _this2.pnrList = response.data; // 
      })["catch"](function (error) {
        _this2.handleError(error);
      });
    },
    getPnrUser: function getPnrUser() {
      var _this3 = this;

      var api = "/api/pnruser/get";
      var data = {
        transport_id: this.$route.params.id,
        tour_code: this.$route.params.tour_id,
        transport_type: this.$route.params.transport
      };
      axios.post(api, data).then(function (response) {
        if (response.data.length > 0) {
          _this3.update_task = true;
          _this3.total_row = [];
          _this3.total_row = response.data;
        } else {
          _this3.getUser();
        }
      })["catch"](function (error) {
        _this3.handleError(error);
      });
    },
    getUser: function getUser() {
      var _this4 = this;

      var api = "/api/touruser-list";
      var data = {
        tour_id: this.$route.params.tour_id
      };
      axios.post(api, data).then(function (response) {
        _this4.formate(response.data);
      })["catch"](function (error) {
        _this4.handleError(error);
      });
    },
    formate: function formate(data) {
      var _this5 = this;

      data.forEach(function (user) {
        _this5.total_row.push({
          'user_id': user.user.id,
          'name': user.user.name,
          'email': user.user.email,
          'pnr_id': 0,
          'tour_id': _this5.$route.params.tour_id,
          'transport_id': _this5.$route.params.id,
          'transport_type': _this5.$route.params.transport
        });
      });
    },
    addData: function addData() {
      var _this6 = this;

      var err = 0;
      this.total_row.forEach(function (row) {
        if (row.pnr_id == 0) {
          _this6.$swal.fire({
            icon: "error",
            title: "Try again",
            text: "Please Select PNR For Every Student !"
          });

          err = 1;
          return false;
        }
      });

      if (err == 1) {
        return false;
      }

      var api = "/api/add-pnr-user";
      axios.post(api, this.total_row).then(function (response) {
        _this6.$swal.fire({
          icon: "success",
          title: "Submited",
          text: "PNRs have been assigned to each student !"
        });

        _this6.update_task = true;
      })["catch"](function (error) {
        _this6.handleError(error);
      });
    },
    update_row: function update_row(pnr, id) {
      var _this7 = this;

      var data = {
        id: id,
        pnr_id: pnr
      };
      var api = "/api/update-pnruser";
      axios.post(api, data).then(function (response) {
        _this7.$swal.fire({
          icon: "success",
          title: "Updated",
          text: "PNRs Updated !"
        });
      })["catch"](function (error) {
        _this7.handleError(error);
      });
    },
    print: function print() {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    },
    headerFormat: function headerFormat(data) {
      if (this.$route.params.transport == 'train') {
        this.transport_info = {
          'name': data.train.name,
          'code': data.train.code,
          'source': data.source,
          'destination': data.destination,
          'departure': data.departure,
          'arrival': data.arrival
        };
      }

      if (this.$route.params.transport == 'flight') {
        this.transport_info = {
          'name': data.flight.name,
          'code': data.flight.code,
          'source': data.source,
          'destination': data.destination,
          'departure': data.departure,
          'arrival': data.arrival
        };
      }

      if (this.$route.params.transport == 'bus') {
        this.transport_info = {
          'name': data.bus.company_name,
          'code': data.bus.seater + ' seater',
          'source': data.source,
          'destination': data.destination,
          'departure': data.departure,
          'arrival': data.arrival
        };
        this.heading = 'Assign Bus To Users';
      }
    }
  },
  computed: {
    resultQuery: function resultQuery() {
      var _this8 = this;

      if (this.searchQuery) {
        return this.total_row.filter(function (item) {
          return _this8.searchQuery.toLowerCase().split(" ").every(function (v) {
            return item.pnr_number.toLowerCase().includes(v);
          });
        });
      } else {
        return this.total_row;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/PnrUser.vue":
/*!*********************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/PnrUser.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PnrUser_vue_vue_type_template_id_d820b80e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PnrUser.vue?vue&type=template&id=d820b80e& */ "./resources/js/admin/pages/bookedtour/PnrUser.vue?vue&type=template&id=d820b80e&");
/* harmony import */ var _PnrUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PnrUser.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bookedtour/PnrUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PnrUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PnrUser_vue_vue_type_template_id_d820b80e___WEBPACK_IMPORTED_MODULE_0__.render,
  _PnrUser_vue_vue_type_template_id_d820b80e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bookedtour/PnrUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/PnrUser.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/PnrUser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PnrUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PnrUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/PnrUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PnrUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/PnrUser.vue?vue&type=template&id=d820b80e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/PnrUser.vue?vue&type=template&id=d820b80e& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PnrUser_vue_vue_type_template_id_d820b80e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PnrUser_vue_vue_type_template_id_d820b80e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PnrUser_vue_vue_type_template_id_d820b80e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PnrUser.vue?vue&type=template&id=d820b80e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/PnrUser.vue?vue&type=template&id=d820b80e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/PnrUser.vue?vue&type=template&id=d820b80e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/bookedtour/PnrUser.vue?vue&type=template&id=d820b80e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "pnrstudent simple-form" },
    [
      _vm.transport_info
        ? _c("div", { attrs: { id: "printMe" } }, [
            _c("div", {}, [
              _c("div", { staticClass: "row pt-2" }, [
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("h4", [
                    _vm._v(
                      _vm._s(_vm.transport_info.name) +
                        " - ( " +
                        _vm._s(_vm.transport_info.code) +
                        " )"
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("b", [
                      _vm._v(
                        _vm._s(_vm.transport_info.source) +
                          " - " +
                          _vm._s(_vm.transport_info.destination)
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("p", [
                    _c("b", [_vm._v("Tour Code")]),
                    _vm._v(" : " + _vm._s(_vm.$route.params.tour_id)),
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("b", [_vm._v("Time : ")]),
                    _vm._v(
                      " " +
                        _vm._s(_vm.transport_info.departure) +
                        " - " +
                        _vm._s(_vm.transport_info.arrival)
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-center" }, [
                _c("b", [_vm._v(_vm._s(_vm.heading))]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table table-bordered mt-3 display-hidden" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.resultQuery, function (user, index) {
                    return _c("tr", { key: index }, [
                      _c("td", [_vm._v(_vm._s(user.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(user.pnr_number))]),
                    ])
                  }),
                  0
                ),
              ]
            ),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-end" }, [
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "input-group" }, [
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
            _vm._m(1),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("hr", { staticClass: "pb-2" }),
      _vm._v(" "),
      _vm._l(_vm.resultQuery, function (user, index) {
        return _c("div", { key: user.id, staticClass: "row mb-1" }, [
          _c("div", { staticClass: "col-sm-1 text-center pt-1" }, [
            _c("span", [_vm._v(_vm._s(++index))]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-5 pt-1" }, [
            _c("input", {
              staticClass: "pl-2",
              attrs: { type: "text", readonly: "" },
              domProps: { value: user.name },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-5" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: user.pnr_id,
                    expression: "user.pnr_id",
                  },
                ],
                staticClass: "form-control select-field",
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
                      user,
                      "pnr_id",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  },
                },
              },
              _vm._l(_vm.pnrList, function (pnr) {
                return _c(
                  "option",
                  { key: pnr.pnr_number, domProps: { value: pnr.id } },
                  [_vm._v(_vm._s(pnr.pnr_number))]
                )
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-1" }, [
            _vm.update_task == true
              ? _c("img", {
                  staticClass: "edit",
                  attrs: {
                    src: _vm.$gbiAssets + "/assets/front/icons/update.png",
                  },
                  on: {
                    click: function ($event) {
                      return _vm.update_row(user.pnr_id, user.id)
                    },
                  },
                })
              : _vm._e(),
          ]),
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row justify-content-center mt-4 pb-5" }, [
        _vm.update_task == false
          ? _c("div", { staticClass: "col-sm-4" }, [
              _c(
                "button",
                {
                  staticClass: "btn p-1 btn-gbi text-white text-uppercase",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.addData()
                    },
                  },
                },
                [_vm._v("Submit")]
              ),
            ])
          : _c("div", { staticClass: "col-sm-3 mt-4" }, [
              _c(
                "button",
                {
                  staticClass: "btn text-white p-1 btn-gbi",
                  attrs: { type: "button" },
                  on: { click: _vm.print },
                },
                [_vm._v("Print")]
              ),
            ]),
      ]),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("User Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("PNR Number")]),
    ])
  },
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
]
render._withStripped = true



/***/ })

}]);