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
        @submit.prevent="addHotel()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Restaurant Name</label>
              <dropdown-filter class="mb-2" 
                :itemList="options" 
                @update:option="UpdatedItem" />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="date_of_arrival">Date of arrival</label>
              <input
                type="datetime-local"
                class="form-control"
                v-model="form.date_of_arrival"
                :class="{ 'is-invalid': form.errors.has('date_of_arrival') }"
                placeholder="Enter Salary Per Day"
                name="date_of_arrival"
              />
              <has-error :form="form" field="date_of_arrival"></has-error>
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
  name: "ListREstaurants",
  components: { Form, "has-error": HasError },
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      row_input: "",
      hotel_list: "",
      tour: "",
      options: [],
      form: new Form({
        tour_id: "",
        tour_code: "",
        restaurant_id: "",
        date_of_arrival: "",
      }),
    };
  },
  created() {
    this.GetData();
  },
  methods: {
    GetData() {
      axios.get(`/api/restaurants`).then((res) => {
        if (res) {
          for(let i = 0;i<res.data.length;i++){
            this.options.push({
              name:res.data[i].name,
              id:res.data[i].id
            });
          }
        }
      });
    },

    UpdatedItem(value){
      this.form.restaurant_id = value.id;
    },


    addHotel() {
      var path = `/api/bookedrestaurants`;
      this.form.tour_id = this.$route.params.id;
      this.form.tour_code = this.$route.params.tour_code;
      this.form
        .post(path)
        .then((response) => {
          if (response.data == 1) {
            this.$toast.fire({
              icon: "error",
              title: "Tour Manager already going on this tour !!!",
            });
            return false;
          }
          // this.$router.push(`/hotel-list/`)
          this.$toast.fire({
            icon: "success",
            title: "restaurant Added successfully",
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