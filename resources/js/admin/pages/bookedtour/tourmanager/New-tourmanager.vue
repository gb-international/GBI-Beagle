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
        @submit.prevent="updateData()"
      >
        <div class="row">
          <div class="col-sm-5">
            <div class="form-group">
              <label>TOUR MANAGER</label>
              <select
                class="form-control select-field"
                v-model.lazy="escort_id"
              >
              <option value="" disabled hidden>Select Tour Manager</option>
                <option
                  v-for="data in escort_list"
                  :key="data.id"
                  :value="data.id"
                >
                  {{ data.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label>SALARY PER DAY(INR)</label>
              <p>{{ manager_data.salaryPerday }}/-</p>
            </div>
          </div>
          <div class="col-sm-3">
            <label>CONTACT NUMBER</label>
            <p>{{ manager_data.phoneno }}</p>
          </div>
          <div class="col-sm-5">
            <label>EMAIL ID</label>
            <p>{{ manager_data.email }}</p>
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
export default {
  name: "List",
  components: {
    Form,
    "has-error": HasError,
    ModelSelect,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      manager_data: "",
      escort_id: "",
      tour: "",
      escort_list: [],
    };
  },
  // Get all the data
  created() {
    this.escortData();
    this.tourData();
  },
  watch: {
    escort_id: function (value) {
      var path = `/api/escort/` + value + `/edit/`;
      axios.get(path).then((response) => {
        this.manager_data = response.data;
      });
    },
  },

  methods: {
    escortData() {
      axios.get(`/api/escort`).then((response) => {
        this.escort_list = response.data.data;
      });
    },
    tourData() {
      axios.get(`/api/tour/${this.$route.params.id}/edit`).then((response) => {
        this.tour = response.data;
      });
    },
    updateData() {
      var path = `/api/bookedescorts`;
      if (this.escort_id == undefined) {
        this.$toast.fire({
          icon: "error",
          title: "Please Select Tour Manager !!!",
        });
        return false;
      }

      var data = {
        escort_id: this.escort_id,
        tour_id: this.tour.id,
        tour_code: this.tour.tour_id,
      };
      axios
        .post(path, data)
        .then((response) => {
          if (response.data == 1) {
            this.$toast.fire({
              icon: "error",
              title: "Tour Manager already going on this tour !!!",
            });
            return false;
          }

          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated !!!",
          });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },
  },
};
</script>