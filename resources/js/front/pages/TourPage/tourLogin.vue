<template>
  <!--************************************************
      Author:@Manas
      ****************************************************-->
  <div id="tourLogin">
    <div class="mx-auto border-0">
      <div class="border-bottom-0 bg-transparent">
        <ul
          class="nav nav-tabs justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link TourLogin"
              id="pills-login-tab"
              data-toggle="pill"
              href="#pills-login"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
              
              >Tour Login</a
            >
          </li>
        </ul>
      </div>
      <div class="pb-4 loginform">
        <div class="tab-content" id="pills-tabContent">
          <!-- Start Login -->
          <div
            class="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="pills-login-tab"
          >
            <form
              role="form"
              id="login-form"
              enctype="multipart/form-data"
            >

              <div class="input_with_button" v-if="otp_button">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <img :src="$gbiAssets+'/images/icons/mobile.png'" class="icon-width" />
                    </span>
                  </div>
                  <input
                    id="phone_no"
                    type="text"
                    class="form-control"
                    v-model="loginform.phone_no"
                    :class="{ 'is-invalid': loginform.errors.has('phone_no') }"
                    placeholder="Enter Phone No."
                  />
                  <has-error :form="loginform" field="phone_no"></has-error>
                </div>
              </div>

              <div class="input_button" v-if="otp_button">
                <div class="input-group mb-1">
                  <button class="btn btn-default" type="button" v-on:click="send_otp">
                    Send OTP
                  </button>
                </div>
              </div>

              <div class="input_with_button input_verify" v-if="otp_verify">
                <div class="input-group mb-1">
                  <div class="input-group-prepend">
                    <span class="input-group-text"></span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    v-model="loginform.otp"
                    :class="{ 'is-invalid': loginform.errors.has('otp') }"
                    placeholder="OTP"
                  />
                  <has-error :form="loginform" field="otp"></has-error>
                </div>
              </div>

              <div class="input_button">
                <div class="input-group mb-1">
                  <span v-if="running_time" class="timer">Time : {{ time }}</span>
                  <button
                    class="btn btn-default"
                    type="button"
                    v-if="verify_button"
                    v-on:click="otp_verify_user"
                  >
                    VERIFY
                  </button>
                  <p
                    v-if="otp_validate"
                    style="
                      font-size: 30px;
                      color: green;
                      margin-top: 12px;
                      position: absolute;
                      right: 30px;
                    "
                  >
                    <i class="fas fa-check-circle"></i>
                  </p>
                </div>
              </div>
             
              <loader v-if="isLoading == true"></loader>

            </form>
          </div>

          <!-- end login -->
        
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { Form, HasError, AlertError } from "vform";
import loader from "@/front/components/Loader.vue";

export default {
  name: "tourLogin",
  components: {
    Form,
    HasError,
    loader,
  },
  data() {
    return {
      formno: "1",
      isRunning: false,
      interval: null,
      isLoading: false,
      loginform: new Form({
        phone_no: "",
        otp: ""
      }),
      login_message: "",
      otp_validate: 0,
      otp_button: 1,
      verify_button: 0,
      otp_verify: 0,
      otp_id: "",
      interval: null,
      running_time: 0,
      time: 90,
    };
  },

  methods: {

    test_otp(){
      this.$root.$emit('login-tour');
    },

    send_otp: function (e) {
      var phone_no = this.loginform.phone_no;
      var pattern = /^[789]\d{9}$/;
      if (phone_no.match(pattern)) {
        // If Valid Number
        let data = new FormData();
        data.append("phone_no", phone_no);
        data.append("_method", "post"); // add this
        // data.append('_token',this.csrf);

        var api = "/api/sendotp3";
        this.$axios
          .post(api, data) // change this to post )
          .then((res) => {
            if (res.data.success) {
              this.otp_id = res.data.otp_id;
              this.otp_button = 0;
              this.otp_verify = 1;
              this.verify_button = 1;
              this.running_time = 1;
              this.toggleTimer();
              this.$swal.fire(
                "Otp Sent",
                "Otp sent To your number!!",
                "success"
              );
            } else {
              this.$swal.fire(res.data.error);
            }
          })
          .catch((error) =>
            this.$swal.fire("The phone no. isn't valid.")
          );
      } else {
        // If Not Valid Number
        this.$swal.fire("Invalid Phone Number");
      }
    },

    // Timer start here
    toggleTimer() {
      if (this.isRunning) {
        clearInterval(this.interval);
      } else {
        this.interval = setInterval(this.incrementTime, 1000);
      }
      this.isRunning = !this.isRunning;
    },
    incrementTime() {
      this.time = parseInt(this.time) - 1;
      if (this.time == 0) {
        this.otp_button = 1;
        this.otp_verify = 0;
        this.verify_button = 0;
        this.running_time = 0;
        this.loginform.phone_no = "";
        this.time = 90;
        this.isRunning = !this.isRunning;
        clearInterval(this.interval);
        this.$swal.fire("Alert", "Time Over !!!", "error", "customClass");
      }
    },
    // End timer here
    // Otp Verification
    otp_verify_user: function (e) {
      //this.loginUser();
      var otp = this.loginform.otp;
      var otp_id = this.otp_id;
      if (otp.length == 4) {
        let data = new FormData();
        data.append("otp", otp);
        data.append("id", otp_id);
        data.append("slug1", this.$route.params.name);
        data.append("slug2", this.$route.params.id);
        data.append("phone_no", this.loginform.phone_no);
        data.append("_method", "post"); // add this
        var api = "/api/otpverify-tour";
        this.$axios
          .post(api, data) //   this to post )
          .then((res) => {
            this.otp_button = 0;
            if (res.data.type == "success") {
              this.otp_validate = 1;
              this.verify_button = 0;
              this.running_time = 0;
              this.otp_button = 0;
              this.otp_verify = 1;
              this.verify_button = 0;
              this.toggleTimer();
              localStorage.setItem("tour_otp", otp);
              localStorage.setItem("tour_otp_id", otp_id);
              //localStorage.setItem("tourLog", 'logged');
              this.$root.$emit('login-tour');
            } else {
              this.$swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid OTP!!!",
              });
            }
          })
          .catch((error) => this.$swal.fire(error)); //
      } else {
        this.$swal.fire("Please Enter Valid Otp");
      }
    },

  },
   
};
</script>

<style scoped>
.TourLogin{
  color: #f77736 !important;
  font-size: 18px !important;
}
</style>
