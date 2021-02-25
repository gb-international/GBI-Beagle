<template>
  <div id="tour_payment" class="pb-4">
    <div v-if="chequePage == false">
      <div class="container p-t-15 mb-20" v-if="tour_info">
        <form>
          <div class="row">
            <div class="col-sm-2">
              <label class="text-muted" for="tour_code">Itinerary Code</label>
              <p>{{ tour_id }}</p>
            </div>
            <div class="col-sm-2 text-center">
              <label class="text-muted" for="price">Tour Price</label>
              <p>
                {{ tour_info.base_price }} /-
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <div class="student-section">
                <div class="col-sm-6" v-if="student_bank">
                  <label>Bank Details to pay</label>
                  <div class="ml-5">
                    <div class="row">
                      <div class="col">
                        Beneficary
                        <span>:</span>
                      </div>
                      <div class="col">{{ student_bank.name}}</div>
                    </div>

                    <div class="row">
                      <div class="col">
                        Bank
                        <span>:</span>
                      </div>
                      <div class="col">{{ student_bank.bank_name }}</div>
                    </div>

                    <div class="row">
                      <div class="col">
                        Account Number
                        <span>:</span>
                      </div>
                      <div class="col">{{ student_bank.account_number }}</div>
                    </div>

                    <div class="row">
                      <div class="col">
                        Account Type
                        <span>:</span>
                      </div>
                      <div class="col">{{ student_bank.account_type }}</div>
                    </div>

                    <div class="row">
                      <div class="col">
                        IFSC Code
                        <span>:</span>
                      </div>
                      <div class="col">{{ student_bank.ifsc_code }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-20" v-if="studentForm.payment_mode == 'self'">
            <div class="col-sm-4">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="option"
                    v-model="studentForm.payment_type"
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
                    v-model="studentForm.payment_type"
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
                    v-model="studentForm.payment_type"
                    value="net"
                  />
                  Net Banking
                </label>
              </div>
            </div>
          </div>

          <div class="row" v-if="studentForm.payment_mode == 'student'">
            <div class="col-sm-6" v-for="bank in bankdetail" :key="bank.id">
              <hr />
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input
                    type="radio"
                    :value="bank.id"
                    class="form-check-input"
                    v-model="studentForm.schoolbankdetail_id"
                  />
                  {{ bank.name }}
                </label>
              </div>
              <div class="ml-5">
                <div class="row">
                  <div class="col">
                    Beneficary
                    <span>:</span>
                  </div>
                  <div class="col">{{ bank.name }}</div>
                </div>

                <div class="row">
                  <div class="col">
                    Bank
                    <span>:</span>
                  </div>
                  <div class="col">{{ bank.bank_name }}</div>
                </div>

                <div class="row">
                  <div class="col">
                    Account Number
                    <span>:</span>
                  </div>
                  <div class="col">{{ bank.account_number }}</div>
                </div>

                <div class="row">
                  <div class="col">
                    Account Type
                    <span>:</span>
                  </div>
                  <div class="col">{{ bank.account_type }}</div>
                </div>

                <div class="row">
                  <div class="col">
                    IFSC Code
                    <span>:</span>
                  </div>
                  <div class="col">{{ bank.ifsc_code }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-20">
            <div class="col-sm-18">
              <label for="robot" class="col-sm-2 col-form-label">RObOt?</label>
              <div class="col-sm-10">
                <vue-recaptcha
                  ref="recaptcha"
                  :loadRecaptchaScript="true"
                  @expired="onCaptchaExpired"
                  @verify="onVerify"
                  sitekey="6LeyF7gZAAAAADBt5N6EDQqFhL4-DZBUC13NgDpT"
                ></vue-recaptcha>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <button
              v-if="studentForm.payment_type == 'net'"
              type="button"
              @click="onlinePayment()"
              class="btn btn-outline-primary btn-square ml-2"
            >
              SUBMIT
            </button>

            <button
              v-else
              type="button"
              class="btn btn-outline-primary btn-square"
              @click="submitPayment()"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="chequePage == true">
      <div class="container pt-20">
        <p>Please Fill Cheque/DD Details..</p>
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="father_name">Bank Name</label>
              <input
                type="text"
                class="form-control"
                v-model="studentForm.cheque_bank_name"
              />
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="father_name">Date of Issue</label>
              <input
                type="date"
                class="form-control"
                v-model="studentForm.date_of_issue"
              />
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="father_name">IFSC Code</label>
              <input
                type="text"
                class="form-control"
                v-model="studentForm.ifsc_code"
              />
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="father_name">Cheque Number</label>
              <input
                type="number"
                class="form-control"
                v-model="studentForm.cheque_number"
              />
            </div>
          </div>
        </div>
        <div class="text-center">
          <button
            type="button"
            class="btn btn-outline-primary btn-square"
            @click="backReset()"
          >
            BACK
          </button>

          <button
            type="button"
            class="btn btn-outline-primary btn-square"
            @click="validateCheque()"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import { Form, HasError, AlertError } from "vform";
export default {
  name: "Tour-list",
  components: {
    "vue-recaptcha": VueRecaptcha,
    "has-error": HasError,
  },
  data() {
    return {
      chequePage: false,
      response: "",
      price: "",

      tours: "",
      formShow: false,
      payment_mode: "self",
      self_pay_mode: "cheque",
      student_bank: [],
      bankdetail: [],
      banknames: [],
      tour_info: "",
      userinfo: "",
      robot: false,

      studentForm: {
        payment_mode: "self",
        payment_type: "",
        tour_code: "",
        schoolbankdetail_id: "",
        amount: "",
        user_id: "",
        school_id: "",
        cheque_bank_name: "",
        date_of_issue: "",
        ifsc_code: "",
        cheque_number: "",
      },
      form: new Form({
        name: "",
        bank_name: "",
        account_number: "",
        account_type: "",
        ifsc_code: "",
        tour_code: this.tour_id,
      }),
      account_type: [
        "Current Account",
        "Saving Account",
        "Recurring Deposit Account",
        "Fixed Deposit Account",
      ],
      banknames: [],
      tour_id: "",
    };
  },
  mounted() {
    if (this.$store.state.paymentData != "") {
      this.tour_id = this.$store.state.paymentData.tour_id;
      this.userinfo = this.$cookies.get("user");
      this.studentForm.school_id = this.userinfo.school_id;
      console.log(this.userinfo);
      this.tourBank();
      this.userData();
    } else {
      this.$router.push("/tour-list");
    }
  },

  methods: {
    onVerify: function (response) {
      if (response) this.robot = true;
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset();
    },
    tourBank() {
      var data = [];
      this.$axios
        .post("/api/tour-bankdetail", data, {
          headers: {
            Authorization: `Bearer ${this.$cookies.get("access_token")}`,
          },
        })
        .then((response) => {
          this.bankdetail = response.data;
        })
        .catch((error) => {
          this.formShow = true;
          this.handleError(error);
        });
    },
    userData() {
      var data = { travel_code: this.tour_id };
      this.$axios
        .post("/api/payment-tour", data, {
          headers: {
            Authorization: `Bearer ${this.$cookies.get("access_token")}`,
          },
        })
        .then((response) => {
          console.log(response);
          this.tour_info = response.data;
          this.studentForm.user_id = response.data.user_id;
          this.studentForm.amount = response.data.price;
          this.price = this.studentForm.amount;
          this.StudentBank();
        })
        .catch((error) => {
          this.handleError(error);
        });
    },

    submitPayment() {
      this.studentForm.tour_code = this.tour_id;
      this.studentForm.amount = this.tour_info.price;
      this.studentForm.user_id = this.tour_info.user_id;
      if (this.robot == false) {
        this.$swal.fire({
          icon: "error",
          title: "Try Again !!",
        });
        return false;
      }

      if (
        this.studentForm.payment_mode == "self" &&
        this.studentForm.payment_type == "cheque"
      ) {
        this.studentForm.schoolbankdetail_id = "";
        this.chequePage = true;
        // this.$router.push(`/payment-mode/${this.tour_id}`);
      }

      if (
        this.studentForm.payment_mode == "self" &&
        this.studentForm.payment_type == "cash"
      ) {
        this.studentForm.schoolbankdetail_id = "";
        this.submitForm();
      }

      if (
        this.studentForm.payment_mode == "student" &&
        this.studentForm.schoolbankdetail_id != ""
      ) {
        this.studentForm.payment_type = "";
        this.submitForm();
      }

      return false;
    },

    bankNameList() {
      this.$axios.get("/api/banknames").then((response) => {
        this.banknames = response.data;
      });
    },

    StudentBank() {
      var data = { tour_code: this.tour_id };
      this.$axios
        .post("/api/tour-bankdetail-student", data, {
          headers: { Authorization: `Bearer ${this.$cookies.get('access_token')}` },
        })
        .then((response) => {
          this.student_bank = response.data;
          console.log(response);
        })
        .catch((error) => {
          this.handleError(error);
        });
    },

    submitForm() {
      this.$axios
        .post("/api/tour-submit-payment", this.studentForm, {
          headers: {
            Authorization: `Bearer ${this.$cookies.get("access_token")}`,
          },
        })
        .then((response) => {
          if (response.data["error"]) {
            this.$swal.fire({
              icon: "error",
              title: response.data.error,
            });
            return false;
          }
          this.$swal.fire({
            icon: "success",
            title: "Successfully Added !!",
          });
          this.$router.push("/tour-list");
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
    onlinePayment() {
      if (this.robot == false) {
        this.$swal.fire({
          icon: "error",
          title: "Try Again !!",
        });
        return false;
      }
      var data = {
        user_id: "",
        travel_code: "",
        tour_id: "",
        school_id: "",
        price: "",
        no_of_person: "",
        base_price: 0,
        paid_person: 0,
        unpaid_person: 0,
        total_members: 0,
        price: 0,
      };
      data.user_id = this.tour_info.user_id;
      data.paid_person = this.tour_info.paid_person;
      data.unpaid_person = this.tour_info.unpaid_person;
      data.total_members = this.tour_info.total_members;
      data.base_price = this.tour_info.base_price;
      data.price = this.tour_info.price;
      data.travel_code = this.tour_info.travel_code;
      data.tour_id = this.tour_id;
      data.school_id = this.userinfo.school_id;
      this.$cookies.set("payment-data", data, 60 * 60 * 1); // expire in 1 hour
      this.$router.push("/payment-billing");
    },

    backReset() {
      this.chequePage = false;
      this.studentForm.cheque_bank_name = "";
      this.studentForm.date_of_issue = "";
      this.studentForm.ifsc_code = "";
      this.studentForm.cheque_number = "";
    },

    validateCheque() {
      if (
        this.studentForm.cheque_bank_name != "" &&
        this.studentForm.date_of_issue != "" &&
        this.studentForm.ifsc_code != "" &&
        this.studentForm.cheque_number != ""
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
