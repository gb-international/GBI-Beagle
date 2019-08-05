<!-- add new itinerary template -->
<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-12">
                    <form role="form" enctype="multipart/form-data" @submit.prevent="addItinerary()">
                      <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="hotelId">Hotel ID</label>
                                <input type="text" class="form-control" name="hotelId" v-model="form.hotelId" :class="{ 'is-invalid': form.errors.has('hotelId') }" placeholder="Enter Hotel Type" >
                                 <has-error :form="form" field="hotelId"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-8">
                            <div class="form-group">
                                <label for="hotelName">Hotel Name</label>
                                <input type="text" class="form-control" v-model="form.hotelName" :class="{ 'is-invalid': form.errors.has('hotelName') }"  placeholder="Enter Hotel Name" name="hotelName">
                                <has-error :form="form" field="hotelName"></has-error>
                            </div>
                          </div>
                        </div>



                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="mealType">Location</label>
                                <input type="text" class="form-control" v-model="form.location" :class="{ 'is-invalid': form.errors.has('location') }"  placeholder="Enter Location" name="location">
                                <has-error :form="form" field="mealType"></has-error>
                            </div>                          
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="price">Meal Type</label>
                                <input type="text" class="form-control"  placeholder="Enter Meal Type"  name="price" v-model="form.mealType" :class="{ 'is-invalid': form.errors.has('mealType') }">
                                <has-error :form="form" field="price"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input type="text" class="form-control"  placeholder="Enter price"  name="price" v-model="form.price" :class="{ 'is-invalid': form.errors.has('price') }">
                                <has-error :form="form" field="price"></has-error>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="contactNo">Contact Number</label>
                                <input type="text" class="form-control"  placeholder="Enter Contact Number"  name="contactNo" v-model="form.contactNo" :class="{ 'is-invalid': form.errors.has('contactNo') }">
                                <has-error :form="form" field="contactNo"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" placeholder="Enter Email"  id="email" rows="5" name="email" v-model="form.description" :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-4"></div>
                          <div class="col-sm-4">
                            <div class="form-group text-center">
                              <button type="submit" class="btn btn-primary btn-block itrn_add_btn">SAVE</button>
                            </div>
                          </div>
                          <div class="col-sm-4"></div>
                        </div>                        
                    </form>
                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
</template>

<script>
   export default {
        name: "New",
        data(){
            return {
              // Create a new form instance
              form: new Form({
                source: '',
                hotelName: '',
                location: '',
                title: '',
                description: '',
                tourtype: '',
                photo:'',
                })
            }
        },
        methods:
        {

            changePhoto(event){
                let file = event.target.files[0];

                 if(file.size>1048576){
                     swal({
                         type: 'error',
                         title: 'Oops...',
                         text: 'Something went wrong!',
                         footer: '<a href>Why do I have this issue?</a>'
                     })
                 }else{
                     let reader = new FileReader();
                     reader.onload = event => {
                         this.form.photo = event.target.result
                         console.log(event.target.result)
                     };
                     reader.readAsDataURL(file);
                 }

            },
            addItinerary()
            {
                // Submit the form via a itinerary request
                this.form.post('/add-itinerary')
                  .then((response)=>{
                    console.log(response.data)
                       this.$router.push(`/add-days-itinerary/${response.data.id}`)
                        toast({
                            type: 'success',
                            title: 'Itinerary Added successfully'
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