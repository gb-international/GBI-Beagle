<!--************************************************
      Author:@Ajay 
      Edited by: @Manas
      ****************************************************-->
<!-- Edits: Added custom error to meta keyword field & image field, the data elements imageWarn & meta_keywordWarn were added -->

<!-- 
This template helps us to create a new Category it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
<section>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddCategory()"
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
              <p v-if="meta_keywordWarn" class="warn-error"> The meta keyword field is required.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="image">Please upload a Banner image !</label>
              <br />
              <input
                @change="changeDetailPhoto($event)"
                name="image"
                type="file"
                :class="{ 'is-invalid': form.errors.has('image') }"
              />
              <has-error :form="form" field="image"></has-error>
              <p v-if="imageWarn" class="warn-error"> Please upload an image.</p>

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

import FormButton from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";

export default {
  name: "NewCategory",
  components: {
    Form,
    "has-error": HasError,
    'form-buttons':FormButton,
    'form-layout':FormLayout,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      img_image: false,
      imageWarn: false,
      meta_keywordWarn: false,
      form: new Form({
        title: "",
        description: "",
        image: [],
        meta_title: "",
        meta_keyword: "",
      }),
      loading: false
    };
  },
  methods: {
    AddCategory() {
      if (!this.form.meta_keyword) {
        this.meta_keywordWarn = true
        return false
      } else{
        this.meta_keywordWarn = false
      }
      if (!this.img_image) {
        this.imageWarn = true
        return false
      }
      this.loading = true
      this.form
        .post("/api/categories")
        .then((response) => {
          this.form.reset();
          this.img_image = false;
          this.$swal.fire(
            "Added!",
            "Item Added successfully",
            "success"
          );
          this.loading = false
          this.$router.push('/categories');
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
        this.imageWarn = false;
      };
      reader.readAsDataURL(file);
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