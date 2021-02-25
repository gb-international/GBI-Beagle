<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="booking-form grey-form">
    <p v-if="first_form">When would you like to go?</p>
    <p v-if="second_form">Please Specify Your Requirements.</p>
    <form class="form">
      <div class="row" v-if="first_form">

        <div class="col-sm-6">
          <div class="form-group">
            <label for="startdate">Start Journy Date</label>
            <input type="date" class="form-control" id="startdate"  v-model="form.start_date" :class="{ 'is-invalid': form.errors.has('start_date') }"/>
            <has-error :form="form" field="start_date"></has-error>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label for="end_date">End Journy Date</label>
            <input type="date" class="form-control" id="end_date" v-model="form.end_date" :class="{ 'is-invalid': form.errors.has('end_date') }"/>
            <has-error :form="form" field="end_date"></has-error>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label for="number_of_person">Number of Person</label>
            <input
              type="number"
              class="form-control"
              id="number_of_person"
              min="2"
              v-model="form.person" :class="{ 'is-invalid': form.errors.has('person') }"
              required
            />
            <has-error :form="form" field="start_date"></has-error>
          </div>
        </div>
        
        <div class="col-sm-6">
          <div class="form-group">
            <label for="number_of_person">Number of Rooms</label>
            <input
              type="number"
              class="form-control"
              id="number_of_person"
              min="1"
              v-model="form.room" :class="{ 'is-invalid': form.errors.has('room') }"
              required
            />
            <has-error :form="form" field="start_date"></has-error>
          </div>
        </div>

        <div class="col-sm-12">
            <div class="form-group">
                <label for="occupancy">Occupancy Types</label>
                <select class="form-control" v-model="form.occupancy_type" :class="{ 'is-invalid': form.errors.has('occupancy_type') }">
                  <option v-for="(occ, i) in occupancy_list" :value="occ" :key="i"> {{ occ }}</option>
                </select>
                <has-error :form="form" field="occupancy_type"></has-error>
            </div>
        </div>
      </div>

      <div class="row" v-if="second_form">
        <div class="col-sm-12">
          <div class="form-group">
            <label for="cities">Cities</label>
            <multiselect :options="city_list" :multiple="true" track-by="name" label="name" :close-on-select="true" v-model="form.city_id" placeholder="Select City"></multiselect>
          </div>
        </div>
        
        <div class="col-sm-12">
          <div class="form-group">
            <label for="sightseeing">Places(Sightseeing)</label>
            <multiselect v-if="sightseeing_list" :options="sightseeing_list" :multiple="true" track-by="name" label="name" :close-on-select="true" v-model="form.sightseen" placeholder="Select Sightseeing"></multiselect>
          </div>
        </div>

        <div class="col-sm-12">
          <div class="form-group">
            <label for="transport">Mode of Transport</label>
            <multiselect :options="transports" :multiple="true" :close-on-select="true" v-model="form.transport" placeholder="Mode of transport"></multiselect>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label for="numofday">Number of Days</label>
            <div class="row align-content-center">
              <div class="col">
                <img src="/images/icons/minus.png" @click="down()" class="w-40 link">
              </div>
              
              <div class="col">
                {{ form.noofday }}
              </div>
              
              <div class="col">
                <img src="/images/icons/add.png" @click="up()" class="w-40 link">
              </div>

            </div>
          </div>
        </div>

        

        <div class="col-sm-6">
          <label for="accommodation">Accommodation Preference</label>
          <select id="accomodation" class="form-control" v-model="form.accommodation">
            <option value="2">2 Star</option>
            <option value="3">3 Star</option>
            <option value="4">4 Star</option>
            <option value="5">5 Star</option>
          </select>
        </div>

      </div>
      <div class="text-center">
                
        <button type="button" v-if="customize_btn" class="btn profile_button" @click="secondForm()">Customize</button><span class="mr-10"></span>

        <button type="button" v-if="back_btn" class="btn profile_button" @click="secondForm()">Back</button><span class="mr-10"></span>

        <button type="button" @click="BookingSubmit()" v-if="book_btn" class="btn profile_button">Book</button>

      </div>
    </form>
  </div>
</template>
<script>
import  ModelSelect  from "vue-multiselect";
import { Form, HasError, AlertError } from "vform";

export default {
  name:"Booking",
  components:{ 
    'multiselect':ModelSelect,
    'has-error':HasError
  },
  props: ["list"],
  data() {
    return {
      transports: ['Bus','Train','Air'],
      city_list:'',
      sightseeing_list:'',
      travel_type_list: [
        "Train",
        "AC Bus",
        "Flight",
        "Train",
        "Flight",
        "Train",
        "AC Bus"
      ],
      occupancy_list:[
          "Single",
          "Double",
          "Triple",
          "Quad"
      ],

      form : new Form({
        state_date:'',
        end_date:'',
        person:2,
        room:1,
        occupancy_type:'',
        city_id:'',
        sightseen:'',
        transport:'',
        noofday:1,
        accommodation:3,
        itinerary_id:''
      }),
      
      customize_btn:true,
      back_btn:false,
      book_btn:true,

      first_form:true,
      second_form:false,

    };
  },
  watch:{
    'form.city_id':function(){
      this.sightseeingData(this.form.city_id);
    }
  },
  mounted(){
    this.cityData();
    this.form.itinerary_id = this.$route.params.id;
  },
  methods:{

    cityData(){
      this.$axios.get('/api/city-list').then(response=>{
        this.city_list = response.data;
      });
    },
    
    sightseeingData(city){
      this.$axios.post('/api/city-sightseeing',{'list':city}).then(response=>{
        this.sightseeing_list = response.data;
      });
    },

    secondForm(){
      if(this.back_btn == false){
        this.back_btn = true;
        this.customize_btn = false;
        this.first_form = false;
        this.second_form = true;
      }else{
        this.customize_btn = true;
        this.back_btn = false;
        this.first_form = true;
        this.second_form = false;
      }
    },
    down(){
      if(this.form.noofday>1){
        this.form.noofday = this.form.noofday - 1;
      }
    },
    up(){
      this.form.noofday = this.form.noofday + 1;
    },
    cityList() {
      this.$axios.get("/api/city").then(response => {
        for (var i = 0; i < response.data.data.length; i++) {
          console.log(response);
          this.options.push({
            value: response.data.data[i].name,
          });
        }
      });
    },

    BookingSubmit() {
      if(localStorage.token == undefined){
        window.$(".close").click();
        this.$swal.fire({ icon: "error", title: "Sorry! you are not looged in",footer: '<a href data-toggle="modal" data-target="#LoginForm" class="text-info">Click to Login</a>' });
        return false;
      }
      this.form.post("/api/booking",{
          headers: { Authorization: `Bearer ${localStorage.token}` }
        })
        .then(response => {
          this.form.reset();
          window.$(".close").click();
          this.$swal.fire({ icon: "success", title: "Booking Successfull!! We will contact you soon !!" });
        })
        .catch(error => {
          this.$swal.fire({icon:'error',title:"Please provide valide details"});
          this.handleError(error);
        });
    },

  }
};
</script>
