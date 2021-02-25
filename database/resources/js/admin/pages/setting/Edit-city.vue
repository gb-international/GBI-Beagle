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
        @submit.prevent="updateCity()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="country_id">Country name</label>
              <dropdown-filter class="mb-2" :itemList="options" @update:option="CountryUpdate" :selectedId="form.country_id"/>
              <has-error :form="form" field="country_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="state_id">State name</label>
              <dropdown-filter class="mb-2" :itemList="state_list" @update:option="StateUpdate" :selectedId="form.state_id"/>
              <has-error :form="form" field="state_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">City Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter City Name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
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
  name: "New",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-filter":DropdownFilter
  },
  data() {
    return {
      state_list: [],
      options: [],
      country_name: 0,
      form: new Form({
        country_id: "",
        state_id: "",
        name: "",
      }),
    };
  },
  watch: {
    "form.country_id": function () {
      this.stateList(this.form.country_id);
    },
  },
  mounted() {
    this.CityData(this.$route.params.id);
    this.countryList();
  },
  methods: {
    countryList() {
      axios.get("/api/country").then((res) => {
        if (res.data) {
          for(let i = 0;i<res.data.length;i++){
            this.options.push({
              name:res.data[i].name,
              id:res.data[i].id
            });
          }
        }
      });
    },

    stateList(id) {
      axios.get("/api/country-state/" + id).then((res) => {
        if (res.data) {
          this.state_list = [];
          for(let i = 0;i<res.data.length;i++){
            this.state_list.push({
              name:res.data[i].name,
              id:res.data[i].id
            });
          }
        }
      });
    },

    CityData(id) {
      console.log(id);
      axios.get("/api/city/" + id + "/edit").then((response) => {
        this.form.fill(response.data);
      });
    },

    updateCity() {
      var path = `/api/city/${this.$route.params.id}`;
      this.form
        .put(path)
        .then((response) => {
          this.$router.push("/list-city");
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
    CountryUpdate(value){
      this.form.country_id = value.id;
    },    
    StateUpdate(value){
      this.form.state_id = value.id;
    },
  },
};
</script>
