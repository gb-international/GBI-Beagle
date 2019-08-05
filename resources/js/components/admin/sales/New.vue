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
                                <label for="name">Name</label>
                                <input type="text" class="form-control" name="name" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Enter Name" >
                                 <has-error :form="form" field="name"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="position">Position</label>
                                <input type="text" class="form-control" v-model="form.position" :class="{ 'is-invalid': form.errors.has('position') }"  placeholder="Enter Position" name="position">
                                <has-error :form="form" field="position"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="price">Target</label>
                                <input type="text" class="form-control" v-model="form.price" :class="{ 'is-invalid': form.errors.has('price') }"  placeholder="Enter Price" name="price">
                                <has-error :form="form" field="price"></has-error>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="Location">Location</label>
                                <input type="text" class="form-control" v-model="form.mealType" :class="{ 'is-invalid': form.errors.has('mealType') }"  placeholder="Enter Location" name="mealType">
                                <has-error :form="form" field="mealType"></has-error>
                            </div>                          
                          </div>
                          <div class="col-sm-8">
                            <div class="form-group">
                                <label for="address">Address</label>
                                <input type="text" class="form-control"  placeholder="Enter Address"  name="address" v-model="form.address" :class="{ 'is-invalid': form.errors.has('address') }">
                                <has-error :form="form" field="address"></has-error>
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
                position: '',
                price: '',
                title: '',
                description: '',
                tourtype: '',
                photo:'',
                })
            }
        }
    }
</script>

<style scoped>

</style>