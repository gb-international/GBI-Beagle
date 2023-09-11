"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51],{22429:(t,e,a)=>{a.d(e,{Z:()=>o});var s=a(1519),r=a.n(s)()((function(t){return t[1]}));r.push([t.id,".widthControl[data-v-13c5befd]{width:70%!important}.profile_button[data-v-13c5befd]{background-color:#00c4c4;margin-top:5px}@media (min-width:1024px){.appDiv[data-v-13c5befd]{width:45vw}}@media only screen and (max-width:824px){.widthControl[data-v-13c5befd]{width:90%!important}}",""]);const o=r},59489:(t,e,a)=>{a.d(e,{Z:()=>r});const s={props:["text"],data:function(){return{}}};const r=(0,a(51900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"gbi_main-heading pt-3 text-capitalize"},[t._v("\n    "+t._s(t.text)+"\n")])}),[],!1,null,null,null).exports},44644:(t,e,a)=>{a.d(e,{Z:()=>r});const s={props:["text"]};const r=(0,a(51900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"gbi_paragraph largeFirstLetter pt-2"},[t._v("\n    "+t._s(t.text)+"\n")])}),[],!1,null,null,null).exports},51430:(t,e,a)=>{a.d(e,{Z:()=>r});const s={props:["text"],data:function(){return{}}};const r=(0,a(51900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h4",{staticClass:"gbi_sub-heading text-capitalize m-0 p-0"},[t._v("\n    "+t._s(t.text)+"\n")])}),[],!1,null,null,null).exports},96491:(t,e,a)=>{a.r(e),a.d(e,{default:()=>v});var s=a(59489),r=a(51430),o=a(44644),i=a(50175);const n={name:"Application form",components:{HasError:i.HasError,Heading:s.Z},props:["job"],data:function(){return{form:new i.Form({firstname:"",lastname:"",email:"",contactno:"",address:"",state:"",city:"",zipcode:"",applyingfor:this.job,resume:"",filename:"",messagescon:"",current_company:"",job_exp:""}),positions:["Business Development Executive (Delhi)","Business Development Executive (Punjab)","Business Development Executive (Hyderabad)","Software Developer","Business Lead Generation Executive"]}},methods:{onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;if(e[0].size>2097152)return this.swal.fire("Alert!","Resume size should not be more than 2 MB","warning"),!1;if(e.length){this.createImage(e[0]);var a=t.target.files[0];this.form.filename=a.name}},createImage:function(t){var e=this,a=(new Image,new FileReader);a.onload=function(t){e.form.resume=t.target.result},a.readAsDataURL(t)},sendmailResume:function(){var t=this;this.form.job_exp=this.form.job_exp+" Years",this.form.post("/api/join-our-team/send").then((function(e){t.form.reset(),t.form.filename="",t.$swal.fire("Successfully Submited!","Your resume has been sent to HR Deparment..","success")})).catch((function(){}))}}};var l=a(51900);const m=(0,l.Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("article",{staticClass:"join-team",staticStyle:{background:"#dcdcdc !important"}},[a("div",{staticClass:"container pb-5"},[a("heading",{staticClass:"text-center",attrs:{text:"Join Our Brilliant Minds"}}),t._v(" "),a("form",{attrs:{role:"form",method:"POST",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.sendmailResume()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.firstname,expression:"form.firstname"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("firstname")},attrs:{type:"text",placeholder:"Enter first name"},domProps:{value:t.form.firstname},on:{input:function(e){e.target.composing||t.$set(t.form,"firstname",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"firstname"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastname,expression:"form.lastname"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("lastname")},attrs:{type:"text",placeholder:"Enter last name"},domProps:{value:t.form.lastname},on:{input:function(e){e.target.composing||t.$set(t.form,"lastname",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"lastname"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.current_company,expression:"form.current_company"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("current_company")},attrs:{type:"text",placeholder:"Last/current Company"},domProps:{value:t.form.current_company},on:{input:function(e){e.target.composing||t.$set(t.form,"current_company",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"current_company"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"input-group mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.job_exp,expression:"form.job_exp"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("job_exp")},attrs:{type:"number",min:"0",placeholder:"Job Exp."},domProps:{value:t.form.job_exp},on:{input:function(e){e.target.composing||t.$set(t.form,"job_exp",e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),a("has-error",{attrs:{form:t.form,field:"job_exp"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",placeholder:"Enter Email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.contactno,expression:"form.contactno"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("contactno")},attrs:{type:"text",placeholder:"Enter Mobile number"},domProps:{value:t.form.contactno},on:{input:function(e){e.target.composing||t.$set(t.form,"contactno",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"contactno"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("address")},attrs:{type:"text",placeholder:"Enter Address"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"address"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.state,expression:"form.state"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("state")},attrs:{type:"text",placeholder:"Enter State"},domProps:{value:t.form.state},on:{input:function(e){e.target.composing||t.$set(t.form,"state",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"state"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.city,expression:"form.city"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("city")},attrs:{type:"text",placeholder:"Enter City"},domProps:{value:t.form.city},on:{input:function(e){e.target.composing||t.$set(t.form,"city",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"city"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.zipcode,expression:"form.zipcode"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("zipcode")},attrs:{type:"text",placeholder:"Enter Zipcode"},domProps:{value:t.form.zipcode},on:{input:function(e){e.target.composing||t.$set(t.form,"zipcode",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"zipcode"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",class:{"is-invalid":t.form.errors.has("applyingfor")},attrs:{type:"text",readonly:""},domProps:{value:t.form.applyingfor}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"applyingfor"}})],1)]),t._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"form-fullwidth"},[a("div",{staticClass:"upload-btn-wrapper"},[a("button",{staticClass:"btn button3",staticStyle:{"font-size":"16px"}},[t._v(t._s(t.form.filename?"Uploaded":"Select File"))]),t._v(" "),a("input",{class:{"is-invalid":t.form.errors.has("resume")},attrs:{name:"resume",type:"file",accept:".pdf"},on:{change:t.onFileChange}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"resume"}})],1),t._v(" "),a("p",[a("small",{staticClass:"ml-2"},[t._v(t._s(t.form.filename?t.form.filename:"Please uplod PDF file only"))])])])]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.messagescon,expression:"form.messagescon"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("messagescon")},attrs:{rows:"4",placeholder:"Write something.."},domProps:{value:t.form.messagescon},on:{input:function(e){e.target.composing||t.$set(t.form,"messagescon",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"messagescon"}})],1)])]),t._v(" "),t._m(1)])],1)])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("div",{staticClass:"input-group-text"},[t._v("Years")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn profile_button",attrs:{type:"submit",value:"Submit"}},[t._v("\n                Submit\n              ")])])}],!1,null,null,null).exports;a(96290);const c={name:"JobPage",components:{heading:s.Z,"sub-heading":r.Z,paragraph:o.Z,applicationForm:m},metaInfo:{title:"JoinOurTeam | Jobs",meta:[{name:"description",content:"@GoWithGBI Story On How GBI believes in its core values and implement the same  to make your educational travel program a successful one"},{name:"keywords",content:"@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs"},{name:"url",content:"https://www.gowithgbi.com/about-us/our-story"}]},data:function(){return{jobDetails:{}}},mounted:function(){this.getJob()},methods:{getJob:function(){var t=this;this.$axios.get("/api/join-our-team/job/"+this.$route.params.id).then((function(e){t.jobDetails=e.data,console.log(e)}))},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;if(e[0].size>2097152)return swal.fire("Alert!","Resume size should not be more than 2 MB","warning"),!1;if(e.length){this.createImage(e[0]);var a=t.target.files[0];this.form.filename=a.name}},createImage:function(t){new Image;var e=new FileReader,a=this;e.onload=function(t){a.form.resume=t.target.result},e.readAsDataURL(t)},sendmailResume:function(){var t=this;this.form.post("/api/join-our-team/send").then((function(e){t.form.reset(),t.form.filename="",t.$swal.fire("Successfully Submited!","Your resume has been sent to HR Deparment..","success")})).catch((function(){}))}}};var d=a(93379),f=a.n(d),u=a(22429),p={insert:"head",singleton:!1};f()(u.Z,p);u.Z.locals;const v=(0,l.Z)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ourstory"}},[a("div",{staticClass:"advertismentpart"},[a("img",{staticStyle:{height:"100%",width:"100%"},attrs:{src:t.$gbiAssets+"/assets/front/images/job-banner.png",loading:"lazy"}})]),t._v(" "),a("div",{staticClass:"container"},[a("heading",{staticStyle:{"margin-bottom":"35px !important","font-size":"26px !important"},attrs:{text:"Jobs"}}),t._v(" "),a("sub-heading",{staticStyle:{"margin-bottom":"10px !important","font-weight":"600 !important"},attrs:{text:t.jobDetails.title}}),t._v(" "),a("paragraph",{attrs:{text:t.jobDetails.description}}),t._v(" "),a("button",{staticClass:"btn profile_button",attrs:{value:"Submit","data-toggle":"modal","data-target":"#applyModal"}},[t._v("\n      Apply\n    ")])],1),t._v(" "),a("div",{staticClass:"modal",attrs:{id:"applyModal"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content modal-color"},[a("div",{staticClass:"modal-body",staticStyle:{background:"#dcdcdc !important"}},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")]),t._v(" "),t.jobDetails.title?a("applicationForm",{staticClass:"appDiv",attrs:{job:t.jobDetails.title}}):t._e()],1)])])])])}),[],!1,null,"13c5befd",null).exports}}]);