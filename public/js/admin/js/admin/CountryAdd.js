"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8261],{20947:(t,n,o)=>{o.d(n,{Z:()=>e});const r={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const e=(0,o(51900).Z)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("span",[t.url?o("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(n){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):o("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(n){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},91178:(t,n,o)=>{o.d(n,{Z:()=>s});var r=o(20947),e=o(53116);const a={name:"FormButtonGBI",components:{"back-button":r.Z,"submit-button":e.Z}};const s=(0,o(51900).Z)(a,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-sm-9 text-center"},[o("back-button"),t._v(" "),o("submit-button")],1)])}),[],!1,null,null,null).exports},53116:(t,n,o)=>{o.d(n,{Z:()=>e});const r={name:"SubmitButtonGBI",data:function(){return{}}};const e=(0,o(51900).Z)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v("submit")])],2)}),[],!1,null,null,null).exports},85516:(t,n,o)=>{o.d(n,{Z:()=>e});const r={name:"FromLayoutGBI",data:function(){return{}}};const e=(0,o(51900).Z)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",{staticClass:"content"},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row justify-content-around"},[o("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},83828:(t,n,o)=>{o.r(n),o.d(n,{default:()=>c});var r=o(50175),e=o(91178),a=o(85516);const s={name:"NewCountry",components:{Form:r.Form,"has-error":r.HasError,"form-buttons":e.Z,"form-layout":a.Z},data:function(){return{form:new r.Form({name:""})}},methods:{AddSchool:function(){var t=this;this.form.post("/api/country").then((function(n){t.$router.push("/country-list"),t.$toast.fire({icon:"success",title:"Successfully Updated !!!"})})).catch((function(n){422===n.response.status&&(t.errors=n.response.data.errors||{})}))}}};const c=(0,o(51900).Z)(s,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[o("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(n){return n.preventDefault(),t.AddSchool()}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-8"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"name"}},[t._v("Country Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:"Enter Country Name"},domProps:{value:t.form.name},on:{input:function(n){n.target.composing||t.$set(t.form,"name",n.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"name"}})],1)])]),t._v(" "),o("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);