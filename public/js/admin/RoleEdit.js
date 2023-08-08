(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/RoleEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/setting/role/Edit-role.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/setting/role/Edit-role.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewRole",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      // Create a new form instance
      permissions: [],
      has_permission: [],
      not_has_permission: [],
      items: [],
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        name: "",
        permissions: ""
      })
    };
  },
  created: function created() {
    var _this = this;

    var url = "/api/role/".concat(this.$route.params.id, "/edit");
    axios.get(url).then(function (response) {
      setTimeout(function () {
        return $("#example").DataTable();
      }, 1000);

      _this.form.fill(response.data);

      _this.has_permission = response.data.permissions;
    });
    axios.get("/api/permission").then(function (response) {
      setTimeout(function () {
        return $("#example").DataTable();
      }, 1000);
      _this.permissions = response.data;

      for (var i = 0; i < _this.permissions.length; i++) {
        _this.items.push({
          id: _this.permissions[i].id
        });
      }

      for (var j = 0; j < _this.items.length; j++) {
        var get = 0;

        for (var i = 0; i < _this.has_permission.length; i++) {
          if (_this.items[j].id == _this.has_permission[i].id) {
            get = 1;
          }
        }

        if (get == 0) {
          _this.items[j].id = false;
        }
      }
    });
  },
  methods: {
    UpdateRole: function UpdateRole() {
      var _this2 = this;

      // Submit the form via a itinerary request
      this.form.permissions = this.items;
      this.form.put("/api/role/".concat(this.$route.params.id)).then(function (response) {
        _this2.$toast.fire({
          icon: "success",
          title: "Successfully Updated"
        });
      })["catch"](function () {});
    },
    goBack: function goBack() {
      this.$router.push("/list-role/");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/setting/role/Edit-role.vue?vue&type=template&id=61b33ce8&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/setting/role/Edit-role.vue?vue&type=template&id=61b33ce8& ***!
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
  return _c("form-layout", {
    scopedSlots: _vm._u([
      {
        key: "formdata",
        fn: function () {
          return [
            _c(
              "form",
              {
                attrs: { role: "form", enctype: "multipart/form-data" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.UpdateRole()
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
                          _vm._v("Role name"),
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
                            placeholder: "Enter School name",
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
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-8" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.permissions, function (permission, index) {
                        return _c(
                          "div",
                          { key: permission.id, staticClass: "col-sm-4" },
                          [
                            _c(
                              "label",
                              { staticClass: "form-check-label font-18 mb-20" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.items[index].id,
                                      expression: "items[index].id",
                                    },
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    name: "checkbox",
                                    "true-value": permission.id,
                                  },
                                  domProps: {
                                    value: permission.id,
                                    checked: Array.isArray(_vm.items[index].id)
                                      ? _vm._i(
                                          _vm.items[index].id,
                                          permission.id
                                        ) > -1
                                      : _vm._q(
                                          _vm.items[index].id,
                                          permission.id
                                        ),
                                  },
                                  on: {
                                    change: function ($event) {
                                      var $$a = _vm.items[index].id,
                                        $$el = $event.target,
                                        $$c = $$el.checked
                                          ? permission.id
                                          : false
                                      if (Array.isArray($$a)) {
                                        var $$v = permission.id,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.items[index],
                                              "id",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.items[index],
                                              "id",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.items[index], "id", $$c)
                                      }
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-capitalize" }, [
                                  _vm._v(_vm._s(permission.name)),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c("hr"),
                          ]
                        )
                      }),
                      0
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
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/setting/role/Edit-role.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/pages/setting/role/Edit-role.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_role_vue_vue_type_template_id_61b33ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit-role.vue?vue&type=template&id=61b33ce8& */ "./resources/js/admin/pages/setting/role/Edit-role.vue?vue&type=template&id=61b33ce8&");
/* harmony import */ var _Edit_role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit-role.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/setting/role/Edit-role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_role_vue_vue_type_template_id_61b33ce8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_role_vue_vue_type_template_id_61b33ce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/setting/role/Edit-role.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/setting/role/Edit-role.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/pages/setting/role/Edit-role.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-role.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/setting/role/Edit-role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/setting/role/Edit-role.vue?vue&type=template&id=61b33ce8&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/pages/setting/role/Edit-role.vue?vue&type=template&id=61b33ce8& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_role_vue_vue_type_template_id_61b33ce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-role.vue?vue&type=template&id=61b33ce8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/setting/role/Edit-role.vue?vue&type=template&id=61b33ce8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_role_vue_vue_type_template_id_61b33ce8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_role_vue_vue_type_template_id_61b33ce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);