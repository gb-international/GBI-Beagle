"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[601],{20947:(t,e,r)=>{r.d(e,{Z:()=>a});const o={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const a=(0,r(51900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[t.url?r("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):r("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},35803:(t,e,r)=>{r.d(e,{Z:()=>a});const o={name:"FormButtonGBI",props:["loading"],components:{"back-button":r(20947).Z}};const a=(0,r(51900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-sm-9 text-center"},[r("back-button"),t._v(" "),r("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v(t._s(t.loading?"submitting":"submit"))])],2)],1)])}),[],!1,null,null,null).exports},85516:(t,e,r)=>{r.d(e,{Z:()=>a});const o={name:"FromLayoutGBI",data:function(){return{}}};const a=(0,r(51900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"content"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row justify-content-around"},[r("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},85046:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});var o=r(50175),a=r(35803),s=r(85516);const i={name:"NewSchool",components:{Form:o.Form,"has-error":o.HasError,"form-buttons":a.Z,"form-layout":s.Z},data:function(){return{form:new o.Form({school_name:"",street:"",city_name:"",state_name:"",country_name:"",finance_email_id:"",principal_email_id:"",principal_name:"",principal_mobile_number:"",pincode:"",mobile:"",address:""}),loading:!1}},methods:{AddSchool:function(){var t=this;this.form.post("/api/school").then((function(e){t.loading=!0,t.$router.push("/schools/".concat(e.data.id)),t.$toast.fire({icon:"success",title:"School Added successfully"}),t.loading=!1})).catch((function(){}))}}};const n=(0,r(51900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[t.loading?t._e():r("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[r("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.AddSchool()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"school_name"}},[t._v("School name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.school_name,expression:"form.school_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("school_name")},attrs:{type:"text",placeholder:"Enter School name"},domProps:{value:t.form.school_name},on:{input:function(e){e.target.composing||t.$set(t.form,"school_name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"school_name"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"mobile"}},[t._v("Contact Number")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile,expression:"form.mobile"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("mobile")},attrs:{type:"text",placeholder:"Enter Contact Number"},domProps:{value:t.form.mobile},on:{input:function(e){e.target.composing||t.$set(t.form,"mobile",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"mobile"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Finance Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.finance_email_id,expression:"form.finance_email_id"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("finance_email_id")},attrs:{type:"email",placeholder:"Enter Email",rows:"5"},domProps:{value:t.form.finance_email_id},on:{input:function(e){e.target.composing||t.$set(t.form,"finance_email_id",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"finance_email_id"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Principal Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.principal_name,expression:"form.principal_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("principal_name")},attrs:{type:"text",placeholder:"Enter Principal Name",rows:"5"},domProps:{value:t.form.principal_name},on:{input:function(e){e.target.composing||t.$set(t.form,"principal_name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"principal_name"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Principal Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.principal_email_id,expression:"form.principal_email_id"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("principal_email_id")},attrs:{type:"email",placeholder:"Enter Email",rows:"5"},domProps:{value:t.form.principal_email_id},on:{input:function(e){e.target.composing||t.$set(t.form,"principal_email_id",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"principal_email_id"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"principal_mobile_number"}},[t._v("Principal Mobile Number")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.principal_mobile_number,expression:"form.principal_mobile_number"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("principal_mobile_number")},attrs:{type:"text",placeholder:"Enter Principal Mobile Number"},domProps:{value:t.form.principal_mobile_number},on:{input:function(e){e.target.composing||t.$set(t.form,"principal_mobile_number",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"principal_mobile_number"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"street"}},[t._v("Street")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.street,expression:"form.street"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("street")},attrs:{type:"text",placeholder:"Enter street"},domProps:{value:t.form.street},on:{input:function(e){e.target.composing||t.$set(t.form,"street",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"street"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"city"}},[t._v("City")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.city_name,expression:"form.city_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("city_name")},attrs:{type:"text",placeholder:"Enter city"},domProps:{value:t.form.city_name},on:{input:function(e){e.target.composing||t.$set(t.form,"city_name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"city_name"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"state"}},[t._v("State")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.state_name,expression:"form.state_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("state_name")},attrs:{type:"text",placeholder:"Enter State"},domProps:{value:t.form.state_name},on:{input:function(e){e.target.composing||t.$set(t.form,"state_name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"state_name"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"country"}},[t._v("Country")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.country_name,expression:"form.country_name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("country_name")},attrs:{type:"text",placeholder:"Enter country"},domProps:{value:t.form.country_name},on:{input:function(e){e.target.composing||t.$set(t.form,"country_name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"country_name"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"pincode"}},[t._v("School Pincode")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pincode,expression:"form.pincode"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("pincode")},attrs:{type:"number",placeholder:"Enter pincode"},domProps:{value:t.form.pincode},on:{input:function(e){e.target.composing||t.$set(t.form,"pincode",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"pincode"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[t._v("School Address")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{placeholder:"School Address",rows:"3"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"address"}})],1)])]),t._v(" "),r("form-buttons")],1)]},proxy:!0}],null,!1,515451170)}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"LoaderDiv"},[r("img",{staticClass:"loaderLogo",attrs:{src:"/loader/logo_gif.gif"}}),t._v(" "),r("p",{staticStyle:{"padding-left":"33px","margin-top":"12px","font-weight":"500"}},[t._v("Loading..")])])],1)}),[],!1,null,null,null).exports}}]);