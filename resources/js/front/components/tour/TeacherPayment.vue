<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="container">
    <div class="AddGroup p-t-15">
      <div class="row group_list simple-form list-form pl-2 font-12">
        <table class="table text-dark table-bordered">
          <thead>
            <th class="w-80">Sr-no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th class="w-60" style="width: 5%">Gender</th>
            <th class="w-70">Age</th>
            <th class="w-80" style="width: 7%">Paid/Free</th>
            <th class="w-160">Email</th>
            <th class="w-160">Contact No.</th>
          </thead>
          <tbody>
            <tr v-for="(data,index) in resultQuery" :key="data.id" class="hidden">
            <td class="text-center padding-top-10">
              {{data.srNo}}
            </td>
            <td>
              <input
                type="text"
                class="form-control"
                v-model="data.first_name"
                readonly
              />
            </td>
            <td>
              <input
                type="text"
                class="form-control"
                v-model="data.last_name"
                readonly
              />
            </td>
            <td>
            <input
                type="text"
                class="form-control"
                v-model="data.gender"
                readonly
              />
            </td>
            <td>
              <input
                type="number"
                class="form-control"
                v-model="data.age"
                readonly
              />
            </td>
            <td>
              <select class="form-control" disabled v-model="data.is_paid">
                <option value="true">Paid</option>
                <option value="false">Free</option>
              </select>
            </td>
             <td>
              <input
                type="email"
                class="form-control"
                v-model="data.email"
                readonly
              />
            </td>
            <td>
              <div class="row">
                <div class="col-8">
                  <input
                    type="number"
                    class="form-control"
                    v-model="data.mobile"
                    readonly
                  />
                </div>
                <div class="col-4 justify-content-end">
                  <div class="form-group action_item margin-top-11">
                    <img
                      class="viewPHistory"
                      :src="$gbiAssets+'/assets/front/icons/view.png'"
                      @click="viewDetails(data)"
                      data-toggle="modal"
                      data-target="#paymentModal"
                    />
                  </div>
                </div>
              </div>
            </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
    <div class="modal" tabindex="-1" role="dialog" id="paymentModal" v-if="DetailsModal">
      <div class="modal-dialog" style="width: 90% !important;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Payment Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          
            <div class="cheque_payment" v-if="paymentDetails.payment_type == 'cheque'">
              <p style="margin-bottom: 4px; font-size: 16px;"><b>Paid By: </b> {{paymentDetails.payment_mode == 'student' ? 'Student' : 'InCharge'}}</p>
              <p style="margin-bottom: 4px; font-size: 16px;"><b>Paid with:</b> Cheque/DD</p>
              <p style="margin-bottom: 4px; font-size: 16px;"><b>Status: </b> {{paymentDetails.status}}</p>
              <div class="row mt-3">
                <div class="col-6">
                  <p for="cheque_bank_name" style="margin-bottom: 2px">Bank Name</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.cheque_bank_name"
                      readonly
                    />
                </div>
                <div class="col-6">
                  <p for="date_of_issue" style="margin-bottom: 2px">Date of Issue</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.date_of_issue"
                      readonly
                    />
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-6">
                  <p for="ifsc_code" style="margin-bottom: 2px">IFSC Code</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.ifsc_code"
                      readonly
                    />
                </div>
                <div class="col-6">
                  <p for="cheque_number" style="margin-bottom: 2px">Cheque Number</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.cheque_number"
                      readonly
                    />
                </div>
              </div>
               <div class="row mt-3">
                <div class="col-6">
                  <p for="amount" style="margin-bottom: 2px">Amount Paid</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.base_price"
                      readonly
                    />
                </div>
                <div class="col-6">
                  <p for="amount" style="margin-bottom: 2px">Payment Status</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.status"
                      readonly
                    />
                </div>
              </div>
            </div>


            <div class="cheque_payment" v-if="paymentDetails.payment_type == 'cash'">
              <p style="margin-bottom: 4px; font-size: 16px;"><b>Paid By: </b> {{paymentDetails.payment_mode == 'student' ? 'Student' : 'Incharge'}}</p>
              <p style="margin-bottom: 4px; font-size: 16px;"><b>Paid with:</b> Cash</p>
              <p style="margin-bottom: 4px; font-size: 16px;"><b>Status: </b> {{paymentDetails.status}}</p>
              <div class="row mt-3">
                <div class="col-6">
                  <p for="amount" style="margin-bottom: 2px">Amount Paid</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.base_price"
                      readonly
                    />
                </div>
                <div class="col-6">
                  <p for="amount" style="margin-bottom: 2px">Payment Status</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.status"
                      readonly
                    />
                </div>
              </div>
            </div>


            <div class="cheque_payment" v-if="paymentDetails.payment_type == 'net'">
              <p style="margin-bottom: 4px; font-size: 16px;"><b>Paid By: </b> {{paymentDetails.payment_mode == 'student' ? 'Student' : 'InCharge'}}</p>
              <p style="margin-bottom: 4px; font-size: 16px;"><b>Paid with:</b> Net Banking</p>
              <p style="margin-bottom: 4px; font-size: 16px;"><b>Status: </b> {{paymentDetails.status}}</p>
              <div class="row mt-3">
                <div class="col-6">
                  <p for="amount" style="margin-bottom: 2px">Billing Name</p>
                    <input
                      type="text"
                      class="form-control"
                      :value="paymentDetails.payment_data.billing_name"
                      readonly
                    />
                </div>
                <div class="col-6">
                  <p for="amount" style="margin-bottom: 2px">Billing Address</p>
                    <input
                      type="text"
                      class="form-control"
                      :value="paymentDetails.payment_data.billing_address"
                      readonly
                    />
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-6">
                  <p for="amount" style="margin-bottom: 2px">Billing City</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.payment_data.billing_city"
                      readonly
                    />
                </div>
                <div class="col-6">
                  <p for="amount" style="margin-bottom: 2px">Billing State</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.payment_data.billing_state"
                      readonly
                    />
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-6">
                  <p for="amount" style="margin-bottom: 2px">Billing Zip Code</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.payment_data.billing_zip"
                      readonly
                    />
                </div>
                <div class="col-6">
                  <p for="amount" style="margin-bottom: 2px">Billing Country</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.payment_data.billing_country"
                      readonly
                    />
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-6">
                  <p for="amount" style="margin-bottom: 2px">Phone Number</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.payment_data.billing_tel"
                      readonly
                    />
                </div>
                <div class="col-6">
                  <p for="amount" style="margin-bottom: 2px">Billing Email</p>
                    <input
                      type="text"
                      class="form-control"
                      v-model="paymentDetails.payment_data.billing_email"
                      readonly
                    />
                </div>
              </div>


            </div>

          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { Form, HasError, AlertError } from "vform";
//import XLSX from "xlsx";
import GroupExcelUpload from "@/admin/mixins/GroupExcelUpload";
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";

export default {
  name: "TeacherPayment",
  mixins: [GroupExcelUpload],
  components: {
    "has-error": HasError,
     "view-layout": ViewLayout,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      lastSr: 0,
      excel_form: new Form({
        excel_file: "",
      }),
      paymentDetails: {},
      DetailsModal: true,
       status_list:[
        {id:'success',name:"Success"},
        {id:'pending',name:"Pending"}
      ],
    };
  },
  mounted() {
    this.groupMember();
    //console.log(this.selectAll);
  },
  methods: {

    //updateStatus (v) { this.paymentDetails.status = v.id;},

    viewDetails(data){
      axios
        .post("/api/schoool/payment-history", data, {
          headers: { Authorization: `Bearer ${this.$cookies.get('access_token')}` },
          })
            .then(response => {
              this.paymentDetails = response.data;
              console.log(this.paymentDetails)
            })
            .catch(error => {
              this.DetailsModal = false;
              this.$swal.fire({
                  icon: 'warning',
                  title: "Error",
                  text: "No Payment Data",
                });
          });

    },

     sendLoginCreds(){
      //console.log(this.selected);
      for (var i = 0; i < this.selected.length; i++) {
            axios
            .post("/api/groupmembers/send-member-login", this.selected[i], {
            })
            .then(response => {
              if (response.data == "error") {
                this.$swal.fire({
                  icon: 'warning',
                  title: "Error",
                  text: "Error Occured, Please Try Again.",
                });
              }
            })
            .catch(error => {
            });
        }
        this.$swal.fire(
          "Success",
          "Login Details Sent",
          "success"
        );
    },

     checkAndUpdateRow(data, index){

      if(this.checkFields(data) == false){
          return false;
      }
      this.update_row(index)
    },

    checkAndSave(){
      for (var i = 0; i < this.new_row.length; i++) {
          if(this.checkFields(this.new_row[i]) == false){
            return false;
          }
        }
        this.UserGroupSave();
    },

    checkFields(data){
        //console.log(data)
        if(!data.mobile || !data.email || !data.first_name || !data.last_name || !data.gender || !data.age || !data.is_paid){

          this.$toast.fire({
                  icon: "error",
                  title: "Please fillup all the fields.",
                });
          return false;
        }
        else if(String(data.mobile).length !== 10){
          this.$toast.fire({
                  icon: "error",
                  title: "Please provide a valid phone number.",
                });
          return false;
        }
        else if(this.checkEmail(data.email) == false){
            this.$toast.fire({
                icon: "error",
                title: "Please provide a valid email address.",
              });
          return false;
        }
    },

    checkEmail(emailID){
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailID))
      {
        return (true)
      }
      return (false)
    },



    add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.lastSr +=1;
        this.new_row.push({
          first_name: "",
          last_name: "",
          email: "",
          gender: "",
          age: "",
          mobile: "",
          srNo: this.lastSr,
          tour_id: this.$route.params.id,
          school_id: this.$route.params.school_id,
          user_type: "teacher",
          is_paid: false,
        });
      }
      this.row_input = "";
    },
    groupMember() {
      axios
        .get(`/api/groupmembers/${this.$route.params.id}/teacher`)
        .then((res) => {
            if (res.data) {
              for(let i = 0;i<res.data.length;i++){
                res.data[i].srNo = i+1;
                this.lastSr += 1;
            }
            this.total_row = res.data;
          }
        });
    },
    changeExcelFile(event) {
      var vm = this;
      let file = event.target.files[0];
      let filename = file.name;
      let ext = filename.split(".").pop();
      if (ext == "xlsx") {
        var files = event.target.files,
          f = files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
          var data = new Uint8Array(event.target.result);
          var workbook = XLSX.read(data, { type: "array" });
          let sheetName = workbook.SheetNames[0];
          /* DO SOMETHING WITH workbook HERE */
          let worksheet = workbook.Sheets[sheetName];
          var main_data = XLSX.utils.sheet_to_json(worksheet);
          for (var i = 0; i < main_data.length; i++) {
            // if one row consist 5 columns
            if (Object.keys(main_data[i]).length == 6) {
              //this.total_row.push({first_name:'',last_name:'',gender:'',phoneno:''});
              var store = [];
              for (var j in main_data[i]) {
                store.push(main_data[i][j]);
              }
              let row = {
                first_name: store[0],
                last_name: store[1],
                email: store[2],
                gender: store[3],
                age: store[4],
                mobile: store[5],
                tour_id: vm.$route.params.id,
                school_id: vm.$route.params.school_id,
                is_paid: false,
                user_type: "teacher",
              };
              vm.new_row.push(row);
            }
          }
        };
        reader.readAsArrayBuffer(f);
      } else {
        this.$swal.fire("Alert!", "Please Select .xlsx file", "error");
        return false;
      }
    },
  },
};
</script>
<style scoped>
.viewPHistory {
  width: 20px; 
  height:auto; 
  margin-top: 7px; 
  margin-right: 7px; 
  cursor: pointer;
}
select {
  width: 100%;
  height: 50px;
  font-size: 90%;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  border: none;
  padding: 10px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 10px;
  background: white !important;
}
/* For IE <= 11 */
select::-ms-expand {
  display: none; 
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

th, td, input, select {
    font-size: 12px !important;
  }
</style>