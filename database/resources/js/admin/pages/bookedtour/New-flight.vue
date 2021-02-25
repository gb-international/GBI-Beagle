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
        @submit.prevent="addFlight()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="flight_id">Airline name</label>
              <select
                class="form-control select-field"
                v-model="form.flight_id"
              >
              <option value="" disabled hidden>Select Airline</option>
                <option
                  v-for="flight in flight_list"
                  :value="flight.id"
                  :key="flight.id"
                >
                  {{ flight.name }} ( {{ flight.code }} )
                </option>
              </select>
              <has-error :form="form" field="flight_id"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="flight_number">Flight Number</label>
              <input
                type="text"
                class="form-control"
                v-model="form.flight_number"
                :class="{ 'is-invalid': form.errors.has('flight_number') }"
                placeholder="Enter flight_number"
              />
              <has-error :form="form" field="flight_number"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="source">Source</label>
              <city-select @update:option="SourceUpdate"></city-select>
              <has-error :form="form" field="source"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="destination">Destination</label>
              <city-select @update:option="DestinationUpdate"></city-select>
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
export default {
  name: "List",
  components: {
    CitySelect,
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      row_input: "",
      flight_list: "",
      tour: "",
      city_list: "",
      form: new Form({
        tour_id: "",
        tour_code: "",
        flight_id: "",
        source: "",
        destination: "",
        flight_number: "",
        departure: "",
        arrival: "",
        price: "",
      }),
    };
  },
  // Get all the data
  created() {
    axios.get(`/api/flight`).then((response) => {
      if (response.data) {
        this.flight_list = response.data;
      }
    });
    axios.get(`/api/tour/${this.$route.params.id}/edit`).then((response) => {
      this.tour = response.data;
    });
  },
  // End the process of the the fetching data
  methods: {
    cityList() {
      axios.get(`/api/city`).then((response) => {
        this.city_list = response.data.data;
      });
    },
    addFlight() {
      var path = `/api/bookedflights`;
      this.form.tour_id = this.$route.params.id;
      this.form.tour_code = this.tour.tour_id;
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
            title: "Flight Added successfully",
          });
        })
        .catch(() => {});
    },

    SourceUpdate(value) {
      this.form.source = value;
    },
    DestinationUpdate(value) {
      this.form.destination = value;
    },

    goBack() {
      this.$router.push(`/booked-tour/${this.$route.params.id}`);
    },
  },
};
</script>