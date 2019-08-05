<!-- List all client template -->
<template>
    <section class="content">
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container">                <!-- Start Card -->
               
                <br>
                  <div class="card itinerary_list" v-for="client in filteredResources">
                    <div class="row">
                      <div class="col-sm-2">
                        <h5>NAME</h5>
                        <P>{{client.name}}</P>
                      </div>
                      <div class="col-sm-2">
                        <h5>Phone Number</h5>
                        <p>{{client.phoneno}}</p>
                      </div>
                      <div class="col-sm-3">
                        <h5>Email.</h5>
                        <p>{{client.email}}</p>
                      </div>
                      <div class="col-sm-2">
                        <h5>Address</h5>
                        <p>{{client.address}}</p>
                       </div>
                       <div class="col-sm-2">
                        <h5>School Name</h5>
                        <p>{{client.schoolName}}</p>
                       </div>
                        
                       <div class="col-sm-1">
                        
                         <router-link :to="`edit-client/${client.id}`"><i class="fas fa-pen"></i></router-link>
                         <a href="" @click.prevent="deleteclient(client.id)"><i class="fas fa-trash"></i></a>
                       </div>
                    </div>
                  </div>
                  <div class="row">
                  </div>
                  <!-- End card -->
                </div>
            </div>
        </div>
    </section>
    <!-- /.content -->
</template>

<script>
    export default {
        name: "List",
       data() {
          return {
            // Our data object that holds the Laravel paginator data
            currentPageIndex: 0,
            clientData: {}
          }
        },

       created() {
          axios.get('/client').then(response => {
            this.clientData = response.data.client;
          });
        },
        computed:{
            filteredResources:function() {
              if (this.searchKey) {
                return this.clientData.filter((client) => {
                  return client.name.startsWith(this.searchKey);
                })
              }
              
              else {
                return this.clientData;
              }
            }
        },
       methods:
       {
        deleteclient(id){
              var uri = '/delete-client/'+id;
              swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.value) {
                  swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                    axios.get(uri).then(response => {
                     this.clientData.data.splice(this.clientData.data.indexOf(id), 1);
                  });
                }
              });
        }
       } 
    }


</script>

<style scoped>
</style>