<!-- 

This template helps us to create a new Escort it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="addEscort()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                name="name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter Name"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="salaryPerday">Salary Per Day</label>
              <input
                type="text"
                class="form-control"
                v-model="form.salaryPerday"
                :class="{ 'is-invalid': form.errors.has('salaryPerday') }"
                placeholder="Enter Salary Per Day"
                name="salaryPerday"
              />
              <has-error :form="form" field="salaryPerday"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="phoneno">Phone Number</label>
              <input
                type="text"
                class="form-control"
                v-model="form.phoneno"
                :class="{ 'is-invalid': form.errors.has('phoneno') }"
                placeholder="Enter Phone No"
                name="phoneno"
              />
              <has-error :form="form" field="phoneno"></has-error>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                v-model="form.email"
                :class="{ 'is-invalid': form.errors.has('phoneno') }"
                placeholder="Enter Email"
                name="email"
              />
              <has-error :form="form" field="email"></has-error>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Address"
                name="address"
                v-model="form.address"
                :class="{ 'is-invalid': form.errors.has('address') }"
              />
              <has-error :form="form" field="address"></has-error>
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
  name: "NewEscort",
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
        name: "",
        salaryPerday: "",
        phoneno: "",
        email: "",
        address: "",
      }),
    };
  },
  methods: {
    addEscort() {
      this.form
        .post("/api/escort")
        .then((response) => {
          this.$router.push(`/escort-list`);
          this.$toast.fire({
            icon: "success",
            title: "Escort Added successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>
