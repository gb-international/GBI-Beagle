
<!--************************************************
      Author:@Rahul Rawat 
      ****************************************************-->
<!-- 
This template helps us to create a new Fact it takes the data from the form and sumbit with the help of the api
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
      <form role="form" @submit.prevent="AddFact()"
        :style="!loading ? '' : 'opacity: 0.5' "
        >
        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                @input="changeField('name', $event.target.value)"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter name"
              />
              <has-error :form="form" field="name"></has-error>
              <p v-if="nameWarn" class="warn-error">{{nameWarn }}</p>
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
              <label for="country">Country</label>
              <multiselect
                v-model="form.country"
                :options="country"
                :close-on-select="true"
                placeholder="Choose country"
                label="name"
                track-by="name"
              ></multiselect>

              <has-error :form="form" field="country"></has-error>
              <p v-if="countryWarn && !form.country " class="warn-error"> Please choose a country.</p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="state">State</label>
              <multiselect
                v-model="form.state"
                :options="state"
                :close-on-select="true"
                placeholder="Choose state"
                label="name"
                track-by="name"
              ></multiselect>

              <has-error :form="form" field="state"></has-error>
              <p v-if="stateWarn && !form.state " class="warn-error"> Please choose a state.</p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="state">City</label>
              <multiselect
                v-model="form.city"
                :options="city"
                :close-on-select="true"
                placeholder="Choose city"
                label="name"
                track-by="name"
              ></multiselect>

              <has-error :form="form" field="city"></has-error>
              <p v-if="cityWarn && !form.city " class="warn-error"> Please choose a city.</p>
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
      countries:[],
      tags:[],
      meta_key: [],
      statusWarn: false,
      countryWarn: false,
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
            title: "Blog Status Required",
          });
        return false;
      }
      if (this.form.category === '') {
        this.categoryWarn = true
        this.$toast.fire({
            icon: "error",
            title: "Blog Category Required",
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

      this.form.tags = this.form.meta_keyword
      this.loading = true
      //console.log(this.form.tags)
      this.form.category_id = this.form.category.id
      this.form.user_id = window.userId
      this.form
        .post("/api/posts")
        .then((re) => {
          this.$swal.fire(
            "Added!",
            "Post Added successfully",
            "success"
          );
          this.loading = false
          //this.emitSock();
          this.$router.push('/posts');
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


