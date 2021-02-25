(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/DashboardStudent~js/front/DashboardTeacher"],{

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
var render = function() {
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
                    src: "assets/front/images/booked_320.png",
                    loading: "lazy"
                  }
                }),
                _vm._v(" "),
                _c("p", { staticClass: "icon_text" }, [
                  _vm._v("Booked Itinerary")
                ])
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col colbutton mb-10" }, [
      _c("a", { attrs: { href: "#" } }, [
        _c("div", { staticClass: "rowdata2" }, [
          _c("img", {
            attrs: {
              src: "assets/front/images/payment_320.png",
              loading: "lazy"
            }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "icon_text" }, [_vm._v("Payments")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=template&id=db22ae10&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=template&id=db22ae10& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
            _vm._l(_vm.upcoming_list, function(state) {
              return _c(
                "div",
                { key: state.id, staticClass: "states_card card_scroll" },
                [
                  _c("div", { staticClass: "card" }, [
                    _c(
                      "figure",
                      {
                        directives: [
                          { name: "lazyload", rawName: "v-lazyload" }
                        ],
                        staticClass: "image__wrapper card_image_ency"
                      },
                      [
                        _c("ImageSpinner", { staticClass: "image__spinner" }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "image__item card-img-top",
                          attrs: {
                            "data-url": "/uploadimage/" + state.photo,
                            alt: "image"
                          }
                        })
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
                              attrs: { to: "/explore-detail/" + state.id }
                            },
                            [_vm._v(_vm._s(state.title))]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]
              )
            }),
            0
          )
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
var render = function() {
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
              attrs: { to: "/profile-edit", title: "edit profile" }
            },
            [
              _c("img", {
                staticClass: "icon-width",
                attrs: { src: "/images/icons/user.png" }
              })
            ]
          ),
          _c("br"),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "user_edit",
              attrs: { to: "/update-password", title: "setting" }
            },
            [
              _c("img", {
                staticClass: "icon-width",
                attrs: { src: "/images/icons/setting.png" }
              })
            ]
          )
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
                  staticClass: "image__wrapper"
                },
                [
                  _c("ImageSpinner", { staticClass: "image__spinner" }),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "image__item img img-circle profile-img",
                    attrs: {
                      "data-url": "/uploadimage/" + _vm.userinfo.photo,
                      alt: "user profile"
                    }
                  })
                ],
                1
              )
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
                  )
                ])
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
                        _vm._v(_vm._s(_vm.userinfo.father_name))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "userinfoSecond" }, [
                      _c("p", [_vm._v("User Type")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "bottom_text" }, [
                        _vm._v(_vm._s(_vm.userinfo.user_profession))
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-7" }, [
                  _c("div", { staticClass: "userinfo" }, [
                    _c("div", { staticClass: "userinfoFirst" }, [
                      _c("p", [_vm._v("User Id")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "bottom_text" }, [
                        _vm._v(_vm._s(_vm.userinfo.email))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "userinfoSecond" }, [
                      _c("p", [_vm._v("Mobile Number")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "bottom_text" }, [
                        _vm._v(_vm._s(_vm.userinfo.phone_no))
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "logout",
          attrs: { href: "#" },
          on: { click: _vm.logout }
        },
        [_vm._v("Logout")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/front/components/user/UpcomingCrasousel.vue":
/*!******************************************************************!*\
  !*** ./resources/js/front/components/user/UpcomingCrasousel.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpcomingCrasousel_vue_vue_type_template_id_db22ae10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpcomingCrasousel.vue?vue&type=template&id=db22ae10& */ "./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=template&id=db22ae10&");
/* harmony import */ var _UpcomingCrasousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpcomingCrasousel.vue?vue&type=script&lang=js& */ "./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpcomingCrasousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpcomingCrasousel_vue_vue_type_template_id_db22ae10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpcomingCrasousel_vue_vue_type_template_id_db22ae10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=template&id=db22ae10&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=template&id=db22ae10& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_template_id_db22ae10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpcomingCrasousel.vue?vue&type=template&id=db22ae10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/user/UpcomingCrasousel.vue?vue&type=template&id=db22ae10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_template_id_db22ae10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpcomingCrasousel_vue_vue_type_template_id_db22ae10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
    getImgUrl: function getImgUrl(img) {
      return "/uploadimage/" + img;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

}]);