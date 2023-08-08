(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/EncyclopediaView"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Encyclopedia/State-view.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Encyclopedia/State-view.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "State",
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a,
    Form: vform__WEBPACK_IMPORTED_MODULE_1__["Form"],
    HasError: vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]
  },
  data: function data() {
    return {
      settings: {
        dots: true,
        infinite: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1500,
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
      },
      state_data: [],
      comment_data: [],
      comment_list: [],
      state_list: [],
      reply_modal: false,
      comment_id: false,
      encyclopedia_id: "",
      reply_input: "",
      show: false,
      src: "",
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        body: "",
        encyclopedia_id: "",
        parent_id: null
      })
    };
  },
  watch: {
    "$route.params.id": function $routeParamsId(id) {
      this.stateData(); //   this.scrollToTop();
    }
  },
  beforeCreate: function beforeCreate() {
    var metaInfo = {
      title: 'GBI Travel Encyclopedia',
      description: 'GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.',
      keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
      url: 'https://www.gowithgbi.com/resources/travel-encyclopedia-international',
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  created: function created() {
    this.stateData();
    this.states();
    var metaInfo = {
      title: "GBI Travel Encyclopedia | ".concat(this.state_data.state_name),
      description: this.state_data.description.slice(0, 150),
      image: this.state_data.banner_image,
      keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
      url: "https://www.gowithgbi.com/encyclopedia/".concat(this.state_data.slug),
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/"; // this.scrollToTop();
  },
  methods: {
    updateCurrent: function updateCurrent(page_num) {
      this.page = page_num;
    },
    pdfShow: function pdfShow(name) {
      this.src = "";
      this.show = true;
      this.src = "/encyclopedia/pdf/" + name;
    },
    password: function password(updatePassword, reason) {
      updatePassword(prompt('password is "test"'));
    },
    error: function error(err) {
      console.log(err);
    },
    stateData: function stateData() {
      var _this = this;

      var api = "/api/encyclopedia/".concat(this.$route.params.id);
      this.$axios(api).then(function (response) {
        _this.state_data = response.data;
        _this.form.encyclopedia_id = _this.state_data.id;
        var url = "/api/ency-comments/".concat(_this.form.encyclopedia_id);

        _this.$axios(url).then(function (response) {
          _this.comment_list = response.data;
        });
      });
    },
    stateComments: function stateComments() {
      var url = "/api/ency-comments/".concat(this.form.encyclopedia_id);
      this.$axios(url).then(function (response) {
        return response.data;
      });
    },
    states: function states() {
      var _this2 = this;

      this.$axios.get("/api/encyclopedia-list").then(function (response) {
        _this2.state_list = response.data;
      });
    },
    ReplyModal: function ReplyModal(comment_row) {
      if (localStorage.token == undefined) {
        window.$("#loginButton").click();
        return false;
      }

      this.reply_modal = !this.reply_modal;
      this.comment_id = comment_row;
    },
    ReplySubmit: function ReplySubmit() {
      this.reply_modal = !this.reply_modal;
      this.form.parent_id = this.comment_id;
      this.form.body = this.reply_input;
      this.reply_input = "";
      this.addComment();
    },
    getImgUrl: function getImgUrl(img) {
      return "/encyclopedia/" + img;
    },
    getProfileImage: function getProfileImage(img) {
      return "/uploadimage/" + img;
    },
    addComment: function addComment() {
      var _this3 = this;

      if (localStorage.token == undefined) {
        alert("Please login first");
        window.$("#loginButton").click();
      } else {
        // add data to the database
        this.$axios.post("/api/encyclopedia-comments", this.form, {
          headers: {
            Authorization: "Bearer ".concat(localStorage.token)
          }
        }).then(function (response) {
          _this3.stateData();

          _this3.stateComments();

          _this3.form.body = "";
          _this3.form.parent_id = null;
        });
      }
    },
    goToState: function goToState(slug) {
      var url = "/encyclopedia/" + slug;
      this.$router.push(url);
    },
    scrollToTop: function scrollToTop() {// if (typeof window !== 'undefined') {
      //   this.prototype.scrollTo(0,0);
      // }
    }
  },
  filters: {
    pdfFilter: function pdfFilter(string) {
      if (string) {
        return string.replace(".pdf", "");
      } else {
        return "";
      }
    },
    dateFormat: function dateFormat(date) {
      date = new Date(date);
      var dateTimeFormat = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      });

      var _dateTimeFormat$forma = dateTimeFormat.formatToParts(date),
          _dateTimeFormat$forma2 = _slicedToArray(_dateTimeFormat$forma, 5),
          month = _dateTimeFormat$forma2[0].value,
          day = _dateTimeFormat$forma2[2].value,
          year = _dateTimeFormat$forma2[4].value;

      return "".concat(day, "-").concat(month, "-").concat(year);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Encyclopedia/State-view.vue?vue&type=template&id=c80cf09e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Encyclopedia/State-view.vue?vue&type=template&id=c80cf09e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _vm.state_data
    ? _c("div", { staticClass: "State" }, [
        _c("section", { staticClass: "banner-block" }, [
          _c("img", {
            staticClass: "top-img",
            attrs: { id: "traveleduimg", src: _vm.state_data.banner_image },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "container state_body mt-30" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-8" }, [
              _c("h4", { staticClass: "state_name mb-20" }, [
                _vm._v(_vm._s(_vm.state_data.state_name)),
              ]),
              _vm._v(" "),
              _c("div", {
                staticClass: "state_description",
                domProps: { innerHTML: _vm._s(_vm.state_data.description) },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "card state_card" }, [
                _c("div", {
                  staticClass: "map_show",
                  domProps: { innerHTML: _vm._s(_vm.state_data.map_link) },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "state_images p-0" }, [
                _c(
                  "div",
                  { staticClass: "row p-0" },
                  _vm._l(_vm.state_data.images, function (img) {
                    return _c(
                      "div",
                      { key: img.id, staticClass: "col-6 p-0" },
                      [
                        _c("img", {
                          staticClass: "p-0",
                          attrs: {
                            src: img.image,
                            loading: "lazy",
                            alt: img.alt,
                          },
                        }),
                      ]
                    )
                  }),
                  0
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card state_card" },
                [
                  _c("p", { staticClass: "p-0 m-0" }, [_vm._v("Itinerary")]),
                  _vm._v(" "),
                  _vm._l(_vm.state_data.itinerarypdfs, function (pdf) {
                    return _c(
                      "p",
                      { key: pdf.id, staticClass: "link pl-2" },
                      [
                        _c(
                          "router-link",
                          { attrs: { to: "/itinerary-pdf/" + pdf.slug } },
                          [
                            _vm._v(
                              _vm._s(_vm._f("pdfFilter")(pdf.slug)) +
                                "\n              "
                            ),
                            _c("img", {
                              staticClass: "encylopedia-pdf",
                              attrs: {
                                src: _vm.$gbiAssets + "/images/icons/pdf.png",
                              },
                            }),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                ],
                2
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _vm.state_list.length
                ? _c(
                    "div",
                    { staticClass: "state_list" },
                    [
                      _c(
                        "VueSlickCarousel",
                        _vm._b(
                          { attrs: { arrows: true, dots: true } },
                          "VueSlickCarousel",
                          _vm.settings,
                          false
                        ),
                        _vm._l(_vm.state_list, function (state) {
                          return _c(
                            "div",
                            {
                              key: state.id,
                              staticClass: "card_scroll states_card",
                            },
                            [
                              _c("div", { staticClass: "card" }, [
                                _c("img", {
                                  staticClass: "card-img-top",
                                  attrs: {
                                    src: state.thumbnail,
                                    loading: "lazy",
                                    alt: state.state_name,
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "card-img-overlay text-center",
                                  },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "card-text text-white" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/encyclopedia/" + state.slug,
                                            },
                                          },
                                          [_vm._v(_vm._s(state.state_name))]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
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
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12 p-0" }, [
              _c("div", { staticClass: "col-md-8 w-100 p-0" }, [
                _c("div", { staticClass: "comment_section w-100" }, [
                  _c(
                    "div",
                    { staticClass: "container mt-3" },
                    [
                      _c("h4", [_vm._v("Reviews")]),
                      _vm._v(" "),
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
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.body,
                                    expression: "form.body",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("body"),
                                },
                                attrs: {
                                  rows: "3",
                                  placeholder:
                                    "Share your experiences and insights with us",
                                },
                                domProps: { value: _vm.form.body },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "body",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "body" },
                              }),
                              _vm._v(" "),
                              _vm._m(0),
                            ],
                            1
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.comment_list, function (comment) {
                        return _c(
                          "div",
                          {
                            key: comment.id,
                            staticClass: "comment_section w-100",
                          },
                          [
                            comment.parent_id == null
                              ? _c("div", [
                                  comment.user
                                    ? _c("div", { staticClass: "media p-0" }, [
                                        _c("img", {
                                          staticClass:
                                            "mr-3 rounded-circle w-45",
                                          attrs: {
                                            src: comment.user.information.photo,
                                            alt: "John Doe",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "media-body" },
                                          [
                                            _c("h6", [
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(comment.user.name) +
                                                  "\n                        "
                                              ),
                                              _c(
                                                "small",
                                                { staticClass: "text-small" },
                                                [
                                                  _c("i", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("dateFormat")(
                                                          comment.created_at
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-outline-dark float-right replybtn",
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.ReplyModal(
                                                        comment.id
                                                      )
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                          Reply\n                        "
                                                  ),
                                                ]
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("p", [
                                              _vm._v(_vm._s(comment.body)),
                                            ]),
                                            _vm._v(" "),
                                            _vm.reply_modal == true &&
                                            _vm.comment_id == comment.id
                                              ? _c("div", [
                                                  _c(
                                                    "form",
                                                    {
                                                      staticClass: "form",
                                                      on: {
                                                        submit: function (
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.ReplySubmit()
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "form-group",
                                                        },
                                                        [
                                                          _c("textarea", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.reply_input,
                                                                expression:
                                                                  "reply_input",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              rows: "3",
                                                              placeholder:
                                                                "Type here...",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.reply_input,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.reply_input =
                                                                  $event.target.value
                                                              },
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _vm._m(1, true),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm._l(
                                              _vm.state_data.comments,
                                              function (reply) {
                                                return _c(
                                                  "div",
                                                  { key: reply.id },
                                                  [
                                                    reply.parent_id ==
                                                    comment.id
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "media p-0",
                                                          },
                                                          [
                                                            _c("img", {
                                                              staticClass:
                                                                "mr-3 rounded-circle w-45",
                                                              attrs: {
                                                                src: comment
                                                                  .user
                                                                  .information
                                                                  .photo,
                                                                alt: "Jane Doe",
                                                              },
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "media-body",
                                                              },
                                                              [
                                                                _c("h6", [
                                                                  _vm._v(
                                                                    "\n                              " +
                                                                      _vm._s(
                                                                        comment
                                                                          .user
                                                                          .name
                                                                      ) +
                                                                      "\n                              "
                                                                  ),
                                                                  _c(
                                                                    "small",
                                                                    {
                                                                      staticClass:
                                                                        "text-small",
                                                                    },
                                                                    [
                                                                      _c("i", [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            _vm._f(
                                                                              "dateFormat"
                                                                            )(
                                                                              comment.created_at
                                                                            )
                                                                          )
                                                                        ),
                                                                      ]),
                                                                    ]
                                                                  ),
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("p", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      reply.body
                                                                    )
                                                                  ),
                                                                ]),
                                                              ]
                                                            ),
                                                          ]
                                                        )
                                                      : _vm._e(),
                                                  ]
                                                )
                                              }
                                            ),
                                          ],
                                          2
                                        ),
                                      ])
                                    : _vm._e(),
                                ])
                              : _vm._e(),
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
        ]),
      ])
    : _vm._e()
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
          [_vm._v("\n                        Submit\n                      ")]
        ),
      ]),
    ])
  },
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
          [
            _vm._v(
              "\n                                  Submit\n                                "
            ),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/pages/Encyclopedia/State-view.vue":
/*!**************************************************************!*\
  !*** ./resources/js/front/pages/Encyclopedia/State-view.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _State_view_vue_vue_type_template_id_c80cf09e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State-view.vue?vue&type=template&id=c80cf09e& */ "./resources/js/front/pages/Encyclopedia/State-view.vue?vue&type=template&id=c80cf09e&");
/* harmony import */ var _State_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State-view.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/Encyclopedia/State-view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _State_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _State_view_vue_vue_type_template_id_c80cf09e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _State_view_vue_vue_type_template_id_c80cf09e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/Encyclopedia/State-view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/Encyclopedia/State-view.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/front/pages/Encyclopedia/State-view.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_State_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./State-view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Encyclopedia/State-view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_State_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/Encyclopedia/State-view.vue?vue&type=template&id=c80cf09e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/front/pages/Encyclopedia/State-view.vue?vue&type=template&id=c80cf09e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_State_view_vue_vue_type_template_id_c80cf09e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./State-view.vue?vue&type=template&id=c80cf09e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Encyclopedia/State-view.vue?vue&type=template&id=c80cf09e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_State_view_vue_vue_type_template_id_c80cf09e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_State_view_vue_vue_type_template_id_c80cf09e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);