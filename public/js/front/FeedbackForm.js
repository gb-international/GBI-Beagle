(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/FeedbackForm"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FeedbackLink",
  components: {},
  data: function data() {
    return {
      itinerary: "",
      feedback: {
        name: "",
        ph_no: "",
        email: "",
        tour_id: "",
        trip_itenerary: 0,
        place_of_stay: 0,
        food_quality: 0,
        transport_arrangements: 0,
        recommend_to_others: 0,
        travel_again: 0,
        escort_hospitality: 0,
        comments: ""
      }
    };
  },
  beforeCreate: function beforeCreate() {
    var metaInfo = {
      title: 'GBI Feedback Form',
      description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
      keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
      url: 'https://www.gowithgbi.com/feedback',
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  mounted: function mounted() {
    $(".feedback-slider").mousemove(function (e) {
      var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      var percent = val * 100;
      $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + percent + '%, #17a2b8), ' + 'color-stop(' + percent + '%, #d3d3d3)' + ')');
      $(this).css('background-image', '-moz-linear-gradient(left center, #17a2b8 0%, #17a2b8 ' + percent + '%, #17a2b8 ' + percent + '%, #17a2b8 100%)');
    });
    $(".feedback-slider").on("touchmove", function (e) {
      var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      var percent = val * 100;
      $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + percent + '%, #17a2b8), ' + 'color-stop(' + percent + '%, #d3d3d3)' + ')');
      $(this).css('background-image', '-moz-linear-gradient(left center, #17a2b8 0%, #17a2b8 ' + percent + '%, #17a2b8 ' + percent + '%, #17a2b8 100%)');
    });
    $(".feedback-slider").on("tap", function (e) {
      var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      var percent = val * 100;
      $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + percent + '%, #17a2b8), ' + 'color-stop(' + percent + '%, #d3d3d3)' + ')');
      $(this).css('background-image', '-moz-linear-gradient(left center, #17a2b8 0%, #17a2b8 ' + percent + '%, #17a2b8 ' + percent + '%, #17a2b8 100%)');
    });
    this.feedback.tour_id = this.$route.params.tourID;
    this.getTour();
  },
  computed: {},
  methods: {
    getTour: function getTour() {
      var _this = this;

      this.$axios.get("/api/get-tour/" + this.$route.params.tourID).then(function (response) {
        _this.itinerary = response.data;
      });
    },
    submitFeedback: function submitFeedback() {
      var _this2 = this;

      if (this.feedback.name == "" || this.feedback.ph_no == "" || this.feedback.email == "" || this.feedback.tour_id == "" || this.feedback.trip_itenerary == 0 || this.feedback.place_of_stay == 0 || this.feedback.food_quality == 0 || this.feedback.transport_arrangements == 0 || this.feedback.recommend_to_others == 0 || this.feedback.travel_again == 0 || this.feedback.escort_hospitality == 0) {
        this.$swal.fire({
          icon: 'warning',
          title: "Error",
          text: "Please fill out all the fields correctly."
        });
      } else if (String(this.feedback.ph_no).length !== 10) {
        this.$toast.fire({
          icon: "error",
          title: "Please provide a valid phone number."
        });
      } else {
        this.$axios.post("/api/feedback-submit", this.feedback, {}).then(function (response) {
          if (response.data == "error") {
            _this2.$swal.fire({
              icon: 'warning',
              title: "Error",
              text: "Error Occured, Please Try Again."
            });
          }
        })["catch"](function (error) {});
        this.$swal.fire("Success", "Feedback Submitted", "success");
        window.location.href = '/';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=style&index=0&id=7a5ce574&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=style&index=0&id=7a5ce574&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.feedback-container[data-v-7a5ce574] {\n  height: 100%;\n  width: 60%;\n  font-family: sans-serif;\n  margin: auto;\n}\n.FormTitle[data-v-7a5ce574]{\n  text-align: center;\n  font-size: 35px;\n  padding-top: 60px; \n  padding-bottom: 40px;\n  font-weight: 550;\n  margin-left: -10px\n}\n.TourDetails[data-v-7a5ce574]{\n  font-size: 25px;\n  font-weight: 550;\n  padding-bottom: 35px;\n}\n.FeedbackQ[data-v-7a5ce574]{\n  font-size: 18px;\n  font-weight: 500;\n  color: black;\n  margin-bottom: 45px;\n}\n.inputDiv[data-v-7a5ce574]{\n  display: flex;\n}\n.form-control[data-v-7a5ce574]{\n  border: solid gray 1px;\n  height: 50px;\n  border-radius: 0px;\n  width: 98%;\n}\n.feedback-slider[data-v-7a5ce574] {\n  -webkit-appearance: none;\n  width: 300px;\n  height: 12.5px;\n  background: #d3d3d3;\n  border-radius: 15px;\n  margin-right: 7px;\n}\n.feedback-slider[data-v-7a5ce574]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: solid #17a2b8 6px;\n  background: white;\n  cursor: pointer;\n}\n.feedback-slider[data-v-7a5ce574]::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: solid #17a2b8 6px;\n  background: white;\n  cursor: pointer;\n}\n.feedback-slide[data-v-7a5ce574]::-ms-thumb {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: solid #17a2b8 6px;\n  background: white;\n  cursor: pointer;\n}\n.range-value[data-v-7a5ce574] {\n  display: inline-block;\n  position: relative;\n  width: 60px;\n  color: #fff;\n  font-size: 16px;\n  font-weight:bold;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: #17a2b8;\n  padding: 5px 10px;\n  margin-left: 7px;\n}\n.range-value[data-v-7a5ce574]:after {\n  position: absolute;\n  top: 8px;\n  left: -7px;\n  width: 0;\n  height: 0;\n  border-top: 7px solid transparent;\n  border-right: 7px solid #17a2b8;\n  border-bottom: 7px solid transparent;\n  content: '';\n}\n.commentArea[data-v-7a5ce574]{\n  background: #d3d3d3;\n  border: none;\n  outline-color: #17a2b8;\n  width: 100%;\n}\n.submitButton[data-v-7a5ce574]{\n  border-radius: 3px;\n  border: 1px;\n  border-radius: 0px;\n  outline: none;\n  padding: 15px 70px;\n  margin-top: 10px;\n  color: white;\n  font-size: 20px !important;\n  font-weight: 500;\n  font-family: sans-serif;\n  background-color: #17a2b8;\n}\n.submitDiv[data-v-7a5ce574]{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.emailField[data-v-7a5ce574]{\n  width: 98.9%\n}\n.valDiv[data-v-7a5ce574]{\n  margin-top: -5px; \n  font-size: 15px; \n  font-weight: 500;\n  padding:  6px;\n  background: grey;\n}\ninput[type=range][data-v-7a5ce574] {\n  pointer-events: none;\n}\ninput[type=range][data-v-7a5ce574]::-webkit-slider-thumb {\n  pointer-events: auto;\n}\ninput[type=range][data-v-7a5ce574]::-moz-range-thumb {\n  pointer-events: auto;\n}\ninput[type=range][data-v-7a5ce574]::-ms-thumb {\n  pointer-events: auto;\n}\n@media only screen and (max-width: 1024px) {\n.feedback-container[data-v-7a5ce574] {\n    width: 90%;\n}\n.submitDiv[data-v-7a5ce574]{\n    width: 90%;\n}\n.FormTitle[data-v-7a5ce574]{\n    font-size: 25px;\n}\n.TourDetails[data-v-7a5ce574]{\n    font-size: 20px;\n}\n.feedback-slider[data-v-7a5ce574] {\n    width: 200px;\n}\n}\n@media only screen and (max-width: 720px) {\n.commentArea[data-v-7a5ce574] {\n     width: 100%;\n}\n.emailField[data-v-7a5ce574]{\n    width: 100%\n}\n.submitDiv[data-v-7a5ce574]{\n    width: 100%;\n}\n}\n\n\n/* Chrome, Safari, Edge, Opera */\ninput[data-v-7a5ce574]::-webkit-outer-spin-button,\ninput[data-v-7a5ce574]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number][data-v-7a5ce574] {\n  -moz-appearance: textfield;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=style&index=0&id=7a5ce574&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=style&index=0&id=7a5ce574&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedbackform.vue?vue&type=style&index=0&id=7a5ce574&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=style&index=0&id=7a5ce574&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=template&id=7a5ce574&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=template&id=7a5ce574&scoped=true& ***!
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
  return _c("div", { staticClass: "feedback-container" }, [
    _c("h1", { staticClass: "FormTitle" }, [_vm._v("GBI FEEDBACK FORM")]),
    _vm._v(" "),
    _vm.itinerary !== ""
      ? _c("h2", { staticClass: "TourDetails" }, [
          _vm._v(
            _vm._s(_vm.itinerary.noofdays) +
              " DAYS TOUR TO " +
              _vm._s(_vm.itinerary.title)
          ),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("form", [
      _c("div", { staticClass: "feedback-section " }, [
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [_vm._v("Did you like the Itinerary of this trip?")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.trip_itenerary,
                expression: "feedback.trip_itenerary",
              },
            ],
            staticClass: "feedback-slider",
            attrs: {
              type: "range",
              min: "1",
              max: "10",
              name: "trip_itenerary",
            },
            domProps: { value: _vm.feedback.trip_itenerary },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "trip_itenerary",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.trip_itenerary)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [_vm._v("How Would You Rate Your Place Of Stay?")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.place_of_stay,
                expression: "feedback.place_of_stay",
              },
            ],
            staticClass: "feedback-slider",
            attrs: { type: "range", min: "1", max: "10" },
            domProps: { value: _vm.feedback.place_of_stay },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "place_of_stay",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.place_of_stay)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [_vm._v("How Would You Rate the food quality and service?")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.food_quality,
                expression: "feedback.food_quality",
              },
            ],
            staticClass: "feedback-slider",
            attrs: { type: "range", min: "1", max: "10" },
            domProps: { value: _vm.feedback.food_quality },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "food_quality",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.food_quality)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [
            _vm._v("How were your Transportation and other arrangements?"),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.transport_arrangements,
                expression: "feedback.transport_arrangements",
              },
            ],
            staticClass: "feedback-slider",
            attrs: { type: "range", min: "1", max: "10" },
            domProps: { value: _vm.feedback.transport_arrangements },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "transport_arrangements",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.transport_arrangements)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [
            _vm._v(
              "How likely would you Recommend GB International To Others?"
            ),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.recommend_to_others,
                expression: "feedback.recommend_to_others",
              },
            ],
            staticClass: "feedback-slider",
            attrs: { type: "range", min: "1", max: "10" },
            domProps: { value: _vm.feedback.recommend_to_others },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "recommend_to_others",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.recommend_to_others)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [
            _vm._v("Would you like to Travel with GBI again on a new Journey?"),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.travel_again,
                expression: "feedback.travel_again",
              },
            ],
            staticClass: "feedback-slider",
            attrs: { type: "range", min: "1", max: "10" },
            domProps: { value: _vm.feedback.travel_again },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "travel_again",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.travel_again)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [
            _vm._v(
              "How hospitable was our GBI Escort who accompanied with you on this trip?"
            ),
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.escort_hospitality,
                expression: "feedback.escort_hospitality",
              },
            ],
            staticClass: "feedback-slider",
            attrs: { type: "range", min: "1", max: "10" },
            domProps: { value: _vm.feedback.escort_hospitality },
            on: {
              __r: function ($event) {
                return _vm.$set(
                  _vm.feedback,
                  "escort_hospitality",
                  $event.target.value
                )
              },
            },
          }),
          _vm._v(" "),
          _c("span", { staticClass: "range-value" }, [
            _vm._v(_vm._s(_vm.feedback.escort_hospitality)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("p", [_vm._v("Other Comments")]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.feedback.comments,
                expression: "feedback.comments",
              },
            ],
            staticClass: "commentArea",
            attrs: { placeholder: "", cols: "", rows: "5" },
            domProps: { value: _vm.feedback.comments },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.feedback, "comments", $event.target.value)
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "FeedbackQ" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.feedback.name,
                        expression: "feedback.name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Name" },
                    domProps: { value: _vm.feedback.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.feedback, "name", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("has-error", { attrs: { form: _vm.form, field: "name" } }),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "ph_no" } }, [
                    _vm._v("Phone Number"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.feedback.ph_no,
                        expression: "feedback.ph_no",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", placeholder: "Phone Number" },
                    domProps: { value: _vm.feedback.ph_no },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.feedback, "ph_no", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "ph_no" },
                  }),
                ],
                1
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c(
                "div",
                { staticClass: "form-group emailField" },
                [
                  _c("label", { attrs: { for: "email" } }, [
                    _vm._v("Email ID "),
                    _vm.$route.name == "FeedbackForm2"
                      ? _c("span", { staticStyle: { "font-size": "14px" } }, [
                          _vm._v("(Please enter your registered Email ID)"),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.feedback.email,
                        expression: "feedback.email",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "email", placeholder: "Email ID" },
                    domProps: { value: _vm.feedback.email },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.feedback, "email", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "email" },
                  }),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "submitDiv" }, [
        _c(
          "button",
          { staticClass: "submitButton", on: { click: _vm.submitFeedback } },
          [_vm._v("SUBMIT")]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/pages/Feedback/feedbackform.vue":
/*!************************************************************!*\
  !*** ./resources/js/front/pages/Feedback/feedbackform.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feedbackform_vue_vue_type_template_id_7a5ce574_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedbackform.vue?vue&type=template&id=7a5ce574&scoped=true& */ "./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=template&id=7a5ce574&scoped=true&");
/* harmony import */ var _feedbackform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedbackform.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _feedbackform_vue_vue_type_style_index_0_id_7a5ce574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedbackform.vue?vue&type=style&index=0&id=7a5ce574&scoped=true&lang=css& */ "./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=style&index=0&id=7a5ce574&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _feedbackform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _feedbackform_vue_vue_type_template_id_7a5ce574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _feedbackform_vue_vue_type_template_id_7a5ce574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7a5ce574",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/Feedback/feedbackform.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedbackform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedbackform.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedbackform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=style&index=0&id=7a5ce574&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=style&index=0&id=7a5ce574&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedbackform_vue_vue_type_style_index_0_id_7a5ce574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedbackform.vue?vue&type=style&index=0&id=7a5ce574&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=style&index=0&id=7a5ce574&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedbackform_vue_vue_type_style_index_0_id_7a5ce574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedbackform_vue_vue_type_style_index_0_id_7a5ce574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedbackform_vue_vue_type_style_index_0_id_7a5ce574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedbackform_vue_vue_type_style_index_0_id_7a5ce574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=template&id=7a5ce574&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=template&id=7a5ce574&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedbackform_vue_vue_type_template_id_7a5ce574_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedbackform.vue?vue&type=template&id=7a5ce574&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Feedback/feedbackform.vue?vue&type=template&id=7a5ce574&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedbackform_vue_vue_type_template_id_7a5ce574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedbackform_vue_vue_type_template_id_7a5ce574_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);