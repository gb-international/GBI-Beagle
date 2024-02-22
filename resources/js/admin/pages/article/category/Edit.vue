<!--************************************************
      Author:@Ajay 
      Edited by: @Manas
      ****************************************************-->
<!-- Edits: Added custom error to meta keyword field, the data element meta_keywordWarn was added -->

<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
<section>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="UpdateCategory()"

      >
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="title">Title</label>
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
              <label for="description">Description</label>
              <vue-editor
                v-model="form.description"
                :customModules="customModulesForEditor"
                :editorOptions="editorSettings"
                id="editor"
                useCustomImageHandler
                @image-added="handleImageAdded"
                @image-removed="handleImageRemoved"
                :class="{ 'is-invalid': form.errors.has('description') }"
              ></vue-editor>

              <has-error :form="form" field="description"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="meta_title">Meta Title</label>
              <input
                type="text"
                class="form-control"
                v-model="form.meta_title"
                :class="{ 'is-invalid': form.errors.has('meta_title') }"
                placeholder="Enter meta title"
              />
              <has-error :form="form" field="meta_title"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="meta_keyword">Meta Keywords</label>
              <input
                type="text"
                class="form-control"
                v-model="form.meta_keyword"
                :class="{ 'is-invalid': form.errors.has('meta_keyword') }"
                placeholder="Enter meta keyword"
              />
              <has-error :form="form" field="meta_keyword"></has-error>
              <p v-if="meta_keywordWarn && form.meta_keyword === '' " class="warn-error"> The meta keyword field is required.</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="image">Please upload a Banner image!</label>
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
              <img :src="img_image" alt class="image w-100" />
              <has-error :form="form" field="image"></has-error>
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
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";

export default {
  name: "NewCategory",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      img_image: false,
      meta_keywordWarn: false,
      form: new Form({
        title: "",
        description: "",
        image: "",
        meta_title: "",
        meta_keyword: "",
      }),
      loading: false
    };
  },
  created() {
    this.editCategory();
  },
  methods: {
    editCategory(){
      axios
        .get(`/api/categories/${this.$route.params.id}/edit`)
        .then((response) => {
          this.form.fill(response.data);
          this.form.image = [];
          this.img_image = response.data.image;
        });
    },
    UpdateCategory() {
      if (!this.form.meta_keyword) {
        this.meta_keywordWarn = true
        return false
      }
      this.loading = true
      this.form
        .put(`/api/categories/${this.$route.params.id}`)
        .then((response) => {
          this.$swal.fire(
            "Updated!",
            "Item Updated successfully",
            "success"
          );
        this.loading = false
        })
        .catch(() => {});
    },

    changeDetailPhoto(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image.push({
          name: file.name,
          file: event.target.result,
        });
        this.img_image = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    back() {
      this.$router.push("/categories");
    },
  },
};
</script> 

<style scoped>
  .warn-error {
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
  }
</style>