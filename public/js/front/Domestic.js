(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/Domestic"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/gallery/Domestic.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/gallery/Domestic.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _front_components_Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/Observer */ "./resources/js/front/components/Observer.vue");
/* harmony import */ var _front_components_ImageCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/front/components/ImageCard.vue */ "./resources/js/front/components/ImageCard.vue");
/* harmony import */ var _front_components_loaders_cardImgLoader_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/front/components/loaders/cardImgLoader.vue */ "./resources/js/front/components/loaders/cardImgLoader.vue");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "HowWework",
  components: {
    ImageCard: _front_components_ImageCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Observer: _front_components_Observer__WEBPACK_IMPORTED_MODULE_1__["default"],
    cardLoader: _front_components_loaders_cardImgLoader_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  metaInfo: {
    title: "GBI Image Gallery",
    meta: [{
      name: "description",
      content: "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one"
    }, {
      name: "keywords",
      content: "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs"
    }, {
      name: "url",
      content: "https://www.gowithgbi.com/about-us/how-we-work"
    }, {
      name: "type",
      content: "website"
    }]
  },
  beforeCreate: function beforeCreate() {
    var metaInfo = {
      title: 'GBI Domestic Image Gallery',
      description: '@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one',
      keywords: '@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs',
      url: 'https://www.gowithgbi.com/image-gallery',
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  data: function data() {
    return {
      page: 1,
      loading: false,
      gallery: [],
      //gallary: [],
      apiFailed: false,
      searchQuery: '',
      resultQuery: [],
      search: false
    };
  },

  /*computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.gallery.filter(item => {
          return item.title
            .toLowerCase()
            //.split(" ")
            .includes(this.searchQuery.toLowerCase)
        });
      } else {
        return this.gallery;
      }
    }
  },*/
  methods: {
    intersected: function intersected() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, res, items;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                url = "/api/galleries/domestic?page=" + _this.page;
                _context.next = 4;
                return fetch(url);

              case 4:
                res = _context.sent;

                if (!res) {
                  _this.apiFailed = true;
                }

                _this.page++;
                _context.next = 9;
                return res.json();

              case 9:
                items = _context.sent;

                if (items.data.length > 0) {
                  _this.gallery = [].concat(_toConsumableArray(_this.gallery), _toConsumableArray(items.data));
                }

                items = [];
                _this.loading = false;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    SearchGal: function SearchGal() {
      var _this2 = this;

      if (this.searchQuery == '') {
        this.search = false;
        return false;
      }

      this.$axios.get("/api/search-gallery/" + this.searchQuery + "/domestic").then(function (response) {
        _this2.resultQuery = response.data;

        if (_this2.resultQuery.length <= 0) {//return this.$swal.fire("No Results!", "This Gallery is currently not available.", "info"); 
        } //console.log(this.resultQuery);


        _this2.search = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/gallery/Domestic.vue?vue&type=template&id=3f62da6a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/gallery/Domestic.vue?vue&type=template&id=3f62da6a& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _vm.apiFailed
    ? _c("errorState", { attrs: { imgName: "gallery_500x500.png" } })
    : _c("div", { attrs: { id: "imagegallery" } }, [
        _c("div", { staticClass: "howwework_banner text_on_image banner_bg" }, [
          _c("div", { staticClass: "content" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-sm-8 gallery-search" }, [
                _c("div", { staticClass: "outer" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.searchQuery,
                        expression: "searchQuery",
                      },
                    ],
                    staticClass: "form-control search-field",
                    attrs: { type: "search", placeholder: "Search" },
                    domProps: { value: _vm.searchQuery },
                    on: {
                      keyup: function ($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.SearchGal.apply(null, arguments)
                      },
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.searchQuery = $event.target.value
                      },
                    },
                  }),
                ]),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "container mt-5 pt-5" },
          [
            _vm.gallery.length
              ? _c(
                  "div",
                  [
                    _vm.gallery.length > 0 && !_vm.search
                      ? _c("image-card", { attrs: { gallery: _vm.gallery } })
                      : _vm.search && _vm.resultQuery.length > 0
                      ? _c("image-card", {
                          attrs: { gallery: _vm.resultQuery },
                        })
                      : _c(
                          "div",
                          {
                            staticStyle: {
                              "object-position": "center",
                              "max-width": "350px",
                              margin: "auto",
                            },
                          },
                          [
                            _c("img", {
                              attrs: {
                                src:
                                  _vm.$gbiAssets +
                                  "/assets/errorImages/gallery-search.png",
                              },
                            }),
                          ]
                        ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c("Observer", { on: { intersect: _vm.intersected } }),
            _vm._v(" "),
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
                staticClass: "row card-titles",
              },
              _vm._l(6, function (index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-sm-4" },
                  [_c("cardLoader")],
                  1
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

/***/ "./resources/js/front/pages/gallery/Domestic.vue":
/*!*******************************************************!*\
  !*** ./resources/js/front/pages/gallery/Domestic.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Domestic_vue_vue_type_template_id_3f62da6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Domestic.vue?vue&type=template&id=3f62da6a& */ "./resources/js/front/pages/gallery/Domestic.vue?vue&type=template&id=3f62da6a&");
/* harmony import */ var _Domestic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Domestic.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/gallery/Domestic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Domestic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Domestic_vue_vue_type_template_id_3f62da6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Domestic_vue_vue_type_template_id_3f62da6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/gallery/Domestic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/gallery/Domestic.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/front/pages/gallery/Domestic.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Domestic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Domestic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/gallery/Domestic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Domestic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/gallery/Domestic.vue?vue&type=template&id=3f62da6a&":
/*!**************************************************************************************!*\
  !*** ./resources/js/front/pages/gallery/Domestic.vue?vue&type=template&id=3f62da6a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Domestic_vue_vue_type_template_id_3f62da6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Domestic.vue?vue&type=template&id=3f62da6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/gallery/Domestic.vue?vue&type=template&id=3f62da6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Domestic_vue_vue_type_template_id_3f62da6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Domestic_vue_vue_type_template_id_3f62da6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);