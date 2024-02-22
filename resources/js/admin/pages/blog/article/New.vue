
<!--************************************************
      Author:@Ajay 
      Edited by: @Manas
      ****************************************************-->
<!-- Edits: Added custom error texts, edits were made to AddPost() funtion for custom error on submission. -->

<!-- 
This template helps us to create a new Post it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <form-layout>
    <template #formdata>
    <section class="formSection">
      <div class="LoaderDiv" v-show="loading">
        <img class="loaderLogo" src="/loader/logo_gif.gif">
        <p class="loadText">Loading..</p>
      </div>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="AddPost()"
        :style="!loading ? '' : 'opacity: 0.5' "
        >
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                v-model="form.title"
                @input="changeField('title', $event.target.value)"
                :class="{ 'is-invalid': form.errors.has('title') }"
                placeholder="Enter title"
              />
              <has-error :form="form" field="title"></has-error>
              <p v-if="titleWarn" class="warn-error"> Title can't be empty.</p>
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
              <p v-if="descriptionWarn && !form.description" class="warn-error"> Please input description.</p>
            </div>
          </div>

          <div class="col-sm-12">
            <div class="form-group">
              <label for="description">Summary</label>
              <textarea
                row="3"
                type="text"
                class="form-control"
                v-model="form.summery"
                @change="changeField('summery', $event.target.value)"
                :class="{ 'is-invalid': form.errors.has('summery') }"
                placeholder="Enter summary"
              ></textarea>
              <has-error :form="form" field="summery"></has-error>
              <p v-if="summeryWarn" class="warn-error"> Please input summary.</p>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="meta_title">Meta Title</label>
              <input
                type="text"
                class="form-control"
                v-model="form.meta_title"
                @change="changeField('meta_title', $event.target.value)"
                :class="{ 'is-invalid': form.errors.has('meta_title') }"
                placeholder="Enter meta title"
              />
              <has-error :form="form" field="meta_title"></has-error>
              <p v-if="meta_titleWarn" class="warn-error"> Please input Meta Title.</p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="meta_keyword">Meta Keywords</label>
              <!-- <input
                type="text"
                class="form-control"
                v-model="form.meta_keyword"
                :class="{ 'is-invalid': form.errors.has('meta_keyword') }"
                placeholder="Enter meta title"
              />
              <has-error :form="form" field="meta_keyword"></has-error> 
               <multiselect
                v-model="form.meta_keyword"
                :options="tags"
                :multiple="true"
                :close-on-select="true"
                placeholder="Choose keywords"
                @input="checkKeyword(data)"
                label="title"
                track-by="title"
              ></multiselect> -->

                <tags-input element-id="tags"
                  v-model="meta_key"
                  :existing-tags="tags"
                  :typeahead="true"
                  @tags-updated="updateTags"
                  >
                </tags-input>

              <has-error :form="form" field="tags"></has-error>
              <p v-if="tagsWarn && meta_key.length < 1 " class="warn-error">Please choose keywords.</p>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="status">Status</label>
              <status-dd class="mb-2" 
                :itemList="status_list"
                @update:option="updateStatus" 
              />
              <has-error :form="form" field="status"></has-error>
              <p v-if="statusWarn && form.status === '' " class="warn-error">Please choose a status.</p>
            </div>
          </div>
          
          <div class="col-sm-6">
            <div class="form-group">
              <label for="categories">Category</label>
              <multiselect
                v-model="form.category"
                :options="categories"
                :close-on-select="true"
                placeholder="Choose category"
                label="name"
                track-by="name"
              ></multiselect>
              <!-- <dropdown-filter class="mb-2" 
                :itemList="categories" 
                @update:option="UpdateCategory" 
              /> -->
              <has-error :form="form" field="categories"></has-error>
              <p v-if="categoryWarn && !form.category " class="warn-error"> Please choose a category.</p>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="client_type">Client Type</label>
              <select class="form-control" v-model="form.client_type">
                <option value="eduInstitute">Educational Institute</option>
                <option value="corporate">Corporate</option>
                <option value="general">General</option>
              </select>
              <has-error :form="form" field="client_type"></has-error>
              <p v-if="clientTypeWarn && form.client_type === '' " class="warn-error"> Please choose a client type.</p>
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
      </section>
    </template>
</form-layout>
</template>

<script>

import { Form, HasError } from "vform";
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import "vue-search-select/dist/VueSearchSelect.css";
import Multiselect from "vue-multiselect";
import FormButtons from '@/admin/components/buttons/FormButtons.vue';
import SubmitButton from '@/admin/components/buttons/SubmitButton.vue';
import FormLayout from '@/admin/components/layout/FormLayout.vue';
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";
import StatusDropdown from "@/admin/components/form/StatusDropdown.vue";
import TagsInput from '@voerro/vue-tagsinput';
//import io from 'socket.io-client';

export default {
  name: "NewPost",
  components: {
    Form,
    "has-error": HasError,
     Multiselect,
    'form-buttons':FormButtons,
    'submit-button':SubmitButton,
    'form-layout':FormLayout,
    "dropdown-filter": DropdownFilter,
    "status-dd": StatusDropdown,
    "tags-input": TagsInput,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      categories:[],
      tags:[],
      meta_key: [],
      img_image:false,
      imageWarn:false,
      statusWarn: false,
      categoryWarn: false,
      tagsWarn: false,
      clientTypeWarn: false,

      titleWarn: false,
      descriptionWarn: false,
      summeryWarn: false,
      meta_titleWarn: false,
      meta_keywordWarn: false,

      status_list:[
        {name:"Draft",id:0},
        //{name:"Public",id:1}
      ],
      form: new Form({
        title: "",
        description: "",
        summery:"",
        image: [],
        meta_title: "",
        meta_keyword: [],
        status:"",
        category_id:"",
        category:"",
        client_type:"",
        tags:[],
        user_id: window.userId
      }),
      loading: false,
      //socket : io('localhost:3000')
    };
  },
  mounted(){
    this.getCategories();
    this.getTags();
  },
  methods: {

    changeField (field, input) {
      if(field === 'title'){
          if(input === ''){
            this.titleWarn = true;
          } else {
            this.titleWarn = false;
            this.form.title = input
          }
          
      }
      if(field === 'summery'){
          if(input === ''){
            this.summeryWarn = true;
          } else {
            this.summeryWarn = false;
          }
          
      }
      if(field === 'meta_title'){
          if(input === ''){
            this.meta_titleWarn = true;
          } else {
            this.meta_titleWarn = false;
          }
      }
      if(field === 'meta_keyword'){
          if(input === ''){
            this.meta_keywordWarn = true;
          } else {
            this.meta_keywordWarn = false;
          }
          
      }
    },
    getCategories() {
      axios.get("/api/categories").then((res) => {
        if (res) {
          for(let i = 0;i<res.data.length;i++){
            this.categories.push({
              name:res.data[i].title,
              id:res.data[i].id
            });
          }
        }
      });
    },

    //UpdateCategory(v){ this.form.category_id = v.id },    
    updateStatus(v){ this.form.status = v.id},

    updateTags(){
      this.form.meta_keyword = []
      for(let i = 0;i<this.meta_key.length;i++){
          this.form.meta_keyword.push({
            title:this.meta_key[i].value,
            id:this.meta_key[i].key
          });
      }
    },
    
    getTags() {
      axios.get("/api/tags").then((res) => {
        //this.tags = response.data;
        if (res) {
          for(let i = 0;i<res.data.length;i++){
            this.tags.push({
              value:res.data[i].title,
              key:res.data[i].id
            });
          }
          //console.log(this.form.tags)
        }
      });
    },

    /*emitSock(){
          //console.log('Emit')
          this.socket.emit('sendToServer', 'NA');
    },*/

    AddPost() {
      if (!this.form.title) {
        this.titleWarn = true;
        this.$toast.fire({
            icon: "error",
            title: "Title Required",
          });        
        return false;
      }
      if (!this.form.description) {
        this.descriptionWarn = true;
         this.$toast.fire({
            icon: "error",
            title: "Description Required",
          });
        return false;
      }
      if (!this.form.summery) {
         this.summeryWarn = true;
         this.$toast.fire({
            icon: "error",
            title: "Summary Required",
          });
        return false;
      }
      if (!this.form.meta_title) {
        this.meta_titleWarn = true;
        this.$toast.fire({
            icon: "error",
            title: "Meta Title Required",
          });
        return false;
      }
      if (this.form.meta_keyword.length < 1 ) {
        this.tagsWarn = true
        this.$toast.fire({
            icon: "error",
            title: "Meta Keywords Required",
          });
        return false;
      }
      if (this.form.status === '') {
        this.statusWarn = true
        this.$toast.fire({
            icon: "error",
            title: "Status Required",
          });
        return false;
      }
      if (this.form.category === '') {
        this.categoryWarn = true
        this.$toast.fire({
            icon: "error",
            title: "Category Required",
          });
        return false;
      }
      if (this.form.client_type === '') {
        this.clientTypeWarn = true
        this.$toast.fire({
            icon: "error",
            title: "Client Type Required",
          });
        return false;
      }
      if (!this.img_image) {
        this.imageWarn = true
        this.$toast.fire({
            icon: "error",
            title: "Banner Image Required",
          });
        return false;
      }
      this.form.tags = this.form.meta_keyword
      this.loading = true
      //console.log(this.form.tags)
      this.form.category_id = this.form.category.id
      this.form.user_id = window.userId
      this.form
        .post("/api/articles")
        .then((re) => {
          this.$swal.fire(
            "Added!",
            "Post Added successfully",
            "success"
          );
          this.loading = false
          //this.emitSock();
          this.$router.push('/articles');
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


