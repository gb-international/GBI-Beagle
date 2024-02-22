<!-- 
This template helps us to edit events it takes the data from the form and sumbit with the help of the api
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
        @submit.prevent="UpdatePost()"
        :style="!loading ? '' : 'opacity: 0.5' "
      >
        <div class="row" v-if="form.title">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                :value="form.title"
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
                :customModules="customModulesForEditor"
                :editorOptions="editorSettings"
                id="editor"
                useCustomImageHandler
                @image-added="handleImageAdded"
                @image-removed="handleImageRemoved"
                v-model="form.description"
                :class="{ 'is-invalid': form.errors.has('description') }"
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
               <!-- <status-dd class="mb-2" 
                :itemList="status_list" 
                v-model="form.status"
              />
              
              <has-error :form="form" field="status"></has-error> -->
              <input
                type="text"
                readonly
                class="form-control"
                :value="form.status == 0 ? 'Draft' : 'Public'"
                placeholder="Current status"
              />
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="categories">Category</label>
              <dropdown-list class="mb-2" 
                :itemList="categories" 
                v-model="form.category_id"
              />

              <has-error :form="form" field="categories"></has-error>
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
                class="mt-2"
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
      </section>
    </template>
  </form-layout>
</template>

<script>
import { Form, HasError } from "vform";
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import "vue-search-select/dist/VueSearchSelect.css";
import Multiselect from "vue-multiselect";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownList from "@/admin/components/form/DropdownList.vue";
import StatusDropdown from "@/admin/components/form/StatusDropdown2.vue";
import TagsInput from '@voerro/vue-tagsinput';
import io from 'socket.io-client';

export default {
  name: "NewPost",
  components: {
    Form,
    "has-error": HasError,
    Multiselect,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-list": DropdownList,
    "status-dd": StatusDropdown,
    "tags-input": TagsInput,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      img_image: false,
      titleWarn: false,
      descriptionWarn: false,
      summeryWarn: false,
      meta_titleWarn: false,
      meta_keywordWarn: false,
      tagsWarn: false,
      clientTypeWarn: false,
      categories:[],
      tags:[],
      meta_key: [],
      status_list:[
        {name:"Draft",id:0},
        {name:"Public",id:1}
      ],
      form: new Form({
        title: "",
        description: "",
        summery: "",
        image: [],
        meta_title: "",
        meta_keyword: [],
        status: "",
        tags: [],
        category_id: "",
        client_type:"",
        user_id: window.userId
      }),
      loading: false,
      socket : io('localhost:3000')
    };
  },
  created() {},
  mounted() {
    this.getCategories();
    this.getTags();
    this.editPost();
    this.meta_key = this.form.tags;
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
    editPost() {
      axios.get(`/api/articles/${this.$route.params.id}/edit`).then((response) => {
        setTimeout(() => $("#example").DataTable(), 1000);
        this.form.fill(response.data);
        this.form.image = [];
        this.img_image = response.data.image;

         for(let i = 0;i< response.data.tags.length;i++){
          this.meta_key.push({
            value: response.data.tags[i].title,
            key: response.data.tags[i].id
          });
      }
      });
    },
    updateTags(){
      this.form.meta_keyword = []
      for(let i = 0;i<this.meta_key.length;i++){
          this.form.meta_keyword.push({
            title:this.meta_key[i].value,
            id:this.meta_key[i].key
          });
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

    UpdateCategory(v){ this.form.category_id = v.id },    
    updateStatus(v){ this.form.status = v.id },

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
    UpdatePost() {
      console.log('start')
      if (!this.form.title) {
        this.titleWarn = true;
        this.$toast.fire({
            icon: "error",
            title: "Title Required",
          });        
        return false;
      }
      console.log('title')
      if (!this.form.description) {
        this.descriptionWarn = true;
         this.$toast.fire({
            icon: "error",
            title: "Description Required",
          });
        return false;
      }
      console.log('description')
      if (!this.form.summery) {
        this.summeryWarn = true;
         this.$toast.fire({
            icon: "error",
            title: "Summary Required",
          });
        return false;
      }
      console.log('summery')
      if (!this.form.meta_title) {
        this.meta_titleWarn = true;
        this.$toast.fire({
            icon: "error",
            title: "Meta Title Required",
          });
        return false;
      }
       console.log('meta_title')
      if (this.form.meta_keyword.length < 1 ) {
        this.tagsWarn = true
        this.$toast.fire({
            icon: "error",
            title: "Meta Keywords Required",
          });
        return false;
      }
       console.log('meta_keyword')
      if (this.form.status === '') {
        this.statusWarn = true
        this.$toast.fire({
            icon: "error",
            title: "Status Required",
          });
        return false;
      }
      console.log('status')
      if (this.form.category === '') {
        this.categoryWarn = true
        this.$toast.fire({
            icon: "error",
            title: "Category Required",
          });
        return false;
      }
      console.log('category')
      if (this.form.client_type === '') {
        this.clientTypeWarn = true
        this.$toast.fire({
            icon: "error",
            title: "Client Type Required",
          });
        return false;
      }
      console.log('client_type')
      if (!this.img_image) {
        this.imageWarn = true
        this.$toast.fire({
            icon: "error",
            title: "Banner Image Required",
          });
        return false;
      }
      console.log('img_image')
      this.form.tags = this.form.meta_keyword
      this.loading = true
      if(this.titleWarn !== true && this.form.tags.length !== 0 ){
        //this.form.tags = this.form.meta_keyword
        this.form.user_id = window.userId
        this.form
        .put(`/api/articles/${this.$route.params.id}`)
        .then((response) => {
          this.$swal.fire(
            "Updated!",
            "Item Updated successfully",
            "success"
          );
          //this.emitSock()
          this.loading = false
        })
        .catch(() => {});
      }
    },
    emitSock(){
          //console.log('Emit')
          this.socket.emit('sendToServer', 'NA');
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
      this.$router.push("/articles");
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