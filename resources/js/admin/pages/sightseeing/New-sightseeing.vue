<!-- 

This template helps us to create a new sightseeing it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="addSightseeing()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="state">State</label>
              <select
                class="form-control select-field"
                v-model="form.state_id"
                :class="{ 'is-invalid': form.errors.has('state_id') }"
              >
              <option value="" disabled hidden>Select State</option>
                <option
                  v-for="state in state_list"
                  :value="state.id"
                  :key="state.id"
                >
                  {{ state.name }}
                </option>
              </select>
              <has-error :form="form" field="state_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="city">City</label>
              <select
                class="form-control select-field"
                v-model="form.city_id"
                :class="{ 'is-invalid': form.errors.has('city_id') }"
              >
              <option value="" disabled hidden>Select City</option>
                <option
                  v-for="city in city_list"
                  :value="city.id"
                  :key="city.id"
                >
                  {{ city.name }}
                </option>
              </select>
              <has-error :form="form" field="city_id"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Sightseeing Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter Sightseeing Name"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Address"
                id="address"
                v-model="form.address"
                :class="{ 'is-invalid': form.errors.has('address') }"
              />
              <has-error :form="form" field="address"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="adult_price">Ticket ( Adult Price )</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter Adult price"
                id="adult_price"
                v-model="form.adult_price"
                :class="{ 'is-invalid': form.errors.has('adult_price') }"
              />
              <has-error :form="form" field="adult_price"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="child_price">Ticket ( Child Price )</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter child price"
                id="child_price"
                v-model="form.child_price"
                :class="{ 'is-invalid': form.errors.has('child_price') }"
              />
              <has-error :form="form" field="child_price"></has-error>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="form-group">
              <label for="description">Descripttion</label>
              <textarea
                class="form-control textarea"
                rows="3"
                placeholder="Enter Description"
                id="description"
                v-model="form.description"
                :class="{ 'is-invalid': form.errors.has('description') }"
              ></textarea>
              <has-error :form="form" field="description"></has-error>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="form-group">
              <label for="image">Image</label>
              <br />
              <input
                @change="changeDetailPhoto($event)"
                name="image"
                type="file"
                :class="{ 'is-invalid': form.errors.has('image') }"
              />
              <has-error :form="form" field="image"></has-error>
            </div>
          </div>

          <div class="col-sm-2">
            <div class="form-group">
              <label for="image"></label>
              <br />
              <img :src="img_image" alt class="image" />
              <has-error :form="form" field="image"></has-error>
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
      img_image: "",
      state_list: "",
      city_list: "",
      form: new Form({
        name: "",
        state_id: "",
        city_id: "",
        image: "",
        alt: "",
        adult_price: "",
        child_price: "",
        address: "",
        description: "",
      }),
    };
  },
  watch: {
    "form.state_id": function () {
      this.cityData(this.form.state_id);
    },
  },
  mounted() {
    this.stateData();
  },
  methods: {
    stateData() {
      axios.get("/api/state").then((response) => {
        this.state_list = response.data;
      });
    },

    cityData(id) {
      axios.get("/api/state-city/" + id).then((response) => {
        this.city_list = response.data;
      });
    },

    changeDetailPhoto(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image = event.target.result;
        this.form.alt = file.name;
        this.img_image = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    addSightseeing() {
      this.form
        .post("/api/sightseeings")
        .then((response) => {
          this.$router.push(`/sightseeing/`);
          this.$toast.fire({
            icon: "success",
            title: "Hotel Added successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>