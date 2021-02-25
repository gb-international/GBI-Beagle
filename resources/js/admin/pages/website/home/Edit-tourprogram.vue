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
        @submit.prevent="addItinerary()"
      >
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
            <div class="form-group itinerary_image">
              <label class="label" for="image">Image !</label><br />
              <input
                @change="changeImage($event, 'image')"
                type="file"
                :class="{ 'is-invalid': form.errors.has('image') }"
                accept="jpeg,jpg,png,gif"
                class="select_image"
              />

              <img :src="img_image" alt="" width="80" height="80" />

              <has-error :form="form" field="image"></has-error>
            </div>
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

              <has-error :form="form" field="description"></has-error>
            </div>
          </div>
        </div>

        <hr />
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="mode_of_transport">Tour category</label><br />

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
import { VueEditor, Quill } from "vue2-editor";
import { ModelSelect } from "vue-search-select";
import Multiselect from "vue-multiselect";
import { Form, HasError } from "vform";

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
      img_image: "",
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
    this.TourProgramList();
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
    TourProgramList() {
      var api = `/api/tourprogram/${this.$route.params.id}/edit`;
      axios.get(api).then((response) => {
        this.form.fill(response.data);
        this.img_image = "images/tourprogram/" + this.form.image;
        var data = this.form.itinerary;
        this.form.itinerary = [];
        for (var i = 0; i < this.data.length; i++) {
          this.form.itinerary.push({
            id: data[i]["id"],
            name: data[i]["title"],
          });
        }
        console.log(this.form);
      });
    },
    getImgUrl(img) {
      return "/images/tourprogram/" + img;
    },
    changeImage(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image = event.target.result;
        this.form.alt = file.name;
        this.img_image = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    slugCreate(event) {
      var slug = "";
      var value = event.target.value.toLowerCase();
      // Trim the last whitespace
      slug = value.replace(/\s*$/g, "");
      // Change whitespace to "-"
      this.form.slug = slug.replace(/\s+/g, "-");
    },
    addItinerary() {
      console.log(this.form);

      var api = `/api/tourprogram/${this.$route.params.id}`;
      this.form
        .put(api)
        .then((response) => {
          this.$router.push(`/tourprogram`);
          console.log(response);
          this.$toast.fire({
            icon: "success",
            title: "Itinerary Updated successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>
