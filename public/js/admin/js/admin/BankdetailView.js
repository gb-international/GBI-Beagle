"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5712],{20947:(t,a,n)=>{n.d(a,{Z:()=>s});const e={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const s=(0,n(51900).Z)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("span",[t.url?n("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(a){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):n("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(a){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},38302:(t,a,n)=>{n.d(a,{Z:()=>s});const e={name:"ViewLayoutGBI",components:{"back-button":n(20947).Z},props:["backurl"]};const s=(0,n(51900).Z)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("section",{staticClass:"content"},[n("div",{staticClass:"row pt-3 pb-4"},[n("div",{staticClass:"col-sm-12 card_view"},[t._t("viewdata"),t._v(" "),n("div",{staticClass:"text-center"},[n("back-button",{attrs:{url:t.backurl}})],1)],2)])])}),[],!1,null,null,null).exports},98529:(t,a,n)=>{n.r(a),n.d(a,{default:()=>s});const e={name:"ViewBankDetail",components:{"view-layout":n(38302).Z},data:function(){return{list_data:[]}},created:function(){this.encyclopediaData()},methods:{encyclopediaData:function(){var t=this;axios.get("/api/schoolbankdetails/".concat(this.$route.params.id)).then((function(a){t.list_data=a.data,console.log(t.list_data)}))},getImgUrl:function(t){return"/encyclopedia/"+t},goBack:function(){this.$router.go(-1)}}};const s=(0,n(51900).Z)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("view-layout",{attrs:{backurl:"/schoolbankdetails"},scopedSlots:t._u([{key:"viewdata",fn:function(){return[n("div",{staticClass:"row pl-3"},t._l(t.list_data,(function(a,e,s){return n("div",{key:s,staticClass:"col-sm-4"},[n("h5",{staticClass:"text-uppercase"},[t._v(t._s(e))]),t._v(" "),n("p",[t._v(t._s(a))])])})),0)]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);