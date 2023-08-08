<!-- 
Creator: @Manas
This template helps us to edit a job, it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
<section>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="UpdateJob()"
      >
        <div class="row" v-if="form.title">
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
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import "vue-search-select/dist/VueSearchSelect.css";
import Multiselect from "vue-multiselect";

export default {
  name: "EditJob",
  components: {
    Form,
    Multiselect,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      form: new Form({
        title: "",
        description: "",
        job_type: "",
      }),
      job_types: [
        {name:'Technology & Design', id: 'Technology & Design'},
        {name:'Operation', id: 'Operation'},
        {name:'Reservations', id: 'Reservations'},
        {name:'Sales & Marketing', id: 'Sales & Marketing'},
        {name:'Finance', id: 'Finance'},
        {name:'Product & Project Management', id: 'Product & Project Management'}
      ],
      loading: false
    };
  },
  mounted() {
    this.editJob();
  },
  methods: {
    editJob() {
      axios.get(`/api/jobs/${this.$route.params.id}/edit`).then((response) => {
        setTimeout(() => $("#example").DataTable(), 1000);
        console.log(response)
        this.form.fill(response.data);
        this.form.job_type = {name: response.data.job_type, id: response.data.job_type}
      });
    },
    UpdateJob() {
      this.loading = true
      this.form.job_type = this.form.job_type.name
      this.form
        .put(`/api/jobs/${this.$route.params.id}`)
        .then((response) => {
          console.log(response);
          //   this.$router.go(-1);
          this.$toast.fire({
            icon: "success",
            title: "Successfully Updated",
          });
        this.loading = false
        this.$router.push('/jobs');
        })
        .catch(() => {});
    },
    back() {
      this.$router.push("/jobs");
    },
  },
};
</script>