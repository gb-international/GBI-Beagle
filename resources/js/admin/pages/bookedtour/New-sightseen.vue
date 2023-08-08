<!--
This Template is for listing for the Hotel profile using function to get the 
data from the api to display the data about the Hotel from the backend .
-->
<template>
  <form-layout>
    <template #formdata>
      <div class="reservation pl-4 pt-2">
        <form @submit.prevent="addSightseeing()" role="form">
        <div
          class="row w-100 p-3 card-layout"
          v-for="(itinerary, index) in itineraryday_list"
          :key="itinerary.id"
        >
          <div class="col-sm-5">
            <p><label for="name">Sightseeing Day {{ itinerary.day }} (<small>{{ itinerary.day_source }} - {{ itinerary.day_destination }}</small>)</label></p>
            
          </div>
          <div class="col-sm-5">
            <div
              class="row w-100"
              v-for="(row, i) in total_row[index]"
              :key="i"
            >
              <div class="col-sm-12">
                <select class="form-control select-field"
                  v-model="total_row[index][i].sightseeing_id"
                  placeholder="From"
                >
                <option value="" disabled hidden>Select Sightseeing</option>
                  <option v-for="data in options" :value="data.id" :key="data.id">{{data.name }}</option>
                </select>

              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <plus-button @click.native="addRow(index)"></plus-button>
            <minus-button @click.native="removeRow(index)"></minus-button>
          </div>
        </div>
        <form-buttons class="mb-5" />
      </form>
      </div>
    </template>
  </form-layout>
</template>

<script>
import { Form, HasError } from "vform";
import { ModelSelect } from "vue-search-select";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import PlusButton from "@/admin/components/buttons/PlusButton.vue";
import MinusButton from "@/admin/components/buttons/MinusButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
export default {
  name: "ListSightseeingsNew",
  components: {
    Form,
    "has-error": HasError,
    ModelSelect,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "plus-button": PlusButton,
    "minus-button": MinusButton

  },
  data() {
    return {
      row_input: "",
      itineraryday_list: "",
      tour: "",
      options: [],
      total_row: [],
    };
  },
  created() {
    this.sightseeingData();
    this.itineraryData();
  },
  methods: {
    sightseeingData() {
      axios.get(`/api/sightseeings`).then((response) => {
        this.options = response.data.data;
        // for (var i = 0; i < response.data.data.length; i++) {
        //   this.options.push({
        //     value: response.data.data[i].id,
        //     text:
        //       response.data.data[i].name +
        //       " (" +
        //       response.data.data[i].city.name +
        //       " )",
        //   });
        // }
      });
    },

    itineraryData() {
      axios
        .get(`/api/itinerarydayget/${this.$route.params.itinerary_id}`)
        .then((response) => {
          this.itineraryday_list = response.data;
          for (var i = 0; i < this.itineraryday_list.length; i++) {
            this.total_row.push([
              {
                tour_id: this.$route.params.id,
                tour_code: this.$route.params.tour_code,
                itineraryday_id: this.itineraryday_list[i].id,
                sightseeing_id: "",
              },
            ]);
          }
        });
    },

    addRow(index) {
      this.total_row[index].push({
        tour_id: this.$route.params.id,
        tour_code: this.$route.params.tour_code,
        itineraryday_id: this.itineraryday_list[index].id,
        sightseeing_id: "",
      });
    },

    removeRow(index) {
      if (this.total_row[index].length != 1) {
        this.total_row[index].splice(-1, 1);
      }
    },

    addSightseeing() {
      var path = `/api/bookedsightseeings`;
      console.log(this.total_row);
      axios
        .post(path, this.total_row)
        .then((response) => {
          console.log(response);
          if (response.data == 1) {
            this.$toast.fire({
              icon: "error",
              title: "Already sightseeing added for this tour !!!",
            });
            return false;
          } else if (response.data == 2) {
            this.$toast.fire({
              icon: "error",
              title: "Try again",
            });
            return false;
          }
          // this.$router.push(`/hotel-list/`)
          this.$toast.fire({
            icon: "success",
            title: "Sightseeings Added successfully",
          });
        })
        .catch(() => {});
    }
  },
};
</script>