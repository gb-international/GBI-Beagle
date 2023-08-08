<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="container">
    <div id="itinerary_detail_list">
      <div v-if="alldata.itinerary" id="roadmap" class="mb-35 w-100">
        <div class="row w-100">
          <div class="col-md-6 offset-md-2">
            <h4>TOUR PATH</h4>
            <ul class="timeline">
              <li v-for="data in itineraryData.itinerarydays" :key="data.id">
                <itinerary-day :itinerary="data" />
              </li>
            </ul>
          </div>
        </div>

        <div class="things-to-carrry mb-35">
          <h3 class="text-center mb-35">THINGS TO CARRY</h3>

          <div class="row align-items-center">
            <div
              class="col-md-4 col-sm-6 col-6 bottom-border border-right mb-bottom"
            >
              <div class="item">
                <img :src="$gbiAssets+'/images/tour/bottel.png'" class="bottel" />
                <p>Water Bottel</p>
              </div>
            </div>
            <div
              class="col-md-4 col-sm-6 col-6 bottom-border border-right mb-bottom"
            >
              <div class="item text-center">
                <img :src="$gbiAssets+'/images/tour/shoes.png'" class="common shoes" />
                <p>Light Shoes</p>
              </div>
            </div>
            <hr />
            <div
              class="col-md-4 col-sm-6 col-6 bottom-border mb-bottom mb-right"
            >
              <div class="item">
                <img :src="$gbiAssets+'/images/tour/tourch.png'" class="common" />
                <p>Tourch</p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 col-6 border-right mb-bottom">
              <div class="item text-center">
                <img :src="$gbiAssets+'/images/tour/towel.png'" class="common" />
                <p>Towel</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-6 border-right">
              <div class="item">
                <img :src="$gbiAssets+'/images/tour/umbrelaa.png'" class="common" />
                <p>Umbrelaa</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-6">
              <div class="item">
                <img :src="$gbiAssets+'/images/tour/jacket.png'" class="common" />
                <p>Jacket</p>
              </div>
            </div>
          </div>
        </div>

        <div class="hotel-section mb-35" v-if="hotelData">
          <h3 class="text-center mb-35">YOU WILL STAY HERE</h3>
          <div class="row justify-content-center">
            <div class="col-sm-4" v-for="hotel in hotelData" :key="hotel.id">
              <hotel-card :hotel="hotel"></hotel-card>
            </div>
          </div>
        </div>

        <div class="airline-section mb-35" v-if="flightData">
          <h3 class="text-center mb-35">AIRLINES DETAILS</h3>
          <hr />
          <div v-for="air in flightData" :key="air.id">
            
            <flight-app
              :list="air.flight_number"
              :flightDate="simpleDate(air.departure)"
            ></flight-app>

          </div>
        </div>

        <div class="map-section mb-35">
          <live-map 
            :start="{ latLng: alldata.startLoc }" 
            :end="{ latLng: alldata.endLoc }" 
            :aSights ="alldata.sights"
          />
        </div>
        <div class="weather-section mb-35">
          <weather-app :cityList="cityList"></weather-app>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItineraryDay from "@/front/components/tour/ItineraryDay";
import WeatherApp from "@/front/components/tour/WeatherApp";
import FlightApp from "@/front/components/tour/FlightApp";
import Maps from "@/front/pages/user/tour/maps";
import HotelCard from "@/front/components/tour/HotelCard";
import { Form, HasError, AlertError } from "vform";
export default {
  name: "Tour-detail",
  components: {
    "has-error": HasError,
    "weather-app": WeatherApp,
    "flight-app": FlightApp,
    "hotel-card": HotelCard,
    "itinerary-day": ItineraryDay,
    "live-map": Maps
  },
  data() {
    return {
      upcoming_list: [],
      current: 3,
      oddclass: false,
      evenclass: true,
      itineraryData: {},
      hotelData: "",
      flightData: [],
      alldata: [],
      cityList: [],
      tour_code:'',
    };
  },

  beforeMount() {
    this.tour_code = this.$cookies.get('tour_code');
    this.tourListData(this.tour_code);
  },

  methods: {
    // timeFormat(date) {
    //   var str = new Date(date).toDateString();
    //   date = new Date(date);
    //   var hours = date.getHours();
    //   var minutes = date.getMinutes();
    //   var ampm = hours >= 12 ? "pm" : "am";
    //   hours = hours % 12;
    //   hours = hours ? hours : 12; // the hour '0' should be '12'
    //   minutes = minutes < 10 ? "0" + minutes : minutes;
    //   var strTime = hours + ":" + minutes + " " + ampm;
    //   return str + " " + strTime;
    // },

    simpleDate(data) {
      // 2020-06-23
      return data.split("T")[0];
    },

    tourListData(id) {
      var data = { travel_id: id };
      this.$api
        .POST("/api/tour-detail", data)
        .then((response) => {
          this.alldata = response;
          //console.log(response);
          this.itineraryData = response.itinerary;
          this.flightData = response.bookedflights;
          this.hotelData = response.bookedhotels;
          this.DestinationCity(this.itineraryData.itinerarydays);
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
    DestinationCity(itineraryData) {
      let city = [];
      for (var i = 0; i < itineraryData.length; i++) {
        city.push(itineraryData[i].day_destination);
      }
      this.cityList = [...new Set(city)];
    },
  },
};
</script>
