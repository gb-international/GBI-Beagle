(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/ImageList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_content_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-content-loading */ "./node_modules/vue-content-loading/dist/vuecontentloading.js");
/* harmony import */ var vue_content_loading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_content_loading__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueContentLoading: vue_content_loading__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/gallery/ImageList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/gallery/ImageList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_components_loaders_cardImgLoader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/components/loaders/cardImgLoader.vue */ "./resources/js/front/components/loaders/cardImgLoader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    cardLoader: _front_components_loaders_cardImgLoader_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      gallery: '',
      preview_img: '',
      preview_img_index: '',
      img_length: '',
      active: '',
      imgclass: 'w-100',
      zoomclass: ['w-100', 'zoom1', 'zoom2', 'zoom3'],
      zoom_level: 0
    };
  },
  beforeCreate: function beforeCreate() {
    var metaInfo = {
      title: 'GBI Domestic Image Gallery',
      description: '@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one',
      keywords: '@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs',
      url: 'https://www.gowithgbi.com/image-gallery',
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  mounted: function mounted() {
    this.getGallery();
    var metaInfo = {
      title: "GBI Image Gallery | ".concat(this.gallery.title),
      description: '@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one',
      keywords: '@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs',
      url: "https://www.gowithgbi.com/image-gallery/images/".concat(this.gallery.slug),
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  methods: {
    getGallery: function getGallery() {
      var _this = this;

      this.$axios.get("/api/get-gallery/".concat(this.$route.params.slug)).then(function (res) {
        _this.gallery = res.data;
        _this.img_length = res.data.images.length - 1;
      });
    },
    show: function show(i) {
      this.preview_img_index = i;
      this.preview_img = this.gallery.images[i].path;
    },
    LeftImage: function LeftImage() {
      if (this.preview_img_index <= this.img_length && this.preview_img_index != 0) {
        this.preview_img_index--;
        this.show(this.preview_img_index);
      }
    },
    RightImage: function RightImage() {
      if (this.preview_img_index < this.img_length) {
        this.preview_img_index++;
        this.show(this.preview_img_index);
      }
    },
    zoomOut: function zoomOut() {
      if (this.zoom_level > 0) {
        this.zoom_level--;
        this.imgclass = this.zoomclass[this.zoom_level];
      }
    },
    zoomIn: function zoomIn() {
      if (this.zoom_level < this.zoomclass.length - 1) {
        this.zoom_level++;
        this.imgclass = this.zoomclass[this.zoom_level];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=template&id=2a03c662&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=template&id=2a03c662& ***!
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
  return _c("vue-content-loading", { attrs: { width: 300, height: 350 } }, [
    _c("rect", { attrs: { y: "30", r: "30", width: "300", height: "350" } }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/gallery/ImageList.vue?vue&type=template&id=07ce1106&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/gallery/ImageList.vue?vue&type=template&id=07ce1106& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container pt-3 imageslist" }, [
    _vm.gallery
      ? _c("div", [
          _c("p", { staticClass: "p-0 m-0" }, [
            _c("b", [_vm._v(_vm._s(_vm.gallery.school.school_name))]),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "p-0 m-0" }, [
            _vm._v(_vm._s(_vm.gallery.title)),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "mt-3" }, [
      _c("div", { staticClass: "images" }, [
        _vm.gallery.images
          ? _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.gallery.images, function (data, index) {
                return _c(
                  "div",
                  { key: data.id, staticClass: "col-sm-4 mb-4 pb-1 blog-list" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "card p-3 border-radius-0",
                        attrs: {
                          "data-toggle": "modal",
                          "data-target": "#ImagePreviewModal",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.show(index)
                          },
                        },
                      },
                      [
                        _c("img", {
                          staticClass: "card-img border-radius-0 cardimage",
                          attrs: {
                            src: data.path,
                            alt: data.alt,
                            title: data.alt,
                          },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "shera-img" }),
                      ]
                    ),
                  ]
                )
              }),
              0
            )
          : _c(
              "div",
              { staticClass: "row card-titles" },
              _vm._l(6, function (index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-sm-4" },
                  [_c("cardLoader")],
                  1
                )
              }),
              0
            ),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade bg-faded fade-flip",
        attrs: {
          id: "ImagePreviewModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "myModalLabel",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content border-radius-0" }, [
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "img-preview" }, [
                  _c("img", {
                    class: "main-img " + _vm.imgclass,
                    attrs: { src: _vm.preview_img },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "shera-img shera-img-modal" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "img-preview-bottom" }, [
                    _c("div", { staticClass: "row text-center" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("img", {
                          staticClass: "w-35",
                          attrs: {
                            src: _vm.$gbiAssets + "/images/icons/back.png",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.LeftImage()
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("img", {
                          staticClass: "w-20",
                          attrs: {
                            src: _vm.$gbiAssets + "/images/icons/zoom-out.png",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.zoomOut()
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("img", {
                          staticClass: "w-20",
                          attrs: {
                            src: _vm.$gbiAssets + "/images/icons/zoom-in.png",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.zoomIn()
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("img", {
                          staticClass: "w-35",
                          attrs: {
                            src: _vm.$gbiAssets + "/images/icons/forward.png",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.RightImage()
                            },
                          },
                        }),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/components/loaders/cardImgLoader.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardImgLoader.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardImgLoader_vue_vue_type_template_id_2a03c662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardImgLoader.vue?vue&type=template&id=2a03c662& */ "./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=template&id=2a03c662&");
/* harmony import */ var _cardImgLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardImgLoader.vue?vue&type=script&lang=js& */ "./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cardImgLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cardImgLoader_vue_vue_type_template_id_2a03c662___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cardImgLoader_vue_vue_type_template_id_2a03c662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/loaders/cardImgLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardImgLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cardImgLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardImgLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=template&id=2a03c662&":
/*!************************************************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=template&id=2a03c662& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardImgLoader_vue_vue_type_template_id_2a03c662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cardImgLoader.vue?vue&type=template&id=2a03c662& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=template&id=2a03c662&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardImgLoader_vue_vue_type_template_id_2a03c662___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardImgLoader_vue_vue_type_template_id_2a03c662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/pages/gallery/ImageList.vue":
/*!********************************************************!*\
  !*** ./resources/js/front/pages/gallery/ImageList.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageList_vue_vue_type_template_id_07ce1106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageList.vue?vue&type=template&id=07ce1106& */ "./resources/js/front/pages/gallery/ImageList.vue?vue&type=template&id=07ce1106&");
/* harmony import */ var _ImageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageList.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/gallery/ImageList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageList_vue_vue_type_template_id_07ce1106___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageList_vue_vue_type_template_id_07ce1106___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/gallery/ImageList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/gallery/ImageList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/front/pages/gallery/ImageList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/gallery/ImageList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/gallery/ImageList.vue?vue&type=template&id=07ce1106&":
/*!***************************************************************************************!*\
  !*** ./resources/js/front/pages/gallery/ImageList.vue?vue&type=template&id=07ce1106& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_template_id_07ce1106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageList.vue?vue&type=template&id=07ce1106& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/gallery/ImageList.vue?vue&type=template&id=07ce1106&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_template_id_07ce1106___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_template_id_07ce1106___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);