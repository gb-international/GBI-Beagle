<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="UpdateBus()"
      >
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                v-model="form.title"
                :class="{ 'is-invalid': form.errors.has('title') }"
                placeholder="Enter title"
              />
              <has-error :form="form" field="title"></has-error>
            </div>
          </div>
        </div>
        <form-buttons />
      </form>
    </template>
  </form-layout>
</template>
<script>
import { Form, HasError } from "vform";

import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";

export default {
  name: "New",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
  },
  data() {
    return {
      form: new Form({
        title: "",
      }),
    };
  },
  created() {
    this.editBus();
  },
  methods: {
    editBus() {
      axios.get(`/api/tags/${this.$route.params.id}/edit`).then((response) => {
        setTimeout(() => $("#example").DataTable(), 1000);
        this.form.fill(response.data);
      });
    },
    UpdateBus() {
      this.form
        .put(`/api/tags/${this.$route.params.id}`)
        .then((response) => {
          console.log(response);
          //   this.$router.go(-1);
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated",
          });
        })
        .catch(() => {});
    },
    back() {
      this.$router.push("/tags");
    },
  },
};
</script> 