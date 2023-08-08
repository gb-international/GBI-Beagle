(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/ItineraryEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/mixins/Vue2EditorMixin */ "./resources/js/admin/mixins/Vue2EditorMixin.js");
/* harmony import */ var _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/admin/components/form/DropdownList.vue */ "./resources/js/admin/components/form/DropdownList.vue");
/* harmony import */ var _voerro_vue_tagsinput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @voerro/vue-tagsinput */ "./node_modules/@voerro/vue-tagsinput/src/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EditItinerary",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_2__["Form"],
    ModelSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_0__["ModelSelect"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a,
    "has-error": vform__WEBPACK_IMPORTED_MODULE_2__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    "dropdown-list": _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    "tags-input": _voerro_vue_tagsinput__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_5__["default"]],
  data: function data() {
    return {
      cities: [],
      sources: '',
      destinations: '',
      itinerarydays: [],
      tour_type_list: [],
      season_list: [],
      tags: [],
      meta_key: [],
      selected: null,
      summeryWarn: false,
      meta_titleWarn: false,
      meta_keywordWarn: false,
      tagsWarn: false,
      photo: "",
      detail_photo: "",
      form: new vform__WEBPACK_IMPORTED_MODULE_2__["Form"]({
        meta_description: "",
        meta_title: "",
        meta_keyword: "",
        tags: [],
        source: "",
        destination: "",
        noofdays: "",
        title: "",
        description: "",
        tourtype: "",
        hotel_type: "",
        photo: "",
        photo_alt: "",
        detail_photo: "",
        detail_photo_alt: "",
        food: "",
        train: "",
        bus: "",
        flight: "",
        transport: "",
        client_type: "",
        tourtypes: [],
        seasons: [],
        itinerarydays: [{
          day: 1,
          day_source: "",
          day_destination: "",
          day_description: ""
        }]
      }),
      loading: false
    };
  },
  created: function created() {
    this.itineraryList();
    this.cityList();
    this.tourTypeData();
    this.seasonsData();
    this.getTags();
    this.meta_key = this.form.tags;
  },
  methods: {
    changeField: function changeField(field, input) {
      if (field === 'meta_description') {
        if (input === '') {
          this.summeryWarn = true;
        } else {
          this.summeryWarn = false;
        }
      }

      if (field === 'meta_title') {
        if (input === '') {
          this.meta_titleWarn = true;
        } else {
          this.meta_titleWarn = false;
        }
      }
      /*if(field === 'meta_keyword'){
          if(input === ''){
            this.meta_keywordWarn = true;
          } else {
            this.meta_keywordWarn = false;
          }
          
      }*/

    },
    itineraryList: function itineraryList() {
      var _this = this;

      axios.get("/api/itinerary/".concat(this.$route.params.itineraryid, "/edit")).then(function (response) {
        setTimeout(function () {
          return $("#example").DataTable();
        }, 1000);

        _this.form.fill(response.data);

        _this.photo = response.data.photo;
        _this.detail_photo = response.data.detail_photo;
        var day_data = response.data.itinerarydays;

        for (var i = 0; i < day_data.length; i++) {
          if (_this.itinerarydays.length != day_data.length) {
            _this.itinerarydays.push({
              day: day_data[i].day,
              day_source: day_data[i].day_source,
              day_destination: day_data[i].day_destination,
              day_description: day_data[i].day_description
            });
          }
        }

        for (var _i = 0; _i < response.data.tags.length; _i++) {
          _this.meta_key.push({
            value: response.data.tags[_i].title,
            key: response.data.tags[_i].id
          });
        }

        _this.img_photo = _this.form.photo;
        _this.img_detail_photo = _this.form.detail_photo;
      });
    },
    updateTags: function updateTags() {
      this.form.meta_keyword = [];

      for (var i = 0; i < this.meta_key.length; i++) {
        this.form.meta_keyword.push({
          title: this.meta_key[i].value,
          id: this.meta_key[i].key
        });
      }
    },
    getTags: function getTags() {
      var _this2 = this;

      axios.get("/api/tags").then(function (res) {
        //this.tags = response.data;
        if (res) {
          for (var i = 0; i < res.data.length; i++) {
            _this2.tags.push({
              value: res.data[i].title,
              key: res.data[i].id
            });
          } //console.log(this.form.tags)

        }
      });
    },
    cityList: function cityList() {
      var _this3 = this;

      axios.get("/api/city").then(function (res) {
        if (res.data) {
          for (var i = 0; i < res.data.data.length; i++) {
            _this3.cities.push({
              name: res.data.data[i].name,
              id: res.data.data[i].name
            });
          }
        }
      });
    },
    tourTypeData: function tourTypeData() {
      var _this4 = this;

      axios.get("/api/tourtype").then(function (response) {
        _this4.tour_type_list = response.data;
      });
    },
    seasonsData: function seasonsData() {
      var _this5 = this;

      axios.get("/api/season").then(function (response) {
        _this5.season_list = response.data;
      });
    },
    changePhoto: function changePhoto(event) {
      var _this6 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this6.form.photo = event.target.result;
        _this6.form.photo_alt = file.name;
        _this6.photo = event.target.result;
      };

      reader.readAsDataURL(file);
    },
    changeDetailPhoto: function changeDetailPhoto(event) {
      var _this7 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this7.form.detail_photo = event.target.result;
        _this7.form.detail_photo_alt = file.name;
        _this7.detail_photo = event.target.result;
      };

      reader.readAsDataURL(file);
    },
    updateItinerary: function updateItinerary() {
      var _this8 = this;

      if (!this.form.meta_keyword.length) {
        this.meta_keywordWarn = true;
        this.$toast.fire({
          icon: "error",
          title: "Meta Keywords Required"
        });
        return false;
      } else if (this.form.meta_description == '') {
        this.$toast.fire({
          icon: "error",
          title: "Meta Description Required"
        });
        return false;
      } else if (this.form.meta_title == '') {
        this.$toast.fire({
          icon: "error",
          title: "Meta Title Required"
        });
        return false;
      } else if (!this.form.seasons || this.form.seasons <= 0) {
        this.$toast.fire({
          icon: "error",
          title: "Season field is required"
        });
        return false;
      } // Set noofdays in the local storage to make it avaliable to the daypage....
      //console.log(this.form);


      localStorage.setItem("noofdays", this.form.noofdays);

      if (this.form.bus == 1 || this.form.train == 1 || this.form.flight == 1) {
        this.form.transport = "1";
      } // check if all the no of days fields are filled out


      for (var i = 0; i < this.itinerarydays.length; i++) {
        if (this.itinerarydays[i]["day_source"] == "" || this.itinerarydays[i]["day_destination"] == "" || this.itinerarydays[i]["day_description"] == "") {
          this.$toast.fire({
            icon: "error",
            title: "Make sure you fill all the fields"
          });
          return false;
        }

        this.loading = true;
        this.form.itinerarydays[i]["day_source"] = this.itinerarydays[i]["day_source"];
        this.form.itinerarydays[i]["day_destination"] = this.itinerarydays[i]["day_destination"];
        this.form.itinerarydays[i]["day_description"] = this.itinerarydays[i]["day_description"];
      }

      this.form.tags = this.form.meta_keyword; // Submit the form via a itinerary request

      this.form.put("/api/itinerary/".concat(this.$route.params.itineraryid)).then(function (response) {
        _this8.$toast.fire({
          icon: "success",
          title: "Itinerary Updated successfully"
        });

        _this8.loading = false;
      })["catch"](function () {});
    },
    addRow: function addRow() {
      this.form.noofdays += 1;
      var index = this.form.itinerarydays.length;
      this.itinerarydays.push({
        day: index + 1,
        day_source: '',
        day_destination: '',
        day_description: ""
      });
      this.form.itinerarydays.push({
        day: index + 1,
        day_source: "",
        day_destination: "",
        day_description: ""
      });
    },
    removeRow: function removeRow() {
      if (this.form.noofdays == 0) {
        return false;
      }

      this.form.noofdays -= 1;
      var index = this.form.itinerarydays.length - 1;
      this.itinerarydays.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=style&index=0&id=0a775956&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=style&index=0&id=0a775956&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.customSelect[data-v-0a775956]{\n    min-height: 53px !important;\n    font-size: 17px !important;\n    padding: 0px 40px 0 8px !important;\n    color: #737879 !important;\n    background: #fff !important;\n    font-weight: 600;\n}\n.warn-error[data-v-0a775956] {\n    width: 100%;\n    margin-top: 0.25rem;\n    font-size: 80%;\n    color: #dc3545;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=style&index=0&id=0a775956&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=style&index=0&id=0a775956&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-itinerary.vue?vue&type=style&index=0&id=0a775956&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=style&index=0&id=0a775956&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=template&id=0a775956&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=template&id=0a775956&scoped=true& ***!
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
  return _c("form-layout", {
    scopedSlots: _vm._u([
      {
        key: "formdata",
        fn: function () {
          return [
            _c("section", { staticClass: "formSection" }, [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.loading,
                      expression: "loading",
                    },
                  ],
                  staticClass: "LoaderDiv",
                },
                [
                  _c("img", {
                    staticClass: "loaderLogo",
                    attrs: { src: "/loader/logo_gif.gif" },
                  }),
                  _vm._v(" "),
                  _c("p", { staticClass: "loadText" }, [_vm._v("Loading..")]),
                ]
              ),
              _vm._v(" "),
              _c("div", [
                _c(
                  "form",
                  {
                    style: !_vm.loading ? "" : "opacity: 0.5",
                    attrs: { role: "form", enctype: "multipart/form-data" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.updateItinerary()
                      },
                    },
                  },
                  [
                    _vm.form.title
                      ? _c("div", { staticClass: "row mb-30" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { attrs: { for: "meta_title" } }, [
                                  _vm._v("Meta Title"),
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.meta_title,
                                      expression: "form.meta_title",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.form.errors.has("meta_title"),
                                  },
                                  attrs: {
                                    type: "text",
                                    placeholder: "Enter meta title",
                                  },
                                  domProps: { value: _vm.form.meta_title },
                                  on: {
                                    change: function ($event) {
                                      return _vm.changeField(
                                        "meta_title",
                                        $event.target.value
                                      )
                                    },
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "meta_title",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "meta_title",
                                  },
                                }),
                                _vm._v(" "),
                                _vm.meta_titleWarn
                                  ? _c("p", { staticClass: "warn-error" }, [
                                      _vm._v(" Please input Meta Title."),
                                    ])
                                  : _vm._e(),
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
                                _c(
                                  "label",
                                  { attrs: { for: "meta_keyword" } },
                                  [_vm._v("Meta Keywords")]
                                ),
                                _vm._v(" "),
                                _c("tags-input", {
                                  attrs: {
                                    "element-id": "tags",
                                    "existing-tags": _vm.tags,
                                    typeahead: true,
                                  },
                                  on: { "tags-updated": _vm.updateTags },
                                  model: {
                                    value: _vm.meta_key,
                                    callback: function ($$v) {
                                      _vm.meta_key = $$v
                                    },
                                    expression: "meta_key",
                                  },
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "tags" },
                                }),
                                _vm._v(" "),
                                _vm.tagsWarn && _vm.meta_key.length < 1
                                  ? _c("p", { staticClass: "warn-error" }, [
                                      _vm._v("Please choose keywords."),
                                    ])
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-12" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { attrs: { for: "description" } }, [
                                  _vm._v("Meta Description"),
                                ]),
                                _vm._v(" "),
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.meta_description,
                                      expression: "form.meta_description",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid":
                                      _vm.form.errors.has("meta_description"),
                                  },
                                  attrs: {
                                    row: "3",
                                    type: "text",
                                    placeholder: "Enter Meta Description",
                                  },
                                  domProps: {
                                    value: _vm.form.meta_description,
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.changeField(
                                        "meta_description",
                                        $event.target.value
                                      )
                                    },
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "meta_description",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "meta_description",
                                  },
                                }),
                                _vm._v(" "),
                                _vm.summeryWarn
                                  ? _c("p", { staticClass: "warn-error" }, [
                                      _vm._v(" Please input meta description."),
                                    ])
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { attrs: { for: "sourceId" } }, [
                                  _vm._v("Source"),
                                ]),
                                _vm._v(" "),
                                _c("dropdown-list", {
                                  staticClass: "mb-2",
                                  attrs: { itemList: _vm.cities },
                                  model: {
                                    value: _vm.form.source,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.form,
                                        "source",
                                        typeof $$v === "string"
                                          ? $$v.trim()
                                          : $$v
                                      )
                                    },
                                    expression: "form.source",
                                  },
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "source" },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: "destinationId" } },
                                  [_vm._v("Destination")]
                                ),
                                _vm._v(" "),
                                _c("dropdown-list", {
                                  staticClass: "mb-2",
                                  attrs: { itemList: _vm.cities },
                                  model: {
                                    value: _vm.form.destination,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.form, "destination", $$v)
                                    },
                                    expression: "form.destination",
                                  },
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "destination",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-sm-6" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "label",
                                      { attrs: { for: "noofdaysId" } },
                                      [_vm._v("Number Of Days")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.noofdays,
                                          expression: "form.noofdays",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid":
                                          _vm.form.errors.has("noofdays"),
                                      },
                                      attrs: {
                                        type: "text",
                                        readonly: "readonly",
                                        placeholder: "Enter Number Of Days",
                                        name: "noofdays",
                                        min: "1",
                                      },
                                      domProps: { value: _vm.form.noofdays },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "noofdays",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "noofdays",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-3" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn_plus text-white mt-35",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.addRow()
                                      },
                                    },
                                  },
                                  [_c("i", { staticClass: "fas fa-plus" })]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-3" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn_plus text-white mt-35",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.removeRow()
                                      },
                                    },
                                  },
                                  [_c("i", { staticClass: "fas fa-minus" })]
                                ),
                              ]),
                            ]),
                          ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-30" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "tourtypeId" } }, [
                            _vm._v("Tour Type"),
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "custom-control custom-radio custom-control-inline",
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.tourtype,
                                      expression: "form.tourtype",
                                    },
                                  ],
                                  staticClass: "custom-control-input",
                                  attrs: {
                                    type: "radio",
                                    id: "NationalId",
                                    value: "National",
                                    name: "tourtype",
                                  },
                                  domProps: {
                                    checked: _vm._q(
                                      _vm.form.tourtype,
                                      "National"
                                    ),
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "tourtype",
                                        "National"
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "custom-control-label",
                                    attrs: { for: "NationalId" },
                                  },
                                  [_vm._v("National")]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "custom-control custom-radio custom-control-inline",
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.tourtype,
                                      expression: "form.tourtype",
                                    },
                                  ],
                                  staticClass: "custom-control-input",
                                  attrs: {
                                    type: "radio",
                                    value: "International",
                                    id: "InternationalId",
                                    name: "tourtype",
                                  },
                                  domProps: {
                                    checked: _vm._q(
                                      _vm.form.tourtype,
                                      "International"
                                    ),
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "tourtype",
                                        "International"
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "custom-control-label",
                                    attrs: { for: "InternationalId" },
                                  },
                                  [_vm._v("International")]
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.form.errors.has("tourtype")
                            ? _c("div", { staticClass: "error" }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.form.errors.get("tourtype")) +
                                    "\n              "
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-5" }, [
                        _c(
                          "div",
                          { staticClass: "form-group aligen_top_input" },
                          [
                            _c("label", { attrs: { for: "hotel_type" } }, [
                              _vm._v("Hotel Type"),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "custom-control custom-radio custom-control-inline",
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.hotel_type,
                                      expression: "form.hotel_type",
                                    },
                                  ],
                                  staticClass: "custom-control-input",
                                  class: {
                                    "is-invalid":
                                      _vm.form.errors.has("hotel_type"),
                                  },
                                  attrs: {
                                    type: "radio",
                                    id: "nohotelRadio",
                                    value: "0",
                                    name: "hotel_type",
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.hotel_type, "0"),
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "hotel_type",
                                        "0"
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "custom-control-label",
                                    attrs: { for: "nohotelRadio" },
                                  },
                                  [_vm._v("No Hotel")]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "custom-control custom-radio custom-control-inline",
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.hotel_type,
                                      expression: "form.hotel_type",
                                    },
                                  ],
                                  staticClass: "custom-control-input",
                                  class: {
                                    "is-invalid":
                                      _vm.form.errors.has("hotel_type"),
                                  },
                                  attrs: {
                                    type: "radio",
                                    id: "hotelRadio",
                                    value: "3",
                                    name: "hotel_type",
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.hotel_type, "3"),
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "hotel_type",
                                        "3"
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "custom-control-label",
                                    attrs: { for: "hotelRadio" },
                                  },
                                  [_vm._v("3 Star")]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "custom-control custom-radio custom-control-inline",
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.hotel_type,
                                      expression: "form.hotel_type",
                                    },
                                  ],
                                  staticClass: "custom-control-input",
                                  class: {
                                    "is-invalid":
                                      _vm.form.errors.has("hotel_type"),
                                  },
                                  attrs: {
                                    type: "radio",
                                    id: "hotelRadio1",
                                    name: "hotel_type",
                                    value: "4",
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.hotel_type, "4"),
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "hotel_type",
                                        "4"
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "custom-control-label",
                                    attrs: { for: "hotelRadio1" },
                                  },
                                  [_vm._v("4 Star")]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "custom-control custom-radio custom-control-inline",
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.hotel_type,
                                      expression: "form.hotel_type",
                                    },
                                  ],
                                  staticClass: "custom-control-input",
                                  class: {
                                    "is-invalid":
                                      _vm.form.errors.has("hotel_type"),
                                  },
                                  attrs: {
                                    type: "radio",
                                    id: "hotelRadio2",
                                    name: "hotel_type",
                                    value: "5",
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.hotel_type, "5"),
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "hotel_type",
                                        "5"
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "custom-control-label",
                                    attrs: { for: "hotelRadio2" },
                                  },
                                  [_vm._v("5 Star")]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "hotel_type" },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "mode_of_transport" } }, [
                            _vm._v("Mode of Transport"),
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-checkbox custom-control-inline",
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.flight,
                                    expression: "form.flight",
                                  },
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "checkbox",
                                  id: "transport",
                                  "true-value": "1",
                                  "false-value": "0",
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.flight)
                                    ? _vm._i(_vm.form.flight, null) > -1
                                    : _vm._q(_vm.form.flight, "1"),
                                },
                                on: {
                                  change: function ($event) {
                                    var $$a = _vm.form.flight,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? "1" : "0"
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.form,
                                            "flight",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.form,
                                            "flight",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.form, "flight", $$c)
                                    }
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "transport" },
                                },
                                [_vm._v("Flight")]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-checkbox custom-control-inline",
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.bus,
                                    expression: "form.bus",
                                  },
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "checkbox",
                                  id: "transport1",
                                  "true-value": "1",
                                  "false-value": "0",
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.bus)
                                    ? _vm._i(_vm.form.bus, null) > -1
                                    : _vm._q(_vm.form.bus, "1"),
                                },
                                on: {
                                  change: function ($event) {
                                    var $$a = _vm.form.bus,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? "1" : "0"
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.form,
                                            "bus",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.form,
                                            "bus",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.form, "bus", $$c)
                                    }
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "transport1" },
                                },
                                [_vm._v("Bus")]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-checkbox custom-control-inline",
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.train,
                                    expression: "form.train",
                                  },
                                ],
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "checkbox",
                                  id: "transport2",
                                  "true-value": "1",
                                  "false-value": "0",
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.form.train)
                                    ? _vm._i(_vm.form.train, null) > -1
                                    : _vm._q(_vm.form.train, "1"),
                                },
                                on: {
                                  change: function ($event) {
                                    var $$a = _vm.form.train,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? "1" : "0"
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.form,
                                            "train",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.form,
                                            "train",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.form, "train", $$c)
                                    }
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "transport2" },
                                },
                                [_vm._v("Train")]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _vm.form.errors.has("transport")
                            ? _c(
                                "div",
                                { staticClass: "error" },
                                [
                                  _c(
                                    "lable",
                                    { staticClass: "danger text-danger" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.form.errors.get("transport"))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "category" } }, [
                              _vm._v("Category"),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("multiselect", {
                              attrs: {
                                options: _vm.tour_type_list,
                                multiple: true,
                                "close-on-select": true,
                                "show-labels": false,
                                placeholder: "Pick categories",
                                label: "name",
                                "track-by": "name",
                              },
                              model: {
                                value: _vm.form.tourtypes,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "tourtypes", $$v)
                                },
                                expression: "form.tourtypes",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "client_type" } }, [
                              _vm._v("Client Type"),
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.client_type,
                                    expression: "form.client_type",
                                  },
                                ],
                                staticClass: "form-control customSelect",
                                on: {
                                  change: function ($event) {
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
                                      _vm.form,
                                      "client_type",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                },
                              },
                              [
                                _c(
                                  "option",
                                  { attrs: { value: "eduInstitute" } },
                                  [_vm._v("Educational Institute")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "corporate" } },
                                  [_vm._v("Corporate")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "general" } }, [
                                  _vm._v("General"),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "client_type" },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "season" } }, [
                              _vm._v("Season"),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("multiselect", {
                              attrs: {
                                options: _vm.season_list,
                                multiple: true,
                                "close-on-select": true,
                                "show-labels": false,
                                placeholder: "Pick seasons",
                                label: "name",
                                "track-by": "name",
                              },
                              model: {
                                value: _vm.form.seasons,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "seasons", $$v)
                                },
                                expression: "form.seasons",
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-30" }, [
                      _c("div", { staticClass: "col-sm-8" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "titleId" } }, [
                              _vm._v("Title"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.title,
                                  expression: "form.title",
                                },
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("title"),
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter Title",
                                name: "title",
                              },
                              domProps: { value: _vm.form.title },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "title",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "title" },
                            }),
                          ],
                          1
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "tourtypeId" } }, [
                            _vm._v("Food"),
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "custom-control custom-radio custom-control-inline",
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.food,
                                      expression: "form.food",
                                    },
                                  ],
                                  staticClass: "custom-control-input",
                                  attrs: {
                                    type: "radio",
                                    id: "food_yes",
                                    value: "1",
                                    name: "food",
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.food, "1"),
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.$set(_vm.form, "food", "1")
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "custom-control-label",
                                    attrs: { for: "food_yes" },
                                  },
                                  [_vm._v("Yes")]
                                ),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "custom-control custom-radio custom-control-inline",
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.food,
                                      expression: "form.food",
                                    },
                                  ],
                                  staticClass: "custom-control-input",
                                  attrs: {
                                    type: "radio",
                                    value: "0",
                                    id: "food_no",
                                    name: "food",
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.food, "0"),
                                  },
                                  on: {
                                    change: function ($event) {
                                      return _vm.$set(_vm.form, "food", "0")
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    staticClass: "custom-control-label",
                                    attrs: { for: "food_no" },
                                  },
                                  [_vm._v("No")]
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _vm.form.errors.has("food")
                            ? _c("div", { staticClass: "error" }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.form.errors.get("food")) +
                                    "\n              "
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group mb-30" },
                      [
                        _c("label", { attrs: { for: "descriptionId" } }, [
                          _vm._v("Description"),
                        ]),
                        _vm._v(" "),
                        _c("vue-editor", {
                          class: {
                            "is-invalid": _vm.form.errors.has("description"),
                          },
                          attrs: {
                            customModules: _vm.customModulesForEditor,
                            editorOptions: _vm.editorSettings,
                            id: "editor",
                            useCustomImageHandler: "",
                          },
                          on: {
                            "image-added": _vm.handleImageAdded,
                            "image-removed": _vm.handleImageRemoved,
                          },
                          model: {
                            value: _vm.form.description,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "description", $$v)
                            },
                            expression: "form.description",
                          },
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "description" },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row mb-30" }, [
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                staticClass: "overflow-hidden",
                                class: {
                                  "is-invalid": _vm.form.errors.has("photo"),
                                },
                                attrs: { name: "photo", type: "file" },
                                on: {
                                  change: function ($event) {
                                    return _vm.changePhoto($event)
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _vm.photo != ""
                              ? _c("img", {
                                  attrs: {
                                    src: _vm.photo,
                                    alt: "",
                                    width: "80",
                                    height: "80",
                                  },
                                })
                              : _vm._e(),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-6" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-5" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                staticClass: "overflow-hidden",
                                class: {
                                  "is-invalid":
                                    _vm.form.errors.has("detail_photo"),
                                },
                                attrs: { type: "file" },
                                on: {
                                  change: function ($event) {
                                    return _vm.changeDetailPhoto($event)
                                  },
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-7" }, [
                            _vm.detail_photo != ""
                              ? _c("img", {
                                  staticClass: "detail_photo",
                                  attrs: {
                                    src: _vm.detail_photo,
                                    alt: "",
                                    width: "80",
                                    height: "80",
                                  },
                                })
                              : _vm._e(),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _vm._l(_vm.itinerarydays, function (data, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "card content" },
                        [
                          _c("h4", [_vm._v("Day " + _vm._s(data.day))]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-sm-6" },
                              [
                                _c("label", [_vm._v("Source")]),
                                _vm._v(" "),
                                _c("dropdown-list", {
                                  staticClass: "mb-2",
                                  attrs: { itemList: _vm.cities },
                                  model: {
                                    value: data.day_source,
                                    callback: function ($$v) {
                                      _vm.$set(data, "day_source", $$v)
                                    },
                                    expression: "data.day_source",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-sm-6" },
                              [
                                _c("label", [_vm._v("Destination")]),
                                _vm._v(" "),
                                _c("dropdown-list", {
                                  staticClass: "mb-2",
                                  attrs: { itemList: _vm.cities },
                                  model: {
                                    value: data.day_destination,
                                    callback: function ($$v) {
                                      _vm.$set(data, "day_destination", $$v)
                                    },
                                    expression: "data.day_destination",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-sm-12" },
                              [
                                _c("label", [_vm._v("Description")]),
                                _vm._v(" "),
                                _c("vue-editor", {
                                  class: {
                                    "is-invalid":
                                      _vm.form.errors.has("description"),
                                  },
                                  attrs: {
                                    customModules: _vm.customModulesForEditor,
                                    editorOptions: _vm.editorSettings,
                                    id: "editor",
                                    useCustomImageHandler: "",
                                  },
                                  on: {
                                    "image-added": _vm.handleImageAdded,
                                    "image-removed": _vm.handleImageRemoved,
                                  },
                                  model: {
                                    value: data.day_description,
                                    callback: function ($$v) {
                                      _vm.$set(data, "day_description", $$v)
                                    },
                                    expression: "data.day_description",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("form-buttons"),
                  ],
                  2
                ),
              ]),
            ]),
          ]
        },
        proxy: true,
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/mixins/Vue2EditorMixin.js":
/*!******************************************************!*\
  !*** ./resources/js/admin/mixins/Vue2EditorMixin.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var quill_image_drop_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-image-drop-module */ "./node_modules/quill-image-drop-module/index.js");
/* harmony import */ var quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill-image-resize-module */ "./node_modules/quill-image-resize-module/image-resize.min.js");
/* harmony import */ var quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2__);



var Vue2EditorMixin = {
  components: {
    "vue-editor": vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"]
  },
  data: function data() {
    return {
      customModulesForEditor: [{
        alias: "imageDrop",
        module: quill_image_drop_module__WEBPACK_IMPORTED_MODULE_1__["ImageDrop"]
      }, {
        alias: "imageResize",
        module: quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2___default.a
      }],
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {}
        }
      }
    };
  },
  methods: {
    handleImageAdded: function handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);
      axios({
        url: "/api/images",
        method: "POST",
        data: formData
      }).then(function (result) {
        var url = result.data.url; // Get url from response

        Editor.insertEmbed(cursorLocation, "image", url);
        resetUploader();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    handleImageRemoved: function handleImageRemoved(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);
      axios({
        url: "/api/images/delete",
        method: "POST",
        data: formData
      }).then(function (result) {
        var url = result.data.url; // Get url from response

        Editor.insertEmbed(cursorLocation, "image", url);
        resetUploader();
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Vue2EditorMixin);

/***/ }),

/***/ "./resources/js/admin/pages/itinerary/Edit-itinerary.vue":
/*!***************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/Edit-itinerary.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_itinerary_vue_vue_type_template_id_0a775956_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit-itinerary.vue?vue&type=template&id=0a775956&scoped=true& */ "./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=template&id=0a775956&scoped=true&");
/* harmony import */ var _Edit_itinerary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit-itinerary.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_itinerary_vue_vue_type_style_index_0_id_0a775956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit-itinerary.vue?vue&type=style&index=0&id=0a775956&scoped=true&lang=css& */ "./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=style&index=0&id=0a775956&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_itinerary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_itinerary_vue_vue_type_template_id_0a775956_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_itinerary_vue_vue_type_template_id_0a775956_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a775956",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/itinerary/Edit-itinerary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_itinerary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-itinerary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_itinerary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=style&index=0&id=0a775956&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=style&index=0&id=0a775956&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_itinerary_vue_vue_type_style_index_0_id_0a775956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-itinerary.vue?vue&type=style&index=0&id=0a775956&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=style&index=0&id=0a775956&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_itinerary_vue_vue_type_style_index_0_id_0a775956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_itinerary_vue_vue_type_style_index_0_id_0a775956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_itinerary_vue_vue_type_style_index_0_id_0a775956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_itinerary_vue_vue_type_style_index_0_id_0a775956_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=template&id=0a775956&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=template&id=0a775956&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_itinerary_vue_vue_type_template_id_0a775956_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-itinerary.vue?vue&type=template&id=0a775956&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Edit-itinerary.vue?vue&type=template&id=0a775956&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_itinerary_vue_vue_type_template_id_0a775956_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_itinerary_vue_vue_type_template_id_0a775956_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);