<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddSchool()"
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
              <label for="travel_code">School Travel Code</label>
              <input
                type="text"
                class="form-control"
                v-model="form.travel_code"
                :class="{ 'is-invalid': form.errors.has('travel_code') }"
                placeholder="Enter Travel Code to share with school"
              />
              <has-error :form="form" field="travel_code"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
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

          <div class="col-sm-6">
            <div class="form-group">
              <label for="itinerary_id">School</label>

              <dropdown-filter class="mb-2" :itemList="options" @update:option="schoolUpdate"/>

              <div class="error" v-if="form.errors.has('school_id')">
                <label class="danger text-danger">{{
                  form.errors.get("school_id")
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
      options: [],
      tours: [],
      form: new Form({
        tour_id: "",
        travel_code: "",
        itinerary_id: "",
        school_id: "",
        tour_start_date: "",
        tour_end_date: "",
        tour_price: "",
      }),
    };
  },
  created() {
    this.tourData();
    this.schoolData();
    this.itineraryData();
  },
  methods: {
    schoolData() {
      axios.get(`/api/school`).then((response) => {
        if (response.data) {
          for(let i = 0;i<response.data.length;i++){
            this.options.push({
              name:response.data[i].school_name,
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

    tourData() {
      axios.get(`/api/tour`).then((response) => {
        if (response.data) {
          this.tours = response.data.data;
          if (this.tours.length >= 1) {
            var last_id = this.tours[this.tours.length - 1].id;
            last_id++;
            var javaScriptRelease = "TOURCODE000" + last_id;
            this.form.tour_id = javaScriptRelease;
          }
        }
      });
    },

    AddSchool() {
      this.form
        .post("/api/tour")
        .then((response) => {
          this.$router.push(`/tours/`);
          this.$toast.fire({
            icon: "success",
            title: "School Added successfully",
          });
        })
        .catch(() => {});
    },
    schoolUpdate(value){
      this.form.school_id = value.id;
    },
    
    itineraryUpdate(value){
      this.form.itinerary_id = value.id;
    },

  },
};
</script>
