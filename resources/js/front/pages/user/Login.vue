<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div id="userlogin" v-if="formno == '1'">
    <div class="mx-auto border-0">
      <div class="border-bottom-0 bg-transparent">
        <ul class="nav nav-tabs justify-content-center" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active login_tab"
              id="pills-login-tab"
              data-toggle="pill"
              href="#pills-login"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >Login</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-register-tab"
              data-toggle="pill"
              href="#pills-register"
              role="tab"
              aria-controls="pills-register"
              aria-selected="false"
            >Register</a>
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
              @submit.prevent="loginUser()"
            >
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <img src="/images/icons/email.png" class="icon-width">
                  </span>
                </div>

                <input
                  type="email"
                  class="form-control"
                  v-model="loginform.email"
                  :class="{ 'is-invalid': loginform.errors.has('email') }"
                  placeholder="Enter Email"
                />
                <has-error :form="loginform" field="email"></has-error>
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <img src="/images/icons/key.png" class="icon-width">
                  </span>
                </div>
                <input
                  type="password"
                  class="form-control"
                  v-model="loginform.password"
                  :class="{ 'is-invalid': loginform.errors.has('password') }"
                  placeholder="Enter Password"
                />
                <has-error :form="loginform" field="password"></has-error>
              </div>

              <p v-if="login_message" class="text-danger">{{ login_message }}</p>

              <button class="btn btn-default btn-block loginbutton">Login</button>
              <loader v-if="isLoading==true"></loader>

              <p class="text-center message">
                <a href="#" class="forget_link" v-on:click="changeform">Forget Password?</a>
              </p>
            </form>
          </div>

          <!-- end login -->
          <!-- Register Form -->
          <div
            class="tab-pane fade"
            id="pills-register"
            role="tabpanel"
            aria-labelledby="pills-register-tab"
          >
            <register></register>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- user password change -->
  <div id="change_password" v-else-if="formno == '2'">
    <change-password></change-password>
    <p class="text-center message">
      I have already Account :
      <a href="#" class="forget_link" v-on:click="changeform">Login</a>
    </p>
  </div>

</template>
<script>
import { Form, HasError, AlertError } from "vform";
import Register from "@/front/pages/user/Register";
import changePssword from "@/front/pages/user/ChangePassword";
import loader from '@/front/components/Loader.vue';

export default {
  name: "UserLogin",
  components: {
    Form,
    HasError,
    Register,
    "change-password": changePssword,
    loader
  },
  props: ["login_link"],
  data() {
    return {
      formno: "1",
      isRunning: false,
      interval: null,
      isLoading:false,
      loginform: new Form({
        email: "",
        password: ""
      }),
      login_message: ""
    };
  },

  methods: {
    loginUser(event) {
      let email = this.loginform.email;
      let password = this.loginform.password;
      this.isLoading = true;
      this.$store
        .dispatch("login", { email, password })
        .then(response => {
          this.loginform.reset();
          window.$(".login_close").click();
          this.login_message = "";
          this.$bus.$emit("logged", "User logged");
          if(response.data.user.status == 0){
            this.$router.push("/user-information");
          }
          this.isLoading = false;
        })
        .catch(err =>{
          this.login_message = "Credentials do not match try again !!";
          this.isLoading = false;
        });
    },
    changeform() {
      if (this.formno == "1") {
        this.formno = "2";
      } else if (this.formno == "2") {
        this.formno = "1";
      } else {
        this.formno = "0";
      }
    }
  }
};
</script>
