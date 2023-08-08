(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/JobApps"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      currentPage: 1,
      ShareModal: false,
      shareName: '',
      shareEmail: ''
    };
  },
  mounted: function mounted() {
    this.getitems(this.currentPage);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['items'])),
  methods: {
    redirMeet: function redirMeet() {
      window.open('https://meet.google.com');
    },
    redirPdf: function redirPdf(link) {
      window.open(link);
    },
    showShare: function showShare() {
      this.ShareModal = true;
    },
    shareApplication: function shareApplication() {
      if (this.shareName == '' || this.shareEmail == '') {
        return this.$toast.fire({
          icon: "error",
          title: "Fields empty."
        });
      } else {
        this.shareName = '';
        this.shareEmail = '';
        this.$toast.fire({
          icon: "success",
          title: "Resume Sent."
        });
      }
    },
    saveAppStatus: function saveAppStatus(status, id) {
      var _this = this;

      axios.post("/api/job-application/save-status", {
        status: status,
        id: id
      }).then(function (res) {
        //this.Sending = false;
        _this.$toast.fire({
          icon: "success",
          title: "Staus Changed."
        });
      });
    },
    getitems: function getitems(page) {
      this.$store.dispatch('getItems', '/job-applications/all/?page=' + page);
    },
    getoldItems: function getoldItems(page) {
      this.$store.dispatch('getItems', '/job-applications/old/?page=' + page);
    },
    selectMail: function selectMail(item) {
      this.currentItem = item;
      this.currentItem.email_s = '<' + item.email + '>';
      this.currentItem.admin_email = '<admin@gbinternational.in>';
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*[data-v-e017aa0c] {\n  box-sizing: border-box;\n  outline: none;\n}\nbody[data-v-e017aa0c] {\n  margin: 0;\n  font-family: Sans-serif;\n}\n.feedback-full[data-v-e017aa0c] {\n  background-color: #f2f3f7;\n  width: 100%;\n  padding: 8px 30px;\n  display: flex;\n  flex-direction: column;\n}\n.feedback-body[data-v-e017aa0c] {\n  flex: 1;\n  display: flex;\n}\n.feedback-container[data-v-e017aa0c] {\n  height: 100%;\n  display: flex;\n}\n.mail-left-side[data-v-e017aa0c] {\n  width: 40%;\n  height: 100%;\n  overflow: auto;\n  padding: 20px 0px 5px 0px;\n}\n.mail-card[data-v-e017aa0c] {\n  background-color: #dad7d79c;\n  border-radius: 21px;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  padding: 15px 15px 15px 15px;\n  transition: 0.3s;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n}\n.mail-card[data-v-e017aa0c]:hover {\n  box-shadow: none;\n}\n.customCard[data-v-e017aa0c]{\n  height: 12vh;\n  width: 12vh;\n}\n.customImg[data-v-e017aa0c]{\n  height: 100%;\n  width: 100%;\n}\n.cardTitle[data-v-e017aa0c]{\n  color: #1d1f21;\n  margin: 4vh 0vh -0.06vh 0vh;\n  font-size: 14px;\n  font-weight: 500;\n}\n.cardCText[data-v-e017aa0c]{\n  width: 100%;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: grey;\n}\n.mail-names[data-v-e017aa0c] {\n  color: #000000b8;\n  font-size: 16px;\n  font-weight: 500;\n}\n.mails[data-v-e017aa0c] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.userInfo[data-v-e017aa0c] {\n  margin: 2px 20px;\n  margin-left: 0px;\n  font-size: 15px;\n  color: #1d1f21;\n}\n.details_1[data-v-e017aa0c]{\n  font-weight: 500;\n}\n.details_2[data-v-e017aa0c]{\n  font-weight: 700;\n}\ninput[type='text'][data-v-e017aa0c], input[type='email'][data-v-e017aa0c]{\n  border: 0px;\n  font-size: 14px;\n  background-color: #f6f6f6 !important;\n  color: #737879;\n  width: 105%;\n  height: 3.7vh;\n}\n.mail-info[data-v-e017aa0c] {\n  margin: 2px 65px;\n  margin-left: 0px;\n  font-weight: 500;\n  font-size: 12.5px;\n  color: grey;\n}\n.mail-info p[data-v-e017aa0c] {\n margin-top: -2.5px;\n margin-bottom: 6px;\n font-size: 15px;\n font-weight: 600;\n}\n.date[data-v-e017aa0c] {\n  color: grey;\n  float: right;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mail-right-side[data-v-e017aa0c] {\n  margin-left: 35px;\n  flex: 1;\n}\n.mail-right-body[data-v-e017aa0c]{\n  background-color: #e1e1e1e1;\n  position: relative;\n  padding: 22px 20px 20px 20px;\n  border-radius: 18px;\n  font-size: 16px;\n  padding-bottom: 100px;\n  margin: 20px 10px;\n  color: #000000b8;\n}\n.topDiv[data-v-e017aa0c] {\n  margin-top: -0.5vh;\n}\n.message-body[data-v-e017aa0c] {\n  overflow: auto;\n  height: 450px;\n  width: 100%;\n  margin-top: 18px;\n  color: black;\n}\n.messages-Details[data-v-e017aa0c]{\n    display: flex;\n    color: grey;\n}\n.message-title[data-v-e017aa0c] {\n  display: flex;\n  font-size: 14px;\n  font-weight: 500;\n  color: grey;\n}\n.message-title b[data-v-e017aa0c]{\n  font-size: 14px;\n  padding-left: 5px;\n  color: #000000b8;\n  font-weight: 700;\n}\n.message-tour-info[data-v-e017aa0c]{\n  font-size: 18px;\n  font-weight: 700;\n  color: #7f7a7a;\n  margin-bottom: 21px;\n}\n.mail-right-top[data-v-e017aa0c]{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-left: 10px;\n}\n.cButton[data-v-e017aa0c] {\n  border-radius: 3px;\n  border: 1px;\n  border-radius: 100px;\n  outline: none;\n}\n.replyButton[data-v-e017aa0c] {\n  padding: 6px 32px;\n  margin-top: 20px;\n  margin-right: 15px;\n  color: white;\n  font-size: 15px !important;\n  font-weight: 600;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: #3ebee4;\n}\n.sendButton[data-v-e017aa0c]{\n  padding: 6px 20px;\n  margin-right: 7px;\n  color: white;\n  font-size: 14px !important;\n  font-weight: 500;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: #3ebee4;\n}\n.meetButton[data-v-e017aa0c]{\n  padding: 6px 20px;\n  margin-top: 20px;\n  margin-right: 15px;\n  color: #3ebee4;\n  border: 2px solid #3ebee4;\n  font-size: 15px !important;\n  font-weight: 700;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: white;\n}\n.feedbackButton[data-v-e017aa0c]{\n  padding: 6px 20px;\n  margin-top: 20px;\n  margin-right: 15px;\n  color: #3ebee4;\n  border: 2px solid #3ebee4;\n  font-size: 15px !important;\n  font-weight: 700;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: white;\n}\n.sendLinkButton[data-v-e017aa0c]{\n  padding: 7px 38px;\n  margin-top: 12px;\n  color: #3ebee4;\n  font-size: 17px !important;\n  font-weight: 600;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: #f4f6f9;\n  border: solid 2px #3ebee4;\n}\n.attachIcon[data-v-e017aa0c]{\n  font-size: 32px; \n  padding-right: 10px; \n  font-weight: 300; \n  color: grey;\n}\n.filter-dd[data-v-e017aa0c]{\n  border-radius: 10px; \n  margin-left: 30px;\n}\n.filter-dd2[data-v-e017aa0c]{\n  border-radius: 10px;\n}\n.arrow-buttons[data-v-e017aa0c]{\n  padding: 5px 20px;\n  border: none;\n  background-color: #dad7d79c;\n  margin-left: 10px;\n}\n.mail-left-top[data-v-e017aa0c]{\n  display: flex; \n  flex-direction: row; \n  justify-content: space-between;\n  margin-top: 7px;\n  margin-left: 4px;\n  margin-right: 4px;\n  margin-bottom: 15px;\n}\n.bottom-items[data-v-e017aa0c]{\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 20px;\n}\n.customSelButton[data-v-e017aa0c] {\n  border: 1px solid grey;\n  padding: 2px;\n  border-radius: 25px;\n  padding-left: 7px;\n  font-size: 14px;\n}\n.PendingColor[data-v-e017aa0c]{\n  color: grey !important;\n}\n.SelectionColor[data-v-e017aa0c]{\n  color: orange !important;\n}\n.HiredColor[data-v-e017aa0c]{\n  color: green !important;\n}\n.RejectedColor[data-v-e017aa0c]{\n  color: red !important;\n}\n.customDiv[data-v-e017aa0c]{\n  background: #e5e5e5;\n  border: 1px solid #e5e5e5;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 15px;\n  padding-bottom: 45px !important;\n  padding-top: 35px !important;\n  margin-top: -5vh;\n}\n.customDiv input[type='text'][data-v-e017aa0c], input[type='email'][data-v-e017aa0c]{\n  border: 1px solid #d2d2d2;\n  background-color: white;\n  border-radius: 25px;\n}\n[data-v-e017aa0c]::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n[data-v-e017aa0c]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n[data-v-e017aa0c]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n/* Handle on hover */\n[data-v-e017aa0c]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true& ***!
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
                            _c("b", [
                              _vm._v(
                                _vm._s(item.firstname) +
                                  " " +
                                  _vm._s(item.lastname)
                              ),
                            ]),
                            _vm._v(
                              ", +91" +
                                _vm._s(item.contactno) +
                                "\n            "
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
                              _vm._s(item.applyingfor) +
                                " (" +
                                _vm._s(item.status) +
                                ")"
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
              _vm.currentItem
                ? _c("div", { staticClass: "mail-right-body" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-between topDiv" },
                      [
                        _c("div", { staticClass: "message-title" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("p", [
                            _c("b", [
                              _vm._v(
                                _vm._s(_vm.currentItem.firstname) +
                                  " " +
                                  _vm._s(_vm.currentItem.email_s)
                              ),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _c("b", [
                              _vm._v(
                                "GBI " + _vm._s(_vm.currentItem.admin_email)
                              ),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _c("b", [_vm._v(_vm._s(_vm.currentItem.fullDate))]),
                            _vm._v(" "),
                            _c("br"),
                            _c("b", [
                              _vm._v(
                                "+91 " + _vm._s(_vm.currentItem.contactno)
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("p", { staticClass: "cardTitle mt-0 ml-2" }, [
                            _vm._v("Status: "),
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.currentItem.status,
                                  expression: "currentItem.status",
                                },
                              ],
                              staticClass: "customSelButton mb-4",
                              class: _vm.currentItem.status + "Color",
                              attrs: { "aria-label": "application status" },
                              on: {
                                change: [
                                  function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.currentItem,
                                      "status",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function ($event) {
                                    return _vm.saveAppStatus(
                                      _vm.currentItem.status,
                                      _vm.currentItem.id
                                    )
                                  },
                                ],
                              },
                            },
                            [
                              _c(
                                "option",
                                {
                                  staticClass: "mx-4",
                                  staticStyle: { color: "grey" },
                                },
                                [_vm._v("Pending")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  staticClass: "mx-4",
                                  staticStyle: { color: "orange" },
                                },
                                [_vm._v("Selection")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  staticClass: "mx-4",
                                  staticStyle: { color: "green" },
                                },
                                [_vm._v("Hired")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  staticClass: "mx-4",
                                  staticStyle: { color: "red" },
                                },
                                [_vm._v("Rejected")]
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "message-body" }, [
                      _c("p", { staticClass: "message-tour-info" }, [
                        _vm._v(
                          "Applying for " + _vm._s(_vm.currentItem.applyingfor)
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "messages-Details" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("div", { staticClass: "details_2" }, [
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.currentItem.email) +
                                "\n                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.currentItem.firstname) +
                                " " +
                                _vm._s(_vm.currentItem.lastname) +
                                "\n                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\n                  +91 " +
                                _vm._s(_vm.currentItem.contactno) +
                                "\n                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.currentItem.current_company) +
                                "\n                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.currentItem.job_exp) +
                                "\n                "
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm.currentItem.link
                        ? _c("div", { staticClass: "attachments" }, [
                            _c("p", { staticClass: "cardTitle" }, [
                              _vm._v("Attachments"),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "card customCard cursor-pointer",
                                on: {
                                  click: function ($event) {
                                    return _vm.redirPdf(_vm.currentItem.link)
                                  },
                                },
                              },
                              [
                                _c("img", {
                                  staticClass: "card-img-top customImg",
                                  attrs: {
                                    src: "https://cdn.pixabay.com/photo/2012/04/02/16/55/adobe-24943_960_720.png",
                                    alt: "attachment Image",
                                  },
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "card-body" }),
                              ]
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _vm.ShareModal
                      ? _c("div", { staticClass: "customDiv mx-2" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-start align-items-end flex-column",
                              staticStyle: {
                                "margin-top": "-2.3vh",
                                "margin-right": "12px",
                              },
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-times cursor-pointer",
                                on: {
                                  click: function ($event) {
                                    _vm.ShareModal = false
                                  },
                                },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row py-2 mx-1" }, [
                            _c("div", { staticClass: "col-md-5" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.shareName,
                                    expression: "shareName",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", placeholder: "Name" },
                                domProps: { value: _vm.shareName },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.shareName = $event.target.value
                                  },
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-5" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.shareEmail,
                                    expression: "shareEmail",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "email",
                                  placeholder: "Email ID",
                                },
                                domProps: { value: _vm.shareEmail },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.shareEmail = $event.target.value
                                  },
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "cButton sendButton",
                                  on: { click: _vm.shareApplication },
                                },
                                [_vm._v("Send")]
                              ),
                            ]),
                          ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "bottom-items" }, [
                      _c(
                        "button",
                        {
                          staticClass: "cButton meetButton",
                          on: {
                            click: function ($event) {
                              return _vm.redirMeet()
                            },
                          },
                        },
                        [_vm._v("Meeting Scheduler")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "cButton replyButton",
                          on: { click: _vm.showShare },
                        },
                        [_vm._v("Share")]
                      ),
                    ]),
                  ])
                : _c("div", {
                    staticClass: "mail-right-body",
                    staticStyle: { height: "70vh" },
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
      _vm._v("\n                From: \n                "),
      _c("br"),
      _vm._v("To:\n                "),
      _c("br"),
      _vm._v("Date:\n                "),
      _c("br"),
      _vm._v("Mobile:\n               "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "details_1" }, [
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\n                  Email Id:\n                "),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\n                  Applicant Name:\n                "),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\n                  Mobile Number:\n                "),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\n                  Current Company:\n                "),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\n                  Work Experience:\n                "),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/jobs/Applications/List.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Applications/List.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=e017aa0c&scoped=true& */ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& */ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e017aa0c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/jobs/Applications/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=e017aa0c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);