(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/bookedfood"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Food.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/Food.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_components_layout_ListLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/admin/components/layout/ListLayout.vue */ "./resources/js/admin/components/layout/ListLayout.vue");
/* harmony import */ var _admin_components_icons_DeleteIcon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/icons/DeleteIcon.vue */ "./resources/js/admin/components/icons/DeleteIcon.vue");
/* harmony import */ var _admin_components_TableLoader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/TableLoader.vue */ "./resources/js/admin/components/TableLoader.vue");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ListFood",
  components: {
    "list-layout": _admin_components_layout_ListLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    "table-loader": _admin_components_TableLoader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "delete-icon": _admin_components_icons_DeleteIcon_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Form: vform__WEBPACK_IMPORTED_MODULE_3__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_3__["HasError"]
  },
  data: function data() {
    return {
      fields: [{
        key: "name",
        label: "NAME",
        sortable: true,
        thClass: "table-head"
      }, {
        key: "quantity",
        label: "AMOUNT",
        sortable: true,
        thClass: "table-head"
      }, {
        key: "updated_at",
        label: "LAST UPDATE",
        sortable: true,
        thClass: "table-head"
      }, {
        key: "action",
        label: "ACTION",
        thClass: "table-head"
      }],
      filter: "",
      form: new vform__WEBPACK_IMPORTED_MODULE_3__["Form"]({
        name: "",
        quantity: "",
        tour_id: this.$route.params.tour_id,
        tour_code: this.$route.params.tour_code
      }),
      editid: "",
      updateindex: ""
    };
  },
  mounted: function mounted() {
    this.getitems();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])(["items"])),
  methods: {
    getitems: function getitems() {
      var tour_code = this.$route.params.tour_code;
      this.$store.dispatch("getItems", "/foods/" + tour_code);
    },
    deleteItem: function deleteItem(id) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      var payload = _defineProperty({
        api: "/foods/" + id,
        index: index
      }, "index", index);

      this.$store.dispatch("deleteItem", payload);
    },
    editFood: function editFood(food, index) {
      this.form.fill(food);
      this.editid = food.id;
      this.updateindex = index;
    },
    foodModal: function foodModal() {
      this.form.name = "";
      this.form.quantity = "";
      this.editid = "";
      this.updateindex = "";
    },
    updateFood: function updateFood() {
      var _this = this;

      this.form.patch("/api/foods/".concat(this.editid)).then(function (res) {
        _this.getitems();

        _this.$swal.fire("Success", "Successfully updated !!!", "success");

        $(".close").click();
      })["catch"](function () {});
    },
    submitForm: function submitForm() {
      var _this2 = this;

      this.form.post("/api/foods").then(function (res) {
        _this2.getitems();

        $(".close").click();

        _this2.$swal.fire("Success", "Successfully Added !!!", "success");
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Food.vue?vue&type=template&id=4bf2b318&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/Food.vue?vue&type=template&id=4bf2b318& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "pt-4" },
    [
      _c(
        "div",
        { staticClass: "pl-3  top_btn text-uppercase font-weight-bold" },
        [
          _c(
            "a",
            {
              staticClass: "pointer text-white",
              attrs: {
                href: "#",
                "data-toggle": "modal",
                "data-target": "#foodModal",
              },
              on: {
                click: function ($event) {
                  return _vm.foodModal()
                },
              },
            },
            [_vm._v("NEW FOOD")]
          ),
        ]
      ),
      _vm._v(" "),
      _c("list-layout", {
        scopedSlots: _vm._u([
          {
            key: "searchbar",
            fn: function () {
              return [
                _c("b-form-input", {
                  staticClass: "radius-0",
                  attrs: { type: "search", placeholder: "Type to Search" },
                  model: {
                    value: _vm.filter,
                    callback: function ($$v) {
                      _vm.filter = $$v
                    },
                    expression: "filter",
                  },
                }),
              ]
            },
            proxy: true,
          },
          {
            key: "table",
            fn: function () {
              return [
                _c("b-table", {
                  staticClass: "w-100 table-layout",
                  attrs: {
                    id: "table-transition",
                    striped: "",
                    hover: "",
                    outlined: "",
                    "sticky-header": "460px",
                    fields: _vm.fields,
                    items: _vm.items.data,
                    busy: _vm.$store.getters.isBusy,
                    filter: _vm.filter,
                    "primary-key": "id",
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "table-busy",
                      fn: function () {
                        return [_c("table-loader")]
                      },
                      proxy: true,
                    },
                    {
                      key: "cell(action)",
                      fn: function (data) {
                        return [
                          _c(
                            "span",
                            {
                              staticClass: "edit_link pointer",
                              attrs: {
                                "data-toggle": "modal",
                                "data-target": "#foodModal",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.editFood(data.item, data.index)
                                },
                              },
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "badge badge-primary",
                                  attrs: { title: "View Itinerary" },
                                },
                                [_c("i", { staticClass: "fas fa-pencil-alt" })]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("delete-icon", {
                            nativeOn: {
                              click: function ($event) {
                                return _vm.deleteItem(data.item.id, data.index)
                              },
                            },
                          }),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "modal", attrs: { id: "foodModal" } },
                  [
                    _c("div", { staticClass: "modal-dialog" }, [
                      _c(
                        "div",
                        { staticClass: "modal-content simple-form-bg" },
                        [
                          _c("div", { staticClass: "modal-body" }, [
                            _c(
                              "button",
                              {
                                staticClass: "close",
                                attrs: {
                                  type: "button",
                                  "data-dismiss": "modal",
                                },
                              },
                              [_vm._v("\n                ×\n              ")]
                            ),
                            _vm._v(" "),
                            _c("p", [_vm._v("Add New Food")]),
                            _vm._v(" "),
                            _c(
                              "form",
                              {
                                on: {
                                  submit: function ($event) {
                                    $event.preventDefault()
                                    return _vm.submitForm()
                                  },
                                },
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("label", { attrs: { for: "name" } }, [
                                      _vm._v("Name"),
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
                                      class: {
                                        "is-invalid":
                                          _vm.form.errors.has("name"),
                                      },
                                      attrs: { type: "text" },
                                      domProps: { value: _vm.form.name },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "name",
                                            $event.target.value
                                          )
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
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("label", { attrs: { for: "name" } }, [
                                      _vm._v("Quantity"),
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.quantity,
                                          expression: "form.quantity",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid":
                                          _vm.form.errors.has("quantity"),
                                      },
                                      attrs: { type: "text" },
                                      domProps: { value: _vm.form.quantity },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "quantity",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "quantity",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "w-100 text-center" },
                                  [
                                    _vm.editid == ""
                                      ? _c(
                                          "button",
                                          {
                                            staticClass: "btn itrn_add_btn",
                                            attrs: { type: "submit" },
                                          },
                                          [
                                            _vm._v(
                                              "\n                    SAVE\n                  "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.editid != ""
                                      ? _c(
                                          "button",
                                          {
                                            staticClass: "btn itrn_add_btn",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.updateFood()
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                    UPDATE\n                  "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ]),
                  ]
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/Food.vue":
/*!******************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/Food.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Food_vue_vue_type_template_id_4bf2b318___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Food.vue?vue&type=template&id=4bf2b318& */ "./resources/js/admin/pages/bookedtour/Food.vue?vue&type=template&id=4bf2b318&");
/* harmony import */ var _Food_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Food.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bookedtour/Food.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Food_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Food_vue_vue_type_template_id_4bf2b318___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Food_vue_vue_type_template_id_4bf2b318___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bookedtour/Food.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/Food.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/Food.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Food_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Food.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Food.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Food_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/Food.vue?vue&type=template&id=4bf2b318&":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/Food.vue?vue&type=template&id=4bf2b318& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Food_vue_vue_type_template_id_4bf2b318___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Food.vue?vue&type=template&id=4bf2b318& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Food.vue?vue&type=template&id=4bf2b318&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Food_vue_vue_type_template_id_4bf2b318___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Food_vue_vue_type_template_id_4bf2b318___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);