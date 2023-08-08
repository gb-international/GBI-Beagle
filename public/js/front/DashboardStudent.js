(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/DashboardStudent"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/student/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_mixins_user_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/mixins/user/Dashboard */ "./resources/js/front/mixins/user/Dashboard.js");
/* harmony import */ var _front_components_user_UserinfoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/user/UserinfoCard */ "./resources/js/front/components/user/UserinfoCard.vue");
/* harmony import */ var _front_components_user_BookedTourButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/front/components/user/BookedTourButton */ "./resources/js/front/components/user/BookedTourButton.vue");
/* harmony import */ var _front_components_user_UpcomingCrasousel_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/front/components/user/UpcomingCrasousel.vue */ "./resources/js/front/components/user/UpcomingCrasousel.vue");
/* harmony import */ var _front_components_user_OffersCrasousel_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/front/components/user/OffersCrasousel.vue */ "./resources/js/front/components/user/OffersCrasousel.vue");
/* harmony import */ var _front_components_blog_BlogCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/front/components/blog//BlogCard */ "./resources/js/front/components/blog/BlogCard.vue");
/* harmony import */ var _front_components_user_PopularDestination_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/front/components/user/PopularDestination.vue */ "./resources/js/front/components/user/PopularDestination.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DashboardTeacher",
  components: {
    'user-info-card': _front_components_user_UserinfoCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    'booked-tour-button': _front_components_user_BookedTourButton__WEBPACK_IMPORTED_MODULE_2__["default"],
    'upcoming-tour-crasousel': _front_components_user_UpcomingCrasousel_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'offers-crasousel': _front_components_user_OffersCrasousel_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'blog-card': _front_components_blog_BlogCard__WEBPACK_IMPORTED_MODULE_5__["default"],
    'popular-tour': _front_components_user_PopularDestination_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      posts: [],
      posts_list: [],
      rSearches: []
    };
  },
  mixins: [_front_mixins_user_Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"]],
  mounted: function mounted() {
    this.blogList();
    this.rSearches = JSON.parse(localStorage.getItem("itSearches"));
    console.log(this.rSearches);
  },
  methods: {
    blogList: function blogList() {
      var _this = this;

      this.$axios.get("/api/blog-recents").then(function (response) {
        _this.posts = response.data;
        _this.posts_list = _this.posts.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/Dashboard.vue?vue&type=template&id=77b8e7ab&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/student/Dashboard.vue?vue&type=template&id=77b8e7ab& ***!
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
  return _vm.valid
    ? _c("div", [
        _c(
          "div",
          { staticClass: "container" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("h5", { staticClass: "title_section pt-4" }, [
              _vm._v("Special Offers"),
            ]),
            _vm._v(" "),
            _c("offers-crasousel", {
              attrs: { upcoming_list: _vm.upcoming_list },
            }),
            _vm._v(" "),
            _c("h5", { staticClass: "title_section pt-4" }, [
              _vm._v("\n      Upcoming Events\n    "),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "popular_destination" },
              [
                _c("popular-tour", {
                  attrs: { upcoming_list: _vm.events_list },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "pb-5" }, [
              _c("h5", { staticClass: "title_section" }, [
                _vm._v("\n        Recent Searches "),
              ]),
              _vm._v(" "),
              _vm.rSearches.length >= 1
                ? _c(
                    "div",
                    { staticClass: "resent_search" },
                    [
                      _c("popular-tour", {
                        attrs: { upcoming_list: _vm.rSearches },
                      }),
                    ],
                    1
                  )
                : _c("p", [_vm._v("You have no recent searches.")]),
            ]),
            _vm._v(" "),
            _c("h5", { staticClass: "title_section" }, [
              _vm._v("\n      Popular Tours\n    "),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "popular_destination" },
              [
                _c("popular-tour", {
                  attrs: { upcoming_list: _vm.popular_list },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("h5", { staticClass: "title_section" }, [
              _vm._v("\n      Travel Blogs\n      "),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.posts_list, function (post, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass:
                      "col-12 col-sm-8 col-md-6 col-lg-4 mb-4 border-radius-0 blog-list",
                  },
                  [_c("blog-card", { attrs: { post: post } })],
                  1
                )
              }),
              0
            ),
          ],
          1
        ),
      ])
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "advertismentpart" }, [
      _c("img", {
        attrs: {
          src: "https://cdn.pixabay.com/photo/2016/04/26/15/01/holiday-1354563_960_720.jpg",
          loading: "lazy",
        },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/pages/user/student/Dashboard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/front/pages/user/student/Dashboard.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_77b8e7ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=77b8e7ab& */ "./resources/js/front/pages/user/student/Dashboard.vue?vue&type=template&id=77b8e7ab&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/student/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_77b8e7ab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_77b8e7ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/student/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/student/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/front/pages/user/student/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/student/Dashboard.vue?vue&type=template&id=77b8e7ab&":
/*!********************************************************************************************!*\
  !*** ./resources/js/front/pages/user/student/Dashboard.vue?vue&type=template&id=77b8e7ab& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_77b8e7ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=77b8e7ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/Dashboard.vue?vue&type=template&id=77b8e7ab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_77b8e7ab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_77b8e7ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);