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
            <!-- This row will show the itinerary detail -->

            <br />
            <div class="row">
              <div class="col-sm-3">
                <h5>Name</h5>

                <p>{{viewData.first_name}} {{viewData.last_name}}</p>
              </div>
              <div class="col-sm-3">
                <h5>Gender</h5>
                <p>{{viewData.gender}}</p>
              </div>
              <div class="col-sm-3">
                <h5>Father Name</h5>
                <p>{{viewData.father_name}}</p>
              </div>
              <div class="col-sm-3">
                <h5>Email</h5>
                <p>{{viewData.email}}</p>
              </div>
              <div class="col-sm-3">
                <h5>Contact</h5>
                <p>{{viewData.mobile}}</p>
              </div>
              <div class="col-sm-3">
                <h5>Alternate Mobile</h5>
                <p>{{viewData.alternate_mobile}}/-</p>
              </div>
              <div class="col-sm-3">
                <h5>DOB</h5>
                <p>{{viewData.dob}}</p>
              </div>

              <div class="col-sm-3">
                <h5>Class</h5>
                <p>{{viewData.class}}</p>
              </div>

              <div class="col-sm-3">
                <h5>Address</h5>
                <p>{{viewData.address}}</p>
              </div>

              <div class="col-sm-3">
                <h5>Created At</h5>
                <p>{{viewData.created_at}}</p>
              </div>

              <div class="col-sm-3">
                <h5>Updated At</h5>
                <p>{{viewData.updated_at}}</p>
              </div>
            </div>
          </div>
          <!-- End card -->
        </div>
        <!-- end -->
      </div>
    </div>
  </section>
  <!-- /.content -->
</template>

<script>
export default {
  name: "ViewStudent",
  data() {
    return {
      client_view: []
    };
  },
  mounted() {
    this.$store.dispatch(
      "getEditData",
      `/api/student/${this.$route.params.id}`
    );
  },
  computed: {
    viewData() {
      return this.$store.getters.getEditData; // Fill the form with the data
    }
  }
};
</script>