<template>
  <!--************************************************
      Author: @Manas
  ****************************************************-->
  <section class="d-flex flex-row justify-content-between customCard card card-1" style="background: white !important">
    <div class="MainRow">
      <div class="d-flex flex-column justify-content-start align-items-start mainRow1">
        <p class="hotelName">Hotel Name</p>
        <p class="locName">Delhi</p>
        <div class="d-flex stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <p class="amenP"><i class="fas fa-bed mr-2"></i> Superior Room Twin Beds</p>
        <p class="amenP"><i class="fas fa-wind mr-2"></i> Air Condition</p>
        <p class="amenP"><i class="fas fa-warehouse mr-2"></i> Banquet Hall</p>
        <p class="amenity">Amenities</p>
       <!-- <button class="bookBtn" @click="$router.push('/hotel-detail')">BOOK</button> -->
        <button class="bookBtn">BOOK</button>
      </div>
      <div class="detailsRow">
        <p class="guests">10 Rooms</p>
        <p class="price">Rs. 1,000/-</p>
        <p class="taxes">+ Rs.537 Taxes & Fees</p>
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
            <div class="d-flex justify-content-center align-items-center">
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
  </section>
</template>

<script>
import  booking  from "@/front/components/Booking.vue";
import VueSlickCarousel from "vue-slick-carousel";
import { Form, HasError } from "vform";

export default {
  name: "HotelRoom",
  components: {
    booking,
    VueSlickCarousel,
    Form
  },
  data() {
    return {
      hotel_data: null,
      apiFailed: false,
      searchForm: new Form({
        location: '',
        rooms: '',
        room_type: '',
        guests: ''
     }),
    };
  },   
  watch: {
  },
  mounted() {
  },
  beforeCreate(){
  },
  created(){
    this.getHotels();
  },
  methods: {
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
  width: 230px;
  height: 170px;
  margin-bottom: 10px;
}
.expDetailImgSmall{
  width:  50px;
  height: 50px;
}
.customCard{
  border: 1px solid #8080804d !important;
  border-radius: 0px;
  height: 270px;
  padding: 10px;
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
  font-size: 14px;
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
  font-size: 14px;
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
  font-size: 25px;
  font-weight: 500;
}
.taxes{
  font-size: 14px;
  font-weight: 400;
  color: #2c2929;
}
.perRoom{
  font-size: 13px;
  font-weight: 400;
  color: #2c2929;
}
</style>
