<!-- 

This template helps us to create a new encyclopedia it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <form role="form" enctype="multipart/form-data" @submit.prevent="addData()">
        
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="state_name">State</label>
                <select class="form-control select-field" v-model="form.state_name" @change="slugCreate($event)">
                  <option value="" disabled hidden>Select State</option>
                  <option v-for="state in state_list" :value="state.name" :key="state.id">{{ state.name }}</option>
                </select>
                  <has-error :form="form" field="state_name"></has-error>
              </div>

              <div class="form-group">
                <label for="slug">Slug</label>
                <input type="text" class="form-control" v-model="form.slug" :class="{ 'is-invalid': form.errors.has('slug') }" placeholder="Enter Map Link" rows="6" readonly="">
                  <has-error :form="form" field="slug"></has-error>
              </div>

              
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="map_link">Map Link</label>
                <textarea class="form-control" v-model="form.map_link" :class="{ 'is-invalid': form.errors.has('map_link') }" placeholder="Enter Map Link" rows="6"></textarea>
                  <has-error :form="form" field="map_link"></has-error>
              </div>
            </div>
            <div class="col-sm-4"></div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                  <label for="descriptionId">Description</label>

                  <vue-editor v-model="form.description" 
                  :class="{ 'is-invalid': form.errors.has('description') }"
                  ></vue-editor>

                  <has-error :form="form" field="description"></has-error>
              </div>
            </div>
          </div>
          <!-- Adding photo for the itinerary -->
          <div class="row">
          <div class="col-sm-6">
            <div class="form-group itinerary_image">
              <label class="label" for="thumbnail">Please upload thumbnail image !</label>
              <br />
              <input
                @change="changeImage($event,'thumbnail')"
                type="file"
                :class="{ 'is-invalid': form.errors.has('thumbnail') }"
                accept="jpeg, jpg, png, gif"
                class="select_image"
              />
              <img :src="images.thumbnail" alt width="80" height="80" />
              <has-error :form="form" field="thumbnail"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label class="label" for="input">Please upload a Banner image !</label>
              <br />
              <input
                @change="changeImage($event,'banner')"
                name="banner_image"
                type="file"
                :class="{ 'is-invalid': form.errors.has('banner_image') }"
              />

              <img :src="images.banner_image" alt class="banner_image" />
              <has-error :form="form" field="banner_image"></has-error>
            </div>
          </div>
        </div>



          <hr>  

          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="images">Select Multiple Images</label>
                <input type="file"  multiple="multiple" class="form-control w-100"  ref="attachments" @change="changePhotos">
              </div>
            </div>
          </div>



          <hr>
          <div class="row">
            <div class="col-sm-6">
              <label for="pdfs">Upload Itinerary Pdf ( Multiple )</label>
              <input type="file" accept=".pdf" multiple="multiple" class="form-control" @change="uploadFieldChange">
            </div>
          </div>


          <form-buttons />

          
      </form>
    </template>
  </form-layout>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";

import { ModelSelect } from 'vue-search-select'
import { Form, HasError } from 'vform'

import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
export default {
  name: "New",
  components: {
    ModelSelect,
    VueEditor,
    Form,
    'has-error':HasError,
    "form-buttons": FormButtons,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
  },
  data(){
    return {
      state_list:[],
      attachments:[],
      images:[],
      form: new Form({
        state_name: '',
        map_link: '',
        slug:'',
        description: '',
        thumbnail:[],
        banner_image:[],
        images:[],
        files:[],
      })
    }
  },
  created(){
    this.cityList();
  },

  methods:{
    cityList(){
      axios.get('/api/state').then(response => {
        this.state_list = response.data;
      });
    },

     // This function will be called every time you add a file
    uploadFieldChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        for (var i = files.length - 1; i >= 0; i--) {
            this.createImage(event.target.files[i].name,files[i]);
        }
    },

    createImage(name,file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;
        reader.onload = (e) => {
          vm.form.files.push({filename:name,content:e.target.result});
        };
        reader.readAsDataURL(file);
      },

    addData()
    {
      this.form.post('/api/encyclopedias')
      .then((response)=>{
          this.$toast.fire({
              icon: 'success',
              title: 'Encyclopedia Added successfully'
          })
        }).catch(()=>{})
    },

    slugCreate(event){
      var slug = "";
      var value = event.target.value.toLowerCase();
      // Trim the last whitespace
      slug = value.replace(/\s*$/g, '');
      // Change whitespace to "-"
      this.form.slug = slug.replace(/\s+/g, '-');
    },

    changeImage(event, model) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        switch (model) {
          case "thumbnail":
            this.form.thumbnail.push({
              'name' : file.name,
              'file' : event.target.result,
              });
              this.images['thumbnail'] = event.target.result;
            break;
          case "banner":
            this.form.banner_image.push({
              'name' : file.name,
              'file' : event.target.result,
              });
              this.images.banner_image = event.target.result;
            break;
            default:
              console.log('please select valid image');
        }
      };
      reader.readAsDataURL(file);
    },

    changePhotos(event) {
      for(var i=0;i<event.target.files.length;i++){
        let file = event.target.files[i];
        let reader = new FileReader();
        reader.onload = event => {
          this.form.images.push({
            'name':file.name,
            'file':event.target.result
            });
        };
        reader.readAsDataURL(file);
      }
    },


  }
}
</script>