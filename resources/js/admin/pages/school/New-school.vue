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
          <div class="col-sm-4">
            <div class="form-group">
              <label for="school_name">School name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.school_name"
                :class="{ 'is-invalid': form.errors.has('school_name') }"
                placeholder="Enter School name"
              />
              <has-error :form="form" field="school_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="mobile">Contact Number</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Contact Number"
                v-model="form.mobile"
                :class="{ 'is-invalid': form.errors.has('mobile') }"
              />
              <has-error :form="form" field="mobile"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="email">Finance Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter Email"
                rows="5"
                v-model="form.finance_email_id"
                :class="{ 'is-invalid': form.errors.has('finance_email_id') }"
              />
              <has-error :form="form" field="finance_email_id"></has-error>
            </div>
          </div>
          
          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Principal Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Principal Name"
                rows="5"
                v-model="form.principal_name"
                :class="{ 'is-invalid': form.errors.has('principal_name') }"
              />
              <has-error :form="form" field="principal_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="email">Principal Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter Email"
                rows="5"
                v-model="form.principal_email_id"
                :class="{ 'is-invalid': form.errors.has('principal_email_id') }"
              />
              <has-error :form="form" field="principal_email_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="principal_mobile_number">Principal Mobile Number</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Principal Mobile Number"
                v-model="form.principal_mobile_number"
                :class="{ 'is-invalid': form.errors.has('principal_mobile_number') }"
              />
              <has-error :form="form" field="principal_mobile_number"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="street">Street</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter street"
                v-model="form.street"
                :class="{ 'is-invalid': form.errors.has('street') }"
              />
              <has-error :form="form" field="street"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="city">City</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter city"
                v-model="form.city_name"
                :class="{ 'is-invalid': form.errors.has('city_name') }"
              />
              <has-error :form="form" field="city_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="state">State</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter State"
                v-model="form.state_name"
                :class="{ 'is-invalid': form.errors.has('state_name') }"
              />
              <has-error :form="form" field="state_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="country">Country</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter country"
                v-model="form.country_name"
                :class="{ 'is-invalid': form.errors.has('country_name') }"
              />
              <has-error :form="form" field="country_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="pincode">School Pincode</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter pincode"
                v-model="form.pincode"
                :class="{ 'is-invalid': form.errors.has('pincode') }"
              />
              <has-error :form="form" field="pincode"></has-error>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="form-group">
              <label for="address">School Address</label>
              <textarea v-model="form.address"
                :class="{ 'is-invalid': form.errors.has('address') }" placeholder="School Address" class="form-control" rows="3">
              </textarea>
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
  name: "NewSchool",
  components: { Form, 
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      form: new Form({
        school_name: "",
        street: "",
        city_name: "",
        state_name: "",
        country_name: "",
        finance_email_id: "",
        principal_email_id: "",
        principal_name:"",
        principal_mobile_number:"",
        pincode: "",
        mobile: "",
        address: "",
      }),
    };
  },
  methods: {
    AddSchool() {
      this.form
        .post("/api/school")
        .then((res) => {
          this.$router.push(`/schools/${res.data.id}`);
          this.$toast.fire({
            icon: "success",
            title: "School Added successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>