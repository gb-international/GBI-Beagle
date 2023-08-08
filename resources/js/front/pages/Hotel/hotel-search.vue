<template>
  <!--************************************************
      Author: @Manas
  ****************************************************-->
<!-- <errorState :imgName="'explore_destination_500x500.png'" v-if="apiFailed"/>
<section style="background: white !important; padding-top: 20px;" v-else-if="!apiFailed && hotel_data"> -->
<section style="background: white !important; padding-top: 20px;">
  <!-- <div class="card card-1 container mx-auto" style="width: 80vw; height: auto; padding: 5px; margin-bottom: 20px; display: flex; flex-direction: row; content-align: center; justify-content: space-around">
      <div class="my-2 mr-1">
        <input type="text" readonly class="form-control" id="staticEmail2" placeholder="Password">
      </div>
      <div class="my-2 mr-1">
        <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
      </div>
      <div class="my-2 mr-1">
        <input type="text" readonly class="form-control" id="staticEmail2" placeholder="Password">
      </div>
      <div class="my-2 mr-1">
        <input type="text" readonly class="form-control" id="staticEmail2" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary mb-2">Search</button>
  </div> -->
  <section class="customCard card card-1" style="background: white !important" v-for="data in hotel_data" :key="data.id">
    <div class="MainRow">
      <div class="d-flex flex-column justify-content-start align-items-start mainRow1">
        <p class="hotelName">{{data.name}}</p>
        <p class="locName">{{data.city}}</p>
        <div class="d-flex stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p class="amenP"><i class="fas fa-bed mr-2"></i>Superior Room Twin Beds</p>
        <p class="amenP"><i class="fas fa-wind mr-2"></i>Air Condition</p>
        <p class="amenP"><i class="fas fa-warehouse mr-2"></i>Banquet Hall</p>
        <p class="amenity">Amenities</p>
       <!-- <button class="bookBtn" @click="$router.push('/hotel-detail')">BOOK</button> -->
        <button v-if="login" 
          class="bookBtn" 
          data-toggle="modal"
          data-target="#bookModal">
          BOOK
        </button>
        <button v-else
          class="bookBtn"
          data-toggle="modal"
          data-target="#LoginForm"
          id="loginButton"
        >BOOK
        </button>
      </div>
      <div class="detailsRow">
        <p class="guests">{{searchForm.rooms}} Rooms</p>
        <p class="price">Rs. {{data.price}}/-</p>
        <p class="taxes">+ Rs.537 Taxes</p>
        <p class="perRoom">per room / night</p>
      </div>
    </div>
    <!-- Images -->
    <div class="d-flex justify-content-center align-items-center mainRow2" style="background: white !important">
        <div class="d-flex flex-column expDetCol1">
            <img 
              src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
              loading="lazy"
              alt="itinerary"
              class="expDetailImg"
            >
            <div class="expImgSm">
                <div>
                  <img 
                    src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
                    loading="lazy"
                    alt="itinerary"
                    class="expDetailImgSmall"
                    style="margin-right: 10px"
                    >
                </div>
                <div>
                  <img 
                    src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
                    loading="lazy"
                    alt="itinerary"
                    class="expDetailImgSmall"
                    style="margin-right: 10px"
                    >
                </div>
                <div>
                  <img 
                    src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
                    loading="lazy"
                    alt="itinerary"
                    class="expDetailImgSmall"
                    style="margin-right: 10px"
                    >
                </div>
                <div>
                  <img 
                    src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg"
                    loading="lazy"
                    alt="itinerary"
                    class="expDetailImgSmall"
                    >
                </div>
            </div>
        </div>
    </div>
    <!-- Booking Modal -->
    <div class="modal" id="bookModal">
      <div class="modal-dialog">
        <div class="modal-content modal-color">
          <div class="modal-body" v-if="data.name">
            <button type="button" class="close" data-dismiss="modal">&times;</button>

            <booking 
              :title="data.name"
              :n_guests="searchForm.guests"
              :n_rooms="searchForm.rooms"
              :n_room_type="searchForm.room_type"
              :n_hotel_id="data.id"
              :n_hotel_price="data.price"
            ></booking>

          </div>
        </div>
      </div>
    </div>
  </section>
</section>
</template>

<script>
import  booking  from "@/front/components/HotelBooking.vue";
import VueSlickCarousel from "vue-slick-carousel";
import { Form, HasError } from "vform";

export default {
  name: "HotelSearch",
  components: {
    booking,
    VueSlickCarousel,
    Form
  },
  metaInfo: {
    title: "GBI Hotel Search",
    meta: [
      {
        name: "description",
        content:
          "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button"
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI, explore desired hotels,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs"
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/hotel-search"
      }
    ]
  },
  data() {
    return {
      hotel_data: null,
      apiFailed: false,
      login:false,
      searchForm: new Form({
        location: '',
        rooms: '',
        room_type: '',
        guests: '',
     }),
    };
  },   
   watch: {
    '$store.state.token': function() {
      if(this.$store.state.token){
        this.login = true;
      }
    }
  },
  mounted() {
    if (this.$cookies.get('access_token') != null) {
      this.login = true;
    }
  },
  beforeCreate(){
  },
  created(){
    this.getHotels();
  },
  methods: {
    getHotels(){
      this.searchForm.location = this.$cookies.get("hotelSearch_Location");
      this.searchForm.rooms = this.$cookies.get("hotelSearch_rooms");
      this.searchForm.room_type = this.$cookies.get("hotelSearch_room_type");
      this.searchForm.guests = this.$cookies.get("hotelSearch_guests");
      this.searchForm.post("/api/hotel-search").then(response => {
        console.log(response)
        if(!response.data){
          this.apiFailed = true
          return false;
        }
        this.hotel_data = response.data;
        if(response.data.length <= 0){
          this.$swal.fire("Sorry", "No Hotels found.", "info");
          this.$router.push('/explore-destination')
        }
      });
    }
  }
};
</script>

<style scoped>
.MainRow {
  display: flex;
  justify-content: space-between !important;
  width: 100%;
  align-items: center;
}
.expDetailImg{
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.expImgSm{
  display: none;
}
.expDetailImgSmall{
  width:  50px;
  height: 50px;
}
.customCard{
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  border: 1px solid #8080804d !important;
  border-radius: 0px;
  width: 80vw;
  height: auto;
  padding: 10px;
  margin-bottom: 20px;
}
.detailsRow{
  padding: 0px 20px;
  text-align: right;
}
p {
  font-family: Calibri (Body) !important;
}
.mainRow1 p {
    margin-bottom: 5px !important;
}
.detailsRow p{
  margin-bottom: 0px !important;
}
.hotelName{
  font-weight: 600;
  font-size: 16px;
}
.locName{
  font-weight: 400;
  font-size: 16px;
  color: gray;
}
.stars{
  margin-bottom: 20px;
}
.stars i{
  font-size: 18px;
  color: #ffa500;
}
.amenP{
  font-size: 12px;
  font-weight: 400;
  color: #767676;
}
.bookBtn{
    margin: 5px 0px;
    color: white;
    background-color: #00c4c4;
    border-color: #00c4c4;
    padding: 6px 25px 6px 25px;
    width: 95px;
    height: 35px;
    border: 0px;
    font-size: 15px;
    font-weight: 500;
}
.bookBtn:hover{
  box-shadow: 2px 2px grey;
  color: #212529;
}
.amenity{
  margin: 5px 0px;
  color: #00c4c4;
  text-decoration: underline;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}
.guests{
  font-size: 14px;
  font-weight: 500;
}
.price{
  margin-top: 20px;
  font-size: 22px;
  font-weight: 500;
}
.taxes{
  font-size: 13px;
  font-weight: 400;
  color: #2c2929;
}
.perRoom{
  font-size: 13px;
  font-weight: 400;
  color: #2c2929;
}
@media (max-width: 768px) and (min-width: 640px) { 
  .customCard{
    width: 65vw;
  }
}
@media (min-width: 768px){
  .expDetailImg{
    width: 230px;
    height: 170px;
    margin-bottom: 10px;
  }
  .expImgSm{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 1279px ) and (min-width: 768px){ 
  .customCard{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #8080804d !important;
    border-radius: 0px;
    width: 80vw;
    height: 270px;
    padding: 10px;
    margin-bottom: 20px;
  }
}
@media (min-width: 1280px) { 
.customCard{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #8080804d !important;
    border-radius: 0px;
    width: 65vw;
    height: 270px;
    padding: 10px;
    margin-bottom: 20px;
  }
}
@media (min-width: 1536px) { 
.customCard{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #8080804d !important;
    border-radius: 0px;
    width: 50vw;
    height: 270px;
    padding: 10px;
    margin-bottom: 20px;
  }
}
</style>
