<!-- 

This template helps us to create a new Client it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="addMember()"
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
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                v-model="form.email"
                :class="{ 'is-invalid': form.errors.has('email') }"
                placeholder="Enter Email"
                name="email"
              />
              <has-error :form="form" field="email"></has-error>
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
              <label for="password">Password</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Password"
                name="password"
                v-model="form.password"
                :class="{ 'is-invalid': form.errors.has('password') }"
              />
              <has-error :form="form" field="password"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="c_password">Confirm Password</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Confirm Password"
                name="c_password"
                v-model="form.c_password"
                :class="{ 'is-invalid': form.errors.has('c_password') }"
              />
              <has-error :form="form" field="c_password"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
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

          <div class="col-sm-4">
            <div class="form-group date_input">
              <label for="dob">DOB</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter dob"
                name="journy"
                v-model="form.dob"
                :class="{ 'is-invalid': form.errors.has('dob') }"
              />

              <has-error :form="form" field="dob"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="RoleName">Role Assign</label>
              <select
                class="form-control select-field"
                v-model="form.RoleName"
                :class="{ 'is-invalid': form.errors.has('RoleName') }"
              >
                <option value="" disabled hidden>Select Role</option>
                <option
                  v-for="role in role_list"
                  :value="role.name"
                  :key="role.id"
                >
                  {{ role.name }}
                </option>
              </select>
              <has-error :form="form" field="RoleName"></has-error>
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
      role_list: [],
      // Create a new form instance
      form: new Form({
        name: "",
        email: "",
        password: "",
        c_password: "",
        phoneno: "",
        address: "",
        dob: "",
        RoleName: "",
      }),
    };
  },

  created() {
    axios.get("/api/role").then((response) => {
      setTimeout(() => $("#example").DataTable(), 1000);
      this.role_list = response.data;
    });
  },

  methods: {
    addMember() {
      this.form
        .post("/api/members/create")
        .then((response) => {
          this.$router.push(`/list-member`);
          console.log(response);
          this.$toast.fire({
            icon: "success",
            title: "Client Added successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>
