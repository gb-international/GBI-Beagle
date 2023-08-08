(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/StudentProfileEdit~js/front/TeacherProfileEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_mixins_user_ProfileEditMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/mixins/user/ProfileEditMixin */ "./resources/js/front/mixins/user/ProfileEditMixin.js");
/* harmony import */ var _front_components_form_UpdatePassForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/form/UpdatePassForm */ "./resources/js/front/components/form/UpdatePassForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "LoginDetailsForm",
  mixins: [_front_mixins_user_ProfileEditMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    "pass-form": _front_components_form_UpdatePassForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    openPassModal: function openPassModal() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/ProfileForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/ProfileForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_mixins_user_ProfileEditMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/mixins/user/ProfileEditMixin */ "./resources/js/front/mixins/user/ProfileEditMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProfileForm",
  mixins: [_front_mixins_user_ProfileEditMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/SocialForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/SocialForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_mixins_user_ProfileEditMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/mixins/user/ProfileEditMixin */ "./resources/js/front/mixins/user/ProfileEditMixin.js");
/* harmony import */ var universal_social_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-social-auth */ "./node_modules/universal-social-auth/dist/index.js");
/* harmony import */ var universal_social_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(universal_social_auth__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SocialForm",
  mixins: [_front_mixins_user_ProfileEditMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {},
  data: function data() {
    return {
      docs: {
        docType: 'aadhar',
        docFront: null,
        docBottom: null
      },
      allSocial: {},
      responseData: {},
      hash: '',
      //data: {},
      fauth: false,
      Facebook: universal_social_auth__WEBPACK_IMPORTED_MODULE_1__["Facebook"]
    };
  },
  created: function created() {
    this.checkSocial();
  },
  methods: {
    useAuthProvider: function useAuthProvider(provider, proData) {
      var _this = this;

      var pro = proData;
      var ProData = pro || Providers[provider];
      this.$Oauth.authenticate(provider, ProData).then(function (response) {
        console.log(response);
        var rsp = response;

        var userData = _this.$cookies.get("user");

        if (rsp) {
          _this.responseData.code = rsp.code;
          _this.responseData.provider = provider;
          _this.responseData.userId = userData.id;

          _this.SocialLogin(_this.responseData);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    },
    SocialLogin: function SocialLogin(data) {
      var _this2 = this;

      this.$axios.post("/api/user/save-social", data, {
        headers: {
          Authorization: "Bearer ".concat(localStorage.token)
        }
      }).then(function (res) {
        _this2.allSocial = res.data.data;
        console.log(_this2.allSocial);

        _this2.$swal.fire({
          icon: "success",
          title: "Success",
          text: "Social Account Connected."
        });
      })["catch"](function (error) {
        return console.log(_this2.$swal.fire({
          icon: "warning",
          title: "Error",
          text: "Connection failed, please try again."
        }));
      });
    },
    checkSocial: function checkSocial() {
      var _this3 = this;

      var userData = this.$cookies.get("user");
      this.$axios.post("/api/user/social/" + userData.id, {
        headers: {
          Authorization: "Bearer ".concat(localStorage.token)
        }
      }).then(function (res) {
        _this3.allSocial = res.data.data;
        console.log(_this3.allSocial);
      })["catch"](function (error) {
        return console.log(_this3.$swal.fire({
          icon: "warning",
          title: "Error",
          text: "Connection failed, please try again."
        }));
      });
    },
    // useSocialLogin () {
    //   // otp from input Otp form
    //   // hash user data in your backend with Cache or save to database
    //   const pdata = { code: this.responseData.code, otp: this.data.tok, hash: this.hash }
    //   this.$axios.post('/social-login/' + this.responseData.provider, pdata).then(async (response) => {
    //       // `response` data base on your backend config
    //     console.log('Test')
    //     if (response.data.status === 444) {
    //       this.hash = response.data.hash
    //       this.fauth = true // Option show Otp form incase you using 2fa or any addition security apply to your app you can handle all that from here
    //     }
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    // },
    frontInput: function frontInput() {
      this.$refs.frontInput.click();
    },
    backInput: function backInput() {
      this.$refs.backInput.click();
    },
    onFileFront: function onFileFront(e) {
      this.docs.docFront = e.target.files[0];
      console.log(this.docs.docFront);
    },
    onFileBottom: function onFileBottom(e) {
      this.docs.docBottom = e.target.files[0]; //console.log(this.docFront.name)

      console.log(this.docs.docBottom);
    },
    updateDocs: function updateDocs() {
      var _this4 = this;

      if (!this.docs.docFront || !this.docs.docBottom || !this.docs.docType) {
        this.$swal.fire({
          icon: "warning",
          title: "Upload Empty!",
          text: "Please upload the documents."
        });
        return false;
      }

      var data = new FormData();
      data.append("docFront", this.docs.docFront);
      data.append("docBottom", this.docs.docBottom);
      data.append("docType", this.docs.docType);
      console.log(data);
      this.$axios.post("/api/update-user-docs", data, {
        headers: {
          Authorization: "Bearer ".concat(this.$cookies.get('access_token'))
        }
      }).then(function (res) {
        _this4.$swal.fire({
          icon: "success",
          title: "Documents Uploaded !!"
        });
      })["catch"](function (error) {
        return console.log(_this4.$swal.fire({
          icon: "warning",
          title: "Upload Failed..",
          text: "Upload failed, please try again"
        }));
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/UpdatePassForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/UpdatePassForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_mixins_user_UpdatePasswordMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/mixins/user/UpdatePasswordMixin */ "./resources/js/front/mixins/user/UpdatePasswordMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UpdatePassForm",
  mixins: [_front_mixins_user_UpdatePasswordMixin__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/UploadDocsForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/UploadDocsForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_mixins_user_ProfileEditMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/mixins/user/ProfileEditMixin */ "./resources/js/front/mixins/user/ProfileEditMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UploadDocsForm",
  mixins: [_front_mixins_user_ProfileEditMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {},
  data: function data() {
    return {
      docs: {
        docType: 'aadhar',
        docFront: null,
        docBottom: null
      }
    };
  },
  methods: {
    frontInput: function frontInput() {
      this.$refs.frontInput.click();
    },
    backInput: function backInput() {
      this.$refs.backInput.click();
    },
    onFileFront: function onFileFront(e) {
      this.docs.docFront = e.target.files[0];
      console.log(this.docs.docFront);
    },
    onFileBottom: function onFileBottom(e) {
      this.docs.docBottom = e.target.files[0]; //console.log(this.docFront.name)

      console.log(this.docs.docBottom);
    },
    updateDocs: function updateDocs() {
      var _this = this;

      if (!this.docs.docFront || !this.docs.docBottom || !this.docs.docType) {
        this.$swal.fire({
          icon: "warning",
          title: "Upload Empty!",
          text: "Please upload the documents."
        });
        return false;
      }

      var data = new FormData();
      data.append("docFront", this.docs.docFront);
      data.append("docBottom", this.docs.docBottom);
      data.append("docType", this.docs.docType);
      console.log(data);
      this.$axios.post("/api/update-user-docs", data, {
        headers: {
          Authorization: "Bearer ".concat(this.$cookies.get('access_token'))
        }
      }).then(function (res) {
        _this.$swal.fire({
          icon: "success",
          title: "Documents Uploaded !!"
        });
      })["catch"](function (error) {
        return console.log(_this.$swal.fire({
          icon: "warning",
          title: "Upload Failed..",
          text: "Upload failed, please try again"
        }));
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=style&index=0&id=a91fa91a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=style&index=0&id=a91fa91a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.backBtn[data-v-a91fa91a]{\n    display: none !important;\n}\n@media only screen and (max-width: 824px) {\n.profile_button[data-v-a91fa91a] {\n      padding: 11px 35px !important;\n}\n.backBtn[data-v-a91fa91a]{\n    display: inline !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/ProfileForm.vue?vue&type=style&index=0&id=725fc1f2&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/ProfileForm.vue?vue&type=style&index=0&id=725fc1f2&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sideBarStg[data-v-725fc1f2]{\n  border-top: 1px solid grey; \n  border-right: 1px solid grey;\n}\n.container[data-v-725fc1f2] {\n    width: 125%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\nselect[data-v-725fc1f2]{\n  border: 1px solid #ced4da !important;\n}\n.backBtn[data-v-725fc1f2]{\n  display: none !important;\n}\n@media only screen and (max-width: 824px) {\n.profile_button[data-v-725fc1f2] {\n      padding: 11px 35px !important;\n}\n.backBtn[data-v-725fc1f2]{\n    display: inline !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/SocialForm.vue?vue&type=style&index=0&id=3691aa72&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/SocialForm.vue?vue&type=style&index=0&id=3691aa72&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.uploadIcons[data-v-3691aa72]{\n  font-size: 25px;\n}\n.note[data-v-3691aa72]{\n  margin-top: 10px;\n  font-size: 12px;\n}\n.note2[data-v-3691aa72]{\n  margin-top: 10px;\n  font-size: 14px;\n  font-weight: 500;\n}\nselect[data-v-3691aa72]{\n  border: 1px solid #ced4da !important;\n}\n.backBtn[data-v-3691aa72]{\n  display: none !important;\n}\n@media only screen and (max-width: 824px) {\n.profile_button[data-v-3691aa72] {\n      padding: 11px 35px !important;\n}\n.mobBtn[data-v-3691aa72]{\n    display: inline !important;\n}\n.backBtn[data-v-3691aa72]{\n    display: inline !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/UploadDocsForm.vue?vue&type=style&index=0&id=49b75d94&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/UploadDocsForm.vue?vue&type=style&index=0&id=49b75d94&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.uploadIcons[data-v-49b75d94]{\n  font-size: 25px;\n}\n.note[data-v-49b75d94]{\n  margin-top: 10px;\n  font-size: 12px;\n}\n.note2[data-v-49b75d94]{\n  margin-top: 10px;\n  font-size: 14px;\n  font-weight: 500;\n}\nselect[data-v-49b75d94]{\n  border: 1px solid #ced4da !important;\n}\n.backBtn[data-v-49b75d94]{\n  display: none !important;\n}\n@media only screen and (max-width: 824px) {\n.profile_button[data-v-49b75d94] {\n      padding: 11px 35px !important;\n}\n.mobBtn[data-v-49b75d94]{\n    display: inline !important;\n}\n.backBtn[data-v-49b75d94]{\n    display: inline !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=style&index=0&id=a91fa91a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=style&index=0&id=a91fa91a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginDetailsForm.vue?vue&type=style&index=0&id=a91fa91a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=style&index=0&id=a91fa91a&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/ProfileForm.vue?vue&type=style&index=0&id=725fc1f2&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/ProfileForm.vue?vue&type=style&index=0&id=725fc1f2&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileForm.vue?vue&type=style&index=0&id=725fc1f2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/ProfileForm.vue?vue&type=style&index=0&id=725fc1f2&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/SocialForm.vue?vue&type=style&index=0&id=3691aa72&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/SocialForm.vue?vue&type=style&index=0&id=3691aa72&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialForm.vue?vue&type=style&index=0&id=3691aa72&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/SocialForm.vue?vue&type=style&index=0&id=3691aa72&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/UploadDocsForm.vue?vue&type=style&index=0&id=49b75d94&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/UploadDocsForm.vue?vue&type=style&index=0&id=49b75d94&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadDocsForm.vue?vue&type=style&index=0&id=49b75d94&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/UploadDocsForm.vue?vue&type=style&index=0&id=49b75d94&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=template&id=a91fa91a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=template&id=a91fa91a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      attrs: { role: "form", enctype: "multipart/form-data" },
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.updateUserData()
        },
      },
    },
    [
      _c("div", { staticClass: "d-flex justify-content-end" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-info customButton backBtn",
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.$emit("close")
              },
            },
          },
          [_vm._v("Back")]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "email" } }, [_vm._v("Email Id")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.email,
                    expression: "form.email",
                  },
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("email") },
                attrs: { type: "email", placeholder: "Enter Email" },
                domProps: { value: _vm.form.email },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "email", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "email" } }),
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
              _c("label", { attrs: { for: "phone_no" } }, [
                _vm._v("Mobile Number"),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.phone_no,
                    expression: "form.phone_no",
                  },
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("phone_no") },
                attrs: { type: "number", placeholder: "Enter New Password" },
                domProps: { value: _vm.form.phone_no },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "phone_no", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "phone_no" } }),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "confirm_password" } }, [
              _vm._v("Change Password"),
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                placeholder: "**********",
                readonly: "",
                "data-toggle": "modal",
                "data-target": "#passModal",
              },
              on: { click: _vm.openPassModal },
            }),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "passModal",
              tabindex: "-1",
              role: "dialog",
              "aria-labelledby": "exampleModalLabel",
              "aria-hidden": "true",
            },
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "modal-body" },
                    [_c("pass-form")],
                    1
                  ),
                ]),
              ]
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm.message
        ? _c("p", { staticClass: "text-success" }, [
            _vm._v(_vm._s(_vm.message)),
          ])
        : _vm._e(),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Update Password")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close",
          },
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary profile_button",
          attrs: { type: "submit" },
        },
        [_vm._v("\n        UPDATE\n    ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/ProfileForm.vue?vue&type=template&id=725fc1f2&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/ProfileForm.vue?vue&type=template&id=725fc1f2&scoped=true& ***!
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
    "form",
    {
      attrs: { role: "form", enctype: "multipart/form-data" },
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.updateUserData()
        },
      },
    },
    [
      _c("div", { staticClass: "d-flex justify-content-end" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-info customButton backBtn",
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.$emit("close")
              },
            },
          },
          [_vm._v("Back")]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
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
                    value: _vm.form.name,
                    expression: "form.name",
                  },
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("name") },
                attrs: { type: "text", placeholder: "Enter Name" },
                domProps: { value: _vm.form.name },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "name", $event.target.value)
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
          _c("div", { staticClass: "form-group" }, [
            _c("div", [
              _c("label", [_vm._v("Gender")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.gender,
                      expression: "form.gender",
                    },
                  ],
                  staticClass: "form-control",
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
                      _vm.$set(
                        _vm.form,
                        "gender",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c("option", { attrs: { value: "male" } }, [_vm._v("Male")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "female" } }, [
                    _vm._v("Female"),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _vm.form.errors.has("gender")
              ? _c(
                  "div",
                  { staticClass: "error" },
                  [
                    _c("lable", { staticClass: "danger text-danger" }, [
                      _vm._v(_vm._s(_vm.form.errors.get("gender"))),
                    ]),
                  ],
                  1
                )
              : _vm._e(),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("div", [
              _c("label", [_vm._v("User profession")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.user_profession,
                      expression: "form.user_profession",
                    },
                  ],
                  staticClass: "form-control",
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
                      _vm.$set(
                        _vm.form,
                        "user_profession",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c("option", { attrs: { value: "student" } }, [
                    _vm._v("Student"),
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "teacher" } }, [
                    _vm._v("Teacher/Principal/Dean"),
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "corporate" } }, [
                    _vm._v("Corporate"),
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "other" } }, [
                    _vm._v("Other"),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _vm.form.errors.has("user_profession")
              ? _c(
                  "div",
                  { staticClass: "error" },
                  [
                    _c("lable", { staticClass: "danger text-danger" }, [
                      _vm._v(_vm._s(_vm.form.errors.get("user_profession"))),
                    ]),
                  ],
                  1
                )
              : _vm._e(),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "name" } }, [
                _vm._v("Father's Name"),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.father_name,
                    expression: "form.father_name",
                  },
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("father_name") },
                attrs: { type: "text", placeholder: "Enter Name" },
                domProps: { value: _vm.form.father_name },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "father_name", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", {
                attrs: { form: _vm.form, field: "father_name" },
              }),
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
              _c("label", { attrs: { for: "name" } }, [
                _vm._v("Mother's Name"),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.mother_name,
                    expression: "form.mother_name",
                  },
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("mother_name") },
                attrs: { type: "text", placeholder: "Enter mother Name" },
                domProps: { value: _vm.form.mother_name },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "mother_name", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", {
                attrs: { form: _vm.form, field: "mother_name" },
              }),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c(
            "div",
            {},
            [
              _c("label", { attrs: { for: "phone_no" } }, [_vm._v("DOB")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.dob,
                    expression: "form.dob",
                  },
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("dob") },
                attrs: { type: "date", placeholder: "Enter DOB" },
                domProps: { value: _vm.form.dob },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "dob", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "dob" } }),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12 pt-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "address" } }, [_vm._v("Address")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.address,
                    expression: "form.address",
                  },
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("address") },
                attrs: { type: "text", placeholder: "Enter Address" },
                domProps: { value: _vm.form.address },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "address", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "address" } }),
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
              _c("label", { attrs: { for: "phone_no" } }, [_vm._v("City")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.city,
                    expression: "form.city",
                  },
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("city") },
                attrs: { type: "text", placeholder: "Enter City" },
                domProps: { value: _vm.form.city },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "city", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "city" } }),
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
              _c("label", { attrs: { for: "phone_no" } }, [_vm._v("State")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.state,
                    expression: "form.state",
                  },
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("state") },
                attrs: { type: "text", placeholder: "Enter state" },
                domProps: { value: _vm.form.state },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "state", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "state" } }),
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
              _c("label", { attrs: { for: "country" } }, [_vm._v("Country")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.country,
                    expression: "form.country",
                  },
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("country") },
                attrs: { type: "text", placeholder: "Enter country" },
                domProps: { value: _vm.form.country },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "country", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "country" } }),
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
              _c("label", { attrs: { for: "phone_no" } }, [_vm._v("Zip Code")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.zip_code,
                    expression: "form.zip_code",
                  },
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("zip_code") },
                attrs: { type: "text", placeholder: "Enter zip_code" },
                domProps: { value: _vm.form.zip_code },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "zip_code", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", { attrs: { form: _vm.form, field: "zip_code" } }),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(0),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary profile_button",
          attrs: { type: "submit" },
        },
        [_vm._v("\n              UPDATE\n            ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/SocialForm.vue?vue&type=template&id=3691aa72&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/SocialForm.vue?vue&type=template&id=3691aa72&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      attrs: { role: "form", enctype: "multipart/form-data" },
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.updateDocs()
        },
      },
    },
    [
      _c("div", { staticClass: "d-flex justify-content-end" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-info customButton backBtn",
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.$emit("close")
              },
            },
          },
          [_vm._v("Back")]
        ),
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row pt-2" }, [
        _c(
          "div",
          { staticClass: "col-md-6 mb-2", staticStyle: { cursor: "pointer" } },
          [
            _c(
              "label",
              { staticStyle: { "font-size": "15px", "font-weight": "500" } },
              [_vm._v("Facebook")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "shadow px-1",
                staticStyle: { "border-radius": "100px" },
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      " d-flex justify-content-start align-items-center ml-2",
                  },
                  [
                    _c("i", {
                      staticClass: "fab fa-facebook uploadIcons",
                      style: _vm.allSocial.facebook ? "color: #4267B2" : "",
                      on: { click: _vm.frontInput },
                    }),
                    _vm._v(" "),
                    _vm.allSocial.facebook
                      ? _c(
                          "p",
                          {
                            staticClass: "note2 pl-3 pt-1",
                            on: {
                              click: function ($event) {
                                return _vm.useAuthProvider(
                                  "facebook",
                                  _vm.Facebook
                                )
                              },
                            },
                          },
                          [_vm._v("Connected with Facebook")]
                        )
                      : _c(
                          "p",
                          {
                            staticClass: "note2 pl-3 pt-1",
                            on: {
                              click: function ($event) {
                                return _vm.useAuthProvider(
                                  "facebook",
                                  _vm.Facebook
                                )
                              },
                            },
                          },
                          [_vm._v("Connect with Facebook")]
                        ),
                  ]
                ),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6 mb-2", staticStyle: { cursor: "pointer" } },
          [
            _c(
              "label",
              { staticStyle: { "font-size": "15px", "font-weight": "500" } },
              [_vm._v("Instagram")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "shadow px-1",
                staticStyle: { "border-radius": "100px" },
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex justify-content-start align-items-center ml-2",
                  },
                  [
                    _c("i", {
                      staticClass: "fab fa-instagram uploadIcons",
                      on: { click: _vm.backInput },
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "note2 pl-3 pt-1" }, [
                      _vm._v("Connect with Instagram"),
                    ]),
                  ]
                ),
              ]
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row pb-2" }, [
        _c(
          "div",
          { staticClass: "col-md-6 mb-2", staticStyle: { cursor: "pointer" } },
          [
            _c(
              "label",
              { staticStyle: { "font-size": "15px", "font-weight": "500" } },
              [_vm._v("LinkedIn")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "shadow px-1",
                staticStyle: { "border-radius": "100px" },
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      " d-flex justify-content-start align-items-center ml-2",
                  },
                  [
                    _c("i", {
                      staticClass: "fab fa-linkedin uploadIcons",
                      on: { click: _vm.frontInput },
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "note2 pl-3 pt-1" }, [
                      _vm._v("Connect with LinkedIn"),
                    ]),
                  ]
                ),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6 mb-2", staticStyle: { cursor: "pointer" } },
          [
            _c(
              "label",
              { staticStyle: { "font-size": "15px", "font-weight": "500" } },
              [_vm._v("Twitter")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "shadow px-1",
                staticStyle: { "border-radius": "100px" },
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex justify-content-start align-items-center ml-2",
                  },
                  [
                    _c("i", {
                      staticClass: "fab fa-twitter uploadIcons",
                      on: { click: _vm.backInput },
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "note2 pl-3 pt-1" }, [
                      _vm._v("Connect with Twitter"),
                    ]),
                  ]
                ),
              ]
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _vm.message
        ? _c("p", { staticClass: "text-success" }, [
            _vm._v(_vm._s(_vm.message)),
          ])
        : _vm._e(),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_c("b", [_vm._v("Connect with Social Accounts")])]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/UpdatePassForm.vue?vue&type=template&id=12f79bd4&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/UpdatePassForm.vue?vue&type=template&id=12f79bd4& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      attrs: { role: "form", enctype: "multipart/form-data" },
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.UpdatePassword()
        },
      },
    },
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "current_password" } }, [
                _vm._v("Current Password"),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.current_password,
                    expression: "form.current_password",
                  },
                ],
                staticClass: "form-control",
                class: {
                  "is-invalid": _vm.form.errors.has("current_password"),
                },
                attrs: { type: "text", placeholder: "Enter Current Password" },
                domProps: { value: _vm.form.current_password },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "current_password", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", {
                attrs: { form: _vm.form, field: "current_password" },
              }),
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
              _c("label", { attrs: { for: "new_password" } }, [
                _vm._v("New Password"),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.new_password,
                    expression: "form.new_password",
                  },
                ],
                staticClass: "form-control",
                class: { "is-invalid": _vm.form.errors.has("new_password") },
                attrs: { type: "text", placeholder: "Enter New Password" },
                domProps: { value: _vm.form.new_password },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "new_password", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", {
                attrs: { form: _vm.form, field: "new_password" },
              }),
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
              _c("label", { attrs: { for: "confirm_password" } }, [
                _vm._v("Confirm Password"),
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.confirm_password,
                    expression: "form.confirm_password",
                  },
                ],
                staticClass: "form-control",
                class: {
                  "is-invalid": _vm.form.errors.has("confirm_password"),
                },
                attrs: { type: "text", placeholder: "Confirm Password" },
                domProps: { value: _vm.form.confirm_password },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "confirm_password", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("has-error", {
                attrs: { form: _vm.form, field: "confirm_password" },
              }),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm.message
        ? _c("p", { staticClass: "text-success" }, [
            _vm._v(_vm._s(_vm.message)),
          ])
        : _vm._e(),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary profile_button",
          attrs: { type: "submit" },
        },
        [_vm._v("\n        UPDATE\n    ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/UploadDocsForm.vue?vue&type=template&id=49b75d94&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/UploadDocsForm.vue?vue&type=template&id=49b75d94&scoped=true& ***!
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
  return _c(
    "form",
    {
      attrs: { role: "form", enctype: "multipart/form-data" },
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.updateDocs()
        },
      },
    },
    [
      _c("div", { staticClass: "d-flex justify-content-end" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-info customButton backBtn",
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.$emit("close")
              },
            },
          },
          [_vm._v("Back")]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("div", [
              _c("label", [_vm._v("Document Type")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.docs.docType,
                      expression: "docs.docType",
                    },
                  ],
                  staticClass: "form-control",
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
                      _vm.$set(
                        _vm.docs,
                        "docType",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                  },
                },
                [
                  _c("option", { attrs: { value: "aadhar" } }, [
                    _vm._v("Aadhar Card"),
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "voterId" } }, [
                    _vm._v("Voter ID"),
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "schoolId" } }, [
                    _vm._v("School ID"),
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "passport" } }, [
                    _vm._v("Passport"),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _vm.form.errors.has("docType")
              ? _c(
                  "div",
                  { staticClass: "error" },
                  [
                    _c("lable", { staticClass: "danger text-danger" }, [
                      _vm._v(_vm._s(_vm.form.errors.get("docType"))),
                    ]),
                  ],
                  1
                )
              : _vm._e(),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row py-2" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("label", [_vm._v("Document Front")]),
          _vm._v(" "),
          _c("div", { staticClass: "card shadow py-5 px-4 mb-2" }, [
            _c(
              "div",
              {
                staticClass:
                  "card-body d-flex justify-content-center align-items-center flex-column",
              },
              [
                _c("i", {
                  staticClass: "fas fa-upload uploadIcons",
                  on: { click: _vm.frontInput },
                }),
                _vm._v(" "),
                _vm.docs.docFront == null
                  ? _c("p", { staticClass: "note" }, [
                      _vm._v("Upload(.png/.jpg/.jpeg/.pdf)"),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.docs.docFront != null
                  ? _c("p", { staticClass: "note2" }, [_vm._v("File Uploaded")])
                  : _vm._e(),
                _vm._v(" "),
                _c("input", {
                  ref: "frontInput",
                  staticStyle: { display: "none" },
                  attrs: { type: "file", accept: ".png, .jpg, .jpeg, .pdf" },
                  on: { change: _vm.onFileFront },
                }),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("label", [_vm._v("Document Back")]),
          _vm._v(" "),
          _c("div", { staticClass: "card shadow py-5 px-4 mb-2" }, [
            _c(
              "div",
              {
                staticClass:
                  "card-body d-flex justify-content-center align-items-center flex-column",
              },
              [
                _c("i", {
                  staticClass: "fas fa-upload uploadIcons",
                  on: { click: _vm.backInput },
                }),
                _vm._v(" "),
                _vm.docs.docBottom == null
                  ? _c("p", { staticClass: "note" }, [
                      _vm._v("Upload(.png/.jpg/.jpeg/.pdf)"),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.docs.docBottom != null
                  ? _c("p", { staticClass: "note2" }, [_vm._v("File Uploaded")])
                  : _vm._e(),
                _vm._v(" "),
                _c("input", {
                  ref: "backInput",
                  staticStyle: { display: "none" },
                  attrs: { type: "file", accept: ".png, .jpg, .jpeg, .pdf" },
                  on: { change: _vm.onFileBottom },
                }),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm.message
        ? _c("p", { staticClass: "text-success" }, [
            _vm._v(_vm._s(_vm.message)),
          ])
        : _vm._e(),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary profile_button",
          attrs: { type: "submit" },
        },
        [_vm._v("\n        Submit\n    ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/components/form/LoginDetailsForm.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/front/components/form/LoginDetailsForm.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginDetailsForm_vue_vue_type_template_id_a91fa91a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginDetailsForm.vue?vue&type=template&id=a91fa91a&scoped=true& */ "./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=template&id=a91fa91a&scoped=true&");
/* harmony import */ var _LoginDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginDetailsForm.vue?vue&type=script&lang=js& */ "./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoginDetailsForm_vue_vue_type_style_index_0_id_a91fa91a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginDetailsForm.vue?vue&type=style&index=0&id=a91fa91a&scoped=true&lang=css& */ "./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=style&index=0&id=a91fa91a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoginDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginDetailsForm_vue_vue_type_template_id_a91fa91a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginDetailsForm_vue_vue_type_template_id_a91fa91a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a91fa91a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/form/LoginDetailsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginDetailsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginDetailsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=style&index=0&id=a91fa91a&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=style&index=0&id=a91fa91a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginDetailsForm_vue_vue_type_style_index_0_id_a91fa91a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginDetailsForm.vue?vue&type=style&index=0&id=a91fa91a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=style&index=0&id=a91fa91a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginDetailsForm_vue_vue_type_style_index_0_id_a91fa91a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginDetailsForm_vue_vue_type_style_index_0_id_a91fa91a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginDetailsForm_vue_vue_type_style_index_0_id_a91fa91a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginDetailsForm_vue_vue_type_style_index_0_id_a91fa91a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=template&id=a91fa91a&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=template&id=a91fa91a&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginDetailsForm_vue_vue_type_template_id_a91fa91a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginDetailsForm.vue?vue&type=template&id=a91fa91a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/LoginDetailsForm.vue?vue&type=template&id=a91fa91a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginDetailsForm_vue_vue_type_template_id_a91fa91a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginDetailsForm_vue_vue_type_template_id_a91fa91a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/form/ProfileForm.vue":
/*!************************************************************!*\
  !*** ./resources/js/front/components/form/ProfileForm.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileForm_vue_vue_type_template_id_725fc1f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileForm.vue?vue&type=template&id=725fc1f2&scoped=true& */ "./resources/js/front/components/form/ProfileForm.vue?vue&type=template&id=725fc1f2&scoped=true&");
/* harmony import */ var _ProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileForm.vue?vue&type=script&lang=js& */ "./resources/js/front/components/form/ProfileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProfileForm_vue_vue_type_style_index_0_id_725fc1f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileForm.vue?vue&type=style&index=0&id=725fc1f2&scoped=true&lang=css& */ "./resources/js/front/components/form/ProfileForm.vue?vue&type=style&index=0&id=725fc1f2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileForm_vue_vue_type_template_id_725fc1f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileForm_vue_vue_type_template_id_725fc1f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "725fc1f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/form/ProfileForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/form/ProfileForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/front/components/form/ProfileForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/ProfileForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/form/ProfileForm.vue?vue&type=style&index=0&id=725fc1f2&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/front/components/form/ProfileForm.vue?vue&type=style&index=0&id=725fc1f2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_725fc1f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileForm.vue?vue&type=style&index=0&id=725fc1f2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/ProfileForm.vue?vue&type=style&index=0&id=725fc1f2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_725fc1f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_725fc1f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_725fc1f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_style_index_0_id_725fc1f2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/components/form/ProfileForm.vue?vue&type=template&id=725fc1f2&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/front/components/form/ProfileForm.vue?vue&type=template&id=725fc1f2&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_template_id_725fc1f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileForm.vue?vue&type=template&id=725fc1f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/ProfileForm.vue?vue&type=template&id=725fc1f2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_template_id_725fc1f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileForm_vue_vue_type_template_id_725fc1f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/form/SocialForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/front/components/form/SocialForm.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialForm_vue_vue_type_template_id_3691aa72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialForm.vue?vue&type=template&id=3691aa72&scoped=true& */ "./resources/js/front/components/form/SocialForm.vue?vue&type=template&id=3691aa72&scoped=true&");
/* harmony import */ var _SocialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialForm.vue?vue&type=script&lang=js& */ "./resources/js/front/components/form/SocialForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SocialForm_vue_vue_type_style_index_0_id_3691aa72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialForm.vue?vue&type=style&index=0&id=3691aa72&scoped=true&lang=css& */ "./resources/js/front/components/form/SocialForm.vue?vue&type=style&index=0&id=3691aa72&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SocialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialForm_vue_vue_type_template_id_3691aa72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SocialForm_vue_vue_type_template_id_3691aa72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3691aa72",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/form/SocialForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/form/SocialForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/front/components/form/SocialForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/SocialForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/form/SocialForm.vue?vue&type=style&index=0&id=3691aa72&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/front/components/form/SocialForm.vue?vue&type=style&index=0&id=3691aa72&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialForm_vue_vue_type_style_index_0_id_3691aa72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialForm.vue?vue&type=style&index=0&id=3691aa72&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/SocialForm.vue?vue&type=style&index=0&id=3691aa72&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialForm_vue_vue_type_style_index_0_id_3691aa72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialForm_vue_vue_type_style_index_0_id_3691aa72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialForm_vue_vue_type_style_index_0_id_3691aa72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialForm_vue_vue_type_style_index_0_id_3691aa72_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/components/form/SocialForm.vue?vue&type=template&id=3691aa72&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/front/components/form/SocialForm.vue?vue&type=template&id=3691aa72&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialForm_vue_vue_type_template_id_3691aa72_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialForm.vue?vue&type=template&id=3691aa72&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/SocialForm.vue?vue&type=template&id=3691aa72&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialForm_vue_vue_type_template_id_3691aa72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialForm_vue_vue_type_template_id_3691aa72_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/form/UpdatePassForm.vue":
/*!***************************************************************!*\
  !*** ./resources/js/front/components/form/UpdatePassForm.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdatePassForm_vue_vue_type_template_id_12f79bd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdatePassForm.vue?vue&type=template&id=12f79bd4& */ "./resources/js/front/components/form/UpdatePassForm.vue?vue&type=template&id=12f79bd4&");
/* harmony import */ var _UpdatePassForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdatePassForm.vue?vue&type=script&lang=js& */ "./resources/js/front/components/form/UpdatePassForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdatePassForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdatePassForm_vue_vue_type_template_id_12f79bd4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdatePassForm_vue_vue_type_template_id_12f79bd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/form/UpdatePassForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/form/UpdatePassForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/front/components/form/UpdatePassForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePassForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdatePassForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/UpdatePassForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePassForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/form/UpdatePassForm.vue?vue&type=template&id=12f79bd4&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/front/components/form/UpdatePassForm.vue?vue&type=template&id=12f79bd4& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePassForm_vue_vue_type_template_id_12f79bd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdatePassForm.vue?vue&type=template&id=12f79bd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/UpdatePassForm.vue?vue&type=template&id=12f79bd4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePassForm_vue_vue_type_template_id_12f79bd4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdatePassForm_vue_vue_type_template_id_12f79bd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/form/UploadDocsForm.vue":
/*!***************************************************************!*\
  !*** ./resources/js/front/components/form/UploadDocsForm.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadDocsForm_vue_vue_type_template_id_49b75d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadDocsForm.vue?vue&type=template&id=49b75d94&scoped=true& */ "./resources/js/front/components/form/UploadDocsForm.vue?vue&type=template&id=49b75d94&scoped=true&");
/* harmony import */ var _UploadDocsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadDocsForm.vue?vue&type=script&lang=js& */ "./resources/js/front/components/form/UploadDocsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UploadDocsForm_vue_vue_type_style_index_0_id_49b75d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadDocsForm.vue?vue&type=style&index=0&id=49b75d94&scoped=true&lang=css& */ "./resources/js/front/components/form/UploadDocsForm.vue?vue&type=style&index=0&id=49b75d94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UploadDocsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadDocsForm_vue_vue_type_template_id_49b75d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UploadDocsForm_vue_vue_type_template_id_49b75d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49b75d94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/form/UploadDocsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/form/UploadDocsForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/front/components/form/UploadDocsForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadDocsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/UploadDocsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/form/UploadDocsForm.vue?vue&type=style&index=0&id=49b75d94&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/front/components/form/UploadDocsForm.vue?vue&type=style&index=0&id=49b75d94&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocsForm_vue_vue_type_style_index_0_id_49b75d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadDocsForm.vue?vue&type=style&index=0&id=49b75d94&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/UploadDocsForm.vue?vue&type=style&index=0&id=49b75d94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocsForm_vue_vue_type_style_index_0_id_49b75d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocsForm_vue_vue_type_style_index_0_id_49b75d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocsForm_vue_vue_type_style_index_0_id_49b75d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocsForm_vue_vue_type_style_index_0_id_49b75d94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/components/form/UploadDocsForm.vue?vue&type=template&id=49b75d94&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/front/components/form/UploadDocsForm.vue?vue&type=template&id=49b75d94&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocsForm_vue_vue_type_template_id_49b75d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadDocsForm.vue?vue&type=template&id=49b75d94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/UploadDocsForm.vue?vue&type=template&id=49b75d94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocsForm_vue_vue_type_template_id_49b75d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadDocsForm_vue_vue_type_template_id_49b75d94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/mixins/user/ProfileEditMixin.js":
/*!************************************************************!*\
  !*** ./resources/js/front/mixins/user/ProfileEditMixin.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProfileEdit",
  components: {
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"]
  },
  data: function data() {
    return {
      client_input_box: "",
      oddclass: false,
      evenclass: true,
      itineraryData: {},
      width: 0,
      image: "",
      prncilIcon: true,
      userinfo: [],
      total: [],
      school_list: "",
      school_field: false,
      namefield: false,
      addressfield: false,
      institutionfield: false,
      label_name: "",
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        name: "",
        gender: "",
        email: "",
        phone_no: "",
        father_name: "",
        mother_name: "",
        city: "",
        state: "",
        country: "",
        zip_code: "",
        user_class: "",
        admission_year: "",
        address: "",
        dob: "",
        schoolName: "",
        client_type: "",
        client_input: "",
        profession_name: "",
        school_id: "",
        profession_address: "",
        user_profession: "",
        institution_code: "",
        subscribe: false,
        idProof: "aadhar"
      })
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (localStorage.token == "") {
      this.$router.push("/");
    }

    this.$axios.get("/api/school-list").then(function (response) {
      _this.school_list = response.data;
    });
    var data = [];
    this.$axios.post("/api/user-show", data, {
      headers: {
        Authorization: "Bearer ".concat(localStorage.token)
      }
    }).then(function (response) {
      var list = response.data.success;
      _this.form.name = list.name;
      _this.form.gender = list.information["gender"];
      _this.form.email = list.email;
      _this.form.phone_no = list.information["phone_no"];
      _this.form.father_name = list.information["father_name"];
      _this.form.mother_name = list.information["mother"];
      _this.form.city = list.information["city"];
      _this.form.state = list.information["state"];
      _this.form.country = list.information["country"];
      _this.form.zip_code = list.information["zip_code"];
      _this.form.user_class = list.information["user_class"];
      _this.form.admission_year = list.information["admission_year"];
      _this.form.address = list.information["address"];
      _this.form.dob = list.information["dob"];
      _this.form.schoolName = list.information["schoolName"];
      _this.form.user_profession = list.information["user_profession"];
      _this.form.profession_name = list.information["profession_name"];
      _this.form.profession_address = list.information["profession_address"];
      _this.form.institution_code = list.information["institution_code"];
      _this.form.image = list.information["photo"];
      _this.image = _this.form.image;

      if (list.subscribe) {
        if (list.subscribe["status"] == 1) {
          _this.form.subscribe = true;
        } else {
          _this.form.subscribe = false;
        }
      }

      var type = _this.form.user_profession;

      if (type == "student" || type == "teacher") {
        _this.client_input_box = "1";
        _this.form.school_id = list.information.school_id;
      } else if (type == "corporate") {
        _this.client_input_box = "2";
      } else {
        _this.client_input_box = "3";
      }
    })["catch"](function (error) {
      _this.handleError(error);
    });
  },
  watch: {
    institution: function institution() {
      if (this.form.user_profession == "other") {
        this.namefield = true;
        this.addressfield = true;
        this.label_name = "Educational Institution";
      } else {
        this.namefield = false;
        this.addressfield = false;
      }
    },
    "form.user_profession": function formUser_profession() {
      this.namefield = false;
      this.addressfield = false;
      this.school_field = false;

      if (this.form.user_profession == "corporate") {
        this.namefield = true;
        this.addressfield = true;
        this.label_name = "Corporate";
      } else if (this.form.user_profession == "other") {
        this.namefield = true;
        this.label_name = "Occupation";
      } else {
        this.school_field = true;
      }
    }
  },
  methods: {
    onDrop: function onDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      this.createFile(files[0]);
    },
    onChange: function onChange(e) {
      this.createFile(e.target.files[0]);
    },
    createFile: function createFile(file) {
      if (!file.type.match("image.*")) {
        alert("Select an image");
        return;
      }

      var vm = this;
      var data = new FormData();
      data.append("photo", file);
      vm.$axios.post("/api/update-user-image", data, {
        headers: {
          Authorization: "Bearer ".concat(this.$cookies.get('access_token'))
        }
      }).then(function (res) {
        var data = vm.$cookies.get('user');
        data.photo = res.data.photo;
        vm.image = data.photo;
        vm.$cookies.set('user', data);
        vm.$swal.fire({
          icon: "success",
          title: "Profile image updated !!"
        });
      })["catch"](function (error) {
        return console.log();
      }); //
    },
    removeFile: function removeFile() {
      this.image = "";
    },
    /// Update the user information
    updateUserData: function updateUserData() {
      var _this2 = this;

      if (this.form.subscribe == true) {
        this.form.subscribe = 1;
      } else {
        this.form.subscribe = 0;
      }

      this.form.post("/api/user-update", {
        headers: {
          Authorization: "Bearer ".concat(localStorage.token)
        }
      }).then(function (response) {
        _this2.$swal.fire({
          icon: "success",
          title: "Updated Successfully!!"
        });
      })["catch"](function (error) {
        _this2.handleError(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/front/mixins/user/UpdatePasswordMixin.js":
/*!***************************************************************!*\
  !*** ./resources/js/front/mixins/user/UpdatePasswordMixin.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);

var UpdatePasswordMixin = {
  components: {
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    "alert-error": vform__WEBPACK_IMPORTED_MODULE_0__["AlertError"]
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        current_password: "",
        new_password: "",
        confirm_password: ""
      }),
      message: ''
    };
  },
  methods: {
    UpdatePassword: function UpdatePassword() {
      var _this = this;

      var data = {
        current_password: this.form.current_password,
        new_password: this.form.new_password,
        confirm_password: this.form.confirm_password
      };
      this.$api.POST("/api/update-password", data).then(function (response) {
        _this.form.reset();

        _this.message = 'Your password has been updated';
      })["catch"](function (error) {
        _this.handleError(error);
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (UpdatePasswordMixin);

/***/ })

}]);