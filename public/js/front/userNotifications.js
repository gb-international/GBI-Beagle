(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/userNotifications"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/Notifications/panel.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/Notifications/panel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import pagination  from 'laravel-vue-pagination';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FeedbackList",
  components: {//'pagination':pagination,
  },
  data: function data() {
    return {
      notif_list: [],
      filter: '',
      perPage: '',
      options: [],
      currentItem: null,
      currentPage: 1,
      rightDisplay: '',
      leftDisplay: '',
      windowHeight: window.innerHeight,
      listType: 'all',
      userData: '',
      sortType: 'All'
    };
  },
  watch: {
    windowHeight: function windowHeight(newHeight, oldHeight) {
      this.rightDisplay = '';
      this.leftDisplay = '';
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  mounted: function mounted() {
    var _this = this;

    this.userData = this.$cookies.get("user");
    this.getList(this.currentPage); //console.log(this.userData)

    this.$nextTick(function () {
      window.addEventListener('resize', _this.onResize);
    });
  },
  methods: {
    changeSort: function changeSort(sort) {
      this.sortType = sort;
      this.currentPage = 1;
      this.getList(this.currentPage);
    },
    changeList: function changeList(listType) {
      this.listType = listType;
      this.currentPage = 1;
      this.getList(this.currentPage);
    },
    onResize: function onResize() {
      this.windowHeight = window.innerHeight;
    },
    getList: function getList(page) {
      var _this2 = this;

      this.$axios.get("/api/user-notifs/" + this.userData.id + "/" + this.sortType.toLowerCase() + "/" + this.listType + "?page=" + page).then(function (response) {
        _this2.notif_list = response.data; //this.selectNotif(this.notif_list.data[0])
      });
    },
    selectNotif: function selectNotif(item) {
      this.currentItem = item;
      this.currentItem.email_s = '<' + item.email + '>';
      this.currentItem.admin_email = '<admin@gbinternational.in>';
    },
    markRead: function markRead(item) {
      var _this3 = this;

      if (item.read == 0) {
        this.$axios.post("/api/notification/mark-read", {
          'id': item.id
        }, {
          headers: {
            Authorization: "Bearer ".concat(localStorage.token)
          }
        }).then(function (response) {
          //console.log(response.data)
          //this.userData.notifCount = response.data;
          //this.$cookies.set('user',this.userData);
          _this3.$store.commit("notifCount", response.data);
        });
        item.read = 1;
      }
    },
    redirNotif: function redirNotif(item) {
      var _this4 = this;

      if (item.read == 0) {
        this.$axios.post("/api/notification/mark-read", {
          'id': item.id
        }, {
          headers: {
            Authorization: "Bearer ".concat(localStorage.token)
          }
        }).then(function (response) {
          //console.log(response.data);
          _this4.userData.notifCount = response.data;

          _this4.$cookies.set('user', _this4.userData);
        });
        item.read = 1;
      }

      this.rightDisplay = 'inline';
      this.leftDisplay = 'none';
      this.currentItem = item;
      this.currentItem.email_s = '<' + item.email + '>';
      this.currentItem.admin_email = '<admin@gbinternational.in>';
    },
    redirList: function redirList() {
      this.rightDisplay = 'none';
      this.leftDisplay = 'inline';
    }
  },
  filters: {
    /*htmlFilter(val) {
       if(val.length > 50){
         return val.replace(/(<([^>]+)>)/gi, "").slice(0,50)+'...';
       } else {
           return val.replace(/(<([^>]+)>)/gi, "");
       }
     },*/
    htmlFilter: function htmlFilter(val) {
      return val.replace(/(<([^>]+)>)/gi, "");
    },
    contentFilter: function contentFilter(val) {
      if (val == 'itinerary') {
        return 'our newly added itinerary';
      } else if (val == 'blog') {
        return 'our new blog post';
      } else if (val == 'travel') {
        return 'the new updates for your recent travel booking';
      } else if (val == 'payment') {
        return 'your recent payment activity';
      } else if (val == 'website') {
        return 'our website alert';
      } else {
        return 'our newly added ' + val;
      }
    },
    subjectFilter: function subjectFilter(val) {
      if (val == 'itinerary') {
        return 'New itinerary from GBI';
      } else if (val == 'blog') {
        return 'New blog from GBI';
      } else if (val == 'travel') {
        return 'New travel update from GBI';
      } else if (val == 'website') {
        return 'New website alert from GBI';
      } else if (val == 'payment') {
        return 'New payment update from GBI';
      } else {
        return 'New updates from GBI';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/Notifications/panel.vue?vue&type=style&index=0&id=c7aa8a70&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/Notifications/panel.vue?vue&type=style&index=0&id=c7aa8a70&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*[data-v-c7aa8a70] {\n  box-sizing: border-box;\n  outline: none;\n  background: white;\n}\nbody[data-v-c7aa8a70] {\n  margin: 0;\n  font-family: Sans-serif;\n}\n.logo-img[data-v-c7aa8a70]{\n      height: 70px;\n      margin-right: 2%;\n      width: auto\n}\n.PageTitle[data-v-c7aa8a70]{\n  text-align: center;\n  font-size: 25px;\n  padding: 30px 0px 5px 0px;\n  font-weight: 550;\n}\n.feedback-full[data-v-c7aa8a70] {\n  background-color: white;\n  width: 100%;\n  padding: 8px 30px;\n  display: flex;\n  flex-direction: column;\n}\n.feedback-body[data-v-c7aa8a70] {\n  flex: 1;\n  display: flex;\n  margin: 0 auto;\n  width: 80%;\n}\n.message-top[data-v-c7aa8a70]{\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.feedback-container[data-v-c7aa8a70] {\n  height: 100%;\n  display: flex;\n}\n.mail-left-side[data-v-c7aa8a70] {\n  width: 40%;\n  height: 100%;\n  overflow: auto;\n  padding: 20px 0px 5px 0px;\n}\n.mail-left-side-m[data-v-c7aa8a70]{\n  width: 40%;\n  height: 100%;\n  overflow: auto;\n  padding: 5px 0px 5px 0px;\n  display: none;\n}\n.mail-card[data-v-c7aa8a70] {\n  background-color: white;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  padding: 15px 15px 15px 15px;\n  transition: 0.3s;\n  border: 1px solid;\n  border-left: 5px solid;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n}\n.mail-card[data-v-c7aa8a70]:hover {\n  box-shadow: none;\n}\n.mail-names[data-v-c7aa8a70] {\n  color: #000000b8;\n  font-size: 16px;\n  font-weight: 500;\n}\n.mails[data-v-c7aa8a70] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mail-info[data-v-c7aa8a70] {\n  margin: 2px 65px;\n  margin-left: 0px;\n  font-weight: 500;\n  font-size: 12.5px;\n  color: grey;\n}\n.mail-info p[data-v-c7aa8a70] {\n margin-top: -2.5px;\n margin-bottom: 6px;\n font-size: 15px;\n font-weight: 600;\n}\n.date[data-v-c7aa8a70] {\n  color: grey;\n  float: right;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mail-right-side[data-v-c7aa8a70] {\n  margin-top: 35px;\n  margin-left: 35px;\n  flex: 1;\n}\n.mail-right-body[data-v-c7aa8a70]{\n  background-color: white;\n  position: relative;\n  padding: 22px 20px 20px 20px;\n  font-size: 16px;\n  padding-bottom: 15px;\n  margin: 20px 10px;\n  color: #000000b8;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n}\n.message-body[data-v-c7aa8a70] {\n  overflow: auto;\n  height: auto;\n  width: 100%;\n  margin-top: 18px;\n  color: black;\n}\n.message-title[data-v-c7aa8a70] {\n  display: flex;\n  font-size: 14px;\n  font-weight: 500;\n  color: grey;\n}\n.message-title b[data-v-c7aa8a70]{\n  font-size: 14px;\n  padding-left: 5px;\n  color: #000000b8;\n  font-weight: 700;\n}\n.message-tour-info[data-v-c7aa8a70]{\n  font-size: 16px;\n  font-weight: 500;\n  color: #1f1c1c;\n  margin-bottom: 21px;\n}\n.mail-right-top[data-v-c7aa8a70]{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-left: 10px;\n}\n.cButton[data-v-c7aa8a70] {\n  border-radius: 3px;\n  border: 1px;\n  border-radius: 100px;\n  outline: none;\n}\n.replyButton[data-v-c7aa8a70] {\n  padding: 12px 38px;\n  margin-top: 20px;\n  color: white;\n  font-size: 19px !important;\n  font-weight: 600;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: #3ebee4;\n}\n.sendLinkButton[data-v-c7aa8a70]{\n  padding: 7px 38px;\n  margin-top: 12px;\n  color: #3ebee4;\n  font-size: 17px !important;\n  font-weight: 600;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: #f4f6f9;\n  border: solid 2px #3ebee4;\n}\n.attachIcon[data-v-c7aa8a70]{\n  font-size: 32px; \n  padding-right: 10px; \n  font-weight: 300; \n  color: grey;\n}\n.filter-dd[data-v-c7aa8a70]{\n  border-radius: 10px; \n  margin-left: 30px;\n}\n.filter-dd2[data-v-c7aa8a70]{\n  border-radius: 10px;\n}\n.arrow-buttons[data-v-c7aa8a70]{\n  padding: 5px 20px;\n  border: none;\n  background-color: white;\n  margin-left: 10px;\n}\n.mail-left-top[data-v-c7aa8a70]{\n  display: flex; \n  flex-direction: row; \n  justify-content: space-between;\n  margin-top: 7px;\n  margin-left: 4px;\n  margin-right: 4px;\n  margin-bottom: 15px;\n}\n.bottom-items[data-v-c7aa8a70]{\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 20px;\n}\n.customButton[data-v-c7aa8a70]{\n  display: none;\n}\n.ReadStatus[data-v-c7aa8a70]{\n  font-weight: 500; \n  font-size: 11px; \n  text-align: center; \n  border: solid 1px;\n}\n[data-v-c7aa8a70]::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n[data-v-c7aa8a70]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n[data-v-c7aa8a70]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n/* Handle on hover */\n[data-v-c7aa8a70]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n@media only screen and (max-width: 1024px) {\n.feedback-body[data-v-c7aa8a70] {\n    width: 90%;\n}\n}\n@media only screen and (max-width: 823px) {\n.logo-img[data-v-c7aa8a70]{\n      height: 45px;\n      margin-right: 1px;\n      margin-top: -15px;\n}\n.feedback-body[data-v-c7aa8a70] {\n    width: 100%;\n}\n.feedback-full[data-v-c7aa8a70] {\n    padding: 8px 30px;\n}\n.mail-right-body[data-v-c7aa8a70]{\n    margin: 20px 0px;\n}\n.mail-right-side[data-v-c7aa8a70] {\n    margin-left: 0px;\n    width: 100%;\n    display: none;\n    margin-top: 0px;\n}\n.mail-left-side[data-v-c7aa8a70] {\n    width: 100%;\n    display: none;\n}\n.mail-left-side-m[data-v-c7aa8a70] {\n    width: 100%;\n    display: inline;\n}\n.customButton[data-v-c7aa8a70] {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8;\n    display: inline;\n}\n.PageTitle[data-v-c7aa8a70]{\n    font-size: 20px;\n    padding: 18px 0px 5px 0px;\n}\n.mail-info[data-v-c7aa8a70] {\n    margin: 2px 65px;\n    margin-left: 0px;\n    font-weight: 500;\n    font-size: 11px;\n    color: grey;\n}\n.mail-info p[data-v-c7aa8a70] {\n   margin-top: -2.5px;\n   margin-bottom: 6px;\n   font-size: 12px;\n   font-weight: 600;\n}\n.mail-names[data-v-c7aa8a70] {\n    color: #000000b8;\n    font-size: 13px;\n    font-weight: 500;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/Notifications/panel.vue?vue&type=style&index=0&id=c7aa8a70&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/Notifications/panel.vue?vue&type=style&index=0&id=c7aa8a70&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./panel.vue?vue&type=style&index=0&id=c7aa8a70&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/Notifications/panel.vue?vue&type=style&index=0&id=c7aa8a70&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/Notifications/panel.vue?vue&type=template&id=c7aa8a70&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/Notifications/panel.vue?vue&type=template&id=c7aa8a70&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", [
    _c("h1", { staticClass: "PageTitle" }, [_vm._v("Notification Panel")]),
    _vm._v(" "),
    _vm.notif_list && _vm.notif_list.meta
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
                      _c(
                        "div",
                        [
                          _c("button", {
                            staticClass: "fas fa-chevron-left arrow-buttons",
                            attrs: { disabled: _vm.currentPage === 1 },
                            on: {
                              click: function ($event) {
                                return _vm.getList((_vm.currentPage -= 1))
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("button", {
                            staticClass: "fas fa-chevron-right arrow-buttons",
                            attrs: {
                              disabled:
                                _vm.notif_list.meta.last_page <=
                                _vm.currentPage,
                            },
                            on: {
                              click: function ($event) {
                                return _vm.getList((_vm.currentPage += 1))
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "filter-dd",
                              attrs: {
                                id: "dropdown",
                                size: "sm",
                                text: _vm.sortType,
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
                                      return _vm.changeSort("All")
                                    },
                                  },
                                },
                                [_vm._v("All")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  staticStyle: { "font-size": "13px" },
                                  attrs: { href: "#" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.changeSort("Read")
                                    },
                                  },
                                },
                                [_vm._v("Read")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  staticStyle: { "font-size": "13px" },
                                  attrs: { href: "#" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.changeSort("Unread")
                                    },
                                  },
                                },
                                [_vm._v("Unread")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
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
                              _vm.notif_list.meta.last_page,
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
                                  return _vm.changeList("all")
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
                                  return _vm.changeList("old")
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
                  _vm._l(_vm.notif_list.data, function (item) {
                    return _c(
                      "div",
                      {
                        key: item.id,
                        staticClass: "mail-card",
                        style: { "border-color": item.color },
                        on: {
                          click: function ($event) {
                            _vm.selectNotif(item)
                            _vm.markRead(item)
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
                                  _vm._s(_vm._f("subjectFilter")(item.category))
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "date" }, [
                            _vm._v(_vm._s(item.time)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mails" }, [
                          _c(
                            "div",
                            { staticClass: "mail-info" },
                            [
                              _c("p", [
                                _vm._v("From: admin@gbinternational.in"),
                              ]),
                              _vm._v(" "),
                              _c("p2", [
                                _vm._v(
                                  "Dear " +
                                    _vm._s(_vm.userData.name) +
                                    ", please check out " +
                                    _vm._s(
                                      _vm._f("contentFilter")(item.category)
                                    ) +
                                    "..."
                                ),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("img", {
                              attrs: {
                                src:
                                  _vm.$gbiAssets +
                                  "/assets/front/icons/" +
                                  item.badge +
                                  ".png",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "ReadStatus",
                                style:
                                  item.read == 0
                                    ? "border-color: black; color: black"
                                    : "border-color: " +
                                      item.color +
                                      "; color: " +
                                      item.color,
                              },
                              [
                                _vm._v(
                                  _vm._s(item.read == 0 ? "Unread" : "Read")
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ]
                    )
                  }),
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "mail-left-side-m",
                  style: { display: _vm.leftDisplay },
                },
                [
                  _c(
                    "div",
                    { staticClass: "mail-left-top" },
                    [
                      _c(
                        "div",
                        [
                          _c("button", {
                            staticClass: "fas fa-chevron-left arrow-buttons",
                            attrs: { disabled: _vm.currentPage === 1 },
                            on: {
                              click: function ($event) {
                                return _vm.getList((_vm.currentPage -= 1))
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("button", {
                            staticClass: "fas fa-chevron-right arrow-buttons",
                            attrs: {
                              disabled:
                                _vm.notif_list.meta.last_page <=
                                _vm.currentPage,
                            },
                            on: {
                              click: function ($event) {
                                return _vm.getList((_vm.currentPage += 1))
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "b-dropdown",
                            {
                              staticClass: "filter-dd",
                              attrs: {
                                id: "dropdown",
                                size: "sm",
                                text: _vm.sortType,
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
                                      return _vm.changeSort("All")
                                    },
                                  },
                                },
                                [_vm._v("All")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  staticStyle: { "font-size": "13px" },
                                  attrs: { href: "#" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.changeSort("Read")
                                    },
                                  },
                                },
                                [_vm._v("Read")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-dropdown-item",
                                {
                                  staticStyle: { "font-size": "13px" },
                                  attrs: { href: "#" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.changeSort("Unread")
                                    },
                                  },
                                },
                                [_vm._v("Unread")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
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
                              _vm.notif_list.meta.last_page,
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
                                  return _vm.changeList("all")
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
                                  return _vm.changeList("old")
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
                  _vm._l(_vm.notif_list.data, function (item) {
                    return _c(
                      "div",
                      {
                        key: item.id,
                        staticClass: "mail-card",
                        style: { "border-color": item.color },
                        on: {
                          click: function ($event) {
                            _vm.redirNotif(item)
                            _vm.markRead(item)
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
                                  _vm._s(_vm._f("subjectFilter")(item.category))
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "date" }, [
                            _vm._v(_vm._s(item.time)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mails" }, [
                          _c(
                            "div",
                            { staticClass: "mail-info" },
                            [
                              _c("p", [_vm._v("admin@gbinternational.in")]),
                              _vm._v(" "),
                              _c("p2", [
                                _vm._v(
                                  "Dear " +
                                    _vm._s(_vm.userData.name) +
                                    ", please check out " +
                                    _vm._s(
                                      _vm._f("contentFilter")(item.category)
                                    ) +
                                    "..."
                                ),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("img", {
                              attrs: {
                                src:
                                  _vm.$gbiAssets +
                                  "/assets/front/icons/" +
                                  item.badge +
                                  ".png",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass: "ReadStatus",
                                style:
                                  item.read == 0
                                    ? "border-color: black; color: black"
                                    : "border-color: " +
                                      item.color +
                                      "; color: " +
                                      item.color,
                              },
                              [
                                _vm._v(
                                  _vm._s(item.read == 0 ? "Unread" : "Read")
                                ),
                              ]
                            ),
                          ]),
                        ]),
                      ]
                    )
                  }),
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "mail-right-side",
                  style: { display: _vm.rightDisplay },
                },
                [
                  _c("div", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info customButton",
                        on: { click: _vm.redirList },
                      },
                      [_vm._v("Back")]
                    ),
                  ]),
                  _vm._v(" "),
                  _vm.currentItem
                    ? _c("div", { staticClass: "mail-right-body" }, [
                        _c("div", { staticClass: "message-top" }, [
                          _c("div", { staticClass: "message-title" }, [
                            _vm._m(0),
                            _vm._v(" "),
                            _c("p", [
                              _c("b", [
                                _vm._v(
                                  "GBI " + _vm._s(_vm.currentItem.admin_email)
                                ),
                              ]),
                              _vm._v(" "),
                              _c("br"),
                              _c("b", [
                                _vm._v(_vm._s(_vm.currentItem.fullDate)),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "logo-img",
                            attrs: {
                              src:
                                _vm.$gbiAssets +
                                "/assets/admin/default/icon/admin_logo.png",
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "message-body" }, [
                          _c("p", { staticClass: "message-tour-info" }, [
                            _c("b", [_vm._v("Subject: ")]),
                            _vm._v(
                              _vm._s(
                                _vm._f("subjectFilter")(
                                  _vm.currentItem.category
                                )
                              )
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "font-size: 15px; color: black;" },
                            [
                              _vm._v(
                                "\n             Dear " +
                                  _vm._s(_vm.userData.name) +
                                  ", please check out " +
                                  _vm._s(
                                    _vm._f("contentFilter")(
                                      _vm.currentItem.category
                                    )
                                  ) +
                                  ", more details mentioned below.\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("p", { staticStyle: { "margin-top": "25px" } }, [
                            _vm._v(
                              "\n               " +
                                _vm._s(
                                  _vm._f("htmlFilter")(
                                    _vm.currentItem.data.body
                                  )
                                ) +
                                "\n            "
                            ),
                          ]),
                        ]),
                      ])
                    : _c("div", {
                        staticClass: "mail-right-body",
                        staticStyle: { height: "80vh" },
                      }),
                ]
              ),
            ]),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("\n                From: \n                "),
      _c("br"),
      _vm._v("Date:\n                "),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/pages/user/Notifications/panel.vue":
/*!***************************************************************!*\
  !*** ./resources/js/front/pages/user/Notifications/panel.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panel_vue_vue_type_template_id_c7aa8a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.vue?vue&type=template&id=c7aa8a70&scoped=true& */ "./resources/js/front/pages/user/Notifications/panel.vue?vue&type=template&id=c7aa8a70&scoped=true&");
/* harmony import */ var _panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/Notifications/panel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _panel_vue_vue_type_style_index_0_id_c7aa8a70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel.vue?vue&type=style&index=0&id=c7aa8a70&scoped=true&lang=css& */ "./resources/js/front/pages/user/Notifications/panel.vue?vue&type=style&index=0&id=c7aa8a70&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _panel_vue_vue_type_template_id_c7aa8a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _panel_vue_vue_type_template_id_c7aa8a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c7aa8a70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/Notifications/panel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/Notifications/panel.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/front/pages/user/Notifications/panel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./panel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/Notifications/panel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/Notifications/panel.vue?vue&type=style&index=0&id=c7aa8a70&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/front/pages/user/Notifications/panel.vue?vue&type=style&index=0&id=c7aa8a70&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_style_index_0_id_c7aa8a70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./panel.vue?vue&type=style&index=0&id=c7aa8a70&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/Notifications/panel.vue?vue&type=style&index=0&id=c7aa8a70&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_style_index_0_id_c7aa8a70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_style_index_0_id_c7aa8a70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_style_index_0_id_c7aa8a70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_style_index_0_id_c7aa8a70_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/pages/user/Notifications/panel.vue?vue&type=template&id=c7aa8a70&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/front/pages/user/Notifications/panel.vue?vue&type=template&id=c7aa8a70&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_template_id_c7aa8a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./panel.vue?vue&type=template&id=c7aa8a70&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/Notifications/panel.vue?vue&type=template&id=c7aa8a70&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_template_id_c7aa8a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_template_id_c7aa8a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);