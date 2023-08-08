(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/EncyclopediaEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_buttons_SubmitButton_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/components/buttons/SubmitButton.vue */ "./resources/js/admin/components/buttons/SubmitButton.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/admin/components/form/DropdownList.vue */ "./resources/js/admin/components/form/DropdownList.vue");
/* harmony import */ var _admin_components_form_StatusDropdown2_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/admin/components/form/StatusDropdown2.vue */ "./resources/js/admin/components/form/StatusDropdown2.vue");
/* harmony import */ var _voerro_vue_tagsinput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @voerro/vue-tagsinput */ "./node_modules/@voerro/vue-tagsinput/src/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EditEncyclopedia",
  components: {
    ModelSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_0__["ModelSelect"],
    Form: vform__WEBPACK_IMPORTED_MODULE_1__["Form"],
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_2__["VueEditor"],
    "has-erro": vform__WEBPACK_IMPORTED_MODULE_1__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    "submit-button": _admin_components_buttons_SubmitButton_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    "dropdown-list": _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    "status-dd": _admin_components_form_StatusDropdown2_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    "tags-input": _voerro_vue_tagsinput__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      region_type_list: [{
        name: "National",
        id: "National"
      }, {
        name: "International",
        id: "International"
      }],
      allCreated: false,
      state_list: [],
      country_list: [],
      list_data: [],
      pdf_list: [],
      images: [],
      list_images: [],
      tags: [],
      meta_key: [],
      titleWarn: false,
      descriptionWarn: false,
      summeryWarn: false,
      meta_titleWarn: false,
      meta_keywordWarn: false,
      tagsWarn: false,
      clientTypeWarn: false,
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        state_name: "",
        region_type: "",
        country: "",
        map_link: "",
        slug: "",
        description: "",
        thumbnail: [],
        banner_image: [],
        images: [],
        files: [],
        meta_description: "",
        meta_title: "",
        meta_keyword: "",
        tags: []
      }),
      loading: false
    };
  },
  created: function created() {
    this.EncyclopediaList();
    this.getTags();
    this.meta_key = this.form.tags;
  },
  methods: {
    changeField: function changeField(field, input) {
      if (field === 'meta_description') {
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
    countryList: function countryList(val) {
      var _this = this;

      axios.get("/api/country").then(function (res) {
        _this.country_list = [];

        if (res.data) {
          //this.options = [];
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].id === 2 && val === 'National') {
              _this.country_list.push({
                name: res.data[i].name,
                id: res.data[i].name
              });
            } else if (res.data[i].id !== 2 && val === 'International') {
              _this.country_list.push({
                name: res.data[i].name,
                id: res.data[i].name
              });
            }
          }
        }
      });
    },
    stateList: function stateList(val) {
      var _this2 = this;

      axios.get("/api/state").then(function (res) {
        _this2.state_list = [];

        if (res.data) {
          _this2.options = [];

          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].country_id == val) {
              _this2.state_list.push({
                name: res.data[i].name,
                id: res.data[i].name
              });
            }
          }
        }
      });
    },
    UpdateState: function UpdateState(v) {
      this.slugCreate(v);
    },
    UpdateRegion: function UpdateRegion(v) {
      this.countryList(v);
    },
    UpdateCountry: function UpdateCountry(v) {
      this.countryCheck(v);
    },
    EncyclopediaList: function EncyclopediaList() {
      var _this3 = this;

      var api = "/api/encyclopedias/".concat(this.$route.params.id, "/edit");
      axios.get(api).then(function (response) {
        _this3.form.fill(response.data);

        if (response.data.country === 'India') {
          _this3.form.region_type = 'National';
        } else {
          _this3.form.region_type = 'International';
        } //console.log(this.form);


        _this3.countryCheck(_this3.form.country);

        _this3.countryList(_this3.form.region_type);

        _this3.pdf_list = response.data.itinerarypdfs;
        _this3.images["thumbnail"] = response.data.thumbnail;
        _this3.images["banner_image"] = response.data.banner_image;
        _this3.list_images = response.data.images;
        _this3.form.thumbnail = [];
        _this3.form.banner_image = [];
        _this3.form.images = [];
        _this3.form.files = [];
        _this3.form.region_type = _this3.form.region_type.trim();
        _this3.form.state_name = _this3.form.state_name.trim();
        _this3.form.country = _this3.form.country.trim();

        for (var i = 0; i < response.data.tags.length; i++) {
          _this3.meta_key.push({
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
    countryCheck: function countryCheck(val) {
      var _this4 = this;

      axios.get("/api/country").then(function (res) {
        if (res.data) {
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].name == val) {
              _this4.stateList(res.data[i].id);
            }
          }
        }
      });
      this.allCreated = true;
    },
    getTags: function getTags() {
      var _this5 = this;

      axios.get("/api/tags").then(function (res) {
        //this.tags = response.data;
        if (res) {
          for (var i = 0; i < res.data.length; i++) {
            _this5.tags.push({
              value: res.data[i].title,
              key: res.data[i].id
            });
          } //console.log(this.form.tags)

        }
      });
    },
    // This function will be called every time you add a file
    uploadFieldChange: function uploadFieldChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      for (var i = files.length - 1; i >= 0; i--) {
        this.createImage(e.target.files[i].name, files[i]);
      }
    },
    createImage: function createImage(name, file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.form.files.push({
          filename: name,
          content: e.target.result
        });
      };

      reader.readAsDataURL(file);
    },
    changeImage: function changeImage(event, model) {
      var _this6 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        switch (model) {
          case "thumbnail":
            _this6.form.thumbnail.push({
              name: file.name,
              file: event.target.result
            });

            _this6.images["thumbnail"] = event.target.result;
            break;

          case "banner":
            _this6.form.banner_image.push({
              name: file.name,
              file: event.target.result
            });

            _this6.images.banner_image = event.target.result;
            break;

          default:
            console.log("please select valid image");
        }
      };

      reader.readAsDataURL(file);
    },
    changePhotos: function changePhotos(event) {
      var _this7 = this;

      var _loop = function _loop() {
        var file = event.target.files[i];
        var reader = new FileReader();

        reader.onload = function (event) {
          _this7.form.images.push({
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
    slugCreate: function slugCreate(value) {
      var slug = "";

      if (value) {
        value = value.toLowerCase(); // Trim the last whitespace

        slug = value.replace(/\s*$/g, ""); // Change whitespace to "-"

        this.form.slug = slug.replace(/\s+/g, "-");
      }
    },
    deleteImage: function deleteImage(id) {
      var _this8 = this;

      var data = {
        id: id
      };
      axios.post("/api/encyclopedia-img", data).then(function (response) {
        _this8.EncyclopediaList();
      });
    },
    deletePdf: function deletePdf(id) {
      var _this9 = this;

      var data = {
        id: id
      };
      axios.post("/api/encyclopedia-pdf", data).then(function (response) {
        _this9.EncyclopediaList();
      });
    },
    addItem: function addItem() {
      var _this10 = this;

      if (this.form.meta_keyword.length < 1) {
        this.meta_keywordWarn = true;
        return false;
      } // Submit form


      this.loading = true;
      this.form.tags = this.form.meta_keyword;
      var api = "/api/encyclopedias/".concat(this.$route.params.id);
      this.form.put(api).then(function (response) {
        _this10.EncyclopediaList();

        _this10.$toast.fire({
          icon: "success",
          title: "Encyclopedia Updated successfully"
        });

        _this10.loading = false;
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=style&index=0&id=6113e01d&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=style&index=0&id=6113e01d&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.warn-error[data-v-6113e01d] {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=style&index=0&id=6113e01d&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=style&index=0&id=6113e01d&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-encyclopedia.vue?vue&type=style&index=0&id=6113e01d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=style&index=0&id=6113e01d&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=template&id=6113e01d&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=template&id=6113e01d&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
              _vm.allCreated
                ? _c(
                    "form",
                    {
                      style: !_vm.loading ? "" : "opacity: 0.5",
                      attrs: { role: "form", enctype: "multipart/form-data" },
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.addItem()
                        },
                      },
                    },
                    [
                      _vm.form.state_name
                        ? _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-sm-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "meta_title" } },
                                    [_vm._v("Meta Title")]
                                  ),
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
                                    attrs: {
                                      form: _vm.form,
                                      field: "meta_title",
                                    },
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
                                  _c(
                                    "label",
                                    { attrs: { for: "meta_keyword" } },
                                    [_vm._v("Meta Keywords")]
                                  ),
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
                            _c("div", { staticClass: "col-sm-12" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "description" } },
                                    [_vm._v("Meta Description")]
                                  ),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.meta_description,
                                        expression: "form.meta_description",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.form.errors.has("meta_description"),
                                    },
                                    attrs: {
                                      row: "3",
                                      type: "text",
                                      placeholder: "Enter Meta Description",
                                    },
                                    domProps: {
                                      value: _vm.form.meta_description,
                                    },
                                    on: {
                                      change: function ($event) {
                                        return _vm.changeField(
                                          "meta_description",
                                          $event.target.value
                                        )
                                      },
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "meta_description",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "meta_description",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm.summeryWarn
                                    ? _c("p", { staticClass: "warn-error" }, [
                                        _vm._v(
                                          " Please input meta description."
                                        ),
                                      ])
                                    : _vm._e(),
                                ],
                                1
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-3" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "state_name" } },
                                    [_vm._v("Region Type")]
                                  ),
                                  _vm._v(" "),
                                  _c("status-dd", {
                                    staticClass: "mb-2",
                                    attrs: { itemList: _vm.region_type_list },
                                    on: { input: _vm.UpdateRegion },
                                    model: {
                                      value: _vm.form.region_type,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "region_type", $$v)
                                      },
                                      expression: "form.region_type",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "region_type",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "state_name" } },
                                    [_vm._v("Country")]
                                  ),
                                  _vm._v(" "),
                                  _c("dropdown-list", {
                                    staticClass: "mb-2",
                                    attrs: { itemList: _vm.country_list },
                                    on: { input: _vm.UpdateCountry },
                                    model: {
                                      value: _vm.form.country,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "country", $$v)
                                      },
                                      expression: "form.country",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "country" },
                                  }),
                                ],
                                1
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-3" }, [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "state_name" } },
                                    [_vm._v("State")]
                                  ),
                                  _vm._v(" "),
                                  _c("dropdown-list", {
                                    staticClass: "mb-2",
                                    attrs: { itemList: _vm.state_list },
                                    on: { input: _vm.UpdateState },
                                    model: {
                                      value: _vm.form.state_name,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "state_name", $$v)
                                      },
                                      expression: "form.state_name",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "state_name",
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", { attrs: { for: "slug" } }, [
                                    _vm._v("Slug"),
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.slug,
                                        expression: "form.slug",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has("slug"),
                                    },
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter Map Link",
                                      rows: "6",
                                      readonly: "",
                                    },
                                    domProps: { value: _vm.form.slug },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "slug",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "slug" },
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
                                  _c("label", { attrs: { for: "map_link" } }, [
                                    _vm._v("Map Link"),
                                  ]),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.map_link,
                                        expression: "form.map_link",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.form.errors.has("map_link"),
                                    },
                                    attrs: {
                                      rows: "6",
                                      placeholder: "Enter Map Link",
                                    },
                                    domProps: { value: _vm.form.map_link },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "map_link",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("has-error", {
                                    attrs: {
                                      form: _vm.form,
                                      field: "map_link",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-4" }),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-12" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "descriptionId" } }, [
                                _vm._v("Description"),
                              ]),
                              _vm._v(" "),
                              _c("vue-editor", {
                                class: {
                                  "is-invalid":
                                    _vm.form.errors.has("description"),
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
                            { staticClass: "form-group itinerary_image" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "label",
                                  attrs: { for: "thumbnail" },
                                },
                                [_vm._v("Please upload thumbnail image !")]
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "select_image",
                                class: {
                                  "is-invalid":
                                    _vm.form.errors.has("thumbnail"),
                                },
                                attrs: {
                                  type: "file",
                                  accept: "jpeg, jpg, png, gif",
                                },
                                on: {
                                  change: function ($event) {
                                    return _vm.changeImage($event, "thumbnail")
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("img", {
                                attrs: {
                                  src: _vm.images.thumbnail,
                                  alt: "",
                                  width: "80",
                                  height: "80",
                                },
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "thumbnail" },
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
                                class: {
                                  "is-invalid":
                                    _vm.form.errors.has("banner_image"),
                                },
                                attrs: { name: "banner_image", type: "file" },
                                on: {
                                  change: function ($event) {
                                    return _vm.changeImage($event, "banner")
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("img", {
                                staticClass: "banner_image width-140",
                                attrs: {
                                  src: _vm.images.banner_image,
                                  alt: "",
                                },
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "banner_image",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _vm.list_images
                        ? _c(
                            "div",
                            { staticClass: "row img-card-delete-icon" },
                            _vm._l(_vm.list_images, function (img) {
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
                                        attrs: { src: img.image },
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
                          )
                        : _vm._e(),
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
                              on: { change: _vm.changePhotos },
                            }),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("label", { attrs: { for: "pdfs" } }, [
                            _vm._v("Upload Itinerary Pdf ( Multiple )"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "file",
                              accept: ".pdf",
                              multiple: "multiple",
                            },
                            on: { change: _vm.uploadFieldChange },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("label", { attrs: { for: "pdf_show" } }, [
                            _vm._v("Itinerary PDFs"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row" },
                            _vm._l(_vm.pdf_list, function (pdf) {
                              return _c(
                                "div",
                                { key: pdf.id, staticClass: "col-sm-12" },
                                [
                                  _c("div", { staticClass: "row pd-5 mb-20" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-2 pdf_show" },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-file-pdf",
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-10" }, [
                                      _c("p", [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(pdf.name) +
                                            "\n                    "
                                        ),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "badge badge-danger position-absolute cursor-pointer ml-3",
                                            attrs: { title: "Delete Item" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.deletePdf(pdf.id)
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
                                      ]),
                                    ]),
                                  ]),
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
                  )
                : _vm._e(),
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

/***/ "./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_encyclopedia_vue_vue_type_template_id_6113e01d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit-encyclopedia.vue?vue&type=template&id=6113e01d&scoped=true& */ "./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=template&id=6113e01d&scoped=true&");
/* harmony import */ var _Edit_encyclopedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit-encyclopedia.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_encyclopedia_vue_vue_type_style_index_0_id_6113e01d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit-encyclopedia.vue?vue&type=style&index=0&id=6113e01d&scoped=true&lang=css& */ "./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=style&index=0&id=6113e01d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_encyclopedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_encyclopedia_vue_vue_type_template_id_6113e01d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_encyclopedia_vue_vue_type_template_id_6113e01d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6113e01d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_encyclopedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-encyclopedia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_encyclopedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=style&index=0&id=6113e01d&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=style&index=0&id=6113e01d&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_encyclopedia_vue_vue_type_style_index_0_id_6113e01d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-encyclopedia.vue?vue&type=style&index=0&id=6113e01d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=style&index=0&id=6113e01d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_encyclopedia_vue_vue_type_style_index_0_id_6113e01d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_encyclopedia_vue_vue_type_style_index_0_id_6113e01d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_encyclopedia_vue_vue_type_style_index_0_id_6113e01d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_encyclopedia_vue_vue_type_style_index_0_id_6113e01d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=template&id=6113e01d&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=template&id=6113e01d&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_encyclopedia_vue_vue_type_template_id_6113e01d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-encyclopedia.vue?vue&type=template&id=6113e01d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/encyclopedia/Edit-encyclopedia.vue?vue&type=template&id=6113e01d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_encyclopedia_vue_vue_type_template_id_6113e01d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_encyclopedia_vue_vue_type_template_id_6113e01d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);