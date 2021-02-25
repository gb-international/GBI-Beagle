<template>
  <div id="tour_payment" class="pb-4">
    <div v-if="chequePage == false">
      <div class="container p-t-15 mb-20">
        <form>
          <div class="row" v-if="touruser">

            <div class="col-sm-3">
              <label>No Of Pax</label>
              <p>{{ touruser[0].total + touruser[1].total  }}</p>
            </div>
            <div class="col-sm-3">
              <label>Not Paid Members</label>
              <p>{{ touruser[0].total }}</p>
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
              <div class="teacher-section">
                <div class="form-check-inline">
                  <label class="form-check-label">
                    <input
                      type="radio"
                      class="form-check-input"
                      value="student"
                      name="payment_mode"
                      v-model="teacherform.payment_mode"
                    />By Student
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
                    />By Self (School Incharge)
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-20" v-if="teacherform.payment_mode == 'self'">
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
        teacherform.payment_mode == 'self' &&
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
</template>

<script>
import { Form, HasError, AlertError } from "vform";
export default {
  name: "Tour-list",
  components: {
    "has-error": HasError,
  },
  data() {
    return {
      chequePage: false,
      tours: "",
      formShow: false,
      payment_mode: "self",
      self_pay_mode: "cheque",
      teacher_section: false,
      student_section: false,
      student_bank: [],
      bankdetail: [],
      banknames: [],
      userinfo: "",
      robot: false,
      teacherform: new Form({
        payment_mode: "self",
        payment_type: "",
        tour_code: this.$route.params.tour_code,
        schoolbankdetail_id: "",
        amount: "",
        user_id: "",
        school_id: this.$route.params.school_id,
        cheque_bank_name: "",
        date_of_issue: "",
        ifsc_code: "",
        cheque_number: "",
        added_by: "gbi",
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
        school_id: this.$route.params.school_id,
        tour_code:this.$route.params.tour_code 
      };
      axios.post("/api/gettourusers", data)
        .then((response) => {
          this.teacherform.user_id = response.data.user_id;
          this.perhead = response.data.amount;
          this.touruser = response.data.tour;
          this.teacherform.amount = this.touruser[1].total * this.perhead; 
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
    submitPayment() {
      this.teacherform.school_id = this.$route.params.school_id;
      if (
        this.teacherform.payment_mode == "self" &&
        this.teacherform.payment_type == "cheque"
      ) {
        this.chequePage = true;
      }

      if (
        this.teacherform.payment_mode == "self" &&
        this.teacherform.payment_type == "cash"
      ) {
        this.submitForm();
      }

      if (this.teacherform.payment_mode == "student") {
        this.teacherform.payment_type = "";
        this.submitForm();
      }

      return false;
    },

    bankNameList() {
      axios.get("/api/banknames").then((response) => {
        this.banknames = response.data;
      });
    },

    StudentBank() {
      var data = { tour_code: this.$route.params.id };
      this.$axios
        .post("/api/tour-bankdetail-student")
        .then((response) => {
          this.student_bank = response.data;
        })
        .catch((error) => {
          this.handleError(error);
        });
    },

    submitForm() {
        this.teacherform.post("/api/addtourpayment")
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
            `/payments/${this.$route.params.school_id}/${this.$route.params.tour_code}`
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
