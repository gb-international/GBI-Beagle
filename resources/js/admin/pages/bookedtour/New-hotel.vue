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
              <label for="name">Hotel Name</label>

              <dropdown-filter class="mb-2" 
                :itemList="hotel_list" 
                @update:option="UpdatedItem" />
                
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="check_in">Check In</label>
              <input
                type="datetime-local"
                class="form-control"
                v-model="form.check_in"
                :class="{ 'is-invalid': form.errors.has('check_in') }"
                placeholder="Enter Salary Per Day"
                name="check_in"
              />
              <has-error :form="form" field="check_in"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="check_out">Check Out</label>
              <input
                type="datetime-local"
                class="form-control"
                v-model="form.check_out"
                :class="{ 'is-invalid': form.errors.has('check_out') }"
                placeholder="Enter check Out"
                name="check_out"
              />
              <has-error :form="form" field="check_out"></has-error>
            </div>
          </div>
        </div>
        <div class="row">
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
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";
export default {
  name: "ListNewHOtels",
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
      hotel_list: [],
      tour: "",
      form: new Form({
        tour_id: "",
        tour_code: "",
        hotel_id: "",
        check_in: "",
        check_out: "",
        price: "",
      }),
    };
  },
  // Get all the data
  created() {
    this.hotelData();
    this.tourData();
  },
  // End the process of the the fetching data
  methods: {
    hotelData() {
      axios.get(`/api/hotel`).then((res) => {
        if (res) {
          for(let i = 0;i<res.data.length;i++){
            this.hotel_list.push({
              name:res.data[i].name,
              id:res.data[i].id
            });
          }
        }
      });
    },
    
    UpdatedItem(value){
      this.form.hotel_id = value.id;
    },
    tourData() {
      axios.get(`/api/tour/${this.$route.params.id}/edit`).then((response) => {
        this.tour = response.data;
      });
    },
    addHotel() {
      var path = `/api/bookedhotels`;
      this.form.tour_id = this.$route.params.id;
      this.form.tour_code = this.tour.tour_id;
      // this.form.push({'tour_id':idid,'tour_code':this.tour.tour_id});
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
            title: "Hotel Added successfully",
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