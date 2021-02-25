<!-- 

This template helps us to create a new Account Sales  it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="addAccount()"
      >
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for="name">Itinerary ID </label>
              <input
                type="text"
                class="form-control"
                v-model="form.itinerary_id"
                :class="{ 'is-invalid': form.errors.has('itinerary_id') }"
                name="itinerary_id"
                readonly=""
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="position">Price</label>
              <input
                type="number"
                class="form-control"
                v-model="form.price"
                :class="{ 'is-invalid': form.errors.has('price') }"
                placeholder="Enter price"
                name="price"
                min="1"
              />
              <has-error :form="form" field="price"></has-error>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for="Location">Sales Dep</label>
              <select class="form-control select-field" v-model="form.salesdp_id">
                <option value="" disabled hidden>Select Sales Man</option>
                <option v-for="data in users" :value="data.id" :key="data.id">{{data.name }}</option>
              </select>
              <!-- <model-select
                :options="options"
                v-model="form.salesdp_id"
                placeholder="Sales department"
              ></model-select> -->
              <has-error :form="form" field="salesdp_id"></has-error>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-4">
            <back-button url="/itinerary-list"></back-button>
          </div>
          <div class="col-sm-4">
            <div class="form-group text-center">
              <submit-button>send</submit-button>
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </form>
    </template>
  </form-layout>
</template>

<script>
import { Form, HasError } from "vform";
import { ModelSelect } from "vue-search-select";
import BackButton from "@/admin/components/buttons/BackButton.vue";
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
export default {
  name: "NewItinerary",
  components: {
    Form,
    "has-error": HasError,
    ModelSelect,
    "back-button": BackButton,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
  },
  data() {
    return {
      // Create a new form instance
      itineraryData: "",
      users: [],
      form: new Form({
        itinerary_id: "",
        price: "",
        salesdp_id: "",
      }),
    };
  },
  created() {
    this.form.itinerary_id = this.$route.params.id;
    axios.get(`api/members/salesman`).then((response) => {
      this.users = response.data;
    });
  },

  methods: {
    addAccount() {
      this.form
        .post("/account/store")
        .then((response) => {
          console.log(response);
          if (response.data == "error") {
            this.$swal.fire({
              title: "opps",
              text: "Already Assigned to this Sales Dep",
              type: "error",
            });
          } else {
            // this.$router.push('/itinerary-list')
            this.$toast.fire({
              icon: "success",
              title: "Successfully Sent",
            });
          } // End if else part
        })
        .catch(() => {});
    },
  },
};
</script>