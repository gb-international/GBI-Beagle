"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9567],{20947:(t,n,e)=>{e.d(n,{Z:()=>a});const o={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const a=(0,e(51900).Z)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",[t.url?e("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(n){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):e("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(n){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},91178:(t,n,e)=>{e.d(n,{Z:()=>r});var o=e(20947),a=e(53116);const s={name:"FormButtonGBI",components:{"back-button":o.Z,"submit-button":a.Z}};const r=(0,e(51900).Z)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-9 text-center"},[e("back-button"),t._v(" "),e("submit-button")],1)])}),[],!1,null,null,null).exports},53116:(t,n,e)=>{e.d(n,{Z:()=>a});const o={name:"SubmitButtonGBI",data:function(){return{}}};const a=(0,e(51900).Z)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v("submit")])],2)}),[],!1,null,null,null).exports},85516:(t,n,e)=>{e.d(n,{Z:()=>a});const o={name:"FromLayoutGBI",data:function(){return{}}};const a=(0,e(51900).Z)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-around"},[e("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},23274:(t,n,e)=>{e.r(n),e.d(n,{default:()=>l});var o=e(50175),a=e(91178),s=e(53116),r=e(85516);const i={name:"NewTag",components:{Form:o.Form,"has-error":o.HasError,"form-buttons":a.Z,"submit-button":s.Z,"form-layout":r.Z},data:function(){return{form:new o.Form({title:""}),loading:!1}},created:function(){this.editBus()},methods:{editBus:function(){var t=this;axios.get("/api/tags/".concat(this.$route.params.id,"/edit")).then((function(n){setTimeout((function(){return $("#example").DataTable()}),1e3),t.form.fill(n.data)}))},UpdateBus:function(){var t=this;this.loading=!0,this.form.put("/api/tags/".concat(this.$route.params.id)).then((function(n){console.log(n),t.$toast.fire({icon:"success",title:"Successfully Updated"}),t.loading=!1})).catch((function(){}))},back:function(){this.$router.push("/tags")}}};const l=(0,e(51900).Z)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[e("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(n){return n.preventDefault(),t.UpdateBus()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("title")},attrs:{type:"text",placeholder:"Enter title"},domProps:{value:t.form.title},on:{input:function(n){n.target.composing||t.$set(t.form,"title",n.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"title"}})],1)])]),t._v(" "),e("form-buttons")],1)]},proxy:!0}])})],1)}),[],!1,null,null,null).exports}}]);