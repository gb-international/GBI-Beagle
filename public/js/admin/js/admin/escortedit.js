"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5867],{20947:(t,a,r)=>{r.d(a,{Z:()=>o});const e={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const o=(0,r(51900).Z)(e,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("span",[t.url?r("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(a){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):r("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(a){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},91178:(t,a,r)=>{r.d(a,{Z:()=>n});var e=r(20947),o=r(53116);const s={name:"FormButtonGBI",components:{"back-button":e.Z,"submit-button":o.Z}};const n=(0,r(51900).Z)(s,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-sm-9 text-center"},[r("back-button"),t._v(" "),r("submit-button")],1)])}),[],!1,null,null,null).exports},53116:(t,a,r)=>{r.d(a,{Z:()=>o});const e={name:"SubmitButtonGBI",data:function(){return{}}};const o=(0,r(51900).Z)(e,(function(){var t=this,a=t.$createElement;return(t._self._c||a)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v("submit")])],2)}),[],!1,null,null,null).exports},85516:(t,a,r)=>{r.d(a,{Z:()=>o});const e={name:"FromLayoutGBI",data:function(){return{}}};const o=(0,r(51900).Z)(e,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("section",{staticClass:"content"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row justify-content-around"},[r("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},59730:(t,a,r)=>{r.r(a),r.d(a,{default:()=>l});var e=r(50175),o=r(91178),s=r(85516);const n={name:"EditEscort",components:{Form:e.Form,"has-error":e.HasError,"form-buttons":o.Z,"form-layout":s.Z},data:function(){return{form:new e.Form({name:"",salaryPerday:"",phoneno:"",email:"",address:""})}},created:function(){this.escortData()},methods:{escortData:function(){var t=this;axios.get("/api/escort/".concat(this.$route.params.id,"/edit")).then((function(a){t.form.fill(a.data)}))},updateEscort:function(){var t=this;this.form.put("/api/escort/".concat(this.$route.params.id)).then((function(a){t.$router.push("/escort-list"),t.$toast.fire({icon:"success",title:"Escort Updated successfully"})})).catch((function(){}))}}};const l=(0,r(51900).Z)(n,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[r("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.updateEscort()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",id:"name",placeholder:"Add Name",name:"name"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"salaryPerday"}},[t._v("Salary Per Day")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.salaryPerday,expression:"form.salaryPerday"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("salaryPerday")},attrs:{type:"text",id:"salaryPerday",placeholder:"Salary Per Day",name:"salaryPerday"},domProps:{value:t.form.salaryPerday},on:{input:function(a){a.target.composing||t.$set(t.form,"salaryPerday",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"salaryPerday"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phoneno"}},[t._v("Phone Number")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phoneno,expression:"form.phoneno"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("phoneno")},attrs:{type:"text",id:"phoneno",placeholder:"Phone Number",name:"phoneno"},domProps:{value:t.form.phoneno},on:{input:function(a){a.target.composing||t.$set(t.form,"phoneno",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"phoneno"}})],1)])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",id:"email",placeholder:"Enter Email",name:"email"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-8"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[t._v("Address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{type:"text",id:"address",placeholder:"Enter Address",name:"address"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"address"}})],1)])]),t._v(" "),r("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);