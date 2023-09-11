(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/EncycloPediaComment"],{

/***/ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js ***!
  \**************************************************************************/
/***/ ((module, exports) => {

/*!
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"%0 of %1":"%0 of %1","Block quote":"Block quote",Bold:"Bold","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot upload file:":"Cannot upload file:","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit link":"Edit link","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Widget toolbar":"Widget toolbar"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(t,e){ true?module.exports=e():0}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=96)}([function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));class i extends Error{constructor(t,e,n){t=o(t),n&&(t+=" "+JSON.stringify(n)),super(t),this.name="CKEditorError",this.context=e,this.data=n}is(t){return"CKEditorError"===t}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new i(t.message,e);throw n.stack=t.stack,n}}function o(t){const e=t.match(/^([^:]+):/);return e?t+` Read more: https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html#error-${e[1]}\n`:t}},function(t,e,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function a(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},i=[],o=0;o<t.length;o++){var r=t[o],c=e.base?r[0]+e.base:r[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=a(d),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(s[u].references++,s[u].updater(h)):s.push({identifier:d,updater:p(h,e),references:1}),i.push(d)}return i}function l(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var s=r(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function h(t,e,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function f(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var g=null,m=0;function p(t,e){var n,i,o;if(e.singleton){var r=m++;n=g||(g=l(e)),i=h.bind(null,n,r,!1),o=h.bind(null,n,r,!0)}else n=l(e),i=f.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var o=a(n[i]);s[o].references--}for(var r=c(t,e),l=0;l<n.length;l++){var d=a(n[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=r}}}},,function(t,e,n){"use strict";var i=n(7),o="object"==typeof self&&self&&self.Object===Object&&self,r=i.a||o||Function("return this")();e.a=r},function(t,e,n){"use strict";(function(t){var i=n(3),o=n(12),r= true&&exports&&!exports.nodeType&&exports,s=r&&"object"==typeof t&&t&&!t.nodeType&&t,a=s&&s.exports===r?i.a.Buffer:void 0,c=(a?a.isBuffer:void 0)||o.a;e.a=c}).call(this,n(9)(t))},function(t,e,n){"use strict";(function(t){var i=n(7),o= true&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=r&&r.exports===o&&i.a.process,a=function(){try{var t=r&&r.require&&r.require("util").types;return t||s&&s.binding&&s.binding("util")}catch(t){}}();e.a=a}).call(this,n(9)(t))},function(t,e,n){"use strict";(function(t){var e=n(0);const i="object"==typeof window?window:t;if(i.CKEDITOR_VERSION)throw new e.b("ckeditor-duplicated-modules: Some CKEditor 5 modules are duplicated.",null);i.CKEDITOR_VERSION="20.0.0"}).call(this,n(10))},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(10))},function(t,e,n){"use strict";(function(t){var i=n(3),o= true&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=r&&r.exports===o?i.a.Buffer:void 0,a=s?s.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var n=t.length,i=a?a(n):new t.constructor(n);return t.copy(i),i}}).call(this,n(9)(t))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var i=n(1),o=n(71);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e,n){"use strict";e.a=function(){return!1}},function(t,e,n){var i=n(1),o=n(14);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-placeholder:before,.ck .ck-placeholder:before{cursor:text;color:var(--ck-color-engine-placeholder-text)}"},function(t,e,n){var i=n(1),o=n(16);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999);--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,0.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-color-link-fake-selection:rgba(31,177,255,0.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}"},function(t,e,n){var i=n(1),o=n(18);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}"},function(t,e,n){var i=n(1),o=n(20);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}"},function(t,e,n){var i=n(1),o=n(22);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}"},function(t,e,n){var i=n(1),o=n(24);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{top:100%;bottom:auto}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}:root{--ck-dropdown-arrow-size:calc(0.5*var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}"},function(t,e,n){var i=n(1),o=n(26);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}"},function(t,e,n){var i=n(1),o=n(28);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports='.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s;border-style:solid;left:50%}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}'},function(t,e,n){var i=n(1),o=n(30);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1*var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:calc(-1*var(--ck-spacing-small));margin-left:var(--ck-spacing-small)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"},function(t,e,n){var i=n(1),o=n(32);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;padding:calc(0.2*var(--ck-line-height-base)*var(--ck-font-size-base)) calc(0.4*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(1.2*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}"},function(t,e,n){var i=n(1),o=n(34);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2*var(--ck-switch-button-toggle-spacing))}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(2*var(--ck-spacing-large))}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(2*var(--ck-spacing-large))}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(0.5*var(--ck-border-radius))}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:all .3s ease}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var(--ck-switch-button-translation))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(-1*var(--ck-switch-button-translation)))}"},function(t,e,n){var i=n(1),o=n(36);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-toolbar-dropdown .ck.ck-toolbar .ck.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}"},function(t,e,n){var i=n(1),o=n(38);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}"},function(t,e,n){var i=n(1),o=n(40);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row nowrap;align-items:center}.ck.ck-toolbar>.ck-toolbar__items{display:flex;flex-flow:row wrap;align-items:center;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;width:1px;min-width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck.ck-toolbar>.ck-toolbar__items>*{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>*,.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-top-right-radius:0;border-bottom-right-radius:0}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl].ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child){margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr].ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child){margin-right:var(--ck-spacing-small)}"},function(t,e,n){var i=n(1),o=n(42);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}"},function(t,e,n){var i=n(1),o=n(44);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:5px solid #ccc}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}"},function(t,e,n){var i=n(1),o=n(46);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{right:25%;margin-right:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{left:25%;margin-left:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{right:25%;margin-right:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}'},function(t,e,n){var i=n(1),o=n(48);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{height:100%;border-right:1px solid var(--ck-color-base-text);margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}"},function(t,e,n){var i=n(1),o=n(50);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports='.ck .ck-widget .ck-widget__type-around__button{display:block;position:absolute;overflow:hidden;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{position:absolute;top:50%;left:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{top:calc(-0.5*var(--ck-widget-outline-thickness));left:min(10%,30px);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(-0.5*var(--ck-widget-outline-thickness));right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;position:absolute;top:1px;left:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;position:absolute;left:0;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(-1*var(--ck-widget-outline-thickness));right:calc(-1*var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{top:calc(-1*var(--ck-widget-outline-thickness) - 1px);display:block}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(-1*var(--ck-widget-outline-thickness) - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{width:var(--ck-widget-type-around-button-size);height:var(--ck-widget-type-around-button-size);background:var(--ck-color-widget-type-around-button);border-radius:100px;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);opacity:0;pointer-events:none}.ck .ck-widget .ck-widget__type-around__button svg{width:10px;height:8px;transform:translate(-50%,-50%);transition:transform .5s ease;margin-top:1px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{width:calc(var(--ck-widget-type-around-button-size) - 2px);height:calc(var(--ck-widget-type-around-button-size) - 2px);border-radius:100px;background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3))}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{pointer-events:none;height:1px;animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;outline:1px solid hsla(0,0%,100%,.5);background:var(--ck-color-base-text)}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer{opacity:0}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}'},function(t,e,n){var i=n(1),o=n(52);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-resizer-size:10px;--ck-resizer-border-width:1px;--ck-resizer-border-radius:2px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-tooltip-offset:10px;--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover .ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);color:var(--ck-color-resizer-tooltip-text);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);font-size:var(--ck-font-size-tiny);display:block;padding:var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{top:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{top:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover .ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover .ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle .ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}"},function(t,e,n){var i=n(1),o=n(54);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view>.ck.ck-label{width:100%;text-overflow:ellipsis;overflow:hidden}"},function(t,e,n){var i=n(1),o=n(56);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition:box-shadow .2s ease-in-out,border .2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),var(--ck-inner-shadow)}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}"},function(t,e,n){var i=n(1),o=n(58);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}[dir=ltr] .ck.ck-text-alternative-form>:not(:first-child),[dir=rtl] .ck.ck-text-alternative-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-text-alternative-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-text-alternative-form .ck-labeled-field-view{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-text-alternative-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-text-alternative-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-text-alternative-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-text-alternative-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(1),o=n(60);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck .ck-balloon-rotator__navigation{display:flex;align-items:center;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}"},function(t,e,n){var i=n(1),o=n(62);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);width:100%;height:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}"},function(t,e,n){var i=n(1),o=n(64);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck-content .image{display:table;clear:both;text-align:center;margin:1em auto}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:50px}"},function(t,e,n){var i=n(1),o=n(66);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-editor__editable .image{position:relative}.ck.ck-editor__editable .image .ck-progress-bar{position:absolute;top:0;left:0}.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"},function(t,e,n){var i=n(1),o=n(68);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports='.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}'},function(t,e,n){var i=n(1),o=n(70);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports='.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}'},function(t,e){t.exports=".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}"},function(t,e,n){var i=n(1),o=n(73);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}"},function(t,e,n){var i=n(1),o=n(75);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center,.ck-content .image-style-align-left,.ck-content .image-style-align-right,.ck-content .image-style-side{max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}"},function(t,e,n){var i=n(1),o=n(77);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}[dir=ltr] .ck.ck-link-form>:not(:first-child),[dir=rtl] .ck.ck-link-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-form .ck-labeled-field-view{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}.ck.ck-link-form_layout-vertical{padding:0;min-width:var(--ck-input-text-width)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{padding:var(--ck-spacing-standard);margin:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin-left:0}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}"},function(t,e,n){var i=n(1),o=n(79);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):last-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(1),o=n(81);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports='.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(3*var(--ck-spacing-standard));background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMDAzLjc4IDEuNjFoNDkuNjIxYzEuNjk0IDAgMy4xOS0uNzk4IDQuMTQ2LTIuMDM3eiIgZmlsbD0iIzVjODhjNSIvPjxwYXRoIGQ9Ik0yMjYuNzQyIDIyMi45ODhjLTkuMjY2IDAtMTYuNzc3IDcuMTctMTYuNzc3IDE2LjAxNC4wMDcgMi43NjIuNjYzIDUuNDc0IDIuMDkzIDcuODc1LjQzLjcwMy44MyAxLjQwOCAxLjE5IDIuMTA3LjMzMy41MDIuNjUgMS4wMDUuOTUgMS41MDguMzQzLjQ3Ny42NzMuOTU3Ljk4OCAxLjQ0IDEuMzEgMS43NjkgMi41IDMuNTAyIDMuNjM3IDUuMTY4Ljc5MyAxLjI3NSAxLjY4MyAyLjY0IDIuNDY2IDMuOTkgMi4zNjMgNC4wOTQgNC4wMDcgOC4wOTIgNC42IDEzLjkxNHYuMDEyYy4xODIuNDEyLjUxNi42NjYuODc5LjY2Ny40MDMtLjAwMS43NjgtLjMxNC45My0uNzk5LjYwMy01Ljc1NiAyLjIzOC05LjcyOSA0LjU4NS0xMy43OTQuNzgyLTEuMzUgMS42NzMtMi43MTUgMi40NjUtMy45OSAxLjEzNy0xLjY2NiAyLjMyOC0zLjQgMy42MzgtNS4xNjkuMzE1LS40ODIuNjQ1LS45NjIuOTg4LTEuNDM5LjMtLjUwMy42MTctMS4wMDYuOTUtMS41MDguMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0eiIgZmlsbD0iI2RkNGIzZSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48ZWxsaXBzZSByeT0iNS41NjQiIHJ4PSI1LjgyOCIgY3k9IjIzOS4wMDIiIGN4PSIyMjYuNzQyIiBmaWxsPSIjODAyZDI3IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0xOTAuMzAxIDIzNy4yODNjLTQuNjcgMC04LjQ1NyAzLjg1My04LjQ1NyA4LjYwNnMzLjc4NiA4LjYwNyA4LjQ1NyA4LjYwN2MzLjA0MyAwIDQuODA2LS45NTggNi4zMzctMi41MTYgMS41My0xLjU1NyAyLjA4Ny0zLjkxMyAyLjA4Ny02LjI5IDAtLjM2Mi0uMDIzLS43MjItLjA2NC0xLjA3OWgtOC4yNTd2My4wNDNoNC44NWMtLjE5Ny43NTktLjUzMSAxLjQ1LTEuMDU4IDEuOTg2LS45NDIuOTU4LTIuMDI4IDEuNTQ4LTMuOTAxIDEuNTQ4LTIuODc2IDAtNS4yMDgtMi4zNzItNS4yMDgtNS4yOTkgMC0yLjkyNiAyLjMzMi01LjI5OSA1LjIwOC01LjI5OSAxLjM5OSAwIDIuNjE4LjQwNyAzLjU4NCAxLjI5M2wyLjM4MS0yLjM4YzAtLjAwMi0uMDAzLS4wMDQtLjAwNC0uMDA1LTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTV6bTQuNDMgNS42NmwuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxNS4xODQgMjUxLjkyOWwtNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMjMzIDUuMjMzIDAgMDAuNDQ5LTIuMTIzdi0zMS4xNjVjLS40NjkuNjc1LS45MzQgMS4zNDktMS4zODIgMi4wMDUtLjc5MiAxLjI3NS0xLjY4MiAyLjY0LTIuNDY1IDMuOTktMi4zNDcgNC4wNjUtMy45ODIgOC4wMzgtNC41ODUgMTMuNzk0LS4xNjIuNDg1LS41MjcuNzk4LS45My43OTktLjM2My0uMDAxLS42OTctLjI1NS0uODc5LS42Njd2LS4wMTJjLS41OTMtNS44MjItMi4yMzctOS44Mi00LjYtMTMuOTE0LS43ODMtMS4zNS0xLjY3My0yLjcxNS0yLjQ2Ni0zLjk5LTEuMTM3LTEuNjY2LTIuMzI3LTMuNC0zLjYzNy01LjE2OWwtLjAwMi0uMDAzeiIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yMTIuOTgzIDI0OC40OTVsLTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAwNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAwLS45ODktMS40NCAzNS4xMjcgMzUuMTI3IDAgMDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMDA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}'},function(t,e,n){var i=n(1),o=n(83);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}.ck.ck-media-form{padding:var(--ck-spacing-standard)}.ck.ck-media-form:focus{outline:none}[dir=ltr] .ck.ck-media-form>:not(:first-child),[dir=rtl] .ck.ck-media-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-media-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-media-form .ck-labeled-field-view{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-media-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-media-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-media-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-media-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-media-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-media-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-media-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"},function(t,e,n){var i=n(1),o=n(85);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck-content .media{clear:both;margin:1em 0;display:block;min-width:15em}"},function(t,e,n){var i=n(1),o=n(87);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=":root{--ck-color-table-focused-cell-background:rgba(158,207,250,0.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}"},function(t,e,n){var i=n(1),o=n(89);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__action{border-top-right-radius:unset;border-bottom-right-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__action{border-top-left-radius:unset;border-bottom-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-radius:0}.ck-rounded-corners [dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow,[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:unset;border-bottom-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-top-right-radius:unset;border-bottom-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled){border-left-color:var(--ck-color-split-button-hover-border)}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled){border-right-color:var(--ck-color-split-button-hover-border)}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}"},function(t,e,n){var i=n(1),o=n(91);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-color-base-border);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-color-focus-border);background:var(--ck-color-focus-outer-shadow)}"},function(t,e,n){var i=n(1),o=n(93);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=':root{--ck-table-selected-cell-background:rgba(158,207,250,0.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{position:relative;caret-color:transparent;outline:unset;box-shadow:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{content:"";pointer-events:none;background-color:var(--ck-table-selected-cell-background);position:absolute;top:0;left:0;right:0;bottom:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget_selected{outline:unset}'},function(t,e,n){var i=n(1),o=n(95);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};i(o,r);t.exports=o.locals||{}},function(t,e){t.exports=".ck-content .table{margin:1em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border:1px solid #bfbfbf}.ck-content .table table th{font-weight:700;background:hsla(0,0%,0%,5%)}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}"},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return pb}));var i=n(3),o=i.a.Symbol,r=Object.prototype,s=r.hasOwnProperty,a=r.toString,c=o?o.toStringTag:void 0;var l=function(t){var e=s.call(t,c),n=t[c];try{t[c]=void 0;var i=!0}catch(t){}var o=a.call(t);return i&&(e?t[c]=n:delete t[c]),o},d=Object.prototype.toString;var u=function(t){return d.call(t)},h=o?o.toStringTag:void 0;var f=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":h&&h in Object(t)?l(t):u(t)};var g=function(t,e){return function(n){return t(e(n))}},m=g(Object.getPrototypeOf,Object);var p=function(t){return null!=t&&"object"==typeof t},b=Function.prototype,w=Object.prototype,k=b.toString,_=w.hasOwnProperty,v=k.call(Object);var y=function(t){if(!p(t)||"[object Object]"!=f(t))return!1;var e=m(t);if(null===e)return!0;var n=_.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&k.call(n)==v};var x=function(){this.__data__=[],this.size=0};var A=function(t,e){return t===e||t!=t&&e!=e};var C=function(t,e){for(var n=t.length;n--;)if(A(t[n][0],e))return n;return-1},T=Array.prototype.splice;var P=function(t){var e=this.__data__,n=C(e,t);return!(n<0)&&(n==e.length-1?e.pop():T.call(e,n,1),--this.size,!0)};var S=function(t){var e=this.__data__,n=C(e,t);return n<0?void 0:e[n][1]};var E=function(t){return C(this.__data__,t)>-1};var M=function(t,e){var n=this.__data__,i=C(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function I(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}I.prototype.clear=x,I.prototype.delete=P,I.prototype.get=S,I.prototype.has=E,I.prototype.set=M;var N=I;var O=function(){this.__data__=new N,this.size=0};var R=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var D=function(t){return this.__data__.get(t)};var L=function(t){return this.__data__.has(t)};var j=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var V,z=function(t){if(!j(t))return!1;var e=f(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},B=i.a["__core-js_shared__"],F=(V=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"";var U=function(t){return!!F&&F in t},H=Function.prototype.toString;var W=function(t){if(null!=t){try{return H.call(t)}catch(t){}try{return t+""}catch(t){}}return""},q=/^\[object .+?Constructor\]$/,Y=Function.prototype,G=Object.prototype,$=Y.toString,K=G.hasOwnProperty,Q=RegExp("^"+$.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(t){return!(!j(t)||U(t))&&(z(t)?Q:q).test(W(t))};var Z=function(t,e){return null==t?void 0:t[e]};var X=function(t,e){var n=Z(t,e);return J(n)?n:void 0},tt=X(i.a,"Map"),et=X(Object,"create");var nt=function(){this.__data__=et?et(null):{},this.size=0};var it=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ot=Object.prototype.hasOwnProperty;var rt=function(t){var e=this.__data__;if(et){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ot.call(e,t)?e[t]:void 0},st=Object.prototype.hasOwnProperty;var at=function(t){var e=this.__data__;return et?void 0!==e[t]:st.call(e,t)};var ct=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=et&&void 0===e?"__lodash_hash_undefined__":e,this};function lt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}lt.prototype.clear=nt,lt.prototype.delete=it,lt.prototype.get=rt,lt.prototype.has=at,lt.prototype.set=ct;var dt=lt;var ut=function(){this.size=0,this.__data__={hash:new dt,map:new(tt||N),string:new dt}};var ht=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var ft=function(t,e){var n=t.__data__;return ht(e)?n["string"==typeof e?"string":"hash"]:n.map};var gt=function(t){var e=ft(this,t).delete(t);return this.size-=e?1:0,e};var mt=function(t){return ft(this,t).get(t)};var pt=function(t){return ft(this,t).has(t)};var bt=function(t,e){var n=ft(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}wt.prototype.clear=ut,wt.prototype.delete=gt,wt.prototype.get=mt,wt.prototype.has=pt,wt.prototype.set=bt;var kt=wt;var _t=function(t,e){var n=this.__data__;if(n instanceof N){var i=n.__data__;if(!tt||i.length<199)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new kt(i)}return n.set(t,e),this.size=n.size,this};function vt(t){var e=this.__data__=new N(t);this.size=e.size}vt.prototype.clear=O,vt.prototype.delete=R,vt.prototype.get=D,vt.prototype.has=L,vt.prototype.set=_t;var yt=vt;var xt=function(t,e){for(var n=-1,i=null==t?0:t.length;++n<i&&!1!==e(t[n],n,t););return t},At=function(){try{var t=X(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Ct=function(t,e,n){"__proto__"==e&&At?At(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},Tt=Object.prototype.hasOwnProperty;var Pt=function(t,e,n){var i=t[e];Tt.call(t,e)&&A(i,n)&&(void 0!==n||e in t)||Ct(t,e,n)};var St=function(t,e,n,i){var o=!n;n||(n={});for(var r=-1,s=e.length;++r<s;){var a=e[r],c=i?i(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),o?Ct(n,a,c):Pt(n,a,c)}return n};var Et=function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i};var Mt=function(t){return p(t)&&"[object Arguments]"==f(t)},It=Object.prototype,Nt=It.hasOwnProperty,Ot=It.propertyIsEnumerable,Rt=Mt(function(){return arguments}())?Mt:function(t){return p(t)&&Nt.call(t,"callee")&&!Ot.call(t,"callee")},Dt=Array.isArray,Lt=n(4),jt=/^(?:0|[1-9]\d*)$/;var Vt=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&jt.test(t))&&t>-1&&t%1==0&&t<e};var zt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Bt={};Bt["[object Float32Array]"]=Bt["[object Float64Array]"]=Bt["[object Int8Array]"]=Bt["[object Int16Array]"]=Bt["[object Int32Array]"]=Bt["[object Uint8Array]"]=Bt["[object Uint8ClampedArray]"]=Bt["[object Uint16Array]"]=Bt["[object Uint32Array]"]=!0,Bt["[object Arguments]"]=Bt["[object Array]"]=Bt["[object ArrayBuffer]"]=Bt["[object Boolean]"]=Bt["[object DataView]"]=Bt["[object Date]"]=Bt["[object Error]"]=Bt["[object Function]"]=Bt["[object Map]"]=Bt["[object Number]"]=Bt["[object Object]"]=Bt["[object RegExp]"]=Bt["[object Set]"]=Bt["[object String]"]=Bt["[object WeakMap]"]=!1;var Ft=function(t){return p(t)&&zt(t.length)&&!!Bt[f(t)]};var Ut=function(t){return function(e){return t(e)}},Ht=n(5),Wt=Ht.a&&Ht.a.isTypedArray,qt=Wt?Ut(Wt):Ft,Yt=Object.prototype.hasOwnProperty;var Gt=function(t,e){var n=Dt(t),i=!n&&Rt(t),o=!n&&!i&&Object(Lt.a)(t),r=!n&&!i&&!o&&qt(t),s=n||i||o||r,a=s?Et(t.length,String):[],c=a.length;for(var l in t)!e&&!Yt.call(t,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||r&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Vt(l,c))||a.push(l);return a},$t=Object.prototype;var Kt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||$t)},Qt=g(Object.keys,Object),Jt=Object.prototype.hasOwnProperty;var Zt=function(t){if(!Kt(t))return Qt(t);var e=[];for(var n in Object(t))Jt.call(t,n)&&"constructor"!=n&&e.push(n);return e};var Xt=function(t){return null!=t&&zt(t.length)&&!z(t)};var te=function(t){return Xt(t)?Gt(t):Zt(t)};var ee=function(t,e){return t&&St(e,te(e),t)};var ne=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},ie=Object.prototype.hasOwnProperty;var oe=function(t){if(!j(t))return ne(t);var e=Kt(t),n=[];for(var i in t)("constructor"!=i||!e&&ie.call(t,i))&&n.push(i);return n};var re=function(t){return Xt(t)?Gt(t,!0):oe(t)};var se=function(t,e){return t&&St(e,re(e),t)},ae=n(8);var ce=function(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e};var le=function(t,e){for(var n=-1,i=null==t?0:t.length,o=0,r=[];++n<i;){var s=t[n];e(s,n,t)&&(r[o++]=s)}return r};var de=function(){return[]},ue=Object.prototype.propertyIsEnumerable,he=Object.getOwnPropertySymbols,fe=he?function(t){return null==t?[]:(t=Object(t),le(he(t),(function(e){return ue.call(t,e)})))}:de;var ge=function(t,e){return St(t,fe(t),e)};var me=function(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t},pe=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)me(e,fe(t)),t=m(t);return e}:de;var be=function(t,e){return St(t,pe(t),e)};var we=function(t,e,n){var i=e(t);return Dt(t)?i:me(i,n(t))};var ke=function(t){return we(t,te,fe)};var _e=function(t){return we(t,re,pe)},ve=X(i.a,"DataView"),ye=X(i.a,"Promise"),xe=X(i.a,"Set"),Ae=X(i.a,"WeakMap"),Ce=W(ve),Te=W(tt),Pe=W(ye),Se=W(xe),Ee=W(Ae),Me=f;(ve&&"[object DataView]"!=Me(new ve(new ArrayBuffer(1)))||tt&&"[object Map]"!=Me(new tt)||ye&&"[object Promise]"!=Me(ye.resolve())||xe&&"[object Set]"!=Me(new xe)||Ae&&"[object WeakMap]"!=Me(new Ae))&&(Me=function(t){var e=f(t),n="[object Object]"==e?t.constructor:void 0,i=n?W(n):"";if(i)switch(i){case Ce:return"[object DataView]";case Te:return"[object Map]";case Pe:return"[object Promise]";case Se:return"[object Set]";case Ee:return"[object WeakMap]"}return e});var Ie=Me,Ne=Object.prototype.hasOwnProperty;var Oe=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&Ne.call(t,"index")&&(n.index=t.index,n.input=t.input),n},Re=i.a.Uint8Array;var De=function(t){var e=new t.constructor(t.byteLength);return new Re(e).set(new Re(t)),e};var Le=function(t,e){var n=e?De(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)},je=/\w*$/;var Ve=function(t){var e=new t.constructor(t.source,je.exec(t));return e.lastIndex=t.lastIndex,e},ze=o?o.prototype:void 0,Be=ze?ze.valueOf:void 0;var Fe=function(t){return Be?Object(Be.call(t)):{}};var Ue=function(t,e){var n=e?De(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};var He=function(t,e,n){var i=t.constructor;switch(e){case"[object ArrayBuffer]":return De(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return Le(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ue(t,n);case"[object Map]":return new i;case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return Ve(t);case"[object Set]":return new i;case"[object Symbol]":return Fe(t)}},We=Object.create,qe=function(){function t(){}return function(e){if(!j(e))return{};if(We)return We(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();var Ye=function(t){return"function"!=typeof t.constructor||Kt(t)?{}:qe(m(t))};var Ge=function(t){return p(t)&&"[object Map]"==Ie(t)},$e=Ht.a&&Ht.a.isMap,Ke=$e?Ut($e):Ge;var Qe=function(t){return p(t)&&"[object Set]"==Ie(t)},Je=Ht.a&&Ht.a.isSet,Ze=Je?Ut(Je):Qe,Xe={};Xe["[object Arguments]"]=Xe["[object Array]"]=Xe["[object ArrayBuffer]"]=Xe["[object DataView]"]=Xe["[object Boolean]"]=Xe["[object Date]"]=Xe["[object Float32Array]"]=Xe["[object Float64Array]"]=Xe["[object Int8Array]"]=Xe["[object Int16Array]"]=Xe["[object Int32Array]"]=Xe["[object Map]"]=Xe["[object Number]"]=Xe["[object Object]"]=Xe["[object RegExp]"]=Xe["[object Set]"]=Xe["[object String]"]=Xe["[object Symbol]"]=Xe["[object Uint8Array]"]=Xe["[object Uint8ClampedArray]"]=Xe["[object Uint16Array]"]=Xe["[object Uint32Array]"]=!0,Xe["[object Error]"]=Xe["[object Function]"]=Xe["[object WeakMap]"]=!1;var tn=function t(e,n,i,o,r,s){var a,c=1&n,l=2&n,d=4&n;if(i&&(a=r?i(e,o,r,s):i(e)),void 0!==a)return a;if(!j(e))return e;var u=Dt(e);if(u){if(a=Oe(e),!c)return ce(e,a)}else{var h=Ie(e),f="[object Function]"==h||"[object GeneratorFunction]"==h;if(Object(Lt.a)(e))return Object(ae.a)(e,c);if("[object Object]"==h||"[object Arguments]"==h||f&&!r){if(a=l||f?{}:Ye(e),!c)return l?be(e,se(a,e)):ge(e,ee(a,e))}else{if(!Xe[h])return r?e:{};a=He(e,h,c)}}s||(s=new yt);var g=s.get(e);if(g)return g;s.set(e,a),Ze(e)?e.forEach((function(o){a.add(t(o,n,i,o,e,s))})):Ke(e)&&e.forEach((function(o,r){a.set(r,t(o,n,i,r,e,s))}));var m=d?l?_e:ke:l?keysIn:te,p=u?void 0:m(e);return xt(p||e,(function(o,r){p&&(o=e[r=o]),Pt(a,r,t(o,n,i,r,e,s))})),a};var en=function(t,e){return tn(t,5,e="function"==typeof e?e:void 0)};var nn=function(t){return p(t)&&1===t.nodeType&&!y(t)};class on{constructor(t,e){this._config={},e&&this.define(rn(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,i=!1){if(y(e))return void this._setObjectToTarget(t,e,i);const o=e.split(".");e=o.pop();for(const e of o)y(t[e])||(t[e]={}),t=t[e];if(y(n))return y(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,i);i&&void 0!==t[e]||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const e of n){if(!y(t[e])){t=null;break}t=t[e]}return t?rn(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function rn(t){return en(t,sn)}function sn(t){return nn(t)?t:void 0}var an=function(){return function t(){t.called=!0}};class cn{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=an(),this.off=an()}}const ln=new Array(256).fill().map((t,e)=>("0"+e.toString(16)).slice(-2));function dn(){const t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0,i=4294967296*Math.random()>>>0;return"e"+ln[t>>0&255]+ln[t>>8&255]+ln[t>>16&255]+ln[t>>24&255]+ln[e>>0&255]+ln[e>>8&255]+ln[e>>16&255]+ln[e>>24&255]+ln[n>>0&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+ln[i>>0&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]}var un={get(t){return"number"!=typeof t?this[t]||this.normal:t},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5},hn=(n(6),n(0));const fn=Symbol("listeningTo"),gn=Symbol("emitterId");var mn={on(t,e,n={}){this.listenTo(this,t,e,n)},once(t,e,n){let i=!1;this.listenTo(this,t,(function(t,...n){i||(i=!0,t.off(),e.call(this,t,...n))}),n)},off(t,e){this.stopListening(this,t,e)},listenTo(t,e,n,i={}){let o,r;this[fn]||(this[fn]={});const s=this[fn];bn(t)||pn(t);const a=bn(t);(o=s[a])||(o=s[a]={emitter:t,callbacks:{}}),(r=o.callbacks[e])||(r=o.callbacks[e]=[]),r.push(n),function(t,e){const n=wn(t);if(n[e])return;let i=e,o=null;const r=[];for(;""!==i&&!n[i];)n[i]={callbacks:[],childEvents:[]},r.push(n[i]),o&&n[i].childEvents.push(o),o=i,i=i.substr(0,i.lastIndexOf(":"));if(""!==i){for(const t of r)t.callbacks=n[i].callbacks.slice();n[i].childEvents.push(o)}}(t,e);const c=kn(t,e),l=un.get(i.priority),d={callback:n,priority:l};for(const t of c){let e=!1;for(let n=0;n<t.length;n++)if(t[n].priority<l){t.splice(n,0,d),e=!0;break}e||t.push(d)}},stopListening(t,e,n){const i=this[fn];let o=t&&bn(t);const r=i&&o&&i[o],s=r&&e&&r.callbacks[e];if(!(!i||t&&!r||e&&!s))if(n)vn(t,e,n);else if(s){for(;n=s.pop();)vn(t,e,n);delete r.callbacks[e]}else if(r){for(e in r.callbacks)this.stopListening(t,e);delete i[o]}else{for(o in i)this.stopListening(i[o].emitter);delete this[fn]}},fire(t,...e){try{const n=t instanceof cn?t:new cn(this,t),i=n.name;let o=function t(e,n){let i;if(!e._events||!(i=e._events[n])||!i.callbacks.length)return n.indexOf(":")>-1?t(e,n.substr(0,n.lastIndexOf(":"))):null;return i.callbacks}(this,i);if(n.path.push(this),o){const t=[n,...e];o=Array.from(o);for(let e=0;e<o.length&&(o[e].callback.apply(this,t),n.off.called&&(delete n.off.called,vn(this,i,o[e].callback)),!n.stop.called);e++);}if(this._delegations){const t=this._delegations.get(i),o=this._delegations.get("*");t&&_n(t,n,e),o&&_n(o,n,e)}return n.return}catch(t){hn.b.rethrowUnexpectedError(t,this)}},delegate(...t){return{to:(e,n)=>{this._delegations||(this._delegations=new Map),t.forEach(t=>{const i=this._delegations.get(t);i?i.set(e,n):this._delegations.set(t,new Map([[e,n]]))})}}},stopDelegating(t,e){if(this._delegations)if(t)if(e){const n=this._delegations.get(t);n&&n.delete(e)}else this._delegations.delete(t);else this._delegations.clear()}};function pn(t,e){t[gn]||(t[gn]=e||dn())}function bn(t){return t[gn]}function wn(t){return t._events||Object.defineProperty(t,"_events",{value:{}}),t._events}function kn(t,e){const n=wn(t)[e];if(!n)return[];let i=[n.callbacks];for(let e=0;e<n.childEvents.length;e++){const o=kn(t,n.childEvents[e]);i=i.concat(o)}return i}function _n(t,e,n){for(let[i,o]of t){o?"function"==typeof o&&(o=o(e.name)):o=e.name;const t=new cn(e.source,o);t.path=[...e.path],i.fire(t,...n)}}function vn(t,e,n){const i=kn(t,e);for(const t of i)for(let e=0;e<t.length;e++)t[e].callback==n&&(t.splice(e,1),e--)}function yn(t){return!(!t||!t[Symbol.iterator])}function xn(t,...e){e.forEach(e=>{Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n=>{if(n in t.prototype)return;const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable=!1,Object.defineProperty(t.prototype,n,i)})})}class An{constructor(t={},e={}){const n=yn(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const e of t)this._items.push(e),this._itemMap.set(this._getItemIdBeforeAdding(e),e)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){const n=this._getItemIdBeforeAdding(t);if(void 0===e)e=this._items.length;else if(e>this._items.length||e<0)throw new hn.b("collection-add-item-invalid-index",this);return this._items.splice(e,0,t),this._itemMap.set(n,t),this.fire("add",t,e),this}get(t){let e;if("string"==typeof t)e=this._itemMap.get(t);else{if("number"!=typeof t)throw new hn.b("collection-get-invalid-arg: Index or id must be given.",this);e=this._items[t]}return e||null}has(t){if("string"==typeof t)return this._itemMap.has(t);{const e=t[this._idProperty];return this._itemMap.has(e)}}getIndex(t){let e;return e="string"==typeof t?this._itemMap.get(t):t,this._items.indexOf(e)}remove(t){let e,n,i,o=!1;const r=this._idProperty;if("string"==typeof t?(n=t,i=this._itemMap.get(n),o=!i,i&&(e=this._items.indexOf(i))):"number"==typeof t?(e=t,i=this._items[e],o=!i,i&&(n=i[r])):(i=t,n=i[r],e=this._items.indexOf(i),o=-1==e||!this._itemMap.get(n)),o)throw new hn.b("collection-remove-404: Item not found.",this);this._items.splice(e,1),this._itemMap.delete(n);const s=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(s),this.fire("remove",i,e),i}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){for(this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);this.length;)this.remove(0)}bindTo(t){if(this._bindToCollection)throw new hn.b("collection-bind-to-rebind: The collection cannot be bound more than once.",this);return this._bindToCollection=t,{as:t=>{this._setUpBindToBinding(e=>new t(e))},using:t=>{"function"==typeof t?this._setUpBindToBinding(e=>t(e)):this._setUpBindToBinding(e=>e[t])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(n,i,o)=>{const r=e._bindToCollection==this,s=e._bindToInternalToExternalMap.get(i);if(r&&s)this._bindToExternalToInternalMap.set(i,s),this._bindToInternalToExternalMap.set(s,i);else{const n=t(i);if(!n)return void this._skippedIndexesFromExternal.push(o);let r=o;for(const t of this._skippedIndexesFromExternal)o>t&&r--;for(const t of e._skippedIndexesFromExternal)r>=t&&r++;this._bindToExternalToInternalMap.set(i,n),this._bindToInternalToExternalMap.set(n,i),this.add(n,r);for(let t=0;t<e._skippedIndexesFromExternal.length;t++)r<=e._skippedIndexesFromExternal[t]&&e._skippedIndexesFromExternal[t]++}};for(const t of e)n(0,t,e.getIndex(t));this.listenTo(e,"add",n),this.listenTo(e,"remove",(t,e,n)=>{const i=this._bindToExternalToInternalMap.get(e);i&&this.remove(i),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((t,e)=>(n<e&&t.push(e-1),n>e&&t.push(e),t),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],"string"!=typeof n)throw new hn.b("collection-add-invalid-id",this);if(this.get(n))throw new hn.b("collection-add-item-already-exists",this)}else t[e]=n=dn();return n}[Symbol.iterator](){return this._items[Symbol.iterator]()}}xn(An,mn);class Cn{constructor(t,e=[],n=[]){this._context=t,this._plugins=new Map,this._availablePlugins=new Map;for(const t of e)t.pluginName&&this._availablePlugins.set(t.pluginName,t);this._contextPlugins=new Map;for(const[t,e]of n)this._contextPlugins.set(t,e),this._contextPlugins.set(e,t),t.pluginName&&this._availablePlugins.set(t.pluginName,t)}*[Symbol.iterator](){for(const t of this._plugins)"function"==typeof t[0]&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){const e="plugincollection-plugin-not-loaded: The requested plugin is not loaded.";let n=t;throw"function"==typeof t&&(n=t.pluginName||t.name),new hn.b(e,this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[]){const n=this,i=this._context,o=new Set,r=[],s=h(t),a=h(e),c=function(t){const e=[];for(const n of t)u(n)||e.push(n);return e.length?e:null}(t);if(c){const t="plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.";return console.error(Object(hn.a)(t),{plugins:c}),Promise.reject(new hn.b(t,i,{plugins:c}))}return Promise.all(s.map(l)).then(()=>d(r,"init")).then(()=>d(r,"afterInit")).then(()=>r);function l(t){if(!a.includes(t)&&!n._plugins.has(t)&&!o.has(t))return function(t){return new Promise(s=>{o.add(t),t.requires&&t.requires.forEach(n=>{const o=u(n);if(t.isContextPlugin&&!o.isContextPlugin)throw new hn.b("plugincollection-context-required: Context plugin can not require plugin which is not a context plugin",null,{plugin:o.name,requiredBy:t.name});if(e.includes(o))throw new hn.b("plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.",i,{plugin:o.name,requiredBy:t.name});l(o)});const a=n._contextPlugins.get(t)||new t(i);n._add(t,a),r.push(a),s()})}(t).catch(e=>{throw console.error(Object(hn.a)("plugincollection-load: It was not possible to load the plugin."),{plugin:t}),e})}function d(t,e){return t.reduce((t,i)=>i[e]?n._contextPlugins.has(i)?t:t.then(i[e].bind(i)):t,Promise.resolve())}function u(t){return"function"==typeof t?t:n._availablePlugins.get(t)}function h(t){return t.map(t=>u(t)).filter(t=>!!t)}}destroy(){const t=[];for(const[,e]of this)"function"!=typeof e.destroy||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new hn.b("plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}function Tn(t,e,n=1){if("number"!=typeof n)throw new hn.b("translation-service-quantity-not-a-number: Expecting `quantity` to be a number.",null,{quantity:n});const i=Object.keys(window.CKEDITOR_TRANSLATIONS).length;1===i&&(t=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(0===i||!function(t,e){return!!window.CKEDITOR_TRANSLATIONS[t]&&!!window.CKEDITOR_TRANSLATIONS[t].dictionary[e]}(t,o))return 1!==n?e.plural:e.string;const r=window.CKEDITOR_TRANSLATIONS[t].dictionary,s=window.CKEDITOR_TRANSLATIONS[t].getPluralForm||(t=>1===t?0:1);if("string"==typeof r[o])return r[o];const a=Number(s(n));return r[o][a]}xn(Cn,mn),window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const Pn=["ar","fa","he","ku","ug"];class Sn{constructor(t={}){this.uiLanguage=t.uiLanguage||"en",this.contentLanguage=t.contentLanguage||this.uiLanguage,this.uiLanguageDirection=En(this.uiLanguage),this.contentLanguageDirection=En(this.contentLanguage),this.t=(t,e)=>this._t(t,e)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){Array.isArray(e)||(e=[e]),"string"==typeof t&&(t={string:t});const n=!!t.plural?e[0]:1;return function(t,e){return t.replace(/%(\d+)/g,(t,n)=>n<e.length?e[n]:t)}(Tn(this.uiLanguage,t,n),e)}}function En(t){return Pn.includes(t)?"rtl":"ltr"}class Mn{constructor(t){this.config=new on(t,this.constructor.defaultConfig);const e=this.constructor.builtinPlugins;this.config.define("plugins",e),this.plugins=new Cn(this,e);const n=this.config.get("language")||{};this.locale=new Sn({uiLanguage:"string"==typeof n?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new An,this._contextOwner=null}initPlugins(){const t=this.config.get("plugins")||[];for(const e of t){if("function"!=typeof e)throw new hn.b("context-initplugins-constructor-only: Only a constructor function is allowed as a context plugin.",null,{Plugin:e});if(!0!==e.isContextPlugin)throw new hn.b("context-initplugins-invalid-plugin: Only a plugin marked as a context plugin is allowed to be used with a context.",null,{Plugin:e})}return this.plugins.init(t)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new hn.b("context-addEditor-private-context: Cannot add multiple editors to the context which is created by the editor.");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}function In(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++)if(t[i]!=e[i])return i;return t.length==e.length?"same":t.length<e.length?"prefix":"extension"}var Nn=function(t){return tn(t,4)};class On{constructor(t){this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if(-1==(t=this.parent.getChildIndex(this)))throw new hn.b("view-node-not-found-in-parent: The node's parent does not contain this node.",this);return t}get nextSibling(){const t=this.index;return null!==t&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return null!==t&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let o=0;for(;n[o]==i[o]&&n[o];)o++;return 0===o?null:n[o-1]}isBefore(t){if(this==t)return!1;if(this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=In(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&(this.root===t.root&&!this.isBefore(t))}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire("change:"+t,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=Nn(this);return delete t.parent,t}is(t){return"node"===t||"view:node"===t}}xn(On,mn);class Rn extends On{constructor(t,e){super(t),this._textData=e}is(t){return"text"===t||"view:text"===t||"node"===t||"view:node"===t}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof Rn&&(this===t||this.data===t.data)}_clone(){return new Rn(this.document,this.data)}}class Dn{constructor(t,e,n){if(this.textNode=t,e<0||e>t.data.length)throw new hn.b("view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.",this);if(n<0||e+n>t.data.length)throw new hn.b("view-textproxy-wrong-length: Given length value is incorrect.",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return"textProxy"===t||"view:textProxy"===t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;null!==n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}function Ln(t){return yn(t)?new Map(t):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(t)}class jn{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)("string"==typeof e||e instanceof RegExp)&&(e={name:e}),e.classes&&("string"==typeof e.classes||e.classes instanceof RegExp)&&(e.classes=[e.classes]),this._patterns.push(e)}match(...t){for(const e of t)for(const t of this._patterns){const n=Vn(e,t);if(n)return{element:e,pattern:t,match:n}}return null}matchAll(...t){const e=[];for(const n of t)for(const t of this._patterns){const i=Vn(n,t);i&&e.push({element:n,pattern:t,match:i})}return e.length>0?e:null}getElementName(){if(1!==this._patterns.length)return null;const t=this._patterns[0],e=t.name;return"function"==typeof t||!e||e instanceof RegExp?null:e}}function Vn(t,e){if("function"==typeof e)return e(t);const n={};return e.name&&(n.name=function(t,e){if(t instanceof RegExp)return t.test(e);return t===e}(e.name,t.name),!n.name)||e.attributes&&(n.attributes=function(t,e){const n=[];for(const i in t){const o=t[i];if(!e.hasAttribute(i))return null;{const t=e.getAttribute(i);if(!0===o)n.push(i);else if(o instanceof RegExp){if(!o.test(t))return null;n.push(i)}else{if(t!==o)return null;n.push(i)}}}return n}(e.attributes,t),!n.attributes)?null:!(e.classes&&(n.classes=function(t,e){const n=[];for(const i of t)if(i instanceof RegExp){const t=e.getClassNames();for(const e of t)i.test(e)&&n.push(e);if(0===n.length)return null}else{if(!e.hasClass(i))return null;n.push(i)}return n}(e.classes,t),!n.classes))&&(!(e.styles&&(n.styles=function(t,e){const n=[];for(const i in t){const o=t[i];if(!e.hasStyle(i))return null;{const t=e.getStyle(i);if(o instanceof RegExp){if(!o.test(t))return null;n.push(i)}else{if(t!==o)return null;n.push(i)}}}return n}(e.styles,t),!n.styles))&&n)}var zn=function(t){return"symbol"==typeof t||p(t)&&"[object Symbol]"==f(t)},Bn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fn=/^\w*$/;var Un=function(t,e){if(Dt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!zn(t))||(Fn.test(t)||!Bn.test(t)||null!=e&&t in Object(e))};function Hn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,o=e?e.apply(this,i):i[0],r=n.cache;if(r.has(o))return r.get(o);var s=t.apply(this,i);return n.cache=r.set(o,s)||r,s};return n.cache=new(Hn.Cache||kt),n}Hn.Cache=kt;var Wn=Hn;var qn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yn=/\\(\\)?/g,Gn=function(t){var e=Wn(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(qn,(function(t,n,i,o){e.push(i?o.replace(Yn,"$1"):n||t)})),e}));var $n=function(t,e){for(var n=-1,i=null==t?0:t.length,o=Array(i);++n<i;)o[n]=e(t[n],n,t);return o},Kn=o?o.prototype:void 0,Qn=Kn?Kn.toString:void 0;var Jn=function t(e){if("string"==typeof e)return e;if(Dt(e))return $n(e,t)+"";if(zn(e))return Qn?Qn.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var Zn=function(t){return null==t?"":Jn(t)};var Xn=function(t,e){return Dt(t)?t:Un(t,e)?[t]:Gn(Zn(t))};var ti=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0};var ei=function(t){if("string"==typeof t||zn(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var ni=function(t,e){for(var n=0,i=(e=Xn(e,t)).length;null!=t&&n<i;)t=t[ei(e[n++])];return n&&n==i?t:void 0};var ii=function(t,e,n){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var r=Array(o);++i<o;)r[i]=t[i+e];return r};var oi=function(t,e){return e.length<2?t:ni(t,ii(e,0,-1))};var ri=function(t,e){return e=Xn(e,t),null==(t=oi(t,e))||delete t[ei(ti(e))]};var si=function(t,e){return null==t||ri(t,e)};var ai=function(t,e,n){var i=null==t?void 0:ni(t,e);return void 0===i?n:i};var ci=function(t,e,n){(void 0!==n&&!A(t[e],n)||void 0===n&&!(e in t))&&Ct(t,e,n)};var li=function(t){return function(e,n,i){for(var o=-1,r=Object(e),s=i(e),a=s.length;a--;){var c=s[t?a:++o];if(!1===n(r[c],c,r))break}return e}}();var di=function(t){return p(t)&&Xt(t)};var ui=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var hi=function(t){return St(t,re(t))};var fi=function(t,e,n,i,o,r,s){var a=ui(t,n),c=ui(e,n),l=s.get(c);if(l)ci(t,n,l);else{var d=r?r(a,c,n+"",t,e,s):void 0,u=void 0===d;if(u){var h=Dt(c),f=!h&&Object(Lt.a)(c),g=!h&&!f&&qt(c);d=c,h||f||g?Dt(a)?d=a:di(a)?d=ce(a):f?(u=!1,d=Object(ae.a)(c,!0)):g?(u=!1,d=Ue(c,!0)):d=[]:y(c)||Rt(c)?(d=a,Rt(a)?d=hi(a):j(a)&&!z(a)||(d=Ye(c))):u=!1}u&&(s.set(c,d),o(d,c,i,r,s),s.delete(c)),ci(t,n,d)}};var gi=function t(e,n,i,o,r){e!==n&&li(n,(function(s,a){if(r||(r=new yt),j(s))fi(e,n,a,i,t,o,r);else{var c=o?o(ui(e,a),s,a+"",e,n,r):void 0;void 0===c&&(c=s),ci(e,a,c)}}),re)};var mi=function(t){return t};var pi=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},bi=Math.max;var wi=function(t,e,n){return e=bi(void 0===e?t.length-1:e,0),function(){for(var i=arguments,o=-1,r=bi(i.length-e,0),s=Array(r);++o<r;)s[o]=i[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=i[o];return a[e]=n(s),pi(t,this,a)}};var ki=function(t){return function(){return t}},_i=At?function(t,e){return At(t,"toString",{configurable:!0,enumerable:!1,value:ki(e),writable:!0})}:mi,vi=Date.now;var yi=function(t){var e=0,n=0;return function(){var i=vi(),o=16-(i-n);if(n=i,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(_i);var xi=function(t,e){return yi(wi(t,e,mi),t+"")};var Ai=function(t,e,n){if(!j(n))return!1;var i=typeof e;return!!("number"==i?Xt(n)&&Vt(e,n.length):"string"==i&&e in n)&&A(n[e],t)};var Ci=function(t){return xi((function(e,n){var i=-1,o=n.length,r=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(r=t.length>3&&"function"==typeof r?(o--,r):void 0,s&&Ai(n[0],n[1],s)&&(r=o<3?void 0:r,o=1),e=Object(e);++i<o;){var a=n[i];a&&t(e,a,i,r)}return e}))},Ti=Ci((function(t,e,n){gi(t,e,n)}));var Pi=function(t,e,n,i){if(!j(t))return t;for(var o=-1,r=(e=Xn(e,t)).length,s=r-1,a=t;null!=a&&++o<r;){var c=ei(e[o]),l=n;if(o!=s){var d=a[c];void 0===(l=i?i(d,c,a):void 0)&&(l=j(d)?d:Vt(e[o+1])?[]:{})}Pt(a,c,l),a=a[c]}return t};var Si=function(t,e,n){return null==t?t:Pi(t,e,n)};class Ei{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){const t=Object.entries(this._styles);return!Array.from(t).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=Array.from(function(t){let e=null,n=0,i=0,o=null;const r=new Map;if(""===t)return r;";"!=t.charAt(t.length-1)&&(t+=";");for(let s=0;s<t.length;s++){const a=t.charAt(s);if(null===e)switch(a){case":":o||(o=t.substr(n,s-n),i=s+1);break;case'"':case"'":e=a;break;case";":{const e=t.substr(i,s-i);o&&r.set(o.trim(),e.trim()),o=null,n=s+1;break}}else a===e&&(e=null)}return r}(t).entries());for(const[t,n]of e)this._styleProcessor.toNormalizedForm(t,n,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([e])=>e===t);return Array.isArray(e)}set(t,e){if(j(t))for(const[e,n]of Object.entries(t))this._styleProcessor.toNormalizedForm(e,n,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=Ii(t);si(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!j(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([e])=>e===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(){if(this.isEmpty)return[];return this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),i=ai(this._styles,n);if(!i)return;!Array.from(Object.keys(i)).length&&this.remove(n)}}class Mi{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(j(e))Ni(n,Ii(t),e);else if(this._normalizers.has(t)){const i=this._normalizers.get(t),{path:o,value:r}=i(e);Ni(n,o,r)}else Ni(n,t,e)}getNormalized(t,e){if(!t)return Ti({},e);if(void 0!==e[t])return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if("string"==typeof n)return ai(e,n);const i=n(t,e);if(i)return i}return ai(e,Ii(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);if(void 0===n)return[];if(this._reducers.has(t)){return this._reducers.get(t)(n)}return[[t,n]]}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function Ii(t){return t.replace("-",".")}function Ni(t,e,n){let i=n;j(n)&&(i=Ti({},ai(t,e),n)),Si(t,e,i)}class Oi extends On{constructor(t,e,n,i){if(super(t),this.name=e,this._attrs=function(t){t=Ln(t);for(const[e,n]of t)null===n?t.delete(e):"string"!=typeof n&&t.set(e,String(n));return t}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const t=this._attrs.get("class");Ri(this._classes,t),this._attrs.delete("class")}this._styles=new Ei(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map}get childCount(){return this._children.length}get isEmpty(){return 0===this._children.length}is(t,e=null){return e?e===this.name&&("element"===t||"view:element"===t):t===this.name||t==="view:"+this.name||"element"===t||"view:element"===t||"node"===t||"view:node"===t}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if("class"==t)return this._classes.size>0?[...this._classes].join(" "):void 0;if("style"==t){const t=this._styles.toString();return""==t?void 0:t}return this._attrs.get(t)}hasAttribute(t){return"class"==t?this._classes.size>0:"style"==t?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof Oi))return!1;if(this===t)return!0;if(this.name!=t.name)return!1;if(this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(){return this._styles.getStyleNames()}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new jn(...t);let n=this.parent;for(;n;){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(t=>`${t[0]}="${t[1]}"`).sort().join(" ");return this.name+(""==t?"":` class="${t}"`)+(e?` style="${e}"`:"")+(""==n?"":" "+n)}_clone(t=!1){const e=[];if(t)for(const n of this.getChildren())e.push(n._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(t,e){if("string"==typeof e)return[new Rn(t,e)];yn(e)||(e=[e]);return Array.from(e).map(e=>"string"==typeof e?new Rn(t,e):e instanceof Dn?new Rn(t,e.data):e)}(this.document,e);for(const e of i)null!==e.parent&&e._remove(),e.parent=this,e.document=this.document,this._children.splice(t,0,e),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){e=String(e),this._fireChange("attributes",this),"class"==t?Ri(this._classes,e):"style"==t?this._styles.setTo(e):this._attrs.set(t,e)}_removeAttribute(t){return this._fireChange("attributes",this),"class"==t?this._classes.size>0&&(this._classes.clear(),!0):"style"==t?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._classes.add(t))}_removeClass(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._classes.delete(t))}_setStyle(t,e){this._fireChange("attributes",this),this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._styles.remove(t))}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function Ri(t,e){const n=e.split(/\s+/);t.clear(),n.forEach(e=>t.add(e))}class Di extends Oi{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=Li}is(t,e=null){return e?e===this.name&&("containerElement"===t||"view:containerElement"===t||"element"===t||"view:element"===t):"containerElement"===t||"view:containerElement"===t||t===this.name||t==="view:"+this.name||"element"===t||"view:element"===t||"node"===t||"view:node"===t}}function Li(){const t=[...this.getChildren()],e=t[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const e of t)if(!e.is("uiElement"))return null;return this.childCount}var ji=Ci((function(t,e){St(e,re(e),t)}));const Vi=Symbol("observableProperties"),zi=Symbol("boundObservables"),Bi=Symbol("boundProperties"),Fi={set(t,e){if(j(t))return void Object.keys(t).forEach(e=>{this.set(e,t[e])},this);Hi(this);const n=this[Vi];if(t in this&&!n.has(t))throw new hn.b("observable-set-cannot-override: Cannot override an existing property.",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(e){const i=n.get(t);let o=this.fire("set:"+t,t,e,i);void 0===o&&(o=e),i===o&&n.has(t)||(n.set(t,o),this.fire("change:"+t,t,o,i))}}),this[t]=e},bind(...t){if(!t.length||!Yi(t))throw new hn.b("observable-bind-wrong-properties: All properties must be strings.",this);if(new Set(t).size!==t.length)throw new hn.b("observable-bind-duplicate-properties: Properties must be unique.",this);Hi(this);const e=this[Bi];t.forEach(t=>{if(e.has(t))throw new hn.b("observable-bind-rebind: Cannot bind the same property more than once.",this)});const n=new Map;return t.forEach(t=>{const i={property:t,to:[]};e.set(t,i),n.set(t,i)}),{to:Wi,toMany:qi,_observable:this,_bindProperties:t,_to:[],_bindings:n}},unbind(...t){if(!this[Vi])return;const e=this[Bi],n=this[zi];if(t.length){if(!Yi(t))throw new hn.b("observable-unbind-wrong-properties: Properties must be strings.",this);t.forEach(t=>{const i=e.get(t);if(!i)return;let o,r,s,a;i.to.forEach(t=>{o=t[0],r=t[1],s=n.get(o),a=s[r],a.delete(i),a.size||delete s[r],Object.keys(s).length||(n.delete(o),this.stopListening(o,"change"))}),e.delete(t)})}else n.forEach((t,e)=>{this.stopListening(e,"change")}),n.clear(),e.clear()},decorate(t){const e=this[t];if(!e)throw new hn.b("observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.",this,{object:this,methodName:t});this.on(t,(t,n)=>{t.return=e.apply(this,n)}),this[t]=function(...e){return this.fire(t,e)}}};ji(Fi,mn);var Ui=Fi;function Hi(t){t[Vi]||(Object.defineProperty(t,Vi,{value:new Map}),Object.defineProperty(t,zi,{value:new Map}),Object.defineProperty(t,Bi,{value:new Map}))}function Wi(...t){const e=function(...t){if(!t.length)throw new hn.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.",null);const e={to:[]};let n;"function"==typeof t[t.length-1]&&(e.callback=t.pop());return t.forEach(t=>{if("string"==typeof t)n.properties.push(t);else{if("object"!=typeof t)throw new hn.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.",null);n={observable:t,properties:[]},e.to.push(n)}}),e}(...t),n=Array.from(this._bindings.keys()),i=n.length;if(!e.callback&&e.to.length>1)throw new hn.b("observable-bind-to-no-callback: Binding multiple observables only possible with callback.",this);if(i>1&&e.callback)throw new hn.b("observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.",this);var o;e.to.forEach(t=>{if(t.properties.length&&t.properties.length!==i)throw new hn.b("observable-bind-to-properties-length: The number of properties must match.",this);t.properties.length||(t.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(n[0]).callback=e.callback),o=this._observable,this._to.forEach(t=>{const e=o[zi];let n;e.get(t.observable)||o.listenTo(t.observable,"change",(i,r)=>{n=e.get(t.observable)[r],n&&n.forEach(t=>{Gi(o,t.property)})})}),function(t){let e;t._bindings.forEach((n,i)=>{t._to.forEach(o=>{e=o.properties[n.callback?0:t._bindProperties.indexOf(i)],n.to.push([o.observable,e]),function(t,e,n,i){const o=t[zi],r=o.get(n),s=r||{};s[i]||(s[i]=new Set);s[i].add(e),r||o.set(n,s)}(t._observable,n,o.observable,e)})})}(this),this._bindProperties.forEach(t=>{Gi(this._observable,t)})}function qi(t,e,n){if(this._bindings.size>1)throw new hn.b("observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().",this);this.to(...function(t,e){const n=t.map(t=>[t,e]);return Array.prototype.concat.apply([],n)}(t,e),n)}function Yi(t){return t.every(t=>"string"==typeof t)}function Gi(t,e){const n=t[Bi].get(e);let i;n.callback?i=n.callback.apply(t,n.to.map(t=>t[0][t[1]])):(i=n.to[0],i=i[0][i[1]]),Object.prototype.hasOwnProperty.call(t,e)?t[e]=i:t.set(e,i)}class $i extends Di{constructor(t,e,n,i){super(t,e,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",e=>e&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}is(t,e=null){return e?e===this.name&&("editableElement"===t||"view:editableElement"===t||"containerElement"===t||"view:containerElement"===t||"element"===t||"view:element"===t):"editableElement"===t||"view:editableElement"===t||"containerElement"===t||"view:containerElement"===t||t===this.name||t==="view:"+this.name||"element"===t||"view:element"===t||"node"===t||"view:node"===t}destroy(){this.stopListening()}}xn($i,Ui);const Ki=Symbol("rootName");class Qi extends $i{constructor(t,e){super(t,e),this.rootName="main"}is(t,e=null){return e?e===this.name&&("rootElement"===t||"view:rootElement"===t||"editableElement"===t||"view:editableElement"===t||"containerElement"===t||"view:containerElement"===t||"element"===t||"view:element"===t):"rootElement"===t||"view:rootElement"===t||"editableElement"===t||"view:editableElement"===t||"containerElement"===t||"view:containerElement"===t||t===this.name||t==="view:"+this.name||"element"===t||"view:element"===t||"node"===t||"view:node"===t}get rootName(){return this.getCustomProperty(Ki)}set rootName(t){this._setCustomProperty(Ki,t)}set _name(t){this.name=t}}class Ji{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new hn.b("view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.",null);if(t.direction&&"forward"!=t.direction&&"backward"!=t.direction)throw new hn.b("view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this.position=Zi._createAt(t.startPosition):this.position=Zi._createAt(t.boundaries["backward"==t.direction?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(t){let e,n,i;do{i=this.position,({done:e,value:n}=this.next())}while(!e&&t(n));e||(this.position=i)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(null===n.parent&&t.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};let i;if(n instanceof Rn){if(t.isAtEnd)return this.position=Zi._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof Oi)return this.shallow?t.offset++:t=new Zi(i,0),this.position=t,this._formatReturnValue("elementStart",i,e,t,1);if(i instanceof Rn){if(this.singleCharacters)return t=new Zi(i,0),this.position=t,this._next();{let n,o=i.data.length;return i==this._boundaryEndParent?(o=this.boundaries.end.offset,n=new Dn(i,0,o),t=Zi._createAfter(n)):(n=new Dn(i,0,i.data.length),t.offset++),this.position=t,this._formatReturnValue("text",n,e,t,o)}}if("string"==typeof i){let i;if(this.singleCharacters)i=1;else{i=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset}const o=new Dn(n,t.offset,i);return t.offset+=i,this.position=t,this._formatReturnValue("text",o,e,t,i)}return t=Zi._createAfter(n),this.position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(null===n.parent&&0===t.offset)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};let i;if(n instanceof Rn){if(t.isAtStart)return this.position=Zi._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof Oi)return this.shallow?(t.offset--,this.position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new Zi(i,i.childCount),this.position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof Rn){if(this.singleCharacters)return t=new Zi(i,i.data.length),this.position=t,this._previous();{let n,o=i.data.length;if(i==this._boundaryStartParent){const e=this.boundaries.start.offset;n=new Dn(i,e,i.data.length-e),o=n.data.length,t=Zi._createBefore(n)}else n=new Dn(i,0,i.data.length),t.offset--;return this.position=t,this._formatReturnValue("text",n,e,t,o)}}if("string"==typeof i){let i;if(this.singleCharacters)i=1;else{const e=n===this._boundaryStartParent?this.boundaries.start.offset:0;i=t.offset-e}t.offset-=i;const o=new Dn(n,t.offset,i);return this.position=t,this._formatReturnValue("text",o,e,t,i)}return t=Zi._createBefore(n),this.position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,o){return e instanceof Dn&&(e.offsetInText+e.data.length==e.textNode.data.length&&("forward"!=this.direction||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=Zi._createAfter(e.textNode):(i=Zi._createAfter(e.textNode),this.position=i)),0===e.offsetInText&&("backward"!=this.direction||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=Zi._createBefore(e.textNode):(i=Zi._createBefore(e.textNode),this.position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:o}}}}class Zi{constructor(t,e){this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return 0===this.offset}get isAtEnd(){const t=this.parent.is("text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof $i);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=Zi._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Ji(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return 0===i?null:e[i-1]}is(t){return"position"===t||"view:position"===t}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return"before"==this.compareWith(t)}isAfter(t){return"after"==this.compareWith(t)}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const i=In(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new Ji(t)}clone(){return new Zi(this.parent,this.offset)}static _createAt(t,e){if(t instanceof Zi)return new this(t.parent,t.offset);{const n=t;if("end"==e)e=n.is("text")?n.data.length:n.childCount;else{if("before"==e)return this._createBefore(n);if("after"==e)return this._createAfter(n);if(0!==e&&!e)throw new hn.b("view-createPositionAt-offset-required: View#createPositionAt() requires the offset when the first parameter is a view item.",n)}return new Zi(n,e)}}static _createAfter(t){if(t.is("textProxy"))return new Zi(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new hn.b("view-position-after-root: You can not make position after root.",t,{root:t});return new Zi(t.parent,t.index+1)}static _createBefore(t){if(t.is("textProxy"))return new Zi(t.textNode,t.offsetInText);if(!t.parent)throw new hn.b("view-position-before-root: You can not make position before root.",t,{root:t});return new Zi(t.parent,t.index)}}class Xi{constructor(t,e=null){this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new Ji({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(to,{direction:"backward"}),e=this.end.getLastMatchingPosition(to);return t.parent.is("text")&&t.isAtStart&&(t=Zi._createBefore(t.parent)),e.parent.is("text")&&e.isAtEnd&&(e=Zi._createAfter(e.parent)),new Xi(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(to);if(t.isAfter(this.end)||t.isEqual(this.end))return new Xi(t,t);let e=this.end.getLastMatchingPosition(to,{direction:"backward"});const n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("text")&&(t=new Zi(n,0)),i&&i.is("text")&&(e=new Zi(i,i.data.length)),new Xi(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Xi(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Xi(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Xi(e,n)}return null}getWalker(t={}){return t.boundaries=this,new Ji(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new Xi(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Ji(t);for(const t of e)yield t.item}*getPositions(t={}){t.boundaries=this;const e=new Ji(t);yield e.position;for(const t of e)yield t.nextPosition}is(t){return"range"===t||"view:range"===t}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new Zi(t,e),new Zi(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(Zi._createBefore(t),e)}}function to(t){return!(!t.item.is("attributeElement")&&!t.item.is("uiElement"))}function eo(t){let e=0;for(const n of t)e++;return e}class no{constructor(t=null,e,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(t,e,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return 1===this.rangeCount&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake)return!1;if(this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel)return!1;if(this.rangeCount!=t.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=eo(this.getRanges());if(e!=eo(t.getRanges()))return!1;if(0==e)return!0;for(let e of this.getRanges()){e=e.getTrimmed();let n=!1;for(let i of t.getRanges())if(i=i.getTrimmed(),e.start.isEqual(i.start)&&e.end.isEqual(i.end)){n=!0;break}if(!n)return!1}return!0}getSelectedElement(){return 1!==this.rangeCount?null:this.getFirstRange().getContainedElement()}setTo(t,e,n){if(null===t)this._setRanges([]),this._setFakeOptions(e);else if(t instanceof no||t instanceof io)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Xi)this._setRanges([t],e&&e.backward),this._setFakeOptions(e);else if(t instanceof Zi)this._setRanges([new Xi(t)]),this._setFakeOptions(e);else if(t instanceof On){const i=!!n&&!!n.backward;let o;if(void 0===e)throw new hn.b("view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.",this);o="in"==e?Xi._createIn(t):"on"==e?Xi._createOn(t):new Xi(Zi._createAt(t,e)),this._setRanges([o],i),this._setFakeOptions(n)}else{if(!yn(t))throw new hn.b("view-selection-setTo-not-selectable: Cannot set selection to given place.",this);this._setRanges(t,e&&e.backward),this._setFakeOptions(e)}this.fire("change")}setFocus(t,e){if(null===this.anchor)throw new hn.b("view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.",this);const n=Zi._createAt(t,e);if("same"==n.compareWith(this.focus))return;const i=this.anchor;this._ranges.pop(),"before"==n.compareWith(i)?this._addRange(new Xi(n,i),!0):this._addRange(new Xi(i,n)),this.fire("change")}is(t){return"selection"===t||"view:selection"===t}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const e of t)this._addRange(e);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof Xi))throw new hn.b("view-selection-add-range-not-range: Selection range set to an object that is not an instance of view.Range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new hn.b("view-selection-range-intersects: Trying to add a range that intersects with another range from selection.",this,{addedRange:t,intersectingRange:e});this._ranges.push(new Xi(t.start,t.end))}}xn(no,mn);class io{constructor(t=null,e,n){this._selection=new no,this._selection.delegate("change").to(this),this._selection.setTo(t,e,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}is(t){return"selection"===t||"documentSelection"==t||"view:selection"==t||"view:documentSelection"==t}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setFocus(t,e){this._selection.setFocus(t,e)}}xn(io,mn);class oo{constructor(t){this.selection=new io,this.roots=new An({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do{for(const n of this._postFixers)if(e=n(t),e)break}while(e)}}xn(oo,Ui);class ro extends Oi{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=so,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(null===this.id)throw new hn.b("attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.",this);return new Set(this._clonesGroup)}is(t,e=null){return e?e===this.name&&("attributeElement"===t||"view:attributeElement"===t||"element"===t||"view:element"===t):"attributeElement"===t||"view:attributeElement"===t||t===this.name||t==="view:"+this.name||"element"===t||"view:element"===t||"node"===t||"view:node"===t}isSimilar(t){return null!==this.id||null!==t.id?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function so(){if(ao(this))return null;let t=this.parent;for(;t&&t.is("attributeElement");){if(ao(t)>1)return null;t=t.parent}return!t||ao(t)>1?null:this.childCount}function ao(t){return Array.from(t.getChildren()).filter(t=>!t.is("uiElement")).length}ro.DEFAULT_PRIORITY=10;class co extends Oi{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=lo}is(t,e=null){return e?e===this.name&&("emptyElement"===t||"view:emptyElement"===t||"element"===t||"view:element"===t):"emptyElement"===t||"view:emptyElement"===t||t===this.name||t==="view:"+this.name||"element"===t||"view:element"===t||"node"===t||"view:node"===t}_insertChild(t,e){if(e&&(e instanceof On||Array.from(e).length>0))throw new hn.b("view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.",[this,e])}}function lo(){return null}const uo=navigator.userAgent.toLowerCase();var ho={isMac:function(t){return t.indexOf("macintosh")>-1}(uo),isGecko:function(t){return!!t.match(/gecko\/\d+/)}(uo),isSafari:function(t){return t.indexOf(" applewebkit/")>-1&&-1===t.indexOf("chrome")}(uo),isAndroid:function(t){return t.indexOf("android")>-1}(uo),features:{isRegExpUnicodePropertySupported:function(){let t=!1;try{t=0==="ć".search(new RegExp("[\\p{L}]","u"))}catch(t){}return t}()}};const fo={"⌘":"ctrl","⇧":"shift","⌥":"alt"},go={ctrl:"⌘",shift:"⇧",alt:"⌥"},mo=function(){const t={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,cmd:1114112,shift:2228224,alt:4456448};for(let e=65;e<=90;e++){const n=String.fromCharCode(e);t[n.toLowerCase()]=e}for(let e=48;e<=57;e++)t[e-48]=e;for(let e=112;e<=123;e++)t["f"+(e-111)]=e;return t}();function po(t){let e;if("string"==typeof t){if(e=mo[t.toLowerCase()],!e)throw new hn.b("keyboard-unknown-key: Unknown key name.",null,{key:t})}else e=t.keyCode+(t.altKey?mo.alt:0)+(t.ctrlKey?mo.ctrl:0)+(t.shiftKey?mo.shift:0);return e}function bo(t){return"string"==typeof t&&(t=yo(t)),t.map(t=>"string"==typeof t?po(t):t).reduce((t,e)=>e+t,0)}function wo(t){return ho.isMac?yo(t).map(t=>go[t.toLowerCase()]||t).reduce((t,e)=>t.slice(-1)in fo?t+e:t+"+"+e):t}function ko(t){return t==mo.arrowright||t==mo.arrowleft||t==mo.arrowup||t==mo.arrowdown}function _o(t,e){const n="ltr"===e;switch(t){case mo.arrowleft:return n?"left":"right";case mo.arrowright:return n?"right":"left";case mo.arrowup:return"up";case mo.arrowdown:return"down"}}function vo(t,e){const n=_o(t,e);return"down"===n||"right"===n}function yo(t){return t.split(/\s*\+\s*/)}class xo extends Oi{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=Co}is(t,e=null){return e?e===this.name&&("uiElement"===t||"view:uiElement"===t||"element"===t||"view:element"===t):"uiElement"===t||"view:uiElement"===t||t===this.name||t==="view:"+this.name||"element"===t||"view:element"===t||"node"===t||"view:node"===t}_insertChild(t,e){if(e&&(e instanceof On||Array.from(e).length>0))throw new hn.b("view-uielement-cannot-add: Cannot add child nodes to UIElement instance.",this)}render(t){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const t of this.getAttributeKeys())e.setAttribute(t,this.getAttribute(t));return e}}function Ao(t){t.document.on("keydown",(e,n)=>function(t,e,n){if(e.keyCode==mo.arrowright){const t=e.domTarget.ownerDocument.defaultView.getSelection(),i=1==t.rangeCount&&t.getRangeAt(0).collapsed;if(i||e.shiftKey){const e=t.focusNode,o=t.focusOffset,r=n.domPositionToView(e,o);if(null===r)return;let s=!1;const a=r.getLastMatchingPosition(t=>(t.item.is("uiElement")&&(s=!0),!(!t.item.is("uiElement")&&!t.item.is("attributeElement"))));if(s){const e=n.viewPositionToDom(a);i?t.collapse(e.parent,e.offset):t.extend(e.parent,e.offset)}}}}(0,n,t.domConverter))}function Co(){return null}class To{constructor(t,e){this.document=t,this._children=[],e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(t){return"documentFragment"===t||"view:documentFragment"===t}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(t,e){if("string"==typeof e)return[new Rn(t,e)];yn(e)||(e=[e]);return Array.from(e).map(e=>"string"==typeof e?new Rn(t,e):e instanceof Dn?new Rn(t,e.data):e)}(this.document,e);for(const e of i)null!==e.parent&&e._remove(),e.parent=this,this._children.splice(t,0,e),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}}xn(To,mn);class Po{constructor(t){this.document=t,this._cloneGroups=new Map}setSelection(t,e,n){this.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createText(t){return new Rn(this.document,t)}createAttributeElement(t,e,n={}){const i=new ro(this.document,t,e);return n.priority&&(i._priority=n.priority),n.id&&(i._id=n.id),i}createContainerElement(t,e){return new Di(this.document,t,e)}createEditableElement(t,e){const n=new $i(this.document,t,e);return n._document=this.document,n}createEmptyElement(t,e){return new co(this.document,t,e)}createUIElement(t,e,n){const i=new xo(this.document,t,e);return n&&(i.render=n),i}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){y(t)&&void 0===n&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof Zi?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new hn.b("view-writer-break-non-container-element: Trying to break an element which is not a container element.",this.document);if(!e.parent)throw new hn.b("view-writer-break-root: Trying to break root element.",this.document);if(t.isAtStart)return Zi._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(Zi._createAfter(e),n);const i=new Xi(t,Zi._createAt(e,"end")),o=new Zi(n,0);this.move(i,o)}return Zi._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("text"))return t;if(n.is("attributeElement")&&0===n.childCount){const t=n.parent,e=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new Zi(t,e))}const i=n.getChild(e-1),o=n.getChild(e);if(!i||!o)return t;if(i.is("text")&&o.is("text"))return No(i,o);if(i.is("attributeElement")&&o.is("attributeElement")&&i.isSimilar(o)){const t=i.childCount;return i._appendChild(o.getChildren()),o._remove(),this._removeFromClonedElementsGroup(o),this.mergeAttributes(new Zi(i,t))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new hn.b("view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.",this.document);const i=e.getChild(e.childCount-1),o=i instanceof Rn?Zi._createAt(i,"end"):Zi._createAt(e,"end");return this.move(Xi._createIn(n),Zi._createAt(e,"end")),this.remove(Xi._createOn(n)),o}insert(t,e){(function t(e,n){for(const i of e){if(!Oo.some(t=>i instanceof t))throw new hn.b("view-writer-insert-invalid-node",n);i.is("text")||t(i.getChildren(),n)}})(e=yn(e)?[...e]:[e],this.document);const n=So(t);if(!n)throw new hn.b("view-writer-invalid-position-container",this.document);const i=this._breakAttributes(t,!0),o=n._insertChild(i.offset,e);for(const t of e)this._addToClonedElementsGroup(t);const r=i.getShiftedBy(o),s=this.mergeAttributes(i);if(0===o)return new Xi(s,s);{s.isEqual(i)||r.offset--;const t=this.mergeAttributes(r);return new Xi(s,t)}}remove(t){const e=t instanceof Xi?t:Xi._createOn(t);if(Do(e,this.document),e.isCollapsed)return new To(this.document);const{start:n,end:i}=this._breakAttributesRange(e,!0),o=n.parent,r=i.offset-n.offset,s=o._removeChildren(n.offset,r);for(const t of s)this._removeFromClonedElementsGroup(t);const a=this.mergeAttributes(n);return e.start=a,e.end=a.clone(),new To(this.document,s)}clear(t,e){Do(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const n=i.item;let o;if(n.is("element")&&e.isSimilar(n))o=Xi._createOn(n);else if(!i.nextPosition.isAfter(t.start)&&n.is("textProxy")){const t=n.getAncestors().find(t=>t.is("element")&&e.isSimilar(t));t&&(o=Xi._createIn(t))}o&&(o.end.isAfter(t.end)&&(o.end=t.end),o.start.isBefore(t.start)&&(o.start=t.start),this.remove(o))}}move(t,e){let n;if(e.isAfter(t.end)){const i=(e=this._breakAttributes(e,!0)).parent,o=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-o}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof ro))throw new hn.b("view-writer-wrap-invalid-attribute",this.document);if(Do(t,this.document),t.isCollapsed){let i=t.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(t=>!t.is("uiElement")))&&(i=i.getLastMatchingPosition(t=>t.item.is("uiElement"))),i=this._wrapPosition(i,e);const o=this.document.selection;return o.isCollapsed&&o.getFirstPosition().isEqual(t.start)&&this.setSelection(i),new Xi(i)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof ro))throw new hn.b("view-writer-unwrap-invalid-attribute",this.document);if(Do(t,this.document),t.isCollapsed)return t;const{start:n,end:i}=this._breakAttributesRange(t,!0),o=n.parent,r=this._unwrapChildren(o,n.offset,i.offset,e),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new Xi(s,a)}rename(t,e){const n=new Di(this.document,t,e.getAttributes());return this.insert(Zi._createAfter(e),n),this.move(Xi._createIn(e),Zi._createAt(n,0)),this.remove(Xi._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return Zi._createAt(t,e)}createPositionAfter(t){return Zi._createAfter(t)}createPositionBefore(t){return Zi._createBefore(t)}createRange(t,e){return new Xi(t,e)}createRangeOn(t){return Xi._createOn(t)}createRangeIn(t){return Xi._createIn(t)}createSelection(t,e,n){return new no(t,e,n)}_wrapChildren(t,e,n,i){let o=e;const r=[];for(;o<n;){const e=t.getChild(o),n=e.is("text"),s=e.is("attributeElement"),a=e.is("emptyElement"),c=e.is("uiElement");if(s&&this._wrapAttributeElement(i,e))r.push(new Zi(t,o));else if(n||a||c||s&&Eo(i,e)){const n=i._clone();e._remove(),n._appendChild(e),t._insertChild(o,n),this._addToClonedElementsGroup(n),r.push(new Zi(t,o))}else s&&this._wrapChildren(e,0,e.childCount,i);o++}let s=0;for(const t of r){if(t.offset-=s,t.offset==e)continue;this.mergeAttributes(t).isEqual(t)||(s++,n--)}return Xi._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let o=e;const r=[];for(;o<n;){const e=t.getChild(o);if(e.is("attributeElement"))if(e.isSimilar(i)){const i=e.getChildren(),s=e.childCount;e._remove(),t._insertChild(o,i),this._removeFromClonedElementsGroup(e),r.push(new Zi(t,o),new Zi(t,o+s)),o+=s,n+=s-1}else this._unwrapAttributeElement(i,e)?(r.push(new Zi(t,o),new Zi(t,o+1)),o++):(this._unwrapChildren(e,0,e.childCount,i),o++);else o++}let s=0;for(const t of r){if(t.offset-=s,t.offset==e||t.offset==n)continue;this.mergeAttributes(t).isEqual(t)||(s++,n--)}return Xi._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:i}=this._breakAttributesRange(t,!0),o=n.parent,r=this._wrapChildren(o,n.offset,i.offset,e),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new Xi(s,a)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return Mo(t.clone());t.parent.is("text")&&(t=Io(t));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const i=new Xi(t,t.getShiftedBy(1));this.wrap(i,e);const o=new Zi(n.parent,n.index);n._remove();const r=o.nodeBefore,s=o.nodeAfter;return r instanceof Rn&&s instanceof Rn?No(r,s):Mo(o)}_wrapAttributeElement(t,e){if(!Lo(t,e))return!1;if(t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if("class"!==n&&"style"!==n&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())"class"!==n&&"style"!==n&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Lo(t,e))return!1;if(t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if("class"!==n&&"style"!==n&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())"class"!==n&&"style"!==n&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,i=t.end;if(Do(t,this.document),t.isCollapsed){const n=this._breakAttributes(t.start,e);return new Xi(n,n)}const o=this._breakAttributes(i,e),r=o.parent.childCount,s=this._breakAttributes(n,e);return o.offset+=o.parent.childCount-r,new Xi(s,o)}_breakAttributes(t,e=!1){const n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new hn.b("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new hn.b("view-writer-cannot-break-ui-element",this.document);if(!e&&i.is("text")&&Ro(i.parent))return t.clone();if(Ro(i))return t.clone();if(i.is("text"))return this._breakAttributes(Io(t),e);if(n==i.childCount){const t=new Zi(i.parent,i.index+1);return this._breakAttributes(t,e)}if(0===n){const t=new Zi(i.parent,i.index);return this._breakAttributes(t,e)}{const t=i.index+1,o=i._clone();i.parent._insertChild(t,o),this._addToClonedElementsGroup(o);const r=i.childCount-n,s=i._removeChildren(n,r);o._appendChild(s);const a=new Zi(i.parent,t);return this._breakAttributes(a,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const e of t.getChildren())this._addToClonedElementsGroup(e);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const e of t.getChildren())this._removeFromClonedElementsGroup(e);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function So(t){let e=t.parent;for(;!Ro(e);){if(!e)return;e=e.parent}return e}function Eo(t,e){return t.priority<e.priority||!(t.priority>e.priority)&&t.getIdentity()<e.getIdentity()}function Mo(t){const e=t.nodeBefore;if(e&&e.is("text"))return new Zi(e,e.data.length);const n=t.nodeAfter;return n&&n.is("text")?new Zi(n,0):t}function Io(t){if(t.offset==t.parent.data.length)return new Zi(t.parent.parent,t.parent.index+1);if(0===t.offset)return new Zi(t.parent.parent,t.parent.index);const e=t.parent.data.slice(t.offset);return t.parent._data=t.parent.data.slice(0,t.offset),t.parent.parent._insertChild(t.parent.index+1,new Rn(t.root.document,e)),new Zi(t.parent.parent,t.parent.index+1)}function No(t,e){const n=t.data.length;return t._data+=e.data,e._remove(),new Zi(t,n)}const Oo=[Rn,ro,Di,co,xo];function Ro(t){return t&&(t.is("containerElement")||t.is("documentFragment"))}function Do(t,e){const n=So(t.start),i=So(t.end);if(!n||!i||n!==i)throw new hn.b("view-writer-invalid-range-container",e)}function Lo(t,e){return null===t.id&&null===e.id}function jo(t){return"[object Text]"==Object.prototype.toString.call(t)}const Vo=t=>t.createTextNode(" "),zo=t=>{const e=t.createElement("br");return e.dataset.ckeFiller=!0,e},Bo=(()=>{let t="";for(let e=0;e<7;e++)t+="​";return t})();function Fo(t){return jo(t)&&t.data.substr(0,7)===Bo}function Uo(t){return 7==t.data.length&&Fo(t)}function Ho(t){return Fo(t)?t.data.slice(7):t.data}function Wo(t,e){if(e.keyCode==mo.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(1==t.rangeCount&&t.getRangeAt(0).collapsed){const e=t.getRangeAt(0).startContainer,n=t.getRangeAt(0).startOffset;Fo(e)&&n<=7&&t.collapse(e,0)}}}function qo(t,e,n,i=!1){n=n||function(t,e){return t===e},Array.isArray(t)||(t=Array.prototype.slice.call(t)),Array.isArray(e)||(e=Array.prototype.slice.call(e));const o=function(t,e,n){const i=Yo(t,e,n);if(-1===i)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const o=Go(t,i),r=Go(e,i),s=Yo(o,r,n),a=t.length-s,c=e.length-s;return{firstIndex:i,lastIndexOld:a,lastIndexNew:c}}(t,e,n);return i?function(t,e){const{firstIndex:n,lastIndexOld:i,lastIndexNew:o}=t;if(-1===n)return Array(e).fill("equal");let r=[];n>0&&(r=r.concat(Array(n).fill("equal")));o-n>0&&(r=r.concat(Array(o-n).fill("insert")));i-n>0&&(r=r.concat(Array(i-n).fill("delete")));o<e&&(r=r.concat(Array(e-o).fill("equal")));return r}(o,e.length):function(t,e){const n=[],{firstIndex:i,lastIndexOld:o,lastIndexNew:r}=e;r-i>0&&n.push({index:i,type:"insert",values:t.slice(i,r)});o-i>0&&n.push({index:i+(r-i),type:"delete",howMany:o-i});return n}(e,o)}function Yo(t,e,n){for(let i=0;i<Math.max(t.length,e.length);i++)if(void 0===t[i]||void 0===e[i]||!n(t[i],e[i]))return i;return-1}function Go(t,e){return t.slice(e).reverse()}function $o(t,e,n){n=n||function(t,e){return t===e};const i=t.length,o=e.length;if(i>200||o>200||i+o>300)return $o.fastDiff(t,e,n,!0);let r,s;if(o<i){const n=t;t=e,e=n,r="delete",s="insert"}else r="insert",s="delete";const a=t.length,c=e.length,l=c-a,d={},u={};function h(i){const o=(void 0!==u[i-1]?u[i-1]:-1)+1,l=void 0!==u[i+1]?u[i+1]:-1,h=o>l?-1:1;d[i+h]&&(d[i]=d[i+h].slice(0)),d[i]||(d[i]=[]),d[i].push(o>l?r:s);let f=Math.max(o,l),g=f-i;for(;g<a&&f<c&&n(t[g],e[f]);)g++,f++,d[i].push("equal");return f}let f,g=0;do{for(f=-g;f<l;f++)u[f]=h(f);for(f=l+g;f>l;f--)u[f]=h(f);u[l]=h(l),g++}while(u[l]!==c);return d[l].slice(1)}function Ko(t,e,n){t.insertBefore(n,t.childNodes[e]||null)}function Qo(t){const e=t.parentNode;e&&e.removeChild(t)}function Jo(t){if(t){if(t.defaultView)return t instanceof t.defaultView.Document;if(t.ownerDocument&&t.ownerDocument.defaultView)return t instanceof t.ownerDocument.defaultView.Node}return!1}$o.fastDiff=qo;class Zo{constructor(t,e){this.domDocuments=new Set,this.domConverter=t,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=e,this.isFocused=!1,this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(t,e){if("text"===t)this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if("attributes"===t)this.markedAttributes.add(e);else{if("children"!==t)throw new hn.b("view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.",this);this.markedChildren.add(e)}}}render(){let t;for(const t of this.markedChildren)this._updateChildrenMappings(t);this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent));for(const t of this.markedAttributes)this._updateAttrs(t);for(const e of this.markedChildren)this._updateChildren(e,{inlineFillerPosition:t});for(const e of this.markedTexts)!this.markedChildren.has(e.parent)&&this.domConverter.mapViewToDom(e.parent)&&this._updateText(e,{inlineFillerPosition:t});if(t){const e=this.domConverter.viewPositionToDom(t),n=e.parent.ownerDocument;Fo(e.parent)?this._inlineFiller=e.parent:this._inlineFiller=Xo(n,e.parent,e.offset)}else this._inlineFiller=null;this._updateSelection(),this._updateFocus(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=this.domConverter.mapViewToDom(t).childNodes,i=Array.from(this.domConverter.viewChildrenToDom(t,e.ownerDocument,{withChildren:!1})),o=this._diffNodeLists(n,i),r=this._findReplaceActions(o,n,i);if(-1!==r.indexOf("replace")){const e={equal:0,insert:0,delete:0};for(const o of r)if("replace"===o){const o=e.equal+e.insert,r=e.equal+e.delete,s=t.getChild(o);s&&!s.is("uiElement")&&this._updateElementMappings(s,n[r]),Qo(i[o]),e.equal++}else e[o]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("text")?Zi._createBefore(this.selection.getFirstPosition().parent):t}_isSelectionInInlineFiller(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&jo(e.parent)&&Fo(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!Fo(t))throw new hn.b("view-renderer-filler-was-lost: The inline filler node was lost.",this);Uo(t)?t.parentNode.removeChild(t):t.data=t.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root))return!1;if(!e.is("element"))return!1;if(!function(t){if("false"==t.getAttribute("contenteditable"))return!1;const e=t.findAncestor(t=>t.hasAttribute("contenteditable"));return!e||"true"==e.getAttribute("contenteditable")}(e))return!1;if(n===e.getFillerOffset())return!1;const i=t.nodeBefore,o=t.nodeAfter;return!(i instanceof Rn||o instanceof Rn)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t),i=this.domConverter.viewToDom(t,n.ownerDocument),o=n.data;let r=i.data;const s=e.inlineFillerPosition;if(s&&s.parent==t.parent&&s.offset==t.index&&(r=Bo+r),o!=r){const t=qo(o,r);for(const e of t)"insert"===e.type?n.insertData(e.index,e.values.join("")):n.deleteData(e.index,e.howMany)}}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(t=>t.name),i=t.getAttributeKeys();for(const n of i)e.setAttribute(n,t.getAttribute(n));for(const i of n)t.hasAttribute(i)||e.removeAttribute(i)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;const i=e.inlineFillerPosition,o=this.domConverter.mapViewToDom(t).childNodes,r=Array.from(this.domConverter.viewChildrenToDom(t,n.ownerDocument,{bind:!0,inlineFillerPosition:i}));i&&i.parent===t&&Xo(n.ownerDocument,r,i.offset);const s=this._diffNodeLists(o,r);let a=0;const c=new Set;for(const t of s)"delete"===t?(c.add(o[a]),Qo(o[a])):"equal"===t&&a++;a=0;for(const t of s)"insert"===t?(Ko(n,a,r[a]),a++):"equal"===t&&(this._markDescendantTextToSync(this.domConverter.domToView(r[a])),a++);for(const t of c)t.parentNode||this.domConverter.unbindDomElement(t)}_diffNodeLists(t,e){return $o(t=function(t,e){const n=Array.from(t);if(0==n.length||!e)return n;n[n.length-1]==e&&n.pop();return n}(t,this._fakeSelectionContainer),e,er.bind(null,this.domConverter))}_findReplaceActions(t,e,n){if(-1===t.indexOf("insert")||-1===t.indexOf("delete"))return t;let i=[],o=[],r=[];const s={equal:0,insert:0,delete:0};for(const a of t)"insert"===a?r.push(n[s.equal+s.insert]):"delete"===a?o.push(e[s.equal+s.delete]):(i=i.concat($o(o,r,tr).map(t=>"equal"===t?"replace":t)),i.push("equal"),o=[],r=[]),s[a]++;return i.concat($o(o,r,tr).map(t=>"equal"===t?"replace":t))}_markDescendantTextToSync(t){if(t)if(t.is("text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}_updateSelection(){if(0===this.selection.rangeCount)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):(this._removeFakeSelection(),this._updateDomSelection(t)))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(t){const e=t.createElement("div");return Object.assign(e.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),e.textContent=" ",e}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=e.getSelection(),o=e.createRange();i.removeAllRanges(),o.selectNodeContents(n),i.addRange(o)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.focus(),e.collapse(n.parent,n.offset),e.extend(i.parent,i.offset),ho.isGecko&&function(t,e){const n=t.parent;if(n.nodeType!=Node.ELEMENT_NODE||t.offset!=n.childNodes.length-1)return;const i=n.childNodes[t.offset];i&&"BR"==i.tagName&&e.addRange(e.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||(n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel)}_removeDomSelection(){for(const t of this.domDocuments){if(t.getSelection().rangeCount){const e=t.activeElement,n=this.domConverter.mapDomToView(e);e&&n&&t.getSelection().removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function Xo(t,e,n){const i=e instanceof Array?e:e.childNodes,o=i[n];if(jo(o))return o.data=Bo+o.data,o;{const o=t.createTextNode(Bo);return Array.isArray(e)?i.splice(n,0,o):Ko(e,n,o),o}}function tr(t,e){return Jo(t)&&Jo(e)&&!jo(t)&&!jo(e)&&t.nodeType!==Node.COMMENT_NODE&&e.nodeType!==Node.COMMENT_NODE&&t.tagName.toLowerCase()===e.tagName.toLowerCase()}function er(t,e,n){return e===n||(jo(e)&&jo(n)?e.data===n.data:!(!t.isBlockFiller(e)||!t.isBlockFiller(n)))}xn(Zo,Ui);var nr={window:window,document:document};function ir(t){let e=0;for(;t.previousSibling;)t=t.previousSibling,e++;return e}function or(t){const e=[];for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}const rr=zo(document);class sr{constructor(t,e={}){this.document=t,this.blockFillerMode=e.blockFillerMode||"br",this.preElements=["pre"],this.blockElements=["p","div","h1","h2","h3","h4","h5","h6","li","dd","dt","figcaption"],this._blockFiller="br"==this.blockFillerMode?zo:Vo,this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new no(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const e of t.childNodes)this.unbindDomElement(e)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}viewToDom(t,e,n={}){if(t.is("text")){const n=this._processDataFromViewText(t);return e.createTextNode(n)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let i;if(t.is("documentFragment"))i=e.createDocumentFragment(),n.bind&&this.bindDocumentFragments(i,t);else{if(t.is("uiElement"))return i=t.render(e),n.bind&&this.bindElements(i,t),i;i=t.hasAttribute("xmlns")?e.createElementNS(t.getAttribute("xmlns"),t.name):e.createElement(t.name),n.bind&&this.bindElements(i,t);for(const e of t.getAttributeKeys())i.setAttribute(e,t.getAttribute(e))}if(n.withChildren||void 0===n.withChildren)for(const o of this.viewChildrenToDom(t,e,n))i.appendChild(o);return i}}*viewChildrenToDom(t,e,n={}){const i=t.getFillerOffset&&t.getFillerOffset();let o=0;for(const r of t.getChildren())i===o&&(yield this._blockFiller(e)),yield this.viewToDom(r,e,n),o++;i===o&&(yield this._blockFiller(e))}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=document.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){const e=t.parent;if(e.is("text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return Fo(n)&&(i+=7),{parent:n,offset:i}}{let n,i,o;if(0===t.offset){if(n=this.mapViewToDom(e),!n)return null;o=n.childNodes[0]}else{const e=t.nodeBefore;if(i=e.is("text")?this.findCorrespondingDomText(e):this.mapViewToDom(t.nodeBefore),!i)return null;n=i.parentNode,o=i.nextSibling}if(jo(o)&&Fo(o))return{parent:o,offset:7};return{parent:n,offset:i?ir(i)+1:0}}}domToView(t,e={}){if(this.isBlockFiller(t,this.blockFillerMode))return null;const n=this.getParentUIElement(t,this._domToViewMapping);if(n)return n;if(jo(t)){if(Uo(t))return null;{const e=this._processDataFromDomText(t);return""===e?null:new Rn(this.document,e)}}if(this.isComment(t))return null;{if(this.mapDomToView(t))return this.mapDomToView(t);let n;if(this.isDocumentFragment(t))n=new To(this.document),e.bind&&this.bindDocumentFragments(t,n);else{const i=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();n=new Oi(this.document,i),e.bind&&this.bindElements(t,n);const o=t.attributes;for(let t=o.length-1;t>=0;t--)n._setAttribute(o[t].name,o[t].value)}if(e.withChildren||void 0===e.withChildren)for(const i of this.domChildrenToView(t,e))n._appendChild(i);return n}}*domChildrenToView(t,e={}){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n],o=this.domToView(i,e);null!==o&&(yield o)}}domSelectionToView(t){if(1===t.rangeCount){let e=t.getRangeAt(0).startContainer;jo(e)&&(e=e.parentNode);const n=this.fakeSelectionToView(e);if(n)return n}const e=this.isDomSelectionBackward(t),n=[];for(let e=0;e<t.rangeCount;e++){const i=t.getRangeAt(e),o=this.domRangeToView(i);o&&n.push(o)}return new no(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new Xi(e,n):null}domPositionToView(t,e){if(this.isBlockFiller(t,this.blockFillerMode))return this.domPositionToView(t.parentNode,ir(t));const n=this.mapDomToView(t);if(n&&n.is("uiElement"))return Zi._createBefore(n);if(jo(t)){if(Uo(t))return this.domPositionToView(t.parentNode,ir(t));const n=this.findCorrespondingViewText(t);let i=e;return n?(Fo(t)&&(i-=7,i=i<0?0:i),new Zi(n,i)):null}if(0===e){const e=this.mapDomToView(t);if(e)return new Zi(e,0)}else{const n=t.childNodes[e-1],i=jo(n)?this.findCorrespondingViewText(n):this.mapDomToView(n);if(i&&i.parent)return new Zi(i.parent,i.index+1)}return null}mapDomToView(t){return this.getParentUIElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Uo(t))return null;const e=this.getParentUIElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const t=this.mapDomToView(n);if(t){return t.nextSibling instanceof Rn?t.nextSibling:null}}else{const e=this.mapDomToView(t.parentNode);if(e){const t=e.getChild(0);return t instanceof Rn?t:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:t,scrollY:n}=nr.window,i=[];cr(e,t=>{const{scrollLeft:e,scrollTop:n}=t;i.push([e,n])}),e.focus(),cr(e,t=>{const[e,n]=i.shift();t.scrollLeft=e,t.scrollTop=n}),nr.window.scrollTo(t,n)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isComment(t){return t&&t.nodeType==Node.COMMENT_NODE}isBlockFiller(t){return"br"==this.blockFillerMode?t.isEqualNode(rr):!("BR"!==t.tagName||!lr(t,this.blockElements)||1!==t.parentNode.childNodes.length)||function(t,e){return jo(t)&&" "==t.data&&lr(t,e)&&1===t.parentNode.childNodes.length}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=document.createRange();e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset);const n=e.collapsed;return e.detach(),n}getParentUIElement(t){const e=or(t);for(e.pop();e.length;){const t=e.pop(),n=this._domToViewMapping.get(t);if(n&&n.is("uiElement"))return n}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}_isDomSelectionPositionCorrect(t,e){if(jo(t)&&Fo(t)&&e<7)return!1;if(this.isElement(t)&&Fo(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(t=>this.preElements.includes(t.name)))return e;if(" "==e.charAt(0)){const n=this._getTouchingViewTextNode(t,!1);!(n&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(" "==e.charAt(e.length-1)){const n=this._getTouchingViewTextNode(t,!0);" "!=e.charAt(e.length-2)&&n&&" "!=n.data.charAt(0)||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(t=>this.preElements.includes(t.name)))return!1;const e=this._processDataFromViewText(t);return" "==e.charAt(e.length-1)}_processDataFromDomText(t){let e=t.data;if(ar(t,this.preElements))return Ho(t);e=e.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(t,!1),i=this._getTouchingInlineDomNode(t,!0),o=this._checkShouldLeftTrimDomText(n),r=this._checkShouldRightTrimDomText(t,i);return o&&(e=e.replace(/^ /,"")),r&&(e=e.replace(/ $/,"")),e=Ho(new Text(e)),e=e.replace(/ \u00A0/g,"  "),(/( |\u00A0)\u00A0$/.test(e)||!i||i.data&&" "==i.data.charAt(0))&&(e=e.replace(/\u00A0$/," ")),o&&(e=e.replace(/^\u00A0/," ")),e}_checkShouldLeftTrimDomText(t){return!t||(!!nn(t)||/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(t,e){return!e&&!Fo(t)}_getTouchingViewTextNode(t,e){const n=new Ji({startPosition:e?Zi._createAfter(t):Zi._createBefore(t),direction:e?"forward":"backward"});for(const t of n){if(t.item.is("containerElement"))return null;if(t.item.is("br"))return null;if(t.item.is("textProxy"))return t.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;const n=e?"nextNode":"previousNode",i=t.ownerDocument,o=or(t)[0],r=i.createTreeWalker(o,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:t=>jo(t)||"BR"==t.tagName?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});r.currentNode=t;const s=r[n]();if(null!==s){const e=function(t,e){const n=or(t),i=or(e);let o=0;for(;n[o]==i[o]&&n[o];)o++;return 0===o?null:n[o-1]}(t,s);if(e&&!ar(t,this.blockElements,e)&&!ar(s,this.blockElements,e))return s}return null}}function ar(t,e,n){let i=or(t);return n&&(i=i.slice(i.indexOf(n)+1)),i.some(t=>t.tagName&&e.includes(t.tagName.toLowerCase()))}function cr(t,e){for(;t&&t!=nr.document;)e(t),t=t.parentNode}function lr(t,e){const n=t.parentNode;return n&&n.tagName&&e.includes(n.tagName.toLowerCase())}function dr(t){const e=Object.prototype.toString.apply(t);return"[object Window]"==e||"[object global]"==e}var ur=ji({},mn,{listenTo(t,...e){if(Jo(t)||dr(t)){const n=this._getProxyEmitter(t)||new hr(t);n.attach(...e),t=n}mn.listenTo.call(this,t,...e)},stopListening(t,e,n){if(Jo(t)||dr(t)){const e=this._getProxyEmitter(t);if(!e)return;t=e}mn.stopListening.call(this,t,e,n),t instanceof hr&&t.detach(e)},_getProxyEmitter(t){return e=this,n=fr(t),e[fn]&&e[fn][n]?e[fn][n].emitter:null;var e,n}});class hr{constructor(t){pn(this,fr(t)),this._domNode=t}}function fr(t){return t["data-ck-expando"]||(t["data-ck-expando"]=dn())}ji(hr.prototype,mn,{attach(t,e,n={}){if(this._domListeners&&this._domListeners[t])return;const i=this._createDomListener(t,!!n.useCapture);this._domNode.addEventListener(t,i,!!n.useCapture),this._domListeners||(this._domListeners={}),this._domListeners[t]=i},detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()},_createDomListener(t,e){const n=e=>{this.fire(t,e)};return n.removeListener=()=>{this._domNode.removeEventListener(t,n,e),delete this._domListeners[t]},n}});class gr{constructor(t){this.view=t,this.document=t.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}}xn(gr,ur);var mr=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var pr=function(t){return this.__data__.has(t)};function br(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new kt;++e<n;)this.add(t[e])}br.prototype.add=br.prototype.push=mr,br.prototype.has=pr;var wr=br;var kr=function(t,e){for(var n=-1,i=null==t?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1};var _r=function(t,e){return t.has(e)};var vr=function(t,e,n,i,o,r){var s=1&n,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(t);if(l&&r.get(e))return l==e;var d=-1,u=!0,h=2&n?new wr:void 0;for(r.set(t,e),r.set(e,t);++d<a;){var f=t[d],g=e[d];if(i)var m=s?i(g,f,d,e,t,r):i(f,g,d,t,e,r);if(void 0!==m){if(m)continue;u=!1;break}if(h){if(!kr(e,(function(t,e){if(!_r(h,e)&&(f===t||o(f,t,n,i,r)))return h.push(e)}))){u=!1;break}}else if(f!==g&&!o(f,g,n,i,r)){u=!1;break}}return r.delete(t),r.delete(e),u};var yr=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,i){n[++e]=[i,t]})),n};var xr=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},Ar=o?o.prototype:void 0,Cr=Ar?Ar.valueOf:void 0;var Tr=function(t,e,n,i,o,r,s){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!r(new Re(t),new Re(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return A(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var a=yr;case"[object Set]":var c=1&i;if(a||(a=xr),t.size!=e.size&&!c)return!1;var l=s.get(t);if(l)return l==e;i|=2,s.set(t,e);var d=vr(a(t),a(e),i,o,r,s);return s.delete(t),d;case"[object Symbol]":if(Cr)return Cr.call(t)==Cr.call(e)}return!1},Pr=Object.prototype.hasOwnProperty;var Sr=function(t,e,n,i,o,r){var s=1&n,a=ke(t),c=a.length;if(c!=ke(e).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in e:Pr.call(e,d)))return!1}var u=r.get(t);if(u&&r.get(e))return u==e;var h=!0;r.set(t,e),r.set(e,t);for(var f=s;++l<c;){var g=t[d=a[l]],m=e[d];if(i)var p=s?i(m,g,d,e,t,r):i(g,m,d,t,e,r);if(!(void 0===p?g===m||o(g,m,n,i,r):p)){h=!1;break}f||(f="constructor"==d)}if(h&&!f){var b=t.constructor,w=e.constructor;b==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w||(h=!1)}return r.delete(t),r.delete(e),h},Er=Object.prototype.hasOwnProperty;var Mr=function(t,e,n,i,o,r){var s=Dt(t),a=Dt(e),c=s?"[object Array]":Ie(t),l=a?"[object Array]":Ie(e),d="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),u="[object Object]"==(l="[object Arguments]"==l?"[object Object]":l),h=c==l;if(h&&Object(Lt.a)(t)){if(!Object(Lt.a)(e))return!1;s=!0,d=!1}if(h&&!d)return r||(r=new yt),s||qt(t)?vr(t,e,n,i,o,r):Tr(t,e,c,n,i,o,r);if(!(1&n)){var f=d&&Er.call(t,"__wrapped__"),g=u&&Er.call(e,"__wrapped__");if(f||g){var m=f?t.value():t,p=g?e.value():e;return r||(r=new yt),o(m,p,n,i,r)}}return!!h&&(r||(r=new yt),Sr(t,e,n,i,o,r))};var Ir=function t(e,n,i,o,r){return e===n||(null==e||null==n||!p(e)&&!p(n)?e!=e&&n!=n:Mr(e,n,i,o,t,r))};var Nr=function(t,e,n){var i=(n="function"==typeof n?n:void 0)?n(t,e):void 0;return void 0===i?Ir(t,e,void 0,n):!!i};class Or extends gr{constructor(t){super(t),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.push(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(0===t.length)return;const e=this.domConverter,n=new Map,i=new Set;for(const n of t)if("childList"===n.type){const t=e.mapDomToView(n.target);if(t&&t.is("uiElement"))continue;t&&!this._isBogusBrMutation(n)&&i.add(t)}for(const o of t){const t=e.mapDomToView(o.target);if((!t||!t.is("uiElement"))&&"characterData"===o.type){const t=e.findCorrespondingViewText(o.target);t&&!i.has(t.parent)?n.set(t,{type:"text",oldText:t.data,newText:Ho(o.target),node:t}):!t&&Fo(o.target)&&i.add(e.mapDomToView(o.target.parentNode))}}const o=[];for(const t of n.values())this.renderer.markToSync("text",t.node),o.push(t);for(const t of i){const n=e.mapViewToDom(t),i=Array.from(t.getChildren()),r=Array.from(e.domChildrenToView(n,{withChildren:!1}));Nr(i,r,a)||(this.renderer.markToSync("children",t),o.push({type:"children",oldChildren:i,newChildren:r,node:t}))}const r=t[0].target.ownerDocument.getSelection();let s=null;if(r&&r.anchorNode){const t=e.domPositionToView(r.anchorNode,r.anchorOffset),n=e.domPositionToView(r.focusNode,r.focusOffset);t&&n&&(s=new no(t),s.setFocus(n))}function a(t,e){if(!Array.isArray(t))return t===e||!(!t.is("text")||!e.is("text"))&&t.data===e.data}o.length&&(this.document.fire("mutations",o,s),this.view.forceRender())}_isBogusBrMutation(t){let e=null;return null===t.nextSibling&&0===t.removedNodes.length&&1==t.addedNodes.length&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}class Rr{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,ji(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Dr extends gr{constructor(t){super(t),this.useCapture=!1}observe(t){("string"==typeof this.domEventType?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(t,e)=>{this.isEnabled&&this.onDomEvent(e)},{useCapture:this.useCapture})})}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Rr(this.view,e,n))}}class Lr extends Dr{constructor(t){super(t),this.domEventType=["keydown","keyup"]}onDomEvent(t){this.fire(t.type,t,{keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey||t.metaKey,shiftKey:t.shiftKey,get keystroke(){return po(this)}})}}var jr=function(){return i.a.Date.now()},Vr=/^\s+|\s+$/g,zr=/^[-+]0x[0-9a-f]+$/i,Br=/^0b[01]+$/i,Fr=/^0o[0-7]+$/i,Ur=parseInt;var Hr=function(t){if("number"==typeof t)return t;if(zn(t))return NaN;if(j(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=j(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Vr,"");var n=Br.test(t);return n||Fr.test(t)?Ur(t.slice(2),n?2:8):zr.test(t)?NaN:+t},Wr=Math.max,qr=Math.min;var Yr=function(t,e,n){var i,o,r,s,a,c,l=0,d=!1,u=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function f(e){var n=i,r=o;return i=o=void 0,l=e,s=t.apply(r,n)}function g(t){return l=t,a=setTimeout(p,e),d?f(t):s}function m(t){var n=t-c;return void 0===c||n>=e||n<0||u&&t-l>=r}function p(){var t=jr();if(m(t))return b(t);a=setTimeout(p,function(t){var n=e-(t-c);return u?qr(n,r-(t-l)):n}(t))}function b(t){return a=void 0,h&&i?f(t):(i=o=void 0,s)}function w(){var t=jr(),n=m(t);if(i=arguments,o=this,c=t,n){if(void 0===a)return g(c);if(u)return clearTimeout(a),a=setTimeout(p,e),f(c)}return void 0===a&&(a=setTimeout(p,e)),s}return e=Hr(e)||0,j(n)&&(d=!!n.leading,r=(u="maxWait"in n)?Wr(Hr(n.maxWait)||0,e):r,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},w.flush=function(){return void 0===a?s:b(jr())},w};class Gr extends gr{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=Yr(t=>this.document.fire("selectionChangeDone",t),200)}observe(){const t=this.document;t.on("keydown",(e,n)=>{var i;t.selection.isFake&&((i=n.keyCode)==mo.arrowright||i==mo.arrowleft||i==mo.arrowup||i==mo.arrowdown)&&this.isEnabled&&(n.preventDefault(),this._handleSelectionMove(n.keyCode))},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new no(e.getRanges(),{backward:e.isBackward,fake:!1});t!=mo.arrowleft&&t!=mo.arrowup||n.setTo(n.getFirstPosition()),t!=mo.arrowright&&t!=mo.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}class $r extends gr{constructor(t){super(t),this.mutationObserver=t.getObserver(Or),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Yr(t=>this.document.fire("selectionChangeDone",t),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument;this._documents.has(e)||(this.listenTo(e,"selectionchange",()=>{this._handleSelectionChange(e)}),this._documents.add(e))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionChange(t){if(!this.isEnabled)return;this.mutationObserver.flush();const e=t.defaultView.getSelection(),n=this.domConverter.domSelectionToView(e);if(0!=n.rangeCount){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(n)&&this.domConverter.isDomSelectionCorrect(e)||++this._loopbackCounter>60))if(this.selection.isSimilar(n))this.view.forceRender();else{const t={oldSelection:this.selection,newSelection:n,domSelection:e};this.document.fire("selectionChange",t),this._fireSelectionChangeDoneDebounced(t)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class Kr extends Dr{constructor(t){super(t),this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{e.isFocused=!0,this._renderTimeoutId=setTimeout(()=>t.forceRender(),50)}),e.on("blur",(n,i)=>{const o=e.selection.editableElement;null!==o&&o!==i.target||(e.isFocused=!1,t.forceRender())})}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class Qr extends Dr{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0}),e.on("compositionend",()=>{e.isComposing=!1})}onDomEvent(t){this.fire(t.type,t)}}class Jr extends Dr{constructor(t){super(t),this.domEventType=["beforeinput"]}onDomEvent(t){this.fire(t.type,t)}}function Zr(t){return"[object Range]"==Object.prototype.toString.apply(t)}function Xr(t){const e=t.ownerDocument.defaultView.getComputedStyle(t);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const ts=["top","right","bottom","left","width","height"];class es{constructor(t){const e=Zr(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),nn(t)||e)ns(this,e?es.getDomRangeRects(t)[0]:t.getBoundingClientRect());else if(dr(t)){const{innerWidth:e,innerHeight:n}=t;ns(this,{top:0,right:e,bottom:n,left:0,width:e,height:n})}else ns(this,t)}clone(){return new es(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left)};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new es(e)}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(!is(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!is(n);){const t=new es(n),i=e.getIntersection(t);if(!i)return null;i.getArea()<e.getArea()&&(e=i),n=n.parentNode}}return e}isEqual(t){for(const e of ts)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){const t=this._source;let e,n,i;if(dr(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,i=t.getComputedStyle(t.document.documentElement).direction;else{const o=Xr(this._source);e=t.offsetWidth-t.clientWidth-o.left-o.right,n=t.offsetHeight-t.clientHeight-o.top-o.bottom,i=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=o.left,this.top+=o.top,this.right-=o.right,this.bottom-=o.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,"ltr"===i?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const t of n)e.push(new es(t));else{let n=t.startContainer;jo(n)&&(n=n.parentNode);const i=new es(n.getBoundingClientRect());i.right=i.left,i.width=0,e.push(i)}return e}}function ns(t,e){for(const n of ts)t[n]=e[n]}function is(t){return!!nn(t)&&t===t.ownerDocument.body}function os({target:t,viewportOffset:e=0}){const n=us(t);let i=n,o=null;for(;i;){let r;r=hs(i==n?t:o),ss(r,()=>fs(t,i));const s=fs(t,i);if(rs(i,s,e),i.parent!=i){if(o=i.frameElement,i=i.parent,!o)return}else i=null}}function rs(t,e,n){const i=e.clone().moveBy(0,n),o=e.clone().moveBy(0,-n),r=new es(t).excludeScrollbarsAndBorders();if(![o,i].every(t=>r.contains(t))){let{scrollX:s,scrollY:a}=t;cs(o,r)?a-=r.top-e.top+n:as(i,r)&&(a+=e.bottom-r.bottom+n),ls(e,r)?s-=r.left-e.left+n:ds(e,r)&&(s+=e.right-r.right+n),t.scrollTo(s,a)}}function ss(t,e){const n=us(t);let i,o;for(;t!=n.document.body;)o=e(),i=new es(t).excludeScrollbarsAndBorders(),i.contains(o)||(cs(o,i)?t.scrollTop-=i.top-o.top:as(o,i)&&(t.scrollTop+=o.bottom-i.bottom),ls(o,i)?t.scrollLeft-=i.left-o.left:ds(o,i)&&(t.scrollLeft+=o.right-i.right)),t=t.parentNode}function as(t,e){return t.bottom>e.bottom}function cs(t,e){return t.top<e.top}function ls(t,e){return t.left<e.left}function ds(t,e){return t.right>e.right}function us(t){return Zr(t)?t.startContainer.ownerDocument.defaultView:t.ownerDocument.defaultView}function hs(t){if(Zr(t)){let e=t.commonAncestorContainer;return jo(e)&&(e=e.parentNode),e}return t.parentNode}function fs(t,e){const n=us(t),i=new es(t);if(n===e)return i;{let t=n;for(;t!=e;){const e=t.frameElement,n=new es(e).excludeScrollbarsAndBorders();i.moveBy(n.left,n.top),t=t.parent}}return i}Object.assign({},{scrollViewportToShowTarget:os,scrollAncestorsToShowTarget:function(t){ss(hs(t),()=>new es(t))}});class gs{constructor(t){this.document=new oo(t),this.domConverter=new sr(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new Zo(this.domConverter,this.document.selection),this._renderer.bind("isFocused").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Po(this.document),this.addObserver(Or),this.addObserver($r),this.addObserver(Kr),this.addObserver(Lr),this.addObserver(Gr),this.addObserver(Qr),ho.isAndroid&&this.addObserver(Jr),this.document.on("keydown",Wo),Ao(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(t,e="main"){const n=this.document.getRoot(e);n._name=t.tagName.toLowerCase();const i={};for(const{name:e,value:o}of Array.from(t.attributes))i[e]=o,"class"===e?this._writer.addClass(o.split(" "),n):this._writer.setAttribute(e,o,n);this._initialDomRootAttributes.set(t,i);const o=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};o(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(t,e)=>this._renderer.markToSync("children",e)),n.on("change:attributes",(t,e)=>this._renderer.markToSync("attributes",e)),n.on("change:text",(t,e)=>this._renderer.markToSync("text",e)),n.on("change:isReadOnly",()=>this.change(o)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const n of this._observers.values())n.observe(t,e)}detachDomRoot(t){const e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:t})=>e.removeAttribute(t));const n=this._initialDomRootAttributes.get(e);for(const t in n)e.setAttribute(t,n[t]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(const[t,n]of this.domRoots)e.observe(n,t);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(const t of this._observers.values())t.disable()}enableObservers(){for(const t of this._observers.values())t.enable()}scrollToTheSelection(){const t=this.document.selection.getFirstRange();t&&os({target:this.domConverter.viewRangeToDom(t),viewportOffset:20})}focus(){if(!this.document.isFocused){const t=this.document.selection.editableElement;t&&(this.domConverter.focus(t),this.forceRender())}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new hn.b("cannot-change-view-tree: Attempting to make changes to the view when it is in an incorrect state: rendering or post-fixers are in progress. This may cause some unexpected behavior and inconsistency between the DOM and the view.",this);try{if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;const e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}catch(t){hn.b.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return Zi._createAt(t,e)}createPositionAfter(t){return Zi._createAfter(t)}createPositionBefore(t){return Zi._createBefore(t)}createRange(t,e){return new Xi(t,e)}createRangeOn(t){return Xi._createOn(t)}createRangeIn(t){return Xi._createIn(t)}createSelection(t,e,n){return new no(t,e,n)}_disableRendering(t){this._renderingDisabled=t,0==t&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}xn(gs,Ui);class ms{constructor(t){this.parent=null,this._attrs=Ln(t)}get index(){let t;if(!this.parent)return null;if(null===(t=this.parent.getChildIndex(this)))throw new hn.b("model-node-not-found-in-parent: The node's parent does not contain this node.",this);return t}get startOffset(){let t;if(!this.parent)return null;if(null===(t=this.parent.getChildStartOffset(this)))throw new hn.b("model-node-not-found-in-parent: The node's parent does not contain this node.",this);return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const t=this.index;return null!==t&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return null!==t&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let o=0;for(;n[o]==i[o]&&n[o];)o++;return 0===o?null:n[o-1]}isBefore(t){if(this==t)return!1;if(this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=In(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&(this.root===t.root&&!this.isBefore(t))}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((t,e)=>(t[e[0]]=e[1],t),{})),t}is(t){return"node"===t||"model:node"===t}_clone(){return new ms(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=Ln(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}}class ps extends ms{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}is(t){return"text"===t||"model:text"===t||"node"===t||"model:node"===t}toJSON(){const t=super.toJSON();return t.data=this.data,t}_clone(){return new ps(this.data,this.getAttributes())}static fromJSON(t){return new ps(t.data,t.attributes)}}class bs{constructor(t,e,n){if(this.textNode=t,e<0||e>t.offsetSize)throw new hn.b("model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.",this);if(n<0||e+n>t.offsetSize)throw new hn.b("model-textproxy-wrong-length: Given length value is incorrect.",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return null!==this.textNode.startOffset?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return null!==this.startOffset?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}is(t){return"textProxy"===t||"model:textProxy"===t}getPath(){const t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class ws{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){const e=this._nodes.indexOf(t);return-1==e?null:e}getNodeStartOffset(t){const e=this.getNodeIndex(t);return null===e?null:this._nodes.slice(0,e).reduce((t,e)=>t+e.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;const e=this._nodes[t];if(!e)throw new hn.b("model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.",this);return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(const n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new hn.b("model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.",this,{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(const t of e)if(!(t instanceof ms))throw new hn.b("model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.",this);this._nodes.splice(t,0,...e)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class ks extends ms{constructor(t,e,n){super(e),this.name=t,this._children=new ws,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}is(t,e=null){return e?e===this.name&&("element"===t||"model:element"===t):"element"===t||"model:element"===t||t===this.name||t==="model:"+this.name||"node"===t||"model:node"===t}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}toJSON(){const t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(const e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){const e=t?Array.from(this._children).map(t=>t._clone(!0)):null;return new ks(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(t){if("string"==typeof t)return[new ps(t)];yn(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new ps(t):t instanceof bs?new ps(t.data,t.getAttributes()):t)}(e);for(const t of n)null!==t.parent&&t._remove(),t.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const t of n)t.parent=null;return n}static fromJSON(t){let e=null;if(t.children){e=[];for(const n of t.children)n.name?e.push(ks.fromJSON(n)):e.push(ps.fromJSON(n))}return new ks(t.name,t.attributes,e)}}class _s{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new hn.b("model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.",null);const e=t.direction||"forward";if("forward"!=e&&"backward"!=e)throw new hn.b("model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.",t,{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this.position=t.startPosition.clone():this.position=ys._createAt(this.boundaries["backward"==this.direction?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(t){let e,n,i,o;do{i=this.position,o=this._visitedParent,({done:e,value:n}=this.next())}while(!e&&t(n));e||(this.position=i,this._visitedParent=o)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(null===n.parent&&e.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};const i=e.parent,o=xs(e,i),r=o||As(e,i,o);if(r instanceof ks)return this.shallow?e.offset++:(e.path.push(0),this._visitedParent=r),this.position=e,vs("elementStart",r,t,e,1);if(r instanceof ps){let i;if(this.singleCharacters)i=1;else{let t=r.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<t&&(t=this.boundaries.end.offset),i=t-e.offset}const o=e.offset-r.startOffset,s=new bs(r,o,i);return e.offset+=i,this.position=e,vs("text",s,t,e,i)}return e.path.pop(),e.offset++,this.position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():vs("elementEnd",n,t,e)}_previous(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(null===n.parent&&0===e.offset)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};const i=e.parent,o=xs(e,i),r=o||Cs(e,i,o);if(r instanceof ks)return e.offset--,this.shallow?(this.position=e,vs("elementStart",r,t,e,1)):(e.path.push(r.maxOffset),this.position=e,this._visitedParent=r,this.ignoreElementEnd?this._previous():vs("elementEnd",r,t,e));if(r instanceof ps){let i;if(this.singleCharacters)i=1;else{let t=r.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>t&&(t=this.boundaries.start.offset),i=e.offset-t}const o=e.offset-r.startOffset,s=new bs(r,o-i,i);return e.offset-=i,this.position=e,vs("text",s,t,e,i)}return e.path.pop(),this.position=e,this._visitedParent=n.parent,vs("elementStart",n,t,e,1)}}function vs(t,e,n,i,o){return{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:o}}}class ys{constructor(t,e,n="toNone"){if(!t.is("element")&&!t.is("documentFragment"))throw new hn.b("model-position-root-invalid: Position root invalid.",t);if(!(e instanceof Array)||0===e.length)throw new hn.b("model-position-path-incorrect-format: Position path must be an array with at least one item.",t,{path:e});t.is("rootElement")?e=e.slice():(e=[...t.getPath(),...e],t=t.root),this.root=t,this.path=e,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)if(t=t.getChild(t.offsetToIndex(this.path[e])),!t)throw new hn.b("model-position-path-incorrect: The position's path is incorrect.",this,{position:this});if(t.is("text"))throw new hn.b("model-position-path-incorrect: The position's path is incorrect.",this,{position:this});return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return xs(this,this.parent)}get nodeAfter(){const t=this.parent;return As(this,t,xs(this,t))}get nodeBefore(){const t=this.parent;return Cs(this,t,xs(this,t))}get isAtStart(){return 0===this.offset}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";const e=In(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new _s(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const t=this.parent;return t.is("documentFragment")?[t]:t.getAncestors({includeSelf:!0})}getCommonPath(t){if(this.root!=t.root)return[];const e=In(this.path,t.path),n="string"==typeof e?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return 0===i?null:e[i-1]}getShiftedBy(t){const e=this.clone(),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return"after"==this.compareWith(t)}isBefore(t){return"before"==this.compareWith(t)}isEqual(t){return"same"==this.compareWith(t)}isTouching(t){let e=null,n=null;switch(this.compareWith(t)){case"same":return!0;case"before":e=ys._createAt(this),n=ys._createAt(t);break;case"after":e=ys._createAt(t),n=ys._createAt(this);break;default:return!1}let i=e.parent;for(;e.path.length+n.path.length;){if(e.isEqual(n))return!0;if(e.path.length>n.path.length){if(e.offset!==i.maxOffset)return!1;e.path=e.path.slice(0,-1),i=i.parent,e.offset++}else{if(0!==n.offset)return!1;n.path=n.path.slice(0,-1)}}}is(t){return"position"===t||"model:position"===t}hasSameParentAs(t){if(this.root!==t.root)return!1;return"same"==In(this.getParentPath(),t.getParentPath())}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=ys._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){const e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&"toNext"==this.stickiness?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){const e=t.movedRange;let n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?ys._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){const n=ys._createAt(this);if(this.root!=t.root)return n;if("same"==In(t.getParentPath(),this.getParentPath())){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if("prefix"==In(t.getParentPath(),this.getParentPath())){const i=t.path.length-1;if(t.offset<=this.path[i]){if(t.offset+e>this.path[i])return null;n.path[i]-=e}}return n}_getTransformedByInsertion(t,e){const n=ys._createAt(this);if(this.root!=t.root)return n;if("same"==In(t.getParentPath(),this.getParentPath()))(t.offset<this.offset||t.offset==this.offset&&"toPrevious"!=this.stickiness)&&(n.offset+=e);else if("prefix"==In(t.getParentPath(),this.getParentPath())){const i=t.path.length-1;t.offset<=this.path[i]&&(n.path[i]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return ys._createAt(this);const i=this._getTransformedByDeletion(t,n);return null===i||t.isEqual(this)&&"toNext"==this.stickiness||t.getShiftedBy(n).isEqual(this)&&"toPrevious"==this.stickiness?this._getCombined(t,e):i._getTransformedByInsertion(e,n)}_getCombined(t,e){const n=t.path.length-1,i=ys._createAt(e);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-t.offset,i.path=[...i.path,...this.path.slice(n+1)],i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,n="toNone"){if(t instanceof ys)return new ys(t.root,t.path,t.stickiness);{const i=t;if("end"==e)e=i.maxOffset;else{if("before"==e)return this._createBefore(i,n);if("after"==e)return this._createAfter(i,n);if(0!==e&&!e)throw new hn.b("model-createPositionAt-offset-required: Model#createPositionAt() requires the offset when the first parameter is a model item.",[this,t])}if(!i.is("element")&&!i.is("documentFragment"))throw new hn.b("model-position-parent-incorrect: Position parent have to be a element or document fragment.",[this,t]);const o=i.getPath();return o.push(e),new this(i.root,o,n)}}static _createAfter(t,e){if(!t.parent)throw new hn.b("model-position-after-root: You cannot make a position after root.",[this,t],{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new hn.b("model-position-before-root: You cannot make a position before root.",t,{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if("$graveyard"===t.root){const n=new ys(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new hn.b("model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.",e,{rootName:t.root});return new ys(e.getRoot(t.root),t.path,t.stickiness)}}function xs(t,e){const n=e.getChild(e.offsetToIndex(t.offset));return n&&n.is("text")&&n.startOffset<t.offset?n:null}function As(t,e,n){return null!==n?null:e.getChild(e.offsetToIndex(t.offset))}function Cs(t,e,n){return null!==n?null:e.getChild(e.offsetToIndex(t.offset)-1)}class Ts{constructor(t,e=null){this.start=ys._createAt(t),this.end=e?ys._createAt(e):ys._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new _s({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return"same"==In(this.start.getParentPath(),this.end.getParentPath())}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}containsItem(t){const e=ys._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}is(t){return"range"===t||"model:range"===t}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Ts(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Ts(t.end,this.end))):e.push(new Ts(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Ts(e,n)}return null}getMinimalFlatRanges(){const t=[],e=this.start.getCommonPath(this.end).length,n=ys._createAt(this.start);let i=n.parent;for(;n.path.length>e+1;){const e=i.maxOffset-n.offset;0!==e&&t.push(new Ts(n,n.getShiftedBy(e))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){const e=this.end.path[n.path.length-1],i=e-n.offset;0!==i&&t.push(new Ts(n,n.getShiftedBy(i))),n.offset=e,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new _s(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new _s(t);for(const t of e)yield t.item}*getPositions(t={}){t.boundaries=this;const e=new _s(t);yield e.position;for(const t of e)yield t.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new Ts(this.start,this.end)]}getTransformedByOperations(t){const e=[new Ts(this.start,this.end)];for(const n of t)for(let t=0;t<e.length;t++){const i=e[t].getTransformedByOperation(n);e.splice(t,1,...i),t+=i.length-1}for(let t=0;t<e.length;t++){const n=e[t];for(let i=t+1;i<e.length;i++){const t=e[i];(n.containsRange(t)||t.containsRange(n)||n.isEqual(t))&&e.splice(i,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const t=this.start.nodeAfter,e=this.end.nodeBefore;return t&&t.is("element")&&t===e?t:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){const n=t.sourcePosition,i=t.howMany,o=t.targetPosition;return this._getTransformedByMove(n,o,i,e)}_getTransformedBySplitOperation(t){const e=this.start._getTransformedBySplitOperation(t);let n=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(n=this.end.getShiftedBy(1)),e.root!=n.root&&(n=this.end.getShiftedBy(-1)),new Ts(e,n)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new Ts(this.start);let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=ys._createAt(n),e.offset=0):(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new Ts(e,n)):new Ts(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new Ts(this.start,t),new Ts(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{const n=new Ts(this.start,this.end);return n.start=n.start._getTransformedByInsertion(t,e),n.end=n.end._getTransformedByInsertion(t,e),[n]}}_getTransformedByMove(t,e,n,i=!1){if(this.isCollapsed){const i=this.start._getTransformedByMove(t,e,n);return[new Ts(i)]}const o=Ts._createFromPositionAndShift(t,n),r=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!i&&(o.containsPosition(this.start)||o.containsPosition(this.end))){const i=this.start._getTransformedByMove(t,e,n),o=this.end._getTransformedByMove(t,e,n);return[new Ts(i,o)]}let s;const a=this.getDifference(o);let c=null;const l=this.getIntersection(o);if(1==a.length?c=new Ts(a[0].start._getTransformedByDeletion(t,n),a[0].end._getTransformedByDeletion(t,n)):2==a.length&&(c=new Ts(this.start,this.end._getTransformedByDeletion(t,n))),s=c?c._getTransformedByInsertion(r,n,null!==l||i):[],l){const t=new Ts(l.start._getCombined(o.start,r),l.end._getCombined(o.start,r));2==s.length?s.splice(1,0,t):s.push(t)}return s}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),i=this.end._getTransformedByDeletion(t,e);return null==n&&null==i?null:(null==n&&(n=t),null==i&&(i=t),new Ts(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return new this(ys._createAt(t,0),ys._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift(ys._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(0===t.length)throw new hn.b("range-create-from-ranges-empty-array: At least one range has to be passed.",null);if(1==t.length)return t[0].clone();const e=t[0];t.sort((t,e)=>t.start.isAfter(e.start)?1:-1);const n=t.indexOf(e),i=new this(e.start,e.end);if(n>0)for(let e=n-1;t[e].end.isEqual(i.start);e++)i.start=ys._createAt(t[e].start);for(let e=n+1;e<t.length&&t[e].start.isEqual(i.end);e++)i.end=ys._createAt(t[e].end);return i}static fromJSON(t,e){return new this(ys.fromJSON(t.start,e),ys.fromJSON(t.end,e))}}class Ps{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;const n=this._modelToViewMapping.get(e.modelPosition.parent);e.viewPosition=this._findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;const n=this.findMappedViewAncestor(e.viewPosition),i=this._viewToModelMapping.get(n),o=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=ys._createAt(i,o)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t){const e=this.toModelElement(t);if(this._viewToModelMapping.delete(t),this._elementToMarkerNames.has(t))for(const e of this._elementToMarkerNames.get(t))this._unboundMarkerNames.add(e);this._modelToViewMapping.get(e)==t&&this._modelToViewMapping.delete(e)}unbindModelElement(t){const e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){const n=this._markerNameToElements.get(e)||new Set;n.add(t);const i=this._elementToMarkerNames.get(t)||new Set;i.add(e),this._markerNameToElements.set(e,n),this._elementToMarkerNames.set(t,i)}unbindElementFromMarkerName(t,e){const n=this._markerNameToElements.get(e);n&&(n.delete(t),0==n.size&&this._markerNameToElements.delete(e));const i=this._elementToMarkerNames.get(t);i&&(i.delete(e),0==i.size&&this._elementToMarkerNames.delete(t))}flushUnboundMarkerNames(){const t=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),t}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new Ts(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new Xi(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){const e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={isPhantom:!1}){const n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){const e=this._markerNameToElements.get(t);if(!e)return null;const n=new Set;for(const t of e)if(t.is("attributeElement"))for(const e of t.getElementsWithSameId())n.add(e);else n.add(t);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,n){if(n!=t){return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t)}if(t.is("text"))return e;let i=0;for(let n=0;n<e;n++)i+=this.getModelLength(t.getChild(n));return i}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name)){return this._viewToModelLengthCallbacks.get(t.name)(t)}if(this._viewToModelMapping.has(t))return 1;if(t.is("text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(const n of t.getChildren())e+=this.getModelLength(n);return e}}_findPositionIn(t,e){let n,i=0,o=0,r=0;if(t.is("text"))return new Zi(t,e);for(;o<e;)n=t.getChild(r),i=this.getModelLength(n),o+=i,r++;return o==e?this._moveViewPositionToTextNode(new Zi(t,r)):this._findPositionIn(n,e-(o-i))}_moveViewPositionToTextNode(t){const e=t.nodeBefore,n=t.nodeAfter;return e instanceof Rn?new Zi(e,e.data.length):n instanceof Rn?new Zi(n,0):t}}xn(Ps,mn);class Ss{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=Es(e),t instanceof bs&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=Es(e),t instanceof bs&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=Es(e),t instanceof bs&&(t=this._getSymbolForTextProxy(t));const n=this._consumable.get(t);if(void 0===n)return null;const i=n.get(e);return void 0===i?null:i}revert(t,e){e=Es(e),t instanceof bs&&(t=this._getSymbolForTextProxy(t));const n=this.test(t,e);return!1===n?(this._consumable.get(t).set(e,!0),!0):!0!==n&&null}_getSymbolForTextProxy(t){let e=null;const n=this._textProxyRegistry.get(t.startOffset);if(n){const i=n.get(t.endOffset);i&&(e=i.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t.startOffset,t.endOffset,t.parent)),e}_addSymbolForTextProxy(t,e,n){const i=Symbol("textProxySymbol");let o,r;return o=this._textProxyRegistry.get(t),o||(o=new Map,this._textProxyRegistry.set(t,o)),r=o.get(e),r||(r=new Map,o.set(e,r)),r.set(n,i),i}}function Es(t){const e=t.split(":");return e.length>1?e[0]+":"+e[1]:e[0]}class Ms{constructor(t){this.conversionApi=ji({dispatcher:this},t)}convertChanges(t,e,n){for(const e of t.getMarkersToRemove())this.convertMarkerRemove(e.name,e.range,n);for(const e of t.getChanges())"insert"==e.type?this.convertInsert(Ts._createFromPositionAndShift(e.position,e.length),n):"remove"==e.type?this.convertRemove(e.position,e.length,e.name,n):this.convertAttribute(e.range,e.attributeKey,e.attributeOldValue,e.attributeNewValue,n);for(const t of this.conversionApi.mapper.flushUnboundMarkerNames()){const i=e.get(t).getRange();this.convertMarkerRemove(t,i,n),this.convertMarkerAdd(t,i,n)}for(const e of t.getMarkersToAdd())this.convertMarkerAdd(e.name,e.range,n)}convertInsert(t,e){this.conversionApi.writer=e,this.conversionApi.consumable=this._createInsertConsumable(t);for(const e of t){const t=e.item,n={item:t,range:Ts._createFromPositionAndShift(e.previousPosition,e.length)};this._testAndFire("insert",n);for(const e of t.getAttributeKeys())n.attributeKey=e,n.attributeOldValue=null,n.attributeNewValue=t.getAttribute(e),this._testAndFire("attribute:"+e,n)}this._clearConversionApi()}convertRemove(t,e,n,i){this.conversionApi.writer=i,this.fire("remove:"+n,{position:t,length:e},this.conversionApi),this._clearConversionApi()}convertAttribute(t,e,n,i,o){this.conversionApi.writer=o,this.conversionApi.consumable=this._createConsumableForRange(t,"attribute:"+e);for(const o of t){const t={item:o.item,range:Ts._createFromPositionAndShift(o.previousPosition,o.length),attributeKey:e,attributeOldValue:n,attributeNewValue:i};this._testAndFire("attribute:"+e,t)}this._clearConversionApi()}convertSelection(t,e,n){const i=Array.from(e.getMarkersAtPosition(t.getFirstPosition()));if(this.conversionApi.writer=n,this.conversionApi.consumable=this._createSelectionConsumable(t,i),this.fire("selection",{selection:t},this.conversionApi),t.isCollapsed){for(const e of i){const n=e.getRange();if(!Is(t.getFirstPosition(),e,this.conversionApi.mapper))continue;const i={item:t,markerName:e.name,markerRange:n};this.conversionApi.consumable.test(t,"addMarker:"+e.name)&&this.fire("addMarker:"+e.name,i,this.conversionApi)}for(const e of t.getAttributeKeys()){const n={item:t,range:t.getFirstRange(),attributeKey:e,attributeOldValue:null,attributeNewValue:t.getAttribute(e)};this.conversionApi.consumable.test(t,"attribute:"+n.attributeKey)&&this.fire("attribute:"+n.attributeKey+":$text",n,this.conversionApi)}this._clearConversionApi()}}convertMarkerAdd(t,e,n){if(!e.root.document||"$graveyard"==e.root.rootName)return;this.conversionApi.writer=n;const i="addMarker:"+t,o=new Ss;if(o.add(e,i),this.conversionApi.consumable=o,this.fire(i,{markerName:t,markerRange:e},this.conversionApi),o.test(e,i)){this.conversionApi.consumable=this._createConsumableForRange(e,i);for(const n of e.getItems()){if(!this.conversionApi.consumable.test(n,i))continue;const o={item:n,range:Ts._createOn(n),markerName:t,markerRange:e};this.fire(i,o,this.conversionApi)}this._clearConversionApi()}}convertMarkerRemove(t,e,n){e.root.document&&"$graveyard"!=e.root.rootName&&(this.conversionApi.writer=n,this.fire("removeMarker:"+t,{markerName:t,markerRange:e},this.conversionApi),this._clearConversionApi())}_createInsertConsumable(t){const e=new Ss;for(const n of t){const t=n.item;e.add(t,"insert");for(const n of t.getAttributeKeys())e.add(t,"attribute:"+n)}return e}_createConsumableForRange(t,e){const n=new Ss;for(const i of t.getItems())n.add(i,e);return n}_createSelectionConsumable(t,e){const n=new Ss;n.add(t,"selection");for(const i of e)n.add(t,"addMarker:"+i.name);for(const e of t.getAttributeKeys())n.add(t,"attribute:"+e);return n}_testAndFire(t,e){if(!this.conversionApi.consumable.test(e.item,t))return;const n=e.item.name||"$text";this.fire(t+":"+n,e,this.conversionApi)}_clearConversionApi(){delete this.conversionApi.writer,delete this.conversionApi.consumable}}function Is(t,e,n){const i=e.getRange(),o=Array.from(t.getAncestors());o.shift(),o.reverse();return!o.some(t=>{if(i.containsItem(t)){return!!n.toViewElement(t).getCustomProperty("addHighlight")}})}xn(Ms,mn);class Ns{constructor(t,e,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,t&&this.setTo(t,e,n)}get anchor(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return 1===this._ranges.length&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const t of this._ranges)yield new Ts(t.start,t.end)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new Ts(t.start,t.end):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new Ts(t.start,t.end):null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}setTo(t,e,n){if(null===t)this._setRanges([]);else if(t instanceof Ns)this._setRanges(t.getRanges(),t.isBackward);else if(t&&"function"==typeof t.getRanges)this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof Ts)this._setRanges([t],!!e&&!!e.backward);else if(t instanceof ys)this._setRanges([new Ts(t)]);else if(t instanceof ms){const i=!!n&&!!n.backward;let o;if("in"==e)o=Ts._createIn(t);else if("on"==e)o=Ts._createOn(t);else{if(void 0===e)throw new hn.b("model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.",[this,t]);o=new Ts(ys._createAt(t,e))}this._setRanges([o],i)}else{if(!yn(t))throw new hn.b("model-selection-setTo-not-selectable: Cannot set the selection to the given place.",[this,t]);this._setRanges(t,e&&!!e.backward)}}_setRanges(t,e=!1){const n=(t=Array.from(t)).some(e=>{if(!(e instanceof Ts))throw new hn.b("model-selection-set-ranges-not-range: Selection range set to an object that is not an instance of model.Range.",[this,t]);return this._ranges.every(t=>!t.isEqual(e))});if(t.length!==this._ranges.length||n){this._removeAllRanges();for(const e of t)this._pushRange(e);this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0})}}setFocus(t,e){if(null===this.anchor)throw new hn.b("model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.",[this,t]);const n=ys._createAt(t,e);if("same"==n.compareWith(this.focus))return;const i=this.anchor;this._ranges.length&&this._popRange(),"before"==n.compareWith(i)?(this._pushRange(new Ts(n,i)),this._lastRangeBackward=!0):(this._pushRange(new Ts(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){return 1!==this.rangeCount?null:this.getFirstRange().getContainedElement()}is(t){return"selection"===t||"model:selection"===t}*getSelectedBlocks(){const t=new WeakSet;for(const e of this.getRanges()){const n=Ds(e.start,t);n&&Ls(n,e)&&(yield n);for(const n of e.getWalker()){const i=n.item;"elementEnd"==n.type&&Rs(i,t,e)&&(yield i)}const i=Ds(e.end,t);i&&!e.end.isTouching(ys._createAt(i,0))&&Ls(i,e)&&(yield i)}}containsEntireContent(t=this.anchor.root){const e=ys._createAt(t,0),n=ys._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new Ts(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new hn.b("model-selection-range-intersects: Trying to add a range that intersects with another range in the selection.",[this,t],{addedRange:t,intersectingRange:this._ranges[e]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Os(t,e){return!e.has(t)&&(e.add(t),t.root.document.model.schema.isBlock(t)&&t.parent)}function Rs(t,e,n){return Os(t,e)&&Ls(t,n)}function Ds(t,e){const n=t.parent.root.document.model.schema,i=t.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const r=i.find(t=>!o&&(o=n.isLimit(t),!o&&Os(t,e)));return i.forEach(t=>e.add(t)),r}function Ls(t,e){const n=function(t){const e=t.root.document.model.schema;let n=t.parent;for(;n;){if(e.isBlock(n))return n;n=n.parent}}(t);if(!n)return!0;return!e.containsRange(Ts._createOn(n),!0)}xn(Ns,mn);class js extends Ts{constructor(t,e){super(t,e),Vs.call(this)}detach(){this.stopListening()}is(t){return"liveRange"===t||"model:liveRange"===t||"range"==t||"model:range"===t}toRange(){return new Ts(this.start,this.end)}static fromRange(t){return new js(t.start,t.end)}}function Vs(){this.listenTo(this.root.document.model,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&zs.call(this,n)},{priority:"low"})}function zs(t){const e=this.getTransformedByOperation(t),n=Ts._createFromRanges(e),i=!n.isEqual(this),o=function(t,e){switch(e.type){case"insert":return t.containsPosition(e.position);case"move":case"remove":case"reinsert":case"merge":return t.containsPosition(e.sourcePosition)||t.start.isEqual(e.sourcePosition)||t.containsPosition(e.targetPosition);case"split":return t.containsPosition(e.splitPosition)||t.containsPosition(e.insertionPosition)}return!1}(this,t);let r=null;if(i){"$graveyard"==n.root.rootName&&(r="remove"==t.type?t.sourcePosition:t.deletionPosition);const e=this.toRange();this.start=n.start,this.end=n.end,this.fire("change:range",e,{deletionPosition:r})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:r})}xn(js,mn);class Bs{constructor(t){this._selection=new Fs(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}is(t){return"selection"===t||"model:selection"==t||"documentSelection"==t||"model:documentSelection"==t}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return"selection:"+t}static _isStoreAttributeKey(t){return t.startsWith("selection:")}}xn(Bs,mn);class Fs extends Ns{constructor(t){super(),this.markers=new An({idProperty:"name"}),this._model=t.model,this._document=t,this._attributePriority=new Map,this._fixGraveyardRangesData=[],this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this.listenTo(this._model,"applyOperation",(t,e)=>{const n=e[0];if(n.isDocumentOperation&&"marker"!=n.type&&"rename"!=n.type&&"noop"!=n.type){for(;this._fixGraveyardRangesData.length;){const{liveRange:t,sourcePosition:e}=this._fixGraveyardRangesData.shift();this._fixGraveyardSelection(t,e)}this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1}))}},{priority:"lowest"}),this.on("change:range",()=>{for(const t of this.getRanges())if(!this._document._validateSelectionRange(t))throw new hn.b("document-selection-wrong-position: Range from document selection starts or ends at incorrect position.",this,{range:t})}),this.listenTo(this._model.markers,"update",()=>this._updateMarkers()),this.listenTo(this._document,"change",(t,e)=>{!function(t,e){const n=t.document.differ;for(const i of n.getChanges()){if("insert"!=i.type)continue;const n=i.position.parent;i.length===n.maxOffset&&t.enqueueChange(e,t=>{const e=Array.from(n.getAttributeKeys()).filter(t=>t.startsWith("selection:"));for(const i of e)t.removeAttribute(i,n)})}}(this._model,e)})}get isCollapsed(){return 0===this._ranges.length?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(t,e,n){super.setTo(t,e,n),this._updateAttributes(!0),this._updateMarkers()}setFocus(t,e){super.setFocus(t,e),this._updateAttributes(!0),this._updateMarkers()}setAttribute(t,e){if(this._setAttribute(t,e)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){const t=dn();return this._overriddenGravityRegister.add(t),1===this._overriddenGravityRegister.size&&this._updateAttributes(!0),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new hn.b("document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.",this,{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._updateAttributes(!0)}_popRange(){this._ranges.pop().detach()}_pushRange(t){const e=this._prepareRange(t);e&&this._ranges.push(e)}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return;const e=js.fromRange(t);return e.on("change:range",(t,n,i)=>{this._hasChangedRange=!0,e.root==this._document.graveyard&&this._fixGraveyardRangesData.push({liveRange:e,sourcePosition:i.deletionPosition})}),e}_updateMarkers(){const t=[];let e=!1;for(const e of this._model.markers){const n=e.getRange();for(const i of this.getRanges())n.containsRange(i,!i.isCollapsed)&&t.push(e)}const n=Array.from(this.markers);for(const n of t)this.markers.has(n)||(this.markers.add(n),e=!0);for(const n of Array.from(this.markers))t.includes(n)||(this.markers.remove(n),e=!0);e&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateAttributes(t){const e=Ln(this._getSurroundingAttributes()),n=Ln(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(const[t,e]of this._attributePriority)"low"==e&&(this._attrs.delete(t),this._attributePriority.delete(t));this._setAttributesTo(e);const i=[];for(const[t,e]of this.getAttributes())n.has(t)&&n.get(t)===e||i.push(t);for(const[t]of n)this.hasAttribute(t)||i.push(t);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(t,e,n=!0){const i=n?"normal":"low";if("low"==i&&"normal"==this._attributePriority.get(t))return!1;return super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,i),!0)}_removeAttribute(t,e=!0){const n=e?"normal":"low";return("low"!=n||"normal"!=this._attributePriority.get(t))&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){const e=new Set;for(const[e,n]of this.getAttributes())t.get(e)!==n&&this._removeAttribute(e,!1);for(const[n,i]of t){this._setAttribute(n,i,!1)&&e.add(n)}return e}*_getStoredAttributes(){const t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(const e of t.getAttributeKeys())if(e.startsWith("selection:")){const n=e.substr("selection:".length);yield[n,t.getAttribute(e)]}}_getSurroundingAttributes(){const t=this.getFirstPosition(),e=this._model.schema;let n=null;if(this.isCollapsed){const e=t.textNode?t.textNode:t.nodeBefore,i=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=Us(e)),n||(n=Us(i)),!this.isGravityOverridden&&!n){let t=e;for(;t&&!n;)t=t.previousSibling,n=Us(t)}if(!n){let t=i;for(;t&&!n;)t=t.nextSibling,n=Us(t)}n||(n=this._getStoredAttributes())}else{const t=this.getFirstRange();for(const i of t){if(i.item.is("element")&&e.isObject(i.item))break;if("text"==i.type){n=i.item.getAttributes();break}}}return n}_fixGraveyardSelection(t,e){const n=e.clone(),i=this._model.schema.getNearestSelectionRange(n),o=this._ranges.indexOf(t);if(this._ranges.splice(o,1),t.detach(),i&&(r=i,this._ranges.every(t=>!r.isEqual(t)))){const t=this._prepareRange(i);this._ranges.splice(o,0,t)}var r}}function Us(t){return t instanceof bs||t instanceof ps?t.getAttributes():null}class Hs{constructor(t){this._dispatchers=t}add(t){for(const e of this._dispatchers)t(e);return this}}var Ws=function(t){return tn(t,5)};class qs extends Hs{elementToElement(t){return this.add(function(t){return(t=Ws(t)).view=Gs(t.view,"container"),e=>{var n;e.on("insert:"+t.model,(n=t.view,(t,e,i)=>{const o=n(e.item,i.writer);if(!o)return;if(!i.consumable.consume(e.item,"insert"))return;const r=i.mapper.toViewPosition(e.range.start);i.mapper.bindElements(e.item,o),i.writer.insert(r,o)}),{priority:t.converterPriority||"normal"})}}(t))}attributeToElement(t){return this.add(function(t){t=Ws(t);let e="attribute:"+(t.model.key?t.model.key:t.model);t.model.name&&(e+=":"+t.model.name);if(t.model.values)for(const e of t.model.values)t.view[e]=Gs(t.view[e],"attribute");else t.view=Gs(t.view,"attribute");const n=$s(t);return i=>{i.on(e,function(t){return(e,n,i)=>{const o=t(n.attributeOldValue,i.writer),r=t(n.attributeNewValue,i.writer);if(!o&&!r)return;if(!i.consumable.consume(n.item,e.name))return;const s=i.writer,a=s.document.selection;if(n.item instanceof Ns||n.item instanceof Bs)s.wrap(a.getFirstRange(),r);else{let t=i.mapper.toViewRange(n.range);null!==n.attributeOldValue&&o&&(t=s.unwrap(t,o)),null!==n.attributeNewValue&&r&&s.wrap(t,r)}}}(n),{priority:t.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(t){t=Ws(t);let e="attribute:"+(t.model.key?t.model.key:t.model);t.model.name&&(e+=":"+t.model.name);if(t.model.values)for(const e of t.model.values)t.view[e]=Ks(t.view[e]);else t.view=Ks(t.view);const n=$s(t);return i=>{var o;i.on(e,(o=n,(t,e,n)=>{const i=o(e.attributeOldValue,e),r=o(e.attributeNewValue,e);if(!i&&!r)return;if(!n.consumable.consume(e.item,t.name))return;const s=n.mapper.toViewElement(e.item),a=n.writer;if(!s)throw new hn.b("conversion-attribute-to-attribute-on-text: Trying to convert text node's attribute with attribute-to-attribute converter.",[e,n]);if(null!==e.attributeOldValue&&i)if("class"==i.key){const t=Array.isArray(i.value)?i.value:[i.value];for(const e of t)a.removeClass(e,s)}else if("style"==i.key){const t=Object.keys(i.value);for(const e of t)a.removeStyle(e,s)}else a.removeAttribute(i.key,s);if(null!==e.attributeNewValue&&r)if("class"==r.key){const t=Array.isArray(r.value)?r.value:[r.value];for(const e of t)a.addClass(e,s)}else if("style"==r.key){const t=Object.keys(r.value);for(const e of t)a.setStyle(e,r.value[e],s)}else a.setAttribute(r.key,r.value,s)}),{priority:t.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(t){return(t=Ws(t)).view=Gs(t.view,"ui"),e=>{var n;e.on("addMarker:"+t.model,(n=t.view,(t,e,i)=>{e.isOpening=!0;const o=n(e,i.writer);e.isOpening=!1;const r=n(e,i.writer);if(!o||!r)return;const s=e.markerRange;if(s.isCollapsed&&!i.consumable.consume(s,t.name))return;for(const e of s)if(!i.consumable.consume(e.item,t.name))return;const a=i.mapper,c=i.writer;c.insert(a.toViewPosition(s.start),o),i.mapper.bindElementToMarker(o,e.markerName),s.isCollapsed||(c.insert(a.toViewPosition(s.end),r),i.mapper.bindElementToMarker(r,e.markerName)),t.stop()}),{priority:t.converterPriority||"normal"}),e.on("removeMarker:"+t.model,(t.view,(t,e,n)=>{const i=n.mapper.markerNameToElements(e.markerName);if(i){for(const t of i)n.mapper.unbindElementFromMarkerName(t,e.markerName),n.writer.clear(n.writer.createRangeOn(t),t);n.writer.clearClonedElementsGroup(e.markerName),t.stop()}}),{priority:t.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(t){return e=>{var n;e.on("addMarker:"+t.model,(n=t.view,(t,e,i)=>{if(!e.item)return;if(!(e.item instanceof Ns||e.item instanceof Bs||e.item.is("textProxy")))return;const o=Qs(n,e,i);if(!o)return;if(!i.consumable.consume(e.item,t.name))return;const r=i.writer,s=Ys(r,o),a=r.document.selection;if(e.item instanceof Ns||e.item instanceof Bs)r.wrap(a.getFirstRange(),s,a);else{const t=i.mapper.toViewRange(e.range),n=r.wrap(t,s);for(const t of n.getItems())if(t.is("attributeElement")&&t.isSimilar(s)){i.mapper.bindElementToMarker(t,e.markerName);break}}}),{priority:t.converterPriority||"normal"}),e.on("addMarker:"+t.model,function(t){return(e,n,i)=>{if(!n.item)return;if(!(n.item instanceof ks))return;const o=Qs(t,n,i);if(!o)return;if(!i.consumable.test(n.item,e.name))return;const r=i.mapper.toViewElement(n.item);if(r&&r.getCustomProperty("addHighlight")){i.consumable.consume(n.item,e.name);for(const t of Ts._createIn(n.item))i.consumable.consume(t.item,e.name);r.getCustomProperty("addHighlight")(r,o,i.writer),i.mapper.bindElementToMarker(r,n.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),e.on("removeMarker:"+t.model,function(t){return(e,n,i)=>{if(n.markerRange.isCollapsed)return;const o=Qs(t,n,i);if(!o)return;const r=Ys(i.writer,o),s=i.mapper.markerNameToElements(n.markerName);if(s){for(const t of s)i.mapper.unbindElementFromMarkerName(t,n.markerName),t.is("attributeElement")?i.writer.unwrap(i.writer.createRangeOn(t),r):t.getCustomProperty("removeHighlight")(t,o.id,i.writer);i.writer.clearClonedElementsGroup(n.markerName),e.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(t))}}function Ys(t,e){const n=t.createAttributeElement("span",e.attributes);return e.classes&&n._addClass(e.classes),e.priority&&(n._priority=e.priority),n._id=e.id,n}function Gs(t,e){return"function"==typeof t?t:(n,i)=>function(t,e,n){"string"==typeof t&&(t={name:t});let i;const o=Object.assign({},t.attributes);if("container"==n)i=e.createContainerElement(t.name,o);else if("attribute"==n){const n={priority:t.priority||ro.DEFAULT_PRIORITY};i=e.createAttributeElement(t.name,o,n)}else i=e.createUIElement(t.name,o);if(t.styles){const n=Object.keys(t.styles);for(const o of n)e.setStyle(o,t.styles[o],i)}if(t.classes){const n=t.classes;if("string"==typeof n)e.addClass(n,i);else for(const t of n)e.addClass(t,i)}return i}(t,i,e)}function $s(t){return t.model.values?(e,n)=>{const i=t.view[e];return i?i(e,n):null}:t.view}function Ks(t){return"string"==typeof t?e=>({key:t,value:e}):"object"==typeof t?t.value?()=>t:e=>({key:t.key,value:e}):t}function Qs(t,e,n){const i="function"==typeof t?t(e,n):t;return i?(i.priority||(i.priority=10),i.id||(i.id=e.markerName),i):null}class Js extends Hs{elementToElement(t){return this.add(Zs(t))}elementToAttribute(t){return this.add(function(t){ta(t=Ws(t));const e=ea(t,!1),n=Xs(t.view),i=n?"element:"+n:"element";return n=>{n.on(i,e,{priority:t.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(t){t=Ws(t);let e=null;("string"==typeof t.view||t.view.key)&&(e=function(t){"string"==typeof t.view&&(t.view={key:t.view});const e=t.view.key;let n;if("class"==e||"style"==e){n={["class"==e?"classes":"styles"]:t.view.value}}else{const i=void 0===t.view.value?/[\s\S]*/:t.view.value;n={attributes:{[e]:i}}}t.view.name&&(n.name=t.view.name);return t.view=n,e}(t));ta(t,e);const n=ea(t,!0);return e=>{e.on("element",n,{priority:t.converterPriority||"low"})}}(t))}elementToMarker(t){return this.add(function(t){return function(t){const e=t.model;t.model=(t,n)=>{const i="string"==typeof e?e:e(t);return n.createElement("$marker",{"data-name":i})}}(t=Ws(t)),Zs(t)}(t))}}function Zs(t){const e=function(t){const e=t.view?new jn(t.view):null;return(n,i,o)=>{let r={};if(e){const t=e.match(i.viewItem);if(!t)return;r=t.match}r.name=!0;const s=(a=t.model,c=i.viewItem,l=o.writer,a instanceof Function?a(c,l):l.createElement(a));var a,c,l;if(!s)return;if(!o.consumable.test(i.viewItem,r))return;const d=o.splitToAllowedParent(s,i.modelCursor);if(!d)return;o.writer.insert(s,d.position),o.convertChildren(i.viewItem,o.writer.createPositionAt(s,0)),o.consumable.consume(i.viewItem,r);const u=o.getSplitParts(s);i.modelRange=new Ts(o.writer.createPositionBefore(s),o.writer.createPositionAfter(u[u.length-1])),d.cursorParent?i.modelCursor=o.writer.createPositionAt(d.cursorParent,0):i.modelCursor=i.modelRange.end}}(t=Ws(t)),n=Xs(t.view),i=n?"element:"+n:"element";return n=>{n.on(i,e,{priority:t.converterPriority||"normal"})}}function Xs(t){return"string"==typeof t?t:"object"==typeof t&&"string"==typeof t.name?t.name:null}function ta(t,e=null){const n=null===e||(t=>t.getAttribute(e)),i="object"!=typeof t.model?t.model:t.model.key,o="object"!=typeof t.model||void 0===t.model.value?n:t.model.value;t.model={key:i,value:o}}function ea(t,e){const n=new jn(t.view);return(i,o,r)=>{const s=n.match(o.viewItem);if(!s)return;const a=t.model.key,c="function"==typeof t.model.value?t.model.value(o.viewItem):t.model.value;if(null===c)return;if(!function(t,e){const n="function"==typeof t?t(e):t;if("object"==typeof n&&!Xs(n))return!1;return!n.classes&&!n.attributes&&!n.styles}(t.view,o.viewItem)?delete s.match.name:s.match.name=!0,!r.consumable.test(o.viewItem,s.match))return;o.modelRange||(o=Object.assign(o,r.convertChildren(o.viewItem,o.modelCursor)));(function(t,e,n,i){let o=!1;for(const r of Array.from(t.getItems({shallow:n})))i.schema.checkAttribute(r,e.key)&&(i.writer.setAttribute(e.key,e.value,r),o=!0);return o})(o.modelRange,{key:a,value:c},e,r)&&r.consumable.consume(o.viewItem,s.match)}}class na{constructor(t,e){this.model=t,this.view=new gs(e),this.mapper=new Ps,this.downcastDispatcher=new Ms({mapper:this.mapper});const n=this.model.document,i=n.selection,o=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(t=>{this.downcastDispatcher.convertChanges(n.differ,o,t),this.downcastDispatcher.convertSelection(i,o,t)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(t,e){return(n,i)=>{const o=i.newSelection,r=new Ns,s=[];for(const t of o.getRanges())s.push(e.toModelRange(t));r.setTo(s,{backward:o.isBackward}),r.isEqual(t.document.selection)||t.change(t=>{t.setSelection(r)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(t,e,n)=>{if(!n.consumable.consume(e.item,"insert"))return;const i=n.writer,o=n.mapper.toViewPosition(e.range.start),r=i.createText(e.item.data);i.insert(o,r)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(t,e,n)=>{const i=n.mapper.toViewPosition(e.position),o=e.position.getShiftedBy(e.length),r=n.mapper.toViewPosition(o,{isPhantom:!0}),s=n.writer.createRange(i,r),a=n.writer.remove(s.getTrimmed());for(const t of n.writer.createRangeIn(a).getItems())n.mapper.unbindViewElement(t)},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const i=n.writer,o=i.document.selection;for(const t of o.getRanges())t.isCollapsed&&t.end.parent.isAttached()&&n.writer.mergeAttributes(t.start);i.setSelection(null)},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const i=e.selection;if(i.isCollapsed)return;if(!n.consumable.consume(i,"selection"))return;const o=[];for(const t of i.getRanges()){const e=n.mapper.toViewRange(t);o.push(e)}n.writer.setSelection(o,{backward:i.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const i=e.selection;if(!i.isCollapsed)return;if(!n.consumable.consume(i,"selection"))return;const o=n.writer,r=i.getFirstPosition(),s=n.mapper.toViewPosition(r),a=o.breakAttributes(s);o.setSelection(a)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(t=>{if("$graveyard"==t.rootName)return null;const e=new Qi(this.view.document,t.name);return e.rootName=t.rootName,this.mapper.bindElements(t,e),e})}destroy(){this.view.destroy(),this.stopListening()}}xn(na,Ui);class ia{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){const n=this.get(t);if(!n)throw new hn.b("commandcollection-command-not-found: Command does not exist.",this,{commandName:t});n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const t of this.commands())t.destroy()}}class oa{constructor(){this._consumables=new Map}add(t,e){let n;t.is("text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new ra(t),this._consumables.set(t,n)),n.add(e))}test(t,e){const n=this._consumables.get(t);return void 0===n?null:t.is("text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){const n=this._consumables.get(t);void 0!==n&&(t.is("text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){const e={element:t,name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(const t of n)"style"!=t&&"class"!=t&&e.attributes.push(t);const i=t.getClassNames();for(const t of i)e.classes.push(t);const o=t.getStyleNames();for(const t of o)e.styles.push(t);return e}static createFrom(t,e){if(e||(e=new oa(t)),t.is("text"))return e.add(t),e;t.is("element")&&e.add(t,oa.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(const n of t.getChildren())e=oa.createFrom(n,e);return e}}class ra{constructor(t){this.element=t,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(const e in this._consumables)if(e in t){const n=this._test(e,t[e]);if(!0!==n)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(const e in this._consumables)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._revert(e,t[e])}_add(t,e){const n=Dt(e)?e:[e],i=this._consumables[t];for(const e of n){if("attributes"===t&&("class"===e||"style"===e))throw new hn.b("viewconsumable-invalid-attribute: Classes and styles should be handled separately.",this);if(i.set(e,!0),"styles"===t)for(const t of this.element.document.stylesProcessor.getRelatedStyles(e))i.set(t,!0)}}_test(t,e){const n=Dt(e)?e:[e],i=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){const t=i.get(e);if(void 0===t)return null;if(!t)return!1}else{const t="class"==e?"classes":"styles",n=this._test(t,[...this._consumables[t].keys()]);if(!0!==n)return n}return!0}_consume(t,e){const n=Dt(e)?e:[e],i=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){if(i.set(e,!1),"styles"==t)for(const t of this.element.document.stylesProcessor.getRelatedStyles(e))i.set(t,!1)}else{const t="class"==e?"classes":"styles";this._consume(t,[...this._consumables[t].keys()])}}_revert(t,e){const n=Dt(e)?e:[e],i=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){!1===i.get(e)&&i.set(e,!0)}else{const t="class"==e?"classes":"styles";this._revert(t,[...this._consumables[t].keys()])}}}class sa{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new aa(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new aa(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new hn.b("schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.",this,{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new hn.b("schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.",this,{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e="string"==typeof t?t:t.is&&(t.is("text")||t.is("textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){const e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){const e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){const e=this.getDefinition(t);return!(!e||!e.isObject)}isInline(t){const e=this.getDefinition(t);return!(!e||!e.isInline)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){const n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e=null){if(t instanceof ys){const e=t.nodeBefore,n=t.nodeAfter;if(!(e instanceof ks))throw new hn.b("schema-check-merge-no-element-before: The node before the merge position must be an element.",this);if(!(n instanceof ks))throw new hn.b("schema-check-merge-no-element-after: The node after the merge position must be an element.",this);return this.checkMerge(e,n)}for(const n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,i])=>{if(!i)return;const o=t(n,i);"boolean"==typeof o&&(e.stop(),e.return=o)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,i])=>{const o=t(n,i);"boolean"==typeof o&&(e.stop(),e.return=o)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;if(t instanceof ys)e=t.parent;else{e=(t instanceof Ts?[t]:Array.from(t.getRanges())).reduce((t,e)=>{const n=e.getCommonAncestor();return t?t.getCommonAncestor(n,{includeSelf:!0}):n},null)}for(;!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){const n=[...t.getFirstPosition().getAncestors(),new ps("",t.getAttributes())];return this.checkAttribute(n,e)}{const n=t.getRanges();for(const t of n)for(const n of t)if(this.checkAttribute(n.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(t){for(const e of t)yield*e.getMinimalFlatRanges()}(t);for(const n of t)yield*this._getValidRangesForRange(n,e)}getNearestSelectionRange(t,e="both"){if(this.checkChild(t,"$text"))return new Ts(t);let n,i;const o=t.getAncestors().reverse().find(t=>this.isLimit(t))||t.root;"both"!=e&&"backward"!=e||(n=new _s({boundaries:Ts._createIn(o),startPosition:t,direction:"backward"})),"both"!=e&&"forward"!=e||(i=new _s({boundaries:Ts._createIn(o),startPosition:t}));for(const t of function*(t,e){let n=!1;for(;!n;){if(n=!0,t){const e=t.next();e.done||(n=!1,yield{walker:t,value:e.value})}if(e){const t=e.next();t.done||(n=!1,yield{walker:e,value:t.value})}}}(n,i)){const e=t.walker==n?"elementEnd":"elementStart",i=t.value;if(i.type==e&&this.isObject(i.item))return Ts._createOn(i.item);if(this.checkChild(i.nextPosition,"$text"))return new Ts(i.nextPosition)}return null}findAllowedParent(t,e){let n=t.parent;for(;n;){if(this.checkChild(n,e))return n;if(this.isLimit(n))return null;n=n.parent}return null}removeDisallowedAttributes(t,e){for(const n of t)if(n.is("text"))wa(this,n,e);else{const t=Ts._createIn(n).getPositions();for(const n of t){wa(this,n.nodeBefore||n.parent,e)}}}createContext(t){return new aa(t)}_clearCache(){this._compiledDefinitions=null}_compile(){const t={},e=this._sourceDefinitions,n=Object.keys(e);for(const i of n)t[i]=ca(e[i],i);for(const e of n)la(t,e);for(const e of n)da(t,e);for(const e of n)ua(t,e),ha(t,e);for(const e of n)fa(t,e),ga(t,e);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){const i=e.getItem(n);if(t.allowIn.includes(i.name)){if(0==n)return!0;{const t=this.getDefinition(i);return this._checkContextMatch(t,e,n-1)}}return!1}*_getValidRangesForRange(t,e){let n=t.start,i=t.start;for(const o of t.getItems({shallow:!0}))o.is("element")&&(yield*this._getValidRangesForRange(Ts._createIn(o),e)),this.checkAttribute(o,e)||(n.isEqual(i)||(yield new Ts(n,i)),n=ys._createAfter(o)),i=ys._createAfter(o);n.isEqual(i)||(yield new Ts(n,i))}}xn(sa,Ui);class aa{constructor(t){if(t instanceof aa)return t;"string"==typeof t?t=[t]:Array.isArray(t)||(t=t.getAncestors({includeSelf:!0})),t[0]&&"string"!=typeof t[0]&&t[0].is("documentFragment")&&t.shift(),this._items=t.map(ba)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){const e=new aa([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}startsWith(t){return Array.from(this.getNames()).join(" ").startsWith(t)}}function ca(t,e){const n={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],inheritTypesFrom:[]};return function(t,e){for(const n of t){const t=Object.keys(n).filter(t=>t.startsWith("is"));for(const i of t)e[i]=n[i]}}(t,n),ma(t,n,"allowIn"),ma(t,n,"allowContentOf"),ma(t,n,"allowWhere"),ma(t,n,"allowAttributes"),ma(t,n,"allowAttributesOf"),ma(t,n,"inheritTypesFrom"),function(t,e){for(const n of t){const t=n.inheritAllFrom;t&&(e.allowContentOf.push(t),e.allowWhere.push(t),e.allowAttributesOf.push(t),e.inheritTypesFrom.push(t))}}(t,n),n}function la(t,e){for(const n of t[e].allowContentOf)if(t[n]){pa(t,n).forEach(t=>{t.allowIn.push(e)})}delete t[e].allowContentOf}function da(t,e){for(const n of t[e].allowWhere){const i=t[n];if(i){const n=i.allowIn;t[e].allowIn.push(...n)}}delete t[e].allowWhere}function ua(t,e){for(const n of t[e].allowAttributesOf){const i=t[n];if(i){const n=i.allowAttributes;t[e].allowAttributes.push(...n)}}delete t[e].allowAttributesOf}function ha(t,e){const n=t[e];for(const e of n.inheritTypesFrom){const i=t[e];if(i){const t=Object.keys(i).filter(t=>t.startsWith("is"));for(const e of t)e in n||(n[e]=i[e])}}delete n.inheritTypesFrom}function fa(t,e){const n=t[e],i=n.allowIn.filter(e=>t[e]);n.allowIn=Array.from(new Set(i))}function ga(t,e){const n=t[e];n.allowAttributes=Array.from(new Set(n.allowAttributes))}function ma(t,e,n){for(const i of t)"string"==typeof i[n]?e[n].push(i[n]):Array.isArray(i[n])&&e[n].push(...i[n])}function pa(t,e){const n=t[e];return(i=t,Object.keys(i).map(t=>i[t])).filter(t=>t.allowIn.includes(n.name));var i}function ba(t){return"string"==typeof t?{name:t,*getAttributeKeys(){},getAttribute(){}}:{name:t.is("element")?t.name:"$text",*getAttributeKeys(){yield*t.getAttributeKeys()},getAttribute:e=>t.getAttribute(e)}}function wa(t,e,n){for(const i of e.getAttributeKeys())t.checkAttribute(e,i)||n.removeAttribute(i,e)}class ka{constructor(t={}){this._splitParts=new Map,this._modelCursor=null,this.conversionApi=Object.assign({},t),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this)}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(t,e){let n;for(const i of new aa(t)){const t={};for(const e of i.getAttributeKeys())t[e]=i.getAttribute(e);const o=e.createElement(i.name,t);n&&e.append(o,n),n=ys._createAt(o,0)}return n}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=oa.createFrom(t),this.conversionApi.store={};const{modelRange:i}=this._convertItem(t,this._modelCursor),o=e.createDocumentFragment();if(i){this._removeEmptyElements();for(const t of Array.from(this._modelCursor.parent.getChildren()))e.append(t,o);o.markers=function(t,e){const n=new Set,i=new Map,o=Ts._createIn(t).getItems();for(const t of o)"$marker"==t.name&&n.add(t);for(const t of n){const n=t.getAttribute("data-name"),o=e.createPositionBefore(t);i.has(n)?i.get(n).end=o.clone():i.set(n,new Ts(o.clone())),e.remove(t)}return i}(o,e)}return this._modelCursor=null,this._splitParts.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,o}_convertItem(t,e){const n=Object.assign({viewItem:t,modelCursor:e,modelRange:null});if(t.is("element")?this.fire("element:"+t.name,n,this.conversionApi):t.is("text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof Ts))throw new hn.b("view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){const n=new Ts(e);let i=e;for(const e of Array.from(t.getChildren())){const t=this._convertItem(e,i);t.modelRange instanceof Ts&&(n.end=t.modelRange.end,i=t.modelCursor)}return{modelRange:n,modelCursor:i}}_splitToAllowedParent(t,e){const n=this.conversionApi.schema.findAllowedParent(e,t);if(!n)return null;if(n===e.parent)return{position:e};if(this._modelCursor.parent.getAncestors().includes(n))return null;const i=this.conversionApi.writer.split(e,n),o=[];for(const t of i.range.getWalker())if("elementEnd"==t.type)o.push(t.item);else{const e=o.pop(),n=t.item;this._registerSplitPair(e,n)}return{position:i.position,cursorParent:i.range.end.parent}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);const n=this._splitParts.get(t);this._splitParts.set(e,n),n.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t],e}_removeEmptyElements(){let t=!1;for(const e of this._splitParts.keys())e.isEmpty&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}xn(ka,mn);class _a{constructor(t,e){this.model=t,this.stylesProcessor=e,this.processor,this.mapper=new Ps,this.downcastDispatcher=new Ms({mapper:this.mapper}),this.downcastDispatcher.on("insert:$text",(t,e,n)=>{if(!n.consumable.consume(e.item,"insert"))return;const i=n.writer,o=n.mapper.toViewPosition(e.range.start),r=i.createText(e.item.data);i.insert(o,r)},{priority:"lowest"}),this.upcastDispatcher=new ka({schema:t.schema}),this.viewDocument=new oo(e),this._viewWriter=new Po(this.viewDocument),this.upcastDispatcher.on("text",(t,e,n)=>{if(n.schema.checkChild(e.modelCursor,"$text")&&n.consumable.consume(e.viewItem)){const t=n.writer.createText(e.viewItem.data);n.writer.insert(t,e.modelCursor),e.modelRange=Ts._createFromPositionAndShift(e.modelCursor,t.offsetSize),e.modelCursor=e.modelRange.end}},{priority:"lowest"}),this.upcastDispatcher.on("element",(t,e,n)=>{if(!e.modelRange&&n.consumable.consume(e.viewItem,{name:!0})){const{modelRange:t,modelCursor:i}=n.convertChildren(e.viewItem,e.modelCursor);e.modelRange=t,e.modelCursor=i}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(t,e,n)=>{if(!e.modelRange&&n.consumable.consume(e.viewItem,{name:!0})){const{modelRange:t,modelCursor:i}=n.convertChildren(e.viewItem,e.modelCursor);e.modelRange=t,e.modelCursor=i}},{priority:"lowest"}),this.decorate("init"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"})}get(t){const{rootName:e="main",trim:n="empty"}=t||{};if(!this._checkIfRootsExists([e]))throw new hn.b("datacontroller-get-non-existent-root: Attempting to get data from a non-existing root.",this);const i=this.model.document.getRoot(e);return"empty"!==n||this.model.hasContent(i,{ignoreWhitespaces:!0})?this.stringify(i):""}stringify(t){const e=this.toView(t);return this.processor.toData(e)}toView(t){const e=this.viewDocument,n=this._viewWriter;this.mapper.clearBindings();const i=Ts._createIn(t),o=new To(e);if(this.mapper.bindElements(t,o),this.downcastDispatcher.convertInsert(i,n),!t.is("documentFragment")){const e=function(t){const e=[],n=t.root.document;if(!n)return[];const i=Ts._createIn(t);for(const t of n.model.markers){const n=i.getIntersection(t.getRange());n&&e.push([t.name,n])}return e}(t);for(const[t,i]of e)this.downcastDispatcher.convertMarkerAdd(t,i,n)}return o}init(t){if(this.model.document.version)throw new hn.b("datacontroller-init-document-not-empty: Trying to set initial data to not empty document.",this);let e={};if("string"==typeof t?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new hn.b("datacontroller-init-non-existent-root: Attempting to init data on a non-existing root.",this);return this.model.enqueueChange("transparent",t=>{for(const n of Object.keys(e)){const i=this.model.document.getRoot(n);t.insert(this.parse(e[n],i),i,0)}}),Promise.resolve()}set(t){let e={};if("string"==typeof t?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new hn.b("datacontroller-set-non-existent-root: Attempting to set data on a non-existing root.",this);this.model.enqueueChange("transparent",t=>{t.setSelection(null),t.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const n of Object.keys(e)){const i=this.model.document.getRoot(n);t.remove(t.createRangeIn(i)),t.insert(this.parse(e[n],i),i,0)}})}parse(t,e="$root"){const n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}addStyleProcessorRules(t){t(this.stylesProcessor)}destroy(){this.stopListening()}_checkIfRootsExists(t){for(const e of t)if(!this.model.document.getRootNames().includes(e))return!1;return!0}}xn(_a,Ui);class va{constructor(t,e){this._helpers=new Map,this._downcast=Array.isArray(t)?t:[t],this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Array.isArray(e)?e:[e],this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){const n=this._downcast.includes(e);if(!this._upcast.includes(e)&&!n)throw new hn.b("conversion-add-alias-dispatcher-not-registered: Trying to register and alias for a dispatcher that nas not been registered.",this);this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:n})}for(t){if(!this._helpers.has(t))throw new hn.b("conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.",this);return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(const{model:e,view:n}of ya(t))this.for("upcast").elementToElement({model:e,view:n,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(const{model:e,view:n}of ya(t))this.for("upcast").elementToAttribute({view:n,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(const{model:e,view:n}of ya(t))this.for("upcast").attributeToAttribute({view:n,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:n}){if(this._helpers.has(t))throw new hn.b("conversion-group-exists: Trying to register a group name that has already been registered.",this);const i=n?new qs(e):new Js(e);this._helpers.set(t,i)}}function*ya(t){if(t.model.values)for(const e of t.model.values){const n={key:t.model.key,value:e},i=t.view[e],o=t.upcastAlso?t.upcastAlso[e]:void 0;yield*xa(n,i,o)}else yield*xa(t.model,t.view,t.upcastAlso)}function*xa(t,e,n){if(yield{model:t,view:e},n){n=Array.isArray(n)?n:[n];for(const e of n)yield{model:t,view:e}}}class Aa{constructor(t="default"){this.operations=[],this.type=t}get baseVersion(){for(const t of this.operations)if(null!==t.baseVersion)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}class Ca{constructor(t){this.baseVersion=t,this.isDocumentOperation=null!==this.baseVersion,this.batch=null}_validate(){}toJSON(){const t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t){return new this(t.baseVersion)}}class Ta{constructor(t){this.markers=new Map,this._children=new ws,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(t){return"documentFragment"===t||"model:documentFragment"===t}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){const t=[];for(const e of this._children)t.push(e.toJSON());return t}static fromJSON(t){const e=[];for(const n of t)n.name?e.push(ks.fromJSON(n)):e.push(ps.fromJSON(n));return new Ta(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(t){if("string"==typeof t)return[new ps(t)];yn(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new ps(t):t instanceof bs?new ps(t.data,t.getAttributes()):t)}(e);for(const t of n)null!==t.parent&&t._remove(),t.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const t of n)t.parent=null;return n}}function Pa(t,e){const n=(e=Ma(e)).reduce((t,e)=>t+e.offsetSize,0),i=t.parent;Na(t);const o=t.index;return i._insertChild(o,e),Ia(i,o+e.length),Ia(i,o),new Ts(t,t.getShiftedBy(n))}function Sa(t){if(!t.isFlat)throw new hn.b("operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.",this);const e=t.start.parent;Na(t.start),Na(t.end);const n=e._removeChildren(t.start.index,t.end.index-t.start.index);return Ia(e,t.start.index),n}function Ea(t,e){if(!t.isFlat)throw new hn.b("operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.",this);const n=Sa(t);return Pa(e=e._getTransformedByDeletion(t.start,t.end.offset-t.start.offset),n)}function Ma(t){const e=[];t instanceof Array||(t=[t]);for(let n=0;n<t.length;n++)if("string"==typeof t[n])e.push(new ps(t[n]));else if(t[n]instanceof bs)e.push(new ps(t[n].data,t[n].getAttributes()));else if(t[n]instanceof Ta||t[n]instanceof ws)for(const i of t[n])e.push(i);else t[n]instanceof ms&&e.push(t[n]);for(let t=1;t<e.length;t++){const n=e[t],i=e[t-1];n instanceof ps&&i instanceof ps&&Oa(n,i)&&(e.splice(t-1,2,new ps(i.data+n.data,i.getAttributes())),t--)}return e}function Ia(t,e){const n=t.getChild(e-1),i=t.getChild(e);if(n&&i&&n.is("text")&&i.is("text")&&Oa(n,i)){const o=new ps(n.data+i.data,n.getAttributes());t._removeChildren(e-1,2),t._insertChild(e-1,o)}}function Na(t){const e=t.textNode,n=t.parent;if(e){const i=t.offset-e.startOffset,o=e.index;n._removeChildren(o,1);const r=new ps(e.data.substr(0,i),e.getAttributes()),s=new ps(e.data.substr(i),e.getAttributes());n._insertChild(o,[r,s])}}function Oa(t,e){const n=t.getAttributes(),i=e.getAttributes();for(const t of n){if(t[1]!==e.getAttribute(t[0]))return!1;i.next()}return i.next().done}var Ra=function(t,e){return Ir(t,e)};class Da extends Ca{constructor(t,e,n,i,o){super(o),this.range=t.clone(),this.key=e,this.oldValue=void 0===n?null:n,this.newValue=void 0===i?null:i}get type(){return null===this.oldValue?"addAttribute":null===this.newValue?"removeAttribute":"changeAttribute"}clone(){return new Da(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Da(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new hn.b("attribute-operation-range-not-flat: The range to change is not flat.",this);for(const t of this.range.getItems({shallow:!0})){if(null!==this.oldValue&&!Ra(t.getAttribute(this.key),this.oldValue))throw new hn.b("attribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",this,{item:t,key:this.key,value:this.oldValue});if(null===this.oldValue&&null!==this.newValue&&t.hasAttribute(this.key))throw new hn.b("attribute-operation-attribute-exists: The attribute with given key already exists.",this,{node:t,key:this.key})}}_execute(){Ra(this.oldValue,this.newValue)||function(t,e,n){Na(t.start),Na(t.end);for(const i of t.getItems({shallow:!0})){const t=i.is("textProxy")?i.textNode:i;null!==n?t._setAttribute(e,n):t._removeAttribute(e),Ia(t.parent,t.index)}Ia(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new Da(Ts.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class La extends Ca{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new hn.b("detach-operation-on-document-node: Cannot detach document node.",this)}_execute(){Sa(Ts._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class ja extends Ca{constructor(t,e,n,i){super(i),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return"$graveyard"==this.targetPosition.root.rootName?"remove":"$graveyard"==this.sourcePosition.root.rootName?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(n+this.howMany>t.maxOffset)throw new hn.b("move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.",this);if(t===e&&n<i&&i<n+this.howMany)throw new hn.b("move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.",this);if(this.sourcePosition.root==this.targetPosition.root&&"prefix"==In(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())){const t=this.sourcePosition.path.length-1;if(this.targetPosition.path[t]>=n&&this.targetPosition.path[t]<n+this.howMany)throw new hn.b("move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.",this)}}_execute(){Ea(Ts._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){const n=ys.fromJSON(t.sourcePosition,e),i=ys.fromJSON(t.targetPosition,e);return new this(n,t.howMany,i,t.baseVersion)}}class Va extends Ca{constructor(t,e,n){super(n),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new ws(Ma(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const t=new ws([...this.nodes].map(t=>t._clone(!0))),e=new Va(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){const t=this.position.root.document.graveyard,e=new ys(t,[0]);return new ja(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){const t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new hn.b("insert-operation-position-invalid: Insertion position is invalid.",this)}_execute(){const t=this.nodes;this.nodes=new ws([...t].map(t=>t._clone(!0))),Pa(this.position,t)}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){const n=[];for(const e of t.nodes)e.name?n.push(ks.fromJSON(e)):n.push(ps.fromJSON(e));const i=new Va(ys.fromJSON(t.position,e),n,t.baseVersion);return i.shouldReceiveAttributes=t.shouldReceiveAttributes,i}}class za extends Ca{constructor(t,e,n,i,o,r){super(r),this.name=t,this.oldRange=e?e.clone():null,this.newRange=n?n.clone():null,this.affectsData=o,this._markers=i}get type(){return"marker"}clone(){return new za(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new za(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const t=this.newRange?"_set":"_remove";this._markers[t](this.name,this.newRange,!0,this.affectsData)}toJSON(){const t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new za(t.name,t.oldRange?Ts.fromJSON(t.oldRange,e):null,t.newRange?Ts.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}class Ba extends Ca{constructor(t,e,n,i){super(i),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}clone(){return new Ba(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Ba(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const t=this.position.nodeAfter;if(!(t instanceof ks))throw new hn.b("rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.",this);if(t.name!==this.oldName)throw new hn.b("rename-operation-wrong-name: Element to change has different name than operation's old name.",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new Ba(ys.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class Fa extends Ca{constructor(t,e,n,i,o){super(o),this.root=t,this.key=e,this.oldValue=n,this.newValue=i}get type(){return null===this.oldValue?"addRootAttribute":null===this.newValue?"removeRootAttribute":"changeRootAttribute"}clone(){return new Fa(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Fa(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new hn.b("rootattribute-operation-not-a-root: The element to change is not a root element.",this,{root:this.root,key:this.key});if(null!==this.oldValue&&this.root.getAttribute(this.key)!==this.oldValue)throw new hn.b("rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",this,{root:this.root,key:this.key});if(null===this.oldValue&&null!==this.newValue&&this.root.hasAttribute(this.key))throw new hn.b("rootattribute-operation-attribute-exists: The attribute with given key already exists.",this,{root:this.root,key:this.key})}_execute(){null!==this.newValue?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new hn.b("rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.",this,{rootName:t.root});return new Fa(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class Ua extends Ca{constructor(t,e,n,i,o){super(o),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new ys(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new Ts(this.sourcePosition,t)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new ys(this.sourcePosition.root,e)._getTransformedByMergeOperation(this),i=new Ha(t,this.howMany,this.graveyardPosition,this.baseVersion+1);return i.insertionPosition=n,i}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!t.parent)throw new hn.b("merge-operation-source-position-invalid: Merge source position is invalid.",this);if(!e.parent)throw new hn.b("merge-operation-target-position-invalid: Merge target position is invalid.",this);if(this.howMany!=t.maxOffset)throw new hn.b("merge-operation-how-many-invalid: Merge operation specifies wrong number of nodes to move.",this)}_execute(){const t=this.sourcePosition.parent;Ea(Ts._createIn(t),this.targetPosition),Ea(Ts._createOn(t),this.graveyardPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){const n=ys.fromJSON(t.sourcePosition,e),i=ys.fromJSON(t.targetPosition,e),o=ys.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,i,o,t.baseVersion)}}class Ha extends Ca{constructor(t,e,n,i){super(i),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=Ha.getInsertionPosition(t),this.insertionPosition.stickiness="toNone",this.graveyardPosition=n?n.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const t=this.insertionPosition.path.slice();return t.push(0),new ys(this.insertionPosition.root,t)}get movedRange(){const t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new Ts(this.splitPosition,t)}clone(){const t=new this.constructor(this.splitPosition,this.howMany,this.graveyardPosition,this.baseVersion);return t.insertionPosition=this.insertionPosition,t}getReversed(){const t=this.splitPosition.root.document.graveyard,e=new ys(t,[0]);return new Ua(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){const t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new hn.b("split-operation-position-invalid: Split position is invalid.",this);if(!t.parent)throw new hn.b("split-operation-split-in-root: Cannot split root element.",this);if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new hn.b("split-operation-how-many-invalid: Split operation specifies wrong number of nodes to move.",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new hn.b("split-operation-graveyard-position-invalid: Graveyard position invalid.",this)}_execute(){const t=this.splitPosition.parent;if(this.graveyardPosition)Ea(Ts._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const e=t._clone();Pa(this.insertionPosition,e)}Ea(new Ts(ys._createAt(t,this.splitPosition.offset),ys._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){const t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){const e=t.path.slice(0,-1);return e[e.length-1]++,new ys(t.root,e)}static fromJSON(t,e){const n=ys.fromJSON(t.splitPosition,e),i=ys.fromJSON(t.insertionPosition,e),o=t.graveyardPosition?ys.fromJSON(t.graveyardPosition,e):null,r=new this(n,t.howMany,o,t.baseVersion);return r.insertionPosition=i,r}}class Wa extends ks{constructor(t,e,n="main"){super(e),this._document=t,this.rootName=n}get document(){return this._document}is(t,e){return e?e===this.name&&("rootElement"===t||"model:rootElement"===t||"element"===t||"model:element"===t):"rootElement"===t||"model:rootElement"===t||"element"===t||"model:element"===t||t===this.name||t==="model:"+this.name||"node"===t||"model:node"===t}toJSON(){return this.rootName}}class qa{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new ps(t,e)}createElement(t,e){return new ks(t,e)}createDocumentFragment(){return new Ta}cloneElement(t,e=!0){return t._clone(e)}insert(t,e,n=0){if(this._assertWriterUsedCorrectly(),t instanceof ps&&""==t.data)return;const i=ys._createAt(e,n);if(t.parent){if(Qa(t.root,i.root))return void this.move(Ts._createOn(t),i);if(t.root.document)throw new hn.b("model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree. It is forbidden to move a node that was already in a document outside of it.",this);this.remove(t)}const o=i.root.document?i.root.document.version:null,r=new Va(i,t,o);if(t instanceof ps&&(r.shouldReceiveAttributes=!0),this.batch.addOperation(r),this.model.applyOperation(r),t instanceof Ta)for(const[e,n]of t.markers){const t=ys._createAt(n.root,0),o={range:new Ts(n.start._getCombined(t,i),n.end._getCombined(t,i)),usingOperation:!0,affectsData:!0};this.model.markers.has(e)?this.updateMarker(e,o):this.addMarker(e,o)}}insertText(t,e,n,i){e instanceof Ta||e instanceof ks||e instanceof ys?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,i)}insertElement(t,e,n,i){e instanceof Ta||e instanceof ks||e instanceof ys?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,i)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof Ta||e instanceof ks?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof Ta||e instanceof ks?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof Ts){const i=n.getMinimalFlatRanges();for(const n of i)Ya(this,t,e,n)}else Ga(this,t,e,n)}setAttributes(t,e){for(const[n,i]of Ln(t))this.setAttribute(n,i,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof Ts){const n=e.getMinimalFlatRanges();for(const e of n)Ya(this,t,null,e)}else Ga(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();const e=t=>{for(const e of t.getAttributeKeys())this.removeAttribute(e,t)};if(t instanceof Ts)for(const n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof Ts))throw new hn.b("writer-move-invalid-range: Invalid range to move.",this);if(!t.isFlat)throw new hn.b("writer-move-range-not-flat: Range to move is not flat.",this);const i=ys._createAt(e,n);if(i.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!Qa(t.root,i.root))throw new hn.b("writer-move-different-document: Range is going to be moved between different documents.",this);const o=t.root.document?t.root.document.version:null,r=new ja(t.start,t.end.offset-t.start.offset,i,o);this.batch.addOperation(r),this.model.applyOperation(r)}remove(t){this._assertWriterUsedCorrectly();const e=(t instanceof Ts?t:Ts._createOn(t)).getMinimalFlatRanges().reverse();for(const t of e)this._addOperationForAffectedMarkers("move",t),Ka(t.start,t.end.offset-t.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();const e=t.nodeBefore,n=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof ks))throw new hn.b("writer-merge-no-element-before: Node before merge position must be an element.",this);if(!(n instanceof ks))throw new hn.b("writer-merge-no-element-after: Node after merge position must be an element.",this);t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,n){return this.model.createPositionFromPath(t,e,n)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(t,e,n){return this.model.createSelection(t,e,n)}_mergeDetached(t){const e=t.nodeBefore,n=t.nodeAfter;this.move(Ts._createIn(n),ys._createAt(e,"end")),this.remove(n)}_merge(t){const e=ys._createAt(t.nodeBefore,"end"),n=ys._createAt(t.nodeAfter,0),i=t.root.document.graveyard,o=new ys(i,[0]),r=t.root.document.version,s=new Ua(n,t.nodeAfter.maxOffset,e,o,r);this.batch.addOperation(s),this.model.applyOperation(s)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof ks))throw new hn.b("writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.",this);const n=t.root.document?t.root.document.version:null,i=new Ba(ys._createBefore(t),t.name,e,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(t,e){this._assertWriterUsedCorrectly();let n,i,o=t.parent;if(!o.parent)throw new hn.b("writer-split-element-no-parent: Element with no parent can not be split.",this);if(e||(e=o.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new hn.b("writer-split-invalid-limit-element: Limit element is not a position ancestor.",this);do{const e=o.root.document?o.root.document.version:null,r=o.maxOffset-t.offset,s=new Ha(t,r,null,e);this.batch.addOperation(s),this.model.applyOperation(s),n||i||(n=o,i=t.parent.nextSibling),o=(t=this.createPositionAfter(t.parent)).parent}while(o!==e);return{position:t,range:new Ts(ys._createAt(n,"end"),ys._createAt(i,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new hn.b("writer-wrap-range-not-flat: Range to wrap is not flat.",this);const n=e instanceof ks?e:new ks(e);if(n.childCount>0)throw new hn.b("writer-wrap-element-not-empty: Element to wrap with is not empty.",this);if(null!==n.parent)throw new hn.b("writer-wrap-element-attached: Element to wrap with is already attached to tree model.",this);this.insert(n,t.start);const i=new Ts(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(i,ys._createAt(n,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),null===t.parent)throw new hn.b("writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.",this);this.move(Ts._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||"boolean"!=typeof e.usingOperation)throw new hn.b("writer-addMarker-no-usingOperation: The options.usingOperation parameter is required when adding a new marker.",this);const n=e.usingOperation,i=e.range,o=void 0!==e.affectsData&&e.affectsData;if(this.model.markers.has(t))throw new hn.b("writer-addMarker-marker-exists: Marker with provided name already exists.",this);if(!i)throw new hn.b("writer-addMarker-no-range: Range parameter is required when adding a new marker.",this);return n?($a(this,t,null,i,o),this.model.markers.get(t)):this.model.markers._set(t,i,n,o)}updateMarker(t,e){this._assertWriterUsedCorrectly();const n="string"==typeof t?t:t.name,i=this.model.markers.get(n);if(!i)throw new hn.b("writer-updateMarker-marker-not-exists: Marker with provided name does not exists.",this);if(!e)return void this.model.markers._refresh(i);const o="boolean"==typeof e.usingOperation,r="boolean"==typeof e.affectsData,s=r?e.affectsData:i.affectsData;if(!o&&!e.range&&!r)throw new hn.b("writer-updateMarker-wrong-options: One of the options is required - provide range, usingOperations or affectsData.",this);const a=i.getRange(),c=e.range?e.range:a;o&&e.usingOperation!==i.managedUsingOperations?e.usingOperation?$a(this,n,null,c,s):($a(this,n,a,null,s),this.model.markers._set(n,c,void 0,s)):i.managedUsingOperations?$a(this,n,a,c,s):this.model.markers._set(n,c,void 0,s)}removeMarker(t){this._assertWriterUsedCorrectly();const e="string"==typeof t?t:t.name;if(!this.model.markers.has(e))throw new hn.b("writer-removeMarker-no-marker: Trying to remove marker which does not exist.",this);const n=this.model.markers.get(e);if(!n.managedUsingOperations)return void this.model.markers._remove(e);$a(this,e,n.getRange(),null,n.affectsData)}setSelection(t,e,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),"string"==typeof t)this._setSelectionAttribute(t,e);else for(const[e,n]of Ln(t))this._setSelectionAttribute(e,n)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),"string"==typeof t)this._removeSelectionAttribute(t);else for(const e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const i=Bs._getStoreAttributeKey(t);this.setAttribute(i,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){const e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){const n=Bs._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new hn.b("writer-incorrect-use: Trying to use a writer outside the change() block.",this)}_addOperationForAffectedMarkers(t,e){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const i=n.getRange();let o=!1;if("move"===t)o=e.containsPosition(i.start)||e.start.isEqual(i.start)||e.containsPosition(i.end)||e.end.isEqual(i.end);else{const t=e.nodeBefore,n=e.nodeAfter,r=i.start.parent==t&&i.start.isAtEnd,s=i.end.parent==n&&0==i.end.offset,a=i.end.nodeAfter==n,c=i.start.nodeAfter==n;o=r||s||a||c}o&&this.updateMarker(n.name,{range:i})}}}function Ya(t,e,n,i){const o=t.model,r=o.document;let s,a,c,l=i.start;for(const t of i.getWalker({shallow:!0}))c=t.item.getAttribute(e),s&&a!=c&&(a!=n&&d(),l=s),s=t.nextPosition,a=c;function d(){const i=new Ts(l,s),c=i.root.document?r.version:null,d=new Da(i,e,a,n,c);t.batch.addOperation(d),o.applyOperation(d)}s instanceof ys&&s!=l&&a!=n&&d()}function Ga(t,e,n,i){const o=t.model,r=o.document,s=i.getAttribute(e);let a,c;if(s!=n){if(i.root===i){const t=i.document?r.version:null;c=new Fa(i,e,s,n,t)}else{a=new Ts(ys._createBefore(i),t.createPositionAfter(i));const o=a.root.document?r.version:null;c=new Da(a,e,s,n,o)}t.batch.addOperation(c),o.applyOperation(c)}}function $a(t,e,n,i,o){const r=t.model,s=r.document,a=new za(e,n,i,r.markers,o,s.version);t.batch.addOperation(a),r.applyOperation(a)}function Ka(t,e,n,i){let o;if(t.root.document){const n=i.document,r=new ys(n.graveyard,[0]);o=new ja(t,e,r,n.version)}else o=new La(t,e);n.addOperation(o),i.applyOperation(o)}function Qa(t,e){return t===e||t instanceof Wa&&e instanceof Wa}class Ja{constructor(t){this._markerCollection=t,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null}get isEmpty(){return 0==this._changesInElement.size&&0==this._changedMarkers.size}refreshItem(t){if(this._isInInsertedElement(t.parent))return;this._markRemove(t.parent,t.startOffset,t.offsetSize),this._markInsert(t.parent,t.startOffset,t.offsetSize);const e=Ts._createOn(t);for(const t of this._markerCollection.getMarkersIntersectingRange(e)){const e=t.getRange();this.bufferMarkerChange(t.name,e,e,t.affectsData)}this._cachedChanges=null}bufferOperation(t){switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const e of t.range.getItems({shallow:!0}))this._isInInsertedElement(e.parent)||this._markAttribute(e);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const e=this._isInInsertedElement(t.sourcePosition.parent),n=this._isInInsertedElement(t.targetPosition.parent);e||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),n||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const e=Ts._createFromPositionAndShift(t.position,1);for(const t of this._markerCollection.getMarkersIntersectingRange(e)){const e=t.getRange();this.bufferMarkerChange(t.name,e,e,t.affectsData)}break}case"split":{const e=t.splitPosition.parent;this._isInInsertedElement(e)||this._markRemove(e,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const e=t.sourcePosition.parent;this._isInInsertedElement(e.parent)||this._markRemove(e.parent,e.startOffset,1);const n=t.graveyardPosition.parent;this._markInsert(n,t.graveyardPosition.offset,1);const i=t.targetPosition.parent;this._isInInsertedElement(i)||this._markInsert(i,t.targetPosition.offset,e.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n,i){const o=this._changedMarkers.get(t);o?(o.newRange=n,o.affectsData=i,null==o.oldRange&&null==o.newRange&&this._changedMarkers.delete(t)):this._changedMarkers.set(t,{oldRange:e,newRange:n,affectsData:i})}getMarkersToRemove(){const t=[];for(const[e,n]of this._changedMarkers)null!=n.oldRange&&t.push({name:e,range:n.oldRange});return t}getMarkersToAdd(){const t=[];for(const[e,n]of this._changedMarkers)null!=n.newRange&&t.push({name:e,range:n.newRange});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(t=>({name:t[0],data:{oldRange:t[1].oldRange,newRange:t[1].newRange}}))}hasDataChanges(){for(const[,t]of this._changedMarkers)if(t.affectsData)return!0;return this._changesInElement.size>0}getChanges(t={includeChangesInGraveyard:!1}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();const e=[];for(const t of this._changesInElement.keys()){const n=this._changesInElement.get(t).sort((t,e)=>t.offset===e.offset?t.type!=e.type?"remove"==t.type?-1:1:0:t.offset<e.offset?-1:1),i=this._elementSnapshots.get(t),o=Za(t.getChildren()),r=Xa(i.length,n);let s=0,a=0;for(const n of r)if("i"===n)e.push(this._getInsertDiff(t,s,o[s].name)),s++;else if("r"===n)e.push(this._getRemoveDiff(t,s,i[a].name)),a++;else if("a"===n){const n=o[s].attributes,r=i[a].attributes;let c;if("$text"==o[s].name)c=new Ts(ys._createAt(t,s),ys._createAt(t,s+1));else{const e=t.offsetToIndex(s);c=new Ts(ys._createAt(t,s),ys._createAt(t.getChild(e),0))}e.push(...this._getAttributesDiff(c,r,n)),s++,a++}else s++,a++}e.sort((t,e)=>t.position.root!=e.position.root?t.position.root.rootName<e.position.root.rootName?-1:1:t.position.isEqual(e.position)?t.changeCount-e.changeCount:t.position.isBefore(e.position)?-1:1);for(let t=1;t<e.length;t++){const n=e[t-1],i=e[t],o="remove"==n.type&&"remove"==i.type&&"$text"==n.name&&"$text"==i.name&&n.position.isEqual(i.position),r="insert"==n.type&&"insert"==i.type&&"$text"==n.name&&"$text"==i.name&&n.position.parent==i.position.parent&&n.position.offset+n.length==i.position.offset,s="attribute"==n.type&&"attribute"==i.type&&n.position.parent==i.position.parent&&n.range.isFlat&&i.range.isFlat&&n.position.offset+n.length==i.position.offset&&n.attributeKey==i.attributeKey&&n.attributeOldValue==i.attributeOldValue&&n.attributeNewValue==i.attributeNewValue;(o||r||s)&&(e[t-1].length++,s&&(e[t-1].range.end=e[t-1].range.end.getShiftedBy(1)),e.splice(t,1),t--)}for(const t of e)delete t.changeCount,"attribute"==t.type&&(delete t.position,delete t.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e.slice(),this._cachedChanges=e.slice().filter(tc),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard:this._cachedChanges}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._cachedChanges=null}_markInsert(t,e,n){const i={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i)}_markRemove(t,e,n){const i={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){const e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);const n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let t=0;t<n.length;t++)n[t].howMany<1&&(n.splice(t,1),t--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,Za(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(const n of e){const i=t.offset+t.howMany,o=n.offset+n.howMany;if("insert"==t.type&&("insert"==n.type&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<o&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),"remove"==n.type&&t.offset<n.offset&&(n.offset+=t.howMany),"attribute"==n.type))if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<o){const o=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:i,howMany:o-n.howMany,count:this._changeCount++})}if("remove"==t.type){if("insert"==n.type)if(i<=n.offset)n.offset-=t.howMany;else if(i<=o)if(t.offset<n.offset){const e=i-n.offset;n.offset=t.offset,n.howMany-=e,t.nodesToHandle-=e}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<o){const e=o-t.offset;n.howMany-=e,t.nodesToHandle-=e}if("remove"==n.type&&(i<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),"attribute"==n.type)if(i<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){const e=i-n.offset;n.offset=t.offset,n.howMany-=e}else if(t.offset<o)if(i<=o){const i=n.howMany;n.howMany=t.offset-n.offset;const o=i-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:o,count:this._changeCount++})}else n.howMany-=o-t.offset}if("attribute"==t.type){if("insert"==n.type)if(t.offset<n.offset&&i>n.offset){if(i>o){const t={type:"attribute",offset:o,howMany:i-o,count:this._changeCount++};this._handleChange(t,e),e.push(t)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<o&&(i>o?(t.nodesToHandle=i-o,t.offset=o):t.nodesToHandle=0);if("remove"==n.type&&t.offset<n.offset&&i>n.offset){const o={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(o,e),e.push(o),t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}"attribute"==n.type&&(t.offset>=n.offset&&i<=o?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&i>=o&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:ys._createAt(t,e),name:n,length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:ys._createAt(t,e),name:n,length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){const i=[];n=new Map(n);for(const[o,r]of e){const e=n.has(o)?n.get(o):null;e!==r&&i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:o,attributeOldValue:r,attributeNewValue:e,changeCount:this._changeCount++}),n.delete(o)}for(const[e,o]of n)i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:e,attributeOldValue:null,attributeNewValue:o,changeCount:this._changeCount++});return i}_isInInsertedElement(t){const e=t.parent;if(!e)return!1;const n=this._changesInElement.get(e),i=t.startOffset;if(n)for(const t of n)if("insert"==t.type&&i>=t.offset&&i<t.offset+t.howMany)return!0;return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){const i=new Ts(ys._createAt(t,e),ys._createAt(t,e+n));for(const t of i.getItems({shallow:!0}))t.is("element")&&(this._elementSnapshots.delete(t),this._changesInElement.delete(t),this._removeAllNestedChanges(t,0,t.maxOffset))}}function Za(t){const e=[];for(const n of t)if(n.is("text"))for(let t=0;t<n.data.length;t++)e.push({name:"$text",attributes:new Map(n.getAttributes())});else e.push({name:n.name,attributes:new Map(n.getAttributes())});return e}function Xa(t,e){const n=[];let i=0,o=0;for(const t of e){if(t.offset>i){for(let e=0;e<t.offset-i;e++)n.push("e");o+=t.offset-i}if("insert"==t.type){for(let e=0;e<t.howMany;e++)n.push("i");i=t.offset+t.howMany}else if("remove"==t.type){for(let e=0;e<t.howMany;e++)n.push("r");i=t.offset,o+=t.howMany}else n.push(..."a".repeat(t.howMany).split("")),i=t.offset+t.howMany,o+=t.howMany}if(o<t)for(let e=0;e<t-o-i;e++)n.push("e");return n}function tc(t){const e=t.position&&"$graveyard"==t.position.root.rootName,n=t.range&&"$graveyard"==t.range.root.rootName;return!e&&!n}class ec{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set}addOperation(t){this._operations.includes(t)||this._operations.push(t)}getOperations(t=0,e=Number.POSITIVE_INFINITY){return t<0?[]:this._operations.slice(t,e)}getOperation(t){return this._operations[t]}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}}function nc(t,e){return!!(n=t.charAt(e-1))&&1==n.length&&/[\ud800-\udbff]/.test(n)&&function(t){return!!t&&1==t.length&&/[\udc00-\udfff]/.test(t)}(t.charAt(e));var n}function ic(t,e){return!!(n=t.charAt(e))&&1==n.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(n);var n}class oc{constructor(t){this.model=t,this.version=0,this.history=new ec(this),this.selection=new Bs(this),this.roots=new An({idProperty:"rootName"}),this.differ=new Ja(t.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root","$graveyard"),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];if(n.isDocumentOperation&&n.baseVersion!==this.version)throw new hn.b("model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.",this,{operation:n})},{priority:"highest"}),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&this.differ.bufferOperation(n)},{priority:"high"}),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&(this.version++,this.history.addOperation(n))},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(t,e,n,i)=>{this.differ.bufferMarkerChange(e.name,n,i,e.affectsData),null===n&&e.on("change",(t,n)=>{this.differ.bufferMarkerChange(e.name,n,e.getRange(),e.affectsData)})})}get graveyard(){return this.getRoot("$graveyard")}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new hn.b("model-document-createRoot-name-exists: Root with specified name already exists.",this,{name:e});const n=new Wa(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(){return Array.from(this.roots,t=>t.rootName).filter(t=>"$graveyard"!=t)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){const t=Nn(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const t of this.roots)if(t!==this.graveyard)return t;return this.graveyard}_getDefaultRange(){const t=this._getDefaultRoot(),e=this.model,n=e.schema,i=e.createPositionFromPath(t,[0]);return n.getNearestSelectionRange(i)||e.createRange(i)}_validateSelectionRange(t){return rc(t.start)&&rc(t.end)}_callPostFixers(t){let e=!1;do{for(const n of this._postFixers)if(this.selection.refresh(),e=n(t),e)break}while(e)}}function rc(t){const e=t.textNode;if(e){const n=e.data,i=t.offset-e.startOffset;return!nc(n,i)&&!ic(n,i)}return!0}xn(oc,mn);class sc{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){return this._markers.has(t)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,i=!1){const o=t instanceof ac?t.name:t,r=this._markers.get(o);if(r){const t=r.getRange();let s=!1;return t.isEqual(e)||(r._attachLiveRange(js.fromRange(e)),s=!0),n!=r.managedUsingOperations&&(r._managedUsingOperations=n,s=!0),"boolean"==typeof i&&i!=r.affectsData&&(r._affectsData=i,s=!0),s&&this.fire("update:"+o,r,t,e),r}const s=js.fromRange(e),a=new ac(o,s,n,i);return this._markers.set(o,a),this.fire("update:"+o,a,null,e),a}_remove(t){const e=t instanceof ac?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire("update:"+e,n,n.getRange(),null),this._destroyMarker(n),!0)}_refresh(t){const e=t instanceof ac?t.name:t,n=this._markers.get(e);if(!n)throw new hn.b("markercollection-refresh-marker-not-exists: Marker with provided name does not exists.",this);const i=n.getRange();this.fire("update:"+e,n,i,i,n.managedUsingOperations,n.affectsData)}*getMarkersAtPosition(t){for(const e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(const e of this)null!==e.getRange().getIntersection(t)&&(yield e)}destroy(){for(const t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(const e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}xn(sc,mn);class ac{constructor(t,e,n,i){this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new hn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new hn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._affectsData}getStart(){if(!this._liveRange)throw new hn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new hn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new hn.b("marker-destroyed: Cannot use a destroyed marker instance.",this);return this._liveRange.toRange()}is(t){return"marker"===t||"model:marker"===t}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}xn(ac,mn);class cc extends Ca{get type(){return"noop"}clone(){return new cc(this.baseVersion)}getReversed(){return new cc(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const lc={};lc[Da.className]=Da,lc[Va.className]=Va,lc[za.className]=za,lc[ja.className]=ja,lc[cc.className]=cc,lc[Ca.className]=Ca,lc[Ba.className]=Ba,lc[Fa.className]=Fa,lc[Ha.className]=Ha,lc[Ua.className]=Ua;class dc extends ys{constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new hn.b("model-liveposition-root-not-rootelement: LivePosition's root has to be an instance of RootElement.",t);uc.call(this)}detach(){this.stopListening()}is(t){return"livePosition"===t||"model:livePosition"===t||"position"==t||"model:position"===t}toPosition(){return new ys(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}function uc(){this.listenTo(this.root.document.model,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&hc.call(this,n)},{priority:"low"})}function hc(t){const e=this.getTransformedByOperation(t);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}xn(dc,mn);class fc{constructor(t,e,n){this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(t,e){t=Array.from(t);for(let n=0;n<t.length;n++){const i=t[n];this._handleNode(i,{isFirst:0===n&&e.isFirst,isLast:n===t.length-1&&e.isLast})}this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}getSelectionRange(){return this.nodeToSelect?Ts._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new Ts(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t,e){if(this.schema.isObject(t))return void this._handleObject(t,e);this._checkAndSplitToAllowedPosition(t,e)?(this._insert(t),this._mergeSiblingsOf(t,e)):this._handleDisallowedNode(t,e)}_handleObject(t,e){this._checkAndSplitToAllowedPosition(t)?this._insert(t):this._tryAutoparagraphing(t,e)}_handleDisallowedNode(t,e){t.is("element")?this.handleNodes(t.getChildren(),e):this._tryAutoparagraphing(t,e)}_insert(t){if(!this.schema.checkChild(this.position,t))throw new hn.b("insertcontent-wrong-position: Given node cannot be inserted on the given position.",this,{node:t,position:this.position});const e=dc.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this.writer.insert(t,this.position),this.position=e.toPosition(),e.detach(),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=t:this.nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=dc.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=dc.fromPosition(t,"toNext"))}_mergeSiblingsOf(t,e){if(!(t instanceof ks))return;const n=this._canMergeLeft(t,e),i=this._canMergeRight(t,e),o=dc._createBefore(t);o.stickiness="toNext";const r=dc._createAfter(t);if(r.stickiness="toNext",n){const t=dc.fromPosition(this.position);t.stickiness="toNext",this._affectedStart.isEqual(o)&&(this._affectedStart.detach(),this._affectedStart=dc._createAt(o.nodeBefore,"end","toPrevious")),this.writer.merge(o),o.isEqual(this._affectedEnd)&&e.isLast&&(this._affectedEnd.detach(),this._affectedEnd=dc._createAt(o.nodeBefore,"end","toNext")),this.position=t.toPosition(),t.detach()}if(i){if(!this.position.isEqual(r))throw new hn.b("insertcontent-invalid-insertion-position",this);this.position=ys._createAt(r.nodeBefore,"end");const t=dc.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(r)&&(this._affectedEnd.detach(),this._affectedEnd=dc._createAt(r.nodeBefore,"end","toNext")),this.writer.merge(r),r.getShiftedBy(-1).isEqual(this._affectedStart)&&e.isFirst&&(this._affectedStart.detach(),this._affectedStart=dc._createAt(r.nodeBefore,0,"toPrevious")),this.position=t.toPosition(),t.detach()}(n||i)&&this._filterAttributesOf.push(this.position.parent),o.detach(),r.detach()}_canMergeLeft(t,e){const n=t.previousSibling;return e.isFirst&&n instanceof ks&&this.canMergeWith.has(n)&&this.model.schema.checkMerge(n,t)}_canMergeRight(t,e){const n=t.nextSibling;return e.isLast&&n instanceof ks&&this.canMergeWith.has(n)&&this.model.schema.checkMerge(t,n)}_tryAutoparagraphing(t,e){const n=this.writer.createElement("paragraph");this._getAllowedIn(n,this.position.parent)&&this.schema.checkChild(n,t)&&(n._appendChild(t),this._handleNode(n,e))}_checkAndSplitToAllowedPosition(t){const e=this._getAllowedIn(t,this.position.parent);if(!e)return!1;for(;e!=this.position.parent;){if(this.schema.isLimit(this.position.parent))return!1;if(this.position.isAtStart){const t=this.position.parent;this.position=this.writer.createPositionBefore(t),t.isEmpty&&t.parent===e&&this.writer.remove(t)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const t=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=t,this.canMergeWith.add(this.position.nodeAfter)}}return!0}_getAllowedIn(t,e){return this.schema.checkChild(e,t)?e:e.parent?this._getAllowedIn(t,e.parent):null}}function gc(t,e,n={}){if(e.isCollapsed)return;const i=e.getFirstRange();if("$graveyard"==i.root.rootName)return;const o=t.schema;t.change(t=>{if(!n.doNotResetEntireContent&&function(t,e){const n=t.getLimitElement(e);if(!e.containsEntireContent(n))return!1;const i=e.getFirstRange();if(i.start.parent==i.end.parent)return!1;return t.checkChild(n,"paragraph")}(o,e))return void function(t,e){const n=t.model.schema.getLimitElement(e);t.remove(t.createRangeIn(n)),pc(t,t.createPositionAt(n,0),e)}(t,e);const[r,s]=function(t){const e=t.root.document.model,n=t.start;let i=t.end;if(e.hasContent(t,{ignoreMarkers:!0})){const n=function(t){const e=t.parent,n=e.root.document.model.schema,i=e.getAncestors({parentFirst:!0,includeSelf:!0});for(const t of i){if(n.isLimit(t))return null;if(n.isBlock(t))return t}}(i);if(n&&i.isTouching(e.createPositionAt(n,0))){const n=e.createSelection(t);e.modifySelection(n,{direction:"backward"}),i=n.getLastPosition()}}return[dc.fromPosition(n,"toPrevious"),dc.fromPosition(i,"toNext")]}(i);i.start.isTouching(i.end)||t.remove(i),n.leaveUnmerged||(!function(t,e,n){const i=t.model;if(!mc(t.model.schema,e,n))return;const[o,r]=function(t,e){const n=t.getAncestors(),i=e.getAncestors();let o=0;for(;n[o]&&n[o]==i[o];)o++;return[n[o],i[o]]}(e,n);!i.hasContent(o,{ignoreMarkers:!0})&&i.hasContent(r,{ignoreMarkers:!0})?function t(e,n,i,o){const r=n.parent,s=i.parent;if(r==o||s==o)return;n=e.createPositionAfter(r),(i=e.createPositionBefore(s)).isEqual(n)||e.insert(r,i);for(;n.parent.isEmpty;){const t=n.parent;n=e.createPositionBefore(t),e.remove(t)}if(i=e.createPositionBefore(s),function(t,e){const n=e.nodeBefore,i=e.nodeAfter;n.name!=i.name&&t.rename(n,i.name);t.clearAttributes(n),t.setAttributes(Object.fromEntries(i.getAttributes()),n),t.merge(e)}(e,i),!mc(e.model.schema,n,i))return;t(e,n,i,o)}(t,e,n,o.parent):function t(e,n,i,o){const r=n.parent,s=i.parent;if(r==o||s==o)return;n=e.createPositionAfter(r),(i=e.createPositionBefore(s)).isEqual(n)||e.insert(s,n);e.merge(n);for(;i.parent.isEmpty;){const t=i.parent;i=e.createPositionBefore(t),e.remove(t)}if(!mc(e.model.schema,n,i))return;t(e,n,i,o)}(t,e,n,o.parent)}(t,r,s),o.removeDisallowedAttributes(r.parent.getChildren(),t)),bc(t,e,r),!n.doNotAutoparagraph&&function(t,e){const n=t.checkChild(e,"$text"),i=t.checkChild(e,"paragraph");return!n&&i}(o,r)&&pc(t,r,e),r.detach(),s.detach()})}function mc(t,e,n){const i=e.parent,o=n.parent;return i!=o&&(!t.isLimit(i)&&!t.isLimit(o)&&function(t,e,n){const i=new Ts(t,e);for(const t of i.getWalker())if(n.isLimit(t.item))return!1;return!0}(e,n,t))}function pc(t,e,n){const i=t.createElement("paragraph");t.insert(i,e),bc(t,n,t.createPositionAt(i,0))}function bc(t,e,n){e instanceof Bs?t.setSelection(n):e.setTo(n)}function wc(t,e){if("text"==e.type)return"word"===t.unit?function(t,e){let n=t.position.textNode;if(n){let i=t.position.offset-n.startOffset;for(;!_c(n.data,i,e)&&!vc(n,i,e);){t.next();const o=e?t.position.nodeAfter:t.position.nodeBefore;if(o&&o.is("text")){const i=o.data.charAt(e?0:o.data.length-1);' ,.?!:;"-()'.includes(i)||(t.next(),n=t.position.textNode)}i=t.position.offset-n.startOffset}}return t.position}(t.walker,t.isForward):function(t,e){const n=t.position.textNode;if(n){const i=n.data;let o=t.position.offset-n.startOffset;for(;nc(i,o)||"character"==e&&ic(i,o);)t.next(),o=t.position.offset-n.startOffset}return t.position}(t.walker,t.unit,t.isForward);if(e.type==(t.isForward?"elementStart":"elementEnd")){if(t.schema.isObject(e.item))return ys._createAt(e.item,t.isForward?"after":"before");if(t.schema.checkChild(e.nextPosition,"$text"))return e.nextPosition}else{if(t.schema.isLimit(e.item))return void t.walker.skip(()=>!0);if(t.schema.checkChild(e.nextPosition,"$text"))return e.nextPosition}}function kc(t,e){const n=t.root,i=ys._createAt(n,e?"end":0);return e?new Ts(t,i):new Ts(i,t)}function _c(t,e,n){const i=e+(n?0:-1);return' ,.?!:;"-()'.includes(t.charAt(i))}function vc(t,e,n){return e===(n?t.endOffset:0)}function yc(t,e){const n=[];Array.from(t.getItems({direction:"backward"})).map(t=>e.createRangeOn(t)).filter(e=>(e.start.isAfter(t.start)||e.start.isEqual(t.start))&&(e.end.isBefore(t.end)||e.end.isEqual(t.end))).forEach(t=>{n.push(t.start.parent),e.remove(t)}),n.forEach(t=>{let n=t;for(;n.parent&&n.isEmpty;){const t=e.createRangeOn(n);n=n.parent,e.remove(t)}})}function xc(t){t.document.registerPostFixer(e=>function(t,e){const n=e.document.selection,i=e.schema,o=[];let r=!1;for(const t of n.getRanges()){const e=Ac(t,i);e&&!e.isEqual(t)?(o.push(e),r=!0):o.push(t)}r&&t.setSelection(function(t){const e=[];e.push(t.shift());for(const n of t){const t=e.pop();if(n.isIntersecting(t)){const i=t.start.isAfter(n.start)?n.start:t.start,o=t.end.isAfter(n.end)?t.end:n.end,r=new Ts(i,o);e.push(r)}else e.push(t),e.push(n)}return e}(o),{backward:n.isBackward})}(e,t))}function Ac(t,e){return t.isCollapsed?function(t,e){const n=t.start,i=e.getNearestSelectionRange(n);if(!i)return null;if(!i.isCollapsed)return i;const o=i.start;if(n.isEqual(o))return null;return new Ts(o)}(t,e):function(t,e){const n=t.start,i=t.end,o=e.checkChild(n,"$text"),r=e.checkChild(i,"$text"),s=e.getLimitElement(n),a=e.getLimitElement(i);if(s===a){if(o&&r)return null;if(function(t,e,n){const i=t.nodeAfter&&!n.isLimit(t.nodeAfter)||n.checkChild(t,"$text"),o=e.nodeBefore&&!n.isLimit(e.nodeBefore)||n.checkChild(e,"$text");return i||o}(n,i,e)){const t=n.nodeAfter&&e.isObject(n.nodeAfter)?null:e.getNearestSelectionRange(n,"forward"),o=i.nodeBefore&&e.isObject(i.nodeBefore)?null:e.getNearestSelectionRange(i,"backward"),r=t?t.start:n,s=o?o.start:i;return new Ts(r,s)}}const c=s&&!s.is("rootElement"),l=a&&!a.is("rootElement");if(c||l){const t=n.nodeAfter&&i.nodeBefore&&n.nodeAfter.parent===i.nodeBefore.parent,o=c&&(!t||!Tc(n.nodeAfter,e)),r=l&&(!t||!Tc(i.nodeBefore,e));let d=n,u=i;return o&&(d=ys._createBefore(Cc(s,e))),r&&(u=ys._createAfter(Cc(a,e))),new Ts(d,u)}return null}(t,e)}function Cc(t,e){let n=t,i=n;for(;e.isLimit(i)&&i.parent;)n=i,i=i.parent;return n}function Tc(t,e){return t&&e.isObject(t)}class Pc{constructor(){this.markers=new sc,this.document=new oc(this),this.schema=new sa,this._pendingChanges=[],this._currentWriter=null,["insertContent","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$block",{allowIn:"$root",isBlock:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",isLimit:!0}),this.schema.extend("$text",{allowIn:"$clipboardHolder"}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if("$marker"===e.name)return!0}),xc(this)}change(t){try{return 0===this._pendingChanges.length?(this._pendingChanges.push({batch:new Aa,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}catch(t){hn.b.rethrowUnexpectedError(t,this)}}enqueueChange(t,e){try{"string"==typeof t?t=new Aa(t):"function"==typeof t&&(e=t,t=new Aa),this._pendingChanges.push({batch:t,callback:e}),1==this._pendingChanges.length&&this._runPendingChanges()}catch(t){hn.b.rethrowUnexpectedError(t,this)}}applyOperation(t){t._execute()}insertContent(t,e,n){return function(t,e,n,i){return t.change(o=>{let r;r=n?n instanceof Ns||n instanceof Bs?n:o.createSelection(n,i):t.document.selection,r.isCollapsed||t.deleteContent(r,{doNotAutoparagraph:!0});const s=new fc(t,o,r.anchor);let a;a=e.is("documentFragment")?e.getChildren():[e],s.handleNodes(a,{isFirst:!0,isLast:!0});const c=s.getSelectionRange();c&&(r instanceof Bs?o.setSelection(c):r.setTo(c));const l=s.getAffectedRange()||t.createRange(r.anchor);return s.destroy(),l})}(this,t,e,n)}deleteContent(t,e){gc(this,t,e)}modifySelection(t,e){!function(t,e,n={}){const i=t.schema,o="backward"!=n.direction,r=n.unit?n.unit:"character",s=e.focus,a=new _s({boundaries:kc(s,o),singleCharacters:!0,direction:o?"forward":"backward"}),c={walker:a,schema:i,isForward:o,unit:r};let l;for(;l=a.next();){if(l.done)return;const n=wc(c,l.value);if(n)return void(e instanceof Bs?t.change(t=>{t.setSelectionFocus(n)}):e.setFocus(n))}}(this,t,e)}getSelectedContent(t){return function(t,e){return t.change(t=>{const n=t.createDocumentFragment(),i=e.getFirstRange();if(!i||i.isCollapsed)return n;const o=i.start.root,r=i.start.getCommonPath(i.end),s=o.getNodeByPath(r);let a;a=i.start.parent==i.end.parent?i:t.createRange(t.createPositionAt(s,i.start.path[r.length]),t.createPositionAt(s,i.end.path[r.length]+1));const c=a.end.offset-a.start.offset;for(const e of a.getItems({shallow:!0}))e.is("textProxy")?t.appendText(e.data,e.getAttributes(),n):t.append(t.cloneElement(e,!0),n);if(a!=i){const e=i._getTransformedByMove(a.start,t.createPositionAt(n,0),c)[0],o=t.createRange(t.createPositionAt(n,0),e.start);yc(t.createRange(e.end,t.createPositionAt(n,"end")),t),yc(o,t)}return n})}(this,t)}hasContent(t,e={}){const n=t instanceof ks?Ts._createIn(t):t;if(n.isCollapsed)return!1;const{ignoreWhitespaces:i=!1,ignoreMarkers:o=!1}=e;if(!o)for(const t of this.markers.getMarkersIntersectingRange(n))if(t.affectsData)return!0;for(const t of n.getItems())if(t.is("textProxy")){if(!i)return!0;if(-1!==t.data.search(/\S/))return!0}else if(this.schema.isObject(t))return!0;return!1}createPositionFromPath(t,e,n){return new ys(t,e,n)}createPositionAt(t,e){return ys._createAt(t,e)}createPositionAfter(t){return ys._createAfter(t)}createPositionBefore(t){return ys._createBefore(t)}createRange(t,e){return new Ts(t,e)}createRangeIn(t){return Ts._createIn(t)}createRangeOn(t){return Ts._createOn(t)}createSelection(t,e,n){return new Ns(t,e,n)}createBatch(t){return new Aa(t)}createOperationFromJSON(t){return class{static fromJSON(t,e){return lc[t.__className].fromJSON(t,e)}}.fromJSON(t,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const t=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const e=this._pendingChanges[0].batch;this._currentWriter=new qa(this,e);const n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),t}}xn(Pc,Ui);class Sc{constructor(){this._listener=Object.create(ur)}listenTo(t){this._listener.listenTo(t,"keydown",(t,e)=>{this._listener.fire("_keydown:"+po(e),e)})}set(t,e,n={}){const i=bo(t),o=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(t,n)=>{e(n,()=>{n.preventDefault(),n.stopPropagation(),t.stop()}),t.return=!0},{priority:o})}press(t){return!!this._listener.fire("_keydown:"+po(t),t)}destroy(){this._listener.stopListening()}}class Ec extends Sc{constructor(t){super(),this.editor=t}set(t,e,n={}){if("string"==typeof e){const t=e;e=(e,n)=>{this.editor.execute(t),n()}}super.set(t,e,n)}}class Mc{constructor(t={}){this._context=t.context||new Mn({language:t.language}),this._context._addEditor(this,!t.context);const e=Array.from(this.constructor.builtinPlugins||[]);this.config=new on(t,this.constructor.defaultConfig),this.config.define("plugins",e),this.config.define(this._context._getEditorConfig()),this.plugins=new Cn(this,e,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this.commands=new ia,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.set("isReadOnly",!1),this.model=new Pc;const n=new Mi;this.data=new _a(this.model,n),this.editing=new na(this.model,n),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new va([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new Ec(this),this.keystrokes.listenTo(this.editing.view.document)}initPlugins(){const t=this.config,e=t.get("plugins"),n=t.get("removePlugins")||[],i=t.get("extraPlugins")||[];return this.plugins.init(e.concat(i),n)}destroy(){let t=Promise.resolve();return"initializing"==this.state&&(t=new Promise(t=>this.once("ready",t))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...t){try{this.commands.execute(...t)}catch(t){hn.b.rethrowUnexpectedError(t,this)}}}xn(Mc,Ui);var Ic={setData(t){this.data.set(t)},getData(t){return this.data.get(t)}};var Nc={updateSourceElement(){if(!this.sourceElement)throw new hn.b("editor-missing-sourceelement: Cannot update the source element of a detached editor.",this);var t,e;t=this.sourceElement,e=this.data.get(),t instanceof HTMLTextAreaElement&&(t.value=e),t.innerHTML=e}};class Oc{getHtml(t){const e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class Rc{constructor(t){this._domParser=new DOMParser,this._domConverter=new sr(t,{blockFillerMode:"nbsp"}),this._htmlWriter=new Oc}toData(t){const e=this._domConverter.viewToDom(t,document);return this._htmlWriter.getHtml(e)}toView(t){const e=this._toDom(t);return this._domConverter.domToView(e)}_toDom(t){const e=this._domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),i=e.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class Dc{constructor(t){this.editor=t,this._components=new Map}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){if(this.has(t))throw new hn.b("componentfactory-item-exists: The item already exists in the component factory.",this,{name:t});this._components.set(Lc(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new hn.b("componentfactory-item-missing: The required component is not registered in the factory.",this,{name:t});return this._components.get(Lc(t)).callback(this.editor.locale)}has(t){return this._components.has(Lc(t))}}function Lc(t){return String(t).toLowerCase()}class jc{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(t){if(this._elements.has(t))throw new hn.b("focusTracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(t),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}xn(jc,ur),xn(jc,Ui);class Vc{constructor(t){this.editor=t,this.componentFactory=new Dc(t),this.focusTracker=new jc,this._editableElementsMap=new Map,this.listenTo(t.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}}xn(Vc,mn);n(13);const zc=new WeakMap;function Bc(t){const{view:e,element:n,text:i,isDirectHost:o=!0}=t,r=e.document;zc.has(r)||(zc.set(r,new Map),r.registerPostFixer(t=>Uc(r,t))),zc.get(r).set(n,{text:i,isDirectHost:o}),e.change(t=>Uc(r,t))}function Fc(t,e){return!!e.hasClass("ck-placeholder")&&(t.removeClass("ck-placeholder",e),!0)}function Uc(t,e){const n=zc.get(t);let i=!1;for(const[t,o]of n)Hc(e,t,o)&&(i=!0);return i}function Hc(t,e,n){const{text:i,isDirectHost:o}=n,r=o?e:function(t){if(1===t.childCount){const e=t.getChild(0);if(e.is("element")&&!e.is("uiElement"))return e}return null}(e);let s=!1;return!!r&&(n.hostElement=r,r.getAttribute("data-placeholder")!==i&&(t.setAttribute("data-placeholder",i,r),s=!0),!function(t){if(!t.isAttached())return!1;const e=!Array.from(t.getChildren()).some(t=>!t.is("uiElement")),n=t.document;if(!n.isFocused&&e)return!0;const i=n.selection.anchor;return!(!e||!i||i.parent===t)}(r)?Fc(t,r)&&(s=!0):function(t,e){return!e.hasClass("ck-placeholder")&&(t.addClass("ck-placeholder",e),!0)}(t,r)&&(s=!0),s)}class Wc{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}class qc extends Vc{constructor(t,e){var n;super(t),this.view=e,this._toolbarConfig=(n=t.config.get("toolbar"),Array.isArray(n)?{items:n}:n?Object.assign({items:[]},n):{items:[]}),this._elementReplacer=new Wc}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,i=e.editing.view,o=n.editable,r=i.document.getRoot();o.name=r.rootName,n.render();const s=o.element;this.setEditableElement(o.name,s),this.focusTracker.add(s),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(s),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy(),super.destroy()}_initToolbar(){const t=this.editor,e=this.view,n=t.editing.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,this._toolbarConfig.viewportTopOffset&&(e.stickyPanel.viewportTopOffset=this._toolbarConfig.viewportTopOffset),e.toolbar.fillFromConfig(this._toolbarConfig.items,this.componentFactory),function({origin:t,originKeystrokeHandler:e,originFocusTracker:n,toolbar:i,beforeFocus:o,afterBlur:r}){n.add(i.element),e.set("Alt+F10",(t,e)=>{n.isFocused&&!i.focusTracker.isFocused&&(o&&o(),i.focus(),e())}),i.keystrokes.set("Esc",(e,n)=>{i.focusTracker.isFocused&&(t.focus(),r&&r(),n())})}({origin:n,originFocusTracker:this.focusTracker,originKeystrokeHandler:t.keystrokes,toolbar:e.toolbar})}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),i=t.sourceElement,o=t.config.get("placeholder")||i&&"textarea"===i.tagName.toLowerCase()&&i.getAttribute("placeholder");o&&Bc({view:e,element:n,text:o,isDirectHost:!1})}}class Yc extends An{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(t,e,n)=>{this._renderViewIntoCollectionParent(e,n)}),this.on("remove",(t,e)=>{e.element&&this._parentElement&&e.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...t){if(!t.length||!t.every(t=>"string"==typeof t))throw new hn.b("ui-viewcollection-delegate-wrong-events: All event names must be strings.",this);return{to:e=>{for(const n of this)for(const i of t)n.delegate(i).to(e);this.on("add",(n,i)=>{for(const n of t)i.delegate(n).to(e)}),this.on("remove",(n,i)=>{for(const n of t)i.stopDelegating(n,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}}class Gc{constructor(t){Object.assign(this,il(nl(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new hn.b("ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)cl(n)?yield n:ll(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,i)=>new Kc({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:i}),if:(n,i,o)=>new Qc({observable:t,emitter:e,attribute:n,valueIfTrue:i,callback:o})}}static extend(t,e){if(t._isRendered)throw new hn.b("template-extend-render: Attempting to extend a template which has already been rendered.",[this,t]);!function t(e,n){n.attributes&&(e.attributes||(e.attributes={}),sl(e.attributes,n.attributes));n.eventListeners&&(e.eventListeners||(e.eventListeners={}),sl(e.eventListeners,n.eventListeners));n.text&&e.text.push(...n.text);if(n.children&&n.children.length){if(e.children.length!=n.children.length)throw new hn.b("ui-template-extend-children-mismatch: The number of children in extended definition does not match.",e);let i=0;for(const o of n.children)t(e.children[i++],o)}}(t,il(nl(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new hn.b('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.',this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),Jc(this.text)?this._bindToObservable({schema:this.text,updater:Xc(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){let e,n,i,o;if(!this.attributes)return;const r=t.node,s=t.revertData;for(e in this.attributes)if(i=r.getAttribute(e),n=this.attributes[e],s&&(s.attributes[e]=i),o=j(n[0])&&n[0].ns?n[0].ns:null,Jc(n)){const a=o?n[0].value:n;s&&ul(e)&&a.unshift(i),this._bindToObservable({schema:a,updater:tl(r,e,o),data:t})}else"style"==e&&"string"!=typeof n[0]?this._renderStyleAttribute(n[0],t):(s&&i&&ul(e)&&n.unshift(i),n=n.map(t=>t&&t.value||t).reduce((t,e)=>t.concat(e),[]).reduce(rl,""),al(n)||r.setAttributeNS(o,e,n))}_renderStyleAttribute(t,e){const n=e.node;for(const i in t){const o=t[i];Jc(o)?this._bindToObservable({schema:[o],updater:el(n,i),data:e}):n.style[i]=o}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,i=t.isApplying;let o=0;for(const r of this.children)if(dl(r)){if(!i){r.setParent(e);for(const t of r)n.appendChild(t.element)}}else if(cl(r))i||(r.isRendered||r.render(),n.appendChild(r.element));else if(Jo(r))n.appendChild(r);else if(i){const e={children:[],bindings:[],attributes:{}};t.revertData.children.push(e),r._renderNode({node:n.childNodes[o++],isApplying:!0,revertData:e})}else n.appendChild(r.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(n=>{const[i,o]=e.split("@");return n.activateDomEventListener(i,o,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const i=n.revertData;Zc(t,e,n);const o=t.filter(t=>!al(t)).filter(t=>t.observable).map(i=>i.activateAttributeListener(t,e,n));i&&i.bindings.push(o)}_revertTemplateFromNode(t,e){for(const t of e.bindings)for(const e of t)e();if(e.text)t.textContent=e.text;else{for(const n in e.attributes){const i=e.attributes[n];null===i?t.removeAttribute(n):t.setAttribute(n,i)}for(let n=0;n<e.children.length;++n)this._revertTemplateFromNode(t.childNodes[n],e.children[n])}}}xn(Gc,mn);class $c{constructor(t){Object.assign(this,t)}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const i=()=>Zc(t,e,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,i),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,i)}}}class Kc extends $c{activateDomEventListener(t,e,n){const i=(t,n)=>{e&&!n.target.matches(e)||("function"==typeof this.eventNameOrFunction?this.eventNameOrFunction(n):this.observable.fire(this.eventNameOrFunction,n))};return this.emitter.listenTo(n.node,t,i),()=>{this.emitter.stopListening(n.node,t,i)}}}class Qc extends $c{getValue(t){return!al(super.getValue(t))&&(this.valueIfTrue||!0)}}function Jc(t){return!!t&&(t.value&&(t=t.value),Array.isArray(t)?t.some(Jc):t instanceof $c)}function Zc(t,e,{node:n}){let i=function(t,e){return t.map(t=>t instanceof $c?t.getValue(e):t)}(t,n);i=1==t.length&&t[0]instanceof Qc?i[0]:i.reduce(rl,""),al(i)?e.remove():e.set(i)}function Xc(t){return{set(e){t.textContent=e},remove(){t.textContent=""}}}function tl(t,e,n){return{set(i){t.setAttributeNS(n,e,i)},remove(){t.removeAttributeNS(n,e)}}}function el(t,e){return{set(n){t.style[e]=n},remove(){t.style[e]=null}}}function nl(t){return en(t,t=>{if(t&&(t instanceof $c||ll(t)||cl(t)||dl(t)))return t})}function il(t){if("string"==typeof t?t=function(t){return{text:[t]}}(t):t.text&&function(t){Array.isArray(t.text)||(t.text=[t.text])}(t),t.on&&(t.eventListeners=function(t){for(const e in t)ol(t,e);return t}(t.on),delete t.on),!t.text){t.attributes&&function(t){for(const e in t)t[e].value&&(t[e].value=[].concat(t[e].value)),ol(t,e)}(t.attributes);const e=[];if(t.children)if(dl(t.children))e.push(t.children);else for(const n of t.children)ll(n)||cl(n)||Jo(n)?e.push(n):e.push(new Gc(n));t.children=e}return t}function ol(t,e){Array.isArray(t[e])||(t[e]=[t[e]])}function rl(t,e){return al(e)?t:al(t)?e:`${t} ${e}`}function sl(t,e){for(const n in e)t[n]?t[n].push(...e[n]):t[n]=e[n]}function al(t){return!t&&0!==t}function cl(t){return t instanceof hl}function ll(t){return t instanceof Gc}function dl(t){return t instanceof Yc}function ul(t){return"class"==t||"style"==t}n(15);class hl{constructor(t){this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new An,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Gc.bind(this,this)}createCollection(t){const e=new Yc(t);return this._viewCollections.add(e),e}registerChild(t){yn(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){yn(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new Gc(t)}extendTemplate(t){Gc.extend(this.template,t)}render(){if(this.isRendered)throw new hn.b("ui-view-render-already-rendered: This View has already been rendered.",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}xn(hl,ur),xn(hl,Ui);var fl=function(t){return"string"==typeof t||!Dt(t)&&p(t)&&"[object String]"==f(t)};class gl extends Yc{constructor(t,e=[]){super(e),this.locale=t}attachToDom(){this._bodyCollectionContainer=new Gc({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let t=document.querySelector(".ck-body-wrapper");t||(t=function(t,e,n={},i=[]){const o=n&&n.xmlns,r=o?t.createElementNS(o,e):t.createElement(e);for(const t in n)r.setAttribute(t,n[t]);!fl(i)&&yn(i)||(i=[i]);for(let e of i)fl(e)&&(e=t.createTextNode(e)),r.appendChild(e);return r}(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(t)),t.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const t=document.querySelector(".ck-body-wrapper");t&&0==t.childElementCount&&t.remove()}}n(17);class ml extends hl{constructor(t){super(t),this.body=new gl(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}n(19);class pl extends hl{constructor(t){super(t),this.set("text"),this.set("for"),this.id="ck-editor__label_"+dn();const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:e.to("for")},children:[{text:e.to("text")}]})}}class bl extends ml{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new pl;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class wl extends hl{constructor(t,e,n){super(t),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const t=this._editingView;function e(e){t.change(n=>{const i=t.document.getRoot(e.name);n.addClass(e.isFocused?"ck-focused":"ck-blurred",i),n.removeClass(e.isFocused?"ck-blurred":"ck-focused",i)})}t.isRenderingInProgress?function n(i){t.once("change:isRenderingInProgress",(t,o,r)=>{r?n(i):e(i)})}(this):e(this)}}class kl extends wl{constructor(t,e,n){super(t,e,n),this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}})}render(){super.render();const t=this._editingView,e=this.t;t.change(n=>{const i=t.document.getRoot(this.name);n.setAttribute("aria-label",e("Rich Text Editor, %0",[this.name]),i)})}}function _l(t){return e=>e+t}n(21);const vl=_l("px");class yl extends hl{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Gc({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",t=>t?"block":"none"),height:e.to("isSticky",t=>t?vl(this._panelRect.height):null)}}}).render(),this._contentPanel=new Gc({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",t=>t?vl(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_hasViewportTopOffset",t=>t?vl(this.viewportTopOffset):null),bottom:e.to("_isStickyToTheLimiter",t=>t?vl(this.limiterBottomOffset):null),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(nr.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const t=this._panelRect=this._contentPanel.getBoundingClientRect();let e;this.limiterElement?(e=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&e.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<e.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=e.bottom<t.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:vl(-nr.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}class xl{constructor(t){if(Object.assign(this,t),t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];"string"==typeof n&&(n=[n]);for(const i of n)t.keystrokeHandler.set(i,(t,n)=>{this[e](),n()})}}get first(){return this.focusables.find(Al)||null}get last(){return this.focusables.filter(Al).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return null===this.focusTracker.focusedElement?null:(this.focusables.find((e,n)=>{const i=e.element===this.focusTracker.focusedElement;return i&&(t=n),i}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(null===e)return this[1===t?"first":"last"];let i=(e+n+t)%n;do{const e=this.focusables.get(i);if(Al(e))return e;i=(i+n+t)%n}while(i!==e);return null}}function Al(t){return!(!t.focus||"none"==nr.window.getComputedStyle(t.element).display)}class Cl extends hl{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class Tl{constructor(t,e){Tl._observerInstance||Tl._createObserver(),this._element=t,this._callback=e,Tl._addElementCallback(t,e),Tl._observerInstance.observe(t)}destroy(){Tl._deleteElementCallback(this._element,this._callback)}static _addElementCallback(t,e){Tl._elementCallbacks||(Tl._elementCallbacks=new Map);let n=Tl._elementCallbacks.get(t);n||(n=new Set,Tl._elementCallbacks.set(t,n)),n.add(e)}static _deleteElementCallback(t,e){const n=Tl._getElementCallbacks(t);n&&(n.delete(e),n.size||(Tl._elementCallbacks.delete(t),Tl._observerInstance.unobserve(t))),Tl._elementCallbacks&&!Tl._elementCallbacks.size&&(Tl._observerInstance=null,Tl._elementCallbacks=null)}static _getElementCallbacks(t){return Tl._elementCallbacks?Tl._elementCallbacks.get(t):null}static _createObserver(){let t;t="function"==typeof nr.window.ResizeObserver?nr.window.ResizeObserver:Pl,Tl._observerInstance=new t(t=>{for(const e of t){if(!e.target.offsetParent)continue;const t=Tl._getElementCallbacks(e.target);if(t)for(const n of t)n(e)}})}}Tl._observerInstance=null,Tl._elementCallbacks=null;class Pl{constructor(t){this._callback=t,this._elements=new Set,this._previousRects=new Map,this._periodicCheckTimeout=null}observe(t){this._elements.add(t),this._checkElementRectsAndExecuteCallback(),1===this._elements.size&&this._startPeriodicCheck()}unobserve(t){this._elements.delete(t),this._previousRects.delete(t),this._elements.size||this._stopPeriodicCheck()}_startPeriodicCheck(){const t=()=>{this._checkElementRectsAndExecuteCallback(),this._periodicCheckTimeout=setTimeout(t,100)};this.listenTo(nr.window,"resize",()=>{this._checkElementRectsAndExecuteCallback()}),this._periodicCheckTimeout=setTimeout(t,100)}_stopPeriodicCheck(){clearTimeout(this._periodicCheckTimeout),this.stopListening(),this._previousRects.clear()}_checkElementRectsAndExecuteCallback(){const t=[];for(const e of this._elements)this._hasRectChanged(e)&&t.push({target:e,contentRect:this._previousRects.get(e)});t.length&&this._callback(t)}_hasRectChanged(t){if(!t.ownerDocument.body.contains(t))return!1;const e=new es(t),n=this._previousRects.get(t),i=!n||!n.isEqual(e);return this._previousRects.set(t,e),i}}xn(Pl,ur);class Sl extends hl{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",t=>"ck-dropdown__panel_"+t),e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(t=>t.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){const t=this.children.last;"function"==typeof t.focusLast?t.focusLast():t.focus()}}}n(23);function El({element:t,target:e,positions:n,limiter:i,fitInViewport:o}){z(e)&&(e=e()),z(i)&&(i=i());const r=function(t){return t&&t.parentNode?t.offsetParent===nr.document.body?null:t.offsetParent:null}(t),s=new es(t),a=new es(e);let c,l;if(i||o){const t=function(t,e){const{elementRect:n,viewportRect:i}=e,o=n.getArea(),r=function(t,{targetRect:e,elementRect:n,limiterRect:i,viewportRect:o}){const r=[],s=n.getArea();for(const a of t){const t=Ml(a,e,n);if(!t)continue;const[c,l]=t;let d=0,u=0;if(i)if(o){const t=i.getIntersection(o);t&&(d=t.getIntersectionArea(l))}else d=i.getIntersectionArea(l);o&&(u=o.getIntersectionArea(l));const h={positionName:c,positionRect:l,limiterIntersectArea:d,viewportIntersectArea:u};if(d===s)return[h];r.push(h)}return r}(t,e);if(i){const t=Il(r.filter(({viewportIntersectArea:t})=>t===o),o);if(t)return t}return Il(r,o)}(n,{targetRect:a,elementRect:s,limiterRect:i&&new es(i).getVisible(),viewportRect:o&&new es(nr.window)});[l,c]=t||Ml(n[0],a,s)}else[l,c]=Ml(n[0],a,s);let d=Nl(c);return r&&(d=function({left:t,top:e},n){const i=Nl(new es(n)),o=Xr(n);return t-=i.left,e-=i.top,t+=n.scrollLeft,e+=n.scrollTop,t-=o.left,e-=o.top,{left:t,top:e}}(d,r)),{left:d.left,top:d.top,name:l}}function Ml(t,e,n){const i=t(e,n);if(!i)return null;const{left:o,top:r,name:s}=i;return[s,n.clone().moveTo(o,r)]}function Il(t,e){let n,i,o=0;for(const{positionName:r,positionRect:s,limiterIntersectArea:a,viewportIntersectArea:c}of t){if(a===e)return[r,s];const t=c**2+a**2;t>o&&(o=t,n=s,i=r)}return n?[i,n]:null}function Nl({left:t,top:e}){const{scrollX:n,scrollY:i}=nr.window;return{left:t+n,top:e+i}}class Ol extends hl{constructor(t,e,n){super(t);const i=this.bindTemplate;this.buttonView=e,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new Sc,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",i.to("class"),i.if("isEnabled","ck-disabled",t=>!t)],id:i.to("id"),"aria-describedby":i.to("ariaDescribedById")},children:[e,n]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen&&("auto"===this.panelPosition?this.panelView.position=Ol._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const t=(t,e)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,e())};this.keystrokes.set("arrowdown",(t,e)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,e())}),this.keystrokes.set("arrowright",(t,e)=>{this.isOpen&&e()}),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:t,southWest:e,northEast:n,northWest:i}=Ol.defaultPanelPositions;return"ltr"===this.locale.uiLanguageDirection?[t,e,n,i]:[e,t,i,n]}}Ol.defaultPanelPositions={southEast:t=>({top:t.bottom,left:t.left,name:"se"}),southWest:(t,e)=>({top:t.bottom,left:t.left-e.width+t.width,name:"sw"}),northEast:(t,e)=>({top:t.top-e.height,left:t.left,name:"ne"}),northWest:(t,e)=>({top:t.bottom-e.height,left:t.left-e.width+t.width,name:"nw"})},Ol._getOptimalPosition=El;n(25);class Rl extends hl{constructor(){super();const t=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:t.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const t=(new DOMParser).parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=t.getAttribute("viewBox");for(e&&(this.viewBox=e),this.element.innerHTML="";t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(t=>{t.style.fill=this.fillColor})}}n(27);class Dl extends hl{constructor(t){super(t),this.set("text",""),this.set("position","s");const e=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",e.to("position",t=>"ck-tooltip_"+t),e.if("text","ck-hidden",t=>!t.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:e.to("text")}]}]})}}n(29);class Ll extends hl{constructor(t){super(t);const e=this.bindTemplate,n=dn();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new Rl,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this)),this.setTemplate({tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("isVisible","ck-hidden",t=>!t),e.to("isOn",t=>t?"ck-on":"ck-off"),e.if("withText","ck-button_with-text"),e.if("withKeystroke","ck-button_with-keystroke")],type:e.to("type",t=>t||"button"),tabindex:e.to("tabindex"),"aria-labelledby":"ck-editor__aria-label_"+n,"aria-disabled":e.if("isEnabled",!0,t=>!t),"aria-pressed":e.to("isOn",t=>!!this.isToggleable&&String(t))},children:this.children,on:{mousedown:e.to(t=>{t.preventDefault()}),click:e.to(t=>{this.isEnabled?this.fire("execute"):t.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createTooltipView(){const t=new Dl;return t.bind("text").to(this,"_tooltipString"),t.bind("position").to(this,"tooltipPosition"),t}_createLabelView(t){const e=new hl,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:"ck-editor__aria-label_"+t},children:[{text:this.bindTemplate.to("label")}]}),e}_createKeystrokeView(){const t=new hl;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>wo(t))}]}),t}_getTooltipString(t,e,n){return t?"string"==typeof t?t:(n&&(n=wo(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var jl='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Vl extends Ll{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new Rl;return t.content=jl,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}n(31);class zl extends hl{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new jc,this.keystrokes=new Sc,this._focusCycler=new xl({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class Bl extends hl{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class Fl extends hl{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}n(33);class Ul extends Ll{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new hl;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}function Hl({emitter:t,activator:e,callback:n,contextElements:i}){t.listenTo(document,"mousedown",(t,{target:o})=>{if(e()){for(const t of i)if(t.contains(o))return;n()}})}n(35),n(37);function Wl(t,e=Vl){const n=new e(t),i=new Sl(t),o=new Ol(t,n,i);return n.bind("isEnabled").to(o),n instanceof Vl?n.bind("isOn").to(o,"isOpen"):n.arrowView.bind("isOn").to(o,"isOpen"),function(t){(function(t){t.on("render",()=>{Hl({emitter:t,activator:()=>t.isOpen,callback:()=>{t.isOpen=!1},contextElements:[t.element]})})})(t),function(t){t.on("execute",e=>{e.source instanceof Ul||(t.isOpen=!1)})}(t),function(t){t.keystrokes.set("arrowdown",(e,n)=>{t.isOpen&&(t.panelView.focus(),n())}),t.keystrokes.set("arrowup",(e,n)=>{t.isOpen&&(t.panelView.focusLast(),n())})}(t)}(o),o}function ql(t,e){const n=t.locale,i=t.listView=new zl(n);i.items.bindTo(e).using(({type:t,model:e})=>{if("separator"===t)return new Fl(n);if("button"===t||"switchbutton"===t){const i=new Bl(n);let o;return o="button"===t?new Ll(n):new Ul(n),o.bind(...Object.keys(e)).to(e),o.delegate("execute").to(i),i.children.add(o),i}}),t.panelView.children.add(i),i.items.delegate("execute").to(t)}n(39);class Yl extends hl{constructor(t,e){super(t);const n=this.bindTemplate,i=this.t;var o;this.options=e||{},this.set("ariaLabel",i("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new jc,this.keystrokes=new Sc,this.set("class"),this.set("isCompact",!1),this.itemsView=new Gl(t),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection(),this._focusCycler=new xl({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:["arrowleft","arrowup"],focusNext:["arrowright","arrowdown"]}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")],role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(o=this,o.bindTemplate.to(t=>{t.target===o.element&&t.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new Kl(this):new $l(this)}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e){t.map(t=>{"|"==t?this.items.add(new Cl):e.has(t)?this.items.add(e.create(t)):console.warn(Object(hn.a)("toolbarview-item-unavailable: The requested toolbar item is unavailable."),{name:t})})}}class Gl extends hl{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class $l{constructor(t){const e=t.bindTemplate;t.set("isVertical",!1),t.itemsView.children.bindTo(t.items).using(t=>t),t.focusables.bindTo(t.items).using(t=>t),t.extendTemplate({attributes:{class:[e.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class Kl{constructor(t){this.viewChildren=t.children,this.viewFocusables=t.focusables,this.viewItemsView=t.itemsView,this.viewFocusTracker=t.focusTracker,this.viewLocale=t.locale,this.ungroupedItems=t.createCollection(),this.groupedItems=t.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,t.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),t.children.on("add",this._updateFocusCycleableItems.bind(this)),t.children.on("remove",this._updateFocusCycleableItems.bind(this)),t.items.on("add",(t,e,n)=>{n>this.ungroupedItems.length?this.groupedItems.add(e,n-this.ungroupedItems.length):this.ungroupedItems.add(e,n),this._updateGrouping()}),t.items.on("remove",(t,e,n)=>{n>this.ungroupedItems.length?this.groupedItems.remove(e):this.ungroupedItems.remove(e),this._updateGrouping()}),t.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(t){this.viewElement=t.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(t)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!this.viewElement.offsetParent)return void(this.shouldUpdateGroupingOnNextResize=!0);let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const t=this.viewElement,e=this.viewLocale.uiLanguageDirection,n=new es(t.lastChild),i=new es(t);if(!this.cachedPadding){const n=nr.window.getComputedStyle(t),i="ltr"===e?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(n[i])}return"ltr"===e?n.right>i.right-this.cachedPadding:n.left<i.left+this.cachedPadding}_enableGroupingOnResize(){let t;this.resizeObserver=new Tl(this.viewElement,e=>{t&&t===e.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),t=e.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(t){t.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new Cl),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const t=this.viewLocale,e=t.t,n=Wl(t);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition="ltr"===t.uiLanguageDirection?"sw":"se",function(t,e){const n=t.locale,i=n.t,o=t.toolbarView=new Yl(n);o.set("ariaLabel",i("Dropdown toolbar")),t.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(t=>o.items.add(t)),t.panelView.children.add(o),o.items.delegate("execute").to(t)}(n,[]),n.buttonView.set({label:e("Show more items"),tooltip:!0,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>'}),n.toolbarView.items.bindTo(this.groupedItems).using(t=>t),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(t=>{this.viewFocusables.add(t)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}n(41);class Ql extends bl{constructor(t,e,n={}){super(t),this.stickyPanel=new yl(t),this.toolbar=new Yl(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new kl(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Jl extends Mc{constructor(t,e){super(e),nn(t)&&(this.sourceElement=t),this.data.processor=new Rc(this.data.viewDocument),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new Ql(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new qc(this,i),function(t){if(!z(t.updateSourceElement))throw new hn.b("attachtoform-missing-elementapi-interface: Editor passed to attachToForm() must implement ElementApi.",t);const e=t.sourceElement;if(e&&"textarea"===e.tagName.toLowerCase()&&e.form){let n;const i=e.form,o=()=>t.updateSourceElement();z(i.submit)&&(n=i.submit,i.submit=()=>{o(),n.apply(i)}),i.addEventListener("submit",o),t.on("destroy",()=>{i.removeEventListener("submit",o),n&&(i.submit=n)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const i=new this(t,e);n(i.initPlugins().then(()=>i.ui.init(nn(t)?t:null)).then(()=>{if(!nn(t)&&e.initialData)throw new hn.b("editor-create-initial-data: The config.initialData option cannot be used together with initial data passed in Editor.create().",null);const n=e.initialData||function(t){return nn(t)?(e=t,e instanceof HTMLTextAreaElement?e.value:e.innerHTML):t;var e}(t);return i.data.init(n)}).then(()=>i.fire("ready")).then(()=>i))})}}xn(Jl,Ic),xn(Jl,Nc);class Zl{constructor(t){this.editor=t,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(t){this._disableStack.add(t),1==this._disableStack.size&&(this.on("set:isEnabled",Xl,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),0==this._disableStack.size&&(this.off("set:isEnabled",Xl),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Xl(t){t.return=!1,t.stop()}xn(Zl,Ui);class td{constructor(t){this.files=function(t){const e=t.files?Array.from(t.files):[],n=t.items?Array.from(t.items):[];if(e.length)return e;return n.filter(t=>"file"===t.kind).map(t=>t.getAsFile())}(t),this._native=t}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}}class ed extends Dr{constructor(t){super(t);const e=this.document;function n(t,n){n.preventDefault();const i=n.dropRange?[n.dropRange]:Array.from(e.selection.getRanges()),o=new cn(e,"clipboardInput");e.fire(o,{dataTransfer:n.dataTransfer,targetRanges:i}),o.stop.called&&n.stopPropagation()}this.domEventType=["paste","copy","cut","drop","dragover"],this.listenTo(e,"paste",n,{priority:"low"}),this.listenTo(e,"drop",n,{priority:"low"})}onDomEvent(t){const e={dataTransfer:new td(t.clipboardData?t.clipboardData:t.dataTransfer)};"drop"==t.type&&(e.dropRange=function(t,e){const n=e.target.ownerDocument,i=e.clientX,o=e.clientY;let r;n.caretRangeFromPoint&&n.caretRangeFromPoint(i,o)?r=n.caretRangeFromPoint(i,o):e.rangeParent&&(r=n.createRange(),r.setStart(e.rangeParent,e.rangeOffset),r.collapse(!0));return r?t.domConverter.domRangeToView(r):t.document.selection.getFirstRange()}(this.view,t)),this.fire(t.type,t,e)}}const nd=["figcaption","li"];class id extends Zl{static get pluginName(){return"Clipboard"}init(){const t=this.editor,e=t.model.document,n=t.editing.view,i=n.document;function o(n,o){const r=o.dataTransfer;o.preventDefault();const s=t.data.toView(t.model.getSelectedContent(e.selection));i.fire("clipboardOutput",{dataTransfer:r,content:s,method:n.name})}this._htmlDataProcessor=new Rc(i),n.addObserver(ed),this.listenTo(i,"clipboardInput",e=>{t.isReadOnly&&e.stop()},{priority:"highest"}),this.listenTo(i,"clipboardInput",(t,e)=>{const i=e.dataTransfer;let o="";var r;i.getData("text/html")?o=function(t){return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>1==e.length?" ":e)}(i.getData("text/html")):i.getData("text/plain")&&((r=(r=i.getData("text/plain")).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"</p><p>").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;")).indexOf("</p><p>")>-1&&(r=`<p>${r}</p>`),o=r),o=this._htmlDataProcessor.toView(o);const s=new cn(this,"inputTransformation");this.fire(s,{content:o,dataTransfer:i}),s.stop.called&&t.stop(),n.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(t,e)=>{if(!e.content.isEmpty){const n=this.editor.data,i=this.editor.model,o=n.toModel(e.content,"$clipboardHolder");if(0==o.childCount)return;i.insertContent(o),t.stop()}},{priority:"low"}),this.listenTo(i,"copy",o,{priority:"low"}),this.listenTo(i,"cut",(e,n)=>{t.isReadOnly?n.preventDefault():o(e,n)},{priority:"low"}),this.listenTo(i,"clipboardOutput",(n,i)=>{i.content.isEmpty||(i.dataTransfer.setData("text/html",this._htmlDataProcessor.toData(i.content)),i.dataTransfer.setData("text/plain",function t(e){let n="";if(e.is("text")||e.is("textProxy"))n=e.data;else if(e.is("img")&&e.hasAttribute("alt"))n=e.getAttribute("alt");else{let i=null;for(const o of e.getChildren()){const e=t(o);i&&(i.is("containerElement")||o.is("containerElement"))&&(nd.includes(i.name)||nd.includes(o.name)?n+="\n":n+="\n\n"),n+=e,i=o}}return n}(i.content))),"cut"==i.method&&t.model.deleteContent(e.selection)},{priority:"low"})}}class od{constructor(t){this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(t,e,n)=>{n?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),1==this._disableStack.size&&(this.on("set:isEnabled",rd,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),0==this._disableStack.size&&(this.off("set:isEnabled",rd),this.refresh())}execute(){}destroy(){this.stopListening()}}function rd(t){t.return=!1,t.stop()}function*sd(t,e){for(const n of e)n&&t.getAttributeProperties(n[0]).copyOnEnter&&(yield n)}xn(od,Ui);class ad extends od{execute(){const t=this.editor.model,e=t.document;t.change(n=>{!function(t,e,n,i){const o=n.isCollapsed,r=n.getFirstRange(),s=r.start.parent,a=r.end.parent;if(i.isLimit(s)||i.isLimit(a))return void(o||s!=a||t.deleteContent(n));if(o){const t=sd(e.model.schema,n.getAttributes());cd(e,r.start),e.setSelectionAttribute(t)}else{const i=!(r.start.isAtStart&&r.end.isAtEnd),o=s==a;t.deleteContent(n,{leaveUnmerged:i}),i&&(o?cd(e,n.focus):e.setSelection(a,0))}}(this.editor.model,n,e.selection,t.schema),this.fire("afterExecute",{writer:n})})}}function cd(t,e){t.split(e),t.setSelection(e.parent.nextSibling,0)}class ld extends gr{constructor(t){super(t);const e=this.document;e.on("keydown",(t,n)=>{if(this.isEnabled&&n.keyCode==mo.enter){let i;e.once("enter",t=>i=t,{priority:"highest"}),e.fire("enter",new Rr(e,n.domEvent,{isSoft:n.shiftKey})),i&&i.stop.called&&t.stop()}})}observe(){}}class dd extends Zl{static get pluginName(){return"Enter"}init(){const t=this.editor,e=t.editing.view,n=e.document;e.addObserver(ld),t.commands.add("enter",new ad(t)),this.listenTo(n,"enter",(n,i)=>{i.preventDefault(),i.isSoft||(t.execute("enter"),e.scrollToTheSelection())},{priority:"low"})}}class ud extends od{execute(){const t=this.editor.model,e=t.document;t.change(n=>{!function(t,e,n){const i=n.isCollapsed,o=n.getFirstRange(),r=o.start.parent,s=o.end.parent,a=r==s;if(i){const i=sd(t.schema,n.getAttributes());hd(t,e,o.end),e.removeSelectionAttribute(n.getAttributeKeys()),e.setSelectionAttribute(i)}else{const i=!(o.start.isAtStart&&o.end.isAtEnd);t.deleteContent(n,{leaveUnmerged:i}),a?hd(t,e,n.focus):i&&e.setSelection(s,0)}}(t,n,e.selection),this.fire("afterExecute",{writer:n})})}refresh(){const t=this.editor.model,e=t.document;this.isEnabled=function(t,e){if(e.rangeCount>1)return!1;const n=e.anchor;if(!n||!t.checkChild(n,"softBreak"))return!1;const i=e.getFirstRange(),o=i.start.parent,r=i.end.parent;if((fd(o,t)||fd(r,t))&&o!==r)return!1;return!0}(t.schema,e.selection)}}function hd(t,e,n){const i=e.createElement("softBreak");t.insertContent(i,n),e.setSelection(i,"after")}function fd(t,e){return!t.is("rootElement")&&(e.isLimit(t)||fd(t.parent,e))}class gd extends Zl{static get pluginName(){return"ShiftEnter"}init(){const t=this.editor,e=t.model.schema,n=t.conversion,i=t.editing.view,o=i.document;e.register("softBreak",{allowWhere:"$text",isInline:!0}),n.for("upcast").elementToElement({model:"softBreak",view:"br"}),n.for("downcast").elementToElement({model:"softBreak",view:(t,e)=>e.createEmptyElement("br")}),i.addObserver(ld),t.commands.add("shiftEnter",new ud(t)),this.listenTo(o,"enter",(e,n)=>{n.preventDefault(),n.isSoft&&(t.execute("shiftEnter"),i.scrollToTheSelection())},{priority:"low"})}}class md extends od{execute(){const t=this.editor.model,e=t.document.selection;let n=t.schema.getLimitElement(e);if(e.containsEntireContent(n)||!pd(t.schema,n))do{if(n=n.parent,!n)return}while(!pd(t.schema,n));t.change(t=>{t.setSelection(n,"in")})}}function pd(t,e){return t.isLimit(e)&&(t.checkChild(e,"$text")||t.checkChild(e,"paragraph"))}const bd=bo("Ctrl+A");class wd extends Zl{static get pluginName(){return"SelectAllEditing"}init(){const t=this.editor,e=t.editing.view.document;t.commands.add("selectAll",new md(t)),this.listenTo(e,"keydown",(e,n)=>{po(n)===bd&&(t.execute("selectAll"),n.preventDefault())})}}class kd extends Zl{static get pluginName(){return"SelectAllUI"}init(){const t=this.editor;t.ui.componentFactory.add("selectAll",e=>{const n=t.commands.get("selectAll"),i=new Ll(e),o=e.t;return i.set({label:o("Select all"),icon:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M.75 15.5a.75.75 0 0 1 .75.75V18l.008.09A.5.5 0 0 0 2 18.5h1.75a.75.75 0 1 1 0 1.5H1.5l-.144-.007a1.5 1.5 0 0 1-1.35-1.349L0 18.5v-2.25a.75.75 0 0 1 .75-.75zm18.5 0a.75.75 0 0 1 .75.75v2.25l-.007.144a1.5 1.5 0 0 1-1.349 1.35L18.5 20h-2.25a.75.75 0 1 1 0-1.5H18a.5.5 0 0 0 .492-.41L18.5 18v-1.75a.75.75 0 0 1 .75-.75zm-10.45 3c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm.45-5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zM1.3 11c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM1.3 7c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5zm-5 0a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm-6.5-5a.75.75 0 0 1 0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v1.75a.75.75 0 0 1-1.5 0V1.5l.007-.144A1.5 1.5 0 0 1 1.356.006L1.5 0h2.25zM18.5 0l.144.007a1.5 1.5 0 0 1 1.35 1.349L20 1.5v2.25a.75.75 0 1 1-1.5 0V2l-.008-.09A.5.5 0 0 0 18 1.5h-1.75a.75.75 0 1 1 0-1.5h2.25zM8.8 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6z"/></svg>',keystroke:"Ctrl+A",tooltip:!0}),i.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(i,"execute",()=>{t.execute("selectAll"),t.editing.view.focus()}),i})}}class _d extends Zl{static get requires(){return[wd,kd]}static get pluginName(){return"SelectAll"}}class vd{constructor(t,e=20){this.model=t,this.size=0,this.limit=e,this.isLocked=!1,this._changeCallback=(t,e)=>{"transparent"!=e.type&&e!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch()),this._batch}input(t){this.size+=t,this.size>=this.limit&&this._reset(!0)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(t){this.isLocked&&!t||(this._batch=null,this.size=0)}}class yd extends od{constructor(t,e){super(t),this._buffer=new vd(t.model,e),this._batches=new WeakSet}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(t={}){const e=this.editor.model,n=e.document,i=t.text||"",o=i.length,r=t.range?e.createSelection(t.range):n.selection,s=t.resultRange;e.enqueueChange(this._buffer.batch,t=>{this._buffer.lock(),e.deleteContent(r),i&&e.insertContent(t.createText(i,n.selection.getAttributes()),r),s?t.setSelection(s):r.is("documentSelection")||t.setSelection(r),this._buffer.unlock(),this._buffer.input(o),this._batches.add(this._buffer.batch)})}}const xd=[po("arrowUp"),po("arrowRight"),po("arrowDown"),po("arrowLeft"),9,16,17,18,19,20,27,33,34,35,36,45,91,93,144,145,173,174,175,176,177,178,179,255];for(let t=112;t<=135;t++)xd.push(t);function Ad(t){return!!t.ctrlKey||xd.includes(t.keyCode)}function Cd(t){if(t.newChildren.length-t.oldChildren.length!=1)return;const e=function(t,e){const n=[];let i,o=0;return t.forEach(t=>{"equal"==t?(r(),o++):"insert"==t?(s("insert")?i.values.push(e[o]):(r(),i={type:"insert",index:o,values:[e[o]]}),o++):s("delete")?i.howMany++:(r(),i={type:"delete",index:o,howMany:1})}),r(),n;function r(){i&&(n.push(i),i=null)}function s(t){return i&&i.type==t}}($o(t.oldChildren,t.newChildren,Td),t.newChildren);if(e.length>1)return;const n=e[0];return n.values[0]&&n.values[0].is("text")?n:void 0}function Td(t,e){return t&&t.is("text")&&e&&e.is("text")?t.data===e.data:t===e}class Pd{constructor(t){this.editor=t,this.editing=this.editor.editing}handle(t,e){if(function(t){if(0==t.length)return!1;for(const e of t)if("children"===e.type&&!Cd(e))return!0;return!1}(t))this._handleContainerChildrenMutations(t,e);else for(const n of t)this._handleTextMutation(n,e),this._handleTextNodeInsertion(n)}_handleContainerChildrenMutations(t,e){const n=function(t){const e=t.map(t=>t.node).reduce((t,e)=>t.getCommonAncestor(e,{includeSelf:!0}));if(!e)return;return e.getAncestors({includeSelf:!0,parentFirst:!0}).find(t=>t.is("containerElement")||t.is("rootElement"))}(t);if(!n)return;const i=this.editor.editing.view.domConverter.mapViewToDom(n),o=new sr(this.editor.editing.view.document),r=this.editor.data.toModel(o.domToView(i)).getChild(0),s=this.editor.editing.mapper.toModelElement(n);if(!s)return;const a=Array.from(r.getChildren()),c=Array.from(s.getChildren()),l=a[a.length-1],d=c[c.length-1];l&&l.is("softBreak")&&d&&!d.is("softBreak")&&a.pop();const u=this.editor.model.schema;if(!Sd(a,u)||!Sd(c,u))return;const h=a.map(t=>t.is("text")?t.data:"@").join("").replace(/\u00A0/g," "),f=c.map(t=>t.is("text")?t.data:"@").join("").replace(/\u00A0/g," ");if(f===h)return;const g=$o(f,h),{firstChangeAt:m,insertions:p,deletions:b}=Ed(g);let w=null;e&&(w=this.editing.mapper.toModelRange(e.getFirstRange()));const k=h.substr(m,p),_=this.editor.model.createRange(this.editor.model.createPositionAt(s,m),this.editor.model.createPositionAt(s,m+b));this.editor.execute("input",{text:k,range:_,resultRange:w})}_handleTextMutation(t,e){if("text"!=t.type)return;const n=t.newText.replace(/\u00A0/g," "),i=t.oldText.replace(/\u00A0/g," ");if(i===n)return;const o=$o(i,n),{firstChangeAt:r,insertions:s,deletions:a}=Ed(o);let c=null;e&&(c=this.editing.mapper.toModelRange(e.getFirstRange()));const l=this.editing.view.createPositionAt(t.node,r),d=this.editing.mapper.toModelPosition(l),u=this.editor.model.createRange(d,d.getShiftedBy(a)),h=n.substr(r,s);this.editor.execute("input",{text:h,range:u,resultRange:c})}_handleTextNodeInsertion(t){if("children"!=t.type)return;const e=Cd(t),n=this.editing.view.createPositionAt(t.node,e.index),i=this.editing.mapper.toModelPosition(n),o=e.values[0].data;this.editor.execute("input",{text:o.replace(/\u00A0/g," "),range:this.editor.model.createRange(i)})}}function Sd(t,e){return t.every(t=>e.isInline(t))}function Ed(t){let e=null,n=null;for(let i=0;i<t.length;i++){"equal"!=t[i]&&(e=null===e?i:e,n=i)}let i=0,o=0;for(let r=e;r<=n;r++)"insert"!=t[r]&&i++,"delete"!=t[r]&&o++;return{insertions:o,deletions:i,firstChangeAt:e}}class Md extends Zl{static get pluginName(){return"Input"}init(){const t=this.editor,e=new yd(t,t.config.get("typing.undoStep")||20);t.commands.add("input",e),function(t){let e=null;const n=t.model,i=t.editing.view,o=t.commands.get("input");function r(t){const r=n.document,a=i.document.isComposing,c=e&&e.isEqual(r.selection);e=null,o.isEnabled&&(Ad(t)||r.selection.isCollapsed||a&&229===t.keyCode||!a&&229===t.keyCode&&c||s())}function s(){const t=o.buffer;t.lock(),n.enqueueChange(t.batch,()=>{n.deleteContent(n.document.selection)}),t.unlock()}ho.isAndroid?i.document.on("beforeinput",(t,e)=>r(e),{priority:"lowest"}):i.document.on("keydown",(t,e)=>r(e),{priority:"lowest"}),i.document.on("compositionstart",(function(){const t=n.document,e=1!==t.selection.rangeCount||t.selection.getFirstRange().isFlat;if(t.selection.isCollapsed||e)return;s()}),{priority:"lowest"}),i.document.on("compositionend",()=>{e=n.createSelection(n.document.selection)},{priority:"lowest"})}(t),function(t){t.editing.view.document.on("mutations",(e,n,i)=>{new Pd(t).handle(n,i)})}(t)}isInput(t){return this.editor.commands.get("input")._batches.has(t)}}class Id extends od{constructor(t,e){super(t),this.direction=e,this._buffer=new vd(t.model,t.config.get("typing.undoStep"))}get buffer(){return this._buffer}execute(t={}){const e=this.editor.model,n=e.document;e.enqueueChange(this._buffer.batch,i=>{this._buffer.lock();const o=i.createSelection(t.selection||n.selection),r=o.isCollapsed;if(o.isCollapsed&&e.modifySelection(o,{direction:this.direction,unit:t.unit}),this._shouldEntireContentBeReplacedWithParagraph(t.sequence||1))return void this._replaceEntireContentWithParagraph(i);if(o.isCollapsed)return;let s=0;o.getFirstRange().getMinimalFlatRanges().forEach(t=>{s+=eo(t.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),e.deleteContent(o,{doNotResetEntireContent:r,direction:this.direction}),this._buffer.input(s),i.setSelection(o),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(t){if(t>1)return!1;const e=this.editor.model,n=e.document.selection,i=e.schema.getLimitElement(n);if(!(n.isCollapsed&&n.containsEntireContent(i)))return!1;if(!e.schema.checkChild(i,"paragraph"))return!1;const o=i.getChild(0);return!o||"paragraph"!==o.name}_replaceEntireContentWithParagraph(t){const e=this.editor.model,n=e.document.selection,i=e.schema.getLimitElement(n),o=t.createElement("paragraph");t.remove(t.createRangeIn(i)),t.insert(o,i),t.setSelection(o,0)}}class Nd extends gr{constructor(t){super(t);const e=t.document;let n=0;function i(t,n,i){let o;e.once("delete",t=>o=t,{priority:Number.POSITIVE_INFINITY}),e.fire("delete",new Rr(e,n,i)),o&&o.stop.called&&t.stop()}e.on("keyup",(t,e)=>{e.keyCode!=mo.delete&&e.keyCode!=mo.backspace||(n=0)}),e.on("keydown",(t,e)=>{const o={};if(e.keyCode==mo.delete)o.direction="forward",o.unit="character";else{if(e.keyCode!=mo.backspace)return;o.direction="backward",o.unit="codePoint"}const r=ho.isMac?e.altKey:e.ctrlKey;o.unit=r?"word":o.unit,o.sequence=++n,i(t,e.domEvent,o)}),ho.isAndroid&&e.on("beforeinput",(e,n)=>{if("deleteContentBackward"!=n.domEvent.inputType)return;const o={unit:"codepoint",direction:"backward",sequence:1},r=n.domTarget.ownerDocument.defaultView.getSelection();r.anchorNode==r.focusNode&&r.anchorOffset+1!=r.focusOffset&&(o.selectionToRemove=t.domConverter.domSelectionToView(r)),i(e,n.domEvent,o)})}observe(){}}class Od extends Zl{static get pluginName(){return"Delete"}init(){const t=this.editor,e=t.editing.view,n=e.document;if(e.addObserver(Nd),t.commands.add("forwardDelete",new Id(t,"forward")),t.commands.add("delete",new Id(t,"backward")),this.listenTo(n,"delete",(n,i)=>{const o={unit:i.unit,sequence:i.sequence};if(i.selectionToRemove){const e=t.model.createSelection(),n=[];for(const e of i.selectionToRemove.getRanges())n.push(t.editing.mapper.toModelRange(e));e.setTo(n),o.selection=e}t.execute("forward"==i.direction?"forwardDelete":"delete",o),i.preventDefault(),e.scrollToTheSelection()}),ho.isAndroid){let t=null;this.listenTo(n,"delete",(e,n)=>{const i=n.domTarget.ownerDocument.defaultView.getSelection();t={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}},{priority:"lowest"}),this.listenTo(n,"keyup",(e,n)=>{if(t){const e=n.domTarget.ownerDocument.defaultView.getSelection();e.collapse(t.anchorNode,t.anchorOffset),e.extend(t.focusNode,t.focusOffset),t=null}})}}}class Rd extends Zl{static get requires(){return[Md,Od]}static get pluginName(){return"Typing"}}const Dd=new Map;function Ld(t,e,n){let i=Dd.get(t);i||(i=new Map,Dd.set(t,i)),i.set(e,n)}function jd(t){return[t]}function Vd(t,e,n={}){const i=function(t,e){const n=Dd.get(t);return n&&n.has(e)?n.get(e):jd}(t.constructor,e.constructor);try{return i(t=t.clone(),e,n)}catch(t){throw t}}function zd(t,e,n){t=t.slice(),e=e.slice();const i=new Bd(n.document,n.useRelations,n.forceWeakRemove);i.setOriginalOperations(t),i.setOriginalOperations(e);const o=i.originalOperations;if(0==t.length||0==e.length)return{operationsA:t,operationsB:e,originalOperations:o};const r=new WeakMap;for(const e of t)r.set(e,0);const s={nextBaseVersionA:t[t.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:t.length,originalOperationsBCount:e.length};let a=0;for(;a<t.length;){const n=t[a],o=r.get(n);if(o==e.length){a++;continue}const s=e[o],c=Vd(n,s,i.getContext(n,s,!0)),l=Vd(s,n,i.getContext(s,n,!1));i.updateRelation(n,s),i.setOriginalOperations(c,n),i.setOriginalOperations(l,s);for(const t of c)r.set(t,o+l.length);t.splice(a,1,...c),e.splice(o,1,...l)}if(n.padWithNoOps){const n=t.length-s.originalOperationsACount,i=e.length-s.originalOperationsBCount;Ud(t,i-n),Ud(e,n-i)}return Fd(t,s.nextBaseVersionB),Fd(e,s.nextBaseVersionA),{operationsA:t,operationsB:e,originalOperations:o}}class Bd{constructor(t,e,n=!1){this.originalOperations=new Map,this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(t,e=null){const n=e?this.originalOperations.get(e):null;for(const e of t)this.originalOperations.set(e,n||e)}updateRelation(t,e){switch(t.constructor){case ja:switch(e.constructor){case Ua:t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter");break;case ja:t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter")}break;case Ha:switch(e.constructor){case Ua:t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");break;case ja:(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))&&this._setRelation(t,e,"splitBefore")}break;case Ua:switch(e.constructor){case Ua:t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement");break;case Ha:t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource")}break;case za:{const n=t.newRange;if(!n)return;switch(e.constructor){case ja:{const i=Ts._createFromPositionAndShift(e.sourcePosition,e.howMany),o=i.containsPosition(n.start)||i.start.isEqual(n.start),r=i.containsPosition(n.end)||i.end.isEqual(n.end);!o&&!r||i.containsRange(n)||this._setRelation(t,e,{side:o?"left":"right",path:o?n.start.path.slice():n.end.path.slice()});break}case Ua:{const i=n.start.isEqual(e.targetPosition),o=n.start.isEqual(e.deletionPosition),r=n.end.isEqual(e.deletionPosition),s=n.end.isEqual(e.sourcePosition);(i||o||r||s)&&this._setRelation(t,e,{wasInLeftElement:i,wasStartBeforeMergedElement:o,wasEndBeforeMergedElement:r,wasInRightElement:s});break}}break}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){const e=this.originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){const n=this.originalOperations.get(e),i=this._history.getUndoneOperation(n);if(!i)return null;const o=this.originalOperations.get(t),r=this._relations.get(o);return r&&r.get(i)||null}_setRelation(t,e,n){const i=this.originalOperations.get(t),o=this.originalOperations.get(e);let r=this._relations.get(i);r||(r=new Map,this._relations.set(i,r)),r.set(o,n)}}function Fd(t,e){for(const n of t)n.baseVersion=e++}function Ud(t,e){for(let n=0;n<e;n++)t.push(new cc(0))}function Hd(t,e,n){const i=t.nodes.getNode(0).getAttribute(e);if(i==n)return null;const o=new Ts(t.position,t.position.getShiftedBy(t.howMany));return new Da(o,e,i,n,0)}function Wd(t,e){return null===t.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)}function qd(t,e){const n=[];for(let i=0;i<t.length;i++){const o=t[i],r=new ja(o.start,o.end.offset-o.start.offset,e,0);n.push(r);for(let e=i+1;e<t.length;e++)t[e]=t[e]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];e=e._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return n}Ld(Da,Da,(t,e,n)=>{if(t.key===e.key&&t.range.start.hasSameParentAs(e.range.start)){const i=t.range.getDifference(e.range).map(e=>new Da(e,t.key,t.oldValue,t.newValue,0)),o=t.range.getIntersection(e.range);return o&&n.aIsStrong&&i.push(new Da(o,e.key,e.newValue,t.newValue,0)),0==i.length?[new cc(0)]:i}return[t]}),Ld(Da,Va,(t,e)=>{if(t.range.start.hasSameParentAs(e.position)&&t.range.containsPosition(e.position)){const n=t.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(e=>new Da(e,t.key,t.oldValue,t.newValue,t.baseVersion));if(e.shouldReceiveAttributes){const i=Hd(e,t.key,t.oldValue);i&&n.unshift(i)}return n}return t.range=t.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[t]}),Ld(Da,Ua,(t,e)=>{const n=[];t.range.start.hasSameParentAs(e.deletionPosition)&&(t.range.containsPosition(e.deletionPosition)||t.range.start.isEqual(e.deletionPosition))&&n.push(Ts._createFromPositionAndShift(e.graveyardPosition,1));const i=t.range._getTransformedByMergeOperation(e);return i.isCollapsed||n.push(i),n.map(e=>new Da(e,t.key,t.oldValue,t.newValue,t.baseVersion))}),Ld(Da,ja,(t,e)=>function(t,e){const n=Ts._createFromPositionAndShift(e.sourcePosition,e.howMany);let i=null,o=[];n.containsRange(t,!0)?i=t:t.start.hasSameParentAs(n.start)?(o=t.getDifference(n),i=t.getIntersection(n)):o=[t];const r=[];for(let t of o){t=t._getTransformedByDeletion(e.sourcePosition,e.howMany);const n=e.getMovedRangeStart(),i=t.start.hasSameParentAs(n);t=t._getTransformedByInsertion(n,e.howMany,i),r.push(...t)}i&&r.push(i._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,!1)[0]);return r}(t.range,e).map(e=>new Da(e,t.key,t.oldValue,t.newValue,t.baseVersion))),Ld(Da,Ha,(t,e)=>{if(t.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||t.range.end.offset++,[t];if(t.range.start.hasSameParentAs(e.splitPosition)&&t.range.containsPosition(e.splitPosition)){const n=t.clone();return n.range=new Ts(e.moveTargetPosition.clone(),t.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),t.range.end=e.splitPosition.clone(),t.range.end.stickiness="toPrevious",[t,n]}return t.range=t.range._getTransformedBySplitOperation(e),[t]}),Ld(Va,Da,(t,e)=>{const n=[t];if(t.shouldReceiveAttributes&&t.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(t.position)){const i=Hd(t,e.key,e.newValue);i&&n.push(i)}return n}),Ld(Va,Va,(t,e,n)=>(t.position.isEqual(e.position)&&n.aIsStrong||(t.position=t.position._getTransformedByInsertOperation(e)),[t])),Ld(Va,ja,(t,e)=>(t.position=t.position._getTransformedByMoveOperation(e),[t])),Ld(Va,Ha,(t,e)=>(t.position=t.position._getTransformedBySplitOperation(e),[t])),Ld(Va,Ua,(t,e)=>(t.position=t.position._getTransformedByMergeOperation(e),[t])),Ld(za,Va,(t,e)=>(t.oldRange&&(t.oldRange=t.oldRange._getTransformedByInsertOperation(e)[0]),t.newRange&&(t.newRange=t.newRange._getTransformedByInsertOperation(e)[0]),[t])),Ld(za,za,(t,e,n)=>{if(t.name==e.name){if(!n.aIsStrong)return[new cc(0)];t.oldRange=e.newRange?e.newRange.clone():null}return[t]}),Ld(za,Ua,(t,e)=>(t.oldRange&&(t.oldRange=t.oldRange._getTransformedByMergeOperation(e)),t.newRange&&(t.newRange=t.newRange._getTransformedByMergeOperation(e)),[t])),Ld(za,ja,(t,e,n)=>{if(t.oldRange&&(t.oldRange=Ts._createFromRanges(t.oldRange._getTransformedByMoveOperation(e))),t.newRange){if(n.abRelation){const i=Ts._createFromRanges(t.newRange._getTransformedByMoveOperation(e));if("left"==n.abRelation.side&&e.targetPosition.isEqual(t.newRange.start))return t.newRange.start.path=n.abRelation.path,t.newRange.end=i.end,[t];if("right"==n.abRelation.side&&e.targetPosition.isEqual(t.newRange.end))return t.newRange.start=i.start,t.newRange.end.path=n.abRelation.path,[t]}t.newRange=Ts._createFromRanges(t.newRange._getTransformedByMoveOperation(e))}return[t]}),Ld(za,Ha,(t,e,n)=>{if(t.oldRange&&(t.oldRange=t.oldRange._getTransformedBySplitOperation(e)),t.newRange){if(n.abRelation){const i=t.newRange._getTransformedBySplitOperation(e);return t.newRange.start.isEqual(e.splitPosition)&&n.abRelation.wasStartBeforeMergedElement?t.newRange.start=ys._createAt(e.insertionPosition):t.newRange.start.isEqual(e.splitPosition)&&!n.abRelation.wasInLeftElement&&(t.newRange.start=ys._createAt(e.moveTargetPosition)),t.newRange.end.isEqual(e.splitPosition)&&n.abRelation.wasInRightElement?t.newRange.end=ys._createAt(e.moveTargetPosition):t.newRange.end.isEqual(e.splitPosition)&&n.abRelation.wasEndBeforeMergedElement?t.newRange.end=ys._createAt(e.insertionPosition):t.newRange.end=i.end,[t]}t.newRange=t.newRange._getTransformedBySplitOperation(e)}return[t]}),Ld(Ua,Va,(t,e)=>(t.sourcePosition.hasSameParentAs(e.position)&&(t.howMany+=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByInsertOperation(e),t.targetPosition=t.targetPosition._getTransformedByInsertOperation(e),[t])),Ld(Ua,Ua,(t,e,n)=>{if(t.sourcePosition.isEqual(e.sourcePosition)&&t.targetPosition.isEqual(e.targetPosition)){if(n.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),t.sourcePosition=new ys(e.graveyardPosition.root,n),t.howMany=0,[t]}return[new cc(0)]}if(t.sourcePosition.isEqual(e.sourcePosition)&&!t.targetPosition.isEqual(e.targetPosition)&&!n.bWasUndone&&"splitAtSource"!=n.abRelation){const i="$graveyard"==t.targetPosition.root.rootName,o="$graveyard"==e.targetPosition.root.rootName,r=i&&!o;if(o&&!i||!r&&n.aIsStrong){const n=e.targetPosition._getTransformedByMergeOperation(e),i=t.targetPosition._getTransformedByMergeOperation(e);return[new ja(n,t.howMany,i,0)]}return[new cc(0)]}return t.sourcePosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByMergeOperation(e),t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),t.graveyardPosition.isEqual(e.graveyardPosition)&&n.aIsStrong||(t.graveyardPosition=t.graveyardPosition._getTransformedByMergeOperation(e)),[t]}),Ld(Ua,ja,(t,e,n)=>{const i=Ts._createFromPositionAndShift(e.sourcePosition,e.howMany);return"remove"==e.type&&!n.bWasUndone&&!n.forceWeakRemove&&t.deletionPosition.hasSameParentAs(e.sourcePosition)&&i.containsPosition(t.sourcePosition)?[new cc(0)]:(t.sourcePosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.sourcePosition.hasSameParentAs(e.sourcePosition)&&(t.howMany-=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByMoveOperation(e),t.targetPosition=t.targetPosition._getTransformedByMoveOperation(e),t.graveyardPosition.isEqual(e.targetPosition)||(t.graveyardPosition=t.graveyardPosition._getTransformedByMoveOperation(e)),[t])}),Ld(Ua,Ha,(t,e,n)=>{if(e.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),t.deletionPosition.isEqual(e.graveyardPosition)&&(t.howMany=e.howMany)),t.targetPosition.isEqual(e.splitPosition)){const i=0!=e.howMany,o=e.graveyardPosition&&t.deletionPosition.isEqual(e.graveyardPosition);if(i||o||"mergeTargetNotMoved"==n.abRelation)return t.sourcePosition=t.sourcePosition._getTransformedBySplitOperation(e),[t]}if(t.sourcePosition.isEqual(e.splitPosition)){if("mergeSourceNotMoved"==n.abRelation)return t.howMany=0,t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t];if("mergeSameElement"==n.abRelation||t.sourcePosition.offset>0)return t.sourcePosition=e.moveTargetPosition.clone(),t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t]}return t.sourcePosition.hasSameParentAs(e.splitPosition)&&(t.howMany=e.splitPosition.offset),t.sourcePosition=t.sourcePosition._getTransformedBySplitOperation(e),t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t]}),Ld(ja,Va,(t,e)=>{const n=Ts._createFromPositionAndShift(t.sourcePosition,t.howMany)._getTransformedByInsertOperation(e,!1)[0];return t.sourcePosition=n.start,t.howMany=n.end.offset-n.start.offset,t.targetPosition.isEqual(e.position)||(t.targetPosition=t.targetPosition._getTransformedByInsertOperation(e)),[t]}),Ld(ja,ja,(t,e,n)=>{const i=Ts._createFromPositionAndShift(t.sourcePosition,t.howMany),o=Ts._createFromPositionAndShift(e.sourcePosition,e.howMany);let r,s=n.aIsStrong,a=!n.aIsStrong;if("insertBefore"==n.abRelation||"insertAfter"==n.baRelation?a=!0:"insertAfter"!=n.abRelation&&"insertBefore"!=n.baRelation||(a=!1),r=t.targetPosition.isEqual(e.targetPosition)&&a?t.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):t.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Wd(t,e)&&Wd(e,t))return[e.getReversed()];if(i.containsPosition(e.targetPosition)&&i.containsRange(o,!0))return i.start=i.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),i.end=i.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),qd([i],r);if(o.containsPosition(t.targetPosition)&&o.containsRange(i,!0))return i.start=i.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),i.end=i.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),qd([i],r);const c=In(t.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if("prefix"==c||"extension"==c)return i.start=i.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),i.end=i.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),qd([i],r);"remove"!=t.type||"remove"==e.type||n.aWasUndone||n.forceWeakRemove?"remove"==t.type||"remove"!=e.type||n.bWasUndone||n.forceWeakRemove||(s=!1):s=!0;const l=[],d=i.getDifference(o);for(const t of d){t.start=t.start._getTransformedByDeletion(e.sourcePosition,e.howMany),t.end=t.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const n="same"==In(t.start.getParentPath(),e.getMovedRangeStart().getParentPath()),i=t._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,n);l.push(...i)}const u=i.getIntersection(o);return null!==u&&s&&(u.start=u.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),u.end=u.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),0===l.length?l.push(u):1==l.length?o.start.isBefore(i.start)||o.start.isEqual(i.start)?l.unshift(u):l.push(u):l.splice(1,0,u)),0===l.length?[new cc(t.baseVersion)]:qd(l,r)}),Ld(ja,Ha,(t,e,n)=>{let i=t.targetPosition.clone();t.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&"moveTargetAfter"!=n.abRelation||(i=t.targetPosition._getTransformedBySplitOperation(e));const o=Ts._createFromPositionAndShift(t.sourcePosition,t.howMany);if(o.end.isEqual(e.insertionPosition))return e.graveyardPosition||t.howMany++,t.targetPosition=i,[t];if(o.start.hasSameParentAs(e.splitPosition)&&o.containsPosition(e.splitPosition)){let t=new Ts(e.splitPosition,o.end);t=t._getTransformedBySplitOperation(e);return qd([new Ts(o.start,e.splitPosition),t],i)}t.targetPosition.isEqual(e.splitPosition)&&"insertAtSource"==n.abRelation&&(i=e.moveTargetPosition),t.targetPosition.isEqual(e.insertionPosition)&&"insertBetween"==n.abRelation&&(i=t.targetPosition);const r=[o._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const i=o.start.isEqual(e.graveyardPosition)||o.containsPosition(e.graveyardPosition);t.howMany>1&&i&&!n.aWasUndone&&r.push(Ts._createFromPositionAndShift(e.insertionPosition,1))}return qd(r,i)}),Ld(ja,Ua,(t,e,n)=>{const i=Ts._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.deletionPosition.hasSameParentAs(t.sourcePosition)&&i.containsPosition(e.sourcePosition))if("remove"!=t.type||n.forceWeakRemove){if(1==t.howMany)return n.bWasUndone?(t.sourcePosition=e.graveyardPosition.clone(),t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),[t]):[new cc(0)]}else if(!n.aWasUndone){const n=[];let i=e.graveyardPosition.clone(),o=e.targetPosition._getTransformedByMergeOperation(e);t.howMany>1&&(n.push(new ja(t.sourcePosition,t.howMany-1,t.targetPosition,0)),i=i._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany-1),o=o._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany-1));const r=e.deletionPosition._getCombined(t.sourcePosition,t.targetPosition),s=new ja(i,1,r,0),a=s.getMovedRangeStart().path.slice();a.push(0);const c=new ys(s.targetPosition.root,a);o=o._getTransformedByMove(i,r,1);const l=new ja(o,e.howMany,c,0);return n.push(s),n.push(l),n}const o=Ts._createFromPositionAndShift(t.sourcePosition,t.howMany)._getTransformedByMergeOperation(e);return t.sourcePosition=o.start,t.howMany=o.end.offset-o.start.offset,t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),[t]}),Ld(Ba,Va,(t,e)=>(t.position=t.position._getTransformedByInsertOperation(e),[t])),Ld(Ba,Ua,(t,e)=>t.position.isEqual(e.deletionPosition)?(t.position=e.graveyardPosition.clone(),t.position.stickiness="toNext",[t]):(t.position=t.position._getTransformedByMergeOperation(e),[t])),Ld(Ba,ja,(t,e)=>(t.position=t.position._getTransformedByMoveOperation(e),[t])),Ld(Ba,Ba,(t,e,n)=>{if(t.position.isEqual(e.position)){if(!n.aIsStrong)return[new cc(0)];t.oldName=e.newName}return[t]}),Ld(Ba,Ha,(t,e)=>{if("same"==In(t.position.path,e.splitPosition.getParentPath())&&!e.graveyardPosition){const e=new Ba(t.position.getShiftedBy(1),t.oldName,t.newName,0);return[t,e]}return t.position=t.position._getTransformedBySplitOperation(e),[t]}),Ld(Fa,Fa,(t,e,n)=>{if(t.root===e.root&&t.key===e.key){if(!n.aIsStrong||t.newValue===e.newValue)return[new cc(0)];t.oldValue=e.newValue}return[t]}),Ld(Ha,Va,(t,e)=>(t.splitPosition.hasSameParentAs(e.position)&&t.splitPosition.offset<e.position.offset&&(t.howMany+=e.howMany),t.splitPosition=t.splitPosition._getTransformedByInsertOperation(e),t.insertionPosition=Ha.getInsertionPosition(t.splitPosition),[t])),Ld(Ha,Ua,(t,e,n)=>{if(!t.graveyardPosition&&!n.bWasUndone&&t.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const i=new ys(e.graveyardPosition.root,n),o=Ha.getInsertionPosition(new ys(e.graveyardPosition.root,n)),r=new Ha(i,0,null,0);return r.insertionPosition=o,t.splitPosition=t.splitPosition._getTransformedByMergeOperation(e),t.insertionPosition=Ha.getInsertionPosition(t.splitPosition),t.graveyardPosition=r.insertionPosition.clone(),t.graveyardPosition.stickiness="toNext",[r,t]}return t.splitPosition.hasSameParentAs(e.deletionPosition)&&!t.splitPosition.isAfter(e.deletionPosition)&&t.howMany--,t.splitPosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.splitPosition=t.splitPosition._getTransformedByMergeOperation(e),t.insertionPosition=Ha.getInsertionPosition(t.splitPosition),t.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedByMergeOperation(e)),[t]}),Ld(Ha,ja,(t,e,n)=>{const i=Ts._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.graveyardPosition){const o=i.start.isEqual(t.graveyardPosition)||i.containsPosition(t.graveyardPosition);if(!n.bWasUndone&&o){const n=t.splitPosition._getTransformedByMoveOperation(e),i=t.graveyardPosition._getTransformedByMoveOperation(e),o=i.path.slice();o.push(0);const r=new ys(i.root,o);return[new ja(n,t.howMany,r,0)]}t.graveyardPosition=t.graveyardPosition._getTransformedByMoveOperation(e)}if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&i.containsPosition(t.splitPosition)){const n=e.howMany-(t.splitPosition.offset-e.sourcePosition.offset);return t.howMany-=n,t.splitPosition.hasSameParentAs(e.targetPosition)&&t.splitPosition.offset<e.targetPosition.offset&&(t.howMany+=e.howMany),t.splitPosition=e.sourcePosition.clone(),t.insertionPosition=Ha.getInsertionPosition(t.splitPosition),[t]}return!t.splitPosition.isEqual(e.targetPosition)||"insertAtSource"!=n.baRelation&&"splitBefore"!=n.abRelation?(e.sourcePosition.isEqual(e.targetPosition)||(t.splitPosition.hasSameParentAs(e.sourcePosition)&&t.splitPosition.offset<=e.sourcePosition.offset&&(t.howMany-=e.howMany),t.splitPosition.hasSameParentAs(e.targetPosition)&&t.splitPosition.offset<e.targetPosition.offset&&(t.howMany+=e.howMany)),t.splitPosition.stickiness="toNone",t.splitPosition=t.splitPosition._getTransformedByMoveOperation(e),t.splitPosition.stickiness="toNext",t.graveyardPosition?t.insertionPosition=t.insertionPosition._getTransformedByMoveOperation(e):t.insertionPosition=Ha.getInsertionPosition(t.splitPosition),[t]):(t.howMany+=e.howMany,t.splitPosition=t.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),t.insertionPosition=Ha.getInsertionPosition(t.splitPosition),[t])}),Ld(Ha,Ha,(t,e,n)=>{if(t.splitPosition.isEqual(e.splitPosition)){if(!t.graveyardPosition&&!e.graveyardPosition)return[new cc(0)];if(t.graveyardPosition&&e.graveyardPosition&&t.graveyardPosition.isEqual(e.graveyardPosition))return[new cc(0)];if("splitBefore"==n.abRelation)return t.howMany=0,t.graveyardPosition=t.graveyardPosition._getTransformedBySplitOperation(e),[t]}if(t.graveyardPosition&&e.graveyardPosition&&t.graveyardPosition.isEqual(e.graveyardPosition)){const i="$graveyard"==t.splitPosition.root.rootName,o="$graveyard"==e.splitPosition.root.rootName,r=i&&!o;if(o&&!i||!r&&n.aIsStrong){const n=[];return e.howMany&&n.push(new ja(e.moveTargetPosition,e.howMany,e.splitPosition,0)),t.howMany&&n.push(new ja(t.splitPosition,t.howMany,t.moveTargetPosition,0)),n}return[new cc(0)]}if(t.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedBySplitOperation(e)),t.splitPosition.isEqual(e.insertionPosition)&&"splitBefore"==n.abRelation)return t.howMany++,[t];if(e.splitPosition.isEqual(t.insertionPosition)&&"splitBefore"==n.baRelation){const n=e.insertionPosition.path.slice();n.push(0);const i=new ys(e.insertionPosition.root,n);return[t,new ja(t.insertionPosition,1,i,0)]}return t.splitPosition.hasSameParentAs(e.splitPosition)&&t.splitPosition.offset<e.splitPosition.offset&&(t.howMany-=e.howMany),t.splitPosition=t.splitPosition._getTransformedBySplitOperation(e),t.insertionPosition=Ha.getInsertionPosition(t.splitPosition),[t]});class Yd extends od{constructor(t){super(t),this._stack=[],this._createdBatches=new WeakSet,this.refresh()}refresh(){this.isEnabled=this._stack.length>0}addBatch(t){const e=this.editor.model.document.selection,n={ranges:e.hasOwnRange?Array.from(e.getRanges()):[],isBackward:e.isBackward};this._stack.push({batch:t,selection:n}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(t,e,n){const i=this.editor.model,o=i.document,r=[];for(const e of t){const t=Gd(e,n).find(t=>t.start.root!=o.graveyard);t&&r.push(t)}r.length&&i.change(t=>{t.setSelection(r,{backward:e})})}_undo(t,e){const n=this.editor.model,i=n.document;this._createdBatches.add(e);const o=t.operations.slice().filter(t=>t.isDocumentOperation);o.reverse();for(const t of o){const o=t.baseVersion+1,r=Array.from(i.history.getOperations(o)),s=zd([t.getReversed()],r,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(const o of s)e.addOperation(o),n.applyOperation(o),i.history.setOperationAsUndone(t,o)}}}function Gd(t,e){const n=t.getTransformedByOperations(e);n.sort((t,e)=>t.start.isBefore(e.start)?-1:1);for(let t=1;t<n.length;t++){const e=n[t-1],i=n[t];e.end.isTouching(i.start)&&(e.end=i.end,n.splice(t,1),t--)}return n}class $d extends Yd{execute(t=null){const e=t?this._stack.findIndex(e=>e.batch==t):this._stack.length-1,n=this._stack.splice(e,1)[0],i=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(i,()=>{this._undo(n.batch,i);const t=this.editor.model.document.history.getOperations(n.batch.baseVersion);this._restoreSelection(n.selection.ranges,n.selection.isBackward,t),this.fire("revert",n.batch,i)}),this.refresh()}}class Kd extends Yd{execute(){const t=this._stack.pop(),e=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(e,()=>{const n=t.batch.operations[t.batch.operations.length-1].baseVersion+1,i=this.editor.model.document.history.getOperations(n);this._restoreSelection(t.selection.ranges,t.selection.isBackward,i),this._undo(t.batch,e)}),this.refresh()}}class Qd extends Zl{static get pluginName(){return"UndoEditing"}constructor(t){super(t),this._batchRegistry=new WeakSet}init(){const t=this.editor;this._undoCommand=new $d(t),this._redoCommand=new Kd(t),t.commands.add("undo",this._undoCommand),t.commands.add("redo",this._redoCommand),this.listenTo(t.model,"applyOperation",(t,e)=>{const n=e[0];if(!n.isDocumentOperation)return;const i=n.batch,o=this._redoCommand._createdBatches.has(i),r=this._undoCommand._createdBatches.has(i);this._batchRegistry.has(i)||"transparent"==i.type&&!o&&!r||(o?this._undoCommand.addBatch(i):r||(this._undoCommand.addBatch(i),this._redoCommand.clearStack()),this._batchRegistry.add(i))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(t,e,n)=>{this._redoCommand.addBatch(n)}),t.keystrokes.set("CTRL+Z","undo"),t.keystrokes.set("CTRL+Y","redo"),t.keystrokes.set("CTRL+SHIFT+Z","redo")}}var Jd='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',Zd='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';class Xd extends Zl{init(){const t=this.editor,e=t.locale,n=t.t,i="ltr"==e.uiLanguageDirection?Jd:Zd,o="ltr"==e.uiLanguageDirection?Zd:Jd;this._addButton("undo",n("Undo"),"CTRL+Z",i),this._addButton("redo",n("Redo"),"CTRL+Y",o)}_addButton(t,e,n,i){const o=this.editor;o.ui.componentFactory.add(t,r=>{const s=o.commands.get(t),a=new Ll(r);return a.set({label:e,icon:i,keystroke:n,tooltip:!0}),a.bind("isEnabled").to(s,"isEnabled"),this.listenTo(a,"execute",()=>{o.execute(t),o.editing.view.focus()}),a})}}class tu extends Zl{static get requires(){return[Qd,Xd]}static get pluginName(){return"Undo"}}class eu{constructor(t){this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}xn(eu,Ui);class nu extends eu{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new An({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if("string"!=typeof t)throw new hn.b("pendingactions-add-invalid-message: The message must be a string.",this);const e=Object.create(Ui);return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}class iu{constructor(){const t=new window.FileReader;this._reader=t,this._data=void 0,this.set("loaded",0),t.onprogress=t=>{this.loaded=t.loaded}}get error(){return this._reader.error}get data(){return this._data}read(t){const e=this._reader;return this.total=t.size,new Promise((n,i)=>{e.onload=()=>{const t=e.result;this._data=t,n(t)},e.onerror=()=>{i("error")},e.onabort=()=>{i("aborted")},this._reader.readAsDataURL(t)})}abort(){this._reader.abort()}}xn(iu,Ui);class ou extends Zl{static get pluginName(){return"FileRepository"}static get requires(){return[nu]}init(){this.loaders=new An,this.loaders.on("add",()=>this._updatePendingAction()),this.loaders.on("remove",()=>this._updatePendingAction()),this._loadersMap=new Map,this._pendingAction=null,this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0)}getLoader(t){return this._loadersMap.get(t)||null}createLoader(t){if(!this.createUploadAdapter)return console.warn(Object(hn.a)("filerepository-no-upload-adapter: Upload adapter is not defined.")),null;const e=new ru(Promise.resolve(t),this.createUploadAdapter);return this.loaders.add(e),this._loadersMap.set(t,e),t instanceof Promise&&e.file.then(t=>{this._loadersMap.set(t,e)}).catch(()=>{}),e.on("change:uploaded",()=>{let t=0;for(const e of this.loaders)t+=e.uploaded;this.uploaded=t}),e.on("change:uploadTotal",()=>{let t=0;for(const e of this.loaders)e.uploadTotal&&(t+=e.uploadTotal);this.uploadTotal=t}),e}destroyLoader(t){const e=t instanceof ru?t:this.getLoader(t);e._destroy(),this.loaders.remove(e),this._loadersMap.forEach((t,n)=>{t===e&&this._loadersMap.delete(n)})}_updatePendingAction(){const t=this.editor.plugins.get(nu);if(this.loaders.length){if(!this._pendingAction){const e=this.editor.t,n=t=>`${e("Upload in progress")} ${parseInt(t)}%.`;this._pendingAction=t.add(n(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",n)}}else t.remove(this._pendingAction),this._pendingAction=null}}xn(ou,Ui);class ru{constructor(t,e){this.id=dn(),this._filePromiseWrapper=this._createFilePromiseWrapper(t),this._adapter=e(this),this._reader=new iu,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0),this.set("uploadResponse",null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then(t=>this._filePromiseWrapper?t:null):Promise.resolve(null)}get data(){return this._reader.data}read(){if("idle"!=this.status)throw new hn.b("filerepository-read-wrong-status: You cannot call read if the status is different than idle.",this);return this.status="reading",this.file.then(t=>this._reader.read(t)).then(t=>{if("reading"!==this.status)throw this.status;return this.status="idle",t}).catch(t=>{if("aborted"===t)throw this.status="aborted","aborted";throw this.status="error",this._reader.error?this._reader.error:t})}upload(){if("idle"!=this.status)throw new hn.b("filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.",this);return this.status="uploading",this.file.then(()=>this._adapter.upload()).then(t=>(this.uploadResponse=t,this.status="idle",t)).catch(t=>{if("aborted"===this.status)throw"aborted";throw this.status="error",t})}abort(){const t=this.status;this.status="aborted",this._filePromiseWrapper.isFulfilled?"reading"==t?this._reader.abort():"uploading"==t&&this._adapter.abort&&this._adapter.abort():(this._filePromiseWrapper.promise.catch(()=>{}),this._filePromiseWrapper.rejecter("aborted")),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(t){const e={};return e.promise=new Promise((n,i)=>{e.rejecter=i,e.isFulfilled=!1,t.then(t=>{e.isFulfilled=!0,n(t)}).catch(t=>{e.isFulfilled=!0,i(t)})}),e}}xn(ru,Ui);function su(){let t=function(t){t=t.toLowerCase();const e=document.cookie.split(";");for(const n of e){const e=n.split("=");if(decodeURIComponent(e[0].trim().toLowerCase())===t)return decodeURIComponent(e[1])}return null}("ckCsrfToken");var e,n;return t&&40==t.length||(t=function(t){let e="";const n=new Uint8Array(t);window.crypto.getRandomValues(n);for(let t=0;t<n.length;t++){const i="abcdefghijklmnopqrstuvwxyz0123456789".charAt(n[t]%"abcdefghijklmnopqrstuvwxyz0123456789".length);e+=Math.random()>.5?i.toUpperCase():i}return e}(40),e="ckCsrfToken",n=t,document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(n)+";path=/"),t}class au extends Zl{static get requires(){return[ou]}static get pluginName(){return"CKFinderUploadAdapter"}init(){const t=this.editor.config.get("ckfinder.uploadUrl");t&&(this.editor.plugins.get(ou).createUploadAdapter=e=>new cu(e,t,this.editor.t))}}class cu{constructor(t,e,n){this.loader=t,this.url=e,this.t=n}upload(){return this.loader.file.then(t=>new Promise((e,n)=>{this._initRequest(),this._initListeners(e,n,t),this._sendRequest(t)}))}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const t=this.xhr=new XMLHttpRequest;t.open("POST",this.url,!0),t.responseType="json"}_initListeners(t,e,n){const i=this.xhr,o=this.loader,r=(0,this.t)("Cannot upload file:")+` ${n.name}.`;i.addEventListener("error",()=>e(r)),i.addEventListener("abort",()=>e()),i.addEventListener("load",()=>{const n=i.response;if(!n||!n.uploaded)return e(n&&n.error&&n.error.message?n.error.message:r);t({default:n.url})}),i.upload&&i.upload.addEventListener("progress",t=>{t.lengthComputable&&(o.uploadTotal=t.total,o.uploaded=t.loaded)})}_sendRequest(t){const e=new FormData;e.append("upload",t),e.append("ckCsrfToken",su()),this.xhr.send(e)}}function lu(t,e,n,i){let o,r=null;"function"==typeof i?o=i:(r=t.commands.get(i),o=()=>{t.execute(i)}),t.model.document.on("change:data",(i,s)=>{if(r&&!r.isEnabled||!e.isEnabled)return;if("transparent"==s.type)return;const a=Array.from(t.model.document.differ.getChanges()),c=a[0];if(1!=a.length||"insert"!==c.type||"$text"!=c.name||1!=c.length)return;const l=c.position.parent;if(!l.is("paragraph")||1!==l.childCount)return;const d=n.exec(l.getChild(0).data);d&&t.model.enqueueChange(t=>{const e=t.createPositionAt(l,0),n=t.createPositionAt(l,d[0].length),i=new js(e,n);!1!==o({match:d})&&t.remove(i),i.detach()})})}function du(t,e,n,i){let o,r;n instanceof RegExp?o=n:r=n,r=r||(t=>{let e;const n=[],i=[];for(;null!==(e=o.exec(t))&&!(e&&e.length<4);){let{index:t,1:o,2:r,3:s}=e;const a=o+r+s;t+=e[0].length-a.length;const c=[t,t+o.length],l=[t+o.length+r.length,t+o.length+r.length+s.length];n.push(c),n.push(l),i.push([t+o.length,t+o.length+r.length])}return{remove:n,format:i}}),t.model.document.on("change:data",(n,o)=>{if("transparent"==o.type||!e.isEnabled)return;const s=t.model,a=s.document.selection;if(!a.isCollapsed)return;const c=Array.from(s.document.differ.getChanges()),l=c[0];if(1!=c.length||"insert"!==l.type||"$text"!=l.name||1!=l.length)return;const d=a.focus,u=d.parent,{text:h,range:f}=function(t,e){let n=t.start;return{text:Array.from(t.getItems()).reduce((t,i)=>!i.is("text")&&!i.is("textProxy")||i.getAttribute("code")?(n=e.createPositionAfter(i),""):t+i.data,""),range:e.createRange(n,t.end)}}(s.createRange(s.createPositionAt(u,0),d),s),g=r(h),m=uu(f.start,g.format,s),p=uu(f.start,g.remove,s);m.length&&p.length&&s.enqueueChange(t=>{if(!1!==i(t,m))for(const e of p.reverse())t.remove(e)})})}function uu(t,e,n){return e.filter(t=>void 0!==t[0]&&void 0!==t[1]).map(e=>n.createRange(t.getShiftedBy(e[0]),t.getShiftedBy(e[1])))}function hu(t,e){return(n,i)=>{if(!t.commands.get(e).isEnabled)return!1;const o=t.model.schema.getValidRanges(i,e);for(const t of o)n.setAttribute(e,!0,t);n.removeSelectionAttribute(e)}}class fu extends od{constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,n=e.document.selection,i=void 0===t.forceValue?!this.value:t.forceValue;e.change(t=>{if(n.isCollapsed)i?t.setSelectionAttribute(this.attributeKey,!0):t.removeSelectionAttribute(this.attributeKey);else{const o=e.schema.getValidRanges(n.getRanges(),this.attributeKey);for(const e of o)i?t.setAttribute(this.attributeKey,i,e):t.removeAttribute(this.attributeKey,e)}})}_getValueFromFirstAllowedNode(){const t=this.editor.model,e=t.schema,n=t.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(const t of n.getRanges())for(const n of t.getItems())if(e.checkAttribute(n,this.attributeKey))return n.hasAttribute(this.attributeKey);return!1}}class gu extends Zl{static get pluginName(){return"BoldEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:"bold"}),t.model.schema.setAttributeProperties("bold",{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:"bold",view:"strong",upcastAlso:["b",t=>{const e=t.getStyle("font-weight");return e?"bold"==e||Number(e)>=600?{name:!0,styles:["font-weight"]}:void 0:null}]}),t.commands.add("bold",new fu(t,"bold")),t.keystrokes.set("CTRL+B","bold")}}class mu extends Zl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("bold",n=>{const i=t.commands.get("bold"),o=new Ll(n);return o.set({label:e("Bold"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>{t.execute("bold"),t.editing.view.focus()}),o})}}class pu extends Zl{static get pluginName(){return"ItalicEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:"italic"}),t.model.schema.setAttributeProperties("italic",{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:"italic",view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add("italic",new fu(t,"italic")),t.keystrokes.set("CTRL+I","italic")}}class bu extends Zl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("italic",n=>{const i=t.commands.get("italic"),o=new Ll(n);return o.set({label:e("Italic"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>{t.execute("italic"),t.editing.view.focus()}),o})}}function wu(t){const e=t.next();return e.done?null:e.value}class ku extends od{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(t={}){const e=this.editor.model,n=e.schema,i=e.document.selection,o=Array.from(i.getSelectedBlocks()),r=void 0===t.forceValue?!this.value:t.forceValue;e.change(t=>{if(r){const e=o.filter(t=>_u(t)||yu(n,t));this._applyQuote(t,e)}else this._removeQuote(t,o.filter(_u))})}_getValue(){const t=wu(this.editor.model.document.selection.getSelectedBlocks());return!(!t||!_u(t))}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=wu(t.getSelectedBlocks());return!!n&&yu(e,n)}_removeQuote(t,e){vu(t,e).reverse().forEach(e=>{if(e.start.isAtStart&&e.end.isAtEnd)return void t.unwrap(e.start.parent);if(e.start.isAtStart){const n=t.createPositionBefore(e.start.parent);return void t.move(e,n)}e.end.isAtEnd||t.split(e.end);const n=t.createPositionAfter(e.end.parent);t.move(e,n)})}_applyQuote(t,e){const n=[];vu(t,e).reverse().forEach(e=>{let i=_u(e.start);i||(i=t.createElement("blockQuote"),t.wrap(e,i)),n.push(i)}),n.reverse().reduce((e,n)=>e.nextSibling==n?(t.merge(t.createPositionAfter(e)),e):n)}}function _u(t){return"blockQuote"==t.parent.name?t.parent:null}function vu(t,e){let n,i=0;const o=[];for(;i<e.length;){const r=e[i],s=e[i+1];n||(n=t.createPositionBefore(r)),s&&r.nextSibling==s||(o.push(t.createRange(n,t.createPositionAfter(r))),n=null),i++}return o}function yu(t,e){const n=t.checkChild(e.parent,"blockQuote"),i=t.checkChild(["$root","blockQuote"],e);return n&&i}class xu extends Zl{static get pluginName(){return"BlockQuoteEditing"}init(){const t=this.editor,e=t.model.schema;t.commands.add("blockQuote",new ku(t)),e.register("blockQuote",{allowWhere:"$block",allowContentOf:"$root"}),e.addChildCheck((t,e)=>{if(t.endsWith("blockQuote")&&"blockQuote"==e.name)return!1}),t.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),t.model.document.registerPostFixer(n=>{const i=t.model.document.differ.getChanges();for(const t of i)if("insert"==t.type){const i=t.position.nodeAfter;if(!i)continue;if(i.is("blockQuote")&&i.isEmpty)return n.remove(i),!0;if(i.is("blockQuote")&&!e.checkChild(t.position,i))return n.unwrap(i),!0;if(i.is("element")){const t=n.createRangeIn(i);for(const i of t.getItems())if(i.is("blockQuote")&&!e.checkChild(n.createPositionBefore(i),i))return n.unwrap(i),!0}}else if("remove"==t.type){const e=t.position.parent;if(e.is("blockQuote")&&e.isEmpty)return n.remove(e),!0}return!1})}afterInit(){const t=this.editor.commands.get("blockQuote");this.listenTo(this.editor.editing.view.document,"enter",(e,n)=>{const i=this.editor.model.document,o=i.selection.getLastPosition().parent;i.selection.isCollapsed&&o.isEmpty&&t.value&&(this.editor.execute("blockQuote"),this.editor.editing.view.scrollToTheSelection(),n.preventDefault(),e.stop())})}}n(43);class Au extends Zl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("blockQuote",n=>{const i=t.commands.get("blockQuote"),o=new Ll(n);return o.set({label:e("Block quote"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(o,"execute",()=>{t.execute("blockQuote"),t.editing.view.focus()}),o})}}class Cu extends Zl{static get pluginName(){return"CKFinderUI"}init(){const t=this.editor,e=t.ui.componentFactory,n=t.t;e.add("ckfinder",e=>{const i=t.commands.get("ckfinder"),o=new Ll(e);return o.set({label:n("Insert image or file"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',tooltip:!0}),o.bind("isEnabled").to(i),o.on("execute",()=>{t.execute("ckfinder"),t.editing.view.focus()}),o})}}class Tu extends gr{observe(t){this.listenTo(t,"load",(t,e)=>{"IMG"==e.target.tagName&&this._fireEvents(e)},{useCapture:!0})}_fireEvents(t){this.isEnabled&&(this.document.fire("layoutChanged"),this.document.fire("imageLoaded",t))}}class Pu{constructor(){this._stack=[]}add(t,e){const n=this._stack,i=n[0];this._insertDescriptor(t);const o=n[0];i===o||Su(i,o)||this.fire("change:top",{oldDescriptor:i,newDescriptor:o,writer:e})}remove(t,e){const n=this._stack,i=n[0];this._removeDescriptor(t);const o=n[0];i===o||Su(i,o)||this.fire("change:top",{oldDescriptor:i,newDescriptor:o,writer:e})}_insertDescriptor(t){const e=this._stack,n=e.findIndex(e=>e.id===t.id);if(Su(t,e[n]))return;n>-1&&e.splice(n,1);let i=0;for(;e[i]&&Eu(e[i],t);)i++;e.splice(i,0,t)}_removeDescriptor(t){const e=this._stack,n=e.findIndex(e=>e.id===t);n>-1&&e.splice(n,1)}}function Su(t,e){return t&&e&&t.priority==e.priority&&Mu(t.classes)==Mu(e.classes)}function Eu(t,e){return t.priority>e.priority||!(t.priority<e.priority)&&Mu(t.classes)>Mu(e.classes)}function Mu(t){return Array.isArray(t)?t.sort().join(","):t}xn(Pu,mn);n(45);const Iu=_l("px"),Nu=nr.document.body;class Ou extends hl{constructor(t){super(t);const e=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",e.to("position",t=>"ck-balloon-panel_"+t),e.if("isVisible","ck-balloon-panel_visible"),e.if("withArrow","ck-balloon-panel_with-arrow"),e.to("class")],style:{top:e.to("top",Iu),left:e.to("left",Iu)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(t){this.show();const e=Ou.defaultPositions,n=Object.assign({},{element:this.element,positions:[e.southArrowNorth,e.southArrowNorthMiddleWest,e.southArrowNorthMiddleEast,e.southArrowNorthWest,e.southArrowNorthEast,e.northArrowSouth,e.northArrowSouthMiddleWest,e.northArrowSouthMiddleEast,e.northArrowSouthWest,e.northArrowSouthEast],limiter:Nu,fitInViewport:!0},t),i=Ou._getOptimalPosition(n),o=parseInt(i.left),r=parseInt(i.top),s=i.name;Object.assign(this,{top:r,left:o,position:s})}pin(t){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(t):this._stopPinning()},this._startPinning(t),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(t){this.attachTo(t);const e=Ru(t.target),n=t.limiter?Ru(t.limiter):Nu;this.listenTo(nr.document,"scroll",(i,o)=>{const r=o.target,s=e&&r.contains(e),a=n&&r.contains(n);!s&&!a&&e&&n||this.attachTo(t)},{useCapture:!0}),this.listenTo(nr.window,"resize",()=>{this.attachTo(t)})}_stopPinning(){this.stopListening(nr.document,"scroll"),this.stopListening(nr.window,"resize")}}function Ru(t){return nn(t)?t:Zr(t)?t.commonAncestorContainer:"function"==typeof t?Ru(t()):null}function Du(t,e){return t.top-e.height-Ou.arrowVerticalOffset}function Lu(t){return t.bottom+Ou.arrowVerticalOffset}Ou.arrowHorizontalOffset=25,Ou.arrowVerticalOffset=10,Ou._getOptimalPosition=El,Ou.defaultPositions={northWestArrowSouthWest:(t,e)=>({top:Du(t,e),left:t.left-Ou.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouthMiddleWest:(t,e)=>({top:Du(t,e),left:t.left-.25*e.width-Ou.arrowHorizontalOffset,name:"arrow_smw"}),northWestArrowSouth:(t,e)=>({top:Du(t,e),left:t.left-e.width/2,name:"arrow_s"}),northWestArrowSouthMiddleEast:(t,e)=>({top:Du(t,e),left:t.left-.75*e.width+Ou.arrowHorizontalOffset,name:"arrow_sme"}),northWestArrowSouthEast:(t,e)=>({top:Du(t,e),left:t.left-e.width+Ou.arrowHorizontalOffset,name:"arrow_se"}),northArrowSouthWest:(t,e)=>({top:Du(t,e),left:t.left+t.width/2-Ou.arrowHorizontalOffset,name:"arrow_sw"}),northArrowSouthMiddleWest:(t,e)=>({top:Du(t,e),left:t.left+t.width/2-.25*e.width-Ou.arrowHorizontalOffset,name:"arrow_smw"}),northArrowSouth:(t,e)=>({top:Du(t,e),left:t.left+t.width/2-e.width/2,name:"arrow_s"}),northArrowSouthMiddleEast:(t,e)=>({top:Du(t,e),left:t.left+t.width/2-.75*e.width+Ou.arrowHorizontalOffset,name:"arrow_sme"}),northArrowSouthEast:(t,e)=>({top:Du(t,e),left:t.left+t.width/2-e.width+Ou.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouthWest:(t,e)=>({top:Du(t,e),left:t.right-Ou.arrowHorizontalOffset,name:"arrow_sw"}),northEastArrowSouthMiddleWest:(t,e)=>({top:Du(t,e),left:t.right-.25*e.width-Ou.arrowHorizontalOffset,name:"arrow_smw"}),northEastArrowSouth:(t,e)=>({top:Du(t,e),left:t.right-e.width/2,name:"arrow_s"}),northEastArrowSouthMiddleEast:(t,e)=>({top:Du(t,e),left:t.right-.75*e.width+Ou.arrowHorizontalOffset,name:"arrow_sme"}),northEastArrowSouthEast:(t,e)=>({top:Du(t,e),left:t.right-e.width+Ou.arrowHorizontalOffset,name:"arrow_se"}),southWestArrowNorthWest:(t,e)=>({top:Lu(t),left:t.left-Ou.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorthMiddleWest:(t,e)=>({top:Lu(t),left:t.left-.25*e.width-Ou.arrowHorizontalOffset,name:"arrow_nmw"}),southWestArrowNorth:(t,e)=>({top:Lu(t),left:t.left-e.width/2,name:"arrow_n"}),southWestArrowNorthMiddleEast:(t,e)=>({top:Lu(t),left:t.left-.75*e.width+Ou.arrowHorizontalOffset,name:"arrow_nme"}),southWestArrowNorthEast:(t,e)=>({top:Lu(t),left:t.left-e.width+Ou.arrowHorizontalOffset,name:"arrow_ne"}),southArrowNorthWest:(t,e)=>({top:Lu(t),left:t.left+t.width/2-Ou.arrowHorizontalOffset,name:"arrow_nw"}),southArrowNorthMiddleWest:(t,e)=>({top:Lu(t),left:t.left+t.width/2-.25*e.width-Ou.arrowHorizontalOffset,name:"arrow_nmw"}),southArrowNorth:(t,e)=>({top:Lu(t),left:t.left+t.width/2-e.width/2,name:"arrow_n"}),southArrowNorthMiddleEast:(t,e)=>({top:Lu(t),left:t.left+t.width/2-.75*e.width+Ou.arrowHorizontalOffset,name:"arrow_nme"}),southArrowNorthEast:(t,e)=>({top:Lu(t),left:t.left+t.width/2-e.width+Ou.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorthWest:(t,e)=>({top:Lu(t),left:t.right-Ou.arrowHorizontalOffset,name:"arrow_nw"}),southEastArrowNorthMiddleWest:(t,e)=>({top:Lu(t),left:t.right-.25*e.width-Ou.arrowHorizontalOffset,name:"arrow_nmw"}),southEastArrowNorth:(t,e)=>({top:Lu(t),left:t.right-e.width/2,name:"arrow_n"}),southEastArrowNorthMiddleEast:(t,e)=>({top:Lu(t),left:t.right-.75*e.width+Ou.arrowHorizontalOffset,name:"arrow_nme"}),southEastArrowNorthEast:(t,e)=>({top:Lu(t),left:t.right-e.width+Ou.arrowHorizontalOffset,name:"arrow_ne"})};function ju(t,e,n){return t&&zu(t)&&!n.isInline(e)}function Vu(t){return t.getAttribute("widget-type-around")}function zu(t){return!!t.is("element")&&!!t.getCustomProperty("widget")}function Bu(t,e,n={}){return e.setAttribute("contenteditable","false",t),e.addClass("ck-widget",t),e.setCustomProperty("widget",!0,t),t.getFillerOffset=Yu,n.label&&function(t,e,n){n.setCustomProperty("widgetLabel",e,t)}(t,n.label,e),n.hasSelectionHandle&&function(t,e){const n=e.createUIElement("div",{class:"ck ck-widget__selection-handle"},(function(t){const e=this.toDomElement(t),n=new Rl;return n.set("content",'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>'),n.render(),e.appendChild(n.element),e}));e.insert(e.createPositionAt(t,0),n),e.addClass(["ck-widget_with-selection-handle"],t)}(t,e),Fu(t,e,(t,e,n)=>n.addClass(i(e.classes),t),(t,e,n)=>n.removeClass(i(e.classes),t)),t;function i(t){return Array.isArray(t)?t:[t]}}function Fu(t,e,n,i){const o=new Pu;o.on("change:top",(e,o)=>{o.oldDescriptor&&i(t,o.oldDescriptor,o.writer),o.newDescriptor&&n(t,o.newDescriptor,o.writer)}),e.setCustomProperty("addHighlight",(t,e,n)=>o.add(e,n),t),e.setCustomProperty("removeHighlight",(t,e,n)=>o.remove(e,n),t)}function Uu(t){const e=t.getCustomProperty("widgetLabel");return e?"function"==typeof e?e():e:""}function Hu(t,e){return e.addClass(["ck-editor__editable","ck-editor__nested-editable"],t),e.setAttribute("contenteditable",t.isReadOnly?"false":"true",t),t.on("change:isReadOnly",(n,i,o)=>{e.setAttribute("contenteditable",o?"false":"true",t)}),t.on("change:isFocused",(n,i,o)=>{o?e.addClass("ck-editor__nested-editable_focused",t):e.removeClass("ck-editor__nested-editable_focused",t)}),t}function Wu(t,e){const n=t.getSelectedElement();if(n){const i=Vu(t);if(i)return e.createPositionAt(n,i);if(e.schema.isBlock(n))return e.createPositionAfter(n)}const i=t.getSelectedBlocks().next().value;if(i){if(i.isEmpty)return e.createPositionAt(i,0);const n=e.createPositionAfter(i);return t.focus.isTouching(n)?n:e.createPositionBefore(i)}return t.focus}function qu(t,e){const n=new es(nr.window),i=n.getIntersection(t),o=e.height+Ou.arrowVerticalOffset;if(t.top-o>n.top||t.bottom+o<n.bottom)return null;const r=i||t,s=r.left+r.width/2-e.width/2;return{top:Math.max(t.top,0)+Ou.arrowVerticalOffset,left:s,name:"arrow_n"}}function Yu(){return null}function Gu(t){const e=t.getSelectedElement();return e&&function(t){return!!t.getCustomProperty("image")&&zu(t)}(e)?e:null}function $u(t){return!!t&&t.is("image")}function Ku(t,e,n={}){const i=t.createElement("image",n),o=Wu(e.document.selection,e);e.insertContent(i,o),i.parent&&t.setSelection(i,"on")}function Qu(t){const e=t.schema,n=t.document.selection;return function(t,e,n){const i=function(t,e){const n=Wu(t,e).parent;if(n.isEmpty&&!n.is("$root"))return n.parent;return n}(t,n);return e.checkChild(i,"image")}(n,e,t)&&!function(t,e){const n=t.getSelectedElement();return n&&e.isObject(n)}(n,e)&&function(t){return[...t.focus.getAncestors()].every(t=>!t.is("image"))}(n)}function Ju(t){const e=[];for(const n of t.getChildren())e.push(n),n.is("element")&&e.push(...n.getChildren());return e.find(t=>t.is("img"))}function Zu(t){return n=>{n.on(`attribute:${t}:image`,e)};function e(t,e,n){if(!n.consumable.consume(e.item,t.name))return;const i=n.writer,o=Ju(n.mapper.toViewElement(e.item));i.setAttribute(e.attributeKey,e.attributeNewValue||"",o)}}class Xu extends od{refresh(){this.isEnabled=Qu(this.editor.model)}execute(t){const e=this.editor.model;e.change(n=>{const i=Array.isArray(t.source)?t.source:[t.source];for(const t of i)Ku(n,e,{src:t})})}}class th extends Zl{static get pluginName(){return"ImageEditing"}init(){const t=this.editor,e=t.model.schema,n=t.t,i=t.conversion;t.editing.view.addObserver(Tu),e.register("image",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["alt","src","srcset"]}),i.for("dataDowncast").elementToElement({model:"image",view:(t,e)=>eh(e)}),i.for("editingDowncast").elementToElement({model:"image",view:(t,e)=>{return i=eh(e),o=e,r=n("image widget"),o.setCustomProperty("image",!0,i),Bu(i,o,{label:function(){const t=Ju(i).getAttribute("alt");return t?`${t} ${r}`:r}});var i,o,r}}),i.for("downcast").add(Zu("src")).add(Zu("alt")).add(function(){return e=>{e.on("attribute:srcset:image",t)};function t(t,e,n){if(!n.consumable.consume(e.item,t.name))return;const i=n.writer,o=Ju(n.mapper.toViewElement(e.item));if(null===e.attributeNewValue){const t=e.attributeOldValue;t.data&&(i.removeAttribute("srcset",o),i.removeAttribute("sizes",o),t.width&&i.removeAttribute("width",o))}else{const t=e.attributeNewValue;t.data&&(i.setAttribute("srcset",t.data,o),i.setAttribute("sizes","100vw",o),t.width&&i.setAttribute("width",t.width,o))}}}()),i.for("upcast").elementToElement({view:{name:"img",attributes:{src:!0}},model:(t,e)=>e.createElement("image",{src:t.getAttribute("src")})}).attributeToAttribute({view:{name:"img",key:"alt"},model:"alt"}).attributeToAttribute({view:{name:"img",key:"srcset"},model:{key:"srcset",value:t=>{const e={data:t.getAttribute("srcset")};return t.hasAttribute("width")&&(e.width=t.getAttribute("width")),e}}}).add(function(){return e=>{e.on("element:figure",t)};function t(t,e,n){if(!n.consumable.test(e.viewItem,{name:!0,classes:"image"}))return;const i=Ju(e.viewItem);if(!i||!i.hasAttribute("src")||!n.consumable.test(i,{name:!0}))return;const o=n.convertItem(i,e.modelCursor),r=wu(o.modelRange.getItems());r&&(n.convertChildren(e.viewItem,n.writer.createPositionAt(r,0)),e.modelRange=o.modelRange,e.modelCursor=o.modelCursor)}}()),t.commands.add("imageInsert",new Xu(t))}}function eh(t){const e=t.createEmptyElement("img"),n=t.createContainerElement("figure",{class:"image"});return t.insert(t.createPositionAt(n,0),e),n}class nh extends Dr{constructor(t){super(t),this.domEventType="mousedown"}onDomEvent(t){this.fire(t.type,t)}}class ih{constructor(t,e,n){this.model=t,this.attribute=n,this._modelSelection=t.document.selection,this._overrideUid=null,this._isNextGravityRestorationSkipped=!1,e.listenTo(this._modelSelection,"change:range",(t,e)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!e.directChange&&oh(this._modelSelection.getFirstPosition(),n)||this._restoreGravity())})}handleForwardMovement(t,e){const n=this.attribute;if(!(this._isGravityOverridden||t.isAtStart&&this._hasSelectionAttribute))return ah(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._removeSelectionAttribute(),!0):rh(t,n)||sh(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._overrideGravity(),!0):void 0}handleBackwardMovement(t,e){const n=this.attribute;return this._isGravityOverridden?ah(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._restoreGravity(),this._removeSelectionAttribute(),!0):(this._preventCaretMovement(e),this._restoreGravity(),t.isAtStart&&this._removeSelectionAttribute(),!0):ah(t,n)&&!this._hasSelectionAttribute?(this._preventCaretMovement(e),this._setSelectionAttributeFromTheNodeBefore(t),!0):t.isAtEnd&&sh(t,n)?this._hasSelectionAttribute?void(ch(t,n)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity())):(this._preventCaretMovement(e),this._setSelectionAttributeFromTheNodeBefore(t),!0):t.isAtStart?this._hasSelectionAttribute?(this._removeSelectionAttribute(),this._preventCaretMovement(e),!0):void 0:void(ch(t,n)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity()))}get _isGravityOverridden(){return!!this._overrideUid}get _hasSelectionAttribute(){return this._modelSelection.hasAttribute(this.attribute)}_overrideGravity(){this._overrideUid=this.model.change(t=>t.overrideSelectionGravity())}_restoreGravity(){this.model.change(t=>{t.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}_preventCaretMovement(t){t.preventDefault()}_removeSelectionAttribute(){this.model.change(t=>{t.removeSelectionAttribute(this.attribute)})}_setSelectionAttributeFromTheNodeBefore(t){const e=this.attribute;this.model.change(n=>{n.setSelectionAttribute(this.attribute,t.nodeBefore.getAttribute(e))})}_skipNextAutomaticGravityRestoration(){this._isNextGravityRestorationSkipped=!0}}function oh(t,e){return rh(t,e)||sh(t,e)}function rh(t,e){const{nodeBefore:n,nodeAfter:i}=t,o=!!n&&n.hasAttribute(e);return!!i&&i.hasAttribute(e)&&(!o||n.getAttribute(e)!==i.getAttribute(e))}function sh(t,e){const{nodeBefore:n,nodeAfter:i}=t,o=!!n&&n.hasAttribute(e),r=!!i&&i.hasAttribute(e);return o&&(!r||n.getAttribute(e)!==i.getAttribute(e))}function ah(t,e){const{nodeBefore:n,nodeAfter:i}=t,o=!!n&&n.hasAttribute(e);if(!!i&&i.hasAttribute(e)&&o)return i.getAttribute(e)!==n.getAttribute(e)}function ch(t,e){return oh(t.getShiftedBy(-1),e)}function lh(t,e,n){return n.createRange(dh(t,e,!0,n),dh(t,e,!1,n))}function dh(t,e,n,i){let o=t.textNode||(n?t.nodeBefore:t.nodeAfter),r=null;for(;o&&o.getAttribute("linkHref")==e;)r=o,o=n?o.previousSibling:o.nextSibling;return r?i.createPositionAt(r,n?"before":"after"):t}class uh extends od{constructor(t){super(t),this.manualDecorators=new An}restoreManualDecoratorStates(){for(const t of this.manualDecorators)t.value=this._getDecoratorStateFromModel(t.id)}refresh(){const t=this.editor.model,e=t.document,n=wu(e.selection.getSelectedBlocks());n&&n.is("image")&&t.schema.checkAttribute("image","linkHref")?(this.value=n.getAttribute("linkHref"),this.isEnabled=t.schema.checkAttribute(n,"linkHref")):(this.value=e.selection.getAttribute("linkHref"),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,"linkHref"));for(const t of this.manualDecorators)t.value=this._getDecoratorStateFromModel(t.id)}execute(t,e={}){const n=this.editor.model,i=n.document.selection,o=[],r=[];for(const t in e)e[t]?o.push(t):r.push(t);n.change(e=>{if(i.isCollapsed){const s=i.getFirstPosition();if(i.hasAttribute("linkHref")){const a=lh(s,i.getAttribute("linkHref"),n);e.setAttribute("linkHref",t,a),o.forEach(t=>{e.setAttribute(t,!0,a)}),r.forEach(t=>{e.removeAttribute(t,a)}),e.setSelection(e.createPositionAfter(a.end.nodeBefore))}else if(""!==t){const r=Ln(i.getAttributes());r.set("linkHref",t),o.forEach(t=>{r.set(t,!0)});const a=e.createText(t,r);n.insertContent(a,s),e.setSelection(e.createPositionAfter(a))}["linkHref",...o,...r].forEach(t=>{e.removeSelectionAttribute(t)})}else{const s=n.schema.getValidRanges(i.getRanges(),"linkHref"),a=[];for(const t of i.getSelectedBlocks())n.schema.checkAttribute(t,"linkHref")&&a.push(e.createRangeOn(t));const c=a.slice();for(const t of s)this._isRangeToUpdate(t,a)&&c.push(t);for(const n of c)e.setAttribute("linkHref",t,n),o.forEach(t=>{e.setAttribute(t,!0,n)}),r.forEach(t=>{e.removeAttribute(t,n)})}})}_getDecoratorStateFromModel(t){return this.editor.model.document.selection.getAttribute(t)}_isRangeToUpdate(t,e){for(const n of e)if(n.containsRange(t))return!1;return!0}}class hh extends od{refresh(){const t=this.editor.model,e=t.document,n=wu(e.selection.getSelectedBlocks());n&&n.is("image")&&t.schema.checkAttribute("image","linkHref")?this.isEnabled=t.schema.checkAttribute(n,"linkHref"):this.isEnabled=t.schema.checkAttributeInSelection(e.selection,"linkHref")}execute(){const t=this.editor,e=this.editor.model,n=e.document.selection,i=t.commands.get("link");e.change(t=>{const o=n.isCollapsed?[lh(n.getFirstPosition(),n.getAttribute("linkHref"),e)]:n.getRanges();for(const e of o)if(t.removeAttribute("linkHref",e),i)for(const n of i.manualDecorators)t.removeAttribute(n.id,e)})}}class fh{constructor(){this._definitions=new Set}get length(){return this._definitions.size}add(t){Array.isArray(t)?t.forEach(t=>this._definitions.add(t)):this._definitions.add(t)}getDispatcher(){return t=>{t.on("attribute:linkHref",(t,e,n)=>{if(!n.consumable.test(e.item,"attribute:linkHref"))return;const i=n.writer,o=i.document.selection;for(const t of this._definitions){const r=i.createAttributeElement("a",t.attributes,{priority:5});i.setCustomProperty("link",!0,r),t.callback(e.attributeNewValue)?e.item.is("selection")?i.wrap(o.getFirstRange(),r):i.wrap(n.mapper.toViewRange(e.range),r):i.unwrap(n.mapper.toViewRange(e.range),r)}},{priority:"high"})}}}class gh{constructor({id:t,label:e,attributes:n,defaultValue:i}){this.id=t,this.set("value"),this.defaultValue=i,this.label=e,this.attributes=n}}xn(gh,Ui);var mh=function(t,e,n){var i=t.length;return n=void 0===n?i:n,!e&&n>=i?t:ii(t,e,n)},ph=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var bh=function(t){return ph.test(t)};var wh=function(t){return t.split("")},kh="[\\ud800-\\udfff]",_h="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",vh="\\ud83c[\\udffb-\\udfff]",yh="[^\\ud800-\\udfff]",xh="(?:\\ud83c[\\udde6-\\uddff]){2}",Ah="[\\ud800-\\udbff][\\udc00-\\udfff]",Ch="(?:"+_h+"|"+vh+")"+"?",Th="[\\ufe0e\\ufe0f]?"+Ch+("(?:\\u200d(?:"+[yh,xh,Ah].join("|")+")[\\ufe0e\\ufe0f]?"+Ch+")*"),Ph="(?:"+[yh+_h+"?",_h,xh,Ah,kh].join("|")+")",Sh=RegExp(vh+"(?="+vh+")|"+Ph+Th,"g");var Eh=function(t){return t.match(Sh)||[]};var Mh=function(t){return bh(t)?Eh(t):wh(t)};var Ih=function(t){return function(e){e=Zn(e);var n=bh(e)?Mh(e):void 0,i=n?n[0]:e.charAt(0),o=n?mh(n,1).join(""):e.slice(1);return i[t]()+o}}("toUpperCase");const Nh=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,Oh=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;function Rh(t,e){const n=e.createAttributeElement("a",{href:t},{priority:5});return e.setCustomProperty("link",!0,n),n}function Dh(t){return function(t){return t.replace(Nh,"").match(Oh)}(t=String(t))?t:"#"}n(47);const Lh=/^(https?:)?\/\//;class jh extends Zl{static get pluginName(){return"LinkEditing"}constructor(t){super(t),t.config.define("link",{addTargetToExternalLinks:!1})}init(){const t=this.editor,e=t.locale;t.model.schema.extend("$text",{allowAttributes:"linkHref"}),t.conversion.for("dataDowncast").attributeToElement({model:"linkHref",view:Rh}),t.conversion.for("editingDowncast").attributeToElement({model:"linkHref",view:(t,e)=>Rh(Dh(t),e)}),t.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:t=>t.getAttribute("href")}}),t.commands.add("link",new uh(t)),t.commands.add("unlink",new hh(t));const n=function(t,e){const n={"Open in a new tab":t("Open in a new tab"),Downloadable:t("Downloadable")};return e.forEach(t=>(t.label&&n[t.label]&&(t.label=n[t.label]),t)),e}(t.t,function(t){const e=[];if(t)for(const[n,i]of Object.entries(t)){const t=Object.assign({},i,{id:"link"+Ih(n)});e.push(t)}return e}(t.config.get("link.decorators")));this._enableAutomaticDecorators(n.filter(t=>"automatic"===t.mode)),this._enableManualDecorators(n.filter(t=>"manual"===t.mode)),function({view:t,model:e,emitter:n,attribute:i,locale:o}){const r=new ih(e,n,i),s=e.document.selection;n.listenTo(t.document,"keydown",(t,e)=>{if(!s.isCollapsed)return;if(e.shiftKey||e.altKey||e.ctrlKey)return;const n=e.keyCode==mo.arrowright,i=e.keyCode==mo.arrowleft;if(!n&&!i)return;const a=s.getFirstPosition(),c=o.contentLanguageDirection;let l;l="ltr"===c&&n||"rtl"===c&&i?r.handleForwardMovement(a,e):r.handleBackwardMovement(a,e),l&&t.stop()},{priority:un.get("high")+1})}({view:t.editing.view,model:t.model,emitter:this,attribute:"linkHref",locale:e}),this._setupLinkHighlight(),this._enableInsertContentSelectionAttributesFixer(),this._enableClickingAfterLink()}_enableAutomaticDecorators(t){const e=this.editor,n=new fh;e.config.get("link.addTargetToExternalLinks")&&n.add({id:"linkIsExternal",mode:"automatic",callback:t=>Lh.test(t),attributes:{target:"_blank",rel:"noopener noreferrer"}}),n.add(t),n.length&&e.conversion.for("downcast").add(n.getDispatcher())}_enableManualDecorators(t){if(!t.length)return;const e=this.editor,n=e.commands.get("link").manualDecorators;t.forEach(t=>{e.model.schema.extend("$text",{allowAttributes:t.id}),n.add(new gh(t)),e.conversion.for("downcast").attributeToElement({model:t.id,view:(e,i)=>{if(e){const e=n.get(t.id).attributes,o=i.createAttributeElement("a",e,{priority:5});return i.setCustomProperty("link",!0,o),o}}}),e.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:n.get(t.id).attributes},model:{key:t.id}})})}_setupLinkHighlight(){const t=this.editor,e=t.editing.view,n=new Set;e.document.registerPostFixer(e=>{const i=t.model.document.selection;let o=!1;if(i.hasAttribute("linkHref")){const r=lh(i.getFirstPosition(),i.getAttribute("linkHref"),t.model),s=t.editing.mapper.toViewRange(r);for(const t of s.getItems())t.is("a")&&!t.hasClass("ck-link_selected")&&(e.addClass("ck-link_selected",t),n.add(t),o=!0)}return o}),t.conversion.for("editingDowncast").add(t=>{function i(){e.change(t=>{for(const e of n.values())t.removeClass("ck-link_selected",e),n.delete(e)})}t.on("insert",i,{priority:"highest"}),t.on("remove",i,{priority:"highest"}),t.on("attribute",i,{priority:"highest"}),t.on("selection",i,{priority:"highest"})})}_enableInsertContentSelectionAttributesFixer(){const t=this.editor.model,e=t.document.selection;t.on("insertContent",()=>{const n=e.anchor.nodeBefore,i=e.anchor.nodeAfter;e.hasAttribute("linkHref")&&n&&n.hasAttribute("linkHref")&&(i&&i.hasAttribute("linkHref")||t.change(e=>{[...t.document.selection.getAttributeKeys()].filter(t=>t.startsWith("link")).forEach(t=>e.removeSelectionAttribute(t))}))},{priority:"low"})}_enableClickingAfterLink(){const t=this.editor;t.editing.view.addObserver(nh);let e=!1;this.listenTo(t.editing.view.document,"mousedown",()=>{e=!0}),this.listenTo(t.editing.view.document,"selectionChange",()=>{if(!e)return;e=!1;const n=t.model.document.selection;if(!n.isCollapsed)return;if(!n.hasAttribute("linkHref"))return;const i=n.getFirstPosition(),o=lh(i,n.getAttribute("linkHref"),t.model);(i.isTouching(o.start)||i.isTouching(o.end))&&t.model.change(e=>{e.removeSelectionAttribute("linkHref");for(const n of t.commands.get("link").manualDecorators)e.removeSelectionAttribute(n.id)})})}}class Vh extends eu{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e="show:"+t.type+(t.namespace?":"+t.namespace:"");this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class zh extends od{constructor(t){super(t),this.stopListening(this.editor.model.document,"change"),this.listenTo(this.editor.model.document,"change",()=>this.refresh(),{priority:"low"})}refresh(){const t=this.editor.commands.get("imageInsert"),e=this.editor.commands.get("link");this.isEnabled=t.isEnabled||e.isEnabled}execute(){const t=this.editor,e=this.editor.config.get("ckfinder.openerMethod")||"modal";if("popup"!=e&&"modal"!=e)throw new hn.b('ckfinder-unknown-openerMethod: The openerMethod config option must by "popup" or "modal".',t);const n=this.editor.config.get("ckfinder.options")||{};n.chooseFiles=!0;const i=n.onInit;n.language||(n.language=t.locale.uiLanguage),n.onInit=e=>{i&&i(e),e.on("files:choose",n=>{const i=n.data.files.toArray(),o=i.filter(t=>!t.isImage()),r=i.filter(t=>t.isImage());for(const e of o)t.execute("link",e.getUrl());const s=[];for(const t of r){const n=t.getUrl();s.push(n||e.request("file:getProxyUrl",{file:t}))}s.length&&Bh(t,s)}),e.on("file:choose:resizedImage",e=>{const n=e.data.resizedUrl;if(n)Bh(t,[n]);else{const e=t.plugins.get("Notification"),n=t.locale.t;e.showWarning(n("Could not obtain resized image URL."),{title:n("Selecting resized image failed"),namespace:"ckfinder"})}})},window.CKFinder[e](n)}}function Bh(t,e){if(t.commands.get("imageInsert").isEnabled)t.execute("imageInsert",{source:e});else{const e=t.plugins.get("Notification"),n=t.locale.t;e.showWarning(n("Could not insert image at the current position."),{title:n("Inserting image failed"),namespace:"ckfinder"})}}class Fh extends Zl{static get pluginName(){return"CKFinderEditing"}static get requires(){return[Vh,th,jh]}init(){const t=this.editor;t.commands.add("ckfinder",new zh(t))}}const Uh=/^data:(\S*?);base64,/;class Hh{constructor(t,e,n){if(!t)throw new hn.b("fileuploader-missing-file: File must be provided as the first argument",null);if(!e)throw new hn.b("fileuploader-missing-token: Token must be provided as the second argument.",null);if(!n)throw new hn.b("fileuploader-missing-api-address: Api address must be provided as the third argument.",null);this.file=function(t){if("string"!=typeof t)return!1;const e=t.match(Uh);return!(!e||!e.length)}(t)?function(t,e=512){try{const n=t.match(Uh)[1],i=atob(t.replace(Uh,"")),o=[];for(let t=0;t<i.length;t+=e){const n=i.slice(t,t+e),r=new Array(n.length);for(let t=0;t<n.length;t++)r[t]=n.charCodeAt(t);o.push(new Uint8Array(r))}return new Blob(o,{type:n})}catch(t){throw new hn.b("fileuploader-decoding-image-data-error: Problem with decoding Base64 image data.",null)}}(t):t,this._token=e,this._apiAddress=n}onProgress(t){return this.on("progress",(e,n)=>t(n)),this}onError(t){return this.once("error",(e,n)=>t(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const t=new XMLHttpRequest;t.open("POST",this._apiAddress),t.setRequestHeader("Authorization",this._token.value),t.responseType="json",this.xhr=t}_attachXHRListeners(){const t=this,e=this.xhr;function n(e){return()=>t.fire("error",e)}e.addEventListener("error",n("Network Error")),e.addEventListener("abort",n("Abort")),e.upload&&e.upload.addEventListener("progress",t=>{t.lengthComputable&&this.fire("progress",{total:t.total,uploaded:t.loaded})}),e.addEventListener("load",()=>{const t=e.status,n=e.response;if(t<200||t>299)return this.fire("error",n.message||n.error)})}_sendRequest(){const t=new FormData,e=this.xhr;return t.append("file",this.file),new Promise((n,i)=>{e.addEventListener("load",()=>{const t=e.status,o=e.response;return t<200||t>299?o.message?i(new hn.b("fileuploader-uploading-data-failed: Uploading file failed.",this,{message:o.message})):i(o.error):n(o)}),e.addEventListener("error",()=>i(new Error("Network Error"))),e.addEventListener("abort",()=>i(new Error("Abort"))),e.send(t)})}}xn(Hh,mn);const Wh={refreshInterval:36e5,autoRefresh:!0};class qh{constructor(t,e=Wh){if(!t)throw new hn.b("token-missing-token-url: A `tokenUrl` must be provided as the first constructor argument.",this);this.set("value",e.initValue),this._refresh="function"==typeof t?t:()=>{return e=t,new Promise((t,n)=>{const i=new XMLHttpRequest;i.open("GET",e),i.addEventListener("load",()=>{const e=i.status,o=i.response;return e<200||e>299?n(new hn.b("token-cannot-download-new-token: Cannot download new token from the provided url.",null)):t(o)}),i.addEventListener("error",()=>n(new Error("Network Error"))),i.addEventListener("abort",()=>n(new Error("Abort"))),i.send()});var e},this._options=Object.assign({},Wh,e)}init(){return new Promise((t,e)=>{this._options.autoRefresh&&this._startRefreshing(),this.value?t(this):this.refreshToken().then(t).catch(e)})}refreshToken(){return this._refresh().then(t=>this.set("value",t)).then(()=>this)}destroy(){this._stopRefreshing()}_startRefreshing(){this._refreshInterval=setInterval(()=>this.refreshToken(),this._options.refreshInterval)}_stopRefreshing(){clearInterval(this._refreshInterval)}static create(t,e=Wh){return new qh(t,e).init()}}xn(qh,Ui);var Yh=qh;class Gh extends eu{static get pluginName(){return"CloudServices"}init(){const t=this.context.config.get("cloudServices")||{};for(const e in t)this[e]=t[e];if(this.tokenUrl)return this.token=new Gh.Token(this.tokenUrl),this.token.init();this.token=null}destroy(){super.destroy(),this.token&&this.token.destroy()}}Gh.Token=Yh;class $h extends Zl{static get requires(){return[ou,Gh]}init(){const t=this.editor,e=t.plugins.get(Gh),n=e.token,i=e.uploadUrl;n&&(this._uploadGateway=new $h._UploadGateway(n,i),t.plugins.get(ou).createUploadAdapter=t=>new Kh(this._uploadGateway,t))}}class Kh{constructor(t,e){this.uploadGateway=t,this.loader=e}upload(){return this.loader.file.then(t=>(this.fileUploader=this.uploadGateway.upload(t),this.fileUploader.on("progress",(t,e)=>{this.loader.uploadTotal=e.total,this.loader.uploaded=e.uploaded}),this.fileUploader.send()))}abort(){this.fileUploader.abort()}}$h._UploadGateway=class{constructor(t,e){if(!t)throw new hn.b("uploadgateway-missing-token: Token must be provided.",null);if(!e)throw new hn.b("uploadgateway-missing-api-address: Api address must be provided.",null);this._token=t,this._apiAddress=e}upload(t){return new Hh(t,this._token,this._apiAddress)}};n(49);const Qh=["before","after"],Jh=(new DOMParser).parseFromString('<svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><polyline points="8.05541992 0.263427734 8.05541992 4.23461914 1.28417969 4.23461914" transform="translate(1,0)"></polyline><line x1="0" y1="4.21581031" x2="2" y2="2.17810059" transform="translate(1, 0)"></line><line x1="0" y1="6.21581031" x2="2" y2="4.17810059" transform="translate(2, 5.196955) scale(1, -1) translate(-1, -5.196955)"></line></svg>\n',"image/svg+xml").firstChild;class Zh extends Zl{static get pluginName(){return"WidgetTypeAround"}constructor(t){super(t),this._currentFakeCaretModelElement=null}init(){this._enableTypeAroundUIInjection(),this._enableInsertingParagraphsOnButtonClick(),this._enableInsertingParagraphsOnEnterKeypress(),this._enableInsertingParagraphsOnTypingKeystroke(),this._enableTypeAroundFakeCaretActivationUsingKeyboardArrows(),this._enableDeleteIntegration(),this._enableInsertContentIntegration()}destroy(){this._currentFakeCaretModelElement=null}_insertParagraph(t,e){const n=this.editor,i=n.editing.view;n.execute("insertParagraph",{position:n.model.createPositionAt(t,e)}),i.focus(),i.scrollToTheSelection()}_insertParagraphAccordingToFakeCaretPosition(){const t=this.editor.model.document.selection,e=Vu(t);if(!e)return!1;const n=t.getSelectedElement();return this._insertParagraph(n,e),!0}_enableTypeAroundUIInjection(){const t=this.editor,e=t.model.schema,n=t.locale.t,i={before:n("Insert paragraph before block"),after:n("Insert paragraph after block")};t.editing.downcastDispatcher.on("insert",(t,n,o)=>{const r=o.mapper.toViewElement(n.item);ju(r,n.item,e)&&function(t,e,n){const i=t.createUIElement("div",{class:"ck ck-reset_all ck-widget__type-around"},(function(t){const n=this.toDomElement(t);return function(t,e){for(const n of Qh){const i=new Gc({tag:"div",attributes:{class:["ck","ck-widget__type-around__button","ck-widget__type-around__button_"+n],title:e[n]},children:[t.ownerDocument.importNode(Jh,!0)]});t.appendChild(i.render())}}(n,e),function(t){const e=new Gc({tag:"div",attributes:{class:["ck","ck-widget__type-around__fake-caret"]}});t.appendChild(e.render())}(n),n}));t.insert(t.createPositionAt(n,"end"),i)}(o.writer,i,r)},{priority:"low"})}_enableTypeAroundFakeCaretActivationUsingKeyboardArrows(){const t=this.editor,e=t.model,n=e.document.selection,i=e.schema;function o(t){return"ck-widget_type-around_show-fake-caret_"+t}t.editing.view.document.on("keydown",(t,e)=>{ko(e.keyCode)&&this._handleArrowKeyPress(t,e)},{priority:un.get("high")+10}),n.on("change:range",(e,n)=>{n.directChange&&t.model.change(t=>{t.removeSelectionAttribute("widget-type-around")})}),e.document.on("change:data",()=>{const e=n.getSelectedElement();if(e){if(ju(t.editing.mapper.toViewElement(e),e,i))return}t.model.change(t=>{t.removeSelectionAttribute("widget-type-around")})}),t.editing.downcastDispatcher.on("selection",(t,e,n)=>{const r=n.writer;if(this._currentFakeCaretModelElement){const t=n.mapper.toViewElement(this._currentFakeCaretModelElement);t&&(r.removeClass(Qh.map(o),t),this._currentFakeCaretModelElement=null)}const s=e.selection.getSelectedElement();if(!s)return;const a=n.mapper.toViewElement(s);if(!ju(a,s,i))return;const c=Vu(e.selection);c&&(r.addClass(o(c),a),this._currentFakeCaretModelElement=s)}),this.listenTo(t.ui.focusTracker,"change:isFocused",(e,n,i)=>{i||t.model.change(t=>{t.removeSelectionAttribute("widget-type-around")})})}_handleArrowKeyPress(t,e){const n=this.editor,i=n.model,o=i.document.selection,r=i.schema,s=n.editing.view,a=vo(e.keyCode,n.locale.contentLanguageDirection),c=s.document.selection.getSelectedElement();let l;ju(c,n.editing.mapper.toModelElement(c),r)?l=this._handleArrowKeyPressOnSelectedWidget(a):o.isCollapsed&&(l=this._handleArrowKeyPressWhenSelectionNextToAWidget(a)),l&&(e.preventDefault(),t.stop())}_handleArrowKeyPressOnSelectedWidget(t){const e=this.editor.model,n=Vu(e.document.selection);return e.change(e=>{if(!n)return e.setSelectionAttribute("widget-type-around",t?"after":"before"),!0;if(!(n===(t?"after":"before")))return e.removeSelectionAttribute("widget-type-around"),!0;return!1})}_handleArrowKeyPressWhenSelectionNextToAWidget(t){const e=this.editor,n=e.model,i=n.schema,o=e.plugins.get("Widget"),r=o._getObjectElementNextToSelection(t);return!!ju(e.editing.mapper.toViewElement(r),r,i)&&(n.change(e=>{o._setSelectionOverElement(r),e.setSelectionAttribute("widget-type-around",t?"before":"after")}),!0)}_enableInsertingParagraphsOnButtonClick(){const t=this.editor,e=t.editing.view;e.document.on("mousedown",(n,i)=>{const o=i.domTarget.closest(".ck-widget__type-around__button");if(!o)return;const r=function(t){return t.classList.contains("ck-widget__type-around__button_before")?"before":"after"}(o),s=function(t,e){const n=t.closest(".ck-widget");return e.mapDomToView(n)}(o,e.domConverter),a=t.editing.mapper.toModelElement(s);this._insertParagraph(a,r),i.preventDefault(),n.stop()})}_enableInsertingParagraphsOnEnterKeypress(){const t=this.editor,e=t.editing.view;this.listenTo(e.document,"enter",(n,i)=>{const o=e.document.selection.getSelectedElement(),r=t.editing.mapper.toModelElement(o),s=t.model.schema;let a;this._insertParagraphAccordingToFakeCaretPosition()?a=!0:ju(o,r,s)&&(this._insertParagraph(r,i.isSoft?"before":"after"),a=!0),a&&(i.preventDefault(),n.stop())})}_enableInsertingParagraphsOnTypingKeystroke(){const t=this.editor.editing.view,e=[mo.enter,mo.delete,mo.backspace];t.document.on("keydown",(t,n)=>{e.includes(n.keyCode)||Ad(n)||this._insertParagraphAccordingToFakeCaretPosition()},{priority:un.get("high")+1})}_enableDeleteIntegration(){const t=this.editor,e=t.editing.view,n=t.model,i=n.schema;this.listenTo(e.document,"delete",(e,o)=>{const r=Vu(n.document.selection);if(!r)return;const s=o.direction,a=n.document.selection.getSelectedElement(),c="forward"==s;if("before"===r===c)t.execute("delete",{selection:n.createSelection(a,"on")});else{const e=i.getNearestSelectionRange(n.createPositionAt(a,r),s);if(e)if(e.isCollapsed){const o=n.createSelection(e.start);if(n.modifySelection(o,{direction:s}),o.focus.isEqual(e.start)){const t=function(t,e){let n=e;for(const i of e.getAncestors({parentFirst:!0})){if(i.childCount>1||t.isLimit(i))break;n=i}return n}(i,e.start.parent);n.deleteContent(n.createSelection(t,"on"),{doNotAutoparagraph:!0})}else n.change(n=>{n.setSelection(e),t.execute(c?"forwardDelete":"delete")})}else n.change(n=>{n.setSelection(e),t.execute(c?"forwardDelete":"delete")})}o.preventDefault(),e.stop()},{priority:un.get("high")+1})}_enableInsertContentIntegration(){const t=this.editor,e=this.editor.model,n=e.document.selection;this.listenTo(t.model,"insertContent",(t,[i,o])=>{if(o&&!o.is("documentSelection"))return;const r=Vu(n);return r?(t.stop(),e.change(t=>{const o=n.getSelectedElement(),s=e.createPositionAt(o,r),a=t.createSelection(s),c=e.insertContent(i,a);return t.setSelection(a),c})):void 0},{priority:"high"})}}n(51);class Xh extends Zl{static get pluginName(){return"Widget"}static get requires(){return[Zh]}init(){const t=this.editor.editing.view,e=t.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on("selection",(t,e,n)=>{this._clearPreviouslySelectedWidgets(n.writer);const i=n.writer,o=i.document.selection,r=o.getSelectedElement();let s=null;for(const t of o.getRanges())for(const e of t){const t=e.item;zu(t)&&!tf(t,s)&&(i.addClass("ck-widget_selected",t),this._previouslySelected.add(t),s=t,t==r&&i.setSelection(o.getRanges(),{fake:!0,label:Uu(r)}))}},{priority:"low"}),t.addObserver(nh),this.listenTo(e,"mousedown",(...t)=>this._onMousedown(...t)),this.listenTo(e,"keydown",(...t)=>{this._handleSelectionChangeOnArrowKeyPress(...t)},{priority:"high"}),this.listenTo(e,"keydown",(...t)=>{this._preventDefaultOnArrowKeyPress(...t)},{priority:un.get("high")-20}),this.listenTo(e,"delete",(t,e)=>{this._handleDelete("forward"==e.direction)&&(e.preventDefault(),t.stop())},{priority:"high"})}_onMousedown(t,e){const n=this.editor,i=n.editing.view,o=i.document;let r=e.target;if(function(t){for(;t;){if(t.is("editableElement")&&!t.is("rootElement"))return!0;if(zu(t))return!1;t=t.parent}return!1}(r)){if(ho.isSafari&&e.domEvent.detail>=3){const t=n.editing.mapper.toModelElement(r);this.editor.model.change(n=>{e.preventDefault(),n.setSelection(t,"in")})}return}if(!zu(r)&&(r=r.findAncestor(zu),!r))return;e.preventDefault(),o.isFocused||i.focus();const s=n.editing.mapper.toModelElement(r);this._setSelectionOverElement(s)}_handleSelectionChangeOnArrowKeyPress(t,e){const n=e.keyCode;if(!ko(n))return;const i=this.editor.model,o=i.schema,r=i.document.selection,s=r.getSelectedElement(),a=vo(n,this.editor.locale.contentLanguageDirection);if(s&&o.isObject(s)){const n=a?r.getLastPosition():r.getFirstPosition(),s=o.getNearestSelectionRange(n,a?"forward":"backward");return void(s&&(i.change(t=>{t.setSelection(s)}),e.preventDefault(),t.stop()))}if(!r.isCollapsed)return;const c=this._getObjectElementNextToSelection(a);c&&o.isObject(c)&&(this._setSelectionOverElement(c),e.preventDefault(),t.stop())}_preventDefaultOnArrowKeyPress(t,e){if(!ko(e.keyCode))return;const n=this.editor.model,i=n.schema,o=n.document.selection.getSelectedElement();o&&i.isObject(o)&&(e.preventDefault(),t.stop())}_handleDelete(t){if(this.editor.isReadOnly)return;const e=this.editor.model.document.selection;if(!e.isCollapsed)return;const n=this._getObjectElementNextToSelection(t);return n?(this.editor.model.change(t=>{let i=e.anchor.parent;for(;i.isEmpty;){const e=i;i=e.parent,t.remove(e)}this._setSelectionOverElement(n)}),!0):void 0}_setSelectionOverElement(t){this.editor.model.change(e=>{e.setSelection(e.createRangeOn(t))})}_getObjectElementNextToSelection(t){const e=this.editor.model,n=e.schema,i=e.document.selection,o=e.createSelection(i);e.modifySelection(o,{direction:t?"forward":"backward"});const r=t?o.focus.nodeBefore:o.focus.nodeAfter;return r&&n.isObject(r)?r:null}_clearPreviouslySelectedWidgets(t){for(const e of this._previouslySelected)t.removeClass("ck-widget_selected",e);this._previouslySelected.clear()}}function tf(t,e){return!!e&&Array.from(t.getAncestors()).includes(e)}class ef extends od{refresh(){const t=this.editor.model.document.selection.getSelectedElement();this.isEnabled=$u(t),$u(t)&&t.hasAttribute("alt")?this.value=t.getAttribute("alt"):this.value=!1}execute(t){const e=this.editor.model,n=e.document.selection.getSelectedElement();e.change(e=>{e.setAttribute("alt",t.newValue,n)})}}class nf extends Zl{static get pluginName(){return"ImageTextAlternativeEditing"}init(){this.editor.commands.add("imageTextAlternative",new ef(this.editor))}}n(53);class of extends hl{constructor(t,e){super(t);const n="ck-labeled-field-view-"+dn(),i="ck-labeled-field-view-status-"+dn();this.fieldView=e(this,n,i),this.set("label"),this.set("isEnabled",!0),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(i),this.bind("_statusText").to(this,"errorText",this,"infoText",(t,e)=>t||e);const o=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",o.to("class"),o.if("isEnabled","ck-disabled",t=>!t)]},children:[this.labelView,this.fieldView,this.statusView]})}_createLabelView(t){const e=new pl(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createStatusView(t){const e=new hl(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",t=>!t)],id:t,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),e}focus(){this.fieldView.focus()}}n(55);class rf extends hl{constructor(t){super(t),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById");const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{type:"text",class:["ck","ck-input","ck-input-text",e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById")},on:{input:e.to("input")}})}render(){super.render();const t=t=>{this.element.value=t||0===t?t:""};t(this.value),this.on("change:value",(e,n,i)=>{t(i)})}select(){this.element.select()}focus(){this.element.focus()}}function sf(t,e,n){const i=new rf(t.locale);return i.set({id:e,ariaDescribedById:n}),i.bind("isReadOnly").to(t,"isEnabled",t=>!t),i.bind("hasError").to(t,"errorText",t=>!!t),i.on("input",()=>{t.errorText=null}),i}function af({view:t}){t.listenTo(t.element,"submit",(e,n)=>{n.preventDefault(),t.fire("submit")},{useCapture:!0})}var cf='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',lf='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>';n(57);class df extends hl{constructor(t){super(t);const e=this.locale.t;this.focusTracker=new jc,this.keystrokes=new Sc,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(e("Save"),cf,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(e("Cancel"),lf,"ck-button-cancel","cancel"),this._focusables=new Yc,this._focusCycler=new xl({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-text-alternative-form"],tabindex:"-1"},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),this.keystrokes.listenTo(this.element),af({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)})}_createButton(t,e,n,i){const o=new Ll(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.extendTemplate({attributes:{class:n}}),i&&o.delegate("execute").to(this,i),o}_createLabeledInputView(){const t=this.locale.t,e=new of(this.locale,sf);return e.label=t("Text alternative"),e.fieldView.placeholder=t("Text alternative"),e}}n(59),n(61);const uf=_l("px");class hf extends Zl{static get pluginName(){return"ContextualBalloon"}constructor(t){super(t),this.positionLimiter=()=>{const t=this.editor.editing.view,e=t.document.selection.editableElement;return e?t.domConverter.mapViewToDom(e.root):null},this.set("visibleView",null),this.view=new Ou(t.locale),t.ui.view.body.add(this.view),t.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this.hasView(t.view))throw new hn.b("contextualballoon-add-view-exist: Cannot add configuration of the same view twice.",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new hn.b("contextualballoon-remove-view-not-exist: Cannot remove the configuration of a non-existent view.",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(1===e.size?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),1===e.size?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new hn.b("contextualballoon-showstack-stack-not-exist: Cannot show a stack that does not exist.",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new ff(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(t,e)=>!e&&t>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(t,n)=>{if(n<2)return"";const i=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[i,n])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new gf(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,e)=>!e&&t>=2?Math.min(t-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&!t.limiter&&(t=Object.assign({},t,{limiter:this.positionLimiter})),t}}class ff extends hl{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new jc,this.buttonPrevView=this._createButtonView(e("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(e("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",t=>t?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new Ll(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class gf extends hl{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",t=>t?"":"ck-hidden")],style:{top:n.to("top",uf),left:n.to("left",uf),width:n.to("width",uf),height:n.to("height",uf)}},children:this.content}),this.on("change:numberOfPanels",(t,e,n,i)=>{n>i?this._addPanels(n-i):this._removePanels(i-n),this.updatePosition()})}_addPanels(t){for(;t--;){const t=new hl;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(t){for(;t--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:i}=new es(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:i})}}}function mf(t){const e=t.editing.view,n=Ou.defaultPositions;return{target:e.domConverter.viewToDom(e.document.selection.getSelectedElement()),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast]}}class pf extends Zl{static get requires(){return[hf]}static get pluginName(){return"ImageTextAlternativeUI"}init(){this._createButton(),this._createForm()}destroy(){super.destroy(),this._form.destroy()}_createButton(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageTextAlternative",n=>{const i=t.commands.get("imageTextAlternative"),o=new Ll(n);return o.set({label:e("Change image text alternative"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',tooltip:!0}),o.bind("isEnabled").to(i,"isEnabled"),this.listenTo(o,"execute",()=>{this._showForm()}),o})}_createForm(){const t=this.editor,e=t.editing.view.document;this._balloon=this.editor.plugins.get("ContextualBalloon"),this._form=new df(t.locale),this._form.render(),this.listenTo(this._form,"submit",()=>{t.execute("imageTextAlternative",{newValue:this._form.labeledInput.fieldView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,"cancel",()=>{this._hideForm(!0)}),this._form.keystrokes.set("Esc",(t,e)=>{this._hideForm(!0),e()}),this.listenTo(t.ui,"update",()=>{Gu(e.selection)?this._isVisible&&function(t){const e=t.plugins.get("ContextualBalloon");if(Gu(t.editing.view.document.selection)){const n=mf(t);e.updatePosition(n)}}(t):this._hideForm(!0)}),Hl({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideForm()})}_showForm(){if(this._isVisible)return;const t=this.editor,e=t.commands.get("imageTextAlternative"),n=this._form.labeledInput;this._isInBalloon||this._balloon.add({view:this._form,position:mf(t)}),n.fieldView.value=n.fieldView.element.value=e.value||"",this._form.labeledInput.fieldView.select()}_hideForm(t){this._isInBalloon&&(this._form.focusTracker.isFocused&&this._form.saveButtonView.focus(),this._balloon.remove(this._form),t&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView===this._form}get _isInBalloon(){return this._balloon.hasView(this._form)}}class bf extends Zl{static get requires(){return[nf,pf]}static get pluginName(){return"ImageTextAlternative"}}n(63);class wf extends Zl{static get requires(){return[th,Xh,bf]}static get pluginName(){return"Image"}}class kf extends hl{constructor(t){super(t),this.buttonView=new Ll(t),this._fileInputView=new _f(t),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class _f extends hl{constructor(t){super(t),this.set("acceptedType"),this.set("allowMultipleFiles",!1);const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:e.to("acceptedType"),multiple:e.to("allowMultipleFiles")},on:{change:e.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}function vf(t){const e=t.map(t=>t.replace("+","\\+"));return new RegExp(`^image\\/(${e.join("|")})$`)}class yf extends Zl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageUpload",n=>{const i=new kf(n),o=t.commands.get("imageUpload"),r=t.config.get("image.upload.types"),s=vf(r);return i.set({acceptedType:r.map(t=>"image/"+t).join(","),allowMultipleFiles:!0}),i.buttonView.set({label:e("Insert image"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',tooltip:!0}),i.buttonView.bind("isEnabled").to(o),i.on("done",(e,n)=>{const i=Array.from(n).filter(t=>s.test(t.type));i.length&&t.execute("imageUpload",{file:i})}),i})}}n(65),n(67),n(69);class xf extends Zl{constructor(t){super(t),this.placeholder="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><rect rx="4"/></svg>')}init(){this.editor.editing.downcastDispatcher.on("attribute:uploadStatus:image",(...t)=>this.uploadStatusChange(...t))}uploadStatusChange(t,e,n){const i=this.editor,o=e.item,r=o.getAttribute("uploadId");if(!n.consumable.consume(e.item,t.name))return;const s=i.plugins.get(ou),a=r?e.attributeNewValue:null,c=this.placeholder,l=i.editing.mapper.toViewElement(o),d=n.writer;if("reading"==a)return Af(l,d),void Cf(c,l,d);if("uploading"==a){const t=s.loaders.get(r);return Af(l,d),void(t?(Tf(l,d),function(t,e,n,i){const o=function(t){const e=t.createUIElement("div",{class:"ck-progress-bar"});return t.setCustomProperty("progressBar",!0,e),e}(e);e.insert(e.createPositionAt(t,"end"),o),n.on("change:uploadedPercent",(t,e,n)=>{i.change(t=>{t.setStyle("width",n+"%",o)})})}(l,d,t,i.editing.view),function(t,e,n){if(n.data){const i=Ju(t);e.setAttribute("src",n.data,i)}}(l,d,t)):Cf(c,l,d))}"complete"==a&&s.loaders.get(r)&&function(t,e,n){const i=e.createUIElement("div",{class:"ck-image-upload-complete-icon"});e.insert(e.createPositionAt(t,"end"),i),setTimeout(()=>{n.change(t=>t.remove(t.createRangeOn(i)))},3e3)}(l,d,i.editing.view),function(t,e){Sf(t,e,"progressBar")}(l,d),Tf(l,d),function(t,e){e.removeClass("ck-appear",t)}(l,d)}}function Af(t,e){t.hasClass("ck-appear")||e.addClass("ck-appear",t)}function Cf(t,e,n){e.hasClass("ck-image-upload-placeholder")||n.addClass("ck-image-upload-placeholder",e);const i=Ju(e);i.getAttribute("src")!==t&&n.setAttribute("src",t,i),Pf(e,"placeholder")||n.insert(n.createPositionAfter(i),function(t){const e=t.createUIElement("div",{class:"ck-upload-placeholder-loader"});return t.setCustomProperty("placeholder",!0,e),e}(n))}function Tf(t,e){t.hasClass("ck-image-upload-placeholder")&&e.removeClass("ck-image-upload-placeholder",t),Sf(t,e,"placeholder")}function Pf(t,e){for(const n of t.getChildren())if(n.getCustomProperty(e))return n}function Sf(t,e,n){const i=Pf(t,n);i&&e.remove(e.createRangeOn(i))}class Ef{constructor(t){this.document=t}createDocumentFragment(t){return new To(this.document,t)}createElement(t,e,n){return new Oi(this.document,t,e,n)}createText(t){return new Rn(this.document,t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,n){return n._insertChild(t,e)}removeChildren(t,e,n){return n._removeChildren(t,e)}remove(t){const e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){const n=t.parent;if(n){const i=n.getChildIndex(t);return this.removeChildren(i,1,n),this.insertChild(i,e,n),!0}return!1}unwrapElement(t){const e=t.parent;if(e){const n=e.getChildIndex(t);this.remove(t),this.insertChild(n,t.getChildren(),e)}}rename(t,e){const n=new Oi(this.document,t,e.getAttributes(),e.getChildren());return this.replace(e,n)?n:null}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){y(t)&&void 0===n&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return Zi._createAt(t,e)}createPositionAfter(t){return Zi._createAfter(t)}createPositionBefore(t){return Zi._createBefore(t)}createRange(t,e){return new Xi(t,e)}createRangeOn(t){return Xi._createOn(t)}createRangeIn(t){return Xi._createIn(t)}createSelection(t,e,n){return new no(t,e,n)}}class Mf extends od{refresh(){this.isEnabled=Qu(this.editor.model)}execute(t){const e=this.editor,n=e.model,i=e.plugins.get(ou);n.change(e=>{const o=Array.isArray(t.file)?t.file:[t.file];for(const t of o)If(e,n,i,t)})}}function If(t,e,n,i){const o=n.createLoader(i);o&&Ku(t,e,{uploadId:o.id})}class Nf extends Zl{static get requires(){return[ou,Vh,id]}static get pluginName(){return"ImageUploadEditing"}constructor(t){super(t),t.config.define("image",{upload:{types:["jpeg","png","gif","bmp","webp","tiff"]}})}init(){const t=this.editor,e=t.model.document,n=t.model.schema,i=t.conversion,o=t.plugins.get(ou),r=vf(t.config.get("image.upload.types"));n.extend("image",{allowAttributes:["uploadId","uploadStatus"]}),t.commands.add("imageUpload",new Mf(t)),i.for("upcast").attributeToAttribute({view:{name:"img",key:"uploadId"},model:"uploadId"}),this.listenTo(t.editing.view.document,"clipboardInput",(e,n)=>{if(i=n.dataTransfer,Array.from(i.types).includes("text/html")&&""!==i.getData("text/html"))return;var i;const o=Array.from(n.dataTransfer.files).filter(t=>!!t&&r.test(t.type)),s=n.targetRanges.map(e=>t.editing.mapper.toModelRange(e));t.model.change(n=>{n.setSelection(s),o.length&&(e.stop(),t.model.enqueueChange("default",()=>{t.execute("imageUpload",{file:o})}))})}),this.listenTo(t.plugins.get(id),"inputTransformation",(e,n)=>{const i=Array.from(t.editing.view.createRangeIn(n.content)).filter(t=>{return!(!(e=t.item).is("element","img")||!e.getAttribute("src"))&&(e.getAttribute("src").match(/^data:image\/\w+;base64,/g)||e.getAttribute("src").match(/^blob:/g))&&!t.item.getAttribute("uploadProcessed");var e}).map(t=>{return{promise:(e=t.item,new Promise((t,n)=>{const i=e.getAttribute("src");fetch(i).then(t=>t.blob()).then(e=>{const n=function(t,e){return t.type?t.type:e.match(/data:(image\/\w+);base64/)?e.match(/data:(image\/\w+);base64/)[1].toLowerCase():"image/jpeg"}(e,i),o=n.replace("image/",""),r=new File([e],"image."+o,{type:n});t(r)}).catch(n)})),imageElement:t.item};var e});if(!i.length)return;const r=new Ef(t.editing.view.document);for(const t of i){r.setAttribute("uploadProcessed",!0,t.imageElement);const e=o.createLoader(t.promise);e&&(r.setAttribute("src","",t.imageElement),r.setAttribute("uploadId",e.id,t.imageElement))}}),t.editing.view.document.on("dragover",(t,e)=>{e.preventDefault()}),e.on("change",()=>{const n=e.differ.getChanges({includeChangesInGraveyard:!0});for(const e of n)if("insert"==e.type&&"$text"!=e.name){const n=e.position.nodeAfter,i="$graveyard"==e.position.root.rootName;for(const e of Of(t,n)){const t=e.getAttribute("uploadId");if(!t)continue;const n=o.loaders.get(t);n&&(i?n.abort():"idle"==n.status&&this._readAndUpload(n,e))}}})}_readAndUpload(t,e){const n=this.editor,i=n.model,o=n.locale.t,r=n.plugins.get(ou),s=n.plugins.get(Vh);return i.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","reading",e)}),t.read().then(()=>{const o=t.upload();if(ho.isSafari){const t=Ju(n.editing.mapper.toViewElement(e));n.editing.view.once("render",()=>{if(!t.parent)return;const e=n.editing.view.domConverter.mapViewToDom(t.parent);if(!e)return;const i=e.style.display;e.style.display="none",e._ckHack=e.offsetHeight,e.style.display=i})}return i.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","uploading",e)}),o}).then(t=>{i.enqueueChange("transparent",n=>{n.setAttributes({uploadStatus:"complete",src:t.default},e),this._parseAndSetSrcsetAttributeOnImage(t,e,n)}),a()}).catch(n=>{if("error"!==t.status&&"aborted"!==t.status)throw n;"error"==t.status&&n&&s.showWarning(n,{title:o("Upload failed"),namespace:"upload"}),a(),i.enqueueChange("transparent",t=>{t.remove(e)})});function a(){i.enqueueChange("transparent",t=>{t.removeAttribute("uploadId",e),t.removeAttribute("uploadStatus",e)}),r.destroyLoader(t)}}_parseAndSetSrcsetAttributeOnImage(t,e,n){let i=0;const o=Object.keys(t).filter(t=>{const e=parseInt(t,10);if(!isNaN(e))return i=Math.max(i,e),!0}).map(e=>`${t[e]} ${e}w`).join(", ");""!=o&&n.setAttribute("srcset",{data:o,width:i},e)}}function Of(t,e){return Array.from(t.model.createRangeOn(e)).filter(t=>t.item.is("image")).map(t=>t.item)}class Rf extends Zl{static get pluginName(){return"ImageUpload"}static get requires(){return[Nf,yf,xf]}}class Df extends od{refresh(){const t=this.editor.model,e=wu(t.document.selection.getSelectedBlocks());this.value=!!e&&e.is("paragraph"),this.isEnabled=!!e&&Lf(e,t.schema)}execute(t={}){const e=this.editor.model,n=e.document;e.change(i=>{const o=(t.selection||n.selection).getSelectedBlocks();for(const t of o)!t.is("paragraph")&&Lf(t,e.schema)&&i.rename(t,"paragraph")})}}function Lf(t,e){return e.checkChild(t.parent,"paragraph")&&!e.isObject(t)}class jf extends od{execute(t){const e=this.editor.model;let n=t.position;e.change(t=>{const i=t.createElement("paragraph");if(!e.schema.checkChild(n.parent,i)){const o=e.schema.findAllowedParent(n,i);if(!o)return;n=t.split(n,o).position}e.insertContent(i,n),t.setSelection(i,"in")})}}class Vf extends Zl{static get pluginName(){return"Paragraph"}init(){const t=this.editor,e=t.model,n=t.data;t.commands.add("paragraph",new Df(t)),t.commands.add("insertParagraph",new jf(t)),e.schema.register("paragraph",{inheritAllFrom:"$block"}),t.conversion.elementToElement({model:"paragraph",view:"p"}),t.conversion.for("upcast").elementToElement({model:(t,e)=>Vf.paragraphLikeElements.has(t.name)?t.isEmpty?null:e.createElement("paragraph"):null,converterPriority:"low"}),n.upcastDispatcher.on("element",(t,e,n)=>{n.consumable.test(e.viewItem,{name:e.viewItem.name})&&Bf(e.viewItem,e.modelCursor,n.schema)&&Object.assign(e,zf(e.viewItem,e.modelCursor,n))},{priority:"low"}),n.upcastDispatcher.on("text",(t,e,n)=>{e.modelRange||Bf(e.viewItem,e.modelCursor,n.schema)&&Object.assign(e,zf(e.viewItem,e.modelCursor,n))},{priority:"lowest"}),e.document.registerPostFixer(t=>this._autoparagraphEmptyRoots(t)),t.data.on("ready",()=>{e.enqueueChange("transparent",t=>this._autoparagraphEmptyRoots(t))},{priority:"lowest"})}_autoparagraphEmptyRoots(t){const e=this.editor.model;for(const n of e.document.getRootNames()){const i=e.document.getRoot(n);if(i.isEmpty&&"$graveyard"!=i.rootName&&e.schema.checkChild(i,"paragraph"))return t.insertElement("paragraph",i),!0}}}function zf(t,e,n){const i=n.writer.createElement("paragraph");return n.writer.insert(i,e),n.convertItem(t,n.writer.createPositionAt(i,0))}function Bf(t,e,n){const i=n.createContext(e);return!!n.checkChild(i,"paragraph")&&!!n.checkChild(i.push("paragraph"),t)}Vf.paragraphLikeElements=new Set(["blockquote","dd","div","dt","h1","h2","h3","h4","h5","h6","li","p","td"]);class Ff extends od{constructor(t,e){super(t),this.modelElements=e}refresh(){const t=wu(this.editor.model.document.selection.getSelectedBlocks());this.value=!!t&&this.modelElements.includes(t.name)&&t.name,this.isEnabled=!!t&&this.modelElements.some(e=>Uf(t,e,this.editor.model.schema))}execute(t){const e=this.editor.model,n=e.document,i=t.value;e.change(t=>{const o=Array.from(n.selection.getSelectedBlocks()).filter(t=>Uf(t,i,e.schema));for(const e of o)e.is(i)||t.rename(e,i)})}}function Uf(t,e,n){return n.checkChild(t.parent,e)&&!n.isObject(t)}class Hf extends Zl{static get pluginName(){return"HeadingEditing"}constructor(t){super(t),t.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[Vf]}init(){const t=this.editor,e=t.config.get("heading.options"),n=[];for(const i of e)"paragraph"!==i.model&&(t.model.schema.register(i.model,{inheritAllFrom:"$block"}),t.conversion.elementToElement(i),n.push(i.model));this._addDefaultH1Conversion(t),t.commands.add("heading",new Ff(t,n))}afterInit(){const t=this.editor,e=t.commands.get("enter"),n=t.config.get("heading.options");e&&this.listenTo(e,"afterExecute",(e,i)=>{const o=t.model.document.selection.getFirstPosition().parent;n.some(t=>o.is(t.model))&&!o.is("paragraph")&&0===o.childCount&&i.writer.rename(o,"paragraph")})}_addDefaultH1Conversion(t){t.conversion.for("upcast").elementToElement({model:"heading1",view:"h1",converterPriority:un.get("low")+1})}}class Wf{constructor(t,e){e&&ji(this,e),t&&this.set(t)}}xn(Wf,Ui);n(11);class qf extends Zl{init(){const t=this.editor,e=t.t,n=function(t){const e=t.t,n={Paragraph:e("Paragraph"),"Heading 1":e("Heading 1"),"Heading 2":e("Heading 2"),"Heading 3":e("Heading 3"),"Heading 4":e("Heading 4"),"Heading 5":e("Heading 5"),"Heading 6":e("Heading 6")};return t.config.get("heading.options").map(t=>{const e=n[t.title];return e&&e!=t.title&&(t.title=e),t})}(t),i=e("Choose heading"),o=e("Heading");t.ui.componentFactory.add("heading",e=>{const r={},s=new An,a=t.commands.get("heading"),c=t.commands.get("paragraph"),l=[a];for(const t of n){const e={type:"button",model:new Wf({label:t.title,class:t.class,withText:!0})};"paragraph"===t.model?(e.model.bind("isOn").to(c,"value"),e.model.set("commandName","paragraph"),l.push(c)):(e.model.bind("isOn").to(a,"value",e=>e===t.model),e.model.set({commandName:"heading",commandValue:t.model})),s.add(e),r[t.model]=t.title}const d=Wl(e);return ql(d,s),d.buttonView.set({isOn:!1,withText:!0,tooltip:o}),d.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),d.bind("isEnabled").toMany(l,"isEnabled",(...t)=>t.some(t=>t)),d.buttonView.bind("label").to(a,"value",c,"value",(t,e)=>{const n=t||e&&"paragraph";return r[n]?r[n]:i}),this.listenTo(d,"execute",e=>{t.execute(e.source.commandName,e.source.commandValue?{value:e.source.commandValue}:void 0),t.editing.view.focus()}),d})}}function Yf(t){for(const e of t.getChildren())if(e&&e.is("caption"))return e;return null}function Gf(t){const e=t.parent;return"figcaption"==t.name&&e&&"figure"==e.name&&e.hasClass("image")?{name:!0}:null}class $f extends Zl{static get pluginName(){return"ImageCaptionEditing"}init(){const t=this.editor,e=t.editing.view,n=t.model.schema,i=t.data,o=t.editing,r=t.t;n.register("caption",{allowIn:"image",allowContentOf:"$block",isLimit:!0}),t.model.document.registerPostFixer(t=>this._insertMissingModelCaptionElement(t)),t.conversion.for("upcast").elementToElement({view:Gf,model:"caption"});i.downcastDispatcher.on("insert:caption",Kf(t=>t.createContainerElement("figcaption"),!1));const s=function(t,e){return n=>{const i=n.createEditableElement("figcaption");return n.setCustomProperty("imageCaption",!0,i),Bc({view:t,element:i,text:e}),Hu(i,n)}}(e,r("Enter image caption"));o.downcastDispatcher.on("insert:caption",Kf(s)),o.downcastDispatcher.on("insert",this._fixCaptionVisibility(t=>t.item),{priority:"high"}),o.downcastDispatcher.on("remove",this._fixCaptionVisibility(t=>t.position.parent),{priority:"high"}),e.document.registerPostFixer(t=>this._updateCaptionVisibility(t))}_updateCaptionVisibility(t){const e=this.editor.editing.mapper,n=this._lastSelectedCaption;let i;const o=this.editor.model.document.selection,r=o.getSelectedElement();if(r&&r.is("image")){const t=Yf(r);i=e.toViewElement(t)}const s=Qf(o.getFirstPosition().parent);if(s&&(i=e.toViewElement(s)),i)return n?(n===i||(Jf(n,t),this._lastSelectedCaption=i),Zf(i,t)):(this._lastSelectedCaption=i,Zf(i,t));if(n){const e=Jf(n,t);return this._lastSelectedCaption=null,e}return!1}_fixCaptionVisibility(t){return(e,n,i)=>{const o=Qf(t(n)),r=this.editor.editing.mapper,s=i.writer;if(o){const t=r.toViewElement(o);t&&(o.childCount?s.removeClass("ck-hidden",t):s.addClass("ck-hidden",t))}}}_insertMissingModelCaptionElement(t){const e=this.editor.model,n=e.document.differ.getChanges(),i=[];for(const t of n)if("insert"==t.type&&"$text"!=t.name){const n=t.position.nodeAfter;if(n.is("image")&&!Yf(n)&&i.push(n),!n.is("image")&&n.childCount)for(const t of e.createRangeIn(n).getItems())t.is("image")&&!Yf(t)&&i.push(t)}for(const e of i)t.appendElement("caption",e);return!!i.length}}function Kf(t,e=!0){return(n,i,o)=>{const r=i.item;if((r.childCount||e)&&$u(r.parent)){if(!o.consumable.consume(i.item,"insert"))return;const e=o.mapper.toViewElement(i.range.start.parent),n=t(o.writer),s=o.writer;r.childCount||s.addClass("ck-hidden",n),function(t,e,n,i){const o=i.writer.createPositionAt(n,"end");i.writer.insert(o,t),i.mapper.bindElements(e,t)}(n,i.item,e,o)}}}function Qf(t){const e=t.getAncestors({includeSelf:!0}).find(t=>"caption"==t.name);return e&&e.parent&&"image"==e.parent.name?e:null}function Jf(t,e){return!t.childCount&&!t.hasClass("ck-hidden")&&(e.addClass("ck-hidden",t),!0)}function Zf(t,e){return!!t.hasClass("ck-hidden")&&(e.removeClass("ck-hidden",t),!0)}n(72);class Xf extends od{constructor(t,e){super(t),this.defaultStyle=!1,this.styles=e.reduce((t,e)=>(t[e.name]=e,e.isDefault&&(this.defaultStyle=e.name),t),{})}refresh(){const t=this.editor.model.document.selection.getSelectedElement();if(this.isEnabled=$u(t),t)if(t.hasAttribute("imageStyle")){const e=t.getAttribute("imageStyle");this.value=!!this.styles[e]&&e}else this.value=this.defaultStyle;else this.value=!1}execute(t){const e=t.value,n=this.editor.model,i=n.document.selection.getSelectedElement();n.change(t=>{this.styles[e].isDefault?t.removeAttribute("imageStyle",i):t.setAttribute("imageStyle",e,i)})}}function tg(t,e){for(const n of e)if(n.name===t)return n}var eg='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm2.5 3V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06c-.585 0-1.06-.407-1.06-.91V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></svg>',ng='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z"/></svg>',ig='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm4.5 3V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></svg>',og='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm0 3V6h5.674v1.5zm0 3V9h5.674v1.5zm0 3V12h5.674v1.5zm8.5-6V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></svg>';const rg={full:{name:"full",title:"Full size image",icon:eg,isDefault:!0},side:{name:"side",title:"Side image",icon:og,className:"image-style-side"},alignLeft:{name:"alignLeft",title:"Left aligned image",icon:ng,className:"image-style-align-left"},alignCenter:{name:"alignCenter",title:"Centered image",icon:ig,className:"image-style-align-center"},alignRight:{name:"alignRight",title:"Right aligned image",icon:og,className:"image-style-align-right"}},sg={full:eg,left:ng,right:og,center:ig};function ag(t=[]){return t.map(cg)}function cg(t){if("string"==typeof t){const e=t;rg[e]?t=Object.assign({},rg[e]):(console.warn(Object(hn.a)("image-style-not-found: There is no such image style of given name."),{name:e}),t={name:e})}else if(rg[t.name]){const e=rg[t.name],n=Object.assign({},t);for(const i in e)Object.prototype.hasOwnProperty.call(t,i)||(n[i]=e[i]);t=n}return"string"==typeof t.icon&&sg[t.icon]&&(t.icon=sg[t.icon]),t}class lg extends Zl{static get pluginName(){return"ImageStyleEditing"}init(){const t=this.editor,e=t.model.schema,n=t.data,i=t.editing;t.config.define("image.styles",["full","side"]);const o=ag(t.config.get("image.styles"));e.extend("image",{allowAttributes:"imageStyle"});const r=function(t){return(e,n,i)=>{if(!i.consumable.consume(n.item,e.name))return;const o=tg(n.attributeNewValue,t),r=tg(n.attributeOldValue,t),s=i.mapper.toViewElement(n.item),a=i.writer;r&&a.removeClass(r.className,s),o&&a.addClass(o.className,s)}}(o);i.downcastDispatcher.on("attribute:imageStyle:image",r),n.downcastDispatcher.on("attribute:imageStyle:image",r),n.upcastDispatcher.on("element:figure",function(t){const e=t.filter(t=>!t.isDefault);return(t,n,i)=>{if(!n.modelRange)return;const o=n.viewItem,r=wu(n.modelRange.getItems());if(i.schema.checkAttribute(r,"imageStyle"))for(const t of e)i.consumable.consume(o,{classes:t.className})&&i.writer.setAttribute("imageStyle",t.name,r)}}(o),{priority:"low"}),t.commands.add("imageStyle",new Xf(t,o))}}n(74);class dg extends Zl{static get pluginName(){return"ImageStyleUI"}get localizedDefaultStylesTitles(){const t=this.editor.t;return{"Full size image":t("Full size image"),"Side image":t("Side image"),"Left aligned image":t("Left aligned image"),"Centered image":t("Centered image"),"Right aligned image":t("Right aligned image")}}init(){const t=function(t,e){for(const n of t)e[n.title]&&(n.title=e[n.title]);return t}(ag(this.editor.config.get("image.styles")),this.localizedDefaultStylesTitles);for(const e of t)this._createButton(e)}_createButton(t){const e=this.editor,n="imageStyle:"+t.name;e.ui.componentFactory.add(n,n=>{const i=e.commands.get("imageStyle"),o=new Ll(n);return o.set({label:t.title,icon:t.icon,tooltip:!0,isToggleable:!0}),o.bind("isEnabled").to(i,"isEnabled"),o.bind("isOn").to(i,"value",e=>e===t.name),this.listenTo(o,"execute",()=>{e.execute("imageStyle",{value:t.name}),e.editing.view.focus()}),o})}}class ug extends Zl{static get requires(){return[hf]}static get pluginName(){return"WidgetToolbarRepository"}init(){const t=this.editor;if(t.plugins.has("BalloonToolbar")){const e=t.plugins.get("BalloonToolbar");this.listenTo(e,"show",e=>{(function(t){const e=t.getSelectedElement();return!(!e||!zu(e))})(t.editing.view.document.selection)&&e.stop()},{priority:"high"})}this._toolbarDefinitions=new Map,this._balloon=this.editor.plugins.get("ContextualBalloon"),this.on("change:isEnabled",()=>{this._updateToolbarsVisibility()}),this.listenTo(t.ui,"update",()=>{this._updateToolbarsVisibility()}),this.listenTo(t.ui.focusTracker,"change:isFocused",()=>{this._updateToolbarsVisibility()},{priority:"low"})}destroy(){super.destroy();for(const t of this._toolbarDefinitions.values())t.view.destroy()}register(t,{ariaLabel:e,items:n,getRelatedElement:i,balloonClassName:o="ck-toolbar-container"}){if(!n.length)return void console.warn(Object(hn.a)("widget-toolbar-no-items: Trying to register a toolbar without items."),{toolbarId:t});const r=this.editor,s=r.t,a=new Yl(r.locale);if(a.ariaLabel=e||s("Widget toolbar"),this._toolbarDefinitions.has(t))throw new hn.b("widget-toolbar-duplicated: Toolbar with the given id was already added.",this,{toolbarId:t});a.fillFromConfig(n,r.ui.componentFactory),this._toolbarDefinitions.set(t,{view:a,getRelatedElement:i,balloonClassName:o})}_updateToolbarsVisibility(){let t=0,e=null,n=null;for(const i of this._toolbarDefinitions.values()){const o=i.getRelatedElement(this.editor.editing.view.document.selection);if(this.isEnabled&&o)if(this.editor.ui.focusTracker.isFocused){const r=o.getAncestors().length;r>t&&(t=r,e=o,n=i)}else this._isToolbarVisible(i)&&this._hideToolbar(i);else this._isToolbarInBalloon(i)&&this._hideToolbar(i)}n&&this._showToolbar(n,e)}_hideToolbar(t){this._balloon.remove(t.view),this.stopListening(this._balloon,"change:visibleView")}_showToolbar(t,e){this._isToolbarVisible(t)?hg(this.editor,e):this._isToolbarInBalloon(t)||(this._balloon.add({view:t.view,position:fg(this.editor,e),balloonClassName:t.balloonClassName}),this.listenTo(this._balloon,"change:visibleView",()=>{for(const t of this._toolbarDefinitions.values())if(this._isToolbarVisible(t)){const e=t.getRelatedElement(this.editor.editing.view.document.selection);hg(this.editor,e)}}))}_isToolbarVisible(t){return this._balloon.visibleView===t.view}_isToolbarInBalloon(t){return this._balloon.hasView(t.view)}}function hg(t,e){const n=t.plugins.get("ContextualBalloon"),i=fg(t,e);n.updatePosition(i)}function fg(t,e){const n=t.editing.view,i=Ou.defaultPositions;return{target:n.domConverter.mapViewToDom(e),positions:[i.northArrowSouth,i.northArrowSouthWest,i.northArrowSouthEast,i.southArrowNorth,i.southArrowNorthWest,i.southArrowNorthEast,qu]}}class gg extends od{constructor(t){super(t),this._childCommands=[]}refresh(){}execute(...t){this._getFirstEnabledCommand().execute(t)}registerChildCommand(t){this._childCommands.push(t),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){return this._childCommands.find(t=>t.isEnabled)}}class mg extends Zl{static get pluginName(){return"IndentEditing"}init(){const t=this.editor;t.commands.add("indent",new gg(t)),t.commands.add("outdent",new gg(t))}}var pg='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95L5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>',bg='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>';class wg extends Zl{static get pluginName(){return"IndentUI"}init(){const t=this.editor,e=t.locale,n=t.t,i="ltr"==e.uiLanguageDirection?pg:bg,o="ltr"==e.uiLanguageDirection?bg:pg;this._defineButton("indent",n("Increase indent"),i),this._defineButton("outdent",n("Decrease indent"),o)}_defineButton(t,e,n){const i=this.editor;i.ui.componentFactory.add(t,o=>{const r=i.commands.get(t),s=new Ll(o);return s.set({label:e,icon:n,tooltip:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(s,"execute",()=>{i.execute(t),i.editing.view.focus()}),s})}}class kg extends Dr{constructor(t){super(t),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}n(76);class _g extends hl{constructor(t,e,n){super(t);const i=t.t;this.focusTracker=new jc,this.keystrokes=new Sc,this.urlInputView=this._createUrlInput(n),this.saveButtonView=this._createButton(i("Save"),cf,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(i("Cancel"),lf,"ck-button-cancel","cancel"),this._manualDecoratorSwitches=this._createManualDecoratorSwitches(e),this.children=this._createFormChildren(e.manualDecorators),this._focusables=new Yc,this._focusCycler=new xl({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}});const o=["ck","ck-link-form"];e.manualDecorators.length&&o.push("ck-link-form_layout-vertical"),this.setTemplate({tag:"form",attributes:{class:o,tabindex:"-1"},children:this.children})}getDecoratorSwitchesState(){return Array.from(this._manualDecoratorSwitches).reduce((t,e)=>(t[e.name]=e.isOn,t),{})}render(){super.render(),af({view:this});[this.urlInputView,...this._manualDecoratorSwitches,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createUrlInput(t="https://"){const e=this.locale.t,n=new of(this.locale,sf);return n.label=e("Link URL"),n.fieldView.placeholder=t+"example.com",n}_createButton(t,e,n,i){const o=new Ll(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.extendTemplate({attributes:{class:n}}),i&&o.delegate("execute").to(this,i),o}_createManualDecoratorSwitches(t){const e=this.createCollection();for(const n of t.manualDecorators){const i=new Ul(this.locale);i.set({name:n.id,label:n.label,withText:!0}),i.bind("isOn").toMany([n,t],"value",(t,e)=>void 0===e&&void 0===t?n.defaultValue:t),i.on("execute",()=>{n.set("value",!i.isOn)}),e.add(i)}return e}_createFormChildren(t){const e=this.createCollection();if(e.add(this.urlInputView),t.length){const t=new hl;t.setTemplate({tag:"ul",children:this._manualDecoratorSwitches.map(t=>({tag:"li",children:[t],attributes:{class:["ck","ck-list__item"]}})),attributes:{class:["ck","ck-reset","ck-list"]}}),e.add(t)}return e.add(this.saveButtonView),e.add(this.cancelButtonView),e}}n(78);class vg extends hl{constructor(t){super(t);const e=t.t;this.focusTracker=new jc,this.keystrokes=new Sc,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(e("Unlink"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',"unlink"),this.editButtonView=this._createButton(e("Edit link"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z"/></svg>',"edit"),this.set("href"),this._focusables=new Yc,this._focusCycler=new xl({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render();[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createButton(t,e,n){const i=new Ll(this.locale);return i.set({label:t,icon:e,tooltip:!0}),i.delegate("execute").to(this,n),i}_createPreviewButton(){const t=new Ll(this.locale),e=this.bindTemplate,n=this.t;return t.set({withText:!0,tooltip:n("Open link in new tab")}),t.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:e.to("href",t=>t&&Dh(t)),target:"_blank",rel:"noopener noreferrer"}}),t.bind("label").to(this,"href",t=>t||n("This link has no URL")),t.bind("isEnabled").to(this,"href",t=>!!t),t.template.tag="a",t.template.eventListeners={},t}}const yg=/^((\w+:(\/{2,})?)|(\W))/i,xg=/[\w-]+@[\w-]+\.+[\w-]+/i;class Ag extends Zl{static get requires(){return[hf]}static get pluginName(){return"LinkUI"}init(){const t=this.editor;t.editing.view.addObserver(kg),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=t.plugins.get(hf),this._createToolbarLinkButton(),this._enableUserBalloonInteractions(),t.conversion.for("downcast").markerToHighlight({model:"link-ui",view:{classes:["ck-fake-link-selection"]}}),t.conversion.for("downcast").markerToElement({model:"link-ui",view:{name:"span",classes:["ck-fake-link-selection","ck-fake-link-selection_collapsed"]}})}destroy(){super.destroy(),this.formView.destroy()}_createActionsView(){const t=this.editor,e=new vg(t.locale),n=t.commands.get("link"),i=t.commands.get("unlink");return e.bind("href").to(n,"value"),e.editButtonView.bind("isEnabled").to(n),e.unlinkButtonView.bind("isEnabled").to(i),this.listenTo(e,"edit",()=>{this._addFormView()}),this.listenTo(e,"unlink",()=>{t.execute("unlink"),this._hideUI()}),e.keystrokes.set("Esc",(t,e)=>{this._hideUI(),e()}),e.keystrokes.set("Ctrl+K",(t,e)=>{this._addFormView(),e()}),e}_createFormView(){const t=this.editor,e=t.commands.get("link"),n=t.config.get("link.defaultProtocol"),i=new _g(t.locale,e,n);return i.urlInputView.fieldView.bind("value").to(e,"value"),i.urlInputView.bind("isReadOnly").to(e,"isEnabled",t=>!t),i.saveButtonView.bind("isEnabled").to(e),this.listenTo(i,"submit",()=>{const{value:e}=i.urlInputView.fieldView.element,o=!!n&&!yg.test(e),r=xg.test(e),s=e&&o?(r?"mailto:":n)+e:e;t.execute("link",s,i.getDecoratorSwitchesState()),this._closeFormView()}),this.listenTo(i,"cancel",()=>{this._closeFormView()}),i.keystrokes.set("Esc",(t,e)=>{this._closeFormView(),e()}),i}_createToolbarLinkButton(){const t=this.editor,e=t.commands.get("link"),n=t.t;t.keystrokes.set("Ctrl+K",(t,e)=>{e(),this._showUI(!0)}),t.ui.componentFactory.add("link",t=>{const i=new Ll(t);return i.isEnabled=!0,i.label=n("Link"),i.icon='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>',i.keystroke="Ctrl+K",i.tooltip=!0,i.isToggleable=!0,i.bind("isEnabled").to(e,"isEnabled"),i.bind("isOn").to(e,"value",t=>!!t),this.listenTo(i,"execute",()=>this._showUI(!0)),i})}_enableUserBalloonInteractions(){const t=this.editor.editing.view.document;this.listenTo(t,"click",()=>{this._getSelectedLinkElement()&&this._showUI()}),this.editor.keystrokes.set("Tab",(t,e)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),e())},{priority:"high"}),this.editor.keystrokes.set("Esc",(t,e)=>{this._isUIVisible&&(this._hideUI(),e())}),Hl({emitter:this.formView,activator:()=>this._isUIInPanel,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;const t=this.editor.commands.get("link");this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this._balloon.visibleView===this.formView&&this.formView.urlInputView.fieldView.select(),this.formView.urlInputView.fieldView.element.value=t.value||""}_closeFormView(){const t=this.editor.commands.get("link");t.restoreManualDecoratorStates(),void 0!==t.value?this._removeFormView():this._hideUI()}_removeFormView(){this._isFormInPanel&&(this.formView.saveButtonView.focus(),this._balloon.remove(this.formView),this.editor.editing.view.focus(),this._hideFakeVisualSelection())}_showUI(t=!1){this._getSelectedLinkElement()?(this._areActionsVisible?this._addFormView():this._addActionsView(),t&&this._balloon.showStack("main")):(this._addActionsView(),t&&this._balloon.showStack("main"),this._addFormView(),this._showFakeVisualSelection()),this._startUpdatingUI()}_hideUI(){if(!this._isUIInPanel)return;const t=this.editor;this.stopListening(t.ui,"update"),this.stopListening(this._balloon,"change:visibleView"),t.editing.view.focus(),this._removeFormView(),this._balloon.remove(this.actionsView),this._hideFakeVisualSelection()}_startUpdatingUI(){const t=this.editor,e=t.editing.view.document;let n=this._getSelectedLinkElement(),i=r();const o=()=>{const t=this._getSelectedLinkElement(),e=r();n&&!t||!n&&e!==i?this._hideUI():this._isUIVisible&&this._balloon.updatePosition(this._getBalloonPositionData()),n=t,i=e};function r(){return e.selection.focus.getAncestors().reverse().find(t=>t.is("element"))}this.listenTo(t.ui,"update",o),this.listenTo(this._balloon,"change:visibleView",o)}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){const t=this.editor.editing.view,e=t.document,n=this._getSelectedLinkElement();return{target:n?t.domConverter.mapViewToDom(n):t.domConverter.viewRangeToDom(e.selection.getFirstRange())}}_getSelectedLinkElement(){const t=this.editor.editing.view,e=t.document.selection;if(e.isCollapsed)return Cg(e.getFirstPosition());{const n=e.getFirstRange().getTrimmed(),i=Cg(n.start),o=Cg(n.end);return i&&i==o&&t.createRangeIn(i).getTrimmed().isEqual(n)?i:null}}_showFakeVisualSelection(){const t=this.editor.model;t.change(e=>{t.markers.has("link-ui")?e.updateMarker("link-ui",{range:t.document.selection.getFirstRange()}):e.addMarker("link-ui",{usingOperation:!1,affectsData:!1,range:t.document.selection.getFirstRange()})})}_hideFakeVisualSelection(){const t=this.editor.model;t.markers.has("link-ui")&&t.change(t=>{t.removeMarker("link-ui")})}}function Cg(t){return t.getAncestors().find(t=>{return(e=t).is("attributeElement")&&!!e.getCustomProperty("link");var e})}class Tg extends od{constructor(t,e){super(t),this.type=e}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document,n=Array.from(e.selection.getSelectedBlocks()).filter(e=>Sg(e,t.schema)),i=!0===this.value;t.change(t=>{if(i){let e=n[n.length-1].nextSibling,i=Number.POSITIVE_INFINITY,o=[];for(;e&&"listItem"==e.name&&0!==e.getAttribute("listIndent");){const t=e.getAttribute("listIndent");t<i&&(i=t);const n=t-i;o.push({element:e,listIndent:n}),e=e.nextSibling}o=o.reverse();for(const e of o)t.setAttribute("listIndent",e.listIndent,e.element)}if(!i){let t=Number.POSITIVE_INFINITY;for(const e of n)e.is("listItem")&&e.getAttribute("listIndent")<t&&(t=e.getAttribute("listIndent"));t=0===t?1:t,Pg(n,!0,t),Pg(n,!1,t)}for(const e of n.reverse())i&&"listItem"==e.name?t.rename(e,"paragraph"):i||"listItem"==e.name?i||"listItem"!=e.name||e.getAttribute("listType")==this.type||t.setAttribute("listType",this.type,e):(t.setAttributes({listType:this.type,listIndent:0},e),t.rename(e,"listItem"))})}_getValue(){const t=wu(this.editor.model.document.selection.getSelectedBlocks());return!!t&&t.is("listItem")&&t.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=wu(t.getSelectedBlocks());return!!n&&Sg(n,e)}}function Pg(t,e,n){const i=e?t[0]:t[t.length-1];if(i.is("listItem")){let o=i[e?"previousSibling":"nextSibling"],r=i.getAttribute("listIndent");for(;o&&o.is("listItem")&&o.getAttribute("listIndent")>=n;)r>o.getAttribute("listIndent")&&(r=o.getAttribute("listIndent")),o.getAttribute("listIndent")==r&&t[e?"unshift":"push"](o),o=o[e?"previousSibling":"nextSibling"]}}function Sg(t,e){return e.checkChild(t.parent,"listItem")&&!e.isObject(t)}class Eg extends od{constructor(t,e){super(t),this._indentBy="forward"==e?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document;let n=Array.from(e.selection.getSelectedBlocks());t.change(t=>{const e=n[n.length-1];let i=e.nextSibling;for(;i&&"listItem"==i.name&&i.getAttribute("listIndent")>e.getAttribute("listIndent");)n.push(i),i=i.nextSibling;this._indentBy<0&&(n=n.reverse());for(const e of n){const n=e.getAttribute("listIndent")+this._indentBy;n<0?t.rename(e,"paragraph"):t.setAttribute("listIndent",n,e)}})}_checkEnabled(){const t=wu(this.editor.model.document.selection.getSelectedBlocks());if(!t||!t.is("listItem"))return!1;if(this._indentBy>0){const e=t.getAttribute("listIndent"),n=t.getAttribute("listType");let i=t.previousSibling;for(;i&&i.is("listItem")&&i.getAttribute("listIndent")>=e;){if(i.getAttribute("listIndent")==e)return i.getAttribute("listType")==n;i=i.previousSibling}return!1}return!0}}function Mg(t,e){const n=e.mapper,i=e.writer,o="numbered"==t.getAttribute("listType")?"ol":"ul",r=function(t){const e=t.createContainerElement("li");return e.getFillerOffset=Lg,e}(i),s=i.createContainerElement(o,null);return i.insert(i.createPositionAt(s,0),r),n.bindElements(t,r),r}function Ig(t,e,n,i){const o=e.parent,r=n.mapper,s=n.writer;let a=r.toViewPosition(i.createPositionBefore(t));const c=Rg(t.previousSibling,{sameIndent:!0,smallerIndent:!0,listIndent:t.getAttribute("listIndent")}),l=t.previousSibling;if(c&&c.getAttribute("listIndent")==t.getAttribute("listIndent")){const t=r.toViewElement(c);a=s.breakContainer(s.createPositionAfter(t))}else a=l&&"listItem"==l.name?r.toViewPosition(i.createPositionAt(l,"end")):r.toViewPosition(i.createPositionBefore(t));if(a=Og(a),s.insert(a,o),l&&"listItem"==l.name){const t=r.toViewElement(l),n=s.createRange(s.createPositionAt(t,0),a).getWalker({ignoreElementEnd:!0});for(const t of n)if(t.item.is("li")){const i=s.breakContainer(s.createPositionBefore(t.item)),o=t.item.parent,r=s.createPositionAt(e,"end");Ng(s,r.nodeBefore,r.nodeAfter),s.move(s.createRangeOn(o),r),n.position=i}}else{const n=o.nextSibling;if(n&&(n.is("ul")||n.is("ol"))){let i=null;for(const e of n.getChildren()){const n=r.toModelElement(e);if(!(n&&n.getAttribute("listIndent")>t.getAttribute("listIndent")))break;i=e}i&&(s.breakContainer(s.createPositionAfter(i)),s.move(s.createRangeOn(i.parent),s.createPositionAt(e,"end")))}}Ng(s,o,o.nextSibling),Ng(s,o.previousSibling,o)}function Ng(t,e,n){return!e||!n||"ul"!=e.name&&"ol"!=e.name||e.name!=n.name||e.getAttribute("class")!==n.getAttribute("class")?null:t.mergeContainers(t.createPositionAfter(e))}function Og(t){return t.getLastMatchingPosition(t=>t.item.is("uiElement"))}function Rg(t,e){const n=!!e.sameIndent,i=!!e.smallerIndent,o=e.listIndent;let r=t;for(;r&&"listItem"==r.name;){const t=r.getAttribute("listIndent");if(n&&o==t||i&&o>t)return r;r=r.previousSibling}return null}function Dg(t,e,n,i){t.ui.componentFactory.add(e,o=>{const r=t.commands.get(e),s=new Ll(o);return s.set({label:n,icon:i,tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),s.on("execute",()=>{t.execute(e),t.editing.view.focus()}),s})}function Lg(){const t=!this.isEmpty&&("ul"==this.getChild(0).name||"ol"==this.getChild(0).name);return this.isEmpty||t?0:Li.call(this)}function jg(t){return(e,n,i)=>{const o=i.consumable;if(!o.test(n.item,"insert")||!o.test(n.item,"attribute:listType")||!o.test(n.item,"attribute:listIndent"))return;o.consume(n.item,"insert"),o.consume(n.item,"attribute:listType"),o.consume(n.item,"attribute:listIndent");const r=n.item;Ig(r,Mg(r,i),i,t)}}function Vg(t,e,n){if(!n.consumable.consume(e.item,"attribute:listType"))return;const i=n.mapper.toViewElement(e.item),o=n.writer;o.breakContainer(o.createPositionBefore(i)),o.breakContainer(o.createPositionAfter(i));const r=i.parent,s="numbered"==e.attributeNewValue?"ol":"ul";o.rename(s,r)}function zg(t,e,n){const i=n.mapper.toViewElement(e.item).parent,o=n.writer;Ng(o,i,i.nextSibling),Ng(o,i.previousSibling,i);for(const t of e.item.getChildren())n.consumable.consume(t,"insert")}function Bg(t,e,n){if("listItem"!=e.item.name){let t=n.mapper.toViewPosition(e.range.start);const i=n.writer,o=[];for(;("ul"==t.parent.name||"ol"==t.parent.name)&&(t=i.breakContainer(t),"li"==t.parent.name);){const e=t,n=i.createPositionAt(t.parent,"end");if(!e.isEqual(n)){const t=i.remove(i.createRange(e,n));o.push(t)}t=i.createPositionAfter(t.parent)}if(o.length>0){for(let e=0;e<o.length;e++){const n=t.nodeBefore;if(t=i.insert(t,o[e]).end,e>0){const e=Ng(i,n,n.nextSibling);e&&e.parent==n&&t.offset--}}Ng(i,t.nodeBefore,t.nodeAfter)}}}function Fg(t,e,n){const i=n.mapper.toViewPosition(e.position),o=i.nodeBefore,r=i.nodeAfter;Ng(n.writer,o,r)}function Ug(t,e,n){if(n.consumable.consume(e.viewItem,{name:!0})){const t=n.writer,i=t.createElement("listItem"),o=function(t){let e=0,n=t.parent;for(;n;){if(n.is("li"))e++;else{const t=n.previousSibling;t&&t.is("li")&&e++}n=n.parent}return e}(e.viewItem);t.setAttribute("listIndent",o,i);const r=e.viewItem.parent&&"ol"==e.viewItem.parent.name?"numbered":"bulleted";t.setAttribute("listType",r,i);const s=n.splitToAllowedParent(i,e.modelCursor);if(!s)return;t.insert(i,s.position);const a=function(t,e,n){const{writer:i,schema:o}=n;let r=i.createPositionAfter(t);for(const s of e)if("ul"==s.name||"ol"==s.name)r=n.convertItem(s,r).modelCursor;else{const e=n.convertItem(s,i.createPositionAt(t,"end")),a=e.modelRange.start.nodeAfter;a&&a.is("element")&&!o.checkChild(t,a.name)&&(t=e.modelCursor.parent.is("listItem")?e.modelCursor.parent:Gg(e.modelCursor),r=i.createPositionAfter(t))}return r}(i,e.viewItem.getChildren(),n);e.modelRange=t.createRange(e.modelCursor,a),s.cursorParent?e.modelCursor=t.createPositionAt(s.cursorParent,0):e.modelCursor=e.modelRange.end}}function Hg(t,e,n){if(n.consumable.test(e.viewItem,{name:!0})){const t=Array.from(e.viewItem.getChildren());for(const e of t){!(e.is("li")||Kg(e))&&e._remove()}}}function Wg(t,e,n){if(n.consumable.test(e.viewItem,{name:!0})){if(0===e.viewItem.childCount)return;const t=[...e.viewItem.getChildren()];let n=!1,i=!0;for(const e of t)n&&!Kg(e)&&e._remove(),e.is("text")?(i&&(e._data=e.data.replace(/^\s+/,"")),e.nextSibling&&!Kg(e.nextSibling)||(e._data=e.data.replace(/\s+$/,""))):Kg(e)&&(n=!0),i=!1}}function qg(t){return(e,n)=>{if(n.isPhantom)return;const i=n.modelPosition.nodeBefore;if(i&&i.is("listItem")){const e=n.mapper.toViewElement(i),o=e.getAncestors().find(Kg),r=t.createPositionAt(e,0).getWalker();for(const t of r){if("elementStart"==t.type&&t.item.is("li")){n.viewPosition=t.previousPosition;break}if("elementEnd"==t.type&&t.item==o){n.viewPosition=t.nextPosition;break}}}}}function Yg(t,[e,n]){let i,o=e.is("documentFragment")?e.getChild(0):e;if(i=n?this.createSelection(n):this.document.selection,o&&o.is("listItem")){const t=i.getFirstPosition();let e=null;if(t.parent.is("listItem")?e=t.parent:t.nodeBefore&&t.nodeBefore.is("listItem")&&(e=t.nodeBefore),e){const t=e.getAttribute("listIndent");if(t>0)for(;o&&o.is("listItem");)o._setAttribute("listIndent",o.getAttribute("listIndent")+t),o=o.nextSibling}}}function Gg(t){const e=new _s({startPosition:t});let n;do{n=e.next()}while(!n.value.item.is("listItem"));return n.value.item}function $g(t,e,n,i,o,r){const s=Rg(e.nodeBefore,{sameIndent:!0,smallerIndent:!0,listIndent:t,foo:"b"}),a=o.mapper,c=o.writer,l=s?s.getAttribute("listIndent"):null;let d;if(s)if(l==t){const t=a.toViewElement(s).parent;d=c.createPositionAfter(t)}else{const t=r.createPositionAt(s,"end");d=a.toViewPosition(t)}else d=n;d=Og(d);for(const t of[...i.getChildren()])Kg(t)&&(d=c.move(c.createRangeOn(t),d).end,Ng(c,t,t.nextSibling),Ng(c,t.previousSibling,t))}function Kg(t){return t.is("ol")||t.is("ul")}class Qg extends Zl{static get pluginName(){return"ListEditing"}static get requires(){return[Vf]}init(){const t=this.editor;t.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});const e=t.data,n=t.editing;var i;t.model.document.registerPostFixer(e=>function(t,e){const n=t.document.differ.getChanges(),i=new Map;let o=!1;for(const i of n)if("insert"==i.type&&"listItem"==i.name)r(i.position);else if("insert"==i.type&&"listItem"!=i.name){if("$text"!=i.name){const n=i.position.nodeAfter;n.hasAttribute("listIndent")&&(e.removeAttribute("listIndent",n),o=!0),n.hasAttribute("listType")&&(e.removeAttribute("listType",n),o=!0);for(const e of Array.from(t.createRangeIn(n)).filter(t=>t.item.is("listItem")))r(e.previousPosition)}r(i.position.getShiftedBy(i.length))}else"remove"==i.type&&"listItem"==i.name?r(i.position):("attribute"==i.type&&"listIndent"==i.attributeKey||"attribute"==i.type&&"listType"==i.attributeKey)&&r(i.range.start);for(const t of i.values())s(t),a(t);return o;function r(t){const e=t.nodeBefore;if(e&&e.is("listItem")){let t=e;if(i.has(t))return;for(let e=t.previousSibling;e&&e.is("listItem");e=t.previousSibling)if(t=e,i.has(t))return;i.set(e,t)}else{const e=t.nodeAfter;e&&e.is("listItem")&&i.set(e,e)}}function s(t){let n=0,i=null;for(;t&&t.is("listItem");){const r=t.getAttribute("listIndent");if(r>n){let s;null===i?(i=r-n,s=n):(i>r&&(i=r),s=r-i),e.setAttribute("listIndent",s,t),o=!0}else i=null,n=t.getAttribute("listIndent")+1;t=t.nextSibling}}function a(t){let n=[],i=null;for(;t&&t.is("listItem");){const r=t.getAttribute("listIndent");if(i&&i.getAttribute("listIndent")>r&&(n=n.slice(0,r+1)),0!=r)if(n[r]){const i=n[r];t.getAttribute("listType")!=i&&(e.setAttribute("listType",i,t),o=!0)}else n[r]=t.getAttribute("listType");i=t,t=t.nextSibling}}}(t.model,e)),n.mapper.registerViewToModelLength("li",Jg),e.mapper.registerViewToModelLength("li",Jg),n.mapper.on("modelToViewPosition",qg(n.view)),n.mapper.on("viewToModelPosition",(i=t.model,(t,e)=>{const n=e.viewPosition,o=n.parent,r=e.mapper;if("ul"==o.name||"ol"==o.name){if(n.isAtEnd){const t=r.toModelElement(n.nodeBefore),o=r.getModelLength(n.nodeBefore);e.modelPosition=i.createPositionBefore(t).getShiftedBy(o)}else{const t=r.toModelElement(n.nodeAfter);e.modelPosition=i.createPositionBefore(t)}t.stop()}else if("li"==o.name&&n.nodeBefore&&("ul"==n.nodeBefore.name||"ol"==n.nodeBefore.name)){const s=r.toModelElement(o);let a=1,c=n.nodeBefore;for(;c&&Kg(c);)a+=r.getModelLength(c),c=c.previousSibling;e.modelPosition=i.createPositionBefore(s).getShiftedBy(a),t.stop()}})),e.mapper.on("modelToViewPosition",qg(n.view)),t.conversion.for("editingDowncast").add(e=>{e.on("insert",Bg,{priority:"high"}),e.on("insert:listItem",jg(t.model)),e.on("attribute:listType:listItem",Vg,{priority:"high"}),e.on("attribute:listType:listItem",zg,{priority:"low"}),e.on("attribute:listIndent:listItem",function(t){return(e,n,i)=>{if(!i.consumable.consume(n.item,"attribute:listIndent"))return;const o=i.mapper.toViewElement(n.item),r=i.writer;r.breakContainer(r.createPositionBefore(o)),r.breakContainer(r.createPositionAfter(o));const s=o.parent,a=s.previousSibling,c=r.createRangeOn(s);r.remove(c),a&&a.nextSibling&&Ng(r,a,a.nextSibling),$g(n.attributeOldValue+1,n.range.start,c.start,o,i,t),Ig(n.item,o,i,t);for(const t of n.item.getChildren())i.consumable.consume(t,"insert")}}(t.model)),e.on("remove:listItem",function(t){return(e,n,i)=>{const o=i.mapper.toViewPosition(n.position).getLastMatchingPosition(t=>!t.item.is("li")).nodeAfter,r=i.writer;r.breakContainer(r.createPositionBefore(o)),r.breakContainer(r.createPositionAfter(o));const s=o.parent,a=s.previousSibling,c=r.createRangeOn(s),l=r.remove(c);a&&a.nextSibling&&Ng(r,a,a.nextSibling);$g(i.mapper.toModelElement(o).getAttribute("listIndent")+1,n.position,c.start,o,i,t);for(const t of r.createRangeIn(l).getItems())i.mapper.unbindViewElement(t);e.stop()}}(t.model)),e.on("remove",Fg,{priority:"low"})}),t.conversion.for("dataDowncast").add(e=>{e.on("insert",Bg,{priority:"high"}),e.on("insert:listItem",jg(t.model))}),t.conversion.for("upcast").add(t=>{t.on("element:ul",Hg,{priority:"high"}),t.on("element:ol",Hg,{priority:"high"}),t.on("element:li",Wg,{priority:"high"}),t.on("element:li",Ug)}),t.model.on("insertContent",Yg,{priority:"high"}),t.commands.add("numberedList",new Tg(t,"numbered")),t.commands.add("bulletedList",new Tg(t,"bulleted")),t.commands.add("indentList",new Eg(t,"forward")),t.commands.add("outdentList",new Eg(t,"backward"));const o=n.view.document;this.listenTo(o,"enter",(t,e)=>{const n=this.editor.model.document,i=n.selection.getLastPosition().parent;n.selection.isCollapsed&&"listItem"==i.name&&i.isEmpty&&(this.editor.execute("outdentList"),e.preventDefault(),t.stop())}),this.listenTo(o,"delete",(t,e)=>{if("backward"!==e.direction)return;const n=this.editor.model.document.selection;if(!n.isCollapsed)return;const i=n.getFirstPosition();if(!i.isAtStart)return;const o=i.parent;if("listItem"!==o.name)return;o.previousSibling&&"listItem"===o.previousSibling.name||(this.editor.execute("outdentList"),e.preventDefault(),t.stop())},{priority:"high"});const r=t=>(e,n)=>{this.editor.commands.get(t).isEnabled&&(this.editor.execute(t),n())};t.keystrokes.set("Tab",r("indentList")),t.keystrokes.set("Shift+Tab",r("outdentList"))}afterInit(){const t=this.editor.commands,e=t.get("indent"),n=t.get("outdent");e&&e.registerChildCommand(t.get("indentList")),n&&n.registerChildCommand(t.get("outdentList"))}}function Jg(t){let e=1;for(const n of t.getChildren())if("ul"==n.name||"ol"==n.name)for(const t of n.getChildren())e+=Jg(t);return e}class Zg extends Zl{init(){const t=this.editor.t;Dg(this.editor,"numberedList",t("Numbered List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>'),Dg(this.editor,"bulletedList",t("Bulleted List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>')}}function Xg(t,e){return t=>{t.on("attribute:url:media",n)};function n(n,i,o){if(!o.consumable.consume(i.item,n.name))return;const r=i.attributeNewValue,s=o.writer,a=o.mapper.toViewElement(i.item),c=[...a.getChildren()].find(t=>t.getCustomProperty("media-content"));s.remove(c);const l=t.getMediaViewElement(s,r,e);s.insert(s.createPositionAt(a,0),l)}}function tm(t,e,n,i){const o=t.createContainerElement("figure",{class:"media"});return o.getFillerOffset=im,t.insert(t.createPositionAt(o,0),e.getMediaViewElement(t,n,i)),o}function em(t){const e=t.getSelectedElement();return e&&e.is("media")?e:null}function nm(t,e,n){t.change(i=>{const o=i.createElement("media",{url:e});t.insertContent(o,n),i.setSelection(o,"on")})}function im(){return null}class om extends od{refresh(){const t=this.editor.model,e=t.document.selection,n=t.schema,i=e.getFirstPosition(),o=em(e);let r=i.parent;r!=r.root&&(r=r.parent),this.value=o?o.getAttribute("url"):null,this.isEnabled=n.checkChild(r,"media")}execute(t){const e=this.editor.model,n=e.document.selection,i=em(n);if(i)e.change(e=>{e.setAttribute("url",t,i)});else{const i=Wu(n,e);nm(e,t,i)}}}class rm{constructor(t,e){const n=e.providers,i=e.extraProviders||[],o=new Set(e.removeProviders),r=n.concat(i).filter(t=>{const e=t.name;return e?!o.has(e):(console.warn(Object(hn.a)("media-embed-no-provider-name: The configured media provider has no name and cannot be used."),{provider:t}),!1)});this.locale=t,this.providerDefinitions=r}hasMedia(t){return!!this._getMedia(t)}getMediaViewElement(t,e,n){return this._getMedia(e).getViewElement(t,n)}_getMedia(t){if(!t)return new sm(this.locale);t=t.trim();for(const e of this.providerDefinitions){const n=e.html;let i=e.url;Array.isArray(i)||(i=[i]);for(const e of i){const i=this._getUrlMatches(t,e);if(i)return new sm(this.locale,t,i,n)}}return null}_getUrlMatches(t,e){let n=t.match(e);if(n)return n;let i=t.replace(/^https?:\/\//,"");return n=i.match(e),n||(i=i.replace(/^www\./,""),n=i.match(e),n||null)}}class sm{constructor(t,e,n,i){this.url=this._getValidUrl(e),this._t=t.t,this._match=n,this._previewRenderer=i}getViewElement(t,e){const n={};let i;if(e.renderForEditingView||e.renderMediaPreview&&this.url&&this._previewRenderer){this.url&&(n["data-oembed-url"]=this.url),e.renderForEditingView&&(n.class="ck-media__wrapper");const o=this._getPreviewHtml(e);i=t.createUIElement("div",n,(function(t){const e=this.toDomElement(t);return e.innerHTML=o,e}))}else this.url&&(n.url=this.url),i=t.createEmptyElement("oembed",n);return t.setCustomProperty("media-content",!0,i),i}_getPreviewHtml(t){return this._previewRenderer?this._previewRenderer(this._match):this.url&&t.renderForEditingView?this._getPlaceholderHtml():""}_getPlaceholderHtml(){const t=new Dl,e=new Rl;t.text=this._t("Open media in new tab"),e.content='<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>',e.viewBox="0 0 64 42";return new Gc({tag:"div",attributes:{class:"ck ck-reset_all ck-media__placeholder"},children:[{tag:"div",attributes:{class:"ck-media__placeholder__icon"},children:[e]},{tag:"a",attributes:{class:"ck-media__placeholder__url",target:"_blank",rel:"noopener noreferrer",href:this.url},children:[{tag:"span",attributes:{class:"ck-media__placeholder__url__text"},children:[this.url]},t]}]}).render().outerHTML}_getValidUrl(t){return t?t.match(/^https?/)?t:"https://"+t:null}}n(80);class am extends Zl{static get pluginName(){return"MediaEmbedEditing"}constructor(t){super(t),t.config.define("mediaEmbed",{providers:[{name:"dailymotion",url:/^dailymotion\.com\/video\/(\w+)/,html:t=>`<div style="position: relative; padding-bottom: 100%; height: 0; "><iframe src="https://www.dailymotion.com/embed/video/${t[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>`},{name:"spotify",url:[/^open\.spotify\.com\/(artist\/\w+)/,/^open\.spotify\.com\/(album\/\w+)/,/^open\.spotify\.com\/(track\/\w+)/],html:t=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;"><iframe src="https://open.spotify.com/embed/${t[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`},{name:"youtube",url:[/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,/^(?:m\.)?youtube\.com\/v\/([\w-]+)/,/^youtube\.com\/embed\/([\w-]+)/,/^youtu\.be\/([\w-]+)/],html:t=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://www.youtube.com/embed/${t[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`},{name:"vimeo",url:[/^vimeo\.com\/(\d+)/,/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/channels\/[^/]+\/(\d+)/,/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,/^player\.vimeo\.com\/video\/(\d+)/],html:t=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://player.vimeo.com/video/${t[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`},{name:"instagram",url:/^instagram\.com\/p\/(\w+)/},{name:"twitter",url:/^twitter\.com/},{name:"googleMaps",url:/^google\.com\/maps/},{name:"flickr",url:/^flickr\.com/},{name:"facebook",url:/^facebook\.com/}]}),this.registry=new rm(t.locale,t.config.get("mediaEmbed"))}init(){const t=this.editor,e=t.model.schema,n=t.t,i=t.conversion,o=t.config.get("mediaEmbed.previewsInData"),r=this.registry;t.commands.add("mediaEmbed",new om(t)),e.register("media",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["url"]}),i.for("dataDowncast").elementToElement({model:"media",view:(t,e)=>{const n=t.getAttribute("url");return tm(e,r,n,{renderMediaPreview:n&&o})}}),i.for("dataDowncast").add(Xg(r,{renderMediaPreview:o})),i.for("editingDowncast").elementToElement({model:"media",view:(t,e)=>{const i=t.getAttribute("url"),o=tm(e,r,i,{renderForEditingView:!0});return s=o,a=e,c=n("media widget"),a.setCustomProperty("media",!0,s),Bu(s,a,{label:c});var s,a,c}}),i.for("editingDowncast").add(Xg(r,{renderForEditingView:!0})),i.for("upcast").elementToElement({view:{name:"oembed",attributes:{url:!0}},model:(t,e)=>{const n=t.getAttribute("url");if(r.hasMedia(n))return e.createElement("media",{url:n})}}).elementToElement({view:{name:"div",attributes:{"data-oembed-url":!0}},model:(t,e)=>{const n=t.getAttribute("data-oembed-url");if(r.hasMedia(n))return e.createElement("media",{url:n})}})}}const cm=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;class lm extends Zl{static get requires(){return[id,tu]}static get pluginName(){return"AutoMediaEmbed"}constructor(t){super(t),this._timeoutId=null,this._positionToInsert=null}init(){const t=this.editor,e=t.model.document;this.listenTo(t.plugins.get(id),"inputTransformation",()=>{const t=e.selection.getFirstRange(),n=dc.fromPosition(t.start);n.stickiness="toPrevious";const i=dc.fromPosition(t.end);i.stickiness="toNext",e.once("change:data",()=>{this._embedMediaBetweenPositions(n,i),n.detach(),i.detach()},{priority:"high"})}),t.commands.get("undo").on("execute",()=>{this._timeoutId&&(nr.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)},{priority:"high"})}_embedMediaBetweenPositions(t,e){const n=this.editor,i=n.plugins.get(am).registry,o=new js(t,e),r=o.getWalker({ignoreElementEnd:!0});let s="";for(const t of r)t.item.is("textProxy")&&(s+=t.item.data);if(s=s.trim(),!s.match(cm))return void o.detach();if(!i.hasMedia(s))return void o.detach();n.commands.get("mediaEmbed").isEnabled?(this._positionToInsert=dc.fromPosition(t),this._timeoutId=nr.window.setTimeout(()=>{n.model.change(t=>{let e;this._timeoutId=null,t.remove(o),o.detach(),"$graveyard"!==this._positionToInsert.root.rootName&&(e=this._positionToInsert),nm(n.model,s,e),this._positionToInsert.detach(),this._positionToInsert=null})},100)):o.detach()}}n(82);class dm extends hl{constructor(t,e){super(e);const n=e.t;this.focusTracker=new jc,this.keystrokes=new Sc,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("Save"),cf,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(n("Cancel"),lf,"ck-button-cancel","cancel"),this._focusables=new Yc,this._focusCycler=new xl({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this._validators=t,this.setTemplate({tag:"form",attributes:{class:["ck","ck-media-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),af({view:this});[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element);const t=t=>t.stopPropagation();this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t),this.listenTo(this.urlInputView.element,"selectstart",(t,e)=>{e.stopPropagation()},{priority:"high"})}focus(){this._focusCycler.focusFirst()}get url(){return this.urlInputView.fieldView.element.value.trim()}set url(t){this.urlInputView.fieldView.element.value=t.trim()}isValid(){this.resetFormStatus();for(const t of this._validators){const e=t(this);if(e)return this.urlInputView.errorText=e,!1}return!0}resetFormStatus(){this.urlInputView.errorText=null,this.urlInputView.infoText=this._urlInputViewInfoDefault}_createUrlInput(){const t=this.locale.t,e=new of(this.locale,sf),n=e.fieldView;return this._urlInputViewInfoDefault=t("Paste the media URL in the input."),this._urlInputViewInfoTip=t("Tip: Paste the URL into the content to embed faster."),e.label=t("Media URL"),e.infoText=this._urlInputViewInfoDefault,n.placeholder="https://example.com",n.on("input",()=>{e.infoText=n.element.value?this._urlInputViewInfoTip:this._urlInputViewInfoDefault}),e}_createButton(t,e,n,i){const o=new Ll(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.extendTemplate({attributes:{class:n}}),i&&o.delegate("execute").to(this,i),o}}class um extends Zl{static get requires(){return[am]}static get pluginName(){return"MediaEmbedUI"}init(){const t=this.editor,e=t.commands.get("mediaEmbed"),n=t.plugins.get(am).registry;t.ui.componentFactory.add("mediaEmbed",i=>{const o=Wl(i),r=new dm(function(t,e){return[e=>{if(!e.url.length)return t("The URL must not be empty.")},n=>{if(!e.hasMedia(n.url))return t("This media URL is not supported.")}]}(t.t,n),t.locale);return this._setUpDropdown(o,r,e,t),this._setUpForm(o,r,e),o})}_setUpDropdown(t,e,n){const i=this.editor,o=i.t,r=t.buttonView;function s(){i.editing.view.focus(),t.isOpen=!1}t.bind("isEnabled").to(n),t.panelView.children.add(e),r.set({label:o("Insert media"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.68 3.03c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.58c0-.58-.01-.55.6-.55h17.38zM15.77 15V5H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 7.177a.4.4 0 01.593-.351l5.133 2.824a.4.4 0 010 .7l-5.133 2.824a.4.4 0 01-.593-.35V7.176v.001z"/></svg>\n',tooltip:!0}),r.on("open",()=>{e.url=n.value||"",e.urlInputView.fieldView.select(),e.focus()},{priority:"low"}),t.on("submit",()=>{e.isValid()&&(i.execute("mediaEmbed",e.url),s())}),t.on("change:isOpen",()=>e.resetFormStatus()),t.on("cancel",()=>s())}_setUpForm(t,e,n){e.delegate("submit","cancel").to(t),e.urlInputView.bind("value").to(n,"value"),e.urlInputView.bind("isReadOnly").to(n,"isEnabled",t=>!t),e.saveButtonView.bind("isEnabled").to(n)}}n(84);function hm(t,e){if(!t.childCount)return;const n=new Ef(t.document),i=function(t,e){const n=e.createRangeIn(t),i=new jn({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),o=[];for(const t of n)if("elementStart"===t.type&&i.match(t.item)){const e=gm(t.item);o.push({element:t.item,id:e.id,order:e.order,indent:e.indent})}return o}(t,n);if(!i.length)return;let o=null,r=1;i.forEach((t,s)=>{const a=function(t,e){if(!t)return!0;if(t.id!==e.id)return!0;const n=e.element.previousSibling;if(!n)return!0;return i=n,!(i.is("ol")||i.is("ul"));var i}(i[s-1],t),c=a?null:i[s-1],l=(u=t,(d=c)?u.indent-d.indent:u.indent-1);var d,u;if(a&&(o=null,r=1),!o||0!==l){const i=function(t,e){const n=new RegExp(`@list l${t.id}:level${t.indent}\\s*({[^}]*)`,"gi"),i=/mso-level-number-format:([^;]*);/gi,o=n.exec(e);let r="decimal";if(o&&o[1]){const t=i.exec(o[1]);t&&t[1]&&(r=t[1].trim())}return{type:"bullet"!==r&&"image"!==r?"ol":"ul",style:r}}(t,e);if(o){if(t.indent>r){const t=o.getChild(o.childCount-1),e=t.getChild(t.childCount-1);o=fm(i,e,n),r+=1}else if(t.indent<r){const e=r-t.indent;o=function(t,e){const n=t.getAncestors({parentFirst:!0});let i=null,o=0;for(const t of n)if("ul"!==t.name&&"ol"!==t.name||o++,o===e){i=t;break}return i}(o,e),r=parseInt(t.indent)}}else o=fm(i,t.element,n);t.indent<=r&&(o.is(i.type)||(o=n.rename(i.type,o)))}const h=function(t,e){return function(t,e){const n=new jn({name:"span",styles:{"mso-list":"Ignore"}}),i=e.createRangeIn(t);for(const t of i)"elementStart"===t.type&&n.match(t.item)&&e.remove(t.item)}(t,e),e.rename("li",t)}(t.element,n);n.appendChild(h,o)})}function fm(t,e,n){const i=e.parent,o=n.createElement(t.type),r=i.getChildIndex(e)+1;return n.insertChild(r,o,i),o}function gm(t){const e={},n=t.getStyle("mso-list");if(n){const t=n.match(/(^|\s+)l(\d+)/i),i=n.match(/\s*lfo(\d+)/i),o=n.match(/\s*level(\d+)/i);t&&i&&o&&(e.id=t[2],e.order=i[1],e.indent=o[1])}return e}const mm=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class pm{constructor(t){this.document=t}isActive(t){return mm.test(t)}execute(t){const e=new Ef(this.document);!function(t,e){for(const n of t.getChildren())if(n.is("b")&&"normal"===n.getStyle("font-weight")){const i=t.getChildIndex(n);e.remove(n),e.insertChild(i,n.getChildren(),t)}}(t.content,e),function(t,e){for(const n of e.createRangeIn(t)){const t=n.item;if(t.is("li")){const n=t.getChild(0);n.is("p")&&e.unwrapElement(n)}}}(t.content,e)}}function bm(t){return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>1===e.length?" ":Array(e.length+1).join("  ").substr(0,e.length))}function wm(t,e){const n=new DOMParser,i=function(t){return bm(bm(t)).replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[\s]*?)[\r\n]+(\s*<\/span>)/g,"$1$2").replace(/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g," </").replace(/ <o:p><\/o:p>/g," <o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g,"").replace(/>(\s*[\r\n]\s*)</g,"><")}(function(t){const e=t.match(/<\/body>(.*?)(<\/html>|$)/);e&&e[1]&&(t=t.slice(0,e.index)+t.slice(e.index).replace(e[1],""));return t}(t=t.replace(/<!--\[if gte vml 1]>/g,""))),o=n.parseFromString(i,"text/html");!function(t){t.querySelectorAll("span[style*=spacerun]").forEach(t=>{const e=t.innerText.length||0;t.innerHTML=Array(e+1).join("  ").substr(0,e)})}(o);const r=o.body.innerHTML,s=function(t,e){const n=new oo(e),i=new sr(n,{blockFillerMode:"nbsp"}),o=t.createDocumentFragment(),r=t.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);return i.domToView(o)}(o,e),a=function(t){const e=[],n=[],i=Array.from(t.getElementsByTagName("style"));for(const t of i)t.sheet&&t.sheet.cssRules&&t.sheet.cssRules.length&&(e.push(t.sheet),n.push(t.innerHTML));return{styles:e,stylesString:n.join(" ")}}(o);return{body:s,bodyString:r,styles:a.styles,stylesString:a.stylesString}}function km(t,e){if(!t.childCount)return;const n=new Ef;!function(t,e,n){const i=n.createRangeIn(e),o=new jn({name:"img"}),r=[];for(const e of i)if(o.match(e.item)){const n=e.item,i=n.getAttribute("v:shapes")?n.getAttribute("v:shapes").split(" "):[];i.length&&i.every(e=>t.indexOf(e)>-1)?r.push(n):n.getAttribute("src")||r.push(n)}for(const t of r)n.remove(t)}(function(t,e){const n=e.createRangeIn(t),i=new jn({name:/v:(.+)/}),o=[];for(const t of n){const e=t.item,n=e.previousSibling&&e.previousSibling.name||null;i.match(e)&&e.getAttribute("o:gfxdata")&&"v:shapetype"!==n&&o.push(t.item.getAttribute("id"))}return o}(t,n),t,n),function(t,e){const n=e.createRangeIn(t),i=new jn({name:/v:(.+)/}),o=[];for(const t of n)i.match(t.item)&&o.push(t.item);for(const t of o)e.remove(t)}(t,n);const i=function(t,e){const n=e.createRangeIn(t),i=new jn({name:"img"}),o=[];for(const t of n)i.match(t.item)&&t.item.getAttribute("src").startsWith("file://")&&o.push(t.item);return o}(t,n);i.length&&function(t,e,n){if(t.length===e.length)for(let o=0;o<t.length;o++){const r=`data:${e[o].type};base64,${i=e[o].hex,btoa(i.match(/\w{2}/g).map(t=>String.fromCharCode(parseInt(t,16))).join(""))}`;n.setAttribute("src",r,t[o])}var i}(i,function(t){if(!t)return[];const e=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,n=new RegExp("(?:("+e.source+"))([\\da-fA-F\\s]+)\\}","g"),i=t.match(n),o=[];if(i)for(const t of i){let n=!1;t.includes("\\pngblip")?n="image/png":t.includes("\\jpegblip")&&(n="image/jpeg"),n&&o.push({hex:t.replace(e,"").replace(/[^\da-fA-F]/g,""),type:n})}return o}(e),n)}const _m=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,vm=/xmlns:o="urn:schemas-microsoft-com/i;class ym{constructor(t){this.document=t}isActive(t){return _m.test(t)||vm.test(t)}execute(t){const{body:e,stylesString:n}=wm(t.dataTransfer.getData("text/html"),this.document.stylesProcessor);hm(e,n),km(e,t.dataTransfer.getData("text/rtf")),t.content=e}}function xm(t,e){let n=e.parent;for(;n;){if(n.name===t)return n;n=n.parent}}function Am(t,e,n,i,o=1){e>o?i.setAttribute(t,e,n):i.removeAttribute(t,n)}function Cm(t,e,n={}){const i=t.createElement("tableCell",n);t.insertElement("paragraph",i),t.insert(i,e)}function Tm(t,e){const n=e.parent.parent,i=parseInt(n.getAttribute("headingColumns")||0),{column:o}=t.getCellLocation(e);return!!i&&o<i}function Pm(){return t=>{t.on("element:table",(t,e,n)=>{const i=e.viewItem;if(!n.consumable.test(i,{name:!0}))return;const{rows:o,headingRows:r,headingColumns:s}=function(t){const e={headingRows:0,headingColumns:0},n=[],i=[];let o;for(const r of Array.from(t.getChildren()))if("tbody"===r.name||"thead"===r.name||"tfoot"===r.name){"thead"!==r.name||o||(o=r);const t=Array.from(r.getChildren()).filter(t=>t.is("element","tr"));for(const r of t)if("thead"===r.parent.name&&r.parent===o)e.headingRows++,n.push(r);else{i.push(r);const t=Em(r);t>e.headingColumns&&(e.headingColumns=t)}}return e.rows=[...n,...i],e}(i),a={};s&&(a.headingColumns=s),r&&(a.headingRows=r);const c=n.writer.createElement("table",a),l=n.splitToAllowedParent(c,e.modelCursor);if(l){if(n.writer.insert(c,l.position),n.consumable.consume(i,{name:!0}),o.forEach(t=>n.convertItem(t,n.writer.createPositionAt(c,"end"))),c.isEmpty){const t=n.writer.createElement("tableRow");n.writer.insert(t,n.writer.createPositionAt(c,"end")),Cm(n.writer,n.writer.createPositionAt(t,"end"))}e.modelRange=n.writer.createRange(n.writer.createPositionBefore(c),n.writer.createPositionAfter(c)),l.cursorParent?e.modelCursor=n.writer.createPositionAt(l.cursorParent,0):e.modelCursor=e.modelRange.end}})}}function Sm(t){return e=>{e.on("element:"+t,(t,e,n)=>{const i=e.viewItem;if(!n.consumable.test(i,{name:!0}))return;const o=n.writer.createElement("tableCell"),r=n.splitToAllowedParent(o,e.modelCursor);if(!r)return;n.writer.insert(o,r.position),n.consumable.consume(i,{name:!0});const s=n.writer.createPositionAt(o,0);n.convertChildren(i,s),o.childCount||n.writer.insertElement("paragraph",s),e.modelRange=n.writer.createRange(n.writer.createPositionBefore(o),n.writer.createPositionAfter(o)),e.modelCursor=e.modelRange.end})}}function Em(t){let e=0,n=0;const i=Array.from(t.getChildren()).filter(t=>"th"===t.name||"td"===t.name);for(;n<i.length&&"th"===i[n].name;){const t=i[n];e+=parseInt(t.getAttribute("colspan")||1),n++}return e}class Mm{constructor(t,e={}){this._table=t,this._startRow=void 0!==e.row?e.row:e.startRow||0,this._endRow=void 0!==e.row?e.row:e.endRow,this._startColumn=void 0!==e.column?e.column:e.startColumn||0,this._endColumn=void 0!==e.column?e.column:e.endColumn,this._includeAllSlots=!!e.includeAllSlots,this._skipRows=new Set,this._row=0,this._column=0,this._cellIndex=0,this._spannedCells=new Map,this._nextCellAtColumn=-1}[Symbol.iterator](){return this}next(){const t=this._table.getChild(this._row);if(!t||this._isOverEndRow())return{done:!0};if(this._isOverEndColumn())return this._advanceToNextRow();let e=null;const n=this._getSpanned();if(n)this._includeAllSlots&&!this._shouldSkipSlot()&&(e=this._formatOutValue(n.cell,n.row,n.column));else{const n=t.getChild(this._cellIndex);if(!n)return this._advanceToNextRow();const i=parseInt(n.getAttribute("colspan")||1),o=parseInt(n.getAttribute("rowspan")||1);(i>1||o>1)&&this._recordSpans(n,o,i),this._shouldSkipSlot()||(e=this._formatOutValue(n)),this._nextCellAtColumn=this._column+i}return this._column++,this._column==this._nextCellAtColumn&&this._cellIndex++,e||this.next()}skipRow(t){this._skipRows.add(t)}_advanceToNextRow(){return this._row++,this._column=0,this._cellIndex=0,this._nextCellAtColumn=-1,this.next()}_isOverEndRow(){return void 0!==this._endRow&&this._row>this._endRow}_isOverEndColumn(){return void 0!==this._endColumn&&this._column>this._endColumn}_formatOutValue(t,e=this._row,n=this._column){return{done:!1,value:new Im(this,t,e,n)}}_shouldSkipSlot(){const t=this._skipRows.has(this._row),e=this._row<this._startRow,n=this._column<this._startColumn,i=void 0!==this._endColumn&&this._column>this._endColumn;return t||e||n||i}_getSpanned(){const t=this._spannedCells.get(this._row);return t&&t.get(this._column)||null}_recordSpans(t,e,n){const i={cell:t,row:this._row,column:this._column};for(let t=this._row;t<this._row+e;t++)for(let e=this._column;e<this._column+n;e++)t==this._row&&e==this._column||this._markSpannedCell(t,e,i)}_markSpannedCell(t,e,n){this._spannedCells.has(t)||this._spannedCells.set(t,new Map);this._spannedCells.get(t).set(e,n)}}class Im{constructor(t,e,n,i){this.cell=e,this.row=t._row,this.column=t._column,this.cellAnchorRow=n,this.cellAnchorColumn=i,this._cellIndex=t._cellIndex,this._table=t._table}get isAnchor(){return this.row===this.cellAnchorRow&&this.column===this.cellAnchorColumn}get cellWidth(){return parseInt(this.cell.getAttribute("colspan")||1)}get cellHeight(){return parseInt(this.cell.getAttribute("rowspan")||1)}getPositionBefore(){return this._table.root.document.model.createPositionAt(this._table.getChild(this.row),this._cellIndex)}}function Nm(t={}){return e=>e.on("insert:table",(e,n,i)=>{const o=n.item;if(!i.consumable.consume(o,"insert"))return;i.consumable.consume(o,"attribute:headingRows:table"),i.consumable.consume(o,"attribute:headingColumns:table");const r=t&&t.asWidget,s=i.writer.createContainerElement("figure",{class:"table"}),a=i.writer.createContainerElement("table");let c;var l,d;i.writer.insert(i.writer.createPositionAt(s,0),a),r&&(l=s,(d=i.writer).setCustomProperty("table",!0,l),c=Bu(l,d,{hasSelectionHandle:!0}));const u=new Mm(o),h={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0},f=new Map;for(const e of u){const{row:n,cell:r}=e,s=o.getChild(n),c=f.get(n)||Lm(a,s,n,h,i);f.set(n,c),i.consumable.consume(r,"insert");Dm(e,h,i.writer.createPositionAt(c,"end"),i,t)}for(const t of o.getChildren()){const e=t.index;f.has(e)||f.set(e,Lm(a,t,e,h,i))}const g=i.mapper.toViewPosition(n.range.start);i.mapper.bindElements(o,r?c:s),i.writer.insert(g,r?c:s)})}function Om(t,e,n){const i=n.writer,o=n.mapper.toViewElement(t);if(!o)return;const r=Hu(i.createEditableElement(e,o.getAttributes()),i);Fu(r,i,(t,e,n)=>n.addClass(Hm(e.classes),t),(t,e,n)=>n.removeClass(Hm(e.classes),t)),i.insert(i.createPositionAfter(o),r),i.move(i.createRangeIn(o),i.createPositionAt(r,0)),i.remove(i.createRangeOn(o)),n.mapper.unbindViewElement(o),n.mapper.bindElements(t,r)}function Rm(t,e,n){const{cell:i}=t,o=jm(t,e),r=n.mapper.toViewElement(i);r&&r.name!==o&&Om(i,o,n)}function Dm(t,e,n,i,o){const r=o&&o.asWidget,s=jm(t,e),a=r?Hu(i.writer.createEditableElement(s),i.writer):i.writer.createContainerElement(s);r&&Fu(a,i.writer,(t,e,n)=>n.addClass(Hm(e.classes),t),(t,e,n)=>n.removeClass(Hm(e.classes),t));const c=t.cell,l=c.getChild(0),d=1===c.childCount&&"paragraph"===l.name;if(i.writer.insert(n,a),d&&![...l.getAttributeKeys()].length){const t=c.getChild(0),e=i.writer.createPositionAt(a,"end");if(i.consumable.consume(t,"insert"),r){const n=i.writer.createContainerElement("span",{style:"display:inline-block"});i.mapper.bindElements(t,n),i.writer.insert(e,n),i.mapper.bindElements(c,a)}else i.mapper.bindElements(c,a),i.mapper.bindElements(t,a)}else i.mapper.bindElements(c,a)}function Lm(t,e,n,i,o){o.consumable.consume(e,"insert");const r=e.isEmpty?o.writer.createEmptyElement("tr"):o.writer.createContainerElement("tr");o.mapper.bindElements(e,r);const s=i.headingRows,a=Vm(function(t,e){return t<e.headingRows?"thead":"tbody"}(n,i),t,o),c=s>0&&n>=s?n-s:n,l=o.writer.createPositionAt(a,c);return o.writer.insert(l,r),r}function jm(t,e){const{row:n,column:i}=t,{headingColumns:o,headingRows:r}=e;if(r&&r>n)return"th";return o&&o>i?"th":"td"}function Vm(t,e,n){const i=zm(t,e);return i||function(t,e,n){const i=n.writer.createContainerElement(t),o=n.writer.createPositionAt(e,"tbody"==t?"end":0);return n.writer.insert(o,i),i}(t,e,n)}function zm(t,e){for(const n of e.getChildren())if(n.name==t)return n}function Bm(t,e,n){const i=zm(t,e);i&&0===i.childCount&&n.writer.remove(n.writer.createRangeOn(i))}function Fm(t,e,n,i){for(const o of t){const t=n.mapper.toViewElement(o);t&&n.writer.move(n.writer.createRangeOn(t),n.writer.createPositionAt(e,i))}}function Um(t){for(const e of t.getChildren())if("table"===e.name)return e}function Hm(t){return Array.isArray(t)?t:[t]}class Wm extends od{refresh(){const t=this.editor.model,e=t.document.selection,n=t.schema,i=function(t){const e=t.parent;return e===e.root?e:e.parent}(e.getFirstPosition());this.isEnabled=n.checkChild(i,"table")}execute(t={}){const e=this.editor.model,n=e.document.selection,i=this.editor.plugins.get("TableUtils"),o=parseInt(t.rows)||2,r=parseInt(t.columns)||2,s=Wu(n,e);e.change(t=>{const n=i.createTable(t,o,r);e.insertContent(n,s),t.setSelection(t.createPositionAt(n.getNodeByPath([0,0,0]),0))})}}function qm(t){const e=[];for(const i of(n=t.getRanges(),Array.from(n).sort(Zm))){const t=i.getContainedElement();t&&t.is("tableCell")&&e.push(t)}var n;return e}function Ym(t){const e=[];for(const n of t.getRanges()){const t=xm("tableCell",n.start);t&&e.push(t)}return e}function Gm(t){const e=qm(t);return e.length?e:Ym(t)}function $m(t){return Jm(t.map(t=>t.parent.index))}function Km(t){const e=xm("table",t[0]);return Jm([...new Mm(e)].filter(e=>t.includes(e.cell)).map(t=>t.column))}function Qm(t,e){if(t.length<2||!function(t){const e=xm("table",t[0]),n=$m(t),i=parseInt(e.getAttribute("headingRows")||0);if(!Xm(n,i))return!1;const o=parseInt(e.getAttribute("headingColumns")||0);return Xm(Km(t),o)}(t))return!1;const n=new Set,i=new Set;let o=0;for(const r of t){const{row:t,column:s}=e.getCellLocation(r),a=parseInt(r.getAttribute("rowspan")||1),c=parseInt(r.getAttribute("colspan")||1);n.add(t),i.add(s),a>1&&n.add(t+a-1),c>1&&i.add(s+c-1),o+=a*c}return function(t,e){const n=Array.from(t.values()),i=Array.from(e.values()),o=Math.max(...n),r=Math.min(...n),s=Math.max(...i),a=Math.min(...i);return(o-r+1)*(s-a+1)}(n,i)==o}function Jm(t){const e=t.sort((t,e)=>t-e);return{first:e[0],last:e[e.length-1]}}function Zm(t,e){const n=t.start,i=e.start;return n.isBefore(i)?-1:1}function Xm({first:t,last:e},n){return t<n===e<n}class tp extends od{constructor(t,e={}){super(t),this.order=e.order||"below"}refresh(){const t=xm("table",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i="above"===this.order,o=Gm(e),r=$m(o),s=i?r.first:r.last,a=xm("table",o[0]);n.insertRows(a,{at:i?s:s+1,copyStructureFromAbove:!i})}}class ep extends od{constructor(t,e={}){super(t),this.order=e.order||"right"}refresh(){const t=xm("table",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get("TableUtils"),i="left"===this.order,o=Gm(e),r=Km(o),s=i?r.first:r.last,a=xm("table",o[0]);n.insertColumns(a,{columns:1,at:i?s:s+1})}}class np extends od{constructor(t,e={}){super(t),this.direction=e.direction||"horizontally"}refresh(){const t=Gm(this.editor.model.document.selection);this.isEnabled=1===t.length}execute(){const t=Gm(this.editor.model.document.selection)[0],e="horizontally"===this.direction,n=this.editor.plugins.get("TableUtils");e?n.splitCellHorizontally(t,2):n.splitCellVertically(t,2)}}function ip(t,e,n){const{startRow:i,startColumn:o,endRow:r,endColumn:s}=e,a=n.createElement("table"),c=r-i+1;for(let t=0;t<c;t++)n.insertElement("tableRow",a,"end");const l=[...new Mm(t,{startRow:i,endRow:r,startColumn:o,endColumn:s,includeAllSlots:!0})];for(const{row:t,column:e,cell:c,isAnchor:d,cellAnchorRow:u,cellAnchorColumn:h}of l){const l=t-i,f=a.getChild(l);if(d){const i=n.cloneElement(c);n.append(i,f),cp(i,t,e,r,s,n)}else(u<i||h<o)&&Cm(n,n.createPositionAt(f,"end"))}return function(t,e,n,i,o){const r=parseInt(e.getAttribute("headingRows")||0);if(r>0){Am("headingRows",r-n,t,o,0)}const s=parseInt(e.getAttribute("headingColumns")||0);if(s>0){Am("headingColumns",s-i,t,o,0)}}(a,t,i,o,n),a}function op(t,e,n=0){const i=[],o=new Mm(t,{startRow:n,endRow:e-1});for(const t of o){const{row:n,cellHeight:o}=t,r=n+o-1;n<e&&e<=r&&i.push(t)}return i}function rp(t,e,n){const i=t.parent,o=i.parent,r=i.index,s=e-r,a={},c=parseInt(t.getAttribute("rowspan"))-s;c>1&&(a.rowspan=c);const l=parseInt(t.getAttribute("colspan")||1);l>1&&(a.colspan=l);const d=r+s,u=[...new Mm(o,{startRow:r,endRow:d,includeAllSlots:!0})];let h;for(const e of u){const{row:i,column:o,cell:r}=e;r===t&&void 0===h&&(h=o),void 0!==h&&h===o&&i===d&&Cm(n,e.getPositionBefore(),a)}Am("rowspan",s,t,n)}function sp(t,e){const n=[],i=new Mm(t);for(const t of i){const{column:i,cellWidth:o}=t,r=i+o-1;i<e&&e<=r&&n.push(t)}return n}function ap(t,e,n,i){const o=n-e,r={},s=parseInt(t.getAttribute("colspan"))-o;s>1&&(r.colspan=s);const a=parseInt(t.getAttribute("rowspan")||1);a>1&&(r.rowspan=a),Cm(i,i.createPositionAfter(t),r),Am("colspan",o,t,i)}function cp(t,e,n,i,o,r){const s=parseInt(t.getAttribute("colspan")||1),a=parseInt(t.getAttribute("rowspan")||1);if(n+s-1>o){Am("colspan",o-n+1,t,r,1)}if(e+a-1>i){Am("rowspan",i-e+1,t,r,1)}}function lp(t,e){const n=e.getColumns(t),i=new Array(n).fill(0);for(const{column:e}of new Mm(t))i[e]++;const o=i.reduce((t,e,n)=>e?t:[...t,n],[]);return o.reverse().forEach(n=>{e.removeColumns(t,{at:n})}),o.length>0}function dp(t,e,n){const i=[];for(let e=0;e<t.childCount;e++){t.getChild(e).isEmpty&&i.push(e)}return i.reverse().forEach(i=>{e.removeRows(t,{at:i,batch:n})}),i.length>0}function up(t,e,n){lp(t,e)||dp(t,e,n)}function hp(t,e){const n=Array.from(new Mm(t,{startColumn:e.firstColumn,endColumn:e.lastColumn,row:e.lastRow}));if(n.every(({cellHeight:t})=>1===t))return e.lastRow;const i=n[0].cellHeight-1;return e.lastRow+i}function fp(t,e){const n=Array.from(new Mm(t,{startRow:e.firstRow,endRow:e.lastRow,column:e.lastColumn}));if(n.every(({cellWidth:t})=>1===t))return e.lastColumn;const i=n[0].cellWidth-1;return e.lastColumn+i}class gp extends od{constructor(t,e){super(t),this.direction=e.direction,this.isHorizontal="right"==this.direction||"left"==this.direction}refresh(){const t=this._getMergeableCell();this.value=t,this.isEnabled=!!t}execute(){const t=this.editor.model,e=Ym(t.document.selection)[0],n=this.value,i=this.direction;t.change(t=>{const o="right"==i||"down"==i,r=o?e:n,s=o?n:e,a=s.parent;!function(t,e,n){mp(t)||(mp(e)&&n.remove(n.createRangeIn(e)),n.move(n.createRangeIn(t),n.createPositionAt(e,"end")));n.remove(t)}(s,r,t);const c=this.isHorizontal?"colspan":"rowspan",l=parseInt(e.getAttribute(c)||1),d=parseInt(n.getAttribute(c)||1);t.setAttribute(c,l+d,r),t.setSelection(t.createRangeIn(r));const u=this.editor.plugins.get("TableUtils");up(xm("table",a),u,t.batch)})}_getMergeableCell(){const t=Ym(this.editor.model.document.selection)[0];if(!t)return;const e=this.editor.plugins.get("TableUtils"),n=this.isHorizontal?function(t,e,n){const i=t.parent.parent,o="right"==e?t.nextSibling:t.previousSibling,r=(i.getAttribute("headingColumns")||0)>0;if(!o)return;const s="right"==e?t:o,a="right"==e?o:t,{column:c}=n.getCellLocation(s),{column:l}=n.getCellLocation(a),d=parseInt(s.getAttribute("colspan")||1),u=Tm(n,s),h=Tm(n,a);if(r&&u!=h)return;return c+d===l?o:void 0}(t,this.direction,e):function(t,e){const n=t.parent,i=n.parent,o=i.getChildIndex(n);if("down"==e&&o===i.childCount-1||"up"==e&&0===o)return;const r=parseInt(t.getAttribute("rowspan")||1),s=i.getAttribute("headingRows")||0,a="down"==e&&o+r===s,c="up"==e&&o===s;if(s&&(a||c))return;const l=parseInt(t.getAttribute("rowspan")||1),d="down"==e?o+l:o,u=[...new Mm(i,{endRow:d})],h=u.find(e=>e.cell===t).column,f=u.find(({row:t,cellHeight:n,column:i})=>i===h&&("down"==e?t===d:d===t+n));return f&&f.cell}(t,this.direction);if(!n)return;const i=this.isHorizontal?"rowspan":"colspan",o=parseInt(t.getAttribute(i)||1);return parseInt(n.getAttribute(i)||1)===o?n:void 0}}function mp(t){return 1==t.childCount&&t.getChild(0).is("paragraph")&&t.getChild(0).isEmpty}class pp extends od{refresh(){const t=Gm(this.editor.model.document.selection),e=t[0];if(e){const n=xm("table",e),i=this.editor.plugins.get("TableUtils").getRows(n)-1,o=$m(t),r=0===o.first&&o.last===i;this.isEnabled=!r}else this.isEnabled=!1}execute(){const t=this.editor.model,e=Gm(t.document.selection),n=$m(e),i=e[0],o=xm("table",i),r=this.editor.plugins.get("TableUtils").getCellLocation(i).column,s=t.createBatch();t.enqueueChange(s,t=>{t.setSelection(t.createSelection(o,"on"));const e=n.last-n.first+1;this.editor.plugins.get("TableUtils").removeRows(o,{at:n.first,rows:e,batch:s})}),t.enqueueChange(s,t=>{const e=function(t,e,n){const i=t.getChild(e)||t.getChild(t.childCount-1);let o=i.getChild(0),r=0;for(const t of i.getChildren()){if(r>n)return o;o=t,r+=parseInt(t.getAttribute("colspan")||1)}return o}(o,n.first,r);t.setSelection(t.createPositionAt(e,0))})}}class bp extends od{refresh(){const t=Gm(this.editor.model.document.selection),e=t[0];if(e){const n=xm("table",e),i=this.editor.plugins.get("TableUtils").getColumns(n),{first:o,last:r}=Km(t);this.isEnabled=r-o<i-1}else this.isEnabled=!1}execute(){const[t,e]=function(t){const e=Gm(t),n=e[0],i=e.pop(),o=[n,i];return n.isBefore(i)?o:o.reverse()}(this.editor.model.document.selection),n=t.parent.parent,i=[...new Mm(n)],o={first:i.find(e=>e.cell===t).column,last:i.find(t=>t.cell===e).column},r=function(t,e,n,i){return parseInt(n.getAttribute("colspan")||1)>1?n:e.previousSibling||n.nextSibling?n.nextSibling||e.previousSibling:i.first?t.reverse().find(({column:t})=>t<i.first).cell:t.reverse().find(({column:t})=>t>i.last).cell}(i,t,e,o);this.editor.model.change(t=>{const e=o.last-o.first+1;this.editor.plugins.get("TableUtils").removeColumns(n,{at:o.first,columns:e}),t.setSelection(t.createPositionAt(r,0))})}}class wp extends od{refresh(){const t=Gm(this.editor.model.document.selection),e=t.length>0;this.isEnabled=e,this.value=e&&t.every(t=>this._isInHeading(t,t.parent.parent))}execute(t={}){if(t.forceValue===this.value)return;const e=this.editor.model,n=Gm(e.document.selection),i=xm("table",n[0]),{first:o,last:r}=$m(n),s=this.value?o:r+1,a=i.getAttribute("headingRows")||0;e.change(t=>{if(s){const e=op(i,s,s>a?a:0);for(const{cell:n}of e)rp(n,s,t)}Am("headingRows",s,i,t,0)})}_isInHeading(t,e){const n=parseInt(e.getAttribute("headingRows")||0);return!!n&&t.parent.index<n}}class kp extends od{refresh(){const t=Gm(this.editor.model.document.selection),e=this.editor.plugins.get("TableUtils"),n=t.length>0;this.isEnabled=n,this.value=n&&t.every(t=>Tm(e,t))}execute(t={}){if(t.forceValue===this.value)return;const e=this.editor.model,n=Gm(e.document.selection),i=xm("table",n[0]),{first:o,last:r}=Km(n),s=this.value?o:r+1;e.change(t=>{if(s){const e=sp(i,s);for(const{cell:n,column:i}of e)ap(n,i,s,t)}Am("headingColumns",s,i,t,0)})}}class _p extends Zl{static get pluginName(){return"TableUtils"}getCellLocation(t){const e=t.parent,n=e.parent,i=n.getChildIndex(e),o=new Mm(n,{row:i});for(const{cell:e,row:n,column:i}of o)if(e===t)return{row:n,column:i}}createTable(t,e,n){const i=t.createElement("table");return vp(t,i,0,e,n),i}insertRows(t,e={}){const n=this.editor.model,i=e.at||0,o=e.rows||1,r=void 0!==e.copyStructureFromAbove,s=e.copyStructureFromAbove?i-1:i,a=this.getRows(t),c=this.getColumns(t);n.change(e=>{const n=t.getAttribute("headingRows")||0;if(n>i&&e.setAttribute("headingRows",n+o,t),!r&&(0===i||i===a))return void vp(e,t,i,o,c);const l=r?Math.max(i,s):i,d=new Mm(t,{endRow:l}),u=new Array(c).fill(1);for(const{row:t,column:n,cellHeight:a,cellWidth:c,cell:l}of d){const d=t+a-1,h=t<=s&&s<=d;t<i&&i<=d?(e.setAttribute("rowspan",a+o,l),u[n]=-c):r&&h&&(u[n]=c)}for(let n=0;n<o;n++){const n=e.createElement("tableRow");e.insert(n,t,i);for(let t=0;t<u.length;t++){const i=u[t],o=e.createPositionAt(n,"end");i>0&&Cm(e,o,i>1?{colspan:i}:null),t+=Math.abs(i)-1}}})}insertColumns(t,e={}){const n=this.editor.model,i=e.at||0,o=e.columns||1;n.change(e=>{const n=t.getAttribute("headingColumns");i<n&&e.setAttribute("headingColumns",n+o,t);const r=this.getColumns(t);if(0===i||r===i){for(const n of t.getChildren())yp(o,e,e.createPositionAt(n,i?"end":0));return}const s=new Mm(t,{column:i,includeAllSlots:!0});for(const t of s){const{row:n,cell:r,cellAnchorColumn:a,cellAnchorRow:c,cellWidth:l,cellHeight:d}=t;if(a<i){e.setAttribute("colspan",l+o,r);const t=c+d-1;for(let e=n;e<=t;e++)s.skipRow(e)}else yp(o,e,t.getPositionBefore())}})}removeRows(t,e){const n=this.editor.model,i=e.rows||1,o=e.at,r=o+i-1,s=e.batch||"default";n.enqueueChange(s,e=>{const{cellsToMove:i,cellsToTrim:a}=function(t,e,n){const i=new Map,o=[];for(const{row:r,column:s,cellHeight:a,cell:c}of new Mm(t,{endRow:n})){const t=r+a-1;if(r>=e&&r<=n&&t>n){const t=a-(n-r+1);i.set(s,{cell:c,rowspan:t})}if(r<e&&t>=e){let i;i=t>=n?n-e+1:t-e+1,o.push({cell:c,rowspan:a-i})}}return{cellsToMove:i,cellsToTrim:o}}(t,o,r);if(i.size){!function(t,e,n,i){const o=[...new Mm(t,{includeAllSlots:!0,row:e})],r=t.getChild(e);let s;for(const{column:t,cell:e,isAnchor:a}of o)if(n.has(t)){const{cell:e,rowspan:o}=n.get(t),a=s?i.createPositionAfter(s):i.createPositionAt(r,0);i.move(i.createRangeOn(e),a),Am("rowspan",o,e,i),s=e}else a&&(s=e)}(t,r+1,i,e)}for(let n=r;n>=o;n--)e.remove(t.getChild(n));for(const{rowspan:t,cell:n}of a)Am("rowspan",t,n,e);lp(t,this),function(t,e,n,i,o){i.enqueueChange(o,i=>{const o=t.getAttribute("headingRows")||0;if(e<o){Am("headingRows",n<o?o-(n-e+1):e,t,i,0)}})}(t,o,r,n,s)})}removeColumns(t,e){const n=this.editor.model,i=e.at,o=e.columns||1,r=e.at+o-1;n.change(e=>{!function(t,e,n){const i=t.getAttribute("headingColumns")||0;if(i&&e.first<i){const o=Math.min(i-1,e.last)-e.first+1;n.setAttribute("headingColumns",i-o,t)}}(t,{first:i,last:r},e);for(let n=r;n>=i;n--)for(const{cell:i,column:o,cellWidth:r}of[...new Mm(t)])o<=n&&r>1&&o+r>n?Am("colspan",r-1,i,e):o===n&&e.remove(i);dp(t,this,e.batch)})}splitCellVertically(t,e=2){const n=this.editor.model,i=t.parent.parent,o=parseInt(t.getAttribute("rowspan")||1),r=parseInt(t.getAttribute("colspan")||1);n.change(n=>{if(r>1){const{newCellsSpan:i,updatedSpan:s}=xp(r,e);Am("colspan",s,t,n);const a={};i>1&&(a.colspan=i),o>1&&(a.rowspan=o);yp(r>e?e-1:r-1,n,n.createPositionAfter(t),a)}if(r<e){const s=e-r,a=[...new Mm(i)],{column:c}=a.find(({cell:e})=>e===t),l=a.filter(({cell:e,cellWidth:n,column:i})=>e!==t&&i===c||i<c&&i+n>c);for(const{cell:t,cellWidth:e}of l)n.setAttribute("colspan",e+s,t);const d={};o>1&&(d.rowspan=o),yp(s,n,n.createPositionAfter(t),d);const u=i.getAttribute("headingColumns")||0;u>c&&Am("headingColumns",u+s,i,n)}})}splitCellHorizontally(t,e=2){const n=this.editor.model,i=t.parent,o=i.parent,r=o.getChildIndex(i),s=parseInt(t.getAttribute("rowspan")||1),a=parseInt(t.getAttribute("colspan")||1);n.change(n=>{if(s>1){const i=[...new Mm(o,{startRow:r,endRow:r+s-1,includeAllSlots:!0})],{newCellsSpan:c,updatedSpan:l}=xp(s,e);Am("rowspan",l,t,n);const{column:d}=i.find(({cell:e})=>e===t),u={};c>1&&(u.rowspan=c),a>1&&(u.colspan=a);for(const t of i){const{column:e,row:i}=t,o=e===d,s=(i+r+l)%c==0;i>=r+l&&o&&s&&yp(1,n,t.getPositionBefore(),u)}}if(s<e){const i=e-s,c=[...new Mm(o,{startRow:0,endRow:r})];for(const{cell:e,cellHeight:o,row:s}of c)if(e!==t&&s+o>r){const t=o+i;n.setAttribute("rowspan",t,e)}const l={};a>1&&(l.colspan=a),vp(n,o,r+1,i,1,l);const d=o.getAttribute("headingRows")||0;d>r&&Am("headingRows",d+i,o,n)}})}getColumns(t){return[...t.getChild(0).getChildren()].reduce((t,e)=>t+parseInt(e.getAttribute("colspan")||1),0)}getRows(t){return t.childCount}}function vp(t,e,n,i,o,r={}){for(let s=0;s<i;s++){const i=t.createElement("tableRow");t.insert(i,e,n),yp(o,t,t.createPositionAt(i,"end"),r)}}function yp(t,e,n,i={}){for(let o=0;o<t;o++)Cm(e,n,i)}function xp(t,e){if(t<e)return{newCellsSpan:1,updatedSpan:1};const n=Math.floor(t/e);return{newCellsSpan:n,updatedSpan:t-n*e+n}}class Ap extends od{refresh(){const t=qm(this.editor.model.document.selection);this.isEnabled=Qm(t,this.editor.plugins.get(_p))}execute(){const t=this.editor.model,e=this.editor.plugins.get(_p);t.change(n=>{const i=qm(t.document.selection),o=i.shift();n.setSelection(o,0);const{mergeWidth:r,mergeHeight:s}=function(t,e,n){let i=0,o=0;for(const t of e){const{row:e,column:r}=n.getCellLocation(t);i=Pp(t,r,i,"colspan"),o=Pp(t,e,o,"rowspan")}const{row:r,column:s}=n.getCellLocation(t);return{mergeWidth:i-s,mergeHeight:o-r}}(o,i,e);Am("colspan",r,o,n),Am("rowspan",s,o,n);for(const t of i)Cp(t,o,n);up(xm("table",o),e,n.batch),n.setSelection(o,"in")})}}function Cp(t,e,n){Tp(t)||(Tp(e)&&n.remove(n.createRangeIn(e)),n.move(n.createRangeIn(t),n.createPositionAt(e,"end"))),n.remove(t)}function Tp(t){return 1==t.childCount&&t.getChild(0).is("paragraph")&&t.getChild(0).isEmpty}function Pp(t,e,n,i){const o=parseInt(t.getAttribute(i)||1);return Math.max(n,e+o)}class Sp extends od{refresh(){const t=Gm(this.editor.model.document.selection);this.isEnabled=t.length>0}execute(){const t=this.editor.model,e=Gm(t.document.selection),n=$m(e),i=xm("table",e[0]),o=[];for(let e=n.first;e<=n.last;e++)for(const n of i.getChild(e).getChildren())o.push(t.createRangeOn(n));t.change(t=>{t.setSelection(o)})}}class Ep extends od{refresh(){const t=Gm(this.editor.model.document.selection);this.isEnabled=t.length>0}execute(){const t=this.editor.model,e=Gm(t.document.selection),n=e[0],i=e.pop(),o=xm("table",n),r=this.editor.plugins.get("TableUtils"),s=r.getCellLocation(n),a=r.getCellLocation(i),c=Math.min(s.column,a.column),l=Math.max(s.column,a.column),d=[];for(const e of new Mm(o,{startColumn:c,endColumn:l}))d.push(t.createRangeOn(e.cell));t.change(t=>{t.setSelection(d)})}}function Mp(t){t.document.registerPostFixer(e=>function(t,e){const n=e.document.differ.getChanges();let i=!1;const o=new Set;for(const e of n){let n;"table"==e.name&&"insert"==e.type&&(n=e.position.nodeAfter),"tableRow"!=e.name&&"tableCell"!=e.name||(n=xm("table",e.position)),Op(e)&&(n=xm("table",e.range.start)),n&&!o.has(n)&&(i=Ip(n,t)||i,i=Np(n,t)||i,o.add(n))}return i}(e,t))}function Ip(t,e){let n=!1;const i=function(t){const e=parseInt(t.getAttribute("headingRows")||0),n=t.childCount,i=[];for(const{row:o,cell:r,cellHeight:s}of new Mm(t)){if(s<2)continue;const t=o<e?e:n;if(o+s>t){const e=t-o;i.push({cell:r,rowspan:e})}}return i}(t);if(i.length){n=!0;for(const t of i)Am("rowspan",t.rowspan,t.cell,e,1)}return n}function Np(t,e){let n=!1;const i=function(t){const e=new Array(t.childCount).fill(0);for(const{row:n}of new Mm(t,{includeAllSlots:!0}))e[n]++;return e}(t),o=[];for(const[t,e]of i.entries())e||o.push(t);if(o.length){n=!0;for(const n of o.reverse())e.remove(t.getChild(n)),i.splice(n,1)}const r=i[0];if(!i.every(t=>t===r)){const o=i.reduce((t,e)=>e>t?e:t,0);for(const[r,s]of i.entries()){const i=o-s;if(i){for(let n=0;n<i;n++)Cm(e,e.createPositionAt(t.getChild(r),"end"));n=!0}}}return n}function Op(t){const e="attribute"===t.type,n=t.attributeKey;return e&&("headingRows"===n||"colspan"===n||"rowspan"===n)}function Rp(t){t.document.registerPostFixer(e=>function(t,e){const n=e.document.differ.getChanges();let i=!1;for(const e of n)"insert"==e.type&&"table"==e.name&&(i=Dp(e.position.nodeAfter,t)||i),"insert"==e.type&&"tableRow"==e.name&&(i=Lp(e.position.nodeAfter,t)||i),"insert"==e.type&&"tableCell"==e.name&&(i=jp(e.position.nodeAfter,t)||i),Vp(e)&&(i=jp(e.position.parent,t)||i);return i}(e,t))}function Dp(t,e){let n=!1;for(const i of t.getChildren())n=Lp(i,e)||n;return n}function Lp(t,e){let n=!1;for(const i of t.getChildren())n=jp(i,e)||n;return n}function jp(t,e){if(0==t.childCount)return e.insertElement("paragraph",t),!0;const n=Array.from(t.getChildren()).filter(t=>t.is("text"));for(const t of n)e.wrap(e.createRangeOn(t),"paragraph");return!!n.length}function Vp(t){return!(!t.position||!t.position.parent.is("tableCell"))&&("insert"==t.type&&"$text"==t.name||"remove"==t.type)}function zp(t){t.document.registerPostFixer(()=>function(t){const e=t.document.differ,n=new Set;let i=0;for(const t of e.getChanges()){const e="insert"==t.type||"remove"==t.type?t.position.parent:t.range.start.parent;e.is("tableCell")&&("insert"==t.type&&i++,Bp(e,t.type,i)&&n.add(e))}if(n.size){for(const t of n.values())e.refreshItem(t);return!0}return!1}(t))}function Bp(t,e,n){if(!Array.from(t.getChildren()).some(t=>t.is("paragraph")))return!1;if("attribute"==e){const e=Array.from(t.getChild(0).getAttributeKeys()).length;return 1===t.childCount&&e<2}return t.childCount<=("insert"==e?n+1:1)}n(86);class Fp extends Zl{static get pluginName(){return"TableEditing"}init(){const t=this.editor,e=t.model,n=e.schema,i=t.conversion;n.register("table",{allowWhere:"$block",allowAttributes:["headingRows","headingColumns"],isLimit:!0,isObject:!0,isBlock:!0}),n.register("tableRow",{allowIn:"table",isLimit:!0}),n.register("tableCell",{allowIn:"tableRow",allowAttributes:["colspan","rowspan"],isObject:!0}),n.extend("$block",{allowIn:"tableCell"}),n.addChildCheck((t,e)=>{if("table"==e.name&&Array.from(t.getNames()).includes("table"))return!1}),i.for("upcast").add(Pm()),i.for("editingDowncast").add(Nm({asWidget:!0})),i.for("dataDowncast").add(Nm()),i.for("upcast").elementToElement({model:"tableRow",view:"tr"}),i.for("upcast").add(t=>{t.on("element:tr",(t,e)=>{e.viewItem.isEmpty&&0==e.modelCursor.index&&t.stop()},{priority:"high"})}),i.for("editingDowncast").add(t=>t.on("insert:tableRow",(t,e,n)=>{const i=e.item;if(!n.consumable.consume(i,"insert"))return;const o=i.parent,r=Um(n.mapper.toViewElement(o)),s=o.getChildIndex(i),a=new Mm(o,{row:s}),c={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0},l=new Map;for(const t of a){const e=l.get(s)||Lm(r,i,s,c,n);l.set(s,e),n.consumable.consume(t.cell,"insert"),Dm(t,c,n.writer.createPositionAt(e,"end"),n,{asWidget:!0})}})),i.for("editingDowncast").add(t=>t.on("remove:tableRow",(t,e,n)=>{t.stop();const i=n.writer,o=n.mapper,r=o.toViewPosition(e.position).getLastMatchingPosition(t=>!t.item.is("tr")).nodeAfter,s=r.parent.parent,a=i.createRangeOn(r),c=i.remove(a);for(const t of i.createRangeIn(c).getItems())o.unbindViewElement(t);Bm("thead",s,n),Bm("tbody",s,n)},{priority:"higher"})),i.for("upcast").add(Sm("td")),i.for("upcast").add(Sm("th")),i.for("editingDowncast").add(t=>t.on("insert:tableCell",(t,e,n)=>{const i=e.item;if(!n.consumable.consume(i,"insert"))return;const o=i.parent,r=o.parent,s=r.getChildIndex(o),a=new Mm(r,{row:s}),c={headingRows:r.getAttribute("headingRows")||0,headingColumns:r.getAttribute("headingColumns")||0};for(const t of a)if(t.cell===i){const e=n.mapper.toViewElement(o);return void Dm(t,c,n.writer.createPositionAt(e,o.getChildIndex(i)),n,{asWidget:!0})}})),i.attributeToAttribute({model:"colspan",view:"colspan"}),i.attributeToAttribute({model:"rowspan",view:"rowspan"}),i.for("editingDowncast").add(t=>t.on("attribute:headingColumns:table",(t,e,n)=>{const i=e.item;if(!n.consumable.consume(e.item,t.name))return;const o={headingRows:i.getAttribute("headingRows")||0,headingColumns:i.getAttribute("headingColumns")||0},r=e.attributeOldValue,s=e.attributeNewValue,a=(r>s?r:s)-1;for(const t of new Mm(i,{endColumn:a}))Rm(t,o,n)})),i.for("editingDowncast").add(t=>t.on("attribute:headingRows:table",(t,e,n)=>{const i=e.item;if(!n.consumable.consume(e.item,t.name))return;const o=Um(n.mapper.toViewElement(i)),r=e.attributeOldValue,s=e.attributeNewValue;if(s>r){const t=Array.from(i.getChildren()).filter(({index:t})=>a(t,r-1,s));Fm(t,Vm("thead",o,n),n,"end");for(const e of t)for(const t of e.getChildren())Om(t,"th",n)}else{Fm(Array.from(i.getChildren()).filter(({index:t})=>a(t,s-1,r)).reverse(),Vm("tbody",o,n),n,0);const t=new Mm(i,{startRow:s?s-1:s,endRow:r-1}),e={headingRows:i.getAttribute("headingRows")||0,headingColumns:i.getAttribute("headingColumns")||0};for(const i of t)Rm(i,e,n)}function a(t,e,n){return t>e&&t<n}Bm("thead",o,n),Bm("tbody",o,n)})),t.commands.add("insertTable",new Wm(t)),t.commands.add("insertTableRowAbove",new tp(t,{order:"above"})),t.commands.add("insertTableRowBelow",new tp(t,{order:"below"})),t.commands.add("insertTableColumnLeft",new ep(t,{order:"left"})),t.commands.add("insertTableColumnRight",new ep(t,{order:"right"})),t.commands.add("removeTableRow",new pp(t)),t.commands.add("removeTableColumn",new bp(t)),t.commands.add("splitTableCellVertically",new np(t,{direction:"vertically"})),t.commands.add("splitTableCellHorizontally",new np(t,{direction:"horizontally"})),t.commands.add("mergeTableCells",new Ap(t)),t.commands.add("mergeTableCellRight",new gp(t,{direction:"right"})),t.commands.add("mergeTableCellLeft",new gp(t,{direction:"left"})),t.commands.add("mergeTableCellDown",new gp(t,{direction:"down"})),t.commands.add("mergeTableCellUp",new gp(t,{direction:"up"})),t.commands.add("setTableColumnHeader",new kp(t)),t.commands.add("setTableRowHeader",new wp(t)),t.commands.add("selectTableRow",new Sp(t)),t.commands.add("selectTableColumn",new Ep(t)),Mp(e),zp(e),Rp(e)}static get requires(){return[_p]}}n(88);class Up extends hl{constructor(t){super(t);const e=this.bindTemplate;this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Sc,this.focusTracker=new jc,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",e.if("isVisible","ck-hidden",t=>!t),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(t,e)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),e())}),this.keystrokes.set("arrowleft",(t,e)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),e())})}focus(){this.actionView.focus()}_createActionView(){const t=new Ll;return t.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),t.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),t.delegate("execute").to(this),t}_createArrowView(){const t=new Ll,e=t.bindTemplate;return t.icon=jl,t.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":e.to("isOn",t=>String(t))}}),t.bind("isEnabled").to(this),t.delegate("execute").to(this,"open"),t}}n(90);class Hp extends hl{constructor(t){super(t);const e=this.bindTemplate;this.items=this._createGridCollection(),this.set("rows",0),this.set("columns",0),this.bind("label").to(this,"columns",this,"rows",(t,e)=>`${e} × ${t}`),this.setTemplate({tag:"div",attributes:{class:["ck"]},children:[{tag:"div",attributes:{class:["ck-insert-table-dropdown__grid"]},on:{"mouseover@.ck-insert-table-dropdown-grid-box":e.to("boxover")},children:this.items},{tag:"div",attributes:{class:["ck-insert-table-dropdown__label"]},children:[{text:e.to("label")}]}],on:{mousedown:e.to(t=>{t.preventDefault()}),click:e.to(()=>{this.fire("execute")})}}),this.on("boxover",(t,e)=>{const{row:n,column:i}=e.target.dataset;this.set({rows:parseInt(n),columns:parseInt(i)})}),this.on("change:columns",()=>{this._highlightGridBoxes()}),this.on("change:rows",()=>{this._highlightGridBoxes()})}focus(){}focusLast(){}_highlightGridBoxes(){const t=this.rows,e=this.columns;this.items.map((n,i)=>{const o=Math.floor(i/10)<t&&i%10<e;n.set("isOn",o)})}_createGridCollection(){const t=[];for(let e=0;e<100;e++){const n=Math.floor(e/10),i=e%10;t.push(new Wp(this.locale,n+1,i+1))}return this.createCollection(t)}}class Wp extends hl{constructor(t,e,n){super(t);const i=this.bindTemplate;this.set("isOn",!1),this.setTemplate({tag:"div",attributes:{class:["ck-insert-table-dropdown-grid-box",i.if("isOn","ck-on")],"data-row":e,"data-column":n}})}}class qp extends Zl{init(){const t=this.editor,e=this.editor.t,n="ltr"===t.locale.contentLanguageDirection;t.ui.componentFactory.add("insertTable",n=>{const i=t.commands.get("insertTable"),o=Wl(n);let r;return o.bind("isEnabled").to(i),o.buttonView.set({icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',label:e("Insert table"),tooltip:!0}),o.on("change:isOpen",()=>{r||(r=new Hp(n),o.panelView.children.add(r),r.delegate("execute").to(o),o.buttonView.on("open",()=>{r.rows=0,r.columns=0}),o.on("execute",()=>{t.execute("insertTable",{rows:r.rows,columns:r.columns}),t.editing.view.focus()}))}),o}),t.ui.componentFactory.add("tableColumn",t=>{const i=[{type:"switchbutton",model:{commandName:"setTableColumnHeader",label:e("Header column"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:n?"insertTableColumnLeft":"insertTableColumnRight",label:e("Insert column left")}},{type:"button",model:{commandName:n?"insertTableColumnRight":"insertTableColumnLeft",label:e("Insert column right")}},{type:"button",model:{commandName:"removeTableColumn",label:e("Delete column")}},{type:"button",model:{commandName:"selectTableColumn",label:e("Select column")}}];return this._prepareDropdown(e("Column"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',i,t)}),t.ui.componentFactory.add("tableRow",t=>{const n=[{type:"switchbutton",model:{commandName:"setTableRowHeader",label:e("Header row"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableRowAbove",label:e("Insert row above")}},{type:"button",model:{commandName:"insertTableRowBelow",label:e("Insert row below")}},{type:"button",model:{commandName:"removeTableRow",label:e("Delete row")}},{type:"button",model:{commandName:"selectTableRow",label:e("Select row")}}];return this._prepareDropdown(e("Row"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',n,t)}),t.ui.componentFactory.add("mergeTableCells",t=>{const i=[{type:"button",model:{commandName:"mergeTableCellUp",label:e("Merge cell up")}},{type:"button",model:{commandName:n?"mergeTableCellRight":"mergeTableCellLeft",label:e("Merge cell right")}},{type:"button",model:{commandName:"mergeTableCellDown",label:e("Merge cell down")}},{type:"button",model:{commandName:n?"mergeTableCellLeft":"mergeTableCellRight",label:e("Merge cell left")}},{type:"separator"},{type:"button",model:{commandName:"splitTableCellVertically",label:e("Split cell vertically")}},{type:"button",model:{commandName:"splitTableCellHorizontally",label:e("Split cell horizontally")}}];return this._prepareMergeSplitButtonDropdown(e("Merge cells"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>',i,t)})}_prepareDropdown(t,e,n,i){const o=this.editor,r=Wl(i),s=this._fillDropdownWithListOptions(r,n);return r.buttonView.set({label:t,icon:e,tooltip:!0}),r.bind("isEnabled").toMany(s,"isEnabled",(...t)=>t.some(t=>t)),this.listenTo(r,"execute",t=>{o.execute(t.source.commandName),o.editing.view.focus()}),r}_prepareMergeSplitButtonDropdown(t,e,n,i){const o=this.editor,r=Wl(i,Up);return this._fillDropdownWithListOptions(r,n),r.buttonView.set({label:t,icon:e,tooltip:!0,isEnabled:!0}),this.listenTo(r.buttonView,"execute",()=>{o.execute("mergeTableCells"),o.editing.view.focus()}),this.listenTo(r,"execute",t=>{o.execute(t.source.commandName),o.editing.view.focus()}),r}_fillDropdownWithListOptions(t,e){const n=this.editor,i=[],o=new An;for(const t of e)Yp(t,n,i,o);return ql(t,o,n.ui.componentFactory),i}}function Yp(t,e,n,i){const o=t.model=new Wf(t.model),{commandName:r,bindIsOn:s}=t.model;if("button"===t.type||"switchbutton"===t.type){const t=e.commands.get(r);n.push(t),o.set({commandName:r}),o.bind("isEnabled").to(t),s&&o.bind("isOn").to(t,"value")}o.set({withText:!0}),i.add(t)}n(92);class Gp extends Zl{static get pluginName(){return"TableSelection"}static get requires(){return[_p]}init(){const t=this.editor.model;this.listenTo(t,"deleteContent",(t,e)=>this._handleDeleteContent(t,e),{priority:"high"}),this._defineSelectionConverter(),this._enablePluginDisabling()}getSelectedTableCells(){const t=qm(this.editor.model.document.selection);return 0==t.length?null:t}getSelectionAsFragment(){const t=this.getSelectedTableCells();return t?this.editor.model.change(e=>{const n=e.createDocumentFragment(),i=this.editor.plugins.get("TableUtils"),{first:o,last:r}=Km(t),{first:s,last:a}=$m(t),c=xm("table",t[0]);let l=a,d=r;if(Qm(t,i)){const t={firstColumn:o,lastColumn:r,firstRow:s,lastRow:a};l=hp(c,t),d=fp(c,t)}const u=ip(c,{startRow:s,startColumn:o,endRow:l,endColumn:d},e);return e.insert(u,n,0),n}):null}setCellSelection(t,e){const n=this._getCellsToSelect(t,e);this.editor.model.change(t=>{t.setSelection(n.cells.map(e=>t.createRangeOn(e)),{backward:n.backward})})}getFocusCell(){const t=[...this.editor.model.document.selection.getRanges()].pop().getContainedElement();return t&&t.is("tableCell")?t:null}getAnchorCell(){const t=wu(this.editor.model.document.selection.getRanges()).getContainedElement();return t&&t.is("tableCell")?t:null}_defineSelectionConverter(){const t=this.editor,e=new Set;t.conversion.for("editingDowncast").add(t=>t.on("selection",(t,n,i)=>{const o=i.writer;!function(t){for(const n of e)t.removeClass("ck-editor__editable_selected",n);e.clear()}(o);const r=this.getSelectedTableCells();if(!r)return;for(const t of r){const n=i.mapper.toViewElement(t);o.addClass("ck-editor__editable_selected",n),e.add(n)}const s=i.mapper.toViewElement(r[r.length-1]);o.setSelection(s,0)},{priority:"lowest"}))}_enablePluginDisabling(){const t=this.editor;this.on("change:isEnabled",()=>{if(!this.isEnabled){const e=this.getSelectedTableCells();if(!e)return;t.model.change(n=>{const i=n.createPositionAt(e[0],0),o=t.model.schema.getNearestSelectionRange(i);n.setSelection(o)})}})}_handleDeleteContent(t,e){const[n,i]=e,o=this.editor.model,r=!i||"backward"==i.direction,s=qm(n);s.length&&(t.stop(),o.change(t=>{const e=s[r?s.length-1:0];o.change(t=>{for(const e of s)o.deleteContent(t.createSelection(e,"in"))});const i=o.schema.getNearestSelectionRange(t.createPositionAt(e,0));n.is("documentSelection")?t.setSelection(i):n.setTo(i)}))}_getCellsToSelect(t,e){const n=this.editor.plugins.get("TableUtils"),i=n.getCellLocation(t),o=n.getCellLocation(e),r=Math.min(i.row,o.row),s=Math.max(i.row,o.row),a=Math.min(i.column,o.column),c=Math.max(i.column,o.column),l=new Array(s-r+1).fill(null).map(()=>[]),d={startRow:r,endRow:s,startColumn:a,endColumn:c};for(const{row:e,cell:n}of new Mm(xm("table",t),d))l[e-r].push(n);const u=o.row<i.row,h=o.column<i.column;return u&&l.reverse(),h&&l.forEach(t=>t.reverse()),{cells:l.flat(),backward:u||h}}}class $p extends Zl{static get pluginName(){return"TableClipboard"}static get requires(){return[Gp,_p]}init(){const t=this.editor,e=t.editing.view.document;this.listenTo(e,"copy",(t,e)=>this._onCopyCut(t,e)),this.listenTo(e,"cut",(t,e)=>this._onCopyCut(t,e)),this.listenTo(t.model,"insertContent",(t,e)=>this._onInsertContent(t,...e),{priority:"high"})}_onCopyCut(t,e){const n=this.editor.plugins.get(Gp);if(!n.getSelectedTableCells())return;if("cut"==t.name&&this.editor.isReadOnly)return;e.preventDefault(),t.stop();const i=this.editor.data,o=this.editor.editing.view.document,r=i.toView(n.getSelectionAsFragment());o.fire("clipboardOutput",{dataTransfer:e.dataTransfer,content:r,method:t.name})}_onInsertContent(t,e,n){if(n&&!n.is("documentSelection"))return;const i=this.editor.model,o=this.editor.plugins.get(_p);let r=function(t,e){if(!t.is("documentFragment")&&!t.is("element"))return null;if(t.is("table"))return t;if(1==t.childCount&&t.getChild(0).is("table"))return t.getChild(0);const n=e.createRangeIn(t);for(const t of n.getItems())if(t.is("table")){const i=e.createRange(n.start,e.createPositionBefore(t));if(e.hasContent(i,{ignoreWhitespaces:!0}))return null;const o=e.createRange(e.createPositionAfter(t),n.end);return e.hasContent(o,{ignoreWhitespaces:!0})?null:t}return null}(e,i);if(!r)return;const s=Gm(i.document.selection);s.length?(t.stop(),i.change(t=>{const e={width:o.getColumns(r),height:o.getRows(r)},n=function(t,e,n,i){const o=xm("table",t[0]),r=Km(t),s=$m(t),a={firstColumn:r.first,lastColumn:r.last,firstRow:s.first,lastRow:s.last},c=1===t.length;c&&(a.lastRow+=e.height-1,a.lastColumn+=e.width-1,function(t,e,n,i,o){const r=o.getColumns(t),s=o.getRows(t);n>r&&o.insertColumns(t,{batch:i.batch,at:r,columns:n-r});e>s&&o.insertRows(t,{batch:i.batch,at:s,rows:e-s})}(o,a.lastRow+1,a.lastColumn+1,n,i));c||!Qm(t,i)?function(t,e,n){const{firstRow:i,lastRow:o,firstColumn:r,lastColumn:s}=e,a={first:i,last:o},c={first:r,last:s};Qp(t,r,a,n),Qp(t,s+1,a,n),Kp(t,i,c,n),Kp(t,o+1,c,n,i)}(o,a,n):(a.lastRow=hp(o,a),a.lastColumn=fp(o,a));return a}(s,e,t,o),i=n.lastRow-n.firstRow+1,a=n.lastColumn-n.firstColumn+1,c={startRow:0,startColumn:0,endRow:Math.min(i,e.height)-1,endColumn:Math.min(a,e.width)-1};r=ip(r,c,t);const l=xm("table",s[0]);!function(t,e,n,i,o){const{width:r,height:s}=e,a=function(t,e,n){const i=new Array(n).fill(null).map(()=>new Array(e).fill(null));for(const{column:e,row:n,cell:o}of new Mm(t))i[n][e]=o;return i}(t,r,s),c=[...new Mm(n,{startRow:i.firstRow,endRow:i.lastRow,startColumn:i.firstColumn,endColumn:i.lastColumn,includeAllSlots:!0})],l=[];let d;for(const t of c){const{row:e,column:n,cell:c,isAnchor:u}=t;n===i.firstColumn&&(d=t.getPositionBefore()),u&&o.remove(c);const h=e-i.firstRow,f=n-i.firstColumn,g=a[h%s][f%r];if(!g)continue;const m=o.cloneElement(g);cp(m,e,n,i.lastRow,i.lastColumn,o),o.insert(m,d),l.push(m),d=o.createPositionAfter(m)}o.setSelection(l.map(t=>o.createRangeOn(t)))}(r,e,l,n,t)})):up(r,o)}}function Kp(t,e,n,i,o=0){if(e<1)return;const r=op(t,e,o).filter(({column:t,cellWidth:e})=>Jp(t,e,n));for(const{cell:t}of r)rp(t,e,i)}function Qp(t,e,n,i){if(e<1)return;const o=sp(t,e).filter(({row:t,cellHeight:e})=>Jp(t,e,n));for(const{cell:t,column:n}of o)ap(t,n,e,i)}function Jp(t,e,n){const i=t+e-1,{first:o,last:r}=n;return t>=o&&t<=r||t<o&&i>=o}class Zp extends Zl{static get pluginName(){return"TableKeyboard"}static get requires(){return[Gp]}init(){const t=this.editor.editing.view.document;this.editor.keystrokes.set("Tab",(...t)=>this._handleTabOnSelectedTable(...t),{priority:"low"}),this.editor.keystrokes.set("Tab",this._getTabHandler(!0),{priority:"low"}),this.editor.keystrokes.set("Shift+Tab",this._getTabHandler(!1),{priority:"low"}),this.listenTo(t,"keydown",(...t)=>this._onKeydown(...t),{priority:un.get("high")-10})}_handleTabOnSelectedTable(t,e){const n=this.editor,i=n.model.document.selection;if(!i.isCollapsed&&1===i.rangeCount&&i.getFirstRange().isFlat){const t=i.getSelectedElement();if(!t||!t.is("table"))return;e(),n.model.change(e=>{e.setSelection(e.createRangeIn(t.getChild(0).getChild(0)))})}}_getTabHandler(t){const e=this.editor;return(n,i)=>{const o=Ym(e.model.document.selection)[0];if(!o)return;i();const r=o.parent,s=r.parent,a=s.getChildIndex(r),c=r.getChildIndex(o),l=0===c;if(!t&&l&&0===a)return;const d=c===r.childCount-1,u=a===s.childCount-1;if(t&&u&&d&&(e.execute("insertTableRowBelow"),a===s.childCount-1))return;let h;if(t&&d){const t=s.getChild(a+1);h=t.getChild(0)}else if(!t&&l){const t=s.getChild(a-1);h=t.getChild(t.childCount-1)}else h=r.getChild(c+(t?1:-1));e.model.change(t=>{t.setSelection(t.createRangeIn(h))})}}_onKeydown(t,e){const n=this.editor,i=e.keyCode;if(!ko(i))return;const o=_o(i,n.locale.contentLanguageDirection);this._handleArrowKeys(o,e.shiftKey)&&(e.preventDefault(),e.stopPropagation(),t.stop())}_handleArrowKeys(t,e){const n=this.editor.model,i=n.document.selection,o=["right","down"].includes(t),r=qm(i);if(r.length){let n;return n=e?this.editor.plugins.get("TableSelection").getFocusCell():o?r[r.length-1]:r[0],this._navigateFromCellInDirection(n,t,e),!0}const s=xm("tableCell",i.focus);if(!s)return!1;const a=n.createRangeIn(s);if(this._isSelectionAtCellEdge(i,o))return this._navigateFromCellInDirection(s,t,e),!0;const c=this._findTextRangeFromSelection(a,i,o);return c?!["left","right"].includes(t)&&(this._isSingleLineRange(c,o)?(n.change(t=>{const r=o?a.end:a.start;if(e){const e=n.createSelection(i.anchor);e.setFocus(r),t.setSelection(e)}else t.setSelection(r)}),!0):void 0):(this._navigateFromCellInDirection(s,t,e),!0)}_isSelectionAtCellEdge(t,e){const n=this.editor.model,i=this.editor.model.schema,o=e?t.getLastPosition():t.getFirstPosition();if(!i.getLimitElement(o).is("tableCell"))return!1;const r=n.createSelection(o);return n.modifySelection(r,{direction:e?"forward":"backward"}),o.isEqual(r.focus)}_findTextRangeFromSelection(t,e,n){const i=this.editor.model;if(n){const n=e.getLastPosition(),o=this._getNearestVisibleTextPosition(t,"backward");return o&&n.isBefore(o)?i.createRange(n,o):null}{const n=e.getFirstPosition(),o=this._getNearestVisibleTextPosition(t,"forward");return o&&n.isAfter(o)?i.createRange(o,n):null}}_getNearestVisibleTextPosition(t,e){const n=this.editor.model.schema,i=this.editor.editing.mapper;for(const{nextPosition:o,item:r}of t.getWalker({direction:e}))if(n.checkChild(o,"$text")){const t=i.toViewElement(r);if(t&&!t.hasClass("ck-hidden"))return o}}_isSingleLineRange(t,e){const n=this.editor.model,i=this.editor.editing,o=i.view.domConverter;if(e){const e=n.createSelection(t.start);n.modifySelection(e),e.focus.isAtEnd||t.start.isEqual(e.focus)||(t=n.createRange(e.focus,t.end))}const r=i.mapper.toViewRange(t),s=o.viewRangeToDom(r),a=es.getDomRangeRects(s);let c;for(const t of a)if(void 0!==c){if(Math.round(t.top)>=c)return!1;c=Math.max(c,Math.round(t.bottom))}else c=Math.round(t.bottom);return!0}_navigateFromCellInDirection(t,e,n=!1){const i=this.editor.model,o=xm("table",t),r=[...new Mm(o,{includeAllSlots:!0})],{row:s,column:a}=r[r.length-1],c=r.find(({cell:e})=>e==t);let{row:l,column:d}=c;switch(e){case"left":d--;break;case"up":l--;break;case"right":d+=c.cellWidth;break;case"down":l+=c.cellHeight}if(l<0||l>s||d<0&&l<=0||d>a&&l>=s)return void i.change(t=>{t.setSelection(t.createRangeOn(o))});d<0?(d=n?0:a,l--):d>a&&(d=n?a:0,l++);const u=r.find(t=>t.row==l&&t.column==d).cell,h=["right","down"].includes(e),f=this.editor.plugins.get("TableSelection");if(n&&f.isEnabled){const e=f.getAnchorCell()||t;f.setCellSelection(e,u)}else{const t=i.createPositionAt(u,h?0:"end");i.change(e=>{e.setSelection(t)})}}}class Xp extends Dr{constructor(t){super(t),this.domEventType=["mousemove","mouseup","mouseleave"]}onDomEvent(t){this.fire(t.type,t)}}class tb extends Zl{static get pluginName(){return"TableMouse"}static get requires(){return[Gp]}init(){this.editor.editing.view.addObserver(Xp),this._enableShiftClickSelection(),this._enableMouseDragSelection()}_enableShiftClickSelection(){const t=this.editor;let e=!1;const n=t.plugins.get(Gp);this.listenTo(t.editing.view.document,"mousedown",(i,o)=>{if(!this.isEnabled||!n.isEnabled)return;if(!o.domEvent.shiftKey)return;const r=n.getAnchorCell()||Ym(t.model.document.selection)[0];if(!r)return;const s=this._getModelTableCellFromDomEvent(o);s&&eb(r,s)&&(e=!0,n.setCellSelection(r,s),o.preventDefault())}),this.listenTo(t.editing.view.document,"mouseup",()=>{e=!1}),this.listenTo(t.editing.view.document,"selectionChange",t=>{e&&t.stop()},{priority:"highest"})}_enableMouseDragSelection(){const t=this.editor;let e,n,i=!1,o=!1;const r=t.plugins.get(Gp);this.listenTo(t.editing.view.document,"mousedown",(t,n)=>{this.isEnabled&&r.isEnabled&&(n.domEvent.shiftKey||n.domEvent.ctrlKey||n.domEvent.altKey||(e=this._getModelTableCellFromDomEvent(n)))}),this.listenTo(t.editing.view.document,"mousemove",(t,s)=>{if(!s.domEvent.buttons)return;if(!e)return;const a=this._getModelTableCellFromDomEvent(s);a&&eb(e,a)&&(n=a,i||n==e||(i=!0)),i&&(o=!0,r.setCellSelection(e,n),s.preventDefault())}),this.listenTo(t.editing.view.document,"mouseup",()=>{i=!1,o=!1,e=null,n=null}),this.listenTo(t.editing.view.document,"selectionChange",t=>{o&&t.stop()},{priority:"highest"})}_getModelTableCellFromDomEvent(t){const e=t.target,n=this.editor.editing.view.createPositionAt(e,0),i=this.editor.editing.mapper.toModelPosition(n).parent;return i.is("tableCell")?i:xm("tableCell",i)}}function eb(t,e){return t.parent.parent==e.parent.parent}n(94);function nb(t){const e=t.getSelectedElement();return e&&ob(e)?e:null}function ib(t){const e=xm("table",t.getFirstPosition());return e&&ob(e.parent)?e.parent:null}function ob(t){return!!t.getCustomProperty("table")&&zu(t)}class rb{constructor(t,e){this.model=t,this.testCallback=e,this.hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(t.document.selection),this.stopListening(t.document))}),this._startListening()}_startListening(){const t=this.model.document;this.listenTo(t.selection,"change:range",(e,{directChange:n})=>{n&&(t.selection.isCollapsed?this._evaluateTextBeforeSelection("selection"):this.hasMatch&&(this.fire("unmatched"),this.hasMatch=!1))}),this.listenTo(t,"change:data",(t,e)=>{"transparent"!=e.type&&this._evaluateTextBeforeSelection("data",{batch:e})})}_evaluateTextBeforeSelection(t,e={}){const n=this.model,i=n.document.selection,o=n.createRange(n.createPositionAt(i.focus.parent,0),i.focus),{text:r,range:s}=function(t,e){let n=t.start;return{text:Array.from(t.getItems()).reduce((t,i)=>i.is("text")||i.is("textProxy")?t+i.data:(n=e.createPositionAfter(i),""),""),range:e.createRange(n,t.end)}}(o,n),a=this.testCallback(r);if(!a&&this.hasMatch&&this.fire("unmatched"),this.hasMatch=!!a,a){const n=Object.assign(e,{text:r,range:s});"object"==typeof a&&Object.assign(n,a),this.fire("matched:"+t,n)}}}xn(rb,Ui);var sb=/[\\^$.*+?()[\]{}|]/g,ab=RegExp(sb.source);var cb=function(t){return(t=Zn(t))&&ab.test(t)?t.replace(sb,"\\$&"):t};const lb={copyright:{from:"(c)",to:"©"},registeredTrademark:{from:"(r)",to:"®"},trademark:{from:"(tm)",to:"™"},oneHalf:{from:"1/2",to:"½"},oneThird:{from:"1/3",to:"⅓"},twoThirds:{from:"2/3",to:"⅔"},oneForth:{from:"1/4",to:"¼"},threeQuarters:{from:"3/4",to:"¾"},lessThanOrEqual:{from:"<=",to:"≤"},greaterThanOrEqual:{from:">=",to:"≥"},notEqual:{from:"!=",to:"≠"},arrowLeft:{from:"<-",to:"←"},arrowRight:{from:"->",to:"→"},horizontalEllipsis:{from:"...",to:"…"},enDash:{from:/(^| )(--)( )$/,to:[null,"–",null]},emDash:{from:/(^| )(---)( )$/,to:[null,"—",null]},quotesPrimary:{from:mb('"'),to:[null,"“",null,"”"]},quotesSecondary:{from:mb("'"),to:[null,"‘",null,"’"]},quotesPrimaryEnGb:{from:mb("'"),to:[null,"‘",null,"’"]},quotesSecondaryEnGb:{from:mb('"'),to:[null,"“",null,"”"]},quotesPrimaryPl:{from:mb('"'),to:[null,"„",null,"”"]},quotesSecondaryPl:{from:mb("'"),to:[null,"‚",null,"’"]}},db={symbols:["copyright","registeredTrademark","trademark"],mathematical:["oneHalf","oneThird","twoThirds","oneForth","threeQuarters","lessThanOrEqual","greaterThanOrEqual","notEqual","arrowLeft","arrowRight"],typography:["horizontalEllipsis","enDash","emDash"],quotes:["quotesPrimary","quotesSecondary"]},ub=["symbols","mathematical","typography","quotes"];function hb(t){return"string"==typeof t?new RegExp(`(${cb(t)})$`):t}function fb(t){return"string"==typeof t?()=>[t]:t instanceof Array?()=>t:t}function gb(t){return(t.textNode?t.textNode:t.nodeAfter).getAttributes()}function mb(t){return new RegExp(`(^|\\s)(${t})([^${t}]*)(${t})$`)}class pb extends Jl{}pb.builtinPlugins=[class extends Zl{static get requires(){return[id,dd,_d,gd,Rd,tu]}static get pluginName(){return"Essentials"}},au,class extends Zl{static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats(),this._addCodeBlockAutoformats()}_addListAutoformats(){const t=this.editor.commands;t.get("bulletedList")&&lu(this.editor,this,/^[*-]\s$/,"bulletedList"),t.get("numberedList")&&lu(this.editor,this,/^1[.|)]\s$/,"numberedList")}_addBasicStylesAutoformats(){const t=this.editor.commands;if(t.get("bold")){const t=hu(this.editor,"bold");du(this.editor,this,/(\*\*)([^*]+)(\*\*)$/g,t),du(this.editor,this,/(__)([^_]+)(__)$/g,t)}if(t.get("italic")){const t=hu(this.editor,"italic");du(this.editor,this,/(?:^|[^*])(\*)([^*_]+)(\*)$/g,t),du(this.editor,this,/(?:^|[^_])(_)([^_]+)(_)$/g,t)}if(t.get("code")){const t=hu(this.editor,"code");du(this.editor,this,/(`)([^`]+)(`)$/g,t)}if(t.get("strikethrough")){const t=hu(this.editor,"strikethrough");du(this.editor,this,/(~~)([^~]+)(~~)$/g,t)}}_addHeadingAutoformats(){const t=this.editor.commands.get("heading");t&&t.modelElements.filter(t=>t.match(/^heading[1-6]$/)).forEach(e=>{const n=e[7],i=new RegExp(`^(#{${n}})\\s$`);lu(this.editor,this,i,()=>{if(!t.isEnabled)return!1;this.editor.execute("heading",{value:e})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&lu(this.editor,this,/^>\s$/,"blockQuote")}_addCodeBlockAutoformats(){this.editor.commands.get("codeBlock")&&lu(this.editor,this,/^```$/,"codeBlock")}},class extends Zl{static get requires(){return[gu,mu]}static get pluginName(){return"Bold"}},class extends Zl{static get requires(){return[pu,bu]}static get pluginName(){return"Italic"}},class extends Zl{static get requires(){return[xu,Au]}static get pluginName(){return"BlockQuote"}},class extends Zl{static get pluginName(){return"CKFinder"}static get requires(){return[Fh,Cu,au]}},class extends Zl{static get requires(){return[$h,wf,Rf]}static get pluginName(){return"EasyImage"}},class extends Zl{static get requires(){return[Hf,qf]}static get pluginName(){return"Heading"}},wf,class extends Zl{static get requires(){return[$f]}static get pluginName(){return"ImageCaption"}},class extends Zl{static get requires(){return[lg,dg]}static get pluginName(){return"ImageStyle"}},class extends Zl{static get requires(){return[ug]}static get pluginName(){return"ImageToolbar"}afterInit(){const t=this.editor,e=t.t;t.plugins.get(ug).register("image",{ariaLabel:e("Image toolbar"),items:t.config.get("image.toolbar")||[],getRelatedElement:Gu})}},Rf,class extends Zl{static get pluginName(){return"Indent"}static get requires(){return[mg,wg]}},class extends Zl{static get requires(){return[jh,Ag]}static get pluginName(){return"Link"}},class extends Zl{static get requires(){return[Qg,Zg]}static get pluginName(){return"List"}},class extends Zl{static get requires(){return[am,um,lm,Xh]}static get pluginName(){return"MediaEmbed"}},Vf,class extends Zl{static get pluginName(){return"PasteFromOffice"}static get requires(){return[id]}init(){const t=this.editor,e=t.editing.view.document,n=[];n.push(new ym(e)),n.push(new pm(e)),t.plugins.get("Clipboard").on("inputTransformation",(t,e)=>{if(e.isTransformedWithPasteFromOffice)return;const i=e.dataTransfer.getData("text/html"),o=n.find(t=>t.isActive(i));o&&(o.execute(e),e.isTransformedWithPasteFromOffice=!0)},{priority:"high"})}},class extends Zl{static get requires(){return[Fp,qp,Gp,tb,Zp,$p,Xh]}static get pluginName(){return"Table"}},class extends Zl{static get requires(){return[ug]}static get pluginName(){return"TableToolbar"}afterInit(){const t=this.editor,e=t.t,n=t.plugins.get(ug),i=t.config.get("table.contentToolbar"),o=t.config.get("table.tableToolbar");i&&n.register("tableContent",{ariaLabel:e("Table toolbar"),items:i,getRelatedElement:ib}),o&&n.register("table",{ariaLabel:e("Table toolbar"),items:o,getRelatedElement:nb})}},class extends Zl{static get pluginName(){return"TextTransformation"}constructor(t){super(t),t.config.define("typing",{transformations:{include:ub}})}init(){const t=this.editor.model.document.selection;t.on("change:range",()=>{this.isEnabled=!t.anchor.parent.is("codeBlock")}),this._enableTransformationWatchers()}_enableTransformationWatchers(){const t=this.editor,e=t.model,n=t.plugins.get("Input"),i=function(t){const e=t.extra||[],n=t.remove||[],i=t=>!n.includes(t);return function(t){const e=new Set;for(const n of t)if(db[n])for(const t of db[n])e.add(t);else e.add(n);return Array.from(e)}(t.include.concat(e).filter(i)).filter(i).map(t=>lb[t]||t).map(t=>({from:hb(t.from),to:fb(t.to)}))}(t.config.get("typing.transformations")),o=new rb(t.model,t=>{for(const e of i){if(e.from.test(t))return{normalizedTransformation:e}}});o.on("matched:data",(t,i)=>{if(!n.isInput(i.batch))return;const{from:o,to:r}=i.normalizedTransformation,s=o.exec(i.text),a=r(s.slice(1)),c=i.range;let l=s.index;e.enqueueChange(t=>{for(let n=1;n<s.length;n++){const i=s[n],o=a[n-1];if(null==o){l+=i.length;continue}const r=c.start.getShiftedBy(l),d=e.createRange(r,r.getShiftedBy(i.length)),u=gb(r);e.insertContent(t.createText(o,u),d),l+=o.length}})}),o.bind("isEnabled").to(this)}}],pb.defaultConfig={toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","|","indent","outdent","|","imageUpload","blockQuote","insertTable","mediaEmbed","undo","redo"]},image:{toolbar:["imageStyle:full","imageStyle:side","|","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}}]).default}));
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "New",
  components: {
    ModelSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_1__.ModelSelect,
    Form: vform__WEBPACK_IMPORTED_MODULE_2__.Form,
    'has-error': vform__WEBPACK_IMPORTED_MODULE_2__.HasError
  },
  data: function data() {
    return {
      editor: (_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default()),
      editorConfig: {// The configuration of the editor.
      },
      state_list: [],
      form: new vform__WEBPACK_IMPORTED_MODULE_2__.Form({
        state_name: '',
        map_link: '',
        slug: '',
        description: '',
        thumbnail: '',
        banner_image: '',
        image_one: '',
        image_two: '',
        image_three: '',
        image_four: '',
        image_five: '',
        image_six: '',
        image_seven: '',
        image_eight: ''
      })
    };
  },
  created: function created() {
    this.cityList();
  },
  methods: {
    cityList: function cityList() {
      var _this = this;

      axios.get('/api/state').then(function (response) {
        _this.state_list = response.data;
      });
    },
    changeImage: function changeImage(event, model) {
      var _this2 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        switch (model) {
          case 'thumbnail':
            _this2.form.thumbnail = event.target.result;
            break;

          case 'banner':
            _this2.form.banner_image = event.target.result;
            break;

          case 1:
            _this2.form.image_one = event.target.result;
            break;

          case 2:
            _this2.form.image_two = event.target.result;
            break;

          case 3:
            _this2.form.image_three = event.target.result;
            break;

          case 4:
            _this2.form.image_four = event.target.result;
            break;

          case 5:
            _this2.form.image_five = event.target.result;
            break;

          case 6:
            _this2.form.image_six = event.target.result;
            break;

          case 7:
            _this2.form.image_seven = event.target.result;
            break;

          case 8:
            _this2.form.image_eight = event.target.result;
            break;
        }
      };

      reader.readAsDataURL(file);
    },
    slugCreate: function slugCreate(event) {
      var slug = "";
      var value = event.target.value.toLowerCase(); // Trim the last whitespace

      slug = value.replace(/\s*$/g, ''); // Change whitespace to "-"

      this.form.slug = slug.replace(/\s+/g, '-');
    },
    addItinerary: function addItinerary() {
      var _this3 = this;

      // Submit form 
      this.form.post('/api/encyclopedias').then(function (response) {
        // this.$router.push(`/itinerary-list`)
        _this3.$toast.fire({
          icon: 'success',
          title: 'Itinerary Added successfully'
        });
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _New_encyclopediacomment_vue_vue_type_template_id_61e2fb7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New-encyclopediacomment.vue?vue&type=template&id=61e2fb7c& */ "./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue?vue&type=template&id=61e2fb7c&");
/* harmony import */ var _New_encyclopediacomment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New-encyclopediacomment.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_encyclopediacomment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_encyclopediacomment_vue_vue_type_template_id_61e2fb7c___WEBPACK_IMPORTED_MODULE_0__.render,
  _New_encyclopediacomment_vue_vue_type_template_id_61e2fb7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_encyclopediacomment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./New-encyclopediacomment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_encyclopediacomment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue?vue&type=template&id=61e2fb7c&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue?vue&type=template&id=61e2fb7c& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_encyclopediacomment_vue_vue_type_template_id_61e2fb7c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_encyclopediacomment_vue_vue_type_template_id_61e2fb7c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_encyclopediacomment_vue_vue_type_template_id_61e2fb7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./New-encyclopediacomment.vue?vue&type=template&id=61e2fb7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue?vue&type=template&id=61e2fb7c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue?vue&type=template&id=61e2fb7c&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/encyclopedia/comment/New-encyclopediacomment.vue?vue&type=template&id=61e2fb7c& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-md-12 itinerary_form" }, [
          _c(
            "form",
            {
              attrs: { role: "form", enctype: "multipart/form-data" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.addItinerary()
                },
              },
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "state_name" } }, [
                        _vm._v("State"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.state_name,
                              expression: "form.state_name",
                            },
                          ],
                          staticClass: "form-control select-field",
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "state_name",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                              function ($event) {
                                return _vm.slugCreate($event)
                              },
                            ],
                          },
                        },
                        _vm._l(_vm.state_list, function (state) {
                          return _c(
                            "option",
                            { key: state.id, domProps: { value: state.name } },
                            [_vm._v(_vm._s(state.name))]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "state_name" },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "slug" } }, [_vm._v("Slug")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.slug,
                            expression: "form.slug",
                          },
                        ],
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.form.errors.has("slug") },
                        attrs: {
                          type: "text",
                          placeholder: "Enter Map Link",
                          rows: "6",
                          readonly: "",
                        },
                        domProps: { value: _vm.form.slug },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "slug", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "slug" },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "map_link" } }, [
                        _vm._v("Map Link"),
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.map_link,
                            expression: "form.map_link",
                          },
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("map_link"),
                        },
                        attrs: { placeholder: "Enter Map Link", rows: "6" },
                        domProps: { value: _vm.form.map_link },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "map_link", $event.target.value)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "map_link" },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "descriptionId" } }, [
                        _vm._v("Description"),
                      ]),
                      _vm._v(" "),
                      _c("ckeditor", {
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("description"),
                        },
                        attrs: {
                          editor: _vm.editor,
                          id: "description",
                          config: _vm.editorConfig,
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
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group itinerary_image" },
                    [
                      _c(
                        "label",
                        { staticClass: "label", attrs: { for: "thumbnail" } },
                        [_vm._v("Please upload thumbnail image !")]
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "select_image",
                        class: {
                          "is-invalid": _vm.form.errors.has("thumbnail"),
                        },
                        attrs: { type: "file", accept: "jpeg,jpg,png,gif" },
                        on: {
                          change: function ($event) {
                            return _vm.changeImage($event, "thumbnail")
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        attrs: {
                          src: _vm.form.thumbnail,
                          alt: "",
                          width: "80",
                          height: "80",
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "thumbnail" },
                      }),
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
                        { staticClass: "label", attrs: { for: "input" } },
                        [_vm._v("Please upload a Banner image !")]
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c("input", {
                        class: {
                          "is-invalid": _vm.form.errors.has("banner_image"),
                        },
                        attrs: { name: "banner_image", type: "file" },
                        on: {
                          change: function ($event) {
                            return _vm.changeImage($event, "banner")
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "banner_image",
                        attrs: { src: _vm.form.banner_image, alt: "" },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "banner_image" },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "label",
                        { staticClass: "label", attrs: { for: "image_one" } },
                        [_vm._v("Image One")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "select_image",
                        class: {
                          "is-invalid": _vm.form.errors.has("image_one"),
                        },
                        attrs: { type: "file" },
                        on: {
                          change: function ($event) {
                            return _vm.changeImage($event, 1)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "image_one",
                        attrs: {
                          src: _vm.form.image_one,
                          alt: "",
                          width: "80",
                          height: "80",
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "image_one" },
                      }),
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
                        { staticClass: "label", attrs: { for: "image_one" } },
                        [_vm._v("Image Two")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "select_image",
                        class: {
                          "is-invalid": _vm.form.errors.has("image_two"),
                        },
                        attrs: { type: "file" },
                        on: {
                          change: function ($event) {
                            return _vm.changeImage($event, 2)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "image_two",
                        attrs: {
                          src: _vm.form.image_two,
                          alt: "",
                          width: "80",
                          height: "80",
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "image_two" },
                      }),
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
                        { staticClass: "label", attrs: { for: "image_one" } },
                        [_vm._v("Image Three")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "select_image",
                        class: {
                          "is-invalid": _vm.form.errors.has("image_three"),
                        },
                        attrs: { type: "file" },
                        on: {
                          change: function ($event) {
                            return _vm.changeImage($event, 3)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "image_three",
                        attrs: {
                          src: _vm.form.image_three,
                          alt: "",
                          width: "80",
                          height: "80",
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "image_three" },
                      }),
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
                        { staticClass: "label", attrs: { for: "image_four" } },
                        [_vm._v("Image Four")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "select_image",
                        class: {
                          "is-invalid": _vm.form.errors.has("image_four"),
                        },
                        attrs: { type: "file" },
                        on: {
                          change: function ($event) {
                            return _vm.changeImage($event, 4)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "image_four",
                        attrs: {
                          src: _vm.form.image_four,
                          alt: "",
                          width: "80",
                          height: "80",
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "image_four" },
                      }),
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
                        { staticClass: "label", attrs: { for: "image_five" } },
                        [_vm._v("Image Five")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "select_image",
                        class: {
                          "is-invalid": _vm.form.errors.has("image_five"),
                        },
                        attrs: { type: "file" },
                        on: {
                          change: function ($event) {
                            return _vm.changeImage($event, 5)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "image_five",
                        attrs: {
                          src: _vm.form.image_five,
                          alt: "",
                          width: "80",
                          height: "80",
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "image_five" },
                      }),
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
                        { staticClass: "label", attrs: { for: "image_six" } },
                        [_vm._v("Image Six")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "select_image",
                        class: {
                          "is-invalid": _vm.form.errors.has("image_six"),
                        },
                        attrs: { type: "file" },
                        on: {
                          change: function ($event) {
                            return _vm.changeImage($event, 6)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "image_six",
                        attrs: {
                          src: _vm.form.image_six,
                          alt: "",
                          width: "80",
                          height: "80",
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "image_six" },
                      }),
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
                        { staticClass: "label", attrs: { for: "image_seven" } },
                        [_vm._v("Image Seven")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "select_image",
                        class: {
                          "is-invalid": _vm.form.errors.has("image_seven"),
                        },
                        attrs: { type: "file" },
                        on: {
                          change: function ($event) {
                            return _vm.changeImage($event, 7)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "image_seven",
                        attrs: {
                          src: _vm.form.image_seven,
                          alt: "",
                          width: "80",
                          height: "80",
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "image_seven" },
                      }),
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
                        { staticClass: "label", attrs: { for: "image_eight" } },
                        [_vm._v("Image Eight")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "select_image",
                        class: {
                          "is-invalid": _vm.form.errors.has("image_eight"),
                        },
                        attrs: { type: "file" },
                        on: {
                          change: function ($event) {
                            return _vm.changeImage($event, 8)
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "image_eight",
                        attrs: {
                          src: _vm.form.image_eight,
                          alt: "",
                          width: "80",
                          height: "80",
                        },
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "image_eight" },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row text-center" }, [
                _c(
                  "div",
                  { staticClass: "col-sm-4" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-primary itrn_add_btn back_btn",
                        attrs: { to: "/encyclopedia-list" },
                      },
                      [_vm._v("Back")]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(0),
              ]),
            ]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-4" }, [
      _c("div", { staticClass: "form-group" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary itrn_add_btn",
            attrs: { type: "submit" },
          },
          [_vm._v("SUBMIT")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-search-select/dist/VueSearchSelect.common.js ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
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
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_187__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_187__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_187__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_187__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_187__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "014b":
/***/ (function(module, exports, __nested_webpack_require_3663__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __nested_webpack_require_3663__("e53d");
var has = __nested_webpack_require_3663__("07e3");
var DESCRIPTORS = __nested_webpack_require_3663__("8e60");
var $export = __nested_webpack_require_3663__("63b6");
var redefine = __nested_webpack_require_3663__("9138");
var META = __nested_webpack_require_3663__("ebfd").KEY;
var $fails = __nested_webpack_require_3663__("294c");
var shared = __nested_webpack_require_3663__("dbdb");
var setToStringTag = __nested_webpack_require_3663__("45f2");
var uid = __nested_webpack_require_3663__("62a0");
var wks = __nested_webpack_require_3663__("5168");
var wksExt = __nested_webpack_require_3663__("ccb9");
var wksDefine = __nested_webpack_require_3663__("6718");
var enumKeys = __nested_webpack_require_3663__("47ee");
var isArray = __nested_webpack_require_3663__("9003");
var anObject = __nested_webpack_require_3663__("e4ae");
var isObject = __nested_webpack_require_3663__("f772");
var toObject = __nested_webpack_require_3663__("241e");
var toIObject = __nested_webpack_require_3663__("36c3");
var toPrimitive = __nested_webpack_require_3663__("1bc3");
var createDesc = __nested_webpack_require_3663__("aebd");
var _create = __nested_webpack_require_3663__("a159");
var gOPNExt = __nested_webpack_require_3663__("0395");
var $GOPD = __nested_webpack_require_3663__("bf0b");
var $GOPS = __nested_webpack_require_3663__("9aa9");
var $DP = __nested_webpack_require_3663__("d9f6");
var $keys = __nested_webpack_require_3663__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __nested_webpack_require_3663__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __nested_webpack_require_3663__("355d").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__nested_webpack_require_3663__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __nested_webpack_require_3663__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __nested_webpack_require_13165__) {

"use strict";

var LIBRARY = __nested_webpack_require_13165__("2d00");
var $export = __nested_webpack_require_13165__("5ca1");
var redefine = __nested_webpack_require_13165__("2aba");
var hide = __nested_webpack_require_13165__("32e9");
var Iterators = __nested_webpack_require_13165__("84f2");
var $iterCreate = __nested_webpack_require_13165__("41a0");
var setToStringTag = __nested_webpack_require_13165__("7f20");
var getPrototypeOf = __nested_webpack_require_13165__("38fd");
var ITERATOR = __nested_webpack_require_13165__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __nested_webpack_require_16071__) {

var toInteger = __nested_webpack_require_16071__("4588");
var defined = __nested_webpack_require_16071__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __nested_webpack_require_16784__) {

"use strict";

var at = __nested_webpack_require_16784__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __nested_webpack_require_17135__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __nested_webpack_require_17135__("36c3");
var gOPN = __nested_webpack_require_17135__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __nested_webpack_require_18011__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __nested_webpack_require_18011__("9b43");
var IObject = __nested_webpack_require_18011__("626a");
var toObject = __nested_webpack_require_18011__("4bf8");
var toLength = __nested_webpack_require_18011__("9def");
var asc = __nested_webpack_require_18011__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __nested_webpack_require_19606__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __nested_webpack_require_19606__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __nested_webpack_require_20065__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __nested_webpack_require_20065__("ce10");
var enumBugKeys = __nested_webpack_require_20065__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __nested_webpack_require_20364__) {

var toInteger = __nested_webpack_require_20364__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __nested_webpack_require_20674__) {

// 7.2.2 IsArray(argument)
var cof = __nested_webpack_require_20674__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __nested_webpack_require_20915__) {

var pIE = __nested_webpack_require_20915__("52a7");
var createDesc = __nested_webpack_require_20915__("4630");
var toIObject = __nested_webpack_require_20915__("6821");
var toPrimitive = __nested_webpack_require_20915__("6a99");
var has = __nested_webpack_require_20915__("69a8");
var IE8_DOM_DEFINE = __nested_webpack_require_20915__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __nested_webpack_require_20915__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __nested_webpack_require_21594__) {

var dP = __nested_webpack_require_21594__("86cc");
var anObject = __nested_webpack_require_21594__("cb7c");
var getKeys = __nested_webpack_require_21594__("0d58");

module.exports = __nested_webpack_require_21594__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __nested_webpack_require_22094__) {

"use strict";

var $at = __nested_webpack_require_22094__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__nested_webpack_require_22094__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __nested_webpack_require_22939__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __nested_webpack_require_22939__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __nested_webpack_require_23682__) {

var isObject = __nested_webpack_require_23682__("f772");
var document = __nested_webpack_require_23682__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "20d6":
/***/ (function(module, exports, __nested_webpack_require_24066__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __nested_webpack_require_24066__("5ca1");
var $find = __nested_webpack_require_24066__("0a49")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__nested_webpack_require_24066__("9c6c")(KEY);


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __nested_webpack_require_24700__) {

"use strict";

__nested_webpack_require_24700__("b0c5");
var redefine = __nested_webpack_require_24700__("2aba");
var hide = __nested_webpack_require_24700__("32e9");
var fails = __nested_webpack_require_24700__("79e5");
var defined = __nested_webpack_require_24700__("be13");
var wks = __nested_webpack_require_24700__("2b4c");
var regexpExec = __nested_webpack_require_24700__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __nested_webpack_require_28157__) {

var isObject = __nested_webpack_require_28157__("d3f4");
var document = __nested_webpack_require_28157__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __nested_webpack_require_28541__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __nested_webpack_require_28541__("2d95");
var TAG = __nested_webpack_require_28541__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __nested_webpack_require_29363__) {

// 7.1.13 ToObject(argument)
var defined = __nested_webpack_require_29363__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __nested_webpack_require_29977__) {

var global = __nested_webpack_require_29977__("7726");
var hide = __nested_webpack_require_29977__("32e9");
var has = __nested_webpack_require_29977__("69a8");
var SRC = __nested_webpack_require_29977__("ca5a")('src');
var $toString = __nested_webpack_require_29977__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__nested_webpack_require_29977__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __nested_webpack_require_31151__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __nested_webpack_require_31151__("cb7c");
var dPs = __nested_webpack_require_31151__("1495");
var enumBugKeys = __nested_webpack_require_31151__("e11e");
var IE_PROTO = __nested_webpack_require_31151__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __nested_webpack_require_31151__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __nested_webpack_require_31151__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __nested_webpack_require_32762__) {

var store = __nested_webpack_require_32762__("5537")('wks');
var uid = __nested_webpack_require_32762__("ca5a");
var Symbol = __nested_webpack_require_32762__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __nested_webpack_require_33484__) {

"use strict";

var LIBRARY = __nested_webpack_require_33484__("b8e3");
var $export = __nested_webpack_require_33484__("63b6");
var redefine = __nested_webpack_require_33484__("9138");
var hide = __nested_webpack_require_33484__("35e8");
var Iterators = __nested_webpack_require_33484__("481b");
var $iterCreate = __nested_webpack_require_33484__("8f60");
var setToStringTag = __nested_webpack_require_33484__("45f2");
var getPrototypeOf = __nested_webpack_require_33484__("53e2");
var ITERATOR = __nested_webpack_require_33484__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __nested_webpack_require_36390__) {

var dP = __nested_webpack_require_36390__("86cc");
var createDesc = __nested_webpack_require_36390__("4630");
module.exports = __nested_webpack_require_36390__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __nested_webpack_require_36766__) {

var document = __nested_webpack_require_36766__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __nested_webpack_require_36958__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __nested_webpack_require_36958__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __nested_webpack_require_37441__) {

var dP = __nested_webpack_require_37441__("d9f6");
var createDesc = __nested_webpack_require_37441__("aebd");
module.exports = __nested_webpack_require_37441__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __nested_webpack_require_37817__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __nested_webpack_require_37817__("335c");
var defined = __nested_webpack_require_37817__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3846":
/***/ (function(module, exports, __nested_webpack_require_38130__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__nested_webpack_require_38130__("9e1e") && /./g.flags != 'g') __nested_webpack_require_38130__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __nested_webpack_require_38130__("0bfb")
});


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __nested_webpack_require_38429__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __nested_webpack_require_38429__("69a8");
var toObject = __nested_webpack_require_38429__("4bf8");
var IE_PROTO = __nested_webpack_require_38429__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3b2b":
/***/ (function(module, exports, __nested_webpack_require_39247__) {

var global = __nested_webpack_require_39247__("7726");
var inheritIfRequired = __nested_webpack_require_39247__("5dbc");
var dP = __nested_webpack_require_39247__("86cc").f;
var gOPN = __nested_webpack_require_39247__("9093").f;
var isRegExp = __nested_webpack_require_39247__("aae3");
var $flags = __nested_webpack_require_39247__("0bfb");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__nested_webpack_require_39247__("9e1e") && (!CORRECT_NEW || __nested_webpack_require_39247__("79e5")(function () {
  re2[__nested_webpack_require_39247__("2b4c")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __nested_webpack_require_39247__("2aba")(global, 'RegExp', $RegExp);
}

__nested_webpack_require_39247__("7a56")('RegExp');


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __nested_webpack_require_40985__) {

"use strict";

var create = __nested_webpack_require_40985__("2aeb");
var descriptor = __nested_webpack_require_40985__("4630");
var setToStringTag = __nested_webpack_require_40985__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__nested_webpack_require_40985__("32e9")(IteratorPrototype, __nested_webpack_require_40985__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __nested_webpack_require_41611__) {

// 19.1.2.14 Object.keys(O)
var toObject = __nested_webpack_require_41611__("4bf8");
var $keys = __nested_webpack_require_41611__("0d58");

__nested_webpack_require_41611__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __nested_webpack_require_42153__) {

var def = __nested_webpack_require_42153__("d9f6").f;
var has = __nested_webpack_require_42153__("07e3");
var TAG = __nested_webpack_require_42153__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __nested_webpack_require_42759__) {

// all enumerable object keys, includes symbols
var getKeys = __nested_webpack_require_42759__("c3a1");
var gOPS = __nested_webpack_require_42759__("9aa9");
var pIE = __nested_webpack_require_42759__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4917":
/***/ (function(module, exports, __nested_webpack_require_43403__) {

"use strict";


var anObject = __nested_webpack_require_43403__("cb7c");
var toLength = __nested_webpack_require_43403__("9def");
var advanceStringIndex = __nested_webpack_require_43403__("0390");
var regExpExec = __nested_webpack_require_43403__("5f1b");

// @@match logic
__nested_webpack_require_43403__("214f")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __nested_webpack_require_44881__) {

// 7.1.13 ToObject(argument)
var defined = __nested_webpack_require_44881__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __nested_webpack_require_45252__) {

var store = __nested_webpack_require_45252__("dbdb")('wks');
var uid = __nested_webpack_require_45252__("62a0");
var Symbol = __nested_webpack_require_45252__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __nested_webpack_require_45718__) {

"use strict";


var regexpFlags = __nested_webpack_require_45718__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __nested_webpack_require_47651__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __nested_webpack_require_47651__("07e3");
var toObject = __nested_webpack_require_47651__("241e");
var IE_PROTO = __nested_webpack_require_47651__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __nested_webpack_require_48245__) {

var core = __nested_webpack_require_48245__("8378");
var global = __nested_webpack_require_48245__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __nested_webpack_require_48245__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __nested_webpack_require_48778__) {

var shared = __nested_webpack_require_48778__("dbdb")('keys');
var uid = __nested_webpack_require_48778__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __nested_webpack_require_49223__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __nested_webpack_require_49223__("36c3");
var toLength = __nested_webpack_require_49223__("b447");
var toAbsoluteIndex = __nested_webpack_require_49223__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __nested_webpack_require_50234__) {

var global = __nested_webpack_require_50234__("7726");
var core = __nested_webpack_require_50234__("8378");
var hide = __nested_webpack_require_50234__("32e9");
var redefine = __nested_webpack_require_50234__("2aba");
var ctx = __nested_webpack_require_50234__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __nested_webpack_require_51959__) {

module.exports = __nested_webpack_require_51959__("d8d6");

/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __nested_webpack_require_52088__) {

var isObject = __nested_webpack_require_52088__("d3f4");
var setPrototypeOf = __nested_webpack_require_52088__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __nested_webpack_require_52517__) {

// most Object methods by ES6 should accept primitives
var $export = __nested_webpack_require_52517__("5ca1");
var core = __nested_webpack_require_52517__("8378");
var fails = __nested_webpack_require_52517__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __nested_webpack_require_52995__) {

"use strict";


var classof = __nested_webpack_require_52995__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __nested_webpack_require_53701__) {

var shared = __nested_webpack_require_53701__("5537")('keys');
var uid = __nested_webpack_require_53701__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __nested_webpack_require_53961__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __nested_webpack_require_53961__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __nested_webpack_require_54569__) {

var global = __nested_webpack_require_54569__("e53d");
var core = __nested_webpack_require_54569__("584a");
var ctx = __nested_webpack_require_54569__("d864");
var hide = __nested_webpack_require_54569__("35e8");
var has = __nested_webpack_require_54569__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6718":
/***/ (function(module, exports, __nested_webpack_require_57047__) {

var global = __nested_webpack_require_57047__("e53d");
var core = __nested_webpack_require_57047__("584a");
var LIBRARY = __nested_webpack_require_57047__("b8e3");
var wksExt = __nested_webpack_require_57047__("ccb9");
var defineProperty = __nested_webpack_require_57047__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __nested_webpack_require_57580__) {

module.exports = __nested_webpack_require_57580__("f921");

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __nested_webpack_require_57709__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __nested_webpack_require_57709__("626a");
var defined = __nested_webpack_require_57709__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __nested_webpack_require_58205__) {

__nested_webpack_require_58205__("6718")('asyncIterator');


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __nested_webpack_require_58335__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __nested_webpack_require_58335__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __nested_webpack_require_59078__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __nested_webpack_require_59078__("e6f3");
var hiddenKeys = __nested_webpack_require_59078__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __nested_webpack_require_59612__) {

"use strict";

__nested_webpack_require_59612__("3846");
var anObject = __nested_webpack_require_59612__("cb7c");
var $flags = __nested_webpack_require_59612__("0bfb");
var DESCRIPTORS = __nested_webpack_require_59612__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __nested_webpack_require_59612__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__nested_webpack_require_59612__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __nested_webpack_require_60548__) {

__nested_webpack_require_60548__("c367");
var global = __nested_webpack_require_60548__("e53d");
var hide = __nested_webpack_require_60548__("35e8");
var Iterators = __nested_webpack_require_60548__("481b");
var TO_STRING_TAG = __nested_webpack_require_60548__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __nested_webpack_require_61627__) {

var toInteger = __nested_webpack_require_61627__("3a38");
var defined = __nested_webpack_require_61627__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7514":
/***/ (function(module, exports, __nested_webpack_require_62340__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __nested_webpack_require_62340__("5ca1");
var $find = __nested_webpack_require_62340__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__nested_webpack_require_62340__("9c6c")(KEY);


/***/ }),

/***/ "765d":
/***/ (function(module, exports, __nested_webpack_require_62954__) {

__nested_webpack_require_62954__("6718")('observable');


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __nested_webpack_require_63513__) {

var toInteger = __nested_webpack_require_63513__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __nested_webpack_require_63823__) {

module.exports = !__nested_webpack_require_63823__("8e60") && !__nested_webpack_require_63823__("294c")(function () {
  return Object.defineProperty(__nested_webpack_require_63823__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __nested_webpack_require_64474__) {

"use strict";

var global = __nested_webpack_require_64474__("7726");
var dP = __nested_webpack_require_64474__("86cc");
var DESCRIPTORS = __nested_webpack_require_64474__("9e1e");
var SPECIES = __nested_webpack_require_64474__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __nested_webpack_require_64941__) {

var dP = __nested_webpack_require_64941__("d9f6");
var anObject = __nested_webpack_require_64941__("e4ae");
var getKeys = __nested_webpack_require_64941__("c3a1");

module.exports = __nested_webpack_require_64941__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __nested_webpack_require_65441__) {

var def = __nested_webpack_require_65441__("86cc").f;
var has = __nested_webpack_require_65441__("69a8");
var TAG = __nested_webpack_require_65441__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __nested_webpack_require_65811__) {

var dP = __nested_webpack_require_65811__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __nested_webpack_require_65811__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __nested_webpack_require_66634__) {

var anObject = __nested_webpack_require_66634__("cb7c");
var IE8_DOM_DEFINE = __nested_webpack_require_66634__("c69a");
var toPrimitive = __nested_webpack_require_66634__("6a99");
var dP = Object.defineProperty;

exports.f = __nested_webpack_require_66634__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __nested_webpack_require_67324__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __nested_webpack_require_67324__("d3f4");
var anObject = __nested_webpack_require_67324__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __nested_webpack_require_67324__("9b43")(Function.call, __nested_webpack_require_67324__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __nested_webpack_require_68334__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__nested_webpack_require_68334__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __nested_webpack_require_68610__) {

"use strict";

var create = __nested_webpack_require_68610__("a159");
var descriptor = __nested_webpack_require_68610__("aebd");
var setToStringTag = __nested_webpack_require_68610__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__nested_webpack_require_68610__("35e8")(IteratorPrototype, __nested_webpack_require_68610__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __nested_webpack_require_69236__) {

// 7.2.2 IsArray(argument)
var cof = __nested_webpack_require_69236__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __nested_webpack_require_69477__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __nested_webpack_require_69477__("ce10");
var hiddenKeys = __nested_webpack_require_69477__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __nested_webpack_require_69842__) {

module.exports = __nested_webpack_require_69842__("35e8");


/***/ }),

/***/ "9910":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __nested_webpack_require_70200__) {

// optional / simple context binding
var aFunction = __nested_webpack_require_70200__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __nested_webpack_require_70807__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __nested_webpack_require_70807__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __nested_webpack_require_70807__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __nested_webpack_require_71207__) {

// 7.1.15 ToLength
var toInteger = __nested_webpack_require_71207__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __nested_webpack_require_71509__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__nested_webpack_require_71509__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __nested_webpack_require_71785__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __nested_webpack_require_71785__("e4ae");
var dPs = __nested_webpack_require_71785__("7e90");
var enumBugKeys = __nested_webpack_require_71785__("1691");
var IE_PROTO = __nested_webpack_require_71785__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __nested_webpack_require_71785__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __nested_webpack_require_71785__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __nested_webpack_require_73396__) {

"use strict";


var anObject = __nested_webpack_require_73396__("cb7c");
var toObject = __nested_webpack_require_73396__("4bf8");
var toLength = __nested_webpack_require_73396__("9def");
var toInteger = __nested_webpack_require_73396__("4588");
var advanceStringIndex = __nested_webpack_require_73396__("0390");
var regExpExec = __nested_webpack_require_73396__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__nested_webpack_require_73396__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __nested_webpack_require_78142__) {

var $export = __nested_webpack_require_78142__("5ca1");
var defined = __nested_webpack_require_78142__("be13");
var fails = __nested_webpack_require_78142__("79e5");
var spaces = __nested_webpack_require_78142__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __nested_webpack_require_79150__) {

// 7.2.8 IsRegExp(argument)
var isObject = __nested_webpack_require_79150__("d3f4");
var cof = __nested_webpack_require_79150__("2d95");
var MATCH = __nested_webpack_require_79150__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __nested_webpack_require_79547__) {

var $iterators = __nested_webpack_require_79547__("cadf");
var getKeys = __nested_webpack_require_79547__("0d58");
var redefine = __nested_webpack_require_79547__("2aba");
var global = __nested_webpack_require_79547__("7726");
var hide = __nested_webpack_require_79547__("32e9");
var Iterators = __nested_webpack_require_79547__("84f2");
var wks = __nested_webpack_require_79547__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __nested_webpack_require_81710__) {

"use strict";

var regexpExec = __nested_webpack_require_81710__("520a");
__nested_webpack_require_81710__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b447":
/***/ (function(module, exports, __nested_webpack_require_81982__) {

// 7.1.15 ToLength
var toInteger = __nested_webpack_require_81982__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __nested_webpack_require_82595__) {

var pIE = __nested_webpack_require_82595__("355d");
var createDesc = __nested_webpack_require_82595__("aebd");
var toIObject = __nested_webpack_require_82595__("36c3");
var toPrimitive = __nested_webpack_require_82595__("1bc3");
var has = __nested_webpack_require_82595__("07e3");
var IE8_DOM_DEFINE = __nested_webpack_require_82595__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __nested_webpack_require_82595__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c366":
/***/ (function(module, exports, __nested_webpack_require_83337__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __nested_webpack_require_83337__("6821");
var toLength = __nested_webpack_require_83337__("9def");
var toAbsoluteIndex = __nested_webpack_require_83337__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __nested_webpack_require_84348__) {

"use strict";

var addToUnscopables = __nested_webpack_require_84348__("8436");
var step = __nested_webpack_require_84348__("50ed");
var Iterators = __nested_webpack_require_84348__("481b");
var toIObject = __nested_webpack_require_84348__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __nested_webpack_require_84348__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __nested_webpack_require_85557__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __nested_webpack_require_85557__("e6f3");
var enumBugKeys = __nested_webpack_require_85557__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __nested_webpack_require_85856__) {

"use strict";

var global = __nested_webpack_require_85856__("7726");
var has = __nested_webpack_require_85856__("69a8");
var cof = __nested_webpack_require_85856__("2d95");
var inheritIfRequired = __nested_webpack_require_85856__("5dbc");
var toPrimitive = __nested_webpack_require_85856__("6a99");
var fails = __nested_webpack_require_85856__("79e5");
var gOPN = __nested_webpack_require_85856__("9093").f;
var gOPD = __nested_webpack_require_85856__("11e9").f;
var dP = __nested_webpack_require_85856__("86cc").f;
var $trim = __nested_webpack_require_85856__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__nested_webpack_require_85856__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __nested_webpack_require_85856__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __nested_webpack_require_85856__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __nested_webpack_require_88781__) {

module.exports = !__nested_webpack_require_88781__("9e1e") && !__nested_webpack_require_88781__("79e5")(function () {
  return Object.defineProperty(__nested_webpack_require_88781__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __nested_webpack_require_89302__) {

"use strict";

var addToUnscopables = __nested_webpack_require_89302__("9c6c");
var step = __nested_webpack_require_89302__("d53b");
var Iterators = __nested_webpack_require_89302__("84f2");
var toIObject = __nested_webpack_require_89302__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __nested_webpack_require_89302__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __nested_webpack_require_90511__) {

var isObject = __nested_webpack_require_90511__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __nested_webpack_require_90753__) {

exports.f = __nested_webpack_require_90753__("5168");


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __nested_webpack_require_90878__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __nested_webpack_require_90878__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __nested_webpack_require_91173__) {

var has = __nested_webpack_require_91173__("69a8");
var toIObject = __nested_webpack_require_91173__("6821");
var arrayIndexOf = __nested_webpack_require_91173__("c366")(false);
var IE_PROTO = __nested_webpack_require_91173__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __nested_webpack_require_92131__) {

// optional / simple context binding
var aFunction = __nested_webpack_require_92131__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8d6":
/***/ (function(module, exports, __nested_webpack_require_92738__) {

__nested_webpack_require_92738__("1654");
__nested_webpack_require_92738__("6c1c");
module.exports = __nested_webpack_require_92738__("ccb9").f('iterator');


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __nested_webpack_require_93128__) {

var anObject = __nested_webpack_require_93128__("e4ae");
var IE8_DOM_DEFINE = __nested_webpack_require_93128__("794b");
var toPrimitive = __nested_webpack_require_93128__("1bc3");
var dP = Object.defineProperty;

exports.f = __nested_webpack_require_93128__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __nested_webpack_require_93818__) {

var core = __nested_webpack_require_93818__("584a");
var global = __nested_webpack_require_93818__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __nested_webpack_require_93818__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __nested_webpack_require_94574__) {

var isObject = __nested_webpack_require_94574__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __nested_webpack_require_95248__) {

var has = __nested_webpack_require_95248__("07e3");
var toIObject = __nested_webpack_require_95248__("36c3");
var arrayIndexOf = __nested_webpack_require_95248__("5b4e")(false);
var IE_PROTO = __nested_webpack_require_95248__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e853":
/***/ (function(module, exports, __nested_webpack_require_95884__) {

var isObject = __nested_webpack_require_95884__("d3f4");
var isArray = __nested_webpack_require_95884__("1169");
var SPECIES = __nested_webpack_require_95884__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __nested_webpack_require_96462__) {

var META = __nested_webpack_require_96462__("62a0")('meta');
var isObject = __nested_webpack_require_96462__("f772");
var has = __nested_webpack_require_96462__("07e3");
var setDesc = __nested_webpack_require_96462__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__nested_webpack_require_96462__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f921":
/***/ (function(module, exports, __nested_webpack_require_99575__) {

__nested_webpack_require_99575__("014b");
__nested_webpack_require_99575__("c207");
__nested_webpack_require_99575__("69d3");
__nested_webpack_require_99575__("765d");
module.exports = __nested_webpack_require_99575__("584a").Symbol;


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __nested_webpack_require_99828__) {

module.exports = __nested_webpack_require_99828__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __nested_webpack_require_100006__) {

var document = __nested_webpack_require_100006__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fae3":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_100210__) {

"use strict";
__nested_webpack_require_100210__.r(__nested_webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __nested_webpack_require_100210__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __nested_webpack_require_100210__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/assets/lib/lib.scss
var lib = __nested_webpack_require_100210__("9910");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"57152b5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/BasicSelect.vue?vue&type=template&id=79f30601&
var BasicSelectvue_type_template_id_79f30601_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui fluid search selection dropdown",class:{ 'active visible':_vm.showMenu, 'error': _vm.isError, 'disabled': _vm.isDisabled },on:{"click":_vm.openOptions,"focus":_vm.openOptions}},[_c('i',{staticClass:"dropdown icon"}),_c('input',{ref:"input",staticClass:"search",attrs:{"autocomplete":"off","tabindex":"0","id":_vm.id,"name":_vm.name},domProps:{"value":_vm.searchText},on:{"input":function($event){_vm.searchText = $event.target.value},"focus":function($event){$event.preventDefault();return _vm.openOptions($event)},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.closeOptions($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.enterItem($event)}],"blur":_vm.blurInput,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.prevItem($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.nextItem($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete","Del"])){ return null; }return _vm.deleteTextOrItem($event)}]}}),_c('div',{staticClass:"text",class:_vm.textClass,attrs:{"data-vss-custom-attr":_vm.searchTextCustomAttr}},[_vm._v(_vm._s(_vm.inputText)+"\n  ")]),_c('div',{ref:"menu",staticClass:"menu",class:_vm.menuClass,style:(_vm.menuStyle),attrs:{"tabindex":"-1"},on:{"mousedown":function($event){$event.preventDefault();}}},_vm._l((_vm.filteredOptions),function(option,idx){return _c('div',{key:idx,staticClass:"item",class:{ 'selected': option.selected || _vm.pointer === idx },attrs:{"data-vss-custom-attr":_vm.customAttrs[idx] ? _vm.customAttrs[idx] : ''},on:{"click":function($event){$event.stopPropagation();return _vm.selectItem(option)},"mousedown":_vm.mousedownItem,"mouseenter":function($event){return _vm.pointerSet(idx)}}},[_vm._v("\n      "+_vm._s(option.text)+"\n    ")])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/BasicSelect.vue?vue&type=template&id=79f30601&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __nested_webpack_require_100210__("20d6");

// CONCATENATED MODULE: ./src/lib/common.js
/* harmony default export */ var common = ({
  // cursor on input
  openOptions: function openOptions(self) {
    self.$refs.input.focus();
    self.showMenu = true;
    self.mousedownState = false;
  },
  blurInput: function blurInput(self) {
    if (!self.mousedownState) {
      self.searchText = '';
      self.closeOptions();
    }
  },
  closeOptions: function closeOptions(self) {
    self.showMenu = false;
  },

  /**
   * up arrow key
   * 上の移動するときには新しいscroll位置を毎回セットする
   * Always scroll move, when "up arrow key" entered
   */
  prevItem: function prevItem(self) {
    // set pointer
    var prevIndex = self.pointer - 1;
    var prevIndexScrollTop = self.$el.offsetHeight * prevIndex;

    if (prevIndex >= 0) {
      self.pointer = prevIndex;
    } // move scroll


    self.$refs.menu.scrollTop = prevIndexScrollTop;
  },

  /**
   *
   * down arrow key
   * ページsizeを計算してずれたらmove
   * calculate page size. If different between itemPage and currentPage move scroll
   */
  nextItem: function nextItem(self) {
    // set pointer
    var nextIndex = self.pointer + 1;
    var nextIndexScrollTop = self.$el.offsetHeight * nextIndex;

    if (nextIndex <= self.filteredOptions.length - 1) {
      self.pointer = nextIndex;
    } // move scroll
    // const totalHeight = self.filteredOptions.length * self.$el.offsetHeight
    // const totalPage = Math.ceil(totalHeight / pageSizeHeight)


    var currentMenuHeight = self.$refs.menu.offsetHeight;
    var currentPage = Math.ceil((self.$refs.menu.scrollTop + self.$el.offsetHeight) / currentMenuHeight);
    var itemPage = Math.ceil(nextIndexScrollTop / currentMenuHeight);

    if (currentPage !== itemPage) {
      self.$refs.menu.scrollTop = (itemPage - 1) * self.$refs.menu.offsetHeight;
    }
  },
  // down enter key
  enterItem: function enterItem(self) {
    var currentItem = self.filteredOptions[self.pointer];

    if (currentItem) {
      self.selectItem(currentItem);
    }
  },
  // mouse enter event on item
  pointerSet: function pointerSet(self, index) {
    self.pointer = index;
  },
  pointerAdjust: function pointerAdjust(self) {
    if (self.pointer >= self.filteredOptions.length - 1) {
      self.pointer = self.filteredOptions.length ? self.filteredOptions.length - 1 : 0;
    }
  },
  mousedownItem: function mousedownItem(self) {
    self.mousedownState = true;
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __nested_webpack_require_100210__("4917");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __nested_webpack_require_100210__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __nested_webpack_require_100210__("3b2b");

// CONCATENATED MODULE: ./src/lib/utils.js



/**
 * for RegExp escape
 *
 * @param str
 */
function escapedRegExp(str) {
  return new RegExp(str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
}
// CONCATENATED MODULE: ./src/lib/mixins/commonMixin.js


/* mixin for all */

/* harmony default export */ var commonMixin = ({
  props: {
    id: {
      default: null
    },
    name: {
      type: String,
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
    },
    customAttr: {
      type: Function,
      default: function _default() {
        return '';
      }
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    filterPredicate: {
      type: Function,
      default: function _default(text, inputText) {
        return text.match(escapedRegExp(inputText));
      }
    }
  }
});
// CONCATENATED MODULE: ./src/lib/mixins/baseMixin.js
/* mixin for base component */
/* harmony default export */ var baseMixin = ({
  watch: {
    filteredOptions: function filteredOptions() {
      this.pointerAdjust();
    },
    searchText: function searchText() {
      this.$emit('searchchange', this.searchText);
    }
  }
});
// CONCATENATED MODULE: ./src/lib/mixins/optionAwareMixin.js
/* harmony default export */ var optionAwareMixin = ({
  props: {
    customAttr: {
      type: Function,
      default: function _default() {
        return '';
      }
    },
    options: {
      type: Array
    }
  }
});
// CONCATENATED MODULE: ./src/lib/mixins/index.js




// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/BasicSelect.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var BasicSelectvue_type_script_lang_js_ = ({
  name: 'BasicSelect',
  mixins: [baseMixin, commonMixin, optionAwareMixin],
  props: {
    selectedOption: {
      type: Object,
      default: function _default() {
        return {
          value: '',
          text: ''
        };
      }
    }
  },
  data: function data() {
    return {
      showMenu: false,
      searchText: '',
      mousedownState: false,
      // mousedown on option menu
      pointer: -1
    };
  },
  watch: {
    selectedOption: function selectedOption(newValue) {
      if (newValue && newValue.value) {
        this.pointer = this.filteredOptions.findIndex(function (option) {
          return option.value === newValue.value;
        });
      } else {
        this.pointer = -1;
      }
    }
  },
  computed: {
    searchTextCustomAttr: function searchTextCustomAttr() {
      if (this.selectedOption && this.selectedOption.value) {
        return this.customAttr(this.selectedOption);
      }

      return '';
    },
    inputText: function inputText() {
      if (this.searchText) {
        return '';
      } else {
        var text = this.placeholder;

        if (this.selectedOption.text) {
          text = this.selectedOption.text;
        }

        return text;
      }
    },
    customAttrs: function customAttrs() {
      var _this = this;

      try {
        if (Array.isArray(this.options)) {
          return this.options.map(function (o) {
            return _this.customAttr(o);
          });
        }
      } catch (e) {// if there is an error, just return an empty array
      }

      return [];
    },
    textClass: function textClass() {
      if (!this.selectedOption.text && this.placeholder) {
        return 'default';
      } else {
        return '';
      }
    },
    menuClass: function menuClass() {
      return {
        visible: this.showMenu,
        hidden: !this.showMenu
      };
    },
    menuStyle: function menuStyle() {
      return {
        display: this.showMenu ? 'block' : 'none'
      };
    },
    filteredOptions: function filteredOptions() {
      var _this2 = this;

      if (this.searchText) {
        return this.options.filter(function (option) {
          try {
            return _this2.filterPredicate(option.text, _this2.searchText);
          } catch (e) {
            return true;
          }
        });
      } else {
        return this.options;
      }
    }
  },
  methods: {
    deleteTextOrItem: function deleteTextOrItem() {
      if (!this.searchText && this.selectedOption) {
        this.selectItem({});
        this.openOptions();
      }
    },
    openOptions: function openOptions() {
      common.openOptions(this);
    },
    blurInput: function blurInput() {
      common.blurInput(this);
    },
    closeOptions: function closeOptions() {
      common.closeOptions(this);
    },
    prevItem: function prevItem() {
      common.prevItem(this);
    },
    nextItem: function nextItem() {
      common.nextItem(this);
    },
    enterItem: function enterItem() {
      common.enterItem(this);
    },
    pointerSet: function pointerSet(index) {
      common.pointerSet(this, index);
    },
    pointerAdjust: function pointerAdjust() {
      common.pointerAdjust(this);
    },
    mousedownItem: function mousedownItem() {
      common.mousedownItem(this);
    },
    selectItem: function selectItem(option) {
      this.searchText = ''; // reset text when select item

      this.closeOptions();
      this.$emit('select', option);

      if (option.value === option.text) {
        this.searchText = option.value;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/lib/BasicSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_BasicSelectvue_type_script_lang_js_ = (BasicSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/lib/BasicSelect.vue





/* normalize component */

var component = normalizeComponent(
  lib_BasicSelectvue_type_script_lang_js_,
  BasicSelectvue_type_template_id_79f30601_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicSelect = (component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __nested_webpack_require_100210__("7514");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __nested_webpack_require_100210__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __nested_webpack_require_100210__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __nested_webpack_require_100210__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __nested_webpack_require_100210__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ListSelect.vue?vue&type=script&lang=js&






/* wrap basic component */


/* harmony default export */ var ListSelectvue_type_script_lang_js_ = ({
  name: 'ListSelect',
  mixins: [commonMixin],
  render: function render(createElement) {
    var _this = this;

    return createElement(BasicSelect, {
      props: {
        id: this.id,
        name: this.name,
        options: this.options,
        selectedOption: this.item,
        isError: this.isError,
        isDisabled: this.isDisabled,
        placeholder: this.placeholder,
        filterPredicate: this.filterPredicate
      },
      on: {
        select: this.onSelect,
        searchchange: function searchchange(searchText) {
          return _this.$emit('searchchange', searchText);
        }
      }
    });
  },
  props: {
    list: {
      type: Array
    },
    optionValue: {
      type: String
    },
    optionText: {
      type: String
    },
    customText: {
      type: Function
    },
    selectedItem: {
      type: Object
    }
  },
  computed: {
    options: function options() {
      var _this2 = this;

      return this.list.map(function (e, i) {
        return {
          value: e[_this2.optionValue],
          text: _this2.buildText(e)
        };
      });
    },
    item: function item() {
      if (this.selectedItem) {
        return {
          value: this.selectedItem[this.optionValue],
          text: this.buildText(this.selectedItem)
        };
      } else {
        return {
          value: '',
          text: ''
        };
      }
    }
  },
  methods: {
    buildText: function buildText(e) {
      if (e[this.optionValue] !== undefined) {
        if (this.customText) {
          return this.customText(e);
        } else {
          return e[this.optionText];
        }
      } else {
        return '';
      }
    },
    onSelect: function onSelect(option) {
      var _this3 = this;

      if (Object.keys(option).length === 0 && option.constructor === Object) {
        this.$emit('select', option);
      } else {
        var item = this.list.find(function (e, i) {
          return e[_this3.optionValue] === option.value;
        });
        this.$emit('select', item);
      }
    }
  },
  components: {
    BasicSelect: BasicSelect
  }
});
// CONCATENATED MODULE: ./src/lib/ListSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_ListSelectvue_type_script_lang_js_ = (ListSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib/ListSelect.vue
var ListSelect_render, ListSelect_staticRenderFns




/* normalize component */

var ListSelect_component = normalizeComponent(
  lib_ListSelectvue_type_script_lang_js_,
  ListSelect_render,
  ListSelect_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ListSelect = (ListSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"57152b5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/MultiSelect.vue?vue&type=template&id=49068e36&
var MultiSelectvue_type_template_id_49068e36_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui fluid search dropdown selection multiple",class:{ 'active visible':_vm.showMenu, 'error': _vm.isError, 'disabled': _vm.isDisabled },on:{"click":_vm.openOptions,"focus":_vm.openOptions}},[_c('i',{staticClass:"dropdown icon"}),(!_vm.hideSelectedOptions)?_vm._l((_vm.selectedOptions),function(option,idx){return _c('a',{key:idx,staticClass:"ui label transition visible",staticStyle:{"display":"inline-block !important"},attrs:{"data-vss-custom-attr":_vm.customAttr(option)}},[_vm._v("\n      "+_vm._s(option.text)),_c('i',{staticClass:"delete icon",on:{"click":function($event){return _vm.deleteItem(option)}}})])}):_vm._e(),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchText),expression:"searchText"}],ref:"input",staticClass:"search",style:(_vm.inputWidth),attrs:{"autocomplete":"off","tabindex":"0","id":_vm.id,"name":_vm.name},domProps:{"value":(_vm.searchText)},on:{"focus":function($event){$event.preventDefault();return _vm.openOptions($event)},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.closeOptions($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.enterItem($event)}],"blur":_vm.blurInput,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.prevItem($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.nextItem($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete","Del"])){ return null; }return _vm.deleteTextOrLastItem($event)}],"input":function($event){if($event.target.composing){ return; }_vm.searchText=$event.target.value}}}),_c('div',{staticClass:"text",class:_vm.textClass},[_vm._v(_vm._s(_vm.inputText)+"\n  ")]),_c('div',{ref:"menu",staticClass:"menu",class:_vm.menuClass,style:(_vm.menuStyle),attrs:{"tabindex":"-1"},on:{"mousedown":function($event){$event.preventDefault();}}},[_vm._l((_vm.filteredOptions),function(option,idx){return [_c('div',{key:idx,staticClass:"item",class:{ 'selected': option.selected || _vm.pointer === idx },attrs:{"data-vss-custom-attr":_vm.customAttr(option)},on:{"click":function($event){$event.stopPropagation();return _vm.selectItem(option)},"mousedown":_vm.mousedownItem,"mouseenter":function($event){return _vm.pointerSet(idx)}}},[_vm._v("\n        "+_vm._s(option.text)+"\n      ")])]})],2)],2)}
var MultiSelectvue_type_template_id_49068e36_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/MultiSelect.vue?vue&type=template&id=49068e36&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __nested_webpack_require_100210__("6b54");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/MultiSelect.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var MultiSelectvue_type_script_lang_js_ = ({
  name: 'MultiSelect',
  mixins: [baseMixin, commonMixin, optionAwareMixin],
  props: {
    selectedOptions: {
      type: Array
    },
    cleanSearch: {
      type: Boolean,
      default: true
    },
    hideSelectedOptions: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      showMenu: false,
      searchText: '',
      mousedownState: false,
      // mousedown on option menu
      pointer: -1
    };
  },
  watch: {
    selectedOptions: function selectedOptions() {
      this.pointer = -1;
    }
  },
  computed: {
    inputText: function inputText() {
      if (this.searchText) {
        return '';
      } else {
        return this.placeholder;
      }
    },
    textClass: function textClass() {
      if (this.placeholder) {
        return 'default';
      } else {
        return '';
      }
    },
    inputWidth: function inputWidth() {
      return {
        width: (this.searchText.length + 1) * 8 + 20 + 'px'
      };
    },
    menuClass: function menuClass() {
      return {
        visible: this.showMenu,
        hidden: !this.showMenu
      };
    },
    menuStyle: function menuStyle() {
      return {
        display: this.showMenu ? 'block' : 'none'
      };
    },
    nonSelectOptions: function nonSelectOptions() {
      var _this = this;

      return this.options.filter(function (el) {
        return _this.selectedOptions.findIndex(function (o) {
          return o.value === el.value;
        }) === -1;
      });
    },
    filteredOptions: function filteredOptions() {
      var _this2 = this;

      if (this.searchText) {
        return this.nonSelectOptions.filter(function (option) {
          try {
            if (_this2.cleanSearch) {
              return _this2.filterPredicate(_this2.accentsTidy(option.text), _this2.searchText);
            } else {
              return _this2.filterPredicate(option.text, _this2.searchText);
            }
          } catch (e) {
            return true;
          }
        });
      } else {
        return this.nonSelectOptions;
      }
    }
  },
  methods: {
    deleteTextOrLastItem: function deleteTextOrLastItem() {
      if (!this.searchText && this.selectedOptions.length > 0) {
        this.deleteItem(this.selectedOptions[this.selectedOptions.length - 1]);
      }
    },
    openOptions: function openOptions() {
      common.openOptions(this);
    },
    blurInput: function blurInput() {
      common.blurInput(this);
    },
    closeOptions: function closeOptions() {
      common.closeOptions(this);
    },
    prevItem: function prevItem() {
      common.prevItem(this);
      this.closeOptions();
      this.openOptions();
    },
    nextItem: function nextItem() {
      common.nextItem(this);
      this.closeOptions();
      this.openOptions();
    },
    enterItem: function enterItem() {
      common.enterItem(this);
    },
    pointerSet: function pointerSet(index) {
      common.pointerSet(this, index);
    },
    pointerAdjust: function pointerAdjust() {
      common.pointerAdjust(this);
    },
    mousedownItem: function mousedownItem() {
      common.mousedownItem(this);
    },
    selectItem: function selectItem(option) {
      var tempSelectedOptions = this.selectedOptions.concat(option);
      var selectedOptions = tempSelectedOptions.filter(function (el, idx) {
        return tempSelectedOptions.indexOf(el) === idx;
      });
      this.closeOptions();
      this.searchText = '';
      this.$emit('select', selectedOptions, option, 'insert');
    },
    deleteItem: function deleteItem(option) {
      var selectedOptions = this.selectedOptions.filter(function (o) {
        return o.value !== option.value;
      });
      this.$emit('select', selectedOptions, option, 'delete');
    },
    accentsTidy: function accentsTidy(s) {
      var r = s.toString().toLowerCase();
      r = r.replace(new RegExp('[àáâãäå]', 'g'), 'a');
      r = r.replace(new RegExp('æ', 'g'), 'ae');
      r = r.replace(new RegExp('ç', 'g'), 'c');
      r = r.replace(new RegExp('[èéêë]', 'g'), 'e');
      r = r.replace(new RegExp('[ìíîï]', 'g'), 'i');
      r = r.replace(new RegExp('ñ', 'g'), 'n');
      r = r.replace(new RegExp('[òóôõö]', 'g'), 'o');
      r = r.replace(new RegExp('œ', 'g'), 'oe');
      r = r.replace(new RegExp('[ùúûü]', 'g'), 'u');
      r = r.replace(new RegExp('[ýÿ]', 'g'), 'y');
      return r;
    }
  }
});
// CONCATENATED MODULE: ./src/lib/MultiSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_MultiSelectvue_type_script_lang_js_ = (MultiSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib/MultiSelect.vue





/* normalize component */

var MultiSelect_component = normalizeComponent(
  lib_MultiSelectvue_type_script_lang_js_,
  MultiSelectvue_type_template_id_49068e36_render,
  MultiSelectvue_type_template_id_49068e36_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MultiSelect = (MultiSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/MultiListSelect.vue?vue&type=script&lang=js&







/* harmony default export */ var MultiListSelectvue_type_script_lang_js_ = ({
  name: 'MultiListSelect',
  mixins: [commonMixin],
  render: function render(createElement) {
    var _this = this;

    return createElement(MultiSelect, {
      props: {
        id: this.id,
        name: this.name,
        options: this.options,
        selectedOptions: this.items,
        isError: this.isError,
        isDisabled: this.isDisabled,
        placeholder: this.placeholder,
        filterPredicate: this.filterPredicate
      },
      on: {
        select: this.onSelect,
        searchchange: function searchchange(searchText) {
          return _this.$emit('searchchange', searchText);
        }
      }
    });
  },
  props: {
    list: {
      type: Array
    },
    optionValue: {
      type: String
    },
    optionText: {
      type: String
    },
    customText: {
      type: Function
    },
    selectedItems: {
      type: Array
    }
  },
  computed: {
    options: function options() {
      var _this2 = this;

      return this.list.map(function (e) {
        return {
          value: e[_this2.optionValue],
          text: _this2.buildText(e)
        };
      });
    },
    items: function items() {
      var _this3 = this;

      return this.selectedItems.map(function (e) {
        return {
          value: e[_this3.optionValue],
          text: _this3.buildText(e)
        };
      });
    }
  },
  methods: {
    buildText: function buildText(e) {
      if (e[this.optionValue] !== undefined) {
        if (this.customText) {
          return this.customText(e);
        } else {
          return e[this.optionText];
        }
      } else {
        return '';
      }
    },
    onSelect: function onSelect(options, option) {
      var _this4 = this;

      if (Object.keys(option).length === 0 && option.constructor === Object) {
        this.$emit('select', options, option);
      } else {
        var items = this.list.filter(function (e, i) {
          return options.find(function (o, i) {
            return e[_this4.optionValue] === o.value;
          });
        });
        var item = this.list.find(function (e) {
          return e[_this4.optionValue] === option.value;
        });
        this.$emit('select', items, item);
      }
    }
  },
  components: {
    MultiSelect: MultiSelect
  }
});
// CONCATENATED MODULE: ./src/lib/MultiListSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_MultiListSelectvue_type_script_lang_js_ = (MultiListSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib/MultiListSelect.vue
var MultiListSelect_render, MultiListSelect_staticRenderFns




/* normalize component */

var MultiListSelect_component = normalizeComponent(
  lib_MultiListSelectvue_type_script_lang_js_,
  MultiListSelect_render,
  MultiListSelect_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MultiListSelect = (MultiListSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"57152b5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ModelSelect.vue?vue&type=template&id=015f8f89&
var ModelSelectvue_type_template_id_015f8f89_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui fluid search selection dropdown",class:{ 'active visible':_vm.showMenu, 'error': _vm.isError, 'disabled': _vm.isDisabled },on:{"click":_vm.openOptions,"focus":_vm.openOptions}},[_c('i',{staticClass:"dropdown icon"}),_c('input',{ref:"input",staticClass:"search",attrs:{"autocomplete":"off","tabindex":"0","id":_vm.id,"name":_vm.name},domProps:{"value":_vm.searchText},on:{"input":function($event){_vm.searchText = $event.target.value},"focus":function($event){$event.preventDefault();return _vm.openOptions($event)},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.closeOptions($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.enterItem($event)}],"blur":_vm.blurInput,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.prevItem($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.nextItem($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"delete",[8,46],$event.key,["Backspace","Delete","Del"])){ return null; }return _vm.deleteTextOrItem($event)}]}}),_c('div',{staticClass:"text",class:_vm.textClass,attrs:{"data-vss-custom-attr":_vm.searchTextCustomAttr}},[_vm._v(_vm._s(_vm.inputText)+"\n  ")]),_c('div',{ref:"menu",staticClass:"menu",class:_vm.menuClass,style:(_vm.menuStyle),attrs:{"tabindex":"-1"},on:{"mousedown":function($event){$event.preventDefault();}}},_vm._l((_vm.filteredOptions),function(option,idx){return _c('div',{key:idx,staticClass:"item",class:{ 'selected': option.selected || _vm.pointer === idx },attrs:{"data-vss-custom-attr":_vm.customAttrs[idx] ? _vm.customAttrs[idx] : ''},on:{"click":function($event){$event.stopPropagation();return _vm.selectItem(option)},"mousedown":_vm.mousedownItem,"mouseenter":function($event){return _vm.pointerSet(idx)}}},[_vm._v("\n      "+_vm._s(option.text)+"\n    ")])}),0)])}
var ModelSelectvue_type_template_id_015f8f89_staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/ModelSelect.vue?vue&type=template&id=015f8f89&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __nested_webpack_require_100210__("5d58");
var iterator_default = /*#__PURE__*/__nested_webpack_require_100210__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __nested_webpack_require_100210__("67bb");
var symbol_default = /*#__PURE__*/__nested_webpack_require_100210__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __nested_webpack_require_100210__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ModelSelect.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ModelSelectvue_type_script_lang_js_ = ({
  name: 'ModelSelect',
  mixins: [baseMixin, commonMixin, optionAwareMixin],
  props: {
    value: {
      type: [String, Number, Object, Boolean]
    }
  },
  data: function data() {
    return {
      showMenu: false,
      searchText: '',
      mousedownState: false,
      // mousedown on option menu
      pointer: -1
    };
  },
  watch: {
    value: function value(newValue) {
      var _this = this;

      this.pointer = this.filteredOptions.findIndex(function (option) {
        return option.value === _this.optionValue(newValue);
      });
    }
  },
  computed: {
    searchTextCustomAttr: function searchTextCustomAttr() {
      if (this.selectedOption && this.selectedOption.value) {
        return this.customAttr(this.selectedOption);
      }

      return '';
    },
    inputText: function inputText() {
      if (this.searchText) {
        return '';
      } else {
        var text = this.placeholder;

        if (this.selectedOption) {
          text = this.selectedOption.text;
        }

        return text;
      }
    },
    customAttrs: function customAttrs() {
      var _this2 = this;

      try {
        if (Array.isArray(this.options)) {
          return this.options.map(function (o) {
            return _this2.customAttr(o);
          });
        }
      } catch (e) {// if there is an error, just return an empty array
      }

      return [];
    },
    textClass: function textClass() {
      if (!this.selectedOption && this.placeholder) {
        return 'default';
      } else {
        return '';
      }
    },
    menuClass: function menuClass() {
      return {
        visible: this.showMenu,
        hidden: !this.showMenu
      };
    },
    menuStyle: function menuStyle() {
      return {
        display: this.showMenu ? 'block' : 'none'
      };
    },
    filteredOptions: function filteredOptions() {
      var _this3 = this;

      if (this.searchText) {
        return this.options.filter(function (option) {
          try {
            return _this3.filterPredicate(option.text, _this3.searchText);
          } catch (e) {
            return true;
          }
        });
      } else {
        return this.options;
      }
    },
    selectedOption: function selectedOption() {
      var _this4 = this;

      return this.options.find(function (option) {
        return option.value === _this4.optionValue(_this4.value);
      });
    }
  },
  methods: {
    deleteTextOrItem: function deleteTextOrItem() {
      if (!this.searchText && this.value) {
        this.selectItem({});
        this.openOptions();
      }
    },
    openOptions: function openOptions() {
      common.openOptions(this);
    },
    blurInput: function blurInput() {
      common.blurInput(this);
    },
    closeOptions: function closeOptions() {
      common.closeOptions(this);
    },
    prevItem: function prevItem() {
      common.prevItem(this);
    },
    nextItem: function nextItem() {
      common.nextItem(this);
    },
    enterItem: function enterItem() {
      common.enterItem(this);
    },
    pointerSet: function pointerSet(index) {
      common.pointerSet(this, index);
    },
    pointerAdjust: function pointerAdjust() {
      common.pointerAdjust(this);
    },
    mousedownItem: function mousedownItem() {
      common.mousedownItem(this);
    },
    selectItem: function selectItem(option) {
      this.searchText = '';
      this.closeOptions();

      if (typeof_typeof(this.value) === 'object' && this.value) {
        this.$emit('input', option);
      } else {
        this.$emit('input', option.value);

        if (option.value === option.text) {
          this.searchText = option.value;
        }
      }
    },
    optionValue: function optionValue(value) {
      if (typeof_typeof(value) === 'object' && value !== null) {
        return value.value;
      } else {
        return value;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/lib/ModelSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_ModelSelectvue_type_script_lang_js_ = (ModelSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib/ModelSelect.vue





/* normalize component */

var ModelSelect_component = normalizeComponent(
  lib_ModelSelectvue_type_script_lang_js_,
  ModelSelectvue_type_template_id_015f8f89_render,
  ModelSelectvue_type_template_id_015f8f89_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModelSelect = (ModelSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/ModelListSelect.vue?vue&type=script&lang=js&








/* wrap basic component */


/* harmony default export */ var ModelListSelectvue_type_script_lang_js_ = ({
  name: 'ModelListSelect',
  mixins: [commonMixin],
  render: function render(createElement) {
    var _this = this;

    return createElement(ModelSelect, {
      props: {
        id: this.id,
        name: this.name,
        options: this.options,
        value: this.innerValue,
        isError: this.isError,
        isDisabled: this.isDisabled,
        placeholder: this.placeholder,
        filterPredicate: this.filterPredicate
      },
      on: {
        input: this.onInput,
        searchchange: function searchchange(searchText) {
          return _this.$emit('searchchange', searchText);
        }
      }
    });
  },
  props: {
    list: {
      type: Array
    },
    optionValue: {
      type: String
    },
    optionText: {
      type: String
    },
    customText: {
      type: Function
    },

    /* null also object */
    value: {
      type: [String, Number, Object, Boolean]
    }
  },
  computed: {
    options: function options() {
      var _this2 = this;

      return this.list.map(function (e) {
        return {
          value: e[_this2.optionValue],
          text: _this2.buildText(e)
        };
      });
    },
    innerValue: function innerValue() {
      if (!this.value) {
        // If js Falsy, type can not judge type. Send value to child directly
        return this.value;
      } else if (typeof_typeof(this.value) === 'object') {
        if (this.value) {
          return {
            value: this.value[this.optionValue],
            text: this.buildText(this.value)
          };
        } else {
          return {
            value: '',
            text: ''
          };
        }
      } else {
        return this.value;
      }
    }
  },
  methods: {
    buildText: function buildText(e) {
      if (e[this.optionValue] !== undefined) {
        if (this.customText) {
          return this.customText(e);
        } else {
          return e[this.optionText];
        }
      } else {
        return '';
      }
    },
    onInput: function onInput(option) {
      var _this3 = this;

      if (option === undefined) {
        return this.$emit('input', '');
      }

      if (Object.keys(option).length === 0 && option.constructor === Object) {
        this.$emit('input', option);
      } else if (typeof_typeof(option) === 'object') {
        var item = this.list.find(function (e) {
          return e[_this3.optionValue] === option.value;
        });
        this.$emit('input', item);
      } else {
        this.$emit('input', option);
      }
    }
  },
  components: {
    ModelSelect: ModelSelect
  }
});
// CONCATENATED MODULE: ./src/lib/ModelListSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var lib_ModelListSelectvue_type_script_lang_js_ = (ModelListSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/lib/ModelListSelect.vue
var ModelListSelect_render, ModelListSelect_staticRenderFns




/* normalize component */

var ModelListSelect_component = normalizeComponent(
  lib_ModelListSelectvue_type_script_lang_js_,
  ModelListSelect_render,
  ModelListSelect_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModelListSelect = (ModelListSelect_component.exports);
// CONCATENATED MODULE: ./src/lib/index.js








// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport BasicSelect */__nested_webpack_require_100210__.d(__nested_webpack_exports__, "BasicSelect", function() { return BasicSelect; });
/* concated harmony reexport MultiSelect */__nested_webpack_require_100210__.d(__nested_webpack_exports__, "MultiSelect", function() { return MultiSelect; });
/* concated harmony reexport ListSelect */__nested_webpack_require_100210__.d(__nested_webpack_exports__, "ListSelect", function() { return ListSelect; });
/* concated harmony reexport MultiListSelect */__nested_webpack_require_100210__.d(__nested_webpack_exports__, "MultiListSelect", function() { return MultiListSelect; });
/* concated harmony reexport ModelSelect */__nested_webpack_require_100210__.d(__nested_webpack_exports__, "ModelSelect", function() { return ModelSelect; });
/* concated harmony reexport ModelListSelect */__nested_webpack_require_100210__.d(__nested_webpack_exports__, "ModelListSelect", function() { return ModelListSelect; });




/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
//# sourceMappingURL=VueSearchSelect.common.js.map

/***/ })

}]);