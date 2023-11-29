"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/feedbacks"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FeedbackList",
  components: {//'pagination':pagination,
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__.Form({
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['items'])),
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-9fb58476] {\r\n  box-sizing: border-box;\r\n  outline: none;\n}\nbody[data-v-9fb58476] {\r\n  margin: 0;\r\n  font-family: Sans-serif;\n}\n.feedback-full[data-v-9fb58476] {\r\n  background-color: #f2f3f7;\r\n  width: 100%;\r\n  padding: 8px 30px;\r\n  display: flex;\r\n  flex-direction: column;\n}\n.feedback-body[data-v-9fb58476] {\r\n  flex: 1;\r\n  display: flex;\n}\n.feedback-container[data-v-9fb58476] {\r\n  height: 100%;\r\n  display: flex;\n}\n.mail-left-side[data-v-9fb58476] {\r\n  width: 40%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  padding: 20px 0px 5px 0px;\n}\n.mail-card[data-v-9fb58476] {\r\n  background-color: #dad7d79c;\r\n  border-radius: 21px;\r\n  margin-top: 5px;\r\n  margin-bottom: 15px;\r\n  padding: 15px 15px 15px 15px;\r\n  transition: 0.3s;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n}\n.mail-card[data-v-9fb58476]:hover {\r\n  box-shadow: none;\n}\n.mail-names[data-v-9fb58476] {\r\n  color: #000000b8;\r\n  font-size: 16px;\r\n  font-weight: 500;\n}\n.mails[data-v-9fb58476] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\n}\n.mail-info[data-v-9fb58476] {\r\n  margin: 2px 65px;\r\n  margin-left: 0px;\r\n  font-weight: 500;\r\n  font-size: 12.5px;\r\n  color: grey;\n}\n.mail-info p[data-v-9fb58476] {\r\n margin-top: -2.5px;\r\n margin-bottom: 6px;\r\n font-size: 15px;\r\n font-weight: 600;\n}\n.date[data-v-9fb58476] {\r\n  color: grey;\r\n  float: right;\r\n  font-size: 12px;\r\n  font-weight: 500;\n}\n.mail-right-side[data-v-9fb58476] {\r\n  margin-left: 35px;\r\n  flex: 1;\n}\n.mail-right-body[data-v-9fb58476]{\r\n  background-color: #e1e1e1e1;\r\n  position: relative;\r\n  padding: 22px 20px 20px 20px;\r\n  border-radius: 18px;\r\n  font-size: 16px;\r\n  padding-bottom: 150px;\r\n  margin: 20px 10px;\r\n  color: #000000b8;\n}\n.message-body[data-v-9fb58476] {\r\n  overflow: auto;\r\n  height: 600px;\r\n  width: 100%;\r\n  margin-top: 18px;\r\n  color: black;\n}\n.message-title[data-v-9fb58476] {\r\n  display: flex;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: grey;\n}\n.message-title b[data-v-9fb58476]{\r\n  font-size: 14px;\r\n  padding-left: 5px;\r\n  color: #000000b8;\r\n  font-weight: 700;\n}\n.message-tour-info[data-v-9fb58476]{\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: #7f7a7a;\r\n  margin-bottom: 21px;\n}\n.mail-right-top[data-v-9fb58476]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  margin-left: 10px;\n}\n.cButton[data-v-9fb58476] {\r\n  border-radius: 3px;\r\n  border: 1px;\r\n  border-radius: 100px;\r\n  outline: none;\n}\n.replyButton[data-v-9fb58476] {\r\n  padding: 12px 38px;\r\n  margin-top: 20px;\r\n  color: white;\r\n  font-size: 19px !important;\r\n  font-weight: 600;\r\n  font-family: Hawaii 5-0, sans-serif;\r\n  background-color: #3ebee4;\n}\n.sendLinkButton[data-v-9fb58476]{\r\n  padding: 7px 38px;\r\n  margin-top: 12px;\r\n  color: #3ebee4;\r\n  font-size: 17px !important;\r\n  font-weight: 600;\r\n  font-family: Hawaii 5-0, sans-serif;\r\n  background-color: #f4f6f9;\r\n  border: solid 2px #3ebee4;\n}\n.attachIcon[data-v-9fb58476]{\r\n  font-size: 32px; \r\n  padding-right: 10px; \r\n  font-weight: 300; \r\n  color: grey;\n}\n.filter-dd[data-v-9fb58476]{\r\n  border-radius: 10px; \r\n  margin-left: 30px;\n}\n.filter-dd2[data-v-9fb58476]{\r\n  border-radius: 10px;\n}\n.arrow-buttons[data-v-9fb58476]{\r\n  padding: 5px 20px;\r\n  border: none;\r\n  background-color: #dad7d79c;\r\n  margin-left: 10px;\n}\n.mail-left-top[data-v-9fb58476]{\r\n  display: flex; \r\n  flex-direction: row; \r\n  justify-content: space-between;\r\n  margin-top: 7px;\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n  margin-bottom: 15px;\n}\n.bottom-items[data-v-9fb58476]{\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: 20px;\n}\n[data-v-9fb58476]::-webkit-scrollbar {\r\n  width: 10px;\n}\r\n\r\n/* Track */\n[data-v-9fb58476]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\n}\r\n\r\n/* Handle */\n[data-v-9fb58476]::-webkit-scrollbar-thumb {\r\n  background: #888;\n}\r\n\r\n/* Handle on hover */\n[data-v-9fb58476]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/admin/pages/feedback/feedback-list.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/pages/feedback/feedback-list.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-list.vue?vue&type=template&id=9fb58476&scoped=true& */ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true&");
/* harmony import */ var _feedback_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback-list.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js&");
/* harmony import */ var _feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& */ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _feedback_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9fb58476",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/feedback/feedback-list.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./feedback-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./feedback-list.vue?vue&type=template&id=9fb58476&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
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
                              ", +91" + _vm._s(item.ph_no) + "\r\n            "
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
                              "\r\n            "
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
                            "\r\n            "
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
                            "\r\n            "
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
                            "\r\n            "
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
                            "\r\n            "
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
                            "\r\n            "
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
                            "\r\n            "
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
                          _vm._s(_vm.currentItem.comments) + "\r\n            "
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
      _vm._v("\r\n              From: \r\n              "),
      _c("br"),
      _vm._v("To:\r\n              "),
      _c("br"),
      _vm._v("Date:\r\n              "),
      _c("br"),
      _vm._v("Mobile:\r\n             "),
    ])
  },
]
render._withStripped = true



/***/ })

}]);