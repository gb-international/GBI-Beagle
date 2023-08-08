"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5245],{10204:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var r=a(50175);const o={name:"Tour-listUpdatePaymentList",components:{"has-error":r.HasError,Form:r.Form},data:function(){return e={chequePage:!1,tours:"",formShow:!1,payment_mode:"self",self_pay_mode:"cheque",teacher_section:!1,student_section:!1,student_bank:[],bankdetail:[],banknames:[],userinfo:"",robot:!1,teacherform:new r.Form({payment_mode:"self",payment_type:"",tour_code:"",schoolbankdetail_id:"",amount:"",user_id:"",school_id:"",cheque_bank_name:"",date_of_issue:"",ifsc_code:"",cheque_number:"",added_by:"gbi"}),form:new r.Form({name:"",bank_name:"",account_number:"",account_type:"",ifsc_code:"",tour_code:""}),account_type:["Current Account","Saving Account","Recurring Deposit Account","Fixed Deposit Account"]},a=[],(t="banknames")in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e;var e,t,a},mounted:function(){this.editPayment()},methods:{onVerify:function(e){e&&(this.robot=!0)},onCaptchaExpired:function(){this.$refs.recaptcha.reset()},editPayment:function(){var e=this,t="/api/getUserpayments/"+this.$route.params.id;axios.get(t).then((function(t){e.teacherform=t.data})).catch((function(t){console.log(t),e.handleError(t)}))},userData:function(){var e=this,t={school_id:this.$route.params.school_id};axios.post("/api/getshooluser",t).then((function(t){e.userinfo=t.data,e.teacherform.user_id=e.userinfo.user_id})).catch((function(t){e.handleError(t)}))},submitPayment:function(){return"self"==this.teacherform.payment_mode&&"cheque"==this.teacherform.payment_type&&(this.chequePage=!0),"self"==this.teacherform.payment_mode&&this.teacherform.payment_type,"self"==this.teacherform.payment_mode&&"net"==this.teacherform.payment_type&&this.NetPayment(),"student"==this.teacherform.payment_mode&&(this.teacherform.payment_type="",this.submitForm()),!1},NetPayment:function(){var e=this;axios.post("/api/admin-payment",this.teacherform).then((function(t){if(t.data.error)return e.$swal.fire({icon:"error",title:t.data.error}),!1;e.$swal.fire({icon:"success",title:"Successfully Updated !!"})})).catch((function(t){e.$swal.fire({icon:"error",title:"Try again !!"}),e.handleError(t)}));var t={user_id:"",travel_code:"",tour_id:"",school_id:"",no_of_person:"",paid_person:0,unpaid_person:0,total_members:0,amount:0};t.user_id=this.teacherform.user_id,t.amount=this.teacherform.amount,t.travel_code=this.teacherform.travel_code,t.tour_id=this.tour_id,t.school_id=this.teacherform.school_id,document.cookie="admin-payment-data"+this.data,this.$router.push("/payment-page")},submitForm:function(){var e=this;axios.post("/api/updatetourpayment",this.teacherform).then((function(t){if(t.data.error)return e.$swal.fire({icon:"error",title:t.data.error}),!1;e.$swal.fire({icon:"success",title:"Successfully Updated !!"})})).catch((function(t){e.$swal.fire({icon:"error",title:"Try again !!"}),e.handleError(t)}))},backReset:function(){this.chequePage=!1,this.teacherform.cheque_bank_name="",this.teacherform.date_of_issue="",this.teacherform.ifsc_code="",this.teacherform.cheque_number=""},goBack:function(){this.$router.go(-1)},validateCheque:function(){""!=this.teacherform.cheque_bank_name&&""!=this.teacherform.date_of_issue&&""!=this.teacherform.ifsc_code&&""!=this.teacherform.cheque_number?this.submitForm():this.$swal.fire({icon:"error",title:"Please fill all the fields !!"})}}};const s=(0,a(51900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pb-4",attrs:{id:"tour_payment"}},[0==e.chequePage?a("div",[a("div",{staticClass:"container p-t-15 mb-20"},[a("form",[e.userinfo?a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("label",[e._v("User")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.user_id,expression:"teacherform.user_id"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.teacherform,"user_id",t.target.multiple?a:a[0])}}},e._l(e.userinfo,(function(t){return a("option",{key:t.user_id,domProps:{value:t.user.id}},[e._v("\n                "+e._s(t.user.name)+"\n              ")])})),0)]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("label",[e._v("Amount")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.amount,expression:"teacherform.amount"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.teacherform.amount},on:{input:function(t){t.target.composing||e.$set(e.teacherform,"amount",t.target.value)}}})])]):e._e(),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("label",{attrs:{for:"payment_mode mt-20"}},[e._v("Payment By")]),e._v(" "),a("div",{staticClass:"teacher-section"},[a("div",{staticClass:"form-check-inline"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.payment_mode,expression:"teacherform.payment_mode"}],staticClass:"form-check-input",attrs:{type:"radio",value:"student",name:"payment_mode"},domProps:{checked:e._q(e.teacherform.payment_mode,"student")},on:{change:function(t){return e.$set(e.teacherform,"payment_mode","student")}}}),e._v("By Student\n                ")])]),e._v(" "),a("div",{staticClass:"form-check-inline"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.payment_mode,expression:"teacherform.payment_mode"}],staticClass:"form-check-input",attrs:{type:"radio",value:"self",name:"payment_mode"},domProps:{checked:e._q(e.teacherform.payment_mode,"self")},on:{change:function(t){return e.$set(e.teacherform,"payment_mode","self")}}}),e._v("By Self\n                ")])])])])]),e._v(" "),"self"==e.teacherform.payment_mode?a("div",{staticClass:"row mt-20"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.payment_type,expression:"teacherform.payment_type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"option",value:"cheque"},domProps:{checked:e._q(e.teacherform.payment_type,"cheque")},on:{change:function(t){return e.$set(e.teacherform,"payment_type","cheque")}}}),e._v("\n                Cheque/DD\n              ")])])]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.payment_type,expression:"teacherform.payment_type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"option",value:"cash"},domProps:{checked:e._q(e.teacherform.payment_type,"cash")},on:{change:function(t){return e.$set(e.teacherform,"payment_type","cash")}}}),e._v("\n                Cash\n              ")])])]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.payment_type,expression:"teacherform.payment_type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"option",value:"net"},domProps:{checked:e._q(e.teacherform.payment_type,"net")},on:{change:function(t){return e.$set(e.teacherform,"payment_type","net")}}}),e._v("\n                Net Banking\n              ")])])])]):e._e()])])]):e._e(),e._v(" "),"self"==e.teacherform.payment_mode&&"cheque"==e.teacherform.payment_type?a("div",[a("div",{staticClass:"container pt-20"},[a("p",[e._v("Please Fill Cheque/DD Details..")]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"father_name"}},[e._v("Bank Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.cheque_bank_name,expression:"teacherform.cheque_bank_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.teacherform.cheque_bank_name},on:{input:function(t){t.target.composing||e.$set(e.teacherform,"cheque_bank_name",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"father_name"}},[e._v("Date of Issue")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.date_of_issue,expression:"teacherform.date_of_issue"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:e.teacherform.date_of_issue},on:{input:function(t){t.target.composing||e.$set(e.teacherform,"date_of_issue",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"father_name"}},[e._v("IFSC Code")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.ifsc_code,expression:"teacherform.ifsc_code"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.teacherform.ifsc_code},on:{input:function(t){t.target.composing||e.$set(e.teacherform,"ifsc_code",t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"father_name"}},[e._v("Cheque Number")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.teacherform.cheque_number,expression:"teacherform.cheque_number"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.teacherform.cheque_number},on:{input:function(t){t.target.composing||e.$set(e.teacherform,"cheque_number",t.target.value)}}})])])]),e._v(" "),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-outline-primary btn-square itrn_add_btn",attrs:{type:"button"},on:{click:function(t){return e.goBack()}}},[e._v("\n          BACK\n        ")]),e._v(" "),a("button",{staticClass:"btn btn-outline-primary btn-square itrn_add_btn",attrs:{type:"button"},on:{click:function(t){return e.validateCheque()}}},[e._v("\n          SUBMIT\n        ")])])])]):a("div",{staticClass:"row justify-content-center mt-5"},[a("button",{staticClass:"btn btn-outline-primary btn-square itrn_add_btn mr-3",attrs:{type:"button"},on:{click:function(t){return e.goBack()}}},[e._v("\n      BACK\n    ")]),e._v(" "),a("button",{staticClass:"btn btn-outline-primary btn-square itrn_add_btn",attrs:{type:"button"},on:{click:function(t){return e.submitPayment()}}},[e._v("\n      SUBMIT\n    ")])])])}),[],!1,null,null,null).exports}}]);