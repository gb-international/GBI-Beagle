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
        @submit.prevent="UpdateDepartment()"
      >
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for="name">Department Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter name"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
        </div>

        
       <!-- <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="name">Department Description</label>
              <textarea
                rows="4"
                class="form-control"
                placeholder="Enter Description"
                v-model="form.description"
                :class="{ 'is-invalid': form.errors.has('description') }"
              />
              <has-error :form="form" field="description"></has-error>
            </div>
          </div>
        </div> -->



        <form-buttons />
      </form>
    </template>
  </form-layout>
</template>


<script>
import { Form, HasError } from "vform";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
export default {
  name: "EditFlight",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      // Create a new form instance
      form: new Form({
        name: "",
        //description: "",
      }),
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(`/api/departments/${this.$route.params.id}/edit`)
        .then((response) => {
          this.form.fill(response.data);
        });
    },
    UpdateDepartment() {
      // Submit the form via a itinerary request
      this.form
        .put(`/api/departments/${this.$route.params.id}`)
        .then((response) => {
          this.$router.go(-1);
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
