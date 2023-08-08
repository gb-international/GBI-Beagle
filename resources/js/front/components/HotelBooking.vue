<template>
  <!--************************************************
      Author:@Manas
  ****************************************************-->
  <div class="booking-form grey-form" v-if="!loading">
    <p class="font-weight-bold text-dark text-capitalize p-0 m-0">{{title | CapitalizeString}}</p>
    <p v-if="first_form">Please select the booking dates.</p>
    <form class="form" method="POST" @submit.prevent="BookingSubmit">
      <div class="row" v-if="first_form">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="startdate">CheckIn Date</label>
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
            <label for="end_date">CheckOut Date</label>
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
            <label for="number_of_person">Number of Guests</label>
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
                  <h5 class="modal-title">Guests</h5>
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

        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label for="occupancy">Occupancy Type</label>
            <select
              class="form-control"
              v-model="form.room_type"
              :class="{ 'is-invalid': form.errors.has('room_type') }"
              required
            >
              <option v-for="(occ, i) in room_list" :value="occ" :key="i">
                {{ occ }}
              </option>
            </select>
            <has-error :form="form" field="room_type"></has-error>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="form-group">
            <label for="meal_plan">Meal Plan</label>
            <select
              class="form-control"
              v-model="form.meal_plan"
              :class="{ 'is-invalid': form.errors.has('meal_plan') }"
              required
            >
              <option v-for="(occ, i) in meal_list" :value="occ" :key="i">
                {{ occ }}
              </option>
            </select>
            <has-error :form="form" field="meal_plan"></has-error>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="form-group">
            <label for="room_category">Room Category</label>
            <select
              class="form-control"
              v-model="form.room_category"
              :class="{ 'is-invalid': form.errors.has('room_category') }"
              required
            >
              <option v-for="(occ, i) in roomCat_list" :value="occ" :key="i">
                {{ occ }}
              </option>
            </select>
            <has-error :form="form" field="room_category"></has-error>
          </div>
        </div>
      </div>

      <div class="text-center">

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
  props: ["title", "n_guests", "n_rooms", "n_room_type", "n_hotel_price", "n_hotel_id"],
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
      room_list: ["Single", "Double", "Triple", "Quad"],
      meal_list: ["No Meals", "Breakfast", "Breakfast + 1 Meal", "All 3 meals"],
      roomCat_list: ["Normal", "Twin Bed", "Single Bed", "Deluxe"],
      form: new Form({
        user_id: "",
        start_date: "",
        end_date: "",
        person: 2,
        adults: 2,
        children: 0,
        infants: 0,
        room: 1,
        room_type: "",
        meal_plan: "",
        customer_id: "",
        hotel_id: "",
        price: "",
        room_category: ""
      }),

      customize_btn: true,
      back_btn: false,
      book_btn: true,

      first_form: true,
      second_form: false,
      groupAlert: false,
      showPersonModal: false,
      people: 2,
      loading: true,
    };
  },
  watch: {
    "form.city_id": function () {
      this.sightseeingData(this.form.city_id);
    },
  },

  mounted() {
    this.form.room = this.n_rooms;
    this.form.person = this.n_guests;
    this.form.room_type = this.n_room_type;
    this.form.hotel_id = this.n_hotel_id;
    this.form.price = this.n_hotel_price;
    this.loading = false;
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
    down() {
      if (this.form.noofday > 1) {
        this.form.noofday = this.form.noofday - 1;
      }
    },
    up() {
      this.form.noofday = this.form.noofday + 1;
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
      var user = this.$cookies.get('user');
      console.log(user)
      this.form.user_id = user.id;
      this.form
        .post("/api/hotel-booking", {
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
