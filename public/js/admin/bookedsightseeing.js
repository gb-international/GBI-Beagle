(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/bookedsightseeing"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/buttons/MinusButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/buttons/MinusButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MinusButtonGBI",
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/buttons/PlusButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/buttons/PlusButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PlusButtonGBI",
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/New-sightseen.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/New-sightseen.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_buttons_PlusButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/buttons/PlusButton.vue */ "./resources/js/admin/components/buttons/PlusButton.vue");
/* harmony import */ var _admin_components_buttons_MinusButton_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/components/buttons/MinusButton.vue */ "./resources/js/admin/components/buttons/MinusButton.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ListSightseeingsNew",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    ModelSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_1__["ModelSelect"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    "plus-button": _admin_components_buttons_PlusButton_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    "minus-button": _admin_components_buttons_MinusButton_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      row_input: "",
      itineraryday_list: "",
      tour: "",
      options: [],
      total_row: []
    };
  },
  created: function created() {
    this.sightseeingData();
    this.itineraryData();
  },
  methods: {
    sightseeingData: function sightseeingData() {
      var _this = this;

      axios.get("/api/sightseeings").then(function (response) {
        _this.options = response.data.data; // for (var i = 0; i < response.data.data.length; i++) {
        //   this.options.push({
        //     value: response.data.data[i].id,
        //     text:
        //       response.data.data[i].name +
        //       " (" +
        //       response.data.data[i].city.name +
        //       " )",
        //   });
        // }
      });
    },
    itineraryData: function itineraryData() {
      var _this2 = this;

      axios.get("/api/itinerarydayget/".concat(this.$route.params.itinerary_id)).then(function (response) {
        _this2.itineraryday_list = response.data;

        for (var i = 0; i < _this2.itineraryday_list.length; i++) {
          _this2.total_row.push([{
            tour_id: _this2.$route.params.id,
            tour_code: _this2.$route.params.tour_code,
            itineraryday_id: _this2.itineraryday_list[i].id,
            sightseeing_id: ""
          }]);
        }
      });
    },
    addRow: function addRow(index) {
      this.total_row[index].push({
        tour_id: this.$route.params.id,
        tour_code: this.$route.params.tour_code,
        itineraryday_id: this.itineraryday_list[index].id,
        sightseeing_id: ""
      });
    },
    removeRow: function removeRow(index) {
      if (this.total_row[index].length != 1) {
        this.total_row[index].splice(-1, 1);
      }
    },
    addSightseeing: function addSightseeing() {
      var _this3 = this;

      var path = "/api/bookedsightseeings";
      console.log(this.total_row);
      axios.post(path, this.total_row).then(function (response) {
        console.log(response);

        if (response.data == 1) {
          _this3.$toast.fire({
            icon: "error",
            title: "Already sightseeing added for this tour !!!"
          });

          return false;
        } else if (response.data == 2) {
          _this3.$toast.fire({
            icon: "error",
            title: "Try again"
          });

          return false;
        } // this.$router.push(`/hotel-list/`)


        _this3.$toast.fire({
          icon: "success",
          title: "Sightseeings Added successfully"
        });
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/buttons/MinusButton.vue?vue&type=template&id=1d996059&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/buttons/MinusButton.vue?vue&type=template&id=1d996059& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-info btn_plus", attrs: { type: "button" } },
      [
        _c("i", {
          staticClass: "fas fa-minus",
          attrs: { "aria-hidden": "true" },
        }),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/buttons/PlusButton.vue?vue&type=template&id=06b54f25&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/buttons/PlusButton.vue?vue&type=template&id=06b54f25& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-info btn_plus", attrs: { type: "button" } },
      [
        _c("i", {
          staticClass: "fas fa-plus",
          attrs: { "aria-hidden": "true" },
        }),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/New-sightseen.vue?vue&type=template&id=634fa205&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/New-sightseen.vue?vue&type=template&id=634fa205& ***!
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
            _c("div", { staticClass: "reservation pl-4 pt-2" }, [
              _c(
                "form",
                {
                  attrs: { role: "form" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.addSightseeing()
                    },
                  },
                },
                [
                  _vm._l(_vm.itineraryday_list, function (itinerary, index) {
                    return _c(
                      "div",
                      {
                        key: itinerary.id,
                        staticClass: "row w-100 p-3 card-layout",
                      },
                      [
                        _c("div", { staticClass: "col-sm-5" }, [
                          _c("p", [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v(
                                "Sightseeing Day " +
                                  _vm._s(itinerary.day) +
                                  " ("
                              ),
                              _c("small", [
                                _vm._v(
                                  _vm._s(itinerary.day_source) +
                                    " - " +
                                    _vm._s(itinerary.day_destination)
                                ),
                              ]),
                              _vm._v(")"),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-5" },
                          _vm._l(_vm.total_row[index], function (row, i) {
                            return _c(
                              "div",
                              { key: i, staticClass: "row w-100" },
                              [
                                _c("div", { staticClass: "col-sm-12" }, [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            _vm.total_row[index][i]
                                              .sightseeing_id,
                                          expression:
                                            "total_row[index][i].sightseeing_id",
                                        },
                                      ],
                                      staticClass: "form-control select-field",
                                      attrs: { placeholder: "From" },
                                      on: {
                                        change: function ($event) {
                                          var $$selectedVal =
                                            Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function (o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function (o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                          _vm.$set(
                                            _vm.total_row[index][i],
                                            "sightseeing_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "option",
                                        {
                                          attrs: {
                                            value: "",
                                            disabled: "",
                                            hidden: "",
                                          },
                                        },
                                        [_vm._v("Select Sightseeing")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.options, function (data) {
                                        return _c(
                                          "option",
                                          {
                                            key: data.id,
                                            domProps: { value: data.id },
                                          },
                                          [_vm._v(_vm._s(data.name))]
                                        )
                                      }),
                                    ],
                                    2
                                  ),
                                ]),
                              ]
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-2" },
                          [
                            _c("plus-button", {
                              nativeOn: {
                                click: function ($event) {
                                  return _vm.addRow(index)
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("minus-button", {
                              nativeOn: {
                                click: function ($event) {
                                  return _vm.removeRow(index)
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("form-buttons", { staticClass: "mb-5" }),
                ],
                2
              ),
            ]),
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

/***/ "./resources/js/admin/components/buttons/MinusButton.vue":
/*!***************************************************************!*\
  !*** ./resources/js/admin/components/buttons/MinusButton.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MinusButton_vue_vue_type_template_id_1d996059___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MinusButton.vue?vue&type=template&id=1d996059& */ "./resources/js/admin/components/buttons/MinusButton.vue?vue&type=template&id=1d996059&");
/* harmony import */ var _MinusButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MinusButton.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/buttons/MinusButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MinusButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MinusButton_vue_vue_type_template_id_1d996059___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MinusButton_vue_vue_type_template_id_1d996059___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/buttons/MinusButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/buttons/MinusButton.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/components/buttons/MinusButton.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinusButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinusButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/buttons/MinusButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MinusButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/buttons/MinusButton.vue?vue&type=template&id=1d996059&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/components/buttons/MinusButton.vue?vue&type=template&id=1d996059& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MinusButton_vue_vue_type_template_id_1d996059___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MinusButton.vue?vue&type=template&id=1d996059& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/buttons/MinusButton.vue?vue&type=template&id=1d996059&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MinusButton_vue_vue_type_template_id_1d996059___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MinusButton_vue_vue_type_template_id_1d996059___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/components/buttons/PlusButton.vue":
/*!**************************************************************!*\
  !*** ./resources/js/admin/components/buttons/PlusButton.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlusButton_vue_vue_type_template_id_06b54f25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlusButton.vue?vue&type=template&id=06b54f25& */ "./resources/js/admin/components/buttons/PlusButton.vue?vue&type=template&id=06b54f25&");
/* harmony import */ var _PlusButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlusButton.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/buttons/PlusButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PlusButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PlusButton_vue_vue_type_template_id_06b54f25___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PlusButton_vue_vue_type_template_id_06b54f25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/buttons/PlusButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/buttons/PlusButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/components/buttons/PlusButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlusButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlusButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/buttons/PlusButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlusButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/buttons/PlusButton.vue?vue&type=template&id=06b54f25&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/components/buttons/PlusButton.vue?vue&type=template&id=06b54f25& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlusButton_vue_vue_type_template_id_06b54f25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PlusButton.vue?vue&type=template&id=06b54f25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/buttons/PlusButton.vue?vue&type=template&id=06b54f25&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlusButton_vue_vue_type_template_id_06b54f25___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PlusButton_vue_vue_type_template_id_06b54f25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/New-sightseen.vue":
/*!***************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/New-sightseen.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_sightseen_vue_vue_type_template_id_634fa205___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New-sightseen.vue?vue&type=template&id=634fa205& */ "./resources/js/admin/pages/bookedtour/New-sightseen.vue?vue&type=template&id=634fa205&");
/* harmony import */ var _New_sightseen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New-sightseen.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bookedtour/New-sightseen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_sightseen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_sightseen_vue_vue_type_template_id_634fa205___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_sightseen_vue_vue_type_template_id_634fa205___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bookedtour/New-sightseen.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/New-sightseen.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/New-sightseen.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_sightseen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New-sightseen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/New-sightseen.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_sightseen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/New-sightseen.vue?vue&type=template&id=634fa205&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/New-sightseen.vue?vue&type=template&id=634fa205& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_sightseen_vue_vue_type_template_id_634fa205___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New-sightseen.vue?vue&type=template&id=634fa205& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/New-sightseen.vue?vue&type=template&id=634fa205&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_sightseen_vue_vue_type_template_id_634fa205___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_sightseen_vue_vue_type_template_id_634fa205___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);