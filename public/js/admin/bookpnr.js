(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/bookpnr"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Pnr-List.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/Pnr-List.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PnrListUser",
  data: function data() {
    return {
      list: {},
      transport: "",
      edit_index: -1
    };
  },
  mounted: function mounted() {
    this.getPnr();
    this.transport = this.$route.params.transport;
  },
  methods: {
    getPnr: function getPnr() {
      var _this = this;

      var api = "/api/pnrs/get";
      var data = {
        transport_id: this.$route.params.id,
        tour_code: this.$route.params.tour_id,
        transport_type: this.$route.params.transport
      };
      axios.post(api, data, {
        headers: {
          Authorization: "Bearer ".concat(localStorage.token)
        }
      }).then(function (response) {
        _this.list = response.data;
      })["catch"](function (error) {
        _this.handleError(error);
      });
    },
    edit_row: function edit_row(index) {
      this.edit_index = index;
    },
    update_row: function update_row(type, index) {
      this.UserTourUpdate(this.list[index]);
      this.edit_index = "";
    },
    UserTourUpdate: function UserTourUpdate(data) {
      var _this2 = this;

      var api = "/api/pnrs/" + data.id;
      axios.patch(api, data, {
        headers: {
          Authorization: "Bearer ".concat(localStorage.token)
        }
      }).then(function (response) {
        console.log(response);

        if (response.data == "error") {
          _this2.$swal.fire({
            icon: "error",
            title: "Try again",
            text: "Please enter valid travel code!"
          });
        } else {
          _this2.edit_index = -1;

          _this2.$swal.fire("Success", "PNR updated !!!", "success"); // this.tourListData();

        }
      })["catch"](function (error) {
        _this2.handleError(error);
      });
    },
    delete_row: function delete_row(type, index, id) {
      var _this3 = this;

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
          var api = "/api/pnrs/" + id;
          var data = {
            id: id
          };
          axios["delete"](api, data, {
            headers: {
              Authorization: "Bearer ".concat(localStorage.token)
            }
          }).then(function (response) {
            _this3.list.splice(index, 1);
          })["catch"](function (error) {
            _this3.handleError(error);
          });

          _this3.$swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Pnr-List.vue?vue&type=template&id=75e5a966&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/Pnr-List.vue?vue&type=template&id=75e5a966& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "pnrList" } }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-9" }, [
        _vm.transport == "bus"
          ? _c("h3", { staticClass: "text-center pt-2" }, [
              _vm._v(
                _vm._s(_vm._f("firstUppercase")(_vm.transport)) +
                  " Number History"
              ),
            ])
          : _c("h3", { staticClass: "text-center pt-2" }, [
              _vm._v(
                _vm._s(_vm._f("firstUppercase")(_vm.transport)) + " PNR History"
              ),
            ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-sm-3 pt-3" },
        [
          _vm.list.length > 0
            ? _c(
                "router-link",
                {
                  staticClass: "btn btn-info",
                  attrs: {
                    to:
                      "/pnr-users/" +
                      _vm.$route.params.transport +
                      "/" +
                      _vm.$route.params.id +
                      "/" +
                      _vm.$route.params.tour_id,
                  },
                },
                [_vm._v("Assign PNR to Students")]
              )
            : _vm._e(),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm.list.length > 0
      ? _c("div", { staticClass: "flight-detail" }, [
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.list, function (flight, index) {
              return _c("div", { key: flight.id, staticClass: "col-sm-6" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-10" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: flight.pnr_number,
                          expression: "flight.pnr_number",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        readonly: index != _vm.edit_index,
                      },
                      domProps: { value: flight.pnr_number },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(flight, "pnr_number", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-2" }, [
                    index != _vm.edit_index
                      ? _c("img", {
                          staticClass: "edit",
                          attrs: {
                            src:
                              _vm.$gbiAssets + "/assets/front/icons/edit.png",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.edit_row(index)
                            },
                          },
                        })
                      : _c("img", {
                          staticClass: "edit",
                          attrs: {
                            src:
                              _vm.$gbiAssets + "/assets/front/icons/update.png",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.update_row("flight", index)
                            },
                          },
                        }),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "delete",
                      attrs: {
                        src: _vm.$gbiAssets + "/assets/front/icons/delete.png",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.delete_row("flight", index, flight.id)
                        },
                      },
                    }),
                  ]),
                ]),
              ])
            }),
            0
          ),
        ])
      : _c("div", { staticClass: "text-center" }, [
          _c("p", [_vm._v("Table is empty..")]),
        ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/Pnr-List.vue":
/*!**********************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/Pnr-List.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pnr_List_vue_vue_type_template_id_75e5a966___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pnr-List.vue?vue&type=template&id=75e5a966& */ "./resources/js/admin/pages/bookedtour/Pnr-List.vue?vue&type=template&id=75e5a966&");
/* harmony import */ var _Pnr_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pnr-List.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bookedtour/Pnr-List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pnr_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pnr_List_vue_vue_type_template_id_75e5a966___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pnr_List_vue_vue_type_template_id_75e5a966___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bookedtour/Pnr-List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/Pnr-List.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/Pnr-List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pnr_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pnr-List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Pnr-List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pnr_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/Pnr-List.vue?vue&type=template&id=75e5a966&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/Pnr-List.vue?vue&type=template&id=75e5a966& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pnr_List_vue_vue_type_template_id_75e5a966___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pnr-List.vue?vue&type=template&id=75e5a966& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Pnr-List.vue?vue&type=template&id=75e5a966&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pnr_List_vue_vue_type_template_id_75e5a966___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pnr_List_vue_vue_type_template_id_75e5a966___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);