<!-- add new itinerary template -->
<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <div class="col-md-12">
                    <form role="form" enctype="multipart/form-data" @submit.prevent="addClient()">
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
                            <label for="email">Email</label>
                              <input type="email" class="form-control" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }"  placeholder="Enter Email" name="email">
                            <has-error :form="form" field="email"></has-error>
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
                        <div class="col-sm-8">
                          <div class="form-group">
                            <label for="address">Address</label>
                            <input type="text" class="form-control"  placeholder="Enter Address"  name="address" v-model="form.address" :class="{ 'is-invalid': form.errors.has('address') }">
                            <has-error :form="form" field="address"></has-error>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group date_input">
                            <label for="dob">DOB</label>
                              <input type="date" class="form-control" placeholder="Enter dob" name="journy" v-model="form.dob" :class="{ 'is-invalid': form.errors.has('dob') }">
                              
                              <has-error :form="form" field="dob"></has-error>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="form-group">
                            <label for="school">School Name</label>
                              <input type="text" class="form-control" v-model="form.schoolName" :class="{ 'is-invalid': form.errors.has('schoolName') }"  placeholder="Enter School Name" name="schoolName">
                            <has-error :form="form" field="schoolName"></has-error>
                          </div>
                        </div>
                      </div>
                      <div class="form-group text-center">
                        <button type="submit" class="btn btn-primary itrn_add_btn">SAVE</button>
                      </div>                       
                    </form>
                </div>
            </div>
        </div>
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
                email: '',
                phoneno: '',
                address: '',
                dob: '',
                school:''
                })
            }
        },
        methods:{
          addClient(){
            this.form.post('/add-client')
              .then((response)=>{
                console.log(response.data);
                   this.$router.push(`/client-list`)
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