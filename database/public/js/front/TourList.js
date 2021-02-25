(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{223:function(t,s,r){"use strict";r.r(s);var a={props:["tour","userinfo"],data:function(){return{}},methods:{showTourDetail:function(t){this.$cookies.set("tour_code",t),this.$router.push("/tour-detail")},payTour:function(t){this.$store.commit("PAYMENT_TOUR_DATA",{tour_id:t}),this.$router.push("/tour-payment")}}},i=r(0),e={props:["tour","userinfo"],data:function(){return{}},methods:{showTourDetail:function(t){this.$cookies.set("tour_code",t),this.$router.push("/tour-detail")},payTour:function(t){this.$store.commit("PAYMENT_TOUR_DATA",{tour_id:t}),this.$router.push("/tour-payment")}}},o={name:"Tour-list",components:{tourcard:Object(i.a)(a,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"w-100"},[r("div",{staticClass:"bg-cover text-white tour_list_card mt-3",style:{backgroundImage:"url('/uploadimage/"+t.tour.tour.itinerary.detail_photo+"')"}},[r("div",{staticClass:"container pt-4 font-weight-bold"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-8"},[r("p",{staticClass:"font-italic"},[r("span",{staticClass:"display-4 font-weight-normal"},[t._v("Tour to")]),t._v(" "),r("small",[t._v("("+t._s(t.tour.tour.tour_start_date)+" -\n              "+t._s(t.tour.tour.tour_end_date)+")")])]),t._v(" "),r("p",{staticClass:"lead font-weight-normal"},[t._v("\n            "+t._s(t.tour.tour.itinerary.title)+"\n          ")])]),t._v(" "),r("div",{staticClass:"col-sm-4 text-center mb-10 mt-5"},["show"==t.tour.paid_button?r("button",{staticClass:"btn btn-light",on:{click:function(s){return t.payTour(t.tour.tour_code)}}},[t._v("\n            Pay Now\n          ")]):t._e(),t._v(" "),"success"==t.tour.payment?r("img",{staticClass:"w-45",attrs:{src:"/images/icons/paid.png"}}):t._e()])]),t._v(" "),r("div",{staticClass:"row p-0"},[r("div",{staticClass:"col-sm-12 p-0"},["success"==t.tour.payment?r("div",{staticClass:"text-center link bg-transparent-card p-t-15 pb-15 text-white link",on:{click:function(s){return t.showTourDetail(t.tour.tour_code)}}},[r("img",{staticClass:"w-20 mr-1",attrs:{src:"/images/icons/viewitinerary.png"}}),t._v("\n            View Itinerary\n          ")]):r("div",{staticClass:"text-center bg-transparent-card p-t-15 pb-15 text-white"},[r("img",{staticClass:"w-20 mr-1",attrs:{src:"/images/icons/viewitinerary.png"}}),t._v("View Itinerary\n          ")])])])])])])}),[],!1,null,null,null).exports,InchargeTourCard:Object(i.a)(e,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"w-100"},[r("div",{staticClass:"bg-cover text-white tour_list_card mt-3",style:{backgroundImage:"url('/uploadimage/"+t.tour.itinerary.detail_photo+"')"}},[r("div",{staticClass:"container pt-4 font-weight-bold"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-8"},[r("p",{staticClass:"font-italic"},[r("span",{staticClass:"display-4 font-weight-normal"},[t._v("Tour to")]),t._v(" "),r("small",[t._v("("+t._s(t.tour.tour_start_date)+" - "+t._s(t.tour.tour_end_date)+")")])]),t._v(" "),r("p",{staticClass:"lead font-weight-normal"},[t._v(t._s(t.tour.itinerary.title))])]),t._v(" "),r("div",{staticClass:"col-sm-4 text-center mb-10 mt-5"},["show"==t.tour.paid_button?r("button",{staticClass:"btn btn-light",on:{click:function(s){return t.payTour(t.tour.tour_id)}}},[t._v("Pay Now")]):t._e(),t._v(" "),"success"==t.tour.payment?r("img",{staticClass:"w-45",attrs:{src:"/images/icons/paid.png"}}):t._e()])]),t._v(" "),r("div",{staticClass:"row text-center"},[r("div",{staticClass:"col p-0"},[r("div",{staticClass:"text-center link bg-transparent-card p-t-15 pb-15 text-white link",on:{click:function(s){return t.showTourDetail(t.tour.tour_id)}}},[r("img",{staticClass:"w-20 mr-1",attrs:{src:"/images/icons/viewitinerary.png"}}),t._v(" View Itinerary\n            ")])]),t._v(" "),r("div",{staticClass:"col p-0"},[r("router-link",{attrs:{to:"/group-member/"+t.tour.tour_id}},[r("div",{staticClass:"text-cente bg-transparent-card p-t-15 pb-15 ml-1 text-white"},[r("img",{staticClass:"w-20 mr-1",attrs:{src:"/images/icons/viewmemberlist.png"}}),t._v(" Group Members\n            ")])])],1)])])])])}),[],!1,null,null,null).exports},data:function(){return{tours:[],formShow:!1,userinfo:"",travel_code:""}},mounted:function(){this.userData(),this.tourListData()},methods:{tourListData:function(){var t=this,s={school_id:this.userinfo.school_id};this.$api.POST("/api/tour-list",s).then((function(s){console.log(s),0==s.length?t.formShow=!0:t.tours=s})),0==this.tours.length&&(this.formShow=!1)},UserTourSave:function(){var t=this,s={travel_code:this.travel_code};this.$api.POST("/api/tour-travel-save",s).then((function(s){"error"==s?t.$swal.fire({icon:"error",title:"Try again",text:"Please enter valid travel code!"}):(t.$swal.fire("Valid Code","Check your tour details.","success"),t.tourListData())})).catch((function(s){t.handleError(s)}))},userData:function(){if(this.userinfo=this.$cookies.get("user"),0==this.userinfo.status)return this.$router.push("/user-information"),!1;0==this.userinfo.change_password&&this.$swal.fire("warning","Please change your password for security purpose !!! <br>","warning")}}},n=Object(i.a)(o,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"container"},[r("div",{staticClass:"row text-right"},[r("button",{staticClass:"btn btn-info float-right mt-2",attrs:{"data-toggle":"modal","data-target":"#codeModal"}},[t._v("\n      Add Tour Code\n    ")]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"codeModal"}},[r("div",{staticClass:"modal-dialog modal-lg"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-body"},[r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("\n              ×\n            ")]),t._v(" "),r("form",{staticClass:"form",attrs:{method:"post"},on:{submit:function(s){return s.preventDefault(),t.UserTourSave()}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tour_code"}},[t._v("Travel Code")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.travel_code,expression:"travel_code"}],staticClass:"form-control input-border",attrs:{type:"text",placeholder:"Enter travel code",required:""},domProps:{value:t.travel_code},on:{input:function(s){s.target.composing||(t.travel_code=s.target.value)}}})]),t._v(" "),t._m(0)])])])])])]),t._v(" "),t.tours?r("div",t._l(t.tours,(function(s){return r("div",{key:s.id,staticClass:"row"},[1==t.userinfo.is_incharge?r("InchargeTourCard",{attrs:{tour:s,userinfo:t.userinfo}}):r("tourcard",{attrs:{tour:s,userinfo:t.userinfo}})],1)})),0):t._e()])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn profile_button",attrs:{type:"submit"}},[this._v("Save")])])}],!1,null,null,null);s.default=n.exports}}]);