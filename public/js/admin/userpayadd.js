(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{326:function(t,s,r){"use strict";r.r(s);var a=r(1),o={name:"NewTourType",components:{Form:a.Form,"has-error":a.HasError},data:function(){return{form:new a.Form({name:""})}},methods:{AddSchool:function(){var t=this;this.form.post("/api/tourtype").then((function(s){t.$router.push("/tourtype"),t.$toast.fire({icon:"success",title:"Successfully Updated !!!"})})).catch((function(s){422===s.response.status&&(t.errors=s.response.data.errors||{})}))},goBack:function(){this.$router.push("/tourtype")}}},e=r(0),n=Object(e.a)(o,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("section",{staticClass:"content"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row justify-content-around"},[r("div",{staticClass:"col-md-12"},[r("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(s){return s.preventDefault(),t.AddSchool()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-8"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("tourtype Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:"Enter tourtype Name"},domProps:{value:t.form.name},on:{input:function(s){s.target.composing||t.$set(t.form,"name",s.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-2"}),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group text-center"},[r("button",{staticClass:"btn btn-primary itrn_add_btn",on:{click:function(s){return t.goBack()}}},[t._v("Back")])])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"col-sm-2"})])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"form-group text-center"},[s("button",{staticClass:"btn btn-primary btn-block itrn_add_btn",attrs:{type:"submit"}},[this._v("SUBMIT")])])])}],!1,null,null,null);s.default=n.exports}}]);