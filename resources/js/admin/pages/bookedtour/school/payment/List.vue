<!-- This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .-->
<template>
  <view-layout>
    <template #viewdata>
      <div class="row pl-4">
        <div class="col-sm-12 text-right top_btn">
          <history-button 
            class="mr-3"
            :url="`/school/bookedusers/${$route.params.school_id}/${$route.params.tour_code}`"
            >Payment History</history-button>

          <update-button 
            v-if="tour_view.tour_code"
            :url="`/update-paymentmethod-school/${tour_view.id}`"
            >Update Payment Method</update-button>

          <add-button 
            v-else
            :url="`/add-paymentmethod-school/${$route.params.school_id}/${$route.params.tour_code}`"
            >Add Payment Method</add-button>          
          
        </div>
      </div>

      <div class="card_view pl-4">
        <br />
        <div class="row" v-if="tour_view.tour_code">

          <div class="col-sm-4" v-if="tour_view.tour_code != null">
            <h5>Tour Code</h5>
            <p>{{ tour_view.tour_code }}</p>
          </div>
          <br />

          <div class="col-sm-4">
            <h5>User Name</h5>
            <p>
              <router-link :to="`/user/${tour_view.user_id}`">
                {{ tour_view.user.name }}</router-link
              >
            </p>
          </div>

          <div class="col-sm-4">
            <h5>Added By</h5>
            <p>{{ tour_view.added_by }}</p>
          </div>

          <div class="col-sm-4" v-if="tour_view.schoolbankdetail_id != null">
            <h5>School Bank Detail ID</h5>
            <p>{{ tour_view.schoolbankdetail_id }}</p>
          </div>

          <div class="col-sm-4" v-if="tour_view.payment_mode != null">
            <h5>Payment By</h5>
            <p>{{ tour_view.payment_mode }}</p>
          </div>

          <div class="col-sm-4" v-if="tour_view.payment_type != null">
            <h5>Payment Type</h5>
            <p>{{ tour_view.payment_type }}</p>
          </div>
          <div class="col-sm-4" v-if="tour_view.ifsc_code != null">
            <h5>IFSC Code</h5>
            <p>{{ tour_view.ifsc_code }}</p>
          </div>
          <div class="col-sm-4" v-if="tour_view.amount != null">
            <h5>Amount</h5>
            <p>{{ tour_view.amount }}</p>
          </div>

          <div class="col-sm-4" v-if="tour_view.cheque_bank_name != null">
            <h5>Cheque Bank Name</h5>
            <p>{{ tour_view.cheque_bank_name }}</p>
          </div>
          <div class="col-sm-4" v-if="tour_view.date_of_issue != null">
            <h5>Date of Issue</h5>
            <p>{{ tour_view.date_of_issue }}</p>
          </div>

          <div class="col-sm-4">
            <h5>Status</h5>
            <p v-if="tour_view.status == 'success'">
              <span class="badge badge-success">Success</span>
            </p>

            <p v-else>
              <span class="badge badge-primary">Pending</span>
            </p>
          </div>
          <div class="col-sm-4">
            <h5>Added At</h5>
            <p>{{ tour_view.created_at }}</p>
          </div>

          <div class="col-sm-4" v-if="tour_view.payment_mode == 'self'">
            <h5>Collect Payment</h5>
            <button
              @click="tourModal(tour_view)"
              class="btn btn-success"
              data-toggle="modal"
              data-target="#paymentModal"
            >
              Collect Payment
            </button>
          </div>

          <div class="col-sm-4" v-if="tour_view.payment_type == 'net'">
            <h5>
              <button
                class="btn btn-info text-white"
                @click="viewDetails()"
                data-toggle="modal"
                data-target="#DetailsModal"
              >
                Payment Details
              </button>
            </h5>
          </div>
        </div>

        <div class="modal" id="DetailsModal" v-if="DetailsModal">
          <div class="modal-dialog">
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

        <div v-else class="text-center text-muted">No Data Available</div>

        <div class="row" v-if="tour_view.payment_type == 'self'">
          <div class="col-sm-4">
            <h5>Amount</h5>
            <p>{{ tour_view.amount }}</p>
          </div>
        </div>
        
      </div>
      <!-- The Modal -->
      <div class="modal" id="paymentModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <h5 class="modal-title">Tour Payment</h5>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-3">
                  <label>Per Head</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="perHead"
                  />
                </div>

                <div class="col-sm-3">
                  <label>Total Pax</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="totalPax"
                    readonly
                  />
                </div>
                <div class="col-sm-3">
                  <label>Complimentary</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="totalCompl"
                    readonly
                  />
                </div>
                <div class="col-sm-3">
                  <label>Full Amount</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="form.amount"
                    readonly
                  />
                </div> 
                </div>               
                <div class="row">
                <div class="col-sm-12">
                  <label> Payment Status </label>

                  <dropdown-filter class="mb-2" 
                    :itemList="status_list" 
                    :selectedId="form.status"
                    @update:option="updateStatus"
                  />
                </div>
              </div>
            </div>
            <p class="text-center">
              <button
                type="button"
                class="btn btn-info itrn_add_btn"
                @click="tourPaymentSave()"
              >
                Save
              </button>
            </p>
          </div>
        </div>
      </div>
    </template>
  </view-layout>
</template>
<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
import AddButton from "@/admin/components/buttons/AddButton.vue";
import HistoryButton from "@/admin/components/buttons/HistoryButton.vue";
import UpdateButton from "@/admin/components/buttons/UpdateButton.vue";
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";

export default {
  name:"ListUserPyamentTour",
  components: {
    "view-layout": ViewLayout,
    "add-button": AddButton,
    "update-button": UpdateButton,
    "history-button": HistoryButton,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      tour_view: [],
      status_list:[
        {id:'success',name:"Success"},
        {id:'pending',name:"Pending"}
      ],
      totalPax: "",
      totalCompl: "",
      perHead: "",
      form: {
        id: 0,
        amount: "",
        status: "",
      },
      student_list: false,
      edit_id: 0,
      paymentDetails: {},
      DetailsModal: true,
    };
  },
  beforeMount() {
    this.tourPayment();
  },
  methods: {

     viewDetails(){
      this.tour_view.tour_id = this.tour_view.tour_code;
      axios
        .post("/api/schoool/payment-history", this.tour_view, {
          headers: { Authorization: `Bearer ${this.$cookies.get('access_token')}` },
          })
            .then(response => {
              this.DetailsModal = true;
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

    tourModal(tour) {
      this.form.id = tour.id;
      this.form.amount = tour.amount;
      this.form.status = tour.status;
    },

    updateStatus (v) { this.form.status = v.id;},

    tourPayment() {
      var data = {
        school_id: this.$route.params.school_id,
        tour_code: this.$route.params.tour_code
      };
      axios.post("/api/payments/list", data).then((res) => {
        this.form.id = res.data.id;
        //this.form.amount = res.data.amount;
        this.form.status = res.data.status;
        this.tour_view = res.data;
      });
      axios.post("/api/gettourusers", data)
        .then((response) => {
         this.tour_view.amount = response.data.tour[0].total * response.data.amount;
         this.form.amount = response.data.tour[0].total * response.data.amount;
         this.totalPax = response.data.tour[0].total;
         this.totalCompl = response.data.tour[1].total;
         this.perHead = response.data.amount;
        })
        .catch((error) => {
      });
    },

    tourPaymentSave() {
      if (this.form.amount.length == 0) {
        this.$swal.fire({
          icon: "error",
          title: "Valid Data",
          text: "Please enter valid amount!",
        });
        return false;
      }
      axios.post("/api/createpayment", this.form).then((response) => {
        this.tourPayment();
        this.$swal.fire({
          icon: "success",
          title: "Successfull",
          text: "Details are saved !!!",
        });
      });
    },

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>