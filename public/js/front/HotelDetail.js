(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/HotelDetail"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "HotelDetail",
  components: {
    booking: _front_components_Booking_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  metaInfo: {
    title: "GBI Hotel Details",
    meta: [{
      name: "description",
      content: "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button"
    }, {
      name: "keywords",
      content: "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs"
    }, {
      name: "url",
      content: "https://www.gowithgbi.com/resources/hotel-details"
    }]
  },
  data: function data() {
    return {
      selectedPhoto: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg',
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
      loading: true,
      photo: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
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
      url: 'https://www.gowithgbi.com/resources/hotel-details',
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  created: function created() {
    //this.getItinerary();
    var metaInfo = {
      title: this.itineraryData.title,
      description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
      image: this.itineraryData.detail_photo,
      keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
      url: 'https://www.gowithgbi.com/resources/hotel-details',
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=style&index=0&id=df00e650&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=style&index=0&id=df00e650&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mainRow1[data-v-df00e650]{\r\n  margin-top: 20px;\r\n  margin-bottom: 21px;\n}\n.mainRow2[data-v-df00e650]{\r\n  margin-bottom: 17px;\n}\n.mainRow3[data-v-df00e650]{\r\n  margin-bottom: 21px;\n}\n.expDetailImg[data-v-df00e650]{\r\n  width: 100%;\r\n  height: 170px;\r\n  margin-bottom: 10px;\r\n  margin-right: 15px;\n}\n.expDetailImgSmall[data-v-df00e650]{\r\n  width:  45px;\r\n  height: 45px;\n}\n.expDetCol1[data-v-df00e650]{\r\n  width: 100%;\n}\n.expDetCol2Main[data-v-df00e650]{\r\n  display: none;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n}\n.expDetCol2[data-v-df00e650]{\r\n  display: none;\r\n  width: 30%; \r\n  height: 423px; \r\n  border-radius: 5px;\r\n  background: white;\n}\n@media (min-width: 768px) {\n.expDetailImgSmall[data-v-df00e650]{\r\n    width:  100px;\r\n    height: 100px;\n}\n.expDetailImg[data-v-df00e650]{\r\n    height: 330px;\r\n    margin-bottom: 16.5px;\n}\n.mainRow1[data-v-df00e650]{\r\n    margin-top: 35px;\r\n    margin-bottom: 35px;\n}\n.mainRow2[data-v-df00e650]{\r\n    margin-bottom: 32px;\n}\n.mainRow3[data-v-df00e650]{\r\n    margin-bottom: 35px;\n}\n.rowheadings[data-v-df00e650]{\r\n    font-size: 25px !important;\n}\n.iconClass p[data-v-df00e650]{\r\n    font-size: 19px !important;\n}\n.grandTotalMob[data-v-df00e650]{\r\n    margin-bottom: 35px !important;\n}\n.grandTotalMob p[data-v-df00e650]{\r\n    font-size: 18px !important;\n}\n.grandTotalMob .smallP[data-v-df00e650]{\r\n    font-size: 12.5px !important;\n}\n.grandTotalMob .p2[data-v-df00e650]{\r\n    margin-top: 5px !important;\r\n    font-size: 20px !important;\n}\n.btnConfirm[data-v-df00e650]{\r\n    font-size: 20px !important;\r\n    height: 55px !important;\r\n    width: 200px !important;\n}\n}\n@media (min-width: 1024px) {\n.grandTotalMob[data-v-df00e650]{\r\n    display: none !important;\n}\n.expDetCol2Main[data-v-df00e650]{\r\n    display: inline;\n}\n.expDetCol2[data-v-df00e650]{\r\n    display: inline;\n}\n.expDetCol1[data-v-df00e650]{\r\n    width: 70%;\n}\n.iconClass[data-v-df00e650]{\r\n    width: 18% !important;\n}\n.mainRow1[data-v-df00e650]{\r\n    margin-top: 55px;\r\n    margin-bottom: 55px;\n}\n.mainRow2[data-v-df00e650]{\r\n    padding: 5px 65px;\r\n    margin-bottom: 55px;\n}\n.mainRow3[data-v-df00e650]{\r\n    padding: 5px 65px;\r\n    margin-bottom: 55px;\n}\n}\n.iconMainDiv[data-v-df00e650]{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  justify-content: flex-start\n}\n.iconClass[data-v-df00e650]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-content: center;\r\n  width: 45%;\r\n  margin-right: 15px;\r\n  margin-bottom: 50px;\n}\n.iconClass img[data-v-df00e650]{\r\n  height: 40px;\r\n  width: 40px;\r\n  margin-right: 12px;\n}\n.iconClass p[data-v-df00e650]{\r\n  margin-top: 8px;\r\n  font-size: 14.2px;\r\n  font-weight: 400;\r\n  color: #1d1b1b;\n}\n.rowheadings[data-v-df00e650]{\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  margin-bottom: 30px;\r\n  color: #101010;\r\n  font-family: sans-serif;\n}\n.itineraryDiv[data-v-df00e650]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  justify-content: center;\r\n  align-content: space-between;\n}\n.singleItneraryDivMain[data-v-df00e650]{\n}\n.singleItneraryDiv[data-v-df00e650]{\r\n  height: 55px; \r\n  width: 100%; \r\n  padding: 14px 30px;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\r\n  background: white;\n}\n.singleItneraryDiv2[data-v-df00e650]{\r\n  height: auto; \r\n  width: 100%; \r\n  padding: 16px 30px;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  margin-top: 15px;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\r\n  background: white;\n}\n.priceSingleDiv[data-v-df00e650]{\r\n  padding: 12px 18px !important;\r\n  margin-top: 10px !important; \r\n  border-bottom: 1px solid #8080806b;\n}\n.priceSingleDiv p[data-v-df00e650]{\r\n  font-size: 15.5px;\r\n  font-weight: 500;\r\n  font-family: sans-serif;\r\n  color: #1d1b1b;\r\n  margin-right: 3px;\n}\n.priceSingleDiv .p2[data-v-df00e650]{\r\n  font-size: 16.2px;\r\n  font-weight: 600;\r\n  font-family: sans-serif;\r\n  color: #1d1b1b;\n}\n.grandTotalDiv[data-v-df00e650]{\r\n  padding: 13px 18px !important;\r\n  border-bottom: 1px solid #8080806b;\r\n  background: #007bff2b\n}\n.grandTotalMob[data-v-df00e650]{\r\n  padding: 18px !important;\r\n  background: #007bff2b;\r\n  margin-bottom: 26.9px !important;\n}\n.grandTotalMob p[data-v-df00e650]{\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n  font-family: sans-serif;\r\n  color: #1d1b1b;\r\n  margin-bottom: 0rem !important;\n}\n.grandTotalMob .smallP[data-v-df00e650]{\r\n  font-size: 10px;\r\n  font-weight: 500;\r\n  font-family: sans-serif;\r\n  color: #1d1b1b;\n}\n.grandTotalMob .p2[data-v-df00e650]{\r\n  margin-top: 5px;\r\n  font-size: 15.7px;\r\n  font-weight: 600;\r\n  font-family: sans-serif;\r\n  color: black;\n}\n.grandTotalDiv p[data-v-df00e650]{\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  font-family: sans-serif;\r\n  color: #1d1b1b;\n}\n.grandTotalDiv .smallP[data-v-df00e650]{\r\n  font-size: 11px;\r\n  font-weight: 500;\r\n  font-family: sans-serif;\r\n  color: #1d1b1b;\n}\n.grandTotalDiv .p2[data-v-df00e650]{\r\n  margin-top: 6px;\r\n  font-size: 16.7px;\r\n  font-weight: 600;\r\n  font-family: sans-serif;\r\n  color: #1d1b1b;\r\n  color: black;\n}\n.couponDivMain[data-v-df00e650]{\r\n  padding: 12px 18px !important;\r\n  margin-top: 10px !important; \r\n  border-bottom: 1px solid #8080806b;\n}\n.couponDiv[data-v-df00e650]{\n}\n.couponDiv p[data-v-df00e650]{\r\n  font-size: 15.5px;\r\n  font-weight: 400;\r\n  font-family: sans-serif;\r\n  color: #3490dc;\r\n  margin-right: 3px;\n}\n.couponDiv .p2[data-v-df00e650]{\r\n  font-size: 16.2px;\r\n  font-weight: 500;\r\n  font-family: sans-serif;\r\n  color: #3490dc;\n}\n.btnCpn[data-v-df00e650]{\r\n  color: #fff;\r\n  background-color: #01c5c4;\r\n  border-color: #01c5c4;\r\n  border-radius: 0px;\n}\n.btnPay[data-v-df00e650]{\r\n  color: #fff;\r\n  background-color: #01c5c4;\r\n  border-color: #01c5c4;\r\n  height: 50px;\r\n  width: 100%;\r\n  margin-top: 5px;\r\n  border-radius: 0px;\n}\n.btnConfirm[data-v-df00e650]{\r\n  color: #fff;\r\n  background-color: #01c5c4;\r\n  border-color: #01c5c4;\r\n  height: 45px;\r\n  width: 150px;\r\n  border-radius: 0px;\n}\n.verticalStep[data-v-df00e650]{\r\n  height: 20px;\r\n  width: 1px; \r\n  background: gray; \r\n  margin-left: 45px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=style&index=0&id=df00e650&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=style&index=0&id=df00e650&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hotelDetails.vue?vue&type=style&index=0&id=df00e650&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=style&index=0&id=df00e650&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=template&id=df00e650&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=template&id=df00e650&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
                            return _vm.changePhoto(_vm.photo)
                          },
                        },
                      },
                      [
                        _c("img", {
                          staticClass: "expDetailImgSmall",
                          attrs: {
                            src: _vm.photo,
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
          _vm._m(0),
        ]
      ),
      _vm._v(" "),
      _vm._m(1),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "expDetCol2Main" }, [
      _c("div", { staticClass: "expDetCol2" }, [
        _c(
          "div",
          {
            staticClass:
              "d-flex justify-content-start align-items-center priceSingleDiv",
          },
          [
            _c("p", [_c("b", [_vm._v("₹11,000 x 1 day")])]),
            _vm._v(" "),
            _c("p", { staticClass: "ml-auto p2" }, [_vm._v("₹11,000")]),
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
            _c("p", { staticClass: "ml-auto p2" }, [_vm._v("₹11,000")]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "d-flex flex-column justify-content-start couponDivMain",
          },
          [
            _c(
              "div",
              { staticClass: "d-flex justify-content-start couponDiv" },
              [
                _c("p", [_vm._v("GBIHOTEL")]),
                _vm._v(" "),
                _c("p", { staticClass: "ml-auto p2" }, [_vm._v("- ₹2,000")]),
              ]
            ),
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
        ),
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
            _c("p", { staticClass: "ml-auto p2" }, [_vm._v("₹1,000")]),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "d-flex justify-content-start align-items-center grandTotalDiv",
          },
          [
            _c(
              "p",
              {
                staticClass:
                  "d-flex flex-column justify-content-start align-items-center",
                staticStyle: { "margin-top": "5px", "margin-right": "3px" },
              },
              [
                _vm._v("Grand Total\n            "),
                _c("span", { staticClass: "smallP" }, [
                  _vm._v("(Incl. all taxes)"),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("p", { staticClass: "ml-auto p2" }, [_vm._v("₹10000")]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btnPay" }, [_vm._v("Pay Now")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
            _c("p", { staticClass: "p2" }, [_vm._v("₹10000")]),
          ]
        ),
        _vm._v(" "),
        _c("button", { staticClass: "btn btnConfirm ml-auto" }, [
          _vm._v("Pay Now"),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/pages/Hotel/hotelDetails.vue":
/*!*********************************************************!*\
  !*** ./resources/js/front/pages/Hotel/hotelDetails.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hotelDetails_vue_vue_type_template_id_df00e650_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotelDetails.vue?vue&type=template&id=df00e650&scoped=true& */ "./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=template&id=df00e650&scoped=true&");
/* harmony import */ var _hotelDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hotelDetails.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _hotelDetails_vue_vue_type_style_index_0_id_df00e650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hotelDetails.vue?vue&type=style&index=0&id=df00e650&scoped=true&lang=css& */ "./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=style&index=0&id=df00e650&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _hotelDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hotelDetails_vue_vue_type_template_id_df00e650_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hotelDetails_vue_vue_type_template_id_df00e650_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "df00e650",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/Hotel/hotelDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hotelDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hotelDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_hotelDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=style&index=0&id=df00e650&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=style&index=0&id=df00e650&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_hotelDetails_vue_vue_type_style_index_0_id_df00e650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hotelDetails.vue?vue&type=style&index=0&id=df00e650&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=style&index=0&id=df00e650&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_hotelDetails_vue_vue_type_style_index_0_id_df00e650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_hotelDetails_vue_vue_type_style_index_0_id_df00e650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_hotelDetails_vue_vue_type_style_index_0_id_df00e650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_hotelDetails_vue_vue_type_style_index_0_id_df00e650_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=template&id=df00e650&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=template&id=df00e650&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hotelDetails_vue_vue_type_template_id_df00e650_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./hotelDetails.vue?vue&type=template&id=df00e650&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Hotel/hotelDetails.vue?vue&type=template&id=df00e650&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hotelDetails_vue_vue_type_template_id_df00e650_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_hotelDetails_vue_vue_type_template_id_df00e650_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);