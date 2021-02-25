<template>
  <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div class="register-component">
    <form
      id="register-form"
      action="#"
      method="post"
      role="form"
      @submit.prevent="registerUser()"
    >
      <span class="text-danger">{{ register_sms }}</span>

      <div class="input-group mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <img src="/images/icons/profile.png" class="icon-width" />
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="registerForm.name"
          :class="{ 'is-invalid': registerForm.errors.has('name') }"
          placeholder="Enter Name"
        />
        <has-error :form="registerForm" field="name"></has-error>
      </div>

      <div class="input-group mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <img src="/images/icons/email.png" class="icon-width" />
          </span>
        </div>
        <input
          id="email"
          type="email"
          class="form-control"
          v-model="registerForm.email"
          :class="{ 'is-invalid': registerForm.errors.has('email') }"
          placeholder="Enter Email"
        />
        <has-error :form="registerForm" field="email"></has-error>
      </div>

      <div class="input_with_button" v-if="otp_button">
        <div class="input-group mb-1">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <img src="/images/icons/mobile.png" class="icon-width" />
            </span>
          </div>
          <input
            id="phone_no"
            type="text"
            class="form-control"
            v-model="registerForm.phone_no"
            :class="{ 'is-invalid': registerForm.errors.has('phone_no') }"
            placeholder="Enter Phone No."
          />
          <has-error :form="registerForm" field="phone_no"></has-error>
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
            v-model="registerForm.otp"
            :class="{ 'is-invalid': registerForm.errors.has('otp') }"
            placeholder="OTP"
          />
          <has-error :form="registerForm" field="otp"></has-error>
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

      <div class="input-group mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <img src="/images/icons/key.png" class="icon-width" />
          </span>
        </div>
        <input
          id="password"
          type="password"
          class="form-control"
          v-model="registerForm.password"
          :class="{ 'is-invalid': registerForm.errors.has('password') }"
          placeholder="Enter Password"
        />
        <has-error :form="registerForm" field="password"></has-error>
      </div>

      <div class="input-group mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <img src="/images/icons/key.png" class="icon-width" />
          </span>
        </div>
        <input
          id="password-confirm"
          type="password"
          class="form-control"
          v-model="registerForm.c_password"
          :class="{ 'is-invalid': registerForm.errors.has('c_password') }"
          placeholder="Re-Type Password"
        />
        <div class="w-100">
          <small class="text-danger text-left" v-if="password_error">{{ password_error }}</small>
          <small class="text-danger text-left" v-if="password_error_mismatch">{{ password_error_mismatch }}</small>
        </div>
        <has-error :form="registerForm" field="c_password"></has-error>
      </div>
      <div class="form-group register_button">
        <div class="row">
          <div class="col-md-12">
            <button type="submit" class="btn btn-block">Register</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { Form, HasError, AlertError } from "vform";
export default {
  name: "Register",
  components: {
    Form,
    HasError,
  },
  data() {
    return {
      register_sms: "",
      password_error:'',
      password_error_mismatch:'',
      registerForm: new Form({
        name: "",
        email: "",
        gbi_link: "https://www.gowithgbi.com/",
        phone_no: "",
        otp: "",
        password: "",
        c_password: "",
      }),
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
  watch:{
    'registerForm.password':function(){
      this.checkPassword(this.registerForm.password);
    },
    
    'registerForm.c_password':function(){
      this.checkPasswordMatch();
    },

  },
  methods: {
    // Login for the user
    // *******************************************************************************
    send_otp: function (e) {
      var phone_no = this.registerForm.phone_no;
      var pattern = /^[789]\d{9}$/;
      if (phone_no.match(pattern)) {
        // If Valid Number
        let data = new FormData();
        data.append("phone_no", phone_no);
        data.append("_method", "post"); // add this
        // data.append('_token',this.csrf);

        var api = "/api/sendotp";
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
                "Otp Sent To you number!!",
                "success"
              );
            } else {
              this.$swal.fire(res.data.error);
            }
          })
          .catch((error) =>
            this.$swal.fire("The phone no. has already been taken.")
          );
      } else {
        // If Not Valid Number
        this.$swal.fire("Please Enter Valid Number");
      }
    },
    // *******************************************************************************
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
        this.registerForm.phone_no = "";
        this.time = 90;
        this.isRunning = !this.isRunning;
        clearInterval(this.interval);
        this.$swal.fire("Alert", "Time Over !!!", "error", "customClass");
      }
    },
    // End timer here
    // Otp Varification
    otp_verify_user: function (e) {
      var otp = this.registerForm.otp;
      if (otp.length == 4) {
        let data = new FormData();
        data.append("otp", otp);
        data.append("id", this.otp_id);
        data.append("_method", "post"); // add this
        var api = "/api/otpverify";
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

              this.$swal.fire("Valid", "Otp is valid", "success");
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
    // *******************************************************************************
    // Register user
    // ******************************************
    registerUser() {
      if (
        this.registerForm.email == "" ||
        this.registerForm.name == "" ||
        this.otp_validate != 1
      ) {
        this.register_sms = "Please Fill all the filelds";
        return false;
      }
      if(!this.checkPassword(this.registerForm.password)){
        return false;
      }else{
        this.password_error = '';
      }
      if (this.registerForm.password == this.registerForm.c_password) {
        this.registerForm
          .post("/api/register-user")
          .then((response) => {
            if (response.status === 200) {
              // Front User Dashboard
              this.registerForm.reset();
              this.otp_validate = 0;
              this.otp_button = 1;
              this.verify_button = 0;
              this.otp_verify = 0;
              this.register_sms = "";
              this.password_error = '';
              this.password_error_mismatch = '';
              window.$(".login_close").click();
            }
            this.$swal.fire(
              "Successfull!",
              " Please Login now !!!",
              "success"
            );
          })
          .catch((err) => {
            this.register_sms = "please provide valide credentials";
          });
      } else {
        this.register_sms = "Password is not equal";
      }
      
    },
    checkPassword(str){
      var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      let result = re.test(str);
      if(result == false){
        this.password_error = 'Password should contain 8 letters, with at least a symbol, upper and lower case letters and a number ';
      }else{
        this.password_error = '';
      }
      return result;
    },
    checkPasswordMatch(){
      if(this.registerForm.password != this.registerForm.c_password){
        this.password_error_mismatch = "Password Mismatch";
      }else{
        this.password_error_mismatch = '';
      }
    }

  },
};
</script>