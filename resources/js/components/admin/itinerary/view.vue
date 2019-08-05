<!-- List all itinerary template -->
<template>
    <section class="content">
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                <!-- Start Card -->        
                  <div class="card_view">
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>Source</h5>
                        <p>Enter Source</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Destination</h5>
                        <p>Enter Destiantion</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Number of Days</h5>
                        <p>Enter Transport ID</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Tour Type</h5>
                        <p>National</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>Title</h5>
                        <p>Enter Title</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>Description</h5>
                        <p>Description</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <h4><strong>Day 01</strong></h4>
                        <h5>Title</h5>
                        <p>Enter Title</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3">
                        <h5>Description</h5>
                        <p>Enter Description</p>
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
        name: "List",
        data(){
          return{
            searchQuery:'',
            searchDestination:'',
            searchNoOfDays:'',
            itineraryData:{}
          }
        },
       
       created() {
          axios.get('/itinerary').then(response => {
            this.itineraryData = response.data.itineraries;
          });
        },
        computed:{
            filteredResources:function() {
              if (this.searchQuery) {
                return this.itineraryData.filter((itinerary) => {
                  return itinerary.source.startsWith(this.searchQuery);
                })
              }
              else if(this.searchDestination){
                return this.itineraryData.filter((itinerary) => {
                  return itinerary.destination.startsWith(this.searchDestination);
                })
              }
              else if(this.searchNoOfDays){
                return this.itineraryData.filter((itinerary) => {
                  return itinerary.noofdays.startsWith(this.searchNoOfDays);
                })
              }
              else {
                return this.itineraryData;
              }
            }
        },

       methods:
       {
       
        deleteItinerary(id){
        axios.get('/delete/'+id)
        .then(()=>{
        this.$store.dispatch('getAllitinerary')
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