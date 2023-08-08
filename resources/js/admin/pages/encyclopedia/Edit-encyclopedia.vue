<!--************************************************
      Author:@Ajay 
      Edited by: @Manas
      ****************************************************-->
<!-- Edits: Added Region field (static), Country Field (dynamic). Created the functions- UpdateRegion(), UpdateCountry(), countryList(), countryCheck(). Made edits to stateList(), EncyclopediaList() for segregation based on selected country. -->

<!-- 

This template helps us to create a new encyclopedia it takes the data from the form and sumbit with the help of the api
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
        v-if="allCreated"
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="addItem()"
        :style="!loading ? '' : 'opacity: 0.5' "
      >
        <div class="row" v-if="form.state_name">

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

          <div class="col-sm-12">
            <div class="form-group">
              <label for="description">Meta Description</label>
              <textarea
                row="3"
                type="text"
                class="form-control"
                v-model="form.meta_description"
                @change="changeField('meta_description', $event.target.value)"
                :class="{ 'is-invalid': form.errors.has('meta_description') }"
                placeholder="Enter Meta Description"
              ></textarea>
              <has-error :form="form" field="meta_description"></has-error>
              <p v-if="summeryWarn" class="warn-error"> Please input meta description.</p>
            </div>
          </div>

          <div class="col-sm-3">
             <div class="form-group">
              <label for="state_name">Region Type</label>

              <status-dd class="mb-2"
                v-model="form.region_type"
                :itemList="region_type_list" 
                @input="UpdateRegion" 
              />
              <has-error :form="form" field="region_type"></has-error>
            </div>

            <div class="form-group">
              <label for="state_name">Country</label>

              <dropdown-list class="mb-2"
                :itemList="country_list"
                v-model="form.country" 
                @input="UpdateCountry" 
              />
              <has-error :form="form" field="country"></has-error>
            </div>

          </div>
          <div class="col-sm-3">
            <div class="form-group">
              <label for="state_name">State</label>

              <dropdown-list class="mb-2" 
                :itemList="state_list"
                v-model="form.state_name"
                @input="UpdateState" 
              />

              <has-error :form="form" field="state_name"></has-error>
            </div>

            <div class="form-group">
              <label for="slug">Slug</label>
              <input
                type="text"
                class="form-control"
                v-model="form.slug"
                :class="{ 'is-invalid': form.errors.has('slug') }"
                placeholder="Enter Map Link"
                rows="6"
                readonly=""
              />
              <has-error :form="form" field="slug"></has-error>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="map_link">Map Link</label>
              <textarea
                class="form-control"
                rows="6"
                v-model="form.map_link"
                :class="{ 'is-invalid': form.errors.has('map_link') }"
                placeholder="Enter Map Link"
              ></textarea>
              <has-error :form="form" field="map_link"></has-error>
            </div>
          </div>
          <div class="col-sm-4"></div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
              <label for="descriptionId">Description</label>

              <vue-editor
                v-model="form.description"
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
              <label class="label" for="thumbnail"
                >Please upload thumbnail image !</label
              >
              <br />
              <input
                @change="changeImage($event, 'thumbnail')"
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
              <label class="label" for="input"
                >Please upload a Banner image !</label
              >
              <br />
              <input
                @change="changeImage($event, 'banner')"
                name="banner_image"
                type="file"
                :class="{ 'is-invalid': form.errors.has('banner_image') }"
              />

              <img :src="images.banner_image" alt class="banner_image width-140" />
              <has-error :form="form" field="banner_image"></has-error>
            </div>
          </div>
        </div>

        <hr />

        <div class="row img-card-delete-icon" v-if="list_images">
          <div
            class="col-sm-4 position-relative"
            v-for="img in list_images"
            :key="img.id"
          >
            <div class="card">
              <div class="card-body">
                <img :src="img.image" class="w-100" />
              </div>
            </div>
            <span
              class="badge badge-danger position-absolute cursor-pointer"
              @click="deleteImage(img.id)"
              ><i class="far fa-trash-alt" aria-hidden="true"></i
            ></span>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="images">Select Multiple Images</label>
              <input
                type="file"
                multiple="multiple"
                class="form-control w-100"
                ref="attachments"
                @change="changePhotos"
              />
            </div>
          </div>
        </div>

        <hr />
        <div class="row">
          <div class="col-sm-6">
            <label for="pdfs">Upload Itinerary Pdf ( Multiple )</label>
            <input
              type="file"
              accept=".pdf"
              multiple="multiple"
              class="form-control"
              @change="uploadFieldChange"
            />
          </div>
          <div class="col-sm-6">
            <label for="pdf_show">Itinerary PDFs</label>
            <div class="row">
              <div class="col-sm-12" v-for="pdf in pdf_list" :key="pdf.id">
                <div class="row pd-5 mb-20">
                  <div class="col-sm-2 pdf_show">
                    <i class="fas fa-file-pdf"></i>
                  </div>
                  <div class="col-sm-10">
                    <p>
                      {{ pdf.name }}
                      <span
                        class="badge badge-danger position-absolute cursor-pointer ml-3"
                        title="Delete Item"
                        @click="deletePdf(pdf.id)"
                        ><i class="far fa-trash-alt" aria-hidden="true"></i
                      ></span>
                    </p>
                  </div>
                </div>
              </div>
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
import { ModelSelect } from "vue-search-select";
import { Form, HasError } from "vform";
import { VueEditor, Quill } from "vue2-editor";

import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import SubmitButton from "@/admin/components/buttons/SubmitButton.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownList from "@/admin/components/form/DropdownList.vue";
import StatusDropdown from "@/admin/components/form/StatusDropdown2.vue";
import TagsInput from '@voerro/vue-tagsinput';

export default {
  name: "EditEncyclopedia",
  components: {
    ModelSelect,
    Form,
    VueEditor,
    "has-erro": HasError,
    "form-buttons": FormButtons,
    "submit-button": SubmitButton,
    "form-layout": FormLayout,
    "dropdown-list": DropdownList,
    "status-dd": StatusDropdown,
    "tags-input": TagsInput,
  },
  data() {
    return {
      region_type_list: [
        {name:"National",id:"National"},
        {name:"International",id:"International"}
      ],
      allCreated: false,
      state_list: [],
      country_list: [],
      list_data: [],
      pdf_list: [],
      images: [],
      list_images: [],
      tags:[],
      meta_key: [],
      titleWarn: false,
      descriptionWarn: false,
      summeryWarn: false,
      meta_titleWarn: false,
      meta_keywordWarn: false,
      tagsWarn: false,
      clientTypeWarn: false,
      form: new Form({
        state_name: "",
        region_type: "",
        country: "",
        map_link: "",
        slug: "",
        description: "",
        thumbnail: [],
        banner_image: [],
        images: [],
        files: [],
        meta_description: "",
        meta_title: "",
        meta_keyword: "",
        tags: [],
      }),
      loading: false
    };
  },
  created() {
    this.EncyclopediaList();
    this.getTags();
    this.meta_key = this.form.tags;
  },

  methods: {
    changeField (field, input) {

      if(field === 'meta_description'){
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
    countryList(val) {
      axios.get("/api/country").then((res) => {
        this.country_list = []
        if (res.data) {
          //this.options = [];
          for (let i = 0; i < res.data.length; i++) {
            if(res.data[i].id === 2 && val === 'National' ){
                this.country_list.push({
                name: res.data[i].name,
                id: res.data[i].name,
              });
            }
            else if(res.data[i].id !== 2 && val === 'International' ) {
              this.country_list.push({
                name: res.data[i].name,
                id: res.data[i].name,
              });
            }
          }
        }
      });
    },
    stateList(val) {
      axios.get("/api/state").then((res) => {
        this.state_list = []
        if (res.data) {
          this.options = [];
          for (let i = 0; i < res.data.length; i++) {
            if(res.data[i].country_id == val ){
                this.state_list.push({
                name: res.data[i].name,
                id: res.data[i].name,
              });
            }
          }
        }
      });
    },
    UpdateState(v){this.slugCreate(v);},
    UpdateRegion(v){ this.countryList(v) },
    UpdateCountry(v){ this.countryCheck(v) },

    EncyclopediaList() {
      var api = `/api/encyclopedias/${this.$route.params.id}/edit`;
      axios.get(api).then((response) => {
        this.form.fill(response.data);
        if(response.data.country === 'India'){
          this.form.region_type = 'National'
        } else {
          this.form.region_type = 'International'
        }
        //console.log(this.form);
        this.countryCheck(this.form.country);
        this.countryList(this.form.region_type);
        this.pdf_list = response.data.itinerarypdfs;
        this.images["thumbnail"] = response.data.thumbnail;
        this.images["banner_image"] = response.data.banner_image;

        this.list_images = response.data.images;

        this.form.thumbnail = [];
        this.form.banner_image = [];
        this.form.images = [];
        this.form.files = [];
        this.form.region_type = this.form.region_type.trim();
        this.form.state_name = this.form.state_name.trim();
        this.form.country = this.form.country.trim();

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

    countryCheck(val) {
      axios.get("/api/country").then((res) => {
        if (res.data) {
          for (let i = 0; i < res.data.length; i++) {
            if(res.data[i].name == val){
              this.stateList(res.data[i].id)
            }
          }
        }
      });
      this.allCreated = true;
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

    // This function will be called every time you add a file
    uploadFieldChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      for (var i = files.length - 1; i >= 0; i--) {
        this.createImage(e.target.files[i].name, files[i]);
      }
    },
    createImage(name, file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.form.files.push({ filename: name, content: e.target.result });
      };
      reader.readAsDataURL(file);
    },

    changeImage(event, model) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        switch (model) {
          case "thumbnail":
            this.form.thumbnail.push({
              name: file.name,
              file: event.target.result,
            });
            this.images["thumbnail"] = event.target.result;
            break;
          case "banner":
            this.form.banner_image.push({
              name: file.name,
              file: event.target.result,
            });
            this.images.banner_image = event.target.result;
            break;
          default:
            console.log("please select valid image");
        }
      };
      reader.readAsDataURL(file);
    },

    changePhotos(event) {
      for (var i = 0; i < event.target.files.length; i++) {
        let file = event.target.files[i];
        let reader = new FileReader();
        reader.onload = (event) => {
          this.form.images.push({
            name: file.name,
            file: event.target.result,
          });
        };
        reader.readAsDataURL(file);
      }
    },

    slugCreate(value) {
      var slug = "";
      if(value){
        value = value.toLowerCase();
        // Trim the last whitespace
        slug = value.replace(/\s*$/g, "");
        // Change whitespace to "-"
        this.form.slug = slug.replace(/\s+/g, "-");
      }
    },

    deleteImage(id) {
      var data = { id: id };
      axios.post("/api/encyclopedia-img", data).then((response) => {
        this.EncyclopediaList();
      });
    },
    
    deletePdf(id) {
      var data = { id: id };
      axios.post("/api/encyclopedia-pdf", data).then((response) => {
        this.EncyclopediaList();
      });
    },


    addItem() {
      if (this.form.meta_keyword.length < 1 ) {
        this.meta_keywordWarn = true
        return false;
      }
      // Submit form
      this.loading = true
      this.form.tags = this.form.meta_keyword
      var api = `/api/encyclopedias/${this.$route.params.id}`;
      this.form
        .put(api)
        .then((response) => {
          this.EncyclopediaList();
          this.$toast.fire({
            icon: "success",
            title: "Encyclopedia Updated successfully",
          });
        this.loading = false
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
