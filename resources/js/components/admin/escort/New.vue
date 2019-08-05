<!-- add new itinerary template -->
<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-12">
                    <form role="form" enctype="multipart/form-data" @submit.prevent="addEscort()">
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
                                <label for="salaryPerday">Salary Per Day</label>
                                <input type="text" class="form-control" v-model="form.salaryPerday" :class="{ 'is-invalid': form.errors.has('salaryPerday') }"  placeholder="Enter Salary Per Day" name="salaryPerday">
                                <has-error :form="form" field="salaryPerday"></has-error>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                                <label for="phoneno">Phone Number</label>
                                <input type="text" class="form-control" v-model="form.phoneno" :class="{ 'is-invalid': form.errors.has('phoneno') }"  placeholder="Enter Phone No" name="phoneno">
                                <has-error :form="form" field="phoneno"></has-error>
                            </div>
                          </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="form-group">
                            <label for="email">Email</label>
                              <input type="email" class="form-control" v-model="form.email" :class="{ 'is-invalid': form.errors.has('phoneno') }"  placeholder="Enter Email" name="email">
                            <has-error :form="form" field="email"></has-error>
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
                      <div class="form-group text-center">
                        <button type="submit" class="btn btn-primary itrn_add_btn">SAVE</button>
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
                name: '',
                salaryPerday: '',
                phoneno: '',
                email: '',
                address: ''
                })
            }
        },
        methods:{
          addEscort(){
            this.form.post('/add-escort')
              .then((response)=>{
                console.log(response.data);
                   this.$router.push(`/escort-list`)
                    toast({
                        type: 'success',
                        title: 'Escort Added successfully'
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