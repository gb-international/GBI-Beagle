<template>
  <!--************************************************
      Author:@Manas
  ****************************************************-->
  <div class="booking-form grey-form">
    <p class="font-weight-bold text-dark text-capitalize p-0 m-0">{{title | CapitalizeString}}</p>
    <p v-if="first_form">When would you like to go?</p>
    <p v-if="second_form">Please Specify Your Requirements.</p>
    <form class="form" method="POST" @submit.prevent="BookingSubmit">
      <div class="row" v-if="first_form">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="startdate">Start Journy Date</label>
            <input
              type="date"
              class="form-control"
              id="startdate"
              v-model="form.start_date"
              :class="{ 'is-invalid': form.errors.has('start_date') }"
              required
            />
            <has-error :form="form" field="start_date"></has-error>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label for="end_date">End Journy Date</label>
            <input
              type="date"
              class="form-control"
              id="end_date"
              v-model="form.end_date"
              :class="{ 'is-invalid': form.errors.has('end_date') }"
              required
            />
            <has-error :form="form" field="end_date"></has-error>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label for="number_of_person">Number of Person</label>
            <input
              type="text"
              class="form-control"
              id="number_of_person"
              data-toggle="modal"
              data-target="#personsModal"
              @click="showPersonModal = true"
              v-model="people"
              readonly
            />
            <has-error :form="form" field="start_date"></has-error>
          </div>
          <div class="modal" tabindex="-1" role="dialog" id="personsModal" v-if="showPersonModal">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Passengers</h5>
                  <button type="button" class="close" aria-label="Close" @click="showPersonModal = false">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="marginT">
                      <label for="number_of_adults" class="personLables">Adults(>12 years)</label>
                       <fieldset>
                          <input type="button" value="-" class="decrease" @click="decrVal('adults')"/>
                          <input type="passengers" id="incrdcr" v-model="form.adults" readonly/>
                          <input type="button" value="+" class="increase" @click="incrVal('adults')"/>
                       </fieldset>
                    </div>
                    <div class="marginT">
                      <label for="number_of_children" class="personLables">Children(2 to 12 years)</label>
                      <fieldset>
                          <input type="button" value="-" class="decrease" @click="decrVal('children')"/>
                          <input type="passengers" id="incrdcr" v-model="form.children" readonly/>
                          <input type="button" value="+" class="increase" @click="incrVal('children')"/>
                       </fieldset>
                    </div>
                    <div class="marginT">
                      <label for="number_of_infants" class="personLables">Infants(3 days to 2 years)</label>
                     <fieldset>
                          <input type="button" value="-" class="decrease" @click="decrVal('infants')"/>
                          <input type="passengers" id="incrdcr" v-model="form.infants" readonly/>
                          <input type="button" value="+" class="increase" @click="incrVal('infants')"/>
                       </fieldset>
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" @click="savePersons">Confirm</button>
                </div>
              </div>
            </div>
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
              v-model="form.room"
              :class="{ 'is-invalid': form.errors.has('room') }"
              required
            />
            <has-error :form="form" field="start_date"></has-error>
          </div>
        </div>

        <div class="col-sm-12">
          <div class="form-group">
            <label for="occupancy">Occupancy Types</label>
            <select
              class="form-control"
              v-model="form.occupancy_type"
              :class="{ 'is-invalid': form.errors.has('occupancy_type') }"
              required
            >
              <option v-for="(occ, i) in occupancy_list" :value="occ" :key="i">
                {{ occ }}
              </option>
            </select>
            <has-error :form="form" field="occupancy_type"></has-error>
          </div>
        </div>
      </div>

      <div class="row" v-if="second_form">
        <div class="col-sm-12">
          <div class="form-group">
            <label for="cities">Cities</label>
            <multiselect
              :options="city_list"
              :multiple="true"
              track-by="name"
              label="name"
              :close-on-select="true"
              v-model="form.city_id"
              placeholder="Select City"
            ></multiselect>
          </div>
        </div>

        <!-- <div class="col-sm-12">
          <div class="form-group">
            <label for="sightseeing">Places(Sightseeing)</label>
            <multiselect
              v-if="sightseeing_list"
              :options="sightseeing_list"
              :multiple="true"
              track-by="name"
              label="name"
              :close-on-select="true"
              v-model="form.sightseen"
              placeholder="Select Sightseeing"
            ></multiselect>
          </div>
        </div> -->

        <div class="col-sm-12">
          <div class="form-group">
            <label for="transport">Mode of Transport</label>
            <multiselect
              :options="transports"
              :multiple="true"
              :close-on-select="true"
              v-model="form.transport"
              placeholder="Mode of transport"
            ></multiselect>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="form-group">
            <label for="numofday">Number of Days</label>
            <div class="row align-content-center">
              <div class="col">
                <img
                  :src="$gbiAssets+'/images/icons/minus.png'"
                  @click="down()"
                  class="w-40 link"
                />
              </div>

              <div class="col">
                {{ form.noofday }}
              </div>

              <div class="col">
                <img
                  :src="$gbiAssets+'/images/icons/add.png'"
                  @click="up()"
                  class="w-40 link"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <label for="accommodation">Accommodation Preference</label>
          <select
            id="accomodation"
            class="form-control"
            v-model="form.accommodation"
          >
            <option value="2">2 Star</option>
            <option value="3">3 Star</option>
            <option value="4">4 Star</option>
            <option value="5">5 Star</option>
          </select>
        </div>
      </div>
      <div class="text-center">
        <button
          type="button"
          v-if="customize_btn"
          class="btn profile_button"
          @click="secondForm()"
        >
          Customize</button
        ><span class="mr-10"></span>

        <button
          type="button"
          v-if="back_btn"
          class="btn profile_button"
          @click="secondForm()"
        >
          Back</button
        ><span class="mr-10"></span>

        <button type="submit" v-if="book_btn && customize_btn" class="btn profile_button text-capitalize">
          send inquiry
        </button>

        <button type="button" @click.prevent="secondForm()" v-else class="btn profile_button text-capitalize">
          Confirm
        </button>

      </div>
    </form>
  </div>
</template>
<script>
import ModelSelect from "vue-multiselect";
import { Form, HasError, AlertError } from "vform";

export default {
  name: "Booking",
  components: {
    multiselect: ModelSelect,
    "has-error": HasError,
  },
  props: ["list","title","selected_cities","city_list"],
  data() {
    return {
      transports: ["Bus", "Train", "Air"],
      sightseeing_list: "",
      travel_type_list: [
        "Train",
        "AC Bus",
        "Flight",
        "Train",
        "Flight",
        "Train",
        "AC Bus",
      ],
      occupancy_list: ["Single", "Double", "Triple", "Quad"],

      form: new Form({
        state_date: "",
        end_date: "",
        person: 2,
        adults: 2,
        children: 0,
        infants: 0,
        room: 1,
        occupancy_type: "",
        city_id: [],
        sightseen: "",
        transport: "",
        noofday: 1,
        accommodation: 3,
        itinerary_id: "",
      }),

      customize_btn: true,
      back_btn: false,
      book_btn: true,

      first_form: true,
      second_form: false,
      groupAlert: false,
      showPersonModal: false,
      people: 2,
    };
  },
  watch: {
    "form.city_id": function () {
      this.sightseeingData(this.form.city_id);
    },
  },

  created() {
    this.form.itinerary_id = this.$route.params.id;
    this.selectedItineraryCities();
  },
  
  methods: {
    incrVal(data){
        if(data == 'adults'){
          this.form.adults += 1
        } else if(data == 'children'){
          this.form.children +=1
        } else if(data == 'infants'){
          this.form.infants += 1
        }
    },
     decrVal(data){
        if(data == 'adults' && this.form.adults > 0){
          this.form.adults -= 1
        } else if(data == 'children' && this.form.children > 0){
          this.form.children -=1
        } else if(data == 'infants' && this.form.infants > 0){
          this.form.infants -= 1
        }
    },
    savePersons(){
      this.form.person = parseInt(this.form.children) + parseInt(this.form.adults);
      if(this.form.infants > 0){
        this.people =  this.form.person +' + '+ this.form.infants+' Infant(s)';
      } else {
        this.people =  this.form.person;
      }
      this.showPersonModal = false;
      this.checkGroup()
    },
    checkGroup(){
      if(this.form.person >= 10 && !this.groupAlert){
          this.groupAlert = true
          this.$swal.fire({
            icon: "info",
            title: "Group Booking",
            text: "As you are booking for more 10+ people, we have considered this as a group booking."
          });
      }
      else if(this.form.person < 10 && this.groupAlert){
          this.groupAlert = false
        }
    },
    selectedItineraryCities(){
      if(this.city_list.length > 0){
        for(let i = 0;i<this.city_list.length;i++){
          if(this.selected_cities.includes(this.city_list[i].name)){
           this.form.city_id.push(this.city_list[i]); 
          }
        }
      }
    },
    sightseeingData(city) {
      this.$axios.post("/api/city-sightseeing", { list: city })
        .then((response) => {
          this.sightseeing_list = response.data;
        });
    },

    secondForm() {
      if (this.back_btn == false) {
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
    down() {
      if (this.form.noofday > 1) {
        this.form.noofday = this.form.noofday - 1;
      }
    },
    up() {
      this.form.noofday = this.form.noofday + 1;
    },
    cityList() {
      this.$axios.get("/api/city").then((response) => {
        for (var i = 0; i < response.data.data.length; i++) {
          this.options.push({
            value: response.data.data[i].name,
          });
        }
      });
    },

    BookingSubmit() {
      if (this.$cookies.get('access_token') == null) {
        window.$(".close").click();
        this.$swal.fire({
          icon: "error",
          title: "Sorry! you are not looged in",
          footer:
            '<a href data-toggle="modal" data-target="#LoginForm" class="text-info">Click to Login</a>',
        });
        return false;
      }
      this.form.itinerary_id = this.$route.params.id;
      this.form
        .post("/api/booking", {
          headers: { Authorization: `Bearer ${this.$cookies.get('access_token')}` },
        })
        .then((response) => {
          this.form.reset();
          window.$(".close").click();
          this.$swal.fire({
            icon: "success",
            title:"Booking Inquiry Sent",
            text: "We will contact you soon !!",
          });
        })
        .catch((error) => {
          this.$swal.fire({
            icon: "error",
            title: "Please provide valid details",
          });
          this.handleError(error);
        });
    },
  },
};
</script>

<style scoped>
.marginT {
  margin-top: 10px !important;
}
legend {
    padding-bottom: 14px;
    text-align: left;
}
fieldset {
    margin-bottom: 14px;
    padding-bottom: 14px;
}
fieldset, input[type="button"] {
    border: 0;
}
input[type="button"] {
    background: #01c5c4;
    color: #fff;
    cursor: pointer;
    width: 35px;
    height: 35px;
    font-size: 17px;
    border-radius: 20px;
    padding-bottom: 5px;

}
input[type="passengers"] {
    border: 1px solid #F4F3F3;
    height: 40px;
    width: 60%;
    text-align: center;
    outline: 2px solid transparent;
    outline-offset: 2px;
}
.personLables{
  color: grey;
  text-align: center;
  font-weight: 600;
}
.btn-primary{
  background: #01c5c4 !important;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.profile_button{
  background: #01c5c4 !important;
}
</style>
