<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <section class="content">
    <!--************************************************
      Template Type: View Itinerary Deatails
      Author:@Ajay

    ****************************************************-->
    <div class="row justify-content-around">
      <div class="col-md-12">
        <div class="container container_admin_body">
          <!-- Start Card -->
          <div class="card_view">
            <br />
            <div class="row">
              <div class="col-sm-3">
                <h5>Name</h5>
                <p>{{ user.name }}</p>
              </div>
              <div class="col-sm-3">
                <h5>Email</h5>
                <p>{{ user.email }}</p>
              </div>
              
              <div class="col-sm-6 text-center" v-if="user.information">
                <img
                  :src="user.information.photo"
                  class="img-circle w-80"
                />
              </div>
            </div>
            <div class="information" v-if="user.information">
              <div class="row">
                <div class="col-sm-3">
                  <h5>Phone Number</h5>
                  <p>{{ user.information.phone_no }}</p>
                </div>

                <div class="col-sm-3">
                  <h5>Father Name</h5>
                  <p>{{ user.information.father_name }}</p>
                </div>

                <div class="col-sm-3">
                  <h5>Mother Name</h5>
                  <p>{{ user.information.mother_name }}</p>
                </div>

                <div class="col-sm-3">
                  <h5>DOB</h5>
                  <p>{{ user.information.dob }}</p>
                </div>

                <div class="col-sm-3">
                  <h5>Gender</h5>
                  <p>{{ user.information.gender }}</p>
                </div>
                <div class="col-sm-3">
                  <h5>User Profession</h5>
                  <p>{{ user.information.user_profession }}</p>
                </div>

                <div class="col-sm-6" v-if="user.information.school_id != null">
                  <h5>School</h5>
                  <p>
                    <router-link
                      :to="`/view-school/${user.information.school.id}`"
                      >{{ user.information.school.school_name }} (ID :
                      {{ user.information.school.id }})</router-link
                    >
                  </p>
                </div>

                <div
                  class="col-sm-6"
                  v-if="user.information.user_profession == 'corporate'"
                >
                  <h5>Corporate</h5>
                  <p>{{ user.information.profession_name }}</p>
                  <p>
                    <b>Address: </b>{{ user.information.profession_address }}
                  </p>
                </div>

                <div class="col-sm-3">
                  <h5>Code</h5>
                  <p>{{ user.information.institution_code }}</p>
                </div>

                <div class="col-sm-6">
                  <h5>Address</h5>
                  <p>
                    {{ user.information.address }}
                    {{ user.information.city }},{{ user.information.zip_code }},
                    {{ user.information.state }},{{ user.information.country }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            @click="goBack()"
            class="btn btn-primary itrn_add_btn back_btn"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ViewUsers",
  data() {
    return {
      user: [],
    };
  },
  created() {
    this.busView();
  },
  methods: {
    busView() {
      axios.get(`/api/user/${this.$route.params.id}`).then((response) => {
        this.user = response.data;
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>