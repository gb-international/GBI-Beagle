<template>
  <!--************************************************
      Author: @Manas
  ****************************************************-->
<section class="d-flex flex-column justify-content-center" style="background: white !important" v-if="!loading">
  <!-- Row 1 -->
  <div class="d-flex mainRow1 container justify-content-left align-items-left" style="background: white !important;">
    <div class="mr-2 d-flex flex-column expDetCol1">
        <div>
          <div class="d-flex justify-content-start align-items-center">
            <p class="rowheadingTop">{{itineraryData.title}}</p> <p class="label_">{{itineraryData.tourtype}}</p> 
          </div>
          <p class="days_head">Trip Starting From <span style="color: #f77736">{{selected_cities[0]}}</span> </p>
          <p class="days_head2">{{itineraryData.itinerarydays.length}} Days</p>
          <div class="d-flex align-items-center bread_nav mb-3">
            <router-link :to="`/explore-destination`" class="bread_link br_grey" >Explore Destination</router-link>
            <span><i class="fas fa-chevron-right"></i></span>
            <br_cr class="br_actv">{{itineraryData.title}}</br_cr>
          </div>
          <img 
            :src="$gbiAssets+'/'+selectedPhoto"
            loading="lazy"
            alt="itinerary"
            class="expDetailImg"
          >
        </div>
        <div class="py-2">
          <VueSlickCarousel v-bind="settings" :dots="true" :arrows="false">
            <div v-for="img in itineraryData.itineraryimages" :key="img.id" @click="changePhoto(img.image)">
              <img 
                :src="$gbiAssets+'/'+img.image"
                loading="lazy"
                alt="itinerary"
                class="expDetailImgSmall"
                >
            </div>
          </VueSlickCarousel>
        </div>
    </div>
    <div class="expDetCol2Main ml-2" v-if="itineraryData.price">
      <div class="expDetCol2">
        <div class="d-flex justify-content-start align-items-center priceSingleDiv priceBorder">
          <p><b>₹{{itineraryData.price}} x 1 Pax</b></p>
          <p class="ml-auto p2">₹{{(itineraryData.price).toLocaleString()}}</p>
        </div>
        <div class="d-flex justify-content-start align-items-center priceSingleDiv priceBorder">
          <p>Total Basic Cost</p>
          <p class="ml-auto p2">₹{{(itineraryData.price).toLocaleString()}}</p>
        </div>

        <!-- Coupon Div -->
        <div class="d-flex flex-column justify-content-start couponDivMain">
          <div class="d-flex justify-content-start couponDiv">
            <p>Coupon</p>
            <p class="ml-auto p2">N/A</p>
          </div>
          <div class="d-flex justify-content-start couponEnterDiv">
            <input type="text" v-model="coupon_val">
            <button class="btn btnCpn" @click="couponsAlert(coupon_val)">Add</button>
          </div>
        </div>
        <!-- End Coupon Div -->

        <div class="d-flex justify-content-start align-items-center priceSingleDiv">
          <p>Taxes</p>
          <p class="ml-auto p2">₹{{(itineraryData.price * 5/100).toLocaleString()}}</p>
        </div>
        <!-- <div class="d-flex justify-content-start align-items-center priceSingleDiv">
          <p>TCS(0%)</p>
          <p class="ml-auto p2">₹0</p>
        </div> -->
        <div class="d-flex justify-content-start align-items-center grandTotalDiv" v-if="itineraryData.price">
          <p class="d-flex flex-column justify-content-start align-items-center" style=" margin-top: 5px; margin-right: 3px;">Grand Total
            <span class="smallP">(Incl. all taxes)</span>
          </p>
          <p class="ml-auto p2">₹{{(itineraryData.price * 5/100 + itineraryData.price).toLocaleString()}} </p>
        </div>
      </div>

      <button v-if="!login"
        class="btn btnPay" 
        data-toggle="modal"
        data-target="#bookModal">
          Send Query
      </button>
      <button v-else class="btn btnPay" id="loginButton"
        data-toggle="modal"
        data-target="#LoginForm">
          Send Query
      </button>
    </div>
  </div>

  <!-- Mob Grand Total -->
  <div v-if="itineraryData.price" class="d-flex justify-content-between align-items-center grandTotalMob">
    <div class="d-flex flex-column justify-content-start align-items-start">  
      <p>Grand Total</p>
      <span class="smallP">(Incl. all taxes)</span>
      <p class="p2">₹{{(itineraryData.price * 5/100 + itineraryData.price).toLocaleString()}}</p>
    </div>
    <button v-if="!login"
      class="btn btnConfirm ml-auto" 
      data-toggle="modal"
      data-target="#bookModal">
        Send Query
    </button>
    <button v-else
      class="btn btnConfirm ml-auto"
      data-toggle="modal"
      data-target="#LoginForm"
      id="loginButton"
    >
        Send Query
    </button>
  </div>

      <div class="container mt-2">
        <div class="custom-flex mt-2">
          <div class="tabs" :style="tabSelected == 'Itinerary' ? 'border-bottom: 3px solid #f77736' : ''" @click="changeTab('Itinerary')">
            Itinerary
          </div>
          <div class="tabs" :style="tabSelected == 'Neighbourhood' ? 'border-bottom: 3px solid #f77736' : ''" @click="changeTab('Neighbourhood')">
            Your Neighbourhood
          </div>
          <div class="tabs" :style="tabSelected == 'Encylopedia' ? 'border-bottom: 3px solid #f77736' : ''" @click="changeTab('Encylopedia')">
            Encylopedia
          </div>
          <div class="tabs" :style="tabSelected == 'Policy' ? 'border-bottom: 3px solid #f77736' : ''" @click="changeTab('Policy')">
            Policy
          </div>
        </div>
      </div>

  <!-- Row 2 -->
  <div class="mainRow2 container" v-if="tabSelected == 'Itinerary' " style="margin-top: 4vh">
    
    <div class="row2-card">
    <p class="rowheadings">Your Experience Includes</p>
    <div class="iconMainDiv">
      <div class="iconClass" v-if="itineraryData.hotel_type != '0'">
        <img :src="$gbiAssets + '/images/icons/tour-hotel.svg'" class="svg-pink">
        <p>Hotel</p>
      </div>
      <div class="iconClass" v-if="itineraryData.flight == '1'">
        <img :src="$gbiAssets + '/images/icons/flight.svg'" class="svg-blue">
        <p>Flight</p>
      </div>
      <div class="iconClass" v-if="itineraryData.tourtype == 'International'">
       <img :src="$gbiAssets + '/images/icons/visa_passport.svg'" class="svg-r-blue">
        <p>Passport/Visa</p>
      </div>
      <div class="iconClass" v-if="itineraryData.train == '1'">
        <img :src="$gbiAssets + '/images/icons/train_explore_icon.svg'" class="svg-d-green">
        <p>Train</p>
      </div>
      <div class="iconClass" v-if="itineraryData.bus == '1'">
        <img :src="$gbiAssets + '/images/icons/car-bus.svg'" class="svg-orange">
        <p>Car/Bus</p>
      </div>
      <div class="iconClass" v-if="itineraryData.food == '1'">
        <img :src="$gbiAssets + '/images/icons/food.svg'" class="svg-teal">
        <p>Food</p>
      </div>
      <div class="iconClass">
        <img :src="$gbiAssets + '/images/icons/city-tour.svg'" class="svg-d-blue">
        <p>City Tour</p>
      </div>
      <div class="iconClass">
        <img :src="$gbiAssets + '/images/icons/taxes.svg'" class="svg-green">
        <p>GST</p>
      </div>
      <div class="iconClass">
        <img :src="$gbiAssets + '/images/icons/sights.svg'" class="svg-l-purple">
        <p>Sightseeing</p>
      </div>
      <!-- <div class="iconClass">
        <img :src="$gbiAssets + '/breakfast.png'">
        <p>Breakfast</p>
      </div> -->
    </div>
    </div>

    <div class="ItneraryHeadDiv">
      <div class="py-2 overview"><b>Itinerary Overview</b></div>
      <div class="py-2" v-html="itineraryData.description"></div>
    </div>
    
  </div>

  <div class="mainRow3 container" v-if="tabSelected == 'Itinerary' ">

    <p class="rowheadings">Itinerary</p>
    <div class="itineraryDiv">
      <div class="singleItneraryDivMain" v-for="(data, index) in itineraryData.itinerarydays" :key="data.id">
        <div class="singleItneraryDiv d-flex justify-content-between"  @click="changeItDiv(data.id)" :style="selectedDay == data.id ? 'background-color: #F5EFFF' : 'background-color: #F5F5F5' ">
          <p> <img :src="$gbiAssets + '/images/icons/location-icon.svg'" class="icon-img svg-blue">
          Itinerary : Day {{ data.day}}
          </p>
          <i :class="selectedDay == data.id ? 'fas fa-chevron-up' : 'fas fa-chevron-down mt-1' "></i>
        </div>
        <div v-if="selectedDay == data.id" class="singleItneraryDiv2">
          <div class="py-2" v-html="data.day_description"></div>
           <!-- <div class="row">
            <div class="py-2 col-sm-7" v-html="data.day_description"></div>
             <div class="py-2 col-sm-5">
                <VueSlickCarousel v-bind="settings2" :dots="false" :arrows="false">
                  <div v-for="img in itineraryData.itineraryimages" :key="img.id">
                    <img 
                      :src="$gbiAssets+'/'+img.image"
                      loading="lazy"
                      alt="itinerary"
                      class="expDetailImg2"
                      >
                  </div>
                </VueSlickCarousel>
              </div>
           </div> -->
        </div>
        <div v-if="(itineraryData.itinerarydays.length - 1) !== index" class="verticalStep"></div>
      </div>
    </div>
    
  </div>

  <div class="container mt-4" v-if="tabSelected == 'Blank' ">

      <p class="rowheadings">Encylopedia</p>
      <div class="encylopediaDiv">

        <!-- Icons -->
        <div class="icons-flex-e mt-2">
          <div v-for="(data, index) in selected_cities" :key="index" class="e-icons" :style="citySelected == data ? 'color: #f77736; border-bottom: 2px solid #f77736' : ''" @click="changeCity(data)">
            {{data}}
          </div>
        </div>

        <!-- <div v-if="encyData" class="mt-4" style="margin-bottom: 5vh" v-html='encyData.description'>
        </div> -->

      </div>
        
    </div>

  <!-- Booking Modal -->
    <div class="modal" id="bookModal">
      <div class="modal-dialog">
        <div class="modal-content modal-color">
          <div class="modal-body" v-if="itineraryData.itinerarydays">
            <button type="button" class="close" data-dismiss="modal">&times;</button>

            <booking 
              v-if="loading == false"
              :title="itineraryData.title"
              :selected_cities="selected_cities"
              :city_list="city_list"
              ></booking>

          </div>
        </div>
      </div>
    </div>

    <!-- Neighbourhood -->
     <div class="container mt-4" v-if="tabSelected == 'Blank' ">
       <p class="heading2 mb-4" style="margin-top: 4vh">Explore Neighbourhood</p>

       <!-- <div style="background-color: #f77736; padding: 45px;"> 
            <div style="background-color: white; padding: 35px;">
              <p class="text-center" style="color: black; font-weight: bold; font-size: 20px; font-family: Raleway">Feature Under Development</p>
            </div>
        </div>  -->
        <!-- Icons -->
        <div class="icons-flex mt-2">
          <div class="icons" :style="iconSelected == 'Communication' ? 'color: #f77736' : ''" @click="changeIcon('Communication')">
            Commute
          </div>
          <div class="icons" :style="iconSelected == 'Movie' ? 'color: #f77736' : ''" @click="changeIcon('Movie')">
            Movie
          </div>
          <!-- <div class="icons" :style="iconSelected == 'School' ? 'color: #f77736' : ''" @click="changeIcon('School')">
            School
          </div>
         <div class="icons" :style="iconSelected == 'Bank' ? 'color: #f77736' : ''" @click="changeIcon('Bank')">
            Bank
          </div> -->
          <div class="icons" :style="iconSelected == 'Food' ? 'color: #f77736' : ''" @click="changeIcon('Food')">
            Food
          </div>
          <div class="icons" :style="iconSelected == 'Sightseeing' ? 'color: #f77736' : ''" @click="changeIcon('Sightseeing')">
            Sightseeing
          </div>
        </div>

        <!-- Commute -->
        <div v-if="iconSelected == 'Communication'" style="margin-bottom: 1vh">
          <p class="heading2 mb-4" style="margin-top: 4vh">Commute</p>
        </div>

        <!-- Movie -->
        <div v-if="iconSelected == 'Movie'" style="margin-bottom: 1vh">
          <p class="heading2 mb-4" style="margin-top: 4vh">Movie</p>
        </div> 

        <!-- School 
        <div v-if="iconSelected == 'School'" style="margin-bottom: 1vh">
          <p class="heading2 mb-4" style="margin-top: 4vh">School</p>
        </div> -->

        <!-- Bank 
        <div v-if="iconSelected == 'Bank'" style="margin-bottom: 1vh">
          <p class="heading2 mb-4" style="margin-top: 4vh">Bank</p>
        </div> -->

        <!-- Food -->
        <div v-if="iconSelected == 'Food'" style="margin-bottom: 1vh">
          <p class="heading2 mb-4" style="margin-top: 4vh">Food</p>
        </div> 

        <!-- Sightseeing -->
        <div v-if="iconSelected == 'Sightseeing'" style="margin-bottom: 1vh">
          <p class="heading2 mb-4" style="margin-top: 4vh">Sightseeing</p>
        </div> 


        <div style="margin-bottom: 5vh">
          <GmapMap style="width: 100%; height: 500px;" :zoom="1" :center="{lat: 0, lng: 0}"
              ref="map">
            <GmapMarker v-for="(marker, index) in markers"
              :key="index"
              :position="marker.latLng"
              />
          </GmapMap>
        </div>

      </div>

      <div class="container mt-4" v-if="tabSelected != 'Itinerary' ">
        <div class="mt-4 ndt-s" style="margin-bottom: 5vh;">
          Currently under development
        </div>
      </div>

      

</section>
  
</template>

<script>
import  booking  from "@/front/components/Booking.vue";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "ExploreDetail",
  components: {
    booking,
    VueSlickCarousel
  },
  metaInfo: {
    title: "GBI Explore Destination",
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
        content: "https://www.gowithgbi.com/resources/explore-destination"
      }
    ]
  },
  data() {
    return {
      markers: [],
      coupon_val: '',
      selectedPhoto: '',
      selectedDay: null,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
      },
      settings2: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
      day: 0,
      description: "",
      itineraryData: [],
      selected_cities:[],
      city_list:[],
      login:false,
      loading:true,
      tabSelected: 'Itinerary',
      iconSelected: 'Communication',
      citySelected: '',
      encyData: null,
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
        url: 'https://www.gowithgbi.com/resources/explore-destination',
        type: 'website'
      }
      document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
  created(){
    this.getItinerary();
    let metaInfo = {
        title: this.itineraryData.title,
        description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
        image: this.itineraryData.detail_photo,
        keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
        url: 'https://www.gowithgbi.com/resources/explore-destination',
        type: 'website'
      }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
  methods: {
     generate() {
      const spread = Math.random() + 0.001
      this.center = {
        lat: 1.38 + (Math.random() - 0.5) * spread,
        lng: 103.8 + (Math.random() - 0.5) * spread,
      }
      this.markers = _.range(30)
        .map(m => ({
          latLng: {
            lat: this.center.lat + (Math.random() - 0.5) * spread,
            lng: this.center.lng + (Math.random() - 0.5) * spread,
          }
        }))
    },
    couponsAlert(val){
      if(val){
        return this.$swal.fire("Error", "No Coupons Found", "warning");
      } else {
        return this.$swal.fire("No Value", "Coupon Code Not Entered", "warning");
      }
    },
    changeTab(val){
      this.tabSelected = val;
    },
    changeIcon(val){
      this.iconSelected = val;
    },
    changeCity(val){
      this.citySelected = val;
      //this.encyData = '';
      //if(this.itineraryData.Ency){
        //this.encyData = this.itineraryData.Ency.find(({ state_name }) => state_name === val);
      //}
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
        console.log(this.itineraryData)
        localStorage.setItem("itSearches", JSON.stringify(searches));
        console.log(this.itineraryData.itineraryimages.length)
        if(this.itineraryData.itineraryimages.length<1){
           for(let i=0; i< 7; i++){
              this.itineraryData.itineraryimages[i] = {image: "itinerary_holder.png", id: i+1}
            }
        }
        this.selectedPhoto = this.itineraryData.itineraryimages[0].image;
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
          this.citySelected = this.selected_cities[0];
          //if(this.itineraryData.Ency.length > 1){
            //this.encyData = this.itineraryData.Ency.find(({ state_name }) => state_name === this.selected_cities[0]);
          //}
          console.log(this.selected_cities)
        }
        this.getRelatedCities(this.itineraryData.destination);
      });
    },
    getRelatedCities(destination){
      this.$axios.get(`/api/related-cities/${destination}`).then((res)=>{
        this.city_list = res.data;
        //setTimeout(this.loading = false, 1000)
        this.loading = false;
        
      });
    }
  }
};
</script>

<style scoped>

.row2-card{
  height: auto; 
  width: 100%; 
  padding: 16px 30px;
  font-size: 18px;
  -webkit-box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
        box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
  background: white;
}
.heading2{
 font-size: 17px;
 font-weight: 500;
 color: black;
}
.mainRow1{
  margin-top: 20px;
  margin-bottom: 21px;
}
.mainRow2{
  margin-bottom: 21px;
}
.mainRow3{
  margin-bottom: 21px;
}
.expDetailImg{
  width: 100%;
  height: 260px;
  margin-bottom: 10px;
  margin-right: 15px;
  background-size: cover;
  background-position:50% 50%;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
 -ms-interpolation-mode: nearest-neighbor;   /* IE (non-standard property) */
  object-fit: cover;
  
}
.expDetailImg2{
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  margin-right: 15px;
  background-size: cover;
  background-position:50% 50%;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
 -ms-interpolation-mode: nearest-neighbor;   /* IE (non-standard property) */
  object-fit: cover;
  
}
.expDetailImgSmall{
  width:  40px;
  height: 40px;
  -webkit-box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
        box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
  border-radius: 5px;
  background-size: cover;
  background-position:50% 50%;
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
 -ms-interpolation-mode: nearest-neighbor;   /* IE (non-standard property) */
  object-fit: cover;
  cursor: pointer;
}
.expDetCol1{
  width: 100%;
}
.expDetCol2Main{
  height: 537px;
  width: 360px;
  display: none;
  -webkit-box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
        box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
  margin-top: 115px !important;
}
.expDetCol2{
  display: none;
  width: 30%; 
  height: 423px; 
  border-radius: 5px;
  background: white;
}

.icons{
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  padding: 6px 10px;
  font-family:'Nunito Sans';
}

.e-icons{
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 3px 10px;
  margin-right: 15px;
  font-family:'Nunito Sans';
}

.icons-flex {
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-direction: row;
  font-size: 18px;
  font-weight: 400;
}

.icons-flex-e{
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
  font-size: 18px;
  font-weight: 400;
}

.tabs{
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin-right: 15px;
}

.custom-div{
  display: inline;
  margin-top: 26px !important;
  padding-top: 0.2vh !important;
  margin-right: 20px;
  -webkit-box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
        box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
}
.custom-flex {
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-direction: row;
  font-size: 18px;
  font-weight: 400;
}

@media (min-width: 500px) {
  .expDetailImgSmall{
  width:  30px;
  height: 30px;
}
}

@media (min-width: 600px) {
  .expDetailImgSmall{
    width:  70px;
    height: 70px;
  }
  .tabs{
    font-size: 18px;
    margin-right: 18px;
  }
}

@media (min-width: 768px) {
  .tabs{
    font-size: 20px;
    margin-right: 22px;
  }
  .expDetailImgSmall{
    width:  80px;
    height: 80px;
  }
  .expDetailImg{
    height: 412px;
    margin-bottom: 16.5px;
  }
  .expDetailImg2{
    height: 300px;
    margin-bottom: 16.5px;
  }
  .mainRow1{
    margin-top: 35px;
    margin-bottom: 35px;
  }
  .mainRow2{
    margin-bottom: 35px;
  }
  .mainRow3{
    margin-bottom: 35px;
  }
  .rowheadings{
    font-size: 20px !important;
  }
  .rowheadingTop{
    font-size: 22px !important;
  }
  .iconClass p{
    font-size: 18px !important;
  }
  .grandTotalMob{
    margin-bottom: 2px !important;
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
  .tabs{
    font-size: 20px;
    margin-right: 26px;
  }
  .expDetailImgSmall{
    width:  100px;
    height: 100px;
  }
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
    margin-bottom: 35px;
  }
  .mainRow2{
    margin-bottom: 35px;
  }
  .mainRow3{
    margin-bottom: 35px;
  }
  .label_{
  margin-bottom: 10px;
  font-size: 14px;
  margin-left: 25px;
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
  margin-bottom: 25px;
}
.iconClass img{
  height: 35px;
  width: 35px;
  margin-right: 12px;
}
.iconClass p{
  font-size: 14.2px;
  font-weight: 400;
  color: #1d1b1b;
}
.rowheadingTop{
  font-size: 22Spx;
  font-weight: 600;
  margin-bottom: 10px;
  color: #101010;
  font-family: 'Nunito Sans';
}
.rowheadings{
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #101010;
  font-family: 'Nunito Sans';
}
.days_head{
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2px;
  color: #101010;
  font-family: 'Nunito Sans';
}
.days_head2{
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #101010;
  font-family: 'Nunito Sans';
}
.itineraryDiv{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-content: space-between;
}
.ItneraryHeadDiv{
  height: auto; 
  width: 100%; 
  padding: 16px 30px;
  font-size: 18px;
  font-weight: 400;
  -webkit-box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
        box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
  background: white;
  margin-top: 35px;
  font-family: 'Nunito Sans';
}
.singleItneraryDivMain{
}
.singleItneraryDiv{
  height: 55px; 
  width: 100%; 
  padding: 14px 30px;
  font-size: 18px;
  font-weight: 600;
 -webkit-box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
        box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
  background: white;
  cursor: pointer;
}
.singleItneraryDiv2{
  height: auto; 
  width: 100%; 
  padding: 16px 30px;
  font-size: 18px;
  font-weight: 400;
  -webkit-box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
        box-shadow: 0 0 4px rgba(7, 7, 7, 0.2);
  background: white;
  font-family: 'Nunito Sans';
}
.priceSingleDiv{
  padding: 12px 18px !important;
  margin: 20px 2px !important; 
}
.priceBorder{
  border-bottom: 1px solid #8080806b;
}
.priceSingleDiv p{
  font-size: 15.5px;
  font-weight: 500;
  font-family: 'Nunito Sans';
  color: #1d1b1b;
  margin-right: 3px;
}
.priceSingleDiv .p2{
  font-size: 16.2px;
  font-weight: 600;
  font-family: 'Nunito Sans' ;
  color: #1d1b1b;
}
.grandTotalDiv{
  padding: 13px 18px !important;
  border-bottom: 1px solid #8080806b;
  border-top: 1px solid #8080806b;
  background: #007bff2b
}
.grandTotalMob{
  padding: 18px !important;
  background: #007bff2b;
  margin-bottom: 5px !important;
}
.grandTotalMob p{
  font-size: 15px;
  font-weight: 600;
  font-family: 'Nunito Sans';
  color: #1d1b1b;
  margin-bottom: 0rem !important;
}
.grandTotalMob .smallP{
  font-size: 10px;
  font-weight: 500;
  font-family: 'Nunito Sans';
  color: #1d1b1b;
}
.grandTotalMob .p2{
  margin-top: 5px;
  font-size: 15.7px;
  font-weight: 600;
  font-family: 'Nunito Sans';
  color: black;
}
.grandTotalDiv p{
  font-size: 14px;
  font-weight: 500;
  font-family: 'Nunito Sans';
  color: #1d1b1b;
}
.grandTotalDiv .smallP{
  font-size: 11px;
  font-weight: 500;
  font-family: 'Nunito Sans';
  color: #1d1b1b;
}
.grandTotalDiv .p2{
  margin-top: 6px;
  font-size: 16.7px;
  font-weight: 600;
  font-family: 'Nunito Sans';
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
  font-family: 'Nunito Sans';
  color: #3490dc;
  margin-right: 3px;
}
.couponDiv .p2{
  font-size: 16.2px;
  font-weight: 500;
  font-family: 'Nunito Sans';
  color: #3490dc;
}
.btnCpn{
  color: #fff;
  background-color: #f77736;
  border-color: #f77736;
  border-radius: 0px;
}
.btnPay{
  color: #fff;
  background-color: #f77736;
  border-color: #f77736;
  height: 52px;
  width: 100%;
  margin-top: 5px;
  border-radius: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-weight: 500;
}
.btnConfirm{
  color: #fff;
  background-color: #f77736;
  border-color: #f77736;
  height: 45px;
  width: 150px;
  border-radius: 0px;
}
.verticalStep{
  height: 30px;
  width: 1px;
  margin-left: 45px;
  border-left: 1px dashed #1C75BC;
}
.label_{
  padding: 5px 5px;
  background-color: #f77736;
  color: white;
  font-size: 12px;
  font-family: 'Nunito Sans';
  font-weight: 600;
  width: 100px;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 10px;
  margin-left: 16px;
}
.overview{
   font-family: 'Nunito Sans';
   font-weight: 600;
   font-size: 20px;
   color: #101010;
}
.ndt-s {
    font-family: 'Nunito Sans';
    font-size: 16px;
    font-weight: 600;
    margin-left: 10px;
}
.icon-img {
    height: 30px;
    margin-bottom: 2px;
    margin-right: 12px;
    width: 30px;
}
</style>
