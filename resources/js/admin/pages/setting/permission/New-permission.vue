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
        @submit.prevent="AddPermission()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Permission Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Permission Name"
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
  name: "NewRole",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      form: new Form({
        name: "",
      }),
    };
  },
  methods: {
    AddPermission() {
      var path = `/api/permission`;
      this.form
        .post(path)
        .then((response) => {
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated !!!",
          });
          this.$router.push(`/list-permission`);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },

    goBack() {
      this.$router.push(`/list-permission`);
    },
  },
};
</script>
