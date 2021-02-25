<template>
  <div>
    <form
      role="form"
      enctype="multipart/form-data"
      @submit.prevent="sendmail()"
    >
      <div class="form-fullwidth">
        <label class="lable-title">Name</label>
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
        <label class="lable-title">E-Mail</label>
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
        <label class="lable-title">Mobile</label>
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
        <label class="lable-title">Message</label>
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
        <input type="submit" value="Submit" name="submit" />
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