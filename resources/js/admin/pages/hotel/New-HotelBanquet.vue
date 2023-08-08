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
            Hotel Information
          </div>
          <div class="icons" :style="currStep == 'step2' ? 'border-bottom: 2px solid #00c4c4' : 'border-bottom: 2px solid #38353538'" @click="changeStep('step2')">
            Banquet Information
          </div>
          <div class="icons" :style="currStep == 'step3' ? 'border-bottom: 2px solid #00c4c4' : 'border-bottom: 2px solid #38353538'" @click="changeStep('step3')">
            Categories
          </div>
          <div class="icons" :style="currStep == 'step4' ? 'border-bottom: 2px solid #00c4c4' : 'border-bottom: 2px solid #38353538'" @click="changeStep('step4')">
            Photos
          </div>
           <div class="icons" :style="currStep == 'step5' ? 'border-bottom: 2px solid #00c4c4' : 'border-bottom: 2px solid #38353538'" @click="changeStep('step5')">
            Amenities
          </div>
          <div class="icons" :style="currStep == 'step6' ? 'border-bottom: 2px solid #00c4c4;' : 'border-bottom: 2px solid #38353538'" @click="changeStep('step6')">
            Address
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
              <label for="name">Hotel Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter Hotel Name"
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
                v-model="form.meta_description"
                :class="{ 'is-invalid': form.errors.has('meta_description') }"
                placeholder="Enter Meta Description"
              ></textarea>
              <has-error :form="form" field="meta_description"></has-error>
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

         <div class="col-sm-4">
            <div class="form-group">
              <label for="rooms">No. of Rooms</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter No. of Room in hotel"
                id="rooms"
                name="rooms"
                v-model="form.rooms"
                :class="{ 'is-invalid': form.errors.has('room') }"
              />
              <has-error :form="form" field="room"></has-error>
            </div>
          </div>         

          <div class="col-sm-4">
            <div class="form-group">
              <label for="star">Star Category</label>
              <status-dd class="mb-2" 
                :itemList="star_list"
                @update:option="updateStatus" 
              />
              <has-error :form="form" field="star"></has-error>
              <p v-if="starWarn && form.star_category === '' " class="warn-error">Select Star Category</p>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter Email"
                id="email"
                rows="5"
                name="email"
                v-model="form.email"
                :class="{ 'is-invalid': form.errors.has('email') }"
              />
              <has-error :form="form" field="email"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="phoneno">Phone Number</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Contact Number"
                name="phoneno"
                v-model="form.phoneno"
                :class="{ 'is-invalid': form.errors.has('phoneno') }"
              />
              <has-error :form="form" field="phoneno"></has-error>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div v-if="currStep=='step2'">
         <div class="row">
          <div class="col-sm-8">
            <div class="form-group">
              <label for="name">Banquet Name</label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                :class="{ 'is-invalid': form.errors.has('name') }"
                placeholder="Enter Banquet Name"
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

          <div class="col-sm-4">
            <div class="form-group">
              <label for="banquets">No. of Banquets</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter No. of Banquets in hotel"
                id="banquets"
                name="banquets"
                v-model="form.banquets"
                @change="updateBanquets(form.banquets)"
                :class="{ 'is-invalid': form.errors.has('banquets') }"
              />
              <has-error :form="form" field="banquets"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="star">Star Category</label>
              <status-dd class="mb-2" 
                :itemList="star_list"
                @update:option="updateStatus" 
              />
              <has-error :form="form" field="star"></has-error>
              <p v-if="starWarn && form.star_category === '' " class="warn-error">Select Star Category</p>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="banquet_price">Banquet Price</label>
              <input
                type="number"
                class="form-control"
                placeholder="Enter Banquet's price"
                id="banquet_price"
                name="banquet_price"
                v-model="form.banquet_price"
                :class="{ 'is-invalid': form.errors.has('banquet_price') }"
              />
              <has-error :form="form" field="banquet_price"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter Email"
                id="email"
                rows="5"
                name="email"
                v-model="form.email"
                :class="{ 'is-invalid': form.errors.has('email') }"
              />
              <has-error :form="form" field="email"></has-error>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="form-group">
              <label for="phoneno">Phone Number</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Contact Number"
                name="phoneno"
                v-model="form.phoneno"
                :class="{ 'is-invalid': form.errors.has('phoneno') }"
              />
              <has-error :form="form" field="phoneno"></has-error>
            </div>
          </div>
        </div>


          <!-- Banquet Info -->
          <div class="mx-4">
            <div class="banquetDiv mt-2">
              <div class="banquetSubDiv" v-for="(data, index) in Number(form.banquets)" :key="index">
                <div class="singleBanquetDiv d-flex justify-content-between cursor-pointer" @click="selectBanquet(index)">
                  <p>Banquet {{index + 1}}</p>
                  <i class="cursor-pointer" :class="selectedBanquet == (index) ? 'fas fa-chevron-up mt-2' : 'fas fa-chevron-down' "></i>
                </div>
                <div v-if="selectedBanquet == (index) " class="singleBanquetDiv2">
                  <div class="card-text card-text-ul">
                    <!-- The Tabs -->
                    <div class="custom-div2">
                      <div class="custom-flex2">
                        <div class="banquetFields" :style="currField == '1' ? 'border-bottom: 3px solid #00c4c4' : ''" @click="changeField('1')">
                          Dimension
                        </div>
                        <div class="banquetFields" :style="currField == '2' ? 'border-bottom: 3px solid #00c4c4' : ''" @click="changeField('2')">
                          Sitting Capicty
                        </div>
                        <div class="banquetFields" :style="currField == '3' ? 'border-bottom: 3px solid #00c4c4' : ''" @click="changeField('3')">
                          Amenities
                        </div>
                      </div>
                    </div>

                    <!-- Dimensions -->
                    <div v-if="currField == '1'" class="my-4">
                      <label for="dimensions">Dimensions</label>
                      <div class="row">
                        <div class="col-sm-3">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Inches"
                              id="dimensions"
                              name="dimensions"
                              v-model="form.dimensions[index].type"
                              :class="{ 'is-invalid': form.errors.has('dimensions') }"
                              />
                            <has-error :form="form" field="dimensions"></has-error>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="form-group">
                            <input
                              type="number"
                              class="form-control"
                              placeholder="Length"
                              min="0"
                              id="length"
                              name="length"
                              v-model="form.dimensions[index].length"
                              :class="{ 'is-invalid': form.errors.has('length') }"
                              />
                            <has-error :form="form" field="length"></has-error>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="form-group">
                            <input
                              type="number"
                              class="form-control"
                              placeholder="Width"
                              min="0"
                              id="width"
                              name="width"
                              v-model="form.dimensions[index].width"
                              :class="{ 'is-invalid': form.errors.has('width') }"
                              />
                            <has-error :form="form" field="width"></has-error>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="form-group">
                            <input
                              type="number"
                              class="form-control"
                              placeholder="Height"
                              min="0"
                              id="height"
                              name="height"
                              v-model="form.dimensions[index].height"
                              :class="{ 'is-invalid': form.errors.has('height') }"
                              />
                            <has-error :form="form" field="height"></has-error>
                          </div>
                        </div>
                        <div class="col-sm-3">
                          <div class="form-group">
                            <label for="area">Area</label>
                            <input
                              type="number"
                              class="form-control"
                              placeholder="Area"
                              min="0"
                              id="area"
                              name="area"
                              v-model="form.dimensions[index].area"
                              :class="{ 'is-invalid': form.errors.has('area') }"
                              />
                            <has-error :form="form" field="area"></has-error>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Sitting Capicty -->
                    <div v-else-if="currField == '2'" class="my-4">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="seating">Seating Type</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Round Table"
                              id="seating"
                              name="seating"
                              v-model="form.seating[index].type"
                              :class="{ 'is-invalid': form.errors.has('seating') }"
                              />
                            <has-error :form="form" field="seating"></has-error>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="people">Number of People</label>
                            <input
                              type="number"
                              class="form-control"
                              placeholder="0"
                              min="0"
                              id="people"
                              name="people"
                              v-model="form.seating[index].people"
                              :class="{ 'is-invalid': form.errors.has('people') }"
                              />
                            <has-error :form="form" field="people"></has-error>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Amenities -->

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="row" v-else-if="currStep=='step3'">
          <div class="col-sm-6">
            <label for="state">Room Category</label>
             <div class="row">
              <div class="col-sm-9 mb-2" v-for="index in form.room_categories" :key="index">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Select Category"
                    id="room_categories"
                    name="room_categories"
                    v-model="form.room_categories[index]"
                    :class="{ 'is-invalid': form.errors.has('room_categories') }"
                    />
              </div>
              <div class="col-sm-3 mt-2">
                <button class="btn btn-custom-indr" @click.prevent="incr('room')"><i class="fas fa-plus"></i></button>
                <button v-if="form.room_categories.length > 1" class="btn btn-custom-indr" @click.prevent="decr('room')"><i class="fas fa-minus"></i></button>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="row" v-else-if="currStep=='step4'">
          <div v-for="(img, index) in img_images" :key="index" class="mr-2 mb-2 shadow smallImages">
            <img :src="img" alt class="smallImages"/>
            <i class="fas fa-trash-alt delImgBtn" @click="delImg(index)"></i>
          </div>
          <div class="custom-card shadow ml-2 mb-2" @click="fileInput">
            <i class="fas fa-plus-circle" style="font-size: 35px;"></i>
          </div>
          <input type="file" ref="fileInput" style="display: none" @change="onFileInput" multiple accept=".png, .jpg, .jpeg, .pdf">
        </div>

        <!-- Step 5 -->
        <div class="row" v-else-if="currStep=='step5'">
            <!-- Amenities -->
        </div>

        <!-- Step 6 -->        
        <div class="row" v-else-if="currStep=='step6'">
          <div class="col-sm-3">
            <div class="form-group">
              <label for="city">City</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter City"
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
                <label for="state">State</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter State"
                  id="state"
                  name="state"
                  v-model="form.state"
                  :class="{ 'is-invalid': form.errors.has('state') }"
                />
                <has-error :form="form" field="state"></has-error>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
              <label for="country">Country</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Country"
                    id="country"
                    name="country"
                    v-model="form.country"
                    :class="{ 'is-invalid': form.errors.has('country') }"
                />
                <has-error :form="form" field="state"></has-error>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="form-group">
              <label for="pincode">Pin Code</label>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Pin"
                    id="pincode"
                    name="pincode"
                    v-model="form.pincode"
                    :class="{ 'is-invalid': form.errors.has('pincode') }"
                />
                <has-error :form="form" field="pincode"></has-error>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <label for="address">Address</label>
                <textarea
                    class="form-control"
                    placeholder="Enter Address"
                    id="address"
                    name="address"
                    cols="12"
                    v-model="form.address"
                    :class="{ 'is-invalid': form.errors.has('address') }"
                ></textarea>
                <has-error :form="form" field="address"></has-error>
              </div>
            </div>
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
                >{{ currStep == 'step6' ? 'Submit' : 'Next'}}
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
      currField: '1',
      selectedBanquet: null,
      img_images: [],
      star_list: [
        {name:"5",id:0},
        {name:"4",id:1},
        {name:"3",id:2},
        {name:"2",id:3},
        {name:"1",id:4},
      ],
      form: new Form({
        name: "",
        state: "",
        city: "",
        country: "",
        pincode: "",
        //image: "",
        alt: [],
        images: [],
        star_category: "",
        rooms: "",
        banquets: "",
        phoneno: "",
        email: "",
        address: "",
        room_categories: [''],
        banquet_categories: [],
        //photos: [],
        description: "",
        meta_keywords: [],
        meta_title: "",
        meta_description: "",
        amenities: [],
        banquet_price: '',
        seating: [],
        dimensions: [],
      }),
    };
  },
  methods: {
    updateBanquets(val){
      //console.log('yes');
      for(let i = 0; i < val; i++ ){
        let dimen = [
          {
            type: '',
            length: '',
            height: '',
            width: '',
            area: '',
          },
        ];
        let seat = [
          {
            type: '',
            people: ''
          },
        ];

        this.form.dimensions.push(dimen);
        this.form.seating.push(seat);
      }
    },
    changeField(val){
      this.currField = val;
    },
    selectBanquet(index){
      if(this.selectedBanquet == index){
        this.selectedBanquet = null;
      } else {
        this.selectedBanquet = index;
      }
    },
    changeStep(val){
      this.currStep = val;
    },
    fileInput(){
      this.$refs.fileInput.click()
    },
    onFileInput(event){
        for(let i=0; i<event.target.files.length; i++){
          let file = event.target.files[i];
          this.form.alt[i] = file.name;
          let reader = new FileReader();
          reader.onload = (event) => {
            this.form.images.push(event.target.result);
            this.img_images.push(event.target.result);
          };
          reader.readAsDataURL(file);
        }
        //console.log(this.form.images[1])
    },
    delImg(index){
       this.img_images = this.img_images.slice(0, index).concat(this.img_images.slice(index + 1));
       this.form.images = this.form.images.slice(0, index).concat(this.form.images.slice(index + 1));
       this.form.alt = this.form.alt.slice(0, index).concat(this.form.alt.slice(index + 1));
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
      if(this.currStep == 'step6'){
        this.addHotel();
        //this.scrollTop()
      } else {
        var str= this.currStep;
        var last = str.charAt(str.length - 1);
        this.currStep = 'step' + last+1;
      }
    },
    back(){
      if(this.currStep == 'step1'){
        this.$router.push('/hotel-list');
      } else {
        var str= this.currStep;
        var last = str.charAt(str.length - 1);
        this.currStep = 'step' + last-1;
      }
    },
    updateStatus(v){ this.form.star_category = v.name},
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
  align-items: center;
  height: 93px;
  width: 143px;
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
  width: 20%;
}
.banquetFields{
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  padding: 2px 2px 10px 2px;
  text-align: center;
  width: 15%;
}
.banquetDiv{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-content: space-between;
}

.banquetSubDiv{
  border-bottom: 1px solid #cfcfcf;
}

.singleBanquetDiv{
  height: 55px; 
  width: 100%; 
  padding: 14px 30px;
  font-size: 18px;
  font-weight: 600;
  background: white;
}
.singleBanquetDiv2{
  height: auto; 
  width: 100%; 
  padding: 8px 30px;
  font-size: 18px;
  font-weight: 600;
  background: white;
}
.custom-div2{
  padding-top: 0.2vh !important;
  margin-right: 20px;
  margin-bottom: 10px;
}
.custom-flex2{
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
  font-weight: 470;
  color: grey;
}
</style>