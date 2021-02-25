<!-- 

This template helps us to create a new Sales profile it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
    <section class="content">
      <div class="container-fluid">
      <!--************************************************
        
      Template Type: Add New Sales Dep.
      Author:@Ajay

      ****************************************************-->
      {{editData}}
        <div class="row justify-content-around">
            <!-- left column -->
            <h3 class="card-title">Booking Detail #{{ this.$route.params.id }}</h3>
            <div class="col-md-12">
                <form role="form" enctype="multipart/form-data" @submit.prevent="editSalesdp()">
                  <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="name">Itinerary Title</label>
                            <input type="text" class="form-control" name="title" v-model="form.title" :class="{ 'is-invalid': form.errors.has('title') }" placeholder="Enter title" readonly="">
                             <has-error :form="form" field="title"></has-error>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                            <label for="position">Price</label>
                            <input type="text" class="form-control" v-model="form.price" :class="{ 'is-invalid': form.errors.has('price') }"  placeholder="Enter price" name="price" readonly="">
                            <has-error :form="form" field="price"></has-error>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                            <label for="salary">name</label>
                            <input type="text" class="form-control" v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }"  placeholder="Enter name" name="name" readonly="">
                            <has-error :form="form" field="name"></has-error>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                            <label for="phoneno">Phoneno</label>
                            <input type="text" class="form-control" v-model="form.phoneno" :class="{ 'is-invalid': form.errors.has('phoneno') }"  placeholder="Enter phoneno" name="phoneno" readonly="">
                            <has-error :form="form" field="phoneno"></has-error>
                        </div>                          
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                            <label for="address">Selling price(Sales Dep)</label>
                            <input type="text" class="form-control"  placeholder="Enter selling_price"  name="selling_price" v-model="form.selling_price" :class="{ 'is-invalid': form.errors.has('selling_price') }" readonly="">
                            <has-error :form="form" field="selling_price"></has-error>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                            <label for="no_of_client">No Of Clients</label>
                            <input type="text" class="form-control"  name="no_of_client" v-model="form.no_of_client" :class="{ 'is-invalid': form.errors.has('no_of_client') }" readonly="">
                            <has-error :form="form" field="no_of_client"></has-error>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                            <label for="start_date">Start Date</label>
                            <input type="date" class="form-control" placeholder="Enter Email"  id="start_date" rows="5" name="start_date" v-model="form.start_date" :class="{ 'is-invalid': form.errors.has('start_date') }" readonly="">
                            <has-error :form="form" field="start_date"></has-error>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                            <label for="end_date">End Date</label>
                            <input type="date" class="form-control" id="end_date" rows="5" name="end_date" v-model="form.end_date" :class="{ 'is-invalid': form.errors.has('end_date') }" readonly="">
                            <has-error :form="form" field="end_date"></has-error>
                        </div>
                      </div>
                      <div class="col-sm-4" v-if="booking_fieldz">
                        <div class="form-group">
                            <label for="booking_id">Booking ID(Unique)</label>
                            <input type="text" class="form-control" id="booking_id" name="booking_id" v-model="form.booking_id" :class="{ 'is-invalid': form.errors.has('booking_id') }">
                            <has-error :form="form" field="booking_id"></has-error>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group text-center">
                          <router-link class="btn btn-success itrn_add_btn back_btn" :to="`/account-itinerary`">Back</router-link>
                          <span v-if="form.selling_price != null">
                            <button type="submit" class="btn btn-primary itrn_add_btn back_btn">CONFIRM / UPDATE</button>

                            <button type="button" class="btn btn-primary itrn_add_btn cancel" @click="BookingCancel()">CANCEL</button>
                          </span>
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
  name: "EditSaleAccountItinerary",
  components:{Form,
  'has-error': HasError
  },
  data(){
    return {
      // Create a new form instance
      booking_fieldz:false,
      form: new Form({
        title: '',
        price: '',
        name: '',
        phoneno: '',
        selling_price: '',
        no_of_client: '',
        start_date: '',
        end_date:'',
        booking_id:'',
        status:'',
        })
    }
  },
  mounted(){
    this.$store.dispatch('getEditData',`/account/show/${this.$route.params.id}`)
  },
  computed:{
    editData(){
      this.form.fill(this.$store.getters.getEditData);// Fill the form with the data
      
    }
  },
  methods:{
    // Function to add the form data 
    editSalesdp(){
      if(this.booking_fieldz == false){
        this.$swal.fire(
          'Enter Booking ID',
          'Booking Id should be Unique.',
          'alert'
        );
        // tour code
        axios.get(`/api/tour`).then(response => {
          if(response.data){
            this.tours = response.data.data;
            if(this.tours.length >= 1){
              var last_id = this.tours[this.tours.length-1].id;
              last_id++;
              var javaScriptRelease = 'TOURCODE000' + last_id;
              this.form.booking_id = javaScriptRelease;           
            }else{
              var javaScriptRelease = 'TOURCODE000' + '0';
              this.form.booking_id = javaScriptRelease; 
            }
          }
        });
        //end tour code
        return this.booking_fieldz = true;
      }else{
        this.form.status='confirm';

        this.form.post(`/account/update/${this.$route.params.id}`)
          .then((response)=>{
               this.$router.push(`/account-itinerary`)
                this.$toast.fire({
                    icon: 'success',
                    title: 'Successfully Updated !!!'
                })
            })
            .catch((error)=>{
              console.log(error);
            })
        }
    },
    // End the function
    // Cancel Function
    BookingCancel(){
      this.form.status='cancel';
        this.form.post(`/account/update/${this.$route.params.id}`)
          .then((response)=>{
             this.$router.push(`/account-itinerary`)
              this.$toast.fire({
                  icon: 'error',
                  title: 'Successfully Canceled !!!'
              })
          })
          .catch(()=>{
          })
  }
  }
}
</script>
