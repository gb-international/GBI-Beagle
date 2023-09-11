<!-- 
This template helps us to create new trips, it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddTrip()"
      >
        <div class="row">

         <div class="col-md-6">
            <div class="form-group">
              <label for="trip_name">Trip Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Trip Name"
                v-model="form.trip_name"
                required
                :class="{ 'is-invalid': form.errors.has('trip_name') }"
              />
              <has-error :form="form" field="trip_name"></has-error>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="school_name">School Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter School Name"
                v-model="form.school_name"
                required
                :class="{ 'is-invalid': form.errors.has('school_name') }"
              />
              <has-error :form="form" field="school_name"></has-error>
            </div>
          </div>

          <div class="col-md-3">
            <div class="form-group">
              <label for="no_of_teachers">No. of teachers</label>
              <input
                type="number"
                min="1"
                class="form-control"
                placeholder="Enter No. of teachers"
                v-model="form.no_of_teachers"
                required
                :class="{ 'is-invalid': form.errors.has('no_of_teachers') }"
              />
              <has-error :form="form" field="no_of_teachers"></has-error>
            </div>
          </div>

          <div class="col-md-3">
            <div class="form-group">
              <label for="no_of_student">No. of students</label>
              <input
                type="number"
                min="1"
                class="form-control"
                placeholder="Enter No. of students"
                v-model="form.no_of_student"
                @input="calcCost()"
                required
                :class="{ 'is-invalid': form.errors.has('no_of_student') }"
              />
              <has-error :form="form" field="no_of_student"></has-error>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="ph_no">Phone Number</label>
              <input
                type="number"
                min="1"
                class="form-control"
                placeholder="Enter Phone Number"
                required
                v-model="form.ph_no"
                :class="{ 'is-invalid': form.errors.has('ph_no') }"
              />
              <has-error :form="form" field="ph_no"></has-error>
            </div>
          </div>
         

          <div class="col-sm-6">
            <div class="form-group">
              <label for="start_date">Start Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter Start Date"
                required
                v-model="form.start_date"
                :class="{ 'is-invalid': form.errors.has('start_date') }"
              />
              <has-error :form="form" field="start_date"></has-error>
            </div>
          </div>


          <div class="col-sm-6">
            <div class="form-group">
              <label for="end_date">End Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter End Date"
                required
                v-model="form.end_date"
                :class="{ 'is-invalid': form.errors.has('end_date') }"
              />
              <has-error :form="form" field="end_date"></has-error>
            </div>
          </div>

        </div>

        <div class="row">
        
          <div class="col-md-6">
            <div class="form-group">
              <label for="payment_date">Payment Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter Payment Date"
                required
                v-model="form.payment_date"
                :class="{ 'is-invalid': form.errors.has('payment_date') }"
              />
              <has-error :form="form" field="payment_date"></has-error>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="amt_per_pax">Cost Per Student</label>
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Enter cost"
                required
                v-model="form.amt_per_pax"
                @input="calcCost()"
                :class="{ 'is-invalid': form.errors.has('amt_per_pax') }"
              />
              <has-error :form="form" field="amt_per_pax"></has-error>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-group">
              <label for="amount_total">Amount Total</label>
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Enter amount"
                required
                readonly
                v-model="form.amount_total"
                :class="{ 'is-invalid': form.errors.has('amount_total') }"
              />
              <has-error :form="form" field="amount_total"></has-error>
            </div>
          </div>

         <div class="col-md-4">
            <div class="form-group">
              <label for="amount_paid">Amount Paid</label>
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Enter amount"
                required
                v-model="form.amount_paid"
                @input="calcPending()"
                :class="{ 'is-invalid': form.errors.has('amount_paid') }"
              />
              <has-error :form="form" field="amount_paid"></has-error>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-group">
              <label for="amount_pending">Amount Pending</label>
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Enter amount"
                required
                readonly
                v-model="form.amount_pending"
                :class="{ 'is-invalid': form.errors.has('amount_pending') }"
              />
              <has-error :form="form" field="amount_pending"></has-error>
            </div>
          </div>

        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                  <label for="booking_status">Booking Status</label>
                  <status-dd class="mb-2" :itemList="bStatus_list" @update:option="BookingUpdate"/>
                  <has-error :form="form" field="booking_status"></has-error>
                </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="payment_status">Payment Status</label>
                <status-dd class="mb-2" :itemList="pStatus_list" @update:option="PaymentUpdate"/>
               <has-error :form="form" field="payment_status"></has-error>
              </div>
            </div>
        </div>

        <!-- Adding Banner for the TRIP -->
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group itinerary_image">
              <label class="label" for="input"
                >Please upload a Banner image!</label
              >
              <br />
              <input
                @change="changePhoto($event)"
                name="banner_link"
                type="file"
                :class="{ 'is-invalid': form.errors.has('banner_link') }"
                required
                accept="jpeg, jpg, png, gif"
                class="select_image overflow-hidden"
              />

              <img v-if="form.banner_link != ''" :src="form.banner_link" alt width="80" height="80" />
              <has-error :form="form" field="banner_link"></has-error>
            </div>
          </div>
        </div>

        <form-buttons :loading="loading"/>
      </form>
    </template>
  </form-layout>
</template>

<script>
import { Form, HasError } from "vform";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import StatusDropdown from "@/admin/components/form/StatusDropdown.vue";
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
export default {
  name: "NewEvent",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "status-dd": StatusDropdown,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      loading: false,
      bStatus_list: [{
              name:'Confirmed',
              id:1
            },
            {
              name:'In Progress',
              id:2
            }
            ],
      pStatus_list: [{
              name:'Complete',
              id:1
            },
            {
              name:'Pending',
              id:2
            },
            {
              name:'In Progress',
              id:3
            }
            ],
      // Create a new form instance
      form: new Form({
        trip_name: "",
        school_name: "",
        no_of_student: "",
        no_of_teachers: "",
        ph_no: "",
        start_date: "",
        end_date: "",
        payment_date: "",
        amount_paid: 0,
        amount_pending: 0,
        amount_total: 0,
        amt_per_pax: "",
        booking_status: "",
        payment_status: "",
        banner_link: "",
        slug1: "",
        slug2: ""
      }),
    };
  },

  mounted(){
  },
  methods: {

    itineraryData() {
      axios.get(`/api/itinerary`).then((res) => {
        if (res.data) {
          for(let i = 0;i<res.data.length;i++){
            this.itinerary_list.push({
              name:res.data[i].title + ` (${res.data[i].id})`,
              id:res.data[i].id
            });
          }
        }
      });
    },
    calcCost(){
      this.form.amount_total = this.form.no_of_student * this.form.amt_per_pax;
      this.calcPending();
    },
    calcPending(){
      this.form.amount_pending = this.form.amount_total - this.form.amount_paid;
    },
    BookingUpdate(value){
      //console.log(this.form)
      this.form.booking_status = value.id;
    },
    PaymentUpdate(value){
      //console.log(this.form)
      this.form.payment_status = value.id;
    },

    AddTrip() {
      if(this.loading){
        return false;
      }
      this.loading = true;
      var path = `/api/schooltrip`;
      this.form
        .post(path)
        .then((response) => {
          this.form.reset();
          this.$router.push(`/school-trip`);
          this.$toast.fire({
            icon: "success",
            title: "Successfully Saved !!!",
          });
        })
        .catch((error) => {
          this.$toast.fire({
            icon: "error",
            title: "Please enter valid data",
          });
          this.loading = false;
          /*if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }*/
        });
    },

    changePhoto(event) {
      let file = event.target.files[0];
      if (file.size > 29048576) {
        this.$swal.fire({
          type: "error",
          title: "Oops...",
          text: "Please Select A Valid Image!",
        });
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.form.banner_link = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    goBack() {
      this.$router.push(`/school-trip`);
    },
  },
};
</script>