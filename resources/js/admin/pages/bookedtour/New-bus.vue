<!--
This Template is for listing for the Hotel profile using function to get the 
data from the api to display the data about the Hotel from the backend .
-->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="addBus()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="bus_id">Bus Company</label>
              <dropdown-filter class="mb-2" 
                :itemList="bus_list" 
                @update:option="UpdatedBus" />

              <has-error :form="form" field="bus_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="source">Source</label>
              <dropdown-filter class="mb-2" 
                :itemList="city_list" 
                @update:option="UpdatedSource" />
              <has-error :form="form" field="source"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="destination">Destination</label>
              <dropdown-filter class="mb-2" 
                :itemList="city_list" 
                @update:option="UpdatedDestination" />
              <has-error :form="form" field="destination"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="departure">Departure</label>
              <input
                type="datetime-local"
                class="form-control"
                v-model="form.departure"
                :class="{ 'is-invalid': form.errors.has('departure') }"
                placeholder="Enter departure"
              />
              <has-error :form="form" field="departure"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="arrival">Arrival</label>
              <input
                type="datetime-local"
                class="form-control"
                v-model="form.arrival"
                :class="{ 'is-invalid': form.errors.has('arrival') }"
                placeholder="Enter arrival"
              />
              <has-error :form="form" field="arrival"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="price">Price</label>
              <input
                type="number"
                class="form-control"
                v-model="form.price"
                :class="{ 'is-invalid': form.errors.has('price') }"
                placeholder="Enter Price"
              />
              <has-error :form="form" field="price"></has-error>
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
import CitySelect from "@/admin/components/City-select.vue";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";
export default {
  name: "ListnewBus",
  components: {
    Form,
    CitySelect,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      row_input: "",
      bus_list: [],
      city_list:[],
      tour: "",
      form: new Form({
        tour_id: "",
        tour_code: "",
        bus_id: "",
        source: "",
        destination: "",
        departure: "",
        arrival: "",
        price: "",
      }),
    };
  },
  // Get all the data
  created() {
    this.getBuses();
    this.getTour();
    this.cityList();
  },
  // End the process of the the fetching data
  methods: {
    UpdatedBus(value){ this.form.bus_id = value.id; },
    UpdatedSource(value){ this.form.source = value.name; },
    UpdatedDestination(value){ this.form.destination = value.name; },
    
    cityList() {
      axios.get(`/api/city`).then((res) => {
        if (res) {
          for(let i = 0;i<res.data.data.length;i++){
            this.city_list.push({
              name:res.data.data[i].name,
              id:res.data.data[i].id
            });
          }
        }
      });
    },
    getBuses(){
      axios.get(`/api/bus`).then((res) => {
        if (res) {
          for(let i = 0;i<res.data.data.length;i++){
            this.bus_list.push({
              name:res.data.data[i].company_name,
              id:res.data.data[i].id
            });
          }
        }
      });
    },

    getTour(){
      axios.get(`/api/tour/${this.$route.params.id}/edit`).then((response) => {
        this.tour = response.data;
      });
    },

    addBus() {
      var path = `/api/bookedbuses`;
      this.form.tour_id = this.$route.params.id;
      this.form.tour_code = this.tour.tour_id;
      // this.form.push({'tour_id':idid,'tour_code':this.tour.tour_id});
      this.form
        .post(path)
        .then((response) => {
          console.log(response);
          if (response.data == 1) {
            this.$toast.fire({
              icon: "error",
              title: "Already Booked !!!",
            });
            return false;
          }
          // this.$router.push(`/hotel-list/`)
          this.$toast.fire({
            icon: "success",
            title: "Bus Added successfully",
          });
        })
        .catch(() => {});
    },

    goBack() {
      this.$router.push(`/booked-tour/${this.$route.params.id}`);
    },
  },
};
</script>