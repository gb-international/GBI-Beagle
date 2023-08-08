(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/Home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Reviews.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/Reviews.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _front_components_loaders_cardReviewLoader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/loaders/cardReviewLoader.vue */ "./resources/js/front/components/loaders/cardReviewLoader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ReviewCarousel",
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a,
    cardLoader: _front_components_loaders_cardReviewLoader_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      review_list: [],
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      }
    };
  },
  mounted: function mounted() {
    this.getList();
  },
  methods: {
    getList: function getList() {
      var _this = this;

      this.$axios.get("/api/feedback-list").then(function (response) {
        _this.review_list = response.data.data;
      });
    }
  },
  filters: {
    reviewFilter: function reviewFilter(val) {
      if (val.length > 100) {
        return val.slice(0, 100) + '...';
      } else {
        return val;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['text'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/SubHeading.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/layout/SubHeading.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['text'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardHome.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/loaders/cardHome.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardReviewLoader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/loaders/cardReviewLoader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/layouts/FrontHome.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/layouts/FrontHome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_components_layout_Heading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/components/layout/Heading.vue */ "./resources/js/front/components/layout/Heading.vue");
/* harmony import */ var _front_components_layout_SubHeading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/layout/SubHeading.vue */ "./resources/js/front/components/layout/SubHeading.vue");
/* harmony import */ var _front_components_loaders_cardHome_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/front/components/loaders/cardHome.vue */ "./resources/js/front/components/loaders/cardHome.vue");
/* harmony import */ var _front_components_Reviews_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/front/components/Reviews.vue */ "./resources/js/front/components/Reviews.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Heading: _front_components_layout_Heading_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SubHeading: _front_components_layout_SubHeading_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    cardLoader: _front_components_loaders_cardHome_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Review: _front_components_Reviews_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      travel_programs: [],
      video_data: "",
      video_path: "video/video.mp4",
      travel_Loaded: false
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
        _this.travel_Loaded = true;
      });
      this.$axios.get("/api/website").then(function (response) {
        _this.video_data = response.data[0].video;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Reviews.vue?vue&type=style&index=0&id=6f599a26&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/Reviews.vue?vue&type=style&index=0&id=6f599a26&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.reviewContainer[data-v-6f599a26]{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.singleCard[data-v-6f599a26]{\n  margin-right: 35px;\n}\n.cardBorder[data-v-6f599a26]{\n  border: 1px solid grey !important; \n  z-index: 99;\n  height: 12rem;\n}\n.reviewBody[data-v-6f599a26]{\n  margin: 5px 50px 5px 50px !important;\n}\n.reviewUserInfo[data-v-6f599a26]{\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-left: 25px;\n}\n.reviewUserImg[data-v-6f599a26]{\n  width: 80px;\n  height: 80px;\n  margin-top: -71px;\n  z-index: 999;\n  margin-right: 7px;\n  border: 2px solid grey;\n}\n.userImg[data-v-6f599a26]{\n  border: 4px solid white;\n}\n.reviewUser[data-v-6f599a26]{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: -7px;\n}\n.reviewUser p[data-v-6f599a26]{\n  font-size: 13px;\n  font-weight: 500;\n}\n.title_section[data-v-6f599a26]{\n  color: black !important;\n  font-size: 18px !important;\n}\n@media only screen and (max-width: 1024px) {\n.reviewContainer[data-v-6f599a26]{\n    flex-direction: column;\n    align-content: space-around;\n}\n.singleCard[data-v-6f599a26]{\n    margin-right: 0px;\n    margin-bottom: 15px;\n}\n.reviewBody[data-v-6f599a26]{\n    margin: 5px 10px 5px 10px !important;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Reviews.vue?vue&type=style&index=0&id=6f599a26&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/Reviews.vue?vue&type=style&index=0&id=6f599a26&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reviews.vue?vue&type=style&index=0&id=6f599a26&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Reviews.vue?vue&type=style&index=0&id=6f599a26&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Reviews.vue?vue&type=template&id=6f599a26&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/Reviews.vue?vue&type=template&id=6f599a26&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "dashboard-body-part-two-2 reviewBody" },
    [
      _c("h5", { staticClass: "title_section pb-4" }, [
        _vm._v("CLIENT APPRECIATION"),
      ]),
      _vm._v(" "),
      _vm.review_list.length > 0
        ? _c(
            "VueSlickCarousel",
            _vm._b(
              { attrs: { dots: true } },
              "VueSlickCarousel",
              _vm.settings,
              false
            ),
            _vm._l(_vm.review_list, function (state) {
              return _c(
                "div",
                {
                  key: state.id,
                  staticClass: "reviewContainer mb-5 card_scroll",
                },
                [
                  _c(
                    "div",
                    { staticClass: "singleCard" },
                    [
                      _c(
                        "b-card",
                        {
                          staticClass: "mb-2 p-1 pb-5 cardBorder",
                          staticStyle: { "max-width": "50rem" },
                          attrs: { tag: "article" },
                        },
                        [
                          _c("b-card-text", [
                            _c("p", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm._f("reviewFilter")(state.comments))
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("b", [
                                _vm._v(
                                  "Rated: " + _vm._s(state.avgRate) + "/10"
                                ),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "reviewUserInfo" }, [
                        _c("div", { staticClass: "reviewUserImg" }, [
                          _c("img", {
                            staticClass: "userImg",
                            attrs: { src: state.photo, alt: "user image" },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "reviewUser" }, [
                          _c("p", [
                            _c("b", [_vm._v(_vm._s(state.name))]),
                            _c("br"),
                            _vm._v("\n            " + _vm._s(state.profession)),
                          ]),
                        ]),
                      ]),
                    ],
                    1
                  ),
                ]
              )
            }),
            0
          )
        : _c(
            "div",
            { staticClass: "row card-titles reviewContainer mb-5" },
            _vm._l(3, function (index) {
              return _c(
                "div",
                { key: index, staticClass: "col-sm-4" },
                [_c("cardLoader")],
                1
              )
            }),
            0
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("h1", { staticClass: "gbi_main-heading pt-3 text-capitalize" }, [
    _vm._v("\n    " + _vm._s(_vm.text) + "\n"),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/SubHeading.vue?vue&type=template&id=d853df9c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/layout/SubHeading.vue?vue&type=template&id=d853df9c& ***!
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
  return _c("h4", { staticClass: "gbi_sub-heading text-capitalize m-0 p-0" }, [
    _vm._v("\n    " + _vm._s(_vm.text) + "\n"),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardHome.vue?vue&type=template&id=43fa7a63&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/loaders/cardHome.vue?vue&type=template&id=43fa7a63& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _c("rect", { attrs: { y: "30", r: "30", width: "300", height: "180" } }),
    _vm._v(" "),
    _c("rect", { attrs: { x: "50", y: "225", width: "200", height: "12" } }),
    _vm._v(" "),
    _c("rect", { attrs: { y: "250", width: "300", height: "10" } }),
    _vm._v(" "),
    _c("rect", { attrs: { y: "270", width: "300", height: "10" } }),
    _vm._v(" "),
    _c("rect", { attrs: { y: "290", width: "300", height: "10" } }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardReviewLoader.vue?vue&type=template&id=3540550f&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/loaders/cardReviewLoader.vue?vue&type=template&id=3540550f& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("vue-content-loading", { attrs: { width: 270, height: 110 } }, [
    _c("rect", {
      attrs: { x: "10", y: "0", rx: "0", ry: "0", width: "250", height: "8" },
    }),
    _vm._v(" "),
    _c("rect", {
      attrs: { x: "10", y: "15", rx: "0", ry: "0", width: "200", height: "8" },
    }),
    _vm._v(" "),
    _c("rect", {
      attrs: { x: "10", y: "30", rx: "0", ry: "0", width: "100", height: "8" },
    }),
    _vm._v(" "),
    _c("rect", {
      attrs: { x: "10", y: "50", rx: "0", ry: "0", width: "65", height: "65" },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/layouts/FrontHome.vue?vue&type=template&id=1d554103&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/layouts/FrontHome.vue?vue&type=template&id=1d554103& ***!
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
  return _c(
    "div",
    { attrs: { id: "fronthome" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("heading", {
            staticClass: "text-center",
            attrs: { text: "Our Travel Programs" },
          }),
          _vm._v(" "),
          _c("sub-heading", {
            staticClass: "text-center",
            attrs: { text: "Immerge in a Riveting Journey" },
          }),
          _vm._v(" "),
          _vm.travel_Loaded
            ? _c(
                "div",
                { staticClass: "row card-titles" },
                _vm._l(_vm.travel_programs, function (program) {
                  return _c(
                    "div",
                    { key: program.id, staticClass: "col-sm-4" },
                    [
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
                                    { name: "lazyload", rawName: "v-lazyload" },
                                  ],
                                  staticClass: "image__wrapper",
                                },
                                [
                                  _c("ImageSpinner", {
                                    staticClass: "image__spinner",
                                  }),
                                  _vm._v(" "),
                                  _c("img", {
                                    staticClass:
                                      "image__item border-radius-travel",
                                    attrs: {
                                      "data-url": program.image,
                                      alt: program.title,
                                    },
                                  }),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "card-body" }, [
                                _c("h5", { staticClass: "card-title" }, [
                                  _vm._v(_vm._s(program.title)),
                                ]),
                                _vm._v(" "),
                                _c("p", {
                                  staticClass: "card-text",
                                  domProps: {
                                    innerHTML: _vm._s(program.description),
                                  },
                                }),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]
                  )
                }),
                0
              )
            : _c(
                "div",
                {
                  staticClass: "row card-titles",
                  attrs: { "my-2": "", "mb-4": "" },
                },
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
          _vm._v(" "),
          _c("sub-heading", {
            staticClass: "text-center pb-2",
            attrs: { text: "Join our adventures at GB International" },
          }),
          _vm._v(" "),
          _c("section", { staticClass: "content-video" }, [
            _vm.video_data.length > 0
              ? _c("div", { staticClass: "content" }, [
                  _c("div", { staticClass: "rwd-media" }, [
                    _c(
                      "video",
                      {
                        attrs: {
                          width: "400",
                          controls: "",
                          controlslist: "nodownload",
                        },
                      },
                      [
                        _c("source", {
                          attrs: { src: _vm.video_path, type: "video/mp4" },
                        }),
                        _vm._v(
                          "Your browser does not support HTML5 video.\n          "
                        ),
                      ]
                    ),
                  ]),
                ])
              : _vm._e(),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("Review"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "slidehome" }, [
      _c(
        "div",
        {
          staticClass: "carousel slide",
          attrs: { id: "carouselExampleControls", "data-ride": "carousel" },
        },
        [
          _c("div", { staticClass: "carousel-inner" }, [
            _c("div", { staticClass: "carousel-item active" }, [
              _c("div", {
                staticClass: "img-fluid banner_img image-slide-1 banner_bg",
                attrs: { id: "bannerimg1", alt: "GBI slide" },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-item" }, [
              _c("div", {
                staticClass: "img-fluid banner_img image-slide-2 banner_bg",
                attrs: { id: "bannerimg2", alt: "GBI slide" },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-item" }, [
              _c("div", {
                staticClass: "img-fluid banner_img image-slide-3 banner_bg",
                attrs: { id: "bannerimg3", alt: "GBI slide" },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "carousel-control-prev",
              attrs: {
                href: "#carouselExampleControls",
                role: "button",
                "data-slide": "prev",
              },
            },
            [
              _c("span", {
                staticClass: "carousel-control-prev-icon",
                attrs: { "aria-hidden": "true" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")]),
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
                "data-slide": "next",
              },
            },
            [
              _c("span", {
                staticClass: "carousel-control-next-icon",
                attrs: { "aria-hidden": "true" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Next")]),
            ]
          ),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/components/Reviews.vue":
/*!***************************************************!*\
  !*** ./resources/js/front/components/Reviews.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reviews_vue_vue_type_template_id_6f599a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reviews.vue?vue&type=template&id=6f599a26&scoped=true& */ "./resources/js/front/components/Reviews.vue?vue&type=template&id=6f599a26&scoped=true&");
/* harmony import */ var _Reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reviews.vue?vue&type=script&lang=js& */ "./resources/js/front/components/Reviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Reviews_vue_vue_type_style_index_0_id_6f599a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reviews.vue?vue&type=style&index=0&id=6f599a26&scoped=true&lang=css& */ "./resources/js/front/components/Reviews.vue?vue&type=style&index=0&id=6f599a26&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reviews_vue_vue_type_template_id_6f599a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reviews_vue_vue_type_template_id_6f599a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f599a26",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/Reviews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/Reviews.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/front/components/Reviews.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reviews.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Reviews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/Reviews.vue?vue&type=style&index=0&id=6f599a26&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/front/components/Reviews.vue?vue&type=style&index=0&id=6f599a26&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_style_index_0_id_6f599a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reviews.vue?vue&type=style&index=0&id=6f599a26&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Reviews.vue?vue&type=style&index=0&id=6f599a26&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_style_index_0_id_6f599a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_style_index_0_id_6f599a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_style_index_0_id_6f599a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_style_index_0_id_6f599a26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/components/Reviews.vue?vue&type=template&id=6f599a26&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/front/components/Reviews.vue?vue&type=template&id=6f599a26&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_template_id_6f599a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reviews.vue?vue&type=template&id=6f599a26&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Reviews.vue?vue&type=template&id=6f599a26&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_template_id_6f599a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reviews_vue_vue_type_template_id_6f599a26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/layout/Heading.vue":
/*!**********************************************************!*\
  !*** ./resources/js/front/components/layout/Heading.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading.vue?vue&type=template&id=431e53a2& */ "./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&");
/* harmony import */ var _Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading.vue?vue&type=script&lang=js& */ "./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/layout/Heading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Heading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Heading.vue?vue&type=template&id=431e53a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/layout/SubHeading.vue":
/*!*************************************************************!*\
  !*** ./resources/js/front/components/layout/SubHeading.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubHeading_vue_vue_type_template_id_d853df9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubHeading.vue?vue&type=template&id=d853df9c& */ "./resources/js/front/components/layout/SubHeading.vue?vue&type=template&id=d853df9c&");
/* harmony import */ var _SubHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubHeading.vue?vue&type=script&lang=js& */ "./resources/js/front/components/layout/SubHeading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubHeading_vue_vue_type_template_id_d853df9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubHeading_vue_vue_type_template_id_d853df9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/layout/SubHeading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/layout/SubHeading.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/front/components/layout/SubHeading.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubHeading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/SubHeading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/layout/SubHeading.vue?vue&type=template&id=d853df9c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/front/components/layout/SubHeading.vue?vue&type=template&id=d853df9c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeading_vue_vue_type_template_id_d853df9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubHeading.vue?vue&type=template&id=d853df9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/SubHeading.vue?vue&type=template&id=d853df9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeading_vue_vue_type_template_id_d853df9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeading_vue_vue_type_template_id_d853df9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/loaders/cardHome.vue":
/*!************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardHome.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardHome_vue_vue_type_template_id_43fa7a63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardHome.vue?vue&type=template&id=43fa7a63& */ "./resources/js/front/components/loaders/cardHome.vue?vue&type=template&id=43fa7a63&");
/* harmony import */ var _cardHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardHome.vue?vue&type=script&lang=js& */ "./resources/js/front/components/loaders/cardHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cardHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cardHome_vue_vue_type_template_id_43fa7a63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cardHome_vue_vue_type_template_id_43fa7a63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/loaders/cardHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/loaders/cardHome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardHome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cardHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/loaders/cardHome.vue?vue&type=template&id=43fa7a63&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardHome.vue?vue&type=template&id=43fa7a63& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardHome_vue_vue_type_template_id_43fa7a63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cardHome.vue?vue&type=template&id=43fa7a63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardHome.vue?vue&type=template&id=43fa7a63&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardHome_vue_vue_type_template_id_43fa7a63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardHome_vue_vue_type_template_id_43fa7a63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/loaders/cardReviewLoader.vue":
/*!********************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardReviewLoader.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardReviewLoader_vue_vue_type_template_id_3540550f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardReviewLoader.vue?vue&type=template&id=3540550f& */ "./resources/js/front/components/loaders/cardReviewLoader.vue?vue&type=template&id=3540550f&");
/* harmony import */ var _cardReviewLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardReviewLoader.vue?vue&type=script&lang=js& */ "./resources/js/front/components/loaders/cardReviewLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cardReviewLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cardReviewLoader_vue_vue_type_template_id_3540550f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cardReviewLoader_vue_vue_type_template_id_3540550f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/loaders/cardReviewLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/loaders/cardReviewLoader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardReviewLoader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardReviewLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cardReviewLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardReviewLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardReviewLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/loaders/cardReviewLoader.vue?vue&type=template&id=3540550f&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardReviewLoader.vue?vue&type=template&id=3540550f& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardReviewLoader_vue_vue_type_template_id_3540550f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cardReviewLoader.vue?vue&type=template&id=3540550f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardReviewLoader.vue?vue&type=template&id=3540550f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardReviewLoader_vue_vue_type_template_id_3540550f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardReviewLoader_vue_vue_type_template_id_3540550f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/pages/layouts/FrontHome.vue":
/*!********************************************************!*\
  !*** ./resources/js/front/pages/layouts/FrontHome.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FrontHome_vue_vue_type_template_id_1d554103___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FrontHome.vue?vue&type=template&id=1d554103& */ "./resources/js/front/pages/layouts/FrontHome.vue?vue&type=template&id=1d554103&");
/* harmony import */ var _FrontHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrontHome.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/layouts/FrontHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FrontHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FrontHome_vue_vue_type_template_id_1d554103___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FrontHome_vue_vue_type_template_id_1d554103___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/layouts/FrontHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/layouts/FrontHome.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/front/pages/layouts/FrontHome.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FrontHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/layouts/FrontHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/layouts/FrontHome.vue?vue&type=template&id=1d554103&":
/*!***************************************************************************************!*\
  !*** ./resources/js/front/pages/layouts/FrontHome.vue?vue&type=template&id=1d554103& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_template_id_1d554103___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FrontHome.vue?vue&type=template&id=1d554103& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/layouts/FrontHome.vue?vue&type=template&id=1d554103&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_template_id_1d554103___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_template_id_1d554103___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);