<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="updateEscort()"
      >
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Add Name"
                v-model="form.name"
                name="name"
                :class="{ 'is-invalid': form.errors.has('name') }"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="salaryPerday">Salary Per Day</label>
              <input
                type="text"
                class="form-control"
                id="salaryPerday"
                placeholder="Salary Per Day"
                v-model="form.salaryPerday"
                name="salaryPerday"
                :class="{ 'is-invalid': form.errors.has('salaryPerday') }"
              />
              <has-error :form="form" field="salaryPerday"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="phoneno">Phone Number</label>
              <input
                type="text"
                class="form-control"
                id="phoneno"
                placeholder="Phone Number"
                v-model="form.phoneno"
                name="phoneno"
                :class="{ 'is-invalid': form.errors.has('phoneno') }"
              />
              <has-error :form="form" field="phoneno"></has-error>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Email"
                v-model="form.email"
                name="email"
                :class="{ 'is-invalid': form.errors.has('email') }"
              />
              <has-error :form="form" field="email"></has-error>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Enter Address"
                v-model="form.address"
                name="address"
                :class="{ 'is-invalid': form.errors.has('address') }"
              />
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
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
export default {
  name: "EditEscort",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      form: new Form({
        name: "",
        salaryPerday: "",
        phoneno: "",
        email: "",
        address: "",
      }),
    };
  },
  created() {
    this.escortData();
  },
  methods: {
    escortData() {
      axios
        .get(`/api/escort/${this.$route.params.id}/edit`)
        .then((response) => {
          this.form.fill(response.data);
        });
    },
    updateEscort() {
      this.form
        .put(`/api/escort/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push("/escort-list");
          this.$toast.fire({
            icon: "success",
            title: "Escort Updated successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>