(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/StudentProfileEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_mixins_user_ProfileEditMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/mixins/user/ProfileEditMixin */ "./resources/js/front/mixins/user/ProfileEditMixin.js");
/* harmony import */ var _front_components_form_ProfileForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/form/ProfileForm */ "./resources/js/front/components/form/ProfileForm.vue");
/* harmony import */ var _front_components_form_LoginDetailsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/front/components/form/LoginDetailsForm */ "./resources/js/front/components/form/LoginDetailsForm.vue");
/* harmony import */ var _front_components_form_UploadDocsForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/front/components/form/UploadDocsForm */ "./resources/js/front/components/form/UploadDocsForm.vue");
/* harmony import */ var _front_components_form_SocialForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/front/components/form/SocialForm */ "./resources/js/front/components/form/SocialForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProfileEdit",
  mixins: [_front_mixins_user_ProfileEditMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    "profile-form": _front_components_form_ProfileForm__WEBPACK_IMPORTED_MODULE_1__["default"],
    "login-details-form": _front_components_form_LoginDetailsForm__WEBPACK_IMPORTED_MODULE_2__["default"],
    "docs-form": _front_components_form_UploadDocsForm__WEBPACK_IMPORTED_MODULE_3__["default"],
    "social-form": _front_components_form_SocialForm__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      selected: 'profileForm',
      windowHeight: window.innerHeight,
      rightDisplay: '',
      leftDisplay: ''
    };
  },
  watch: {
    windowHeight: function windowHeight(newHeight, oldHeight) {
      this.rightDisplay = '';
      this.leftDisplay = '';
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      window.addEventListener('resize', _this.onResize);
    });
  },
  methods: {
    onResize: function onResize() {
      this.windowHeight = window.innerHeight;
    },
    selectForm: function selectForm(form) {
      this.selected = form;
      this.rightDisplay = 'inline';
      this.leftDisplay = 'none';
    },
    backPage: function backPage() {
      this.rightDisplay = 'none';
      this.leftDisplay = 'inline';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=style&index=0&id=fbf65dac&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=style&index=0&id=fbf65dac&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sideBarStg[data-v-fbf65dac]{\n  border-top: 1px solid grey; \n  border-right: 1px solid grey;\n}\n.container[data-v-fbf65dac] {\n    width: 125%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\nselect[data-v-fbf65dac]{\n  border: 1px solid #ced4da !important;\n}\nsecondRows[data-v-fbf65dac]{\n  cursor: pointer !important;\n}\n.thirdCol[data-v-fbf65dac] {\n  padding-left: 30px !important;\n}\n.avatar-upload[data-v-fbf65dac]{\n  margin-left: 20% !important;\n}\n.secondColWeb[data-v-fbf65dac]{\n  display: inline;\n}\n.secondColMob[data-v-fbf65dac]{\n  display: none;\n}\n.customButton[data-v-fbf65dac]{\n  display: none;\n}\n@media only screen and (max-width: 824px) {\n.container[data-v-fbf65dac] {\n    width: 100%;\n}\n.thirdCol[data-v-fbf65dac] {\n    padding-left: 0px;\n    display: none;\n}\n.secondColWeb[data-v-fbf65dac]{\n  display: none;\n}\n.secondColMob[data-v-fbf65dac]{\n    display: inline;\n}\n.avatar-upload[data-v-fbf65dac]{\n    margin-left: 0px !important;\n}\n.customButton[data-v-fbf65dac]{\n    display: inline;\n    float: right;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=style&index=0&id=fbf65dac&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=style&index=0&id=fbf65dac&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileEdit.vue?vue&type=style&index=0&id=fbf65dac&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=style&index=0&id=fbf65dac&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=template&id=fbf65dac&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=template&id=fbf65dac&scoped=true& ***!
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
  return _c("div", { staticClass: "container py-5" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-3 py-3", style: { display: _vm.leftDisplay } },
        [
          _c(
            "div",
            {
              staticClass:
                "text-center d-flex justify-content-center align-items-center flex-column",
            },
            [
              _c("div", { staticClass: "avatar-upload user_edit_image" }, [
                _c(
                  "form",
                  { attrs: { role: "form", enctype: "multipart/form-data" } },
                  [
                    _c("div", { staticClass: "avatar-edit" }, [
                      _c("input", {
                        attrs: {
                          type: "file",
                          id: "imageUpload",
                          accept: ".png, .jpg, .jpeg",
                        },
                        on: { change: _vm.onChange },
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "imageUpload" } }, [
                        _c("img", {
                          staticClass: "icon-width",
                          attrs: {
                            src: _vm.$gbiAssets + "/images/icons/edit.png",
                          },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "avatar-preview" }, [
                      _c(
                        "div",
                        {
                          staticStyle: { "background-image": "url()" },
                          attrs: { id: "imagePreview" },
                        },
                        [
                          _vm.image
                            ? _c("img", {
                                staticClass: "img",
                                attrs: { src: _vm.image, loading: "lazy" },
                              })
                            : _c("img", {
                                staticClass: "img",
                                attrs: {
                                  src: _vm.image,
                                  loading: "lazy",
                                  alt: "user profile",
                                },
                              }),
                        ]
                      ),
                    ]),
                  ]
                ),
              ]),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 secondCol" }, [
        _c("div", { staticClass: "secondColWeb pr-5" }, [
          _c(
            "div",
            {
              staticClass: "row border-top border-right p-4 secondRows",
              style:
                _vm.selected == "profileForm"
                  ? "background-color: rgb(216 214 214); border-right: none;"
                  : "",
              on: {
                click: function ($event) {
                  _vm.selected = "profileForm"
                },
              },
            },
            [_vm._v("\n            Profile Detail\n          ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "row border-top border-right p-4 secondRows",
              style:
                _vm.selected == "loginDetailsForm"
                  ? "background-color: rgb(216 214 214); border-right: none;"
                  : "",
              on: {
                click: function ($event) {
                  _vm.selected = "loginDetailsForm"
                },
              },
            },
            [_vm._v("\n            Login Detail\n          ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "row border-top border-right p-4 secondRows",
              style:
                _vm.selected == "docsForm"
                  ? "background-color: rgb(216 214 214); border-right: none;"
                  : "",
              on: {
                click: function ($event) {
                  _vm.selected = "docsForm"
                },
              },
            },
            [_vm._v("\n            Document Verfication\n          ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "row border-top border-right border-bottom p-4",
              style:
                _vm.selected == "socialForm"
                  ? "background-color: rgb(216 214 214); border-right: none;"
                  : "",
              on: {
                click: function ($event) {
                  _vm.selected = "socialForm"
                },
              },
            },
            [_vm._v("\n            Social Media\n          ")]
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "secondColMob", style: { display: _vm.leftDisplay } },
          [
            _c(
              "div",
              {
                staticClass: "row border-top border-right p-4 secondRows",
                style:
                  _vm.selected == "profileForm"
                    ? "background-color: rgb(216 214 214); border-right: none;"
                    : "",
                on: {
                  click: function ($event) {
                    return _vm.selectForm("profileForm")
                  },
                },
              },
              [_vm._v("\n            Profile Detail\n          ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row border-top border-right p-4 secondRows",
                style:
                  _vm.selected == "loginDetailsForm"
                    ? "background-color: rgb(216 214 214); border-right: none;"
                    : "",
                on: {
                  click: function ($event) {
                    return _vm.selectForm("loginDetailsForm")
                  },
                },
              },
              [_vm._v("\n            Login Detail\n          ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row border-top border-right p-4 secondRows",
                style:
                  _vm.selected == "docsForm"
                    ? "background-color: rgb(216 214 214); border-right: none;"
                    : "",
                on: {
                  click: function ($event) {
                    return _vm.selectForm("docsForm")
                  },
                },
              },
              [_vm._v("\n            Document Verfication\n          ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "row border-top border-right border-bottom p-4",
                style:
                  _vm.selected == "socialForm"
                    ? "background-color: rgb(216 214 214); border-right: none;"
                    : "",
                on: {
                  click: function ($event) {
                    return _vm.selectForm("socialForm")
                  },
                },
              },
              [_vm._v("\n            Social Media\n          ")]
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-lg-6 px-4 pt-4 thirdCol",
          style: { display: _vm.rightDisplay },
        },
        [
          _vm.selected == "profileForm"
            ? _c("profile-form", { on: { close: _vm.backPage } })
            : _vm._e(),
          _vm._v(" "),
          _vm.selected == "loginDetailsForm"
            ? _c("login-details-form", { on: { close: _vm.backPage } })
            : _vm._e(),
          _vm._v(" "),
          _vm.selected == "docsForm"
            ? _c("docs-form", { on: { close: _vm.backPage } })
            : _vm._e(),
          _vm._v(" "),
          _vm.selected == "socialForm"
            ? _c("social-form", { on: { close: _vm.backPage } })
            : _vm._e(),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/pages/user/student/ProfileEdit.vue":
/*!***************************************************************!*\
  !*** ./resources/js/front/pages/user/student/ProfileEdit.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileEdit_vue_vue_type_template_id_fbf65dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileEdit.vue?vue&type=template&id=fbf65dac&scoped=true& */ "./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=template&id=fbf65dac&scoped=true&");
/* harmony import */ var _ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileEdit.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProfileEdit_vue_vue_type_style_index_0_id_fbf65dac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileEdit.vue?vue&type=style&index=0&id=fbf65dac&scoped=true&lang=css& */ "./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=style&index=0&id=fbf65dac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileEdit_vue_vue_type_template_id_fbf65dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileEdit_vue_vue_type_template_id_fbf65dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fbf65dac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/student/ProfileEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=style&index=0&id=fbf65dac&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=style&index=0&id=fbf65dac&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_style_index_0_id_fbf65dac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileEdit.vue?vue&type=style&index=0&id=fbf65dac&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=style&index=0&id=fbf65dac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_style_index_0_id_fbf65dac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_style_index_0_id_fbf65dac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_style_index_0_id_fbf65dac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_style_index_0_id_fbf65dac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=template&id=fbf65dac&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=template&id=fbf65dac&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_fbf65dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileEdit.vue?vue&type=template&id=fbf65dac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/ProfileEdit.vue?vue&type=template&id=fbf65dac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_fbf65dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_fbf65dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);