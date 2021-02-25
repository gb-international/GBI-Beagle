(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{191:function(t,e){},192:function(t,e){},250:function(t,e,a){"use strict";a.r(e);var s=a(2),i=a(29),o=a.n(i),r={name:"AddGroup",components:{"has-error":s.HasError},data:function(){return{searchQuery:null,row_input:1,submit_btn:!1,edit_index:-1,total_row:"",new_row:[],excel_form:new s.Form({excel_file:""})}},mounted:function(){this.groupMember()},watch:{row_input:function(){this.row_input>0&&(this.submit_btn=!0)}},methods:{up:function(){this.new_row.push({first_name:"",last_name:"",email:"",gender:"",age:"",mobile:"",tour_id:this.$route.params.id}),this.row_input++},down:function(){this.new_row.length>=1&&(this.new_row.splice(-1),this.row_input--,console.log("hi"))},groupMember:function(){var t=this,e={tour_id:this.$route.params.id};this.$api.POST("/api/group-member",e).then((function(e){t.total_row=e}))},delete_row:function(t,e){var a=this;this.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(s){if(s.value){var i={id:e};a.$api.POST("/api/destroy-member",i).then((function(e){a.total_row.splice(t,1)})).catch((function(t){a.handleError(t)})),a.$swal.fire("Deleted!","Your file has been deleted.","success")}}))},edit_row:function(t){this.edit_index=t},update_row:function(t){this.UserTourUpdate(this.total_row[t]),this.edit_index=""},UserTourUpdate:function(t){var e=this;this.$api.POST("/api/group-member-update",t).then((function(t){"error"==t?e.$swal.fire({icon:"error",title:"Try again",text:"Please enter valid travel code!"}):(e.edit_index=-1,e.$swal.fire("Success","Member updated !!!","success"))})).catch((function(t){e.handleError(t)}))},UserTourSave:function(){for(var t=this,e=this.new_row.length-1;e>=0;e--)""==this.new_row[e].first_name&&this.new_row.splice(e,1);this.$api.POST("/api/group-add",this.new_row).then((function(e){"error"==e?t.$swal.fire({icon:"error",title:"Try again",text:"Please enter valid travel code!"}):(t.$swal.fire("Success","Group data has added","success"),t.new_row=[],t.submit_btn=!1,t.groupMember())}))},changeExcelFile:function(t){var e=this;if("xlsx"!=t.target.files[0].name.split(".").pop())return this.$swal.fire("Alert!","Please Select .xlsx file","error"),!1;var a=t.target.files[0],s=new FileReader;s.onload=function(t){var a=new Uint8Array(t.target.result),s=o.a.read(a,{type:"array"}),i=s.SheetNames[0],r=s.Sheets[i],n=o.a.utils.sheet_to_json(r);console.log(n);for(var l=0;l<n.length;l++){var c={first_name:n[l].first_name,last_name:n[l].last_name,email:n[l].email,gender:n[l].gender,age:n[l].age,mobile:n[l].mobile,tour_id:e.$route.params.id};e.new_row.push(c),e.submit_btn=!0}},s.readAsArrayBuffer(a)},downloadPDF:function(){console.log("create pdf here")},back:function(){this.$router.push("/tour-list")}},computed:{resultQuery:function(){var t=this;return this.searchQuery?this.total_row.filter((function(e){return t.searchQuery.toLowerCase().split(" ").every((function(t){return e.first_name.toLowerCase().includes(t)}))})):this.total_row}}},n=a(0),l=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"AddGroup p-t-15"},[a("div",{staticClass:"row mb-10"},[a("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 pt-2"},[a("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"button"},on:{click:function(e){return t.back()}}},[t._v("Back")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#AddRowModal"}},[t._v("ADD Number of person")]),t._v(" "),a("a",{staticClass:"text-gray ml-2",attrs:{href:"/assets/sample-group-list.xlsx",download:""}},[a("img",{staticClass:"icon-width",attrs:{src:"/images/icons/download.png"}}),t._v(" Name list formate\n        ")])]),t._v(" "),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-3"},[a("form",{attrs:{method:"POST"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"file"}},[t._v("File")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control h-40",attrs:{type:"text",name:"filename",placeholder:"Upload Excel File e.g. '.xlsx'",readonly:""}}),t._v(" "),a("span",{staticClass:"input-group-btn"},[a("div",{staticClass:"btn btn-default custom-file-uploader"},[a("input",{attrs:{type:"file",onchange:"this.form.filename.value = this.files.length ? this.files[0].name : ''",accept:".xlsx"},on:{change:function(e){return t.changeExcelFile(e)}}}),t._v("Browse\n                    ")])])])])])])])]),t._v(" "),a("div",{staticClass:"col-sm-12 col-md-6 col-lg-3"},[a("div",{staticClass:"search-box"},[a("div",{staticClass:"form-group has-search"},[a("span",{staticClass:"fa fa-search form-control-feedback"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}})])])])]),t._v(" "),t.resultQuery?a("div",{staticClass:"row group_list w-100"},[a("table",{staticClass:"table table-hover add_group_table text-dark table-responsive"},[t._m(0),t._v(" "),a("tbody",[t._l(t.resultQuery,(function(e,s){return a("tr",{key:e.id,staticClass:"hidden"},[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"data.first_name"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.first_name},on:{input:function(a){a.target.composing||t.$set(e,"first_name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"data.last_name"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.last_name},on:{input:function(a){a.target.composing||t.$set(e,"last_name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"data.email"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.email},on:{input:function(a){a.target.composing||t.$set(e,"email",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"data.gender"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.gender},on:{input:function(a){a.target.composing||t.$set(e,"gender",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"data.age"}],staticClass:"form-control",attrs:{type:"number",readonly:s!=t.edit_index},domProps:{value:e.age},on:{input:function(a){a.target.composing||t.$set(e,"age",a.target.value)}}})]),t._v(" "),a("td",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"data.mobile"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.mobile},on:{input:function(a){a.target.composing||t.$set(e,"mobile",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-4 justify-content-end"},[a("div",{staticClass:"form-group action_item"},[s!=t.edit_index?a("img",{staticClass:"edit",attrs:{src:"/assets/front/icons/edit.png"},on:{click:function(e){return t.edit_row(s)}}}):a("img",{staticClass:"edit",attrs:{src:"/assets/front/icons/update.png"},on:{click:function(e){return t.update_row(s)}}}),t._v(" "),a("img",{staticClass:"delete",attrs:{src:"/assets/front/icons/delete.png"},on:{click:function(a){return t.delete_row(s,e.id)}}})])])])])])})),t._v(" "),t._l(t.new_row,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"data.first_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.first_name},on:{input:function(a){a.target.composing||t.$set(e,"first_name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"data.last_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.last_name},on:{input:function(a){a.target.composing||t.$set(e,"last_name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"data.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.email},on:{input:function(a){a.target.composing||t.$set(e,"email",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"data.gender"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.gender},on:{input:function(a){a.target.composing||t.$set(e,"gender",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"data.age"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.age},on:{input:function(a){a.target.composing||t.$set(e,"age",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"data.mobile"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.mobile},on:{input:function(a){a.target.composing||t.$set(e,"mobile",a.target.value)}}})])])}))],2)]),t._v(" "),a("div",{staticClass:"row w-100 justify-content-center mt-4"},[t._m(1),t._v(" "),a("div",{staticClass:"col-sm-4 text-center"},[a("button",{staticClass:"btn btn-sm btn-primary ml-10",attrs:{type:"button"},on:{click:function(e){return t.downloadPDF()}}},[t._v("DOWNLOAD PDF")]),t._v(" "),1==t.submit_btn?a("button",{staticClass:"btn btn-sm btn-primary ml-10",attrs:{type:"button"},on:{click:function(e){return t.UserTourSave()}}},[t._v("Submit")]):t._e()])])]):t._e()]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"AddRowModal"}},[a("div",{staticClass:"modal-dialog modal-md"},[a("div",{staticClass:"modal-content modal-color"},[a("div",{staticClass:"modal-body"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[t._v("×")]),t._v(" "),a("p",[t._v("Add Number of Person")]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"row align-content-center"},[a("div",{staticClass:"col"},[a("img",{staticClass:"w-40 link",attrs:{src:"/images/icons/minus.png"},on:{click:t.down}})]),t._v(" "),a("div",{staticClass:"col"},[t._v(t._s(t.row_input))]),t._v(" "),a("div",{staticClass:"col"},[a("img",{staticClass:"w-40 link",attrs:{src:"/images/icons/add.png"},on:{click:t.up}})])])])])])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"w-100"},[a("th",[t._v("Sr.No.")]),t._v(" "),a("th",[t._v("First Name")]),t._v(" "),a("th",[t._v("Last Name")]),t._v(" "),a("th",[t._v("Email")]),t._v(" "),a("th",[t._v("Gender")]),t._v(" "),a("th",[t._v("Age")]),t._v(" "),a("th",[t._v("Contact No.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-1 text-right"},[e("p",{staticClass:"text-dark print",attrs:{title:"print"}},[e("i",{staticClass:"fas fa-print"})])])}],!1,null,null,null);e.default=l.exports},34:function(t,e){}}]);