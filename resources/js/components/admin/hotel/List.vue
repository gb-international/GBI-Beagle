<!-- List all itinerary template -->
<template>
    <section class="content">
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                  <!-- Start Card -->
                  <table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>HOTEL NAME  <i class="fas fa-sort"></i></th>
                            <th>LOCATION  <i class="fas fa-sort"></i></th>
                            <th>TYPE  <i class="fas fa-sort"></i></th>
                            <th>CONTACT NO.  <i class="fas fa-sort"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="itinerary in itineraryData" role="row" v-bind:class="{ odd: oddclass , 'even': evenclass}">
                            <td class="sorting_1">{{itinerary.source}}</td>
                            <td>{{itinerary.destination}}</td>
                            <td>{{itinerary.noofdays}}</td>
                            <td>{{itinerary.source}}</td>
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
        name: "List",
        data(){
          return{
            oddclass:false,
            evenclass:true,
            itineraryData:{}
          }
        },
       
       created() {
        this.getData();  
        },
        mounted:function(){
          
        },
       methods:
       {

       getData(){
        axios.get('/itinerary')
          .then((response) => {
              this.itineraryData = response.data.itineraries;
              // this.dataTable.rows.add(response.data).draw();
              setTimeout(() => $('#example').DataTable(), 1000);

          })
          .catch((error) => {
              if (error.response.status == 401) {                  
              }
          });
       },
        deleteItinerary(id){
        axios.get('/hotel/'+id)
        .then(()=>{
        this.$store.dispatch('getAllHotel')
        toast({
        type: 'success',
        title: 'Itinerary Deleted successfully'
        })
        })
        .catch(()=>{
        })
        }
       } 
    }


</script>

<style scoped>
</style>