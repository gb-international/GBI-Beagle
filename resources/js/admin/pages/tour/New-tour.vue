<!-- 

This template helps us to create a new Tour.
 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddTour()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="tour_id">Tour Code</label>
              <input
                type="text"
                class="form-control"
                readonly
                v-model="form.tour_id"
                :class="{ 'is-invalid': form.errors.has('tour_id') }"
                placeholder="Enter School name"
              />
              <has-error :form="form" field="tour_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="customer_type">Customer Type</label>

              <dropdown-filter class="mb-2" :itemList="customer_list" @update:option="customerUpdate"/>

              <div class="error" v-if="form.errors.has('customer_type')">
                <label class="danger text-danger">{{
                  form.errors.get("customer_type")
                }}</label>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="travel_code">Travel Code</label>
              <input
                type="text"
                class="form-control"
                v-model="form.travel_code"
                :class="{ 'is-invalid': form.errors.has('travel_code') }"
                placeholder="Enter Travel Code"
              />
              <has-error :form="form" field="travel_code"></has-error>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="form-group">
              <label for="itinerary_id">Itinerary</label>

              <dropdown-filter class="mb-2" :itemList="itinerary_list" @update:option="itineraryUpdate"/>

              <div class="error" v-if="form.errors.has('itinerary_id')">
                <label class="danger text-danger">{{
                  form.errors.get("itinerary_id")
                }}</label>
              </div>
            </div>
          </div>

          <div class="col-sm-12" v-if="form.customer_type == 'school'">
            <div class="form-group">
              <label for="itinerary_id">School</label>

              <dropdown-filter class="mb-2" :itemList="school_list" @update:option="schoolUpdate"/>

              <div class="error" v-if="form.errors.has('school_id')">
                <label class="danger text-danger">{{
                  form.errors.get("school_id")
                }}</label>
              </div>
            </div>
          </div>

           <div class="col-sm-12" v-if="form.customer_type == 'corporate'">
            <div class="form-group">
              <label for="itinerary_id">Company</label>

              <dropdown-filter class="mb-2" :itemList="company_list" @update:option="companyUpdate"/>

              <div class="error" v-if="form.errors.has('company_id')">
                <label class="danger text-danger">{{
                  form.errors.get("company_id")
                }}</label>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="tour_start_date">Tour Start Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter Tour Start Date"
                :min="minDate"
                v-model="form.tour_start_date"
                :class="{ 'is-invalid': form.errors.has('tour_start_date') }"
              />
              <has-error :form="form" field="tour_start_date"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="tour_end_date">Tour End Date</label>
              <input
                type="date"
                class="form-control"
                placeholder="Enter Enter Date"
                :min="form.tour_start_date"
                v-model="form.tour_end_date"
                :class="{ 'is-invalid': form.errors.has('tour_end_date') }"
              />
              <has-error :form="form" field="tour_end_date"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="tour_price">Tour Price</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Tour Price"
                v-model="form.tour_price"
                :class="{ 'is-invalid': form.errors.has('tour_price') }"
              />
              <has-error :form="form" field="tour_price"></has-error>
            </div>
          </div>
        </div>

        <form-buttons />
      </form>
    </template>
  </form-layout>
</template>
<script>
import { Form, HasError } from "vform";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";
export default {
  name: "NewTour",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      itinerary_list: [],
      school_list: [],
      company_list: [],
      tours: [],
      minDate: '',
      customer_list: [
        {name:"School",id:'school'},
        {name:"Corporate",id:'corporate'},
        {name:"General",id:'general'}
      ],
      
      form: new Form({
        customer_type: "",
        tour_id: "",
        travel_code: "",
        itinerary_id: "",
        school_id: "",
        company_id:"",
        tour_start_date: "",
        tour_end_date: "",
        tour_price: "",
      }),
    };
  },
  mounted() {
    this.tourData();
    this.schoolData();
    this.companyData();
    this.itineraryData();
    this.setMinDate();
  },
  methods: {
    setMinDate(){
      var dtToday = new Date();
      var month = dtToday.getMonth() + 1;
      var day = dtToday.getDate();
      var year = dtToday.getFullYear();

      if(month < 10)
          month = '0' + month.toString();
      if(day < 10)
          day = '0' + day.toString();

      var minDate = year + '-' + month + '-' + day;
      this.minDate = minDate;
      this.form.tour_start_date = minDate;
    },
    schoolData() {
      axios.get(`/api/school`).then((res) => {
        if (res.data) {
          for(let i = 0;i<res.data.length;i++){
            this.school_list.push({
              name:res.data[i].school_name,
              id:res.data[i].id
            });
          }
        }
      });
    },

    companyData() {
      axios.get(`/api/company`).then((res) => {
        if (res.data) {
          for(let i = 0;i<res.data.length;i++){
            this.company_list.push({
              name:res.data[i].company_name,
              id:res.data[i].id
            });
          }
        }
      });
    },

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

    tourData() {
      axios.get(`/api/tour`).then((res) => {
        if (res.data) {
          this.tours = res.data.data;
          if (this.tours.length >= 1) {
            var last_id = this.tours[this.tours.length - 1].id;
            last_id++;
            var javaScriptRelease = "TOURCODE000" + last_id;
            this.form.tour_id = javaScriptRelease;
          }
        }
      });
    },

    AddTour() {
      console.log(this.form.tour_start_date)
      this.form
        .post("/api/tour")
        .then((res) => {
          this.$router.push(`/tours/`);
          this.$toast.fire({
            icon: "success",
            title: "Tour Added successfully",
          });
        })
        .catch(() => {});
    },
    schoolUpdate(value){
      this.form.school_id = value.id;
    },

    companyUpdate(value){
      this.form.company_id = value.id;
    },
    
    itineraryUpdate(value){
      this.form.itinerary_id = value.id;
    },

    customerUpdate(value){
      this.form.customer_type = value.id;
    },

  },
};
</script>
