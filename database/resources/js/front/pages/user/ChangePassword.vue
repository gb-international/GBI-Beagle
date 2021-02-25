<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <form role="form" id="password_form" @submit.prevent="UserPassword()">
    <div class="form-group">
      <label for="email_link">Email address:</label>
      <input
        type="email"
        class="form-control"
        v-model="emailForm.email_link"
        :class="{ 'is-invalid': emailForm.errors.has('email_link') }"
        placeholder="Enter Your Email Account"
        name="email_link"
        required
      />
      <has-error :form="emailForm" field="email_link"></has-error>
    </div>
    <button type="submit" class="btn btn-block btn-primary">Submit</button>
  </form>
</template>
<script>
import { Form, HasError, AlertError } from "vform";
export default {
  name: "ChangePassword",
  components: {
    Form,
    HasError
  },
  data() {
    return {
      emailForm: new Form({
        email_link: ""
      })
    };
  },
  methods: {
    UserPassword() {
      this.emailForm
        .post("/api/sendlink")
        .then(response => {
          this.emailForm.email_link = '';
          // this.emailForm.email_link = '';
          this.$swal.fire({
            title: "Please Check your Email Account",
            icon: "success",
            animation: true
          });
        })
        .catch(err => {
          //swal("Alert", "Email or Password is incorrect!", "error","customClass");
          this.$swal.fire({
            text: "Email is not valid",
            width: 300,
            imageWidth: 100,
            type: "",
            imageAlt: "Custom image",
            animation: true
          });
        });
    }
  }
};
</script>