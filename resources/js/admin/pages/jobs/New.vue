<!-- 
This template helps us to create a new Job it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
<section>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddJob()"
      >
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="title">Job Title</label>
              <input
                type="text"
                class="form-control"
                v-model="form.title"
                :class="{ 'is-invalid': form.errors.has('title') }"
                placeholder="Enter title"
              />
              <has-error :form="form" field="title"></has-error>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="form-group">
              <label for="job_type">Job Type</label>
              <multiselect
                v-model="form.job_type"
                :options="job_types"
                :close-on-select="true"
                placeholder="Choose Job Type"
                label="name"
                track-by="name"
              ></multiselect>
              <has-error :form="form" field="job_type"></has-error>
              <p v-if="categoryWarn && !form.job_type " class="warn-error"> Select Job Type.</p>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="form-group">
              <label for="description">Job Description</label>
              <vue-editor
                v-model="form.description"
                :class="{ 'is-invalid': form.errors.has('description') }"
                :customModules="customModulesForEditor"
                :editorOptions="editorSettings"
                id="editor"
                useCustomImageHandler
                @image-added="handleImageAdded"
                @image-removed="handleImageRemoved"
              ></vue-editor>
              <has-error :form="form" field="description"></has-error>
            </div>
          </div>

        </div>
        <form-buttons />
      </form>
    </template>
  </form-layout>
</section>
</template>

<script>
import { Form, HasError } from "vform";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import "vue-search-select/dist/VueSearchSelect.css";
import Multiselect from "vue-multiselect";

export default {
  name: "NewJob",
  components: {
    Form,
    Multiselect,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      form: new Form({
        title: "",
        description: "",
        job_type: ""
      }),
      job_types: [
        {name:'Technology & Design', id:0},
        {name:'Operation', id:1},
        {name:'Reservations', id:2},
        {name:'Sales & Marketing', id:3},
        {name:'Finance', id:4},
        {name:'Product & Project Management', id:5}
      ],
      loading: false
    };
  },
  methods: {
    AddJob() {
      if(this.form.title == ''){
          this.$toast.fire({
            icon: "warning",
            title: "Please enter the title.",
          });
        return false
      }
      this.loading = true
      this.form.job_type = this.form.job_type.name
      this.form
        .post("/api/jobs")
        .then((response) => {
          this.form.reset();
          this.$toast.fire({
            icon: "success",
            title: "Job Added successfully",
          });
          this.loading = false
          this.$router.push('/jobs');
        })
        .catch(() => {});
    },
  },
};
</script>