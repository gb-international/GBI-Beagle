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

      <div class="row justify-content-around">
        <!-- left column -->
        <div class="col-md-12">
          <form role="form" enctype="multipart/form-data" @submit.prevent="UpdateStudent()">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="school_id">School</label>
                  <select class="form-control select-field" v-model="form.school_id">
                    <option
                      v-for="school in school_list"
                      :value="school.id"
                      :key="school.id"
                    >{{ school.school_name }}</option>
                  </select>

                  <has-error :form="form" field="school_id"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="first_name">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.first_name"
                    :class="{ 'is-invalid': form.errors.has('first_name') }"
                    placeholder="Enter School name"
                  />
                  <has-error :form="form" field="first_name"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="last_name">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.last_name"
                    :class="{ 'is-invalid': form.errors.has('last_name') }"
                    placeholder="Enter School name"
                  />
                  <has-error :form="form" field="last_name"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="gender">Gender</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.gender"
                    :class="{ 'is-invalid': form.errors.has('gender') }"
                    placeholder="Enter School name"
                  />
                  <has-error :form="form" field="gender"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="father_name">Father Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.father_name"
                    :class="{ 'is-invalid': form.errors.has('father_name') }"
                    placeholder="Enter School name"
                  />
                  <has-error :form="form" field="father_name"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Contact Number"
                    v-model="form.email"
                    :class="{ 'is-invalid': form.errors.has('email') }"
                  />
                  <has-error :form="form" field="email"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="mobile">Mobile</label>
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
                  <label for="alternate_mobile">Alternate Mobile</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Contact Number"
                    v-model="form.alternate_mobile"
                    :class="{ 'is-invalid': form.errors.has('alternate_mobile') }"
                  />
                  <has-error :form="form" field="alternate_mobile"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="dob">DOB</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Email"
                    rows="5"
                    v-model="form.dob"
                    :class="{ 'is-invalid': form.errors.has('dob') }"
                  />
                  <has-error :form="form" field="dob"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="class">Class</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Email"
                    rows="5"
                    v-model="form.class"
                    :class="{ 'is-invalid': form.errors.has('class') }"
                  />
                  <has-error :form="form" field="class"></has-error>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter address"
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
                <div class="col-sm-4">
                  <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary btn-block itrn_add_btn">UPDATE</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
import { Form, HasError } from 'vform'
export default {
  name: "NewStudent",
  components:{Form,
  'has-error': HasError
  },
  data() {
    return {
      // Create a new form instance
      school_list: "",
      form: new Form({
        school_id: "",
        first_name: "",
        last_name: "",
        gender: "",
        father_name: "",
        email: "",
        mobile: "",
        alternate_mobile: "",
        dob: "",
        class: "",
        address: ""
      })
    };
  },
  created() {
    this.studentData();
    this.schoolData();
  },
  methods: {
    schoolData() {
      axios.get(`/api/school`).then(response => {
        if (response.data) {
          this.school_list = response.data.data;
        }
      });
    },
    studentData() {
      axios.get(`/api/student/${this.$route.params.id}/edit`).then(response => {
        if (response.data) {
          this.form.fill(response.data);
        }
      });
    },
    UpdateStudent() {
      // Submit the form via a itinerary request
      this.form
        .put(`/api/student/${this.$route.params.id}`)
        .then(response => {
          this.$router.push(`/students/`);
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
