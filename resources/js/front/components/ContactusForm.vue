<template>
  <div>
    <form
      role="form"
      enctype="multipart/form-data"
      @submit.prevent="sendmail()"
    >
      <div class="form-fullwidth">
        <label class="contact-title">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Name"
          v-model="form.name"
          name="name"
          :class="{ 'is-invalid': form.errors.has('name') }"
        />
        <has-error :form="form" field="name"></has-error>
      </div>
      <div class="form-fullwidth">
        <label class="contact-title">E-Mail</label>
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="Email"
          v-model="form.email"
          name="email"
          :class="{ 'is-invalid': form.errors.has('email') }"
        />
        <has-error :form="form" field="email"></has-error>
      </div>
      <div class="form-fullwidth">
        <label class="contact-title">Mobile</label>
        <input
          type="text"
          class="form-control"
          id="mobile"
          placeholder="Mobile"
          v-model="form.mobile"
          name="mobile"
          :class="{ 'is-invalid': form.errors.has('mobile') }"
        />
        <has-error :form="form" field="mobile"></has-error>
      </div>
      <div class="form-fullwidth">
        <label class="contact-title">Message</label>
        <textarea
          class="form-control"
          v-model="form.messagecon"
          rows="5"
          :class="{ 'is-invalid': form.errors.has('messagecon') }"
          placeholder="Message....."
        ></textarea>
        <has-error :form="form" field="messagecon"></has-error>
      </div>
      <div class="form-fullwidth alignbtn">
        <button class="contact-btn">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import { Form, HasError } from "vform";

export default {
  components: {
    Form,
    HasError,
  },

  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        mobile: "",
        messagecon: "",
      }),
    };
  },
  methods: {
    sendmail() {
      if(this.form.name == '' || this.form.email == '' || this.form.mobile == '' || this.form.messagecon == ''){
        /*this.$swal.fire({
            text: "Please fillup all the fields!",
            icon: "info",
            animation: true,
          });*/
      }
      this.form
        .post("/api/contact-us/send")
        .then((response) => {
          this.$swal.fire({
            text: "Thank you for contacting us !",
            icon: "success",
            animation: true,
          });
          this.form.reset();
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.contact-btn {
    padding: 12px 35px;
    border: none;
    border-radius: 4px;
    background: #f77736;
    color: white;
}
.contact-btn:hover{
  background: white;
  border: 1px solid #f77736;
  color: #f77736;
}
.contact-title{
    color: black;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>