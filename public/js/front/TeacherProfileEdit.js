(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{18:function(e,t,o){"use strict";var r=o(2);t.a={name:"ProfileEdit",components:{"has-error":r.HasError},data:function(){return{client_input_box:"",oddclass:!1,evenclass:!0,itineraryData:{},width:0,image:"",prncilIcon:!0,userinfo:[],total:[],school_list:"",school_field:!1,namefield:!1,addressfield:!1,institutionfield:!1,label_name:"",form:new r.Form({name:"",gender:"",email:"",phone_no:"",father_name:"",mother_name:"",city:"",state:"",country:"",zip_code:"",user_class:"",admission_year:"",address:"",dob:"",schoolName:"",client_type:"",client_input:"",profession_name:"",school_id:"",profession_address:"",user_profession:"",institution_code:"",subscribe:!1})}},mounted:function(){var e=this;""==localStorage.token&&this.$router.push("/"),this.$axios.get("/api/school-list").then((function(t){e.school_list=t.data}));this.$axios.post("/api/user-show",[],{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){var o=t.data.success;e.form.name=o.name,e.form.gender=o.information.gender,e.form.email=o.email,e.form.phone_no=o.information.phone_no,e.form.father_name=o.information.father_name,e.form.mother_name=o.information.mother,e.form.city=o.information.city,e.form.state=o.information.state,e.form.country=o.information.country,e.form.zip_code=o.information.zip_code,e.form.user_class=o.information.user_class,e.form.admission_year=o.information.admission_year,e.form.address=o.information.address,e.form.dob=o.information.dob,e.form.schoolName=o.information.schoolName,e.form.user_profession=o.information.user_profession,e.form.profession_name=o.information.profession_name,e.form.profession_address=o.information.profession_address,e.form.institution_code=o.information.institution_code,e.form.image=o.information.photo,e.image=e.form.image,o.subscribe&&(1==o.subscribe.status?e.form.subscribe=!0:e.form.subscribe=!1);var r=e.form.user_profession;"student"==r||"teacher"==r?(e.client_input_box="1",e.form.school_id=o.information.school_id):e.client_input_box="corporate"==r?"2":"3"})).catch((function(t){e.handleError(t)}))},watch:{institution:function(){"other"==this.form.user_profession?(this.namefield=!0,this.addressfield=!0,this.label_name="Educational Institution"):(this.namefield=!1,this.addressfield=!1)},"form.user_profession":function(){this.namefield=!1,this.addressfield=!1,this.school_field=!1,"corporate"==this.form.user_profession?(this.namefield=!0,this.addressfield=!0,this.label_name="Corporate"):"other"==this.form.user_profession?(this.namefield=!0,this.label_name="Occupation"):this.school_field=!0}},methods:{onDrop:function(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.files;this.createFile(t[0])},onChange:function(e){var t=e.target.files;this.createFile(t[0])},createFile:function(e){if(e.type.match("image.*")){new Image;var t=new FileReader,o=this;t.onload=function(e){o.image=e.target.result;var t=new FormData;t.append("photo",o.image),t.append("_method","post"),o.$axios.post("/api/update-user-image",t,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){o.image=e.data.photo,o.$swal.fire({icon:"success",title:"Profile image updated !!"})})).catch((function(e){return console.log()}))},t.readAsDataURL(e)}else alert("Select an image")},removeFile:function(){this.image=""},updateUserData:function(){var e=this;1==this.form.subscribe?this.form.subscribe=1:this.form.subscribe=0,this.form.post("/api/user-update",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.$swal.fire({icon:"success",title:"Profile updated!!"})})).catch((function(t){e.handleError(t)}))}}}},257:function(e,t,o){"use strict";o.r(t);var r={name:"ProfileEdit",mixins:[o(18).a],data:function(){return{}}},s=o(0),a=Object(s.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"grey-form",attrs:{id:"user_edit_form"}},[o("div",{staticClass:"text-center"},[o("div",{staticClass:"avatar-upload user_edit_image"},[o("form",{attrs:{role:"form",enctype:"multipart/form-data"}},[o("div",{staticClass:"avatar-edit"},[o("input",{attrs:{type:"file",id:"imageUpload",accept:".png, .jpg, .jpeg"},on:{change:e.onChange}}),e._v(" "),e._m(0)]),e._v(" "),o("div",{staticClass:"avatar-preview"},[o("div",{staticStyle:{"background-image":"url()"},attrs:{id:"imagePreview"}},[e.image?o("img",{staticClass:"img",attrs:{src:"/uploadimage/"+e.image,loading:"lazy"}}):o("img",{staticClass:"img",attrs:{src:"/uploadimage/"+e.image,loading:"lazy",alt:"user profile"}})])])])])]),e._v(" "),o("div",{staticClass:"container"},[o("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.updateUserData()}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"name"}},[e._v("Name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("name")},attrs:{type:"text",placeholder:"Enter Name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"name"}})],1)]),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"genderId"}},[e._v("Gender")]),e._v(" "),o("br"),e._v(" "),o("div",{staticClass:"mt-2"},[o("div",{staticClass:"custom-control custom-radio custom-control-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"maleId",value:"male"},domProps:{checked:e._q(e.form.gender,"male")},on:{change:function(t){return e.$set(e.form,"gender","male")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"maleId"}},[e._v("Male")])]),e._v(" "),o("div",{staticClass:"custom-control custom-radio custom-control-inline"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],staticClass:"custom-control-input",attrs:{type:"radio",value:"female",id:"femaleId"},domProps:{checked:e._q(e.form.gender,"female")},on:{change:function(t){return e.$set(e.form,"gender","female")}}}),e._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:"femaleId"}},[e._v("Female")])])]),e._v(" "),e.form.errors.has("gender")?o("div",{staticClass:"error"},[o("lable",{staticClass:"danger text-danger"},[e._v(e._s(e.form.errors.get("gender")))])],1):e._e()])]),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("div",[o("label",[e._v("User profession")]),e._v(" "),o("br"),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.form.user_profession,expression:"form.user_profession"}],staticClass:"form-control",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"user_profession",t.target.multiple?o:o[0])}}},[o("option",{attrs:{value:"student"}},[e._v("Student")]),e._v(" "),o("option",{attrs:{value:"teacher"}},[e._v("Teacher/Principal/Dean")]),e._v(" "),o("option",{attrs:{value:"corporate"}},[e._v("Corporate")]),e._v(" "),o("option",{attrs:{value:"other"}},[e._v("Other")])])]),e._v(" "),e.form.errors.has("user_profession")?o("div",{staticClass:"error"},[o("lable",{staticClass:"danger text-danger"},[e._v(e._s(e.form.errors.get("user_profession")))])],1):e._e()])]),e._v(" "),e.school_field?o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",[e._v("School name")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.form.school_id,expression:"form.school_id"}],staticClass:"form-control",on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"school_id",t.target.multiple?o:o[0])}}},e._l(e.school_list,(function(t){return o("option",{key:t.id,domProps:{value:t.id}},[e._v("\n                "+e._s(t.school_name)+"\n              ")])})),0),e._v(" "),o("has-error",{attrs:{form:e.form,field:"school_id"}})],1)]):e._e(),e._v(" "),e.namefield?o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",[e._v(e._s(e.label_name)+" Name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.profession_name,expression:"form.profession_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.form.profession_name},on:{input:function(t){t.target.composing||e.$set(e.form,"profession_name",t.target.value)}}})])]):e._e(),e._v(" "),e.addressfield?o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",[e._v("Address")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.profession_address,expression:"form.profession_address"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.form.profession_address},on:{input:function(t){t.target.composing||e.$set(e.form,"profession_address",t.target.value)}}})])]):e._e(),e._v(" "),e.form.institution_code?o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",[e._v("Code")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.institution_code,expression:"form.institution_code"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.form.institution_code},on:{input:function(t){t.target.composing||e.$set(e.form,"institution_code",t.target.value)}}})])]):e._e(),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"name"}},[e._v("Father's Name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.father_name,expression:"form.father_name"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("father_name")},attrs:{type:"text",placeholder:"Enter Name"},domProps:{value:e.form.father_name},on:{input:function(t){t.target.composing||e.$set(e.form,"father_name",t.target.value)}}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"father_name"}})],1)]),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"name"}},[e._v("Mother's Name")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.mother_name,expression:"form.mother_name"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("mother_name")},attrs:{type:"text",placeholder:"Enter mother Name"},domProps:{value:e.form.mother_name},on:{input:function(t){t.target.composing||e.$set(e.form,"mother_name",t.target.value)}}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"mother_name"}})],1)]),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[e._v("Email ID")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("email")},attrs:{type:"email",placeholder:"Enter Email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"email"}})],1)]),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"phone_no"}},[e._v("Mobile Number")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone_no,expression:"form.phone_no"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("phone_no")},attrs:{type:"text",placeholder:"Enter Phone No"},domProps:{value:e.form.phone_no},on:{input:function(t){t.target.composing||e.$set(e.form,"phone_no",t.target.value)}}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"phone_no"}})],1)]),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"phone_no"}},[e._v("DOB")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.dob,expression:"form.dob"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("dob")},attrs:{type:"date",placeholder:"Enter DOB"},domProps:{value:e.form.dob},on:{input:function(t){t.target.composing||e.$set(e.form,"dob",t.target.value)}}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"dob"}})],1)]),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"address"}},[e._v("Address")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("address")},attrs:{type:"text",placeholder:"Enter Address"},domProps:{value:e.form.address},on:{input:function(t){t.target.composing||e.$set(e.form,"address",t.target.value)}}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"address"}})],1)]),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"phone_no"}},[e._v("City")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.city,expression:"form.city"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("city")},attrs:{type:"text",placeholder:"Enter City"},domProps:{value:e.form.city},on:{input:function(t){t.target.composing||e.$set(e.form,"city",t.target.value)}}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"city"}})],1)]),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"phone_no"}},[e._v("State")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.state,expression:"form.state"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("state")},attrs:{type:"text",placeholder:"Enter state"},domProps:{value:e.form.state},on:{input:function(t){t.target.composing||e.$set(e.form,"state",t.target.value)}}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"state"}})],1)]),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"country"}},[e._v("Country")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.country,expression:"form.country"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("country")},attrs:{type:"text",placeholder:"Enter country"},domProps:{value:e.form.country},on:{input:function(t){t.target.composing||e.$set(e.form,"country",t.target.value)}}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"country"}})],1)]),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"phone_no"}},[e._v("Zip Code")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.zip_code,expression:"form.zip_code"}],staticClass:"form-control",class:{"is-invalid":e.form.errors.has("zip_code")},attrs:{type:"text",placeholder:"Enter zip_code"},domProps:{value:e.form.zip_code},on:{input:function(t){t.target.composing||e.$set(e.form,"zip_code",t.target.value)}}}),e._v(" "),o("has-error",{attrs:{form:e.form,field:"zip_code"}})],1)]),e._v(" "),o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group pt-1"},[o("div",{staticClass:"form-check pt-3"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.subscribe,expression:"form.subscribe"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"subscribe"},domProps:{value:e.form.subscribe,checked:Array.isArray(e.form.subscribe)?e._i(e.form.subscribe,e.form.subscribe)>-1:e.form.subscribe},on:{change:function(t){var o=e.form.subscribe,r=t.target,s=!!r.checked;if(Array.isArray(o)){var a=e.form.subscribe,i=e._i(o,a);r.checked?i<0&&e.$set(e.form,"subscribe",o.concat([a])):i>-1&&e.$set(e.form,"subscribe",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.form,"subscribe",s)}}}),e._v(" "),o("label",{staticClass:"form-check-label pt-3",attrs:{for:"subscribe"}},[e._v(" GBI Newsletter")])]),e._v(" "),o("has-error",{attrs:{form:e.form,field:"subscribe"}})],1)])]),e._v(" "),e._m(1)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:"imageUpload"}},[t("img",{staticClass:"icon-width",attrs:{src:"/images/icons/edit.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group text-center"},[t("button",{staticClass:"btn btn-primary profile_button",attrs:{type:"submit"}},[this._v("\n          UPDATE\n        ")])])}],!1,null,null,null);t.default=a.exports}}]);