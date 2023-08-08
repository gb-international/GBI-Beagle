(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/PostEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/blog/post/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/blog/post/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/mixins/Vue2EditorMixin */ "./resources/js/admin/mixins/Vue2EditorMixin.js");
/* harmony import */ var vue_search_select_dist_VueSearchSelect_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-search-select/dist/VueSearchSelect.css */ "./node_modules/vue-search-select/dist/VueSearchSelect.css");
/* harmony import */ var vue_search_select_dist_VueSearchSelect_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_search_select_dist_VueSearchSelect_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/admin/components/form/DropdownList.vue */ "./resources/js/admin/components/form/DropdownList.vue");
/* harmony import */ var _admin_components_form_StatusDropdown2_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/admin/components/form/StatusDropdown2.vue */ "./resources/js/admin/components/form/StatusDropdown2.vue");
/* harmony import */ var _voerro_vue_tagsinput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @voerro/vue-tagsinput */ "./node_modules/@voerro/vue-tagsinput/src/main.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewPost",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_3___default.a,
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    "dropdown-list": _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    "status-dd": _admin_components_form_StatusDropdown2_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    "tags-input": _voerro_vue_tagsinput__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mixins: [_admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      img_image: false,
      titleWarn: false,
      descriptionWarn: false,
      summeryWarn: false,
      meta_titleWarn: false,
      meta_keywordWarn: false,
      tagsWarn: false,
      clientTypeWarn: false,
      categories: [],
      tags: [],
      meta_key: [],
      status_list: [{
        name: "Draft",
        id: 0
      }, {
        name: "Public",
        id: 1
      }],
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        title: "",
        description: "",
        summery: "",
        image: [],
        meta_title: "",
        meta_keyword: "",
        status: "",
        tags: [],
        category_id: "",
        client_type: "",
        user_id: window.userId
      }),
      loading: false,
      socket: Object(socket_io_client__WEBPACK_IMPORTED_MODULE_9__["default"])('localhost:3000')
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.getCategories();
    this.getTags();
    this.editPost();
    this.meta_key = this.form.tags;
  },
  methods: {
    changeField: function changeField(field, input) {
      if (field === 'title') {
        if (input === '') {
          this.titleWarn = true;
        } else {
          this.titleWarn = false;
          this.form.title = input;
        }
      }

      if (field === 'summery') {
        if (input === '') {
          this.summeryWarn = true;
        } else {
          this.summeryWarn = false;
        }
      }

      if (field === 'meta_title') {
        if (input === '') {
          this.meta_titleWarn = true;
        } else {
          this.meta_titleWarn = false;
        }
      }

      if (field === 'meta_keyword') {
        if (input === '') {
          this.meta_keywordWarn = true;
        } else {
          this.meta_keywordWarn = false;
        }
      }
    },
    editPost: function editPost() {
      var _this = this;

      axios.get("/api/posts/".concat(this.$route.params.id, "/edit")).then(function (response) {
        setTimeout(function () {
          return $("#example").DataTable();
        }, 1000);

        _this.form.fill(response.data);

        _this.form.image = [];
        _this.img_image = response.data.image;

        for (var i = 0; i < response.data.tags.length; i++) {
          _this.meta_key.push({
            value: response.data.tags[i].title,
            key: response.data.tags[i].id
          });
        }
      });
    },
    updateTags: function updateTags() {
      this.form.meta_keyword = [];

      for (var i = 0; i < this.meta_key.length; i++) {
        this.form.meta_keyword.push({
          title: this.meta_key[i].value,
          id: this.meta_key[i].key
        });
      }
    },
    getCategories: function getCategories() {
      var _this2 = this;

      axios.get("/api/categories").then(function (res) {
        if (res) {
          for (var i = 0; i < res.data.length; i++) {
            _this2.categories.push({
              name: res.data[i].title,
              id: res.data[i].id
            });
          }
        }
      });
    },
    UpdateCategory: function UpdateCategory(v) {
      this.form.category_id = v.id;
    },
    updateStatus: function updateStatus(v) {
      this.form.status = v.id;
    },
    getTags: function getTags() {
      var _this3 = this;

      axios.get("/api/tags").then(function (res) {
        //this.tags = response.data;
        if (res) {
          for (var i = 0; i < res.data.length; i++) {
            _this3.tags.push({
              value: res.data[i].title,
              key: res.data[i].id
            });
          } //console.log(this.form.tags)

        }
      });
    },
    UpdatePost: function UpdatePost() {
      var _this4 = this;

      if (!this.form.description) {
        this.descriptionWarn = true;
        return false;
      } else {
        this.descriptionWarn = false;
      }

      if (this.form.tags.length < 1) {
        this.tagsWarn = true;
        return false;
      }

      if (this.form.clientTypeWarn === '') {
        this.clientTypeWarn = true;
        return false;
      }

      this.loading = true;

      if (this.titleWarn !== true && this.form.tags.length !== 0) {
        this.form.tags = this.form.meta_keyword;
        this.form.user_id = window.userId;
        this.form.put("/api/posts/".concat(this.$route.params.id)).then(function (response) {
          _this4.$swal.fire("Updated!", "Item Updated successfully", "success"); //this.emitSock()


          _this4.loading = false;
        })["catch"](function () {});
      }
    },
    emitSock: function emitSock() {
      //console.log('Emit')
      this.socket.emit('sendToServer', 'NA');
    },
    changeDetailPhoto: function changeDetailPhoto(event) {
      var _this5 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this5.form.image.push({
          name: file.name,
          file: event.target.result
        });

        _this5.img_image = event.target.result;
      };

      reader.readAsDataURL(file);
    },
    back: function back() {
      this.$router.push("/posts");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/blog/post/Edit.vue?vue&type=style&index=0&id=2c97bc16&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/blog/post/Edit.vue?vue&type=style&index=0&id=2c97bc16&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.warn-error[data-v-2c97bc16] {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/blog/post/Edit.vue?vue&type=style&index=0&id=2c97bc16&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/blog/post/Edit.vue?vue&type=style&index=0&id=2c97bc16&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=2c97bc16&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/blog/post/Edit.vue?vue&type=style&index=0&id=2c97bc16&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/blog/post/Edit.vue?vue&type=template&id=2c97bc16&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/blog/post/Edit.vue?vue&type=template&id=2c97bc16&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
            _c("section", { staticClass: "formSection" }, [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.loading,
                      expression: "loading",
                    },
                  ],
                  staticClass: "LoaderDiv",
                },
                [
                  _c("img", {
                    staticClass: "loaderLogo",
                    attrs: { src: "/loader/logo_gif.gif" },
                  }),
                  _vm._v(" "),
                  _c("p", { staticClass: "loadText" }, [_vm._v("Loading..")]),
                ]
              ),
              _vm._v(" "),
              _c(
                "form",
                {
                  style: !_vm.loading ? "" : "opacity: 0.5",
                  attrs: { role: "form", enctype: "multipart/form-data" },
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.UpdatePost()
                    },
                  },
                },
                [
                  _vm.form.title
                    ? _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "title" } }, [
                                _vm._v("Title"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("title"),
                                },
                                attrs: {
                                  type: "text",
                                  placeholder: "Enter title",
                                },
                                domProps: { value: _vm.form.title },
                                on: {
                                  input: function ($event) {
                                    return _vm.changeField(
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
                              _vm._v(" "),
                              _vm.titleWarn
                                ? _c("p", { staticClass: "warn-error" }, [
                                    _vm._v(" Title can't be empty."),
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
                              _vm._v(" "),
                              _vm.descriptionWarn
                                ? _c("p", { staticClass: "warn-error" }, [
                                    _vm._v(" Please input description."),
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
                                _vm._v("Summary"),
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.summery,
                                    expression: "form.summery",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("summery"),
                                },
                                attrs: {
                                  row: "3",
                                  type: "text",
                                  placeholder: "Enter summary",
                                },
                                domProps: { value: _vm.form.summery },
                                on: {
                                  change: function ($event) {
                                    return _vm.changeField(
                                      "summery",
                                      $event.target.value
                                    )
                                  },
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "summery",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "summery" },
                              }),
                              _vm._v(" "),
                              _vm.summeryWarn
                                ? _c("p", { staticClass: "warn-error" }, [
                                    _vm._v(" Please input summary."),
                                  ])
                                : _vm._e(),
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
                              _c("label", { attrs: { for: "meta_title" } }, [
                                _vm._v("Meta Title"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.meta_title,
                                    expression: "form.meta_title",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid":
                                    _vm.form.errors.has("meta_title"),
                                },
                                attrs: {
                                  type: "text",
                                  placeholder: "Enter meta title",
                                },
                                domProps: { value: _vm.form.meta_title },
                                on: {
                                  change: function ($event) {
                                    return _vm.changeField(
                                      "meta_title",
                                      $event.target.value
                                    )
                                  },
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "meta_title",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "meta_title" },
                              }),
                              _vm._v(" "),
                              _vm.meta_titleWarn
                                ? _c("p", { staticClass: "warn-error" }, [
                                    _vm._v(" Please input Meta Title."),
                                  ])
                                : _vm._e(),
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
                              _c("label", { attrs: { for: "meta_keyword" } }, [
                                _vm._v("Meta Keywords"),
                              ]),
                              _vm._v(" "),
                              _c("tags-input", {
                                attrs: {
                                  "element-id": "tags",
                                  "existing-tags": _vm.tags,
                                  typeahead: true,
                                },
                                on: { "tags-updated": _vm.updateTags },
                                model: {
                                  value: _vm.meta_key,
                                  callback: function ($$v) {
                                    _vm.meta_key = $$v
                                  },
                                  expression: "meta_key",
                                },
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "tags" },
                              }),
                              _vm._v(" "),
                              _vm.tagsWarn && _vm.meta_key.length < 1
                                ? _c("p", { staticClass: "warn-error" }, [
                                    _vm._v("Please choose keywords."),
                                  ])
                                : _vm._e(),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "status" } }, [
                              _vm._v("Status"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                readonly: "",
                                placeholder: "Current status",
                              },
                              domProps: {
                                value:
                                  _vm.form.status == 0 ? "Draft" : "Public",
                              },
                            }),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "categories" } }, [
                                _vm._v("Category"),
                              ]),
                              _vm._v(" "),
                              _c("dropdown-list", {
                                staticClass: "mb-2",
                                attrs: { itemList: _vm.categories },
                                model: {
                                  value: _vm.form.category_id,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "category_id", $$v)
                                  },
                                  expression: "form.category_id",
                                },
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "categories" },
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
                              _c("label", { attrs: { for: "client_type" } }, [
                                _vm._v("Client Type"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.client_type,
                                      expression: "form.client_type",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  on: {
                                    change: function ($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call(
                                          $event.target.options,
                                          function (o) {
                                            return o.selected
                                          }
                                        )
                                        .map(function (o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.form,
                                        "client_type",
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
                                    { attrs: { value: "eduInstitute" } },
                                    [_vm._v("Educational Institute")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "corporate" } },
                                    [_vm._v("Corporate")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "option",
                                    { attrs: { value: "general" } },
                                    [_vm._v("General")]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "client_type" },
                              }),
                              _vm._v(" "),
                              _vm.clientTypeWarn && _vm.form.client_type === ""
                                ? _c("p", { staticClass: "warn-error" }, [
                                    _vm._v(" Please choose a client type."),
                                  ])
                                : _vm._e(),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "label",
                                  attrs: { for: "input" },
                                },
                                [_vm._v("Please upload a Banner image !")]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "mt-2",
                                class: {
                                  "is-invalid": _vm.form.errors.has("image"),
                                },
                                attrs: { type: "file" },
                                on: {
                                  change: function ($event) {
                                    return _vm.changeDetailPhoto($event)
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "image" },
                              }),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "image" } }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("img", {
                                staticClass: "image w-100",
                                attrs: { src: _vm.img_image, alt: "" },
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "image" },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("form-buttons"),
                ],
                1
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

/***/ "./resources/js/admin/pages/blog/post/Edit.vue":
/*!*****************************************************!*\
  !*** ./resources/js/admin/pages/blog/post/Edit.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_2c97bc16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=2c97bc16&scoped=true& */ "./resources/js/admin/pages/blog/post/Edit.vue?vue&type=template&id=2c97bc16&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/blog/post/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_id_2c97bc16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=2c97bc16&scoped=true&lang=css& */ "./resources/js/admin/pages/blog/post/Edit.vue?vue&type=style&index=0&id=2c97bc16&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_2c97bc16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_2c97bc16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2c97bc16",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/blog/post/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/blog/post/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/admin/pages/blog/post/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/blog/post/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/blog/post/Edit.vue?vue&type=style&index=0&id=2c97bc16&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/blog/post/Edit.vue?vue&type=style&index=0&id=2c97bc16&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_2c97bc16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=2c97bc16&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/blog/post/Edit.vue?vue&type=style&index=0&id=2c97bc16&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_2c97bc16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_2c97bc16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_2c97bc16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_2c97bc16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/admin/pages/blog/post/Edit.vue?vue&type=template&id=2c97bc16&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/pages/blog/post/Edit.vue?vue&type=template&id=2c97bc16&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2c97bc16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=2c97bc16&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/blog/post/Edit.vue?vue&type=template&id=2c97bc16&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2c97bc16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2c97bc16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);