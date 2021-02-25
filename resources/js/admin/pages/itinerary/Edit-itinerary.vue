<!-- Edit itinerary template -->
<template>
  <form-layout>
    <template #formdata>
      <form
        role="form"
        enctype="multipart/form-data"
        @submit.prevent="updateItinerary()"
      >
        <div class="row mb-30">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="sourceId">Source</label>
              <select class="form-control select-field" v-model="form.source">
                <option value="" disabled hidden>Select Source</option>
                <option v-for="data in cities" :value="data.name" :key="data.id">{{data.name }}</option>
              </select>
              {{ form.source }}
              <!-- <model-select
                :options="options"
                v-model="sources"
                placeholder="From"
              ></model-select>
              {{ sources.value }} -->
              <has-error :form="form" field="source"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label for="destinationId">Destination</label>
              <select class="form-control select-field" v-model="form.destination">
                <option value="" disabled hidden>Select Destination</option>
                <option v-for="data in cities" :value="data.name" :key="data.id">{{data.name }}</option>
              </select>
              {{ form.destination }}
              <!-- <model-select
                :options="options"
                v-model="destinations"
                placeholder="To"
              ></model-select>
              {{ destinations.value }} -->
              <has-error :form="form" field="destination"></has-error>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="noofdaysId">Number Of Days</label>
                  <input
                    type="text"
                    readonly="readonly"
                    class="form-control"
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
                <button
                  type="button"
                  class="btn btn_plus text-white mt-35"
                  @click="addRow()"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="col-sm-3">
                <button
                  type="button"
                  class="btn btn_plus text-white mt-35"
                  @click="removeRow()"
                >
                  <i class="fas fa-minus"></i>
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
                <label class="custom-control-label" for="transport1">Bus</label>
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
          <div class="col-sm-6">
            <div class="form-group">
              <label for="mode_of_transport">Tour category</label>
              <br />

              <multiselect
                v-model="form.tourtypes"
                :options="tour_type_list"
                :multiple="true"
                :close-on-select="true"
                :show-labels="false"
                placeholder="Pick some"
                label="name"
                track-by="name"
              ></multiselect>
            </div>
          </div>
        </div>

        <div class="row mb-30">
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
                {{ form.errors.get("food") }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group mb-30">
          <label for="descriptionId">Description</label>

          <vue-editor
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
            <div class="row">
              <div class="col-sm-5">
                <div class="form-group">
                  <input
                    @change="changeDetailPhoto($event)"
                    type="file"
                    class="overflow-hidden"
                    :class="{ 'is-invalid': form.errors.has('detail_photo') }"
                  />
                </div>
              </div>
              <div class="col-sm-7">
                <img v-if="detail_photo != ''" :src="detail_photo" alt width="80" height="80" class="detail_photo" />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="card content" v-for="(data, index) in itinerarydays" :key="index">
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

              {{ data.day_source }}
            </div>
            <div class="col-sm-6">
              <label>Destination</label>
              <select class="form-control select-field" v-model="data.day_destination">
                <option value="" disabled hidden>Select Destination</option>
                <option v-for="data in cities" :value="data.name" :key="data.id">{{data.name }}</option>
              </select>
              <!-- <model-select
                :options="options"
                v-model="data.day_destination"
                placeholder="To"
              ></model-select>
              {{ data.day_destination.value }} -->
              {{ data.day_destination }}
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
export default {
  name: "EditItinerary",
  components: {
    Form,
    ModelSelect,
    Multiselect,
    "has-error": HasError,
    "vue-editor": VueEditor,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
  },
  data() {
    return {
      cities: [],
      sources: '',
      destinations: '',
      itinerarydays: [],
      tour_type_list: [],

      selected: null,
      photo: "",
      detail_photo: "",
      form: new Form({
        source: "",
        destination: "",
        noofdays: "",
        title: "",
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
        tourtypes: [],
        itinerarydays: [
          { day: 1, day_source: "", day_destination: "", day_description: "" },
        ],
      }),
    };
  },

  created() {
    this.itineraryList();
    this.cityList();
    this.tourTypeData();
  },
  // watch: {
  //   "sources.value": function () {
  //     this.form.source = this.sources["value"];
  //   },
  //   "destinations.value": function () {
  //     this.form.destination = this.destinations["value"];
  //   },
  // },
  methods: {
    itineraryList() {
      axios
        .get(`/api/itinerary/${this.$route.params.itineraryid}/edit`)
        .then((response) => {
          setTimeout(() => $("#example").DataTable(), 1000);
          this.form.fill(response.data);
          this.form.photo = "";
          this.form.detail_photo = "";
          this.photo = "/uploadimage/" + response.data.photo;
          this.detail_photo = "/uploadimage/" + response.data.detail_photo;
          var day_data = response.data.itinerarydays;
          // this.sources.value = this.form.source;
          // this.sources.text = this.form.source;
          // this.destinations.value = this.form.destination;
          // this.destinations.text = this.form.destination;

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
          this.img_photo = "/uploadimage/" + this.form.photo;
          this.img_detail_photo = "/uploadimage/" + this.form.detail_photo;
        });
    },

    cityList() {
      axios.get("/api/city").then((response) => {
        this.cities = response.data.data;
      });
    },

    tourTypeData() {
      axios.get("/api/tourtype").then((response) => {
        this.tour_type_list = response.data;
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
      // Set noofdays in the local storage to make it avaliable to the daypage....
      console.log(this.form);
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

      // Submit the form via a itinerary request
      this.form
        .put(`/api/itinerary/${this.$route.params.itineraryid}`)
        .then((response) => {
          this.$toast.fire({
            icon: "success",
            title: "Itinerary Updated successfully",
          });
        })
        .catch(() => {});
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

