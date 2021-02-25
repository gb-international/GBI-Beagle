<template>
  <div id="tour_payment" class="pb-4">
    <div v-if="chequePage==false">
      <div class="container p-t-15 mb-20">
        <form>
            <div class="row" v-if="userinfo">
                <div class="col-sm-4">
                    <label>Teacher</label>
                    <select class="form-control" v-model="teacherform.user_id">
                        <option v-for="user in userinfo" :key="user.user_id" :value=user.user.id>{{ user.user.name }}</option>
                    </select>
                </div>
                <div class="col-sm-4">
                  <label>Amount</label>
                  <input type="number" class="form-control" v-model="teacherform.amount">
              </div>
            </div>
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
                    />By Self
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
                  /> Cheque/DD
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
                  /> Cash
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
                  /> Net Banking
                </label>
              </div>
            </div>
          </div>

          <!-- <div class="row" v-if="teacherform.payment_mode == 'student'">
            <div class="col-sm-6" v-for="bank in bankdetail" :key="bank.id">
              <hr />
              <div class="form-check-inline">
                <label class="form-check-label">
                  <input
                    type="radio"
                    :value="bank.id"
                    class="form-check-input"
                    v-model="teacherform.schoolbankdetail_id"
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

          </div> -->
          
          <div class="row justify-content-center mt-5">
            <button
              type="button"
              class="btn btn-outline-primary btn-square itrn_add_btn"
              @click="submitPayment()"
            >SUBMIT</button>
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
              <input type="text" class="form-control" v-model="teacherform.cheque_bank_name" />
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="father_name">Date of Issue</label>
              <input type="date" class="form-control" v-model="teacherform.date_of_issue" />
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="father_name">IFSC Code</label>
              <input type="text" class="form-control" v-model="teacherform.ifsc_code" />
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="father_name">Cheque Number</label>
              <input type="number" class="form-control" v-model="teacherform.cheque_number" />
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="button" class="btn btn-outline-primary btn-square itrn_add_btn" @click="backReset()">BACK</button>

          <button
            type="button"
            class="btn btn-outline-primary btn-square itrn_add_btn"
            @click="validateCheque()"
          >SUBMIT</button>
        </div>
      </div>
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
      teacherform: {
        payment_mode: "self",
        payment_type: "",
        tour_code: this.$route.params.tour_code,
        schoolbankdetail_id: "",
        amount: "",
        user_id: "",
        school_id: "",
        cheque_bank_name: "",
        date_of_issue: "",
        ifsc_code: "",
        cheque_number: "",
        added_by: "teacher",
      },
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
    };
  },
  mounted() {
    // this.tourBank();
    this.userData();
  },

  methods: {
    onVerify: function (response) {
      if (response) this.robot = true;
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset();
    },

    // tourBank() {
    //   var data = [];
    //   axios.get("/api/schoolbankdetails").then((response) => {
    //       this.bankdetail = response.data;
    //     })
    //     .catch((error) => {
    //       this.formShow = true;
    //       this.handleError(error);
    //     });
    // },
    userData() {

      var data = { school_id: this.$route.params.school_id };
        axios.post("/api/getshooluser",data).then((response) => {
          this.userinfo = response.data;
          console.log(response);
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
    // ModalForm() {
    //   axios.post("/api/tour-bankdetail-store").then((response) => {
    //       this.form.reset();
    //       this.tourBank();
    //       this.$swal.fire({
    //         icon: "success",
    //         title: "Beneficary Added !!",
    //       });
    //     })
    //     .catch((error) => {
    //       this.handleError(error);
    //     });
    // },

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
      this.$axios.post("/api/tour-bankdetail-student")
        .then((response) => {
          this.student_bank = response.data;
        })
        .catch((error) => {
          this.handleError(error);
        });
    },



    submitForm() {

        axios.post("/api/addtourpayment",this.teacherform).then((response) => {
          if(response.data['error']){
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
          this.$router.push(`/payments/${this.$route.params.school_id}/${this.$route.params.tour_code}`)
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

    validateCheque(){
      if(this.teacherform.cheque_bank_name != '' && this.teacherform.date_of_issue != '' && this.teacherform.ifsc_code != '' && this.teacherform.cheque_number != ''){
        this.submitForm();
      }else{
        this.$swal.fire({
          icon: "error",
          title: "Please fill all the fields !!",
        });
      }
    }
  },
};
</script>
