(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/BookedEscort"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_components_form_DropdownFilter_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/components/form/DropdownFilter.vue */ "./resources/js/admin/components/form/DropdownFilter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ListTourmanager",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    ModelSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_1__["ModelSelect"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    "dropdown-filter": _admin_components_form_DropdownFilter_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      manager_data: "",
      escort_id: "",
      tour: "",
      escort_list: []
    };
  },
  // Get all the data
  created: function created() {
    this.escortData();
    this.tourData();
  },
  watch: {
    escort_id: function escort_id(value) {
      var _this = this;

      if (value) {
        var path = "/api/escort/" + value + "/edit/";
        axios.get(path).then(function (response) {
          _this.manager_data = response.data;
        });
      }
    }
  },
  methods: {
    escortData: function escortData() {
      var _this2 = this;

      axios.get("/api/escort").then(function (response) {
        for (var i = 0; i < response.data.data.length; i++) {
          _this2.escort_list.push({
            name: response.data.data[i].name,
            id: response.data.data[i].id
          });
        }
      });
    },
    UpdatedItem: function UpdatedItem(value) {
      this.escort_id = value.id;
    },
    tourData: function tourData() {
      var _this3 = this;

      axios.get("/api/tour/".concat(this.$route.params.id, "/edit")).then(function (response) {
        _this3.tour = response.data;
      });
    },
    updateData: function updateData() {
      var _this4 = this;

      if (this.escort_id == undefined) {
        this.$toast.fire({
          icon: "error",
          title: "Please Select Tour Manager !!!"
        });
        return false;
      }

      var data = {
        escort_id: this.escort_id,
        tour_id: this.tour.id,
        tour_code: this.tour.tour_id
      };
      axios.post('/api/bookedescorts', data).then(function (response) {
        if (response.data == 1) {
          _this4.$toast.fire({
            icon: "error",
            title: "Tour Manager already going on this tour !!!"
          });

          return false;
        }

        _this4.$toast.fire({
          icon: "success",
          title: "Successfully Updated !!!"
        });
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this4.errors = error.response.data.errors || {};
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue?vue&type=template&id=42f38948&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue?vue&type=template&id=42f38948& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
                    return _vm.updateData()
                  },
                },
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-5" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("TOUR MANAGER")]),
                        _vm._v(" "),
                        _c("dropdown-filter", {
                          staticClass: "mb-2",
                          attrs: { itemList: _vm.escort_list },
                          on: { "update:option": _vm.UpdatedItem },
                        }),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("SALARY PER DAY(INR)")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.manager_data.salaryPerday) + "/-"),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c("label", [_vm._v("CONTACT NUMBER")]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.manager_data.phoneno))]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-5" }, [
                    _c("label", [_vm._v("EMAIL ID")]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.manager_data.email))]),
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

/***/ "./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_tourmanager_vue_vue_type_template_id_42f38948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New-tourmanager.vue?vue&type=template&id=42f38948& */ "./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue?vue&type=template&id=42f38948&");
/* harmony import */ var _New_tourmanager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New-tourmanager.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_tourmanager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_tourmanager_vue_vue_type_template_id_42f38948___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_tourmanager_vue_vue_type_template_id_42f38948___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_tourmanager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./New-tourmanager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_tourmanager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue?vue&type=template&id=42f38948&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue?vue&type=template&id=42f38948& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_tourmanager_vue_vue_type_template_id_42f38948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./New-tourmanager.vue?vue&type=template&id=42f38948& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/tourmanager/New-tourmanager.vue?vue&type=template&id=42f38948&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_tourmanager_vue_vue_type_template_id_42f38948___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_tourmanager_vue_vue_type_template_id_42f38948___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);