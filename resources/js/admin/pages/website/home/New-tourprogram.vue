<!-- 

This template helps us to create a new encyclopedia it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="addData()"
      >
        <!-- Adding photo for the itinerary -->
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label class="title">Title</label>
              <input
                type="text"
                class="form-control"
                v-model="form.title"
                :class="{ 'is-invalid': form.errors.has('title') }"
              />
            </div>
          </div>

          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-8">
                <div class="form-group itinerary_image">
                  <label class="label" for="image">Please upload image !</label
                  ><br />
                  <input
                    @change="changeImage($event, 'image')"
                    type="file"
                    :class="{ 'is-invalid': form.errors.has('image') }"
                    accept="jpeg,jpg,png,gif"
                    class="select_image mt-2"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <img :src="form.image" alt="" width="80" height="80" />
              </div>
            </div>
              <has-error :form="form" field="image"></has-error>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="descriptionId">Description</label>

              <vue-editor
                v-model="form.description"
                :class="{ 'is-invalid': form.errors.has('description') }"
              ></vue-editor>
              <has-error :form="form" field="description"></has-error>
            </div>
          </div>
        </div>

        <hr />
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="mode_of_transport">Itineraries</label><br />

              <multiselect
                v-model="form.itinerary"
                :options="itinerary_list"
                :multiple="true"
                :close-on-select="true"
                placeholder="Pick some"
                label="name"
                track-by="name"
              >
              </multiselect>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-4">
            <back-button url="/tourprogram"></back-button>
          </div>
          <div class="col-sm-4">
            <div class="form-group text-center">
              <submit-button />
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </form>
    </template>
  </form-layout>
</template>

<script>

import { ModelSelect } from "vue-search-select";
import Multiselect from "vue-multiselect";
import { Form, HasError } from "vform";
import { VueEditor, Quill } from "vue2-editor";

import BackButton from "@/admin/components/buttons/BackButton.vue";
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
export default {
  name: "New",
  components: {
    ModelSelect,
    Multiselect,
    VueEditor,
    Form,
    "has-error": HasError,
    "back-button": BackButton,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
  },
  data() {
    return {
      itinerary_list: [],
      form: new Form({
        title: "",
        description: "",
        image: "",
        alt: "",
        itinerary: [],
      }),
    };
  },
  created() {
    this.itineraryData();
  },

  methods: {
    itineraryData() {
      axios.get("/api/itinerary").then((response) => {
        this.data = response.data;
        for (var i = 0; i < this.data.length; i++) {
          this.itinerary_list.push({
            id: this.data[i]["id"],
            name: this.data[i]["title"],
          });
        }
      });
    },

    addData() {
      this.form
        .post("/api/tourprogram")
        .then((response) => {
          this.$router.push(`/tourprogram`);
          console.log(response);
          this.$toast.fire({
            icon: "success",
            title: "Itinerary Added successfully",
          });
        })
        .catch(() => {});
    },

    slugCreate(event) {
      var slug = "";
      var value = event.target.value.toLowerCase();
      // Trim the last whitespace
      slug = value.replace(/\s*$/g, "");
      // Change whitespace to "-"
      this.form.slug = slug.replace(/\s+/g, "-");
    },

    changeImage(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image = event.target.result;
        this.form.alt = file.name;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>
