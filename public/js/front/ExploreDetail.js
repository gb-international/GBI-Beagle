(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/ExploreDetail"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_components_Booking_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/components/Booking.vue */ "./resources/js/front/components/Booking.vue");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ExploreDetail",
  components: {
    booking: _front_components_Booking_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  metaInfo: {
    title: "GBI Explore Destination",
    meta: [{
      name: "description",
      content: "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button"
    }, {
      name: "keywords",
      content: "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs"
    }, {
      name: "url",
      content: "https://www.gowithgbi.com/resources/explore-destination"
    }]
  },
  data: function data() {
    return {
      selectedPhoto: '',
      selectedDay: null,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0
      },
      day: 0,
      description: "",
      itineraryData: [],
      selected_cities: [],
      city_list: [],
      login: false,
      loading: true
    };
  },
  watch: {
    '$store.state.token': function $storeStateToken() {
      if (this.$store.state.token) {
        this.login = true;
      }
    }
  },
  mounted: function mounted() {
    if (this.$cookies.get('access_token') != null) {
      this.login = true;
    }
  },
  beforeCreate: function beforeCreate() {
    var metaInfo = {
      title: 'GBI Explore Destination',
      description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
      keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
      url: 'https://www.gowithgbi.com/resources/explore-destination',
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  created: function created() {
    this.getItinerary();
    var metaInfo = {
      title: this.itineraryData.title,
      description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
      image: this.itineraryData.detail_photo,
      keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
      url: 'https://www.gowithgbi.com/resources/explore-destination',
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  methods: {
    changeItDiv: function changeItDiv(id) {
      if (this.selectedDay == id) {
        this.selectedDay = null;
      } else {
        this.selectedDay = id;
      }
    },
    changePhoto: function changePhoto(pic) {
      this.selectedPhoto = pic;
    },
    getItinerary: function getItinerary() {
      var _this = this;

      this.$axios.get("/api/itinerary-view/".concat(this.$route.params.id)).then(function (res) {
        _this.itineraryData = res.data; //Save search

        var searches = JSON.parse(localStorage.getItem("itSearches"));
        searches.push(_this.itineraryData);
        localStorage.setItem("itSearches", JSON.stringify(searches));
        _this.selectedPhoto = _this.itineraryData.photo;

        if (_this.itineraryData.itinerarydays) {
          var data = _this.itineraryData.itinerarydays;
          var selected = [];
          _this.selected_cities = [];

          if (data) {
            _this.selected_cities = [];

            for (var i = 0; i < data.length; i++) {
              selected.push(data[i].day_source);
              selected.push(data[i].day_destination);
            }
          }

          _this.selected_cities = _toConsumableArray(new Set(selected));
        }

        _this.getRelatedCities(_this.itineraryData.destination);
      });
    },
    getRelatedCities: function getRelatedCities(destination) {
      var _this2 = this;

      this.$axios.get("/api/related-cities/".concat(destination)).then(function (res) {
        _this2.city_list = res.data;
        _this2.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mainRow1[data-v-2bb87509]{\n  margin-top: 20px;\n  margin-bottom: 21px;\n}\n.mainRow2[data-v-2bb87509]{\n  margin-bottom: 17px;\n}\n.mainRow3[data-v-2bb87509]{\n  margin-bottom: 21px;\n}\n.expDetailImg[data-v-2bb87509]{\n  width: 100%;\n  height: 170px;\n  margin-bottom: 10px;\n  margin-right: 15px;\n}\n.expDetailImgSmall[data-v-2bb87509]{\n  width:  45px;\n  height: 45px;\n}\n.expDetCol1[data-v-2bb87509]{\n  width: 100%;\n}\n.expDetCol2Main[data-v-2bb87509]{\n  display: none;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n}\n.expDetCol2[data-v-2bb87509]{\n  display: none;\n  width: 30%; \n  height: 423px; \n  border-radius: 5px;\n  background: white;\n}\n@media (min-width: 768px) {\n.expDetailImgSmall[data-v-2bb87509]{\n    width:  100px;\n    height: 100px;\n}\n.expDetailImg[data-v-2bb87509]{\n    height: 330px;\n    margin-bottom: 16.5px;\n}\n.mainRow1[data-v-2bb87509]{\n    margin-top: 35px;\n    margin-bottom: 35px;\n}\n.mainRow2[data-v-2bb87509]{\n    margin-bottom: 32px;\n}\n.mainRow3[data-v-2bb87509]{\n    margin-bottom: 35px;\n}\n.rowheadings[data-v-2bb87509]{\n    font-size: 25px !important;\n}\n.iconClass p[data-v-2bb87509]{\n    font-size: 19px !important;\n}\n.grandTotalMob[data-v-2bb87509]{\n    margin-bottom: 35px !important;\n}\n.grandTotalMob p[data-v-2bb87509]{\n    font-size: 18px !important;\n}\n.grandTotalMob .smallP[data-v-2bb87509]{\n    font-size: 12.5px !important;\n}\n.grandTotalMob .p2[data-v-2bb87509]{\n    margin-top: 5px !important;\n    font-size: 20px !important;\n}\n.btnConfirm[data-v-2bb87509]{\n    font-size: 20px !important;\n    height: 55px !important;\n    width: 200px !important;\n}\n}\n@media (min-width: 1024px) {\n.grandTotalMob[data-v-2bb87509]{\n    display: none !important;\n}\n.expDetCol2Main[data-v-2bb87509]{\n    display: inline;\n}\n.expDetCol2[data-v-2bb87509]{\n    display: inline;\n}\n.expDetCol1[data-v-2bb87509]{\n    width: 70%;\n}\n.iconClass[data-v-2bb87509]{\n    width: 18% !important;\n}\n.mainRow1[data-v-2bb87509]{\n    margin-top: 55px;\n    margin-bottom: 55px;\n}\n.mainRow2[data-v-2bb87509]{\n    padding: 5px 65px;\n    margin-bottom: 55px;\n}\n.mainRow3[data-v-2bb87509]{\n    padding: 5px 65px;\n    margin-bottom: 55px;\n}\n}\n.iconMainDiv[data-v-2bb87509]{\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start\n}\n.iconClass[data-v-2bb87509]{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-content: center;\n  width: 45%;\n  margin-right: 15px;\n  margin-bottom: 50px;\n}\n.iconClass img[data-v-2bb87509]{\n  height: 40px;\n  width: 40px;\n  margin-right: 12px;\n}\n.iconClass p[data-v-2bb87509]{\n  margin-top: 8px;\n  font-size: 14.2px;\n  font-weight: 400;\n  color: #1d1b1b;\n}\n.rowheadings[data-v-2bb87509]{\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n  color: #101010;\n  font-family: sans-serif;\n}\n.itineraryDiv[data-v-2bb87509]{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-content: space-between;\n}\n.singleItneraryDivMain[data-v-2bb87509]{\n}\n.singleItneraryDiv[data-v-2bb87509]{\n  height: 55px; \n  width: 100%; \n  padding: 14px 30px;\n  font-size: 18px;\n  font-weight: 600;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n  background: white;\n}\n.singleItneraryDiv2[data-v-2bb87509]{\n  height: auto; \n  width: 100%; \n  padding: 16px 30px;\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 15px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n  background: white;\n}\n.priceSingleDiv[data-v-2bb87509]{\n  padding: 12px 18px !important;\n  margin-top: 10px !important; \n  border-bottom: 1px solid #8080806b;\n}\n.priceSingleDiv p[data-v-2bb87509]{\n  font-size: 15.5px;\n  font-weight: 500;\n  font-family: sans-serif;\n  color: #1d1b1b;\n  margin-right: 3px;\n}\n.priceSingleDiv .p2[data-v-2bb87509]{\n  font-size: 16.2px;\n  font-weight: 600;\n  font-family: sans-serif;\n  color: #1d1b1b;\n}\n.grandTotalDiv[data-v-2bb87509]{\n  padding: 13px 18px !important;\n  border-bottom: 1px solid #8080806b;\n  background: #007bff2b\n}\n.grandTotalMob[data-v-2bb87509]{\n  padding: 18px !important;\n  background: #007bff2b;\n  margin-bottom: 26.9px !important;\n}\n.grandTotalMob p[data-v-2bb87509]{\n  font-size: 15px;\n  font-weight: 600;\n  font-family: sans-serif;\n  color: #1d1b1b;\n  margin-bottom: 0rem !important;\n}\n.grandTotalMob .smallP[data-v-2bb87509]{\n  font-size: 10px;\n  font-weight: 500;\n  font-family: sans-serif;\n  color: #1d1b1b;\n}\n.grandTotalMob .p2[data-v-2bb87509]{\n  margin-top: 5px;\n  font-size: 15.7px;\n  font-weight: 600;\n  font-family: sans-serif;\n  color: black;\n}\n.grandTotalDiv p[data-v-2bb87509]{\n  font-size: 14px;\n  font-weight: 500;\n  font-family: sans-serif;\n  color: #1d1b1b;\n}\n.grandTotalDiv .smallP[data-v-2bb87509]{\n  font-size: 11px;\n  font-weight: 500;\n  font-family: sans-serif;\n  color: #1d1b1b;\n}\n.grandTotalDiv .p2[data-v-2bb87509]{\n  margin-top: 6px;\n  font-size: 16.7px;\n  font-weight: 600;\n  font-family: sans-serif;\n  color: #1d1b1b;\n  color: black;\n}\n.couponDivMain[data-v-2bb87509]{\n  padding: 12px 18px !important;\n  margin-top: 10px !important; \n  border-bottom: 1px solid #8080806b;\n}\n.couponDiv[data-v-2bb87509]{\n}\n.couponDiv p[data-v-2bb87509]{\n  font-size: 15.5px;\n  font-weight: 400;\n  font-family: sans-serif;\n  color: #3490dc;\n  margin-right: 3px;\n}\n.couponDiv .p2[data-v-2bb87509]{\n  font-size: 16.2px;\n  font-weight: 500;\n  font-family: sans-serif;\n  color: #3490dc;\n}\n.btnCpn[data-v-2bb87509]{\n  color: #fff;\n  background-color: #01c5c4;\n  border-color: #01c5c4;\n  border-radius: 0px;\n}\n.btnPay[data-v-2bb87509]{\n  color: #fff;\n  background-color: #01c5c4;\n  border-color: #01c5c4;\n  height: 50px;\n  width: 100%;\n  margin-top: 5px;\n  border-radius: 0px;\n}\n.btnConfirm[data-v-2bb87509]{\n  color: #fff;\n  background-color: #01c5c4;\n  border-color: #01c5c4;\n  height: 45px;\n  width: 150px;\n  border-radius: 0px;\n}\n.verticalStep[data-v-2bb87509]{\n  height: 20px;\n  width: 1px; \n  background: gray; \n  margin-left: 45px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "section",
    {
      staticClass: "d-flex flex-column justify-content-center",
      staticStyle: { background: "white !important" },
    },
    [
      _c(
        "div",
        {
          staticClass:
            "d-flex justify-content-center align-items-center mainRow1 container",
          staticStyle: { background: "white !important" },
        },
        [
          _c("div", { staticClass: "p-2 d-flex flex-column expDetCol1" }, [
            _c("img", {
              staticClass: "expDetailImg",
              attrs: {
                src: _vm.selectedPhoto,
                loading: "lazy",
                alt: "itinerary",
              },
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "p-2" },
              [
                _c(
                  "VueSlickCarousel",
                  _vm._b(
                    { attrs: { dots: true, arrows: false } },
                    "VueSlickCarousel",
                    _vm.settings,
                    false
                  ),
                  _vm._l(10, function (index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        on: {
                          click: function ($event) {
                            return _vm.changePhoto(_vm.itineraryData.photo)
                          },
                        },
                      },
                      [
                        _c("img", {
                          staticClass: "expDetailImgSmall",
                          attrs: {
                            src: _vm.itineraryData.photo,
                            loading: "lazy",
                            alt: "itinerary",
                          },
                        }),
                      ]
                    )
                  }),
                  0
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _vm.itineraryData.price
            ? _c("div", { staticClass: "expDetCol2Main" }, [
                _c("div", { staticClass: "expDetCol2" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-start align-items-center priceSingleDiv",
                    },
                    [
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            "₹" + _vm._s(_vm.itineraryData.price) + " x 1 Pax"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "ml-auto p2" }, [
                        _vm._v("₹" + _vm._s(_vm.itineraryData.price)),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-start align-items-center priceSingleDiv",
                    },
                    [
                      _c("p", [_vm._v("Total Basic Cost")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "ml-auto p2" }, [
                        _vm._v("₹" + _vm._s(_vm.itineraryData.price)),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-start align-items-center priceSingleDiv",
                    },
                    [
                      _c("p", [_vm._v("Taxes")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "ml-auto p2" }, [
                        _vm._v(
                          "₹" + _vm._s((_vm.itineraryData.price * 5) / 100)
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _vm.itineraryData.price
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-start align-items-center grandTotalDiv",
                        },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("p", { staticClass: "ml-auto p2" }, [
                            _vm._v(
                              "₹" +
                                _vm._s(
                                  (_vm.itineraryData.price * 5) / 100 +
                                    _vm.itineraryData.price -
                                    2000
                                ) +
                                " "
                            ),
                          ]),
                        ]
                      )
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _vm.login
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btnPay",
                        attrs: {
                          "data-toggle": "modal",
                          "data-target": "#bookModal",
                        },
                      },
                      [_vm._v("\n          Book Now\n      ")]
                    )
                  : _c(
                      "button",
                      {
                        staticClass: "btn btnPay",
                        attrs: {
                          id: "loginButton",
                          "data-toggle": "modal",
                          "data-target": "#LoginForm",
                        },
                      },
                      [_vm._v("\n        Book Now\n      ")]
                    ),
              ])
            : _vm._e(),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "d-flex justify-content-between align-items-center grandTotalMob",
        },
        [
          _c(
            "div",
            {
              staticClass:
                "d-flex flex-column justify-content-start align-items-start",
            },
            [
              _c("p", [_vm._v("Grand Total")]),
              _vm._v(" "),
              _c("span", { staticClass: "smallP" }, [
                _vm._v("(Incl. all taxes)"),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "p2" }, [
                _vm._v(
                  "₹" +
                    _vm._s(
                      (_vm.itineraryData.price * 5) / 100 +
                        _vm.itineraryData.price -
                        2000
                    )
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _vm.login
            ? _c(
                "button",
                {
                  staticClass: "btn btnConfirm ml-auto",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#bookModal",
                  },
                },
                [_vm._v("\n        Book Now\n    ")]
              )
            : _c(
                "button",
                {
                  staticClass: "btn btnConfirm ml-auto",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#LoginForm",
                    id: "loginButton",
                  },
                },
                [_vm._v("Book Now\n    ")]
              ),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mainRow2 container" }, [
        _c("p", { staticClass: "rowheadings" }, [
          _vm._v("Your Experience Includes"),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "iconMainDiv" }, [
          _c("div", { staticClass: "iconClass" }, [
            _c("img", { attrs: { src: _vm.$gbiAssets + "/hotel_icon.png" } }),
            _vm._v(" "),
            _c("p", [_vm._v("Hotel")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "iconClass" }, [
            _c("img", { attrs: { src: _vm.$gbiAssets + "/flight_icon.png" } }),
            _vm._v(" "),
            _c("p", [_vm._v("Flight")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "iconClass" }, [
            _c("img", {
              attrs: { src: _vm.$gbiAssets + "/passport_icon.png" },
            }),
            _vm._v(" "),
            _c("p", [_vm._v("Passport/Visa")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "iconClass" }, [
            _c("img", {
              attrs: { src: _vm.$gbiAssets + "/transport_icon.png" },
            }),
            _vm._v(" "),
            _c("p", [_vm._v("Transfers")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "iconClass" }, [
            _c("img", { attrs: { src: _vm.$gbiAssets + "/dinner_icon.png" } }),
            _vm._v(" "),
            _c("p", [_vm._v("Dinner")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "iconClass" }, [
            _c("img", {
              attrs: { src: _vm.$gbiAssets + "/citytour_icon.png" },
            }),
            _vm._v(" "),
            _c("p", [_vm._v("City Tour")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "iconClass" }, [
            _c("img", { attrs: { src: _vm.$gbiAssets + "/taxes_icon.png" } }),
            _vm._v(" "),
            _c("p", [_vm._v("Taxes")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "iconClass" }, [
            _c("img", { attrs: { src: _vm.$gbiAssets + "/sightseeing.png" } }),
            _vm._v(" "),
            _c("p", [_vm._v("Sightseeing")]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "iconClass" }, [
            _c("img", { attrs: { src: _vm.$gbiAssets + "/breakfast.png" } }),
            _vm._v(" "),
            _c("p", [_vm._v("Breakfast")]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mainRow3 container" }, [
        _c("p", { staticClass: "rowheadings" }, [_vm._v("ITINERARY")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "itineraryDiv" },
          _vm._l(_vm.itineraryData.itinerarydays, function (data, index) {
            return _c(
              "div",
              {
                key: data.id,
                staticClass: "singleItneraryDivMain",
                on: {
                  click: function ($event) {
                    return _vm.changeItDiv(data.id)
                  },
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "singleItneraryDiv d-flex justify-content-between",
                  },
                  [
                    _c("p", [_vm._v("Itinerary : Day " + _vm._s(data.day))]),
                    _vm._v(" "),
                    _c("i", {
                      class:
                        _vm.selectedDay == data.id
                          ? "fas fa-sort-up mt-2"
                          : "fas fa-sort-down",
                    }),
                  ]
                ),
                _vm._v(" "),
                _vm.selectedDay == data.id
                  ? _c("div", { staticClass: "singleItneraryDiv2" }, [
                      _c("div", {
                        staticClass: "card-text card-text-ul py-2",
                        domProps: { innerHTML: _vm._s(data.day_description) },
                      }),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.itineraryData.itinerarydays.length - 1 !== index
                  ? _c("div", { staticClass: "verticalStep" })
                  : _vm._e(),
              ]
            )
          }),
          0
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal", attrs: { id: "bookModal" } }, [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content modal-color" }, [
            _vm.itineraryData.itinerarydays
              ? _c(
                  "div",
                  { staticClass: "modal-body" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "close",
                        attrs: { type: "button", "data-dismiss": "modal" },
                      },
                      [_vm._v("×")]
                    ),
                    _vm._v(" "),
                    _vm.loading == false
                      ? _c("booking", {
                          attrs: {
                            title: _vm.itineraryData.title,
                            selected_cities: _vm.selected_cities,
                            city_list: _vm.city_list,
                          },
                        })
                      : _vm._e(),
                  ],
                  1
                )
              : _vm._e(),
          ]),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex flex-column justify-content-start couponDivMain" },
      [
        _c("div", { staticClass: "d-flex justify-content-start couponDiv" }, [
          _c("p", [_vm._v("GBITRIP")]),
          _vm._v(" "),
          _c("p", { staticClass: "ml-auto p2" }, [_vm._v("- ₹2,000")]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex justify-content-start couponEnterDiv" },
          [
            _c("input", { attrs: { type: "text" } }),
            _vm._v(" "),
            _c("button", { staticClass: "btn btnCpn" }, [_vm._v("Add")]),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      {
        staticClass:
          "d-flex flex-column justify-content-start align-items-center",
        staticStyle: { "margin-top": "5px", "margin-right": "3px" },
      },
      [
        _vm._v("Grand Total\n            "),
        _c("span", { staticClass: "smallP" }, [_vm._v("(Incl. all taxes)")]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/pages/Explore/ExploreDetail.vue":
/*!************************************************************!*\
  !*** ./resources/js/front/pages/Explore/ExploreDetail.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExploreDetail_vue_vue_type_template_id_2bb87509_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true& */ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true&");
/* harmony import */ var _ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExploreDetail.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExploreDetail_vue_vue_type_style_index_0_id_2bb87509_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css& */ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExploreDetail_vue_vue_type_template_id_2bb87509_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExploreDetail_vue_vue_type_template_id_2bb87509_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2bb87509",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/Explore/ExploreDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExploreDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_style_index_0_id_2bb87509_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_style_index_0_id_2bb87509_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_style_index_0_id_2bb87509_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_style_index_0_id_2bb87509_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_style_index_0_id_2bb87509_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_template_id_2bb87509_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_template_id_2bb87509_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_template_id_2bb87509_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);