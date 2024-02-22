<!-- Edit itinerary template -->
<template>
  <form-layout>
    <template #formdata>
      <section class="formSection">
      <div class="LoaderDiv" v-show="loading">
        <img class="loaderLogo" src="/loader/logo_gif.gif">
        <p class="loadText">Loading..</p>
      </div>
      <div>
        <form
          role="form"
          enctype="multipart/form-data"
          @submit.prevent="updateItinerary()"
          :style="!loading ? '' : 'opacity: 0.5' "
        >
          <div class="row mb-30" v-if="form.title">

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

            <div class="col-sm-4">
              <div class="form-group">
                <label for="sourceId">Source</label>
                
                <dropdown-list class="mb-2" 
                  :itemList="cities" 
                  v-model.trim="form.source"
                />
                
                <has-error :form="form" field="source"></has-error>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                <label for="destinationId">Destination</label>
                
                <dropdown-list class="mb-2" 
                  :itemList="cities" 
                  v-model="form.destination"
                />

                <has-error :form="form" field="destination"></has-error>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="row">

              <div class="col-sm-2">
                <label></label>
                <button
                  type="button"
                  class="btn btn_plus text-white mt-35"
                  @click="removeRow()"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              
              <div class="col-sm-5 pl-2">
                <div class="form-group">
                  <label for="noofdaysId">Number Of Days</label>
                  <input
                    type="text"
                    readonly="readonly"
                    class="form-control text-center"
                    v-model="form.noofdays"
                    :class="{ 'is-invalid': form.errors.has('noofdays') }"
                    placeholder="Enter Number Of Days"
                    name="noofdays"
                    min="1"
                  />
                  <has-error :form="form" field="noofdays"></has-error>
                </div>
              </div>

              <div class="col-sm-2">
                <label></label>
                <button
                  type="button"
                  class="btn btn_plus text-white mt-35"
                  @click="addRow()"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            </div>
          </div>
          <div class="row mb-30">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="tourtypeId">Tour Type</label>
                <div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="NationalId"
                      value="National"
                      name="tourtype"
                      v-model="form.tourtype"
                    />
                    <label class="custom-control-label" for="NationalId"
                      >National</label
                    >
                  </div>

                  <!-- Default inline 2-->
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      value="International"
                      id="InternationalId"
                      name="tourtype"
                      v-model="form.tourtype"
                    />
                    <label class="custom-control-label" for="InternationalId"
                      >International</label
                    >
                  </div>
                </div>

                <div class="error" v-if="form.errors.has('tourtype')">
                  {{ form.errors.get("tourtype") }}
                </div>
              </div>
            </div>

            <div class="col-sm-5">
              <div class="form-group aligen_top_input">
                <label for="hotel_type">Hotel Type</label>
                <br />

                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="nohotelRadio"
                    value="0"
                    name="hotel_type"
                    v-model="form.hotel_type"
                    :class="{ 'is-invalid': form.errors.has('hotel_type') }"
                  />
                  <label class="custom-control-label" for="nohotelRadio"
                    >No Hotel</label
                  >
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="hotelRadio"
                    value="3"
                    name="hotel_type"
                    v-model="form.hotel_type"
                    :class="{ 'is-invalid': form.errors.has('hotel_type') }"
                  />
                  <label class="custom-control-label" for="hotelRadio"
                    >3 Star</label
                  >
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="hotelRadio1"
                    name="hotel_type"
                    v-model="form.hotel_type"
                    :class="{ 'is-invalid': form.errors.has('hotel_type') }"
                    value="4"
                  />
                  <label class="custom-control-label" for="hotelRadio1"
                    >4 Star</label
                  >
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="hotelRadio2"
                    name="hotel_type"
                    v-model="form.hotel_type"
                    :class="{ 'is-invalid': form.errors.has('hotel_type') }"
                    value="5"
                  />
                  <label class="custom-control-label" for="hotelRadio2"
                    >5 Star</label
                  >
                </div>
                <has-error :form="form" field="hotel_type"></has-error>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
                <label for="mode_of_transport">Mode of Transport</label>
                <br />
                <div class="custom-control custom-checkbox custom-control-inline">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="transport"
                    v-model="form.flight"
                    true-value="1"
                    false-value="0"
                  />
                  <label class="custom-control-label" for="transport"
                    >Flight</label
                  >
                </div>

                <div class="custom-control custom-checkbox custom-control-inline">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="transport1"
                    v-model="form.bus"
                    true-value="1"
                    false-value="0"
                  />
                  <label class="custom-control-label" for="transport1">Bus/Car</label>
                </div>

                <div class="custom-control custom-checkbox custom-control-inline">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="transport2"
                    v-model="form.train"
                    true-value="1"
                    false-value="0"
                  />
                  <label class="custom-control-label" for="transport2"
                    >Train</label
                  >
                </div>
                <div class="error" v-if="form.errors.has('transport')">
                  <lable class="danger text-danger">{{
                    form.errors.get("transport")
                  }}</lable>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="category">Category</label>
                <br />

                <multiselect
                  v-model="form.tourtypes"
                  :options="tour_type_list"
                  :multiple="true"
                  :close-on-select="true"
                  :show-labels="false"
                  placeholder="Pick categories"
                  label="name"
                  track-by="name"
                ></multiselect>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for="client_type">Client Type</label>
                <select class="form-control customSelect" v-model="form.client_type">
                  <option value="eduInstitute">Educational Institute</option>
                  <option value="corporate">Corporate</option>
                  <option value="general">General</option>
                </select>
                <has-error :form="form" field="client_type"></has-error>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for="season">Season</label>
                <br />

                <multiselect
                  v-model="form.seasons"
                  :options="season_list"
                  :multiple="true"
                  :close-on-select="true"
                  :show-labels="false"
                  placeholder="Pick seasons"
                  label="name"
                  track-by="name"
                ></multiselect>
              </div>
            </div>
            
          </div>

          <div class="row mb-30">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="title">Itinerary Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Itinerary Name"
                  name="title"
                  @change="changeField('title', $event.target.value)"
                  v-model="form.title"
                  :class="{ 'is-invalid': form.errors.has('title') }"
                />
                <has-error :form="form" field="title"></has-error>
                <p v-if="titleWarn" class="warn-error">Title can't be empty.</p>
                <p v-if="bigTitleWarn" class="warn-error">Title can't exceed 150 characters.</p>
              </div>
            </div>

            <div class="col-sm-4">
            <div class="form-group">
              <label for="priceId">Package Price/Person</label>
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Enter Price"
                name="price"
                v-model="form.price"
                :class="{ 'is-invalid': form.errors.has('price') }"
              />
              <has-error :form="form" field="price"></has-error>
            </div>
          </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for="tourtypeId">Food</label>
                <div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="food_yes"
                      value="1"
                      name="food"
                      v-model="form.food"
                    />
                    <label class="custom-control-label" for="food_yes">Yes</label>
                  </div>

                  <!-- Default inline 2-->
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      value="0"
                      id="food_no"
                      name="food"
                      v-model="form.food"
                    />
                    <label class="custom-control-label" for="food_no">No</label>
                  </div>
                </div>

                <div class="error" v-if="form.errors.has('food')">
                  {{ form.errors.get("food") }}
                </div>
              </div>
            </div>
          </div>
          <div class="form-group mb-30">
            <label for="descriptionId">Description</label>

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
          </div>
          <div class="row mb-30">
            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                     <label class="label" for="input"
                      >Thumbnail image</label>
                    <br />
                    <input
                      @change="changePhoto($event)"
                      name="photo"
                      type="file"
                      class="overflow-hidden"
                      :class="{ 'is-invalid': form.errors.has('photo') }"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <img v-if="photo != ''" :src="photo" alt width="80" height="80" />
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <label class="label" for="input"
              >Please upload the Banner images in kb, total size of the upload shouldn't exceed 2mb.</label>
              <br />
              <div class="row">
                  <div v-for="(img, index) in img_images" :key="index" class="mr-2 mb-2 shadow smallImages">
                    <img :src="img" alt class="smallImages"/>
                    <i class="fas fa-trash-alt delImgBtn" @click="delImg(index)"></i>
                  </div>
                  <div class="custom-card shadow ml-2 mb-2" @click="fileInput">
                    <i class="fas fa-plus-circle" style="font-size: 35px;"></i>
                  </div>
                  <input type="file" ref="fileInput" style="display: none" @change="onFileInput" multiple accept=".png, .jpg, .jpeg, .pdf">
              </div>
            </div>
          </div>

          <hr />

          <div class="card content" v-for="(data, index) in itinerarydays" :key="index">
            <h4>Day {{ data.day }}</h4>
            <div class="row">
              <div class="col-sm-6">
                <label>Source</label>
                <dropdown-list class="mb-2" 
                  :itemList="cities" 
                  v-model="data.day_source"
                />
              </div>
              <div class="col-sm-6">
                <label>Destination</label>
                
                <dropdown-list class="mb-2" 
                  :itemList="cities" 
                  v-model="data.day_destination"
                />

              </div>

              <div class="col-sm-12">
                <label>Description</label>
                <vue-editor
                  v-model="data.day_description"
                  :class="{ 'is-invalid': form.errors.has('description') }"
                  :customModules="customModulesForEditor"
                  :editorOptions="editorSettings"
                  id="editor"
                  useCustomImageHandler
                  @image-added="handleImageAdded"
                  @image-removed="handleImageRemoved"
                ></vue-editor>
              </div>
            </div>
          </div>

          <form-buttons />
        </form>
      </div>
    </section>
    </template>
  </form-layout>
</template>

<script>
import { ModelSelect } from "vue-search-select";
import Multiselect from "vue-multiselect";
import { Form, HasError } from "vform";
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import DropdownList from "@/admin/components/form/DropdownList.vue";
import TagsInput from '@voerro/vue-tagsinput';

export default {
  name: "EditItinerary",
  components: {
    Form,
    ModelSelect,
    Multiselect,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-list":DropdownList,
    "tags-input": TagsInput,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      cities: [],
      sources: '',
      destinations: '',
      itinerarydays: [],
      tour_type_list: [],
      season_list: [],
      tags:[],
      meta_key: [],
      img_images: [],

      selected: null,
      summeryWarn: false,
      meta_titleWarn: false,
      titleWarn: false,
      bigTitleWarn: false,
      meta_keywordWarn: false,
      tagsWarn: false,
      photo: [],
      detail_photo: [],
      form: new Form({
        meta_description: "",
        meta_title: "",
        meta_keyword: [],
        tags: [],
        source: "",
        destination: "",
        noofdays: "",
        title: "",
        price: "",
        description: "",
        tourtype: "",
        hotel_type: "",
        photo: "",
        photo_alt: "",
        detail_photo: "",
        detail_photo_alt: "",
        food: "",
        train: "",
        bus: "",
        flight: "",
        transport: "",
        client_type:"",
        tourtypes: [],
        seasons: [],
        delImages: [],
        newImages: [],
        itinerarydays: [
          { day: 1, day_source: "", day_destination: "", day_description: "" },
        ],
      }),
      loading: false
    };
  },

  created() {
    this.itineraryList();
    this.cityList();
    this.tourTypeData();
    this.seasonsData();
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
      if(field === 'title'){
          if(input === ''){
            this.titleWarn = true;
          } else if(input.length > 150){
            this.titleWarn = false;
            this.bigTitleWarn = true;
          }
          else {
            this.titleWarn = false;
            this.bigTitleWarn = false;
          }
      }
      /*if(field === 'meta_keyword'){
          if(input === ''){
            this.meta_keywordWarn = true;
          } else {
            this.meta_keywordWarn = false;
          }
          
      }*/
    },
    fileInput(){
      this.$refs.fileInput.click()
    },
    onFileInput(event){
        for(let i=0; i<event.target.files.length; i++){
          let file = event.target.files[i];
          //this.detail_photo_alt[i] = file.name;
          let reader = new FileReader();
          reader.onload = (event) => {
            //this.form.images.push(event.target.result);
            this.img_images.push(event.target.result);
            this.form.newImages.push(event.target.result);
            //console.log(this.form.newImages);
          };
          reader.readAsDataURL(file);
        }
        //console.log(this.form.images[1])
    },
    delImg(index){
       this.form.delImages.push(this.detail_photo[index]);
       this.img_images = this.img_images.slice(0, index).concat(this.img_images.slice(index + 1));
       this.detail_photo = this.detail_photo.slice(0, index).concat(this.detail_photo.slice(index + 1));
       //this.form.detail_photo_alt = this.form.detail_photo_alt.slice(0, index).concat(this.form.detail_photo_alt.slice(index + 1));
    },
    itineraryList() {
      axios
        .get(`/api/itinerary/${this.$route.params.itineraryid}/edit`)
        .then((response) => {
          setTimeout(() => $("#example").DataTable(), 1000);
          this.form.fill(response.data);
          console.log(this.form);
          this.photo = response.data.photo;
          //this.detail_photo = response.data.detail_photo;
          //this.form.detail_photo_alt = response.data.detail_photo_alt;

          if(response.data.itineraryimages.length > 1){
            for(let i = 0; i < response.data.itineraryimages.length; i++){
              var imge = this.$gbiAssets+'/'+response.data.itineraryimages[i].image
              this.img_images.push(imge);
              this.detail_photo.push(response.data.itineraryimages[i].image);
            }
          }

          this.form.newImages = [];
          this.form.delImages = [];

          var day_data = response.data.itinerarydays;
          for (var i = 0; i < day_data.length; i++) {
            if (this.itinerarydays.length != day_data.length) {
              this.itinerarydays.push({
                day: day_data[i].day,
                day_source: day_data[i].day_source,
                day_destination: day_data[i].day_destination,
                day_description: day_data[i].day_description,
              });
            }
          }
            for(let i = 0;i< response.data.tags.length;i++){
            this.meta_key.push({
              value: response.data.tags[i].title,
              key: response.data.tags[i].id
            });
          }
          this.img_photo = this.form.photo;
          this.img_detail_photo = this.form.detail_photo;
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

    cityList() {
      axios.get("/api/city").then((res) => {
        if (res.data) {
          for(let i = 0;i<res.data.data.length;i++){
            this.cities.push({
              name:res.data.data[i].name,
              id:res.data.data[i].name
            });
          }
        }
      });
    },

    tourTypeData() {
      axios.get("/api/tourtype").then((response) => {
        this.tour_type_list = response.data;
      });
    },

    seasonsData() {
      axios.get("/api/season").then((response) => {
        this.season_list = response.data;
      });
    },

    changePhoto(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.photo = event.target.result;
        this.form.photo_alt = file.name;
        this.photo = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    changeDetailPhoto(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.detail_photo = event.target.result;
        this.form.detail_photo_alt = file.name;
        this.detail_photo = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    updateItinerary() {
      /*if (this.img_images.length < 7) {
        this.$toast.fire({
            icon: "error",
            title: "7 Banner Images Required!",
        });
        return false;
      }*/
      if (!this.form.meta_keyword.length) {
        this.meta_keywordWarn = true
        this.$toast.fire({
            icon: "error",
            title: "Meta Keywords Required",
        });
        return false;
      }
      else if(this.form.meta_description == ''){
          this.$toast.fire({
            icon: "error",
            title: "Meta Description Required",
          });
          return false;
      }
      else if(this.form.meta_title == ''){
          this.$toast.fire({
            icon: "error",
            title: "Meta Title Required",
          });
          return false;
      }
      else if (!this.form.seasons || this.form.seasons<=0) {
        this.$toast.fire({
            icon: "error",
            title: "Season field is required",
        });
        return false;
      }
      // Set noofdays in the local storage to make it avaliable to the daypage....
      //console.log(this.form);
      localStorage.setItem("noofdays", this.form.noofdays);
      if (this.form.bus == 1 || this.form.train == 1 || this.form.flight == 1) {
          this.form.transport = "1";
      }

      // check if all the no of days fields are filled out
      for (var i = 0; i < this.itinerarydays.length; i++) {
        if (
          this.itinerarydays[i]["day_source"] == "" ||
          this.itinerarydays[i]["day_destination"] == "" ||
          this.itinerarydays[i]["day_description"] == ""
        ) {
          this.$toast.fire({
            icon: "error",
            title: "Make sure you fill all the fields",
          });
          return false;
        }
        this.loading = true
        this.form.itinerarydays[i]["day_source"] = this.itinerarydays[i][
          "day_source"
        ];
        this.form.itinerarydays[i]["day_destination"] = this.itinerarydays[i][
          "day_destination"
        ];
        this.form.itinerarydays[i]["day_description"] = this.itinerarydays[i][
          "day_description"
        ];
      }
      this.form.tags = this.form.meta_keyword
      console.log(this.form)
      // Submit the form via a itinerary request
      this.form
        .put(`/api/itinerary/${this.$route.params.itineraryid}`)
        .then((response) => {
          //this.$router.push(`/itinerary-list`);
          this.$toast.fire({
            icon: "success",
            title: "Itinerary Updated successfully",
          });
          this.loading = false
        })
        .catch((error) => {
           this.$toast.fire({
            icon: "warning",
            title: "Please input valid data",
          });
          this.loading = false
        });
    },

    addRow() {
      this.form.noofdays += 1;
      var index = this.form.itinerarydays.length;
      this.itinerarydays.push({
        day: index + 1,
        day_source: '',
        day_destination: '',
        day_description: "",
      });
      this.form.itinerarydays.push({
        day: index + 1,
        day_source: "",
        day_destination: "",
        day_description: "",
      });
    },
    removeRow() {
      if (this.form.noofdays == 0) {
        return false;
      }
      this.form.noofdays -= 1;
      var index = this.form.itinerarydays.length - 1;
      this.itinerarydays.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.customSelect{
    min-height: 53px !important;
    font-size: 17px !important;
    padding: 0px 40px 0 8px !important;
    color: #737879 !important;
    background: #fff !important;
    font-weight: 600;
}
.warn-error {
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
  }
.smallImages{
  width: 140px; 
  height: 93px;
  position: relative;
}
.delImgBtn{
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 4px;
  font-size: 16px;
  color: #d12121;
}
.custom-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93px;
  width: 143px;
  background: #e5e5e5;
  border: solid 2px #e5e5e5;
  border-radius: 5px;
}
</style>