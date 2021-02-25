<template>
  <div class="container login-div">
    <div class="row justify-content-center mt-5 pt-5">
      <div class="col-sm-4">
        <p class="text-center">
          <img src="/assets/admin/default/icon/logo.png" />
        </p>
        <form class="mt-5">
          <div class="form-group relative">
            <span
              class="text-info otp_link absolute cursor-pointer font-weight-bold"
              @click="sendOTP()"
              >Get OTP</span
            >
            <label class="text-white font-weight-bold"
              >Enter Mobile Number</label
            >
            <input
              type="text"
              class="input_straight"
              placeholder="Enter mobile number"
              v-model="form.number"
            />
          </div>

          <div class="form-group">
            <label class="text-white font-weight-bold">Enter OTP</label>
            <input
              type="number"
              class="input_straight"
              placeholder="Enter OTP"
              v-model="form.otp"
            />
          </div>
          <div class="form-group mt-4">
            <button
              type="button"
              class="btn btn-block text-white btn-submit"
              @click="validateOTP()"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        disable: false,
        form: {
            number: "",
            otp: "",
            otp_id: "",
            escort_id: "",
        },
    };
  },
  methods: {
    sendOTP() {
      if (this.disable == false) {
        axios
          .post("/escort/login", this.form)
          .then((response) => {
            if (response.data.success) {
              this.disable = true;
              this.form.otp_id = response.data.otp_id;
              this.form.escort_id = response.data.id;
              this.form.escort_name = response.data.name;
              this.$swal.fire(
                "Otp Sent",
                "Otp Sent To you number!!",
                "success"
              );
            } else {
              this.$toast.fire({
                icon: "error",
                title: "Please check your number",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    validateOTP() {
      if (this.form.otp != "" && this.form.otp_id != "") {
        axios.post("/escort/login-verify", this.form).then((response) => {
            if (response.data.type == "success") {
                this.$toast.fire({
                icon: "success",
                title: "Welcome to dashbaord",
                });
                this.$cookies.set("escort_id", this.form.escort_id);
                this.$cookies.set("escort_name", this.form.escort_name);
                this.$router.go('/escort/tour-list');
                
            } else {
                this.$toast.fire({
                icon: "error",
                title: "Please Enter Valid OTP",
                });
            }
        });
      }
    },
  },
};
</script>