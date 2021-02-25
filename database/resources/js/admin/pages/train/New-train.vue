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
        @submit.prevent="AddSchool()"
      >
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for="code">Train Code</label>
              <input
                type="text"
                class="form-control"
                v-model="form.code"
                :class="{ 'is-invalid': form.errors.has('code') }"
                placeholder="Enter Train Number"
              />
              <has-error :form="form" field="code"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="name">Train Name </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Train Name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
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
import FormLayout from "@/admin/components/layout/FormLayout.vue";

export default {
  name: "NewTrain",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      // Create a new form instance
      form: new Form({
        code: "",
        name: "",
      }),
    };
  },
  methods: {
    AddSchool() {
      // Submit the form via a itinerary request
      this.form
        .post("/api/train")
        .then((response) => {
          this.$router.push(`/train-list/`);
          this.$toast.fire({
            icon: "success",
            title: "Train Added successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>
