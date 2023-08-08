<!-- 

This template helps us to create a new Itinerary it takes the data from the form and sumbit with the help of the api
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
        @submit.prevent="addItinerary()"
        :style="!loading ? '' : 'opacity: 0.5' "
      >
        <div class="row">

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

          <div class="col-sm-12">
            <div class="form-group">
              <label for="description">Meta Description</label>
              <textarea
                row="3"
                type="text"
                class="form-control"
                v-model="form.meta_description"
                :class="{ 'is-invalid': form.errors.has('meta_description') }"
                placeholder="Enter Meta Description"
              ></textarea>
              <has-error :form="form" field="meta_description"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <!-- Source for the ititnerary  -->
            <div class="form-group">
              <label for="sourceId">Source</label>

              <dropdown-list class="mb-2" 
                :itemList="options" 
                :select="`name`"
                v-model="form.source"
              />

              <has-error :form="form" field="source"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <!-- Desctiantion for the itinerary -->
            <div class="form-group">
              <label for="destinationId">Destination</label>

              <dropdown-list class="mb-2" 
                :itemList="options" 
                :select="`name`"
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
        <!-- Adding tour type and transport, hotel type to the itinerary -->
        <div class="row">
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
                <lable class="danger text-danger">{{
                  form.errors.get("tourtype")
                }}</lable>
              </div>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="form-group aligen_top_input">
              <label for="hoteltype">Hotel Type</label>
              <br />

              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="nohotelRadio"
                  name="hoteltype"
                  v-model="form.hoteltype"
                  value="0"
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
                  name="hoteltype"
                  v-model="form.hoteltype"
                  value="3"
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
                  name="hoteltype"
                  v-model="form.hoteltype"
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
                  name="hoteltype"
                  v-model="form.hoteltype"
                  value="5"
                />
                <label class="custom-control-label" for="hotelRadio2"
                  >5 Star</label
                >
              </div>
              <div class="error" v-if="form.errors.has('hoteltype')">
                <lable class="danger text-danger">{{
                  form.errors.get("hoteltype")
                }}</lable>
              </div>
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
                  name="transport"
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
                  name="transport"
                  v-model="form.bus"
                  true-value="1"
                  false-value="0"
                />
                <label class="custom-control-label" for="transport1">Bus</label>
              </div>

              <div class="custom-control custom-checkbox custom-control-inline">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="transport2"
                  name="transport"
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
                placeholder="Pick some"
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
        <!-- Title and description for the itinerary -->
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="titleId">Itinerary Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Itinerary Name"
                name="title"
                v-model="form.title"
                :class="{ 'is-invalid': form.errors.has('title') }"
              />
              <has-error :form="form" field="title"></has-error>
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
                <lable class="danger text-danger">{{
                  form.errors.get("food")
                }}</lable>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="form-group">
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
          </div>
        </div>
        <!-- Adding photo for the itinerary -->
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group itinerary_image">
              <label class="label" for="input"
                >Please upload a thumbnail image !</label
              >
              <br />
              <input
                @change="changePhoto($event)"
                name="photo"
                type="file"
                :class="{ 'is-invalid': form.errors.has('photo') }"
                required
                accept="jpeg, jpg, png, gif"
                class="select_image overflow-hidden"
              />

              <img v-if="form.photo != ''" :src="form.photo" alt width="80" height="80" />
              <has-error :form="form" field="photo"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label class="label" for="input"
                >Please upload a Banner image !</label
              >
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
        </div>

        <hr />

        <div class="card content" v-for="data in form.itinerarydays" :key="data.id">
          <h4>Day {{ data.day }}</h4>
          <div class="row">
            <div class="col-sm-6">
              <label>Source</label>

              <dropdown-list class="mb-2" 
                :itemList="options" 
                :select="`name`"
                v-model="data.day_source"
              />

            </div>
            <div class="col-sm-6">
              <label>Destination</label>
              <dropdown-list class="mb-2" 
                :itemList="options" 
                :select="`name`"
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
    </section>
    </template>
  </form-layout>
</template>

<script>
import TagsInput from '@voerro/vue-tagsinput';
import { ModelSelect } from "vue-search-select";
import Multiselect from "vue-multiselect";
import { Form, HasError, AlertError } from "vform";
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownList from "@/admin/components/form/DropdownList.vue";

export default {
  name: "NewItinerary",
  components: {
    ModelSelect,
    Multiselect,
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-list":DropdownList,
    "tags-input": TagsInput,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      img_images: [],
      options: [],
      cities:[],
      tour_type_list: [],
      season_list: [],
      selected: null,
      tags:[],
      meta_key: [],
      tagsWarn: false,

      form: new Form({
        source: '',
        destination:'',
        noofdays: 1,
        title: "",
        price: "",
        description: "",
        tourtype: "",
        hoteltype: "0",
        photo: "",
        detail_photo: [],
        photo_alt:'',
        detail_photo_alt:[],
        food: "",
        flight: "",
        bus: "",
        train: "",
        transport: "",
        client_type:"general",
        tourtypes: [],
        meta_description:"",
        meta_title: "",
        meta_keyword: [],
        tags:[],
        seasons: [],
        itinerarydays: [
          {
            day: 1,
            day_source: '',
            day_destination: '',
            day_description: "",
          },
        ],
      }),
      loading: false
    };
  },
  created() {
    this.cityList();
    this.tourTypeData();
    this.getTags();
    this.seasonsData();
  },

  methods: {
    fileInput(){
      this.$refs.fileInput.click()
    },
    onFileInput(event){
        for(let i=0; i<event.target.files.length; i++){
          let file = event.target.files[i];
          this.form.detail_photo_alt[i] = file.name;
          let reader = new FileReader();
          reader.onload = (event) => {
            this.form.detail_photo.push(event.target.result);
            this.img_images.push(event.target.result);
          };
          reader.readAsDataURL(file);
        }
        //console.log(this.form.images[1])
    },
    delImg(index){
       this.img_images = this.img_images.slice(0, index).concat(this.img_images.slice(index + 1));
       this.form.detail_photo = this.form.detail_photo.slice(0, index).concat(this.form.detail_photo.slice(index + 1));
       this.form.detail_photo_alt = this.form.detail_photo_alt.slice(0, index).concat(this.form.detail_photo_alt.slice(index + 1));
    },
    cityList() {
      axios.get("/api/city").then((res) => {
        if (res.data) {
          for(let i = 0;i<res.data.data.length;i++){
            this.options.push({
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
      if (file.size > 29048576) {
        this.$swal.fire({
          type: "error",
          title: "Oops...",
          text: "Please Select A Valid Image!",
        });
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.form.photo = event.target.result;
          this.form.photo_alt = file.name;
        };
        reader.readAsDataURL(file);
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
    updateTags(){
      this.form.meta_keyword = []
      for(let i = 0;i<this.meta_key.length;i++){
          this.form.meta_keyword.push({
            title:this.meta_key[i].value,
            id:this.meta_key[i].key
          });
      }
    },
    changeDetailPhoto(event) {
      let file = event.target.files[0];
      if (file.size > 29048576) {
        this.$swal.fire({
          type: "error",
          title: "Oops...",
          text: "Please Select a Valid Image",
        });
      } else {
        let reader = new FileReader();
        reader.onload = (event) => {
          this.form.detail_photo = event.target.result;
          this.form.detail_photo_alt = file.name;
        };
        reader.readAsDataURL(file);
      }
    },
    addItinerary() {
      /*if (this.img_images.length < 7) {
        this.$toast.fire({
            icon: "error",
            title: "7 Banner Images Required!",
        });
        return false;
      }*/
      if (this.form.meta_keyword.length < 1 ) {
        this.tagsWarn = true
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
      localStorage.setItem("noofdays", this.form.noofdays);
      if (this.form.bus || this.form.train || this.form.flight) {
        this.form.transport = "1";
      }

      // check if all the no of days fields are filled out
      for (var i = 0; i < this.form.itinerarydays.length; i++) {
        if (
          this.form.itinerarydays[i]["day_source"] == "" ||
          this.form.itinerarydays[i]["day_destination"] == "" ||
          this.form.itinerarydays[i]["day_description"] == ""
        ) {
          this.$toast.fire({
            icon: "error",
            title: "Make sure you fill all the fields",
          });
          return false;
        }
      }
      this.loading = true
      this.form.tags = this.form.meta_keyword
      this.form
        .post("/api/itinerary")
        .then((response) => {
          this.$router.push(`/itinerary-list`);
          this.$toast.fire({
            icon: "success",
            title: "Itinerary Added successfully",
          });
          this.loading = false
        })
        .catch(() => {});
    },

    addRow() {
      this.form.noofdays += 1;
      var index = this.form.itinerarydays.length;
      this.form.itinerarydays.push({
        day: index + 1,
        day_source: '',
        day_destination: '',
        day_description: "",
      });
    },
    removeRow() {
      if (this.form.noofdays == 0) {
        return false;
      }
      this.form.noofdays -= 1;
      var index = this.form.itinerarydays.length - 1;
      this.form.itinerarydays.splice(index, 1);
    },
    SourceUpdateDay(value){
      console.log(value);
    }


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


