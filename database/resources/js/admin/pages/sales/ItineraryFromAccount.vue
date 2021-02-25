<!--
This Template is for listing for the Itinerary using function to get the 
data from the api to display the data about the Itinerary from the backend .
-->
<template>
  <section class="content">
    <!--************************************************
    Template Type: Sales man Itinerary List from Account
    Author:@Ajay
    ****************************************************-->
      <div class="row justify-content-around" >
          <div class="col-md-12">
            <div class="container container_admin_body">
                <!-- Start Card -->
                <table id="example" class="display table nowrap" style="width:100%">
                  <thead>
                    <tr>
                      <th>Itinerary Title <i class="fas fa-sort"></i></th>
                      <th>No Of Days <i class="fas fa-sort"></i></th>
                      <th>Price <i class="fas fa-sort"></i></th>
                      <th>Status <i class="fas fa-sort"></i></th>
                      <th>Action <i class="fas fa-cog"></i></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="itinerary in itineraryData" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}" class="row_list" :key="itinerary.id">
                        <td>{{itinerary.title}}</td>
                        <td>{{itinerary.noofdays}}</td>
                        <td>{{itinerary.price}} /-</td>
                        <td>
                          <span  v-if="itinerary.status == 'confirm'" class="badge badge-success">{{itinerary.status}}</span>
                          <span  v-if="itinerary.status == 'cancel'" class="badge badge-danger">{{itinerary.status}}</span>
                          <span  v-if="itinerary.status == 'pending'" class="badge badge-warning">{{itinerary.status}}</span>
                        </td>
                        <td class="edit_section">
                          <!-- <router-link :to="`edit-itinerary/${itinerary.id}`" class="edit_link">
                            <span class="badge badge-primary"><i class="fas fa-pencil-alt"></i></span>
                          </router-link> -->
                          
                          <router-link :to="`submit-details/${itinerary.id}`" class="edit_link">
                            <span class="badge badge-primary" title="Send Itinerary"><i class="fas fa-paper-plane"></i></span>
                          </router-link>

                          <router-link :to="`/view-itinerary/${itinerary.itinerary_id}`" class="edit_link">
                                <span class="badge badge-primary" title="View Itinerary"><i class="fas fa-eye"></i></span>
                              </router-link>

                        </td>
                      </tr>
                    </tbody>
                  </table>
            </div>                          
            <!-- end -->
          </div>
      </div>
      <p id="post"></p>
  </section>
  <!-- /.content -->
</template>

<script>
    export default {
        name: "ListItineraryAccount",
        data(){
          return{
            oddclass:false,
            evenclass:true,
            itineraryData:[]
          }
        },
        created(){
          
          axios.get(`/account/sales_itinerary`).then(response => {
            this.itineraryData = response.data.data; // add data to the itineraryData
            console.log(this.itineraryData);
          });
        },

       methods:
       {

       } 
    }


</script>