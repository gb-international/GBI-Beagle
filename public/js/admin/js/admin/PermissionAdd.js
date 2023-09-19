"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5574],{20947:(t,n,e)=>{e.d(n,{Z:()=>s});const o={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const s=(0,e(51900).Z)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",[t.url?e("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(n){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):e("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(n){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},35803:(t,n,e)=>{e.d(n,{Z:()=>s});const o={name:"FormButtonGBI",props:["loading"],components:{"back-button":e(20947).Z}};const s=(0,e(51900).Z)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-9 text-center"},[e("back-button"),t._v(" "),e("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v(t._s(t.loading?"submitting":"submit"))])],2)],1)])}),[],!1,null,null,null).exports},85516:(t,n,e)=>{e.d(n,{Z:()=>s});const o={name:"FromLayoutGBI",data:function(){return{}}};const s=(0,e(51900).Z)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-around"},[e("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},12357:(t,n,e)=>{e.r(n),e.d(n,{default:()=>i});var o=e(50175),s=e(35803),r=e(85516);const a={name:"NewRole",components:{Form:o.Form,"has-error":o.HasError,"form-buttons":s.Z,"form-layout":r.Z},data:function(){return{form:new o.Form({name:""})}},methods:{AddPermission:function(){var t=this;this.form.post("/api/permission").then((function(n){t.form.reset(),t.$toast.fire({icon:"success",title:"Successfully Updated !!!"})})).catch((function(n){422===n.response.status&&(t.errors=n.response.data.errors||{})}))},goBack:function(){this.$router.push("/list-permission")}}};const i=(0,e(51900).Z)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[e("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(n){return n.preventDefault(),t.AddPermission()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Permission Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:"Enter Permission Name"},domProps:{value:t.form.name},on:{input:function(n){n.target.composing||t.$set(t.form,"name",n.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1)])]),t._v(" "),e("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);