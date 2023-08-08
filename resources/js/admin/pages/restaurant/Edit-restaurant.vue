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
        @submit.prevent="UpdateRestaurant()"
      >
        <div class="row" v-if="form.city_id">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="city_id">Select City</label>

              <dropdown-list class="mb-2" 
                :itemList="options" 
                v-model.trim="form.city_id"
              />
              <has-error :form="form" field="city_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Restaurant Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter Restaurant Name"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="contact_name">Contact Person</label>
              <input
                type="text"
                class="form-control"
                v-model="form.contact_name"
                :class="{ 'is-invalid': form.errors.has('contact_name') }"
                placeholder="Enter contact person name"
              />
              <has-error :form="form" field="contact_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="contact_number">Contact Number</label>
              <input
                type="number"
                class="form-control"
                v-model="form.contact_number"
                :class="{ 'is-invalid': form.errors.has('contact_number') }"
                placeholder="Enter contact number name"
              />
              <has-error :form="form" field="contact_number"></has-error>
            </div>
          </div>

          <div class="col-sm-8">
            <div class="form-group">
              <label for="address">Address</label>
              <textarea
                class="form-control textarea"
                v-model="form.address"
                :class="{ 'is-invalid': form.errors.has('address') }"
              ></textarea>
              <has-error :form="form" field="address"></has-error>
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
import { ModelSelect } from "vue-search-select";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownList from "@/admin/components/form/DropdownList.vue";
export default {
  name: "NewRestaurant",
  components: {
    Form,
    "has-error": HasError,
    ModelSelect,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-list": DropdownList
  },
  data() {
    return {
      options: [],
      form: new Form({
        name: "",
        city_id: "",
        address: "",
        contact_name: "",
        contact_number: "",
      }),
    };
  },
  created() {
    this.cityList();
    this.RestaurantData();
  },
  methods: {
    RestaurantData() {
      axios
        .get(`/api/restaurants/${this.$route.params.id}/edit`)
        .then((response) => {
          this.form.fill(response.data);
          this.cityList();
        });
    },
    cityList() {
      axios.get(`/api/city`).then((res) => {
        if (res) {
          this.options = res.data.data;          
        }
      });
    },

    UpdateRestaurant() {
      this.form
        .put(`/api/restaurants/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push(`/restaurant-list/`);
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated",
          });
        })
        .catch(() => {});
    },
  },
};
</script>
