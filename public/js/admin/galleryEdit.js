(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/galleryEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/gallery/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/gallery/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/form/DropdownList.vue */ "./resources/js/admin/components/form/DropdownList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EditGallery",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "dropdown-list": _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      options: [],
      schools: [],
      images: [],
      categories: [{
        name: "Domestic",
        id: "domestic"
      }, {
        name: "International",
        id: "international"
      }],
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        category: "",
        title: "",
        school_id: "",
        images: []
      })
    };
  },
  mounted: function mounted() {
    this.getGalleryList();
    this.getSchools();
  },
  methods: {
    getGalleryList: function getGalleryList() {
      var _this = this;

      axios.get("/api/gallery/".concat(this.$route.params.id, "/edit")).then(function (response) {
        setTimeout(function () {
          return $("#example").DataTable();
        }, 1000);

        _this.form.fill(response.data);

        _this.form.school_id = parseInt(response.data.school_id);
        _this.form.images = [];
        _this.images = response.data.images;
      });
    },
    getSchools: function getSchools() {
      var _this2 = this;

      axios.get("/api/school").then(function (res) {
        for (var i = 0; i < res.data.length; i++) {
          _this2.schools.push({
            id: res.data[i].id,
            name: res.data[i].school_name
          });
        }
      });
    },
    UpdateCategory: function UpdateCategory(v) {
      this.form.category = v.id;
    },
    updateSchool: function updateSchool(v) {
      this.form.school_id = v.id;
    },
    updateGallery: function updateGallery() {
      var _this3 = this;

      this.form.put("/api/gallery/".concat(this.$route.params.id)).then(function (response) {
        _this3.getGalleryList();

        _this3.$swal.fire({
          icon: "success",
          title: "Successfully Updated"
        });
      })["catch"](function () {});
    },
    changePhoto: function changePhoto(event) {
      var _this4 = this;

      var _loop = function _loop() {
        var file = event.target.files[i];
        var reader = new FileReader();

        reader.onload = function (event) {
          _this4.form.images.push({
            name: file.name,
            file: event.target.result
          });
        };

        reader.readAsDataURL(file);
      };

      for (var i = 0; i < event.target.files.length; i++) {
        _loop();
      }
    },
    deleteImage: function deleteImage(id) {
      var _this5 = this;

      var data = {
        id: id
      };
      axios.post("/api/gallery-img-delete", data).then(function (response) {
        _this5.getGalleryList();
      });
    },
    back: function back() {
      this.$router.push("/gallery");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/gallery/Edit.vue?vue&type=template&id=19d89b70&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/gallery/Edit.vue?vue&type=template&id=19d89b70& ***!
  \****************************************************************************************************************************************************************************************************************/
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
                    return _vm.updateGallery()
                  },
                },
              },
              [
                _vm.form.title
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "category" } }, [
                              _vm._v("Gallery Category"),
                            ]),
                            _vm._v(" "),
                            _c("dropdown-list", {
                              staticClass: "mb-2",
                              attrs: { itemList: _vm.categories },
                              model: {
                                value: _vm.form.category,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "category", $$v)
                                },
                                expression: "form.category",
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "category" },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-8" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "category" } }, [
                              _vm._v("Gallery Title"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.title,
                                  expression: "form.title",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                options: _vm.options,
                                placeholder: "Select Itinerary",
                              },
                              domProps: { value: _vm.form.title },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "title",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "title" },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-8" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "category" } }, [
                              _vm._v("School"),
                            ]),
                            _vm._v(" "),
                            _c("dropdown-list", {
                              staticClass: "mb-2",
                              attrs: { itemList: _vm.schools },
                              model: {
                                value: _vm.form.school_id,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "school_id", $$v)
                                },
                                expression: "form.school_id",
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "school_id" },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row img-card-delete-icon" },
                  _vm._l(_vm.images, function (img) {
                    return _c(
                      "div",
                      {
                        key: img.id,
                        staticClass: "col-sm-4 position-relative",
                      },
                      [
                        _c("div", { staticClass: "card" }, [
                          _c("div", { staticClass: "card-body" }, [
                            _c("img", {
                              staticClass: "w-100",
                              attrs: { src: "" + img.path },
                            }),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "badge badge-danger position-absolute cursor-pointer",
                            on: {
                              click: function ($event) {
                                return _vm.deleteImage(img.id)
                              },
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "far fa-trash-alt",
                              attrs: { "aria-hidden": "true" },
                            }),
                          ]
                        ),
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "images" } }, [
                        _vm._v("Select Multiple Images"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        ref: "attachments",
                        staticClass: "form-control w-100",
                        attrs: { type: "file", multiple: "multiple" },
                        on: { change: _vm.changePhoto },
                      }),
                    ]),
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

/***/ "./resources/js/admin/pages/gallery/Edit.vue":
/*!***************************************************!*\
  !*** ./resources/js/admin/pages/gallery/Edit.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_19d89b70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=19d89b70& */ "./resources/js/admin/pages/gallery/Edit.vue?vue&type=template&id=19d89b70&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/gallery/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_19d89b70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_19d89b70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/gallery/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/gallery/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/admin/pages/gallery/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/gallery/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/gallery/Edit.vue?vue&type=template&id=19d89b70&":
/*!**********************************************************************************!*\
  !*** ./resources/js/admin/pages/gallery/Edit.vue?vue&type=template&id=19d89b70& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_19d89b70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=19d89b70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/gallery/Edit.vue?vue&type=template&id=19d89b70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_19d89b70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_19d89b70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);