(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/front/ImageList"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_content_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-content-loading */ "./node_modules/vue-content-loading/dist/vuecontentloading.js");
/* harmony import */ var vue_content_loading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_content_loading__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VueContentLoading: (vue_content_loading__WEBPACK_IMPORTED_MODULE_0___default())
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/gallery/ImageList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/gallery/ImageList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _front_components_loaders_cardImgLoader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/components/loaders/cardImgLoader.vue */ "./resources/js/front/components/loaders/cardImgLoader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    cardLoader: _front_components_loaders_cardImgLoader_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      gallery: '',
      preview_img: '',
      preview_img_index: '',
      img_length: '',
      active: '',
      imgclass: 'w-100',
      zoomclass: ['w-100', 'zoom1', 'zoom2', 'zoom3'],
      zoom_level: 0
    };
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
  mounted: function mounted() {
    this.getGallery();
    var metaInfo = {
      title: "GBI Image Gallery | ".concat(this.gallery.title),
      description: '@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one',
      keywords: '@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs',
      url: "https://www.gowithgbi.com/image-gallery/images/".concat(this.gallery.slug),
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  methods: {
    getGallery: function getGallery() {
      var _this = this;
      this.$axios.get("/api/get-gallery/".concat(this.$route.params.slug)).then(function (res) {
        _this.gallery = res.data;
        _this.img_length = res.data.images.length - 1;
      });
    },
    show: function show(i) {
      this.preview_img_index = i;
      this.preview_img = this.gallery.images[i].path;
    },
    LeftImage: function LeftImage() {
      if (this.preview_img_index <= this.img_length && this.preview_img_index != 0) {
        this.preview_img_index--;
        this.show(this.preview_img_index);
      }
    },
    RightImage: function RightImage() {
      if (this.preview_img_index < this.img_length) {
        this.preview_img_index++;
        this.show(this.preview_img_index);
      }
    },
    zoomOut: function zoomOut() {
      if (this.zoom_level > 0) {
        this.zoom_level--;
        this.imgclass = this.zoomclass[this.zoom_level];
      }
    },
    zoomIn: function zoomIn() {
      if (this.zoom_level < this.zoomclass.length - 1) {
        this.zoom_level++;
        this.imgclass = this.zoomclass[this.zoom_level];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-content-loading/dist/vuecontentloading.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-content-loading/dist/vuecontentloading.js ***!
  \********************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=11)}([function(t,e){t.exports=function(t,e,r,n,i,a){var s,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,o=t.default);var c="function"==typeof o?o.options:o;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i);var d;if(a?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=d):n&&(d=n),d){var h=c.functional,l=h?c.render:c.beforeCreate;h?(c._injectStyles=d,c.render=function(t,e){return d.call(e),l(t,e)}):c.beforeCreate=l?[].concat(l,d):[d]}return{esModule:s,exports:o,options:c}}},function(t,e,r){"use strict";var n=r(2),i=r(12),a=r(0),s=a(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,r){"use strict";var n=function(t){return/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(t)};e.a={name:"VueContentLoading",props:{rtl:{default:!1,type:Boolean},speed:{default:2,type:Number},width:{default:400,type:Number},height:{default:130,type:Number},primary:{type:String,default:"#f0f0f0",validator:n},secondary:{type:String,default:"#e0e0e0",validator:n}},computed:{viewbox:function(){return"0 0 "+this.width+" "+this.height},formatedSpeed:function(){return this.speed+"s"},gradientId:function(){return"gradient-"+this._uid},clipPathId:function(){return"clipPath-"+this._uid},svg:function(){if(this.rtl)return{transform:"rotateY(180deg)"}},rect:function(){return{style:{fill:"url(#"+this.gradientId+")"},clipPath:"url(#"+this.clipPathId+")"}}}}},function(t,e,r){"use strict";var n=r(1);e.a={components:{VueContentLoading:n.a}}},function(t,e,r){"use strict";var n=r(1);e.a={components:{VueContentLoading:n.a}}},function(t,e,r){"use strict";var n=r(1);e.a={components:{VueContentLoading:n.a}}},function(t,e,r){"use strict";var n=r(1);e.a={components:{VueContentLoading:n.a}}},function(t,e,r){"use strict";var n=r(1);e.a={components:{VueContentLoading:n.a}}},function(t,e,r){"use strict";var n=r(1);e.a={components:{VueContentLoading:n.a},props:{rows:{default:5,type:Number}},computed:{height:function(){return 21*this.rows}},methods:{getYPos:function(t,e){return e+22*(t-1)}}}},function(t,e,r){"use strict";var n=r(1);e.a={components:{VueContentLoading:n.a},props:{header:{default:!0,type:Boolean},rows:{default:5,type:Number},columns:{default:4,type:Number}},computed:{height:function(){return 30*this.rows-20},width:function(){return 20*(this.columns-1)+10+100*this.columns}},methods:{getXPos:function(t){return 5+100*(t-1)+20*(t-1)},getYPos:function(t){return 30*(t-1)}}}},,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),i=r(13),a=r(15),s=r(17),o=r(19),u=r(21),c=r(23),d=r(25);r.d(e,"VclCode",function(){return i.a}),r.d(e,"VclList",function(){return a.a}),r.d(e,"VclTwitch",function(){return s.a}),r.d(e,"VclFacebook",function(){return o.a}),r.d(e,"VclInstagram",function(){return u.a}),r.d(e,"VclBulletList",function(){return c.a}),r.d(e,"VclTable",function(){return d.a}),r.d(e,"VueContentLoading",function(){return n.a}),e.default=n.a},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{style:t.svg,attrs:{viewBox:t.viewbox,preserveAspectRatio:"xMidYMid meet"}},[r("rect",{style:t.rect.style,attrs:{"clip-path":t.rect.clipPath,x:"0",y:"0",width:t.width,height:t.height}}),t._v(" "),r("defs",[r("clipPath",{attrs:{id:t.clipPathId}},[t._t("default",[r("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:"70",height:"70"}}),t._v(" "),r("rect",{attrs:{x:"80",y:"17",rx:"4",ry:"4",width:"300",height:"13"}}),t._v(" "),r("rect",{attrs:{x:"80",y:"40",rx:"3",ry:"3",width:"250",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"100",rx:"3",ry:"3",width:"400",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"120",rx:"3",ry:"3",width:"360",height:"10"}})])],2),t._v(" "),r("linearGradient",{attrs:{id:t.gradientId}},[r("stop",{attrs:{offset:"0%","stop-color":t.primary}},[r("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:t.formatedSpeed,repeatCount:"indefinite"}})]),t._v(" "),r("stop",{attrs:{offset:"50%","stop-color":t.secondary}},[r("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:t.formatedSpeed,repeatCount:"indefinite"}})]),t._v(" "),r("stop",{attrs:{offset:"100%","stop-color":t.primary}},[r("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:t.formatedSpeed,repeatCount:"indefinite"}})])],1)],1)])},i=[],a={render:n,staticRenderFns:i};e.a=a},function(t,e,r){"use strict";var n=r(3),i=r(14),a=r(0),s=a(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vue-content-loading",t._b({attrs:{width:300,height:80}},"vue-content-loading",t.$attrs,!1),[r("rect",{attrs:{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"}})])},i=[],a={render:n,staticRenderFns:i};e.a=a},function(t,e,r){"use strict";var n=r(4),i=r(16),a=r(0),s=a(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vue-content-loading",t._b({attrs:{width:300,height:120}},"vue-content-loading",t.$attrs,!1),[r("rect",{attrs:{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}})])},i=[],a={render:n,staticRenderFns:i};e.a=a},function(t,e,r){"use strict";var n=r(5),i=r(18),a=r(0),s=a(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vue-content-loading",t._b({attrs:{width:300,height:225}},"vue-content-loading",t.$attrs,!1),[r("rect",{attrs:{x:"0",y:"0",rx:"3",ry:"3",width:"300",height:"170"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"180",rx:"2",ry:"2",width:"35",height:"45"}}),t._v(" "),r("rect",{attrs:{x:"45",y:"180",rx:"2",ry:"2",width:"150",height:"15"}}),t._v(" "),r("rect",{attrs:{x:"45",y:"203",rx:"2",ry:"2",width:"100",height:"10"}})])},i=[],a={render:n,staticRenderFns:i};e.a=a},function(t,e,r){"use strict";var n=r(6),i=r(20),a=r(0),s=a(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vue-content-loading",t._b({},"vue-content-loading",t.$attrs,!1),[r("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:"70",height:"70"}}),t._v(" "),r("rect",{attrs:{x:"80",y:"17",rx:"4",ry:"4",width:"300",height:"13"}}),t._v(" "),r("rect",{attrs:{x:"80",y:"40",rx:"3",ry:"3",width:"250",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"100",rx:"3",ry:"3",width:"400",height:"10"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"120",rx:"3",ry:"3",width:"360",height:"10"}})])},i=[],a={render:n,staticRenderFns:i};e.a=a},function(t,e,r){"use strict";var n=r(7),i=r(22),a=r(0),s=a(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vue-content-loading",t._b({attrs:{height:480}},"vue-content-loading",t.$attrs,!1),[r("circle",{attrs:{cx:"30",cy:"30",r:"30"}}),t._v(" "),r("rect",{attrs:{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"}}),t._v(" "),r("rect",{attrs:{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"}}),t._v(" "),r("rect",{attrs:{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"}})])},i=[],a={render:n,staticRenderFns:i};e.a=a},function(t,e,r){"use strict";var n=r(8),i=r(24),a=r(0),s=a(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vue-content-loading",t._b({attrs:{width:230,height:t.height}},"vue-content-loading",t.$attrs,!1),[t._l(t.rows,function(e){return[r("circle",{key:e+"_c",attrs:{cx:"8",cy:t.getYPos(e,8),r:"8"}}),t._v(" "),r("rect",{key:e+"_r",attrs:{x:"22",y:t.getYPos(e,3),rx:"3",ry:"3",width:"200",height:"9"}})]})],2)},i=[],a={render:n,staticRenderFns:i};e.a=a},function(t,e,r){"use strict";var n=r(9),i=r(26),a=r(0),s=a(n.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vue-content-loading",t._b({attrs:{width:t.width,height:t.height}},"vue-content-loading",t.$attrs,!1),[t._l(t.rows,function(e){return[t._l(t.columns,function(n){return[r("rect",{key:e+"_"+n,attrs:{x:t.getXPos(n),y:t.getYPos(e),rx:"3",ry:"3",width:100,height:"10"}})]}),t._v(" "),e<t.rows?r("rect",{key:e+"_l",attrs:{x:"0",y:t.getYPos(e)+20,width:t.width,height:"1"}}):t._e()]})],2)},i=[],a={render:n,staticRenderFns:i};e.a=a}])});
//# sourceMappingURL=vuecontentloading.js.map

/***/ }),

/***/ "./resources/js/front/components/loaders/cardImgLoader.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardImgLoader.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cardImgLoader_vue_vue_type_template_id_2a03c662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardImgLoader.vue?vue&type=template&id=2a03c662& */ "./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=template&id=2a03c662&");
/* harmony import */ var _cardImgLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardImgLoader.vue?vue&type=script&lang=js& */ "./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cardImgLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cardImgLoader_vue_vue_type_template_id_2a03c662___WEBPACK_IMPORTED_MODULE_0__.render,
  _cardImgLoader_vue_vue_type_template_id_2a03c662___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/loaders/cardImgLoader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/gallery/ImageList.vue":
/*!********************************************************!*\
  !*** ./resources/js/front/pages/gallery/ImageList.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageList_vue_vue_type_template_id_07ce1106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageList.vue?vue&type=template&id=07ce1106& */ "./resources/js/front/pages/gallery/ImageList.vue?vue&type=template&id=07ce1106&");
/* harmony import */ var _ImageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageList.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/gallery/ImageList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageList_vue_vue_type_template_id_07ce1106___WEBPACK_IMPORTED_MODULE_0__.render,
  _ImageList_vue_vue_type_template_id_07ce1106___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/gallery/ImageList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardImgLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cardImgLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cardImgLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/gallery/ImageList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/front/pages/gallery/ImageList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/gallery/ImageList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=template&id=2a03c662&":
/*!************************************************************************************************!*\
  !*** ./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=template&id=2a03c662& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardImgLoader_vue_vue_type_template_id_2a03c662___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardImgLoader_vue_vue_type_template_id_2a03c662___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cardImgLoader_vue_vue_type_template_id_2a03c662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cardImgLoader.vue?vue&type=template&id=2a03c662& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=template&id=2a03c662&");


/***/ }),

/***/ "./resources/js/front/pages/gallery/ImageList.vue?vue&type=template&id=07ce1106&":
/*!***************************************************************************************!*\
  !*** ./resources/js/front/pages/gallery/ImageList.vue?vue&type=template&id=07ce1106& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_template_id_07ce1106___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_template_id_07ce1106___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageList_vue_vue_type_template_id_07ce1106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageList.vue?vue&type=template&id=07ce1106& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/gallery/ImageList.vue?vue&type=template&id=07ce1106&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=template&id=2a03c662&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/loaders/cardImgLoader.vue?vue&type=template&id=2a03c662& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("vue-content-loading", { attrs: { width: 300, height: 350 } }, [
    _c("rect", { attrs: { y: "30", r: "30", width: "300", height: "350" } }),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/gallery/ImageList.vue?vue&type=template&id=07ce1106&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/gallery/ImageList.vue?vue&type=template&id=07ce1106& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container pt-3 imageslist" }, [
    _vm.gallery
      ? _c("div", [
          _c("p", { staticClass: "p-0 m-0" }, [
            _c("b", [_vm._v(_vm._s(_vm.gallery.school.school_name))]),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "p-0 m-0" }, [
            _vm._v(_vm._s(_vm.gallery.title)),
          ]),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "mt-3" }, [
      _c("div", { staticClass: "images" }, [
        _vm.gallery.images
          ? _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.gallery.images, function (data, index) {
                return _c(
                  "div",
                  { key: data.id, staticClass: "col-sm-4 mb-4 pb-1 blog-list" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "card p-3 border-radius-0",
                        attrs: {
                          "data-toggle": "modal",
                          "data-target": "#ImagePreviewModal",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.show(index)
                          },
                        },
                      },
                      [
                        _c("img", {
                          staticClass: "card-img border-radius-0 cardimage",
                          attrs: {
                            src: data.path,
                            alt: data.alt,
                            title: data.alt,
                          },
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "shera-img" }),
                      ]
                    ),
                  ]
                )
              }),
              0
            )
          : _c(
              "div",
              { staticClass: "row card-titles" },
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
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade bg-faded fade-flip",
        attrs: {
          id: "ImagePreviewModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "myModalLabel",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content border-radius-0" }, [
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "img-preview" }, [
                  _c("img", {
                    class: "main-img " + _vm.imgclass,
                    attrs: { src: _vm.preview_img },
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "shera-img shera-img-modal" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "img-preview-bottom" }, [
                    _c("div", { staticClass: "row text-center" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("img", {
                          staticClass: "w-35",
                          attrs: {
                            src: _vm.$gbiAssets + "/images/icons/back.png",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.LeftImage()
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("img", {
                          staticClass: "w-20",
                          attrs: {
                            src: _vm.$gbiAssets + "/images/icons/zoom-out.png",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.zoomOut()
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("img", {
                          staticClass: "w-20",
                          attrs: {
                            src: _vm.$gbiAssets + "/images/icons/zoom-in.png",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.zoomIn()
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c("img", {
                          staticClass: "w-35",
                          attrs: {
                            src: _vm.$gbiAssets + "/images/icons/forward.png",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.RightImage()
                            },
                          },
                        }),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);