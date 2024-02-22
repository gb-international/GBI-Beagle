"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8856],{20947:(t,s,a)=>{a.d(s,{Z:()=>c});const e={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const c=(0,a(51900).Z)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",[t.url?a("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(s){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):a("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(s){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},38302:(t,s,a)=>{a.d(s,{Z:()=>c});const e={name:"ViewLayoutGBI",components:{"back-button":a(20947).Z},props:["backurl"]};const c=(0,a(51900).Z)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"content"},[a("div",{staticClass:"row pt-3 pb-4"},[a("div",{staticClass:"col-sm-12 card_view"},[t._t("viewdata"),t._v(" "),a("div",{staticClass:"text-center"},[a("back-button",{attrs:{url:t.backurl}})],1)],2)])])}),[],!1,null,null,null).exports},51639:(t,s,a)=>{a.r(s),a.d(s,{default:()=>c});const e={name:"ViewPost",components:{"view-layout":a(38302).Z},data:function(){return{articles:[]}},created:function(){this.categoryView()},methods:{categoryView:function(){var t=this;axios.get("/api/articles/".concat(this.$route.params.id)).then((function(s){t.articles=s.data}))}}};const c=(0,a(51900).Z)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view-layout",{attrs:{backurl:"/articles"},scopedSlots:t._u([{key:"viewdata",fn:function(){return[a("div",{staticClass:"col-sm-12"},[a("h5",[t._v("Title")]),t._v(" "),a("p",[t._v(t._s(t.articles.title))])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Banner image")]),t._v(" "),a("img",{staticClass:"w-100",attrs:{src:t.articles.image}})]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("h5",[t._v("Description")]),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.articles.description)}})]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Slug")]),t._v(" "),a("p",[t._v(t._s(t.articles.slug))])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Meta Title")]),t._v(" "),a("p",[t._v(t._s(t.articles.meta_title))])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Meta Keyword")]),t._v(" "),t._l(t.articles.tags,(function(s){return a("span",{key:s.id},[t._v(t._s(s.title)+", ")])}))],2),t._v(" "),a("div",{staticClass:"col-sm-4 mt-2"},[a("h5",[t._v("Created At")]),t._v(" "),a("p",[t._v(t._s(t.articles.created_at))])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Category")]),t._v(" "),a("p",[t._v(t._s(t.articles.category))])])]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);