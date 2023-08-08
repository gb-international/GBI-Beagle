(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/frontbooking"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/icons/EditIcon.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/icons/EditIcon.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EditIconButtonGBI",
  props: ['url'],
  data: function data() {
    return {};
  },
  computed: {
    hasPerms: function hasPerms() {
      var _this = this;

      if (window.userRole == 1) {
        return true;
      }

      var perms = window.editPerms;

      var hasPerm = function hasPerm(perm) {
        return perm.permission_id === _this.$route.meta.permId;
      };

      return perms.some(hasPerm);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/icons/ViewIcon.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/icons/ViewIcon.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ViewsIconButtonGBI",
  props: ['url'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/FrontBooking.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/itinerary/FrontBooking.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_components_layout_ListLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/admin/components/layout/ListLayout.vue */ "./resources/js/admin/components/layout/ListLayout.vue");
/* harmony import */ var laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js");
/* harmony import */ var laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_components_icons_EditIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/icons/EditIcon.vue */ "./resources/js/admin/components/icons/EditIcon.vue");
/* harmony import */ var _admin_components_icons_DeleteIcon_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/icons/DeleteIcon.vue */ "./resources/js/admin/components/icons/DeleteIcon.vue");
/* harmony import */ var _admin_components_icons_ViewIcon_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/components/icons/ViewIcon.vue */ "./resources/js/admin/components/icons/ViewIcon.vue");
/* harmony import */ var _admin_components_TableLoader_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/components/TableLoader.vue */ "./resources/js/admin/components/TableLoader.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "List",
  components: {
    'list-layout': _admin_components_layout_ListLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'table-loader': _admin_components_TableLoader_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'pagination': laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_1___default.a,
    'edit-icon': _admin_components_icons_EditIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'delete-icon': _admin_components_icons_DeleteIcon_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'view-icon': _admin_components_icons_ViewIcon_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      transProps: {
        // Transition name
        name: 'flip-list'
      },
      fields: [{
        key: 'created_at',
        label: 'booking date',
        sortable: true,
        thClass: 'table-head'
      }, {
        key: 'start_date',
        label: 'start date',
        sortable: true,
        thClass: 'table-head'
      }, {
        key: 'end_date',
        label: 'end date',
        sortable: true,
        thClass: 'table-head'
      }, {
        key: 'status',
        label: 'status',
        sortable: true,
        thClass: 'table-head'
      }, {
        key: 'type',
        label: 'type',
        sortable: true,
        thClass: 'table-head'
      }, {
        key: 'action',
        label: 'action',
        thClass: 'table-head'
      }],
      filter: '',
      limit: 2,
      perPage: 7,
      options: [7, 25, 50, 100]
    };
  },
  mounted: function mounted() {
    this.getitems();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])(['items'])),
  watch: {
    perPage: function perPage() {
      this.getitems(1, this.perPage);
    }
  },
  methods: {
    getitems: function getitems() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.perPage;
      this.$store.dispatch('getItems', '/frontbooking/all/' + size + '?page=' + page);
    },
    deleteItem: function deleteItem(id) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      var payload = _defineProperty({
        'api': "/frontbooking-delete/" + id,
        index: index
      }, "index", index);

      this.$store.dispatch('deleteItem', payload);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/icons/EditIcon.vue?vue&type=template&id=788841e3&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/icons/EditIcon.vue?vue&type=template&id=788841e3& ***!
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
  return _vm.hasPerms
    ? _c("router-link", { staticClass: "edit_link", attrs: { to: _vm.url } }, [
        _c(
          "span",
          {
            staticClass: "badge badge-primary incrIconSize",
            attrs: { title: "Edit Item" },
          },
          [_c("i", { staticClass: "fas fa-pencil-alt" })]
        ),
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/icons/ViewIcon.vue?vue&type=template&id=61197904&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/icons/ViewIcon.vue?vue&type=template&id=61197904& ***!
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
  return _c(
    "router-link",
    { staticClass: "edit_link", attrs: { to: _vm.url } },
    [
      _c(
        "span",
        {
          staticClass: "badge badge-primary incrIconSize",
          attrs: { title: "View Item" },
        },
        [_c("i", { staticClass: "fas fa-eye" })]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/FrontBooking.vue?vue&type=template&id=1ecb9d7d&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/itinerary/FrontBooking.vue?vue&type=template&id=1ecb9d7d& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("list-layout", {
    scopedSlots: _vm._u(
      [
        {
          key: "perpage",
          fn: function () {
            return [
              _c(
                "b-form-group",
                {
                  staticClass: "mb-0",
                  attrs: {
                    label: "Per page",
                    "label-for": "per-page-select",
                    "label-cols-sm": "6",
                    "label-cols-md": "4",
                    "label-cols-lg": "3",
                    "label-align-sm": "right",
                    "label-size": "sm",
                  },
                },
                [
                  _c("b-form-select", {
                    staticClass: "radius-0",
                    attrs: { id: "per-page-select", options: _vm.options },
                    model: {
                      value: _vm.perPage,
                      callback: function ($$v) {
                        _vm.perPage = $$v
                      },
                      expression: "perPage",
                    },
                  }),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
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
                  "primary-key": "updated_at",
                  "tbody-transition-props": _vm.transProps,
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
                    key: "cell(status)",
                    fn: function (data) {
                      return [
                        data.item.status == 0
                          ? _c("span", { staticClass: "badge badge-warning" }, [
                              _vm._v("Pending"),
                            ])
                          : _c("span", { staticClass: "badge badge-success" }, [
                              _vm._v("Booked"),
                            ]),
                      ]
                    },
                  },
                  {
                    key: "cell(action)",
                    fn: function (data) {
                      return [
                        _c("delete-icon", {
                          nativeOn: {
                            click: function ($event) {
                              return _vm.deleteItem(data.item.id, data.index)
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("view-icon", {
                          attrs: { url: "/front-booking/" + data.item.id },
                        }),
                      ]
                    },
                  },
                ]),
              }),
            ]
          },
          proxy: true,
        },
        _vm.items.data
          ? {
              key: "pagination",
              fn: function () {
                return [
                  _c(
                    "pagination",
                    {
                      attrs: {
                        data: _vm.items,
                        align: "right",
                        limit: _vm.limit,
                      },
                      on: { "pagination-change-page": _vm.getitems },
                    },
                    [
                      _c(
                        "span",
                        { attrs: { slot: "prev-nav" }, slot: "prev-nav" },
                        [_vm._v("Previous")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        { attrs: { slot: "next-nav" }, slot: "next-nav" },
                        [_vm._v("Next")]
                      ),
                    ]
                  ),
                ]
              },
              proxy: true,
            }
          : null,
      ],
      null,
      true
    ),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/components/icons/EditIcon.vue":
/*!**********************************************************!*\
  !*** ./resources/js/admin/components/icons/EditIcon.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditIcon_vue_vue_type_template_id_788841e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditIcon.vue?vue&type=template&id=788841e3& */ "./resources/js/admin/components/icons/EditIcon.vue?vue&type=template&id=788841e3&");
/* harmony import */ var _EditIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditIcon.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/icons/EditIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditIcon_vue_vue_type_template_id_788841e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditIcon_vue_vue_type_template_id_788841e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/icons/EditIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/icons/EditIcon.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/components/icons/EditIcon.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/icons/EditIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/icons/EditIcon.vue?vue&type=template&id=788841e3&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/admin/components/icons/EditIcon.vue?vue&type=template&id=788841e3& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditIcon_vue_vue_type_template_id_788841e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditIcon.vue?vue&type=template&id=788841e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/icons/EditIcon.vue?vue&type=template&id=788841e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditIcon_vue_vue_type_template_id_788841e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditIcon_vue_vue_type_template_id_788841e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/components/icons/ViewIcon.vue":
/*!**********************************************************!*\
  !*** ./resources/js/admin/components/icons/ViewIcon.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewIcon_vue_vue_type_template_id_61197904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewIcon.vue?vue&type=template&id=61197904& */ "./resources/js/admin/components/icons/ViewIcon.vue?vue&type=template&id=61197904&");
/* harmony import */ var _ViewIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewIcon.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/icons/ViewIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewIcon_vue_vue_type_template_id_61197904___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewIcon_vue_vue_type_template_id_61197904___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/icons/ViewIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/icons/ViewIcon.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/components/icons/ViewIcon.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/icons/ViewIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/icons/ViewIcon.vue?vue&type=template&id=61197904&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/admin/components/icons/ViewIcon.vue?vue&type=template&id=61197904& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewIcon_vue_vue_type_template_id_61197904___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewIcon.vue?vue&type=template&id=61197904& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/icons/ViewIcon.vue?vue&type=template&id=61197904&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewIcon_vue_vue_type_template_id_61197904___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewIcon_vue_vue_type_template_id_61197904___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/pages/itinerary/FrontBooking.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/FrontBooking.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FrontBooking_vue_vue_type_template_id_1ecb9d7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FrontBooking.vue?vue&type=template&id=1ecb9d7d& */ "./resources/js/admin/pages/itinerary/FrontBooking.vue?vue&type=template&id=1ecb9d7d&");
/* harmony import */ var _FrontBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrontBooking.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/itinerary/FrontBooking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FrontBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FrontBooking_vue_vue_type_template_id_1ecb9d7d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FrontBooking_vue_vue_type_template_id_1ecb9d7d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/itinerary/FrontBooking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/itinerary/FrontBooking.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/FrontBooking.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FrontBooking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/FrontBooking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/itinerary/FrontBooking.vue?vue&type=template&id=1ecb9d7d&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/FrontBooking.vue?vue&type=template&id=1ecb9d7d& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontBooking_vue_vue_type_template_id_1ecb9d7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FrontBooking.vue?vue&type=template&id=1ecb9d7d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/FrontBooking.vue?vue&type=template&id=1ecb9d7d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontBooking_vue_vue_type_template_id_1ecb9d7d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontBooking_vue_vue_type_template_id_1ecb9d7d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);