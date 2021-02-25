<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <section class="content">
    <div class="container-fluid">
      <!--************************************************
            Template Type: Adding New Hotel
            Author:@Ajay

      ****************************************************-->
      {{editData}}
      <div class="row justify-content-around">
        <!-- left column -->

        <div class="col-md-12">
          <form role="form" enctype="multipart/form-data" @submit.prevent="UpdateHotel()">
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
                  <label for="email">Principle Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Email"
                    rows="5"
                    v-model="form.principle_email_id"
                    :class="{ 'is-invalid': form.errors.has('principle_email_id') }"
                  />
                  <has-error :form="form" field="principle_email_id"></has-error>
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
                    type="text"
                    class="form-control"
                    placeholder="Enter pincode"
                    v-model="form.pincode"
                    :class="{ 'is-invalid': form.errors.has('pincode') }"
                  />
                  <has-error :form="form" field="pincode"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="address">School Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Address"
                    v-model="form.address"
                    :class="{ 'is-invalid': form.errors.has('address') }"
                  />
                  <has-error :form="form" field="address"></has-error>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4"></div>
              <div class="col-sm-4">
                <div class="form-group text-center">
                  <button type="submit" class="btn btn-primary btn-block itrn_add_btn">UPDATE</button>
                </div>
              </div>
              <div class="col-sm-4"></div>
            </div>
          </form>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
import { Form, HasError } from "vform";
export default {
  name: "EditSchool",
  components: { Form, "has-error": HasError },
  data() {
    return {
      // Create a new form instance
      form: new Form({
        school_name: "",
        street: "",
        city_name: "",
        state_name: "",
        country_name: "",
        finance_email_id: "",
        principle_email_id: "",
        pincode: "",
        mobile: "",
        address: ""
      })
    };
  },
  mounted() {
    this.$store.dispatch(
      "getEditData",
      `/api/schools/edit/${this.$route.params.id}`
    );
  },
  computed: {
    editData() {
      this.form.fill(this.$store.getters.getEditData); // Fill the form with the data
    }
  },
  methods: {
    UpdateHotel() {
      // Submit the form via a itinerary request
      this.form
        .post(`/api/schools/update/${this.$route.params.id}`)
        .then(response => {
          this.$router.push(`/schools/`);
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated"
          });
        })
        .catch(() => {});
    }
  }
};
</script>
