<!-- 

This template helps us to create a new Itinerary it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="addItinerary()"
      >
        <div class="row">
          <div class="col-sm-4">
            <!-- Source for the ititnerary  -->
            <div class="form-group">
              <label for="sourceId">Source</label>
              <!-- <select class="form-control select-field" v-model="form.source">
                <option value="" disabled hidden>Select Source</option>
                <option v-for="data in cities" :value="data.name" :key="data.id">{{data.name }}</option>
              </select> -->

              <dropdown-filter class="mb-2" :itemList="options" @update:option="SourceUpdate"/>

              <has-error :form="form" field="source"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <!-- Desctiantion for the itinerary -->
            <div class="form-group">
              <label for="destinationId">Destination</label>
              <!-- <select class="form-control select-field" v-model="form.destination">
                <option value="" disabled hidden>Select Source</option>
                <option v-for="data in cities" :value="data.name" :key="data.id">{{data.name }}</option>
              </select> -->
              <dropdown-filter class="mb-2" :itemList="options" @update:option="DestinationUpdate"/>

              <has-error :form="form" field="destination"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="row">

              <div class="col-sm-3">
                <label></label>
                <button
                  type="button"
                  class="btn btn_plus text-white mt-35"
                  @click="removeRow()"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              
              <div class="col-sm-6">
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

              <div class="col-sm-3">
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
        <!-- Adding toure type and transport, hotel type to the itinerary -->
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
          <div class="col-sm-6">
            <div class="form-group">
              <label for="mode_of_transport">Tour category</label>
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
        </div>
        <!-- Title and description for the itinerary -->
        <div class="row">
          <div class="col-sm-8">
            <div class="form-group">
              <label for="titleId">Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                name="title"
                v-model="form.title"
                :class="{ 'is-invalid': form.errors.has('title') }"
              />
              <has-error :form="form" field="title"></has-error>
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
              <input
                @change="changeDetailPhoto($event)"
                name="detail_photo"
                class="overflow-hiden"
                type="file"
                :class="{ 'is-invalid': form.errors.has('detail_photo') }"
                required
              />

              <img v-if="form.detail_photo != ''" :src="form.detail_photo" alt class="detail_photo" />
              <has-error :form="form" field="detail_photo"></has-error>
            </div>
          </div>
        </div>

        <hr />

        <div class="card content" v-for="data in form.itinerarydays" :key="data.id">
          <h4>Day {{ data.day }}</h4>
          <div class="row">
            <div class="col-sm-6">
              <label>Source</label>
              <select class="form-control select-field" v-model="data.day_source">
                <option value="" disabled hidden>Select Source</option>
                <option v-for="data in cities" :value="data.name" :key="data.id">{{data.name }}</option>
              </select>
              <!-- <model-select
                :options="options"
                v-model="data.day_source"
                placeholder="From"
              ></model-select> -->
            </div>
            <div class="col-sm-6">
              <label>Destination</label>
              <select class="form-control select-field" v-model="data.day_destination">
                <option value="" disabled hidden>Select Source</option>
                <option v-for="data in cities" :value="data.name" :key="data.id">{{data.name }}</option>
              </select>
              <!-- <model-select
                :options="options"
                v-model="data.day_destination"
                placeholder="To"
              ></model-select> -->
            </div>

            <div class="col-sm-12">
              <label>Description</label>
              <vue-editor
                v-model="data.day_description"
                :class="{ 'is-invalid': form.errors.has('description') }"
              ></vue-editor>
            </div>
          </div>
        </div>

        <form-buttons />
      </form>
    </template>
  </form-layout>
</template>

<script>

import { ModelSelect } from "vue-search-select";
import Multiselect from "vue-multiselect";
import { Form, HasError, AlertError } from "vform";
import { VueEditor, Quill } from "vue2-editor";

import FormButtons from "@/admin/components/buttons/FormButtons.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import DropdownFilter from "@/admin/components/form/DropdownFilter.vue";
export default {
  name: "NewItinerary",
  components: {
    ModelSelect,
    Multiselect,
    VueEditor,
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "dropdown-filter":DropdownFilter
  },
  data() {
    return {
      options: [],
      cities:[],
      tour_type_list: [],
      selected: null,

      form: new Form({
        source: '',
        destination:'',
        noofdays: 1,
        title: "",
        description: "",
        tourtype: "",
        hoteltype: "0",
        photo: "",
        detail_photo: "",
        food: "",
        flight: "",
        bus: "",
        train: "",
        transport: "",
        tourtypes: [],
        itinerarydays: [
          {
            day: 1,
            day_source: '',
            day_destination: '',
            day_description: "",
          },
        ],
      }),
    };
  },
  created() {
    this.cityList();
    this.tourTypeData();
  },

  methods: {
    cityList() {
      axios.get("/api/city").then((res) => {
        this.cities = res.data.data;
        if (res.data) {
          for(let i = 0;i<res.data.data.length;i++){
            this.options.push({
              name:res.data.data[i].name,
              id:res.data.data[i].id
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
        };
        reader.readAsDataURL(file);
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
        };
        reader.readAsDataURL(file);
      }
    },
    addItinerary() {
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
        // this.form.itinerarydays[i]["day_source"] = this.form.itinerarydays[i][
        //   "day_source"
        // ].value;
        // this.form.itinerarydays[i]["day_destination"] = this.form.itinerarydays[
        //   i
        // ]["day_destination"].value;
        //
      }
      // this.form.source = this.form["source"].value;
      // this.form.destination = this.form["destination"].value;
      // add noofdays fields data to form data
      // Submit form
      this.form
        .post("/api/itinerary")
        .then((response) => {
          this.$router.push(`/itinerary-list`);
          this.$toast.fire({
            icon: "success",
            title: "Itinerary Added successfully",
          });
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

    SourceUpdate(value){
      this.form.source = value.name;
    },
    
    DestinationUpdate(value){
      this.form.destination = value.name;
    },
  },
};
</script>


