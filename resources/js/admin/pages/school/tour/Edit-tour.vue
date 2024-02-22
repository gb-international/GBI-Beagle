<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
<section>
  <form-layout v-if="!loading">
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="UpdateTour()"
      >
        <div class="row" v-if="form.tour_id">
          <div class="col-sm-6 d-hidden">
            <div class="form-group">
              <label for="tour_id">Tour Code</label>
              <input
                type="text"
                class="form-control"
                readonly
                v-model="form.tour_id"
                :class="{ 'is-invalid': form.errors.has('tour_id') }"
                placeholder="Enter Tour name"
              />
              <has-error :form="form" field="tour_id"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="travel_code">Travel Code</label>
              <input
                type="text"
                class="form-control"
                v-model="form.travel_code"
                :class="{ 'is-invalid': form.errors.has('travel_code') }"
                placeholder="Enter Travel Code to share with client"
              />
              <has-error :form="form" field="travel_code"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="itinerary_id">Itinerary</label>

              <dropdown-filter 
                class="mb-2" :itemList="itinerary_list" 
                v-model="form.itinerary_id"
              />

              <div class="error" v-if="form.errors.has('itinerary_id')">
                <label class="danger text-danger">{{
                  form.errors.get("itinerary_id")
                }}</label>
              </div>
            </div>
          </div>

          <div class="col-sm-6" v-if="form.customer_type == 'school'">
            <div class="form-group">
              <label for="itinerary_id">School</label>

              <dropdown-filter class="mb-2" 
                :itemList="school_list" 
                v-model="form.school_id"
              />

              <div class="error" v-if="form.errors.has('school_id')">
                <label class="danger text-danger">{{
                  form.errors.get("school_id")
                }}</label>
              </div>
            </div>
          </div>

          <div class="col-sm-6" v-if="form.customer_type == 'corporate'">
            <div class="form-group">
              <label for="itinerary_id">Company</label>

              <dropdown-filter class="mb-2" 
                :itemList="company_list" 
                v-model="form.company_id"
              />

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
                type="number"
                min="0"
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
  <div class="LoaderDiv" v-show="loading">
    <img class="loaderLogo" src="/loader/logo_gif.gif">
    <p style="padding-left: 33px; margin-top: 12px; font-weight: 500;">Loading..</p>
  </div>
</section>
</template>

<script>
import { Form, HasError } from "vform";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownFilter from "@/admin/components/form/DropdownList.vue";
export default {
  name: "EditTour",
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
      form: new Form({
        tour_id: "",
        travel_code: "",
        itinerary_id: "",
        school_id: "",
        company_id: "NA",
        customer_type: "",
        tour_start_date: "",
        tour_end_date: "",
        tour_price: "",
      }),
      loading: false
    };
  },
  mounted() {
    this.tourData();
    this.schoolData();
    this.companyData();
    this.itineraryData();
  },
  methods: {
    tourData() {
      axios.get(`/api/tour/${this.$route.params.id}/edit`).then((response) => {
        this.form.fill(response.data);
        this.minDate = response.data.tour_start_date;
      });
    },
    schoolData() {
      axios.get(`/api/school`).then((response) => {
        if (response.data) {
          for(let i = 0;i<response.data.length;i++){
            this.school_list.push({
              name:response.data[i].school_name,
              id:response.data[i].id
            });
          }
        }
      });
    },

    companyData() {
      axios.get(`/api/company`).then((response) => {
        if (response.data) {
          for(let i = 0;i<response.data.length;i++){
            this.company_list.push({
              name:response.data[i].company_name,
              id:response.data[i].id
            });
          }
        }
      });
    },

    itineraryData() {
      axios.get(`/api/itinerary`).then((response) => {
        if (response.data) {
          for(let i = 0;i<response.data.length;i++){
            this.itinerary_list.push({
              name:response.data[i].title,
              id:response.data[i].id
            });
          }
        }
      });
    },

    UpdateTour() {
      this.form
        .put(`/api/tour/${this.$route.params.id}`)
        .then((response) => {
          this.loading = true
          // this.$router.push(`/tours/`);
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated",
          });
          this.loading = false
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
  },
};
</script>
 