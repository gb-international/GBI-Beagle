<template>
  <div id="payment_mode">
    <div class="container pt-20">
      <p>Please Fill Cheque/DD Details..</p>
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label for="father_name">Bank Name</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="col-sm-4">
          <div class="form-group">
            <label for="father_name">Date of Issue</label>
            <input type="date" class="form-control" />
          </div>
        </div>

        <div class="col-sm-4">
          <div class="form-group">
            <label for="father_name">IFSC Code</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="col-sm-4">
          <div class="form-group">
            <label for="father_name">Cheque Number</label>
            <input type="text" class="form-control" />
          </div>
        </div>
      </div>

      <div class="text-center">
        <button type="button" class="btn btn-outline-primary btn-square">
          PAY
        </button>
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
      tours: "",
      formShow: false,
      payment_mode: "self",
      bankdetail: [],
      banknames: [],
      userinfo: "",
      robot: false,
      form: new Form({
        name: "",
        bank_name: "",
        account_number: "",
        account_type: "",
        ifsc_code: "",
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
    if (this.$cookies.get("access_token") == null) {
      this.$router.push("/");
    }
    this.bankNameList();
    this.tourBank();
    this.userData();
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
          headers: { Authorization: `Bearer ${localStorage.token}` },
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
      var data = { travel_code: this.$route.params.id };
      this.$axios
        .post("/api/payment-tour", data, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          this.userinfo = response.data;
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
    ModalForm() {
      this.$axios
        .post("/api/tour-bankdetail-store", this.form, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          // this.form.reset();
          console.log(response);
          this.$swal.fire({
            icon: "success",
            title: "Beneficary Added !!",
          });
        })
        .catch((error) => {
          this.handleError(error);
        });
    },

    submitPayment() {
      if (this.robot == false) {
        this.$swal.fire({
          icon: "error",
          title: "Try Again !!",
        });
        return false;
      }
      if (this.payment_mode == "self") {
        this.$route.push("/payment-mode");
      } else {
      }
      return false;
    },

    bankNameList() {
      this.$axios.get("/api/banknames").then((response) => {
        this.banknames = response.data;
      });
    },
  },
};
</script>
