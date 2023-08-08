(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/BlogDetail"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Blog/BlogCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Blog/BlogCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BlogCard",
  props: ['post']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Blog/Detail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Blog/Detail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BlogCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogCard */ "./resources/js/front/pages/Blog/BlogCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "BlogDetail",
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a,
    Form: vform__WEBPACK_IMPORTED_MODULE_1__["Form"],
    HasError: vform__WEBPACK_IMPORTED_MODULE_1__["HasError"],
    BlogCard: _BlogCard__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      settings: {
        arrows: true,
        infinite: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        dots: true,
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
      },
      posts: {
        title: "",
        description: "",
        slug: "",
        meta_title: "",
        meta_keyword: ""
      },
      RelatedPosts: [],
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        name: "",
        description: "",
        post_id: ""
      }),
      error_message: "",
      title: "Foo Bar Baz"
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: this.posts.title,
      meta: [{
        name: "description",
        content: "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one"
      }, {
        name: "keywords",
        content: this.posts.meta_keyword
      }, {
        name: "url",
        content: "https://www.gowithgbi.com/blog/".concat(this.posts.slug)
      }, {
        name: "type",
        content: "website"
      }]
    };
  },
  beforeCreate: function beforeCreate() {
    var metaInfo = {
      title: 'GBI Blog',
      description: '@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one',
      keywords: '@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs',
      url: 'https://www.gowithgbi.com/blog',
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  watch: {
    "$route.params.slug": function $routeParamsSlug(id) {
      this.getBlogDetail();
    }
  },
  created: function created() {
    this.getBlogDetail();
    var metaInfo = {
      title: this.posts.title,
      description: this.posts.summery,
      image: this.posts.image,
      keywords: this.posts.meta_keyword,
      url: "https://www.gowithgbi.com/blog/".concat(this.posts.slug),
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  methods: {
    getBlogDetail: function getBlogDetail() {
      var _this = this;

      this.$axios.get("/api/getpost/".concat(this.$route.params.slug)).then(function (response) {
        _this.posts = response.data;
        console.log(_this.posts);

        _this.getRelatedBlogs();
      });
    },
    getRelatedBlogs: function getRelatedBlogs() {
      var _this2 = this;

      this.$axios.get("/api/related-blog/".concat(this.posts.category_id)).then(function (response) {
        _this2.RelatedPosts = response.data;
      });
    },
    addComment: function addComment() {
      var _this3 = this;

      if (this.form.name == "" || this.form.description == "") {
        this.error_message = "Please fill the fields";
        return false;
      }

      this.form.post_id = this.posts.id;
      this.$axios.post("/api/add-post-comment", this.form).then(function (response) {
        _this3.posts.comments.unshift(response.data);

        _this3.form.name = "";
        _this3.form.description = "";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Blog/BlogCard.vue?vue&type=template&id=776d03c0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Blog/BlogCard.vue?vue&type=template&id=776d03c0& ***!
  \*****************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Blog/Detail.vue?vue&type=template&id=abee12c2&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Blog/Detail.vue?vue&type=template&id=abee12c2& ***!
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
  return _c("div", { attrs: { id: "BlogDetail" } }, [
    _c("div", { staticClass: "banner-image-parent" }, [
      _c("img", { attrs: { src: _vm.posts.image } }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "blog-title" }, [
          _c("h1", { staticClass: "text-center blog-heading" }, [
            _vm._v(_vm._s(_vm.posts.title)),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container mt-2" }, [
      _c("div", { staticClass: "blog-detail" }, [
        _vm.posts.category
          ? _c(
              "p",
              { staticClass: "text-muted pt-3 pb-3" },
              [
                _c("router-link", { attrs: { to: "/blog" } }, [
                  _vm._v("GBI Travel Blog "),
                ]),
                _vm._v(">\n        "),
                _c(
                  "router-link",
                  {
                    staticClass: "text-underscore",
                    attrs: { to: "/blog/category/" + _vm.posts.category.slug },
                  },
                  [_c("b", [_vm._v(_vm._s(_vm.posts.category.title))])]
                ),
                _vm._v("\n        >" + _vm._s(_vm.posts.slug) + "\n      "),
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "text-left mb-2 author-blog" }, [
          _c("img", {
            staticClass: "img-rounded avatar-author mr-2",
            attrs: {
              src: _vm.$gbiAssets + "/assets/front/images/logo-avatar.png",
            },
          }),
          _vm._v(" "),
          _c("p", { staticClass: "m-0 font-14 text-muted" }, [
            _vm._v("\n          GBI-Author"),
            _c("br"),
            _vm._v(
              "Last updated : " + _vm._s(_vm.posts.updated_at) + "\n        "
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "description mb-2" }, [
          _c("p", {
            staticClass: "largeFirstLetter",
            domProps: { innerHTML: _vm._s(_vm.posts.description) },
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-3" },
            _vm._l(_vm.posts.tags, function (tag) {
              return _c(
                "span",
                {
                  key: tag.id,
                  staticClass: "text-dark card-tag mr-2 p-1 pr-2 pl-2",
                },
                [_vm._v(_vm._s(tag.title))]
              )
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-4" }, [
          _c("b", [_vm._v("Read More : ")]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-12" }, [
            _vm.RelatedPosts.length
              ? _c(
                  "div",
                  { staticClass: "posts blog-list" },
                  [
                    _c(
                      "VueSlickCarousel",
                      _vm._b({}, "VueSlickCarousel", _vm.settings, false),
                      _vm._l(_vm.RelatedPosts, function (relatedPost) {
                        return _c(
                          "div",
                          { key: relatedPost.id, staticClass: "mr-1 p-2" },
                          [_c("blog-card", { attrs: { post: relatedPost } })],
                          1
                        )
                      }),
                      0
                    ),
                  ],
                  1
                )
              : _vm._e(),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "comment-section mt-2" }, [
          _c("h4", {}, [_vm._v("Comment :")]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-sm-8" },
              [
                _c(
                  "form",
                  {
                    staticClass: "form",
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.addComment()
                      },
                    },
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name",
                            },
                          ],
                          staticClass: "form-control border-1-grey",
                          attrs: { type: "text", placeholder: "Enter name" },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            },
                          },
                        }),
                        _c("br"),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.description,
                              expression: "form.description",
                            },
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("description"),
                          },
                          attrs: { rows: "3", placeholder: "Type here..." },
                          domProps: { value: _vm.form.description },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "description",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "description" },
                        }),
                        _vm._v(" "),
                        _vm.error_message != ""
                          ? _c("p", { staticClass: "text-danger" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.error_message) +
                                  "\n                "
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._m(0),
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _vm._l(_vm.posts.comments, function (comment) {
                  return _c(
                    "div",
                    { key: comment.id, staticClass: "media border p-3 mb-2" },
                    [
                      _c("img", {
                        staticClass: "avatar-author mr-3 mt-3 rounded-circle",
                        attrs: {
                          src: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
                          alt: "John Doe",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h6", [
                          _vm._v(
                            "\n                  " +
                              _vm._s(comment.name) +
                              "\n                  "
                          ),
                          _c("small", [
                            _c("i", [_vm._v(_vm._s(comment.created_at))]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(comment.description))]),
                      ]),
                    ]
                  )
                }),
              ],
              2
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col text-right" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-info profile_button comment_btn",
            attrs: { type: "submit" },
          },
          [_vm._v("\n                      Submit\n                    ")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/pages/Blog/BlogCard.vue":
/*!****************************************************!*\
  !*** ./resources/js/front/pages/Blog/BlogCard.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogCard_vue_vue_type_template_id_776d03c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogCard.vue?vue&type=template&id=776d03c0& */ "./resources/js/front/pages/Blog/BlogCard.vue?vue&type=template&id=776d03c0&");
/* harmony import */ var _BlogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogCard.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/Blog/BlogCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogCard_vue_vue_type_template_id_776d03c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogCard_vue_vue_type_template_id_776d03c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/Blog/BlogCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/Blog/BlogCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/front/pages/Blog/BlogCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Blog/BlogCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/Blog/BlogCard.vue?vue&type=template&id=776d03c0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/front/pages/Blog/BlogCard.vue?vue&type=template&id=776d03c0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_template_id_776d03c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogCard.vue?vue&type=template&id=776d03c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Blog/BlogCard.vue?vue&type=template&id=776d03c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_template_id_776d03c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogCard_vue_vue_type_template_id_776d03c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/pages/Blog/Detail.vue":
/*!**************************************************!*\
  !*** ./resources/js/front/pages/Blog/Detail.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_abee12c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=abee12c2& */ "./resources/js/front/pages/Blog/Detail.vue?vue&type=template&id=abee12c2&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/Blog/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_abee12c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_abee12c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/Blog/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/Blog/Detail.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/front/pages/Blog/Detail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Blog/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/Blog/Detail.vue?vue&type=template&id=abee12c2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/front/pages/Blog/Detail.vue?vue&type=template&id=abee12c2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_abee12c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=template&id=abee12c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Blog/Detail.vue?vue&type=template&id=abee12c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_abee12c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_abee12c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);