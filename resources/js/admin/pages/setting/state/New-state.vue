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
              <label for="country_id">Country name</label>
              <dropdown-filter
                class="mb-2"
                :itemList="options"
                @update:option="CountryUpdate"
              />
              <has-error :form="form" field="country_id"></has-error>
            </div>
          </div>

          <div class="col-sm-8">
            <div class="form-group">
              <label for="name">State Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter State Name"
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
  name: "NewRole",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-filter": DropdownFilter,
  },
  data() {
    return {
      // Create a new form instance
      options: [],
      form: new Form({
        country_id: "",
        name: "",
      }),
    };
  },
  created() {
    this.countryList();
  },
  methods: {
    countryList() {
      axios.get("/api/country").then((res) => {
        if (res.data) {
          for (let i = 0; i < res.data.length; i++) {
            this.options.push({
              name: res.data[i].name,
              id: res.data[i].id,
            });
          }
        }
      });
    },

    AddSchool() {
      // Submit the form via a itinerary request
      if (this.school_name == 0) {
        toast({
          type: "error",
          title: "Please Select Country !!!",
        });
        return false;
      }
      var path = `/api/state`;
      this.form
        .post(path)
        .then((res) => {
          this.form.name = "";
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated !!!",
          });
        })
        .catch((error) => {
          if (error.res.status === 422) {
            this.errors = error.res.data.errors || {};
          }
        });
    },
    CountryUpdate(value) {
      this.form.country_id = value.id;
    },
  },
};
</script>
