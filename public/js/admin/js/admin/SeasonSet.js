<<<<<<< Updated upstream
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/SeasonSet"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/BackButton.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/BackButton.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
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
  name: "BackButtonGBI",
  props: ['url'],
  methods: {
    goBack: function goBack() {
      this.$router.back();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/FormButtons.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/FormButtons.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_components_buttons_BackButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/admin/components/buttons/BackButton.vue */ "./resources/js/admin/components/buttons/BackButton.vue");
//
//
//
//
//
//
//
//
//
//
//
 //import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FormButtonGBI",
  props: ['loading'],
  components: {
    'back-button': _admin_components_buttons_BackButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"] //'submit-button':SubmitButton

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/form/DropdownList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/form/DropdownList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_directive_click_away_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/admin/directive/click-away.js */ "./resources/js/admin/directive/click-away.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DropDownFilter",
  props: {
    itemList: {
      type: Array,
      required: true
    },
    value: {},
    placeholder: {
      type: String,
      "default": "Enter name to search"
    }
  },
  data: function data() {
    return {
      selectedItem: {},
      arrowCounter: 0,
      inputValue: "",
      apiLoaded: false,
      showlist: false,
      edit_flag: false,
      content: this.value
    };
  },
  watch: {
    itemList: function itemList() {
      if (this.itemList.length > 0) {
        this.getSelected(this.content);
      }
    }
  },
  created: function created() {
    if (this.value) {
      this.getSelected(this.value);
    }

    document.addEventListener("keyup", this.nextItem);
  },
  methods: {
    nextItem: function nextItem(event) {
      event.preventDefault();

      if (event.keyCode == 38 && this.arrowCounter > 1) {
        this.arrowCounter--;
        this.fixScrolling();
      } else if (event.keyCode == 40 && this.arrowCounter < this.itemList.length - 1) {
        this.arrowCounter++;
        this.fixScrolling();
      }
    },
    fixScrolling: function fixScrolling() {
      if (this.showlist) {
        if (this.$refs.options[this.arrowCounter]) {
          var liH = this.$refs.options[this.arrowCounter].clientHeight;
        }

        if (this.$refs.scrollContainer) {
          this.$refs.scrollContainer.scrollTop = liH * this.arrowCounter;
        }
      }
    },
    closeEvent: function closeEvent() {
      if (this.showlist) {
        this.edit_flag = false;
        this.getSelected(this.content);
        this.showlist = false;
        this.arrowCounter = 0;
      }
    },
    getSelected: function getSelected(value) {
      if (this.itemList != undefined && this.edit_flag == false) {
        for (var i = 0; i < this.itemList.length; i++) {
          if (this.itemList[i].id == value) {
            this.selectedItem = this.itemList[i];
            this.inputValue = this.itemList[i].name;
            this.edit_flag = true;
          }
        }
      }
    },
    showToggle: function showToggle() {
      this.showlist = !this.showlist;
    },
    optionChanged: function optionChanged() {
      this.$emit("input", this.selectedItem.id);
    },
    resetSelection: function resetSelection() {
      var _this = this;

      this.selectedItem = {};
      this.inputValue = "";
      this.showlist = true;
      this.$nextTick(function () {
        return _this.$refs.dropdowninput.focus();
      });
      this.$emit("on-item-reset");
    },
    remodeReadOnlyError: function remodeReadOnlyError() {
      $(".dropdown-input").attr("readonly", false);
    },
    selectItem: function selectItem(theItem) {
      this.selectedItem = theItem;
      this.content = theItem.id;
      this.$emit("input", this.content);
      this.inputValue = "";
      this.showlist = false;
      this.$emit("change", theItem.id);
    },
    itemVisible: function itemVisible(item) {
      var currentName = item.name.toLowerCase();
      var currentInput = this.inputValue.toLowerCase();
      return currentName.includes(currentInput);
    }
  },
  destroyed: function destroyed() {
    document.removeEventListener("keyup", this.nextItem);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/FormLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/FormLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FromLayoutGBI",
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/seasons/Set.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/seasons/Set.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/mixins/Vue2EditorMixin */ "./resources/js/admin/mixins/Vue2EditorMixin.js");
/* harmony import */ var _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/components/form/DropdownList.vue */ "./resources/js/admin/components/form/DropdownList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EditSeason",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__.Form,
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__.HasError,
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "dropdown-filter": _admin_components_form_DropdownList_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      season_list: [],
      form: new vform__WEBPACK_IMPORTED_MODULE_0__.Form({
        current: ""
      }),
      allCreated: false
    };
  },
  mixins: [_admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_3__["default"]],
  created: function created() {
    this.SeasonData();
    this.SeasonListData();
  },
  methods: {
    SeasonData: function SeasonData() {
      var _this = this;

      axios.get("/api/current-season").then(function (response) {
        if (response.data) {
          _this.form.current = response.data.current;
          _this.allCreated = true;
        }
      });
    },
    SeasonListData: function SeasonListData() {
      var _this2 = this;

      axios.get("/api/season").then(function (response) {
        if (response.data) {
          for (var i = 0; i < response.data.length; i++) {
            _this2.season_list.push({
              id: response.data[i].name,
              name: response.data[i].name
            });
          }
        }
      });
    },
    currentUpdate: function currentUpdate(value) {
      this.form.current = value.id;
    },
    updateSeason: function updateSeason() {
      var _this3 = this;

      this.form.put("/api/current-season/set").then(function (response) {
        //this.$router.push("/list-seasons");
        _this3.$toast.fire({
          icon: "success",
          title: "Season Updated"
        });
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/directive/click-away.js":
/*!****************************************************!*\
  !*** ./resources/js/admin/directive/click-away.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

vue__WEBPACK_IMPORTED_MODULE_0__["default"].directive('click-outside', {
  bind: function bind(el, binding, vnode) {
    window.event = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };

    document.body.addEventListener('click', window.event);
  },
  unbind: function unbind(el) {
    document.body.removeEventListener('click', window.event);
  }
});

/***/ }),

/***/ "./resources/js/admin/mixins/Vue2EditorMixin.js":
/*!******************************************************!*\
  !*** ./resources/js/admin/mixins/Vue2EditorMixin.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var quill_image_drop_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-image-drop-module */ "./node_modules/quill-image-drop-module/index.js");
/* harmony import */ var quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill-image-resize-module */ "./node_modules/quill-image-resize-module/image-resize.min.js");
/* harmony import */ var quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2__);



var Vue2EditorMixin = {
  components: {
    "vue-editor": vue2_editor__WEBPACK_IMPORTED_MODULE_0__.VueEditor
  },
  data: function data() {
    return {
      customModulesForEditor: [{
        alias: "imageDrop",
        module: quill_image_drop_module__WEBPACK_IMPORTED_MODULE_1__.ImageDrop
      }, {
        alias: "imageResize",
        module: (quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2___default())
      }],
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {},
          toolbar: [//[{ header: [false, 1, 2, 3, 4, 5, 6] }],
          ["bold", "italic", "underline", "strike"], // toggled buttons
          [{
            align: ""
          }, {
            align: "center"
          }, {
            align: "right"
          }, {
            align: "justify"
          }], ["blockquote", "code-block"], [{
            list: "ordered"
          }, {
            list: "bullet"
          }, {
            list: "check"
          }], [{
            indent: "-1"
          }, {
            indent: "+1"
          }], // outdent/indent
          [{
            color: []
          }, {
            background: []
          }], // dropdown with defaults from theme
          ["link", "image", "video"], ["clean"] // remove formatting button
          ]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vue2EditorMixin);

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = __webpack_require__.g.TYPED_ARRAY_SUPPORT !== undefined
  ? __webpack_require__.g.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/quill-image-drop-module/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/quill-image-drop-module/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageDrop: () => (/* binding */ ImageDrop)
/* harmony export */ });
/**
 * Custom module for quilljs to allow user to drag images from their file system into the editor
 * and paste images from clipboard (Works on Chrome, Firefox, Edge, not on Safari)
 * @see https://quilljs.com/blog/building-a-custom-module/
 */
class ImageDrop {

	/**
	 * Instantiate the module given a quill instance and any options
	 * @param {Quill} quill
	 * @param {Object} options
	 */
	constructor(quill, options = {}) {
		// save the quill reference
		this.quill = quill;
		// bind handlers to this instance
		this.handleDrop = this.handleDrop.bind(this);
		this.handlePaste = this.handlePaste.bind(this);
		// listen for drop and paste events
		this.quill.root.addEventListener('drop', this.handleDrop, false);
		this.quill.root.addEventListener('paste', this.handlePaste, false);
	}

	/**
	 * Handler for drop event to read dropped files from evt.dataTransfer
	 * @param {Event} evt
	 */
	handleDrop(evt) {
		evt.preventDefault();
		if (evt.dataTransfer && evt.dataTransfer.files && evt.dataTransfer.files.length) {
			if (document.caretRangeFromPoint) {
				const selection = document.getSelection();
				const range = document.caretRangeFromPoint(evt.clientX, evt.clientY);
				if (selection && range) {
					selection.setBaseAndExtent(range.startContainer, range.startOffset, range.startContainer, range.startOffset);
				}
			}
			this.readFiles(evt.dataTransfer.files, this.insert.bind(this));
		}
	}

	/**
	 * Handler for paste event to read pasted files from evt.clipboardData
	 * @param {Event} evt
	 */
	handlePaste(evt) {
		if (evt.clipboardData && evt.clipboardData.items && evt.clipboardData.items.length) {
			this.readFiles(evt.clipboardData.items, dataUrl => {
				const selection = this.quill.getSelection();
				if (selection) {
					// we must be in a browser that supports pasting (like Firefox)
					// so it has already been placed into the editor
				}
				else {
					// otherwise we wait until after the paste when this.quill.getSelection()
					// will return a valid index
					setTimeout(() => this.insert(dataUrl), 0);
				}
			});
		}
	}

	/**
	 * Insert the image into the document at the current cursor position
	 * @param {String} dataUrl  The base64-encoded image URI
	 */
	insert(dataUrl) {
		const index = (this.quill.getSelection() || {}).index || this.quill.getLength();
		this.quill.insertEmbed(index, 'image', dataUrl, 'user');
	}

	/**
	 * Extract image URIs a list of files from evt.dataTransfer or evt.clipboardData
	 * @param {File[]} files  One or more File objects
	 * @param {Function} callback  A function to send each data URI to
	 */
	readFiles(files, callback) {
		// check each file for an image
		[].forEach.call(files, file => {
			if (!file.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp|vnd\.microsoft\.icon)/i)) {
				// file is not an image
				// Note that some file formats such as psd start with image/* but are not readable
				return;
			}
			// set up file reader
			const reader = new FileReader();
			reader.onload = (evt) => {
				callback(evt.target.result);
			};
			// read the clipboard item or file
			const blob = file.getAsFile ? file.getAsFile() : file;
			if (blob instanceof Blob) {
				reader.readAsDataURL(blob);
			}
		});
	}

}


/***/ }),

/***/ "./node_modules/quill-image-resize-module/image-resize.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/quill-image-resize-module/image-resize.min.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var __webpack_provided_window_dot_Quill = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=38)}([function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){var o=n(22),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e,n){function o(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}var r=n(75),i=n(76),a=n(77),s=n(78),u=n(79);o.prototype.clear=r,o.prototype.delete=i,o.prototype.get=a,o.prototype.has=s,o.prototype.set=u,t.exports=o},function(t,e,n){function o(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}var r=n(8);t.exports=o},function(t,e,n){function o(t){return null==t?void 0===t?u:s:c&&c in Object(t)?i(t):a(t)}var r=n(16),i=n(64),a=n(87),s="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=o},function(t,e,n){function o(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}var r=n(73);t.exports=o},function(t,e,n){var o=n(11),r=o(Object,"create");t.exports=r},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r});var r=function t(e){o(this,t),this.onCreate=function(){},this.onDestroy=function(){},this.onUpdate=function(){},this.overlay=e.overlay,this.img=e.img,this.options=e.options,this.requestUpdate=e.onUpdate}},function(t,e,n){function o(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var r=n(21);t.exports=o},function(t,e,n){function o(t,e){var n=i(t,e);return r(n)?n:void 0}var r=n(48),i=n(65);t.exports=o},function(t,e,n){function o(t){return null!=t&&i(t.length)&&!r(t)}var r=n(13),i=n(30);t.exports=o},function(t,e,n){function o(t){if(!i(t))return!1;var e=r(t);return e==s||e==u||e==a||e==c}var r=n(5),i=n(0),a="[object AsyncFunction]",s="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";t.exports=o},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var o=n(11),r=n(1),i=o(r,"Map");t.exports=i},function(t,e,n){var o=n(1),r=o.Symbol;t.exports=r},function(t,e){function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}t.exports=n},function(t,e,n){function o(t,e,n){(void 0===n||i(t[e],n))&&(void 0!==n||e in t)||r(t,e,n)}var r=n(10),i=n(8);t.exports=o},function(t,e,n){function o(t,e,n,l,f){t!==e&&a(e,function(a,c){if(u(a))f||(f=new r),s(t,e,c,n,o,l,f);else{var p=l?l(t[c],a,c+"",t,e,f):void 0;void 0===p&&(p=a),i(t,c,p)}},c)}var r=n(41),i=n(18),a=n(46),s=n(51),u=n(0),c=n(32);t.exports=o},function(t,e,n){function o(t,e){return a(i(t,e,r),t+"")}var r=n(26),i=n(89),a=n(90);t.exports=o},function(t,e,n){var o=n(11),r=function(){try{var t=o(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=r},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(107))},function(t,e,n){var o=n(88),r=o(Object.getPrototypeOf,Object);t.exports=r},function(t,e){function n(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||r.test(t))&&t>-1&&t%1==0&&t<e}var o=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=n},function(t,e){function n(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||o)}var o=Object.prototype;t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){var o=n(47),r=n(2),i=Object.prototype,a=i.hasOwnProperty,s=i.propertyIsEnumerable,u=o(function(){return arguments}())?o:function(t){return r(t)&&a.call(t,"callee")&&!s.call(t,"callee")};t.exports=u},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){(function(t){var o=n(1),r=n(102),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===i,u=s?o.Buffer:void 0,c=u?u.isBuffer:void 0,l=c||r;t.exports=l}).call(e,n(14)(t))},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}var o=9007199254740991;t.exports=n},function(t,e,n){var o=n(49),r=n(54),i=n(86),a=i&&i.isTypedArray,s=a?r(a):o;t.exports=s},function(t,e,n){function o(t){return a(t)?r(t,!0):i(t)}var r=n(43),i=n(50),a=n(12);t.exports=o},function(t,e,n){"use strict";e.a={modules:["DisplaySize","Toolbar","Resize"],overlayStyles:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"},handleStyles:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80"},displayStyles:{position:"absolute",font:"12px/1.0 Arial, Helvetica, sans-serif",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default"},toolbarStyles:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default"},toolbarButtonStyles:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},toolbarButtonSvgStyles:{fill:"#444",stroke:"#444",strokeWidth:"2"}}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(9);n.d(e,"a",function(){return s});var s=function(t){function e(){var t,n,i,a;o(this,e);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=i=r(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),i.onCreate=function(){i.display=document.createElement("div"),Object.assign(i.display.style,i.options.displayStyles),i.overlay.appendChild(i.display)},i.onDestroy=function(){},i.onUpdate=function(){if(i.display&&i.img){var t=i.getCurrentSize();if(i.display.innerHTML=t.join(" &times; "),t[0]>120&&t[1]>30)Object.assign(i.display.style,{right:"4px",bottom:"4px",left:"auto"});else if("right"==i.img.style.float){var e=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"auto",bottom:"-"+(e.height+4)+"px",left:"-"+(e.width+4)+"px"})}else{var n=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"-"+(n.width+4)+"px",bottom:"-"+(n.height+4)+"px",left:"auto"})}}},i.getCurrentSize=function(){return[i.img.width,Math.round(i.img.width/i.img.naturalWidth*i.img.naturalHeight)]},a=n,r(i,a)}return i(e,t),e}(a.a)},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(9);n.d(e,"a",function(){return s});var s=function(t){function e(){var t,n,i,a;o(this,e);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=i=r(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),i.onCreate=function(){i.boxes=[],i.addBox("nwse-resize"),i.addBox("nesw-resize"),i.addBox("nwse-resize"),i.addBox("nesw-resize"),i.positionBoxes()},i.onDestroy=function(){i.setCursor("")},i.positionBoxes=function(){var t=-parseFloat(i.options.handleStyles.width)/2+"px",e=-parseFloat(i.options.handleStyles.height)/2+"px";[{left:t,top:e},{right:t,top:e},{right:t,bottom:e},{left:t,bottom:e}].forEach(function(t,e){Object.assign(i.boxes[e].style,t)})},i.addBox=function(t){var e=document.createElement("div");Object.assign(e.style,i.options.handleStyles),e.style.cursor=t,e.style.width=i.options.handleStyles.width+"px",e.style.height=i.options.handleStyles.height+"px",e.addEventListener("mousedown",i.handleMousedown,!1),i.overlay.appendChild(e),i.boxes.push(e)},i.handleMousedown=function(t){i.dragBox=t.target,i.dragStartX=t.clientX,i.preDragWidth=i.img.width||i.img.naturalWidth,i.setCursor(i.dragBox.style.cursor),document.addEventListener("mousemove",i.handleDrag,!1),document.addEventListener("mouseup",i.handleMouseup,!1)},i.handleMouseup=function(){i.setCursor(""),document.removeEventListener("mousemove",i.handleDrag),document.removeEventListener("mouseup",i.handleMouseup)},i.handleDrag=function(t){if(i.img){var e=t.clientX-i.dragStartX;i.dragBox===i.boxes[0]||i.dragBox===i.boxes[3]?i.img.width=Math.round(i.preDragWidth-e):i.img.width=Math.round(i.preDragWidth+e),i.requestUpdate()}},i.setCursor=function(t){[document.body,i.img].forEach(function(e){e.style.cursor=t})},a=n,r(i,a)}return i(e,t),e}(a.a)},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(105),s=n.n(a),u=n(104),c=n.n(u),l=n(106),f=n.n(l),p=n(9);n.d(e,"a",function(){return b});var d=__webpack_provided_window_dot_Quill.imports.parchment,h=new d.Attributor.Style("float","float"),y=new d.Attributor.Style("margin","margin"),v=new d.Attributor.Style("display","display"),b=function(t){function e(){var t,n,i,a;o(this,e);for(var u=arguments.length,l=Array(u),p=0;p<u;p++)l[p]=arguments[p];return n=i=r(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),i.onCreate=function(){i.toolbar=document.createElement("div"),Object.assign(i.toolbar.style,i.options.toolbarStyles),i.overlay.appendChild(i.toolbar),i._defineAlignments(),i._addToolbarButtons()},i.onDestroy=function(){},i.onUpdate=function(){},i._defineAlignments=function(){i.alignments=[{icon:s.a,apply:function(){v.add(i.img,"inline"),h.add(i.img,"left"),y.add(i.img,"0 1em 1em 0")},isApplied:function(){return"left"==h.value(i.img)}},{icon:c.a,apply:function(){v.add(i.img,"block"),h.remove(i.img),y.add(i.img,"auto")},isApplied:function(){return"auto"==y.value(i.img)}},{icon:f.a,apply:function(){v.add(i.img,"inline"),h.add(i.img,"right"),y.add(i.img,"0 0 1em 1em")},isApplied:function(){return"right"==h.value(i.img)}}]},i._addToolbarButtons=function(){var t=[];i.alignments.forEach(function(e,n){var o=document.createElement("span");t.push(o),o.innerHTML=e.icon,o.addEventListener("click",function(){t.forEach(function(t){return t.style.filter=""}),e.isApplied()?(h.remove(i.img),y.remove(i.img),v.remove(i.img)):(i._selectButton(o),e.apply()),i.requestUpdate()}),Object.assign(o.style,i.options.toolbarButtonStyles),n>0&&(o.style.borderLeftWidth="0"),Object.assign(o.children[0].style,i.options.toolbarButtonSvgStyles),e.isApplied()&&i._selectButton(o),i.toolbar.appendChild(o)})},i._selectButton=function(t){t.style.filter="invert(20%)"},a=n,r(i,a)}return i(e,t),e}(p.a)},function(t,e,n){var o=n(17),r=n(20),i=n(63),a=n(101),s=r(function(t){return t.push(void 0,i),o(a,void 0,t)});t.exports=s},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=n(37),i=n.n(r),a=n(33),s=n(34),u=n(36),c=n(35),l={DisplaySize:s.a,Toolbar:u.a,Resize:c.a},f=function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,t),this.initializeModules=function(){n.removeModules(),n.modules=n.moduleClasses.map(function(t){return new(l[t]||t)(n)}),n.modules.forEach(function(t){t.onCreate()}),n.onUpdate()},this.onUpdate=function(){n.repositionElements(),n.modules.forEach(function(t){t.onUpdate()})},this.removeModules=function(){n.modules.forEach(function(t){t.onDestroy()}),n.modules=[]},this.handleClick=function(t){if(t.target&&t.target.tagName&&"IMG"===t.target.tagName.toUpperCase()){if(n.img===t.target)return;n.img&&n.hide(),n.show(t.target)}else n.img&&n.hide()},this.show=function(t){n.img=t,n.showOverlay(),n.initializeModules()},this.showOverlay=function(){n.overlay&&n.hideOverlay(),n.quill.setSelection(null),n.setUserSelect("none"),document.addEventListener("keyup",n.checkImage,!0),n.quill.root.addEventListener("input",n.checkImage,!0),n.overlay=document.createElement("div"),Object.assign(n.overlay.style,n.options.overlayStyles),n.quill.root.parentNode.appendChild(n.overlay),n.repositionElements()},this.hideOverlay=function(){n.overlay&&(n.quill.root.parentNode.removeChild(n.overlay),n.overlay=void 0,document.removeEventListener("keyup",n.checkImage),n.quill.root.removeEventListener("input",n.checkImage),n.setUserSelect(""))},this.repositionElements=function(){if(n.overlay&&n.img){var t=n.quill.root.parentNode,e=n.img.getBoundingClientRect(),o=t.getBoundingClientRect();Object.assign(n.overlay.style,{left:e.left-o.left-1+t.scrollLeft+"px",top:e.top-o.top+t.scrollTop+"px",width:e.width+"px",height:e.height+"px"})}},this.hide=function(){n.hideOverlay(),n.removeModules(),n.img=void 0},this.setUserSelect=function(t){["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach(function(e){n.quill.root.style[e]=t,document.documentElement.style[e]=t})},this.checkImage=function(t){n.img&&(46!=t.keyCode&&8!=t.keyCode||__webpack_provided_window_dot_Quill.find(n.img).deleteAt(0),n.hide())},this.quill=e;var s=!1;r.modules&&(s=r.modules.slice()),this.options=i()({},r,a.a),s!==!1&&(this.options.modules=s),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",this.handleClick,!1),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.moduleClasses=this.options.modules,console.log("this.options.modules",this.options.modules),this.modules=[]};e.default=f,__webpack_provided_window_dot_Quill&&__webpack_provided_window_dot_Quill.register("modules/imageResize",f)},function(t,e,n){function o(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}var r=n(66),i=n(67),a=n(68),s=n(69),u=n(70);o.prototype.clear=r,o.prototype.delete=i,o.prototype.get=a,o.prototype.has=s,o.prototype.set=u,t.exports=o},function(t,e,n){function o(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}var r=n(80),i=n(81),a=n(82),s=n(83),u=n(84);o.prototype.clear=r,o.prototype.delete=i,o.prototype.get=a,o.prototype.has=s,o.prototype.set=u,t.exports=o},function(t,e,n){function o(t){var e=this.__data__=new r(t);this.size=e.size}var r=n(3),i=n(92),a=n(93),s=n(94),u=n(95),c=n(96);o.prototype.clear=i,o.prototype.delete=a,o.prototype.get=s,o.prototype.has=u,o.prototype.set=c,t.exports=o},function(t,e,n){var o=n(1),r=o.Uint8Array;t.exports=r},function(t,e,n){function o(t,e){var n=a(t),o=!n&&i(t),l=!n&&!o&&s(t),p=!n&&!o&&!l&&c(t),d=n||o||l||p,h=d?r(t.length,String):[],y=h.length;for(var v in t)!e&&!f.call(t,v)||d&&("length"==v||l&&("offset"==v||"parent"==v)||p&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||u(v,y))||h.push(v);return h}var r=n(53),i=n(27),a=n(28),s=n(29),u=n(24),c=n(31),l=Object.prototype,f=l.hasOwnProperty;t.exports=o},function(t,e,n){function o(t,e,n){var o=t[e];s.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||r(t,e,n)}var r=n(10),i=n(8),a=Object.prototype,s=a.hasOwnProperty;t.exports=o},function(t,e,n){var o=n(0),r=Object.create,i=function(){function t(){}return function(e){if(!o(e))return{};if(r)return r(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=i},function(t,e,n){var o=n(62),r=o();t.exports=r},function(t,e,n){function o(t){return i(t)&&r(t)==a}var r=n(5),i=n(2),a="[object Arguments]";t.exports=o},function(t,e,n){function o(t){return!(!a(t)||i(t))&&(r(t)?d:u).test(s(t))}var r=n(13),i=n(74),a=n(0),s=n(97),u=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,f=c.toString,p=l.hasOwnProperty,d=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=o},function(t,e,n){function o(t){return a(t)&&i(t.length)&&!!s[r(t)]}var r=n(5),i=n(30),a=n(2),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,t.exports=o},function(t,e,n){function o(t){if(!r(t))return a(t);var e=i(t),n=[];for(var o in t)("constructor"!=o||!e&&u.call(t,o))&&n.push(o);return n}var r=n(0),i=n(25),a=n(85),s=Object.prototype,u=s.hasOwnProperty;t.exports=o},function(t,e,n){function o(t,e,n,o,g,x,m){var _=t[n],j=e[n],w=m.get(j);if(w)return void r(t,n,w);var O=x?x(_,j,n+"",t,e,m):void 0,S=void 0===O;if(S){var E=l(j),A=!E&&p(j),z=!E&&!A&&v(j);O=j,E||A||z?l(_)?O=_:f(_)?O=s(_):A?(S=!1,O=i(j,!0)):z?(S=!1,O=a(j,!0)):O=[]:y(j)||c(j)?(O=_,c(_)?O=b(_):(!h(_)||o&&d(_))&&(O=u(j))):S=!1}S&&(m.set(j,O),g(O,j,o,x,m),m.delete(j)),r(t,n,O)}var r=n(18),i=n(56),a=n(57),s=n(58),u=n(71),c=n(27),l=n(28),f=n(99),p=n(29),d=n(13),h=n(0),y=n(100),v=n(31),b=n(103);t.exports=o},function(t,e,n){var o=n(98),r=n(21),i=n(26),a=r?function(t,e){return r(t,"toString",{configurable:!0,enumerable:!1,value:o(e),writable:!0})}:i;t.exports=a},function(t,e){function n(t,e){for(var n=-1,o=Array(t);++n<t;)o[n]=e(n);return o}t.exports=n},function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},function(t,e,n){function o(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}var r=n(42);t.exports=o},function(t,e,n){(function(t){function o(t,e){if(e)return t.slice();var n=t.length,o=c?c(n):new t.constructor(n);return t.copy(o),o}var r=n(1),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===i,u=s?r.Buffer:void 0,c=u?u.allocUnsafe:void 0;t.exports=o}).call(e,n(14)(t))},function(t,e,n){function o(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var r=n(55);t.exports=o},function(t,e){function n(t,e){var n=-1,o=t.length;for(e||(e=Array(o));++n<o;)e[n]=t[n];return e}t.exports=n},function(t,e,n){function o(t,e,n,o){var a=!n;n||(n={});for(var s=-1,u=e.length;++s<u;){var c=e[s],l=o?o(n[c],t[c],c,n,t):void 0;void 0===l&&(l=t[c]),a?i(n,c,l):r(n,c,l)}return n}var r=n(44),i=n(10);t.exports=o},function(t,e,n){var o=n(1),r=o["__core-js_shared__"];t.exports=r},function(t,e,n){function o(t){return r(function(e,n){var o=-1,r=n.length,a=r>1?n[r-1]:void 0,s=r>2?n[2]:void 0;for(a=t.length>3&&"function"==typeof a?(r--,a):void 0,s&&i(n[0],n[1],s)&&(a=r<3?void 0:a,r=1),e=Object(e);++o<r;){var u=n[o];u&&t(e,u,o,a)}return e})}var r=n(20),i=n(72);t.exports=o},function(t,e){function n(t){return function(e,n,o){for(var r=-1,i=Object(e),a=o(e),s=a.length;s--;){var u=a[t?s:++r];if(n(i[u],u,i)===!1)break}return e}}t.exports=n},function(t,e,n){function o(t,e,n,a,s,u){return i(t)&&i(e)&&(u.set(e,t),r(t,e,void 0,o,u),u.delete(e)),t}var r=n(19),i=n(0);t.exports=o},function(t,e,n){function o(t){var e=a.call(t,u),n=t[u];try{t[u]=void 0}catch(t){}var o=s.call(t);return e?t[u]=n:delete t[u],o}var r=n(16),i=Object.prototype,a=i.hasOwnProperty,s=i.toString,u=r?r.toStringTag:void 0;t.exports=o},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e,n){function o(){this.__data__=r?r(null):{},this.size=0}var r=n(7);t.exports=o},function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},function(t,e,n){function o(t){var e=this.__data__;if(r){var n=e[t];return n===i?void 0:n}return s.call(e,t)?e[t]:void 0}var r=n(7),i="__lodash_hash_undefined__",a=Object.prototype,s=a.hasOwnProperty;t.exports=o},function(t,e,n){function o(t){var e=this.__data__;return r?void 0!==e[t]:a.call(e,t)}var r=n(7),i=Object.prototype,a=i.hasOwnProperty;t.exports=o},function(t,e,n){function o(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?i:e,this}var r=n(7),i="__lodash_hash_undefined__";t.exports=o},function(t,e,n){function o(t){return"function"!=typeof t.constructor||a(t)?{}:r(i(t))}var r=n(45),i=n(23),a=n(25);t.exports=o},function(t,e,n){function o(t,e,n){if(!s(n))return!1;var o=typeof e;return!!("number"==o?i(n)&&a(e,n.length):"string"==o&&e in n)&&r(n[e],t)}var r=n(8),i=n(12),a=n(24),s=n(0);t.exports=o},function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},function(t,e,n){function o(t){return!!i&&i in t}var r=n(60),i=function(){var t=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=o},function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,e,n){function o(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():a.call(e,n,1),--this.size,!0)}var r=n(4),i=Array.prototype,a=i.splice;t.exports=o},function(t,e,n){function o(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}var r=n(4);t.exports=o},function(t,e,n){function o(t){return r(this.__data__,t)>-1}var r=n(4);t.exports=o},function(t,e,n){function o(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}var r=n(4);t.exports=o},function(t,e,n){function o(){this.size=0,this.__data__={hash:new r,map:new(a||i),string:new r}}var r=n(39),i=n(3),a=n(15);t.exports=o},function(t,e,n){function o(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}var r=n(6);t.exports=o},function(t,e,n){function o(t){return r(this,t).get(t)}var r=n(6);t.exports=o},function(t,e,n){function o(t){return r(this,t).has(t)}var r=n(6);t.exports=o},function(t,e,n){function o(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}var r=n(6);t.exports=o},function(t,e){function n(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}t.exports=n},function(t,e,n){(function(t){var o=n(22),r="object"==typeof e&&e&&!e.nodeType&&e,i=r&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===r,s=a&&o.process,u=function(){try{return s&&s.binding&&s.binding("util")}catch(t){}}();t.exports=u}).call(e,n(14)(t))},function(t,e){function n(t){return r.call(t)}var o=Object.prototype,r=o.toString;t.exports=n},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e,n){function o(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var o=arguments,a=-1,s=i(o.length-e,0),u=Array(s);++a<s;)u[a]=o[e+a];a=-1;for(var c=Array(e+1);++a<e;)c[a]=o[a];return c[e]=n(u),r(t,this,c)}}var r=n(17),i=Math.max;t.exports=o},function(t,e,n){var o=n(52),r=n(91),i=r(o);t.exports=i},function(t,e){function n(t){var e=0,n=0;return function(){var a=i(),s=r-(a-n);if(n=a,s>0){if(++e>=o)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var o=800,r=16,i=Date.now;t.exports=n},function(t,e,n){function o(){this.__data__=new r,this.size=0}var r=n(3);t.exports=o},function(t,e){function n(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}t.exports=n},function(t,e){function n(t){return this.__data__.get(t)}t.exports=n},function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},function(t,e,n){function o(t,e){var n=this.__data__;if(n instanceof r){var o=n.__data__;if(!i||o.length<s-1)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(o)}return n.set(t,e),this.size=n.size,this}var r=n(3),i=n(15),a=n(40),s=200;t.exports=o},function(t,e){function n(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var o=Function.prototype,r=o.toString;t.exports=n},function(t,e){function n(t){return function(){return t}}t.exports=n},function(t,e,n){function o(t){return i(t)&&r(t)}var r=n(12),i=n(2);t.exports=o},function(t,e,n){function o(t){if(!a(t)||r(t)!=s)return!1;var e=i(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&l.call(n)==p}var r=n(5),i=n(23),a=n(2),s="[object Object]",u=Function.prototype,c=Object.prototype,l=u.toString,f=c.hasOwnProperty,p=l.call(Object);t.exports=o},function(t,e,n){var o=n(19),r=n(61),i=r(function(t,e,n,r){o(t,e,n,r)});t.exports=i},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){function o(t){return r(t,i(t))}var r=n(59),i=n(32);t.exports=o},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>'},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}])});

/***/ }),

/***/ "./node_modules/quill/dist/quill.js":
/*!******************************************!*\
  !*** ./node_modules/quill/dist/quill.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_697__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_697__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_697__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_697__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_697__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_697__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_697__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_697__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_697__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_697__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_697__(__nested_webpack_require_697__.s = 109);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_2976__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __nested_webpack_require_2976__(17);
var format_1 = __nested_webpack_require_2976__(18);
var leaf_1 = __nested_webpack_require_2976__(19);
var scroll_1 = __nested_webpack_require_2976__(45);
var inline_1 = __nested_webpack_require_2976__(46);
var block_1 = __nested_webpack_require_2976__(47);
var embed_1 = __nested_webpack_require_2976__(48);
var text_1 = __nested_webpack_require_2976__(49);
var attributor_1 = __nested_webpack_require_2976__(12);
var class_1 = __nested_webpack_require_2976__(32);
var style_1 = __nested_webpack_require_2976__(33);
var store_1 = __nested_webpack_require_2976__(31);
var Registry = __nested_webpack_require_2976__(1);
var Parchment = {
    Scope: Registry.Scope,
    create: Registry.create,
    find: Registry.find,
    query: Registry.query,
    register: Registry.register,
    Container: container_1.default,
    Format: format_1.default,
    Leaf: leaf_1.default,
    Embed: embed_1.default,
    Scroll: scroll_1.default,
    Block: block_1.default,
    Inline: inline_1.default,
    Text: text_1.default,
    Attributor: {
        Attribute: attributor_1.default,
        Class: class_1.default,
        Style: style_1.default,
        Store: store_1.default,
    },
};
exports.default = Parchment;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ParchmentError = /** @class */ (function (_super) {
    __extends(ParchmentError, _super);
    function ParchmentError(message) {
        var _this = this;
        message = '[Parchment] ' + message;
        _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _this.constructor.name;
        return _this;
    }
    return ParchmentError;
}(Error));
exports.ParchmentError = ParchmentError;
var attributes = {};
var classes = {};
var tags = {};
var types = {};
exports.DATA_KEY = '__blot';
var Scope;
(function (Scope) {
    Scope[Scope["TYPE"] = 3] = "TYPE";
    Scope[Scope["LEVEL"] = 12] = "LEVEL";
    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
    Scope[Scope["BLOT"] = 14] = "BLOT";
    Scope[Scope["INLINE"] = 7] = "INLINE";
    Scope[Scope["BLOCK"] = 11] = "BLOCK";
    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
    Scope[Scope["ANY"] = 15] = "ANY";
})(Scope = exports.Scope || (exports.Scope = {}));
function create(input, value) {
    var match = query(input);
    if (match == null) {
        throw new ParchmentError("Unable to create " + input + " blot");
    }
    var BlotClass = match;
    var node = 
    // @ts-ignore
    input instanceof Node || input['nodeType'] === Node.TEXT_NODE ? input : BlotClass.create(value);
    return new BlotClass(node, value);
}
exports.create = create;
function find(node, bubble) {
    if (bubble === void 0) { bubble = false; }
    if (node == null)
        return null;
    // @ts-ignore
    if (node[exports.DATA_KEY] != null)
        return node[exports.DATA_KEY].blot;
    if (bubble)
        return find(node.parentNode, bubble);
    return null;
}
exports.find = find;
function query(query, scope) {
    if (scope === void 0) { scope = Scope.ANY; }
    var match;
    if (typeof query === 'string') {
        match = types[query] || attributes[query];
        // @ts-ignore
    }
    else if (query instanceof Text || query['nodeType'] === Node.TEXT_NODE) {
        match = types['text'];
    }
    else if (typeof query === 'number') {
        if (query & Scope.LEVEL & Scope.BLOCK) {
            match = types['block'];
        }
        else if (query & Scope.LEVEL & Scope.INLINE) {
            match = types['inline'];
        }
    }
    else if (query instanceof HTMLElement) {
        var names = (query.getAttribute('class') || '').split(/\s+/);
        for (var i in names) {
            match = classes[names[i]];
            if (match)
                break;
        }
        match = match || tags[query.tagName];
    }
    if (match == null)
        return null;
    // @ts-ignore
    if (scope & Scope.LEVEL & match.scope && scope & Scope.TYPE & match.scope)
        return match;
    return null;
}
exports.query = query;
function register() {
    var Definitions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Definitions[_i] = arguments[_i];
    }
    if (Definitions.length > 1) {
        return Definitions.map(function (d) {
            return register(d);
        });
    }
    var Definition = Definitions[0];
    if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
        throw new ParchmentError('Invalid definition');
    }
    else if (Definition.blotName === 'abstract') {
        throw new ParchmentError('Cannot register abstract class');
    }
    types[Definition.blotName || Definition.attrName] = Definition;
    if (typeof Definition.keyName === 'string') {
        attributes[Definition.keyName] = Definition;
    }
    else {
        if (Definition.className != null) {
            classes[Definition.className] = Definition;
        }
        if (Definition.tagName != null) {
            if (Array.isArray(Definition.tagName)) {
                Definition.tagName = Definition.tagName.map(function (tagName) {
                    return tagName.toUpperCase();
                });
            }
            else {
                Definition.tagName = Definition.tagName.toUpperCase();
            }
            var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
            tagNames.forEach(function (tag) {
                if (tags[tag] == null || Definition.className == null) {
                    tags[tag] = Definition;
                }
            });
        }
    }
    return Definition;
}
exports.register = register;


/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_9445__) {

var diff = __nested_webpack_require_9445__(51);
var equal = __nested_webpack_require_9445__(11);
var extend = __nested_webpack_require_9445__(3);
var op = __nested_webpack_require_9445__(20);


var NULL_CHARACTER = String.fromCharCode(0);  // Placeholder char for embed in diff()


var Delta = function (ops) {
  // Assume we are given a well formed ops
  if (Array.isArray(ops)) {
    this.ops = ops;
  } else if (ops != null && Array.isArray(ops.ops)) {
    this.ops = ops.ops;
  } else {
    this.ops = [];
  }
};


Delta.prototype.insert = function (text, attributes) {
  var newOp = {};
  if (text.length === 0) return this;
  newOp.insert = text;
  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }
  return this.push(newOp);
};

Delta.prototype['delete'] = function (length) {
  if (length <= 0) return this;
  return this.push({ 'delete': length });
};

Delta.prototype.retain = function (length, attributes) {
  if (length <= 0) return this;
  var newOp = { retain: length };
  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
    newOp.attributes = attributes;
  }
  return this.push(newOp);
};

Delta.prototype.push = function (newOp) {
  var index = this.ops.length;
  var lastOp = this.ops[index - 1];
  newOp = extend(true, {}, newOp);
  if (typeof lastOp === 'object') {
    if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
      this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
      return this;
    }
    // Since it does not matter if we insert before or after deleting at the same index,
    // always prefer to insert first
    if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
      index -= 1;
      lastOp = this.ops[index - 1];
      if (typeof lastOp !== 'object') {
        this.ops.unshift(newOp);
        return this;
      }
    }
    if (equal(newOp.attributes, lastOp.attributes)) {
      if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
        this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
        return this;
      } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
        this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
        return this;
      }
    }
  }
  if (index === this.ops.length) {
    this.ops.push(newOp);
  } else {
    this.ops.splice(index, 0, newOp);
  }
  return this;
};

Delta.prototype.chop = function () {
  var lastOp = this.ops[this.ops.length - 1];
  if (lastOp && lastOp.retain && !lastOp.attributes) {
    this.ops.pop();
  }
  return this;
};

Delta.prototype.filter = function (predicate) {
  return this.ops.filter(predicate);
};

Delta.prototype.forEach = function (predicate) {
  this.ops.forEach(predicate);
};

Delta.prototype.map = function (predicate) {
  return this.ops.map(predicate);
};

Delta.prototype.partition = function (predicate) {
  var passed = [], failed = [];
  this.forEach(function(op) {
    var target = predicate(op) ? passed : failed;
    target.push(op);
  });
  return [passed, failed];
};

Delta.prototype.reduce = function (predicate, initial) {
  return this.ops.reduce(predicate, initial);
};

Delta.prototype.changeLength = function () {
  return this.reduce(function (length, elem) {
    if (elem.insert) {
      return length + op.length(elem);
    } else if (elem.delete) {
      return length - elem.delete;
    }
    return length;
  }, 0);
};

Delta.prototype.length = function () {
  return this.reduce(function (length, elem) {
    return length + op.length(elem);
  }, 0);
};

Delta.prototype.slice = function (start, end) {
  start = start || 0;
  if (typeof end !== 'number') end = Infinity;
  var ops = [];
  var iter = op.iterator(this.ops);
  var index = 0;
  while (index < end && iter.hasNext()) {
    var nextOp;
    if (index < start) {
      nextOp = iter.next(start - index);
    } else {
      nextOp = iter.next(end - index);
      ops.push(nextOp);
    }
    index += op.length(nextOp);
  }
  return new Delta(ops);
};


Delta.prototype.compose = function (other) {
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var ops = [];
  var firstOther = otherIter.peek();
  if (firstOther != null && typeof firstOther.retain === 'number' && firstOther.attributes == null) {
    var firstLeft = firstOther.retain;
    while (thisIter.peekType() === 'insert' && thisIter.peekLength() <= firstLeft) {
      firstLeft -= thisIter.peekLength();
      ops.push(thisIter.next());
    }
    if (firstOther.retain - firstLeft > 0) {
      otherIter.next(firstOther.retain - firstLeft);
    }
  }
  var delta = new Delta(ops);
  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else if (thisIter.peekType() === 'delete') {
      delta.push(thisIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);
      if (typeof otherOp.retain === 'number') {
        var newOp = {};
        if (typeof thisOp.retain === 'number') {
          newOp.retain = length;
        } else {
          newOp.insert = thisOp.insert;
        }
        // Preserve null when composing with a retain, otherwise remove it for inserts
        var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
        if (attributes) newOp.attributes = attributes;
        delta.push(newOp);

        // Optimization if rest of other is just retain
        if (!otherIter.hasNext() && equal(delta.ops[delta.ops.length - 1], newOp)) {
          var rest = new Delta(thisIter.rest());
          return delta.concat(rest).chop();
        }

      // Other op should be delete, we could be an insert or retain
      // Insert + delete cancels out
      } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
        delta.push(otherOp);
      }
    }
  }
  return delta.chop();
};

Delta.prototype.concat = function (other) {
  var delta = new Delta(this.ops.slice());
  if (other.ops.length > 0) {
    delta.push(other.ops[0]);
    delta.ops = delta.ops.concat(other.ops.slice(1));
  }
  return delta;
};

Delta.prototype.diff = function (other, index) {
  if (this.ops === other.ops) {
    return new Delta();
  }
  var strings = [this, other].map(function (delta) {
    return delta.map(function (op) {
      if (op.insert != null) {
        return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
      }
      var prep = (delta === other) ? 'on' : 'with';
      throw new Error('diff() called ' + prep + ' non-document');
    }).join('');
  });
  var delta = new Delta();
  var diffResult = diff(strings[0], strings[1], index);
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  diffResult.forEach(function (component) {
    var length = component[1].length;
    while (length > 0) {
      var opLength = 0;
      switch (component[0]) {
        case diff.INSERT:
          opLength = Math.min(otherIter.peekLength(), length);
          delta.push(otherIter.next(opLength));
          break;
        case diff.DELETE:
          opLength = Math.min(length, thisIter.peekLength());
          thisIter.next(opLength);
          delta['delete'](opLength);
          break;
        case diff.EQUAL:
          opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
          var thisOp = thisIter.next(opLength);
          var otherOp = otherIter.next(opLength);
          if (equal(thisOp.insert, otherOp.insert)) {
            delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
          } else {
            delta.push(otherOp)['delete'](opLength);
          }
          break;
      }
      length -= opLength;
    }
  });
  return delta.chop();
};

Delta.prototype.eachLine = function (predicate, newline) {
  newline = newline || '\n';
  var iter = op.iterator(this.ops);
  var line = new Delta();
  var i = 0;
  while (iter.hasNext()) {
    if (iter.peekType() !== 'insert') return;
    var thisOp = iter.peek();
    var start = op.length(thisOp) - iter.peekLength();
    var index = typeof thisOp.insert === 'string' ?
      thisOp.insert.indexOf(newline, start) - start : -1;
    if (index < 0) {
      line.push(iter.next());
    } else if (index > 0) {
      line.push(iter.next(index));
    } else {
      if (predicate(line, iter.next(1).attributes || {}, i) === false) {
        return;
      }
      i += 1;
      line = new Delta();
    }
  }
  if (line.length() > 0) {
    predicate(line, {}, i);
  }
};

Delta.prototype.transform = function (other, priority) {
  priority = !!priority;
  if (typeof other === 'number') {
    return this.transformPosition(other, priority);
  }
  var thisIter = op.iterator(this.ops);
  var otherIter = op.iterator(other.ops);
  var delta = new Delta();
  while (thisIter.hasNext() || otherIter.hasNext()) {
    if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
      delta.retain(op.length(thisIter.next()));
    } else if (otherIter.peekType() === 'insert') {
      delta.push(otherIter.next());
    } else {
      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
      var thisOp = thisIter.next(length);
      var otherOp = otherIter.next(length);
      if (thisOp['delete']) {
        // Our delete either makes their delete redundant or removes their retain
        continue;
      } else if (otherOp['delete']) {
        delta.push(otherOp);
      } else {
        // We retain either their retain or insert
        delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
      }
    }
  }
  return delta.chop();
};

Delta.prototype.transformPosition = function (index, priority) {
  priority = !!priority;
  var thisIter = op.iterator(this.ops);
  var offset = 0;
  while (thisIter.hasNext() && offset <= index) {
    var length = thisIter.peekLength();
    var nextType = thisIter.peekType();
    thisIter.next();
    if (nextType === 'delete') {
      index -= Math.min(length, index - offset);
      continue;
    } else if (nextType === 'insert' && (offset < index || !priority)) {
      index += length;
    }
    offset += length;
  }
  return index;
};


module.exports = Delta;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_23616__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extend = __nested_webpack_require_23616__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __nested_webpack_require_23616__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __nested_webpack_require_23616__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _break = __nested_webpack_require_23616__(16);

var _break2 = _interopRequireDefault(_break);

var _inline = __nested_webpack_require_23616__(6);

var _inline2 = _interopRequireDefault(_inline);

var _text = __nested_webpack_require_23616__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NEWLINE_LENGTH = 1;

var BlockEmbed = function (_Parchment$Embed) {
  _inherits(BlockEmbed, _Parchment$Embed);

  function BlockEmbed() {
    _classCallCheck(this, BlockEmbed);

    return _possibleConstructorReturn(this, (BlockEmbed.__proto__ || Object.getPrototypeOf(BlockEmbed)).apply(this, arguments));
  }

  _createClass(BlockEmbed, [{
    key: 'attach',
    value: function attach() {
      _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'attach', this).call(this);
      this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
    }
  }, {
    key: 'delta',
    value: function delta() {
      return new _quillDelta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);
      if (attribute != null) {
        this.attributes.attribute(attribute, value);
      }
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      this.format(name, value);
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (typeof value === 'string' && value.endsWith('\n')) {
        var block = _parchment2.default.create(Block.blotName);
        this.parent.insertBefore(block, index === 0 ? this : this.next);
        block.insertAt(0, value.slice(0, -1));
      } else {
        _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'insertAt', this).call(this, index, value, def);
      }
    }
  }]);

  return BlockEmbed;
}(_parchment2.default.Embed);

BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
// It is important for cursor behavior BlockEmbeds use tags that are block level elements


var Block = function (_Parchment$Block) {
  _inherits(Block, _Parchment$Block);

  function Block(domNode) {
    _classCallCheck(this, Block);

    var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, domNode));

    _this2.cache = {};
    return _this2;
  }

  _createClass(Block, [{
    key: 'delta',
    value: function delta() {
      if (this.cache.delta == null) {
        this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
          if (leaf.length() === 0) {
            return delta;
          } else {
            return delta.insert(leaf.value(), bubbleFormats(leaf));
          }
        }, new _quillDelta2.default()).insert('\n', bubbleFormats(this));
      }
      return this.cache.delta;
    }
  }, {
    key: 'deleteAt',
    value: function deleteAt(index, length) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'deleteAt', this).call(this, index, length);
      this.cache = {};
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (length <= 0) return;
      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
        if (index + length === this.length()) {
          this.format(name, value);
        }
      } else {
        _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
      }
      this.cache = {};
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null) return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
      if (value.length === 0) return;
      var lines = value.split('\n');
      var text = lines.shift();
      if (text.length > 0) {
        if (index < this.length() - 1 || this.children.tail == null) {
          _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, Math.min(index, this.length() - 1), text);
        } else {
          this.children.tail.insertAt(this.children.tail.length(), text);
        }
        this.cache = {};
      }
      var block = this;
      lines.reduce(function (index, line) {
        block = block.split(index, true);
        block.insertAt(0, line);
        return line.length;
      }, index + text.length);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      var head = this.children.head;
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);
      if (head instanceof _break2.default) {
        head.remove();
      }
      this.cache = {};
    }
  }, {
    key: 'length',
    value: function length() {
      if (this.cache.length == null) {
        this.cache.length = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
      }
      return this.cache.length;
    }
  }, {
    key: 'moveChildren',
    value: function moveChildren(target, ref) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'moveChildren', this).call(this, target, ref);
      this.cache = {};
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'optimize', this).call(this, context);
      this.cache = {};
    }
  }, {
    key: 'path',
    value: function path(index) {
      return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'removeChild', this).call(this, child);
      this.cache = {};
    }
  }, {
    key: 'split',
    value: function split(index) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
        var clone = this.clone();
        if (index === 0) {
          this.parent.insertBefore(clone, this);
          return this;
        } else {
          this.parent.insertBefore(clone, this.next);
          return clone;
        }
      } else {
        var next = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);
        this.cache = {};
        return next;
      }
    }
  }]);

  return Block;
}(_parchment2.default.Block);

Block.blotName = 'block';
Block.tagName = 'P';
Block.defaultChild = 'break';
Block.allowedChildren = [_inline2.default, _parchment2.default.Embed, _text2.default];

function bubbleFormats(blot) {
  var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (blot == null) return formats;
  if (typeof blot.formats === 'function') {
    formats = (0, _extend2.default)(formats, blot.formats());
  }
  if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
    return formats;
  }
  return bubbleFormats(blot.parent, formats);
}

exports.bubbleFormats = bubbleFormats;
exports.BlockEmbed = BlockEmbed;
exports.default = Block;

/***/ }),
/* 5 */
/***/ (function(module, exports, __nested_webpack_require_33760__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.overload = exports.expandConfig = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__nested_webpack_require_33760__(50);

var _quillDelta = __nested_webpack_require_33760__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _editor = __nested_webpack_require_33760__(14);

var _editor2 = _interopRequireDefault(_editor);

var _emitter3 = __nested_webpack_require_33760__(8);

var _emitter4 = _interopRequireDefault(_emitter3);

var _module = __nested_webpack_require_33760__(9);

var _module2 = _interopRequireDefault(_module);

var _parchment = __nested_webpack_require_33760__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _selection = __nested_webpack_require_33760__(15);

var _selection2 = _interopRequireDefault(_selection);

var _extend = __nested_webpack_require_33760__(3);

var _extend2 = _interopRequireDefault(_extend);

var _logger = __nested_webpack_require_33760__(10);

var _logger2 = _interopRequireDefault(_logger);

var _theme = __nested_webpack_require_33760__(34);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _logger2.default)('quill');

var Quill = function () {
  _createClass(Quill, null, [{
    key: 'debug',
    value: function debug(limit) {
      if (limit === true) {
        limit = 'log';
      }
      _logger2.default.level(limit);
    }
  }, {
    key: 'find',
    value: function find(node) {
      return node.__quill || _parchment2.default.find(node);
    }
  }, {
    key: 'import',
    value: function _import(name) {
      if (this.imports[name] == null) {
        debug.error('Cannot import ' + name + '. Are you sure it was registered?');
      }
      return this.imports[name];
    }
  }, {
    key: 'register',
    value: function register(path, target) {
      var _this = this;

      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (typeof path !== 'string') {
        var name = path.attrName || path.blotName;
        if (typeof name === 'string') {
          // register(Blot | Attributor, overwrite)
          this.register('formats/' + name, path, target);
        } else {
          Object.keys(path).forEach(function (key) {
            _this.register(key, path[key], target);
          });
        }
      } else {
        if (this.imports[path] != null && !overwrite) {
          debug.warn('Overwriting ' + path + ' with', target);
        }
        this.imports[path] = target;
        if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
          _parchment2.default.register(target);
        } else if (path.startsWith('modules') && typeof target.register === 'function') {
          target.register();
        }
      }
    }
  }]);

  function Quill(container) {
    var _this2 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Quill);

    this.options = expandConfig(container, options);
    this.container = this.options.container;
    if (this.container == null) {
      return debug.error('Invalid Quill container', container);
    }
    if (this.options.debug) {
      Quill.debug(this.options.debug);
    }
    var html = this.container.innerHTML.trim();
    this.container.classList.add('ql-container');
    this.container.innerHTML = '';
    this.container.__quill = this;
    this.root = this.addContainer('ql-editor');
    this.root.classList.add('ql-blank');
    this.root.setAttribute('data-gramm', false);
    this.scrollingContainer = this.options.scrollingContainer || this.root;
    this.emitter = new _emitter4.default();
    this.scroll = _parchment2.default.create(this.root, {
      emitter: this.emitter,
      whitelist: this.options.formats
    });
    this.editor = new _editor2.default(this.scroll);
    this.selection = new _selection2.default(this.scroll, this.emitter);
    this.theme = new this.options.theme(this, this.options);
    this.keyboard = this.theme.addModule('keyboard');
    this.clipboard = this.theme.addModule('clipboard');
    this.history = this.theme.addModule('history');
    this.theme.init();
    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type) {
      if (type === _emitter4.default.events.TEXT_CHANGE) {
        _this2.root.classList.toggle('ql-blank', _this2.editor.isBlank());
      }
    });
    this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, function (source, mutations) {
      var range = _this2.selection.lastRange;
      var index = range && range.length === 0 ? range.index : undefined;
      modify.call(_this2, function () {
        return _this2.editor.update(null, mutations, index);
      }, source);
    });
    var contents = this.clipboard.convert('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
    this.setContents(contents);
    this.history.clear();
    if (this.options.placeholder) {
      this.root.setAttribute('data-placeholder', this.options.placeholder);
    }
    if (this.options.readOnly) {
      this.disable();
    }
  }

  _createClass(Quill, [{
    key: 'addContainer',
    value: function addContainer(container) {
      var refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (typeof container === 'string') {
        var className = container;
        container = document.createElement('div');
        container.classList.add(className);
      }
      this.container.insertBefore(container, refNode);
      return container;
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.selection.setRange(null);
    }
  }, {
    key: 'deleteText',
    value: function deleteText(index, length, source) {
      var _this3 = this;

      var _overload = overload(index, length, source);

      var _overload2 = _slicedToArray(_overload, 4);

      index = _overload2[0];
      length = _overload2[1];
      source = _overload2[3];

      return modify.call(this, function () {
        return _this3.editor.deleteText(index, length);
      }, source, index, -1 * length);
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.enable(false);
    }
  }, {
    key: 'enable',
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.scroll.enable(enabled);
      this.container.classList.toggle('ql-disabled', !enabled);
    }
  }, {
    key: 'focus',
    value: function focus() {
      var scrollTop = this.scrollingContainer.scrollTop;
      this.selection.focus();
      this.scrollingContainer.scrollTop = scrollTop;
      this.scrollIntoView();
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      var _this4 = this;

      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        var range = _this4.getSelection(true);
        var change = new _quillDelta2.default();
        if (range == null) {
          return change;
        } else if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
          change = _this4.editor.formatLine(range.index, range.length, _defineProperty({}, name, value));
        } else if (range.length === 0) {
          _this4.selection.format(name, value);
          return change;
        } else {
          change = _this4.editor.formatText(range.index, range.length, _defineProperty({}, name, value));
        }
        _this4.setSelection(range, _emitter4.default.sources.SILENT);
        return change;
      }, source);
    }
  }, {
    key: 'formatLine',
    value: function formatLine(index, length, name, value, source) {
      var _this5 = this;

      var formats = void 0;

      var _overload3 = overload(index, length, name, value, source);

      var _overload4 = _slicedToArray(_overload3, 4);

      index = _overload4[0];
      length = _overload4[1];
      formats = _overload4[2];
      source = _overload4[3];

      return modify.call(this, function () {
        return _this5.editor.formatLine(index, length, formats);
      }, source, index, 0);
    }
  }, {
    key: 'formatText',
    value: function formatText(index, length, name, value, source) {
      var _this6 = this;

      var formats = void 0;

      var _overload5 = overload(index, length, name, value, source);

      var _overload6 = _slicedToArray(_overload5, 4);

      index = _overload6[0];
      length = _overload6[1];
      formats = _overload6[2];
      source = _overload6[3];

      return modify.call(this, function () {
        return _this6.editor.formatText(index, length, formats);
      }, source, index, 0);
    }
  }, {
    key: 'getBounds',
    value: function getBounds(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var bounds = void 0;
      if (typeof index === 'number') {
        bounds = this.selection.getBounds(index, length);
      } else {
        bounds = this.selection.getBounds(index.index, index.length);
      }
      var containerBounds = this.container.getBoundingClientRect();
      return {
        bottom: bounds.bottom - containerBounds.top,
        height: bounds.height,
        left: bounds.left - containerBounds.left,
        right: bounds.right - containerBounds.left,
        top: bounds.top - containerBounds.top,
        width: bounds.width
      };
    }
  }, {
    key: 'getContents',
    value: function getContents() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

      var _overload7 = overload(index, length);

      var _overload8 = _slicedToArray(_overload7, 2);

      index = _overload8[0];
      length = _overload8[1];

      return this.editor.getContents(index, length);
    }
  }, {
    key: 'getFormat',
    value: function getFormat() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection(true);
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (typeof index === 'number') {
        return this.editor.getFormat(index, length);
      } else {
        return this.editor.getFormat(index.index, index.length);
      }
    }
  }, {
    key: 'getIndex',
    value: function getIndex(blot) {
      return blot.offset(this.scroll);
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.scroll.length();
    }
  }, {
    key: 'getLeaf',
    value: function getLeaf(index) {
      return this.scroll.leaf(index);
    }
  }, {
    key: 'getLine',
    value: function getLine(index) {
      return this.scroll.line(index);
    }
  }, {
    key: 'getLines',
    value: function getLines() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      if (typeof index !== 'number') {
        return this.scroll.lines(index.index, index.length);
      } else {
        return this.scroll.lines(index, length);
      }
    }
  }, {
    key: 'getModule',
    value: function getModule(name) {
      return this.theme.modules[name];
    }
  }, {
    key: 'getSelection',
    value: function getSelection() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (focus) this.focus();
      this.update(); // Make sure we access getRange with editor in consistent state
      return this.selection.getRange()[0];
    }
  }, {
    key: 'getText',
    value: function getText() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

      var _overload9 = overload(index, length);

      var _overload10 = _slicedToArray(_overload9, 2);

      index = _overload10[0];
      length = _overload10[1];

      return this.editor.getText(index, length);
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      return this.selection.hasFocus();
    }
  }, {
    key: 'insertEmbed',
    value: function insertEmbed(index, embed, value) {
      var _this7 = this;

      var source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;

      return modify.call(this, function () {
        return _this7.editor.insertEmbed(index, embed, value);
      }, source, index);
    }
  }, {
    key: 'insertText',
    value: function insertText(index, text, name, value, source) {
      var _this8 = this;

      var formats = void 0;

      var _overload11 = overload(index, 0, name, value, source);

      var _overload12 = _slicedToArray(_overload11, 4);

      index = _overload12[0];
      formats = _overload12[2];
      source = _overload12[3];

      return modify.call(this, function () {
        return _this8.editor.insertText(index, text, formats);
      }, source, index, text.length);
    }
  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      return !this.container.classList.contains('ql-disabled');
    }
  }, {
    key: 'off',
    value: function off() {
      return this.emitter.off.apply(this.emitter, arguments);
    }
  }, {
    key: 'on',
    value: function on() {
      return this.emitter.on.apply(this.emitter, arguments);
    }
  }, {
    key: 'once',
    value: function once() {
      return this.emitter.once.apply(this.emitter, arguments);
    }
  }, {
    key: 'pasteHTML',
    value: function pasteHTML(index, html, source) {
      this.clipboard.dangerouslyPasteHTML(index, html, source);
    }
  }, {
    key: 'removeFormat',
    value: function removeFormat(index, length, source) {
      var _this9 = this;

      var _overload13 = overload(index, length, source);

      var _overload14 = _slicedToArray(_overload13, 4);

      index = _overload14[0];
      length = _overload14[1];
      source = _overload14[3];

      return modify.call(this, function () {
        return _this9.editor.removeFormat(index, length);
      }, source, index);
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView() {
      this.selection.scrollIntoView(this.scrollingContainer);
    }
  }, {
    key: 'setContents',
    value: function setContents(delta) {
      var _this10 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        delta = new _quillDelta2.default(delta);
        var length = _this10.getLength();
        var deleted = _this10.editor.deleteText(0, length);
        var applied = _this10.editor.applyDelta(delta);
        var lastOp = applied.ops[applied.ops.length - 1];
        if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\n') {
          _this10.editor.deleteText(_this10.getLength() - 1, 1);
          applied.delete(1);
        }
        var ret = deleted.compose(applied);
        return ret;
      }, source);
    }
  }, {
    key: 'setSelection',
    value: function setSelection(index, length, source) {
      if (index == null) {
        this.selection.setRange(null, length || Quill.sources.API);
      } else {
        var _overload15 = overload(index, length, source);

        var _overload16 = _slicedToArray(_overload15, 4);

        index = _overload16[0];
        length = _overload16[1];
        source = _overload16[3];

        this.selection.setRange(new _selection.Range(index, length), source);
        if (source !== _emitter4.default.sources.SILENT) {
          this.selection.scrollIntoView(this.scrollingContainer);
        }
      }
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      var delta = new _quillDelta2.default().insert(text);
      return this.setContents(delta, source);
    }
  }, {
    key: 'update',
    value: function update() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

      var change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
      this.selection.update(source);
      return change;
    }
  }, {
    key: 'updateContents',
    value: function updateContents(delta) {
      var _this11 = this;

      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

      return modify.call(this, function () {
        delta = new _quillDelta2.default(delta);
        return _this11.editor.applyDelta(delta, source);
      }, source, true);
    }
  }]);

  return Quill;
}();

Quill.DEFAULTS = {
  bounds: null,
  formats: null,
  modules: {},
  placeholder: '',
  readOnly: false,
  scrollingContainer: null,
  strict: true,
  theme: 'default'
};
Quill.events = _emitter4.default.events;
Quill.sources = _emitter4.default.sources;
// eslint-disable-next-line no-undef
Quill.version =   false ? 0 : "1.3.7";

Quill.imports = {
  'delta': _quillDelta2.default,
  'parchment': _parchment2.default,
  'core/module': _module2.default,
  'core/theme': _theme2.default
};

function expandConfig(container, userConfig) {
  userConfig = (0, _extend2.default)(true, {
    container: container,
    modules: {
      clipboard: true,
      keyboard: true,
      history: true
    }
  }, userConfig);
  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
    userConfig.theme = _theme2.default;
  } else {
    userConfig.theme = Quill.import('themes/' + userConfig.theme);
    if (userConfig.theme == null) {
      throw new Error('Invalid theme ' + userConfig.theme + '. Did you register it?');
    }
  }
  var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
  [themeConfig, userConfig].forEach(function (config) {
    config.modules = config.modules || {};
    Object.keys(config.modules).forEach(function (module) {
      if (config.modules[module] === true) {
        config.modules[module] = {};
      }
    });
  });
  var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
  var moduleConfig = moduleNames.reduce(function (config, name) {
    var moduleClass = Quill.import('modules/' + name);
    if (moduleClass == null) {
      debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
    } else {
      config[name] = moduleClass.DEFAULTS || {};
    }
    return config;
  }, {});
  // Special case toolbar shorthand
  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
    userConfig.modules.toolbar = {
      container: userConfig.modules.toolbar
    };
  }
  userConfig = (0, _extend2.default)(true, {}, Quill.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);
  ['bounds', 'container', 'scrollingContainer'].forEach(function (key) {
    if (typeof userConfig[key] === 'string') {
      userConfig[key] = document.querySelector(userConfig[key]);
    }
  });
  userConfig.modules = Object.keys(userConfig.modules).reduce(function (config, name) {
    if (userConfig.modules[name]) {
      config[name] = userConfig.modules[name];
    }
    return config;
  }, {});
  return userConfig;
}

// Handle selection preservation and TEXT_CHANGE emission
// common to modification APIs
function modify(modifier, source, index, shift) {
  if (this.options.strict && !this.isEnabled() && source === _emitter4.default.sources.USER) {
    return new _quillDelta2.default();
  }
  var range = index == null ? null : this.getSelection();
  var oldDelta = this.editor.delta;
  var change = modifier();
  if (range != null) {
    if (index === true) index = range.index;
    if (shift == null) {
      range = shiftRange(range, change, source);
    } else if (shift !== 0) {
      range = shiftRange(range, index, shift, source);
    }
    this.setSelection(range, _emitter4.default.sources.SILENT);
  }
  if (change.length() > 0) {
    var _emitter;

    var args = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source];
    (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
    if (source !== _emitter4.default.sources.SILENT) {
      var _emitter2;

      (_emitter2 = this.emitter).emit.apply(_emitter2, args);
    }
  }
  return change;
}

function overload(index, length, name, value, source) {
  var formats = {};
  if (typeof index.index === 'number' && typeof index.length === 'number') {
    // Allow for throwaway end (used by insertText/insertEmbed)
    if (typeof length !== 'number') {
      source = value, value = name, name = length, length = index.length, index = index.index;
    } else {
      length = index.length, index = index.index;
    }
  } else if (typeof length !== 'number') {
    source = value, value = name, name = length, length = 0;
  }
  // Handle format being object, two format name/value strings or excluded
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    formats = name;
    source = value;
  } else if (typeof name === 'string') {
    if (value != null) {
      formats[name] = value;
    } else {
      source = name;
    }
  }
  // Handle optional source
  source = source || _emitter4.default.sources.API;
  return [index, length, formats, source];
}

function shiftRange(range, index, length, source) {
  if (range == null) return null;
  var start = void 0,
      end = void 0;
  if (index instanceof _quillDelta2.default) {
    var _map = [range.index, range.index + range.length].map(function (pos) {
      return index.transformPosition(pos, source !== _emitter4.default.sources.USER);
    });

    var _map2 = _slicedToArray(_map, 2);

    start = _map2[0];
    end = _map2[1];
  } else {
    var _map3 = [range.index, range.index + range.length].map(function (pos) {
      if (pos < index || pos === index && source === _emitter4.default.sources.USER) return pos;
      if (length >= 0) {
        return pos + length;
      } else {
        return Math.max(index, pos + length);
      }
    });

    var _map4 = _slicedToArray(_map3, 2);

    start = _map4[0];
    end = _map4[1];
  }
  return new _selection.Range(start, end - start);
}

exports.expandConfig = expandConfig;
exports.overload = overload;
exports.default = Quill;

/***/ }),
/* 6 */
/***/ (function(module, exports, __nested_webpack_require_58401__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _text = __nested_webpack_require_58401__(7);

var _text2 = _interopRequireDefault(_text);

var _parchment = __nested_webpack_require_58401__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = function (_Parchment$Inline) {
  _inherits(Inline, _Parchment$Inline);

  function Inline() {
    _classCallCheck(this, Inline);

    return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
  }

  _createClass(Inline, [{
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
        var blot = this.isolate(index, length);
        if (value) {
          blot.wrap(name, value);
        }
      } else {
        _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'optimize', this).call(this, context);
      if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
        var parent = this.parent.isolate(this.offset(), this.length());
        this.moveChildren(parent);
        parent.wrap(this);
      }
    }
  }], [{
    key: 'compare',
    value: function compare(self, other) {
      var selfIndex = Inline.order.indexOf(self);
      var otherIndex = Inline.order.indexOf(other);
      if (selfIndex >= 0 || otherIndex >= 0) {
        return selfIndex - otherIndex;
      } else if (self === other) {
        return 0;
      } else if (self < other) {
        return -1;
      } else {
        return 1;
      }
    }
  }]);

  return Inline;
}(_parchment2.default.Inline);

Inline.allowedChildren = [Inline, _parchment2.default.Embed, _text2.default];
// Lower index means deeper in the DOM tree, since not found (-1) is for embeds
Inline.order = ['cursor', 'inline', // Must be lower
'underline', 'strike', 'italic', 'bold', 'script', 'link', 'code' // Must be higher
];

exports.default = Inline;

/***/ }),
/* 7 */
/***/ (function(module, exports, __nested_webpack_require_62823__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __nested_webpack_require_62823__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextBlot = function (_Parchment$Text) {
  _inherits(TextBlot, _Parchment$Text);

  function TextBlot() {
    _classCallCheck(this, TextBlot);

    return _possibleConstructorReturn(this, (TextBlot.__proto__ || Object.getPrototypeOf(TextBlot)).apply(this, arguments));
  }

  return TextBlot;
}(_parchment2.default.Text);

exports.default = TextBlot;

/***/ }),
/* 8 */
/***/ (function(module, exports, __nested_webpack_require_64422__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _eventemitter = __nested_webpack_require_64422__(54);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _logger = __nested_webpack_require_64422__(10);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:events');

var EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];

EVENTS.forEach(function (eventName) {
  document.addEventListener(eventName, function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    [].slice.call(document.querySelectorAll('.ql-container')).forEach(function (node) {
      // TODO use WeakMap
      if (node.__quill && node.__quill.emitter) {
        var _node$__quill$emitter;

        (_node$__quill$emitter = node.__quill.emitter).handleDOM.apply(_node$__quill$emitter, args);
      }
    });
  });
});

var Emitter = function (_EventEmitter) {
  _inherits(Emitter, _EventEmitter);

  function Emitter() {
    _classCallCheck(this, Emitter);

    var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

    _this.listeners = {};
    _this.on('error', debug.error);
    return _this;
  }

  _createClass(Emitter, [{
    key: 'emit',
    value: function emit() {
      debug.log.apply(debug, arguments);
      _get(Emitter.prototype.__proto__ || Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
    }
  }, {
    key: 'handleDOM',
    value: function handleDOM(event) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      (this.listeners[event.type] || []).forEach(function (_ref) {
        var node = _ref.node,
            handler = _ref.handler;

        if (event.target === node || node.contains(event.target)) {
          handler.apply(undefined, [event].concat(args));
        }
      });
    }
  }, {
    key: 'listenDOM',
    value: function listenDOM(eventName, node, handler) {
      if (!this.listeners[eventName]) {
        this.listeners[eventName] = [];
      }
      this.listeners[eventName].push({ node: node, handler: handler });
    }
  }]);

  return Emitter;
}(_eventemitter2.default);

Emitter.events = {
  EDITOR_CHANGE: 'editor-change',
  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
  SCROLL_OPTIMIZE: 'scroll-optimize',
  SCROLL_UPDATE: 'scroll-update',
  SELECTION_CHANGE: 'selection-change',
  TEXT_CHANGE: 'text-change'
};
Emitter.sources = {
  API: 'api',
  SILENT: 'silent',
  USER: 'user'
};

exports.default = Emitter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function Module(quill) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Module);

  this.quill = quill;
  this.options = options;
};

Module.DEFAULTS = {};

exports.default = Module;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var levels = ['error', 'warn', 'log', 'info'];
var level = 'warn';

function debug(method) {
  if (levels.indexOf(method) <= levels.indexOf(level)) {
    var _console;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    (_console = console)[method].apply(_console, args); // eslint-disable-line no-console
  }
}

function namespace(ns) {
  return levels.reduce(function (logger, method) {
    logger[method] = debug.bind(console, method, ns);
    return logger;
  }, {});
}

debug.level = namespace.level = function (newLevel) {
  level = newLevel;
};

exports.default = namespace;

/***/ }),
/* 11 */
/***/ (function(module, exports, __nested_webpack_require_70685__) {

var pSlice = Array.prototype.slice;
var objectKeys = __nested_webpack_require_70685__(52);
var isArguments = __nested_webpack_require_70685__(53);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __nested_webpack_require_73804__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __nested_webpack_require_73804__(1);
var Attributor = /** @class */ (function () {
    function Attributor(attrName, keyName, options) {
        if (options === void 0) { options = {}; }
        this.attrName = attrName;
        this.keyName = keyName;
        var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
        if (options.scope != null) {
            // Ignore type bits, force attribute bit
            this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
        }
        else {
            this.scope = Registry.Scope.ATTRIBUTE;
        }
        if (options.whitelist != null)
            this.whitelist = options.whitelist;
    }
    Attributor.keys = function (node) {
        return [].map.call(node.attributes, function (item) {
            return item.name;
        });
    };
    Attributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        node.setAttribute(this.keyName, value);
        return true;
    };
    Attributor.prototype.canAdd = function (node, value) {
        var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
        if (match == null)
            return false;
        if (this.whitelist == null)
            return true;
        if (typeof value === 'string') {
            return this.whitelist.indexOf(value.replace(/["']/g, '')) > -1;
        }
        else {
            return this.whitelist.indexOf(value) > -1;
        }
    };
    Attributor.prototype.remove = function (node) {
        node.removeAttribute(this.keyName);
    };
    Attributor.prototype.value = function (node) {
        var value = node.getAttribute(this.keyName);
        if (this.canAdd(node, value) && value) {
            return value;
        }
        return '';
    };
    return Attributor;
}());
exports.default = Attributor;


/***/ }),
/* 13 */
/***/ (function(module, exports, __nested_webpack_require_75851__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Code = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _quillDelta = __nested_webpack_require_75851__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __nested_webpack_require_75851__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __nested_webpack_require_75851__(4);

var _block2 = _interopRequireDefault(_block);

var _inline = __nested_webpack_require_75851__(6);

var _inline2 = _interopRequireDefault(_inline);

var _text = __nested_webpack_require_75851__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = function (_Inline) {
  _inherits(Code, _Inline);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  return Code;
}(_inline2.default);

Code.blotName = 'code';
Code.tagName = 'CODE';

var CodeBlock = function (_Block) {
  _inherits(CodeBlock, _Block);

  function CodeBlock() {
    _classCallCheck(this, CodeBlock);

    return _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).apply(this, arguments));
  }

  _createClass(CodeBlock, [{
    key: 'delta',
    value: function delta() {
      var _this3 = this;

      var text = this.domNode.textContent;
      if (text.endsWith('\n')) {
        // Should always be true
        text = text.slice(0, -1);
      }
      return text.split('\n').reduce(function (delta, frag) {
        return delta.insert(frag).insert('\n', _this3.formats());
      }, new _quillDelta2.default());
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (name === this.statics.blotName && value) return;

      var _descendant = this.descendant(_text2.default, this.length() - 1),
          _descendant2 = _slicedToArray(_descendant, 1),
          text = _descendant2[0];

      if (text != null) {
        text.deleteAt(text.length() - 1, 1);
      }
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'format', this).call(this, name, value);
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, name, value) {
      if (length === 0) return;
      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
        return;
      }
      var nextNewline = this.newlineIndex(index);
      if (nextNewline < 0 || nextNewline >= index + length) return;
      var prevNewline = this.newlineIndex(index, true) + 1;
      var isolateLength = nextNewline - prevNewline + 1;
      var blot = this.isolate(prevNewline, isolateLength);
      var next = blot.next;
      blot.format(name, value);
      if (next instanceof CodeBlock) {
        next.formatAt(0, index - prevNewline + length - isolateLength, name, value);
      }
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null) return;

      var _descendant3 = this.descendant(_text2.default, index),
          _descendant4 = _slicedToArray(_descendant3, 2),
          text = _descendant4[0],
          offset = _descendant4[1];

      text.insertAt(offset, value);
    }
  }, {
    key: 'length',
    value: function length() {
      var length = this.domNode.textContent.length;
      if (!this.domNode.textContent.endsWith('\n')) {
        return length + 1;
      }
      return length;
    }
  }, {
    key: 'newlineIndex',
    value: function newlineIndex(searchIndex) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!reverse) {
        var offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
        return offset > -1 ? searchIndex + offset : -1;
      } else {
        return this.domNode.textContent.slice(0, searchIndex).lastIndexOf('\n');
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      if (!this.domNode.textContent.endsWith('\n')) {
        this.appendChild(_parchment2.default.create('text', '\n'));
      }
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'optimize', this).call(this, context);
      var next = this.next;
      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
        next.optimize(context);
        next.moveChildren(this);
        next.remove();
      }
    }
  }, {
    key: 'replace',
    value: function replace(target) {
      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'replace', this).call(this, target);
      [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
        var blot = _parchment2.default.find(node);
        if (blot == null) {
          node.parentNode.removeChild(node);
        } else if (blot instanceof _parchment2.default.Embed) {
          blot.remove();
        } else {
          blot.unwrap();
        }
      });
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var domNode = _get(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock), 'create', this).call(this, value);
      domNode.setAttribute('spellcheck', false);
      return domNode;
    }
  }, {
    key: 'formats',
    value: function formats() {
      return true;
    }
  }]);

  return CodeBlock;
}(_block2.default);

CodeBlock.blotName = 'code-block';
CodeBlock.tagName = 'PRE';
CodeBlock.TAB = '  ';

exports.Code = Code;
exports.default = CodeBlock;

/***/ }),
/* 14 */
/***/ (function(module, exports, __nested_webpack_require_84272__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quillDelta = __nested_webpack_require_84272__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _op = __nested_webpack_require_84272__(20);

var _op2 = _interopRequireDefault(_op);

var _parchment = __nested_webpack_require_84272__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _code = __nested_webpack_require_84272__(13);

var _code2 = _interopRequireDefault(_code);

var _cursor = __nested_webpack_require_84272__(24);

var _cursor2 = _interopRequireDefault(_cursor);

var _block = __nested_webpack_require_84272__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __nested_webpack_require_84272__(16);

var _break2 = _interopRequireDefault(_break);

var _clone = __nested_webpack_require_84272__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __nested_webpack_require_84272__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _extend = __nested_webpack_require_84272__(3);

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ASCII = /^[ -~]*$/;

var Editor = function () {
  function Editor(scroll) {
    _classCallCheck(this, Editor);

    this.scroll = scroll;
    this.delta = this.getDelta();
  }

  _createClass(Editor, [{
    key: 'applyDelta',
    value: function applyDelta(delta) {
      var _this = this;

      var consumeNextNewline = false;
      this.scroll.update();
      var scrollLength = this.scroll.length();
      this.scroll.batchStart();
      delta = normalizeDelta(delta);
      delta.reduce(function (index, op) {
        var length = op.retain || op.delete || op.insert.length || 1;
        var attributes = op.attributes || {};
        if (op.insert != null) {
          if (typeof op.insert === 'string') {
            var text = op.insert;
            if (text.endsWith('\n') && consumeNextNewline) {
              consumeNextNewline = false;
              text = text.slice(0, -1);
            }
            if (index >= scrollLength && !text.endsWith('\n')) {
              consumeNextNewline = true;
            }
            _this.scroll.insertAt(index, text);

            var _scroll$line = _this.scroll.line(index),
                _scroll$line2 = _slicedToArray(_scroll$line, 2),
                line = _scroll$line2[0],
                offset = _scroll$line2[1];

            var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
            if (line instanceof _block2.default) {
              var _line$descendant = line.descendant(_parchment2.default.Leaf, offset),
                  _line$descendant2 = _slicedToArray(_line$descendant, 1),
                  leaf = _line$descendant2[0];

              formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
            }
            attributes = _op2.default.attributes.diff(formats, attributes) || {};
          } else if (_typeof(op.insert) === 'object') {
            var key = Object.keys(op.insert)[0]; // There should only be one key
            if (key == null) return index;
            _this.scroll.insertAt(index, key, op.insert[key]);
          }
          scrollLength += length;
        }
        Object.keys(attributes).forEach(function (name) {
          _this.scroll.formatAt(index, length, name, attributes[name]);
        });
        return index + length;
      }, 0);
      delta.reduce(function (index, op) {
        if (typeof op.delete === 'number') {
          _this.scroll.deleteAt(index, op.delete);
          return index;
        }
        return index + (op.retain || op.insert.length || 1);
      }, 0);
      this.scroll.batchEnd();
      return this.update(delta);
    }
  }, {
    key: 'deleteText',
    value: function deleteText(index, length) {
      this.scroll.deleteAt(index, length);
      return this.update(new _quillDelta2.default().retain(index).delete(length));
    }
  }, {
    key: 'formatLine',
    value: function formatLine(index, length) {
      var _this2 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.scroll.update();
      Object.keys(formats).forEach(function (format) {
        if (_this2.scroll.whitelist != null && !_this2.scroll.whitelist[format]) return;
        var lines = _this2.scroll.lines(index, Math.max(length, 1));
        var lengthRemaining = length;
        lines.forEach(function (line) {
          var lineLength = line.length();
          if (!(line instanceof _code2.default)) {
            line.format(format, formats[format]);
          } else {
            var codeIndex = index - line.offset(_this2.scroll);
            var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
            line.formatAt(codeIndex, codeLength, format, formats[format]);
          }
          lengthRemaining -= lineLength;
        });
      });
      this.scroll.optimize();
      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'formatText',
    value: function formatText(index, length) {
      var _this3 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      Object.keys(formats).forEach(function (format) {
        _this3.scroll.formatAt(index, length, format, formats[format]);
      });
      return this.update(new _quillDelta2.default().retain(index).retain(length, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'getContents',
    value: function getContents(index, length) {
      return this.delta.slice(index, index + length);
    }
  }, {
    key: 'getDelta',
    value: function getDelta() {
      return this.scroll.lines().reduce(function (delta, line) {
        return delta.concat(line.delta());
      }, new _quillDelta2.default());
    }
  }, {
    key: 'getFormat',
    value: function getFormat(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var lines = [],
          leaves = [];
      if (length === 0) {
        this.scroll.path(index).forEach(function (path) {
          var _path = _slicedToArray(path, 1),
              blot = _path[0];

          if (blot instanceof _block2.default) {
            lines.push(blot);
          } else if (blot instanceof _parchment2.default.Leaf) {
            leaves.push(blot);
          }
        });
      } else {
        lines = this.scroll.lines(index, length);
        leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
      }
      var formatsArr = [lines, leaves].map(function (blots) {
        if (blots.length === 0) return {};
        var formats = (0, _block.bubbleFormats)(blots.shift());
        while (Object.keys(formats).length > 0) {
          var blot = blots.shift();
          if (blot == null) return formats;
          formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
        }
        return formats;
      });
      return _extend2.default.apply(_extend2.default, formatsArr);
    }
  }, {
    key: 'getText',
    value: function getText(index, length) {
      return this.getContents(index, length).filter(function (op) {
        return typeof op.insert === 'string';
      }).map(function (op) {
        return op.insert;
      }).join('');
    }
  }, {
    key: 'insertEmbed',
    value: function insertEmbed(index, embed, value) {
      this.scroll.insertAt(index, embed, value);
      return this.update(new _quillDelta2.default().retain(index).insert(_defineProperty({}, embed, value)));
    }
  }, {
    key: 'insertText',
    value: function insertText(index, text) {
      var _this4 = this;

      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      this.scroll.insertAt(index, text);
      Object.keys(formats).forEach(function (format) {
        _this4.scroll.formatAt(index, text.length, format, formats[format]);
      });
      return this.update(new _quillDelta2.default().retain(index).insert(text, (0, _clone2.default)(formats)));
    }
  }, {
    key: 'isBlank',
    value: function isBlank() {
      if (this.scroll.children.length == 0) return true;
      if (this.scroll.children.length > 1) return false;
      var block = this.scroll.children.head;
      if (block.statics.blotName !== _block2.default.blotName) return false;
      if (block.children.length > 1) return false;
      return block.children.head instanceof _break2.default;
    }
  }, {
    key: 'removeFormat',
    value: function removeFormat(index, length) {
      var text = this.getText(index, length);

      var _scroll$line3 = this.scroll.line(index + length),
          _scroll$line4 = _slicedToArray(_scroll$line3, 2),
          line = _scroll$line4[0],
          offset = _scroll$line4[1];

      var suffixLength = 0,
          suffix = new _quillDelta2.default();
      if (line != null) {
        if (!(line instanceof _code2.default)) {
          suffixLength = line.length() - offset;
        } else {
          suffixLength = line.newlineIndex(offset) - offset + 1;
        }
        suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
      }
      var contents = this.getContents(index, length + suffixLength);
      var diff = contents.diff(new _quillDelta2.default().insert(text).concat(suffix));
      var delta = new _quillDelta2.default().retain(index).concat(diff);
      return this.applyDelta(delta);
    }
  }, {
    key: 'update',
    value: function update(change) {
      var mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var cursorIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      var oldDelta = this.delta;
      if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && _parchment2.default.find(mutations[0].target)) {
        // Optimization for character changes
        var textBlot = _parchment2.default.find(mutations[0].target);
        var formats = (0, _block.bubbleFormats)(textBlot);
        var index = textBlot.offset(this.scroll);
        var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, '');
        var oldText = new _quillDelta2.default().insert(oldValue);
        var newText = new _quillDelta2.default().insert(textBlot.value());
        var diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newText, cursorIndex));
        change = diffDelta.reduce(function (delta, op) {
          if (op.insert) {
            return delta.insert(op.insert, formats);
          } else {
            return delta.push(op);
          }
        }, new _quillDelta2.default());
        this.delta = oldDelta.compose(change);
      } else {
        this.delta = this.getDelta();
        if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
          change = oldDelta.diff(this.delta, cursorIndex);
        }
      }
      return change;
    }
  }]);

  return Editor;
}();

function combineFormats(formats, combined) {
  return Object.keys(combined).reduce(function (merged, name) {
    if (formats[name] == null) return merged;
    if (combined[name] === formats[name]) {
      merged[name] = combined[name];
    } else if (Array.isArray(combined[name])) {
      if (combined[name].indexOf(formats[name]) < 0) {
        merged[name] = combined[name].concat([formats[name]]);
      }
    } else {
      merged[name] = [combined[name], formats[name]];
    }
    return merged;
  }, {});
}

function normalizeDelta(delta) {
  return delta.reduce(function (delta, op) {
    if (op.insert === 1) {
      var attributes = (0, _clone2.default)(op.attributes);
      delete attributes['image'];
      return delta.insert({ image: op.attributes.image }, attributes);
    }
    if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
      op = (0, _clone2.default)(op);
      if (op.attributes.list) {
        op.attributes.list = 'ordered';
      } else {
        op.attributes.list = 'bullet';
        delete op.attributes.bullet;
      }
    }
    if (typeof op.insert === 'string') {
      var text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      return delta.insert(text, op.attributes);
    }
    return delta.push(op);
  }, new _quillDelta2.default());
}

exports.default = Editor;

/***/ }),
/* 15 */
/***/ (function(module, exports, __nested_webpack_require_98688__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Range = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __nested_webpack_require_98688__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _clone = __nested_webpack_require_98688__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __nested_webpack_require_98688__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _emitter3 = __nested_webpack_require_98688__(8);

var _emitter4 = _interopRequireDefault(_emitter3);

var _logger = __nested_webpack_require_98688__(10);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug = (0, _logger2.default)('quill:selection');

var Range = function Range(index) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  _classCallCheck(this, Range);

  this.index = index;
  this.length = length;
};

var Selection = function () {
  function Selection(scroll, emitter) {
    var _this = this;

    _classCallCheck(this, Selection);

    this.emitter = emitter;
    this.scroll = scroll;
    this.composing = false;
    this.mouseDown = false;
    this.root = this.scroll.domNode;
    this.cursor = _parchment2.default.create('cursor', this);
    // savedRange is last non-null range
    this.lastRange = this.savedRange = new Range(0, 0);
    this.handleComposition();
    this.handleDragging();
    this.emitter.listenDOM('selectionchange', document, function () {
      if (!_this.mouseDown) {
        setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 1);
      }
    });
    this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type, delta) {
      if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
        _this.update(_emitter4.default.sources.SILENT);
      }
    });
    this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function () {
      if (!_this.hasFocus()) return;
      var native = _this.getNativeRange();
      if (native == null) return;
      if (native.start.node === _this.cursor.textNode) return; // cursor.restore() will handle
      // TODO unclear if this has negative side effects
      _this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function () {
        try {
          _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
        } catch (ignored) {}
      });
    });
    this.emitter.on(_emitter4.default.events.SCROLL_OPTIMIZE, function (mutations, context) {
      if (context.range) {
        var _context$range = context.range,
            startNode = _context$range.startNode,
            startOffset = _context$range.startOffset,
            endNode = _context$range.endNode,
            endOffset = _context$range.endOffset;

        _this.setNativeRange(startNode, startOffset, endNode, endOffset);
      }
    });
    this.update(_emitter4.default.sources.SILENT);
  }

  _createClass(Selection, [{
    key: 'handleComposition',
    value: function handleComposition() {
      var _this2 = this;

      this.root.addEventListener('compositionstart', function () {
        _this2.composing = true;
      });
      this.root.addEventListener('compositionend', function () {
        _this2.composing = false;
        if (_this2.cursor.parent) {
          var range = _this2.cursor.restore();
          if (!range) return;
          setTimeout(function () {
            _this2.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);
          }, 1);
        }
      });
    }
  }, {
    key: 'handleDragging',
    value: function handleDragging() {
      var _this3 = this;

      this.emitter.listenDOM('mousedown', document.body, function () {
        _this3.mouseDown = true;
      });
      this.emitter.listenDOM('mouseup', document.body, function () {
        _this3.mouseDown = false;
        _this3.update(_emitter4.default.sources.USER);
      });
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.hasFocus()) return;
      this.root.focus();
      this.setRange(this.savedRange);
    }
  }, {
    key: 'format',
    value: function format(_format, value) {
      if (this.scroll.whitelist != null && !this.scroll.whitelist[_format]) return;
      this.scroll.update();
      var nativeRange = this.getNativeRange();
      if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
      if (nativeRange.start.node !== this.cursor.textNode) {
        var blot = _parchment2.default.find(nativeRange.start.node, false);
        if (blot == null) return;
        // TODO Give blot ability to not split
        if (blot instanceof _parchment2.default.Leaf) {
          var after = blot.split(nativeRange.start.offset);
          blot.parent.insertBefore(this.cursor, after);
        } else {
          blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
        }
        this.cursor.attach();
      }
      this.cursor.format(_format, value);
      this.scroll.optimize();
      this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
      this.update();
    }
  }, {
    key: 'getBounds',
    value: function getBounds(index) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var scrollLength = this.scroll.length();
      index = Math.min(index, scrollLength - 1);
      length = Math.min(index + length, scrollLength - 1) - index;
      var node = void 0,
          _scroll$leaf = this.scroll.leaf(index),
          _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2),
          leaf = _scroll$leaf2[0],
          offset = _scroll$leaf2[1];
      if (leaf == null) return null;

      var _leaf$position = leaf.position(offset, true);

      var _leaf$position2 = _slicedToArray(_leaf$position, 2);

      node = _leaf$position2[0];
      offset = _leaf$position2[1];

      var range = document.createRange();
      if (length > 0) {
        range.setStart(node, offset);

        var _scroll$leaf3 = this.scroll.leaf(index + length);

        var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);

        leaf = _scroll$leaf4[0];
        offset = _scroll$leaf4[1];

        if (leaf == null) return null;

        var _leaf$position3 = leaf.position(offset, true);

        var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

        node = _leaf$position4[0];
        offset = _leaf$position4[1];

        range.setEnd(node, offset);
        return range.getBoundingClientRect();
      } else {
        var side = 'left';
        var rect = void 0;
        if (node instanceof Text) {
          if (offset < node.data.length) {
            range.setStart(node, offset);
            range.setEnd(node, offset + 1);
          } else {
            range.setStart(node, offset - 1);
            range.setEnd(node, offset);
            side = 'right';
          }
          rect = range.getBoundingClientRect();
        } else {
          rect = leaf.domNode.getBoundingClientRect();
          if (offset > 0) side = 'right';
        }
        return {
          bottom: rect.top + rect.height,
          height: rect.height,
          left: rect[side],
          right: rect[side],
          top: rect.top,
          width: 0
        };
      }
    }
  }, {
    key: 'getNativeRange',
    value: function getNativeRange() {
      var selection = document.getSelection();
      if (selection == null || selection.rangeCount <= 0) return null;
      var nativeRange = selection.getRangeAt(0);
      if (nativeRange == null) return null;
      var range = this.normalizeNative(nativeRange);
      debug.info('getNativeRange', range);
      return range;
    }
  }, {
    key: 'getRange',
    value: function getRange() {
      var normalized = this.getNativeRange();
      if (normalized == null) return [null, null];
      var range = this.normalizedToRange(normalized);
      return [range, normalized];
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      return document.activeElement === this.root;
    }
  }, {
    key: 'normalizedToRange',
    value: function normalizedToRange(range) {
      var _this4 = this;

      var positions = [[range.start.node, range.start.offset]];
      if (!range.native.collapsed) {
        positions.push([range.end.node, range.end.offset]);
      }
      var indexes = positions.map(function (position) {
        var _position = _slicedToArray(position, 2),
            node = _position[0],
            offset = _position[1];

        var blot = _parchment2.default.find(node, true);
        var index = blot.offset(_this4.scroll);
        if (offset === 0) {
          return index;
        } else if (blot instanceof _parchment2.default.Container) {
          return index + blot.length();
        } else {
          return index + blot.index(node, offset);
        }
      });
      var end = Math.min(Math.max.apply(Math, _toConsumableArray(indexes)), this.scroll.length() - 1);
      var start = Math.min.apply(Math, [end].concat(_toConsumableArray(indexes)));
      return new Range(start, end - start);
    }
  }, {
    key: 'normalizeNative',
    value: function normalizeNative(nativeRange) {
      if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
        return null;
      }
      var range = {
        start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
        end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
        native: nativeRange
      };
      [range.start, range.end].forEach(function (position) {
        var node = position.node,
            offset = position.offset;
        while (!(node instanceof Text) && node.childNodes.length > 0) {
          if (node.childNodes.length > offset) {
            node = node.childNodes[offset];
            offset = 0;
          } else if (node.childNodes.length === offset) {
            node = node.lastChild;
            offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
          } else {
            break;
          }
        }
        position.node = node, position.offset = offset;
      });
      return range;
    }
  }, {
    key: 'rangeToNative',
    value: function rangeToNative(range) {
      var _this5 = this;

      var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
      var args = [];
      var scrollLength = this.scroll.length();
      indexes.forEach(function (index, i) {
        index = Math.min(scrollLength - 1, index);
        var node = void 0,
            _scroll$leaf5 = _this5.scroll.leaf(index),
            _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2),
            leaf = _scroll$leaf6[0],
            offset = _scroll$leaf6[1];
        var _leaf$position5 = leaf.position(offset, i !== 0);

        var _leaf$position6 = _slicedToArray(_leaf$position5, 2);

        node = _leaf$position6[0];
        offset = _leaf$position6[1];

        args.push(node, offset);
      });
      if (args.length < 2) {
        args = args.concat(args);
      }
      return args;
    }
  }, {
    key: 'scrollIntoView',
    value: function scrollIntoView(scrollingContainer) {
      var range = this.lastRange;
      if (range == null) return;
      var bounds = this.getBounds(range.index, range.length);
      if (bounds == null) return;
      var limit = this.scroll.length() - 1;

      var _scroll$line = this.scroll.line(Math.min(range.index, limit)),
          _scroll$line2 = _slicedToArray(_scroll$line, 1),
          first = _scroll$line2[0];

      var last = first;
      if (range.length > 0) {
        var _scroll$line3 = this.scroll.line(Math.min(range.index + range.length, limit));

        var _scroll$line4 = _slicedToArray(_scroll$line3, 1);

        last = _scroll$line4[0];
      }
      if (first == null || last == null) return;
      var scrollBounds = scrollingContainer.getBoundingClientRect();
      if (bounds.top < scrollBounds.top) {
        scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;
      } else if (bounds.bottom > scrollBounds.bottom) {
        scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;
      }
    }
  }, {
    key: 'setNativeRange',
    value: function setNativeRange(startNode, startOffset) {
      var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
      var endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
      var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
      if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
        return;
      }
      var selection = document.getSelection();
      if (selection == null) return;
      if (startNode != null) {
        if (!this.hasFocus()) this.root.focus();
        var native = (this.getNativeRange() || {}).native;
        if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {

          if (startNode.tagName == "BR") {
            startOffset = [].indexOf.call(startNode.parentNode.childNodes, startNode);
            startNode = startNode.parentNode;
          }
          if (endNode.tagName == "BR") {
            endOffset = [].indexOf.call(endNode.parentNode.childNodes, endNode);
            endNode = endNode.parentNode;
          }
          var range = document.createRange();
          range.setStart(startNode, startOffset);
          range.setEnd(endNode, endOffset);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } else {
        selection.removeAllRanges();
        this.root.blur();
        document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
      }
    }
  }, {
    key: 'setRange',
    value: function setRange(range) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

      if (typeof force === 'string') {
        source = force;
        force = false;
      }
      debug.info('setRange', range);
      if (range != null) {
        var args = this.rangeToNative(range);
        this.setNativeRange.apply(this, _toConsumableArray(args).concat([force]));
      } else {
        this.setNativeRange(null);
      }
      this.update(source);
    }
  }, {
    key: 'update',
    value: function update() {
      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

      var oldRange = this.lastRange;

      var _getRange = this.getRange(),
          _getRange2 = _slicedToArray(_getRange, 2),
          lastRange = _getRange2[0],
          nativeRange = _getRange2[1];

      this.lastRange = lastRange;
      if (this.lastRange != null) {
        this.savedRange = this.lastRange;
      }
      if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
        var _emitter;

        if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
          this.cursor.restore();
        }
        var args = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];
        (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
        if (source !== _emitter4.default.sources.SILENT) {
          var _emitter2;

          (_emitter2 = this.emitter).emit.apply(_emitter2, args);
        }
      }
    }
  }]);

  return Selection;
}();

function contains(parent, descendant) {
  try {
    // Firefox inserts inaccessible nodes around video elements
    descendant.parentNode;
  } catch (e) {
    return false;
  }
  // IE11 has bug with Text nodes
  // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect
  if (descendant instanceof Text) {
    descendant = descendant.parentNode;
  }
  return parent.contains(descendant);
}

exports.Range = Range;
exports.default = Selection;

/***/ }),
/* 16 */
/***/ (function(module, exports, __nested_webpack_require_116908__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __nested_webpack_require_116908__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Break = function (_Parchment$Embed) {
  _inherits(Break, _Parchment$Embed);

  function Break() {
    _classCallCheck(this, Break);

    return _possibleConstructorReturn(this, (Break.__proto__ || Object.getPrototypeOf(Break)).apply(this, arguments));
  }

  _createClass(Break, [{
    key: 'insertInto',
    value: function insertInto(parent, ref) {
      if (parent.children.length === 0) {
        _get(Break.prototype.__proto__ || Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
      } else {
        this.remove();
      }
    }
  }, {
    key: 'length',
    value: function length() {
      return 0;
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }], [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  return Break;
}(_parchment2.default.Embed);

Break.blotName = 'break';
Break.tagName = 'BR';

exports.default = Break;

/***/ }),
/* 17 */
/***/ (function(module, exports, __nested_webpack_require_120162__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var linked_list_1 = __nested_webpack_require_120162__(44);
var shadow_1 = __nested_webpack_require_120162__(30);
var Registry = __nested_webpack_require_120162__(1);
var ContainerBlot = /** @class */ (function (_super) {
    __extends(ContainerBlot, _super);
    function ContainerBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.build();
        return _this;
    }
    ContainerBlot.prototype.appendChild = function (other) {
        this.insertBefore(other);
    };
    ContainerBlot.prototype.attach = function () {
        _super.prototype.attach.call(this);
        this.children.forEach(function (child) {
            child.attach();
        });
    };
    ContainerBlot.prototype.build = function () {
        var _this = this;
        this.children = new linked_list_1.default();
        // Need to be reversed for if DOM nodes already in order
        [].slice
            .call(this.domNode.childNodes)
            .reverse()
            .forEach(function (node) {
            try {
                var child = makeBlot(node);
                _this.insertBefore(child, _this.children.head || undefined);
            }
            catch (err) {
                if (err instanceof Registry.ParchmentError)
                    return;
                else
                    throw err;
            }
        });
    };
    ContainerBlot.prototype.deleteAt = function (index, length) {
        if (index === 0 && length === this.length()) {
            return this.remove();
        }
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.deleteAt(offset, length);
        });
    };
    ContainerBlot.prototype.descendant = function (criteria, index) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if ((criteria.blotName == null && criteria(child)) ||
            (criteria.blotName != null && child instanceof criteria)) {
            return [child, offset];
        }
        else if (child instanceof ContainerBlot) {
            return child.descendant(criteria, offset);
        }
        else {
            return [null, -1];
        }
    };
    ContainerBlot.prototype.descendants = function (criteria, index, length) {
        if (index === void 0) { index = 0; }
        if (length === void 0) { length = Number.MAX_VALUE; }
        var descendants = [];
        var lengthLeft = length;
        this.children.forEachAt(index, length, function (child, index, length) {
            if ((criteria.blotName == null && criteria(child)) ||
                (criteria.blotName != null && child instanceof criteria)) {
                descendants.push(child);
            }
            if (child instanceof ContainerBlot) {
                descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
            }
            lengthLeft -= length;
        });
        return descendants;
    };
    ContainerBlot.prototype.detach = function () {
        this.children.forEach(function (child) {
            child.detach();
        });
        _super.prototype.detach.call(this);
    };
    ContainerBlot.prototype.formatAt = function (index, length, name, value) {
        this.children.forEachAt(index, length, function (child, offset, length) {
            child.formatAt(offset, length, name, value);
        });
    };
    ContainerBlot.prototype.insertAt = function (index, value, def) {
        var _a = this.children.find(index), child = _a[0], offset = _a[1];
        if (child) {
            child.insertAt(offset, value, def);
        }
        else {
            var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
            this.appendChild(blot);
        }
    };
    ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
        if (this.statics.allowedChildren != null &&
            !this.statics.allowedChildren.some(function (child) {
                return childBlot instanceof child;
            })) {
            throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
        }
        childBlot.insertInto(this, refBlot);
    };
    ContainerBlot.prototype.length = function () {
        return this.children.reduce(function (memo, child) {
            return memo + child.length();
        }, 0);
    };
    ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
        this.children.forEach(function (child) {
            targetParent.insertBefore(child, refNode);
        });
    };
    ContainerBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        if (this.children.length === 0) {
            if (this.statics.defaultChild != null) {
                var child = Registry.create(this.statics.defaultChild);
                this.appendChild(child);
                child.optimize(context);
            }
            else {
                this.remove();
            }
        }
    };
    ContainerBlot.prototype.path = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
        var position = [[this, index]];
        if (child instanceof ContainerBlot) {
            return position.concat(child.path(offset, inclusive));
        }
        else if (child != null) {
            position.push([child, offset]);
        }
        return position;
    };
    ContainerBlot.prototype.removeChild = function (child) {
        this.children.remove(child);
    };
    ContainerBlot.prototype.replace = function (target) {
        if (target instanceof ContainerBlot) {
            target.moveChildren(this);
        }
        _super.prototype.replace.call(this, target);
    };
    ContainerBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = this.clone();
        this.parent.insertBefore(after, this.next);
        this.children.forEachAt(index, this.length(), function (child, offset, length) {
            child = child.split(offset, force);
            after.appendChild(child);
        });
        return after;
    };
    ContainerBlot.prototype.unwrap = function () {
        this.moveChildren(this.parent, this.next);
        this.remove();
    };
    ContainerBlot.prototype.update = function (mutations, context) {
        var _this = this;
        var addedNodes = [];
        var removedNodes = [];
        mutations.forEach(function (mutation) {
            if (mutation.target === _this.domNode && mutation.type === 'childList') {
                addedNodes.push.apply(addedNodes, mutation.addedNodes);
                removedNodes.push.apply(removedNodes, mutation.removedNodes);
            }
        });
        removedNodes.forEach(function (node) {
            // Check node has actually been removed
            // One exception is Chrome does not immediately remove IFRAMEs
            // from DOM but MutationRecord is correct in its reported removal
            if (node.parentNode != null &&
                // @ts-ignore
                node.tagName !== 'IFRAME' &&
                document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                return;
            }
            var blot = Registry.find(node);
            if (blot == null)
                return;
            if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
                blot.detach();
            }
        });
        addedNodes
            .filter(function (node) {
            return node.parentNode == _this.domNode;
        })
            .sort(function (a, b) {
            if (a === b)
                return 0;
            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                return 1;
            }
            return -1;
        })
            .forEach(function (node) {
            var refBlot = null;
            if (node.nextSibling != null) {
                refBlot = Registry.find(node.nextSibling);
            }
            var blot = makeBlot(node);
            if (blot.next != refBlot || blot.next == null) {
                if (blot.parent != null) {
                    blot.parent.removeChild(_this);
                }
                _this.insertBefore(blot, refBlot || undefined);
            }
        });
    };
    return ContainerBlot;
}(shadow_1.default));
function makeBlot(node) {
    var blot = Registry.find(node);
    if (blot == null) {
        try {
            blot = Registry.create(node);
        }
        catch (e) {
            blot = Registry.create(Registry.Scope.INLINE);
            [].slice.call(node.childNodes).forEach(function (child) {
                // @ts-ignore
                blot.domNode.appendChild(child);
            });
            if (node.parentNode) {
                node.parentNode.replaceChild(blot.domNode, node);
            }
            blot.attach();
        }
    }
    return blot;
}
exports.default = ContainerBlot;


/***/ }),
/* 18 */
/***/ (function(module, exports, __nested_webpack_require_130088__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __nested_webpack_require_130088__(12);
var store_1 = __nested_webpack_require_130088__(31);
var container_1 = __nested_webpack_require_130088__(17);
var Registry = __nested_webpack_require_130088__(1);
var FormatBlot = /** @class */ (function (_super) {
    __extends(FormatBlot, _super);
    function FormatBlot(domNode) {
        var _this = _super.call(this, domNode) || this;
        _this.attributes = new store_1.default(_this.domNode);
        return _this;
    }
    FormatBlot.formats = function (domNode) {
        if (typeof this.tagName === 'string') {
            return true;
        }
        else if (Array.isArray(this.tagName)) {
            return domNode.tagName.toLowerCase();
        }
        return undefined;
    };
    FormatBlot.prototype.format = function (name, value) {
        var format = Registry.query(name);
        if (format instanceof attributor_1.default) {
            this.attributes.attribute(format, value);
        }
        else if (value) {
            if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
                this.replaceWith(name, value);
            }
        }
    };
    FormatBlot.prototype.formats = function () {
        var formats = this.attributes.values();
        var format = this.statics.formats(this.domNode);
        if (format != null) {
            formats[this.statics.blotName] = format;
        }
        return formats;
    };
    FormatBlot.prototype.replaceWith = function (name, value) {
        var replacement = _super.prototype.replaceWith.call(this, name, value);
        this.attributes.copy(replacement);
        return replacement;
    };
    FormatBlot.prototype.update = function (mutations, context) {
        var _this = this;
        _super.prototype.update.call(this, mutations, context);
        if (mutations.some(function (mutation) {
            return mutation.target === _this.domNode && mutation.type === 'attributes';
        })) {
            this.attributes.build();
        }
    };
    FormatBlot.prototype.wrap = function (name, value) {
        var wrapper = _super.prototype.wrap.call(this, name, value);
        if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
            this.attributes.move(wrapper);
        }
        return wrapper;
    };
    return FormatBlot;
}(container_1.default));
exports.default = FormatBlot;


/***/ }),
/* 19 */
/***/ (function(module, exports, __nested_webpack_require_133111__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shadow_1 = __nested_webpack_require_133111__(30);
var Registry = __nested_webpack_require_133111__(1);
var LeafBlot = /** @class */ (function (_super) {
    __extends(LeafBlot, _super);
    function LeafBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeafBlot.value = function (domNode) {
        return true;
    };
    LeafBlot.prototype.index = function (node, offset) {
        if (this.domNode === node ||
            this.domNode.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            return Math.min(offset, 1);
        }
        return -1;
    };
    LeafBlot.prototype.position = function (index, inclusive) {
        var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
        if (index > 0)
            offset += 1;
        return [this.parent.domNode, offset];
    };
    LeafBlot.prototype.value = function () {
        var _a;
        return _a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a;
    };
    LeafBlot.scope = Registry.Scope.INLINE_BLOT;
    return LeafBlot;
}(shadow_1.default));
exports.default = LeafBlot;


/***/ }),
/* 20 */
/***/ (function(module, exports, __nested_webpack_require_134898__) {

var equal = __nested_webpack_require_134898__(11);
var extend = __nested_webpack_require_134898__(3);


var lib = {
  attributes: {
    compose: function (a, b, keepNull) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = extend(true, {}, b);
      if (!keepNull) {
        attributes = Object.keys(attributes).reduce(function (copy, key) {
          if (attributes[key] != null) {
            copy[key] = attributes[key];
          }
          return copy;
        }, {});
      }
      for (var key in a) {
        if (a[key] !== undefined && b[key] === undefined) {
          attributes[key] = a[key];
        }
      }
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },

    diff: function(a, b) {
      if (typeof a !== 'object') a = {};
      if (typeof b !== 'object') b = {};
      var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
        if (!equal(a[key], b[key])) {
          attributes[key] = b[key] === undefined ? null : b[key];
        }
        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    },

    transform: function (a, b, priority) {
      if (typeof a !== 'object') return b;
      if (typeof b !== 'object') return undefined;
      if (!priority) return b;  // b simply overwrites us without priority
      var attributes = Object.keys(b).reduce(function (attributes, key) {
        if (a[key] === undefined) attributes[key] = b[key];  // null is a valid value
        return attributes;
      }, {});
      return Object.keys(attributes).length > 0 ? attributes : undefined;
    }
  },

  iterator: function (ops) {
    return new Iterator(ops);
  },

  length: function (op) {
    if (typeof op['delete'] === 'number') {
      return op['delete'];
    } else if (typeof op.retain === 'number') {
      return op.retain;
    } else {
      return typeof op.insert === 'string' ? op.insert.length : 1;
    }
  }
};


function Iterator(ops) {
  this.ops = ops;
  this.index = 0;
  this.offset = 0;
};

Iterator.prototype.hasNext = function () {
  return this.peekLength() < Infinity;
};

Iterator.prototype.next = function (length) {
  if (!length) length = Infinity;
  var nextOp = this.ops[this.index];
  if (nextOp) {
    var offset = this.offset;
    var opLength = lib.length(nextOp)
    if (length >= opLength - offset) {
      length = opLength - offset;
      this.index += 1;
      this.offset = 0;
    } else {
      this.offset += length;
    }
    if (typeof nextOp['delete'] === 'number') {
      return { 'delete': length };
    } else {
      var retOp = {};
      if (nextOp.attributes) {
        retOp.attributes = nextOp.attributes;
      }
      if (typeof nextOp.retain === 'number') {
        retOp.retain = length;
      } else if (typeof nextOp.insert === 'string') {
        retOp.insert = nextOp.insert.substr(offset, length);
      } else {
        // offset should === 0, length should === 1
        retOp.insert = nextOp.insert;
      }
      return retOp;
    }
  } else {
    return { retain: Infinity };
  }
};

Iterator.prototype.peek = function () {
  return this.ops[this.index];
};

Iterator.prototype.peekLength = function () {
  if (this.ops[this.index]) {
    // Should never return 0 if our index is being managed correctly
    return lib.length(this.ops[this.index]) - this.offset;
  } else {
    return Infinity;
  }
};

Iterator.prototype.peekType = function () {
  if (this.ops[this.index]) {
    if (typeof this.ops[this.index]['delete'] === 'number') {
      return 'delete';
    } else if (typeof this.ops[this.index].retain === 'number') {
      return 'retain';
    } else {
      return 'insert';
    }
  }
  return 'retain';
};

Iterator.prototype.rest = function () {
  if (!this.hasNext()) {
    return [];
  } else if (this.offset === 0) {
    return this.ops.slice(this.index);
  } else {
    var offset = this.offset;
    var index = this.index;
    var next = this.next();
    var rest = this.ops.slice(this.index);
    this.offset = offset;
    this.index = index;
    return [next].concat(rest);
  }
};


module.exports = lib;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __nested_webpack_require_146497__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __nested_webpack_require_146497__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _emitter = __nested_webpack_require_146497__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _block = __nested_webpack_require_146497__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __nested_webpack_require_146497__(16);

var _break2 = _interopRequireDefault(_break);

var _code = __nested_webpack_require_146497__(13);

var _code2 = _interopRequireDefault(_code);

var _container = __nested_webpack_require_146497__(25);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isLine(blot) {
  return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
}

var Scroll = function (_Parchment$Scroll) {
  _inherits(Scroll, _Parchment$Scroll);

  function Scroll(domNode, config) {
    _classCallCheck(this, Scroll);

    var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, domNode));

    _this.emitter = config.emitter;
    if (Array.isArray(config.whitelist)) {
      _this.whitelist = config.whitelist.reduce(function (whitelist, format) {
        whitelist[format] = true;
        return whitelist;
      }, {});
    }
    // Some reason fixes composition issues with character languages in Windows/Chrome, Safari
    _this.domNode.addEventListener('DOMNodeInserted', function () {});
    _this.optimize();
    _this.enable();
    return _this;
  }

  _createClass(Scroll, [{
    key: 'batchStart',
    value: function batchStart() {
      this.batch = true;
    }
  }, {
    key: 'batchEnd',
    value: function batchEnd() {
      this.batch = false;
      this.optimize();
    }
  }, {
    key: 'deleteAt',
    value: function deleteAt(index, length) {
      var _line = this.line(index),
          _line2 = _slicedToArray(_line, 2),
          first = _line2[0],
          offset = _line2[1];

      var _line3 = this.line(index + length),
          _line4 = _slicedToArray(_line3, 1),
          last = _line4[0];

      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);
      if (last != null && first !== last && offset > 0) {
        if (first instanceof _block.BlockEmbed || last instanceof _block.BlockEmbed) {
          this.optimize();
          return;
        }
        if (first instanceof _code2.default) {
          var newlineIndex = first.newlineIndex(first.length(), true);
          if (newlineIndex > -1) {
            first = first.split(newlineIndex + 1);
            if (first === last) {
              this.optimize();
              return;
            }
          }
        } else if (last instanceof _code2.default) {
          var _newlineIndex = last.newlineIndex(0);
          if (_newlineIndex > -1) {
            last.split(_newlineIndex + 1);
          }
        }
        var ref = last.children.head instanceof _break2.default ? null : last.children.head;
        first.moveChildren(last, ref);
        first.remove();
      }
      this.optimize();
    }
  }, {
    key: 'enable',
    value: function enable() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.domNode.setAttribute('contenteditable', enabled);
    }
  }, {
    key: 'formatAt',
    value: function formatAt(index, length, format, value) {
      if (this.whitelist != null && !this.whitelist[format]) return;
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'formatAt', this).call(this, index, length, format, value);
      this.optimize();
    }
  }, {
    key: 'insertAt',
    value: function insertAt(index, value, def) {
      if (def != null && this.whitelist != null && !this.whitelist[value]) return;
      if (index >= this.length()) {
        if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
          var blot = _parchment2.default.create(this.statics.defaultChild);
          this.appendChild(blot);
          if (def == null && value.endsWith('\n')) {
            value = value.slice(0, -1);
          }
          blot.insertAt(0, value, def);
        } else {
          var embed = _parchment2.default.create(value, def);
          this.appendChild(embed);
        }
      } else {
        _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertAt', this).call(this, index, value, def);
      }
      this.optimize();
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
        var wrapper = _parchment2.default.create(this.statics.defaultChild);
        wrapper.appendChild(blot);
        blot = wrapper;
      }
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, blot, ref);
    }
  }, {
    key: 'leaf',
    value: function leaf(index) {
      return this.path(index).pop() || [null, -1];
    }
  }, {
    key: 'line',
    value: function line(index) {
      if (index === this.length()) {
        return this.line(index - 1);
      }
      return this.descendant(isLine, index);
    }
  }, {
    key: 'lines',
    value: function lines() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

      var getLines = function getLines(blot, index, length) {
        var lines = [],
            lengthLeft = length;
        blot.children.forEachAt(index, length, function (child, index, length) {
          if (isLine(child)) {
            lines.push(child);
          } else if (child instanceof _parchment2.default.Container) {
            lines = lines.concat(getLines(child, index, lengthLeft));
          }
          lengthLeft -= length;
        });
        return lines;
      };
      return getLines(this, index, length);
    }
  }, {
    key: 'optimize',
    value: function optimize() {
      var mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.batch === true) return;
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations, context);
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations, context);
      }
    }
  }, {
    key: 'path',
    value: function path(index) {
      return _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
    }
  }, {
    key: 'update',
    value: function update(mutations) {
      if (this.batch === true) return;
      var source = _emitter2.default.sources.USER;
      if (typeof mutations === 'string') {
        source = mutations;
      }
      if (!Array.isArray(mutations)) {
        mutations = this.observer.takeRecords();
      }
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
      }
      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations.concat([])); // pass copy
      if (mutations.length > 0) {
        this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
      }
    }
  }]);

  return Scroll;
}(_parchment2.default.Scroll);

Scroll.blotName = 'scroll';
Scroll.className = 'ql-editor';
Scroll.tagName = 'DIV';
Scroll.defaultChild = 'block';
Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];

exports.default = Scroll;

/***/ }),
/* 23 */
/***/ (function(module, exports, __nested_webpack_require_157111__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHORTKEY = exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = __nested_webpack_require_157111__(21);

var _clone2 = _interopRequireDefault(_clone);

var _deepEqual = __nested_webpack_require_157111__(11);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _extend = __nested_webpack_require_157111__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __nested_webpack_require_157111__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _op = __nested_webpack_require_157111__(20);

var _op2 = _interopRequireDefault(_op);

var _parchment = __nested_webpack_require_157111__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __nested_webpack_require_157111__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __nested_webpack_require_157111__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __nested_webpack_require_157111__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:keyboard');

var SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

var Keyboard = function (_Module) {
  _inherits(Keyboard, _Module);

  _createClass(Keyboard, null, [{
    key: 'match',
    value: function match(evt, binding) {
      binding = normalize(binding);
      if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (key) {
        return !!binding[key] !== evt[key] && binding[key] !== null;
      })) {
        return false;
      }
      return binding.key === (evt.which || evt.keyCode);
    }
  }]);

  function Keyboard(quill, options) {
    _classCallCheck(this, Keyboard);

    var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, quill, options));

    _this.bindings = {};
    Object.keys(_this.options.bindings).forEach(function (name) {
      if (name === 'list autofill' && quill.scroll.whitelist != null && !quill.scroll.whitelist['list']) {
        return;
      }
      if (_this.options.bindings[name]) {
        _this.addBinding(_this.options.bindings[name]);
      }
    });
    _this.addBinding({ key: Keyboard.keys.ENTER, shiftKey: null }, handleEnter);
    _this.addBinding({ key: Keyboard.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () {});
    if (/Firefox/i.test(navigator.userAgent)) {
      // Need to handle delete and backspace for Firefox in the general case #1171
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true }, handleBackspace);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true }, handleDelete);
    } else {
      _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, handleBackspace);
      _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, handleDelete);
    }
    _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: false }, handleDeleteRange);
    _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: false }, handleDeleteRange);
    _this.addBinding({ key: Keyboard.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, handleBackspace);
    _this.listen();
    return _this;
  }

  _createClass(Keyboard, [{
    key: 'addBinding',
    value: function addBinding(key) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var binding = normalize(key);
      if (binding == null || binding.key == null) {
        return debug.warn('Attempted to add invalid keyboard binding', binding);
      }
      if (typeof context === 'function') {
        context = { handler: context };
      }
      if (typeof handler === 'function') {
        handler = { handler: handler };
      }
      binding = (0, _extend2.default)(binding, context, handler);
      this.bindings[binding.key] = this.bindings[binding.key] || [];
      this.bindings[binding.key].push(binding);
    }
  }, {
    key: 'listen',
    value: function listen() {
      var _this2 = this;

      this.quill.root.addEventListener('keydown', function (evt) {
        if (evt.defaultPrevented) return;
        var which = evt.which || evt.keyCode;
        var bindings = (_this2.bindings[which] || []).filter(function (binding) {
          return Keyboard.match(evt, binding);
        });
        if (bindings.length === 0) return;
        var range = _this2.quill.getSelection();
        if (range == null || !_this2.quill.hasFocus()) return;

        var _quill$getLine = _this2.quill.getLine(range.index),
            _quill$getLine2 = _slicedToArray(_quill$getLine, 2),
            line = _quill$getLine2[0],
            offset = _quill$getLine2[1];

        var _quill$getLeaf = _this2.quill.getLeaf(range.index),
            _quill$getLeaf2 = _slicedToArray(_quill$getLeaf, 2),
            leafStart = _quill$getLeaf2[0],
            offsetStart = _quill$getLeaf2[1];

        var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.getLeaf(range.index + range.length),
            _ref2 = _slicedToArray(_ref, 2),
            leafEnd = _ref2[0],
            offsetEnd = _ref2[1];

        var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : '';
        var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
        var curContext = {
          collapsed: range.length === 0,
          empty: range.length === 0 && line.length() <= 1,
          format: _this2.quill.getFormat(range),
          offset: offset,
          prefix: prefixText,
          suffix: suffixText
        };
        var prevented = bindings.some(function (binding) {
          if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
          if (binding.empty != null && binding.empty !== curContext.empty) return false;
          if (binding.offset != null && binding.offset !== curContext.offset) return false;
          if (Array.isArray(binding.format)) {
            // any format is present
            if (binding.format.every(function (name) {
              return curContext.format[name] == null;
            })) {
              return false;
            }
          } else if (_typeof(binding.format) === 'object') {
            // all formats must match
            if (!Object.keys(binding.format).every(function (name) {
              if (binding.format[name] === true) return curContext.format[name] != null;
              if (binding.format[name] === false) return curContext.format[name] == null;
              return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
            })) {
              return false;
            }
          }
          if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
          if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
          return binding.handler.call(_this2, range, curContext) !== true;
        });
        if (prevented) {
          evt.preventDefault();
        }
      });
    }
  }]);

  return Keyboard;
}(_module2.default);

Keyboard.keys = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46
};

Keyboard.DEFAULTS = {
  bindings: {
    'bold': makeFormatHandler('bold'),
    'italic': makeFormatHandler('italic'),
    'underline': makeFormatHandler('underline'),
    'indent': {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: Keyboard.keys.TAB,
      format: ['blockquote', 'indent', 'list'],
      handler: function handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '+1', _quill2.default.sources.USER);
      }
    },
    'outdent': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      format: ['blockquote', 'indent', 'list'],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler: function handler(range, context) {
        if (context.collapsed && context.offset !== 0) return true;
        this.quill.format('indent', '-1', _quill2.default.sources.USER);
      }
    },
    'outdent backspace': {
      key: Keyboard.keys.BACKSPACE,
      collapsed: true,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ['indent', 'list'],
      offset: 0,
      handler: function handler(range, context) {
        if (context.format.indent != null) {
          this.quill.format('indent', '-1', _quill2.default.sources.USER);
        } else if (context.format.list != null) {
          this.quill.format('list', false, _quill2.default.sources.USER);
        }
      }
    },
    'indent code-block': makeCodeBlockHandler(true),
    'outdent code-block': makeCodeBlockHandler(false),
    'remove tab': {
      key: Keyboard.keys.TAB,
      shiftKey: true,
      collapsed: true,
      prefix: /\t$/,
      handler: function handler(range) {
        this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
      }
    },
    'tab': {
      key: Keyboard.keys.TAB,
      handler: function handler(range) {
        this.quill.history.cutoff();
        var delta = new _quillDelta2.default().retain(range.index).delete(range.length).insert('\t');
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
      }
    },
    'list empty enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['list'],
      empty: true,
      handler: function handler(range, context) {
        this.quill.format('list', false, _quill2.default.sources.USER);
        if (context.format.indent) {
          this.quill.format('indent', false, _quill2.default.sources.USER);
        }
      }
    },
    'checklist enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: { list: 'checked' },
      handler: function handler(range) {
        var _quill$getLine3 = this.quill.getLine(range.index),
            _quill$getLine4 = _slicedToArray(_quill$getLine3, 2),
            line = _quill$getLine4[0],
            offset = _quill$getLine4[1];

        var formats = (0, _extend2.default)({}, line.formats(), { list: 'checked' });
        var delta = new _quillDelta2.default().retain(range.index).insert('\n', formats).retain(line.length() - offset - 1).retain(1, { list: 'unchecked' });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'header enter': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['header'],
      suffix: /^$/,
      handler: function handler(range, context) {
        var _quill$getLine5 = this.quill.getLine(range.index),
            _quill$getLine6 = _slicedToArray(_quill$getLine5, 2),
            line = _quill$getLine6[0],
            offset = _quill$getLine6[1];

        var delta = new _quillDelta2.default().retain(range.index).insert('\n', context.format).retain(line.length() - offset - 1).retain(1, { header: null });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
        this.quill.scrollIntoView();
      }
    },
    'list autofill': {
      key: ' ',
      collapsed: true,
      format: { list: false },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler: function handler(range, context) {
        var length = context.prefix.length;

        var _quill$getLine7 = this.quill.getLine(range.index),
            _quill$getLine8 = _slicedToArray(_quill$getLine7, 2),
            line = _quill$getLine8[0],
            offset = _quill$getLine8[1];

        if (offset > length) return true;
        var value = void 0;
        switch (context.prefix.trim()) {
          case '[]':case '[ ]':
            value = 'unchecked';
            break;
          case '[x]':
            value = 'checked';
            break;
          case '-':case '*':
            value = 'bullet';
            break;
          default:
            value = 'ordered';
        }
        this.quill.insertText(range.index, ' ', _quill2.default.sources.USER);
        this.quill.history.cutoff();
        var delta = new _quillDelta2.default().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, { list: value });
        this.quill.updateContents(delta, _quill2.default.sources.USER);
        this.quill.history.cutoff();
        this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
      }
    },
    'code exit': {
      key: Keyboard.keys.ENTER,
      collapsed: true,
      format: ['code-block'],
      prefix: /\n\n$/,
      suffix: /^\s+$/,
      handler: function handler(range) {
        var _quill$getLine9 = this.quill.getLine(range.index),
            _quill$getLine10 = _slicedToArray(_quill$getLine9, 2),
            line = _quill$getLine10[0],
            offset = _quill$getLine10[1];

        var delta = new _quillDelta2.default().retain(range.index + line.length() - offset - 2).retain(1, { 'code-block': null }).delete(1);
        this.quill.updateContents(delta, _quill2.default.sources.USER);
      }
    },
    'embed left': makeEmbedArrowHandler(Keyboard.keys.LEFT, false),
    'embed left shift': makeEmbedArrowHandler(Keyboard.keys.LEFT, true),
    'embed right': makeEmbedArrowHandler(Keyboard.keys.RIGHT, false),
    'embed right shift': makeEmbedArrowHandler(Keyboard.keys.RIGHT, true)
  }
};

function makeEmbedArrowHandler(key, shiftKey) {
  var _ref3;

  var where = key === Keyboard.keys.LEFT ? 'prefix' : 'suffix';
  return _ref3 = {
    key: key,
    shiftKey: shiftKey,
    altKey: null
  }, _defineProperty(_ref3, where, /^$/), _defineProperty(_ref3, 'handler', function handler(range) {
    var index = range.index;
    if (key === Keyboard.keys.RIGHT) {
      index += range.length + 1;
    }

    var _quill$getLeaf3 = this.quill.getLeaf(index),
        _quill$getLeaf4 = _slicedToArray(_quill$getLeaf3, 1),
        leaf = _quill$getLeaf4[0];

    if (!(leaf instanceof _parchment2.default.Embed)) return true;
    if (key === Keyboard.keys.LEFT) {
      if (shiftKey) {
        this.quill.setSelection(range.index - 1, range.length + 1, _quill2.default.sources.USER);
      } else {
        this.quill.setSelection(range.index - 1, _quill2.default.sources.USER);
      }
    } else {
      if (shiftKey) {
        this.quill.setSelection(range.index, range.length + 1, _quill2.default.sources.USER);
      } else {
        this.quill.setSelection(range.index + range.length + 1, _quill2.default.sources.USER);
      }
    }
    return false;
  }), _ref3;
}

function handleBackspace(range, context) {
  if (range.index === 0 || this.quill.getLength() <= 1) return;

  var _quill$getLine11 = this.quill.getLine(range.index),
      _quill$getLine12 = _slicedToArray(_quill$getLine11, 1),
      line = _quill$getLine12[0];

  var formats = {};
  if (context.offset === 0) {
    var _quill$getLine13 = this.quill.getLine(range.index - 1),
        _quill$getLine14 = _slicedToArray(_quill$getLine13, 1),
        prev = _quill$getLine14[0];

    if (prev != null && prev.length() > 1) {
      var curFormats = line.formats();
      var prevFormats = this.quill.getFormat(range.index - 1, 1);
      formats = _op2.default.attributes.diff(curFormats, prevFormats) || {};
    }
  }
  // Check for astral symbols
  var length = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(context.prefix) ? 2 : 1;
  this.quill.deleteText(range.index - length, length, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index - length, length, formats, _quill2.default.sources.USER);
  }
  this.quill.focus();
}

function handleDelete(range, context) {
  // Check for astral symbols
  var length = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(context.suffix) ? 2 : 1;
  if (range.index >= this.quill.getLength() - length) return;
  var formats = {},
      nextLength = 0;

  var _quill$getLine15 = this.quill.getLine(range.index),
      _quill$getLine16 = _slicedToArray(_quill$getLine15, 1),
      line = _quill$getLine16[0];

  if (context.offset >= line.length() - 1) {
    var _quill$getLine17 = this.quill.getLine(range.index + 1),
        _quill$getLine18 = _slicedToArray(_quill$getLine17, 1),
        next = _quill$getLine18[0];

    if (next) {
      var curFormats = line.formats();
      var nextFormats = this.quill.getFormat(range.index, 1);
      formats = _op2.default.attributes.diff(curFormats, nextFormats) || {};
      nextLength = next.length();
    }
  }
  this.quill.deleteText(range.index, length, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index + nextLength - 1, length, formats, _quill2.default.sources.USER);
  }
}

function handleDeleteRange(range) {
  var lines = this.quill.getLines(range);
  var formats = {};
  if (lines.length > 1) {
    var firstFormats = lines[0].formats();
    var lastFormats = lines[lines.length - 1].formats();
    formats = _op2.default.attributes.diff(lastFormats, firstFormats) || {};
  }
  this.quill.deleteText(range, _quill2.default.sources.USER);
  if (Object.keys(formats).length > 0) {
    this.quill.formatLine(range.index, 1, formats, _quill2.default.sources.USER);
  }
  this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
  this.quill.focus();
}

function handleEnter(range, context) {
  var _this3 = this;

  if (range.length > 0) {
    this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
  }
  var lineFormats = Object.keys(context.format).reduce(function (lineFormats, format) {
    if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
      lineFormats[format] = context.format[format];
    }
    return lineFormats;
  }, {});
  this.quill.insertText(range.index, '\n', lineFormats, _quill2.default.sources.USER);
  // Earlier scroll.deleteAt might have messed up our selection,
  // so insertText's built in selection preservation is not reliable
  this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
  this.quill.focus();
  Object.keys(context.format).forEach(function (name) {
    if (lineFormats[name] != null) return;
    if (Array.isArray(context.format[name])) return;
    if (name === 'link') return;
    _this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
  });
}

function makeCodeBlockHandler(indent) {
  return {
    key: Keyboard.keys.TAB,
    shiftKey: !indent,
    format: { 'code-block': true },
    handler: function handler(range) {
      var CodeBlock = _parchment2.default.query('code-block');
      var index = range.index,
          length = range.length;

      var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index),
          _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
          block = _quill$scroll$descend2[0],
          offset = _quill$scroll$descend2[1];

      if (block == null) return;
      var scrollIndex = this.quill.getIndex(block);
      var start = block.newlineIndex(offset, true) + 1;
      var end = block.newlineIndex(scrollIndex + offset + length);
      var lines = block.domNode.textContent.slice(start, end).split('\n');
      offset = 0;
      lines.forEach(function (line, i) {
        if (indent) {
          block.insertAt(start + offset, CodeBlock.TAB);
          offset += CodeBlock.TAB.length;
          if (i === 0) {
            index += CodeBlock.TAB.length;
          } else {
            length += CodeBlock.TAB.length;
          }
        } else if (line.startsWith(CodeBlock.TAB)) {
          block.deleteAt(start + offset, CodeBlock.TAB.length);
          offset -= CodeBlock.TAB.length;
          if (i === 0) {
            index -= CodeBlock.TAB.length;
          } else {
            length -= CodeBlock.TAB.length;
          }
        }
        offset += line.length + 1;
      });
      this.quill.update(_quill2.default.sources.USER);
      this.quill.setSelection(index, length, _quill2.default.sources.SILENT);
    }
  };
}

function makeFormatHandler(format) {
  return {
    key: format[0].toUpperCase(),
    shortKey: true,
    handler: function handler(range, context) {
      this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
    }
  };
}

function normalize(binding) {
  if (typeof binding === 'string' || typeof binding === 'number') {
    return normalize({ key: binding });
  }
  if ((typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) === 'object') {
    binding = (0, _clone2.default)(binding, false);
  }
  if (typeof binding.key === 'string') {
    if (Keyboard.keys[binding.key.toUpperCase()] != null) {
      binding.key = Keyboard.keys[binding.key.toUpperCase()];
    } else if (binding.key.length === 1) {
      binding.key = binding.key.toUpperCase().charCodeAt(0);
    } else {
      return null;
    }
  }
  if (binding.shortKey) {
    binding[SHORTKEY] = binding.shortKey;
    delete binding.shortKey;
  }
  return binding;
}

exports.default = Keyboard;
exports.SHORTKEY = SHORTKEY;

/***/ }),
/* 24 */
/***/ (function(module, exports, __nested_webpack_require_181454__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __nested_webpack_require_181454__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _text = __nested_webpack_require_181454__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cursor = function (_Parchment$Embed) {
  _inherits(Cursor, _Parchment$Embed);

  _createClass(Cursor, null, [{
    key: 'value',
    value: function value() {
      return undefined;
    }
  }]);

  function Cursor(domNode, selection) {
    _classCallCheck(this, Cursor);

    var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, domNode));

    _this.selection = selection;
    _this.textNode = document.createTextNode(Cursor.CONTENTS);
    _this.domNode.appendChild(_this.textNode);
    _this._length = 0;
    return _this;
  }

  _createClass(Cursor, [{
    key: 'detach',
    value: function detach() {
      // super.detach() will also clear domNode.__blot
      if (this.parent != null) this.parent.removeChild(this);
    }
  }, {
    key: 'format',
    value: function format(name, value) {
      if (this._length !== 0) {
        return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
      }
      var target = this,
          index = 0;
      while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
        index += target.offset(target.parent);
        target = target.parent;
      }
      if (target != null) {
        this._length = Cursor.CONTENTS.length;
        target.optimize();
        target.formatAt(index, Cursor.CONTENTS.length, name, value);
        this._length = 0;
      }
    }
  }, {
    key: 'index',
    value: function index(node, offset) {
      if (node === this.textNode) return 0;
      return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'length',
    value: function length() {
      return this._length;
    }
  }, {
    key: 'position',
    value: function position() {
      return [this.textNode, this.textNode.data.length];
    }
  }, {
    key: 'remove',
    value: function remove() {
      _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);
      this.parent = null;
    }
  }, {
    key: 'restore',
    value: function restore() {
      if (this.selection.composing || this.parent == null) return;
      var textNode = this.textNode;
      var range = this.selection.getNativeRange();
      var restoreText = void 0,
          start = void 0,
          end = void 0;
      if (range != null && range.start.node === textNode && range.end.node === textNode) {
        var _ref = [textNode, range.start.offset, range.end.offset];
        restoreText = _ref[0];
        start = _ref[1];
        end = _ref[2];
      }
      // Link format will insert text outside of anchor tag
      while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
        this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
      }
      if (this.textNode.data !== Cursor.CONTENTS) {
        var text = this.textNode.data.split(Cursor.CONTENTS).join('');
        if (this.next instanceof _text2.default) {
          restoreText = this.next.domNode;
          this.next.insertAt(0, text);
          this.textNode.data = Cursor.CONTENTS;
        } else {
          this.textNode.data = text;
          this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
          this.textNode = document.createTextNode(Cursor.CONTENTS);
          this.domNode.appendChild(this.textNode);
        }
      }
      this.remove();
      if (start != null) {
        var _map = [start, end].map(function (offset) {
          return Math.max(0, Math.min(restoreText.data.length, offset - 1));
        });

        var _map2 = _slicedToArray(_map, 2);

        start = _map2[0];
        end = _map2[1];

        return {
          startNode: restoreText,
          startOffset: start,
          endNode: restoreText,
          endOffset: end
        };
      }
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      if (mutations.some(function (mutation) {
        return mutation.type === 'characterData' && mutation.target === _this2.textNode;
      })) {
        var range = this.restore();
        if (range) context.range = range;
      }
    }
  }, {
    key: 'value',
    value: function value() {
      return '';
    }
  }]);

  return Cursor;
}(_parchment2.default.Embed);

Cursor.blotName = 'cursor';
Cursor.className = 'ql-cursor';
Cursor.tagName = 'span';
Cursor.CONTENTS = '\uFEFF'; // Zero width no break space


exports.default = Cursor;

/***/ }),
/* 25 */
/***/ (function(module, exports, __nested_webpack_require_189100__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __nested_webpack_require_189100__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __nested_webpack_require_189100__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_Parchment$Container) {
  _inherits(Container, _Parchment$Container);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  return Container;
}(_parchment2.default.Container);

Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];

exports.default = Container;

/***/ }),
/* 26 */
/***/ (function(module, exports, __nested_webpack_require_190886__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __nested_webpack_require_190886__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorAttributor = function (_Parchment$Attributor) {
  _inherits(ColorAttributor, _Parchment$Attributor);

  function ColorAttributor() {
    _classCallCheck(this, ColorAttributor);

    return _possibleConstructorReturn(this, (ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(this, arguments));
  }

  _createClass(ColorAttributor, [{
    key: 'value',
    value: function value(domNode) {
      var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);
      if (!value.startsWith('rgb(')) return value;
      value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
      return '#' + value.split(',').map(function (component) {
        return ('00' + parseInt(component).toString(16)).slice(-2);
      }).join('');
    }
  }]);

  return ColorAttributor;
}(_parchment2.default.Attributor.Style);

var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
  scope: _parchment2.default.Scope.INLINE
});
var ColorStyle = new ColorAttributor('color', 'color', {
  scope: _parchment2.default.Scope.INLINE
});

exports.ColorAttributor = ColorAttributor;
exports.ColorClass = ColorClass;
exports.ColorStyle = ColorStyle;

/***/ }),
/* 27 */
/***/ (function(module, exports, __nested_webpack_require_194529__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitize = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __nested_webpack_require_194529__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_Inline) {
  _inherits(Link, _Inline);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'format',
    value: function format(name, value) {
      if (name !== this.statics.blotName || !value) return _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype), 'format', this).call(this, name, value);
      value = this.constructor.sanitize(value);
      this.domNode.setAttribute('href', value);
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Link.__proto__ || Object.getPrototypeOf(Link), 'create', this).call(this, value);
      value = this.sanitize(value);
      node.setAttribute('href', value);
      node.setAttribute('rel', 'noopener noreferrer');
      node.setAttribute('target', '_blank');
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return domNode.getAttribute('href');
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return _sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
    }
  }]);

  return Link;
}(_inline2.default);

Link.blotName = 'link';
Link.tagName = 'A';
Link.SANITIZED_URL = 'about:blank';
Link.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];

function _sanitize(url, protocols) {
  var anchor = document.createElement('a');
  anchor.href = url;
  var protocol = anchor.href.slice(0, anchor.href.indexOf(':'));
  return protocols.indexOf(protocol) > -1;
}

exports.default = Link;
exports.sanitize = _sanitize;

/***/ }),
/* 28 */
/***/ (function(module, exports, __nested_webpack_require_198559__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyboard = __nested_webpack_require_198559__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _dropdown = __nested_webpack_require_198559__(107);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var optionsCounter = 0;

function toggleAriaAttribute(element, attribute) {
  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));
}

var Picker = function () {
  function Picker(select) {
    var _this = this;

    _classCallCheck(this, Picker);

    this.select = select;
    this.container = document.createElement('span');
    this.buildPicker();
    this.select.style.display = 'none';
    this.select.parentNode.insertBefore(this.container, this.select);

    this.label.addEventListener('mousedown', function () {
      _this.togglePicker();
    });
    this.label.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        // Allows the "Enter" key to open the picker
        case _keyboard2.default.keys.ENTER:
          _this.togglePicker();
          break;

        // Allows the "Escape" key to close the picker
        case _keyboard2.default.keys.ESCAPE:
          _this.escape();
          event.preventDefault();
          break;
        default:
      }
    });
    this.select.addEventListener('change', this.update.bind(this));
  }

  _createClass(Picker, [{
    key: 'togglePicker',
    value: function togglePicker() {
      this.container.classList.toggle('ql-expanded');
      // Toggle aria-expanded and aria-hidden to make the picker accessible
      toggleAriaAttribute(this.label, 'aria-expanded');
      toggleAriaAttribute(this.options, 'aria-hidden');
    }
  }, {
    key: 'buildItem',
    value: function buildItem(option) {
      var _this2 = this;

      var item = document.createElement('span');
      item.tabIndex = '0';
      item.setAttribute('role', 'button');

      item.classList.add('ql-picker-item');
      if (option.hasAttribute('value')) {
        item.setAttribute('data-value', option.getAttribute('value'));
      }
      if (option.textContent) {
        item.setAttribute('data-label', option.textContent);
      }
      item.addEventListener('click', function () {
        _this2.selectItem(item, true);
      });
      item.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
          // Allows the "Enter" key to select an item
          case _keyboard2.default.keys.ENTER:
            _this2.selectItem(item, true);
            event.preventDefault();
            break;

          // Allows the "Escape" key to close the picker
          case _keyboard2.default.keys.ESCAPE:
            _this2.escape();
            event.preventDefault();
            break;
          default:
        }
      });

      return item;
    }
  }, {
    key: 'buildLabel',
    value: function buildLabel() {
      var label = document.createElement('span');
      label.classList.add('ql-picker-label');
      label.innerHTML = _dropdown2.default;
      label.tabIndex = '0';
      label.setAttribute('role', 'button');
      label.setAttribute('aria-expanded', 'false');
      this.container.appendChild(label);
      return label;
    }
  }, {
    key: 'buildOptions',
    value: function buildOptions() {
      var _this3 = this;

      var options = document.createElement('span');
      options.classList.add('ql-picker-options');

      // Don't want screen readers to read this until options are visible
      options.setAttribute('aria-hidden', 'true');
      options.tabIndex = '-1';

      // Need a unique id for aria-controls
      options.id = 'ql-picker-options-' + optionsCounter;
      optionsCounter += 1;
      this.label.setAttribute('aria-controls', options.id);

      this.options = options;

      [].slice.call(this.select.options).forEach(function (option) {
        var item = _this3.buildItem(option);
        options.appendChild(item);
        if (option.selected === true) {
          _this3.selectItem(item);
        }
      });
      this.container.appendChild(options);
    }
  }, {
    key: 'buildPicker',
    value: function buildPicker() {
      var _this4 = this;

      [].slice.call(this.select.attributes).forEach(function (item) {
        _this4.container.setAttribute(item.name, item.value);
      });
      this.container.classList.add('ql-picker');
      this.label = this.buildLabel();
      this.buildOptions();
    }
  }, {
    key: 'escape',
    value: function escape() {
      var _this5 = this;

      // Close menu and return focus to trigger label
      this.close();
      // Need setTimeout for accessibility to ensure that the browser executes
      // focus on the next process thread and after any DOM content changes
      setTimeout(function () {
        return _this5.label.focus();
      }, 1);
    }
  }, {
    key: 'close',
    value: function close() {
      this.container.classList.remove('ql-expanded');
      this.label.setAttribute('aria-expanded', 'false');
      this.options.setAttribute('aria-hidden', 'true');
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item) {
      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var selected = this.container.querySelector('.ql-selected');
      if (item === selected) return;
      if (selected != null) {
        selected.classList.remove('ql-selected');
      }
      if (item == null) return;
      item.classList.add('ql-selected');
      this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);
      if (item.hasAttribute('data-value')) {
        this.label.setAttribute('data-value', item.getAttribute('data-value'));
      } else {
        this.label.removeAttribute('data-value');
      }
      if (item.hasAttribute('data-label')) {
        this.label.setAttribute('data-label', item.getAttribute('data-label'));
      } else {
        this.label.removeAttribute('data-label');
      }
      if (trigger) {
        if (typeof Event === 'function') {
          this.select.dispatchEvent(new Event('change'));
        } else if ((typeof Event === 'undefined' ? 'undefined' : _typeof(Event)) === 'object') {
          // IE11
          var event = document.createEvent('Event');
          event.initEvent('change', true, true);
          this.select.dispatchEvent(event);
        }
        this.close();
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var option = void 0;
      if (this.select.selectedIndex > -1) {
        var item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
        option = this.select.options[this.select.selectedIndex];
        this.selectItem(item);
      } else {
        this.selectItem(null);
      }
      var isActive = option != null && option !== this.select.querySelector('option[selected]');
      this.label.classList.toggle('ql-active', isActive);
    }
  }]);

  return Picker;
}();

exports.default = Picker;

/***/ }),
/* 29 */
/***/ (function(module, exports, __nested_webpack_require_206753__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parchment = __nested_webpack_require_206753__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __nested_webpack_require_206753__(5);

var _quill2 = _interopRequireDefault(_quill);

var _block = __nested_webpack_require_206753__(4);

var _block2 = _interopRequireDefault(_block);

var _break = __nested_webpack_require_206753__(16);

var _break2 = _interopRequireDefault(_break);

var _container = __nested_webpack_require_206753__(25);

var _container2 = _interopRequireDefault(_container);

var _cursor = __nested_webpack_require_206753__(24);

var _cursor2 = _interopRequireDefault(_cursor);

var _embed = __nested_webpack_require_206753__(35);

var _embed2 = _interopRequireDefault(_embed);

var _inline = __nested_webpack_require_206753__(6);

var _inline2 = _interopRequireDefault(_inline);

var _scroll = __nested_webpack_require_206753__(22);

var _scroll2 = _interopRequireDefault(_scroll);

var _text = __nested_webpack_require_206753__(7);

var _text2 = _interopRequireDefault(_text);

var _clipboard = __nested_webpack_require_206753__(55);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _history = __nested_webpack_require_206753__(42);

var _history2 = _interopRequireDefault(_history);

var _keyboard = __nested_webpack_require_206753__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_quill2.default.register({
  'blots/block': _block2.default,
  'blots/block/embed': _block.BlockEmbed,
  'blots/break': _break2.default,
  'blots/container': _container2.default,
  'blots/cursor': _cursor2.default,
  'blots/embed': _embed2.default,
  'blots/inline': _inline2.default,
  'blots/scroll': _scroll2.default,
  'blots/text': _text2.default,

  'modules/clipboard': _clipboard2.default,
  'modules/history': _history2.default,
  'modules/keyboard': _keyboard2.default
});

_parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);

exports.default = _quill2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __nested_webpack_require_208833__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry = __nested_webpack_require_208833__(1);
var ShadowBlot = /** @class */ (function () {
    function ShadowBlot(domNode) {
        this.domNode = domNode;
        // @ts-ignore
        this.domNode[Registry.DATA_KEY] = { blot: this };
    }
    Object.defineProperty(ShadowBlot.prototype, "statics", {
        // Hack for accessing inherited static methods
        get: function () {
            return this.constructor;
        },
        enumerable: true,
        configurable: true
    });
    ShadowBlot.create = function (value) {
        if (this.tagName == null) {
            throw new Registry.ParchmentError('Blot definition missing tagName');
        }
        var node;
        if (Array.isArray(this.tagName)) {
            if (typeof value === 'string') {
                value = value.toUpperCase();
                if (parseInt(value).toString() === value) {
                    value = parseInt(value);
                }
            }
            if (typeof value === 'number') {
                node = document.createElement(this.tagName[value - 1]);
            }
            else if (this.tagName.indexOf(value) > -1) {
                node = document.createElement(value);
            }
            else {
                node = document.createElement(this.tagName[0]);
            }
        }
        else {
            node = document.createElement(this.tagName);
        }
        if (this.className) {
            node.classList.add(this.className);
        }
        return node;
    };
    ShadowBlot.prototype.attach = function () {
        if (this.parent != null) {
            this.scroll = this.parent.scroll;
        }
    };
    ShadowBlot.prototype.clone = function () {
        var domNode = this.domNode.cloneNode(false);
        return Registry.create(domNode);
    };
    ShadowBlot.prototype.detach = function () {
        if (this.parent != null)
            this.parent.removeChild(this);
        // @ts-ignore
        delete this.domNode[Registry.DATA_KEY];
    };
    ShadowBlot.prototype.deleteAt = function (index, length) {
        var blot = this.isolate(index, length);
        blot.remove();
    };
    ShadowBlot.prototype.formatAt = function (index, length, name, value) {
        var blot = this.isolate(index, length);
        if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
            blot.wrap(name, value);
        }
        else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
            var parent = Registry.create(this.statics.scope);
            blot.wrap(parent);
            parent.format(name, value);
        }
    };
    ShadowBlot.prototype.insertAt = function (index, value, def) {
        var blot = def == null ? Registry.create('text', value) : Registry.create(value, def);
        var ref = this.split(index);
        this.parent.insertBefore(blot, ref);
    };
    ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
        if (refBlot === void 0) { refBlot = null; }
        if (this.parent != null) {
            this.parent.children.remove(this);
        }
        var refDomNode = null;
        parentBlot.children.insertBefore(this, refBlot);
        if (refBlot != null) {
            refDomNode = refBlot.domNode;
        }
        if (this.domNode.parentNode != parentBlot.domNode ||
            this.domNode.nextSibling != refDomNode) {
            parentBlot.domNode.insertBefore(this.domNode, refDomNode);
        }
        this.parent = parentBlot;
        this.attach();
    };
    ShadowBlot.prototype.isolate = function (index, length) {
        var target = this.split(index);
        target.split(length);
        return target;
    };
    ShadowBlot.prototype.length = function () {
        return 1;
    };
    ShadowBlot.prototype.offset = function (root) {
        if (root === void 0) { root = this.parent; }
        if (this.parent == null || this == root)
            return 0;
        return this.parent.children.offset(this) + this.parent.offset(root);
    };
    ShadowBlot.prototype.optimize = function (context) {
        // TODO clean up once we use WeakMap
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY] != null) {
            // @ts-ignore
            delete this.domNode[Registry.DATA_KEY].mutations;
        }
    };
    ShadowBlot.prototype.remove = function () {
        if (this.domNode.parentNode != null) {
            this.domNode.parentNode.removeChild(this.domNode);
        }
        this.detach();
    };
    ShadowBlot.prototype.replace = function (target) {
        if (target.parent == null)
            return;
        target.parent.insertBefore(this, target.next);
        target.remove();
    };
    ShadowBlot.prototype.replaceWith = function (name, value) {
        var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
        replacement.replace(this);
        return replacement;
    };
    ShadowBlot.prototype.split = function (index, force) {
        return index === 0 ? this : this.next;
    };
    ShadowBlot.prototype.update = function (mutations, context) {
        // Nothing to do by default
    };
    ShadowBlot.prototype.wrap = function (name, value) {
        var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
        if (this.parent != null) {
            this.parent.insertBefore(wrapper, this.next);
        }
        wrapper.appendChild(this);
        return wrapper;
    };
    ShadowBlot.blotName = 'abstract';
    return ShadowBlot;
}());
exports.default = ShadowBlot;


/***/ }),
/* 31 */
/***/ (function(module, exports, __nested_webpack_require_214530__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __nested_webpack_require_214530__(12);
var class_1 = __nested_webpack_require_214530__(32);
var style_1 = __nested_webpack_require_214530__(33);
var Registry = __nested_webpack_require_214530__(1);
var AttributorStore = /** @class */ (function () {
    function AttributorStore(domNode) {
        this.attributes = {};
        this.domNode = domNode;
        this.build();
    }
    AttributorStore.prototype.attribute = function (attribute, value) {
        // verb
        if (value) {
            if (attribute.add(this.domNode, value)) {
                if (attribute.value(this.domNode) != null) {
                    this.attributes[attribute.attrName] = attribute;
                }
                else {
                    delete this.attributes[attribute.attrName];
                }
            }
        }
        else {
            attribute.remove(this.domNode);
            delete this.attributes[attribute.attrName];
        }
    };
    AttributorStore.prototype.build = function () {
        var _this = this;
        this.attributes = {};
        var attributes = attributor_1.default.keys(this.domNode);
        var classes = class_1.default.keys(this.domNode);
        var styles = style_1.default.keys(this.domNode);
        attributes
            .concat(classes)
            .concat(styles)
            .forEach(function (name) {
            var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
            if (attr instanceof attributor_1.default) {
                _this.attributes[attr.attrName] = attr;
            }
        });
    };
    AttributorStore.prototype.copy = function (target) {
        var _this = this;
        Object.keys(this.attributes).forEach(function (key) {
            var value = _this.attributes[key].value(_this.domNode);
            target.format(key, value);
        });
    };
    AttributorStore.prototype.move = function (target) {
        var _this = this;
        this.copy(target);
        Object.keys(this.attributes).forEach(function (key) {
            _this.attributes[key].remove(_this.domNode);
        });
        this.attributes = {};
    };
    AttributorStore.prototype.values = function () {
        var _this = this;
        return Object.keys(this.attributes).reduce(function (attributes, name) {
            attributes[name] = _this.attributes[name].value(_this.domNode);
            return attributes;
        }, {});
    };
    return AttributorStore;
}());
exports.default = AttributorStore;


/***/ }),
/* 32 */
/***/ (function(module, exports, __nested_webpack_require_217128__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __nested_webpack_require_217128__(12);
function match(node, prefix) {
    var className = node.getAttribute('class') || '';
    return className.split(/\s+/).filter(function (name) {
        return name.indexOf(prefix + "-") === 0;
    });
}
var ClassAttributor = /** @class */ (function (_super) {
    __extends(ClassAttributor, _super);
    function ClassAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassAttributor.keys = function (node) {
        return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
            return name
                .split('-')
                .slice(0, -1)
                .join('-');
        });
    };
    ClassAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        this.remove(node);
        node.classList.add(this.keyName + "-" + value);
        return true;
    };
    ClassAttributor.prototype.remove = function (node) {
        var matches = match(node, this.keyName);
        matches.forEach(function (name) {
            node.classList.remove(name);
        });
        if (node.classList.length === 0) {
            node.removeAttribute('class');
        }
    };
    ClassAttributor.prototype.value = function (node) {
        var result = match(node, this.keyName)[0] || '';
        var value = result.slice(this.keyName.length + 1); // +1 for hyphen
        return this.canAdd(node, value) ? value : '';
    };
    return ClassAttributor;
}(attributor_1.default));
exports.default = ClassAttributor;


/***/ }),
/* 33 */
/***/ (function(module, exports, __nested_webpack_require_219372__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var attributor_1 = __nested_webpack_require_219372__(12);
function camelize(name) {
    var parts = name.split('-');
    var rest = parts
        .slice(1)
        .map(function (part) {
        return part[0].toUpperCase() + part.slice(1);
    })
        .join('');
    return parts[0] + rest;
}
var StyleAttributor = /** @class */ (function (_super) {
    __extends(StyleAttributor, _super);
    function StyleAttributor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyleAttributor.keys = function (node) {
        return (node.getAttribute('style') || '').split(';').map(function (value) {
            var arr = value.split(':');
            return arr[0].trim();
        });
    };
    StyleAttributor.prototype.add = function (node, value) {
        if (!this.canAdd(node, value))
            return false;
        // @ts-ignore
        node.style[camelize(this.keyName)] = value;
        return true;
    };
    StyleAttributor.prototype.remove = function (node) {
        // @ts-ignore
        node.style[camelize(this.keyName)] = '';
        if (!node.getAttribute('style')) {
            node.removeAttribute('style');
        }
    };
    StyleAttributor.prototype.value = function (node) {
        // @ts-ignore
        var value = node.style[camelize(this.keyName)];
        return this.canAdd(node, value) ? value : '';
    };
    return StyleAttributor;
}(attributor_1.default));
exports.default = StyleAttributor;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Theme = function () {
  function Theme(quill, options) {
    _classCallCheck(this, Theme);

    this.quill = quill;
    this.options = options;
    this.modules = {};
  }

  _createClass(Theme, [{
    key: 'init',
    value: function init() {
      var _this = this;

      Object.keys(this.options.modules).forEach(function (name) {
        if (_this.modules[name] == null) {
          _this.addModule(name);
        }
      });
    }
  }, {
    key: 'addModule',
    value: function addModule(name) {
      var moduleClass = this.quill.constructor.import('modules/' + name);
      this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
      return this.modules[name];
    }
  }]);

  return Theme;
}();

Theme.DEFAULTS = {
  modules: {}
};
Theme.themes = {
  'default': Theme
};

exports.default = Theme;

/***/ }),
/* 35 */
/***/ (function(module, exports, __nested_webpack_require_223199__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __nested_webpack_require_223199__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _text = __nested_webpack_require_223199__(7);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GUARD_TEXT = '\uFEFF';

var Embed = function (_Parchment$Embed) {
  _inherits(Embed, _Parchment$Embed);

  function Embed(node) {
    _classCallCheck(this, Embed);

    var _this = _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).call(this, node));

    _this.contentNode = document.createElement('span');
    _this.contentNode.setAttribute('contenteditable', false);
    [].slice.call(_this.domNode.childNodes).forEach(function (childNode) {
      _this.contentNode.appendChild(childNode);
    });
    _this.leftGuard = document.createTextNode(GUARD_TEXT);
    _this.rightGuard = document.createTextNode(GUARD_TEXT);
    _this.domNode.appendChild(_this.leftGuard);
    _this.domNode.appendChild(_this.contentNode);
    _this.domNode.appendChild(_this.rightGuard);
    return _this;
  }

  _createClass(Embed, [{
    key: 'index',
    value: function index(node, offset) {
      if (node === this.leftGuard) return 0;
      if (node === this.rightGuard) return 1;
      return _get(Embed.prototype.__proto__ || Object.getPrototypeOf(Embed.prototype), 'index', this).call(this, node, offset);
    }
  }, {
    key: 'restore',
    value: function restore(node) {
      var range = void 0,
          textNode = void 0;
      var text = node.data.split(GUARD_TEXT).join('');
      if (node === this.leftGuard) {
        if (this.prev instanceof _text2.default) {
          var prevLength = this.prev.length();
          this.prev.insertAt(prevLength, text);
          range = {
            startNode: this.prev.domNode,
            startOffset: prevLength + text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(_parchment2.default.create(textNode), this);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      } else if (node === this.rightGuard) {
        if (this.next instanceof _text2.default) {
          this.next.insertAt(0, text);
          range = {
            startNode: this.next.domNode,
            startOffset: text.length
          };
        } else {
          textNode = document.createTextNode(text);
          this.parent.insertBefore(_parchment2.default.create(textNode), this.next);
          range = {
            startNode: textNode,
            startOffset: text.length
          };
        }
      }
      node.data = GUARD_TEXT;
      return range;
    }
  }, {
    key: 'update',
    value: function update(mutations, context) {
      var _this2 = this;

      mutations.forEach(function (mutation) {
        if (mutation.type === 'characterData' && (mutation.target === _this2.leftGuard || mutation.target === _this2.rightGuard)) {
          var range = _this2.restore(mutation.target);
          if (range) context.range = range;
        }
      });
    }
  }]);

  return Embed;
}(_parchment2.default.Embed);

exports.default = Embed;

/***/ }),
/* 36 */
/***/ (function(module, exports, __nested_webpack_require_228527__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlignStyle = exports.AlignClass = exports.AlignAttribute = undefined;

var _parchment = __nested_webpack_require_228527__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: ['right', 'center', 'justify']
};

var AlignAttribute = new _parchment2.default.Attributor.Attribute('align', 'align', config);
var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);

exports.AlignAttribute = AlignAttribute;
exports.AlignClass = AlignClass;
exports.AlignStyle = AlignStyle;

/***/ }),
/* 37 */
/***/ (function(module, exports, __nested_webpack_require_229442__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundStyle = exports.BackgroundClass = undefined;

var _parchment = __nested_webpack_require_229442__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _color = __nested_webpack_require_229442__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
  scope: _parchment2.default.Scope.INLINE
});
var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
  scope: _parchment2.default.Scope.INLINE
});

exports.BackgroundClass = BackgroundClass;
exports.BackgroundStyle = BackgroundStyle;

/***/ }),
/* 38 */
/***/ (function(module, exports, __nested_webpack_require_230249__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = undefined;

var _parchment = __nested_webpack_require_230249__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: ['rtl']
};

var DirectionAttribute = new _parchment2.default.Attributor.Attribute('direction', 'dir', config);
var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);

exports.DirectionAttribute = DirectionAttribute;
exports.DirectionClass = DirectionClass;
exports.DirectionStyle = DirectionStyle;

/***/ }),
/* 39 */
/***/ (function(module, exports, __nested_webpack_require_231202__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontClass = exports.FontStyle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __nested_webpack_require_231202__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['serif', 'monospace']
};

var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);

var FontStyleAttributor = function (_Parchment$Attributor) {
  _inherits(FontStyleAttributor, _Parchment$Attributor);

  function FontStyleAttributor() {
    _classCallCheck(this, FontStyleAttributor);

    return _possibleConstructorReturn(this, (FontStyleAttributor.__proto__ || Object.getPrototypeOf(FontStyleAttributor)).apply(this, arguments));
  }

  _createClass(FontStyleAttributor, [{
    key: 'value',
    value: function value(node) {
      return _get(FontStyleAttributor.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor.prototype), 'value', this).call(this, node).replace(/["']/g, '');
    }
  }]);

  return FontStyleAttributor;
}(_parchment2.default.Attributor.Style);

var FontStyle = new FontStyleAttributor('font', 'font-family', config);

exports.FontStyle = FontStyle;
exports.FontClass = FontClass;

/***/ }),
/* 40 */
/***/ (function(module, exports, __nested_webpack_require_234578__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizeStyle = exports.SizeClass = undefined;

var _parchment = __nested_webpack_require_234578__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['small', 'large', 'huge']
});
var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
  scope: _parchment2.default.Scope.INLINE,
  whitelist: ['10px', '18px', '32px']
});

exports.SizeClass = SizeClass;
exports.SizeStyle = SizeStyle;

/***/ }),
/* 41 */
/***/ (function(module, exports, __nested_webpack_require_235375__) {

"use strict";


module.exports = {
  'align': {
    '': __nested_webpack_require_235375__(76),
    'center': __nested_webpack_require_235375__(77),
    'right': __nested_webpack_require_235375__(78),
    'justify': __nested_webpack_require_235375__(79)
  },
  'background': __nested_webpack_require_235375__(80),
  'blockquote': __nested_webpack_require_235375__(81),
  'bold': __nested_webpack_require_235375__(82),
  'clean': __nested_webpack_require_235375__(83),
  'code': __nested_webpack_require_235375__(58),
  'code-block': __nested_webpack_require_235375__(58),
  'color': __nested_webpack_require_235375__(84),
  'direction': {
    '': __nested_webpack_require_235375__(85),
    'rtl': __nested_webpack_require_235375__(86)
  },
  'float': {
    'center': __nested_webpack_require_235375__(87),
    'full': __nested_webpack_require_235375__(88),
    'left': __nested_webpack_require_235375__(89),
    'right': __nested_webpack_require_235375__(90)
  },
  'formula': __nested_webpack_require_235375__(91),
  'header': {
    '1': __nested_webpack_require_235375__(92),
    '2': __nested_webpack_require_235375__(93)
  },
  'italic': __nested_webpack_require_235375__(94),
  'image': __nested_webpack_require_235375__(95),
  'indent': {
    '+1': __nested_webpack_require_235375__(96),
    '-1': __nested_webpack_require_235375__(97)
  },
  'link': __nested_webpack_require_235375__(98),
  'list': {
    'ordered': __nested_webpack_require_235375__(99),
    'bullet': __nested_webpack_require_235375__(100),
    'check': __nested_webpack_require_235375__(101)
  },
  'script': {
    'sub': __nested_webpack_require_235375__(102),
    'super': __nested_webpack_require_235375__(103)
  },
  'strike': __nested_webpack_require_235375__(104),
  'underline': __nested_webpack_require_235375__(105),
  'video': __nested_webpack_require_235375__(106)
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __nested_webpack_require_236844__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastChangeIndex = exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parchment = __nested_webpack_require_236844__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __nested_webpack_require_236844__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __nested_webpack_require_236844__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_Module) {
  _inherits(History, _Module);

  function History(quill, options) {
    _classCallCheck(this, History);

    var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, quill, options));

    _this.lastRecorded = 0;
    _this.ignoreChange = false;
    _this.clear();
    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (eventName, delta, oldDelta, source) {
      if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;
      if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
        _this.record(delta, oldDelta);
      } else {
        _this.transform(delta);
      }
    });
    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true }, _this.undo.bind(_this));
    _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true, shiftKey: true }, _this.redo.bind(_this));
    if (/Win/i.test(navigator.platform)) {
      _this.quill.keyboard.addBinding({ key: 'Y', shortKey: true }, _this.redo.bind(_this));
    }
    return _this;
  }

  _createClass(History, [{
    key: 'change',
    value: function change(source, dest) {
      if (this.stack[source].length === 0) return;
      var delta = this.stack[source].pop();
      this.stack[dest].push(delta);
      this.lastRecorded = 0;
      this.ignoreChange = true;
      this.quill.updateContents(delta[source], _quill2.default.sources.USER);
      this.ignoreChange = false;
      var index = getLastChangeIndex(delta[source]);
      this.quill.setSelection(index);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.stack = { undo: [], redo: [] };
    }
  }, {
    key: 'cutoff',
    value: function cutoff() {
      this.lastRecorded = 0;
    }
  }, {
    key: 'record',
    value: function record(changeDelta, oldDelta) {
      if (changeDelta.ops.length === 0) return;
      this.stack.redo = [];
      var undoDelta = this.quill.getContents().diff(oldDelta);
      var timestamp = Date.now();
      if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
        var delta = this.stack.undo.pop();
        undoDelta = undoDelta.compose(delta.undo);
        changeDelta = delta.redo.compose(changeDelta);
      } else {
        this.lastRecorded = timestamp;
      }
      this.stack.undo.push({
        redo: changeDelta,
        undo: undoDelta
      });
      if (this.stack.undo.length > this.options.maxStack) {
        this.stack.undo.shift();
      }
    }
  }, {
    key: 'redo',
    value: function redo() {
      this.change('redo', 'undo');
    }
  }, {
    key: 'transform',
    value: function transform(delta) {
      this.stack.undo.forEach(function (change) {
        change.undo = delta.transform(change.undo, true);
        change.redo = delta.transform(change.redo, true);
      });
      this.stack.redo.forEach(function (change) {
        change.undo = delta.transform(change.undo, true);
        change.redo = delta.transform(change.redo, true);
      });
    }
  }, {
    key: 'undo',
    value: function undo() {
      this.change('undo', 'redo');
    }
  }]);

  return History;
}(_module2.default);

History.DEFAULTS = {
  delay: 1000,
  maxStack: 100,
  userOnly: false
};

function endsWithNewlineChange(delta) {
  var lastOp = delta.ops[delta.ops.length - 1];
  if (lastOp == null) return false;
  if (lastOp.insert != null) {
    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
  }
  if (lastOp.attributes != null) {
    return Object.keys(lastOp.attributes).some(function (attr) {
      return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
    });
  }
  return false;
}

function getLastChangeIndex(delta) {
  var deleteLength = delta.reduce(function (length, op) {
    length += op.delete || 0;
    return length;
  }, 0);
  var changeIndex = delta.length() - deleteLength;
  if (endsWithNewlineChange(delta)) {
    changeIndex -= 1;
  }
  return changeIndex;
}

exports.default = History;
exports.getLastChangeIndex = getLastChangeIndex;

/***/ }),
/* 43 */
/***/ (function(module, exports, __nested_webpack_require_242979__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseTooltip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extend = __nested_webpack_require_242979__(3);

var _extend2 = _interopRequireDefault(_extend);

var _quillDelta = __nested_webpack_require_242979__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _emitter = __nested_webpack_require_242979__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _keyboard = __nested_webpack_require_242979__(23);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _theme = __nested_webpack_require_242979__(34);

var _theme2 = _interopRequireDefault(_theme);

var _colorPicker = __nested_webpack_require_242979__(59);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _iconPicker = __nested_webpack_require_242979__(60);

var _iconPicker2 = _interopRequireDefault(_iconPicker);

var _picker = __nested_webpack_require_242979__(28);

var _picker2 = _interopRequireDefault(_picker);

var _tooltip = __nested_webpack_require_242979__(61);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ALIGNS = [false, 'center', 'right', 'justify'];

var COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];

var FONTS = [false, 'serif', 'monospace'];

var HEADERS = ['1', '2', '3', false];

var SIZES = ['small', false, 'large', 'huge'];

var BaseTheme = function (_Theme) {
  _inherits(BaseTheme, _Theme);

  function BaseTheme(quill, options) {
    _classCallCheck(this, BaseTheme);

    var _this = _possibleConstructorReturn(this, (BaseTheme.__proto__ || Object.getPrototypeOf(BaseTheme)).call(this, quill, options));

    var listener = function listener(e) {
      if (!document.body.contains(quill.root)) {
        return document.body.removeEventListener('click', listener);
      }
      if (_this.tooltip != null && !_this.tooltip.root.contains(e.target) && document.activeElement !== _this.tooltip.textbox && !_this.quill.hasFocus()) {
        _this.tooltip.hide();
      }
      if (_this.pickers != null) {
        _this.pickers.forEach(function (picker) {
          if (!picker.container.contains(e.target)) {
            picker.close();
          }
        });
      }
    };
    quill.emitter.listenDOM('click', document.body, listener);
    return _this;
  }

  _createClass(BaseTheme, [{
    key: 'addModule',
    value: function addModule(name) {
      var module = _get(BaseTheme.prototype.__proto__ || Object.getPrototypeOf(BaseTheme.prototype), 'addModule', this).call(this, name);
      if (name === 'toolbar') {
        this.extendToolbar(module);
      }
      return module;
    }
  }, {
    key: 'buildButtons',
    value: function buildButtons(buttons, icons) {
      buttons.forEach(function (button) {
        var className = button.getAttribute('class') || '';
        className.split(/\s+/).forEach(function (name) {
          if (!name.startsWith('ql-')) return;
          name = name.slice('ql-'.length);
          if (icons[name] == null) return;
          if (name === 'direction') {
            button.innerHTML = icons[name][''] + icons[name]['rtl'];
          } else if (typeof icons[name] === 'string') {
            button.innerHTML = icons[name];
          } else {
            var value = button.value || '';
            if (value != null && icons[name][value]) {
              button.innerHTML = icons[name][value];
            }
          }
        });
      });
    }
  }, {
    key: 'buildPickers',
    value: function buildPickers(selects, icons) {
      var _this2 = this;

      this.pickers = selects.map(function (select) {
        if (select.classList.contains('ql-align')) {
          if (select.querySelector('option') == null) {
            fillSelect(select, ALIGNS);
          }
          return new _iconPicker2.default(select, icons.align);
        } else if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
          var format = select.classList.contains('ql-background') ? 'background' : 'color';
          if (select.querySelector('option') == null) {
            fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');
          }
          return new _colorPicker2.default(select, icons[format]);
        } else {
          if (select.querySelector('option') == null) {
            if (select.classList.contains('ql-font')) {
              fillSelect(select, FONTS);
            } else if (select.classList.contains('ql-header')) {
              fillSelect(select, HEADERS);
            } else if (select.classList.contains('ql-size')) {
              fillSelect(select, SIZES);
            }
          }
          return new _picker2.default(select);
        }
      });
      var update = function update() {
        _this2.pickers.forEach(function (picker) {
          picker.update();
        });
      };
      this.quill.on(_emitter2.default.events.EDITOR_CHANGE, update);
    }
  }]);

  return BaseTheme;
}(_theme2.default);

BaseTheme.DEFAULTS = (0, _extend2.default)(true, {}, _theme2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula: function formula() {
          this.quill.theme.tooltip.edit('formula');
        },
        image: function image() {
          var _this3 = this;

          var fileInput = this.container.querySelector('input.ql-image[type=file]');
          if (fileInput == null) {
            fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
            fileInput.classList.add('ql-image');
            fileInput.addEventListener('change', function () {
              if (fileInput.files != null && fileInput.files[0] != null) {
                var reader = new FileReader();
                reader.onload = function (e) {
                  var range = _this3.quill.getSelection(true);
                  _this3.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert({ image: e.target.result }), _emitter2.default.sources.USER);
                  _this3.quill.setSelection(range.index + 1, _emitter2.default.sources.SILENT);
                  fileInput.value = "";
                };
                reader.readAsDataURL(fileInput.files[0]);
              }
            });
            this.container.appendChild(fileInput);
          }
          fileInput.click();
        },
        video: function video() {
          this.quill.theme.tooltip.edit('video');
        }
      }
    }
  }
});

var BaseTooltip = function (_Tooltip) {
  _inherits(BaseTooltip, _Tooltip);

  function BaseTooltip(quill, boundsContainer) {
    _classCallCheck(this, BaseTooltip);

    var _this4 = _possibleConstructorReturn(this, (BaseTooltip.__proto__ || Object.getPrototypeOf(BaseTooltip)).call(this, quill, boundsContainer));

    _this4.textbox = _this4.root.querySelector('input[type="text"]');
    _this4.listen();
    return _this4;
  }

  _createClass(BaseTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this5 = this;

      this.textbox.addEventListener('keydown', function (event) {
        if (_keyboard2.default.match(event, 'enter')) {
          _this5.save();
          event.preventDefault();
        } else if (_keyboard2.default.match(event, 'escape')) {
          _this5.cancel();
          event.preventDefault();
        }
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.hide();
    }
  }, {
    key: 'edit',
    value: function edit() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';
      var preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.root.classList.remove('ql-hidden');
      this.root.classList.add('ql-editing');
      if (preview != null) {
        this.textbox.value = preview;
      } else if (mode !== this.root.getAttribute('data-mode')) {
        this.textbox.value = '';
      }
      this.position(this.quill.getBounds(this.quill.selection.savedRange));
      this.textbox.select();
      this.textbox.setAttribute('placeholder', this.textbox.getAttribute('data-' + mode) || '');
      this.root.setAttribute('data-mode', mode);
    }
  }, {
    key: 'restoreFocus',
    value: function restoreFocus() {
      var scrollTop = this.quill.scrollingContainer.scrollTop;
      this.quill.focus();
      this.quill.scrollingContainer.scrollTop = scrollTop;
    }
  }, {
    key: 'save',
    value: function save() {
      var value = this.textbox.value;
      switch (this.root.getAttribute('data-mode')) {
        case 'link':
          {
            var scrollTop = this.quill.root.scrollTop;
            if (this.linkRange) {
              this.quill.formatText(this.linkRange, 'link', value, _emitter2.default.sources.USER);
              delete this.linkRange;
            } else {
              this.restoreFocus();
              this.quill.format('link', value, _emitter2.default.sources.USER);
            }
            this.quill.root.scrollTop = scrollTop;
            break;
          }
        case 'video':
          {
            value = extractVideoUrl(value);
          } // eslint-disable-next-line no-fallthrough
        case 'formula':
          {
            if (!value) break;
            var range = this.quill.getSelection(true);
            if (range != null) {
              var index = range.index + range.length;
              this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _emitter2.default.sources.USER);
              if (this.root.getAttribute('data-mode') === 'formula') {
                this.quill.insertText(index + 1, ' ', _emitter2.default.sources.USER);
              }
              this.quill.setSelection(index + 2, _emitter2.default.sources.USER);
            }
            break;
          }
        default:
      }
      this.textbox.value = '';
      this.hide();
    }
  }]);

  return BaseTooltip;
}(_tooltip2.default);

function extractVideoUrl(url) {
  var match = url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return (match[1] || 'https') + '://www.youtube.com/embed/' + match[2] + '?showinfo=0';
  }
  if (match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) {
    // eslint-disable-line no-cond-assign
    return (match[1] || 'https') + '://player.vimeo.com/video/' + match[2] + '/';
  }
  return url;
}

function fillSelect(select, values) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  values.forEach(function (value) {
    var option = document.createElement('option');
    if (value === defaultValue) {
      option.setAttribute('selected', 'selected');
    } else {
      option.setAttribute('value', value);
    }
    select.appendChild(option);
  });
}

exports.BaseTooltip = BaseTooltip;
exports.default = BaseTheme;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = this.tail = null;
        this.length = 0;
    }
    LinkedList.prototype.append = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        this.insertBefore(nodes[0], null);
        if (nodes.length > 1) {
            this.append.apply(this, nodes.slice(1));
        }
    };
    LinkedList.prototype.contains = function (node) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            if (cur === node)
                return true;
        }
        return false;
    };
    LinkedList.prototype.insertBefore = function (node, refNode) {
        if (!node)
            return;
        node.next = refNode;
        if (refNode != null) {
            node.prev = refNode.prev;
            if (refNode.prev != null) {
                refNode.prev.next = node;
            }
            refNode.prev = node;
            if (refNode === this.head) {
                this.head = node;
            }
        }
        else if (this.tail != null) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        else {
            node.prev = null;
            this.head = this.tail = node;
        }
        this.length += 1;
    };
    LinkedList.prototype.offset = function (target) {
        var index = 0, cur = this.head;
        while (cur != null) {
            if (cur === target)
                return index;
            index += cur.length();
            cur = cur.next;
        }
        return -1;
    };
    LinkedList.prototype.remove = function (node) {
        if (!this.contains(node))
            return;
        if (node.prev != null)
            node.prev.next = node.next;
        if (node.next != null)
            node.next.prev = node.prev;
        if (node === this.head)
            this.head = node.next;
        if (node === this.tail)
            this.tail = node.prev;
        this.length -= 1;
    };
    LinkedList.prototype.iterator = function (curNode) {
        if (curNode === void 0) { curNode = this.head; }
        // TODO use yield when we can
        return function () {
            var ret = curNode;
            if (curNode != null)
                curNode = curNode.next;
            return ret;
        };
    };
    LinkedList.prototype.find = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        var cur, next = this.iterator();
        while ((cur = next())) {
            var length = cur.length();
            if (index < length ||
                (inclusive && index === length && (cur.next == null || cur.next.length() !== 0))) {
                return [cur, index];
            }
            index -= length;
        }
        return [null, 0];
    };
    LinkedList.prototype.forEach = function (callback) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            callback(cur);
        }
    };
    LinkedList.prototype.forEachAt = function (index, length, callback) {
        if (length <= 0)
            return;
        var _a = this.find(index), startNode = _a[0], offset = _a[1];
        var cur, curIndex = index - offset, next = this.iterator(startNode);
        while ((cur = next()) && curIndex < index + length) {
            var curLength = cur.length();
            if (index > curIndex) {
                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
            }
            else {
                callback(cur, 0, Math.min(curLength, index + length - curIndex));
            }
            curIndex += curLength;
        }
    };
    LinkedList.prototype.map = function (callback) {
        return this.reduce(function (memo, cur) {
            memo.push(callback(cur));
            return memo;
        }, []);
    };
    LinkedList.prototype.reduce = function (callback, memo) {
        var cur, next = this.iterator();
        while ((cur = next())) {
            memo = callback(memo, cur);
        }
        return memo;
    };
    return LinkedList;
}());
exports.default = LinkedList;


/***/ }),
/* 45 */
/***/ (function(module, exports, __nested_webpack_require_260796__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __nested_webpack_require_260796__(17);
var Registry = __nested_webpack_require_260796__(1);
var OBSERVER_CONFIG = {
    attributes: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true,
};
var MAX_OPTIMIZE_ITERATIONS = 100;
var ScrollBlot = /** @class */ (function (_super) {
    __extends(ScrollBlot, _super);
    function ScrollBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.scroll = _this;
        _this.observer = new MutationObserver(function (mutations) {
            _this.update(mutations);
        });
        _this.observer.observe(_this.domNode, OBSERVER_CONFIG);
        _this.attach();
        return _this;
    }
    ScrollBlot.prototype.detach = function () {
        _super.prototype.detach.call(this);
        this.observer.disconnect();
    };
    ScrollBlot.prototype.deleteAt = function (index, length) {
        this.update();
        if (index === 0 && length === this.length()) {
            this.children.forEach(function (child) {
                child.remove();
            });
        }
        else {
            _super.prototype.deleteAt.call(this, index, length);
        }
    };
    ScrollBlot.prototype.formatAt = function (index, length, name, value) {
        this.update();
        _super.prototype.formatAt.call(this, index, length, name, value);
    };
    ScrollBlot.prototype.insertAt = function (index, value, def) {
        this.update();
        _super.prototype.insertAt.call(this, index, value, def);
    };
    ScrollBlot.prototype.optimize = function (mutations, context) {
        var _this = this;
        if (mutations === void 0) { mutations = []; }
        if (context === void 0) { context = {}; }
        _super.prototype.optimize.call(this, context);
        // We must modify mutations directly, cannot make copy and then modify
        var records = [].slice.call(this.observer.takeRecords());
        // Array.push currently seems to be implemented by a non-tail recursive function
        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());
        while (records.length > 0)
            mutations.push(records.pop());
        // TODO use WeakMap
        var mark = function (blot, markParent) {
            if (markParent === void 0) { markParent = true; }
            if (blot == null || blot === _this)
                return;
            if (blot.domNode.parentNode == null)
                return;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [];
            }
            if (markParent)
                mark(blot.parent);
        };
        var optimize = function (blot) {
            // Post-order traversal
            if (
            // @ts-ignore
            blot.domNode[Registry.DATA_KEY] == null ||
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations == null) {
                return;
            }
            if (blot instanceof container_1.default) {
                blot.children.forEach(optimize);
            }
            blot.optimize(context);
        };
        var remaining = mutations;
        for (var i = 0; remaining.length > 0; i += 1) {
            if (i >= MAX_OPTIMIZE_ITERATIONS) {
                throw new Error('[Parchment] Maximum optimize iterations reached');
            }
            remaining.forEach(function (mutation) {
                var blot = Registry.find(mutation.target, true);
                if (blot == null)
                    return;
                if (blot.domNode === mutation.target) {
                    if (mutation.type === 'childList') {
                        mark(Registry.find(mutation.previousSibling, false));
                        [].forEach.call(mutation.addedNodes, function (node) {
                            var child = Registry.find(node, false);
                            mark(child, false);
                            if (child instanceof container_1.default) {
                                child.children.forEach(function (grandChild) {
                                    mark(grandChild, false);
                                });
                            }
                        });
                    }
                    else if (mutation.type === 'attributes') {
                        mark(blot.prev);
                    }
                }
                mark(blot);
            });
            this.children.forEach(optimize);
            remaining = [].slice.call(this.observer.takeRecords());
            records = remaining.slice();
            while (records.length > 0)
                mutations.push(records.pop());
        }
    };
    ScrollBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (context === void 0) { context = {}; }
        mutations = mutations || this.observer.takeRecords();
        // TODO use WeakMap
        mutations
            .map(function (mutation) {
            var blot = Registry.find(mutation.target, true);
            if (blot == null)
                return null;
            // @ts-ignore
            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
                return blot;
            }
            else {
                // @ts-ignore
                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
                return null;
            }
        })
            .forEach(function (blot) {
            if (blot == null ||
                blot === _this ||
                //@ts-ignore
                blot.domNode[Registry.DATA_KEY] == null)
                return;
            // @ts-ignore
            blot.update(blot.domNode[Registry.DATA_KEY].mutations || [], context);
        });
        // @ts-ignore
        if (this.domNode[Registry.DATA_KEY].mutations != null) {
            // @ts-ignore
            _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations, context);
        }
        this.optimize(mutations, context);
    };
    ScrollBlot.blotName = 'scroll';
    ScrollBlot.defaultChild = 'block';
    ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
    ScrollBlot.tagName = 'DIV';
    return ScrollBlot;
}(container_1.default));
exports.default = ScrollBlot;


/***/ }),
/* 46 */
/***/ (function(module, exports, __nested_webpack_require_267910__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __nested_webpack_require_267910__(18);
var Registry = __nested_webpack_require_267910__(1);
// Shallow object comparison
function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;
    // @ts-ignore
    for (var prop in obj1) {
        // @ts-ignore
        if (obj1[prop] !== obj2[prop])
            return false;
    }
    return true;
}
var InlineBlot = /** @class */ (function (_super) {
    __extends(InlineBlot, _super);
    function InlineBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineBlot.formats = function (domNode) {
        if (domNode.tagName === InlineBlot.tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    InlineBlot.prototype.format = function (name, value) {
        var _this = this;
        if (name === this.statics.blotName && !value) {
            this.children.forEach(function (child) {
                if (!(child instanceof format_1.default)) {
                    child = child.wrap(InlineBlot.blotName, true);
                }
                _this.attributes.copy(child);
            });
            this.unwrap();
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    InlineBlot.prototype.formatAt = function (index, length, name, value) {
        if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
            var blot = this.isolate(index, length);
            blot.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    InlineBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        var formats = this.formats();
        if (Object.keys(formats).length === 0) {
            return this.unwrap(); // unformatted span
        }
        var next = this.next;
        if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
            next.moveChildren(this);
            next.remove();
        }
    };
    InlineBlot.blotName = 'inline';
    InlineBlot.scope = Registry.Scope.INLINE_BLOT;
    InlineBlot.tagName = 'SPAN';
    return InlineBlot;
}(format_1.default));
exports.default = InlineBlot;


/***/ }),
/* 47 */
/***/ (function(module, exports, __nested_webpack_require_270902__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = __nested_webpack_require_270902__(18);
var Registry = __nested_webpack_require_270902__(1);
var BlockBlot = /** @class */ (function (_super) {
    __extends(BlockBlot, _super);
    function BlockBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockBlot.formats = function (domNode) {
        var tagName = Registry.query(BlockBlot.blotName).tagName;
        if (domNode.tagName === tagName)
            return undefined;
        return _super.formats.call(this, domNode);
    };
    BlockBlot.prototype.format = function (name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) == null) {
            return;
        }
        else if (name === this.statics.blotName && !value) {
            this.replaceWith(BlockBlot.blotName);
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    BlockBlot.prototype.formatAt = function (index, length, name, value) {
        if (Registry.query(name, Registry.Scope.BLOCK) != null) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    BlockBlot.prototype.insertAt = function (index, value, def) {
        if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
            // Insert text or inline
            _super.prototype.insertAt.call(this, index, value, def);
        }
        else {
            var after = this.split(index);
            var blot = Registry.create(value, def);
            after.parent.insertBefore(blot, after);
        }
    };
    BlockBlot.prototype.update = function (mutations, context) {
        if (navigator.userAgent.match(/Trident/)) {
            this.build();
        }
        else {
            _super.prototype.update.call(this, mutations, context);
        }
    };
    BlockBlot.blotName = 'block';
    BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
    BlockBlot.tagName = 'P';
    return BlockBlot;
}(format_1.default));
exports.default = BlockBlot;


/***/ }),
/* 48 */
/***/ (function(module, exports, __nested_webpack_require_273610__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __nested_webpack_require_273610__(19);
var EmbedBlot = /** @class */ (function (_super) {
    __extends(EmbedBlot, _super);
    function EmbedBlot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmbedBlot.formats = function (domNode) {
        return undefined;
    };
    EmbedBlot.prototype.format = function (name, value) {
        // super.formatAt wraps, which is what we want in general,
        // but this allows subclasses to overwrite for formats
        // that just apply to particular embeds
        _super.prototype.formatAt.call(this, 0, this.length(), name, value);
    };
    EmbedBlot.prototype.formatAt = function (index, length, name, value) {
        if (index === 0 && length === this.length()) {
            this.format(name, value);
        }
        else {
            _super.prototype.formatAt.call(this, index, length, name, value);
        }
    };
    EmbedBlot.prototype.formats = function () {
        return this.statics.formats(this.domNode);
    };
    return EmbedBlot;
}(leaf_1.default));
exports.default = EmbedBlot;


/***/ }),
/* 49 */
/***/ (function(module, exports, __nested_webpack_require_275351__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var leaf_1 = __nested_webpack_require_275351__(19);
var Registry = __nested_webpack_require_275351__(1);
var TextBlot = /** @class */ (function (_super) {
    __extends(TextBlot, _super);
    function TextBlot(node) {
        var _this = _super.call(this, node) || this;
        _this.text = _this.statics.value(_this.domNode);
        return _this;
    }
    TextBlot.create = function (value) {
        return document.createTextNode(value);
    };
    TextBlot.value = function (domNode) {
        var text = domNode.data;
        // @ts-ignore
        if (text['normalize'])
            text = text['normalize']();
        return text;
    };
    TextBlot.prototype.deleteAt = function (index, length) {
        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
    };
    TextBlot.prototype.index = function (node, offset) {
        if (this.domNode === node) {
            return offset;
        }
        return -1;
    };
    TextBlot.prototype.insertAt = function (index, value, def) {
        if (def == null) {
            this.text = this.text.slice(0, index) + value + this.text.slice(index);
            this.domNode.data = this.text;
        }
        else {
            _super.prototype.insertAt.call(this, index, value, def);
        }
    };
    TextBlot.prototype.length = function () {
        return this.text.length;
    };
    TextBlot.prototype.optimize = function (context) {
        _super.prototype.optimize.call(this, context);
        this.text = this.statics.value(this.domNode);
        if (this.text.length === 0) {
            this.remove();
        }
        else if (this.next instanceof TextBlot && this.next.prev === this) {
            this.insertAt(this.length(), this.next.value());
            this.next.remove();
        }
    };
    TextBlot.prototype.position = function (index, inclusive) {
        if (inclusive === void 0) { inclusive = false; }
        return [this.domNode, index];
    };
    TextBlot.prototype.split = function (index, force) {
        if (force === void 0) { force = false; }
        if (!force) {
            if (index === 0)
                return this;
            if (index === this.length())
                return this.next;
        }
        var after = Registry.create(this.domNode.splitText(index));
        this.parent.insertBefore(after, this.next);
        this.text = this.statics.value(this.domNode);
        return after;
    };
    TextBlot.prototype.update = function (mutations, context) {
        var _this = this;
        if (mutations.some(function (mutation) {
            return mutation.type === 'characterData' && mutation.target === _this.domNode;
        })) {
            this.text = this.statics.value(this.domNode);
        }
    };
    TextBlot.prototype.value = function () {
        return this.text;
    };
    TextBlot.blotName = 'text';
    TextBlot.scope = Registry.Scope.INLINE_BLOT;
    return TextBlot;
}(leaf_1.default));
exports.default = TextBlot;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elem = document.createElement('div');
elem.classList.toggle('test-class', false);
if (elem.classList.contains('test-class')) {
  var _toggle = DOMTokenList.prototype.toggle;
  DOMTokenList.prototype.toggle = function (token, force) {
    if (arguments.length > 1 && !this.contains(token) === !force) {
      return force;
    } else {
      return _toggle.call(this, token);
    }
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function value(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Disable resizing in Firefox
  document.execCommand("enableObjectResizing", false, false);
  // Disable automatic linkifying in IE11
  document.execCommand("autoUrlDetect", false, false);
});

/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * This library modifies the diff-patch-match library by Neil Fraser
 * by removing the patch and match functionality and certain advanced
 * options in the diff function. The original license is as follows:
 *
 * ===
 *
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;


/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {Int} cursor_pos Expected edit position in text1 (optional)
 * @return {Array} Array of diff tuples.
 */
function diff_main(text1, text2, cursor_pos) {
  // Check for equality (speedup).
  if (text1 == text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }

  // Check cursor_pos within bounds
  if (cursor_pos < 0 || text1.length < cursor_pos) {
    cursor_pos = null;
  }

  // Trim off common prefix (speedup).
  var commonlength = diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = diff_compute_(text1, text2);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  diff_cleanupMerge(diffs);
  if (cursor_pos != null) {
    diffs = fix_cursor(diffs, cursor_pos);
  }
  diffs = fix_emoji(diffs);
  return diffs;
};


/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 */
function diff_compute_(text1, text2) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i != -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
             [DIFF_EQUAL, shorttext],
             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length == 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }

  // Check to see if the problem can be split in two.
  var hm = diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = diff_main(text1_a, text2_a);
    var diffs_b = diff_main(text1_b, text2_b);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  return diff_bisect_(text1, text2);
};


/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @return {Array} Array of diff tuples.
 * @private
 */
function diff_bisect_(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (delta % 2 != 0);
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length &&
             text1.charAt(x1) == text2.charAt(y1)) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length &&
             text1.charAt(text1_length - x2 - 1) ==
             text2.charAt(text2_length - y2 - 1)) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return diff_bisectSplit_(text1, text2, x1, y1);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
};


/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @return {Array} Array of diff tuples.
 */
function diff_bisectSplit_(text1, text2, x, y) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = diff_main(text1a, text2a);
  var diffsb = diff_main(text1b, text2b);

  return diffs.concat(diffsb);
};


/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
function diff_commonPrefix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) ==
        text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
function diff_commonSuffix(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 ||
      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 */
function diff_halfMatch_(text1, text2) {
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;  // Pointless.
  }

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
      var prefixLength = diff_commonPrefix(longtext.substring(i),
                                           shorttext.substring(j));
      var suffixLength = diff_commonSuffix(longtext.substring(0, i),
                                           shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) +
            shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [best_longtext_a, best_longtext_b,
              best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};


/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {Array} diffs Array of diff tuples.
 */
function diff_cleanupMerge(diffs) {
  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if ((pointer - count_delete - count_insert) > 0 &&
                  diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] +=
                    text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL,
                                    text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length -
                  commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length -
                  commonlength);
              text_delete = text_delete.substring(0, text_delete.length -
                  commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          if (count_delete === 0) {
            diffs.splice(pointer - count_insert,
                count_delete + count_insert, [DIFF_INSERT, text_insert]);
          } else if (count_insert === 0) {
            diffs.splice(pointer - count_delete,
                count_delete + count_insert, [DIFF_DELETE, text_delete]);
          } else {
            diffs.splice(pointer - count_delete - count_insert,
                count_delete + count_insert, [DIFF_DELETE, text_delete],
                [DIFF_INSERT, text_insert]);
          }
          pointer = pointer - count_delete - count_insert +
                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
            diffs[pointer][1].substring(0, diffs[pointer][1].length -
                                        diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
          diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
            diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    diff_cleanupMerge(diffs);
  }
};


var diff = diff_main;
diff.INSERT = DIFF_INSERT;
diff.DELETE = DIFF_DELETE;
diff.EQUAL = DIFF_EQUAL;

module.exports = diff;

/*
 * Modify a diff such that the cursor position points to the start of a change:
 * E.g.
 *   cursor_normalize_diff([[DIFF_EQUAL, 'abc']], 1)
 *     => [1, [[DIFF_EQUAL, 'a'], [DIFF_EQUAL, 'bc']]]
 *   cursor_normalize_diff([[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xyz']], 2)
 *     => [2, [[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xy'], [DIFF_DELETE, 'z']]]
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} A tuple [cursor location in the modified diff, modified diff]
 */
function cursor_normalize_diff (diffs, cursor_pos) {
  if (cursor_pos === 0) {
    return [DIFF_EQUAL, diffs];
  }
  for (var current_pos = 0, i = 0; i < diffs.length; i++) {
    var d = diffs[i];
    if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
      var next_pos = current_pos + d[1].length;
      if (cursor_pos === next_pos) {
        return [i + 1, diffs];
      } else if (cursor_pos < next_pos) {
        // copy to prevent side effects
        diffs = diffs.slice();
        // split d into two diff changes
        var split_pos = cursor_pos - current_pos;
        var d_left = [d[0], d[1].slice(0, split_pos)];
        var d_right = [d[0], d[1].slice(split_pos)];
        diffs.splice(i, 1, d_left, d_right);
        return [i + 1, diffs];
      } else {
        current_pos = next_pos;
      }
    }
  }
  throw new Error('cursor_pos is out of bounds!')
}

/*
 * Modify a diff such that the edit position is "shifted" to the proposed edit location (cursor_position).
 *
 * Case 1)
 *   Check if a naive shift is possible:
 *     [0, X], [ 1, Y] -> [ 1, Y], [0, X]    (if X + Y === Y + X)
 *     [0, X], [-1, Y] -> [-1, Y], [0, X]    (if X + Y === Y + X) - holds same result
 * Case 2)
 *   Check if the following shifts are possible:
 *     [0, 'pre'], [ 1, 'prefix'] -> [ 1, 'pre'], [0, 'pre'], [ 1, 'fix']
 *     [0, 'pre'], [-1, 'prefix'] -> [-1, 'pre'], [0, 'pre'], [-1, 'fix']
 *         ^            ^
 *         d          d_next
 *
 * @param {Array} diffs Array of diff tuples
 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
 * @return {Array} Array of diff tuples
 */
function fix_cursor (diffs, cursor_pos) {
  var norm = cursor_normalize_diff(diffs, cursor_pos);
  var ndiffs = norm[1];
  var cursor_pointer = norm[0];
  var d = ndiffs[cursor_pointer];
  var d_next = ndiffs[cursor_pointer + 1];

  if (d == null) {
    // Text was deleted from end of original string,
    // cursor is now out of bounds in new string
    return diffs;
  } else if (d[0] !== DIFF_EQUAL) {
    // A modification happened at the cursor location.
    // This is the expected outcome, so we can return the original diff.
    return diffs;
  } else {
    if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
      // Case 1)
      // It is possible to perform a naive shift
      ndiffs.splice(cursor_pointer, 2, d_next, d)
      return merge_tuples(ndiffs, cursor_pointer, 2)
    } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
      // Case 2)
      // d[1] is a prefix of d_next[1]
      // We can assume that d_next[0] !== 0, since d[0] === 0
      // Shift edit locations..
      ndiffs.splice(cursor_pointer, 2, [d_next[0], d[1]], [0, d[1]]);
      var suffix = d_next[1].slice(d[1].length);
      if (suffix.length > 0) {
        ndiffs.splice(cursor_pointer + 2, 0, [d_next[0], suffix]);
      }
      return merge_tuples(ndiffs, cursor_pointer, 3)
    } else {
      // Not possible to perform any modification
      return diffs;
    }
  }
}

/*
 * Check diff did not split surrogate pairs.
 * Ex. [0, '\uD83D'], [-1, '\uDC36'], [1, '\uDC2F'] -> [-1, '\uD83D\uDC36'], [1, '\uD83D\uDC2F']
 *     '\uD83D\uDC36' === '🐶', '\uD83D\uDC2F' === '🐯'
 *
 * @param {Array} diffs Array of diff tuples
 * @return {Array} Array of diff tuples
 */
function fix_emoji (diffs) {
  var compact = false;
  var starts_with_pair_end = function(str) {
    return str.charCodeAt(0) >= 0xDC00 && str.charCodeAt(0) <= 0xDFFF;
  }
  var ends_with_pair_start = function(str) {
    return str.charCodeAt(str.length-1) >= 0xD800 && str.charCodeAt(str.length-1) <= 0xDBFF;
  }
  for (var i = 2; i < diffs.length; i += 1) {
    if (diffs[i-2][0] === DIFF_EQUAL && ends_with_pair_start(diffs[i-2][1]) &&
        diffs[i-1][0] === DIFF_DELETE && starts_with_pair_end(diffs[i-1][1]) &&
        diffs[i][0] === DIFF_INSERT && starts_with_pair_end(diffs[i][1])) {
      compact = true;

      diffs[i-1][1] = diffs[i-2][1].slice(-1) + diffs[i-1][1];
      diffs[i][1] = diffs[i-2][1].slice(-1) + diffs[i][1];

      diffs[i-2][1] = diffs[i-2][1].slice(0, -1);
    }
  }
  if (!compact) {
    return diffs;
  }
  var fixed_diffs = [];
  for (var i = 0; i < diffs.length; i += 1) {
    if (diffs[i][1].length > 0) {
      fixed_diffs.push(diffs[i]);
    }
  }
  return fixed_diffs;
}

/*
 * Try to merge tuples with their neigbors in a given range.
 * E.g. [0, 'a'], [0, 'b'] -> [0, 'ab']
 *
 * @param {Array} diffs Array of diff tuples.
 * @param {Int} start Position of the first element to merge (diffs[start] is also merged with diffs[start - 1]).
 * @param {Int} length Number of consecutive elements to check.
 * @return {Array} Array of merged diff tuples.
 */
function merge_tuples (diffs, start, length) {
  // Check from (start-1) to (start+length).
  for (var i = start + length - 1; i >= 0 && i >= start - 1; i--) {
    if (i + 1 < diffs.length) {
      var left_d = diffs[i];
      var right_d = diffs[i+1];
      if (left_d[0] === right_d[1]) {
        diffs.splice(i, 2, [left_d[0], left_d[1] + right_d[1]]);
      }
    }
  }
  return diffs;
}


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

'use strict';

var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __nested_webpack_require_316416__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend2 = __nested_webpack_require_316416__(3);

var _extend3 = _interopRequireDefault(_extend2);

var _quillDelta = __nested_webpack_require_316416__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __nested_webpack_require_316416__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __nested_webpack_require_316416__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __nested_webpack_require_316416__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __nested_webpack_require_316416__(9);

var _module2 = _interopRequireDefault(_module);

var _align = __nested_webpack_require_316416__(36);

var _background = __nested_webpack_require_316416__(37);

var _code = __nested_webpack_require_316416__(13);

var _code2 = _interopRequireDefault(_code);

var _color = __nested_webpack_require_316416__(26);

var _direction = __nested_webpack_require_316416__(38);

var _font = __nested_webpack_require_316416__(39);

var _size = __nested_webpack_require_316416__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:clipboard');

var DOM_KEY = '__ql-matcher';

var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['style', matchIgnore]];

var ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute, _direction.DirectionAttribute].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function (memo, attr) {
  memo[attr.keyName] = attr;
  return memo;
}, {});

var Clipboard = function (_Module) {
  _inherits(Clipboard, _Module);

  function Clipboard(quill, options) {
    _classCallCheck(this, Clipboard);

    var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this, quill, options));

    _this.quill.root.addEventListener('paste', _this.onPaste.bind(_this));
    _this.container = _this.quill.addContainer('ql-clipboard');
    _this.container.setAttribute('contenteditable', true);
    _this.container.setAttribute('tabindex', -1);
    _this.matchers = [];
    CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          selector = _ref2[0],
          matcher = _ref2[1];

      if (!options.matchVisual && matcher === matchSpacing) return;
      _this.addMatcher(selector, matcher);
    });
    return _this;
  }

  _createClass(Clipboard, [{
    key: 'addMatcher',
    value: function addMatcher(selector, matcher) {
      this.matchers.push([selector, matcher]);
    }
  }, {
    key: 'convert',
    value: function convert(html) {
      if (typeof html === 'string') {
        this.container.innerHTML = html.replace(/\>\r?\n +\</g, '><'); // Remove spaces between tags
        return this.convert();
      }
      var formats = this.quill.getFormat(this.quill.selection.savedRange.index);
      if (formats[_code2.default.blotName]) {
        var text = this.container.innerText;
        this.container.innerHTML = '';
        return new _quillDelta2.default().insert(text, _defineProperty({}, _code2.default.blotName, formats[_code2.default.blotName]));
      }

      var _prepareMatching = this.prepareMatching(),
          _prepareMatching2 = _slicedToArray(_prepareMatching, 2),
          elementMatchers = _prepareMatching2[0],
          textMatchers = _prepareMatching2[1];

      var delta = traverse(this.container, elementMatchers, textMatchers);
      // Remove trailing newline
      if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
        delta = delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));
      }
      debug.log('convert', this.container.innerHTML, delta);
      this.container.innerHTML = '';
      return delta;
    }
  }, {
    key: 'dangerouslyPasteHTML',
    value: function dangerouslyPasteHTML(index, html) {
      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _quill2.default.sources.API;

      if (typeof index === 'string') {
        this.quill.setContents(this.convert(index), html);
        this.quill.setSelection(0, _quill2.default.sources.SILENT);
      } else {
        var paste = this.convert(html);
        this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste), source);
        this.quill.setSelection(index + paste.length(), _quill2.default.sources.SILENT);
      }
    }
  }, {
    key: 'onPaste',
    value: function onPaste(e) {
      var _this2 = this;

      if (e.defaultPrevented || !this.quill.isEnabled()) return;
      var range = this.quill.getSelection();
      var delta = new _quillDelta2.default().retain(range.index);
      var scrollTop = this.quill.scrollingContainer.scrollTop;
      this.container.focus();
      this.quill.selection.update(_quill2.default.sources.SILENT);
      setTimeout(function () {
        delta = delta.concat(_this2.convert()).delete(range.length);
        _this2.quill.updateContents(delta, _quill2.default.sources.USER);
        // range.length contributes to delta.length()
        _this2.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
        _this2.quill.scrollingContainer.scrollTop = scrollTop;
        _this2.quill.focus();
      }, 1);
    }
  }, {
    key: 'prepareMatching',
    value: function prepareMatching() {
      var _this3 = this;

      var elementMatchers = [],
          textMatchers = [];
      this.matchers.forEach(function (pair) {
        var _pair = _slicedToArray(pair, 2),
            selector = _pair[0],
            matcher = _pair[1];

        switch (selector) {
          case Node.TEXT_NODE:
            textMatchers.push(matcher);
            break;
          case Node.ELEMENT_NODE:
            elementMatchers.push(matcher);
            break;
          default:
            [].forEach.call(_this3.container.querySelectorAll(selector), function (node) {
              // TODO use weakmap
              node[DOM_KEY] = node[DOM_KEY] || [];
              node[DOM_KEY].push(matcher);
            });
            break;
        }
      });
      return [elementMatchers, textMatchers];
    }
  }]);

  return Clipboard;
}(_module2.default);

Clipboard.DEFAULTS = {
  matchers: [],
  matchVisual: true
};

function applyFormat(delta, format, value) {
  if ((typeof format === 'undefined' ? 'undefined' : _typeof(format)) === 'object') {
    return Object.keys(format).reduce(function (delta, key) {
      return applyFormat(delta, key, format[key]);
    }, delta);
  } else {
    return delta.reduce(function (delta, op) {
      if (op.attributes && op.attributes[format]) {
        return delta.push(op);
      } else {
        return delta.insert(op.insert, (0, _extend3.default)({}, _defineProperty({}, format, value), op.attributes));
      }
    }, new _quillDelta2.default());
  }
}

function computeStyle(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return {};
  var DOM_KEY = '__ql-computed-style';
  return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
}

function deltaEndsWith(delta, text) {
  var endText = "";
  for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
    var op = delta.ops[i];
    if (typeof op.insert !== 'string') break;
    endText = op.insert + endText;
  }
  return endText.slice(-1 * text.length) === text;
}

function isLine(node) {
  if (node.childNodes.length === 0) return false; // Exclude embed blocks
  var style = computeStyle(node);
  return ['block', 'list-item'].indexOf(style.display) > -1;
}

function traverse(node, elementMatchers, textMatchers) {
  // Post-order
  if (node.nodeType === node.TEXT_NODE) {
    return textMatchers.reduce(function (delta, matcher) {
      return matcher(node, delta);
    }, new _quillDelta2.default());
  } else if (node.nodeType === node.ELEMENT_NODE) {
    return [].reduce.call(node.childNodes || [], function (delta, childNode) {
      var childrenDelta = traverse(childNode, elementMatchers, textMatchers);
      if (childNode.nodeType === node.ELEMENT_NODE) {
        childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
        childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
          return matcher(childNode, childrenDelta);
        }, childrenDelta);
      }
      return delta.concat(childrenDelta);
    }, new _quillDelta2.default());
  } else {
    return new _quillDelta2.default();
  }
}

function matchAlias(format, node, delta) {
  return applyFormat(delta, format, true);
}

function matchAttributor(node, delta) {
  var attributes = _parchment2.default.Attributor.Attribute.keys(node);
  var classes = _parchment2.default.Attributor.Class.keys(node);
  var styles = _parchment2.default.Attributor.Style.keys(node);
  var formats = {};
  attributes.concat(classes).concat(styles).forEach(function (name) {
    var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
    if (attr != null) {
      formats[attr.attrName] = attr.value(node);
      if (formats[attr.attrName]) return;
    }
    attr = ATTRIBUTE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      formats[attr.attrName] = attr.value(node) || undefined;
    }
    attr = STYLE_ATTRIBUTORS[name];
    if (attr != null && (attr.attrName === name || attr.keyName === name)) {
      attr = STYLE_ATTRIBUTORS[name];
      formats[attr.attrName] = attr.value(node) || undefined;
    }
  });
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  return delta;
}

function matchBlot(node, delta) {
  var match = _parchment2.default.query(node);
  if (match == null) return delta;
  if (match.prototype instanceof _parchment2.default.Embed) {
    var embed = {};
    var value = match.value(node);
    if (value != null) {
      embed[match.blotName] = value;
      delta = new _quillDelta2.default().insert(embed, match.formats(node));
    }
  } else if (typeof match.formats === 'function') {
    delta = applyFormat(delta, match.blotName, match.formats(node));
  }
  return delta;
}

function matchBreak(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    delta.insert('\n');
  }
  return delta;
}

function matchIgnore() {
  return new _quillDelta2.default();
}

function matchIndent(node, delta) {
  var match = _parchment2.default.query(node);
  if (match == null || match.blotName !== 'list-item' || !deltaEndsWith(delta, '\n')) {
    return delta;
  }
  var indent = -1,
      parent = node.parentNode;
  while (!parent.classList.contains('ql-clipboard')) {
    if ((_parchment2.default.query(parent) || {}).blotName === 'list') {
      indent += 1;
    }
    parent = parent.parentNode;
  }
  if (indent <= 0) return delta;
  return delta.compose(new _quillDelta2.default().retain(delta.length() - 1).retain(1, { indent: indent }));
}

function matchNewline(node, delta) {
  if (!deltaEndsWith(delta, '\n')) {
    if (isLine(node) || delta.length() > 0 && node.nextSibling && isLine(node.nextSibling)) {
      delta.insert('\n');
    }
  }
  return delta;
}

function matchSpacing(node, delta) {
  if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, '\n\n')) {
    var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
    if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
      delta.insert('\n');
    }
  }
  return delta;
}

function matchStyles(node, delta) {
  var formats = {};
  var style = node.style || {};
  if (style.fontStyle && computeStyle(node).fontStyle === 'italic') {
    formats.italic = true;
  }
  if (style.fontWeight && (computeStyle(node).fontWeight.startsWith('bold') || parseInt(computeStyle(node).fontWeight) >= 700)) {
    formats.bold = true;
  }
  if (Object.keys(formats).length > 0) {
    delta = applyFormat(delta, formats);
  }
  if (parseFloat(style.textIndent || 0) > 0) {
    // Could be 0.5in
    delta = new _quillDelta2.default().insert('\t').concat(delta);
  }
  return delta;
}

function matchText(node, delta) {
  var text = node.data;
  // Word represents empty line with <o:p>&nbsp;</o:p>
  if (node.parentNode.tagName === 'O:P') {
    return delta.insert(text.trim());
  }
  if (text.trim().length === 0 && node.parentNode.classList.contains('ql-clipboard')) {
    return delta;
  }
  if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
    // eslint-disable-next-line func-style
    var replacer = function replacer(collapse, match) {
      match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;
      return match.length < 1 && collapse ? ' ' : match;
    };
    text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
    text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace
    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
      text = text.replace(/^\s+/, replacer.bind(replacer, false));
    }
    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
      text = text.replace(/\s+$/, replacer.bind(replacer, false));
    }
  }
  return delta.insert(text);
}

exports.default = Clipboard;
exports.matchAttributor = matchAttributor;
exports.matchBlot = matchBlot;
exports.matchNewline = matchNewline;
exports.matchSpacing = matchSpacing;
exports.matchText = matchText;

/***/ }),
/* 56 */
/***/ (function(module, exports, __nested_webpack_require_333274__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __nested_webpack_require_333274__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bold = function (_Inline) {
  _inherits(Bold, _Inline);

  function Bold() {
    _classCallCheck(this, Bold);

    return _possibleConstructorReturn(this, (Bold.__proto__ || Object.getPrototypeOf(Bold)).apply(this, arguments));
  }

  _createClass(Bold, [{
    key: 'optimize',
    value: function optimize(context) {
      _get(Bold.prototype.__proto__ || Object.getPrototypeOf(Bold.prototype), 'optimize', this).call(this, context);
      if (this.domNode.tagName !== this.statics.tagName[0]) {
        this.replaceWith(this.statics.blotName);
      }
    }
  }], [{
    key: 'create',
    value: function create() {
      return _get(Bold.__proto__ || Object.getPrototypeOf(Bold), 'create', this).call(this);
    }
  }, {
    key: 'formats',
    value: function formats() {
      return true;
    }
  }]);

  return Bold;
}(_inline2.default);

Bold.blotName = 'bold';
Bold.tagName = ['STRONG', 'B'];

exports.default = Bold;

/***/ }),
/* 57 */
/***/ (function(module, exports, __nested_webpack_require_336502__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addControls = exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quillDelta = __nested_webpack_require_336502__(2);

var _quillDelta2 = _interopRequireDefault(_quillDelta);

var _parchment = __nested_webpack_require_336502__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __nested_webpack_require_336502__(5);

var _quill2 = _interopRequireDefault(_quill);

var _logger = __nested_webpack_require_336502__(10);

var _logger2 = _interopRequireDefault(_logger);

var _module = __nested_webpack_require_336502__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _logger2.default)('quill:toolbar');

var Toolbar = function (_Module) {
  _inherits(Toolbar, _Module);

  function Toolbar(quill, options) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, quill, options));

    if (Array.isArray(_this.options.container)) {
      var container = document.createElement('div');
      addControls(container, _this.options.container);
      quill.container.parentNode.insertBefore(container, quill.container);
      _this.container = container;
    } else if (typeof _this.options.container === 'string') {
      _this.container = document.querySelector(_this.options.container);
    } else {
      _this.container = _this.options.container;
    }
    if (!(_this.container instanceof HTMLElement)) {
      var _ret;

      return _ret = debug.error('Container required for toolbar', _this.options), _possibleConstructorReturn(_this, _ret);
    }
    _this.container.classList.add('ql-toolbar');
    _this.controls = [];
    _this.handlers = {};
    Object.keys(_this.options.handlers).forEach(function (format) {
      _this.addHandler(format, _this.options.handlers[format]);
    });
    [].forEach.call(_this.container.querySelectorAll('button, select'), function (input) {
      _this.attach(input);
    });
    _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (type, range) {
      if (type === _quill2.default.events.SELECTION_CHANGE) {
        _this.update(range);
      }
    });
    _this.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
      var _this$quill$selection = _this.quill.selection.getRange(),
          _this$quill$selection2 = _slicedToArray(_this$quill$selection, 1),
          range = _this$quill$selection2[0]; // quill.getSelection triggers update


      _this.update(range);
    });
    return _this;
  }

  _createClass(Toolbar, [{
    key: 'addHandler',
    value: function addHandler(format, handler) {
      this.handlers[format] = handler;
    }
  }, {
    key: 'attach',
    value: function attach(input) {
      var _this2 = this;

      var format = [].find.call(input.classList, function (className) {
        return className.indexOf('ql-') === 0;
      });
      if (!format) return;
      format = format.slice('ql-'.length);
      if (input.tagName === 'BUTTON') {
        input.setAttribute('type', 'button');
      }
      if (this.handlers[format] == null) {
        if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
          debug.warn('ignoring attaching to disabled format', format, input);
          return;
        }
        if (_parchment2.default.query(format) == null) {
          debug.warn('ignoring attaching to nonexistent format', format, input);
          return;
        }
      }
      var eventName = input.tagName === 'SELECT' ? 'change' : 'click';
      input.addEventListener(eventName, function (e) {
        var value = void 0;
        if (input.tagName === 'SELECT') {
          if (input.selectedIndex < 0) return;
          var selected = input.options[input.selectedIndex];
          if (selected.hasAttribute('selected')) {
            value = false;
          } else {
            value = selected.value || false;
          }
        } else {
          if (input.classList.contains('ql-active')) {
            value = false;
          } else {
            value = input.value || !input.hasAttribute('value');
          }
          e.preventDefault();
        }
        _this2.quill.focus();

        var _quill$selection$getR = _this2.quill.selection.getRange(),
            _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1),
            range = _quill$selection$getR2[0];

        if (_this2.handlers[format] != null) {
          _this2.handlers[format].call(_this2, value);
        } else if (_parchment2.default.query(format).prototype instanceof _parchment2.default.Embed) {
          value = prompt('Enter ' + format);
          if (!value) return;
          _this2.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert(_defineProperty({}, format, value)), _quill2.default.sources.USER);
        } else {
          _this2.quill.format(format, value, _quill2.default.sources.USER);
        }
        _this2.update(range);
      });
      // TODO use weakmap
      this.controls.push([format, input]);
    }
  }, {
    key: 'update',
    value: function update(range) {
      var formats = range == null ? {} : this.quill.getFormat(range);
      this.controls.forEach(function (pair) {
        var _pair = _slicedToArray(pair, 2),
            format = _pair[0],
            input = _pair[1];

        if (input.tagName === 'SELECT') {
          var option = void 0;
          if (range == null) {
            option = null;
          } else if (formats[format] == null) {
            option = input.querySelector('option[selected]');
          } else if (!Array.isArray(formats[format])) {
            var value = formats[format];
            if (typeof value === 'string') {
              value = value.replace(/\"/g, '\\"');
            }
            option = input.querySelector('option[value="' + value + '"]');
          }
          if (option == null) {
            input.value = ''; // TODO make configurable?
            input.selectedIndex = -1;
          } else {
            option.selected = true;
          }
        } else {
          if (range == null) {
            input.classList.remove('ql-active');
          } else if (input.hasAttribute('value')) {
            // both being null should match (default values)
            // '1' should match with 1 (headers)
            var isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');
            input.classList.toggle('ql-active', isActive);
          } else {
            input.classList.toggle('ql-active', formats[format] != null);
          }
        }
      });
    }
  }]);

  return Toolbar;
}(_module2.default);

Toolbar.DEFAULTS = {};

function addButton(container, format, value) {
  var input = document.createElement('button');
  input.setAttribute('type', 'button');
  input.classList.add('ql-' + format);
  if (value != null) {
    input.value = value;
  }
  container.appendChild(input);
}

function addControls(container, groups) {
  if (!Array.isArray(groups[0])) {
    groups = [groups];
  }
  groups.forEach(function (controls) {
    var group = document.createElement('span');
    group.classList.add('ql-formats');
    controls.forEach(function (control) {
      if (typeof control === 'string') {
        addButton(group, control);
      } else {
        var format = Object.keys(control)[0];
        var value = control[format];
        if (Array.isArray(value)) {
          addSelect(group, format, value);
        } else {
          addButton(group, format, value);
        }
      }
    });
    container.appendChild(group);
  });
}

function addSelect(container, format, values) {
  var input = document.createElement('select');
  input.classList.add('ql-' + format);
  values.forEach(function (value) {
    var option = document.createElement('option');
    if (value !== false) {
      option.setAttribute('value', value);
    } else {
      option.setAttribute('selected', 'selected');
    }
    input.appendChild(option);
  });
  container.appendChild(input);
}

Toolbar.DEFAULTS = {
  container: null,
  handlers: {
    clean: function clean() {
      var _this3 = this;

      var range = this.quill.getSelection();
      if (range == null) return;
      if (range.length == 0) {
        var formats = this.quill.getFormat();
        Object.keys(formats).forEach(function (name) {
          // Clean functionality in existing apps only clean inline formats
          if (_parchment2.default.query(name, _parchment2.default.Scope.INLINE) != null) {
            _this3.quill.format(name, false);
          }
        });
      } else {
        this.quill.removeFormat(range, _quill2.default.sources.USER);
      }
    },
    direction: function direction(value) {
      var align = this.quill.getFormat()['align'];
      if (value === 'rtl' && align == null) {
        this.quill.format('align', 'right', _quill2.default.sources.USER);
      } else if (!value && align === 'right') {
        this.quill.format('align', false, _quill2.default.sources.USER);
      }
      this.quill.format('direction', value, _quill2.default.sources.USER);
    },
    indent: function indent(value) {
      var range = this.quill.getSelection();
      var formats = this.quill.getFormat(range);
      var indent = parseInt(formats.indent || 0);
      if (value === '+1' || value === '-1') {
        var modifier = value === '+1' ? 1 : -1;
        if (formats.direction === 'rtl') modifier *= -1;
        this.quill.format('indent', indent + modifier, _quill2.default.sources.USER);
      }
    },
    link: function link(value) {
      if (value === true) {
        value = prompt('Enter link URL:');
      }
      this.quill.format('link', value, _quill2.default.sources.USER);
    },
    list: function list(value) {
      var range = this.quill.getSelection();
      var formats = this.quill.getFormat(range);
      if (value === 'check') {
        if (formats['list'] === 'checked' || formats['list'] === 'unchecked') {
          this.quill.format('list', false, _quill2.default.sources.USER);
        } else {
          this.quill.format('list', 'unchecked', _quill2.default.sources.USER);
        }
      } else {
        this.quill.format('list', value, _quill2.default.sources.USER);
      }
    }
  }
};

exports.default = Toolbar;
exports.addControls = addControls;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"></polyline> <polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>";

/***/ }),
/* 59 */
/***/ (function(module, exports, __nested_webpack_require_349781__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _picker = __nested_webpack_require_349781__(28);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_Picker) {
  _inherits(ColorPicker, _Picker);

  function ColorPicker(select, label) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, select));

    _this.label.innerHTML = label;
    _this.container.classList.add('ql-color-picker');
    [].slice.call(_this.container.querySelectorAll('.ql-picker-item'), 0, 7).forEach(function (item) {
      item.classList.add('ql-primary');
    });
    return _this;
  }

  _createClass(ColorPicker, [{
    key: 'buildItem',
    value: function buildItem(option) {
      var item = _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'buildItem', this).call(this, option);
      item.style.backgroundColor = option.getAttribute('value') || '';
      return item;
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item, trigger) {
      _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype), 'selectItem', this).call(this, item, trigger);
      var colorLabel = this.label.querySelector('.ql-color-label');
      var value = item ? item.getAttribute('data-value') || '' : '';
      if (colorLabel) {
        if (colorLabel.tagName === 'line') {
          colorLabel.style.stroke = value;
        } else {
          colorLabel.style.fill = value;
        }
      }
    }
  }]);

  return ColorPicker;
}(_picker2.default);

exports.default = ColorPicker;

/***/ }),
/* 60 */
/***/ (function(module, exports, __nested_webpack_require_353592__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _picker = __nested_webpack_require_353592__(28);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconPicker = function (_Picker) {
  _inherits(IconPicker, _Picker);

  function IconPicker(select, icons) {
    _classCallCheck(this, IconPicker);

    var _this = _possibleConstructorReturn(this, (IconPicker.__proto__ || Object.getPrototypeOf(IconPicker)).call(this, select));

    _this.container.classList.add('ql-icon-picker');
    [].forEach.call(_this.container.querySelectorAll('.ql-picker-item'), function (item) {
      item.innerHTML = icons[item.getAttribute('data-value') || ''];
    });
    _this.defaultItem = _this.container.querySelector('.ql-selected');
    _this.selectItem(_this.defaultItem);
    return _this;
  }

  _createClass(IconPicker, [{
    key: 'selectItem',
    value: function selectItem(item, trigger) {
      _get(IconPicker.prototype.__proto__ || Object.getPrototypeOf(IconPicker.prototype), 'selectItem', this).call(this, item, trigger);
      item = item || this.defaultItem;
      this.label.innerHTML = item.innerHTML;
    }
  }]);

  return IconPicker;
}(_picker2.default);

exports.default = IconPicker;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tooltip = function () {
  function Tooltip(quill, boundsContainer) {
    var _this = this;

    _classCallCheck(this, Tooltip);

    this.quill = quill;
    this.boundsContainer = boundsContainer || document.body;
    this.root = quill.addContainer('ql-tooltip');
    this.root.innerHTML = this.constructor.TEMPLATE;
    if (this.quill.root === this.quill.scrollingContainer) {
      this.quill.root.addEventListener('scroll', function () {
        _this.root.style.marginTop = -1 * _this.quill.root.scrollTop + 'px';
      });
    }
    this.hide();
  }

  _createClass(Tooltip, [{
    key: 'hide',
    value: function hide() {
      this.root.classList.add('ql-hidden');
    }
  }, {
    key: 'position',
    value: function position(reference) {
      var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
      // root.scrollTop should be 0 if scrollContainer !== root
      var top = reference.bottom + this.quill.root.scrollTop;
      this.root.style.left = left + 'px';
      this.root.style.top = top + 'px';
      this.root.classList.remove('ql-flip');
      var containerBounds = this.boundsContainer.getBoundingClientRect();
      var rootBounds = this.root.getBoundingClientRect();
      var shift = 0;
      if (rootBounds.right > containerBounds.right) {
        shift = containerBounds.right - rootBounds.right;
        this.root.style.left = left + shift + 'px';
      }
      if (rootBounds.left < containerBounds.left) {
        shift = containerBounds.left - rootBounds.left;
        this.root.style.left = left + shift + 'px';
      }
      if (rootBounds.bottom > containerBounds.bottom) {
        var height = rootBounds.bottom - rootBounds.top;
        var verticalShift = reference.bottom - reference.top + height;
        this.root.style.top = top - verticalShift + 'px';
        this.root.classList.add('ql-flip');
      }
      return shift;
    }
  }, {
    key: 'show',
    value: function show() {
      this.root.classList.remove('ql-editing');
      this.root.classList.remove('ql-hidden');
    }
  }]);

  return Tooltip;
}();

exports.default = Tooltip;

/***/ }),
/* 62 */
/***/ (function(module, exports, __nested_webpack_require_359932__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend = __nested_webpack_require_359932__(3);

var _extend2 = _interopRequireDefault(_extend);

var _emitter = __nested_webpack_require_359932__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _base = __nested_webpack_require_359932__(43);

var _base2 = _interopRequireDefault(_base);

var _link = __nested_webpack_require_359932__(27);

var _link2 = _interopRequireDefault(_link);

var _selection = __nested_webpack_require_359932__(15);

var _icons = __nested_webpack_require_359932__(41);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLBAR_CONFIG = [[{ header: ['1', '2', '3', false] }], ['bold', 'italic', 'underline', 'link'], [{ list: 'ordered' }, { list: 'bullet' }], ['clean']];

var SnowTheme = function (_BaseTheme) {
  _inherits(SnowTheme, _BaseTheme);

  function SnowTheme(quill, options) {
    _classCallCheck(this, SnowTheme);

    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    var _this = _possibleConstructorReturn(this, (SnowTheme.__proto__ || Object.getPrototypeOf(SnowTheme)).call(this, quill, options));

    _this.quill.container.classList.add('ql-snow');
    return _this;
  }

  _createClass(SnowTheme, [{
    key: 'extendToolbar',
    value: function extendToolbar(toolbar) {
      toolbar.container.classList.add('ql-snow');
      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
      this.tooltip = new SnowTooltip(this.quill, this.options.bounds);
      if (toolbar.container.querySelector('.ql-link')) {
        this.quill.keyboard.addBinding({ key: 'K', shortKey: true }, function (range, context) {
          toolbar.handlers['link'].call(toolbar, !context.format.link);
        });
      }
    }
  }]);

  return SnowTheme;
}(_base2.default);

SnowTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link: function link(value) {
          if (value) {
            var range = this.quill.getSelection();
            if (range == null || range.length == 0) return;
            var preview = this.quill.getText(range);
            if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
              preview = 'mailto:' + preview;
            }
            var tooltip = this.quill.theme.tooltip;
            tooltip.edit('link', preview);
          } else {
            this.quill.format('link', false);
          }
        }
      }
    }
  }
});

var SnowTooltip = function (_BaseTooltip) {
  _inherits(SnowTooltip, _BaseTooltip);

  function SnowTooltip(quill, bounds) {
    _classCallCheck(this, SnowTooltip);

    var _this2 = _possibleConstructorReturn(this, (SnowTooltip.__proto__ || Object.getPrototypeOf(SnowTooltip)).call(this, quill, bounds));

    _this2.preview = _this2.root.querySelector('a.ql-preview');
    return _this2;
  }

  _createClass(SnowTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this3 = this;

      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'listen', this).call(this);
      this.root.querySelector('a.ql-action').addEventListener('click', function (event) {
        if (_this3.root.classList.contains('ql-editing')) {
          _this3.save();
        } else {
          _this3.edit('link', _this3.preview.textContent);
        }
        event.preventDefault();
      });
      this.root.querySelector('a.ql-remove').addEventListener('click', function (event) {
        if (_this3.linkRange != null) {
          var range = _this3.linkRange;
          _this3.restoreFocus();
          _this3.quill.formatText(range, 'link', false, _emitter2.default.sources.USER);
          delete _this3.linkRange;
        }
        event.preventDefault();
        _this3.hide();
      });
      this.quill.on(_emitter2.default.events.SELECTION_CHANGE, function (range, oldRange, source) {
        if (range == null) return;
        if (range.length === 0 && source === _emitter2.default.sources.USER) {
          var _quill$scroll$descend = _this3.quill.scroll.descendant(_link2.default, range.index),
              _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2),
              link = _quill$scroll$descend2[0],
              offset = _quill$scroll$descend2[1];

          if (link != null) {
            _this3.linkRange = new _selection.Range(range.index - offset, link.length());
            var preview = _link2.default.formats(link.domNode);
            _this3.preview.textContent = preview;
            _this3.preview.setAttribute('href', preview);
            _this3.show();
            _this3.position(_this3.quill.getBounds(_this3.linkRange));
            return;
          }
        } else {
          delete _this3.linkRange;
        }
        _this3.hide();
      });
    }
  }, {
    key: 'show',
    value: function show() {
      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype), 'show', this).call(this);
      this.root.removeAttribute('data-mode');
    }
  }]);

  return SnowTooltip;
}(_base.BaseTooltip);

SnowTooltip.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('');

exports.default = SnowTheme;

/***/ }),
/* 63 */
/***/ (function(module, exports, __nested_webpack_require_368316__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __nested_webpack_require_368316__(29);

var _core2 = _interopRequireDefault(_core);

var _align = __nested_webpack_require_368316__(36);

var _direction = __nested_webpack_require_368316__(38);

var _indent = __nested_webpack_require_368316__(64);

var _blockquote = __nested_webpack_require_368316__(65);

var _blockquote2 = _interopRequireDefault(_blockquote);

var _header = __nested_webpack_require_368316__(66);

var _header2 = _interopRequireDefault(_header);

var _list = __nested_webpack_require_368316__(67);

var _list2 = _interopRequireDefault(_list);

var _background = __nested_webpack_require_368316__(37);

var _color = __nested_webpack_require_368316__(26);

var _font = __nested_webpack_require_368316__(39);

var _size = __nested_webpack_require_368316__(40);

var _bold = __nested_webpack_require_368316__(56);

var _bold2 = _interopRequireDefault(_bold);

var _italic = __nested_webpack_require_368316__(68);

var _italic2 = _interopRequireDefault(_italic);

var _link = __nested_webpack_require_368316__(27);

var _link2 = _interopRequireDefault(_link);

var _script = __nested_webpack_require_368316__(69);

var _script2 = _interopRequireDefault(_script);

var _strike = __nested_webpack_require_368316__(70);

var _strike2 = _interopRequireDefault(_strike);

var _underline = __nested_webpack_require_368316__(71);

var _underline2 = _interopRequireDefault(_underline);

var _image = __nested_webpack_require_368316__(72);

var _image2 = _interopRequireDefault(_image);

var _video = __nested_webpack_require_368316__(73);

var _video2 = _interopRequireDefault(_video);

var _code = __nested_webpack_require_368316__(13);

var _code2 = _interopRequireDefault(_code);

var _formula = __nested_webpack_require_368316__(74);

var _formula2 = _interopRequireDefault(_formula);

var _syntax = __nested_webpack_require_368316__(75);

var _syntax2 = _interopRequireDefault(_syntax);

var _toolbar = __nested_webpack_require_368316__(57);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _icons = __nested_webpack_require_368316__(41);

var _icons2 = _interopRequireDefault(_icons);

var _picker = __nested_webpack_require_368316__(28);

var _picker2 = _interopRequireDefault(_picker);

var _colorPicker = __nested_webpack_require_368316__(59);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _iconPicker = __nested_webpack_require_368316__(60);

var _iconPicker2 = _interopRequireDefault(_iconPicker);

var _tooltip = __nested_webpack_require_368316__(61);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _bubble = __nested_webpack_require_368316__(108);

var _bubble2 = _interopRequireDefault(_bubble);

var _snow = __nested_webpack_require_368316__(62);

var _snow2 = _interopRequireDefault(_snow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core2.default.register({
  'attributors/attribute/direction': _direction.DirectionAttribute,

  'attributors/class/align': _align.AlignClass,
  'attributors/class/background': _background.BackgroundClass,
  'attributors/class/color': _color.ColorClass,
  'attributors/class/direction': _direction.DirectionClass,
  'attributors/class/font': _font.FontClass,
  'attributors/class/size': _size.SizeClass,

  'attributors/style/align': _align.AlignStyle,
  'attributors/style/background': _background.BackgroundStyle,
  'attributors/style/color': _color.ColorStyle,
  'attributors/style/direction': _direction.DirectionStyle,
  'attributors/style/font': _font.FontStyle,
  'attributors/style/size': _size.SizeStyle
}, true);

_core2.default.register({
  'formats/align': _align.AlignClass,
  'formats/direction': _direction.DirectionClass,
  'formats/indent': _indent.IndentClass,

  'formats/background': _background.BackgroundStyle,
  'formats/color': _color.ColorStyle,
  'formats/font': _font.FontClass,
  'formats/size': _size.SizeClass,

  'formats/blockquote': _blockquote2.default,
  'formats/code-block': _code2.default,
  'formats/header': _header2.default,
  'formats/list': _list2.default,

  'formats/bold': _bold2.default,
  'formats/code': _code.Code,
  'formats/italic': _italic2.default,
  'formats/link': _link2.default,
  'formats/script': _script2.default,
  'formats/strike': _strike2.default,
  'formats/underline': _underline2.default,

  'formats/image': _image2.default,
  'formats/video': _video2.default,

  'formats/list/item': _list.ListItem,

  'modules/formula': _formula2.default,
  'modules/syntax': _syntax2.default,
  'modules/toolbar': _toolbar2.default,

  'themes/bubble': _bubble2.default,
  'themes/snow': _snow2.default,

  'ui/icons': _icons2.default,
  'ui/picker': _picker2.default,
  'ui/icon-picker': _iconPicker2.default,
  'ui/color-picker': _colorPicker2.default,
  'ui/tooltip': _tooltip2.default
}, true);

exports.default = _core2.default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __nested_webpack_require_372903__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndentClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __nested_webpack_require_372903__(0);

var _parchment2 = _interopRequireDefault(_parchment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IdentAttributor = function (_Parchment$Attributor) {
  _inherits(IdentAttributor, _Parchment$Attributor);

  function IdentAttributor() {
    _classCallCheck(this, IdentAttributor);

    return _possibleConstructorReturn(this, (IdentAttributor.__proto__ || Object.getPrototypeOf(IdentAttributor)).apply(this, arguments));
  }

  _createClass(IdentAttributor, [{
    key: 'add',
    value: function add(node, value) {
      if (value === '+1' || value === '-1') {
        var indent = this.value(node) || 0;
        value = value === '+1' ? indent + 1 : indent - 1;
      }
      if (value === 0) {
        this.remove(node);
        return true;
      } else {
        return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'add', this).call(this, node, value);
      }
    }
  }, {
    key: 'canAdd',
    value: function canAdd(node, value) {
      return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, value) || _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'canAdd', this).call(this, node, parseInt(value));
    }
  }, {
    key: 'value',
    value: function value(node) {
      return parseInt(_get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype), 'value', this).call(this, node)) || undefined; // Don't return NaN
    }
  }]);

  return IdentAttributor;
}(_parchment2.default.Attributor.Class);

var IndentClass = new IdentAttributor('indent', 'ql-indent', {
  scope: _parchment2.default.Scope.BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});

exports.IndentClass = IndentClass;

/***/ }),
/* 65 */
/***/ (function(module, exports, __nested_webpack_require_376943__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _block = __nested_webpack_require_376943__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blockquote = function (_Block) {
  _inherits(Blockquote, _Block);

  function Blockquote() {
    _classCallCheck(this, Blockquote);

    return _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(this, arguments));
  }

  return Blockquote;
}(_block2.default);

Blockquote.blotName = 'blockquote';
Blockquote.tagName = 'blockquote';

exports.default = Blockquote;

/***/ }),
/* 66 */
/***/ (function(module, exports, __nested_webpack_require_378592__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _block = __nested_webpack_require_378592__(4);

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Block) {
  _inherits(Header, _Block);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, null, [{
    key: 'formats',
    value: function formats(domNode) {
      return this.tagName.indexOf(domNode.tagName) + 1;
    }
  }]);

  return Header;
}(_block2.default);

Header.blotName = 'header';
Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

exports.default = Header;

/***/ }),
/* 67 */
/***/ (function(module, exports, __nested_webpack_require_380948__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ListItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __nested_webpack_require_380948__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _block = __nested_webpack_require_380948__(4);

var _block2 = _interopRequireDefault(_block);

var _container = __nested_webpack_require_380948__(25);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_Block) {
  _inherits(ListItem, _Block);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'format',
    value: function format(name, value) {
      if (name === List.blotName && !value) {
        this.replaceWith(_parchment2.default.create(this.statics.scope));
      } else {
        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'format', this).call(this, name, value);
      }
    }
  }, {
    key: 'remove',
    value: function remove() {
      if (this.prev == null && this.next == null) {
        this.parent.remove();
      } else {
        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'remove', this).call(this);
      }
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(name, value) {
      this.parent.isolate(this.offset(this.parent), this.length());
      if (name === this.parent.statics.blotName) {
        this.parent.replaceWith(name, value);
        return this;
      } else {
        this.parent.unwrap();
        return _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'replaceWith', this).call(this, name, value);
      }
    }
  }], [{
    key: 'formats',
    value: function formats(domNode) {
      return domNode.tagName === this.tagName ? undefined : _get(ListItem.__proto__ || Object.getPrototypeOf(ListItem), 'formats', this).call(this, domNode);
    }
  }]);

  return ListItem;
}(_block2.default);

ListItem.blotName = 'list-item';
ListItem.tagName = 'LI';

var List = function (_Container) {
  _inherits(List, _Container);

  _createClass(List, null, [{
    key: 'create',
    value: function create(value) {
      var tagName = value === 'ordered' ? 'OL' : 'UL';
      var node = _get(List.__proto__ || Object.getPrototypeOf(List), 'create', this).call(this, tagName);
      if (value === 'checked' || value === 'unchecked') {
        node.setAttribute('data-checked', value === 'checked');
      }
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      if (domNode.tagName === 'OL') return 'ordered';
      if (domNode.tagName === 'UL') {
        if (domNode.hasAttribute('data-checked')) {
          return domNode.getAttribute('data-checked') === 'true' ? 'checked' : 'unchecked';
        } else {
          return 'bullet';
        }
      }
      return undefined;
    }
  }]);

  function List(domNode) {
    _classCallCheck(this, List);

    var _this2 = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, domNode));

    var listEventHandler = function listEventHandler(e) {
      if (e.target.parentNode !== domNode) return;
      var format = _this2.statics.formats(domNode);
      var blot = _parchment2.default.find(e.target);
      if (format === 'checked') {
        blot.format('list', 'unchecked');
      } else if (format === 'unchecked') {
        blot.format('list', 'checked');
      }
    };

    domNode.addEventListener('touchstart', listEventHandler);
    domNode.addEventListener('mousedown', listEventHandler);
    return _this2;
  }

  _createClass(List, [{
    key: 'format',
    value: function format(name, value) {
      if (this.children.length > 0) {
        this.children.tail.format(name, value);
      }
    }
  }, {
    key: 'formats',
    value: function formats() {
      // We don't inherit from FormatBlot
      return _defineProperty({}, this.statics.blotName, this.statics.formats(this.domNode));
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(blot, ref) {
      if (blot instanceof ListItem) {
        _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'insertBefore', this).call(this, blot, ref);
      } else {
        var index = ref == null ? this.length() : ref.offset(this);
        var after = this.split(index);
        after.parent.insertBefore(blot, after);
      }
    }
  }, {
    key: 'optimize',
    value: function optimize(context) {
      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'optimize', this).call(this, context);
      var next = this.next;
      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName && next.domNode.getAttribute('data-checked') === this.domNode.getAttribute('data-checked')) {
        next.moveChildren(this);
        next.remove();
      }
    }
  }, {
    key: 'replace',
    value: function replace(target) {
      if (target.statics.blotName !== this.statics.blotName) {
        var item = _parchment2.default.create(this.statics.defaultChild);
        target.moveChildren(item);
        this.appendChild(item);
      }
      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype), 'replace', this).call(this, target);
    }
  }]);

  return List;
}(_container2.default);

List.blotName = 'list';
List.scope = _parchment2.default.Scope.BLOCK_BLOT;
List.tagName = ['OL', 'UL'];
List.defaultChild = 'list-item';
List.allowedChildren = [ListItem];

exports.ListItem = ListItem;
exports.default = List;

/***/ }),
/* 68 */
/***/ (function(module, exports, __nested_webpack_require_389000__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bold = __nested_webpack_require_389000__(56);

var _bold2 = _interopRequireDefault(_bold);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Italic = function (_Bold) {
  _inherits(Italic, _Bold);

  function Italic() {
    _classCallCheck(this, Italic);

    return _possibleConstructorReturn(this, (Italic.__proto__ || Object.getPrototypeOf(Italic)).apply(this, arguments));
  }

  return Italic;
}(_bold2.default);

Italic.blotName = 'italic';
Italic.tagName = ['EM', 'I'];

exports.default = Italic;

/***/ }),
/* 69 */
/***/ (function(module, exports, __nested_webpack_require_390599__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inline = __nested_webpack_require_390599__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Script = function (_Inline) {
  _inherits(Script, _Inline);

  function Script() {
    _classCallCheck(this, Script);

    return _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).apply(this, arguments));
  }

  _createClass(Script, null, [{
    key: 'create',
    value: function create(value) {
      if (value === 'super') {
        return document.createElement('sup');
      } else if (value === 'sub') {
        return document.createElement('sub');
      } else {
        return _get(Script.__proto__ || Object.getPrototypeOf(Script), 'create', this).call(this, value);
      }
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      if (domNode.tagName === 'SUB') return 'sub';
      if (domNode.tagName === 'SUP') return 'super';
      return undefined;
    }
  }]);

  return Script;
}(_inline2.default);

Script.blotName = 'script';
Script.tagName = ['SUB', 'SUP'];

exports.default = Script;

/***/ }),
/* 70 */
/***/ (function(module, exports, __nested_webpack_require_393860__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inline = __nested_webpack_require_393860__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Strike = function (_Inline) {
  _inherits(Strike, _Inline);

  function Strike() {
    _classCallCheck(this, Strike);

    return _possibleConstructorReturn(this, (Strike.__proto__ || Object.getPrototypeOf(Strike)).apply(this, arguments));
  }

  return Strike;
}(_inline2.default);

Strike.blotName = 'strike';
Strike.tagName = 'S';

exports.default = Strike;

/***/ }),
/* 71 */
/***/ (function(module, exports, __nested_webpack_require_395462__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inline = __nested_webpack_require_395462__(6);

var _inline2 = _interopRequireDefault(_inline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Underline = function (_Inline) {
  _inherits(Underline, _Inline);

  function Underline() {
    _classCallCheck(this, Underline);

    return _possibleConstructorReturn(this, (Underline.__proto__ || Object.getPrototypeOf(Underline)).apply(this, arguments));
  }

  return Underline;
}(_inline2.default);

Underline.blotName = 'underline';
Underline.tagName = 'U';

exports.default = Underline;

/***/ }),
/* 72 */
/***/ (function(module, exports, __nested_webpack_require_397097__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __nested_webpack_require_397097__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _link = __nested_webpack_require_397097__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ATTRIBUTES = ['alt', 'height', 'width'];

var Image = function (_Parchment$Embed) {
  _inherits(Image, _Parchment$Embed);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'format',
    value: function format(name, value) {
      if (ATTRIBUTES.indexOf(name) > -1) {
        if (value) {
          this.domNode.setAttribute(name, value);
        } else {
          this.domNode.removeAttribute(name);
        }
      } else {
        _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype), 'format', this).call(this, name, value);
      }
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Image.__proto__ || Object.getPrototypeOf(Image), 'create', this).call(this, value);
      if (typeof value === 'string') {
        node.setAttribute('src', this.sanitize(value));
      }
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return ATTRIBUTES.reduce(function (formats, attribute) {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute);
        }
        return formats;
      }, {});
    }
  }, {
    key: 'match',
    value: function match(url) {
      return (/\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url)
      );
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return (0, _link.sanitize)(url, ['http', 'https', 'data']) ? url : '//:0';
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('src');
    }
  }]);

  return Image;
}(_parchment2.default.Embed);

Image.blotName = 'image';
Image.tagName = 'IMG';

exports.default = Image;

/***/ }),
/* 73 */
/***/ (function(module, exports, __nested_webpack_require_401311__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _block = __nested_webpack_require_401311__(4);

var _link = __nested_webpack_require_401311__(27);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ATTRIBUTES = ['height', 'width'];

var Video = function (_BlockEmbed) {
  _inherits(Video, _BlockEmbed);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  _createClass(Video, [{
    key: 'format',
    value: function format(name, value) {
      if (ATTRIBUTES.indexOf(name) > -1) {
        if (value) {
          this.domNode.setAttribute(name, value);
        } else {
          this.domNode.removeAttribute(name);
        }
      } else {
        _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype), 'format', this).call(this, name, value);
      }
    }
  }], [{
    key: 'create',
    value: function create(value) {
      var node = _get(Video.__proto__ || Object.getPrototypeOf(Video), 'create', this).call(this, value);
      node.setAttribute('frameborder', '0');
      node.setAttribute('allowfullscreen', true);
      node.setAttribute('src', this.sanitize(value));
      return node;
    }
  }, {
    key: 'formats',
    value: function formats(domNode) {
      return ATTRIBUTES.reduce(function (formats, attribute) {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute);
        }
        return formats;
      }, {});
    }
  }, {
    key: 'sanitize',
    value: function sanitize(url) {
      return _link2.default.sanitize(url);
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('src');
    }
  }]);

  return Video;
}(_block.BlockEmbed);

Video.blotName = 'video';
Video.className = 'ql-video';
Video.tagName = 'IFRAME';

exports.default = Video;

/***/ }),
/* 74 */
/***/ (function(module, exports, __nested_webpack_require_405371__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormulaBlot = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _embed = __nested_webpack_require_405371__(35);

var _embed2 = _interopRequireDefault(_embed);

var _quill = __nested_webpack_require_405371__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __nested_webpack_require_405371__(9);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormulaBlot = function (_Embed) {
  _inherits(FormulaBlot, _Embed);

  function FormulaBlot() {
    _classCallCheck(this, FormulaBlot);

    return _possibleConstructorReturn(this, (FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot)).apply(this, arguments));
  }

  _createClass(FormulaBlot, null, [{
    key: 'create',
    value: function create(value) {
      var node = _get(FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot), 'create', this).call(this, value);
      if (typeof value === 'string') {
        window.katex.render(value, node, {
          throwOnError: false,
          errorColor: '#f00'
        });
        node.setAttribute('data-value', value);
      }
      return node;
    }
  }, {
    key: 'value',
    value: function value(domNode) {
      return domNode.getAttribute('data-value');
    }
  }]);

  return FormulaBlot;
}(_embed2.default);

FormulaBlot.blotName = 'formula';
FormulaBlot.className = 'ql-formula';
FormulaBlot.tagName = 'SPAN';

var Formula = function (_Module) {
  _inherits(Formula, _Module);

  _createClass(Formula, null, [{
    key: 'register',
    value: function register() {
      _quill2.default.register(FormulaBlot, true);
    }
  }]);

  function Formula() {
    _classCallCheck(this, Formula);

    var _this2 = _possibleConstructorReturn(this, (Formula.__proto__ || Object.getPrototypeOf(Formula)).call(this));

    if (window.katex == null) {
      throw new Error('Formula module requires KaTeX.');
    }
    return _this2;
  }

  return Formula;
}(_module2.default);

exports.FormulaBlot = FormulaBlot;
exports.default = Formula;

/***/ }),
/* 75 */
/***/ (function(module, exports, __nested_webpack_require_409500__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CodeToken = exports.CodeBlock = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _parchment = __nested_webpack_require_409500__(0);

var _parchment2 = _interopRequireDefault(_parchment);

var _quill = __nested_webpack_require_409500__(5);

var _quill2 = _interopRequireDefault(_quill);

var _module = __nested_webpack_require_409500__(9);

var _module2 = _interopRequireDefault(_module);

var _code = __nested_webpack_require_409500__(13);

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SyntaxCodeBlock = function (_CodeBlock) {
  _inherits(SyntaxCodeBlock, _CodeBlock);

  function SyntaxCodeBlock() {
    _classCallCheck(this, SyntaxCodeBlock);

    return _possibleConstructorReturn(this, (SyntaxCodeBlock.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock)).apply(this, arguments));
  }

  _createClass(SyntaxCodeBlock, [{
    key: 'replaceWith',
    value: function replaceWith(block) {
      this.domNode.textContent = this.domNode.textContent;
      this.attach();
      _get(SyntaxCodeBlock.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock.prototype), 'replaceWith', this).call(this, block);
    }
  }, {
    key: 'highlight',
    value: function highlight(_highlight) {
      var text = this.domNode.textContent;
      if (this.cachedText !== text) {
        if (text.trim().length > 0 || this.cachedText == null) {
          this.domNode.innerHTML = _highlight(text);
          this.domNode.normalize();
          this.attach();
        }
        this.cachedText = text;
      }
    }
  }]);

  return SyntaxCodeBlock;
}(_code2.default);

SyntaxCodeBlock.className = 'ql-syntax';

var CodeToken = new _parchment2.default.Attributor.Class('token', 'hljs', {
  scope: _parchment2.default.Scope.INLINE
});

var Syntax = function (_Module) {
  _inherits(Syntax, _Module);

  _createClass(Syntax, null, [{
    key: 'register',
    value: function register() {
      _quill2.default.register(CodeToken, true);
      _quill2.default.register(SyntaxCodeBlock, true);
    }
  }]);

  function Syntax(quill, options) {
    _classCallCheck(this, Syntax);

    var _this2 = _possibleConstructorReturn(this, (Syntax.__proto__ || Object.getPrototypeOf(Syntax)).call(this, quill, options));

    if (typeof _this2.options.highlight !== 'function') {
      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
    }
    var timer = null;
    _this2.quill.on(_quill2.default.events.SCROLL_OPTIMIZE, function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        _this2.highlight();
        timer = null;
      }, _this2.options.interval);
    });
    _this2.highlight();
    return _this2;
  }

  _createClass(Syntax, [{
    key: 'highlight',
    value: function highlight() {
      var _this3 = this;

      if (this.quill.selection.composing) return;
      this.quill.update(_quill2.default.sources.USER);
      var range = this.quill.getSelection();
      this.quill.scroll.descendants(SyntaxCodeBlock).forEach(function (code) {
        code.highlight(_this3.options.highlight);
      });
      this.quill.update(_quill2.default.sources.SILENT);
      if (range != null) {
        this.quill.setSelection(range, _quill2.default.sources.SILENT);
      }
    }
  }]);

  return Syntax;
}(_module2.default);

Syntax.DEFAULTS = {
  highlight: function () {
    if (window.hljs == null) return null;
    return function (text) {
      var result = window.hljs.highlightAuto(text);
      return result.value;
    };
  }(),
  interval: 1000
};

exports.CodeBlock = SyntaxCodeBlock;
exports.CodeToken = CodeToken;
exports.default = Syntax;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=4 y=5></rect> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=11 y=5></rect> <path class=\"ql-even ql-fill ql-stroke\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\"ql-even ql-fill ql-stroke\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"></polygon> <line class=\"ql-stroke ql-fill\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>";

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"></polygon> <line class=\"ql-stroke ql-fill\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>";

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform=\"translate(24 18) rotate(-180)\"/> </svg>";

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>";

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>";

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 18 18\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>";

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg>";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"></polyline> </svg>";

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"5 7 5 11 3 9 5 7\"></polyline> </svg>";

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\"ql-even ql-stroke\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\"ql-even ql-stroke\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\"ql-stroke ql-thin\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\"ql-stroke ql-thin\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\"ql-stroke ql-thin\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\"3 4 4 5 6 3\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\"3 14 4 15 6 13\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"3 9 4 10 6 8\"></polyline> </svg>";

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>";

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>";

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>";

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=ql-stroke points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=ql-stroke points=\"7 7 9 5 11 7 7 7\"></polygon> </svg>";

/***/ }),
/* 108 */
/***/ (function(module, exports, __nested_webpack_require_432266__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BubbleTooltip = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extend = __nested_webpack_require_432266__(3);

var _extend2 = _interopRequireDefault(_extend);

var _emitter = __nested_webpack_require_432266__(8);

var _emitter2 = _interopRequireDefault(_emitter);

var _base = __nested_webpack_require_432266__(43);

var _base2 = _interopRequireDefault(_base);

var _selection = __nested_webpack_require_432266__(15);

var _icons = __nested_webpack_require_432266__(41);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{ header: 1 }, { header: 2 }, 'blockquote']];

var BubbleTheme = function (_BaseTheme) {
  _inherits(BubbleTheme, _BaseTheme);

  function BubbleTheme(quill, options) {
    _classCallCheck(this, BubbleTheme);

    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
      options.modules.toolbar.container = TOOLBAR_CONFIG;
    }

    var _this = _possibleConstructorReturn(this, (BubbleTheme.__proto__ || Object.getPrototypeOf(BubbleTheme)).call(this, quill, options));

    _this.quill.container.classList.add('ql-bubble');
    return _this;
  }

  _createClass(BubbleTheme, [{
    key: 'extendToolbar',
    value: function extendToolbar(toolbar) {
      this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);
      this.tooltip.root.appendChild(toolbar.container);
      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')), _icons2.default);
      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')), _icons2.default);
    }
  }]);

  return BubbleTheme;
}(_base2.default);

BubbleTheme.DEFAULTS = (0, _extend2.default)(true, {}, _base2.default.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link: function link(value) {
          if (!value) {
            this.quill.format('link', false);
          } else {
            this.quill.theme.tooltip.edit();
          }
        }
      }
    }
  }
});

var BubbleTooltip = function (_BaseTooltip) {
  _inherits(BubbleTooltip, _BaseTooltip);

  function BubbleTooltip(quill, bounds) {
    _classCallCheck(this, BubbleTooltip);

    var _this2 = _possibleConstructorReturn(this, (BubbleTooltip.__proto__ || Object.getPrototypeOf(BubbleTooltip)).call(this, quill, bounds));

    _this2.quill.on(_emitter2.default.events.EDITOR_CHANGE, function (type, range, oldRange, source) {
      if (type !== _emitter2.default.events.SELECTION_CHANGE) return;
      if (range != null && range.length > 0 && source === _emitter2.default.sources.USER) {
        _this2.show();
        // Lock our width so we will expand beyond our offsetParent boundaries
        _this2.root.style.left = '0px';
        _this2.root.style.width = '';
        _this2.root.style.width = _this2.root.offsetWidth + 'px';
        var lines = _this2.quill.getLines(range.index, range.length);
        if (lines.length === 1) {
          _this2.position(_this2.quill.getBounds(range));
        } else {
          var lastLine = lines[lines.length - 1];
          var index = _this2.quill.getIndex(lastLine);
          var length = Math.min(lastLine.length() - 1, range.index + range.length - index);
          var _bounds = _this2.quill.getBounds(new _selection.Range(index, length));
          _this2.position(_bounds);
        }
      } else if (document.activeElement !== _this2.textbox && _this2.quill.hasFocus()) {
        _this2.hide();
      }
    });
    return _this2;
  }

  _createClass(BubbleTooltip, [{
    key: 'listen',
    value: function listen() {
      var _this3 = this;

      _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'listen', this).call(this);
      this.root.querySelector('.ql-close').addEventListener('click', function () {
        _this3.root.classList.remove('ql-editing');
      });
      this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZE, function () {
        // Let selection be restored by toolbar handlers before repositioning
        setTimeout(function () {
          if (_this3.root.classList.contains('ql-hidden')) return;
          var range = _this3.quill.getSelection();
          if (range != null) {
            _this3.position(_this3.quill.getBounds(range));
          }
        }, 1);
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.show();
    }
  }, {
    key: 'position',
    value: function position(reference) {
      var shift = _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype), 'position', this).call(this, reference);
      var arrow = this.root.querySelector('.ql-tooltip-arrow');
      arrow.style.marginLeft = '';
      if (shift === 0) return shift;
      arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + 'px';
    }
  }]);

  return BubbleTooltip;
}(_base.BaseTooltip);

BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', '</div>'].join('');

exports.BubbleTooltip = BubbleTooltip;
exports.default = BubbleTheme;

/***/ }),
/* 109 */
/***/ (function(module, exports, __nested_webpack_require_439588__) {

module.exports = __nested_webpack_require_439588__(63);


/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "./resources/js/admin/components/buttons/BackButton.vue":
/*!**************************************************************!*\
  !*** ./resources/js/admin/components/buttons/BackButton.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BackButton_vue_vue_type_template_id_3b4fca32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackButton.vue?vue&type=template&id=3b4fca32& */ "./resources/js/admin/components/buttons/BackButton.vue?vue&type=template&id=3b4fca32&");
/* harmony import */ var _BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackButton.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/buttons/BackButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackButton_vue_vue_type_template_id_3b4fca32___WEBPACK_IMPORTED_MODULE_0__.render,
  _BackButton_vue_vue_type_template_id_3b4fca32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/buttons/BackButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/buttons/FormButtons.vue":
/*!***************************************************************!*\
  !*** ./resources/js/admin/components/buttons/FormButtons.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormButtons_vue_vue_type_template_id_06170d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormButtons.vue?vue&type=template&id=06170d98& */ "./resources/js/admin/components/buttons/FormButtons.vue?vue&type=template&id=06170d98&");
/* harmony import */ var _FormButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormButtons.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/buttons/FormButtons.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormButtons_vue_vue_type_template_id_06170d98___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormButtons_vue_vue_type_template_id_06170d98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/buttons/FormButtons.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/form/DropdownList.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/components/form/DropdownList.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DropdownList_vue_vue_type_template_id_6c5ef25f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownList.vue?vue&type=template&id=6c5ef25f& */ "./resources/js/admin/components/form/DropdownList.vue?vue&type=template&id=6c5ef25f&");
/* harmony import */ var _DropdownList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownList.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/form/DropdownList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropdownList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropdownList_vue_vue_type_template_id_6c5ef25f___WEBPACK_IMPORTED_MODULE_0__.render,
  _DropdownList_vue_vue_type_template_id_6c5ef25f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/form/DropdownList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/layout/FormLayout.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/components/layout/FormLayout.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormLayout_vue_vue_type_template_id_25c09338___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLayout.vue?vue&type=template&id=25c09338& */ "./resources/js/admin/components/layout/FormLayout.vue?vue&type=template&id=25c09338&");
/* harmony import */ var _FormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLayout.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/layout/FormLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLayout_vue_vue_type_template_id_25c09338___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormLayout_vue_vue_type_template_id_25c09338___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/layout/FormLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/seasons/Set.vue":
/*!**************************************************!*\
  !*** ./resources/js/admin/pages/seasons/Set.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Set_vue_vue_type_template_id_d538adec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Set.vue?vue&type=template&id=d538adec& */ "./resources/js/admin/pages/seasons/Set.vue?vue&type=template&id=d538adec&");
/* harmony import */ var _Set_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Set.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/seasons/Set.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Set_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Set_vue_vue_type_template_id_d538adec___WEBPACK_IMPORTED_MODULE_0__.render,
  _Set_vue_vue_type_template_id_d538adec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/seasons/Set.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/buttons/BackButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/admin/components/buttons/BackButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/BackButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/buttons/FormButtons.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/admin/components/buttons/FormButtons.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormButtons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/FormButtons.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/form/DropdownList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/components/form/DropdownList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/form/DropdownList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/layout/FormLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/components/layout/FormLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/FormLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/seasons/Set.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/pages/seasons/Set.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Set_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Set.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/seasons/Set.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Set_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/buttons/BackButton.vue?vue&type=template&id=3b4fca32&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/components/buttons/BackButton.vue?vue&type=template&id=3b4fca32& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_3b4fca32___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_3b4fca32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_template_id_3b4fca32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackButton.vue?vue&type=template&id=3b4fca32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/BackButton.vue?vue&type=template&id=3b4fca32&");


/***/ }),

/***/ "./resources/js/admin/components/buttons/FormButtons.vue?vue&type=template&id=06170d98&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/components/buttons/FormButtons.vue?vue&type=template&id=06170d98& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButtons_vue_vue_type_template_id_06170d98___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButtons_vue_vue_type_template_id_06170d98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormButtons_vue_vue_type_template_id_06170d98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormButtons.vue?vue&type=template&id=06170d98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/FormButtons.vue?vue&type=template&id=06170d98&");


/***/ }),

/***/ "./resources/js/admin/components/form/DropdownList.vue?vue&type=template&id=6c5ef25f&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/components/form/DropdownList.vue?vue&type=template&id=6c5ef25f& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownList_vue_vue_type_template_id_6c5ef25f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownList_vue_vue_type_template_id_6c5ef25f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownList_vue_vue_type_template_id_6c5ef25f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownList.vue?vue&type=template&id=6c5ef25f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/form/DropdownList.vue?vue&type=template&id=6c5ef25f&");


/***/ }),

/***/ "./resources/js/admin/components/layout/FormLayout.vue?vue&type=template&id=25c09338&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/components/layout/FormLayout.vue?vue&type=template&id=25c09338& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_template_id_25c09338___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_template_id_25c09338___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLayout_vue_vue_type_template_id_25c09338___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormLayout.vue?vue&type=template&id=25c09338& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/FormLayout.vue?vue&type=template&id=25c09338&");


/***/ }),

/***/ "./resources/js/admin/pages/seasons/Set.vue?vue&type=template&id=d538adec&":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/pages/seasons/Set.vue?vue&type=template&id=d538adec& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Set_vue_vue_type_template_id_d538adec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Set_vue_vue_type_template_id_d538adec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Set_vue_vue_type_template_id_d538adec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Set.vue?vue&type=template&id=d538adec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/seasons/Set.vue?vue&type=template&id=d538adec&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/BackButton.vue?vue&type=template&id=3b4fca32&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/BackButton.vue?vue&type=template&id=3b4fca32& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    [
      _vm.url
        ? _c(
            "router-link",
            {
              staticClass:
                "btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",
              attrs: { to: _vm.url },
              on: {
                click: function ($event) {
                  return _vm.goBack()
                },
              },
            },
            [_vm._t("default", [_vm._v("Back")])],
            2
          )
        : _c(
            "button",
            {
              staticClass:
                "btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.goBack()
                },
              },
            },
            [_vm._t("default", [_vm._v("Back")])],
            2
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/FormButtons.vue?vue&type=template&id=06170d98&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/buttons/FormButtons.vue?vue&type=template&id=06170d98& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c(
      "div",
      { staticClass: "col-sm-9 text-center" },
      [
        _c("back-button"),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",
          },
          [
            _vm._t("default", [
              _vm._v(_vm._s(_vm.loading ? "submitting" : "submit")),
            ]),
          ],
          2
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/form/DropdownList.vue?vue&type=template&id=6c5ef25f&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/form/DropdownList.vue?vue&type=template&id=6c5ef25f& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.itemList
    ? _c(
        "div",
        {
          directives: [
            {
              name: "click-outside",
              rawName: "v-click-outside",
              value: _vm.closeEvent,
              expression: "closeEvent",
            },
          ],
          staticClass: "dropdown-field",
        },
        [
          Object.keys(_vm.selectedItem).length === 0
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.trim",
                    value: _vm.inputValue,
                    expression: "inputValue",
                    modifiers: { trim: true },
                  },
                ],
                ref: "dropdowninput",
                staticClass: "form-control dropdown-input",
                attrs: {
                  type: "text",
                  placeholder: _vm.placeholder,
                  autocomplete: "off",
                },
                domProps: { value: _vm.inputValue },
                on: {
                  focus: function ($event) {
                    _vm.showlist = true
                  },
                  click: function ($event) {
                    return _vm.remodeReadOnlyError()
                  },
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.inputValue = $event.target.value.trim()
                  },
                  blur: function ($event) {
                    return _vm.$forceUpdate()
                  },
                },
              })
            : _c(
                "div",
                {
                  staticClass: "dropdown-selected",
                  on: { click: _vm.resetSelection },
                },
                [_vm._v("\n    " + _vm._s(_vm.selectedItem.name) + "\n  ")]
              ),
          _vm._v(" "),
          _c("i", {
            staticClass: "fas fa-caret-down",
            on: {
              click: function ($event) {
                return _vm.showToggle()
              },
            },
          }),
          _vm._v(" "),
          _vm.showlist == true
            ? _c(
                "div",
                { staticClass: "dropdown-list", on: { keyup: _vm.nextItem } },
                [
                  _c(
                    "ul",
                    { ref: "scrollContainer" },
                    _vm._l(_vm.itemList, function (item, index) {
                      return _c(
                        "li",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.itemVisible(item),
                              expression: "itemVisible(item)",
                            },
                          ],
                          key: item.id,
                          ref: "options",
                          refInFor: true,
                          staticClass: "dropdown-item",
                          class: { "active-item": _vm.arrowCounter === index },
                          on: {
                            click: function ($event) {
                              return _vm.selectItem(item)
                            },
                            keydown: [
                              function ($event) {
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
                                return _vm.selectItem(
                                  _vm.matches[_vm.arrowCounter]
                                )
                              },
                              function ($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "esc",
                                    27,
                                    $event.key,
                                    ["Esc", "Escape"]
                                  )
                                ) {
                                  return null
                                }
                                _vm.showlist = false
                              },
                            ],
                          },
                        },
                        [
                          _c("label", [
                            _c("input", {
                              staticClass: "d-none",
                              attrs: { type: "checkbox" },
                              domProps: { value: item.id },
                            }),
                            _vm._v(_vm._s(item.name)),
                          ]),
                        ]
                      )
                    }),
                    0
                  ),
                ]
              )
            : _vm._e(),
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/FormLayout.vue?vue&type=template&id=25c09338&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/layout/FormLayout.vue?vue&type=template&id=25c09338& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row justify-content-around" }, [
        _c(
          "div",
          {
            staticClass: "col-md-12 pl-4 pb-5",
            staticStyle: { position: "relative" },
          },
          [_vm._t("formdata")],
          2
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/seasons/Set.vue?vue&type=template&id=d538adec&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/seasons/Set.vue?vue&type=template&id=d538adec& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
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
            _vm.allCreated
              ? _c(
                  "form",
                  {
                    attrs: { role: "form", enctype: "multipart/form-data" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.updateSeason()
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "current" } }, [
                              _vm._v("Select Current Season"),
                            ]),
                            _vm._v(" "),
                            _c("dropdown-filter", {
                              staticClass: "mb-2",
                              attrs: { itemList: _vm.season_list },
                              on: { "update:option": _vm.currentUpdate },
                              model: {
                                value: _vm.form.current,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "current", $$v)
                                },
                                expression: "form.current",
                              },
                            }),
                            _vm._v(" "),
                            _vm.form.errors.has("current")
                              ? _c("div", { staticClass: "error" }, [
                                  _c(
                                    "label",
                                    { staticClass: "danger text-danger" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.form.errors.get("current"))
                                      ),
                                    ]
                                  ),
                                ])
                              : _vm._e(),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("form-buttons"),
                  ],
                  1
                )
              : _vm._e(),
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

/***/ "./node_modules/vue2-editor/dist/vue2-editor.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue2-editor/dist/vue2-editor.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Quill: () => (/* reexport default from dynamic */ quill__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   VueEditor: () => (/* binding */ VueEditor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   install: () => (/* binding */ install)
/* harmony export */ });
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);
/*!
 * vue2-editor v2.10.3 
 * (c) 2021 David Royer
 * Released under the MIT License.
 */



var defaultToolbar = [[{
  header: [false, 1, 2, 3, 4, 5, 6]
}], ["bold", "italic", "underline", "strike"], // toggled buttons
[{
  align: ""
}, {
  align: "center"
}, {
  align: "right"
}, {
  align: "justify"
}], ["blockquote", "code-block"], [{
  list: "ordered"
}, {
  list: "bullet"
}, {
  list: "check"
}], [{
  indent: "-1"
}, {
  indent: "+1"
}], // outdent/indent
[{
  color: []
}, {
  background: []
}], // dropdown with defaults from theme
["link", "image", "video"], ["clean"] // remove formatting button
];

var oldApi = {
  props: {
    customModules: Array
  },
  methods: {
    registerCustomModules: function registerCustomModules(Quill) {
      if (this.customModules !== undefined) {
        this.customModules.forEach(function (customModule) {
          Quill.register("modules/" + customModule.alias, customModule.module);
        });
      }
    }
  }
};

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 */
function mergeDeep(target, source) {
  var isObject = function isObject(obj) {
    return obj && _typeof(obj) === "object";
  };

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach(function (key) {
    var targetValue = target[key];
    var sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
}

var BlockEmbed = quill__WEBPACK_IMPORTED_MODULE_0___default()["import"]("blots/block/embed");

var HorizontalRule =
/*#__PURE__*/
function (_BlockEmbed) {
  _inherits(HorizontalRule, _BlockEmbed);

  function HorizontalRule() {
    _classCallCheck(this, HorizontalRule);

    return _possibleConstructorReturn(this, _getPrototypeOf(HorizontalRule).apply(this, arguments));
  }

  return HorizontalRule;
}(BlockEmbed);

HorizontalRule.blotName = "hr";
HorizontalRule.tagName = "hr";
quill__WEBPACK_IMPORTED_MODULE_0___default().register("formats/horizontal", HorizontalRule);

var MarkdownShortcuts =
/*#__PURE__*/
function () {
  function MarkdownShortcuts(quill, options) {
    var _this = this;

    _classCallCheck(this, MarkdownShortcuts);

    this.quill = quill;
    this.options = options;
    this.ignoreTags = ["PRE"];
    this.matches = [{
      name: "header",
      pattern: /^(#){1,6}\s/g,
      action: function action(text, selection, pattern) {
        var match = pattern.exec(text);
        if (!match) return;
        var size = match[0].length; // Need to defer this action https://github.com/quilljs/quill/issues/1134

        setTimeout(function () {
          _this.quill.formatLine(selection.index, 0, "header", size - 1);

          _this.quill.deleteText(selection.index - size, size);
        }, 0);
      }
    }, {
      name: "blockquote",
      pattern: /^(>)\s/g,
      action: function action(_text, selection) {
        // Need to defer this action https://github.com/quilljs/quill/issues/1134
        setTimeout(function () {
          _this.quill.formatLine(selection.index, 1, "blockquote", true);

          _this.quill.deleteText(selection.index - 2, 2);
        }, 0);
      }
    }, {
      name: "code-block",
      pattern: /^`{3}(?:\s|\n)/g,
      action: function action(_text, selection) {
        // Need to defer this action https://github.com/quilljs/quill/issues/1134
        setTimeout(function () {
          _this.quill.formatLine(selection.index, 1, "code-block", true);

          _this.quill.deleteText(selection.index - 4, 4);
        }, 0);
      }
    }, {
      name: "bolditalic",
      pattern: /(?:\*|_){3}(.+?)(?:\*|_){3}/g,
      action: function action(text, _selection, pattern, lineStart) {
        var match = pattern.exec(text);
        var annotatedText = match[0];
        var matchedText = match[1];
        var startIndex = lineStart + match.index;
        if (text.match(/^([*_ \n]+)$/g)) return;
        setTimeout(function () {
          _this.quill.deleteText(startIndex, annotatedText.length);

          _this.quill.insertText(startIndex, matchedText, {
            bold: true,
            italic: true
          });

          _this.quill.format("bold", false);
        }, 0);
      }
    }, {
      name: "bold",
      pattern: /(?:\*|_){2}(.+?)(?:\*|_){2}/g,
      action: function action(text, _selection, pattern, lineStart) {
        var match = pattern.exec(text);
        var annotatedText = match[0];
        var matchedText = match[1];
        var startIndex = lineStart + match.index;
        if (text.match(/^([*_ \n]+)$/g)) return;
        setTimeout(function () {
          _this.quill.deleteText(startIndex, annotatedText.length);

          _this.quill.insertText(startIndex, matchedText, {
            bold: true
          });

          _this.quill.format("bold", false);
        }, 0);
      }
    }, {
      name: "italic",
      pattern: /(?:\*|_){1}(.+?)(?:\*|_){1}/g,
      action: function action(text, _selection, pattern, lineStart) {
        var match = pattern.exec(text);
        var annotatedText = match[0];
        var matchedText = match[1];
        var startIndex = lineStart + match.index;
        if (text.match(/^([*_ \n]+)$/g)) return;
        setTimeout(function () {
          _this.quill.deleteText(startIndex, annotatedText.length);

          _this.quill.insertText(startIndex, matchedText, {
            italic: true
          });

          _this.quill.format("italic", false);
        }, 0);
      }
    }, {
      name: "strikethrough",
      pattern: /(?:~~)(.+?)(?:~~)/g,
      action: function action(text, _selection, pattern, lineStart) {
        var match = pattern.exec(text);
        var annotatedText = match[0];
        var matchedText = match[1];
        var startIndex = lineStart + match.index;
        if (text.match(/^([*_ \n]+)$/g)) return;
        setTimeout(function () {
          _this.quill.deleteText(startIndex, annotatedText.length);

          _this.quill.insertText(startIndex, matchedText, {
            strike: true
          });

          _this.quill.format("strike", false);
        }, 0);
      }
    }, {
      name: "code",
      pattern: /(?:`)(.+?)(?:`)/g,
      action: function action(text, _selection, pattern, lineStart) {
        var match = pattern.exec(text);
        var annotatedText = match[0];
        var matchedText = match[1];
        var startIndex = lineStart + match.index;
        if (text.match(/^([*_ \n]+)$/g)) return;
        setTimeout(function () {
          _this.quill.deleteText(startIndex, annotatedText.length);

          _this.quill.insertText(startIndex, matchedText, {
            code: true
          });

          _this.quill.format("code", false);

          _this.quill.insertText(_this.quill.getSelection(), " ");
        }, 0);
      }
    }, {
      name: "hr",
      pattern: /^([-*]\s?){3}/g,
      action: function action(text, selection) {
        var startIndex = selection.index - text.length;
        setTimeout(function () {
          _this.quill.deleteText(startIndex, text.length);

          _this.quill.insertEmbed(startIndex + 1, "hr", true, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).USER);

          _this.quill.insertText(startIndex + 2, "\n", (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).SILENT);

          _this.quill.setSelection(startIndex + 2, (quill__WEBPACK_IMPORTED_MODULE_0___default().sources).SILENT);
        }, 0);
      }
    }, {
      name: "asterisk-ul",
      pattern: /^(\*|\+)\s$/g,
      // eslint-disable-next-line no-unused-vars
      action: function action(_text, selection, _pattern) {
        setTimeout(function () {
          _this.quill.formatLine(selection.index, 1, "list", "unordered");

          _this.quill.deleteText(selection.index - 2, 2);
        }, 0);
      }
    }, {
      name: "image",
      pattern: /(?:!\[(.+?)\])(?:\((.+?)\))/g,
      action: function action(text, selection, pattern) {
        var startIndex = text.search(pattern);
        var matchedText = text.match(pattern)[0]; // const hrefText = text.match(/(?:!\[(.*?)\])/g)[0]

        var hrefLink = text.match(/(?:\((.*?)\))/g)[0];
        var start = selection.index - matchedText.length - 1;

        if (startIndex !== -1) {
          setTimeout(function () {
            _this.quill.deleteText(start, matchedText.length);

            _this.quill.insertEmbed(start, "image", hrefLink.slice(1, hrefLink.length - 1));
          }, 0);
        }
      }
    }, {
      name: "link",
      pattern: /(?:\[(.+?)\])(?:\((.+?)\))/g,
      action: function action(text, selection, pattern) {
        var startIndex = text.search(pattern);
        var matchedText = text.match(pattern)[0];
        var hrefText = text.match(/(?:\[(.*?)\])/g)[0];
        var hrefLink = text.match(/(?:\((.*?)\))/g)[0];
        var start = selection.index - matchedText.length - 1;

        if (startIndex !== -1) {
          setTimeout(function () {
            _this.quill.deleteText(start, matchedText.length);

            _this.quill.insertText(start, hrefText.slice(1, hrefText.length - 1), "link", hrefLink.slice(1, hrefLink.length - 1));
          }, 0);
        }
      }
    }]; // Handler that looks for insert deltas that match specific characters
    // eslint-disable-next-line no-unused-vars

    this.quill.on("text-change", function (delta, _oldContents, _source) {
      for (var i = 0; i < delta.ops.length; i++) {
        if (delta.ops[i].hasOwnProperty("insert")) {
          if (delta.ops[i].insert === " ") {
            _this.onSpace();
          } else if (delta.ops[i].insert === "\n") {
            _this.onEnter();
          }
        }
      }
    });
  }

  _createClass(MarkdownShortcuts, [{
    key: "isValid",
    value: function isValid(text, tagName) {
      return typeof text !== "undefined" && text && this.ignoreTags.indexOf(tagName) === -1;
    }
  }, {
    key: "onSpace",
    value: function onSpace() {
      var selection = this.quill.getSelection();
      if (!selection) return;

      var _this$quill$getLine = this.quill.getLine(selection.index),
          _this$quill$getLine2 = _slicedToArray(_this$quill$getLine, 2),
          line = _this$quill$getLine2[0],
          offset = _this$quill$getLine2[1];

      var text = line.domNode.textContent;
      var lineStart = selection.index - offset;

      if (this.isValid(text, line.domNode.tagName)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var match = _step.value;
            var matchedText = text.match(match.pattern);

            if (matchedText) {
              // We need to replace only matched text not the whole line
              console.log("matched:", match.name, text);
              match.action(text, selection, match.pattern, lineStart);
              return;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "onEnter",
    value: function onEnter() {
      var selection = this.quill.getSelection();
      if (!selection) return;

      var _this$quill$getLine3 = this.quill.getLine(selection.index),
          _this$quill$getLine4 = _slicedToArray(_this$quill$getLine3, 2),
          line = _this$quill$getLine4[0],
          offset = _this$quill$getLine4[1];

      var text = line.domNode.textContent + " ";
      var lineStart = selection.index - offset;
      selection.length = selection.index++;

      if (this.isValid(text, line.domNode.tagName)) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.matches[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var match = _step2.value;
            var matchedText = text.match(match.pattern);

            if (matchedText) {
              console.log("matched", match.name, text);
              match.action(text, selection, match.pattern, lineStart);
              return;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
  }]);

  return MarkdownShortcuts;
}(); // module.exports = MarkdownShortcuts;

//
var script = {
  name: "VueEditor",
  mixins: [oldApi],
  props: {
    id: {
      type: String,
      default: "quill-container"
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean
    },
    editorToolbar: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    editorOptions: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    },
    useCustomImageHandler: {
      type: Boolean,
      default: false
    },
    useMarkdownShortcuts: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      quill: null
    };
  },
  watch: {
    value: function value(val) {
      if (val != this.quill.root.innerHTML && !this.quill.hasFocus()) {
        this.quill.root.innerHTML = val;
      }
    },
    disabled: function disabled(status) {
      this.quill.enable(!status);
    }
  },
  mounted: function mounted() {
    this.registerCustomModules((quill__WEBPACK_IMPORTED_MODULE_0___default()));
    this.registerPrototypes();
    this.initializeEditor();
  },
  beforeDestroy: function beforeDestroy() {
    this.quill = null;
    delete this.quill;
  },
  methods: {
    initializeEditor: function initializeEditor() {
      this.setupQuillEditor();
      this.checkForCustomImageHandler();
      this.handleInitialContent();
      this.registerEditorEventListeners();
      this.$emit("ready", this.quill);
    },
    setupQuillEditor: function setupQuillEditor() {
      var editorConfig = {
        debug: false,
        modules: this.setModules(),
        theme: "snow",
        placeholder: this.placeholder ? this.placeholder : "",
        readOnly: this.disabled ? this.disabled : false
      };
      this.prepareEditorConfig(editorConfig);
      this.quill = new (quill__WEBPACK_IMPORTED_MODULE_0___default())(this.$refs.quillContainer, editorConfig);
    },
    setModules: function setModules() {
      var modules = {
        toolbar: this.editorToolbar.length ? this.editorToolbar : defaultToolbar
      };

      if (this.useMarkdownShortcuts) {
        quill__WEBPACK_IMPORTED_MODULE_0___default().register("modules/markdownShortcuts", MarkdownShortcuts, true);
        modules["markdownShortcuts"] = {};
      }

      return modules;
    },
    prepareEditorConfig: function prepareEditorConfig(editorConfig) {
      if (Object.keys(this.editorOptions).length > 0 && this.editorOptions.constructor === Object) {
        if (this.editorOptions.modules && typeof this.editorOptions.modules.toolbar !== "undefined") {
          // We don't want to merge default toolbar with provided toolbar.
          delete editorConfig.modules.toolbar;
        }

        mergeDeep(editorConfig, this.editorOptions);
      }
    },
    registerPrototypes: function registerPrototypes() {
      (quill__WEBPACK_IMPORTED_MODULE_0___default().prototype).getHTML = function () {
        return this.container.querySelector(".ql-editor").innerHTML;
      };

      (quill__WEBPACK_IMPORTED_MODULE_0___default().prototype).getWordCount = function () {
        return this.container.querySelector(".ql-editor").innerText.length;
      };
    },
    registerEditorEventListeners: function registerEditorEventListeners() {
      this.quill.on("text-change", this.handleTextChange);
      this.quill.on("selection-change", this.handleSelectionChange);
      this.listenForEditorEvent("text-change");
      this.listenForEditorEvent("selection-change");
      this.listenForEditorEvent("editor-change");
    },
    listenForEditorEvent: function listenForEditorEvent(type) {
      var _this = this;

      this.quill.on(type, function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this.$emit.apply(_this, [type].concat(args));
      });
    },
    handleInitialContent: function handleInitialContent() {
      if (this.value) this.quill.root.innerHTML = this.value; // Set initial editor content
    },
    handleSelectionChange: function handleSelectionChange(range, oldRange) {
      if (!range && oldRange) this.$emit("blur", this.quill);else if (range && !oldRange) this.$emit("focus", this.quill);
    },
    handleTextChange: function handleTextChange(delta, oldContents) {
      var editorContent = this.quill.getHTML() === "<p><br></p>" ? "" : this.quill.getHTML();
      this.$emit("input", editorContent);
      if (this.useCustomImageHandler) this.handleImageRemoved(delta, oldContents);
    },
    handleImageRemoved: function handleImageRemoved(delta, oldContents) {
      var _this2 = this;

      var currrentContents = this.quill.getContents();
      var deletedContents = currrentContents.diff(oldContents);
      var operations = deletedContents.ops;
      operations.map(function (operation) {
        if (operation.insert && operation.insert.hasOwnProperty("image")) {
          var image = operation.insert.image;

          _this2.$emit("image-removed", image);
        }
      });
    },
    checkForCustomImageHandler: function checkForCustomImageHandler() {
      this.useCustomImageHandler === true ? this.setupCustomImageHandler() : "";
    },
    setupCustomImageHandler: function setupCustomImageHandler() {
      var toolbar = this.quill.getModule("toolbar");
      toolbar.addHandler("image", this.customImageHandler);
    },
    customImageHandler: function customImageHandler() {
      this.$refs.fileInput.click();
    },
    emitImageInfo: function emitImageInfo($event) {
      var resetUploader = function resetUploader() {
        var uploader = document.getElementById("file-upload");
        uploader.value = "";
      };

      var file = $event.target.files[0];
      var Editor = this.quill;
      var range = Editor.getSelection();
      var cursorLocation = range.index;
      this.$emit("image-added", file, Editor, cursorLocation, resetUploader);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}

var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"quillWrapper"},[_vm._t("toolbar"),_vm._v(" "),_c('div',{ref:"quillContainer",attrs:{"id":_vm.id}}),_vm._v(" "),(_vm.useCustomImageHandler)?_c('input',{ref:"fileInput",staticStyle:{"display":"none"},attrs:{"id":"file-upload","type":"file","accept":"image/*"},on:{"change":function($event){return _vm.emitImageInfo($event)}}}):_vm._e()],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-776e788e_0", { source: "/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li::before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:0;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li::before{content:'\\2022'}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li::before,.ql-editor ul[data-checked=true]>li::before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li::before{content:'\\2611'}.ql-editor ul[data-checked=false]>li::before{content:'\\2610'}.ql-editor li::before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl)::before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl::before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) '. '}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) '. '}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) '. '}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) '. '}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) '. '}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) '. '}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) '. '}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) '. '}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) '. '}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) '. '}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank::before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow .ql-toolbar:after,.ql-snow.ql-toolbar:after{clear:both;content:'';display:table}.ql-snow .ql-toolbar button,.ql-snow.ql-toolbar button{background:0 0;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow .ql-toolbar button svg,.ql-snow.ql-toolbar button svg{float:left;height:100%}.ql-snow .ql-toolbar button:active:hover,.ql-snow.ql-toolbar button:active:hover{outline:0}.ql-snow .ql-toolbar input.ql-image[type=file],.ql-snow.ql-toolbar input.ql-image[type=file]{display:none}.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar button.ql-active,.ql-snow .ql-toolbar button:focus,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover{color:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow .ql-toolbar button:hover:not(.ql-active),.ql-snow.ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow{box-sizing:border-box}.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:'';display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label::before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item::before,.ql-snow .ql-picker.ql-header .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before{content:'Heading 1'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before{content:'Heading 2'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before{content:'Heading 3'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before{content:'Heading 4'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before{content:'Heading 5'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before{content:'Heading 6'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item::before,.ql-snow .ql-picker.ql-font .ql-picker-label::before{content:'Sans Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before{content:'Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before{content:'Monospace'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item::before,.ql-snow .ql-picker.ql-size .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before{content:'Small'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before{content:'Large'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before{content:'Huge'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#ccc}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip::before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action::after{border-right:1px solid #ccc;content:'Edit';margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove::before{content:'Remove';margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action::after{border-right:0;content:'Save';padding-right:0}.ql-snow .ql-tooltip[data-mode=link]::before{content:\"Enter link:\"}.ql-snow .ql-tooltip[data-mode=formula]::before{content:\"Enter formula:\"}.ql-snow .ql-tooltip[data-mode=video]::before{content:\"Enter video:\"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}", map: undefined, media: undefined })
,inject("data-v-776e788e_1", { source: ".ql-editor{min-height:200px;font-size:16px}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1px!important}.quillWrapper .ql-snow.ql-toolbar{padding-top:8px;padding-bottom:4px}.quillWrapper .ql-snow.ql-toolbar .ql-formats{margin-bottom:10px}.ql-snow .ql-toolbar button svg,.quillWrapper .ql-snow.ql-toolbar button svg{width:22px;height:22px}.quillWrapper .ql-editor ul[data-checked=false]>li::before,.quillWrapper .ql-editor ul[data-checked=true]>li::before{font-size:1.35em;vertical-align:baseline;bottom:-.065em;font-weight:900;color:#222}.quillWrapper .ql-snow .ql-stroke{stroke:rgba(63,63,63,.95);stroke-linecap:square;stroke-linejoin:initial;stroke-width:1.7px}.quillWrapper .ql-picker-label{font-size:15px}.quillWrapper .ql-snow .ql-active .ql-stroke{stroke-width:2.25px}.quillWrapper .ql-toolbar.ql-snow .ql-formats{vertical-align:top}.ql-picker:not(.ql-background){position:relative;top:2px}.ql-picker.ql-color-picker svg{width:22px!important;height:22px!important}.quillWrapper .imageResizeActive img{display:block;cursor:pointer}.quillWrapper .imageResizeActive~div svg{cursor:pointer}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var VueEditor = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

var version = "2.10.3"; // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueEditor", VueEditor);
}
var VPlugin = {
  install: install,
  version: version,
  Quill: (quill__WEBPACK_IMPORTED_MODULE_0___default()),
  VueEditor: VueEditor
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof __webpack_require__.g !== "undefined") {
  GlobalVue = __webpack_require__.g.Vue;
}

if (GlobalVue) {
  GlobalVue.use(VPlugin);
}
/*************************************************/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VPlugin);



/***/ })

}]);
=======
/*! For license information please see SeasonSet.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[5884],{2347:(t,e,n)=>{"use strict";n(70538).default.directive("click-outside",{bind:function(t,e,n){window.event=function(r){t==r.target||t.contains(r.target)||n.context[e.expression](r)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},66484:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(2739);class o{constructor(t,e={}){this.quill=t,this.handleDrop=this.handleDrop.bind(this),this.handlePaste=this.handlePaste.bind(this),this.quill.root.addEventListener("drop",this.handleDrop,!1),this.quill.root.addEventListener("paste",this.handlePaste,!1)}handleDrop(t){if(t.preventDefault(),t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files.length){if(document.caretRangeFromPoint){const e=document.getSelection(),n=document.caretRangeFromPoint(t.clientX,t.clientY);e&&n&&e.setBaseAndExtent(n.startContainer,n.startOffset,n.startContainer,n.startOffset)}this.readFiles(t.dataTransfer.files,this.insert.bind(this))}}handlePaste(t){t.clipboardData&&t.clipboardData.items&&t.clipboardData.items.length&&this.readFiles(t.clipboardData.items,(t=>{this.quill.getSelection()||setTimeout((()=>this.insert(t)),0)}))}insert(t){const e=(this.quill.getSelection()||{}).index||this.quill.getLength();this.quill.insertEmbed(e,"image",t,"user")}readFiles(t,e){[].forEach.call(t,(t=>{if(!t.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp|vnd\.microsoft\.icon)/i))return;const n=new FileReader;n.onload=t=>{e(t.target.result)};const r=t.getAsFile?t.getAsFile():t;r instanceof Blob&&n.readAsDataURL(r)}))}}var i=n(19238),l=n.n(i);const a={components:{"vue-editor":r.bR},data:function(){return{customModulesForEditor:[{alias:"imageDrop",module:o},{alias:"imageResize",module:l()}],editorSettings:{modules:{imageDrop:!0,imageResize:{},toolbar:[["bold","italic","underline","strike"],[{align:""},{align:"center"},{align:"right"},{align:"justify"}],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{list:"check"}],[{indent:"-1"},{indent:"+1"}],[{color:[]},{background:[]}],["link","image","video"],["clean"]]}}}},methods:{handleImageAdded:function(t,e,n,r){var o=new FormData;o.append("image",t),axios({url:"/api/images",method:"POST",data:o}).then((function(t){var o=t.data.url;e.insertEmbed(n,"image",o),r()})).catch((function(t){console.log(t)}))},handleImageRemoved:function(t,e,n,r){var o=new FormData;o.append("image",t),axios({url:"/api/images/delete",method:"POST",data:o}).then((function(t){var o=t.data.url;e.insertEmbed(n,"image",o),r()})).catch((function(t){console.log(t)}))}}}},79742:(t,e)=>{"use strict";e.byteLength=function(t){var e=a(t),n=e[0],r=e[1];return 3*(n+r)/4-r},e.toByteArray=function(t){var e,n,i=a(t),l=i[0],s=i[1],u=new o(function(t,e,n){return 3*(e+n)/4-n}(0,l,s)),c=0,f=s>0?l-4:l;for(n=0;n<f;n+=4)e=r[t.charCodeAt(n)]<<18|r[t.charCodeAt(n+1)]<<12|r[t.charCodeAt(n+2)]<<6|r[t.charCodeAt(n+3)],u[c++]=e>>16&255,u[c++]=e>>8&255,u[c++]=255&e;2===s&&(e=r[t.charCodeAt(n)]<<2|r[t.charCodeAt(n+1)]>>4,u[c++]=255&e);1===s&&(e=r[t.charCodeAt(n)]<<10|r[t.charCodeAt(n+1)]<<4|r[t.charCodeAt(n+2)]>>2,u[c++]=e>>8&255,u[c++]=255&e);return u},e.fromByteArray=function(t){for(var e,r=t.length,o=r%3,i=[],l=16383,a=0,u=r-o;a<u;a+=l)i.push(s(t,a,a+l>u?u:a+l));1===o?(e=t[r-1],i.push(n[e>>2]+n[e<<4&63]+"==")):2===o&&(e=(t[r-2]<<8)+t[r-1],i.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return i.join("")};for(var n=[],r=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0;l<64;++l)n[l]=i[l],r[i.charCodeAt(l)]=l;function a(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function s(t,e,r){for(var o,i,l=[],a=e;a<r;a+=3)o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),l.push(n[(i=o)>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return l.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},48764:(t,e,n)=>{"use strict";var r=n(79742),o=n(80645),i=n(5826);function l(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(l()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=s.prototype:(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,n){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return u(this,t,e,n)}function u(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r);s.TYPED_ARRAY_SUPPORT?(t=e).__proto__=s.prototype:t=d(t,e);return t}(t,e,n,r):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8");if(!s.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|h(e,n);t=a(t,r);var o=t.write(e,n);o!==r&&(t=t.slice(0,o));return t}(t,e,n):function(t,e){if(s.isBuffer(e)){var n=0|p(e.length);return 0===(t=a(t,n)).length||e.copy(t,0,0,n),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(r=e.length)!=r?a(t,0):d(t,e);if("Buffer"===e.type&&i(e.data))return d(t,e.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function c(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,e){if(c(e),t=a(t,e<0?0:0|p(e)),!s.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function d(t,e){var n=e.length<0?0:0|p(e.length);t=a(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function p(t){if(t>=l())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l().toString(16)+" bytes");return 0|t}function h(t,e){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return z(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return F(t).length;default:if(r)return z(t).length;e=(""+e).toLowerCase(),r=!0}}function y(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return T(this,e,n);case"utf8":case"utf-8":return E(this,e,n);case"ascii":return j(this,e,n);case"latin1":case"binary":return N(this,e,n);case"base64":return O(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function v(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function b(t,e,n,r,o){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=s.from(e,r)),s.isBuffer(e))return 0===e.length?-1:g(t,e,n,r,o);if("number"==typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):g(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function g(t,e,n,r,o){var i,l=1,a=t.length,s=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;l=2,a/=2,s/=2,n/=2}function u(t,e){return 1===l?t[e]:t.readUInt16BE(e*l)}if(o){var c=-1;for(i=n;i<a;i++)if(u(t,i)===u(e,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===s)return c*l}else-1!==c&&(i-=i-c),c=-1}else for(n+s>a&&(n=a-s),i=n;i>=0;i--){for(var f=!0,d=0;d<s;d++)if(u(t,i+d)!==u(e,d)){f=!1;break}if(f)return i}return-1}function m(t,e,n,r){n=Number(n)||0;var o=t.length-n;r?(r=Number(r))>o&&(r=o):r=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");r>i/2&&(r=i/2);for(var l=0;l<r;++l){var a=parseInt(e.substr(2*l,2),16);if(isNaN(a))return l;t[n+l]=a}return l}function q(t,e,n,r){return H(z(e,t.length-n),t,n,r)}function _(t,e,n,r){return H(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function w(t,e,n,r){return _(t,e,n,r)}function x(t,e,n,r){return H(F(e),t,n,r)}function k(t,e,n,r){return H(function(t,e){for(var n,r,o,i=[],l=0;l<t.length&&!((e-=2)<0);++l)r=(n=t.charCodeAt(l))>>8,o=n%256,i.push(o),i.push(r);return i}(e,t.length-n),t,n,r)}function O(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function E(t,e,n){n=Math.min(t.length,n);for(var r=[],o=e;o<n;){var i,l,a,s,u=t[o],c=null,f=u>239?4:u>223?3:u>191?2:1;if(o+f<=n)switch(f){case 1:u<128&&(c=u);break;case 2:128==(192&(i=t[o+1]))&&(s=(31&u)<<6|63&i)>127&&(c=s);break;case 3:i=t[o+1],l=t[o+2],128==(192&i)&&128==(192&l)&&(s=(15&u)<<12|(63&i)<<6|63&l)>2047&&(s<55296||s>57343)&&(c=s);break;case 4:i=t[o+1],l=t[o+2],a=t[o+3],128==(192&i)&&128==(192&l)&&128==(192&a)&&(s=(15&u)<<18|(63&i)<<12|(63&l)<<6|63&a)>65535&&s<1114112&&(c=s)}null===c?(c=65533,f=1):c>65535&&(c-=65536,r.push(c>>>10&1023|55296),c=56320|1023&c),r.push(c),o+=f}return function(t){var e=t.length;if(e<=A)return String.fromCharCode.apply(String,t);var n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=A));return n}(r)}e.lW=s,e.h2=50,s.TYPED_ARRAY_SUPPORT=void 0!==n.g.TYPED_ARRAY_SUPPORT?n.g.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),l(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,n){return u(null,t,e,n)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,n){return function(t,e,n,r){return c(e),e<=0?a(t,e):void 0!==n?"string"==typeof r?a(t,e).fill(n,r):a(t,e).fill(n):a(t,e)}(null,t,e,n)},s.allocUnsafe=function(t){return f(null,t)},s.allocUnsafeSlow=function(t){return f(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=s.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var l=t[n];if(!s.isBuffer(l))throw new TypeError('"list" argument must be an Array of Buffers');l.copy(r,o),o+=l.length}return r},s.byteLength=h,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)v(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)v(this,e,e+3),v(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)v(this,e,e+7),v(this,e+1,e+6),v(this,e+2,e+5),v(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?E(this,0,t):y.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",n=e.h2;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,n,r,o){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return-1;if(e>=n)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(r>>>=0),l=(n>>>=0)-(e>>>=0),a=Math.min(i,l),u=this.slice(r,o),c=t.slice(e,n),f=0;f<a;++f)if(u[f]!==c[f]){i=u[f],l=c[f];break}return i<l?-1:l<i?1:0},s.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},s.prototype.indexOf=function(t,e,n){return b(this,t,e,n,!0)},s.prototype.lastIndexOf=function(t,e,n){return b(this,t,e,n,!1)},s.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var i=!1;;)switch(r){case"hex":return m(this,t,e,n);case"utf8":case"utf-8":return q(this,t,e,n);case"ascii":return _(this,t,e,n);case"latin1":case"binary":return w(this,t,e,n);case"base64":return x(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var A=4096;function j(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}function N(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function T(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=e;i<n;++i)o+=U(t[i]);return o}function S(t,e,n){for(var r=t.slice(e,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function P(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function C(t,e,n,r,o,i){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function L(t,e,n,r){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-n,2);o<i;++o)t[n+o]=(e&255<<8*(r?o:1-o))>>>8*(r?o:1-o)}function R(t,e,n,r){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-n,4);o<i;++o)t[n+o]=e>>>8*(r?o:3-o)&255}function M(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function I(t,e,n,r,i){return i||M(t,0,n,4),o.write(t,e,n,r,23,4),n+4}function B(t,e,n,r,i){return i||M(t,0,n,8),o.write(t,e,n,r,52,8),n+8}s.prototype.slice=function(t,e){var n,r=this.length;if((t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),s.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=s.prototype;else{var o=e-t;n=new s(o,void 0);for(var i=0;i<o;++i)n[i]=this[i+t]}return n},s.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||P(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r},s.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||P(t,e,this.length);for(var r=this[t+--e],o=1;e>0&&(o*=256);)r+=this[t+--e]*o;return r},s.prototype.readUInt8=function(t,e){return e||P(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||P(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||P(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||P(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||P(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||P(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r>=(o*=128)&&(r-=Math.pow(2,8*e)),r},s.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||P(t,e,this.length);for(var r=e,o=1,i=this[t+--r];r>0&&(o*=256);)i+=this[t+--r]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},s.prototype.readInt8=function(t,e){return e||P(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,e){e||P(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt16BE=function(t,e){e||P(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt32LE=function(t,e){return e||P(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||P(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||P(t,4,this.length),o.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||P(t,4,this.length),o.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||P(t,8,this.length),o.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||P(t,8,this.length),o.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||C(this,t,e,n,Math.pow(2,8*n)-1,0);var o=1,i=0;for(this[e]=255&t;++i<n&&(o*=256);)this[e+i]=t/o&255;return e+n},s.prototype.writeUIntBE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||C(this,t,e,n,Math.pow(2,8*n)-1,0);var o=n-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+n},s.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):R(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):R(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);C(this,t,e,n,o-1,-o)}var i=0,l=1,a=0;for(this[e]=255&t;++i<n&&(l*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/l>>0)-a&255;return e+n},s.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);C(this,t,e,n,o-1,-o)}var i=n-1,l=1,a=0;for(this[e+i]=255&t;--i>=0&&(l*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/l>>0)-a&255;return e+n},s.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):L(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):L(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):R(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):R(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,n){return I(this,t,e,!0,n)},s.prototype.writeFloatBE=function(t,e,n){return I(this,t,e,!1,n)},s.prototype.writeDoubleLE=function(t,e,n){return B(this,t,e,!0,n)},s.prototype.writeDoubleBE=function(t,e,n){return B(this,t,e,!1,n)},s.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var o,i=r-n;if(this===t&&n<e&&e<r)for(o=i-1;o>=0;--o)t[o+e]=this[o+n];else if(i<1e3||!s.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+i),e);return i},s.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!s.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{var l=s.isBuffer(t)?t:z(new s(t,r).toString()),a=l.length;for(i=0;i<n-e;++i)this[i+e]=l[i%a]}return this};var D=/[^+\/0-9A-Za-z-_]/g;function U(t){return t<16?"0"+t.toString(16):t.toString(16)}function z(t,e){var n;e=e||1/0;for(var r=t.length,o=null,i=[],l=0;l<r;++l){if((n=t.charCodeAt(l))>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(l+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function F(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(D,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function H(t,e,n,r){for(var o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}},80645:(t,e)=>{e.read=function(t,e,n,r,o){var i,l,a=8*o-r-1,s=(1<<a)-1,u=s>>1,c=-7,f=n?o-1:0,d=n?-1:1,p=t[e+f];for(f+=d,i=p&(1<<-c)-1,p>>=-c,c+=a;c>0;i=256*i+t[e+f],f+=d,c-=8);for(l=i&(1<<-c)-1,i>>=-c,c+=r;c>0;l=256*l+t[e+f],f+=d,c-=8);if(0===i)i=1-u;else{if(i===s)return l?NaN:1/0*(p?-1:1);l+=Math.pow(2,r),i-=u}return(p?-1:1)*l*Math.pow(2,i-r)},e.write=function(t,e,n,r,o,i){var l,a,s,u=8*i-o-1,c=(1<<u)-1,f=c>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:i-1,h=r?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,l=c):(l=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-l))<1&&(l--,s*=2),(e+=l+f>=1?d/s:d*Math.pow(2,1-f))*s>=2&&(l++,s/=2),l+f>=c?(a=0,l=c):l+f>=1?(a=(e*s-1)*Math.pow(2,o),l+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,o),l=0));o>=8;t[n+p]=255&a,p+=h,a/=256,o-=8);for(l=l<<o|a,u+=o;u>0;t[n+p]=255&l,p+=h,l/=256,u-=8);t[n+p-h]|=128*y}},5826:t=>{var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},19238:function(t,e,n){var r=n(76095);t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=38)}([function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){var r=n(22),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(75),i=n(76),l=n(77),a=n(78),s=n(79);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=l,r.prototype.has=a,r.prototype.set=s,t.exports=r},function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(8);t.exports=r},function(t,e,n){function r(t){return null==t?void 0===t?s:a:u&&u in Object(t)?i(t):l(t)}var o=n(16),i=n(64),l=n(87),a="[object Null]",s="[object Undefined]",u=o?o.toStringTag:void 0;t.exports=r},function(t,e,n){function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(73);t.exports=r},function(t,e,n){var r=n(11)(Object,"create");t.exports=r},function(t,e){function n(t,e){return t===e||t!=t&&e!=e}t.exports=n},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}));var o=function t(e){r(this,t),this.onCreate=function(){},this.onDestroy=function(){},this.onUpdate=function(){},this.overlay=e.overlay,this.img=e.img,this.options=e.options,this.requestUpdate=e.onUpdate}},function(t,e,n){function r(t,e,n){"__proto__"==e&&o?o(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var o=n(21);t.exports=r},function(t,e,n){function r(t,e){var n=i(t,e);return o(n)?n:void 0}var o=n(48),i=n(65);t.exports=r},function(t,e,n){function r(t){return null!=t&&i(t.length)&&!o(t)}var o=n(13),i=n(30);t.exports=r},function(t,e,n){function r(t){if(!i(t))return!1;var e=o(t);return e==a||e==s||e==l||e==u}var o=n(5),i=n(0),l="[object AsyncFunction]",a="[object Function]",s="[object GeneratorFunction]",u="[object Proxy]";t.exports=r},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(11)(n(1),"Map");t.exports=r},function(t,e,n){var r=n(1).Symbol;t.exports=r},function(t,e){function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}t.exports=n},function(t,e,n){function r(t,e,n){(void 0===n||i(t[e],n))&&(void 0!==n||e in t)||o(t,e,n)}var o=n(10),i=n(8);t.exports=r},function(t,e,n){function r(t,e,n,c,f){t!==e&&l(e,(function(l,u){if(s(l))f||(f=new o),a(t,e,u,n,r,c,f);else{var d=c?c(t[u],l,u+"",t,e,f):void 0;void 0===d&&(d=l),i(t,u,d)}}),u)}var o=n(41),i=n(18),l=n(46),a=n(51),s=n(0),u=n(32);t.exports=r},function(t,e,n){function r(t,e){return l(i(t,e,o),t+"")}var o=n(26),i=n(89),l=n(90);t.exports=r},function(t,e,n){var r=n(11),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(107))},function(t,e,n){var r=n(88)(Object.getPrototypeOf,Object);t.exports=r},function(t,e){function n(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<e}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=n},function(t,e){function n(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}var r=Object.prototype;t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){var r=n(47),o=n(2),i=Object.prototype,l=i.hasOwnProperty,a=i.propertyIsEnumerable,s=r(function(){return arguments}())?r:function(t){return o(t)&&l.call(t,"callee")&&!a.call(t,"callee")};t.exports=s},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){(function(t){var r=n(1),o=n(102),i="object"==typeof e&&e&&!e.nodeType&&e,l=i&&"object"==typeof t&&t&&!t.nodeType&&t,a=l&&l.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||o;t.exports=s}).call(e,n(14)(t))},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},function(t,e,n){var r=n(49),o=n(54),i=n(86),l=i&&i.isTypedArray,a=l?o(l):r;t.exports=a},function(t,e,n){function r(t){return l(t)?o(t,!0):i(t)}var o=n(43),i=n(50),l=n(12);t.exports=r},function(t,e,n){"use strict";e.a={modules:["DisplaySize","Toolbar","Resize"],overlayStyles:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"},handleStyles:{position:"absolute",height:"12px",width:"12px",backgroundColor:"white",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80"},displayStyles:{position:"absolute",font:"12px/1.0 Arial, Helvetica, sans-serif",padding:"4px 8px",textAlign:"center",backgroundColor:"white",color:"#333",border:"1px solid #777",boxSizing:"border-box",opacity:"0.80",cursor:"default"},toolbarStyles:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default"},toolbarButtonStyles:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},toolbarButtonSvgStyles:{fill:"#444",stroke:"#444",strokeWidth:"2"}}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=n(9);n.d(e,"a",(function(){return a}));var a=function(t){function e(){var t,n,i;r(this,e);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),i.onCreate=function(){i.display=document.createElement("div"),Object.assign(i.display.style,i.options.displayStyles),i.overlay.appendChild(i.display)},i.onDestroy=function(){},i.onUpdate=function(){if(i.display&&i.img){var t=i.getCurrentSize();if(i.display.innerHTML=t.join(" &times; "),t[0]>120&&t[1]>30)Object.assign(i.display.style,{right:"4px",bottom:"4px",left:"auto"});else if("right"==i.img.style.float){var e=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"auto",bottom:"-"+(e.height+4)+"px",left:"-"+(e.width+4)+"px"})}else{var n=i.display.getBoundingClientRect();Object.assign(i.display.style,{right:"-"+(n.width+4)+"px",bottom:"-"+(n.height+4)+"px",left:"auto"})}}},i.getCurrentSize=function(){return[i.img.width,Math.round(i.img.width/i.img.naturalWidth*i.img.naturalHeight)]},o(i,n)}return i(e,t),e}(l.a)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=n(9);n.d(e,"a",(function(){return a}));var a=function(t){function e(){var t,n,i;r(this,e);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),i.onCreate=function(){i.boxes=[],i.addBox("nwse-resize"),i.addBox("nesw-resize"),i.addBox("nwse-resize"),i.addBox("nesw-resize"),i.positionBoxes()},i.onDestroy=function(){i.setCursor("")},i.positionBoxes=function(){var t=-parseFloat(i.options.handleStyles.width)/2+"px",e=-parseFloat(i.options.handleStyles.height)/2+"px";[{left:t,top:e},{right:t,top:e},{right:t,bottom:e},{left:t,bottom:e}].forEach((function(t,e){Object.assign(i.boxes[e].style,t)}))},i.addBox=function(t){var e=document.createElement("div");Object.assign(e.style,i.options.handleStyles),e.style.cursor=t,e.style.width=i.options.handleStyles.width+"px",e.style.height=i.options.handleStyles.height+"px",e.addEventListener("mousedown",i.handleMousedown,!1),i.overlay.appendChild(e),i.boxes.push(e)},i.handleMousedown=function(t){i.dragBox=t.target,i.dragStartX=t.clientX,i.preDragWidth=i.img.width||i.img.naturalWidth,i.setCursor(i.dragBox.style.cursor),document.addEventListener("mousemove",i.handleDrag,!1),document.addEventListener("mouseup",i.handleMouseup,!1)},i.handleMouseup=function(){i.setCursor(""),document.removeEventListener("mousemove",i.handleDrag),document.removeEventListener("mouseup",i.handleMouseup)},i.handleDrag=function(t){if(i.img){var e=t.clientX-i.dragStartX;i.dragBox===i.boxes[0]||i.dragBox===i.boxes[3]?i.img.width=Math.round(i.preDragWidth-e):i.img.width=Math.round(i.preDragWidth+e),i.requestUpdate()}},i.setCursor=function(t){[document.body,i.img].forEach((function(e){e.style.cursor=t}))},o(i,n)}return i(e,t),e}(l.a)},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(105),s=n.n(a),u=n(104),c=n.n(u),f=n(106),d=n.n(f),p=n(9);n.d(e,"a",(function(){return g}));var h=r.imports.parchment,y=new h.Attributor.Style("float","float"),v=new h.Attributor.Style("margin","margin"),b=new h.Attributor.Style("display","display"),g=function(t){function e(){var t,n,r;o(this,e);for(var l=arguments.length,a=Array(l),u=0;u<l;u++)a[u]=arguments[u];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),r.onCreate=function(){r.toolbar=document.createElement("div"),Object.assign(r.toolbar.style,r.options.toolbarStyles),r.overlay.appendChild(r.toolbar),r._defineAlignments(),r._addToolbarButtons()},r.onDestroy=function(){},r.onUpdate=function(){},r._defineAlignments=function(){r.alignments=[{icon:s.a,apply:function(){b.add(r.img,"inline"),y.add(r.img,"left"),v.add(r.img,"0 1em 1em 0")},isApplied:function(){return"left"==y.value(r.img)}},{icon:c.a,apply:function(){b.add(r.img,"block"),y.remove(r.img),v.add(r.img,"auto")},isApplied:function(){return"auto"==v.value(r.img)}},{icon:d.a,apply:function(){b.add(r.img,"inline"),y.add(r.img,"right"),v.add(r.img,"0 0 1em 1em")},isApplied:function(){return"right"==y.value(r.img)}}]},r._addToolbarButtons=function(){var t=[];r.alignments.forEach((function(e,n){var o=document.createElement("span");t.push(o),o.innerHTML=e.icon,o.addEventListener("click",(function(){t.forEach((function(t){return t.style.filter=""})),e.isApplied()?(y.remove(r.img),v.remove(r.img),b.remove(r.img)):(r._selectButton(o),e.apply()),r.requestUpdate()})),Object.assign(o.style,r.options.toolbarButtonStyles),n>0&&(o.style.borderLeftWidth="0"),Object.assign(o.children[0].style,r.options.toolbarButtonSvgStyles),e.isApplied()&&r._selectButton(o),r.toolbar.appendChild(o)}))},r._selectButton=function(t){t.style.filter="invert(20%)"},i(r,n)}return l(e,t),e}(p.a)},function(t,e,n){var r=n(17),o=n(20),i=n(63),l=n(101),a=o((function(t){return t.push(void 0,i),r(l,void 0,t)}));t.exports=a},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=n(37),l=n.n(i),a=n(33),s=n(34),u=n(36),c=n(35),f={DisplaySize:s.a,Toolbar:u.a,Resize:c.a},d=function t(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,t),this.initializeModules=function(){n.removeModules(),n.modules=n.moduleClasses.map((function(t){return new(f[t]||t)(n)})),n.modules.forEach((function(t){t.onCreate()})),n.onUpdate()},this.onUpdate=function(){n.repositionElements(),n.modules.forEach((function(t){t.onUpdate()}))},this.removeModules=function(){n.modules.forEach((function(t){t.onDestroy()})),n.modules=[]},this.handleClick=function(t){if(t.target&&t.target.tagName&&"IMG"===t.target.tagName.toUpperCase()){if(n.img===t.target)return;n.img&&n.hide(),n.show(t.target)}else n.img&&n.hide()},this.show=function(t){n.img=t,n.showOverlay(),n.initializeModules()},this.showOverlay=function(){n.overlay&&n.hideOverlay(),n.quill.setSelection(null),n.setUserSelect("none"),document.addEventListener("keyup",n.checkImage,!0),n.quill.root.addEventListener("input",n.checkImage,!0),n.overlay=document.createElement("div"),Object.assign(n.overlay.style,n.options.overlayStyles),n.quill.root.parentNode.appendChild(n.overlay),n.repositionElements()},this.hideOverlay=function(){n.overlay&&(n.quill.root.parentNode.removeChild(n.overlay),n.overlay=void 0,document.removeEventListener("keyup",n.checkImage),n.quill.root.removeEventListener("input",n.checkImage),n.setUserSelect(""))},this.repositionElements=function(){if(n.overlay&&n.img){var t=n.quill.root.parentNode,e=n.img.getBoundingClientRect(),r=t.getBoundingClientRect();Object.assign(n.overlay.style,{left:e.left-r.left-1+t.scrollLeft+"px",top:e.top-r.top+t.scrollTop+"px",width:e.width+"px",height:e.height+"px"})}},this.hide=function(){n.hideOverlay(),n.removeModules(),n.img=void 0},this.setUserSelect=function(t){["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach((function(e){n.quill.root.style[e]=t,document.documentElement.style[e]=t}))},this.checkImage=function(t){n.img&&(46!=t.keyCode&&8!=t.keyCode||r.find(n.img).deleteAt(0),n.hide())},this.quill=e;var s=!1;i.modules&&(s=i.modules.slice()),this.options=l()({},i,a.a),!1!==s&&(this.options.modules=s),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.addEventListener("click",this.handleClick,!1),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.moduleClasses=this.options.modules,console.log("this.options.modules",this.options.modules),this.modules=[]};e.default=d,r&&r.register("modules/imageResize",d)},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(66),i=n(67),l=n(68),a=n(69),s=n(70);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=l,r.prototype.has=a,r.prototype.set=s,t.exports=r},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(80),i=n(81),l=n(82),a=n(83),s=n(84);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=l,r.prototype.has=a,r.prototype.set=s,t.exports=r},function(t,e,n){function r(t){var e=this.__data__=new o(t);this.size=e.size}var o=n(3),i=n(92),l=n(93),a=n(94),s=n(95),u=n(96);r.prototype.clear=i,r.prototype.delete=l,r.prototype.get=a,r.prototype.has=s,r.prototype.set=u,t.exports=r},function(t,e,n){var r=n(1).Uint8Array;t.exports=r},function(t,e,n){function r(t,e){var n=l(t),r=!n&&i(t),f=!n&&!r&&a(t),d=!n&&!r&&!f&&u(t),p=n||r||f||d,h=p?o(t.length,String):[],y=h.length;for(var v in t)!e&&!c.call(t,v)||p&&("length"==v||f&&("offset"==v||"parent"==v)||d&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||s(v,y))||h.push(v);return h}var o=n(53),i=n(27),l=n(28),a=n(29),s=n(24),u=n(31),c=Object.prototype.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e,n){var r=t[e];l.call(t,e)&&i(r,n)&&(void 0!==n||e in t)||o(t,e,n)}var o=n(10),i=n(8),l=Object.prototype.hasOwnProperty;t.exports=r},function(t,e,n){var r=n(0),o=Object.create,i=function(){function t(){}return function(e){if(!r(e))return{};if(o)return o(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();t.exports=i},function(t,e,n){var r=n(62)();t.exports=r},function(t,e,n){function r(t){return i(t)&&o(t)==l}var o=n(5),i=n(2),l="[object Arguments]";t.exports=r},function(t,e,n){function r(t){return!(!l(t)||i(t))&&(o(t)?p:s).test(a(t))}var o=n(13),i=n(74),l=n(0),a=n(97),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,f=u.toString,d=c.hasOwnProperty,p=RegExp("^"+f.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t,e,n){function r(t){return l(t)&&i(t.length)&&!!a[o(t)]}var o=n(5),i=n(30),l=n(2),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=r},function(t,e,n){function r(t){if(!o(t))return l(t);var e=i(t),n=[];for(var r in t)("constructor"!=r||!e&&a.call(t,r))&&n.push(r);return n}var o=n(0),i=n(25),l=n(85),a=Object.prototype.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e,n,r,g,m,q){var _=t[n],w=e[n],x=q.get(w);if(x)o(t,n,x);else{var k=m?m(_,w,n+"",t,e,q):void 0,O=void 0===k;if(O){var E=c(w),A=!E&&d(w),j=!E&&!A&&v(w);k=w,E||A||j?c(_)?k=_:f(_)?k=a(_):A?(O=!1,k=i(w,!0)):j?(O=!1,k=l(w,!0)):k=[]:y(w)||u(w)?(k=_,u(_)?k=b(_):(!h(_)||r&&p(_))&&(k=s(w))):O=!1}O&&(q.set(w,k),g(k,w,r,m,q),q.delete(w)),o(t,n,k)}}var o=n(18),i=n(56),l=n(57),a=n(58),s=n(71),u=n(27),c=n(28),f=n(99),d=n(29),p=n(13),h=n(0),y=n(100),v=n(31),b=n(103);t.exports=r},function(t,e,n){var r=n(98),o=n(21),i=n(26),l=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=l},function(t,e){function n(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=n},function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},function(t,e,n){function r(t){var e=new t.constructor(t.byteLength);return new o(e).set(new o(t)),e}var o=n(42);t.exports=r},function(t,e,n){(function(t){function r(t,e){if(e)return t.slice();var n=t.length,r=s?s(n):new t.constructor(n);return t.copy(r),r}var o=n(1),i="object"==typeof e&&e&&!e.nodeType&&e,l=i&&"object"==typeof t&&t&&!t.nodeType&&t,a=l&&l.exports===i?o.Buffer:void 0,s=a?a.allocUnsafe:void 0;t.exports=r}).call(e,n(14)(t))},function(t,e,n){function r(t,e){var n=e?o(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var o=n(55);t.exports=r},function(t,e){function n(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}t.exports=n},function(t,e,n){function r(t,e,n,r){var l=!n;n||(n={});for(var a=-1,s=e.length;++a<s;){var u=e[a],c=r?r(n[u],t[u],u,n,t):void 0;void 0===c&&(c=t[u]),l?i(n,u,c):o(n,u,c)}return n}var o=n(44),i=n(10);t.exports=r},function(t,e,n){var r=n(1)["__core-js_shared__"];t.exports=r},function(t,e,n){function r(t){return o((function(e,n){var r=-1,o=n.length,l=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(l=t.length>3&&"function"==typeof l?(o--,l):void 0,a&&i(n[0],n[1],a)&&(l=o<3?void 0:l,o=1),e=Object(e);++r<o;){var s=n[r];s&&t(e,s,r,l)}return e}))}var o=n(20),i=n(72);t.exports=r},function(t,e){function n(t){return function(e,n,r){for(var o=-1,i=Object(e),l=r(e),a=l.length;a--;){var s=l[t?a:++o];if(!1===n(i[s],s,i))break}return e}}t.exports=n},function(t,e,n){function r(t,e,n,l,a,s){return i(t)&&i(e)&&(s.set(e,t),o(t,e,void 0,r,s),s.delete(e)),t}var o=n(19),i=n(0);t.exports=r},function(t,e,n){function r(t){var e=l.call(t,s),n=t[s];try{t[s]=void 0}catch(t){}var r=a.call(t);return e?t[s]=n:delete t[s],r}var o=n(16),i=Object.prototype,l=i.hasOwnProperty,a=i.toString,s=o?o.toStringTag:void 0;t.exports=r},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(7);t.exports=r},function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},function(t,e,n){function r(t){var e=this.__data__;if(o){var n=e[t];return n===i?void 0:n}return l.call(e,t)?e[t]:void 0}var o=n(7),i="__lodash_hash_undefined__",l=Object.prototype.hasOwnProperty;t.exports=r},function(t,e,n){function r(t){var e=this.__data__;return o?void 0!==e[t]:i.call(e,t)}var o=n(7),i=Object.prototype.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?i:e,this}var o=n(7),i="__lodash_hash_undefined__";t.exports=r},function(t,e,n){function r(t){return"function"!=typeof t.constructor||l(t)?{}:o(i(t))}var o=n(45),i=n(23),l=n(25);t.exports=r},function(t,e,n){function r(t,e,n){if(!a(n))return!1;var r=typeof e;return!!("number"==r?i(n)&&l(e,n.length):"string"==r&&e in n)&&o(n[e],t)}var o=n(8),i=n(12),l=n(24),a=n(0);t.exports=r},function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},function(t,e,n){function r(t){return!!i&&i in t}var o=n(60),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return!(n<0||(n==e.length-1?e.pop():i.call(e,n,1),--this.size,0))}var o=n(4),i=Array.prototype.splice;t.exports=r},function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(4);t.exports=r},function(t,e,n){function r(t){return o(this.__data__,t)>-1}var o=n(4);t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(4);t.exports=r},function(t,e,n){function r(){this.size=0,this.__data__={hash:new o,map:new(l||i),string:new o}}var o=n(39),i=n(3),l=n(15);t.exports=r},function(t,e,n){function r(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=n(6);t.exports=r},function(t,e,n){function r(t){return o(this,t).get(t)}var o=n(6);t.exports=r},function(t,e,n){function r(t){return o(this,t).has(t)}var o=n(6);t.exports=r},function(t,e,n){function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(6);t.exports=r},function(t,e){function n(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}t.exports=n},function(t,e,n){(function(t){var r=n(22),o="object"==typeof e&&e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,l=i&&i.exports===o&&r.process,a=function(){try{return l&&l.binding&&l.binding("util")}catch(t){}}();t.exports=a}).call(e,n(14)(t))},function(t,e){function n(t){return r.call(t)}var r=Object.prototype.toString;t.exports=n},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e,n){function r(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var r=arguments,l=-1,a=i(r.length-e,0),s=Array(a);++l<a;)s[l]=r[e+l];l=-1;for(var u=Array(e+1);++l<e;)u[l]=r[l];return u[e]=n(s),o(t,this,u)}}var o=n(17),i=Math.max;t.exports=r},function(t,e,n){var r=n(52),o=n(91)(r);t.exports=o},function(t,e){function n(t){var e=0,n=0;return function(){var l=i(),a=o-(l-n);if(n=l,a>0){if(++e>=r)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var r=800,o=16,i=Date.now;t.exports=n},function(t,e,n){function r(){this.__data__=new o,this.size=0}var o=n(3);t.exports=r},function(t,e){function n(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}t.exports=n},function(t,e){function n(t){return this.__data__.get(t)}t.exports=n},function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},function(t,e,n){function r(t,e){var n=this.__data__;if(n instanceof o){var r=n.__data__;if(!i||r.length<a-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new l(r)}return n.set(t,e),this.size=n.size,this}var o=n(3),i=n(15),l=n(40),a=200;t.exports=r},function(t,e){function n(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype.toString;t.exports=n},function(t,e){function n(t){return function(){return t}}t.exports=n},function(t,e,n){function r(t){return i(t)&&o(t)}var o=n(12),i=n(2);t.exports=r},function(t,e,n){function r(t){if(!l(t)||o(t)!=a)return!1;var e=i(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==d}var o=n(5),i=n(23),l=n(2),a="[object Object]",s=Function.prototype,u=Object.prototype,c=s.toString,f=u.hasOwnProperty,d=c.call(Object);t.exports=r},function(t,e,n){var r=n(19),o=n(61)((function(t,e,n,o){r(t,e,n,o)}));t.exports=o},function(t,e){function n(){return!1}t.exports=n},function(t,e,n){function r(t){return o(t,i(t))}var o=n(59),i=n(32);t.exports=r},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>'},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}])},76095:function(t,e,n){var r,o=n(48764).lW;"undefined"!=typeof self&&self,r=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=109)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),o=n(18),i=n(19),l=n(45),a=n(46),s=n(47),u=n(48),c=n(49),f=n(12),d=n(32),p=n(33),h=n(31),y=n(1),v={Scope:y.Scope,create:y.create,find:y.find,query:y.query,register:y.register,Container:r.default,Format:o.default,Leaf:i.default,Embed:u.default,Scroll:l.default,Block:s.default,Inline:a.default,Text:c.default,Attributor:{Attribute:f.default,Class:d.default,Style:p.default,Store:h.default}};e.default=v},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e){var n=this;return e="[Parchment] "+e,(n=t.call(this,e)||this).message=e,n.name=n.constructor.name,n}return o(e,t),e}(Error);e.ParchmentError=i;var l,a={},s={},u={},c={};function f(t,e){var n;if(void 0===e&&(e=l.ANY),"string"==typeof t)n=c[t]||a[t];else if(t instanceof Text||t.nodeType===Node.TEXT_NODE)n=c.text;else if("number"==typeof t)t&l.LEVEL&l.BLOCK?n=c.block:t&l.LEVEL&l.INLINE&&(n=c.inline);else if(t instanceof HTMLElement){var r=(t.getAttribute("class")||"").split(/\s+/);for(var o in r)if(n=s[r[o]])break;n=n||u[t.tagName]}return null==n?null:e&l.LEVEL&n.scope&&e&l.TYPE&n.scope?n:null}e.DATA_KEY="__blot",function(t){t[t.TYPE=3]="TYPE",t[t.LEVEL=12]="LEVEL",t[t.ATTRIBUTE=13]="ATTRIBUTE",t[t.BLOT=14]="BLOT",t[t.INLINE=7]="INLINE",t[t.BLOCK=11]="BLOCK",t[t.BLOCK_BLOT=10]="BLOCK_BLOT",t[t.INLINE_BLOT=6]="INLINE_BLOT",t[t.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",t[t.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",t[t.ANY=15]="ANY"}(l=e.Scope||(e.Scope={})),e.create=function(t,e){var n=f(t);if(null==n)throw new i("Unable to create "+t+" blot");var r=n,o=t instanceof Node||t.nodeType===Node.TEXT_NODE?t:r.create(e);return new r(o,e)},e.find=function t(n,r){return void 0===r&&(r=!1),null==n?null:null!=n[e.DATA_KEY]?n[e.DATA_KEY].blot:r?t(n.parentNode,r):null},e.query=f,e.register=function t(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(e.length>1)return e.map((function(e){return t(e)}));var r=e[0];if("string"!=typeof r.blotName&&"string"!=typeof r.attrName)throw new i("Invalid definition");if("abstract"===r.blotName)throw new i("Cannot register abstract class");return c[r.blotName||r.attrName]=r,"string"==typeof r.keyName?a[r.keyName]=r:(null!=r.className&&(s[r.className]=r),null!=r.tagName&&(Array.isArray(r.tagName)?r.tagName=r.tagName.map((function(t){return t.toUpperCase()})):r.tagName=r.tagName.toUpperCase(),(Array.isArray(r.tagName)?r.tagName:[r.tagName]).forEach((function(t){null!=u[t]&&null!=r.className||(u[t]=r)})))),r}},function(t,e,n){var r=n(51),o=n(11),i=n(3),l=n(20),a=String.fromCharCode(0),s=function(t){Array.isArray(t)?this.ops=t:null!=t&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]};s.prototype.insert=function(t,e){var n={};return 0===t.length?this:(n.insert=t,null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(n.attributes=e),this.push(n))},s.prototype.delete=function(t){return t<=0?this:this.push({delete:t})},s.prototype.retain=function(t,e){if(t<=0)return this;var n={retain:t};return null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(n.attributes=e),this.push(n)},s.prototype.push=function(t){var e=this.ops.length,n=this.ops[e-1];if(t=i(!0,{},t),"object"==typeof n){if("number"==typeof t.delete&&"number"==typeof n.delete)return this.ops[e-1]={delete:n.delete+t.delete},this;if("number"==typeof n.delete&&null!=t.insert&&(e-=1,"object"!=typeof(n=this.ops[e-1])))return this.ops.unshift(t),this;if(o(t.attributes,n.attributes)){if("string"==typeof t.insert&&"string"==typeof n.insert)return this.ops[e-1]={insert:n.insert+t.insert},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this;if("number"==typeof t.retain&&"number"==typeof n.retain)return this.ops[e-1]={retain:n.retain+t.retain},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this},s.prototype.chop=function(){var t=this.ops[this.ops.length-1];return t&&t.retain&&!t.attributes&&this.ops.pop(),this},s.prototype.filter=function(t){return this.ops.filter(t)},s.prototype.forEach=function(t){this.ops.forEach(t)},s.prototype.map=function(t){return this.ops.map(t)},s.prototype.partition=function(t){var e=[],n=[];return this.forEach((function(r){(t(r)?e:n).push(r)})),[e,n]},s.prototype.reduce=function(t,e){return this.ops.reduce(t,e)},s.prototype.changeLength=function(){return this.reduce((function(t,e){return e.insert?t+l.length(e):e.delete?t-e.delete:t}),0)},s.prototype.length=function(){return this.reduce((function(t,e){return t+l.length(e)}),0)},s.prototype.slice=function(t,e){t=t||0,"number"!=typeof e&&(e=1/0);for(var n=[],r=l.iterator(this.ops),o=0;o<e&&r.hasNext();){var i;o<t?i=r.next(t-o):(i=r.next(e-o),n.push(i)),o+=l.length(i)}return new s(n)},s.prototype.compose=function(t){var e=l.iterator(this.ops),n=l.iterator(t.ops),r=[],i=n.peek();if(null!=i&&"number"==typeof i.retain&&null==i.attributes){for(var a=i.retain;"insert"===e.peekType()&&e.peekLength()<=a;)a-=e.peekLength(),r.push(e.next());i.retain-a>0&&n.next(i.retain-a)}for(var u=new s(r);e.hasNext()||n.hasNext();)if("insert"===n.peekType())u.push(n.next());else if("delete"===e.peekType())u.push(e.next());else{var c=Math.min(e.peekLength(),n.peekLength()),f=e.next(c),d=n.next(c);if("number"==typeof d.retain){var p={};"number"==typeof f.retain?p.retain=c:p.insert=f.insert;var h=l.attributes.compose(f.attributes,d.attributes,"number"==typeof f.retain);if(h&&(p.attributes=h),u.push(p),!n.hasNext()&&o(u.ops[u.ops.length-1],p)){var y=new s(e.rest());return u.concat(y).chop()}}else"number"==typeof d.delete&&"number"==typeof f.retain&&u.push(d)}return u.chop()},s.prototype.concat=function(t){var e=new s(this.ops.slice());return t.ops.length>0&&(e.push(t.ops[0]),e.ops=e.ops.concat(t.ops.slice(1))),e},s.prototype.diff=function(t,e){if(this.ops===t.ops)return new s;var n=[this,t].map((function(e){return e.map((function(n){if(null!=n.insert)return"string"==typeof n.insert?n.insert:a;throw new Error("diff() called "+(e===t?"on":"with")+" non-document")})).join("")})),i=new s,u=r(n[0],n[1],e),c=l.iterator(this.ops),f=l.iterator(t.ops);return u.forEach((function(t){for(var e=t[1].length;e>0;){var n=0;switch(t[0]){case r.INSERT:n=Math.min(f.peekLength(),e),i.push(f.next(n));break;case r.DELETE:n=Math.min(e,c.peekLength()),c.next(n),i.delete(n);break;case r.EQUAL:n=Math.min(c.peekLength(),f.peekLength(),e);var a=c.next(n),s=f.next(n);o(a.insert,s.insert)?i.retain(n,l.attributes.diff(a.attributes,s.attributes)):i.push(s).delete(n)}e-=n}})),i.chop()},s.prototype.eachLine=function(t,e){e=e||"\n";for(var n=l.iterator(this.ops),r=new s,o=0;n.hasNext();){if("insert"!==n.peekType())return;var i=n.peek(),a=l.length(i)-n.peekLength(),u="string"==typeof i.insert?i.insert.indexOf(e,a)-a:-1;if(u<0)r.push(n.next());else if(u>0)r.push(n.next(u));else{if(!1===t(r,n.next(1).attributes||{},o))return;o+=1,r=new s}}r.length()>0&&t(r,{},o)},s.prototype.transform=function(t,e){if(e=!!e,"number"==typeof t)return this.transformPosition(t,e);for(var n=l.iterator(this.ops),r=l.iterator(t.ops),o=new s;n.hasNext()||r.hasNext();)if("insert"!==n.peekType()||!e&&"insert"===r.peekType())if("insert"===r.peekType())o.push(r.next());else{var i=Math.min(n.peekLength(),r.peekLength()),a=n.next(i),u=r.next(i);if(a.delete)continue;u.delete?o.push(u):o.retain(i,l.attributes.transform(a.attributes,u.attributes,e))}else o.retain(l.length(n.next()));return o.chop()},s.prototype.transformPosition=function(t,e){e=!!e;for(var n=l.iterator(this.ops),r=0;n.hasNext()&&r<=t;){var o=n.peekLength(),i=n.peekType();n.next(),"delete"!==i?("insert"===i&&(r<t||!e)&&(t+=o),r+=o):t-=Math.min(o,t-r)}return t},t.exports=s},function(t,e){"use strict";var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===r.call(t)},a=function(t){if(!t||"[object Object]"!==r.call(t))return!1;var e,o=n.call(t,"constructor"),i=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!o&&!i)return!1;for(e in t);return void 0===e||n.call(t,e)},s=function(t,e){o&&"__proto__"===e.name?o(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},u=function(t,e){if("__proto__"===e){if(!n.call(t,e))return;if(i)return i(t,e).value}return t[e]};t.exports=function t(){var e,n,r,o,i,c,f=arguments[0],d=1,p=arguments.length,h=!1;for("boolean"==typeof f&&(h=f,f=arguments[1]||{},d=2),(null==f||"object"!=typeof f&&"function"!=typeof f)&&(f={});d<p;++d)if(null!=(e=arguments[d]))for(n in e)r=u(f,n),f!==(o=u(e,n))&&(h&&o&&(a(o)||(i=l(o)))?(i?(i=!1,c=r&&l(r)?r:[]):c=r&&a(r)?r:{},s(f,{name:n,newValue:t(h,c,o)})):void 0!==o&&s(f,{name:n,newValue:o}));return f}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BlockEmbed=e.bubbleFormats=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},i=f(n(3)),l=f(n(2)),a=f(n(0)),s=f(n(16)),u=f(n(6)),c=f(n(7));function f(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var y=function(t){function e(){return d(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return h(e,t),r(e,[{key:"attach",value:function(){o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"attach",this).call(this),this.attributes=new a.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return(new l.default).insert(this.value(),(0,i.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(t,e){var n=a.default.query(t,a.default.Scope.BLOCK_ATTRIBUTE);null!=n&&this.attributes.attribute(n,e)}},{key:"formatAt",value:function(t,e,n,r){this.format(n,r)}},{key:"insertAt",value:function(t,n,r){if("string"==typeof n&&n.endsWith("\n")){var i=a.default.create(v.blotName);this.parent.insertBefore(i,0===t?this:this.next),i.insertAt(0,n.slice(0,-1))}else o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r)}}]),e}(a.default.Embed);y.scope=a.default.Scope.BLOCK_BLOT;var v=function(t){function e(t){d(this,e);var n=p(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.cache={},n}return h(e,t),r(e,[{key:"delta",value:function(){return null==this.cache.delta&&(this.cache.delta=this.descendants(a.default.Leaf).reduce((function(t,e){return 0===e.length()?t:t.insert(e.value(),b(e))}),new l.default).insert("\n",b(this))),this.cache.delta}},{key:"deleteAt",value:function(t,n){o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"deleteAt",this).call(this,t,n),this.cache={}}},{key:"formatAt",value:function(t,n,r,i){n<=0||(a.default.query(r,a.default.Scope.BLOCK)?t+n===this.length()&&this.format(r,i):o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,Math.min(n,this.length()-t-1),r,i),this.cache={})}},{key:"insertAt",value:function(t,n,r){if(null!=r)return o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r);if(0!==n.length){var i=n.split("\n"),l=i.shift();l.length>0&&(t<this.length()-1||null==this.children.tail?o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,Math.min(t,this.length()-1),l):this.children.tail.insertAt(this.children.tail.length(),l),this.cache={});var a=this;i.reduce((function(t,e){return(a=a.split(t,!0)).insertAt(0,e),e.length}),t+l.length)}}},{key:"insertBefore",value:function(t,n){var r=this.children.head;o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n),r instanceof s.default&&r.remove(),this.cache={}}},{key:"length",value:function(){return null==this.cache.length&&(this.cache.length=o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"length",this).call(this)+1),this.cache.length}},{key:"moveChildren",value:function(t,n){o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"moveChildren",this).call(this,t,n),this.cache={}}},{key:"optimize",value:function(t){o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),this.cache={}}},{key:"path",value:function(t){return o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"path",this).call(this,t,!0)}},{key:"removeChild",value:function(t){o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"removeChild",this).call(this,t),this.cache={}}},{key:"split",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n&&(0===t||t>=this.length()-1)){var r=this.clone();return 0===t?(this.parent.insertBefore(r,this),this):(this.parent.insertBefore(r,this.next),r)}var i=o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"split",this).call(this,t,n);return this.cache={},i}}]),e}(a.default.Block);function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return null==t?e:("function"==typeof t.formats&&(e=(0,i.default)(e,t.formats())),null==t.parent||"scroll"==t.parent.blotName||t.parent.statics.scope!==t.statics.scope?e:b(t.parent,e))}v.blotName="block",v.tagName="P",v.defaultChild="break",v.allowedChildren=[u.default,a.default.Embed,c.default],e.bubbleFormats=b,e.BlockEmbed=y,e.default=v},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.overload=e.expandConfig=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(50);var l=v(n(2)),a=v(n(14)),s=v(n(8)),u=v(n(9)),c=v(n(0)),f=n(15),d=v(f),p=v(n(3)),h=v(n(10)),y=v(n(34));function v(t){return t&&t.__esModule?t:{default:t}}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=(0,h.default)("quill"),m=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=q(e,r),this.container=this.options.container,null==this.container)return g.error("Invalid Quill container",e);this.options.debug&&t.debug(this.options.debug);var o=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new s.default,this.scroll=c.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new a.default(this.scroll),this.selection=new d.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(s.default.events.EDITOR_CHANGE,(function(t){t===s.default.events.TEXT_CHANGE&&n.root.classList.toggle("ql-blank",n.editor.isBlank())})),this.emitter.on(s.default.events.SCROLL_UPDATE,(function(t,e){var r=n.selection.lastRange,o=r&&0===r.length?r.index:void 0;_.call(n,(function(){return n.editor.update(null,e,o)}),t)}));var i=this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">"+o+"<p><br></p></div>");this.setContents(i),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return i(t,null,[{key:"debug",value:function(t){!0===t&&(t="log"),h.default.level(t)}},{key:"find",value:function(t){return t.__quill||c.default.find(t)}},{key:"import",value:function(t){return null==this.imports[t]&&g.error("Cannot import "+t+". Are you sure it was registered?"),this.imports[t]}},{key:"register",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"!=typeof t){var o=t.attrName||t.blotName;"string"==typeof o?this.register("formats/"+o,t,e):Object.keys(t).forEach((function(r){n.register(r,t[r],e)}))}else null==this.imports[t]||r||g.warn("Overwriting "+t+" with",e),this.imports[t]=e,(t.startsWith("blots/")||t.startsWith("formats/"))&&"abstract"!==e.blotName?c.default.register(e):t.startsWith("modules")&&"function"==typeof e.register&&e.register()}}]),i(t,[{key:"addContainer",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"==typeof t){var n=t;(t=document.createElement("div")).classList.add(n)}return this.container.insertBefore(t,e),t}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(t,e,n){var r=this,i=w(t,e,n),l=o(i,4);return t=l[0],e=l[1],n=l[3],_.call(this,(function(){return r.editor.deleteText(t,e)}),n,t,-1*e)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.scroll.enable(t),this.container.classList.toggle("ql-disabled",!t)}},{key:"focus",value:function(){var t=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=t,this.scrollIntoView()}},{key:"format",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.default.sources.API;return _.call(this,(function(){var r=n.getSelection(!0),o=new l.default;if(null==r)return o;if(c.default.query(t,c.default.Scope.BLOCK))o=n.editor.formatLine(r.index,r.length,b({},t,e));else{if(0===r.length)return n.selection.format(t,e),o;o=n.editor.formatText(r.index,r.length,b({},t,e))}return n.setSelection(r,s.default.sources.SILENT),o}),r)}},{key:"formatLine",value:function(t,e,n,r,i){var l,a=this,s=w(t,e,n,r,i),u=o(s,4);return t=u[0],e=u[1],l=u[2],i=u[3],_.call(this,(function(){return a.editor.formatLine(t,e,l)}),i,t,0)}},{key:"formatText",value:function(t,e,n,r,i){var l,a=this,s=w(t,e,n,r,i),u=o(s,4);return t=u[0],e=u[1],l=u[2],i=u[3],_.call(this,(function(){return a.editor.formatText(t,e,l)}),i,t,0)}},{key:"getBounds",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=void 0;n="number"==typeof t?this.selection.getBounds(t,e):this.selection.getBounds(t.index,t.length);var r=this.container.getBoundingClientRect();return{bottom:n.bottom-r.top,height:n.height,left:n.left-r.left,right:n.right-r.left,top:n.top-r.top,width:n.width}}},{key:"getContents",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t,n=w(t,e),r=o(n,2);return t=r[0],e=r[1],this.editor.getContents(t,e)}},{key:"getFormat",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getSelection(!0),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"number"==typeof t?this.editor.getFormat(t,e):this.editor.getFormat(t.index,t.length)}},{key:"getIndex",value:function(t){return t.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(t){return this.scroll.leaf(t)}},{key:"getLine",value:function(t){return this.scroll.line(t)}},{key:"getLines",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE;return"number"!=typeof t?this.scroll.lines(t.index,t.length):this.scroll.lines(t,e)}},{key:"getModule",value:function(t){return this.theme.modules[t]}},{key:"getSelection",value:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t,n=w(t,e),r=o(n,2);return t=r[0],e=r[1],this.editor.getText(t,e)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(e,n,r){var o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.sources.API;return _.call(this,(function(){return o.editor.insertEmbed(e,n,r)}),i,e)}},{key:"insertText",value:function(t,e,n,r,i){var l,a=this,s=w(t,0,n,r,i),u=o(s,4);return t=u[0],l=u[2],i=u[3],_.call(this,(function(){return a.editor.insertText(t,e,l)}),i,t,e.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(t,e,n){this.clipboard.dangerouslyPasteHTML(t,e,n)}},{key:"removeFormat",value:function(t,e,n){var r=this,i=w(t,e,n),l=o(i,4);return t=l[0],e=l[1],n=l[3],_.call(this,(function(){return r.editor.removeFormat(t,e)}),n,t)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.default.sources.API;return _.call(this,(function(){t=new l.default(t);var n=e.getLength(),r=e.editor.deleteText(0,n),o=e.editor.applyDelta(t),i=o.ops[o.ops.length-1];return null!=i&&"string"==typeof i.insert&&"\n"===i.insert[i.insert.length-1]&&(e.editor.deleteText(e.getLength()-1,1),o.delete(1)),r.compose(o)}),n)}},{key:"setSelection",value:function(e,n,r){if(null==e)this.selection.setRange(null,n||t.sources.API);else{var i=w(e,n,r),l=o(i,4);e=l[0],n=l[1],r=l[3],this.selection.setRange(new f.Range(e,n),r),r!==s.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.default.sources.API,n=(new l.default).insert(t);return this.setContents(n,e)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.default.sources.USER,e=this.scroll.update(t);return this.selection.update(t),e}},{key:"updateContents",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.default.sources.API;return _.call(this,(function(){return t=new l.default(t),e.editor.applyDelta(t,n)}),n,!0)}}]),t}();function q(t,e){if((e=(0,p.default)(!0,{container:t,modules:{clipboard:!0,keyboard:!0,history:!0}},e)).theme&&e.theme!==m.DEFAULTS.theme){if(e.theme=m.import("themes/"+e.theme),null==e.theme)throw new Error("Invalid theme "+e.theme+". Did you register it?")}else e.theme=y.default;var n=(0,p.default)(!0,{},e.theme.DEFAULTS);[n,e].forEach((function(t){t.modules=t.modules||{},Object.keys(t.modules).forEach((function(e){!0===t.modules[e]&&(t.modules[e]={})}))}));var r=Object.keys(n.modules).concat(Object.keys(e.modules)).reduce((function(t,e){var n=m.import("modules/"+e);return null==n?g.error("Cannot load "+e+" module. Are you sure you registered it?"):t[e]=n.DEFAULTS||{},t}),{});return null!=e.modules&&e.modules.toolbar&&e.modules.toolbar.constructor!==Object&&(e.modules.toolbar={container:e.modules.toolbar}),e=(0,p.default)(!0,{},m.DEFAULTS,{modules:r},n,e),["bounds","container","scrollingContainer"].forEach((function(t){"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))})),e.modules=Object.keys(e.modules).reduce((function(t,n){return e.modules[n]&&(t[n]=e.modules[n]),t}),{}),e}function _(t,e,n,r){if(this.options.strict&&!this.isEnabled()&&e===s.default.sources.USER)return new l.default;var o=null==n?null:this.getSelection(),i=this.editor.delta,a=t();if(null!=o&&(!0===n&&(n=o.index),null==r?o=x(o,a,e):0!==r&&(o=x(o,n,r,e)),this.setSelection(o,s.default.sources.SILENT)),a.length()>0){var u,c,f=[s.default.events.TEXT_CHANGE,a,i,e];(u=this.emitter).emit.apply(u,[s.default.events.EDITOR_CHANGE].concat(f)),e!==s.default.sources.SILENT&&(c=this.emitter).emit.apply(c,f)}return a}function w(t,e,n,o,i){var l={};return"number"==typeof t.index&&"number"==typeof t.length?"number"!=typeof e?(i=o,o=n,n=e,e=t.length,t=t.index):(e=t.length,t=t.index):"number"!=typeof e&&(i=o,o=n,n=e,e=0),"object"===(void 0===n?"undefined":r(n))?(l=n,i=o):"string"==typeof n&&(null!=o?l[n]=o:i=n),[t,e,l,i=i||s.default.sources.API]}function x(t,e,n,r){if(null==t)return null;var i=void 0,a=void 0;if(e instanceof l.default){var u=[t.index,t.index+t.length].map((function(t){return e.transformPosition(t,r!==s.default.sources.USER)})),c=o(u,2);i=c[0],a=c[1]}else{var d=[t.index,t.index+t.length].map((function(t){return t<e||t===e&&r===s.default.sources.USER?t:n>=0?t+n:Math.max(e,t+n)})),p=o(d,2);i=p[0],a=p[1]}return new f.Range(i,a-i)}m.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},m.events=s.default.events,m.sources=s.default.sources,m.version="1.3.7",m.imports={delta:l.default,parchment:c.default,"core/module":u.default,"core/theme":y.default},e.expandConfig=q,e.overload=w,e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},i=a(n(7)),l=a(n(0));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"formatAt",value:function(t,n,r,i){if(e.compare(this.statics.blotName,r)<0&&l.default.query(r,l.default.Scope.BLOT)){var a=this.isolate(t,n);i&&a.wrap(r,i)}else o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,n,r,i)}},{key:"optimize",value:function(t){if(o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),this.parent instanceof e&&e.compare(this.statics.blotName,this.parent.statics.blotName)>0){var n=this.parent.isolate(this.offset(),this.length());this.moveChildren(n),n.wrap(this)}}}],[{key:"compare",value:function(t,n){var r=e.order.indexOf(t),o=e.order.indexOf(n);return r>=0||o>=0?r-o:t===n?0:t<n?-1:1}}]),e}(l.default.Inline);s.allowedChildren=[s,l.default.Embed,i.default],s.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(0),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(((r=o)&&r.__esModule?r:{default:r}).default.Text);e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},i=l(n(54));function l(t){return t&&t.__esModule?t:{default:t}}var a=(0,l(n(10)).default)("quill:events");["selectionchange","mousedown","mouseup","click"].forEach((function(t){document.addEventListener(t,(function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];[].slice.call(document.querySelectorAll(".ql-container")).forEach((function(t){var n;t.__quill&&t.__quill.emitter&&(n=t.__quill.emitter).handleDOM.apply(n,e)}))}))}));var s=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.listeners={},t.on("error",a.error),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"emit",value:function(){a.log.apply(a,arguments),o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(this.listeners[t.type]||[]).forEach((function(e){var r=e.node,o=e.handler;(t.target===r||r.contains(t.target))&&o.apply(void 0,[t].concat(n))}))}},{key:"listenDOM",value:function(t,e,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push({node:e,handler:n})}}]),e}(i.default);s.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},s.sources={API:"api",SILENT:"silent",USER:"user"},e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quill=e,this.options=n};r.DEFAULTS={},e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=["error","warn","log","info"],o="warn";function i(t){if(r.indexOf(t)<=r.indexOf(o)){for(var e,n=arguments.length,i=Array(n>1?n-1:0),l=1;l<n;l++)i[l-1]=arguments[l];(e=console)[t].apply(e,i)}}function l(t){return r.reduce((function(e,n){return e[n]=i.bind(console,n,t),e}),{})}i.level=l.level=function(t){o=t},e.default=l},function(t,e,n){var r=Array.prototype.slice,o=n(52),i=n(53),l=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:function(t,e,n){var u,c;if(a(t)||a(e))return!1;if(t.prototype!==e.prototype)return!1;if(i(t))return!!i(e)&&(t=r.call(t),e=r.call(e),l(t,e,n));if(s(t)){if(!s(e))return!1;if(t.length!==e.length)return!1;for(u=0;u<t.length;u++)if(t[u]!==e[u])return!1;return!0}try{var f=o(t),d=o(e)}catch(t){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),u=f.length-1;u>=0;u--)if(f[u]!=d[u])return!1;for(u=f.length-1;u>=0;u--)if(c=f[u],!l(t[c],e[c],n))return!1;return typeof t==typeof e}(t,e,n))};function a(t){return null==t}function s(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length||"function"!=typeof t.copy||"function"!=typeof t.slice||t.length>0&&"number"!=typeof t[0])}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(){function t(t,e,n){void 0===n&&(n={}),this.attrName=t,this.keyName=e;var o=r.Scope.TYPE&r.Scope.ATTRIBUTE;null!=n.scope?this.scope=n.scope&r.Scope.LEVEL|o:this.scope=r.Scope.ATTRIBUTE,null!=n.whitelist&&(this.whitelist=n.whitelist)}return t.keys=function(t){return[].map.call(t.attributes,(function(t){return t.name}))},t.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.setAttribute(this.keyName,e),!0)},t.prototype.canAdd=function(t,e){return null!=r.query(t,r.Scope.BLOT&(this.scope|r.Scope.TYPE))&&(null==this.whitelist||("string"==typeof e?this.whitelist.indexOf(e.replace(/["']/g,""))>-1:this.whitelist.indexOf(e)>-1))},t.prototype.remove=function(t){t.removeAttribute(this.keyName)},t.prototype.value=function(t){var e=t.getAttribute(this.keyName);return this.canAdd(t,e)&&e?e:""},t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Code=void 0;var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=f(n(2)),a=f(n(0)),s=f(n(4)),u=f(n(6)),c=f(n(7));function f(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var y=function(t){function e(){return d(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return h(e,t),e}(u.default);y.blotName="code",y.tagName="CODE";var v=function(t){function e(){return d(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return h(e,t),o(e,[{key:"delta",value:function(){var t=this,e=this.domNode.textContent;return e.endsWith("\n")&&(e=e.slice(0,-1)),e.split("\n").reduce((function(e,n){return e.insert(n).insert("\n",t.formats())}),new l.default)}},{key:"format",value:function(t,n){if(t!==this.statics.blotName||!n){var o=this.descendant(c.default,this.length()-1),l=r(o,1)[0];null!=l&&l.deleteAt(l.length()-1,1),i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}},{key:"formatAt",value:function(t,n,r,o){if(0!==n&&null!=a.default.query(r,a.default.Scope.BLOCK)&&(r!==this.statics.blotName||o!==this.statics.formats(this.domNode))){var i=this.newlineIndex(t);if(!(i<0||i>=t+n)){var l=this.newlineIndex(t,!0)+1,s=i-l+1,u=this.isolate(l,s),c=u.next;u.format(r,o),c instanceof e&&c.formatAt(0,t-l+n-s,r,o)}}}},{key:"insertAt",value:function(t,e,n){if(null==n){var o=this.descendant(c.default,t),i=r(o,2),l=i[0],a=i[1];l.insertAt(a,e)}}},{key:"length",value:function(){var t=this.domNode.textContent.length;return this.domNode.textContent.endsWith("\n")?t:t+1}},{key:"newlineIndex",value:function(t){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1])return this.domNode.textContent.slice(0,t).lastIndexOf("\n");var e=this.domNode.textContent.slice(t).indexOf("\n");return e>-1?t+e:-1}},{key:"optimize",value:function(t){this.domNode.textContent.endsWith("\n")||this.appendChild(a.default.create("text","\n")),i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t);var n=this.next;null!=n&&n.prev===this&&n.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===n.statics.formats(n.domNode)&&(n.optimize(t),n.moveChildren(this),n.remove())}},{key:"replace",value:function(t){i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replace",this).call(this,t),[].slice.call(this.domNode.querySelectorAll("*")).forEach((function(t){var e=a.default.find(t);null==e?t.parentNode.removeChild(t):e instanceof a.default.Embed?e.remove():e.unwrap()}))}}],[{key:"create",value:function(t){var n=i(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return n.setAttribute("spellcheck",!1),n}},{key:"formats",value:function(){return!0}}]),e}(s.default);v.blotName="code-block",v.tagName="PRE",v.TAB="  ",e.Code=y,e.default=v},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=b(n(2)),a=b(n(20)),s=b(n(0)),u=b(n(13)),c=b(n(24)),f=n(4),d=b(f),p=b(n(16)),h=b(n(21)),y=b(n(11)),v=b(n(3));function b(t){return t&&t.__esModule?t:{default:t}}var g=/^[ -~]*$/,m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scroll=e,this.delta=this.getDelta()}return i(t,[{key:"applyDelta",value:function(t){var e=this,n=!1;this.scroll.update();var i=this.scroll.length();return this.scroll.batchStart(),(t=function(t){return t.reduce((function(t,e){if(1===e.insert){var n=(0,h.default)(e.attributes);return delete n.image,t.insert({image:e.attributes.image},n)}if(null==e.attributes||!0!==e.attributes.list&&!0!==e.attributes.bullet||((e=(0,h.default)(e)).attributes.list?e.attributes.list="ordered":(e.attributes.list="bullet",delete e.attributes.bullet)),"string"==typeof e.insert){var r=e.insert.replace(/\r\n/g,"\n").replace(/\r/g,"\n");return t.insert(r,e.attributes)}return t.push(e)}),new l.default)}(t)).reduce((function(t,l){var u=l.retain||l.delete||l.insert.length||1,c=l.attributes||{};if(null!=l.insert){if("string"==typeof l.insert){var p=l.insert;p.endsWith("\n")&&n&&(n=!1,p=p.slice(0,-1)),t>=i&&!p.endsWith("\n")&&(n=!0),e.scroll.insertAt(t,p);var h=e.scroll.line(t),y=o(h,2),b=y[0],g=y[1],m=(0,v.default)({},(0,f.bubbleFormats)(b));if(b instanceof d.default){var q=b.descendant(s.default.Leaf,g),_=o(q,1)[0];m=(0,v.default)(m,(0,f.bubbleFormats)(_))}c=a.default.attributes.diff(m,c)||{}}else if("object"===r(l.insert)){var w=Object.keys(l.insert)[0];if(null==w)return t;e.scroll.insertAt(t,w,l.insert[w])}i+=u}return Object.keys(c).forEach((function(n){e.scroll.formatAt(t,u,n,c[n])})),t+u}),0),t.reduce((function(t,n){return"number"==typeof n.delete?(e.scroll.deleteAt(t,n.delete),t):t+(n.retain||n.insert.length||1)}),0),this.scroll.batchEnd(),this.update(t)}},{key:"deleteText",value:function(t,e){return this.scroll.deleteAt(t,e),this.update((new l.default).retain(t).delete(e))}},{key:"formatLine",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.scroll.update(),Object.keys(r).forEach((function(o){if(null==n.scroll.whitelist||n.scroll.whitelist[o]){var i=n.scroll.lines(t,Math.max(e,1)),l=e;i.forEach((function(e){var i=e.length();if(e instanceof u.default){var a=t-e.offset(n.scroll),s=e.newlineIndex(a+l)-a+1;e.formatAt(a,s,o,r[o])}else e.format(o,r[o]);l-=i}))}})),this.scroll.optimize(),this.update((new l.default).retain(t).retain(e,(0,h.default)(r)))}},{key:"formatText",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object.keys(r).forEach((function(o){n.scroll.formatAt(t,e,o,r[o])})),this.update((new l.default).retain(t).retain(e,(0,h.default)(r)))}},{key:"getContents",value:function(t,e){return this.delta.slice(t,t+e)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce((function(t,e){return t.concat(e.delta())}),new l.default)}},{key:"getFormat",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],r=[];0===e?this.scroll.path(t).forEach((function(t){var e=o(t,1)[0];e instanceof d.default?n.push(e):e instanceof s.default.Leaf&&r.push(e)})):(n=this.scroll.lines(t,e),r=this.scroll.descendants(s.default.Leaf,t,e));var i=[n,r].map((function(t){if(0===t.length)return{};for(var e=(0,f.bubbleFormats)(t.shift());Object.keys(e).length>0;){var n=t.shift();if(null==n)return e;e=q((0,f.bubbleFormats)(n),e)}return e}));return v.default.apply(v.default,i)}},{key:"getText",value:function(t,e){return this.getContents(t,e).filter((function(t){return"string"==typeof t.insert})).map((function(t){return t.insert})).join("")}},{key:"insertEmbed",value:function(t,e,n){return this.scroll.insertAt(t,e,n),this.update((new l.default).retain(t).insert(function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},e,n)))}},{key:"insertText",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e=e.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),this.scroll.insertAt(t,e),Object.keys(r).forEach((function(o){n.scroll.formatAt(t,e.length,o,r[o])})),this.update((new l.default).retain(t).insert(e,(0,h.default)(r)))}},{key:"isBlank",value:function(){if(0==this.scroll.children.length)return!0;if(this.scroll.children.length>1)return!1;var t=this.scroll.children.head;return t.statics.blotName===d.default.blotName&&!(t.children.length>1)&&t.children.head instanceof p.default}},{key:"removeFormat",value:function(t,e){var n=this.getText(t,e),r=this.scroll.line(t+e),i=o(r,2),a=i[0],s=i[1],c=0,f=new l.default;null!=a&&(c=a instanceof u.default?a.newlineIndex(s)-s+1:a.length()-s,f=a.delta().slice(s,s+c-1).insert("\n"));var d=this.getContents(t,e+c).diff((new l.default).insert(n).concat(f)),p=(new l.default).retain(t).concat(d);return this.applyDelta(p)}},{key:"update",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=this.delta;if(1===e.length&&"characterData"===e[0].type&&e[0].target.data.match(g)&&s.default.find(e[0].target)){var o=s.default.find(e[0].target),i=(0,f.bubbleFormats)(o),a=o.offset(this.scroll),u=e[0].oldValue.replace(c.default.CONTENTS,""),d=(new l.default).insert(u),p=(new l.default).insert(o.value());t=(new l.default).retain(a).concat(d.diff(p,n)).reduce((function(t,e){return e.insert?t.insert(e.insert,i):t.push(e)}),new l.default),this.delta=r.compose(t)}else this.delta=this.getDelta(),t&&(0,y.default)(r.compose(t),this.delta)||(t=r.diff(this.delta,n));return t}}]),t}();function q(t,e){return Object.keys(e).reduce((function(n,r){return null==t[r]||(e[r]===t[r]?n[r]=e[r]:Array.isArray(e[r])?e[r].indexOf(t[r])<0&&(n[r]=e[r].concat([t[r]])):n[r]=[e[r],t[r]]),n}),{})}e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Range=void 0;var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=u(n(0)),l=u(n(21)),a=u(n(11)),s=u(n(8));function u(t){return t&&t.__esModule?t:{default:t}}function c(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var d=(0,u(n(10)).default)("quill:selection"),p=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;f(this,t),this.index=e,this.length=n},h=function(){function t(e,n){var r=this;f(this,t),this.emitter=n,this.scroll=e,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=i.default.create("cursor",this),this.lastRange=this.savedRange=new p(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,(function(){r.mouseDown||setTimeout(r.update.bind(r,s.default.sources.USER),1)})),this.emitter.on(s.default.events.EDITOR_CHANGE,(function(t,e){t===s.default.events.TEXT_CHANGE&&e.length()>0&&r.update(s.default.sources.SILENT)})),this.emitter.on(s.default.events.SCROLL_BEFORE_UPDATE,(function(){if(r.hasFocus()){var t=r.getNativeRange();null!=t&&t.start.node!==r.cursor.textNode&&r.emitter.once(s.default.events.SCROLL_UPDATE,(function(){try{r.setNativeRange(t.start.node,t.start.offset,t.end.node,t.end.offset)}catch(t){}}))}})),this.emitter.on(s.default.events.SCROLL_OPTIMIZE,(function(t,e){if(e.range){var n=e.range,o=n.startNode,i=n.startOffset,l=n.endNode,a=n.endOffset;r.setNativeRange(o,i,l,a)}})),this.update(s.default.sources.SILENT)}return o(t,[{key:"handleComposition",value:function(){var t=this;this.root.addEventListener("compositionstart",(function(){t.composing=!0})),this.root.addEventListener("compositionend",(function(){if(t.composing=!1,t.cursor.parent){var e=t.cursor.restore();if(!e)return;setTimeout((function(){t.setNativeRange(e.startNode,e.startOffset,e.endNode,e.endOffset)}),1)}}))}},{key:"handleDragging",value:function(){var t=this;this.emitter.listenDOM("mousedown",document.body,(function(){t.mouseDown=!0})),this.emitter.listenDOM("mouseup",document.body,(function(){t.mouseDown=!1,t.update(s.default.sources.USER)}))}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(t,e){if(null==this.scroll.whitelist||this.scroll.whitelist[t]){this.scroll.update();var n=this.getNativeRange();if(null!=n&&n.native.collapsed&&!i.default.query(t,i.default.Scope.BLOCK)){if(n.start.node!==this.cursor.textNode){var r=i.default.find(n.start.node,!1);if(null==r)return;if(r instanceof i.default.Leaf){var o=r.split(n.start.offset);r.parent.insertBefore(this.cursor,o)}else r.insertBefore(this.cursor,n.start.node);this.cursor.attach()}this.cursor.format(t,e),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.scroll.length();t=Math.min(t,n-1),e=Math.min(t+e,n-1)-t;var o=void 0,i=this.scroll.leaf(t),l=r(i,2),a=l[0],s=l[1];if(null==a)return null;var u=a.position(s,!0),c=r(u,2);o=c[0],s=c[1];var f=document.createRange();if(e>0){f.setStart(o,s);var d=this.scroll.leaf(t+e),p=r(d,2);if(a=p[0],s=p[1],null==a)return null;var h=a.position(s,!0),y=r(h,2);return o=y[0],s=y[1],f.setEnd(o,s),f.getBoundingClientRect()}var v="left",b=void 0;return o instanceof Text?(s<o.data.length?(f.setStart(o,s),f.setEnd(o,s+1)):(f.setStart(o,s-1),f.setEnd(o,s),v="right"),b=f.getBoundingClientRect()):(b=a.domNode.getBoundingClientRect(),s>0&&(v="right")),{bottom:b.top+b.height,height:b.height,left:b[v],right:b[v],top:b.top,width:0}}},{key:"getNativeRange",value:function(){var t=document.getSelection();if(null==t||t.rangeCount<=0)return null;var e=t.getRangeAt(0);if(null==e)return null;var n=this.normalizeNative(e);return d.info("getNativeRange",n),n}},{key:"getRange",value:function(){var t=this.getNativeRange();return null==t?[null,null]:[this.normalizedToRange(t),t]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(t){var e=this,n=[[t.start.node,t.start.offset]];t.native.collapsed||n.push([t.end.node,t.end.offset]);var o=n.map((function(t){var n=r(t,2),o=n[0],l=n[1],a=i.default.find(o,!0),s=a.offset(e.scroll);return 0===l?s:a instanceof i.default.Container?s+a.length():s+a.index(o,l)})),l=Math.min(Math.max.apply(Math,c(o)),this.scroll.length()-1),a=Math.min.apply(Math,[l].concat(c(o)));return new p(a,l-a)}},{key:"normalizeNative",value:function(t){if(!y(this.root,t.startContainer)||!t.collapsed&&!y(this.root,t.endContainer))return null;var e={start:{node:t.startContainer,offset:t.startOffset},end:{node:t.endContainer,offset:t.endOffset},native:t};return[e.start,e.end].forEach((function(t){for(var e=t.node,n=t.offset;!(e instanceof Text)&&e.childNodes.length>0;)if(e.childNodes.length>n)e=e.childNodes[n],n=0;else{if(e.childNodes.length!==n)break;n=(e=e.lastChild)instanceof Text?e.data.length:e.childNodes.length+1}t.node=e,t.offset=n})),e}},{key:"rangeToNative",value:function(t){var e=this,n=t.collapsed?[t.index]:[t.index,t.index+t.length],o=[],i=this.scroll.length();return n.forEach((function(t,n){t=Math.min(i-1,t);var l,a=e.scroll.leaf(t),s=r(a,2),u=s[0],c=s[1],f=u.position(c,0!==n),d=r(f,2);l=d[0],c=d[1],o.push(l,c)})),o.length<2&&(o=o.concat(o)),o}},{key:"scrollIntoView",value:function(t){var e=this.lastRange;if(null!=e){var n=this.getBounds(e.index,e.length);if(null!=n){var o=this.scroll.length()-1,i=this.scroll.line(Math.min(e.index,o)),l=r(i,1)[0],a=l;if(e.length>0){var s=this.scroll.line(Math.min(e.index+e.length,o));a=r(s,1)[0]}if(null!=l&&null!=a){var u=t.getBoundingClientRect();n.top<u.top?t.scrollTop-=u.top-n.top:n.bottom>u.bottom&&(t.scrollTop+=n.bottom-u.bottom)}}}}},{key:"setNativeRange",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(d.info("setNativeRange",t,e,n,r),null==t||null!=this.root.parentNode&&null!=t.parentNode&&null!=n.parentNode){var i=document.getSelection();if(null!=i)if(null!=t){this.hasFocus()||this.root.focus();var l=(this.getNativeRange()||{}).native;if(null==l||o||t!==l.startContainer||e!==l.startOffset||n!==l.endContainer||r!==l.endOffset){"BR"==t.tagName&&(e=[].indexOf.call(t.parentNode.childNodes,t),t=t.parentNode),"BR"==n.tagName&&(r=[].indexOf.call(n.parentNode.childNodes,n),n=n.parentNode);var a=document.createRange();a.setStart(t,e),a.setEnd(n,r),i.removeAllRanges(),i.addRange(a)}}else i.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.default.sources.API;if("string"==typeof e&&(n=e,e=!1),d.info("setRange",t),null!=t){var r=this.rangeToNative(t);this.setNativeRange.apply(this,c(r).concat([e]))}else this.setNativeRange(null);this.update(n)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.default.sources.USER,e=this.lastRange,n=this.getRange(),o=r(n,2),i=o[0],u=o[1];if(this.lastRange=i,null!=this.lastRange&&(this.savedRange=this.lastRange),!(0,a.default)(e,this.lastRange)){var c;!this.composing&&null!=u&&u.native.collapsed&&u.start.node!==this.cursor.textNode&&this.cursor.restore();var f,d=[s.default.events.SELECTION_CHANGE,(0,l.default)(this.lastRange),(0,l.default)(e),t];(c=this.emitter).emit.apply(c,[s.default.events.EDITOR_CHANGE].concat(d)),t!==s.default.sources.SILENT&&(f=this.emitter).emit.apply(f,d)}}}]),t}();function y(t,e){try{e.parentNode}catch(t){return!1}return e instanceof Text&&(e=e.parentNode),t.contains(e)}e.Range=p,e.default=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=n(0),a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"insertInto",value:function(t,n){0===t.children.length?i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertInto",this).call(this,t,n):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),e}(((r=l)&&r.__esModule?r:{default:r}).default.Embed);a.blotName="break",a.tagName="BR",e.default=a},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(44),l=n(30),a=n(1),s=function(t){function e(e){var n=t.call(this,e)||this;return n.build(),n}return o(e,t),e.prototype.appendChild=function(t){this.insertBefore(t)},e.prototype.attach=function(){t.prototype.attach.call(this),this.children.forEach((function(t){t.attach()}))},e.prototype.build=function(){var t=this;this.children=new i.default,[].slice.call(this.domNode.childNodes).reverse().forEach((function(e){try{var n=u(e);t.insertBefore(n,t.children.head||void 0)}catch(t){if(t instanceof a.ParchmentError)return;throw t}}))},e.prototype.deleteAt=function(t,e){if(0===t&&e===this.length())return this.remove();this.children.forEachAt(t,e,(function(t,e,n){t.deleteAt(e,n)}))},e.prototype.descendant=function(t,n){var r=this.children.find(n),o=r[0],i=r[1];return null==t.blotName&&t(o)||null!=t.blotName&&o instanceof t?[o,i]:o instanceof e?o.descendant(t,i):[null,-1]},e.prototype.descendants=function(t,n,r){void 0===n&&(n=0),void 0===r&&(r=Number.MAX_VALUE);var o=[],i=r;return this.children.forEachAt(n,r,(function(n,r,l){(null==t.blotName&&t(n)||null!=t.blotName&&n instanceof t)&&o.push(n),n instanceof e&&(o=o.concat(n.descendants(t,r,i))),i-=l})),o},e.prototype.detach=function(){this.children.forEach((function(t){t.detach()})),t.prototype.detach.call(this)},e.prototype.formatAt=function(t,e,n,r){this.children.forEachAt(t,e,(function(t,e,o){t.formatAt(e,o,n,r)}))},e.prototype.insertAt=function(t,e,n){var r=this.children.find(t),o=r[0],i=r[1];if(o)o.insertAt(i,e,n);else{var l=null==n?a.create("text",e):a.create(e,n);this.appendChild(l)}},e.prototype.insertBefore=function(t,e){if(null!=this.statics.allowedChildren&&!this.statics.allowedChildren.some((function(e){return t instanceof e})))throw new a.ParchmentError("Cannot insert "+t.statics.blotName+" into "+this.statics.blotName);t.insertInto(this,e)},e.prototype.length=function(){return this.children.reduce((function(t,e){return t+e.length()}),0)},e.prototype.moveChildren=function(t,e){this.children.forEach((function(n){t.insertBefore(n,e)}))},e.prototype.optimize=function(e){if(t.prototype.optimize.call(this,e),0===this.children.length)if(null!=this.statics.defaultChild){var n=a.create(this.statics.defaultChild);this.appendChild(n),n.optimize(e)}else this.remove()},e.prototype.path=function(t,n){void 0===n&&(n=!1);var r=this.children.find(t,n),o=r[0],i=r[1],l=[[this,t]];return o instanceof e?l.concat(o.path(i,n)):(null!=o&&l.push([o,i]),l)},e.prototype.removeChild=function(t){this.children.remove(t)},e.prototype.replace=function(n){n instanceof e&&n.moveChildren(this),t.prototype.replace.call(this,n)},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var n=this.clone();return this.parent.insertBefore(n,this.next),this.children.forEachAt(t,this.length(),(function(t,r,o){t=t.split(r,e),n.appendChild(t)})),n},e.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},e.prototype.update=function(t,e){var n=this,r=[],o=[];t.forEach((function(t){t.target===n.domNode&&"childList"===t.type&&(r.push.apply(r,t.addedNodes),o.push.apply(o,t.removedNodes))})),o.forEach((function(t){if(!(null!=t.parentNode&&"IFRAME"!==t.tagName&&document.body.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var e=a.find(t);null!=e&&(null!=e.domNode.parentNode&&e.domNode.parentNode!==n.domNode||e.detach())}})),r.filter((function(t){return t.parentNode==n.domNode})).sort((function(t,e){return t===e?0:t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1})).forEach((function(t){var e=null;null!=t.nextSibling&&(e=a.find(t.nextSibling));var r=u(t);r.next==e&&null!=r.next||(null!=r.parent&&r.parent.removeChild(n),n.insertBefore(r,e||void 0))}))},e}(l.default);function u(t){var e=a.find(t);if(null==e)try{e=a.create(t)}catch(n){e=a.create(a.Scope.INLINE),[].slice.call(t.childNodes).forEach((function(t){e.domNode.appendChild(t)})),t.parentNode&&t.parentNode.replaceChild(e.domNode,t),e.attach()}return e}e.default=s},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(12),l=n(31),a=n(17),s=n(1),u=function(t){function e(e){var n=t.call(this,e)||this;return n.attributes=new l.default(n.domNode),n}return o(e,t),e.formats=function(t){return"string"==typeof this.tagName||(Array.isArray(this.tagName)?t.tagName.toLowerCase():void 0)},e.prototype.format=function(t,e){var n=s.query(t);n instanceof i.default?this.attributes.attribute(n,e):e&&(null==n||t===this.statics.blotName&&this.formats()[t]===e||this.replaceWith(t,e))},e.prototype.formats=function(){var t=this.attributes.values(),e=this.statics.formats(this.domNode);return null!=e&&(t[this.statics.blotName]=e),t},e.prototype.replaceWith=function(e,n){var r=t.prototype.replaceWith.call(this,e,n);return this.attributes.copy(r),r},e.prototype.update=function(e,n){var r=this;t.prototype.update.call(this,e,n),e.some((function(t){return t.target===r.domNode&&"attributes"===t.type}))&&this.attributes.build()},e.prototype.wrap=function(n,r){var o=t.prototype.wrap.call(this,n,r);return o instanceof e&&o.statics.scope===this.statics.scope&&this.attributes.move(o),o},e}(a.default);e.default=u},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(30),l=n(1),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.value=function(t){return!0},e.prototype.index=function(t,e){return this.domNode===t||this.domNode.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(e,1):-1},e.prototype.position=function(t,e){var n=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return t>0&&(n+=1),[this.parent.domNode,n]},e.prototype.value=function(){var t;return(t={})[this.statics.blotName]=this.statics.value(this.domNode)||!0,t},e.scope=l.Scope.INLINE_BLOT,e}(i.default);e.default=a},function(t,e,n){var r=n(11),o=n(3),i={attributes:{compose:function(t,e,n){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var r=o(!0,{},e);for(var i in n||(r=Object.keys(r).reduce((function(t,e){return null!=r[e]&&(t[e]=r[e]),t}),{})),t)void 0!==t[i]&&void 0===e[i]&&(r[i]=t[i]);return Object.keys(r).length>0?r:void 0},diff:function(t,e){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var n=Object.keys(t).concat(Object.keys(e)).reduce((function(n,o){return r(t[o],e[o])||(n[o]=void 0===e[o]?null:e[o]),n}),{});return Object.keys(n).length>0?n:void 0},transform:function(t,e,n){if("object"!=typeof t)return e;if("object"==typeof e){if(!n)return e;var r=Object.keys(e).reduce((function(n,r){return void 0===t[r]&&(n[r]=e[r]),n}),{});return Object.keys(r).length>0?r:void 0}}},iterator:function(t){return new l(t)},length:function(t){return"number"==typeof t.delete?t.delete:"number"==typeof t.retain?t.retain:"string"==typeof t.insert?t.insert.length:1}};function l(t){this.ops=t,this.index=0,this.offset=0}l.prototype.hasNext=function(){return this.peekLength()<1/0},l.prototype.next=function(t){t||(t=1/0);var e=this.ops[this.index];if(e){var n=this.offset,r=i.length(e);if(t>=r-n?(t=r-n,this.index+=1,this.offset=0):this.offset+=t,"number"==typeof e.delete)return{delete:t};var o={};return e.attributes&&(o.attributes=e.attributes),"number"==typeof e.retain?o.retain=t:"string"==typeof e.insert?o.insert=e.insert.substr(n,t):o.insert=e.insert,o}return{retain:1/0}},l.prototype.peek=function(){return this.ops[this.index]},l.prototype.peekLength=function(){return this.ops[this.index]?i.length(this.ops[this.index])-this.offset:1/0},l.prototype.peekType=function(){return this.ops[this.index]?"number"==typeof this.ops[this.index].delete?"delete":"number"==typeof this.ops[this.index].retain?"retain":"insert":"retain"},l.prototype.rest=function(){if(this.hasNext()){if(0===this.offset)return this.ops.slice(this.index);var t=this.offset,e=this.index,n=this.next(),r=this.ops.slice(this.index);return this.offset=t,this.index=e,[n].concat(r)}return[]},t.exports=i},function(t,e){var n=function(){"use strict";function t(t,e){return null!=e&&t instanceof e}var e,n,r;try{e=Map}catch(t){e=function(){}}try{n=Set}catch(t){n=function(){}}try{r=Promise}catch(t){r=function(){}}function i(l,s,u,c,f){"object"==typeof s&&(u=s.depth,c=s.prototype,f=s.includeNonEnumerable,s=s.circular);var d=[],p=[],h=void 0!==o;return void 0===s&&(s=!0),void 0===u&&(u=1/0),function l(u,y){if(null===u)return null;if(0===y)return u;var v,b;if("object"!=typeof u)return u;if(t(u,e))v=new e;else if(t(u,n))v=new n;else if(t(u,r))v=new r((function(t,e){u.then((function(e){t(l(e,y-1))}),(function(t){e(l(t,y-1))}))}));else if(i.__isArray(u))v=[];else if(i.__isRegExp(u))v=new RegExp(u.source,a(u)),u.lastIndex&&(v.lastIndex=u.lastIndex);else if(i.__isDate(u))v=new Date(u.getTime());else{if(h&&o.isBuffer(u))return v=o.allocUnsafe?o.allocUnsafe(u.length):new o(u.length),u.copy(v),v;t(u,Error)?v=Object.create(u):void 0===c?(b=Object.getPrototypeOf(u),v=Object.create(b)):(v=Object.create(c),b=c)}if(s){var g=d.indexOf(u);if(-1!=g)return p[g];d.push(u),p.push(v)}for(var m in t(u,e)&&u.forEach((function(t,e){var n=l(e,y-1),r=l(t,y-1);v.set(n,r)})),t(u,n)&&u.forEach((function(t){var e=l(t,y-1);v.add(e)})),u){var q;b&&(q=Object.getOwnPropertyDescriptor(b,m)),q&&null==q.set||(v[m]=l(u[m],y-1))}if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(u);for(m=0;m<_.length;m++){var w=_[m];(!(k=Object.getOwnPropertyDescriptor(u,w))||k.enumerable||f)&&(v[w]=l(u[w],y-1),k.enumerable||Object.defineProperty(v,w,{enumerable:!1}))}}if(f){var x=Object.getOwnPropertyNames(u);for(m=0;m<x.length;m++){var k,O=x[m];(k=Object.getOwnPropertyDescriptor(u,O))&&k.enumerable||(v[O]=l(u[O],y-1),Object.defineProperty(v,O,{enumerable:!1}))}}return v}(l,u)}function l(t){return Object.prototype.toString.call(t)}function a(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}return i.clonePrototype=function(t){if(null===t)return null;var e=function(){};return e.prototype=t,new e},i.__objToStr=l,i.__isDate=function(t){return"object"==typeof t&&"[object Date]"===l(t)},i.__isArray=function(t){return"object"==typeof t&&"[object Array]"===l(t)},i.__isRegExp=function(t){return"object"==typeof t&&"[object RegExp]"===l(t)},i.__getRegExpFlags=a,i}();"object"==typeof t&&t.exports&&(t.exports=n)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=p(n(0)),a=p(n(8)),s=n(4),u=p(s),c=p(n(16)),f=p(n(13)),d=p(n(25));function p(t){return t&&t.__esModule?t:{default:t}}function h(t){return t instanceof u.default||t instanceof s.BlockEmbed}var y=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.emitter=n.emitter,Array.isArray(n.whitelist)&&(r.whitelist=n.whitelist.reduce((function(t,e){return t[e]=!0,t}),{})),r.domNode.addEventListener("DOMNodeInserted",(function(){})),r.optimize(),r.enable(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(t,n){var o=this.line(t),l=r(o,2),a=l[0],u=l[1],d=this.line(t+n),p=r(d,1)[0];if(i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"deleteAt",this).call(this,t,n),null!=p&&a!==p&&u>0){if(a instanceof s.BlockEmbed||p instanceof s.BlockEmbed)return void this.optimize();if(a instanceof f.default){var h=a.newlineIndex(a.length(),!0);if(h>-1&&(a=a.split(h+1))===p)return void this.optimize()}else if(p instanceof f.default){var y=p.newlineIndex(0);y>-1&&p.split(y+1)}var v=p.children.head instanceof c.default?null:p.children.head;a.moveChildren(p,v),a.remove()}this.optimize()}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.domNode.setAttribute("contenteditable",t)}},{key:"formatAt",value:function(t,n,r,o){(null==this.whitelist||this.whitelist[r])&&(i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,n,r,o),this.optimize())}},{key:"insertAt",value:function(t,n,r){if(null==r||null==this.whitelist||this.whitelist[n]){if(t>=this.length())if(null==r||null==l.default.query(n,l.default.Scope.BLOCK)){var o=l.default.create(this.statics.defaultChild);this.appendChild(o),null==r&&n.endsWith("\n")&&(n=n.slice(0,-1)),o.insertAt(0,n,r)}else{var a=l.default.create(n,r);this.appendChild(a)}else i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r);this.optimize()}}},{key:"insertBefore",value:function(t,n){if(t.statics.scope===l.default.Scope.INLINE_BLOT){var r=l.default.create(this.statics.defaultChild);r.appendChild(t),t=r}i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n)}},{key:"leaf",value:function(t){return this.path(t).pop()||[null,-1]}},{key:"line",value:function(t){return t===this.length()?this.line(t-1):this.descendant(h,t)}},{key:"lines",value:function(){return function t(e,n,r){var o=[],i=r;return e.children.forEachAt(n,r,(function(e,n,r){h(e)?o.push(e):e instanceof l.default.Container&&(o=o.concat(t(e,n,i))),i-=r})),o}(this,arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE)}},{key:"optimize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!0!==this.batch&&(i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t,n),t.length>0&&this.emitter.emit(a.default.events.SCROLL_OPTIMIZE,t,n))}},{key:"path",value:function(t){return i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"path",this).call(this,t).slice(1)}},{key:"update",value:function(t){if(!0!==this.batch){var n=a.default.sources.USER;"string"==typeof t&&(n=t),Array.isArray(t)||(t=this.observer.takeRecords()),t.length>0&&this.emitter.emit(a.default.events.SCROLL_BEFORE_UPDATE,n,t),i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"update",this).call(this,t.concat([])),t.length>0&&this.emitter.emit(a.default.events.SCROLL_UPDATE,n,t)}}}]),e}(l.default.Scroll);y.blotName="scroll",y.className="ql-editor",y.tagName="DIV",y.defaultChild="block",y.allowedChildren=[u.default,s.BlockEmbed,d.default],e.default=y},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SHORTKEY=e.default=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=y(n(21)),a=y(n(11)),s=y(n(3)),u=y(n(2)),c=y(n(20)),f=y(n(0)),d=y(n(5)),p=y(n(10)),h=y(n(9));function y(t){return t&&t.__esModule?t:{default:t}}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=(0,p.default)("quill:keyboard"),g=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",m=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.bindings={},Object.keys(r.options.bindings).forEach((function(e){("list autofill"!==e||null==t.scroll.whitelist||t.scroll.whitelist.list)&&r.options.bindings[e]&&r.addBinding(r.options.bindings[e])})),r.addBinding({key:e.keys.ENTER,shiftKey:null},k),r.addBinding({key:e.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},(function(){})),/Firefox/i.test(navigator.userAgent)?(r.addBinding({key:e.keys.BACKSPACE},{collapsed:!0},_),r.addBinding({key:e.keys.DELETE},{collapsed:!0},w)):(r.addBinding({key:e.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},_),r.addBinding({key:e.keys.DELETE},{collapsed:!0,suffix:/^.?$/},w)),r.addBinding({key:e.keys.BACKSPACE},{collapsed:!1},x),r.addBinding({key:e.keys.DELETE},{collapsed:!1},x),r.addBinding({key:e.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},_),r.listen(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,null,[{key:"match",value:function(t,e){return e=A(e),!["altKey","ctrlKey","metaKey","shiftKey"].some((function(n){return!!e[n]!==t[n]&&null!==e[n]}))&&e.key===(t.which||t.keyCode)}}]),i(e,[{key:"addBinding",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=A(t);if(null==r||null==r.key)return b.warn("Attempted to add invalid keyboard binding",r);"function"==typeof e&&(e={handler:e}),"function"==typeof n&&(n={handler:n}),r=(0,s.default)(r,e,n),this.bindings[r.key]=this.bindings[r.key]||[],this.bindings[r.key].push(r)}},{key:"listen",value:function(){var t=this;this.quill.root.addEventListener("keydown",(function(n){if(!n.defaultPrevented){var i=n.which||n.keyCode,l=(t.bindings[i]||[]).filter((function(t){return e.match(n,t)}));if(0!==l.length){var s=t.quill.getSelection();if(null!=s&&t.quill.hasFocus()){var u=t.quill.getLine(s.index),c=o(u,2),d=c[0],p=c[1],h=t.quill.getLeaf(s.index),y=o(h,2),v=y[0],b=y[1],g=0===s.length?[v,b]:t.quill.getLeaf(s.index+s.length),m=o(g,2),q=m[0],_=m[1],w=v instanceof f.default.Text?v.value().slice(0,b):"",x=q instanceof f.default.Text?q.value().slice(_):"",k={collapsed:0===s.length,empty:0===s.length&&d.length()<=1,format:t.quill.getFormat(s),offset:p,prefix:w,suffix:x};l.some((function(e){if(null!=e.collapsed&&e.collapsed!==k.collapsed)return!1;if(null!=e.empty&&e.empty!==k.empty)return!1;if(null!=e.offset&&e.offset!==k.offset)return!1;if(Array.isArray(e.format)){if(e.format.every((function(t){return null==k.format[t]})))return!1}else if("object"===r(e.format)&&!Object.keys(e.format).every((function(t){return!0===e.format[t]?null!=k.format[t]:!1===e.format[t]?null==k.format[t]:(0,a.default)(e.format[t],k.format[t])})))return!1;return!(null!=e.prefix&&!e.prefix.test(k.prefix)||null!=e.suffix&&!e.suffix.test(k.suffix)||!0===e.handler.call(t,s,k))}))&&n.preventDefault()}}}}))}}]),e}(h.default);function q(t,e){var n,r=t===m.keys.LEFT?"prefix":"suffix";return v(n={key:t,shiftKey:e,altKey:null},r,/^$/),v(n,"handler",(function(n){var r=n.index;t===m.keys.RIGHT&&(r+=n.length+1);var i=this.quill.getLeaf(r);return!(o(i,1)[0]instanceof f.default.Embed&&(t===m.keys.LEFT?e?this.quill.setSelection(n.index-1,n.length+1,d.default.sources.USER):this.quill.setSelection(n.index-1,d.default.sources.USER):e?this.quill.setSelection(n.index,n.length+1,d.default.sources.USER):this.quill.setSelection(n.index+n.length+1,d.default.sources.USER),1))})),n}function _(t,e){if(!(0===t.index||this.quill.getLength()<=1)){var n=this.quill.getLine(t.index),r=o(n,1)[0],i={};if(0===e.offset){var l=this.quill.getLine(t.index-1),a=o(l,1)[0];if(null!=a&&a.length()>1){var s=r.formats(),u=this.quill.getFormat(t.index-1,1);i=c.default.attributes.diff(s,u)||{}}}var f=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)?2:1;this.quill.deleteText(t.index-f,f,d.default.sources.USER),Object.keys(i).length>0&&this.quill.formatLine(t.index-f,f,i,d.default.sources.USER),this.quill.focus()}}function w(t,e){var n=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)?2:1;if(!(t.index>=this.quill.getLength()-n)){var r={},i=0,l=this.quill.getLine(t.index),a=o(l,1)[0];if(e.offset>=a.length()-1){var s=this.quill.getLine(t.index+1),u=o(s,1)[0];if(u){var f=a.formats(),p=this.quill.getFormat(t.index,1);r=c.default.attributes.diff(f,p)||{},i=u.length()}}this.quill.deleteText(t.index,n,d.default.sources.USER),Object.keys(r).length>0&&this.quill.formatLine(t.index+i-1,n,r,d.default.sources.USER)}}function x(t){var e=this.quill.getLines(t),n={};if(e.length>1){var r=e[0].formats(),o=e[e.length-1].formats();n=c.default.attributes.diff(o,r)||{}}this.quill.deleteText(t,d.default.sources.USER),Object.keys(n).length>0&&this.quill.formatLine(t.index,1,n,d.default.sources.USER),this.quill.setSelection(t.index,d.default.sources.SILENT),this.quill.focus()}function k(t,e){var n=this;t.length>0&&this.quill.scroll.deleteAt(t.index,t.length);var r=Object.keys(e.format).reduce((function(t,n){return f.default.query(n,f.default.Scope.BLOCK)&&!Array.isArray(e.format[n])&&(t[n]=e.format[n]),t}),{});this.quill.insertText(t.index,"\n",r,d.default.sources.USER),this.quill.setSelection(t.index+1,d.default.sources.SILENT),this.quill.focus(),Object.keys(e.format).forEach((function(t){null==r[t]&&(Array.isArray(e.format[t])||"link"!==t&&n.quill.format(t,e.format[t],d.default.sources.USER))}))}function O(t){return{key:m.keys.TAB,shiftKey:!t,format:{"code-block":!0},handler:function(e){var n=f.default.query("code-block"),r=e.index,i=e.length,l=this.quill.scroll.descendant(n,r),a=o(l,2),s=a[0],u=a[1];if(null!=s){var c=this.quill.getIndex(s),p=s.newlineIndex(u,!0)+1,h=s.newlineIndex(c+u+i),y=s.domNode.textContent.slice(p,h).split("\n");u=0,y.forEach((function(e,o){t?(s.insertAt(p+u,n.TAB),u+=n.TAB.length,0===o?r+=n.TAB.length:i+=n.TAB.length):e.startsWith(n.TAB)&&(s.deleteAt(p+u,n.TAB.length),u-=n.TAB.length,0===o?r-=n.TAB.length:i-=n.TAB.length),u+=e.length+1})),this.quill.update(d.default.sources.USER),this.quill.setSelection(r,i,d.default.sources.SILENT)}}}}function E(t){return{key:t[0].toUpperCase(),shortKey:!0,handler:function(e,n){this.quill.format(t,!n.format[t],d.default.sources.USER)}}}function A(t){if("string"==typeof t||"number"==typeof t)return A({key:t});if("object"===(void 0===t?"undefined":r(t))&&(t=(0,l.default)(t,!1)),"string"==typeof t.key)if(null!=m.keys[t.key.toUpperCase()])t.key=m.keys[t.key.toUpperCase()];else{if(1!==t.key.length)return null;t.key=t.key.toUpperCase().charCodeAt(0)}return t.shortKey&&(t[g]=t.shortKey,delete t.shortKey),t}m.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},m.DEFAULTS={bindings:{bold:E("bold"),italic:E("italic"),underline:E("underline"),indent:{key:m.keys.TAB,format:["blockquote","indent","list"],handler:function(t,e){if(e.collapsed&&0!==e.offset)return!0;this.quill.format("indent","+1",d.default.sources.USER)}},outdent:{key:m.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(t,e){if(e.collapsed&&0!==e.offset)return!0;this.quill.format("indent","-1",d.default.sources.USER)}},"outdent backspace":{key:m.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(t,e){null!=e.format.indent?this.quill.format("indent","-1",d.default.sources.USER):null!=e.format.list&&this.quill.format("list",!1,d.default.sources.USER)}},"indent code-block":O(!0),"outdent code-block":O(!1),"remove tab":{key:m.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(t){this.quill.deleteText(t.index-1,1,d.default.sources.USER)}},tab:{key:m.keys.TAB,handler:function(t){this.quill.history.cutoff();var e=(new u.default).retain(t.index).delete(t.length).insert("\t");this.quill.updateContents(e,d.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(t.index+1,d.default.sources.SILENT)}},"list empty enter":{key:m.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(t,e){this.quill.format("list",!1,d.default.sources.USER),e.format.indent&&this.quill.format("indent",!1,d.default.sources.USER)}},"checklist enter":{key:m.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(t){var e=this.quill.getLine(t.index),n=o(e,2),r=n[0],i=n[1],l=(0,s.default)({},r.formats(),{list:"checked"}),a=(new u.default).retain(t.index).insert("\n",l).retain(r.length()-i-1).retain(1,{list:"unchecked"});this.quill.updateContents(a,d.default.sources.USER),this.quill.setSelection(t.index+1,d.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:m.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(t,e){var n=this.quill.getLine(t.index),r=o(n,2),i=r[0],l=r[1],a=(new u.default).retain(t.index).insert("\n",e.format).retain(i.length()-l-1).retain(1,{header:null});this.quill.updateContents(a,d.default.sources.USER),this.quill.setSelection(t.index+1,d.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(t,e){var n=e.prefix.length,r=this.quill.getLine(t.index),i=o(r,2),l=i[0],a=i[1];if(a>n)return!0;var s=void 0;switch(e.prefix.trim()){case"[]":case"[ ]":s="unchecked";break;case"[x]":s="checked";break;case"-":case"*":s="bullet";break;default:s="ordered"}this.quill.insertText(t.index," ",d.default.sources.USER),this.quill.history.cutoff();var c=(new u.default).retain(t.index-a).delete(n+1).retain(l.length()-2-a).retain(1,{list:s});this.quill.updateContents(c,d.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(t.index-n,d.default.sources.SILENT)}},"code exit":{key:m.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(t){var e=this.quill.getLine(t.index),n=o(e,2),r=n[0],i=n[1],l=(new u.default).retain(t.index+r.length()-i-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(l,d.default.sources.USER)}},"embed left":q(m.keys.LEFT,!1),"embed left shift":q(m.keys.LEFT,!0),"embed right":q(m.keys.RIGHT,!1),"embed right shift":q(m.keys.RIGHT,!0)}},e.default=m,e.SHORTKEY=g},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=s(n(0)),a=s(n(7));function s(t){return t&&t.__esModule?t:{default:t}}var u=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.selection=n,r.textNode=document.createTextNode(e.CONTENTS),r.domNode.appendChild(r.textNode),r._length=0,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,null,[{key:"value",value:function(){}}]),i(e,[{key:"detach",value:function(){null!=this.parent&&this.parent.removeChild(this)}},{key:"format",value:function(t,n){if(0!==this._length)return o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n);for(var r=this,i=0;null!=r&&r.statics.scope!==l.default.Scope.BLOCK_BLOT;)i+=r.offset(r.parent),r=r.parent;null!=r&&(this._length=e.CONTENTS.length,r.optimize(),r.formatAt(i,e.CONTENTS.length,t,n),this._length=0)}},{key:"index",value:function(t,n){return t===this.textNode?0:o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"index",this).call(this,t,n)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!this.selection.composing&&null!=this.parent){var t=this.textNode,n=this.selection.getNativeRange(),o=void 0,i=void 0,s=void 0;if(null!=n&&n.start.node===t&&n.end.node===t){var u=[t,n.start.offset,n.end.offset];o=u[0],i=u[1],s=u[2]}for(;null!=this.domNode.lastChild&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==e.CONTENTS){var c=this.textNode.data.split(e.CONTENTS).join("");this.next instanceof a.default?(o=this.next.domNode,this.next.insertAt(0,c),this.textNode.data=e.CONTENTS):(this.textNode.data=c,this.parent.insertBefore(l.default.create(this.textNode),this),this.textNode=document.createTextNode(e.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),null!=i){var f=[i,s].map((function(t){return Math.max(0,Math.min(o.data.length,t-1))})),d=r(f,2);return i=d[0],s=d[1],{startNode:o,startOffset:i,endNode:o,endOffset:s}}}}},{key:"update",value:function(t,e){var n=this;if(t.some((function(t){return"characterData"===t.type&&t.target===n.textNode}))){var r=this.restore();r&&(e.range=r)}}},{key:"value",value:function(){return""}}]),e}(l.default.Embed);u.blotName="cursor",u.className="ql-cursor",u.tagName="span",u.CONTENTS="\ufeff",e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=l(n(0)),o=n(4),i=l(o);function l(t){return t&&t.__esModule?t:{default:t}}var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(r.default.Container);a.allowedChildren=[i.default,o.BlockEmbed,a],e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ColorStyle=e.ColorClass=e.ColorAttributor=void 0;var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=n(0),a=(r=l)&&r.__esModule?r:{default:r},s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"value",value:function(t){var n=i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t);return n.startsWith("rgb(")?(n=n.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+n.split(",").map((function(t){return("00"+parseInt(t).toString(16)).slice(-2)})).join("")):n}}]),e}(a.default.Attributor.Style),u=new a.default.Attributor.Class("color","ql-color",{scope:a.default.Scope.INLINE}),c=new s("color","color",{scope:a.default.Scope.INLINE});e.ColorAttributor=s,e.ColorClass=u,e.ColorStyle=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=e.default=void 0;var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=n(6),a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"format",value:function(t,n){if(t!==this.statics.blotName||!n)return i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n);n=this.constructor.sanitize(n),this.domNode.setAttribute("href",n)}}],[{key:"create",value:function(t){var n=i(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return t=this.sanitize(t),n.setAttribute("href",t),n.setAttribute("rel","noopener noreferrer"),n.setAttribute("target","_blank"),n}},{key:"formats",value:function(t){return t.getAttribute("href")}},{key:"sanitize",value:function(t){return s(t,this.PROTOCOL_WHITELIST)?t:this.SANITIZED_URL}}]),e}(((r=l)&&r.__esModule?r:{default:r}).default);function s(t,e){var n=document.createElement("a");n.href=t;var r=n.href.slice(0,n.href.indexOf(":"));return e.indexOf(r)>-1}a.blotName="link",a.tagName="A",a.SANITIZED_URL="about:blank",a.PROTOCOL_WHITELIST=["http","https","mailto","tel"],e.default=a,e.sanitize=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=a(n(23)),l=a(n(107));function a(t){return t&&t.__esModule?t:{default:t}}var s=0;function u(t,e){t.setAttribute(e,!("true"===t.getAttribute(e)))}var c=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.select=e,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",(function(){n.togglePicker()})),this.label.addEventListener("keydown",(function(t){switch(t.keyCode){case i.default.keys.ENTER:n.togglePicker();break;case i.default.keys.ESCAPE:n.escape(),t.preventDefault()}})),this.select.addEventListener("change",this.update.bind(this))}return o(t,[{key:"togglePicker",value:function(){this.container.classList.toggle("ql-expanded"),u(this.label,"aria-expanded"),u(this.options,"aria-hidden")}},{key:"buildItem",value:function(t){var e=this,n=document.createElement("span");return n.tabIndex="0",n.setAttribute("role","button"),n.classList.add("ql-picker-item"),t.hasAttribute("value")&&n.setAttribute("data-value",t.getAttribute("value")),t.textContent&&n.setAttribute("data-label",t.textContent),n.addEventListener("click",(function(){e.selectItem(n,!0)})),n.addEventListener("keydown",(function(t){switch(t.keyCode){case i.default.keys.ENTER:e.selectItem(n,!0),t.preventDefault();break;case i.default.keys.ESCAPE:e.escape(),t.preventDefault()}})),n}},{key:"buildLabel",value:function(){var t=document.createElement("span");return t.classList.add("ql-picker-label"),t.innerHTML=l.default,t.tabIndex="0",t.setAttribute("role","button"),t.setAttribute("aria-expanded","false"),this.container.appendChild(t),t}},{key:"buildOptions",value:function(){var t=this,e=document.createElement("span");e.classList.add("ql-picker-options"),e.setAttribute("aria-hidden","true"),e.tabIndex="-1",e.id="ql-picker-options-"+s,s+=1,this.label.setAttribute("aria-controls",e.id),this.options=e,[].slice.call(this.select.options).forEach((function(n){var r=t.buildItem(n);e.appendChild(r),!0===n.selected&&t.selectItem(r)})),this.container.appendChild(e)}},{key:"buildPicker",value:function(){var t=this;[].slice.call(this.select.attributes).forEach((function(e){t.container.setAttribute(e.name,e.value)})),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"escape",value:function(){var t=this;this.close(),setTimeout((function(){return t.label.focus()}),1)}},{key:"close",value:function(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}},{key:"selectItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.container.querySelector(".ql-selected");if(t!==n&&(null!=n&&n.classList.remove("ql-selected"),null!=t&&(t.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(t.parentNode.children,t),t.hasAttribute("data-value")?this.label.setAttribute("data-value",t.getAttribute("data-value")):this.label.removeAttribute("data-value"),t.hasAttribute("data-label")?this.label.setAttribute("data-label",t.getAttribute("data-label")):this.label.removeAttribute("data-label"),e))){if("function"==typeof Event)this.select.dispatchEvent(new Event("change"));else if("object"===("undefined"==typeof Event?"undefined":r(Event))){var o=document.createEvent("Event");o.initEvent("change",!0,!0),this.select.dispatchEvent(o)}this.close()}}},{key:"update",value:function(){var t=void 0;if(this.select.selectedIndex>-1){var e=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];t=this.select.options[this.select.selectedIndex],this.selectItem(e)}else this.selectItem(null);var n=null!=t&&t!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",n)}}]),t}();e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=b(n(0)),o=b(n(5)),i=n(4),l=b(i),a=b(n(16)),s=b(n(25)),u=b(n(24)),c=b(n(35)),f=b(n(6)),d=b(n(22)),p=b(n(7)),h=b(n(55)),y=b(n(42)),v=b(n(23));function b(t){return t&&t.__esModule?t:{default:t}}o.default.register({"blots/block":l.default,"blots/block/embed":i.BlockEmbed,"blots/break":a.default,"blots/container":s.default,"blots/cursor":u.default,"blots/embed":c.default,"blots/inline":f.default,"blots/scroll":d.default,"blots/text":p.default,"modules/clipboard":h.default,"modules/history":y.default,"modules/keyboard":v.default}),r.default.register(l.default,a.default,u.default,f.default,d.default,p.default),e.default=o.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=function(){function t(t){this.domNode=t,this.domNode[r.DATA_KEY]={blot:this}}return Object.defineProperty(t.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),t.create=function(t){if(null==this.tagName)throw new r.ParchmentError("Blot definition missing tagName");var e;return Array.isArray(this.tagName)?("string"==typeof t&&(t=t.toUpperCase(),parseInt(t).toString()===t&&(t=parseInt(t))),e="number"==typeof t?document.createElement(this.tagName[t-1]):this.tagName.indexOf(t)>-1?document.createElement(t):document.createElement(this.tagName[0])):e=document.createElement(this.tagName),this.className&&e.classList.add(this.className),e},t.prototype.attach=function(){null!=this.parent&&(this.scroll=this.parent.scroll)},t.prototype.clone=function(){var t=this.domNode.cloneNode(!1);return r.create(t)},t.prototype.detach=function(){null!=this.parent&&this.parent.removeChild(this),delete this.domNode[r.DATA_KEY]},t.prototype.deleteAt=function(t,e){this.isolate(t,e).remove()},t.prototype.formatAt=function(t,e,n,o){var i=this.isolate(t,e);if(null!=r.query(n,r.Scope.BLOT)&&o)i.wrap(n,o);else if(null!=r.query(n,r.Scope.ATTRIBUTE)){var l=r.create(this.statics.scope);i.wrap(l),l.format(n,o)}},t.prototype.insertAt=function(t,e,n){var o=null==n?r.create("text",e):r.create(e,n),i=this.split(t);this.parent.insertBefore(o,i)},t.prototype.insertInto=function(t,e){void 0===e&&(e=null),null!=this.parent&&this.parent.children.remove(this);var n=null;t.children.insertBefore(this,e),null!=e&&(n=e.domNode),this.domNode.parentNode==t.domNode&&this.domNode.nextSibling==n||t.domNode.insertBefore(this.domNode,n),this.parent=t,this.attach()},t.prototype.isolate=function(t,e){var n=this.split(t);return n.split(e),n},t.prototype.length=function(){return 1},t.prototype.offset=function(t){return void 0===t&&(t=this.parent),null==this.parent||this==t?0:this.parent.children.offset(this)+this.parent.offset(t)},t.prototype.optimize=function(t){null!=this.domNode[r.DATA_KEY]&&delete this.domNode[r.DATA_KEY].mutations},t.prototype.remove=function(){null!=this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},t.prototype.replace=function(t){null!=t.parent&&(t.parent.insertBefore(this,t.next),t.remove())},t.prototype.replaceWith=function(t,e){var n="string"==typeof t?r.create(t,e):t;return n.replace(this),n},t.prototype.split=function(t,e){return 0===t?this:this.next},t.prototype.update=function(t,e){},t.prototype.wrap=function(t,e){var n="string"==typeof t?r.create(t,e):t;return null!=this.parent&&this.parent.insertBefore(n,this.next),n.appendChild(this),n},t.blotName="abstract",t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),o=n(32),i=n(33),l=n(1),a=function(){function t(t){this.attributes={},this.domNode=t,this.build()}return t.prototype.attribute=function(t,e){e?t.add(this.domNode,e)&&(null!=t.value(this.domNode)?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),delete this.attributes[t.attrName])},t.prototype.build=function(){var t=this;this.attributes={};var e=r.default.keys(this.domNode),n=o.default.keys(this.domNode),a=i.default.keys(this.domNode);e.concat(n).concat(a).forEach((function(e){var n=l.query(e,l.Scope.ATTRIBUTE);n instanceof r.default&&(t.attributes[n.attrName]=n)}))},t.prototype.copy=function(t){var e=this;Object.keys(this.attributes).forEach((function(n){var r=e.attributes[n].value(e.domNode);t.format(n,r)}))},t.prototype.move=function(t){var e=this;this.copy(t),Object.keys(this.attributes).forEach((function(t){e.attributes[t].remove(e.domNode)})),this.attributes={}},t.prototype.values=function(){var t=this;return Object.keys(this.attributes).reduce((function(e,n){return e[n]=t.attributes[n].value(t.domNode),e}),{})},t}();e.default=a},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});function i(t,e){return(t.getAttribute("class")||"").split(/\s+/).filter((function(t){return 0===t.indexOf(e+"-")}))}Object.defineProperty(e,"__esModule",{value:!0});var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.keys=function(t){return(t.getAttribute("class")||"").split(/\s+/).map((function(t){return t.split("-").slice(0,-1).join("-")}))},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(this.remove(t),t.classList.add(this.keyName+"-"+e),!0)},e.prototype.remove=function(t){i(t,this.keyName).forEach((function(e){t.classList.remove(e)})),0===t.classList.length&&t.removeAttribute("class")},e.prototype.value=function(t){var e=(i(t,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(t,e)?e:""},e}(n(12).default);e.default=l},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});function i(t){var e=t.split("-"),n=e.slice(1).map((function(t){return t[0].toUpperCase()+t.slice(1)})).join("");return e[0]+n}Object.defineProperty(e,"__esModule",{value:!0});var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.keys=function(t){return(t.getAttribute("style")||"").split(";").map((function(t){return t.split(":")[0].trim()}))},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.style[i(this.keyName)]=e,!0)},e.prototype.remove=function(t){t.style[i(this.keyName)]="",t.getAttribute("style")||t.removeAttribute("style")},e.prototype.value=function(t){var e=t.style[i(this.keyName)];return this.canAdd(t,e)?e:""},e}(n(12).default);e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quill=e,this.options=n,this.modules={}}return r(t,[{key:"init",value:function(){var t=this;Object.keys(this.options.modules).forEach((function(e){null==t.modules[e]&&t.addModule(e)}))}},{key:"addModule",value:function(t){var e=this.quill.constructor.import("modules/"+t);return this.modules[t]=new e(this.quill,this.options.modules[t]||{}),this.modules[t]}}]),t}();o.DEFAULTS={modules:{}},o.themes={default:o},e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},i=a(n(0)),l=a(n(7));function a(t){return t&&t.__esModule?t:{default:t}}var s="\ufeff",u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.contentNode=document.createElement("span"),n.contentNode.setAttribute("contenteditable",!1),[].slice.call(n.domNode.childNodes).forEach((function(t){n.contentNode.appendChild(t)})),n.leftGuard=document.createTextNode(s),n.rightGuard=document.createTextNode(s),n.domNode.appendChild(n.leftGuard),n.domNode.appendChild(n.contentNode),n.domNode.appendChild(n.rightGuard),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"index",value:function(t,n){return t===this.leftGuard?0:t===this.rightGuard?1:o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"index",this).call(this,t,n)}},{key:"restore",value:function(t){var e=void 0,n=void 0,r=t.data.split(s).join("");if(t===this.leftGuard)if(this.prev instanceof l.default){var o=this.prev.length();this.prev.insertAt(o,r),e={startNode:this.prev.domNode,startOffset:o+r.length}}else n=document.createTextNode(r),this.parent.insertBefore(i.default.create(n),this),e={startNode:n,startOffset:r.length};else t===this.rightGuard&&(this.next instanceof l.default?(this.next.insertAt(0,r),e={startNode:this.next.domNode,startOffset:r.length}):(n=document.createTextNode(r),this.parent.insertBefore(i.default.create(n),this.next),e={startNode:n,startOffset:r.length}));return t.data=s,e}},{key:"update",value:function(t,e){var n=this;t.forEach((function(t){if("characterData"===t.type&&(t.target===n.leftGuard||t.target===n.rightGuard)){var r=n.restore(t.target);r&&(e.range=r)}}))}}]),e}(i.default.Embed);e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AlignStyle=e.AlignClass=e.AlignAttribute=void 0;var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r},l={scope:i.default.Scope.BLOCK,whitelist:["right","center","justify"]},a=new i.default.Attributor.Attribute("align","align",l),s=new i.default.Attributor.Class("align","ql-align",l),u=new i.default.Attributor.Style("align","text-align",l);e.AlignAttribute=a,e.AlignClass=s,e.AlignStyle=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BackgroundStyle=e.BackgroundClass=void 0;var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r},l=n(26),a=new i.default.Attributor.Class("background","ql-bg",{scope:i.default.Scope.INLINE}),s=new l.ColorAttributor("background","background-color",{scope:i.default.Scope.INLINE});e.BackgroundClass=a,e.BackgroundStyle=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DirectionStyle=e.DirectionClass=e.DirectionAttribute=void 0;var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r},l={scope:i.default.Scope.BLOCK,whitelist:["rtl"]},a=new i.default.Attributor.Attribute("direction","dir",l),s=new i.default.Attributor.Class("direction","ql-direction",l),u=new i.default.Attributor.Style("direction","direction",l);e.DirectionAttribute=a,e.DirectionClass=s,e.DirectionStyle=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FontClass=e.FontStyle=void 0;var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=n(0),a=(r=l)&&r.__esModule?r:{default:r},s={scope:a.default.Scope.INLINE,whitelist:["serif","monospace"]},u=new a.default.Attributor.Class("font","ql-font",s),c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"value",value:function(t){return i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t).replace(/["']/g,"")}}]),e}(a.default.Attributor.Style),f=new c("font","font-family",s);e.FontStyle=f,e.FontClass=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SizeStyle=e.SizeClass=void 0;var r,o=n(0),i=(r=o)&&r.__esModule?r:{default:r},l=new i.default.Attributor.Class("size","ql-size",{scope:i.default.Scope.INLINE,whitelist:["small","large","huge"]}),a=new i.default.Attributor.Style("size","font-size",{scope:i.default.Scope.INLINE,whitelist:["10px","18px","32px"]});e.SizeClass=l,e.SizeStyle=a},function(t,e,n){"use strict";t.exports={align:{"":n(76),center:n(77),right:n(78),justify:n(79)},background:n(80),blockquote:n(81),bold:n(82),clean:n(83),code:n(58),"code-block":n(58),color:n(84),direction:{"":n(85),rtl:n(86)},float:{center:n(87),full:n(88),left:n(89),right:n(90)},formula:n(91),header:{1:n(92),2:n(93)},italic:n(94),image:n(95),indent:{"+1":n(96),"-1":n(97)},link:n(98),list:{ordered:n(99),bullet:n(100),check:n(101)},script:{sub:n(102),super:n(103)},strike:n(104),underline:n(105),video:n(106)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getLastChangeIndex=e.default=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=l(n(0)),i=l(n(5));function l(t){return t&&t.__esModule?t:{default:t}}var a=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.lastRecorded=0,r.ignoreChange=!1,r.clear(),r.quill.on(i.default.events.EDITOR_CHANGE,(function(t,e,n,o){t!==i.default.events.TEXT_CHANGE||r.ignoreChange||(r.options.userOnly&&o!==i.default.sources.USER?r.transform(e):r.record(e,n))})),r.quill.keyboard.addBinding({key:"Z",shortKey:!0},r.undo.bind(r)),r.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},r.redo.bind(r)),/Win/i.test(navigator.platform)&&r.quill.keyboard.addBinding({key:"Y",shortKey:!0},r.redo.bind(r)),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"change",value:function(t,e){if(0!==this.stack[t].length){var n=this.stack[t].pop();this.stack[e].push(n),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(n[t],i.default.sources.USER),this.ignoreChange=!1;var r=s(n[t]);this.quill.setSelection(r)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(t,e){if(0!==t.ops.length){this.stack.redo=[];var n=this.quill.getContents().diff(e),r=Date.now();if(this.lastRecorded+this.options.delay>r&&this.stack.undo.length>0){var o=this.stack.undo.pop();n=n.compose(o.undo),t=o.redo.compose(t)}else this.lastRecorded=r;this.stack.undo.push({redo:t,undo:n}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(t){this.stack.undo.forEach((function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)})),this.stack.redo.forEach((function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)}))}},{key:"undo",value:function(){this.change("undo","redo")}}]),e}(l(n(9)).default);function s(t){var e=t.reduce((function(t,e){return t+=e.delete||0}),0),n=t.length()-e;return function(t){var e=t.ops[t.ops.length-1];return null!=e&&(null!=e.insert?"string"==typeof e.insert&&e.insert.endsWith("\n"):null!=e.attributes&&Object.keys(e.attributes).some((function(t){return null!=o.default.query(t,o.default.Scope.BLOCK)})))}(t)&&(n-=1),n}a.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1},e.default=a,e.getLastChangeIndex=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BaseTooltip=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},i=h(n(3)),l=h(n(2)),a=h(n(8)),s=h(n(23)),u=h(n(34)),c=h(n(59)),f=h(n(60)),d=h(n(28)),p=h(n(61));function h(t){return t&&t.__esModule?t:{default:t}}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function b(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var g=[!1,"center","right","justify"],m=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],q=[!1,"serif","monospace"],_=["1","2","3",!1],w=["small",!1,"large","huge"],x=function(t){function e(t,n){y(this,e);var r=v(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return t.emitter.listenDOM("click",document.body,(function e(n){if(!document.body.contains(t.root))return document.body.removeEventListener("click",e);null==r.tooltip||r.tooltip.root.contains(n.target)||document.activeElement===r.tooltip.textbox||r.quill.hasFocus()||r.tooltip.hide(),null!=r.pickers&&r.pickers.forEach((function(t){t.container.contains(n.target)||t.close()}))})),r}return b(e,t),r(e,[{key:"addModule",value:function(t){var n=o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"addModule",this).call(this,t);return"toolbar"===t&&this.extendToolbar(n),n}},{key:"buildButtons",value:function(t,e){t.forEach((function(t){(t.getAttribute("class")||"").split(/\s+/).forEach((function(n){if(n.startsWith("ql-")&&(n=n.slice(3),null!=e[n]))if("direction"===n)t.innerHTML=e[n][""]+e[n].rtl;else if("string"==typeof e[n])t.innerHTML=e[n];else{var r=t.value||"";null!=r&&e[n][r]&&(t.innerHTML=e[n][r])}}))}))}},{key:"buildPickers",value:function(t,e){var n=this;this.pickers=t.map((function(t){if(t.classList.contains("ql-align"))return null==t.querySelector("option")&&O(t,g),new f.default(t,e.align);if(t.classList.contains("ql-background")||t.classList.contains("ql-color")){var n=t.classList.contains("ql-background")?"background":"color";return null==t.querySelector("option")&&O(t,m,"background"===n?"#ffffff":"#000000"),new c.default(t,e[n])}return null==t.querySelector("option")&&(t.classList.contains("ql-font")?O(t,q):t.classList.contains("ql-header")?O(t,_):t.classList.contains("ql-size")&&O(t,w)),new d.default(t)})),this.quill.on(a.default.events.EDITOR_CHANGE,(function(){n.pickers.forEach((function(t){t.update()}))}))}}]),e}(u.default);x.DEFAULTS=(0,i.default)(!0,{},u.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var t=this,e=this.container.querySelector("input.ql-image[type=file]");null==e&&((e=document.createElement("input")).setAttribute("type","file"),e.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),e.classList.add("ql-image"),e.addEventListener("change",(function(){if(null!=e.files&&null!=e.files[0]){var n=new FileReader;n.onload=function(n){var r=t.quill.getSelection(!0);t.quill.updateContents((new l.default).retain(r.index).delete(r.length).insert({image:n.target.result}),a.default.sources.USER),t.quill.setSelection(r.index+1,a.default.sources.SILENT),e.value=""},n.readAsDataURL(e.files[0])}})),this.container.appendChild(e)),e.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var k=function(t){function e(t,n){y(this,e);var r=v(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.textbox=r.root.querySelector('input[type="text"]'),r.listen(),r}return b(e,t),r(e,[{key:"listen",value:function(){var t=this;this.textbox.addEventListener("keydown",(function(e){s.default.match(e,"enter")?(t.save(),e.preventDefault()):s.default.match(e,"escape")&&(t.cancel(),e.preventDefault())}))}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"link",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),null!=e?this.textbox.value=e:t!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+t)||""),this.root.setAttribute("data-mode",t)}},{key:"restoreFocus",value:function(){var t=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=t}},{key:"save",value:function(){var t,e,n=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":var r=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",n,a.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",n,a.default.sources.USER)),this.quill.root.scrollTop=r;break;case"video":n=(e=(t=n).match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/))?(e[1]||"https")+"://www.youtube.com/embed/"+e[2]+"?showinfo=0":(e=t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(e[1]||"https")+"://player.vimeo.com/video/"+e[2]+"/":t;case"formula":if(!n)break;var o=this.quill.getSelection(!0);if(null!=o){var i=o.index+o.length;this.quill.insertEmbed(i,this.root.getAttribute("data-mode"),n,a.default.sources.USER),"formula"===this.root.getAttribute("data-mode")&&this.quill.insertText(i+1," ",a.default.sources.USER),this.quill.setSelection(i+2,a.default.sources.USER)}}this.textbox.value="",this.hide()}}]),e}(p.default);function O(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.forEach((function(e){var r=document.createElement("option");e===n?r.setAttribute("selected","selected"):r.setAttribute("value",e),t.appendChild(r)}))}e.BaseTooltip=k,e.default=x},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.head=this.tail=null,this.length=0}return t.prototype.append=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.insertBefore(t[0],null),t.length>1&&this.append.apply(this,t.slice(1))},t.prototype.contains=function(t){for(var e,n=this.iterator();e=n();)if(e===t)return!0;return!1},t.prototype.insertBefore=function(t,e){t&&(t.next=e,null!=e?(t.prev=e.prev,null!=e.prev&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):null!=this.tail?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=null,this.head=this.tail=t),this.length+=1)},t.prototype.offset=function(t){for(var e=0,n=this.head;null!=n;){if(n===t)return e;e+=n.length(),n=n.next}return-1},t.prototype.remove=function(t){this.contains(t)&&(null!=t.prev&&(t.prev.next=t.next),null!=t.next&&(t.next.prev=t.prev),t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)},t.prototype.iterator=function(t){return void 0===t&&(t=this.head),function(){var e=t;return null!=t&&(t=t.next),e}},t.prototype.find=function(t,e){void 0===e&&(e=!1);for(var n,r=this.iterator();n=r();){var o=n.length();if(t<o||e&&t===o&&(null==n.next||0!==n.next.length()))return[n,t];t-=o}return[null,0]},t.prototype.forEach=function(t){for(var e,n=this.iterator();e=n();)t(e)},t.prototype.forEachAt=function(t,e,n){if(!(e<=0))for(var r,o=this.find(t),i=o[0],l=t-o[1],a=this.iterator(i);(r=a())&&l<t+e;){var s=r.length();t>l?n(r,t-l,Math.min(e,l+s-t)):n(r,0,Math.min(s,t+e-l)),l+=s}},t.prototype.map=function(t){return this.reduce((function(e,n){return e.push(t(n)),e}),[])},t.prototype.reduce=function(t,e){for(var n,r=this.iterator();n=r();)e=t(e,n);return e},t}();e.default=r},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),l=n(1),a={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},s=function(t){function e(e){var n=t.call(this,e)||this;return n.scroll=n,n.observer=new MutationObserver((function(t){n.update(t)})),n.observer.observe(n.domNode,a),n.attach(),n}return o(e,t),e.prototype.detach=function(){t.prototype.detach.call(this),this.observer.disconnect()},e.prototype.deleteAt=function(e,n){this.update(),0===e&&n===this.length()?this.children.forEach((function(t){t.remove()})):t.prototype.deleteAt.call(this,e,n)},e.prototype.formatAt=function(e,n,r,o){this.update(),t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.insertAt=function(e,n,r){this.update(),t.prototype.insertAt.call(this,e,n,r)},e.prototype.optimize=function(e,n){var r=this;void 0===e&&(e=[]),void 0===n&&(n={}),t.prototype.optimize.call(this,n);for(var o=[].slice.call(this.observer.takeRecords());o.length>0;)e.push(o.pop());for(var a=function(t,e){void 0===e&&(e=!0),null!=t&&t!==r&&null!=t.domNode.parentNode&&(null==t.domNode[l.DATA_KEY].mutations&&(t.domNode[l.DATA_KEY].mutations=[]),e&&a(t.parent))},s=function(t){null!=t.domNode[l.DATA_KEY]&&null!=t.domNode[l.DATA_KEY].mutations&&(t instanceof i.default&&t.children.forEach(s),t.optimize(n))},u=e,c=0;u.length>0;c+=1){if(c>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(u.forEach((function(t){var e=l.find(t.target,!0);null!=e&&(e.domNode===t.target&&("childList"===t.type?(a(l.find(t.previousSibling,!1)),[].forEach.call(t.addedNodes,(function(t){var e=l.find(t,!1);a(e,!1),e instanceof i.default&&e.children.forEach((function(t){a(t,!1)}))}))):"attributes"===t.type&&a(e.prev)),a(e))})),this.children.forEach(s),o=(u=[].slice.call(this.observer.takeRecords())).slice();o.length>0;)e.push(o.pop())}},e.prototype.update=function(e,n){var r=this;void 0===n&&(n={}),(e=e||this.observer.takeRecords()).map((function(t){var e=l.find(t.target,!0);return null==e?null:null==e.domNode[l.DATA_KEY].mutations?(e.domNode[l.DATA_KEY].mutations=[t],e):(e.domNode[l.DATA_KEY].mutations.push(t),null)})).forEach((function(t){null!=t&&t!==r&&null!=t.domNode[l.DATA_KEY]&&t.update(t.domNode[l.DATA_KEY].mutations||[],n)})),null!=this.domNode[l.DATA_KEY].mutations&&t.prototype.update.call(this,this.domNode[l.DATA_KEY].mutations,n),this.optimize(e,n)},e.blotName="scroll",e.defaultChild="block",e.scope=l.Scope.BLOCK_BLOT,e.tagName="DIV",e}(i.default);e.default=s},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(18),l=n(1),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.formats=function(n){if(n.tagName!==e.tagName)return t.formats.call(this,n)},e.prototype.format=function(n,r){var o=this;n!==this.statics.blotName||r?t.prototype.format.call(this,n,r):(this.children.forEach((function(t){t instanceof i.default||(t=t.wrap(e.blotName,!0)),o.attributes.copy(t)})),this.unwrap())},e.prototype.formatAt=function(e,n,r,o){null!=this.formats()[r]||l.query(r,l.Scope.ATTRIBUTE)?this.isolate(e,n).format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.optimize=function(n){t.prototype.optimize.call(this,n);var r=this.formats();if(0===Object.keys(r).length)return this.unwrap();var o=this.next;o instanceof e&&o.prev===this&&function(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(t[n]!==e[n])return!1;return!0}(r,o.formats())&&(o.moveChildren(this),o.remove())},e.blotName="inline",e.scope=l.Scope.INLINE_BLOT,e.tagName="SPAN",e}(i.default);e.default=a},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(18),l=n(1),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.formats=function(n){var r=l.query(e.blotName).tagName;if(n.tagName!==r)return t.formats.call(this,n)},e.prototype.format=function(n,r){null!=l.query(n,l.Scope.BLOCK)&&(n!==this.statics.blotName||r?t.prototype.format.call(this,n,r):this.replaceWith(e.blotName))},e.prototype.formatAt=function(e,n,r,o){null!=l.query(r,l.Scope.BLOCK)?this.format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.insertAt=function(e,n,r){if(null==r||null!=l.query(n,l.Scope.INLINE))t.prototype.insertAt.call(this,e,n,r);else{var o=this.split(e),i=l.create(n,r);o.parent.insertBefore(i,o)}},e.prototype.update=function(e,n){navigator.userAgent.match(/Trident/)?this.build():t.prototype.update.call(this,e,n)},e.blotName="block",e.scope=l.Scope.BLOCK_BLOT,e.tagName="P",e}(i.default);e.default=a},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.formats=function(t){},e.prototype.format=function(e,n){t.prototype.formatAt.call(this,0,this.length(),e,n)},e.prototype.formatAt=function(e,n,r,o){0===e&&n===this.length()?this.format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.formats=function(){return this.statics.formats(this.domNode)},e}(n(19).default);e.default=i},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(19),l=n(1),a=function(t){function e(e){var n=t.call(this,e)||this;return n.text=n.statics.value(n.domNode),n}return o(e,t),e.create=function(t){return document.createTextNode(t)},e.value=function(t){var e=t.data;return e.normalize&&(e=e.normalize()),e},e.prototype.deleteAt=function(t,e){this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)},e.prototype.index=function(t,e){return this.domNode===t?e:-1},e.prototype.insertAt=function(e,n,r){null==r?(this.text=this.text.slice(0,e)+n+this.text.slice(e),this.domNode.data=this.text):t.prototype.insertAt.call(this,e,n,r)},e.prototype.length=function(){return this.text.length},e.prototype.optimize=function(n){t.prototype.optimize.call(this,n),this.text=this.statics.value(this.domNode),0===this.text.length?this.remove():this.next instanceof e&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},e.prototype.position=function(t,e){return void 0===e&&(e=!1),[this.domNode,t]},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var n=l.create(this.domNode.splitText(t));return this.parent.insertBefore(n,this.next),this.text=this.statics.value(this.domNode),n},e.prototype.update=function(t,e){var n=this;t.some((function(t){return"characterData"===t.type&&t.target===n.domNode}))&&(this.text=this.statics.value(this.domNode))},e.prototype.value=function(){return this.text},e.blotName="text",e.scope=l.Scope.INLINE_BLOT,e}(i.default);e.default=a},function(t,e,n){"use strict";var r=document.createElement("div");if(r.classList.toggle("test-class",!1),r.classList.contains("test-class")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return arguments.length>1&&!this.contains(t)==!e?e:o.call(this,t)}}String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return e=e||0,this.substr(e,t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){var n=this.toString();("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>n.length)&&(e=n.length),e-=t.length;var r=n.indexOf(t,e);return-1!==r&&r===e}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var e,n=Object(this),r=n.length>>>0,o=arguments[1],i=0;i<r;i++)if(e=n[i],t.call(o,e,i,n))return e}}),document.addEventListener("DOMContentLoaded",(function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)}))},function(t,e){var n=-1,r=1,o=0;function i(t,e,c){if(t==e)return t?[[o,t]]:[];(c<0||t.length<c)&&(c=null);var d=a(t,e),p=t.substring(0,d);d=s(t=t.substring(d),e=e.substring(d));var h=t.substring(t.length-d),y=function(t,e){var u;if(!t)return[[r,e]];if(!e)return[[n,t]];var c=t.length>e.length?t:e,f=t.length>e.length?e:t,d=c.indexOf(f);if(-1!=d)return u=[[r,c.substring(0,d)],[o,f],[r,c.substring(d+f.length)]],t.length>e.length&&(u[0][0]=u[2][0]=n),u;if(1==f.length)return[[n,t],[r,e]];var p=function(t,e){var n=t.length>e.length?t:e,r=t.length>e.length?e:t;if(n.length<4||2*r.length<n.length)return null;function o(t,e,n){for(var r,o,i,l,u=t.substring(n,n+Math.floor(t.length/4)),c=-1,f="";-1!=(c=e.indexOf(u,c+1));){var d=a(t.substring(n),e.substring(c)),p=s(t.substring(0,n),e.substring(0,c));f.length<p+d&&(f=e.substring(c-p,c)+e.substring(c,c+d),r=t.substring(0,n-p),o=t.substring(n+d),i=e.substring(0,c-p),l=e.substring(c+d))}return 2*f.length>=t.length?[r,o,i,l,f]:null}var i,l,u,c,f,d=o(n,r,Math.ceil(n.length/4)),p=o(n,r,Math.ceil(n.length/2));if(!d&&!p)return null;i=p?d&&d[4].length>p[4].length?d:p:d,t.length>e.length?(l=i[0],u=i[1],c=i[2],f=i[3]):(c=i[0],f=i[1],l=i[2],u=i[3]);var h=i[4];return[l,u,c,f,h]}(t,e);if(p){var h=p[0],y=p[1],v=p[2],b=p[3],g=p[4],m=i(h,v),q=i(y,b);return m.concat([[o,g]],q)}return function(t,e){for(var o=t.length,i=e.length,a=Math.ceil((o+i)/2),s=a,u=2*a,c=new Array(u),f=new Array(u),d=0;d<u;d++)c[d]=-1,f[d]=-1;c[s+1]=0,f[s+1]=0;for(var p=o-i,h=p%2!=0,y=0,v=0,b=0,g=0,m=0;m<a;m++){for(var q=-m+y;q<=m-v;q+=2){for(var _=s+q,w=(A=q==-m||q!=m&&c[_-1]<c[_+1]?c[_+1]:c[_-1]+1)-q;A<o&&w<i&&t.charAt(A)==e.charAt(w);)A++,w++;if(c[_]=A,A>o)v+=2;else if(w>i)y+=2;else if(h&&(O=s+p-q)>=0&&O<u&&-1!=f[O]&&A>=(k=o-f[O]))return l(t,e,A,w)}for(var x=-m+b;x<=m-g;x+=2){for(var k,O=s+x,E=(k=x==-m||x!=m&&f[O-1]<f[O+1]?f[O+1]:f[O-1]+1)-x;k<o&&E<i&&t.charAt(o-k-1)==e.charAt(i-E-1);)k++,E++;if(f[O]=k,k>o)g+=2;else if(E>i)b+=2;else if(!h){var A;if((_=s+p-x)>=0&&_<u&&-1!=c[_])if(w=s+(A=c[_])-_,A>=(k=o-k))return l(t,e,A,w)}}}return[[n,t],[r,e]]}(t,e)}(t=t.substring(0,t.length-d),e=e.substring(0,e.length-d));return p&&y.unshift([o,p]),h&&y.push([o,h]),u(y),null!=c&&(y=function(t,e){var r=function(t,e){if(0===e)return[o,t];for(var r=0,i=0;i<t.length;i++){var l=t[i];if(l[0]===n||l[0]===o){var a=r+l[1].length;if(e===a)return[i+1,t];if(e<a){t=t.slice();var s=e-r,u=[l[0],l[1].slice(0,s)],c=[l[0],l[1].slice(s)];return t.splice(i,1,u,c),[i+1,t]}r=a}}throw new Error("cursor_pos is out of bounds!")}(t,e),i=r[1],l=r[0],a=i[l],s=i[l+1];if(null==a)return t;if(a[0]!==o)return t;if(null!=s&&a[1]+s[1]===s[1]+a[1])return i.splice(l,2,s,a),f(i,l,2);if(null!=s&&0===s[1].indexOf(a[1])){i.splice(l,2,[s[0],a[1]],[0,a[1]]);var u=s[1].slice(a[1].length);return u.length>0&&i.splice(l+2,0,[s[0],u]),f(i,l,3)}return t}(y,c)),y=function(t){for(var e=!1,i=function(t){return t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343},l=function(t){return t.charCodeAt(t.length-1)>=55296&&t.charCodeAt(t.length-1)<=56319},a=2;a<t.length;a+=1)t[a-2][0]===o&&l(t[a-2][1])&&t[a-1][0]===n&&i(t[a-1][1])&&t[a][0]===r&&i(t[a][1])&&(e=!0,t[a-1][1]=t[a-2][1].slice(-1)+t[a-1][1],t[a][1]=t[a-2][1].slice(-1)+t[a][1],t[a-2][1]=t[a-2][1].slice(0,-1));if(!e)return t;var s=[];for(a=0;a<t.length;a+=1)t[a][1].length>0&&s.push(t[a]);return s}(y)}function l(t,e,n,r){var o=t.substring(0,n),l=e.substring(0,r),a=t.substring(n),s=e.substring(r),u=i(o,l),c=i(a,s);return u.concat(c)}function a(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var n=0,r=Math.min(t.length,e.length),o=r,i=0;n<o;)t.substring(i,o)==e.substring(i,o)?i=n=o:r=o,o=Math.floor((r-n)/2+n);return o}function s(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var n=0,r=Math.min(t.length,e.length),o=r,i=0;n<o;)t.substring(t.length-o,t.length-i)==e.substring(e.length-o,e.length-i)?i=n=o:r=o,o=Math.floor((r-n)/2+n);return o}function u(t){t.push([o,""]);for(var e,i=0,l=0,c=0,f="",d="";i<t.length;)switch(t[i][0]){case r:c++,d+=t[i][1],i++;break;case n:l++,f+=t[i][1],i++;break;case o:l+c>1?(0!==l&&0!==c&&(0!==(e=a(d,f))&&(i-l-c>0&&t[i-l-c-1][0]==o?t[i-l-c-1][1]+=d.substring(0,e):(t.splice(0,0,[o,d.substring(0,e)]),i++),d=d.substring(e),f=f.substring(e)),0!==(e=s(d,f))&&(t[i][1]=d.substring(d.length-e)+t[i][1],d=d.substring(0,d.length-e),f=f.substring(0,f.length-e))),0===l?t.splice(i-c,l+c,[r,d]):0===c?t.splice(i-l,l+c,[n,f]):t.splice(i-l-c,l+c,[n,f],[r,d]),i=i-l-c+(l?1:0)+(c?1:0)+1):0!==i&&t[i-1][0]==o?(t[i-1][1]+=t[i][1],t.splice(i,1)):i++,c=0,l=0,f="",d=""}""===t[t.length-1][1]&&t.pop();var p=!1;for(i=1;i<t.length-1;)t[i-1][0]==o&&t[i+1][0]==o&&(t[i][1].substring(t[i][1].length-t[i-1][1].length)==t[i-1][1]?(t[i][1]=t[i-1][1]+t[i][1].substring(0,t[i][1].length-t[i-1][1].length),t[i+1][1]=t[i-1][1]+t[i+1][1],t.splice(i-1,1),p=!0):t[i][1].substring(0,t[i+1][1].length)==t[i+1][1]&&(t[i-1][1]+=t[i+1][1],t[i][1]=t[i][1].substring(t[i+1][1].length)+t[i+1][1],t.splice(i+1,1),p=!0)),i++;p&&u(t)}var c=i;function f(t,e,n){for(var r=e+n-1;r>=0&&r>=e-1;r--)if(r+1<t.length){var o=t[r],i=t[r+1];o[0]===i[1]&&t.splice(r,2,[o[0],o[1]+i[1]])}return t}c.INSERT=r,c.DELETE=n,c.EQUAL=o,t.exports=c},function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}(t.exports="function"==typeof Object.keys?Object.keys:n).shim=n},function(t,e){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function r(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function o(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}(e=t.exports=n?r:o).supported=r,e.unsupported=o},function(t,e){"use strict";var n=Object.prototype.hasOwnProperty,r="~";function o(){}function i(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function l(){this._events=new o,this._eventsCount=0}Object.create&&(o.prototype=Object.create(null),(new o).__proto__||(r=!1)),l.prototype.eventNames=function(){var t,e,o=[];if(0===this._eventsCount)return o;for(e in t=this._events)n.call(t,e)&&o.push(r?e.slice(1):e);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(t)):o},l.prototype.listeners=function(t,e){var n=r?r+t:t,o=this._events[n];if(e)return!!o;if(!o)return[];if(o.fn)return[o.fn];for(var i=0,l=o.length,a=new Array(l);i<l;i++)a[i]=o[i].fn;return a},l.prototype.emit=function(t,e,n,o,i,l){var a=r?r+t:t;if(!this._events[a])return!1;var s,u,c=this._events[a],f=arguments.length;if(c.fn){switch(c.once&&this.removeListener(t,c.fn,void 0,!0),f){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,e),!0;case 3:return c.fn.call(c.context,e,n),!0;case 4:return c.fn.call(c.context,e,n,o),!0;case 5:return c.fn.call(c.context,e,n,o,i),!0;case 6:return c.fn.call(c.context,e,n,o,i,l),!0}for(u=1,s=new Array(f-1);u<f;u++)s[u-1]=arguments[u];c.fn.apply(c.context,s)}else{var d,p=c.length;for(u=0;u<p;u++)switch(c[u].once&&this.removeListener(t,c[u].fn,void 0,!0),f){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,e);break;case 3:c[u].fn.call(c[u].context,e,n);break;case 4:c[u].fn.call(c[u].context,e,n,o);break;default:if(!s)for(d=1,s=new Array(f-1);d<f;d++)s[d-1]=arguments[d];c[u].fn.apply(c[u].context,s)}}return!0},l.prototype.on=function(t,e,n){var o=new i(e,n||this),l=r?r+t:t;return this._events[l]?this._events[l].fn?this._events[l]=[this._events[l],o]:this._events[l].push(o):(this._events[l]=o,this._eventsCount++),this},l.prototype.once=function(t,e,n){var o=new i(e,n||this,!0),l=r?r+t:t;return this._events[l]?this._events[l].fn?this._events[l]=[this._events[l],o]:this._events[l].push(o):(this._events[l]=o,this._eventsCount++),this},l.prototype.removeListener=function(t,e,n,i){var l=r?r+t:t;if(!this._events[l])return this;if(!e)return 0==--this._eventsCount?this._events=new o:delete this._events[l],this;var a=this._events[l];if(a.fn)a.fn!==e||i&&!a.once||n&&a.context!==n||(0==--this._eventsCount?this._events=new o:delete this._events[l]);else{for(var s=0,u=[],c=a.length;s<c;s++)(a[s].fn!==e||i&&!a[s].once||n&&a[s].context!==n)&&u.push(a[s]);u.length?this._events[l]=1===u.length?u[0]:u:0==--this._eventsCount?this._events=new o:delete this._events[l]}return this},l.prototype.removeAllListeners=function(t){var e;return t?(e=r?r+t:t,this._events[e]&&(0==--this._eventsCount?this._events=new o:delete this._events[e])):(this._events=new o,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prototype.setMaxListeners=function(){return this},l.prefixed=r,l.EventEmitter=l,void 0!==t&&(t.exports=l)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.matchText=e.matchSpacing=e.matchNewline=e.matchBlot=e.matchAttributor=e.default=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=m(n(3)),a=m(n(2)),s=m(n(0)),u=m(n(5)),c=m(n(10)),f=m(n(9)),d=n(36),p=n(37),h=m(n(13)),y=n(26),v=n(38),b=n(39),g=n(40);function m(t){return t&&t.__esModule?t:{default:t}}function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=(0,c.default)("quill:clipboard"),w="__ql-matcher",x=[[Node.TEXT_NODE,I],[Node.TEXT_NODE,R],["br",function(t,e){return N(e,"\n")||e.insert("\n"),e}],[Node.ELEMENT_NODE,R],[Node.ELEMENT_NODE,L],[Node.ELEMENT_NODE,M],[Node.ELEMENT_NODE,C],[Node.ELEMENT_NODE,function(t,e){var n={},r=t.style||{};return r.fontStyle&&"italic"===j(t).fontStyle&&(n.italic=!0),r.fontWeight&&(j(t).fontWeight.startsWith("bold")||parseInt(j(t).fontWeight)>=700)&&(n.bold=!0),Object.keys(n).length>0&&(e=A(e,n)),parseFloat(r.textIndent||0)>0&&(e=(new a.default).insert("\t").concat(e)),e}],["li",function(t,e){var n=s.default.query(t);if(null==n||"list-item"!==n.blotName||!N(e,"\n"))return e;for(var r=-1,o=t.parentNode;!o.classList.contains("ql-clipboard");)"list"===(s.default.query(o)||{}).blotName&&(r+=1),o=o.parentNode;return r<=0?e:e.compose((new a.default).retain(e.length()-1).retain(1,{indent:r}))}],["b",P.bind(P,"bold")],["i",P.bind(P,"italic")],["style",function(){return new a.default}]],k=[d.AlignAttribute,v.DirectionAttribute].reduce((function(t,e){return t[e.keyName]=e,t}),{}),O=[d.AlignStyle,p.BackgroundStyle,y.ColorStyle,v.DirectionStyle,b.FontStyle,g.SizeStyle].reduce((function(t,e){return t[e.keyName]=e,t}),{}),E=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.root.addEventListener("paste",r.onPaste.bind(r)),r.container=r.quill.addContainer("ql-clipboard"),r.container.setAttribute("contenteditable",!0),r.container.setAttribute("tabindex",-1),r.matchers=[],x.concat(r.options.matchers).forEach((function(t){var e=o(t,2),i=e[0],l=e[1];(n.matchVisual||l!==M)&&r.addMatcher(i,l)})),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"addMatcher",value:function(t,e){this.matchers.push([t,e])}},{key:"convert",value:function(t){if("string"==typeof t)return this.container.innerHTML=t.replace(/\>\r?\n +\</g,"><"),this.convert();var e=this.quill.getFormat(this.quill.selection.savedRange.index);if(e[h.default.blotName]){var n=this.container.innerText;return this.container.innerHTML="",(new a.default).insert(n,q({},h.default.blotName,e[h.default.blotName]))}var r=this.prepareMatching(),i=o(r,2),l=i[0],s=i[1],u=S(this.container,l,s);return N(u,"\n")&&null==u.ops[u.ops.length-1].attributes&&(u=u.compose((new a.default).retain(u.length()-1).delete(1))),_.log("convert",this.container.innerHTML,u),this.container.innerHTML="",u}},{key:"dangerouslyPasteHTML",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.default.sources.API;if("string"==typeof t)this.quill.setContents(this.convert(t),e),this.quill.setSelection(0,u.default.sources.SILENT);else{var r=this.convert(e);this.quill.updateContents((new a.default).retain(t).concat(r),n),this.quill.setSelection(t+r.length(),u.default.sources.SILENT)}}},{key:"onPaste",value:function(t){var e=this;if(!t.defaultPrevented&&this.quill.isEnabled()){var n=this.quill.getSelection(),r=(new a.default).retain(n.index),o=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(u.default.sources.SILENT),setTimeout((function(){r=r.concat(e.convert()).delete(n.length),e.quill.updateContents(r,u.default.sources.USER),e.quill.setSelection(r.length()-n.length,u.default.sources.SILENT),e.quill.scrollingContainer.scrollTop=o,e.quill.focus()}),1)}}},{key:"prepareMatching",value:function(){var t=this,e=[],n=[];return this.matchers.forEach((function(r){var i=o(r,2),l=i[0],a=i[1];switch(l){case Node.TEXT_NODE:n.push(a);break;case Node.ELEMENT_NODE:e.push(a);break;default:[].forEach.call(t.container.querySelectorAll(l),(function(t){t[w]=t[w]||[],t[w].push(a)}))}})),[e,n]}}]),e}(f.default);function A(t,e,n){return"object"===(void 0===e?"undefined":r(e))?Object.keys(e).reduce((function(t,n){return A(t,n,e[n])}),t):t.reduce((function(t,r){return r.attributes&&r.attributes[e]?t.push(r):t.insert(r.insert,(0,l.default)({},q({},e,n),r.attributes))}),new a.default)}function j(t){if(t.nodeType!==Node.ELEMENT_NODE)return{};var e="__ql-computed-style";return t[e]||(t[e]=window.getComputedStyle(t))}function N(t,e){for(var n="",r=t.ops.length-1;r>=0&&n.length<e.length;--r){var o=t.ops[r];if("string"!=typeof o.insert)break;n=o.insert+n}return n.slice(-1*e.length)===e}function T(t){if(0===t.childNodes.length)return!1;var e=j(t);return["block","list-item"].indexOf(e.display)>-1}function S(t,e,n){return t.nodeType===t.TEXT_NODE?n.reduce((function(e,n){return n(t,e)}),new a.default):t.nodeType===t.ELEMENT_NODE?[].reduce.call(t.childNodes||[],(function(r,o){var i=S(o,e,n);return o.nodeType===t.ELEMENT_NODE&&(i=e.reduce((function(t,e){return e(o,t)}),i),i=(o[w]||[]).reduce((function(t,e){return e(o,t)}),i)),r.concat(i)}),new a.default):new a.default}function P(t,e,n){return A(n,t,!0)}function C(t,e){var n=s.default.Attributor.Attribute.keys(t),r=s.default.Attributor.Class.keys(t),o=s.default.Attributor.Style.keys(t),i={};return n.concat(r).concat(o).forEach((function(e){var n=s.default.query(e,s.default.Scope.ATTRIBUTE);null!=n&&(i[n.attrName]=n.value(t),i[n.attrName])||(null==(n=k[e])||n.attrName!==e&&n.keyName!==e||(i[n.attrName]=n.value(t)||void 0),null==(n=O[e])||n.attrName!==e&&n.keyName!==e||(n=O[e],i[n.attrName]=n.value(t)||void 0))})),Object.keys(i).length>0&&(e=A(e,i)),e}function L(t,e){var n=s.default.query(t);if(null==n)return e;if(n.prototype instanceof s.default.Embed){var r={},o=n.value(t);null!=o&&(r[n.blotName]=o,e=(new a.default).insert(r,n.formats(t)))}else"function"==typeof n.formats&&(e=A(e,n.blotName,n.formats(t)));return e}function R(t,e){return N(e,"\n")||(T(t)||e.length()>0&&t.nextSibling&&T(t.nextSibling))&&e.insert("\n"),e}function M(t,e){if(T(t)&&null!=t.nextElementSibling&&!N(e,"\n\n")){var n=t.offsetHeight+parseFloat(j(t).marginTop)+parseFloat(j(t).marginBottom);t.nextElementSibling.offsetTop>t.offsetTop+1.5*n&&e.insert("\n")}return e}function I(t,e){var n=t.data;if("O:P"===t.parentNode.tagName)return e.insert(n.trim());if(0===n.trim().length&&t.parentNode.classList.contains("ql-clipboard"))return e;if(!j(t.parentNode).whiteSpace.startsWith("pre")){var r=function(t,e){return(e=e.replace(/[^\u00a0]/g,"")).length<1&&t?" ":e};n=(n=n.replace(/\r\n/g," ").replace(/\n/g," ")).replace(/\s\s+/g,r.bind(r,!0)),(null==t.previousSibling&&T(t.parentNode)||null!=t.previousSibling&&T(t.previousSibling))&&(n=n.replace(/^\s+/,r.bind(r,!1))),(null==t.nextSibling&&T(t.parentNode)||null!=t.nextSibling&&T(t.nextSibling))&&(n=n.replace(/\s+$/,r.bind(r,!1)))}return e.insert(n)}E.DEFAULTS={matchers:[],matchVisual:!0},e.default=E,e.matchAttributor=C,e.matchBlot=L,e.matchNewline=R,e.matchSpacing=M,e.matchText=I},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=n(6),a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"optimize",value:function(t){i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return i(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),e}(((r=l)&&r.__esModule?r:{default:r}).default);a.blotName="bold",a.tagName=["STRONG","B"],e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addControls=e.default=void 0;var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=c(n(2)),l=c(n(0)),a=c(n(5)),s=c(n(10)),u=c(n(9));function c(t){return t&&t.__esModule?t:{default:t}}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d=(0,s.default)("quill:toolbar"),p=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o,i=f(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));if(Array.isArray(i.options.container)){var l=document.createElement("div");y(l,i.options.container),t.container.parentNode.insertBefore(l,t.container),i.container=l}else"string"==typeof i.options.container?i.container=document.querySelector(i.options.container):i.container=i.options.container;return i.container instanceof HTMLElement?(i.container.classList.add("ql-toolbar"),i.controls=[],i.handlers={},Object.keys(i.options.handlers).forEach((function(t){i.addHandler(t,i.options.handlers[t])})),[].forEach.call(i.container.querySelectorAll("button, select"),(function(t){i.attach(t)})),i.quill.on(a.default.events.EDITOR_CHANGE,(function(t,e){t===a.default.events.SELECTION_CHANGE&&i.update(e)})),i.quill.on(a.default.events.SCROLL_OPTIMIZE,(function(){var t=i.quill.selection.getRange(),e=r(t,1)[0];i.update(e)})),i):(o=d.error("Container required for toolbar",i.options),f(i,o))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"addHandler",value:function(t,e){this.handlers[t]=e}},{key:"attach",value:function(t){var e=this,n=[].find.call(t.classList,(function(t){return 0===t.indexOf("ql-")}));if(n){if(n=n.slice(3),"BUTTON"===t.tagName&&t.setAttribute("type","button"),null==this.handlers[n]){if(null!=this.quill.scroll.whitelist&&null==this.quill.scroll.whitelist[n])return void d.warn("ignoring attaching to disabled format",n,t);if(null==l.default.query(n))return void d.warn("ignoring attaching to nonexistent format",n,t)}var o="SELECT"===t.tagName?"change":"click";t.addEventListener(o,(function(o){var s=void 0;if("SELECT"===t.tagName){if(t.selectedIndex<0)return;var u=t.options[t.selectedIndex];s=!u.hasAttribute("selected")&&(u.value||!1)}else s=!t.classList.contains("ql-active")&&(t.value||!t.hasAttribute("value")),o.preventDefault();e.quill.focus();var c=e.quill.selection.getRange(),f=r(c,1)[0];if(null!=e.handlers[n])e.handlers[n].call(e,s);else if(l.default.query(n).prototype instanceof l.default.Embed){if(!(s=prompt("Enter "+n)))return;e.quill.updateContents((new i.default).retain(f.index).delete(f.length).insert(function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,s)),a.default.sources.USER)}else e.quill.format(n,s,a.default.sources.USER);e.update(f)})),this.controls.push([n,t])}}},{key:"update",value:function(t){var e=null==t?{}:this.quill.getFormat(t);this.controls.forEach((function(n){var o=r(n,2),i=o[0],l=o[1];if("SELECT"===l.tagName){var a=void 0;if(null==t)a=null;else if(null==e[i])a=l.querySelector("option[selected]");else if(!Array.isArray(e[i])){var s=e[i];"string"==typeof s&&(s=s.replace(/\"/g,'\\"')),a=l.querySelector('option[value="'+s+'"]')}null==a?(l.value="",l.selectedIndex=-1):a.selected=!0}else if(null==t)l.classList.remove("ql-active");else if(l.hasAttribute("value")){var u=e[i]===l.getAttribute("value")||null!=e[i]&&e[i].toString()===l.getAttribute("value")||null==e[i]&&!l.getAttribute("value");l.classList.toggle("ql-active",u)}else l.classList.toggle("ql-active",null!=e[i])}))}}]),e}(u.default);function h(t,e,n){var r=document.createElement("button");r.setAttribute("type","button"),r.classList.add("ql-"+e),null!=n&&(r.value=n),t.appendChild(r)}function y(t,e){Array.isArray(e[0])||(e=[e]),e.forEach((function(e){var n=document.createElement("span");n.classList.add("ql-formats"),e.forEach((function(t){if("string"==typeof t)h(n,t);else{var e=Object.keys(t)[0],r=t[e];Array.isArray(r)?function(t,e,n){var r=document.createElement("select");r.classList.add("ql-"+e),n.forEach((function(t){var e=document.createElement("option");!1!==t?e.setAttribute("value",t):e.setAttribute("selected","selected"),r.appendChild(e)})),t.appendChild(r)}(n,e,r):h(n,e,r)}})),t.appendChild(n)}))}p.DEFAULTS={},p.DEFAULTS={container:null,handlers:{clean:function(){var t=this,e=this.quill.getSelection();if(null!=e)if(0==e.length){var n=this.quill.getFormat();Object.keys(n).forEach((function(e){null!=l.default.query(e,l.default.Scope.INLINE)&&t.quill.format(e,!1)}))}else this.quill.removeFormat(e,a.default.sources.USER)},direction:function(t){var e=this.quill.getFormat().align;"rtl"===t&&null==e?this.quill.format("align","right",a.default.sources.USER):t||"right"!==e||this.quill.format("align",!1,a.default.sources.USER),this.quill.format("direction",t,a.default.sources.USER)},indent:function(t){var e=this.quill.getSelection(),n=this.quill.getFormat(e),r=parseInt(n.indent||0);if("+1"===t||"-1"===t){var o="+1"===t?1:-1;"rtl"===n.direction&&(o*=-1),this.quill.format("indent",r+o,a.default.sources.USER)}},link:function(t){!0===t&&(t=prompt("Enter link URL:")),this.quill.format("link",t,a.default.sources.USER)},list:function(t){var e=this.quill.getSelection(),n=this.quill.getFormat(e);"check"===t?"checked"===n.list||"unchecked"===n.list?this.quill.format("list",!1,a.default.sources.USER):this.quill.format("list","unchecked",a.default.sources.USER):this.quill.format("list",t,a.default.sources.USER)}}},e.default=p,e.addControls=y},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=n(28),a=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.label.innerHTML=n,r.container.classList.add("ql-color-picker"),[].slice.call(r.container.querySelectorAll(".ql-picker-item"),0,7).forEach((function(t){t.classList.add("ql-primary")})),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"buildItem",value:function(t){var n=i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"buildItem",this).call(this,t);return n.style.backgroundColor=t.getAttribute("value")||"",n}},{key:"selectItem",value:function(t,n){i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"selectItem",this).call(this,t,n);var r=this.label.querySelector(".ql-color-label"),o=t&&t.getAttribute("data-value")||"";r&&("line"===r.tagName?r.style.stroke=o:r.style.fill=o)}}]),e}(((r=l)&&r.__esModule?r:{default:r}).default);e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=n(28),a=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.container.classList.add("ql-icon-picker"),[].forEach.call(r.container.querySelectorAll(".ql-picker-item"),(function(t){t.innerHTML=n[t.getAttribute("data-value")||""]})),r.defaultItem=r.container.querySelector(".ql-selected"),r.selectItem(r.defaultItem),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"selectItem",value:function(t,n){i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"selectItem",this).call(this,t,n),t=t||this.defaultItem,this.label.innerHTML=t.innerHTML}}]),e}(((r=l)&&r.__esModule?r:{default:r}).default);e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quill=e,this.boundsContainer=n||document.body,this.root=e.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",(function(){r.root.style.marginTop=-1*r.quill.root.scrollTop+"px"})),this.hide()}return r(t,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(t){var e=t.left+t.width/2-this.root.offsetWidth/2,n=t.bottom+this.quill.root.scrollTop;this.root.style.left=e+"px",this.root.style.top=n+"px",this.root.classList.remove("ql-flip");var r=this.boundsContainer.getBoundingClientRect(),o=this.root.getBoundingClientRect(),i=0;if(o.right>r.right&&(i=r.right-o.right,this.root.style.left=e+i+"px"),o.left<r.left&&(i=r.left-o.left,this.root.style.left=e+i+"px"),o.bottom>r.bottom){var l=o.bottom-o.top,a=t.bottom-t.top+l;this.root.style.top=n-a+"px",this.root.classList.add("ql-flip")}return i}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=p(n(3)),a=p(n(8)),s=n(43),u=p(s),c=p(n(27)),f=n(15),d=p(n(41));function p(t){return t&&t.__esModule?t:{default:t}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var b=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],g=function(t){function e(t,n){h(this,e),null!=n.modules.toolbar&&null==n.modules.toolbar.container&&(n.modules.toolbar.container=b);var r=y(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.container.classList.add("ql-snow"),r}return v(e,t),i(e,[{key:"extendToolbar",value:function(t){t.container.classList.add("ql-snow"),this.buildButtons([].slice.call(t.container.querySelectorAll("button")),d.default),this.buildPickers([].slice.call(t.container.querySelectorAll("select")),d.default),this.tooltip=new m(this.quill,this.options.bounds),t.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},(function(e,n){t.handlers.link.call(t,!n.format.link)}))}}]),e}(u.default);g.DEFAULTS=(0,l.default)(!0,{},u.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(t){if(t){var e=this.quill.getSelection();if(null==e||0==e.length)return;var n=this.quill.getText(e);/^\S+@\S+\.\S+$/.test(n)&&0!==n.indexOf("mailto:")&&(n="mailto:"+n),this.quill.theme.tooltip.edit("link",n)}else this.quill.format("link",!1)}}}}});var m=function(t){function e(t,n){h(this,e);var r=y(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.preview=r.root.querySelector("a.ql-preview"),r}return v(e,t),i(e,[{key:"listen",value:function(){var t=this;o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",(function(e){t.root.classList.contains("ql-editing")?t.save():t.edit("link",t.preview.textContent),e.preventDefault()})),this.root.querySelector("a.ql-remove").addEventListener("click",(function(e){if(null!=t.linkRange){var n=t.linkRange;t.restoreFocus(),t.quill.formatText(n,"link",!1,a.default.sources.USER),delete t.linkRange}e.preventDefault(),t.hide()})),this.quill.on(a.default.events.SELECTION_CHANGE,(function(e,n,o){if(null!=e){if(0===e.length&&o===a.default.sources.USER){var i=t.quill.scroll.descendant(c.default,e.index),l=r(i,2),s=l[0],u=l[1];if(null!=s){t.linkRange=new f.Range(e.index-u,s.length());var d=c.default.formats(s.domNode);return t.preview.textContent=d,t.preview.setAttribute("href",d),t.show(),void t.position(t.quill.getBounds(t.linkRange))}}else delete t.linkRange;t.hide()}}))}},{key:"show",value:function(){o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),e}(s.BaseTooltip);m.TEMPLATE=['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),e.default=g},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=R(n(29)),o=n(36),i=n(38),l=n(64),a=R(n(65)),s=R(n(66)),u=n(67),c=R(u),f=n(37),d=n(26),p=n(39),h=n(40),y=R(n(56)),v=R(n(68)),b=R(n(27)),g=R(n(69)),m=R(n(70)),q=R(n(71)),_=R(n(72)),w=R(n(73)),x=n(13),k=R(x),O=R(n(74)),E=R(n(75)),A=R(n(57)),j=R(n(41)),N=R(n(28)),T=R(n(59)),S=R(n(60)),P=R(n(61)),C=R(n(108)),L=R(n(62));function R(t){return t&&t.__esModule?t:{default:t}}r.default.register({"attributors/attribute/direction":i.DirectionAttribute,"attributors/class/align":o.AlignClass,"attributors/class/background":f.BackgroundClass,"attributors/class/color":d.ColorClass,"attributors/class/direction":i.DirectionClass,"attributors/class/font":p.FontClass,"attributors/class/size":h.SizeClass,"attributors/style/align":o.AlignStyle,"attributors/style/background":f.BackgroundStyle,"attributors/style/color":d.ColorStyle,"attributors/style/direction":i.DirectionStyle,"attributors/style/font":p.FontStyle,"attributors/style/size":h.SizeStyle},!0),r.default.register({"formats/align":o.AlignClass,"formats/direction":i.DirectionClass,"formats/indent":l.IndentClass,"formats/background":f.BackgroundStyle,"formats/color":d.ColorStyle,"formats/font":p.FontClass,"formats/size":h.SizeClass,"formats/blockquote":a.default,"formats/code-block":k.default,"formats/header":s.default,"formats/list":c.default,"formats/bold":y.default,"formats/code":x.Code,"formats/italic":v.default,"formats/link":b.default,"formats/script":g.default,"formats/strike":m.default,"formats/underline":q.default,"formats/image":_.default,"formats/video":w.default,"formats/list/item":u.ListItem,"modules/formula":O.default,"modules/syntax":E.default,"modules/toolbar":A.default,"themes/bubble":C.default,"themes/snow":L.default,"ui/icons":j.default,"ui/picker":N.default,"ui/icon-picker":S.default,"ui/color-picker":T.default,"ui/tooltip":P.default},!0),e.default=r.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.IndentClass=void 0;var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=n(0),a=(r=l)&&r.__esModule?r:{default:r},s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"add",value:function(t,n){if("+1"===n||"-1"===n){var r=this.value(t)||0;n="+1"===n?r+1:r-1}return 0===n?(this.remove(t),!0):i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"add",this).call(this,t,n)}},{key:"canAdd",value:function(t,n){return i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"canAdd",this).call(this,t,n)||i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"canAdd",this).call(this,t,parseInt(n))}},{key:"value",value:function(t){return parseInt(i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t))||void 0}}]),e}(a.default.Attributor.Class),u=new s("indent","ql-indent",{scope:a.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});e.IndentClass=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(4),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(((r=o)&&r.__esModule?r:{default:r}).default);i.blotName="blockquote",i.tagName="blockquote",e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(4),l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,null,[{key:"formats",value:function(t){return this.tagName.indexOf(t.tagName)+1}}]),e}(((r=i)&&r.__esModule?r:{default:r}).default);l.blotName="header",l.tagName=["H1","H2","H3","H4","H5","H6"],e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ListItem=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},i=s(n(0)),l=s(n(4)),a=s(n(25));function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var d=function(t){function e(){return u(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return f(e,t),r(e,[{key:"format",value:function(t,n){t!==p.blotName||n?o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n):this.replaceWith(i.default.create(this.statics.scope))}},{key:"remove",value:function(){null==this.prev&&null==this.next?this.parent.remove():o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(t,n){return this.parent.isolate(this.offset(this.parent),this.length()),t===this.parent.statics.blotName?(this.parent.replaceWith(t,n),this):(this.parent.unwrap(),o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replaceWith",this).call(this,t,n))}}],[{key:"formats",value:function(t){return t.tagName===this.tagName?void 0:o(e.__proto__||Object.getPrototypeOf(e),"formats",this).call(this,t)}}]),e}(l.default);d.blotName="list-item",d.tagName="LI";var p=function(t){function e(t){u(this,e);var n=c(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)),r=function(e){if(e.target.parentNode===t){var r=n.statics.formats(t),o=i.default.find(e.target);"checked"===r?o.format("list","unchecked"):"unchecked"===r&&o.format("list","checked")}};return t.addEventListener("touchstart",r),t.addEventListener("mousedown",r),n}return f(e,t),r(e,null,[{key:"create",value:function(t){var n="ordered"===t?"OL":"UL",r=o(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,n);return"checked"!==t&&"unchecked"!==t||r.setAttribute("data-checked","checked"===t),r}},{key:"formats",value:function(t){return"OL"===t.tagName?"ordered":"UL"===t.tagName?t.hasAttribute("data-checked")?"true"===t.getAttribute("data-checked")?"checked":"unchecked":"bullet":void 0}}]),r(e,[{key:"format",value:function(t,e){this.children.length>0&&this.children.tail.format(t,e)}},{key:"formats",value:function(){return t={},e=this.statics.blotName,n=this.statics.formats(this.domNode),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t;var t,e,n}},{key:"insertBefore",value:function(t,n){if(t instanceof d)o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n);else{var r=null==n?this.length():n.offset(this),i=this.split(r);i.parent.insertBefore(t,i)}}},{key:"optimize",value:function(t){o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t);var n=this.next;null!=n&&n.prev===this&&n.statics.blotName===this.statics.blotName&&n.domNode.tagName===this.domNode.tagName&&n.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(n.moveChildren(this),n.remove())}},{key:"replace",value:function(t){if(t.statics.blotName!==this.statics.blotName){var n=i.default.create(this.statics.defaultChild);t.moveChildren(n),this.appendChild(n)}o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replace",this).call(this,t)}}]),e}(a.default);p.blotName="list",p.scope=i.default.Scope.BLOCK_BLOT,p.tagName=["OL","UL"],p.defaultChild="list-item",p.allowedChildren=[d],e.ListItem=d,e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(56),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(((r=o)&&r.__esModule?r:{default:r}).default);i.blotName="italic",i.tagName=["EM","I"],e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=n(6),a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,null,[{key:"create",value:function(t){return"super"===t?document.createElement("sup"):"sub"===t?document.createElement("sub"):i(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t)}},{key:"formats",value:function(t){return"SUB"===t.tagName?"sub":"SUP"===t.tagName?"super":void 0}}]),e}(((r=l)&&r.__esModule?r:{default:r}).default);a.blotName="script",a.tagName=["SUB","SUP"],e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(6),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(((r=o)&&r.__esModule?r:{default:r}).default);i.blotName="strike",i.tagName="S",e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(6),i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(((r=o)&&r.__esModule?r:{default:r}).default);i.blotName="underline",i.tagName="U",e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=n(0),a=(r=l)&&r.__esModule?r:{default:r},s=n(27),u=["alt","height","width"],c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"format",value:function(t,n){u.indexOf(t)>-1?n?this.domNode.setAttribute(t,n):this.domNode.removeAttribute(t):i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}],[{key:"create",value:function(t){var n=i(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return"string"==typeof t&&n.setAttribute("src",this.sanitize(t)),n}},{key:"formats",value:function(t){return u.reduce((function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e}),{})}},{key:"match",value:function(t){return/\.(jpe?g|gif|png)$/.test(t)||/^data:image\/.+;base64/.test(t)}},{key:"sanitize",value:function(t){return(0,s.sanitize)(t,["http","https","data"])?t:"//:0"}},{key:"value",value:function(t){return t.getAttribute("src")}}]),e}(a.default.Embed);c.blotName="image",c.tagName="IMG",e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},l=n(4),a=n(27),s=(r=a)&&r.__esModule?r:{default:r},u=["height","width"],c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"format",value:function(t,n){u.indexOf(t)>-1?n?this.domNode.setAttribute(t,n):this.domNode.removeAttribute(t):i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}],[{key:"create",value:function(t){var n=i(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return n.setAttribute("frameborder","0"),n.setAttribute("allowfullscreen",!0),n.setAttribute("src",this.sanitize(t)),n}},{key:"formats",value:function(t){return u.reduce((function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e}),{})}},{key:"sanitize",value:function(t){return s.default.sanitize(t)}},{key:"value",value:function(t){return t.getAttribute("src")}}]),e}(l.BlockEmbed);c.blotName="video",c.className="ql-video",c.tagName="IFRAME",e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.FormulaBlot=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},i=s(n(35)),l=s(n(5)),a=s(n(9));function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var d=function(t){function e(){return u(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return f(e,t),r(e,null,[{key:"create",value:function(t){var n=o(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return"string"==typeof t&&(window.katex.render(t,n,{throwOnError:!1,errorColor:"#f00"}),n.setAttribute("data-value",t)),n}},{key:"value",value:function(t){return t.getAttribute("data-value")}}]),e}(i.default);d.blotName="formula",d.className="ql-formula",d.tagName="SPAN";var p=function(t){function e(){u(this,e);var t=c(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));if(null==window.katex)throw new Error("Formula module requires KaTeX.");return t}return f(e,t),r(e,null,[{key:"register",value:function(){l.default.register(d,!0)}}]),e}(a.default);e.FormulaBlot=d,e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.CodeToken=e.CodeBlock=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},i=s(n(0)),l=s(n(5)),a=s(n(9));function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var d=function(t){function e(){return u(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return f(e,t),r(e,[{key:"replaceWith",value:function(t){this.domNode.textContent=this.domNode.textContent,this.attach(),o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replaceWith",this).call(this,t)}},{key:"highlight",value:function(t){var e=this.domNode.textContent;this.cachedText!==e&&((e.trim().length>0||null==this.cachedText)&&(this.domNode.innerHTML=t(e),this.domNode.normalize(),this.attach()),this.cachedText=e)}}]),e}(s(n(13)).default);d.className="ql-syntax";var p=new i.default.Attributor.Class("token","hljs",{scope:i.default.Scope.INLINE}),h=function(t){function e(t,n){u(this,e);var r=c(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));if("function"!=typeof r.options.highlight)throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var o=null;return r.quill.on(l.default.events.SCROLL_OPTIMIZE,(function(){clearTimeout(o),o=setTimeout((function(){r.highlight(),o=null}),r.options.interval)})),r.highlight(),r}return f(e,t),r(e,null,[{key:"register",value:function(){l.default.register(p,!0),l.default.register(d,!0)}}]),r(e,[{key:"highlight",value:function(){var t=this;if(!this.quill.selection.composing){this.quill.update(l.default.sources.USER);var e=this.quill.getSelection();this.quill.scroll.descendants(d).forEach((function(e){e.highlight(t.options.highlight)})),this.quill.update(l.default.sources.SILENT),null!=e&&this.quill.setSelection(e,l.default.sources.SILENT)}}}]),e}(a.default);h.DEFAULTS={highlight:null==window.hljs?null:function(t){return window.hljs.highlightAuto(t).value},interval:1e3},e.CodeBlock=d,e.CodeToken=p,e.default=h},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(t,e){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.BubbleTooltip=void 0;var r=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(r):void 0},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=f(n(3)),l=f(n(8)),a=n(43),s=f(a),u=n(15),c=f(n(41));function f(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var y=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],v=function(t){function e(t,n){d(this,e),null!=n.modules.toolbar&&null==n.modules.toolbar.container&&(n.modules.toolbar.container=y);var r=p(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.container.classList.add("ql-bubble"),r}return h(e,t),o(e,[{key:"extendToolbar",value:function(t){this.tooltip=new b(this.quill,this.options.bounds),this.tooltip.root.appendChild(t.container),this.buildButtons([].slice.call(t.container.querySelectorAll("button")),c.default),this.buildPickers([].slice.call(t.container.querySelectorAll("select")),c.default)}}]),e}(s.default);v.DEFAULTS=(0,i.default)(!0,{},s.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(t){t?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var b=function(t){function e(t,n){d(this,e);var r=p(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.on(l.default.events.EDITOR_CHANGE,(function(t,e,n,o){if(t===l.default.events.SELECTION_CHANGE)if(null!=e&&e.length>0&&o===l.default.sources.USER){r.show(),r.root.style.left="0px",r.root.style.width="",r.root.style.width=r.root.offsetWidth+"px";var i=r.quill.getLines(e.index,e.length);if(1===i.length)r.position(r.quill.getBounds(e));else{var a=i[i.length-1],s=r.quill.getIndex(a),c=Math.min(a.length()-1,e.index+e.length-s),f=r.quill.getBounds(new u.Range(s,c));r.position(f)}}else document.activeElement!==r.textbox&&r.quill.hasFocus()&&r.hide()})),r}return h(e,t),o(e,[{key:"listen",value:function(){var t=this;r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",(function(){t.root.classList.remove("ql-editing")})),this.quill.on(l.default.events.SCROLL_OPTIMIZE,(function(){setTimeout((function(){if(!t.root.classList.contains("ql-hidden")){var e=t.quill.getSelection();null!=e&&t.position(t.quill.getBounds(e))}}),1)}))}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(t){var n=r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"position",this).call(this,t),o=this.root.querySelector(".ql-tooltip-arrow");if(o.style.marginLeft="",0===n)return n;o.style.marginLeft=-1*n-o.offsetWidth/2+"px"}}]),e}(a.BaseTooltip);b.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),e.BubbleTooltip=b,e.default=v},function(t,e,n){t.exports=n(63)}]).default},t.exports=r()},20947:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const r={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const o=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.url?n("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):n("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},35803:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const r={name:"FormButtonGBI",props:["loading"],components:{"back-button":n(20947).Z}};const o=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-sm-9 text-center"},[n("back-button"),t._v(" "),n("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v(t._s(t.loading?"submitting":"submit"))])],2)],1)])}),[],!1,null,null,null).exports},99310:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});n(2347);const r={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},value:{},placeholder:{type:String,default:"Enter name to search"}},data:function(){return{selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1,edit_flag:!1,content:this.value}},watch:{itemList:function(){this.itemList.length>0&&this.getSelected(this.content)}},created:function(){this.value&&this.getSelected(this.value),document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},closeEvent:function(){this.showlist&&(this.edit_flag=!1,this.getSelected(this.content),this.showlist=!1,this.arrowCounter=0)},getSelected:function(t){if(null!=this.itemList&&0==this.edit_flag)for(var e=0;e<this.itemList.length;e++)this.itemList[e].id==t&&(this.selectedItem=this.itemList[e],this.inputValue=this.itemList[e].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("input",this.selectedItem.id)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.content=t.id,this.$emit("input",this.content),this.inputValue="",this.showlist=!1,this.$emit("change",t.id)},itemVisible:function(t){var e=t.name.toLowerCase(),n=this.inputValue.toLowerCase();return e.includes(n)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}};const o=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.itemList?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):n("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),n("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),1==t.showlist?n("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[n("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,r){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===r},on:{click:function(n){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[n("label",[n("input",{staticClass:"d-none",attrs:{type:"checkbox"},domProps:{value:e.id}}),t._v(t._s(e.name))])])})),0)]):t._e()]):t._e()}),[],!1,null,null,null).exports},85516:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const r={name:"FromLayoutGBI",data:function(){return{}}};const o=(0,n(51900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-around"},[n("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},38374:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var r=n(50175),o=n(35803),i=n(85516),l=n(66484),a=n(99310);const s={name:"EditSeason",components:{Form:r.Form,"has-error":r.HasError,"form-buttons":o.Z,"form-layout":i.Z,"dropdown-filter":a.Z},data:function(){return{season_list:[],form:new r.Form({current:""}),allCreated:!1}},mixins:[l.Z],created:function(){this.SeasonData(),this.SeasonListData()},methods:{SeasonData:function(){var t=this;axios.get("/api/current-season").then((function(e){e.data&&(t.form.current=e.data.current,t.allCreated=!0)}))},SeasonListData:function(){var t=this;axios.get("/api/season").then((function(e){if(e.data)for(var n=0;n<e.data.length;n++)t.season_list.push({id:e.data[n].name,name:e.data[n].name})}))},currentUpdate:function(t){this.form.current=t.id},updateSeason:function(){var t=this;this.form.put("/api/current-season/set").then((function(e){t.$toast.fire({icon:"success",title:"Season Updated"})})).catch((function(){}))}}};const u=(0,n(51900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[t.allCreated?n("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.updateSeason()}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"current"}},[t._v("Select Current Season")]),t._v(" "),n("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.season_list},on:{"update:option":t.currentUpdate},model:{value:t.form.current,callback:function(e){t.$set(t.form,"current",e)},expression:"form.current"}}),t._v(" "),t.form.errors.has("current")?n("div",{staticClass:"error"},[n("label",{staticClass:"danger text-danger"},[t._v(t._s(t.form.errors.get("current")))])]):t._e()],1)])]),t._v(" "),n("form-buttons")],1):t._e()]},proxy:!0}])})}),[],!1,null,null,null).exports},2739:(t,e,n)=>{"use strict";n.d(e,{bR:()=>w});var r=n(76095),o=n.n(r),i=[[{header:[!1,1,2,3,4,5,6]}],["bold","italic","underline","strike"],[{align:""},{align:"center"},{align:"right"},{align:"justify"}],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{list:"check"}],[{indent:"-1"},{indent:"+1"}],[{color:[]},{background:[]}],["link","image","video"],["clean"]],l={props:{customModules:Array},methods:{registerCustomModules:function(t){void 0!==this.customModules&&this.customModules.forEach((function(e){t.register("modules/"+e.alias,e.module)}))}}};function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function d(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(t,e){var n=function(t){return t&&"object"===a(t)};return n(t)&&n(e)?(Object.keys(e).forEach((function(r){var o=t[r],i=e[r];Array.isArray(o)&&Array.isArray(i)?t[r]=o.concat(i):n(o)&&n(i)?t[r]=h(Object.assign({},o),i):t[r]=i})),t):e}var y=function(t){function e(){return s(this,e),d(this,c(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),e}(o().import("blots/block/embed"));y.blotName="hr",y.tagName="hr",o().register("formats/horizontal",y);var v=function(){function t(e,n){var r=this;s(this,t),this.quill=e,this.options=n,this.ignoreTags=["PRE"],this.matches=[{name:"header",pattern:/^(#){1,6}\s/g,action:function(t,e,n){var o=n.exec(t);if(o){var i=o[0].length;setTimeout((function(){r.quill.formatLine(e.index,0,"header",i-1),r.quill.deleteText(e.index-i,i)}),0)}}},{name:"blockquote",pattern:/^(>)\s/g,action:function(t,e){setTimeout((function(){r.quill.formatLine(e.index,1,"blockquote",!0),r.quill.deleteText(e.index-2,2)}),0)}},{name:"code-block",pattern:/^`{3}(?:\s|\n)/g,action:function(t,e){setTimeout((function(){r.quill.formatLine(e.index,1,"code-block",!0),r.quill.deleteText(e.index-4,4)}),0)}},{name:"bolditalic",pattern:/(?:\*|_){3}(.+?)(?:\*|_){3}/g,action:function(t,e,n,o){var i=n.exec(t),l=i[0],a=i[1],s=o+i.index;t.match(/^([*_ \n]+)$/g)||setTimeout((function(){r.quill.deleteText(s,l.length),r.quill.insertText(s,a,{bold:!0,italic:!0}),r.quill.format("bold",!1)}),0)}},{name:"bold",pattern:/(?:\*|_){2}(.+?)(?:\*|_){2}/g,action:function(t,e,n,o){var i=n.exec(t),l=i[0],a=i[1],s=o+i.index;t.match(/^([*_ \n]+)$/g)||setTimeout((function(){r.quill.deleteText(s,l.length),r.quill.insertText(s,a,{bold:!0}),r.quill.format("bold",!1)}),0)}},{name:"italic",pattern:/(?:\*|_){1}(.+?)(?:\*|_){1}/g,action:function(t,e,n,o){var i=n.exec(t),l=i[0],a=i[1],s=o+i.index;t.match(/^([*_ \n]+)$/g)||setTimeout((function(){r.quill.deleteText(s,l.length),r.quill.insertText(s,a,{italic:!0}),r.quill.format("italic",!1)}),0)}},{name:"strikethrough",pattern:/(?:~~)(.+?)(?:~~)/g,action:function(t,e,n,o){var i=n.exec(t),l=i[0],a=i[1],s=o+i.index;t.match(/^([*_ \n]+)$/g)||setTimeout((function(){r.quill.deleteText(s,l.length),r.quill.insertText(s,a,{strike:!0}),r.quill.format("strike",!1)}),0)}},{name:"code",pattern:/(?:`)(.+?)(?:`)/g,action:function(t,e,n,o){var i=n.exec(t),l=i[0],a=i[1],s=o+i.index;t.match(/^([*_ \n]+)$/g)||setTimeout((function(){r.quill.deleteText(s,l.length),r.quill.insertText(s,a,{code:!0}),r.quill.format("code",!1),r.quill.insertText(r.quill.getSelection()," ")}),0)}},{name:"hr",pattern:/^([-*]\s?){3}/g,action:function(t,e){var n=e.index-t.length;setTimeout((function(){r.quill.deleteText(n,t.length),r.quill.insertEmbed(n+1,"hr",!0,o().sources.USER),r.quill.insertText(n+2,"\n",o().sources.SILENT),r.quill.setSelection(n+2,o().sources.SILENT)}),0)}},{name:"asterisk-ul",pattern:/^(\*|\+)\s$/g,action:function(t,e,n){setTimeout((function(){r.quill.formatLine(e.index,1,"list","unordered"),r.quill.deleteText(e.index-2,2)}),0)}},{name:"image",pattern:/(?:!\[(.+?)\])(?:\((.+?)\))/g,action:function(t,e,n){var o=t.search(n),i=t.match(n)[0],l=t.match(/(?:\((.*?)\))/g)[0],a=e.index-i.length-1;-1!==o&&setTimeout((function(){r.quill.deleteText(a,i.length),r.quill.insertEmbed(a,"image",l.slice(1,l.length-1))}),0)}},{name:"link",pattern:/(?:\[(.+?)\])(?:\((.+?)\))/g,action:function(t,e,n){var o=t.search(n),i=t.match(n)[0],l=t.match(/(?:\[(.*?)\])/g)[0],a=t.match(/(?:\((.*?)\))/g)[0],s=e.index-i.length-1;-1!==o&&setTimeout((function(){r.quill.deleteText(s,i.length),r.quill.insertText(s,l.slice(1,l.length-1),"link",a.slice(1,a.length-1))}),0)}}],this.quill.on("text-change",(function(t,e,n){for(var o=0;o<t.ops.length;o++)t.ops[o].hasOwnProperty("insert")&&(" "===t.ops[o].insert?r.onSpace():"\n"===t.ops[o].insert&&r.onEnter())}))}var e,n,r;return e=t,(n=[{key:"isValid",value:function(t,e){return void 0!==t&&t&&-1===this.ignoreTags.indexOf(e)}},{key:"onSpace",value:function(){var t=this.quill.getSelection();if(t){var e=p(this.quill.getLine(t.index),2),n=e[0],r=e[1],o=n.domNode.textContent,i=t.index-r;if(this.isValid(o,n.domNode.tagName)){var l=!0,a=!1,s=void 0;try{for(var u,c=this.matches[Symbol.iterator]();!(l=(u=c.next()).done);l=!0){var f=u.value;if(o.match(f.pattern))return console.log("matched:",f.name,o),void f.action(o,t,f.pattern,i)}}catch(t){a=!0,s=t}finally{try{l||null==c.return||c.return()}finally{if(a)throw s}}}}}},{key:"onEnter",value:function(){var t=this.quill.getSelection();if(t){var e=p(this.quill.getLine(t.index),2),n=e[0],r=e[1],o=n.domNode.textContent+" ",i=t.index-r;if(t.length=t.index++,this.isValid(o,n.domNode.tagName)){var l=!0,a=!1,s=void 0;try{for(var u,c=this.matches[Symbol.iterator]();!(l=(u=c.next()).done);l=!0){var f=u.value;if(o.match(f.pattern))return console.log("matched",f.name,o),void f.action(o,t,f.pattern,i)}}catch(t){a=!0,s=t}finally{try{l||null==c.return||c.return()}finally{if(a)throw s}}}}}}])&&u(e.prototype,n),r&&u(e,r),t}(),b={name:"VueEditor",mixins:[l],props:{id:{type:String,default:"quill-container"},placeholder:{type:String,default:""},value:{type:String,default:""},disabled:{type:Boolean},editorToolbar:{type:Array,default:function(){return[]}},editorOptions:{type:Object,required:!1,default:function(){return{}}},useCustomImageHandler:{type:Boolean,default:!1},useMarkdownShortcuts:{type:Boolean,default:!1}},data:function(){return{quill:null}},watch:{value:function(t){t==this.quill.root.innerHTML||this.quill.hasFocus()||(this.quill.root.innerHTML=t)},disabled:function(t){this.quill.enable(!t)}},mounted:function(){this.registerCustomModules(o()),this.registerPrototypes(),this.initializeEditor()},beforeDestroy:function(){this.quill=null,delete this.quill},methods:{initializeEditor:function(){this.setupQuillEditor(),this.checkForCustomImageHandler(),this.handleInitialContent(),this.registerEditorEventListeners(),this.$emit("ready",this.quill)},setupQuillEditor:function(){var t={debug:!1,modules:this.setModules(),theme:"snow",placeholder:this.placeholder?this.placeholder:"",readOnly:!!this.disabled&&this.disabled};this.prepareEditorConfig(t),this.quill=new(o())(this.$refs.quillContainer,t)},setModules:function(){var t={toolbar:this.editorToolbar.length?this.editorToolbar:i};return this.useMarkdownShortcuts&&(o().register("modules/markdownShortcuts",v,!0),t.markdownShortcuts={}),t},prepareEditorConfig:function(t){Object.keys(this.editorOptions).length>0&&this.editorOptions.constructor===Object&&(this.editorOptions.modules&&void 0!==this.editorOptions.modules.toolbar&&delete t.modules.toolbar,h(t,this.editorOptions))},registerPrototypes:function(){o().prototype.getHTML=function(){return this.container.querySelector(".ql-editor").innerHTML},o().prototype.getWordCount=function(){return this.container.querySelector(".ql-editor").innerText.length}},registerEditorEventListeners:function(){this.quill.on("text-change",this.handleTextChange),this.quill.on("selection-change",this.handleSelectionChange),this.listenForEditorEvent("text-change"),this.listenForEditorEvent("selection-change"),this.listenForEditorEvent("editor-change")},listenForEditorEvent:function(t){var e=this;this.quill.on(t,(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.$emit.apply(e,[t].concat(r))}))},handleInitialContent:function(){this.value&&(this.quill.root.innerHTML=this.value)},handleSelectionChange:function(t,e){!t&&e?this.$emit("blur",this.quill):t&&!e&&this.$emit("focus",this.quill)},handleTextChange:function(t,e){var n="<p><br></p>"===this.quill.getHTML()?"":this.quill.getHTML();this.$emit("input",n),this.useCustomImageHandler&&this.handleImageRemoved(t,e)},handleImageRemoved:function(t,e){var n=this;this.quill.getContents().diff(e).ops.map((function(t){if(t.insert&&t.insert.hasOwnProperty("image")){var e=t.insert.image;n.$emit("image-removed",e)}}))},checkForCustomImageHandler:function(){!0===this.useCustomImageHandler&&this.setupCustomImageHandler()},setupCustomImageHandler:function(){this.quill.getModule("toolbar").addHandler("image",this.customImageHandler)},customImageHandler:function(){this.$refs.fileInput.click()},emitImageInfo:function(t){var e=t.target.files[0],n=this.quill,r=n.getSelection().index;this.$emit("image-added",e,n,r,(function(){document.getElementById("file-upload").value=""}))}}};var g,m=function(t,e,n,r,o,i,l,a,s,u){"boolean"!=typeof l&&(s=a,a=l,l=!1);var c,f="function"==typeof n?n.options:n;if(t&&t.render&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,s(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},f._ssrRegister=c):e&&(c=l?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),c)if(f.functional){var d=f.render;f.render=function(t,e){return c.call(e),d(t,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,c):[c]}return n},q="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var _={};var w=m({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quillWrapper"},[t._t("toolbar"),t._v(" "),n("div",{ref:"quillContainer",attrs:{id:t.id}}),t._v(" "),t.useCustomImageHandler?n("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{id:"file-upload",type:"file",accept:"image/*"},on:{change:function(e){return t.emitImageInfo(e)}}}):t._e()],2)},staticRenderFns:[]},(function(t){t&&(t("data-v-776e788e_0",{source:"/*!\n * Quill Editor v1.3.6\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li::before{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:0;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li::before{content:'\\2022'}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li::before,.ql-editor ul[data-checked=true]>li::before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li::before{content:'\\2611'}.ql-editor ul[data-checked=false]>li::before{content:'\\2610'}.ql-editor li::before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl)::before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl::before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) '. '}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) '. '}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) '. '}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) '. '}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) '. '}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) '. '}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) '. '}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) '. '}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) '. '}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) '. '}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank::before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow .ql-toolbar:after,.ql-snow.ql-toolbar:after{clear:both;content:'';display:table}.ql-snow .ql-toolbar button,.ql-snow.ql-toolbar button{background:0 0;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow .ql-toolbar button svg,.ql-snow.ql-toolbar button svg{float:left;height:100%}.ql-snow .ql-toolbar button:active:hover,.ql-snow.ql-toolbar button:active:hover{outline:0}.ql-snow .ql-toolbar input.ql-image[type=file],.ql-snow.ql-toolbar input.ql-image[type=file]{display:none}.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar button.ql-active,.ql-snow .ql-toolbar button:focus,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover{color:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow .ql-toolbar button:hover:not(.ql-active),.ql-snow.ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow{box-sizing:border-box}.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:'';display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label::before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item::before,.ql-snow .ql-picker.ql-header .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before{content:'Heading 1'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before{content:'Heading 2'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before{content:'Heading 3'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before{content:'Heading 4'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before{content:'Heading 5'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before{content:'Heading 6'}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item::before,.ql-snow .ql-picker.ql-font .ql-picker-label::before{content:'Sans Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before{content:'Serif'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before{content:'Monospace'}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item::before,.ql-snow .ql-picker.ql-size .ql-picker-label::before{content:'Normal'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before{content:'Small'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before{content:'Large'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before{content:'Huge'}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label{border-color:#ccc}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip::before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action::after{border-right:1px solid #ccc;content:'Edit';margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove::before{content:'Remove';margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action::after{border-right:0;content:'Save';padding-right:0}.ql-snow .ql-tooltip[data-mode=link]::before{content:\"Enter link:\"}.ql-snow .ql-tooltip[data-mode=formula]::before{content:\"Enter formula:\"}.ql-snow .ql-tooltip[data-mode=video]::before{content:\"Enter video:\"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}",map:void 0,media:void 0}),t("data-v-776e788e_1",{source:".ql-editor{min-height:200px;font-size:16px}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1px!important}.quillWrapper .ql-snow.ql-toolbar{padding-top:8px;padding-bottom:4px}.quillWrapper .ql-snow.ql-toolbar .ql-formats{margin-bottom:10px}.ql-snow .ql-toolbar button svg,.quillWrapper .ql-snow.ql-toolbar button svg{width:22px;height:22px}.quillWrapper .ql-editor ul[data-checked=false]>li::before,.quillWrapper .ql-editor ul[data-checked=true]>li::before{font-size:1.35em;vertical-align:baseline;bottom:-.065em;font-weight:900;color:#222}.quillWrapper .ql-snow .ql-stroke{stroke:rgba(63,63,63,.95);stroke-linecap:square;stroke-linejoin:initial;stroke-width:1.7px}.quillWrapper .ql-picker-label{font-size:15px}.quillWrapper .ql-snow .ql-active .ql-stroke{stroke-width:2.25px}.quillWrapper .ql-toolbar.ql-snow .ql-formats{vertical-align:top}.ql-picker:not(.ql-background){position:relative;top:2px}.ql-picker.ql-color-picker svg{width:22px!important;height:22px!important}.quillWrapper .imageResizeActive img{display:block;cursor:pointer}.quillWrapper .imageResizeActive~div svg{cursor:pointer}",map:void 0,media:void 0}))}),b,undefined,!1,undefined,(function(t){return function(t,e){return function(t,e){var n=q?e.media||"default":t,r=_[n]||(_[n]={ids:new Set,styles:[]});if(!r.ids.has(t)){r.ids.add(t);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",e.media&&r.element.setAttribute("media",e.media),void 0===g&&(g=document.head||document.getElementsByTagName("head")[0]),g.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,l=document.createTextNode(o),a=r.element.childNodes;a[i]&&r.element.removeChild(a[i]),a.length?r.element.insertBefore(l,a[i]):r.element.appendChild(l)}}}(t,e)}}),void 0);var x={install:function t(e){t.installed||(t.installed=!0,e.component("VueEditor",w))},version:"2.10.3",Quill:o(),VueEditor:w},k=null;"undefined"!=typeof window?k=window.Vue:void 0!==n.g&&(k=n.g.Vue),k&&k.use(x)}}]);
>>>>>>> Stashed changes
