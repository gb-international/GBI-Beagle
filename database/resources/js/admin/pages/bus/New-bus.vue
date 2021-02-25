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
              <label for="company_name">Bus Company name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.company_name"
                :class="{ 'is-invalid': form.errors.has('company_name') }"
                placeholder="Enter name"
              />
              <has-error :form="form" field="company_name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="seater">Seater </label>
              <select class="from-control select-field" v-model="form.seater">
                <option value="" disabled hidden>Select Seater</option>
                <option v-for="seat in seater" :value="seat" :key="seat.id">
                  {{ seat }}
                </option>
              </select>
              <has-error :form="form" field="seater"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="seat_type">Seat type</label>
              <select
                class="from-control select-field"
                v-model="form.seat_type"
              >
              <option value="" disabled hidden>Select Seat Type</option>
                <option v-for="seat in seat_type" :value="seat" :key="seat.id">
                  {{ seat }}
                </option>
              </select>
              <has-error :form="form" field="seat_type"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="Price">Price</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Price"
                v-model="form.price"
                :class="{ 'is-invalid': form.errors.has('price') }"
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
export default {
  name: "New",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      // Create a new form instance
      seater: [10, 20, 30, 35, 40, 45, 50],
      seat_type: ["2*2", "3*2", "Sigle seater", "Multi seater"],
      form: new Form({
        company_name: "",
        seater: "",
        seat_type: "",
        price: "",
      }),
    };
  },
  methods: {
    AddSchool() {
      // Submit the form via a itinerary request
      this.form
        .post("/api/bus")
        .then((response) => {
          this.$toast.fire({
            icon: "success",
            title: "School Added successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>