<!-- List all itinerary template -->
<template>
    <section class="content">
        <div class="row justify-content-around" >
            <div class="col-md-12">
              <div class="container container_admin_body department_itinerary">
                <!-- Start Card -->        
                  <div class="row">
                    <div class="col-sm-4">
                      <label>ID Number</label>
                      <h5 class="h5_class">ABCXNY</h5>
                    </div>
                    <div class="col-sm-8">
                      <label>Title</label>
                      <h5 class="h5_class">07-DAYS TOUR TO GANGTOK-DARJEELING-MIRIK LAKE</h5>
                    </div>
                  </div><br><br>

                  <form role="form" enctype="multipart/form-data" @submit.prevent="addItinerary()">
                      <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for="hotelname">Hotel Name</label>
                                <input type="text" class="form-control" name="hotelname" v-model="form.hotelname" :class="{ 'is-invalid': form.errors.has('hotelname') }" placeholder="Enter Hotel Name" >
                                 <has-error :form="form" field="hotelname"></has-error>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="students">Number of Students</label>
                                <input type="text" class="form-control" v-model="form.students" :class="{ 'is-invalid': form.errors.has('students') }"  placeholder="Enter Number Of Students" name="students">
                                <has-error :form="form" field="students"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group date_input">
                                <label for="journy">Date of journy</label>
                                  <input type="date" class="form-control" placeholder="Enter journy" name="journy" v-model="form.journy" :class="{ 'is-invalid': form.errors.has('journy') }" id="dateofbirth">

                                  <has-error :form="form" field="journy"></has-error>
                                                                
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group price_align">
                              <label>Price (Per Person)</label>
                              <h5>RS. 27000/-</h5>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4"></div>
                          <div class="col-sm-4">
                            <div class="form-group text-center">
                              <button type="submit" class="btn btn-primary btn-block itrn_add_btn">SUBMIT</button>
                            </div>
                          </div>
                          <div class="col-sm-4"></div>
                        </div>                        
                    </form>

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
             form: new Form({
                source: '',
                destination: '',
                noofdays: '',
                title: '',
                description: '',
                tourtype: '',
                photo:'',
                })
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