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
                <span class="underline">
                  <b>Day {{ data.day }}</b>
                </span>
                <span v-if="data.day_source != data.day_destination">
                  <b
                    >{{ data.day_source.toUpperCase() }} -
                    {{ data.day_destination.toUpperCase() }}</b
                  >
                </span>
                <a
                  target="_blank"
                  href="https://www.totoprayogo.com/#"
                  v-else
                  >{{ data.day_source.toUpperCase() }}</a
                >
                <span class="float-right"></span>
                <p v-html="data.day_description"></p>
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
                <img src="/images/tour/bottel.png" class="bottel" />
                <p>Water Bottel</p>
              </div>
            </div>
            <div
              class="col-md-4 col-sm-6 col-6 bottom-border border-right mb-bottom"
            >
              <div class="item text-center">
                <img src="/images/tour/shoes.png" class="common shoes" />
                <p>Light Shoes</p>
              </div>
            </div>
            <hr />
            <div
              class="col-md-4 col-sm-6 col-6 bottom-border mb-bottom mb-right"
            >
              <div class="item">
                <img src="/images/tour/tourch.png" class="common" />
                <p>Tourch</p>
              </div>
            </div>

            <div class="col-md-4 col-sm-6 col-6 border-right mb-bottom">
              <div class="item text-center">
                <img src="/images/tour/towel.png" class="common" />
                <p>Towel</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-6 border-right">
              <div class="item">
                <img src="/images/tour/umbrelaa.png" class="common" />
                <p>Umbrelaa</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-6">
              <div class="item">
                <img src="/images/tour/jacket.png" class="common" />
                <p>Jacket</p>
              </div>
            </div>
          </div>
        </div>

        <div class="hotel-section mb-35" v-if="hotelData">
          <h3 class="text-center mb-35">YOU WILL STAY HERE</h3>
          <div class="row justify-content-center">
            <div class="col-sm-4" v-for="hotel in hotelData" :key="hotel.id">
              <div class="hotel-card">
                <img src="/images/hotel/1590495923.png" />
                <div class="row">
                  <div class="col hotel_info">
                    <div class="rating-hotel">
                      <p>
                        <b>Hotel Name</b>
                        <label>
                          <div class="star-rating">
                            <span v-for="n in max" :key="n.id">&star;</span>
                            <div
                              class="star-rating__current"
                              :style="{
                                width: getRating(hotel.hotel.type) + '%',
                              }"
                            >
                              <span
                                v-for="n in integer(hotel.hotel.type)"
                                :key="n.id"
                                >&starf;</span
                              >
                            </div>
                          </div>
                        </label>
                      </p>
                    </div>

                    <p>
                      {{ hotel.hotel.name }}
                      <label>
                        <b>Check in date</b>
                        : {{ dateFormat(hotel.check_in) }}
                      </label>
                    </p>
                    <p>
                      <b>Days stay</b>
                      : {{ days(hotel.check_in, hotel.check_out) }}
                      <label>
                        <b>Check out date</b>
                        : {{ dateFormat(hotel.check_out) }}
                      </label>
                    </p>
                  </div>
                </div>
              </div>
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
          <h3 class="text-center mb-35">LIVE LOCATION</h3>
          <div class="row">
            <div class="col-sm-3 card"></div>
            <div class="col-sm-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73907005717!2d76.81307299667618!3d28.646677259922765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1590745497079!5m2!1sen!2sin"
                frameborder="0"
                style="border: 0"
                allowfullscreen
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>

        <div class="weather-section mb-35">
          <weather-app :cityList="cityList"></weather-app>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherApp from "./WeatherApp";
import FlightApp from "./FlightApp";
import { Form, HasError, AlertError } from "vform";
export default {
  name: "Tour-detail",
  components: {
    "has-error": HasError,
    "weather-app": WeatherApp,
    "flight-app": FlightApp,
  },
  data() {
    return {
      upcoming_list: [],
      max: 5,
      current: 3,
      oddclass: false,
      evenclass: true,
      itineraryData: {},
      hotelData: "",
      flightData: [],
      alldata: [],
      cityList: [],
    };
  },

  beforeMount() {
    this.tourListData(this.$route.params.id);
  },

  methods: {
    dateFormat(date) {
      return new Date(date).toDateString();
    },

    paymentStatus: function () {
      var data = {
        user_id: this.alldata.user_id,
        tour_code: this.$route.params.id,
      };
      this.$api
        .POST("/api/tour-payment-status", data)
        .then((response) => {
          if (response.status != "success") {
            this.$router.push("/tour-list");
          }
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
    timeFormat(date) {
      var str = new Date(date).toDateString();
      date = new Date(date);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return str + " " + strTime;
    },

    getRating: function (current) {
      return (current / this.max) * 100;
    },
    integer(num) {
      return parseInt(num);
    },
    simpleDate(data) {
      // 2020-06-23
      return data.split("T")[0];
    },

    days(date1, date2) {
      var date1 = new Date(date1);
      var date2 = new Date(date2);
      var diffTime = Math.abs(date2 - date1);
      var diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diff - 1;
    },

    tourListData(id) {
      var data = { travel_id: id };
      this.$api
        .POST("/api/tour-detail", data)
        .then((response) => {
          this.alldata = response;
          this.itineraryData = response.itinerary;
          this.flightData = response.bookedflights;
          this.hotelData = response.bookedhotels;
          this.paymentStatus();
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
