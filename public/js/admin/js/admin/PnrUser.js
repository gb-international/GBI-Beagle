"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2577],{9018:(t,r,e)=>{e.r(r),e.d(r,{default:()=>a});const s={name:"UserPnrList",data:function(){return{pnrList:{},userList:{},transport_info:{},total_row:[],update_task:!1,heading:"Assign PNRs To Users",searchQuery:null}},mounted:function(){this.getPnr(),this.getTrain(),this.getPnrUser()},methods:{getTrain:function(){var t=this;if("train"==this.$route.params.transport)var r="/api/bookedtrains/"+this.$route.params.id+"/edit";else if("flight"==this.$route.params.transport)r="/api/bookedflights/"+this.$route.params.id+"/edit";else r="/api/bookedbuses/"+this.$route.params.id+"/edit";axios.get(r).then((function(r){t.headerFormat(r.data)}))},getPnr:function(){var t=this,r={transport_id:this.$route.params.id,tour_code:this.$route.params.tour_id,transport_type:this.$route.params.transport};axios.post("/api/pnrs/get",r).then((function(r){t.pnrList=r.data})).catch((function(r){t.handleError(r)}))},getPnrUser:function(){var t=this,r={transport_id:this.$route.params.id,tour_code:this.$route.params.tour_id,transport_type:this.$route.params.transport};axios.post("/api/pnruser/get",r).then((function(r){r.data.length>0?(t.update_task=!0,t.total_row=[],t.total_row=r.data):t.getUser()})).catch((function(r){t.handleError(r)}))},getUser:function(){var t=this,r={tour_id:this.$route.params.tour_id};axios.post("/api/touruser-list",r).then((function(r){t.formate(r.data)})).catch((function(r){t.handleError(r)}))},formate:function(t){var r=this;t.forEach((function(t){r.total_row.push({user_id:t.user.id,name:t.user.name,email:t.user.email,pnr_id:0,tour_id:r.$route.params.tour_id,transport_id:r.$route.params.id,transport_type:r.$route.params.transport})}))},addData:function(){var t=this,r=0;if(this.total_row.forEach((function(e){if(0==e.pnr_id)return t.$swal.fire({icon:"error",title:"Try again",text:"Please Select PNR For Every Student !"}),r=1,!1})),1==r)return!1;axios.post("/api/add-pnr-user",this.total_row).then((function(r){t.$swal.fire({icon:"success",title:"Submited",text:"PNRs have been assigned to each student !"}),t.update_task=!0})).catch((function(r){t.handleError(r)}))},update_row:function(t,r){var e=this,s={id:r,pnr_id:t};axios.post("/api/update-pnruser",s).then((function(t){e.$swal.fire({icon:"success",title:"Updated",text:"PNRs Updated !"})})).catch((function(t){e.handleError(t)}))},print:function(){this.$htmlToPaper("printMe")},headerFormat:function(t){"train"==this.$route.params.transport&&(this.transport_info={name:t.train.name,code:t.train.code,source:t.source,destination:t.destination,departure:t.departure,arrival:t.arrival}),"flight"==this.$route.params.transport&&(this.transport_info={name:t.flight.name,code:t.flight.code,source:t.source,destination:t.destination,departure:t.departure,arrival:t.arrival}),"bus"==this.$route.params.transport&&(this.transport_info={name:t.bus.company_name,code:t.bus.seater+" seater",source:t.source,destination:t.destination,departure:t.departure,arrival:t.arrival},this.heading="Assign Bus To Users")}},computed:{resultQuery:function(){var t=this;return this.searchQuery?this.total_row.filter((function(r){return t.searchQuery.toLowerCase().split(" ").every((function(t){return r.pnr_number.toLowerCase().includes(t)}))})):this.total_row}}};const a=(0,e(51900).Z)(s,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"pnrstudent simple-form"},[t.transport_info?e("div",{attrs:{id:"printMe"}},[e("div",{},[e("div",{staticClass:"row pt-2"},[e("div",{staticClass:"col-sm-6"},[e("h4",[t._v(t._s(t.transport_info.name)+" - ( "+t._s(t.transport_info.code)+" )")]),t._v(" "),e("p",[e("b",[t._v(t._s(t.transport_info.source)+" - "+t._s(t.transport_info.destination))])])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("p",[e("b",[t._v("Tour Code")]),t._v(" : "+t._s(t.$route.params.tour_id))]),t._v(" "),e("p",[e("b",[t._v("Time : ")]),t._v(" "+t._s(t.transport_info.departure)+" - "+t._s(t.transport_info.arrival))])])]),t._v(" "),e("p",{staticClass:"text-center"},[e("b",[t._v(t._s(t.heading))])])]),t._v(" "),e("table",{staticClass:"table table-bordered mt-3 display-hidden"},[t._m(0),t._v(" "),e("tbody",t._l(t.resultQuery,(function(r,s){return e("tr",{key:s},[e("td",[t._v(t._s(r.name))]),t._v(" "),e("td",[t._v(t._s(r.pnr_number))])])})),0)])]):t._e(),t._v(" "),e("div",{staticClass:"row justify-content-end"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control py-2 border-right-0 border",attrs:{type:"search",value:"search",id:"example-search-input",placeholder:"Search .."},domProps:{value:t.searchQuery},on:{input:function(r){r.target.composing||(t.searchQuery=r.target.value)}}}),t._v(" "),t._m(1)])])]),t._v(" "),e("hr",{staticClass:"pb-2"}),t._v(" "),t._l(t.resultQuery,(function(r,s){return e("div",{key:r.id,staticClass:"row mb-1"},[e("div",{staticClass:"col-sm-1 text-center pt-1"},[e("span",[t._v(t._s(++s))])]),t._v(" "),e("div",{staticClass:"col-sm-5 pt-1"},[e("input",{staticClass:"pl-2",attrs:{type:"text",readonly:""},domProps:{value:r.name}})]),t._v(" "),e("div",{staticClass:"col-sm-5"},[e("select",{directives:[{name:"model",rawName:"v-model",value:r.pnr_id,expression:"user.pnr_id"}],staticClass:"form-control select-field",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(r,"pnr_id",e.target.multiple?s:s[0])}}},t._l(t.pnrList,(function(r){return e("option",{key:r.pnr_number,domProps:{value:r.id}},[t._v(t._s(r.pnr_number))])})),0)]),t._v(" "),e("div",{staticClass:"col-sm-1"},[1==t.update_task?e("img",{staticClass:"edit",attrs:{src:t.$gbiAssets+"/assets/front/icons/update.png"},on:{click:function(e){return t.update_row(r.pnr_id,r.id)}}}):t._e()])])})),t._v(" "),e("div",{staticClass:"row justify-content-center mt-4 pb-5"},[0==t.update_task?e("div",{staticClass:"col-sm-4"},[e("button",{staticClass:"btn p-1 btn-gbi text-white text-uppercase",attrs:{type:"button"},on:{click:function(r){return t.addData()}}},[t._v("Submit")])]):e("div",{staticClass:"col-sm-3 mt-4"},[e("button",{staticClass:"btn text-white p-1 btn-gbi",attrs:{type:"button"},on:{click:t.print}},[t._v("Print")])])])],2)}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("thead",[e("th",[t._v("User Name")]),t._v(" "),e("th",[t._v("PNR Number")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-outline-secondary border-left-0 border",attrs:{type:"button"}},[r("i",{staticClass:"fa fa-search"})])])}],!1,null,null,null).exports}}]);