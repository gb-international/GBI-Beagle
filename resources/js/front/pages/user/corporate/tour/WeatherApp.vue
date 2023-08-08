<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div class="content">
    <h3 class="text-center mb-35">WEATHER REPORT</h3>
    <div class="weather-parent bg-weather text-white" v-if="current.main">
      <div class="row">
        <div class="col-sm-6">
          <h3>
            <img :src="`http://openweathermap.org/img/w/${current.weather[0].icon}.png`" class="w-45" />Today
          </h3>
          <small>{{ toDayDate() }}</small>
        </div>
        <div class="col-sm-6 text_right">
          <h2 class="degree">
            {{ RemoveDecimal(current.main.temp) }}
            <sup>&#8451;</sup>
          </h2>
          <div class="select-city">
            <select class="minimal text-white" v-model="cityName">
              <option v-for="city in cityList" :key="city" :value="city">{{ city }}</option>
            </select>
          </div>
          <small>{{ current.name }}, {{ current.sys.country }}</small>
          <br />
          <small>Feels like {{ RemoveDecimal(current.main.feels_like) }}</small>.
          <small> Sunset {{ dateToString (current.sys.sunset) }}</small>
        </div>
      </div>
      <div class="row p-20" v-if="forcast.list">
        <div class="col">
          <p class="text-center p-1">Weather Forcast</p>
        </div>

        <VueSlickCarousel :arrows="true" v-bind="settings" class="w-100">
          <div class="weather_card" v-for="list in forcast.list" :key="list.dt">
            <div class="data">
              <div class="text-center">
                <small>{{ tConvert(list.dt_txt.split(" ")[1]) }}</small>
                <img class="img img-circle w-45" :src="`http://openweathermap.org/img/w/${list.weather[0].icon}.png`" />
                <p>
                  {{ RemoveDecimal(list.main.temp) }}
                  <sup>&#8451;</sup>
                </p>
              </div>
            </div>
            <p class="text-center">{{ ForcastDateConvert(list.dt_txt.split(" ")[0]) }}</p>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  props: ["cityList"],
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        dots: false,

        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          }
        ]
      },
      current: [],
      forcast: [],
      cityName:''
    };
  },
  mounted() {
    this.cityName = this.cityList[0];
  },
  watch:{
    cityName:function(value){
      this.currentWeather(this.cityName);
      this.forcastWeather(this.cityName);
    }
  },
  methods: {
    CityChange(event){
      console.log(event);
    },
    currentWeather: function(city) {
      var api ="/api/current-weather/"+city;
      fetch(api)
        .then(response => response.text())
        .then(contents => (this.current = JSON.parse(contents)))
        .catch(() =>
          console.log("Can’t access " + api + " response. Blocked by browser?")
        );
    },
    forcastWeather: function(city) {
      var api = "/api/forcast-weather/"+city;
      fetch(api)
        .then(response => response.text())
        .then(contents => (this.forcast = JSON.parse(contents)))
        .catch(() =>
          console.log("Can’t access " + api + " response. Blocked by browser?")
        );
    },
    ForcastDateConvert(date) {
      var d = new Date(date);
      var newdate = d.toDateString();
      return newdate.split(d.getFullYear())[0];
    },

    dateToString(date) {
      var date = new Date(date * 1000);
      return date.toLocaleTimeString();
    },
    toDayDate() {
      var d = new Date();
      return d.toDateString();
    },
    RemoveDecimal(data) {
      return Math.trunc(data);
    },

    tConvert(time) {
      time = time
        .toString()
        .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      var time = time.join(""); // return adjusted time or original string
      return time.replace(":00:00", " ");
    }
  }
};
</script>
