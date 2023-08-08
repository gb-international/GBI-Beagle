<!-- 

Creator: @Manas
This template helps us to create a new company. 

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddCompany()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="company_name">Company name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.company_name"
                :class="{ 'is-invalid': form.errors.has('company_name') }"
                placeholder="Enter Company name"
              />
              <has-error :form="form" field="company_name"></has-error>
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
              <label for="email">Primary Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter Email"
                rows="5"
                v-model="form.company_email_id"
                :class="{ 'is-invalid': form.errors.has('company_email_id') }"
              />
              <has-error :form="form" field="company_email_id"></has-error>
            </div>
          </div>
          
          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Contact Person</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Incharge Name"
                rows="5"
                v-model="form.incharge_name"
                :class="{ 'is-invalid': form.errors.has('incharge_name') }"
              />
              <has-error :form="form" field="incharge_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="email">Secondary Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter Email"
                rows="5"
                v-model="form.incharge_email_id"
                :class="{ 'is-invalid': form.errors.has('incharge_email_id') }"
              />
              <has-error :form="form" field="incharge_email_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="incharge_mobile_number">Mobile Number</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Incharge Mobile Number"
                v-model="form.incharge_mobile_number"
                :class="{ 'is-invalid': form.errors.has('incharge_mobile_number') }"
              />
              <has-error :form="form" field="incharge_mobile_number"></has-error>
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
              <label for="pincode">Office Pincode</label>
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
              <label for="address">Office Address</label>
              <textarea v-model="form.address"
                :class="{ 'is-invalid': form.errors.has('address') }" placeholder="Office Address" class="form-control" rows="3">
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
  name: "NewCompany",
  components: { Form, 
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      form: new Form({
        company_name: "",
        street: "",
        city_name: "",
        state_name: "",
        country_name: "",
        company_email_id: "",
        incharge_email_id: "",
        incharge_name:"",
        incharge_mobile_number:"",
        pincode: "",
        mobile: "",
        address: "",
      }),
    };
  },
  methods: {
    AddCompany() {
      this.form
        .post("/api/company")
        .then((res) => {
          this.$router.push(`/company/${res.data.id}`);
          this.$toast.fire({
            icon: "success",
            title: "Company Added successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>