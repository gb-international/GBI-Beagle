<template>
  <div>
    <div v-if="teacherform.user_id != null">
      <div id="tour_payment" class="pb-4">
        <div v-if="chequePage == false">
          <div class="container p-t-15 mb-20">
            <form>
              <div class="row" v-if="touruser">

                <div class="col-sm-3">
                  <label>Total Pax</label>
                  <p>{{ totalMembers  }}</p>
                </div>

                <div class="col-sm-3">
                  <label>Complimentary Pax</label>
                  <p>{{ touruser[1].total }}</p>
                </div>

                <div class="col-sm-3">
                  <label>Amount</label>
                  <p>{{ perhead }} /per head</p>
                </div>
                
                <div class="col-sm-3">
                  <label>Total Amount</label>
                  <p>{{ teacherform.amount }} /-</p>
                </div>

              </div>
              <hr />
              <div class="row">
                <div class="col-sm-4">
                  <label for="payment_mode mt-20">Payment By</label>
                 <!--   <div class="teacher-section">
                    <div class="form-check-inline">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          value="student"
                          name="payment_mode"
                          v-model="teacherform.payment_mode"
                        />By Student / Teacher
                      </label>
                    </div> 
                    <div class="form-check-inline">
                      <label class="form-check-label">
                        <input
                          type="radio"
                          class="form-check-input"
                          value="self"
                          name="payment_mode"
                          v-model="teacherform.payment_mode"
                        />By Company
                      </label>
                    </div>
                  </div>-->
                </div>
              </div> 

              <div class="row mt-20" v-if="teacherform.payment_mode == 'company'">
                <div class="col-sm-4">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="option"
                        v-model="teacherform.payment_type"
                        value="cheque"
                      />
                      Cheque/DD
                    </label>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="option"
                        v-model="teacherform.payment_type"
                        value="cash"
                      />
                      Cash
                    </label>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="option"
                        v-model="teacherform.payment_type"
                        value="net"
                      />
                      Net Banking
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          v-if="
            teacherform.payment_mode == 'company' &&
            teacherform.payment_type == 'cheque'
          "
        >
          <div class="container pt-20">
            <p>Please Fill Cheque/DD Details..</p>
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="father_name">Bank Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="teacherform.cheque_bank_name"
                  />
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="father_name">Date of Issue</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="teacherform.date_of_issue"
                  />
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="father_name">IFSC Code</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="teacherform.ifsc_code"
                  />
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="father_name">Cheque Number</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="teacherform.cheque_number"
                  />
                </div>
              </div>
            </div>
            <div class="text-center">
              <button
                type="button"
                class="btn btn-outline-primary btn-square itrn_add_btn"
                @click="backReset()"
              >
                BACK
              </button>

              <button
                type="button"
                class="btn btn-outline-primary btn-square itrn_add_btn"
                @click="validateCheque()"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5" v-else>
          <button
            type="button"
            class="btn btn-outline-primary btn-square itrn_add_btn"
            @click="submitPayment()"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
    <div v-else>
        <p class="text-center pt-5 text-muted">No Data Available</p>
    </div>
  </div>
</template>

<script>
import { Form, HasError, AlertError } from "vform";
export default {
  name: "Tour-listPaymentAdd",
  components: {
    "has-error": HasError,
  },
  data() {
    return {
      chequePage: false,
      tours: "",
      formShow: false,
      payment_mode: "company",
      self_pay_mode: "cheque",
      teacher_section: false,
      //student_section: false,
      //student_bank: [],
      bankdetail: [],
      banknames: [],
      userinfo: "",
      robot: false,
      totalMembers: '',
      teacherform: new Form({
        payment_mode: "company",
        payment_type: "",
        tour_code: this.$route.params.tour_code,
        corp_bankdetails_id: "",
        amount: "",
        user_id: "",
        company_id: this.$route.params.company_id,
        cheque_bank_name: "",
        date_of_issue: "",
        ifsc_code: "",
        cheque_number: "",
        added_by: "GBI",
      }),
      form: new Form({
        name: "",
        bank_name: "",
        account_number: "",
        account_type: "",
        ifsc_code: "",
        tour_code: this.$route.params.tour_code,
      }),
      account_type: [
        "Current Account",
        "Saving Account",
        "Recurring Deposit Account",
        "Fixed Deposit Account",
      ],
      banknames: [],
      touruser:'',
      perhead:0,
    };
  },
  mounted() {
    this.userData();
  },

  methods: {
    onVerify: function (response) {
      if (response) this.robot = true;
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset();
    },
    userData() {
      var data = { 
        company_id: this.$route.params.company_id,
        tour_code:this.$route.params.tour_code 
      };
      axios.post("/api/corporate/gettourusers", data)
        .then((response) => {
          
          this.teacherform.user_id = response.data.user_id;
          this.perhead = response.data.amount;
          this.touruser = response.data.tour;
          this.teacherform.amount = this.touruser[0].total * this.perhead;
          this.totalMembers = response.data.members;

          console.log(response.data.tour)
        })
        .catch((error) => {
        });
    },
    submitPayment() {
      this.teacherform.company_id = this.$route.params.company_id;
      if (
        this.teacherform.payment_mode == "company" &&
        this.teacherform.payment_type == "cheque"
      ) {
        this.chequePage = true;
      }

      if (
        this.teacherform.payment_mode == "company" &&
        this.teacherform.payment_type == "cash"
      ) {
        this.submitForm();
      }

      return false;
    },

    bankNameList() {
      axios.get("/api/banknames").then((response) => {
        this.banknames = response.data;
      });
    },

    /*StudentBank() {
      var data = { tour_code: this.$route.params.id };
      this.$axios
        .post("/api/tour-bankdetail-student")
        .then((response) => {
          this.student_bank = response.data;
        })
        .catch((error) => {
          this.handleError(error);
        });
    },*/

    submitForm() {
      if(this.totalMembers == 0){
        this.$swal.fire({
          icon: "error",
          title: "No Memeber added",
          text: "Please add group members before making the payment."
        });
        return
      }
        this.teacherform.post("/api/corporate/addtourpayment")
        .then((res) => {
          if (res.data["error"]) {
            this.$swal.fire({
              icon: "error",
              title: res.data.error,
            });
            return false;
          }
          this.$swal.fire({
            icon: "success",
            title: "Successfully Added !!",
          });
          this.$router.push(
            `/payments/${this.$route.params.company_id}/${this.$route.params.tour_code}`
          );
        })
        .catch((error) => {
          this.$swal.fire({
            icon: "error",
            title: "Try again !!",
          });
          this.handleError(error);
        });
    },
    backReset() {
      this.chequePage = false;
      this.teacherform.cheque_bank_name = "";
      this.teacherform.date_of_issue = "";
      this.teacherform.ifsc_code = "";
      this.teacherform.cheque_number = "";
    },

    validateCheque() {
      if (
        this.teacherform.cheque_bank_name != "" &&
        this.teacherform.date_of_issue != "" &&
        this.teacherform.ifsc_code != "" &&
        this.teacherform.cheque_number != ""
      ) {
        this.submitForm();
      } else {
        this.$swal.fire({
          icon: "error",
          title: "Please fill all the fields !!",
        });
      }
    },
  },
};
</script>
