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
        @submit.prevent="AddDepartment()"
      >
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for="name">Department Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
        </div>
        
        <!-- <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="name">Department Description</label>
              <textarea
                rows="4"
                class="form-control"
                placeholder="Enter Description"
                v-model="form.description"
                :class="{ 'is-invalid': form.errors.has('description') }"
              />
              <has-error :form="form" field="description"></has-error>
            </div>
          </div>
        </div> -->
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
  name: "NewDepartments",
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
       // description: "",
      }),
    };
  },
  methods: {
    AddDepartment() {
      var path = `/api/departments`;
      this.form
        .post(path)
        .then((response) => {
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated !!!",
          });
          this.$router.push(`/list-departments/`);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },
  },
};
</script>