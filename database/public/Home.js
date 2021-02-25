(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/layouts/FrontHome.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/layouts/FrontHome.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FrontHome",
  data: function data() {
    return {
      travel_programs: [],
      video_data: "",
      video_path: "video/video.mp4"
    };
  },
  metaInfo: {
    title: 'GB-International',
    meta: [{
      property: 'og:description',
      content: 'GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.'
    }, {
      property: 'og:title',
      content: 'G.B International is a travel educational specialist for young minds.'
    }, {
      property: 'og:image',
      content: 'https://www.gowithgbi.com/assets/front/images/banner2.jpg'
    }, {
      property: 'og:type',
      content: 'website'
    }, {
      property: 'og:site_name',
      content: 'gowithgbi.com'
    }, {
      property: 'og:url',
      content: 'https://www.gowithgbi.com'
    }]
  },
  created: function created() {
    this.TravelPorgrams();
  },
  methods: {
    TravelPorgrams: function TravelPorgrams() {
      var _this = this;

      this.$axios.get("/api/travel-programs").then(function (response) {
        _this.travel_programs = response.data;
      });
      this.$axios.get("/api/website").then(function (response) {
        _this.video_data = response.data[0].video;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/layouts/FrontHome.vue?vue&type=template&id=4de1a5a1&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/layouts/FrontHome.vue?vue&type=template&id=4de1a5a1& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "fronthome" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _vm._m(1),
      _vm._v(" "),
      _vm.travel_programs
        ? _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.travel_programs, function(program) {
              return _c("div", { key: program.id, staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "card card-1 mb-15" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/explore-destination" } },
                      [
                        _c(
                          "figure",
                          {
                            directives: [
                              { name: "lazyload", rawName: "v-lazyload" }
                            ],
                            staticClass: "image__wrapper"
                          },
                          [
                            _c("ImageSpinner", {
                              staticClass: "image__spinner"
                            }),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "image__item",
                              attrs: {
                                "data-url":
                                  "/images/tourprogram/" + program.image,
                                alt: program.title
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "card-body" }, [
                          _c("h5", { staticClass: "card-title" }, [
                            _vm._v(_vm._s(program.title))
                          ]),
                          _vm._v(" "),
                          _c("p", {
                            staticClass: "card-text",
                            domProps: { innerHTML: _vm._s(program.description) }
                          })
                        ])
                      ]
                    )
                  ],
                  1
                )
              ])
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c("section", { staticClass: "content-video" }, [
        _vm._m(2),
        _vm._v(" "),
        _vm.video_data.length > 0
          ? _c("div", { staticClass: "content mt-35" }, [
              _c("div", { staticClass: "rwd-media" }, [
                _c(
                  "video",
                  {
                    attrs: {
                      width: "400",
                      controls: "",
                      controlslist: "nodownload"
                    }
                  },
                  [
                    _c("source", {
                      attrs: { src: _vm.video_path, type: "video/mp4" }
                    }),
                    _vm._v(
                      "Your browser does not support HTML5 video.\n          "
                    )
                  ]
                )
              ])
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "slidehome" }, [
      _c(
        "div",
        {
          staticClass: "carousel slide",
          attrs: { id: "carouselExampleControls", "data-ride": "carousel" }
        },
        [
          _c("div", { staticClass: "carousel-inner" }, [
            _c("div", { staticClass: "carousel-item active" }, [
              _c("div", {
                staticClass: "img-fluid banner_img image-slide-1 banner_bg",
                attrs: { id: "bannerimg1", alt: "GBI slide" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-item" }, [
              _c("div", {
                staticClass: "img-fluid banner_img image-slide-2 banner_bg",
                attrs: { id: "bannerimg2", alt: "GBI slide" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-item" }, [
              _c("div", {
                staticClass: "img-fluid banner_img image-slide-3 banner_bg",
                attrs: { id: "bannerimg3", alt: "GBI slide" }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "carousel-control-prev",
              attrs: {
                href: "#carouselExampleControls",
                role: "button",
                "data-slide": "prev"
              }
            },
            [
              _c("span", {
                staticClass: "carousel-control-prev-icon",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "carousel-control-next",
              attrs: {
                href: "#carouselExampleControls",
                role: "button",
                "data-slide": "next"
              }
            },
            [
              _c("span", {
                staticClass: "carousel-control-next-icon",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-titles" }, [
      _c("h1", [_vm._v("Our Travel Programs")]),
      _vm._v(" "),
      _c("h4", [_vm._v("Immerge in a Riveting Journey")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("article", { staticClass: "card-titles" }, [
      _c("h1", [_vm._v("Join our adventures at GB International")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/front/layouts/FrontHome.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/front/layouts/FrontHome.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FrontHome_vue_vue_type_template_id_4de1a5a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FrontHome.vue?vue&type=template&id=4de1a5a1& */ "./resources/js/components/front/layouts/FrontHome.vue?vue&type=template&id=4de1a5a1&");
/* harmony import */ var _FrontHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrontHome.vue?vue&type=script&lang=js& */ "./resources/js/components/front/layouts/FrontHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FrontHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FrontHome_vue_vue_type_template_id_4de1a5a1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FrontHome_vue_vue_type_template_id_4de1a5a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/layouts/FrontHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/layouts/FrontHome.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/front/layouts/FrontHome.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FrontHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/layouts/FrontHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/layouts/FrontHome.vue?vue&type=template&id=4de1a5a1&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/front/layouts/FrontHome.vue?vue&type=template&id=4de1a5a1& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_template_id_4de1a5a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FrontHome.vue?vue&type=template&id=4de1a5a1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/layouts/FrontHome.vue?vue&type=template&id=4de1a5a1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_template_id_4de1a5a1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_template_id_4de1a5a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);