(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/DashboardCorp~js/front/DashboardStudent~js/front/DashboardTeacher"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/blog/BlogCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/blog/BlogCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BlogCard",
  props: ['post']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardLoaderDash.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/loaders/cardLoaderDash.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/OffersCrasousel.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/OffersCrasousel.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UpcomingTourCarousel",
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    upcoming_list: {
      required: true
    }
  },
  data: function data() {
    return {
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/PopularDestination.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/PopularDestination.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _front_components_loaders_cardLoaderDash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/loaders/cardLoaderDash */ "./resources/js/front/components/loaders/cardLoaderDash.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UpcomingTourCarousel",
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a,
    cardLoader: _front_components_loaders_cardLoaderDash__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    upcoming_list: {
      required: true
    }
  },
  data: function data() {
    return {
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UpcomingTourCarousel",
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    upcoming_list: {
      required: true
    }
  },
  data: function data() {
    return {
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UserinfoCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/UserinfoCard.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    userinfo: {
      required: true
    }
  },
  methods: {
    logout: function logout() {
      var _this = this;

      this.$api.POST('/api/logout-user', []).then(function (response) {
        _this.$cookies.remove('access_token');

        _this.$store.dispatch("logout").then(function () {
          _this.$bus.$emit("logged", "User loogedout");

          _this.$router.push("/");
        });
      })["catch"](function (error) {
        _this.$store.dispatch("logout").then(function () {
          _this.$bus.$emit("logged", "User loogedout");

          _this.$router.push("/");
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/PopularDestination.vue?vue&type=style&index=0&id=0061f184&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/PopularDestination.vue?vue&type=style&index=0&id=0061f184&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-body[data-v-0061f184] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.card-title[data-v-0061f184] {\n    font-size: 15px !important;\n}\n.card-text[data-v-0061f184]{\n    font-size: 12px !important;\n}\n.btn-div[data-v-0061f184]{\n    align-self: center;\n}\n.card[data-v-0061f184] {\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n.card[data-v-0061f184]:hover{\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n.bookBtn[data-v-0061f184]{\n    margin: 5px 0px;\n    color: white;\n    background-color: #00c4c4;\n    border-color: #00c4c4;\n    padding: 6px 25px 6px 25px;\n    width: 95px;\n    height: 35px;\n    border: 0px;\n    font-size: 15px;\n    font-weight: 500;\n}\n.bookBtn[data-v-0061f184]:hover{\n  box-shadow: 2px 2px grey;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=style&index=0&id=db22ae10&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=style&index=0&id=db22ae10&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.text-white[data-v-db22ae10]{\n  color: black !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/PopularDestination.vue?vue&type=style&index=0&id=0061f184&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/PopularDestination.vue?vue&type=style&index=0&id=0061f184&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PopularDestination.vue?vue&type=style&index=0&id=0061f184&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/PopularDestination.vue?vue&type=style&index=0&id=0061f184&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=style&index=0&id=db22ae10&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=style&index=0&id=db22ae10&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpcomingCrasousel.vue?vue&type=style&index=0&id=db22ae10&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=style&index=0&id=db22ae10&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/blog/BlogCard.vue?vue&type=template&id=26cebbaa&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/blog/BlogCard.vue?vue&type=template&id=26cebbaa& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card border-radius-0" }, [
    _c("div", { staticClass: "container pt-3" }, [
      _c("img", {
        staticClass: "card-img-top border-radius-0",
        staticStyle: { height: "200px !important", width: "320" },
        attrs: { src: _vm.post.image, alt: "Bologna" },
      }),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("h4", { staticClass: "card-title text-left text-primary" }, [
          _vm._v(_vm._s(_vm.post.title)),
        ]),
        _vm._v(" "),
        _c("router-link", { attrs: { to: "/blog/" + _vm.post.slug } }, [
          _c("h6", { staticClass: "card-subtitle mb-2" }, [
            _vm._v(_vm._s(_vm.post.category.title)),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "card-text" }, [
            _vm._v(_vm._s(_vm.post.summery)),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-tags" },
          _vm._l(_vm.post.tags, function (tag) {
            return _c(
              "span",
              { key: tag.id, staticClass: "text-dark card-tag mr-2" },
              [_vm._v(_vm._s(tag.title))]
            )
          }),
          0
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardLoaderDash.vue?vue&type=template&id=39e1986e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/loaders/cardLoaderDash.vue?vue&type=template&id=39e1986e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("vue-content-loading", { attrs: { width: 300, height: 290 } }, [
    _c("rect", { attrs: { y: "30", r: "30", width: "300", height: "180" } }),
    _vm._v(" "),
    _c("rect", { attrs: { y: "225", width: "135", height: "12" } }),
    _vm._v(" "),
    _c("rect", { attrs: { y: "250", width: "90", height: "10" } }),
    _vm._v(" "),
    _c("rect", { attrs: { y: "270", width: "90", height: "10" } }),
    _vm._v(" "),
    _c("rect", { attrs: { y: "290", width: "90", height: "10" } }),
    _vm._v(" "),
    _c("rect", {
      attrs: {
        x: "197",
        y: "255",
        rx: "0",
        ry: "0",
        width: "91",
        height: "35",
      },
    }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/BookedTourButton.vue?vue&type=template&id=2d427461&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/BookedTourButton.vue?vue&type=template&id=2d427461& ***!
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
  return _c("div", { staticClass: "dashboard-body-part-one" }, [
    _c("div", { attrs: { id: "rowbody" } }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col colbutton mb-10" },
          [
            _c("router-link", { attrs: { to: "/tour-list" } }, [
              _c("div", { staticClass: "rowdata1" }, [
                _c("img", {
                  attrs: {
                    src: _vm.$gbiAssets + "assets/front/images/booked_320.png",
                    loading: "lazy",
                  },
                }),
                _vm._v(" "),
                _c("p", { staticClass: "icon_text" }, [
                  _vm._v("Booked Itinerary"),
                ]),
              ]),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col colbutton mb-10" }, [
          _c("a", { attrs: { href: "#" } }, [
            _c("div", { staticClass: "rowdata2" }, [
              _c("img", {
                attrs: {
                  src: _vm.$gbiAssets + "assets/front/images/payment_320.png",
                  loading: "lazy",
                },
              }),
              _vm._v(" "),
              _c("p", { staticClass: "icon_text" }, [_vm._v("Payments")]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/OffersCrasousel.vue?vue&type=template&id=3835969d&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/OffersCrasousel.vue?vue&type=template&id=3835969d& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _vm.upcoming_list.length > 0
    ? _c(
        "div",
        { staticClass: "dashboard-body-part-two-2" },
        [
          _c(
            "VueSlickCarousel",
            _vm._b(
              { attrs: { dots: true } },
              "VueSlickCarousel",
              _vm.settings,
              false
            ),
            _vm._l(_vm.upcoming_list, function (state) {
              return _c(
                "div",
                { key: state.id, staticClass: "states_card card_scroll" },
                [
                  _c("div", { staticClass: "card" }, [
                    _c(
                      "figure",
                      {
                        directives: [
                          { name: "lazyload", rawName: "v-lazyload" },
                        ],
                        staticClass: "image__wrapper card_image_ency",
                      },
                      [
                        _c("ImageSpinner", { staticClass: "image__spinner" }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "image__item card-img-top",
                          attrs: {
                            "data-url":
                              "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_960_720.jpg",
                            alt: "image",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                ]
              )
            }),
            0
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/PopularDestination.vue?vue&type=template&id=0061f184&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/PopularDestination.vue?vue&type=template&id=0061f184&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
  return _vm.upcoming_list.length
    ? _c(
        "div",
        { staticClass: "dashboard-body-part-two-2" },
        [
          _c(
            "VueSlickCarousel",
            _vm._b(
              { attrs: { dots: true } },
              "VueSlickCarousel",
              _vm.settings,
              false
            ),
            _vm._l(_vm.upcoming_list, function (state) {
              return _c(
                "div",
                { key: state.id, staticClass: "states_card card_scroll" },
                [
                  _c(
                    "div",
                    { staticClass: "card", staticStyle: { width: "18rem" } },
                    [
                      _c("img", {
                        staticClass: "card-img-top",
                        attrs: { src: state.photo, alt: "Card image cap" },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", [
                          _c("h5", { staticClass: "card-text" }, [
                            _vm._v(_vm._s(state.title)),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "card-text" }, [
                            _vm._v(
                              "\n            " +
                                _vm._s(state.noofdays) +
                                " Days"
                            ),
                            _c("br"),
                            _vm._v(
                              "\n            Rs. " +
                                _vm._s(state.price) +
                                " /Person\n            "
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "btn-div" }, [
                          _c(
                            "button",
                            {
                              staticClass: "bookBtn",
                              on: {
                                click: function ($event) {
                                  return _vm.$router.push(
                                    "/explore-detail/" + state.id
                                  )
                                },
                              },
                            },
                            [_vm._v("BOOK")]
                          ),
                        ]),
                      ]),
                    ]
                  ),
                ]
              )
            }),
            0
          ),
        ],
        1
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
      )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=template&id=db22ae10&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=template&id=db22ae10&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _vm.upcoming_list.length > 0
    ? _c(
        "div",
        { staticClass: "dashboard-body-part-two-2" },
        [
          _c(
            "VueSlickCarousel",
            _vm._b(
              { attrs: { dots: true } },
              "VueSlickCarousel",
              _vm.settings,
              false
            ),
            _vm._l(_vm.upcoming_list, function (state) {
              return _c(
                "div",
                { key: state.id, staticClass: "states_card card_scroll" },
                [
                  _c("div", { staticClass: "card" }, [
                    _c(
                      "figure",
                      {
                        directives: [
                          { name: "lazyload", rawName: "v-lazyload" },
                        ],
                        staticClass: "image__wrapper card_image_ency",
                      },
                      [
                        _c("ImageSpinner", { staticClass: "image__spinner" }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "image__item card-img-top",
                          attrs: { "data-url": state.photo, alt: "image" },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-img-overlay text-center" }, [
                      _c(
                        "p",
                        { staticClass: "card-text" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-white",
                              attrs: { to: "/explore-detail/" + state.id },
                            },
                            [_vm._v(_vm._s(state.title))]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]
              )
            }),
            0
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UserinfoCard.vue?vue&type=template&id=7b7e92f8&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/UserinfoCard.vue?vue&type=template&id=7b7e92f8& ***!
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
  return _c("div", { staticClass: "user_dashboard_profile" }, [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "text-right" },
        [
          _c(
            "router-link",
            {
              staticClass: "user_edit",
              attrs: { to: "/profile-edit", title: "edit profile" },
            },
            [
              _c("img", {
                staticClass: "icon-width",
                attrs: { src: _vm.$gbiAssets + "/images/icons/white-user.png" },
              }),
            ]
          ),
          _c("br"),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "user_edit",
              attrs: { to: "/update-password", title: "setting" },
            },
            [
              _c("img", {
                staticClass: "icon-width",
                attrs: { src: _vm.$gbiAssets + "/images/icons/setting.png" },
              }),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _vm.userinfo
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-2 text-center image" }, [
              _c(
                "figure",
                {
                  directives: [{ name: "lazyload", rawName: "v-lazyload" }],
                  staticClass: "image__wrapper",
                },
                [
                  _c("ImageSpinner", { staticClass: "image__spinner" }),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "image__item img img-circle profile-img",
                    attrs: {
                      "data-url": _vm.userinfo.photo,
                      alt: "user profile",
                    },
                  }),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-10" }, [
              _c("div", { staticClass: "username text-left" }, [
                _c("h3", [_vm._v(_vm._s(_vm.userinfo.name))]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    _vm._s(_vm.userinfo.city) +
                      " " +
                      _vm._s(_vm.userinfo.country)
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row text-left" }, [
                _c("div", { staticClass: "col-lg-5" }, [
                  _c("div", { staticClass: "userinfo" }, [
                    _c("div", { staticClass: "userinfoFirst" }, [
                      _vm.userinfo.father_name
                        ? _c("p", [_vm._v("Father Name")])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("p", { staticClass: "bottom_text" }, [
                        _vm._v(_vm._s(_vm.userinfo.father_name)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "userinfoSecond" }, [
                      _c("p", [_vm._v("User Type")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "bottom_text" }, [
                        _vm._v(_vm._s(_vm.userinfo.user_profession)),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-7" }, [
                  _c("div", { staticClass: "userinfo" }, [
                    _c("div", { staticClass: "userinfoFirst" }, [
                      _c("p", [_vm._v("User Id")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "bottom_text" }, [
                        _vm._v(_vm._s(_vm.userinfo.email)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "userinfoSecond" }, [
                      _c("p", [_vm._v("Mobile Number")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "bottom_text" }, [
                        _vm._v(_vm._s(_vm.userinfo.phone_no)),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "logout",
          attrs: { href: "#" },
          on: { click: _vm.logout },
        },
        [_vm._v("Logout")]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/components/blog/BlogCard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/front/components/blog/BlogCard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogCard_vue_vue_type_template_id_26cebbaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogCard.vue?vue&type=template&id=26cebbaa& */ "./resources/js/front/components/blog/BlogCard.vue?vue&type=template&id=26cebbaa&");
/* harmony import */ var _BlogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogCard.vue?vue&type=script&lang=js& */ "./resources/js/front/components/blog/BlogCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogCard_vue_vue_type_template_id_26cebbaa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogCard_vue_vue_type_template_id_26cebbaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/blog/BlogCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/blog/BlogCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/front/components/blog/BlogCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/blog/BlogCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/blog/BlogCard.vue?vue&type=template&id=26cebbaa&":
/*!****************************************************************************************!*\
  !*** ./resources/js/front/components/blog/BlogCard.vue?vue&type=template&id=26cebbaa& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_template_id_26cebbaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogCard.vue?vue&type=template&id=26cebbaa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/blog/BlogCard.vue?vue&type=template&id=26cebbaa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_template_id_26cebbaa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_template_id_26cebbaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/loaders/cardLoaderDash.vue":
/*!******************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardLoaderDash.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardLoaderDash_vue_vue_type_template_id_39e1986e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardLoaderDash.vue?vue&type=template&id=39e1986e& */ "./resources/js/front/components/loaders/cardLoaderDash.vue?vue&type=template&id=39e1986e&");
/* harmony import */ var _cardLoaderDash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardLoaderDash.vue?vue&type=script&lang=js& */ "./resources/js/front/components/loaders/cardLoaderDash.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cardLoaderDash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cardLoaderDash_vue_vue_type_template_id_39e1986e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cardLoaderDash_vue_vue_type_template_id_39e1986e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/loaders/cardLoaderDash.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/loaders/cardLoaderDash.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardLoaderDash.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardLoaderDash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cardLoaderDash.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardLoaderDash.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardLoaderDash_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/loaders/cardLoaderDash.vue?vue&type=template&id=39e1986e&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardLoaderDash.vue?vue&type=template&id=39e1986e& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardLoaderDash_vue_vue_type_template_id_39e1986e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cardLoaderDash.vue?vue&type=template&id=39e1986e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/loaders/cardLoaderDash.vue?vue&type=template&id=39e1986e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardLoaderDash_vue_vue_type_template_id_39e1986e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardLoaderDash_vue_vue_type_template_id_39e1986e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/user/BookedTourButton.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/front/components/user/BookedTourButton.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookedTourButton_vue_vue_type_template_id_2d427461___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookedTourButton.vue?vue&type=template&id=2d427461& */ "./resources/js/front/components/user/BookedTourButton.vue?vue&type=template&id=2d427461&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _BookedTourButton_vue_vue_type_template_id_2d427461___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BookedTourButton_vue_vue_type_template_id_2d427461___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/user/BookedTourButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/user/BookedTourButton.vue?vue&type=template&id=2d427461&":
/*!************************************************************************************************!*\
  !*** ./resources/js/front/components/user/BookedTourButton.vue?vue&type=template&id=2d427461& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookedTourButton_vue_vue_type_template_id_2d427461___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BookedTourButton.vue?vue&type=template&id=2d427461& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/BookedTourButton.vue?vue&type=template&id=2d427461&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookedTourButton_vue_vue_type_template_id_2d427461___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BookedTourButton_vue_vue_type_template_id_2d427461___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/user/OffersCrasousel.vue":
/*!****************************************************************!*\
  !*** ./resources/js/front/components/user/OffersCrasousel.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OffersCrasousel_vue_vue_type_template_id_3835969d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OffersCrasousel.vue?vue&type=template&id=3835969d& */ "./resources/js/front/components/user/OffersCrasousel.vue?vue&type=template&id=3835969d&");
/* harmony import */ var _OffersCrasousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OffersCrasousel.vue?vue&type=script&lang=js& */ "./resources/js/front/components/user/OffersCrasousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OffersCrasousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OffersCrasousel_vue_vue_type_template_id_3835969d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OffersCrasousel_vue_vue_type_template_id_3835969d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/user/OffersCrasousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/user/OffersCrasousel.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/front/components/user/OffersCrasousel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffersCrasousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OffersCrasousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/OffersCrasousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffersCrasousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/user/OffersCrasousel.vue?vue&type=template&id=3835969d&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/front/components/user/OffersCrasousel.vue?vue&type=template&id=3835969d& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OffersCrasousel_vue_vue_type_template_id_3835969d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OffersCrasousel.vue?vue&type=template&id=3835969d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/OffersCrasousel.vue?vue&type=template&id=3835969d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OffersCrasousel_vue_vue_type_template_id_3835969d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OffersCrasousel_vue_vue_type_template_id_3835969d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/user/PopularDestination.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/front/components/user/PopularDestination.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopularDestination_vue_vue_type_template_id_0061f184_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopularDestination.vue?vue&type=template&id=0061f184&scoped=true& */ "./resources/js/front/components/user/PopularDestination.vue?vue&type=template&id=0061f184&scoped=true&");
/* harmony import */ var _PopularDestination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopularDestination.vue?vue&type=script&lang=js& */ "./resources/js/front/components/user/PopularDestination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PopularDestination_vue_vue_type_style_index_0_id_0061f184_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopularDestination.vue?vue&type=style&index=0&id=0061f184&scoped=true&lang=css& */ "./resources/js/front/components/user/PopularDestination.vue?vue&type=style&index=0&id=0061f184&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PopularDestination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PopularDestination_vue_vue_type_template_id_0061f184_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PopularDestination_vue_vue_type_template_id_0061f184_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0061f184",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/user/PopularDestination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/user/PopularDestination.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/front/components/user/PopularDestination.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularDestination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PopularDestination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/PopularDestination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularDestination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/user/PopularDestination.vue?vue&type=style&index=0&id=0061f184&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/front/components/user/PopularDestination.vue?vue&type=style&index=0&id=0061f184&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularDestination_vue_vue_type_style_index_0_id_0061f184_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PopularDestination.vue?vue&type=style&index=0&id=0061f184&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/PopularDestination.vue?vue&type=style&index=0&id=0061f184&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularDestination_vue_vue_type_style_index_0_id_0061f184_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularDestination_vue_vue_type_style_index_0_id_0061f184_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularDestination_vue_vue_type_style_index_0_id_0061f184_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularDestination_vue_vue_type_style_index_0_id_0061f184_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/components/user/PopularDestination.vue?vue&type=template&id=0061f184&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/front/components/user/PopularDestination.vue?vue&type=template&id=0061f184&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularDestination_vue_vue_type_template_id_0061f184_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PopularDestination.vue?vue&type=template&id=0061f184&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/PopularDestination.vue?vue&type=template&id=0061f184&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularDestination_vue_vue_type_template_id_0061f184_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PopularDestination_vue_vue_type_template_id_0061f184_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/user/UpcomingCrasousel.vue":
/*!******************************************************************!*\
  !*** ./resources/js/front/components/user/UpcomingCrasousel.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpcomingCrasousel_vue_vue_type_template_id_db22ae10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpcomingCrasousel.vue?vue&type=template&id=db22ae10&scoped=true& */ "./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=template&id=db22ae10&scoped=true&");
/* harmony import */ var _UpcomingCrasousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpcomingCrasousel.vue?vue&type=script&lang=js& */ "./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UpcomingCrasousel_vue_vue_type_style_index_0_id_db22ae10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpcomingCrasousel.vue?vue&type=style&index=0&id=db22ae10&scoped=true&lang=css& */ "./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=style&index=0&id=db22ae10&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpcomingCrasousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpcomingCrasousel_vue_vue_type_template_id_db22ae10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpcomingCrasousel_vue_vue_type_template_id_db22ae10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "db22ae10",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/user/UpcomingCrasousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpcomingCrasousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=style&index=0&id=db22ae10&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=style&index=0&id=db22ae10&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_style_index_0_id_db22ae10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpcomingCrasousel.vue?vue&type=style&index=0&id=db22ae10&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=style&index=0&id=db22ae10&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_style_index_0_id_db22ae10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_style_index_0_id_db22ae10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_style_index_0_id_db22ae10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_style_index_0_id_db22ae10_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=template&id=db22ae10&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=template&id=db22ae10&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_template_id_db22ae10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpcomingCrasousel.vue?vue&type=template&id=db22ae10&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=template&id=db22ae10&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_template_id_db22ae10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_template_id_db22ae10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/user/UserinfoCard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/front/components/user/UserinfoCard.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserinfoCard_vue_vue_type_template_id_7b7e92f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserinfoCard.vue?vue&type=template&id=7b7e92f8& */ "./resources/js/front/components/user/UserinfoCard.vue?vue&type=template&id=7b7e92f8&");
/* harmony import */ var _UserinfoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserinfoCard.vue?vue&type=script&lang=js& */ "./resources/js/front/components/user/UserinfoCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserinfoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserinfoCard_vue_vue_type_template_id_7b7e92f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserinfoCard_vue_vue_type_template_id_7b7e92f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/user/UserinfoCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/user/UserinfoCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/front/components/user/UserinfoCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserinfoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserinfoCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UserinfoCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserinfoCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/user/UserinfoCard.vue?vue&type=template&id=7b7e92f8&":
/*!********************************************************************************************!*\
  !*** ./resources/js/front/components/user/UserinfoCard.vue?vue&type=template&id=7b7e92f8& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserinfoCard_vue_vue_type_template_id_7b7e92f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserinfoCard.vue?vue&type=template&id=7b7e92f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UserinfoCard.vue?vue&type=template&id=7b7e92f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserinfoCard_vue_vue_type_template_id_7b7e92f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserinfoCard_vue_vue_type_template_id_7b7e92f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/mixins/user/Dashboard.js":
/*!*****************************************************!*\
  !*** ./resources/js/front/mixins/user/Dashboard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Dashboard = {
  name: "Dashboard",
  data: function data() {
    return {
      itineraryData: {},
      upcoming_list: [],
      events_list: [],
      popular_list: [],
      userinfo: {},
      valid: false
    };
  },
  beforeMount: function beforeMount() {
    var userdata = this.$cookies.get('user');

    if (userdata.status == 0) {
      this.$router.push("/user-information");
    }
  },
  mounted: function mounted() {
    this.checkLogin();
    this.upComingData();
    this.upComingEvents();
    this.popularList();
  },
  methods: {
    checkLogin: function checkLogin() {
      this.$cookies.remove('login');
      this.userinfo = this.$cookies.get('user');
      this.valid = true;
    },
    userData: function userData() {
      if (this.userinfo.status == 0) {
        this.$router.push("/user-information");
        return false;
      }

      if (this.userinfo.change_password == 0) {
        this.$swal.fire("warning", "Please change your password for security purpose !!! <br>", "warning");
      }
    },
    upComingData: function upComingData() {
      var _this = this;

      this.$axios.get("/api/travel-program/upcoming-tour").then(function (response) {
        _this.upcoming_list = response.data;
      });
    },
    upComingEvents: function upComingEvents() {
      var _this2 = this;

      this.$axios.get("/api/upcoming-events").then(function (response) {
        _this2.events_list = response.data;
      });
    },
    eventsList: function eventsList() {
      var _this3 = this;

      this.$axios.get("/api/travel-program/upcoming-tour").then(function (response) {
        _this3.upcoming_list = response.data;
      });
    },
    popularList: function popularList() {
      var _this4 = this;

      this.$axios.get("/api/popular-tours").then(function (response) {
        _this4.popular_list = response.data;
      });
    },
    getImgUrl: function getImgUrl(img) {
      return "/uploadimage/" + img;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

}]);