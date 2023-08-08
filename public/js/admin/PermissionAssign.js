(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/PermissionAssign"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/setting/permission/assign-permission.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/setting/permission/assign-permission.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_components_form_DropdownFilter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/form/DropdownFilter.vue */ "./resources/js/admin/components/form/DropdownFilter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewMember",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "dropdown-filter": _admin_components_form_DropdownFilter_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      role_list: [],
      permissions: [],
      //userDetails: {},
      userRole: window.userRole,
      permDetails: {},
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        permission_id: '',
        user_roles_id: this.$route.params.id,
        user_id: '',
        permission_name: '',
        create: false,
        edit: false,
        "delete": false,
        publish: false,
        view: false
      })
    };
  },
  created: function created() {
    this.getPermissions(window.userRole); //this.getRoles();
    //this.getDepartment();
    //this.getPerms();
    //console.log(window.userRole)
  },
  methods: {
    /*getPerms(perm_id){
      axios.get("/api/sub-perms/"+perm_id+"/"+this.$route.params.id).then((res) => {
        if (res) {
          for(let i = 0;i<res.data.length;i++){
            this.permission_list.push({
              name:res.data[i].name,
              id:res.data[i].id,
              status: false
            });
          }
        }
      });
    },*/

    /*getUserDetails(){
      axios.get("/api/user/details").then((res) => {
         this.userDetails = res.data;
         /*
        });
    },*/
    getPermDetails: function getPermDetails(permId) {
      var _this = this;

      axios.get("/api/check/permission/" + permId + "/" + this.$route.params.id).then(function (res) {
        _this.form.permission_id = permId;
        _this.form.permDetails = res.data;
        _this.form.create = res.data.create;
        _this.form.edit = res.data.edit;
        _this.form["delete"] = res.data["delete"];
        _this.form.publish = res.data.publish;
        _this.form.view = res.data.view;
        _this.form.user_id = res.data.user_id;
        _this.form.permission_name = res.data.permission_name; //console.log(this.permDetails);
        //this.getPermissions(this.userDetails.user_role);
      });
    },
    getPermissions: function getPermissions(role_id) {
      var _this2 = this;

      if (role_id == 1) {
        axios.get("/api/permission").then(function (res) {
          if (res) {
            for (var i = 0; i < res.data.length; i++) {
              _this2.permissions.push({
                name: res.data[i].name,
                id: res.data[i].id
              });
            }
          }
        });
      } else {
        axios.get("/api/user-permissions/" + window.userId).then(function (res) {
          if (res) {
            console.log(res.data.data);

            for (var i = 0; i < res.data.data.length; i++) {
              _this2.permissions.push({
                name: res.data.data[i].permission,
                id: res.data.data[i].permission_id
              });
            }
          }
        });
      }
    },
    //updateRole(v){ this.form.role_name = v.id },
    updatePerms: function updatePerms(v) {
      this.getPermDetails(v.id);
    },
    addPermission: function addPermission() {
      var _this3 = this;

      if (!this.form.permission_id || !this.form.user_roles_id) {
        this.$toast.fire({
          icon: "warning",
          title: "Please add a permission."
        });
        return false;
      }
      /* else if(this.form.view == false || this.form.view == null){
         this.$toast.fire({
             icon: "warning",
             title: "Must enable the view permission.",
           });
         return false;
       } */


      if (this.form.create) {
        this.form.create = this.form.create.toString();
      } else {
        this.form.create = 'false';
      }

      if (this.form.edit) {
        this.form.edit = this.form.edit.toString();
      } else {
        this.form.edit = 'false';
      }

      if (this.form["delete"]) {
        this.form["delete"] = this.form["delete"].toString();
      } else {
        this.form["delete"] = 'false';
      }

      if (this.form.publish) {
        this.form.publish = this.form.publish.toString();
      } else {
        this.form.publish = 'false';
      }

      if (this.form.view) {
        this.form.view = this.form.view.toString();
      } else {
        this.form.view = 'false';
      }

      console.log(this.form);
      this.form.post("/api/permission/assign").then(function (res) {
        //this.$router.push(`/list-member`);
        _this3.$toast.fire({
          icon: "success",
          title: "Permission Added Successfully"
        });
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/setting/permission/assign-permission.vue?vue&type=template&id=31c4bfb5&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/setting/permission/assign-permission.vue?vue&type=template&id=31c4bfb5& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
                attrs: { enctype: "multipart/form-data" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.addPermission()
                  },
                },
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-10" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "role_name" } }, [
                          _vm._v("Select Permission Category"),
                        ]),
                        _vm._v(" "),
                        _c("dropdown-filter", {
                          staticClass: "mb-2",
                          attrs: { itemList: _vm.permissions },
                          on: { "update:option": _vm.updatePerms },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-4" },
                    [
                      _c(
                        "label",
                        { staticClass: "text-capitalize permission-label" },
                        [_vm._v("Create")]
                      ),
                      _vm._v(" "),
                      _c("b-form-checkbox", {
                        attrs: { name: "check-button", size: "lg", switch: "" },
                        model: {
                          value: _vm.form.create,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "create", $$v)
                          },
                          expression: "form.create",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-4" },
                    [
                      _c(
                        "label",
                        { staticClass: "text-capitalize permission-label" },
                        [_vm._v("Edit")]
                      ),
                      _vm._v(" "),
                      _c("b-form-checkbox", {
                        attrs: { name: "check-button", size: "lg", switch: "" },
                        model: {
                          value: _vm.form.edit,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "edit", $$v)
                          },
                          expression: "form.edit",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.userRole == 1
                    ? _c(
                        "div",
                        { staticClass: "col-sm-4" },
                        [
                          _c(
                            "label",
                            { staticClass: "text-capitalize permission-label" },
                            [_vm._v("Delete")]
                          ),
                          _vm._v(" "),
                          _c("b-form-checkbox", {
                            attrs: {
                              name: "check-button",
                              size: "lg",
                              switch: "",
                            },
                            model: {
                              value: _vm.form.delete,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "delete", $$v)
                              },
                              expression: "form.delete",
                            },
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-4" },
                    [
                      _c(
                        "label",
                        { staticClass: "text-capitalize permission-label" },
                        [_vm._v("Publish")]
                      ),
                      _vm._v(" "),
                      _c("b-form-checkbox", {
                        attrs: { name: "check-button", size: "lg", switch: "" },
                        model: {
                          value: _vm.form.publish,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "publish", $$v)
                          },
                          expression: "form.publish",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-4" },
                    [
                      _c(
                        "label",
                        { staticClass: "text-capitalize permission-label" },
                        [_vm._v("View")]
                      ),
                      _vm._v(" "),
                      _c("b-form-checkbox", {
                        attrs: { name: "check-button", size: "lg", switch: "" },
                        model: {
                          value: _vm.form.view,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "view", $$v)
                          },
                          expression: "form.view",
                        },
                      }),
                    ],
                    1
                  ),
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

/***/ "./resources/js/admin/pages/setting/permission/assign-permission.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/pages/setting/permission/assign-permission.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assign_permission_vue_vue_type_template_id_31c4bfb5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assign-permission.vue?vue&type=template&id=31c4bfb5& */ "./resources/js/admin/pages/setting/permission/assign-permission.vue?vue&type=template&id=31c4bfb5&");
/* harmony import */ var _assign_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assign-permission.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/setting/permission/assign-permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _assign_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assign_permission_vue_vue_type_template_id_31c4bfb5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assign_permission_vue_vue_type_template_id_31c4bfb5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/setting/permission/assign-permission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/setting/permission/assign-permission.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/pages/setting/permission/assign-permission.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assign-permission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/setting/permission/assign-permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/setting/permission/assign-permission.vue?vue&type=template&id=31c4bfb5&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/admin/pages/setting/permission/assign-permission.vue?vue&type=template&id=31c4bfb5& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_permission_vue_vue_type_template_id_31c4bfb5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./assign-permission.vue?vue&type=template&id=31c4bfb5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/setting/permission/assign-permission.vue?vue&type=template&id=31c4bfb5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_permission_vue_vue_type_template_id_31c4bfb5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_permission_vue_vue_type_template_id_31c4bfb5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);