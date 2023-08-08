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
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                <!-- Start Card -->        
                  <div class="card_view">
                    <!-- This row will show the itinerary detail -->

                    <br>
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>Name</h5>
                        <p>{{viewData.school_name}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Street</h5>
                        <p>{{viewData.street}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>City Name</h5>
                        <p>{{viewData.city_name}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>State Name</h5>
                        <p>{{viewData.state_name}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Country Name</h5>
                        <p>{{viewData.country_name}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Pincode</h5>
                        <p>{{viewData.pincode}}/-</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Finance Email</h5>
                        <p>{{viewData.finance_email_id}}</p>
                      </div>

                      <div class="col-sm-3">
                        <h5>Principle Email</h5>
                        <p>{{viewData.principle_email_id}}</p>
                      </div>

                      <div class="col-sm-3">
                        <h5>Mobile</h5>
                        <p>{{viewData.mobile}}</p>
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
        name: "ViewSchoolList",
        data(){
          return{
            client_view:[]   
          }
        },
        mounted(){
          this.$store.dispatch('getEditData',`/api/schools/edit/${this.$route.params.id}`)
        },
        computed:{
          viewData(){
            return this.$store.getters.getEditData;// Fill the form with the data
          }
        }
    }


</script>