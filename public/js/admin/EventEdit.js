(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/EventEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/events/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/events/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/mixins/Vue2EditorMixin */ "./resources/js/admin/mixins/Vue2EditorMixin.js");
/* harmony import */ var _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/components/form/DropdownList.vue */ "./resources/js/admin/components/form/DropdownList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EditEvent",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "dropdown-filter": _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      itinerary_list: [],
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        name: "",
        description: "",
        date: "",
        time: "",
        photo: "",
        detail_photo: "",
        itinerary_id: ""
      }),
      allCreated: false
    };
  },
  mixins: [_admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_3__["default"]],
  created: function created() {
    this.itineraryData();
    this.EvtData();
  },
  methods: {
    EvtData: function EvtData() {
      var _this = this;

      axios.get("/api/events/".concat(this.$route.params.id, "/edit")).then(function (response) {
        _this.form.fill(response.data);

        _this.allCreated = true;
      });
    },
    itineraryData: function itineraryData() {
      var _this2 = this;

      axios.get("/api/itinerary").then(function (response) {
        if (response.data) {
          for (var i = 0; i < response.data.length; i++) {
            _this2.itinerary_list.push({
              name: response.data[i].title,
              id: response.data[i].id
            });
          }
        }
      });
    },
    itineraryUpdate: function itineraryUpdate(value) {
      //console.log(this.form)
      this.form.itinerary_id = value.id;
    },
    changePhoto: function changePhoto(event) {
      var _this3 = this;

      var file = event.target.files[0];

      if (file.size > 29048576) {
        this.$swal.fire({
          type: "error",
          title: "Oops...",
          text: "Please Select A Valid Image!"
        });
      } else {
        var reader = new FileReader();

        reader.onload = function (event) {
          _this3.form.photo = event.target.result;
        };

        reader.readAsDataURL(file);
      }
    },
    changeDetailPhoto: function changeDetailPhoto(event) {
      var _this4 = this;

      var file = event.target.files[0];

      if (file.size > 29048576) {
        this.$swal.fire({
          type: "error",
          title: "Oops...",
          text: "Please Select a Valid Image"
        });
      } else {
        var reader = new FileReader();

        reader.onload = function (event) {
          _this4.form.detail_photo = event.target.result;
          _this4.form.detail_photo_alt = file.name;
        };

        reader.readAsDataURL(file);
      }
    },
    updateEvent: function updateEvent() {
      var _this5 = this;

      this.form.put("/api/events/".concat(this.$route.params.id)).then(function (response) {
        _this5.$router.push("/event-list");

        _this5.$toast.fire({
          icon: "success",
          title: "Updated successfully"
        });
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/events/Edit.vue?vue&type=template&id=01e28047&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/events/Edit.vue?vue&type=template&id=01e28047& ***!
  \***************************************************************************************************************************************************************************************************************/
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
            _vm.allCreated
              ? _c(
                  "form",
                  {
                    attrs: { role: "form", enctype: "multipart/form-data" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.updateEvent()
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Event Name"),
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
                                "is-invalid": _vm.form.errors.has("name"),
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter Event Name",
                              },
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
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "itinerary_id" } }, [
                              _vm._v("Select Itinerary"),
                            ]),
                            _vm._v(" "),
                            _c("dropdown-filter", {
                              staticClass: "mb-2",
                              attrs: { itemList: _vm.itinerary_list },
                              on: { "update:option": _vm.itineraryUpdate },
                              model: {
                                value: _vm.form.itinerary_id,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "itinerary_id", $$v)
                                },
                                expression: "form.itinerary_id",
                              },
                            }),
                            _vm._v(" "),
                            _vm.form.errors.has("itinerary_id")
                              ? _c("div", { staticClass: "error" }, [
                                  _c(
                                    "label",
                                    { staticClass: "danger text-danger" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.form.errors.get("itinerary_id")
                                        )
                                      ),
                                    ]
                                  ),
                                ])
                              : _vm._e(),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "description" } }, [
                              _vm._v("Description"),
                            ]),
                            _vm._v(" "),
                            _c("vue-editor", {
                              class: {
                                "is-invalid":
                                  _vm.form.errors.has("description"),
                              },
                              attrs: {
                                customModules: _vm.customModulesForEditor,
                                editorOptions: _vm.editorSettings,
                                id: "editor",
                                useCustomImageHandler: "",
                              },
                              on: {
                                "image-added": _vm.handleImageAdded,
                                "image-removed": _vm.handleImageRemoved,
                              },
                              model: {
                                value: _vm.form.description,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "description", $$v)
                                },
                                expression: "form.description",
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "description" },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "date" } }, [
                              _vm._v("Date"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.date,
                                  expression: "form.date",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("date"),
                              },
                              attrs: {
                                type: "date",
                                placeholder: "Enter Event date",
                              },
                              domProps: { value: _vm.form.date },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "date",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "date" },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "time" } }, [
                              _vm._v("Time"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.time,
                                  expression: "form.time",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("time"),
                              },
                              attrs: {
                                type: "time",
                                placeholder: "Enter Event time",
                              },
                              domProps: { value: _vm.form.time },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "time",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "time" },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-30" }, [
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                staticClass: "overflow-hidden",
                                class: {
                                  "is-invalid":
                                    _vm.form.errors.has("form.photo"),
                                },
                                attrs: { name: "photo", type: "file" },
                                on: {
                                  change: function ($event) {
                                    return _vm.changePhoto($event)
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _vm.form.photo != ""
                              ? _c("img", {
                                  attrs: {
                                    src: _vm.form.photo,
                                    alt: "",
                                    width: "80",
                                    height: "80",
                                  },
                                })
                              : _vm._e(),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-5" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                staticClass: "overflow-hidden",
                                class: {
                                  "is-invalid":
                                    _vm.form.errors.has("form.detail_photo"),
                                },
                                attrs: { type: "file" },
                                on: {
                                  change: function ($event) {
                                    return _vm.changeDetailPhoto($event)
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-7" }, [
                            _vm.form.detail_photo != ""
                              ? _c("img", {
                                  staticClass: "detail_photo",
                                  attrs: {
                                    src: _vm.form.detail_photo,
                                    alt: "",
                                    width: "80",
                                    height: "80",
                                  },
                                })
                              : _vm._e(),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("form-buttons"),
                  ],
                  1
                )
              : _vm._e(),
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

/***/ "./resources/js/admin/mixins/Vue2EditorMixin.js":
/*!******************************************************!*\
  !*** ./resources/js/admin/mixins/Vue2EditorMixin.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var quill_image_drop_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-image-drop-module */ "./node_modules/quill-image-drop-module/index.js");
/* harmony import */ var quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill-image-resize-module */ "./node_modules/quill-image-resize-module/image-resize.min.js");
/* harmony import */ var quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2__);



var Vue2EditorMixin = {
  components: {
    "vue-editor": vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"]
  },
  data: function data() {
    return {
      customModulesForEditor: [{
        alias: "imageDrop",
        module: quill_image_drop_module__WEBPACK_IMPORTED_MODULE_1__["ImageDrop"]
      }, {
        alias: "imageResize",
        module: quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2___default.a
      }],
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {}
        }
      }
    };
  },
  methods: {
    handleImageAdded: function handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);
      axios({
        url: "/api/images",
        method: "POST",
        data: formData
      }).then(function (result) {
        var url = result.data.url; // Get url from response

        Editor.insertEmbed(cursorLocation, "image", url);
        resetUploader();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    handleImageRemoved: function handleImageRemoved(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);
      axios({
        url: "/api/images/delete",
        method: "POST",
        data: formData
      }).then(function (result) {
        var url = result.data.url; // Get url from response

        Editor.insertEmbed(cursorLocation, "image", url);
        resetUploader();
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Vue2EditorMixin);

/***/ }),

/***/ "./resources/js/admin/pages/events/Edit.vue":
/*!**************************************************!*\
  !*** ./resources/js/admin/pages/events/Edit.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_01e28047___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=01e28047& */ "./resources/js/admin/pages/events/Edit.vue?vue&type=template&id=01e28047&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/events/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_01e28047___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_01e28047___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/events/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/events/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/pages/events/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/events/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/events/Edit.vue?vue&type=template&id=01e28047&":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/pages/events/Edit.vue?vue&type=template&id=01e28047& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_01e28047___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=01e28047& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/events/Edit.vue?vue&type=template&id=01e28047&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_01e28047___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_01e28047___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);