<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
<div class="container">
    <div class="AddGroup p-t-15">
      <div class="row mb-10 pt-3">
        <div class="col-sm-4">
          <div class="input-group filter-search">
            <input class="form-control py-2 border-right-0 border" type="search"
              value="search" id="example-search-input" v-model="searchQuery"
              placeholder="Search .." />
            <span class="input-group-append">
              <button class="btn btn-outline-secondary border-left-0 border" type="button">
                <i class="fa fa-search"></i>
              </button>
            </span>
          </div>
        </div>
      </div>

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
            <th class="w-160">Payment Status</th>
            <th>View</th>
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
              <input
                type="text"
                class="form-control"
                :value="data.is_paid == 0 ? 'Free' : 'Paid'"
                readonly
              />
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
              </div>
            </td>
             <td>
                 <input
                  type="text"
                  class="form-control"
                  v-model="data.payment_status"
                  readonly
                />
            </td>
            <td class="text-center">
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
  name: "TeacherPaymentList",
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

    pendingMessage(){
      this.$swal.fire({
            icon: 'warning',
            title: "Error",
            text: "Payment Pending",
      });
    },

    viewDetails(data){
      axios
        .post("/api/schoool/payment-history", data, {
          headers: { Authorization: `Bearer ${this.$cookies.get('access_token')}` },
          })
            .then(response => {
              this.paymentDetails = response.data;
              //console.log(this.paymentDetails)
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

    groupMember() {
      axios
        .get(`/api/groupmembers/${this.$route.params.tour_code}/teacher`)
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
</style>