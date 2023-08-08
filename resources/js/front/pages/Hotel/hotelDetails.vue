<template>
  <!--************************************************
      Author: @Manas
  ****************************************************-->
<section class="d-flex flex-column justify-content-center" style="background: white !important">
  <!-- Row 1 -->
  <div class="d-flex justify-content-center align-items-start mainRow1 container" style="background: white !important">
    <div class="p-2 d-flex flex-column expDetCol1">
        <img 
          :src="selectedPhoto"
          loading="lazy"
          alt="itinerary"
          class="expDetailImg"
        >
        <div class="p-2">
          <VueSlickCarousel v-bind="settings" :dots="true" :arrows="false">
            <div v-for="index in 10" :key="index" @click="changePhoto(photo)">
              <img 
                :src="photo"
                loading="lazy"
                alt="itinerary"
                class="expDetailImgSmall"
                >
            </div>
          </VueSlickCarousel>
        </div>

      <div class="custom-div mt-4">
        <div class="custom-flex mt-2">
          <div class="icons" :style="iconSelected == 'Safety' ? 'border-bottom: 2px solid #00c4c4' : ''" @click="changeIcon('Safety')">
            Safety
          </div>
          <div class="icons" :style="iconSelected == 'Rooms' ? 'border-bottom: 2px solid #00c4c4' : ''" @click="changeIcon('Rooms')">
            Rooms
          </div>
          <div class="icons" :style="iconSelected == 'Amenities' ? 'border-bottom: 2px solid #00c4c4' : ''" @click="changeIcon('Amenities')">
            Amenities
          </div>
          <div class="icons" :style="iconSelected == 'Policies' ? 'border-bottom: 2px solid #00c4c4' : ''" @click="changeIcon('Policies')">
            Policies
          </div>
          <div class="icons" :style="iconSelected == 'Location' ? 'border-bottom: 2px solid #00c4c4;' : ''" @click="changeIcon('Location')">
            Location
          </div>
          <div class="icons" :style="iconSelected == 'Property' ? 'border-bottom: 2px solid #00c4c4;' : ''" @click="changeIcon('Property')">
            Property
          </div>
          <div class="icons" :style="iconSelected == 'Similar' ? 'border-bottom: 2px solid #00c4c4;' : ''" @click="changeIcon('Similar')">
            Similar
          </div>
        </div>
      </div>
      <!-- <div class="itineraryDiv">
        <div class="singleItneraryDivMain" v-for="data in icon_list" :key="data" @click="changeIcon(data)">
          <div class="singleItneraryDiv d-flex justify-content-between">
            <p>{{data}}</p>
            <i :class="iconSelected == data ? 'fas fa-sort-up mt-2' : 'fas fa-sort-down' "></i>
          </div>
          <div v-if="iconSelected == data" class="singleItneraryDiv2">
             <div v-if="iconSelected == 'Rooms'" class="mx-3 my-3">
              <Rooms class="mb-2"/>
              <Rooms />
            </div>
            <div v-if="iconSelected == 'Amenities'" class="mx-3 my-3">
              <div class="d-flex justify-content-around">
                <p class="amenP"><i class="fas fa-bed mr-2"></i> Superior Room Twin Beds</p>
                <p class="amenP"><i class="fas fa-wind mr-2"></i> Air Condition</p>
                <p class="amenP"><i class="fas fa-warehouse mr-2"></i> Banquet Hall</p>
              </div>
              <p class="amenity">Amenities</p>
            </div>
            <div v-else style="margin: 20vh 2vw;">

            </div>
          </div>
        </div>
      </div> -->

      <div class="custom-div2">
        <div v-if="iconSelected == 'Rooms'" class="mx-3 my-3">
          <Rooms class="mb-2"/>
          <Rooms />
        </div>
        <div v-if="iconSelected == 'Amenities'" class="mx-3 my-3">
          <div class="d-flex justify-content-around">
            <p class="amenP"><i class="fas fa-bed mr-2"></i> Superior Room Twin Beds</p>
            <p class="amenP"><i class="fas fa-wind mr-2"></i> Air Condition</p>
            <p class="amenP"><i class="fas fa-warehouse mr-2"></i> Banquet Hall</p>
          </div>
          <p class="amenity">Amenities</p>
        </div>
        <div v-else style="margin: 20vh 2vw;">

        </div>
      </div>

    </div>
    <div class="expDetCol2Main">
      <div class="expDetCol2">
        <div class="d-flex justify-content-start align-items-center priceSingleDiv">
          <p><b>₹11,000 x 1 day</b></p>
          <p class="ml-auto p2">₹11,000</p>
        </div>
        <div class="d-flex justify-content-start align-items-center priceSingleDiv">
          <p>Total Basic Cost</p>
          <p class="ml-auto p2">₹11,000</p>
        </div>

        <!-- Coupon Div -->
        <div class="d-flex flex-column justify-content-start couponDivMain">
          <div class="d-flex justify-content-start couponDiv">
            <p>GBIHOTEL</p>
            <p class="ml-auto p2">- ₹2,000</p>
          </div>
          <div class="d-flex justify-content-start couponEnterDiv">
            <input type="text">
            <button class="btn btnCpn">Add</button>
          </div>
        </div>
        <!-- End Coupon Div -->

        <div class="d-flex justify-content-start align-items-center priceSingleDiv">
          <p>Taxes</p>
          <p class="ml-auto p2">₹1,000</p>
        </div>
        <!-- <div class="d-flex justify-content-start align-items-center priceSingleDiv">
          <p>TCS(0%)</p>
          <p class="ml-auto p2">₹0</p>
        </div> -->
        <div class="d-flex justify-content-start align-items-center grandTotalDiv">
          <p class="d-flex flex-column justify-content-start align-items-center" style=" margin-top: 5px; margin-right: 3px;">Grand Total
            <span class="smallP">(Incl. all taxes)</span>
          </p>
          <p class="ml-auto p2">₹10000</p>
        </div>
      </div>
      <button class="btn btnPay">Book Now</button>
    </div>
  </div>

  <!-- Mob Grand Total -->
  <div class="d-flex justify-content-between align-items-center grandTotalMob">
    <div class="d-flex flex-column justify-content-start align-items-start">  
      <p>Grand Total</p>
      <span class="smallP">(Incl. all taxes)</span>
      <p class="p2">₹10000</p>
    </div>
    <button class="btn btnConfirm ml-auto">Book Now</button>
  </div>

</section>
  
</template>

<script>
import  booking  from "@/front/components/Booking.vue";
import  Rooms  from "@/front/components/hotel/rooms.vue";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "HotelDetail",
  components: {
    booking,
    VueSlickCarousel,
    Rooms
  },
  metaInfo: {
    title: "GBI Hotel Details",
    meta: [
      {
        name: "description",
        content:
          "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button"
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs"
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/resources/hotel-details"
      }
    ]
  },
  data() {
    return {
      selectedPhoto: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg',
      selectedDay: null,
      icon_list: ['Safety', 'Rooms', 'Amenities', 'Policies', 'Location', 'Property', 'Similar'],
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
      },
      day: 0,
      description: "",
      itineraryData: [],
      selected_cities:[],
      city_list:[],
      login:false,
      loading:true,
      photo: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg",
      iconSelected: 'Safety',
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
      let metaInfo = {
        title: 'GBI Explore Destination',
        description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
        keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
        url: 'https://www.gowithgbi.com/resources/hotel-details',
        type: 'website'
      }
      document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
  created(){
    //this.getItinerary();
    let metaInfo = {
        title: this.itineraryData.title,
        description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
        image: this.itineraryData.detail_photo,
        keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
        url: 'https://www.gowithgbi.com/resources/hotel-details',
        type: 'website'
      }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
  methods: {
    changeIcon(val){
      this.iconSelected = val;
    },
    changeItDiv(id){
      if(this.selectedDay == id){
        this.selectedDay = null
      } else{
        this.selectedDay = id
      }
    },
    changePhoto(pic){
      this.selectedPhoto = pic;
    },
    getItinerary(){
      this.$axios.get(`/api/itinerary-view/${this.$route.params.id}`).then((res)=>{
        this.itineraryData = res.data;
        //Save search
        let searches = JSON.parse(localStorage.getItem("itSearches"));
        searches.push(this.itineraryData)
        localStorage.setItem("itSearches", JSON.stringify(searches));

        this.selectedPhoto = this.itineraryData.photo;
        if(this.itineraryData.itinerarydays){
          var data = this.itineraryData.itinerarydays;
          let selected=[];
          this.selected_cities = [];
          if(data){
            this.selected_cities = [];
            for(let i=0;i<data.length;i++){
              selected.push(data[i].day_source);
              selected.push(data[i].day_destination);
            }
          }
          this.selected_cities = [...new Set(selected)];
        }
        this.getRelatedCities(this.itineraryData.destination);
      });
    },
    getRelatedCities(destination){
      this.$axios.get(`/api/related-cities/${destination}`).then((res)=>{
        this.city_list = res.data;
        this.loading = false;
      });
    }
  }
};
</script>

<style scoped>
.amenP{
  font-size: 14px;
  font-weight: 400;
  color: #767676;
}
.amenity{
  margin: 5px 0px;
  color: #00c4c4;
  text-decoration: underline;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}
.icons{
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  padding: 2px 6px;
}
.custom-div{
  display: none;
  margin-top: 26px !important;
  padding-top: 0.2vh !important;
  margin-right: 20px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 2px 7px 0 rgb(0 0 0 / 19%);
}
.custom-div2{
  margin-top: 5px !important;
  padding-top: 0.2vh !important;
  margin-right: 20px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 2px 7px 0 rgb(0 0 0 / 19%);
}
.custom-flex {
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-direction: row;
  font-size: 18px;
  font-weight: 400;
}
.mainRow1{
  margin-top: 20px;
  margin-bottom: 21px;
}
.mainRow2{
  margin-bottom: 17px;
}
.mainRow3{
  margin-bottom: 21px;
}
.expDetailImg{
  width: 100%;
  height: 170px;
  margin-bottom: 10px;
  margin-right: 15px;
}
.expDetailImgSmall{
  width:  45px;
  height: 45px;
}
.expDetCol1{
  width: 100%;
}
.expDetCol2Main{
  display: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);
}
.expDetCol2{
  display: none;
  width: 30%; 
  height: 423px; 
  border-radius: 5px;
  background: white;
}
@media (min-width: 768px) {
  .custom-div {
    display: inline;
  }
  .expDetailImgSmall{
    width:  100px;
    height: 100px;
  }
  .expDetailImg{
    height: 330px;
    margin-bottom: 16.5px;
  }
  .mainRow1{
    margin-top: 35px;
    margin-bottom: 35px;
  }
  .mainRow2{
    margin-bottom: 32px;
  }
  .mainRow3{
    margin-bottom: 35px;
  }
  .rowheadings{
    font-size: 25px !important;
  }
  .iconClass p{
    font-size: 19px !important;;
  }
  .grandTotalMob{
    margin-bottom: 35px !important;
  }
  .grandTotalMob p{
    font-size: 18px !important;
  }
  .grandTotalMob .smallP{
    font-size: 12.5px !important;
  }
  .grandTotalMob .p2{
    margin-top: 5px !important;
    font-size: 20px !important;
  }
  .btnConfirm{
    font-size: 20px !important;
    height: 55px !important;
    width: 200px !important;
  }
}
@media (min-width: 1024px) {
  .grandTotalMob{
    display: none !important;
  }
  .expDetCol2Main{
    display: inline;
  }
  .expDetCol2{
    display: inline;
  }
  .expDetCol1{
    width: 70%;
  }
  .iconClass{
    width: 18% !important;
  }
  .mainRow1{
    margin-top: 55px;
    margin-bottom: 55px;
  }
  .mainRow2{
    padding: 5px 65px;
    margin-bottom: 55px;
  }
  .mainRow3{
    padding: 5px 65px;
    margin-bottom: 55px;
  }
}
.iconMainDiv{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start
}
.iconClass{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  width: 45%;
  margin-right: 15px;
  margin-bottom: 50px;
}
.iconClass img{
  height: 40px;
  width: 40px;
  margin-right: 12px;
}
.iconClass p{
  margin-top: 8px;
  font-size: 14.2px;
  font-weight: 400;
  color: #1d1b1b;
}
.rowheadings{
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #101010;
  font-family: sans-serif;
}
.itineraryDiv{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-content: space-between;
}
.singleItneraryDivMain{
}
.singleItneraryDiv{
  height: 55px; 
  width: 100%; 
  padding: 14px 30px;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);
  background: white;
}
.singleItneraryDiv2{
  height: auto; 
  width: 100%; 
  padding: 16px 30px;
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);
  background: white;
}
.priceSingleDiv{
  padding: 12px 18px !important;
  margin-top: 10px !important; 
  border-bottom: 1px solid #8080806b;
}
.priceSingleDiv p{
  font-size: 15.5px;
  font-weight: 500;
  font-family: sans-serif;
  color: #1d1b1b;
  margin-right: 3px;
}
.priceSingleDiv .p2{
  font-size: 16.2px;
  font-weight: 600;
  font-family: sans-serif;
  color: #1d1b1b;
}
.grandTotalDiv{
  padding: 13px 18px !important;
  border-bottom: 1px solid #8080806b;
  background: #007bff2b
}
.grandTotalMob{
  padding: 18px !important;
  background: #007bff2b;
  margin-bottom: 26.9px !important;
}
.grandTotalMob p{
  font-size: 15px;
  font-weight: 600;
  font-family: sans-serif;
  color: #1d1b1b;
  margin-bottom: 0rem !important;
}
.grandTotalMob .smallP{
  font-size: 10px;
  font-weight: 500;
  font-family: sans-serif;
  color: #1d1b1b;
}
.grandTotalMob .p2{
  margin-top: 5px;
  font-size: 15.7px;
  font-weight: 600;
  font-family: sans-serif;
  color: black;
}
.grandTotalDiv p{
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
  color: #1d1b1b;
}
.grandTotalDiv .smallP{
  font-size: 11px;
  font-weight: 500;
  font-family: sans-serif;
  color: #1d1b1b;
}
.grandTotalDiv .p2{
  margin-top: 6px;
  font-size: 16.7px;
  font-weight: 600;
  font-family: sans-serif;
  color: #1d1b1b;
  color: black;
}
.couponDivMain{
  padding: 12px 18px !important;
  margin-top: 10px !important; 
  border-bottom: 1px solid #8080806b;
}
.couponDiv{
}
.couponDiv p{
  font-size: 15.5px;
  font-weight: 400;
  font-family: sans-serif;
  color: #3490dc;
  margin-right: 3px;
}
.couponDiv .p2{
  font-size: 16.2px;
  font-weight: 500;
  font-family: sans-serif;
  color: #3490dc;
}
.btnCpn{
  color: #fff;
  background-color: #01c5c4;
  border-color: #01c5c4;
  border-radius: 0px;
}
.btnPay{
  color: #fff;
  background-color: #01c5c4;
  border-color: #01c5c4;
  height: 50px;
  width: 100%;
  margin-top: 5px;
  border-radius: 0px;
}
.btnConfirm{
  color: #fff;
  background-color: #01c5c4;
  border-color: #01c5c4;
  height: 45px;
  width: 150px;
  border-radius: 0px;
}
.verticalStep{
  height: 20px;
  width: 1px; 
  background: gray; 
  margin-left: 45px;
}
</style>
