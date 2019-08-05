<!-- List all itinerary template -->
<template>
    <section class="content">
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body">
                  <!-- Start Card -->
                  <table id="example" class="display table nowrap" style="width:100%">
                    <thead>
                        <tr>
                            <th>Source <i class="fas fa-sort"></i></th>
                            <th>Destination <i class="fas fa-sort"></i></th>
                            <th>No. of Days <i class="fas fa-sort"></i></th>
                            <th>Tour type <i class="fas fa-sort"></i></th>
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
                  alert('User session has expired. Please login again.');
                  
              }
          });


          
       },
         deleteescort(id){
              var uri = '/delete-escort/'+id;
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
                     this.escortData.splice(this.escortData.indexOf(id), 1);
                  });
                }
              });
        }
       } 
    }


</script>

<style scoped>
</style>