"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8509],{20947:(t,o,n)=>{n.d(o,{Z:()=>r});const e={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const r=(0,n(51900).Z)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("span",[t.url?n("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(o){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):n("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(o){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},91178:(t,o,n)=>{n.d(o,{Z:()=>s});var e=n(20947),r=n(53116);const a={name:"FormButtonGBI",components:{"back-button":e.Z,"submit-button":r.Z}};const s=(0,n(51900).Z)(a,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-sm-9 text-center"},[n("back-button"),t._v(" "),n("submit-button")],1)])}),[],!1,null,null,null).exports},53116:(t,o,n)=>{n.d(o,{Z:()=>r});const e={name:"SubmitButtonGBI",data:function(){return{}}};const r=(0,n(51900).Z)(e,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v("submit")])],2)}),[],!1,null,null,null).exports},85516:(t,o,n)=>{n.d(o,{Z:()=>r});const e={name:"FromLayoutGBI",data:function(){return{}}};const r=(0,n(51900).Z)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("section",{staticClass:"content"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-around"},[n("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},21684:(t,o,n)=>{n.r(o),n.d(o,{default:()=>l});var e=n(50175),r=n(91178),a=n(85516);const s={name:"NewFlight",components:{Form:e.Form,"has-error":e.HasError,"form-buttons":r.Z,"form-layout":a.Z},data:function(){return{form:new e.Form({code:"",name:""})}},methods:{AddSchool:function(){var t=this;this.form.post("/api/flight").then((function(o){t.$toast.fire({icon:"success",title:"Flight Added successfully"})})).catch((function(){}))}}};const l=(0,n(51900).Z)(s,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[n("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(o){return o.preventDefault(),t.AddSchool()}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"code"}},[t._v("Flight Code")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.code,expression:"form.code"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("code")},attrs:{type:"text",placeholder:"Enter Flight Number"},domProps:{value:t.form.code},on:{input:function(o){o.target.composing||t.$set(t.form,"code",o.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"code"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("Flight Name ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:"Enter Flight Name"},domProps:{value:t.form.name},on:{input:function(o){o.target.composing||t.$set(t.form,"name",o.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"name"}})],1)])]),t._v(" "),n("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);