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
              <label for="title">Room Category Name</label>
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
      }),
      loading: false
    };
  },
  methods: {
    AddCategory() {
      this.loading = true
      this.form
        .post("/api/room-categories")
        .then((response) => {
          this.form.reset();
          this.img_image = false;
          this.$swal.fire(
            "Added!",
            "Item Added successfully",
            "success"
          );
          this.loading = false
          this.$router.push('/room-categories');
        })
        .catch(() => {});
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