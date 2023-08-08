<!-- 

This template helps us to create a new hotel it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.

 -->
<template>
  <form-layout>
    <template #formdata>
      <div class="custom-div my-2">
        <div class="custom-flex mt-2">
          <div class="icons" :style="currStep == 'step1' ? 'border-bottom: 2px solid #00c4c4' : 'border-bottom: 2px solid #38353538'" @click="changeStep('step1')">
            Room Information
          </div>
          <div class="icons" :style="currStep == 'step2' ? 'border-bottom: 2px solid #00c4c4' : 'border-bottom: 2px solid #38353538'" @click="changeStep('step2')">
            Price
          </div>
          <div class="icons" :style="currStep == 'step3' ? 'border-bottom: 2px solid #00c4c4' : 'border-bottom: 2px solid #38353538'" @click="changeStep('step3')">
            Photos
          </div>
           <div class="icons" :style="currStep == 'step4' ? 'border-bottom: 2px solid #00c4c4' : 'border-bottom: 2px solid #38353538'" @click="changeStep('step4')">
            Amenities
          </div>
        </div>
      </div>
      <form
        id="formDiv"
        role="form"
        enctype="multipart/form-data"
      >
        <div class="row" v-if="currStep=='step1'">
          <div class="col-sm-8">
            <div class="form-group">
              <label for="star">Room Category</label>
              <status-dd class="mb-2" 
                :itemList="room_list"
                @update:option="updateStatus" 
              />
              <has-error :form="form" field="star"></has-error>
              <p v-if="starWarn && form.star === '' " class="warn-error">Select Room Category</p>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="name">Max Occupancy</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Max. Occupancy"
                name="hotelName"
              />
              <has-error :form="form" field="name"></has-error>
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
            </div>
          </div>

          <div class="col-sm-12">
            <div class="form-group">
              <label for="description">Meta Description</label>
              <textarea
                row="3"
                type="text"
                class="form-control"
                v-model="form.description"
                :class="{ 'is-invalid': form.errors.has('description') }"
                placeholder="Enter Meta Description"
              ></textarea>
              <has-error :form="form" field="description"></has-error>
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
              ></multiselect> 
              -->
                <tags-input element-id="tags"
                  v-model="meta_key"
                  :existing-tags="tags"
                  :typeahead="true"
                  @tags-updated="updateTags"
                  placeholder="Add keywords"
                  >
                </tags-input>

              <has-error :form="form" field="tags"></has-error>
              <p v-if="tagsWarn && meta_key.length < 1 " class="warn-error">Please choose keywords.</p>
            </div>
          </div>

         <div class="col-sm-3">
            <div class="form-group">
              <label for="room">Room Dimensions</label>
              <input
                type="number"
                class="form-control"
                placeholder="Inches/Centimeters"
                id="room"
                name="room"
                v-model="form.room"
                :class="{ 'is-invalid': form.errors.has('room') }"
              />
              <has-error :form="form" field="room"></has-error>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="form-group">
              <label for="room">Length</label>
              <input
                type="number"
                class="form-control"
                placeholder="Room Length"
                id="room"
                name="room"
                v-model="form.banquets"
                :class="{ 'is-invalid': form.errors.has('room') }"
              />
              <has-error :form="form" field="room"></has-error>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="form-group">
              <label for="room">Width</label>
              <input
                type="number"
                class="form-control"
                placeholder="Room Width"
                id="room"
                name="room"
                v-model="form.banquets"
                :class="{ 'is-invalid': form.errors.has('room') }"
              />
              <has-error :form="form" field="room"></has-error>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="form-group">
              <label for="room">Height</label>
              <input
                type="number"
                class="form-control"
                placeholder="Room Height"
                id="room"
                name="room"
                v-model="form.banquets"
                :class="{ 'is-invalid': form.errors.has('room') }"
              />
              <has-error :form="form" field="room"></has-error>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div v-else-if="currStep=='step2'">
          
          <div class="row">
            <div class="col-sm-2">
              <div class="form-group">
                <label for="city">Currency</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Currency"
                  id="city"
                  name="city"
                  v-model="form.city"
                  :class="{ 'is-invalid': form.errors.has('city') }"
                  />
                <has-error :form="form" field="city"></has-error>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-1">
              <div class="form-group">
                <label for="city">S.no.</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter Price"
                  min="1"
                  id="city"
                  name="city"
                  value="1"
                  disabled
                  />
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-group">
                <label for="city">Occupancy Type</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Double"
                  min="0"
                  id="city"
                  name="city"
                  v-model="form.city"
                  :class="{ 'is-invalid': form.errors.has('city') }"
                  />
                <has-error :form="form" field="city"></has-error>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-group">
                <label for="city">Net Rate</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="0.00"
                  min="0"
                  id="city"
                  name="city"
                  v-model="form.city"
                  :class="{ 'is-invalid': form.errors.has('city') }"
                  />
                <has-error :form="form" field="city"></has-error>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-group">
                <label for="city">Rack Rate</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="0.00"
                  min="0"
                  id="city"
                  name="city"
                  v-model="form.city"
                  :class="{ 'is-invalid': form.errors.has('city') }"
                  />
                <has-error :form="form" field="city"></has-error>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="form-group">
                <label for="city">Discount%</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="0"
                  min="0"
                  id="city"
                  name="city"
                  v-model="form.city"
                  :class="{ 'is-invalid': form.errors.has('city') }"
                  />
                <has-error :form="form" field="city"></has-error>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
                <label for="city">Final Price</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="0.00"
                  min="0"
                  id="city"
                  name="city"
                  v-model="form.city"
                  :class="{ 'is-invalid': form.errors.has('city') }"
                  />
                <has-error :form="form" field="city"></has-error>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="row" v-else-if="currStep=='step3'">
          <div class="custom-card shadow" @click="fileInput">
            <i class="fas fa-plus-circle" style="margin-top: 4vh; font-size: 35px;"></i>
          </div>
          <input type="file" ref="fileInput" style="display: none" @change="onFileInput" accept=".png, .jpg, .jpeg, .pdf">
        </div>


        <div class="row justify-content-center">
          <div class="col-sm-9 text-center">
            <button
                @click.prevent="back()"
                class="btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"
                >Back
            </button>
            <button
                @click.prevent="next()"
                class="btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"
                >{{ currStep == 'step5' ? 'Submit' : 'Next'}}
            </button>
          </div>
        </div>

      </form>
    </template>
  </form-layout>
</template>

<script>
import { Form, HasError, AlertError } from "vform";
import Vue2EditorMixin from '@/admin/mixins/Vue2EditorMixin';
import StatusDropdown from "@/admin/components/form/StatusDropdown.vue";
import FormButtons from "@/admin/components/buttons/formButtons2.vue";
import FormLayout from "@/admin/components/layout/FormLayout.vue";
import TagsInput from '@voerro/vue-tagsinput'

export default {
  name: "NewHotel",
  components: {
    Form,
    "has-error": HasError,
    "form-buttons": FormButtons,
    "form-layout": FormLayout,
    "tags-input": TagsInput,
    "status-dd": StatusDropdown,
  },
  mixins:[Vue2EditorMixin],
  data() {
    return {
      currStep: 'step1',
      img_image: "",
      room_list: [
        {name:"Normal",id:0},
        {name:"Deluxe",id:1},
        {name:"Executive",id:2},
        {name:"Suite",id:3},
        {name:"Villa",id:4},
      ],
      form: new Form({
        type: "",
        name: "",
        state: "",
        city: "",
        country: "",
        pincode: "",
        image: "",
        alt:"",
        star: "",
        room: "",
        banquets: "",
        phoneno: "",
        email: "",
        address: "",
        room_categories: [ '' ],
        banquet_categories: [ '' ],
        photos: [''],
        apai_single: "",
        apai_double: "",
        apai_triple: "",
        apai_quad: "",

        mapai_single: "",
        mapai_double: "",
        mapai_triple: "",
        mapai_quad: "",

        cpai_single: "",
        cpai_double: "",
        cpai_triple: "",
        cpai_quad: "",
      }),
    };
  },
  methods: {
    changeStep(val){
      this.currStep = val;
    },
    fileInput(){
      this.$refs.fileInput.click()
    },
    onFileInput(e){
        this.form.photos[1] = e.target.files[0];
        console.log(this.form.photos[1])
    },
    incr(val){
      let col = ""
      if(val == 'room'){
        this.form.room_categories.push(col)
      } else {
        this.form.banquet_categories.push(col)
      }
    },
    decr(val,){
      if(val == 'room'){
        this.form.room_categories.pop()
      } else {
        this.form.banquet_categories.pop()
      }
    },
    scrollTop(){
      var el = document.querySelector('formDiv');
      el.scrollTop = el.scrollHeight;

      setTimeout(function(){
        el.scrollTop = 0;
      }, 500);
    },
    next(){
      if(this.currStep == 'step1'){
        this.currStep = 'step2'
        //this.scrollTop()
      } else if(this.currStep == 'step2'){
        this.currStep = 'step3'
        //this.scrollTop()
      } else if(this.currStep == 'step3'){
        this.currStep = 'step4'
        //this.scrollTop()
      } else if(this.currStep == 'step4'){
        this.currStep = 'step5'
        //this.scrollTop()
      }
    },
    back(){
      if(this.currStep == 'step1'){
        this.$router.push('/hotel-list');
      }else if(this.currStep == 'step2'){
        this.currStep = 'step1'
        //this.scrollTop()
      } else if(this.currStep == 'step3'){
        this.currStep = 'step2'
        //this.scrollTop()
      } else if(this.currStep == 'step4'){
        this.currStep = 'step3'
        //this.scrollTop()
      } else if(this.currStep == 'step5'){
        this.currStep = 'step4'
        //this.scrollTop()
      }
    },
    updateStatus(v){ this.form.star = v.name},
    changeDetailPhoto(event) {
      let file = event.target.files[0];
      this.form.alt = file.name;
      let reader = new FileReader();
      reader.onload = (event) => {
        this.form.image  = event.target.result;
        this.img_image = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    addHotel() {
      // Submit the form via a itinerary request
      this.form
        .post("/api/hotel")
        .then((response) => {
          this.$router.push(`/hotel-list/`);
          this.$toast.fire({
            icon: "success",
            title: "Hotel Added successfully",
          });
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.btn-custom-indr {
    color: #212529;
    background-color: #dee2e6;
    border-color: #dee2e6;
    font-size: 15px !important;
    font-weight: 400;
    padding: 6px 15px;
}
.custom-card {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 12vh;
  width: 10vw;
  background: #e5e5e5;
  border: solid 2px #e5e5e5;
  border-radius: 5px;
}
.custom-div{
  margin-top: 26px !important;
  padding-top: 0.2vh !important;
  margin-right: 20px;
  margin-bottom: 10px;
}
.custom-flex {
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-direction: row;
  font-weight: 470;
  color: grey;
}
.icons{
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  padding: 2px 2px 10px 2px;
  text-align: center;
  width: 25%;
}
</style>