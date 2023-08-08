"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/front/TourNameList"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jexcel/dist/jexcel.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jexcel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'aws-s3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@linways/table-to-excel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// eslint-disable-line no-unused-vars

 //import jsPDF from "jspdf";
//import 'jspdf-autotable';

 //import { uid } from 'uid';


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TempNameList",
  components: {},
  data: function data() {
    return {
      n_rows: 1,
      school_name: "",
      n_teachers: "",
      n_students: "",
      group_n: "",
      confirmed: false,
      manually: false,
      uploadE: false,
      nameList: [["Adult", "Mr", "Test", "Name", "01/01/1990", "Male", "test@test.com", "1234567890", "9904578901236"], ["Adult", "Mr", "Test", "Name", "01/01/1990", "Male", "test@test.com", "1234567890", "9904578901236"], ["Adult", "Mr", "Test", "Name", "01/01/1990", "Male", "test@test.com", "1234567890", "9904578901236"], [], [], [], [], [], [], []]
    };
  },
  computed: {
    jExcelOptions: function jExcelOptions() {
      return {
        data: this.nameList,
        columns: [{
          type: "dropdown",
          title: "PaxType",
          width: "100px",
          source: ["Adult", "Child", "Infant"]
        }, {
          type: "dropdown",
          title: "Title",
          width: "120px",
          source: ["Mr", "Mrs", "Miss", "Master", "Dr"]
        }, {
          type: "text",
          title: "First Name",
          width: "120px"
        }, {
          type: "text",
          title: "Last Name",
          width: "120px"
        }, {
          type: "calendar",
          title: "DOB",
          width: "150px"
        }, {
          type: "dropdown",
          title: "Gender",
          width: "100px",
          source: ["Male", "Female"]
        }, {
          type: "text",
          title: "Email",
          width: "120px"
        }, {
          type: "numeric",
          title: "Phone",
          width: "120px"
        }, {
          type: "numeric",
          title: "Aadhaar No.",
          width: "140px"
        }]
      };
    }
  },
  mounted: function mounted() {
    //console.log(this.jExcelOptions);
    //console.log(this.$refs["spreadsheet"]);
    var jExcelObj = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jexcel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.$refs["spreadsheet"], this.jExcelOptions); // Object.assign(this, jExcelObj); // pollutes component instance

    Object.assign(this, {
      jExcelObj: jExcelObj
    }); // tucks all methods under jExcelObj object in component instance
    // console.log(this.jExcelObj);
    //const pdf2excel = require('pdf-to-excel');
  },
  methods: {
    convertToExcel: function convertToExcel() {
      var tbl = document.getElementById("spreadsheet");
      var xlBlob = new Blob([tbl], {
        type: 'application/xls'
      }); // let xl = TableToExcel.tableToSheet(document.getElementById("spreadsheet"))
      //this.uploadS3(xl);

      console.log(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@linways/table-to-excel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    },
    changeExcelFile: function changeExcelFile(event) {
      var vm = this;
      var file = event.target.files[0];
      this.uploadS3(file);
    },
    uploadA: function uploadA() {
      this.uploadE = true;
      this.manually = false;
    },
    confirmA: function confirmA() {
      if (!this.school_name) {
        this.$swal.fire("Invalid", "Please provide a valid school name", "warning");
        return;
      } else if (!this.n_teachers) {
        this.$swal.fire("Invalid", "Please provide a valid number of teachers", "warning");
        return;
      } else if (!this.n_students) {
        this.$swal.fire("Invalid", "Please provide a valid number of students", "warning");
        return;
      } else if (!this.group_n) {
        this.$swal.fire("Invalid", "Please provide a valid group number", "warning");
        return;
      } else {
        var val1 = parseInt(this.n_teachers);
        var val2 = parseInt(this.n_students);
        var val = val1 + val2 - 1;
        this.jExcelObj.insertRow(val);
        this.confirmed = true;
      }
    },
    addRows: function addRows() {
      //console.log(this.nameList);
      // this.spreadsheet.insertRow();
      this.manually = true;
      this.uploadE = false;
    },
    insertRows: function insertRows() {
      console.log(this.nameList); // this.spreadsheet.insertRow();

      var val = parseInt(this.n_rows);
      this.jExcelObj.insertRow(val);
    },
    deleteRows: function deleteRows() {
      //console.log(this.n_rows);
      // this.spreadsheet.insertRow();
      this.jExcelObj.deleteRow();
    },
    generatePdf: function generatePdf() {
      if (!this.school_name) {
        this.$swal.fire("Invalid", "Please provide a valid school name", "warning");
        return;
      }

      var doc = new jsPDF('p', 'pt', 'A4');
      var margins = {
        top: 10,
        bottom: 10,
        left: 10,
        width: 810
      };
      var data = []; //let j = 1;

      for (var i = 0; i < this.nameList.length; i++) {
        var d = this.nameList[i];
        var rows = [i + 1, d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9]];
        data.push(rows);
      }

      var t1 = doc.autoTable({
        head: [['S.No', 'PaxType', 'Title', 'First Name', 'Last Name', 'DOB', 'Gender', 'Email', 'Phone', 'Aadhaar No.']],
        body: data
      }); //console.log(doc.output('blob'))

      var blob = new Blob(t1, {
        type: "application/xls"
      });
      this.uploadS3(blob); //console.log(doc.output())
    },
    uploadS3: function uploadS3(file) {
      var config = {
        bucketName: 'gbi-assets',
        dirName: 'TourForms',

        /* optional */
        region: 'ap-south-1',
        accessKeyId: 'AKIAVIFUIYYPGWBBML4K',
        secretAccessKey: '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' //ContentType: "application/vnd.ms-excel"
        //s3Url: 'https://gbi-assets.s3.ap-south-1.amazonaws.com/TourForms', /* optional */

      };
      var S3Client = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'aws-s3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(config);
      /*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */

      var val1 = parseInt(this.n_teachers);
      var val2 = parseInt(this.n_students);
      var pax = val1 + val2;
      var newFileName = this.school_name + '_group-' + this.group_n + '_pax-' + pax;
      S3Client.uploadFile(file, newFileName).then( //data => console.log(data)
      this.$swal.fire("Thank You", "Form was submitted", "success") //window.open("https://gbi-assets.s3.ap-south-1.amazonaws.com/TourForms/"+newFileName, '_blank')
      );
      /*.catch(
        //err => console.error(err)
        this.$swal.fire("Error", "Form submission failed, please try again", "warning")
      )*/

      /**
       * {
       *   Response: {
       *     bucket: "your-bucket-name",
       *     key: "photos/image.jpg",
       *     location: "https://your-bucket.s3.amazonaws.com/photos/image.jpg"
       *   }
       * }
       */
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/tourForms/NameList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/tourForms/NameList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _front_components_tour_TempExcelUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/components/tour/TempExcelUpload */ "./resources/js/front/components/tour/TempExcelUpload.vue");
//
//
//
//
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
  name: "NameList",
  components: {
    'form-layout': _front_components_tour_TempExcelUpload__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=style&index=0&id=f96e519c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=style&index=0&id=f96e519c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.addRows[data-v-f96e519c] {\r\n  font-size: 14px; \r\n  font-weight: 600; \r\n  font-family: Raleway\n}\n.HeadingT[data-v-f96e519c] {\r\n  font-size: 18px; \r\n  font-weight: 600; \r\n  font-family: Raleway\n}\n.HeadingQ[data-v-f96e519c] {\r\n  font-size: 15px; \r\n  font-weight: 600; \r\n  font-family: Raleway\n}\n.marG[data-v-f96e519c]{\r\n  margin-bottom: 38vh !important;\n}\n.display-n[data-v-f96e519c]{\r\n  display: none;\n}\n.bordR[data-v-f96e519c]{\r\n  border-top: solid 2px black;\n}\n.NotE[data-v-f96e519c]{\r\n  font-size: 15px; \r\n  font-weight: 600; \r\n  font-family: Raleway;\r\n  color: red;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=style&index=0&id=f96e519c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=style&index=0&id=f96e519c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TempExcelUpload_vue_vue_type_style_index_0_id_f96e519c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TempExcelUpload.vue?vue&type=style&index=0&id=f96e519c&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=style&index=0&id=f96e519c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TempExcelUpload_vue_vue_type_style_index_0_id_f96e519c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TempExcelUpload_vue_vue_type_style_index_0_id_f96e519c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/front/components/tour/TempExcelUpload.vue":
/*!****************************************************************!*\
  !*** ./resources/js/front/components/tour/TempExcelUpload.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TempExcelUpload_vue_vue_type_template_id_f96e519c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TempExcelUpload.vue?vue&type=template&id=f96e519c&scoped=true& */ "./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=template&id=f96e519c&scoped=true&");
/* harmony import */ var _TempExcelUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TempExcelUpload.vue?vue&type=script&lang=js& */ "./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=script&lang=js&");
/* harmony import */ var _TempExcelUpload_vue_vue_type_style_index_0_id_f96e519c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TempExcelUpload.vue?vue&type=style&index=0&id=f96e519c&scoped=true&lang=css& */ "./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=style&index=0&id=f96e519c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TempExcelUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TempExcelUpload_vue_vue_type_template_id_f96e519c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TempExcelUpload_vue_vue_type_template_id_f96e519c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f96e519c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/tour/TempExcelUpload.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/tourForms/NameList.vue":
/*!*********************************************************!*\
  !*** ./resources/js/front/pages/tourForms/NameList.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NameList_vue_vue_type_template_id_5ff64690___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NameList.vue?vue&type=template&id=5ff64690& */ "./resources/js/front/pages/tourForms/NameList.vue?vue&type=template&id=5ff64690&");
/* harmony import */ var _NameList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NameList.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/tourForms/NameList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NameList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NameList_vue_vue_type_template_id_5ff64690___WEBPACK_IMPORTED_MODULE_0__.render,
  _NameList_vue_vue_type_template_id_5ff64690___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/tourForms/NameList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TempExcelUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TempExcelUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TempExcelUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/tourForms/NameList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/front/pages/tourForms/NameList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NameList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/tourForms/NameList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=style&index=0&id=f96e519c&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=style&index=0&id=f96e519c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TempExcelUpload_vue_vue_type_style_index_0_id_f96e519c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TempExcelUpload.vue?vue&type=style&index=0&id=f96e519c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=style&index=0&id=f96e519c&scoped=true&lang=css&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TempExcelUpload_vue_vue_type_style_index_0_id_f96e519c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=template&id=f96e519c&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=template&id=f96e519c&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TempExcelUpload_vue_vue_type_template_id_f96e519c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TempExcelUpload_vue_vue_type_template_id_f96e519c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TempExcelUpload_vue_vue_type_template_id_f96e519c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TempExcelUpload.vue?vue&type=template&id=f96e519c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=template&id=f96e519c&scoped=true&");


/***/ }),

/***/ "./resources/js/front/pages/tourForms/NameList.vue?vue&type=template&id=5ff64690&":
/*!****************************************************************************************!*\
  !*** ./resources/js/front/pages/tourForms/NameList.vue?vue&type=template&id=5ff64690& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NameList_vue_vue_type_template_id_5ff64690___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NameList_vue_vue_type_template_id_5ff64690___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NameList_vue_vue_type_template_id_5ff64690___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NameList.vue?vue&type=template&id=5ff64690& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/tourForms/NameList.vue?vue&type=template&id=5ff64690&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=template&id=f96e519c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/components/tour/TempExcelUpload.vue?vue&type=template&id=f96e519c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container mb-5 marG" }, [
    _vm.confirmed
      ? _c("img", {
          staticClass: "img w-20 mr-2 link mb-2",
          attrs: { src: _vm.$gbiAssets + "/images/icons/back.png" },
          on: {
            click: function ($event) {
              _vm.confirmed = false
            },
          },
        })
      : _vm._e(),
    _vm._v(" "),
    !_vm.confirmed
      ? _c("section", { staticClass: "mt-4" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass:
                  "p-1 bg-light rounded rounded-pill shadow-sm mb-3 col-md-10 col-sm-12 mr-1",
              },
              [
                _c("div", { staticClass: "input-group border-1" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.school_name,
                        expression: "school_name",
                      },
                    ],
                    staticClass: "form-control border-0 bg-light",
                    attrs: {
                      type: "text",
                      placeholder: "Enter School Name",
                      "aria-describedby": "button-addon1",
                    },
                    domProps: { value: _vm.school_name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.school_name = $event.target.value
                      },
                    },
                  }),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "p-1 bg-light rounded rounded-pill shadow-sm mb-4 col-md-4 col-sm-12 mr-1",
              },
              [
                _c("div", { staticClass: "input-group border-1" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.group_n,
                        expression: "group_n",
                      },
                    ],
                    staticClass: "form-control border-0 bg-light",
                    attrs: {
                      type: "text",
                      placeholder: "Group Number",
                      "aria-describedby": "button-addon1",
                    },
                    domProps: { value: _vm.group_n },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.group_n = $event.target.value
                      },
                    },
                  }),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "p-1 bg-light rounded rounded-pill shadow-sm mb-4 col-md-3 col-sm-6 mr-1",
              },
              [
                _c("div", { staticClass: "input-group border-1" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.n_teachers,
                        expression: "n_teachers",
                      },
                    ],
                    staticClass: "form-control border-0 bg-light",
                    attrs: {
                      type: "number",
                      placeholder: "No. of Teachers",
                      "aria-describedby": "button-addon1",
                      min: "0",
                    },
                    domProps: { value: _vm.n_teachers },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.n_teachers = $event.target.value
                      },
                    },
                  }),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "p-1 bg-light rounded rounded-pill shadow-sm mb-4 col-md-3 col-sm-6",
              },
              [
                _c("div", { staticClass: "input-group border-1" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.n_students,
                        expression: "n_students",
                      },
                    ],
                    staticClass: "form-control border-0 bg-light",
                    attrs: {
                      type: "number",
                      placeholder: "No. of Students",
                      "aria-describedby": "button-addon1",
                      min: "0",
                    },
                    domProps: { value: _vm.n_students },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.n_students = $event.target.value
                      },
                    },
                  }),
                ]),
              ]
            ),
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "btn btn-info mt-3 mb-4 rounded rounded-pill shadow-sm px-5 py-2",
              staticStyle: { "font-size": "17px" },
              attrs: { type: "submit" },
              on: {
                click: function ($event) {
                  return _vm.confirmA()
                },
              },
            },
            [_vm._v("Confirm")]
          ),
        ])
      : _c("section", [
          _c("p", { staticClass: "mt-2 mb-4 HeadingT" }, [
            _vm._v("How would you like to fillup the form?"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex justify-content-between" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-info",
                attrs: { type: "submit" },
                on: {
                  click: function ($event) {
                    return _vm.addRows()
                  },
                },
              },
              [_vm._v("Manually")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-warning",
                attrs: { type: "submit" },
                on: {
                  click: function ($event) {
                    return _vm.uploadA()
                  },
                },
              },
              [_vm._v("Upload Excel")]
            ),
          ]),
        ]),
    _vm._v(" "),
    _c("div"),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.manually && _vm.confirmed,
            expression: "manually && confirmed",
          },
        ],
      },
      [
        _c("div", { ref: "spreadsheet", attrs: { id: "spreadsheet" } }),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex justify-content-between" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-danger",
              attrs: { type: "submit" },
              on: {
                click: function ($event) {
                  return _vm.deleteRows()
                },
              },
            },
            [_vm._v("Delete Last Row")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-info",
              attrs: { type: "submit" },
              on: {
                click: function ($event) {
                  return _vm.convertToExcel()
                },
              },
            },
            [_vm._v("Submit")]
          ),
        ]),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.uploadE && _vm.confirmed,
            expression: "uploadE && confirmed",
          },
        ],
      },
      [
        _c("p", { staticClass: "my-4 HeadingQ" }, [
          _vm._v(
            "Please download the GBI Airlines Format and upload it below after filling up the details."
          ),
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "btn btn-success mb-4 rounded rounded-pill shadow-sm px-4 py-2",
            staticStyle: { "font-size": "18px" },
            attrs: { type: "submit", href: "/assets/Tour_Form_.xls" },
          },
          [_vm._v("Download GBI Airlines Format")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "my-4 HeadingQ" }, [
          _vm._v("Please upload the filled up excel sheet below."),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-3" }, [
          _c("div", { staticClass: "form-group file-upload" }, [
            _c(
              "div",
              {
                staticClass: "input-group file-input-group",
                attrs: { "data-controller": "file-input" },
              },
              [
                _c("input", {
                  staticClass: "form-control display-n",
                  attrs: {
                    type: "text",
                    placeholder: ".xls file upload",
                    readonly: "",
                    "data-target": "file-input.value",
                  },
                }),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control display-n",
                  attrs: {
                    type: "file",
                    id: "customFile",
                    name: "file",
                    accept: ".xls",
                  },
                  on: {
                    change: function ($event) {
                      return _vm.changeExcelFile($event)
                    },
                  },
                }),
                _vm._v(" "),
                _vm._m(4),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _vm._m(5),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "span",
        { staticClass: "input-group-text border-0 rounded rounded-pill" },
        [_vm._v("School Name:")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "span",
        { staticClass: "input-group-text border-0 rounded rounded-pill" },
        [_vm._v("Group No:")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "span",
        { staticClass: "input-group-text border-0 rounded rounded-pill" },
        [_vm._v("Teachers:")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "span",
        { staticClass: "input-group-text border-0 rounded rounded-pill" },
        [_vm._v("Students:")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "label",
        {
          staticClass:
            "btn btn-dark mb-4 rounded rounded-pill shadow-sm px-4 py-2",
          attrs: { for: "customFile" },
        },
        [_vm._v("Upload Excel Sheet")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bordR" }, [
      _c("div", { staticClass: "NotE mt-3" }, [
        _c("p", [_vm._v("Note:")]),
        _vm._v(" "),
        _c("ul", [
          _c("li", [
            _vm._v(
              "Please note that once the names are submitted to us there will be no changes and the same names will be submitted to the airlines."
            ),
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._v(
              "The names entered by the school authorities should be as per the travellers Aadhaar card."
            ),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/tourForms/NameList.vue?vue&type=template&id=5ff64690&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/tourForms/NameList.vue?vue&type=template&id=5ff64690& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container bg-white" }, [
    _c("div", { staticClass: "AddGroup p-t-15" }, [
      _c("div", [_c("form-layout")], 1),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);