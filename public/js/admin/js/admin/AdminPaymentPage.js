"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3877],{46040:(t,e,i)=>{i.r(e),i.d(e,{default:()=>l});const o={props:{amount:{type:Number,required:!0},pax:{type:Number,required:!0},cPax:{type:Number,required:!0}},data:function(){return{internet_charge:!1,internet_fee:0,grand_total:0,total:0}},created:function(){this.total=this.amount*this.pax,this.internet_fee=Math.ceil(this.total/.9646*3.54/100),this.grand_total=this.total+this.internet_fee}};var s=i(51900);const r={components:{PaymentCard:(0,s.Z)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"payment-card-form"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-8"},[t._v("Basic Package Cost")]),t._v(" "),i("div",{staticClass:"col-4 text-right"},[i("img",{attrs:{src:t.$gbiAssets+"/images/icons/rupee.png"}}),t._v(t._s(t._f("numberWithCommas")(t.amount))+"\n    ")])]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-8"},[t._v("Number of pax")]),t._v(" "),i("div",{staticClass:"col-4 text-right"},[t._v(t._s(t.pax))])]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-8"},[t._v("Complimentary")]),t._v(" "),i("div",{staticClass:"col-4 text-right"},[t._v(t._s(t.cPax))])]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[t._v("Total package cost")]),t._v(" "),i("div",{staticClass:"col-6 text-right"},[i("img",{attrs:{src:t.$gbiAssets+"/images/icons/rupee.png"}}),t._v(t._s(t._f("numberWithCommas")(t.total))+"\n    ")])]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-8"},[t._v("GBI COUPON CODE")]),t._v(" "),i("div",{staticClass:"col-4 text-right"},[i("img",{attrs:{src:t.$gbiAssets+"/images/icons/rupee.png"}}),t._v("0")])]),t._v(" "),t._m(0),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"row pt-2 pb-2"},[t._m(1),t._v(" "),i("div",{staticClass:"col-4 text-right"},[t._v(t._s(t._f("numberWithCommas")(t.internet_fee)))])]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"row pt-2 pb-2 total"},[t._m(2),t._v(" "),i("div",{staticClass:"col-4 text-right"},[i("img",{attrs:{src:t.$gbiAssets+"/images/icons/rupee.png"}}),t._v(t._s(t._f("numberWithCommas")(t.grand_total))+"\n    ")])])])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-group mt-3 mb-3"},[i("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"GBI Coupon Code"}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("span",{staticClass:"input-group-text bg-info text-white link"},[t._v("Apply")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-8"},[i("p",{staticClass:"m-0",attrs:{title:"Internet charges and tax"}},[t._v("\n        Internet handeling fee\n      ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-8"},[i("p",{staticClass:"m-0 p-0 font-weight-bold"},[t._v("Grand Total")]),t._v(" "),i("small",[t._v("(inclusive of all taxes)")])])}],!1,null,null,null).exports},data:function(){return{shipping_toggle:!1,mobile:{active_el:0},validated:!1,submit_button:!1,errors:{billing_email:"",billing_tel:""},form:{billing_name:"",billing_address:"",billing_city:"",billing_state:"",billing_zip:"",billing_country:"",billing_tel:"",billing_email:"",delivery_name:"",delivery_address:"",delivery_city:"",delivery_state:"",delivery_zipcode:"",delivery_country:"",delivery_tel:"",delivery_email:"",user_id:"",travel_code:"",tour_id:"",school_id:"",tour_price:"",no_of_person:"",amount:0}}},watch:{"form.billing_name":function(){this.billingFormat()},"form.billing_address":function(){this.billingFormat()},"form.billing_city":function(){this.billingFormat()},"form.billing_state":function(){this.billingFormat()},"form.billing_zip":function(){this.billingFormat()},"form.billing_country":function(){this.billingFormat()},"form.billing_email":function(){this.validateEmail(this.form.billing_email),this.billingFormat()},"form.billing_tel":function(){this.validateTel(this.form.billing_tel),this.billingFormat()}},created:function(){null==this.$cookies.get("payment-data")&&this.$router.push("/");var t=this.$cookies.get("payment-data");this.amount=parseInt(t.amouny),this.form.user_id=t.user_id,this.form.travel_code=t.travel_code,this.form.tour_id=t.tour_id,this.form.school_id=t.school_id},methods:{activate:function(t){this.mobile.active_el=t},toggleShipping:function(){this.shipping_toggle=!this.shipping_toggle},submitForm:function(){if(this.form.billing_name.length<1||this.form.billing_address.length<1||this.form.billing_country.length<1||this.form.billing_state.length<1||this.form.billing_city.length<1||this.form.billing_zip.length<1||this.form.billing_tel.length<1||this.form.billing_email.length<1)return this.$swal.fire({icon:"error",title:"Oops...",text:"Please fill Billing  fields"}),!1},billingFormat:function(){if(this.form.billing_name.length<1||this.form.billing_address.length<1||this.form.billing_country.length<1||this.form.billing_state.length<1||this.form.billing_city.length<1||this.form.billing_zip.length<1||this.form.billing_tel.length<1||this.form.billing_email.length<1||""!=this.errors.billing_email||""!=this.errors.billing_tel)return this.submit_button=!1,!1;this.submit_button=!0},shippingFormat:function(){if(1==this.shipping_toggle){if(this.form.shipping_name.length<1||this.form.shipping_address.length<1||this.form.shipping_country.length<1||this.form.shipping_state.length<1||this.form.shipping_city.length<1||this.form.shipping_zip.length<1||this.form.shipping_tel.length<1||this.form.shipping_email.length<1||""!=this.errors.billing_email||""!=this.errors.billing_tel)return this.submit_button=!1,!1;this.submit_button=!0}},validateEmail:function(t){if(""!=t){if(0==/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,3}$/.test(t))return this.errors.billing_email="Please Enter Valid Email",!1;this.errors.billing_email=""}this.billingFormat()},validateTel:function(t){if(""!=t){if(0==/^[789]\d{9}$/.test(t))return this.errors.billing_tel="Please Enter Valid Phone number",!1;this.errors.billing_tel=""}this.billingFormat()}}};const l=(0,s.Z)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"payment_information"}},[i("form",{staticClass:"form",attrs:{method:"POST",action:"/test-data"}},[i("div",{staticClass:"desktop"},[i("div",{staticClass:"row pt-4 pb-4"},[i("div",{staticClass:"col-sm-8"},[i("h6",[t._v("Billing Information")]),t._v(" "),i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"name"}},[t._v("Billing Name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_name,expression:"form.billing_name"}],staticClass:"form-control",attrs:{type:"text",name:"billing_name",required:""},domProps:{value:t.form.billing_name},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_name",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"address"}},[t._v("Billing Address")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_address,expression:"form.billing_address"}],staticClass:"form-control",attrs:{type:"text",name:"billing_address",required:""},domProps:{value:t.form.billing_address},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_address",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"city"}},[t._v("Billing City")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_city,expression:"form.billing_city"}],staticClass:"form-control",attrs:{type:"text",name:"billing_city",required:""},domProps:{value:t.form.billing_city},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_city",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"state"}},[t._v("Billing State")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_state,expression:"form.billing_state"}],staticClass:"form-control",attrs:{type:"text",name:"billing_state",required:""},domProps:{value:t.form.billing_state},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_state",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"billing_zip"}},[t._v("Billing Zip Code")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_zip,expression:"form.billing_zip"}],staticClass:"form-control",attrs:{type:"number",name:"billing_zip",required:""},domProps:{value:t.form.billing_zip},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_zip",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"country"}},[t._v("Billing Country")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_country,expression:"form.billing_country"}],staticClass:"form-control",attrs:{type:"text",name:"billing_country",required:""},domProps:{value:t.form.billing_country},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_country",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"phone_no"}},[t._v("Phone Number")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_tel,expression:"form.billing_tel"}],staticClass:"form-control",attrs:{type:"number",name:"billing_tel",required:""},domProps:{value:t.form.billing_tel},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_tel",e.target.value)}}})]),t._v(" "),i("p",[i("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.billing_tel))])])]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"email"}},[t._v("Billing Email")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_email,expression:"form.billing_email"}],staticClass:"form-control",attrs:{type:"email",name:"billing_email",required:""},domProps:{value:t.form.billing_email},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_email",e.target.value)}}})]),t._v(" "),i("p",[i("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.billing_email))])])]),t._v(" "),i("div",{staticClass:"d-none"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user_id,expression:"form.user_id"}],attrs:{type:"text",name:"user_id"},domProps:{value:t.form.user_id},on:{input:function(e){e.target.composing||t.$set(t.form,"user_id",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.travel_code,expression:"form.travel_code"}],attrs:{type:"text",name:"travel_code"},domProps:{value:t.form.travel_code},on:{input:function(e){e.target.composing||t.$set(t.form,"travel_code",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tour_id,expression:"form.tour_id"}],attrs:{type:"text",name:"tour_id"},domProps:{value:t.form.tour_id},on:{input:function(e){e.target.composing||t.$set(t.form,"tour_id",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.school_id,expression:"form.school_id"}],attrs:{type:"text",name:"school_id"},domProps:{value:t.form.school_id},on:{input:function(e){e.target.composing||t.$set(t.form,"school_id",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tour_price,expression:"form.tour_price"}],attrs:{type:"text",name:"tour_price"},domProps:{value:t.form.tour_price},on:{input:function(e){e.target.composing||t.$set(t.form,"tour_price",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.no_of_person,expression:"form.no_of_person"}],attrs:{type:"text",name:"no_of_person"},domProps:{value:t.form.no_of_person},on:{input:function(e){e.target.composing||t.$set(t.form,"no_of_person",e.target.value)}}})])])]),t._v(" "),i("p",{staticClass:"mt-3 pl-1"},[i("label",{attrs:{for:"checkbox"}},[i("input",{attrs:{type:"checkbox",id:"checkbox"},on:{click:t.toggleShipping}}),t._v(" "),i("small",[t._v("My billing and shipping address are different")])])]),t._v(" "),t.shipping_toggle?i("div",[i("h6",[t._v("Shipping Information")]),t._v(" "),i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"name"}},[t._v("Shipping Name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_name,expression:"form.delivery_name"}],staticClass:"form-control",attrs:{type:"text",name:"delivery_name"},domProps:{value:t.form.delivery_name},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_name",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"address"}},[t._v("Shipping Address")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_address,expression:"form.delivery_address"}],staticClass:"form-control",attrs:{type:"text",name:"delivery_address"},domProps:{value:t.form.delivery_address},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_address",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"city"}},[t._v("Shipping City")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_city,expression:"form.delivery_city"}],staticClass:"form-control",attrs:{type:"text",name:"delivery_city"},domProps:{value:t.form.delivery_city},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_city",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"state"}},[t._v("Shipping State")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_state,expression:"form.delivery_state"}],staticClass:"form-control",attrs:{type:"text",name:"delivery_state"},domProps:{value:t.form.delivery_state},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_state",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"zipcode"}},[t._v("Shipping Zip Code")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_zip,expression:"form.delivery_zip"}],staticClass:"form-control",attrs:{type:"number",name:"delivery_zip"},domProps:{value:t.form.delivery_zip},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_zip",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"country"}},[t._v("Shipping Country")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_country,expression:"form.delivery_country"}],staticClass:"form-control",attrs:{type:"text",name:"delivery_country"},domProps:{value:t.form.delivery_country},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_country",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"phone_no"}},[t._v("Phone Number")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_tel,expression:"form.delivery_tel"}],staticClass:"form-control",attrs:{type:"number",name:"delivery_tel"},domProps:{value:t.form.delivery_tel},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_tel",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"email"}},[t._v("Shipping Email")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_email,expression:"form.delivery_email"}],staticClass:"form-control",attrs:{type:"email",name:"delivery_email"},domProps:{value:t.form.delivery_email},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_email",e.target.value)}}})])])])])]):t._e()]),t._v(" "),i("div",{staticClass:"col-sm-4 pl-4 pr-4"},[i("div",{staticClass:"payment-card"},[i("payment-card",{attrs:{amount:t.form.amount,pax:t.form.no_of_person}})],1),t._v(" "),0==t.submit_button?i("button",{staticClass:"btn btn-block submit-button btn-info p-3 font-weight-bold border-radius-0",attrs:{type:"button"},on:{click:t.submitForm}},[t._v("\n            Confirm & Pay\n          ")]):i("button",{staticClass:"btn btn-block submit-button btn-info p-3 font-weight-bold border-radius-0",attrs:{type:"submit"}},[t._v("\n            Confirm & Pay\n          ")])])])]),t._v(" "),i("div",{staticClass:"mobile m-0 p-0"},[i("div",{staticClass:"row bg-white text-center"},[i("div",{staticClass:"col pt-4 pb-2 link font-weight-bold",class:{active:0==t.mobile.active_el},on:{click:function(e){return t.activate(0)}}},[t._v("\n          Payment info\n        ")]),t._v(" "),i("div",{staticClass:"col pt-4 pb-2 link font-weight-bold",class:{active:1==t.mobile.active_el},on:{click:function(e){return t.activate(1)}}},[t._v("\n          Billing info\n        ")]),t._v(" "),i("div",{staticClass:"col pt-4 pb-2 link font-weight-bold",class:{active:2==t.mobile.active_el},on:{click:function(e){return t.activate(2)}}},[t._v("\n          Shipping info\n        ")])]),t._v(" "),i("div",{staticClass:"p-1 pt-3"},[0==t.mobile.active_el?i("payment-card",{attrs:{amount:t.form.amount,pax:t.form.no_of_person}}):t._e(),t._v(" "),1==t.mobile.active_el?i("div",[i("h5",{staticClass:"pl-1"},[t._v("Billing Information")]),t._v(" "),i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"name"}},[t._v("Billing Name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_name,expression:"form.billing_name"}],staticClass:"form-control",attrs:{type:"text",name:"billing_name",required:""},domProps:{value:t.form.billing_name},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_name",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"address"}},[t._v("Billing Address")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_address,expression:"form.billing_address"}],staticClass:"form-control",attrs:{type:"text",name:"billing_address",required:""},domProps:{value:t.form.billing_address},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_address",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"city"}},[t._v("Billing City")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_city,expression:"form.billing_city"}],staticClass:"form-control",attrs:{type:"text",name:"billing_city",required:""},domProps:{value:t.form.billing_city},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_city",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"state"}},[t._v("Billing State")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_state,expression:"form.billing_state"}],staticClass:"form-control",attrs:{type:"text",name:"billing_state",required:""},domProps:{value:t.form.billing_state},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_state",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"billing_zip"}},[t._v("Billing Zip Code")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_zip,expression:"form.billing_zip"}],staticClass:"form-control",attrs:{type:"number",name:"billing_zip",required:""},domProps:{value:t.form.billing_zip},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_zip",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"country"}},[t._v("Billing Country")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_country,expression:"form.billing_country"}],staticClass:"form-control",attrs:{type:"text",name:"billing_country",required:""},domProps:{value:t.form.billing_country},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_country",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"phone_no"}},[t._v("Phone Number")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_tel,expression:"form.billing_tel"}],staticClass:"form-control",attrs:{type:"number",name:"billing_tel",required:""},domProps:{value:t.form.billing_tel},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_tel",e.target.value)}}})]),t._v(" "),i("p",[i("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.billing_tel))])])]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"email"}},[t._v("Billing Email")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.billing_email,expression:"form.billing_email"}],staticClass:"form-control",attrs:{type:"email",name:"billing_email",required:""},domProps:{value:t.form.billing_email},on:{input:function(e){e.target.composing||t.$set(t.form,"billing_email",e.target.value)}}})]),t._v(" "),i("p",[i("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.billing_email))])])]),t._v(" "),i("div",{staticClass:"d-none"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user_id,expression:"form.user_id"}],attrs:{type:"text",name:"user_id"},domProps:{value:t.form.user_id},on:{input:function(e){e.target.composing||t.$set(t.form,"user_id",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.travel_code,expression:"form.travel_code"}],attrs:{type:"text",name:"travel_code"},domProps:{value:t.form.travel_code},on:{input:function(e){e.target.composing||t.$set(t.form,"travel_code",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tour_id,expression:"form.tour_id"}],attrs:{type:"text",name:"tour_id"},domProps:{value:t.form.tour_id},on:{input:function(e){e.target.composing||t.$set(t.form,"tour_id",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.school_id,expression:"form.school_id"}],attrs:{type:"text",name:"school_id"},domProps:{value:t.form.school_id},on:{input:function(e){e.target.composing||t.$set(t.form,"school_id",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tour_price,expression:"form.tour_price"}],attrs:{type:"text",name:"tour_price"},domProps:{value:t.form.tour_price},on:{input:function(e){e.target.composing||t.$set(t.form,"tour_price",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.no_of_person,expression:"form.no_of_person"}],attrs:{type:"text",name:"no_of_person"},domProps:{value:t.form.no_of_person},on:{input:function(e){e.target.composing||t.$set(t.form,"no_of_person",e.target.value)}}})])])])]):t._e(),t._v(" "),2==t.mobile.active_el?i("div",{staticClass:"min-height-90"},[i("p",{staticClass:"mt-3 pl-1"},[i("label",{attrs:{for:"mobile-checkbox"}},[i("input",{attrs:{type:"checkbox",id:"mobile-checkbox"},on:{click:t.toggleShipping}}),t._v(" "),i("small",[t._v("My billing and shipping address are different")])])]),t._v(" "),t.shipping_toggle?i("div",[i("h5",{staticClass:"pl-1"},[t._v("Shipping Information")]),t._v(" "),i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"name"}},[t._v("Shipping Name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_name,expression:"form.delivery_name"}],staticClass:"form-control",attrs:{type:"text",name:"delivery_name"},domProps:{value:t.form.delivery_name},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_name",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"address"}},[t._v("Shipping Address")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_address,expression:"form.delivery_address"}],staticClass:"form-control",attrs:{type:"text",name:"delivery_address"},domProps:{value:t.form.delivery_address},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_address",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"city"}},[t._v("Shipping City")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_city,expression:"form.delivery_city"}],staticClass:"form-control",attrs:{type:"text",name:"delivery_city"},domProps:{value:t.form.delivery_city},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_city",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"state"}},[t._v("Shipping State")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_state,expression:"form.delivery_state"}],staticClass:"form-control",attrs:{type:"text",name:"delivery_state"},domProps:{value:t.form.delivery_state},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_state",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"zipcode"}},[t._v("Shipping Zip Code")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_zip,expression:"form.delivery_zip"}],staticClass:"form-control",attrs:{type:"number",name:"delivery_zip"},domProps:{value:t.form.delivery_zip},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_zip",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"country"}},[t._v("Shipping Country")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_country,expression:"form.delivery_country"}],staticClass:"form-control",attrs:{type:"text",name:"delivery_country"},domProps:{value:t.form.delivery_country},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_country",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"phone_no"}},[t._v("Phone Number")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_tel,expression:"form.delivery_tel"}],staticClass:"form-control",attrs:{type:"number",name:"delivery_tel"},domProps:{value:t.form.delivery_tel},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_tel",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group m-1"},[i("label",{attrs:{for:"email"}},[t._v("Shipping Email")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.delivery_email,expression:"form.delivery_email"}],staticClass:"form-control",attrs:{type:"email",name:"delivery_email"},domProps:{value:t.form.delivery_email},on:{input:function(e){e.target.composing||t.$set(t.form,"delivery_email",e.target.value)}}})])])])])]):t._e()]):t._e()],1),t._v(" "),0==t.submit_button?i("button",{staticClass:"btn btn-block submit-button btn-info p-3 font-weight-bold mt-3 border-radius-0",attrs:{type:"button"},on:{click:t.submitForm}},[t._v("\n        Confirm & Pay\n      ")]):i("button",{staticClass:"btn btn-block submit-button btn-info p-3 font-weight-bold mt-3 border-radius-0",attrs:{type:"submit"}},[t._v("\n        Confirm & Pay\n      ")])])])])}),[],!1,null,null,null).exports}}]);