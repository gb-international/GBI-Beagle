<!-- 
This template helps us to create a new Post it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddPost()"
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
                :customModules="customModulesForEditor" :editorOptions="editorSettings"
                id="editor" useCustomImageHandler @image-added="handleImageAdded"
                @image-removed="handleImageRemoved"
                v-model="form.description"
                :class="{ 'is-invalid': form.errors.has('description') }"
              ></vue-editor>
              <has-error :form="form" field="description"></has-error>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="form-group">
              <label for="description">Summery</label>
              <textarea
                row="3"
                type="text"
                class="form-control"
                v-model="form.summery"
                :class="{ 'is-invalid': form.errors.has('summery') }"
                placeholder="Enter summery"
              ></textarea>
              <has-error :form="form" field="summery"></has-error>
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
                placeholder="Enter meta title"
              />
              <has-error :form="form" field="meta_keyword"></has-error>
            </div>
          </div>


          <div class="col-sm-6">
            <div class="form-group">
              <label for="meta_keyword">Status</label>
              <select
                class="form-control select-field"
                v-model="form.status"
                :class="{ 'is-invalid': form.errors.has('meta_keyword') }"
              >
                <option disabled value="">Select Status</option>
                <option value="0">Draft</option>
                <option value="1">Publish</option>
              </select>
              <has-error :form="form" field="meta_keyword"></has-error>
            </div>
          </div>
          
          <div class="col-sm-6">
            <div class="form-group">
              <label for="categories">Category</label>

                <select class="form-control select-field" v-model="form.category_id">
                  <option disabled value="" hidden>Select Category</option>
                  <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.title }}</option>
              </select>

              <has-error :form="form" field="categories"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="tags">Tags</label>

              <multiselect
                v-model="form.tags"
                :options="tags"
                :multiple="true"
                :close-on-select="true"
                placeholder="Pick Tags"
                label="title"
                track-by="title"
              ></multiselect>

              <has-error :form="form" field="tags"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label class="label" for="input"
                >Please upload a Banner image !</label
              >
              <br />
              <input
                @change="changeDetailPhoto($event)"
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
</template>

<script>

import { Form, HasError } from "vform";
import { VueEditor, Quill } from "vue2-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";
import "vue-search-select/dist/VueSearchSelect.css";
import Multiselect from "vue-multiselect";

import FormButtons from '@/admin/components/buttons/FormButtons.vue';
import SubmitButton from '@/admin/components/buttons/SubmitButton.vue';
import FormLayout from '@/admin/components/layout/FormLayout.vue';

export default {
  name: "New",
  components: {
    Form,
    "has-error": HasError,
    "vue-editor": VueEditor,
    Multiselect,
    'form-buttons':FormButtons,
    'submit-button':SubmitButton,
    'form-layout':FormLayout,
  },
  data() {
    return {
      customModulesForEditor: [
        { alias: "imageDrop", module: ImageDrop },
        { alias: "imageResize", module: ImageResize }
      ],
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {}
        }
      },
      categories:[],
      tags:[],
      img_image:false,
      form: new Form({
        title: "",
        description: "",
        summery:"",
        image: [],
        meta_title: "",
        meta_keyword: "",
        status:"",
        category_id:"",
        tags:[],
      }),
    };
  },
  mounted(){
    this.getCategories();
    this.getTags();
  },
  methods: {
    getCategories() {
      axios.get("/api/categories").then((response) => {
        this.categories = response.data;
      });
    },
    
    getTags() {
      axios.get("/api/tags").then((response) => {
        this.tags = response.data;
      });
    },

    AddPost() {
      this.form
        .post("/api/posts")
        .then((response) => {
          // this.form.reset();
          this.$swal.fire(
            "Added!",
            "Item Added successfully",
            "success"
          );
        })
        .catch(() => {});
    },

    changeDetailPhoto(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.form.image.push({
          'name':file.name,
          'file':event.target.result
          });
          this.img_image = event.target.result;
      };
      reader.readAsDataURL(file);
    },

    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
        var formData = new FormData();
        formData.append("image", file);
        axios({
            url: "/api/images",
            method: "POST",
            data: formData
        }).then(result => {
          let url = result.data.url; // Get url from response
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch(err => {
          console.log(err);
        });
    },

    
    handleImageRemoved: function(file, Editor, cursorLocation, resetUploader) {
        var formData = new FormData();
        formData.append("image", file);
        axios({
            url: "/api/images/delete",
            method: "POST",
            data: formData
        }).then(result => {
            console.log(result);
          let url = result.data.url; // Get url from response
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch(err => {
          console.log(err);
        });
    },

  },
};
</script>

