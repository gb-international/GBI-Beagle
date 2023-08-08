(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/feedbacks"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FeedbackList",
  components: {//'pagination':pagination,
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        id: ""
      }),
      filter: '',
      perPage: '',
      options: [],
      currentItem: null,
      currentPage: 1
    };
  },
  mounted: function mounted() {
    this.getitems(this.currentPage);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['items'])),
  methods: {
    getitems: function getitems(page) {
      this.$store.dispatch('getItems', '/feedbacks/all/?page=' + page);
    },
    getoldItems: function getoldItems(page) {
      this.$store.dispatch('getItems', '/feedbacks/old/?page=' + page);
    },
    selectMail: function selectMail(item) {
      this.currentItem = item;
      this.currentItem.email_s = '<' + item.email + '>';
      this.currentItem.admin_email = '<admin@gbinternational.in>';
    },
    redirFeedbackLink: function redirFeedbackLink() {
      this.$router.push('/send-feedback-link');
    },
    postComment: function postComment(id) {
      this.form.id = id;
      this.form.post("/api/feedback/post-comment").then(function (res) {//this.Sending = false;
      })["catch"](function () {});
      this.$toast.fire({
        icon: "success",
        title: "Feedback published on website."
      });
    }
  },
  filters: {
    ratingFilter: function ratingFilter(val) {
      if (val < 3) {
        return 'Not Good';
      } else if (val < 5) {
        return 'OK';
      } else if (val < 7) {
        return 'Good';
      } else if (val < 9) {
        return 'Very Good';
      } else if (val === 9 || val === 10) {
        return 'Excellent';
      }
    },
    ratingFilter2: function ratingFilter2(val) {
      if (val < 3) {
        return 'Not Likely';
      } else if (val < 5) {
        return 'Maybe';
      } else if (val < 7) {
        return 'Quite Likely';
      } else if (val < 9) {
        return 'Yes, Definitely';
      } else if (val === 9 || val === 10) {
        return 'Absolutely';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*[data-v-9fb58476] {\n  box-sizing: border-box;\n  outline: none;\n}\nbody[data-v-9fb58476] {\n  margin: 0;\n  font-family: Sans-serif;\n}\n.feedback-full[data-v-9fb58476] {\n  background-color: #f2f3f7;\n  width: 100%;\n  padding: 8px 30px;\n  display: flex;\n  flex-direction: column;\n}\n.feedback-body[data-v-9fb58476] {\n  flex: 1;\n  display: flex;\n}\n.feedback-container[data-v-9fb58476] {\n  height: 100%;\n  display: flex;\n}\n.mail-left-side[data-v-9fb58476] {\n  width: 40%;\n  height: 100%;\n  overflow: auto;\n  padding: 20px 0px 5px 0px;\n}\n.mail-card[data-v-9fb58476] {\n  background-color: #dad7d79c;\n  border-radius: 21px;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  padding: 15px 15px 15px 15px;\n  transition: 0.3s;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n}\n.mail-card[data-v-9fb58476]:hover {\n  box-shadow: none;\n}\n.mail-names[data-v-9fb58476] {\n  color: #000000b8;\n  font-size: 16px;\n  font-weight: 500;\n}\n.mails[data-v-9fb58476] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mail-info[data-v-9fb58476] {\n  margin: 2px 65px;\n  margin-left: 0px;\n  font-weight: 500;\n  font-size: 12.5px;\n  color: grey;\n}\n.mail-info p[data-v-9fb58476] {\n margin-top: -2.5px;\n margin-bottom: 6px;\n font-size: 15px;\n font-weight: 600;\n}\n.date[data-v-9fb58476] {\n  color: grey;\n  float: right;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mail-right-side[data-v-9fb58476] {\n  margin-left: 35px;\n  flex: 1;\n}\n.mail-right-body[data-v-9fb58476]{\n  background-color: #e1e1e1e1;\n  position: relative;\n  padding: 22px 20px 20px 20px;\n  border-radius: 18px;\n  font-size: 16px;\n  padding-bottom: 150px;\n  margin: 20px 10px;\n  color: #000000b8;\n}\n.message-body[data-v-9fb58476] {\n  overflow: auto;\n  height: 600px;\n  width: 100%;\n  margin-top: 18px;\n  color: black;\n}\n.message-title[data-v-9fb58476] {\n  display: flex;\n  font-size: 14px;\n  font-weight: 500;\n  color: grey;\n}\n.message-title b[data-v-9fb58476]{\n  font-size: 14px;\n  padding-left: 5px;\n  color: #000000b8;\n  font-weight: 700;\n}\n.message-tour-info[data-v-9fb58476]{\n  font-size: 18px;\n  font-weight: 700;\n  color: #7f7a7a;\n  margin-bottom: 21px;\n}\n.mail-right-top[data-v-9fb58476]{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-left: 10px;\n}\n.cButton[data-v-9fb58476] {\n  border-radius: 3px;\n  border: 1px;\n  border-radius: 100px;\n  outline: none;\n}\n.replyButton[data-v-9fb58476] {\n  padding: 12px 38px;\n  margin-top: 20px;\n  color: white;\n  font-size: 19px !important;\n  font-weight: 600;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: #3ebee4;\n}\n.sendLinkButton[data-v-9fb58476]{\n  padding: 7px 38px;\n  margin-top: 12px;\n  color: #3ebee4;\n  font-size: 17px !important;\n  font-weight: 600;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: #f4f6f9;\n  border: solid 2px #3ebee4;\n}\n.attachIcon[data-v-9fb58476]{\n  font-size: 32px; \n  padding-right: 10px; \n  font-weight: 300; \n  color: grey;\n}\n.filter-dd[data-v-9fb58476]{\n  border-radius: 10px; \n  margin-left: 30px;\n}\n.filter-dd2[data-v-9fb58476]{\n  border-radius: 10px;\n}\n.arrow-buttons[data-v-9fb58476]{\n  padding: 5px 20px;\n  border: none;\n  background-color: #dad7d79c;\n  margin-left: 10px;\n}\n.mail-left-top[data-v-9fb58476]{\n  display: flex; \n  flex-direction: row; \n  justify-content: space-between;\n  margin-top: 7px;\n  margin-left: 4px;\n  margin-right: 4px;\n  margin-bottom: 15px;\n}\n.bottom-items[data-v-9fb58476]{\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 20px;\n}\n[data-v-9fb58476]::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n[data-v-9fb58476]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n[data-v-9fb58476]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n/* Handle on hover */\n[data-v-9fb58476]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _vm.items && _vm.items.meta
    ? _c("div", { staticClass: "feedback-container" }, [
        _c("div", { staticClass: "feedback-full" }, [
          _c("div", { staticClass: "feedback-body" }, [
            _c(
              "div",
              { staticClass: "mail-left-side" },
              [
                _c(
                  "div",
                  { staticClass: "mail-left-top" },
                  [
                    _c("div", [
                      _c("button", {
                        staticClass: "fas fa-chevron-left arrow-buttons",
                        attrs: { disabled: _vm.currentPage === 1 },
                        on: {
                          click: function ($event) {
                            return _vm.getitems((_vm.currentPage -= 1))
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("button", {
                        staticClass: "fas fa-chevron-right arrow-buttons",
                        attrs: {
                          disabled: _vm.items.meta.last_page <= _vm.currentPage,
                        },
                        on: {
                          click: function ($event) {
                            return _vm.getitems((_vm.currentPage += 1))
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "filter-dd2",
                        attrs: {
                          id: "dropdown",
                          size: "sm",
                          text:
                            "Page " +
                            _vm.currentPage +
                            " of " +
                            _vm.items.meta.last_page,
                          variant: "",
                        },
                      },
                      [
                        _c(
                          "b-dropdown-item",
                          {
                            staticStyle: { "font-size": "13px" },
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                return _vm.getitems((_vm.currentPage = 1))
                              },
                            },
                          },
                          [_vm._v("Newest")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          {
                            staticStyle: { "font-size": "13px" },
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                return _vm.getoldItems((_vm.currentPage = 1))
                              },
                            },
                          },
                          [_vm._v("Oldest")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._l(_vm.items.data, function (item) {
                  return _c(
                    "div",
                    {
                      key: item.id,
                      staticClass: "mail-card",
                      style: _vm.currentItem == item ? "box-shadow: none;" : "",
                      on: {
                        click: function ($event) {
                          return _vm.selectMail(item)
                        },
                      },
                    },
                    [
                      _c("div", { staticClass: "mails" }, [
                        _c(
                          "div",
                          {
                            staticClass: "mail-names",
                            staticStyle: { clear: "both" },
                          },
                          [
                            _c("b", [_vm._v(_vm._s(item.name))]),
                            _vm._v(
                              ", +91" + _vm._s(item.ph_no) + "\n            "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "date" }, [
                          _vm._v(_vm._s(item.time)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mail-info" },
                        [
                          _c("p", [_vm._v("From: " + _vm._s(item.email))]),
                          _vm._v(" "),
                          _c("p2", [
                            _vm._v(
                              _vm._s(item.days) +
                                " Tour to " +
                                _vm._s(item.itinerary_name)
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]
                  )
                }),
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mail-right-side" }, [
              _c("div", { staticClass: "mail-right-top" }, [
                _c(
                  "button",
                  {
                    staticClass: "cButton sendLinkButton",
                    on: { click: _vm.redirFeedbackLink },
                  },
                  [_vm._v("Send Feedback Link")]
                ),
              ]),
              _vm._v(" "),
              _vm.currentItem
                ? _c("div", { staticClass: "mail-right-body" }, [
                    _c("div", { staticClass: "message-title" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            _vm._s(_vm.currentItem.name.toUpperCase()) +
                              " " +
                              _vm._s(_vm.currentItem.email_s)
                          ),
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _c("b", [
                          _vm._v("GBI " + _vm._s(_vm.currentItem.admin_email)),
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _c("b", [_vm._v(_vm._s(_vm.currentItem.fullDate))]),
                        _vm._v(" "),
                        _c("br"),
                        _c("b", [
                          _vm._v("+91 " + _vm._s(_vm.currentItem.ph_no)),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "message-body" }, [
                      _c("p", { staticClass: "message-tour-info" }, [
                        _vm._v(
                          _vm._s(_vm.currentItem.days) +
                            " Tour to " +
                            _vm._s(_vm.currentItem.itinerary_name)
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "font-size: 15px; color: black;" },
                        [
                          _c("b", [
                            _vm._v(
                              "Q1: Did you like the Itinerary of this trip?"
                            ),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "Ans: " +
                              _vm._s(
                                _vm._f("ratingFilter")(
                                  _vm.currentItem.trip_itenerary
                                )
                              ) +
                              "\n            "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v("Q2: How Would You Rate Your Place Of Stay?"),
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "Ans: " +
                            _vm._s(
                              _vm._f("ratingFilter")(
                                _vm.currentItem.place_of_stay
                              )
                            ) +
                            "\n            "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            "Q3: How Would You Rate the food quality and service?"
                          ),
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "Ans: " +
                            _vm._s(
                              _vm._f("ratingFilter")(
                                _vm.currentItem.food_quality
                              )
                            ) +
                            "\n            "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            "Q4: How were your Transportation and other arrangements?"
                          ),
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "Ans: " +
                            _vm._s(
                              _vm._f("ratingFilter")(
                                _vm.currentItem.transport_arrangements
                              )
                            ) +
                            "\n            "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            "Q5: How likely would you Recommend GB International To Others?"
                          ),
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "Ans: " +
                            _vm._s(
                              _vm._f("ratingFilter2")(
                                _vm.currentItem.recommend_to_others
                              )
                            ) +
                            "\n            "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            "Q6: Would you like to Travel with GBI again on a new Journey?"
                          ),
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "Ans: " +
                            _vm._s(
                              _vm._f("ratingFilter2")(
                                _vm.currentItem.travel_again
                              )
                            ) +
                            "\n            "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            "Q7: How hospitable was our GBI Escort who accompanied with you on this trip?"
                          ),
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "Ans: " +
                            _vm._s(
                              _vm._f("ratingFilter")(
                                _vm.currentItem.escort_hospitality
                              )
                            ) +
                            "\n            "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticStyle: { "margin-top": "25px" } }, [
                        _c("b", [_vm._v("Comment")]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticStyle: {
                              float: "right",
                              "font-weight": "500",
                              "text-decoration": "underline",
                            },
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                return _vm.postComment(_vm.currentItem.id)
                              },
                            },
                          },
                          [_vm._v("Post Comment")]
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          _vm._s(_vm.currentItem.comments) + "\n            "
                        ),
                      ]),
                    ]),
                  ])
                : _c("div", {
                    staticClass: "mail-right-body",
                    staticStyle: { height: "80vh" },
                  }),
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
    return _c("p", [
      _vm._v("\n              From: \n              "),
      _c("br"),
      _vm._v("To:\n              "),
      _c("br"),
      _vm._v("Date:\n              "),
      _c("br"),
      _vm._v("Mobile:\n             "),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/feedback/feedback-list.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/pages/feedback/feedback-list.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-list.vue?vue&type=template&id=9fb58476&scoped=true& */ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true&");
/* harmony import */ var _feedback_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback-list.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& */ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _feedback_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9fb58476",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/feedback/feedback-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedback-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedback-list.vue?vue&type=template&id=9fb58476&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);