(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/TourDetail"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/FlightApp.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/tour/FlightApp.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FlightApp",
  props: ["list", "flightDate"],
  data: function data() {
    return {
      flights: [],
      time_left: false,
      progress: 25,
      progress_seconds: 0
    };
  },
  mounted: function mounted() {
    this.apiData(this.list);
  },
  methods: {
    makeProgress: function makeProgress() {
      if (this.progress < 100) {
        this.progress += 5;
      }
    },
    apiData: function apiData(code) {
      var _this = this;

      console.log(code);
      var api = "/api/flight-detail/" + code;
      fetch(api).then(function (response) {
        return response.text();
      }).then(function (contents) {
        return _this.flights = JSON.parse(contents);
      })["catch"](function () {
        return console.log("Can’t access " + api + " response. Blocked by browser?");
      });
    },
    timeFormat: function timeFormat(nDate) {
      var don = nDate;
      var d = new Date(don.split("T")[0]).toDateString();
      var date = don.split("T")[1];
      date = date.split("+")[0];
      date = date.split(":");
      var hours = date[0];
      var minutes = date[1];
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return d + " " + strTime;
    },
    progressBar: function progressBar(t1, t2) {
      var dt1 = new Date(t1);
      var dt2 = new Date(t2);
      var total = (dt2.getTime() - dt1.getTime()) / 1000;
      var d2 = t2;
      d2 = d2.split("T");
      var hour = d2[1].split("+")[0];
      var newd = d2[0] + " " + hour;
      d2 = new Date(newd);
      var d1 = new Date();
      var inputSeconds = (d2.getTime() - d1.getTime()) / 1000;
      var need_time = total - Math.trunc(inputSeconds);
      this.progress = Math.trunc(need_time / total * 100);
      console.log(this.progress);
    },
    timeCalculate: function timeCalculate(d2) {
      var d2 = d2.split("T");
      var hour = d2[1].split("+")[0];
      var newd = d2[0] + " " + hour;
      d2 = new Date(newd);
      var d1 = new Date();
      var inputSeconds = (d2.getTime() - d1.getTime()) / 1000;
      this.progress_seconds = inputSeconds;
      var Days = Math.floor(inputSeconds / (60 * 60 * 24));
      var Hour = Math.floor(inputSeconds % (60 * 60 * 24) / (60 * 60));
      var Minutes = Math.floor(inputSeconds % (60 * 60 * 24) % (60 * 60) / 60);
      var Seconds = Math.floor(inputSeconds % (60 * 60 * 24) % (60 * 60) % 60);
      var ddhhmmss = "";

      if (Days > 0) {
        ddhhmmss += Days + " Day ";
      }

      if (Hour > 0) {
        ddhhmmss += Hour + " Hour ";
      }

      if (Minutes > 0) {
        ddhhmmss += Minutes + " Minutes ";
      }

      if (Seconds > 0) {
        ddhhmmss += Seconds + " Seconds ";
      }

      return ddhhmmss;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/HotelCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/tour/HotelCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    hotel: {
      required: true
    }
  },
  data: function data() {
    return {
      max: 5
    };
  },
  methods: {
    getRating: function getRating(current) {
      return current / this.max * 100;
    },
    integer: function integer(num) {
      return parseInt(num);
    },
    dateFormat: function dateFormat(date) {
      return new Date(date).toDateString();
    },
    days: function days(date1, date2) {
      var date1 = new Date(date1);
      var date2 = new Date(date2);
      var diffTime = Math.abs(date2 - date1);
      var diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diff - 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/ItineraryDay.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/tour/ItineraryDay.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    itinerary: {
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/WeatherApp.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/tour/WeatherApp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["cityList"],
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      settings: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        }]
      },
      current: [],
      forcast: [],
      cityName: ''
    };
  },
  mounted: function mounted() {
    this.cityName = this.cityList[0];
  },
  watch: {
    cityName: function cityName(value) {
      this.currentWeather(this.cityName);
      this.forcastWeather(this.cityName);
    }
  },
  methods: {
    CityChange: function CityChange(event) {
      console.log(event);
    },
    currentWeather: function currentWeather(city) {
      var _this = this;

      var api = "/api/current-weather/" + city;
      fetch(api).then(function (response) {
        return response.text();
      }).then(function (contents) {
        return _this.current = JSON.parse(contents);
      })["catch"](function () {
        return console.log("Can’t access " + api + " response. Blocked by browser?");
      });
    },
    forcastWeather: function forcastWeather(city) {
      var _this2 = this;

      var api = "/api/forcast-weather/" + city;
      fetch(api).then(function (response) {
        return response.text();
      }).then(function (contents) {
        return _this2.forcast = JSON.parse(contents);
      })["catch"](function () {
        return console.log("Can’t access " + api + " response. Blocked by browser?");
      });
    },
    ForcastDateConvert: function ForcastDateConvert(date) {
      var d = new Date(date);
      var newdate = d.toDateString();
      return newdate.split(d.getFullYear())[0];
    },
    dateToString: function dateToString(date) {
      var date = new Date(date * 1000);
      return date.toLocaleTimeString();
    },
    toDayDate: function toDayDate() {
      var d = new Date();
      return d.toDateString();
    },
    RemoveDecimal: function RemoveDecimal(data) {
      return Math.trunc(data);
    },
    tConvert: function tConvert(time) {
      time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value

        time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM

        time[0] = +time[0] % 12 || 12; // Adjust hours
      }

      var time = time.join(""); // return adjusted time or original string

      return time.replace(":00:00", " ");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/TourDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/tour/TourDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_components_tour_ItineraryDay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/components/tour/ItineraryDay */ "./resources/js/front/components/tour/ItineraryDay.vue");
/* harmony import */ var _front_components_tour_WeatherApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/tour/WeatherApp */ "./resources/js/front/components/tour/WeatherApp.vue");
/* harmony import */ var _front_components_tour_FlightApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/front/components/tour/FlightApp */ "./resources/js/front/components/tour/FlightApp.vue");
/* harmony import */ var _front_pages_user_tour_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/front/pages/user/tour/maps */ "./resources/js/front/pages/user/tour/maps.vue");
/* harmony import */ var _front_components_tour_HotelCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/front/components/tour/HotelCard */ "./resources/js/front/components/tour/HotelCard.vue");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_5__);
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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Tour-detail",
  components: {
    "has-error": vform__WEBPACK_IMPORTED_MODULE_5__["HasError"],
    "weather-app": _front_components_tour_WeatherApp__WEBPACK_IMPORTED_MODULE_1__["default"],
    "flight-app": _front_components_tour_FlightApp__WEBPACK_IMPORTED_MODULE_2__["default"],
    "hotel-card": _front_components_tour_HotelCard__WEBPACK_IMPORTED_MODULE_4__["default"],
    "itinerary-day": _front_components_tour_ItineraryDay__WEBPACK_IMPORTED_MODULE_0__["default"],
    "live-map": _front_pages_user_tour_maps__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      upcoming_list: [],
      current: 3,
      oddclass: false,
      evenclass: true,
      itineraryData: {},
      hotelData: "",
      flightData: [],
      alldata: [],
      cityList: [],
      tour_code: ''
    };
  },
  beforeMount: function beforeMount() {
    this.tour_code = this.$cookies.get('tour_code');
    this.tourListData(this.tour_code);
  },
  methods: {
    // timeFormat(date) {
    //   var str = new Date(date).toDateString();
    //   date = new Date(date);
    //   var hours = date.getHours();
    //   var minutes = date.getMinutes();
    //   var ampm = hours >= 12 ? "pm" : "am";
    //   hours = hours % 12;
    //   hours = hours ? hours : 12; // the hour '0' should be '12'
    //   minutes = minutes < 10 ? "0" + minutes : minutes;
    //   var strTime = hours + ":" + minutes + " " + ampm;
    //   return str + " " + strTime;
    // },
    simpleDate: function simpleDate(data) {
      // 2020-06-23
      return data.split("T")[0];
    },
    tourListData: function tourListData(id) {
      var _this = this;

      var data = {
        travel_id: id
      };
      this.$api.POST("/api/tour-detail", data).then(function (response) {
        _this.alldata = response; //console.log(response);

        _this.itineraryData = response.itinerary;
        _this.flightData = response.bookedflights;
        _this.hotelData = response.bookedhotels;

        _this.DestinationCity(_this.itineraryData.itinerarydays);
      })["catch"](function (error) {
        _this.handleError(error);
      });
    },
    DestinationCity: function DestinationCity(itineraryData) {
      var city = [];

      for (var i = 0; i < itineraryData.length; i++) {
        city.push(itineraryData[i].day_destination);
      }

      this.cityList = _toConsumableArray(new Set(city));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/maps.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/tour/maps.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Maps",
  data: function data() {
    return {
      //markers: [],
      place: null,
      cStart: null,
      cEnd: null,
      sights: null,
      mapZoom: 8,
      next: 1,
      center: null,
      showSights: false,
      completed: false
    };
  },
  props: ['start', 'end', 'aSights'],
  mounted: function mounted() {
    if (this.aSights[0].stR) {
      this.cStart = _objectSpread({}, this.aSights[0].stR);
    } else {
      this.cStart = _objectSpread({}, this.start);
    }

    if (this.aSights[0].onG) {
      this.cEnd = _objectSpread({}, this.aSights[0].onG);
    } else {
      this.cEnd = _objectSpread({}, this.end);
    }

    this.center = _objectSpread({}, this.cEnd.latLng);
    this.sights = _toConsumableArray(this.aSights);

    if (this.aSights[0].completed) {
      this.completed = true;
      this.mapZoom = 8;
      this.center = _objectSpread({}, this.aSights[0].stR.latLng);
    }
  },
  methods: {
    resetMap: function resetMap() {
      this.mapZoom = 8;
    },
    changeZoom: function changeZoom() {
      if (this.showSights) {
        this.mapZoom = 12;
      } else {
        this.mapZoom = 8;
      }
    },
    zoomSight: function zoomSight(index, item) {
      this.next = index;
      this.mapZoom = 14;
      this.center = {
        lat: item.latLng.lat,
        lng: item.latLng.lng
      };
    },
    allSights: function allSights() {
      this.showSights = true;
      this.center = {
        lat: this.aSights[0].onG.lat,
        lng: this.aSights[0].onG.lng
      };
      this.sights = _toConsumableArray(this.aSights);
      this.mapZoom = 12;
      this.next = 0;
    },
    unShowSights: function unShowSights() {
      if (this.next > 0) {
        this.next--;
        this.cStart = _objectSpread({}, this.sights[this.next]);
        this.cEnd = _objectSpread({}, this.sights[this.next + 1]);
        this.mapZoom = 10;
      } else {
        this.mapZoom = 8;
      }
    }
  },
  computed: {
    curvedPath: function curvedPath() {
      var _this = this;

      /*
        FIXME: This formula will work for short distances away from
          the poles. It will not work once the curvature of the earth is
          too great
      */
      if (this.cStart && this.cEnd) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["range"])(100).map(function (i) {
          var tick = i / 99;
          /* Bezier curve -- set up the control points */

          var dlat = _this.cEnd.latLng.lat - _this.cStart.latLng.lat;
          var dlng = _this.cEnd.latLng.lng - _this.cStart.latLng.lng;
          /*const cp1 = {
            lat: this.start.latLng.lat + 0.33 * dlat + 0.33 * dlng,
            lng: this.start.latLng.lng - 0.33 * dlat + 0.33 * dlng,
          }
          const cp2 = {
            lat: this.end.latLng.lat - 0.33 * dlat + 0.33 * dlng,
            lng: this.end.latLng.lng - 0.33 * dlat - 0.33 * dlng,
          }*/

          var cp1 = {
            lat: _this.cStart.latLng.lat,
            lng: _this.cStart.latLng.lng
          };
          var cp2 = {
            lat: _this.cEnd.latLng.lat,
            lng: _this.cEnd.latLng.lng
          };
          /* Bezier curve formula */

          return {
            lat: tick * tick * tick * _this.cStart.latLng.lat + 3 * ((1 - tick) * tick * tick) * cp1.lat + 3 * ((1 - tick) * (1 - tick) * tick) * cp2.lat + (1 - tick) * (1 - tick) * (1 - tick) * _this.cEnd.latLng.lat,
            lng: tick * tick * tick * _this.cStart.latLng.lng + 3 * ((1 - tick) * tick * tick) * cp1.lng + 3 * ((1 - tick) * (1 - tick) * tick) * cp2.lng + (1 - tick) * (1 - tick) * (1 - tick) * _this.cEnd.latLng.lng
            /*lat:
              this.start.latLng.lat +
              3 * ((1 - tick) * tick * tick) +
              3 * ((1 - tick) * (1 - tick) * tick) +
              ((1 - tick) * (1 - tick) * (1 - tick)) * this.end.latLng.lat,
            lng:
              this.start.latLng.lng +
              3 * ((1 - tick) * tick * tick) +
              3 * ((1 - tick) * (1 - tick) * tick)  +
              ((1 - tick) * (1 - tick) * (1 - tick)) * this.end.latLng.lng,*/

          };
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/maps.vue?vue&type=style&index=0&id=92d0580e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/tour/maps.vue?vue&type=style&index=0&id=92d0580e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-reset[data-v-92d0580e]{\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n    border-radius: 25px;\r\n    border: solid 2px;\r\n    padding: 3px 22px;\r\n    margin-top: -6px;\n}\n.btn-reset[data-v-92d0580e]:hover{\r\n\tcolor: #fff;\r\n    background-color: #c12a38;\r\n    border-color: #c12a38;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/maps.vue?vue&type=style&index=0&id=92d0580e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/tour/maps.vue?vue&type=style&index=0&id=92d0580e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./maps.vue?vue&type=style&index=0&id=92d0580e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/maps.vue?vue&type=style&index=0&id=92d0580e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/FlightApp.vue?vue&type=template&id=15551cc2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/tour/FlightApp.vue?vue&type=template&id=15551cc2& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _vm.flights.data
    ? _c(
        "div",
        _vm._l(_vm.flights.data, function (flight, index) {
          return _c("div", { key: index }, [
            flight.flight_date == _vm.flightDate
              ? _c("div", { staticClass: "row align-items-center mb-20" }, [
                  _c("div", { staticClass: "col-md-3 col" }, [
                    _c("p", [
                      _c("b", { staticClass: "underline" }, [
                        _vm._v(_vm._s(flight.airline.name)),
                      ]),
                      _vm._v(" "),
                      _c("b", { staticClass: "text-upper" }, [
                        _vm._v(_vm._s(_vm.list)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("\n          Flying from\n          "),
                      _c("b", { staticClass: "text-info" }, [
                        _vm._v(
                          _vm._s(flight.departure.airport) +
                            " ( " +
                            _vm._s(flight.departure.iata) +
                            " )"
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        _vm._s(_vm.timeFormat(flight.departure.scheduled))
                      ),
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n          Terminal : " +
                          _vm._s(flight.departure.terminal) +
                          ", Gate :\n          " +
                          _vm._s(flight.departure.gate) +
                          "\n        "
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6 col-sm-6 col-xm-12 order-xm-3" },
                    [
                      flight.flight_status == "active"
                        ? _c("div", { staticClass: "progressbar" }, [
                            _vm._v(
                              "\n          " +
                                _vm._s(
                                  _vm.progressBar(
                                    flight.departure.scheduled,
                                    flight.arrival.scheduled
                                  )
                                ) +
                                "\n          "
                            ),
                            _c("i", {
                              staticClass: "fas fa-plane-departure",
                              style: { "margin-left": _vm.progress + "%" },
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "progress" }, [
                              _c("div", {
                                staticClass:
                                  "progress-bar progress-bar-striped progress-bar-animated",
                                style: { width: _vm.progress + "%" },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-center" }, [
                              _vm._v(
                                "\n            Journy time left: " +
                                  _vm._s(
                                    _vm.timeCalculate(flight.arrival.estimated)
                                  ) +
                                  "\n          "
                              ),
                            ]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-center w-100" }, [
                        _vm._v("\n          Flight Status : "),
                        _c("b", [_vm._v(_vm._s(flight.flight_status))]),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-3 col text-left" },
                    [
                      _c("p", [
                        _c("b", { staticClass: "underline" }, [
                          _vm._v(_vm._s(flight.airline.name)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("P", [
                        _vm._v("\n          Flying To\n          "),
                        _c("b", { staticClass: "text-info" }, [
                          _vm._v(
                            _vm._s(flight.arrival.airport) +
                              " ( " +
                              _vm._s(flight.arrival.iata) +
                              " )"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          _vm._s(_vm.timeFormat(flight.arrival.scheduled))
                        ),
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n          Terminal : " +
                            _vm._s(flight.arrival.terminal) +
                            ", Gate :\n          " +
                            _vm._s(flight.arrival.gate) +
                            "\n        "
                        ),
                      ]),
                    ],
                    1
                  ),
                ])
              : _vm._e(),
          ])
        }),
        0
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/HotelCard.vue?vue&type=template&id=75315f72&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/tour/HotelCard.vue?vue&type=template&id=75315f72& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "hotel-card" }, [
    _c("img", { attrs: { src: _vm.hotel.hotel.image } }),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col hotel_info" }, [
        _c("div", { staticClass: "rating-hotel" }, [
          _c("p", [
            _c("b", [_vm._v("Hotel Name")]),
            _vm._v(" "),
            _c("label", [
              _c(
                "div",
                { staticClass: "star-rating" },
                [
                  _vm._l(_vm.max, function (n) {
                    return _c("span", { key: n.id }, [_vm._v("☆")])
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "star-rating__current",
                      style: {
                        width: _vm.getRating(_vm.hotel.hotel.type) + "%",
                      },
                    },
                    _vm._l(_vm.integer(_vm.hotel.hotel.type), function (n) {
                      return _c("span", { key: n.id }, [_vm._v("★")])
                    }),
                    0
                  ),
                ],
                2
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("\n        " + _vm._s(_vm.hotel.hotel.name) + "\n        "),
          _c("label", [
            _c("b", [_vm._v("Check in date")]),
            _vm._v(
              "\n          : " +
                _vm._s(_vm.dateFormat(_vm.hotel.check_in)) +
                "\n        "
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("p", [
          _c("b", [_vm._v("Days stay")]),
          _vm._v(
            "\n        : " +
              _vm._s(_vm.days(_vm.hotel.check_in, _vm.hotel.check_out)) +
              "\n        "
          ),
          _c("label", [
            _c("b", [_vm._v("Check out date")]),
            _vm._v(
              "\n          : " +
                _vm._s(_vm.dateFormat(_vm.hotel.check_out)) +
                "\n        "
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/ItineraryDay.vue?vue&type=template&id=3b2f08f3&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/tour/ItineraryDay.vue?vue&type=template&id=3b2f08f3& ***!
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
  return _c("div", [
    _c("span", { staticClass: "underline" }, [
      _c("b", [_vm._v("Day " + _vm._s(_vm.itinerary.day))]),
    ]),
    _vm._v(" "),
    _vm.itinerary.day_source != _vm.itinerary.day_destination
      ? _c("span", [
          _c("b", [
            _vm._v(
              _vm._s(_vm.itinerary.day_source.toUpperCase()) +
                " -\n      " +
                _vm._s(_vm.itinerary.day_destination.toUpperCase())
            ),
          ]),
        ])
      : _c(
          "a",
          {
            attrs: { target: "_blank", href: "https://www.totoprayogo.com/#" },
          },
          [_vm._v(_vm._s(_vm.itinerary.day_source.toUpperCase()))]
        ),
    _vm._v(" "),
    _c("span", { staticClass: "float-right" }),
    _vm._v(" "),
    _c("p", { domProps: { innerHTML: _vm._s(_vm.itinerary.day_description) } }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/WeatherApp.vue?vue&type=template&id=00e1706f&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/tour/WeatherApp.vue?vue&type=template&id=00e1706f& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content" }, [
    _c("h3", { staticClass: "text-center mb-35" }, [_vm._v("WEATHER REPORT")]),
    _vm._v(" "),
    _vm.current.main
      ? _c("div", { staticClass: "weather-parent bg-weather text-white" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c("h3", [
                _c("img", {
                  staticClass: "w-45",
                  attrs: {
                    src:
                      "http://openweathermap.org/img/w/" +
                      _vm.current.weather[0].icon +
                      ".png",
                  },
                }),
                _vm._v("Today\n        "),
              ]),
              _vm._v(" "),
              _c("small", [_vm._v(_vm._s(_vm.toDayDate()))]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6 text_right" }, [
              _c("h2", { staticClass: "degree" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.RemoveDecimal(_vm.current.main.temp)) +
                    "\n          "
                ),
                _c("sup", [_vm._v("℃")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "select-city" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.cityName,
                        expression: "cityName",
                      },
                    ],
                    staticClass: "minimal text-white",
                    on: {
                      change: function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.cityName = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                    },
                  },
                  _vm._l(_vm.cityList, function (city) {
                    return _c(
                      "option",
                      { key: city, domProps: { value: city } },
                      [_vm._v(_vm._s(city))]
                    )
                  }),
                  0
                ),
              ]),
              _vm._v(" "),
              _c("small", [
                _vm._v(
                  _vm._s(_vm.current.name) +
                    ", " +
                    _vm._s(_vm.current.sys.country)
                ),
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("small", [
                _vm._v(
                  "Feels like " +
                    _vm._s(_vm.RemoveDecimal(_vm.current.main.feels_like))
                ),
              ]),
              _vm._v(".\n        "),
              _c("small", [
                _vm._v(
                  " Sunset " + _vm._s(_vm.dateToString(_vm.current.sys.sunset))
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _vm.forcast.list
            ? _c(
                "div",
                { staticClass: "row p-20" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "VueSlickCarousel",
                    _vm._b(
                      { staticClass: "w-100", attrs: { arrows: true } },
                      "VueSlickCarousel",
                      _vm.settings,
                      false
                    ),
                    _vm._l(_vm.forcast.list, function (list) {
                      return _c(
                        "div",
                        { key: list.dt, staticClass: "weather_card" },
                        [
                          _c("div", { staticClass: "data" }, [
                            _c("div", { staticClass: "text-center" }, [
                              _c("small", [
                                _vm._v(
                                  _vm._s(
                                    _vm.tConvert(list.dt_txt.split(" ")[1])
                                  )
                                ),
                              ]),
                              _vm._v(" "),
                              _c("img", {
                                staticClass: "img img-circle w-45",
                                attrs: {
                                  src:
                                    "http://openweathermap.org/img/w/" +
                                    list.weather[0].icon +
                                    ".png",
                                },
                              }),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.RemoveDecimal(list.main.temp)) +
                                    "\n                "
                                ),
                                _c("sup", [_vm._v("℃")]),
                              ]),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-center" }, [
                            _vm._v(
                              _vm._s(
                                _vm.ForcastDateConvert(
                                  list.dt_txt.split(" ")[0]
                                )
                              )
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
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("p", { staticClass: "text-center p-1" }, [_vm._v("Weather Forcast")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/TourDetail.vue?vue&type=template&id=dc9bc46a&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/tour/TourDetail.vue?vue&type=template&id=dc9bc46a& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { attrs: { id: "itinerary_detail_list" } }, [
      _vm.alldata.itinerary
        ? _c("div", { staticClass: "mb-35 w-100", attrs: { id: "roadmap" } }, [
            _c("div", { staticClass: "row w-100" }, [
              _c("div", { staticClass: "col-md-6 offset-md-2" }, [
                _c("h4", [_vm._v("TOUR PATH")]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "timeline" },
                  _vm._l(_vm.itineraryData.itinerarydays, function (data) {
                    return _c(
                      "li",
                      { key: data.id },
                      [_c("itinerary-day", { attrs: { itinerary: data } })],
                      1
                    )
                  }),
                  0
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "things-to-carrry mb-35" }, [
              _c("h3", { staticClass: "text-center mb-35" }, [
                _vm._v("THINGS TO CARRY"),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row align-items-center" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-4 col-sm-6 col-6 bottom-border border-right mb-bottom",
                  },
                  [
                    _c("div", { staticClass: "item" }, [
                      _c("img", {
                        staticClass: "bottel",
                        attrs: {
                          src: _vm.$gbiAssets + "/images/tour/bottel.png",
                        },
                      }),
                      _vm._v(" "),
                      _c("p", [_vm._v("Water Bottel")]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-4 col-sm-6 col-6 bottom-border border-right mb-bottom",
                  },
                  [
                    _c("div", { staticClass: "item text-center" }, [
                      _c("img", {
                        staticClass: "common shoes",
                        attrs: {
                          src: _vm.$gbiAssets + "/images/tour/shoes.png",
                        },
                      }),
                      _vm._v(" "),
                      _c("p", [_vm._v("Light Shoes")]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-4 col-sm-6 col-6 bottom-border mb-bottom mb-right",
                  },
                  [
                    _c("div", { staticClass: "item" }, [
                      _c("img", {
                        staticClass: "common",
                        attrs: {
                          src: _vm.$gbiAssets + "/images/tour/tourch.png",
                        },
                      }),
                      _vm._v(" "),
                      _c("p", [_vm._v("Tourch")]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-4 col-sm-6 col-6 border-right mb-bottom",
                  },
                  [
                    _c("div", { staticClass: "item text-center" }, [
                      _c("img", {
                        staticClass: "common",
                        attrs: {
                          src: _vm.$gbiAssets + "/images/tour/towel.png",
                        },
                      }),
                      _vm._v(" "),
                      _c("p", [_vm._v("Towel")]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-4 col-sm-6 col-6 border-right" },
                  [
                    _c("div", { staticClass: "item" }, [
                      _c("img", {
                        staticClass: "common",
                        attrs: {
                          src: _vm.$gbiAssets + "/images/tour/umbrelaa.png",
                        },
                      }),
                      _vm._v(" "),
                      _c("p", [_vm._v("Umbrelaa")]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 col-sm-6 col-6" }, [
                  _c("div", { staticClass: "item" }, [
                    _c("img", {
                      staticClass: "common",
                      attrs: {
                        src: _vm.$gbiAssets + "/images/tour/jacket.png",
                      },
                    }),
                    _vm._v(" "),
                    _c("p", [_vm._v("Jacket")]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _vm.hotelData
              ? _c("div", { staticClass: "hotel-section mb-35" }, [
                  _c("h3", { staticClass: "text-center mb-35" }, [
                    _vm._v("YOU WILL STAY HERE"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "row justify-content-center" },
                    _vm._l(_vm.hotelData, function (hotel) {
                      return _c(
                        "div",
                        { key: hotel.id, staticClass: "col-sm-4" },
                        [_c("hotel-card", { attrs: { hotel: hotel } })],
                        1
                      )
                    }),
                    0
                  ),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.flightData
              ? _c(
                  "div",
                  { staticClass: "airline-section mb-35" },
                  [
                    _c("h3", { staticClass: "text-center mb-35" }, [
                      _vm._v("AIRLINES DETAILS"),
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _vm._l(_vm.flightData, function (air) {
                      return _c(
                        "div",
                        { key: air.id },
                        [
                          _c("flight-app", {
                            attrs: {
                              list: air.flight_number,
                              flightDate: _vm.simpleDate(air.departure),
                            },
                          }),
                        ],
                        1
                      )
                    }),
                  ],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "map-section mb-35" },
              [
                _c("live-map", {
                  attrs: {
                    start: { latLng: _vm.alldata.startLoc },
                    end: { latLng: _vm.alldata.endLoc },
                    aSights: _vm.alldata.sights,
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "weather-section mb-35" },
              [_c("weather-app", { attrs: { cityList: _vm.cityList } })],
              1
            ),
          ])
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/maps.vue?vue&type=template&id=92d0580e&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/tour/maps.vue?vue&type=template&id=92d0580e&scoped=true& ***!
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
  return _c("div", [
    _c("div", { staticClass: "mb-4 d-flex justify-content-center" }, [
      _c("h3", { staticClass: "text-center mr-4" }, [_vm._v("TOUR MAP")]),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-reset", on: { click: _vm.resetMap } },
        [_vm._v("Reset")]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-sm-12" },
        [
          _vm.center
            ? _c(
                "GmapMap",
                {
                  ref: "map",
                  staticStyle: { width: "100%", height: "500px" },
                  attrs: { zoom: _vm.mapZoom, center: this.center },
                  on: { click: _vm.changeZoom },
                },
                [
                  _vm.cStart && !_vm.completed
                    ? _c("GmapMarker", {
                        attrs: { position: _vm.cStart.latLng, label: "◉" },
                        on: {
                          click: function ($event) {
                            return _vm.zoomSight(_vm.index, _vm.cStart)
                          },
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.cEnd && !_vm.completed && !_vm.cEnd.mark_arrive
                    ? _c("GmapMarker", {
                        attrs: {
                          position: _vm.cEnd.latLng,
                          label: _vm.cEnd.mark_arrive ? "✔" : "🏳️",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.zoomSight(_vm.index, _vm.cEnd)
                          },
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.sights, function (item, index) {
                    return item.mark_arrive
                      ? _c("GmapMarker", {
                          key: item.latLng.lat,
                          attrs: {
                            position: item.latLng,
                            label: item.mark_arrive ? "✔" : "🏳️",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.zoomSight(index, item)
                            },
                          },
                        })
                      : _vm._e()
                  }),
                  _vm._v(" "),
                  _vm.curvedPath && !_vm.completed
                    ? _c("GmapPolyline", { attrs: { path: _vm.curvedPath } })
                    : _vm._e(),
                ],
                2
              )
            : _vm._e(),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/components/tour/FlightApp.vue":
/*!**********************************************************!*\
  !*** ./resources/js/front/components/tour/FlightApp.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlightApp_vue_vue_type_template_id_15551cc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlightApp.vue?vue&type=template&id=15551cc2& */ "./resources/js/front/components/tour/FlightApp.vue?vue&type=template&id=15551cc2&");
/* harmony import */ var _FlightApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlightApp.vue?vue&type=script&lang=js& */ "./resources/js/front/components/tour/FlightApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlightApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlightApp_vue_vue_type_template_id_15551cc2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlightApp_vue_vue_type_template_id_15551cc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/tour/FlightApp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/tour/FlightApp.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/front/components/tour/FlightApp.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlightApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FlightApp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/FlightApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlightApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/tour/FlightApp.vue?vue&type=template&id=15551cc2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/front/components/tour/FlightApp.vue?vue&type=template&id=15551cc2& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlightApp_vue_vue_type_template_id_15551cc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FlightApp.vue?vue&type=template&id=15551cc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/FlightApp.vue?vue&type=template&id=15551cc2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlightApp_vue_vue_type_template_id_15551cc2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlightApp_vue_vue_type_template_id_15551cc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/tour/HotelCard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/front/components/tour/HotelCard.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HotelCard_vue_vue_type_template_id_75315f72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HotelCard.vue?vue&type=template&id=75315f72& */ "./resources/js/front/components/tour/HotelCard.vue?vue&type=template&id=75315f72&");
/* harmony import */ var _HotelCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HotelCard.vue?vue&type=script&lang=js& */ "./resources/js/front/components/tour/HotelCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HotelCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HotelCard_vue_vue_type_template_id_75315f72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HotelCard_vue_vue_type_template_id_75315f72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/tour/HotelCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/tour/HotelCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/front/components/tour/HotelCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HotelCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HotelCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/HotelCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HotelCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/tour/HotelCard.vue?vue&type=template&id=75315f72&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/front/components/tour/HotelCard.vue?vue&type=template&id=75315f72& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HotelCard_vue_vue_type_template_id_75315f72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./HotelCard.vue?vue&type=template&id=75315f72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/HotelCard.vue?vue&type=template&id=75315f72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HotelCard_vue_vue_type_template_id_75315f72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HotelCard_vue_vue_type_template_id_75315f72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/tour/ItineraryDay.vue":
/*!*************************************************************!*\
  !*** ./resources/js/front/components/tour/ItineraryDay.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItineraryDay_vue_vue_type_template_id_3b2f08f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItineraryDay.vue?vue&type=template&id=3b2f08f3& */ "./resources/js/front/components/tour/ItineraryDay.vue?vue&type=template&id=3b2f08f3&");
/* harmony import */ var _ItineraryDay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItineraryDay.vue?vue&type=script&lang=js& */ "./resources/js/front/components/tour/ItineraryDay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItineraryDay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItineraryDay_vue_vue_type_template_id_3b2f08f3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItineraryDay_vue_vue_type_template_id_3b2f08f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/tour/ItineraryDay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/tour/ItineraryDay.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/front/components/tour/ItineraryDay.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItineraryDay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItineraryDay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/ItineraryDay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItineraryDay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/tour/ItineraryDay.vue?vue&type=template&id=3b2f08f3&":
/*!********************************************************************************************!*\
  !*** ./resources/js/front/components/tour/ItineraryDay.vue?vue&type=template&id=3b2f08f3& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItineraryDay_vue_vue_type_template_id_3b2f08f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItineraryDay.vue?vue&type=template&id=3b2f08f3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/ItineraryDay.vue?vue&type=template&id=3b2f08f3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItineraryDay_vue_vue_type_template_id_3b2f08f3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItineraryDay_vue_vue_type_template_id_3b2f08f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/tour/WeatherApp.vue":
/*!***********************************************************!*\
  !*** ./resources/js/front/components/tour/WeatherApp.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WeatherApp_vue_vue_type_template_id_00e1706f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WeatherApp.vue?vue&type=template&id=00e1706f& */ "./resources/js/front/components/tour/WeatherApp.vue?vue&type=template&id=00e1706f&");
/* harmony import */ var _WeatherApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeatherApp.vue?vue&type=script&lang=js& */ "./resources/js/front/components/tour/WeatherApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WeatherApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WeatherApp_vue_vue_type_template_id_00e1706f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WeatherApp_vue_vue_type_template_id_00e1706f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/tour/WeatherApp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/tour/WeatherApp.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/front/components/tour/WeatherApp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WeatherApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WeatherApp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/WeatherApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WeatherApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/tour/WeatherApp.vue?vue&type=template&id=00e1706f&":
/*!******************************************************************************************!*\
  !*** ./resources/js/front/components/tour/WeatherApp.vue?vue&type=template&id=00e1706f& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeatherApp_vue_vue_type_template_id_00e1706f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WeatherApp.vue?vue&type=template&id=00e1706f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/tour/WeatherApp.vue?vue&type=template&id=00e1706f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeatherApp_vue_vue_type_template_id_00e1706f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WeatherApp_vue_vue_type_template_id_00e1706f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/pages/user/tour/TourDetail.vue":
/*!***********************************************************!*\
  !*** ./resources/js/front/pages/user/tour/TourDetail.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TourDetail_vue_vue_type_template_id_dc9bc46a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TourDetail.vue?vue&type=template&id=dc9bc46a& */ "./resources/js/front/pages/user/tour/TourDetail.vue?vue&type=template&id=dc9bc46a&");
/* harmony import */ var _TourDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TourDetail.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/tour/TourDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TourDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TourDetail_vue_vue_type_template_id_dc9bc46a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TourDetail_vue_vue_type_template_id_dc9bc46a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/tour/TourDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/tour/TourDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/front/pages/user/tour/TourDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TourDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/TourDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/tour/TourDetail.vue?vue&type=template&id=dc9bc46a&":
/*!******************************************************************************************!*\
  !*** ./resources/js/front/pages/user/tour/TourDetail.vue?vue&type=template&id=dc9bc46a& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourDetail_vue_vue_type_template_id_dc9bc46a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TourDetail.vue?vue&type=template&id=dc9bc46a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/TourDetail.vue?vue&type=template&id=dc9bc46a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourDetail_vue_vue_type_template_id_dc9bc46a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourDetail_vue_vue_type_template_id_dc9bc46a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/pages/user/tour/maps.vue":
/*!*****************************************************!*\
  !*** ./resources/js/front/pages/user/tour/maps.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maps_vue_vue_type_template_id_92d0580e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps.vue?vue&type=template&id=92d0580e&scoped=true& */ "./resources/js/front/pages/user/tour/maps.vue?vue&type=template&id=92d0580e&scoped=true&");
/* harmony import */ var _maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/tour/maps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _maps_vue_vue_type_style_index_0_id_92d0580e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps.vue?vue&type=style&index=0&id=92d0580e&scoped=true&lang=css& */ "./resources/js/front/pages/user/tour/maps.vue?vue&type=style&index=0&id=92d0580e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _maps_vue_vue_type_template_id_92d0580e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _maps_vue_vue_type_template_id_92d0580e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "92d0580e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/tour/maps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/tour/maps.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/front/pages/user/tour/maps.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./maps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/maps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/tour/maps.vue?vue&type=style&index=0&id=92d0580e&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/front/pages/user/tour/maps.vue?vue&type=style&index=0&id=92d0580e&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_style_index_0_id_92d0580e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./maps.vue?vue&type=style&index=0&id=92d0580e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/maps.vue?vue&type=style&index=0&id=92d0580e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_style_index_0_id_92d0580e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_style_index_0_id_92d0580e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_style_index_0_id_92d0580e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_style_index_0_id_92d0580e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/pages/user/tour/maps.vue?vue&type=template&id=92d0580e&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/front/pages/user/tour/maps.vue?vue&type=template&id=92d0580e&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_template_id_92d0580e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./maps.vue?vue&type=template&id=92d0580e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/maps.vue?vue&type=template&id=92d0580e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_template_id_92d0580e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_maps_vue_vue_type_template_id_92d0580e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);