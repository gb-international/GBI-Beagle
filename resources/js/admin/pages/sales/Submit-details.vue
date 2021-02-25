<!-- 

This template helps us to create a new Account Sales  it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
    <section class="content">
        <div class="container-fluid">
      <!--************************************************
      Template Type: Send Itinerary To Account Department.
      Author:@Ajay

      ****************************************************-->
      {{ editData }}
          <div class="row justify-content-around">
            <!-- left column -->
            <div class="col-md-12">
                <form role="form" enctype="multipart/form-data" @submit.prevent="addAccount()">
                  <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                            <label for="name">Itinerary Title </label>
                            <input type="text" class="form-control" v-model="form.title" :class="{ 'is-invalid': form.errors.has('title') }" name="title" readonly="">
                             <has-error :form="form" field="name"></has-error>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                            <label for="position">Selling Price</label>
                            <input type="number" class="form-control" v-model="form.selling_price" :class="{ 'is-invalid': form.errors.has('selling_price') }"  placeholder="Enter selling_price" name="selling_price" min="1">
                            <has-error :form="form" field="selling_price"></has-error>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                            <label for="Location">No Of Client</label>
                            <input type="number" class="form-control" v-model="form.no_of_client" :class="{ 'is-invalid': form.errors.has('no_of_client') }"  placeholder="Enter no_of_client" name="no_of_client" min="1">
                            <has-error :form="form" field="no_of_client"></has-error>
                        </div>                          
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                            <label for="Location">Tour Start Date</label>
                            <input type="date" class="form-control" v-model="form.start_date" :class="{ 'is-invalid': form.errors.has('start_date') }"  placeholder="Enter start_date" name="start_date">
                            <has-error :form="form" field="start_date"></has-error>
                        </div>                          
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                            <label for="Location">Tour End Date</label>
                            <input type="date" class="form-control" v-model="form.end_date" :class="{ 'is-invalid': form.errors.has('end_date') }"  placeholder="Enter end_date" name="end_date">
                            <has-error :form="form" field="end_date"></has-error>
                        </div>                          
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                            <label for="client_id">School Name</label>
                            <select class="form-control select-field" v-model="form.client_id" :class="{ 'is-invalid': form.errors.has('client_id') }">
                              <option v-for="school in SchoolData" :value="school.id" :key="school.id">{{ school.school_name }}</option>
                            </select>
                            <has-error :form="form" field="client_id"></has-error>
                        </div>                          
                      </div>

                    </div>

                    <div class="row">
                      <div class="col-sm-4"></div>
                      <div class="col-sm-4">
                        <div class="form-group text-center">
                          <button type="submit" class="btn btn-primary btn-block itrn_add_btn">Submit</button>
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
import { Form, HasError } from 'vform'
   export default {
    name: "NewItineraryAccount",
    components:{Form,
  'has-error': HasError
  },
    data(){
      return {
        // Create a new form instance
        itineraryData:'',
        SchoolData:'',
        form: new Form({
          title: '',
          selling_price: '',
          no_of_client:'',
          start_date:'',
          end_date:'',
          client_id:'',                
        })
      }
    },
    created(){
      this.$store.dispatch('getEditData',`/account/edit/${this.$route.params.id}`)
      var api = `/api/school`;
      window.axios.get(api).then(({ data }) => {
        this.SchoolData = data.data;
      });
    },
    computed:{
      // Get the data to the edit and fill the form with data to show in the form
      editData(){
        setTimeout(() => $('#example').DataTable(), 1000);
        this.form.fill(this.$store.getters.getEditData);// Fill the form with the data
      }
    },

    methods:{
      // Function to add the form data 
      addAccount(){
        var api = `/account_booking/store/`+this.$route.params.id;
        this.form.post(api)
          .then((response)=>{
            if(response.data == 'error'){
              this.$swal.fire({
                title: 'opps',
                text: "Something Wrong Try again",
                type: 'error',
              });
            }else{
              this.$router.push('/itinerary-from-account')
                this.$toast.fire({
                    icon: 'success',
                    title: 'Successfull'
                })
            }// End if else part
               
            })
            .catch(()=>{
            })
      }
      // End the function
    }
 }
</script>
