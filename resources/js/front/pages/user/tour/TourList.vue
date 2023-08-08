<!--************************************************
      Author:@Manas
  ****************************************************-->

<template>
  <section class="container">
    <h1 class="trip-heading">TRIPS</h1>
    <div class="custom-flex">
      <div class="mr-5 icons" :style="iconSelected == 'all' ? 'border-bottom: 2px solid #00c4c4' : ''" @click="changeIcon('all')">
        <img :src="$gbiAssets+'/TripIcons/all_trip_mobile.png'" class="trip-icon">
        All Trips
      </div>
      <div class="mr-5 icons" :style="iconSelected == 'upcoming' ? 'border-bottom: 2px solid #00c4c4' : ''" @click="changeIcon('upcoming')">
        <img :src="$gbiAssets+'/TripIcons/upcoming_trip_mobile.png'" class="trip-icon">
        Upcoming Trips
      </div>
      <div class="mr-5 icons" :style="iconSelected == 'pending' ? 'border-bottom: 2px solid #00c4c4' : ''" @click="changeIcon('pending')">
        <img :src="$gbiAssets+'/TripIcons/pending_trip_mobile.png'" class="trip-icon">
        Pending Trips
      </div>
      <div class="mr-5 icons" :style="iconSelected == 'completed' ? 'border-bottom: 2px solid #00c4c4' : ''" @click="changeIcon('completed')">
        <img :src="$gbiAssets+'/TripIcons/completed_trip_mobile.png'" class="trip-icon">
        Completed Trips
      </div>
      <div class="mr-5 icons" :style="iconSelected == 'cancelled' ? 'border-bottom: 2px solid #00c4c4;' : ''" @click="changeIcon('cancelled')">
        <img :src="$gbiAssets+'/TripIcons/canceld_trip_mobile.png'" class="trip-icon">
        Cancelled Trips
      </div>  
    </div>
    <div class="custom-flex mt-3">
      <button class="cusButton" :class="sltBtn == 'All' ? 'btnSelect' : '' " @click="btnChange('All')">All</button>
      <button class="cusButton" :class="sltBtn == 'Paid' ? 'btnSelect' : '' " @click="btnChange('Paid')">Paid</button>
      <button class="cusButton" :class="sltBtn == 'Unpaid' ? 'btnSelect' : '' " @click="btnChange('Unpaid')">Unpaid</button>
      <button class="cusButton" :class="sltBtn == 'Partial' ? 'btnSelect' : '' " @click="btnChange('Partial')">Partial</button>
    </div>
    <tourList v-if="tours" :list="tours" />
    <div v-else class="row card-titles">
      <div class="col-sm-4"  v-for="(index) in 6" :key="index">
        <cardLoader />
      </div>
    </div>
  </section>
</template>
 
<script>
import TourCard from "@/front/components/tour/TourCard";
import InchargeTourCard from '@/front/components/tour/InchargeTourCard';
import tourList from "@/front/components/userTourList";
import cardLoader from '@/front/components/loaders/cardLoaderExplore.vue';

export default {
  name: "Tour-list",
  components: { tourcard: TourCard,InchargeTourCard,tourList,cardLoader },
  data() {
    return {
      tours: null,
      formShow: false,
      userinfo: "",
      travel_code: "",
      iconSelected: 'all',
      sltBtn: 'All',
    };
  },
  mounted() {
    this.userData();
    this.tourListData();
  },
  methods: {
    btnChange(val){
      this.sltBtn = val;
    },
    changeIcon(val){
      this.iconSelected = val;
    },
    tourListData() {

      console.log(this.userinfo)

      if(this.userinfo.client_type == 'teacher' || this.userinfo.client_type == 'student'){
        var data = {'school_id':this.userinfo.school_id, 'travel_code': this.travel_code};
        this.$api.POST("/api/tour-list", data).then((res) => {
          console.log(res); 
          this.tours = res;
          console.log(this.tours.itinerary)
        });
      }
      else if(this.userinfo.client_type == 'corporate'){
        var data = {'company_id':this.userinfo.company_id, 'travel_code': this.travel_code};
        this.$api.POST("/api/corp-tour-list", data).then((res) => {
          console.log(res);
          this.tours = res;
          console.log(this.tours.itinerary)
          /*if (res.length == 0) {
            this.formShow = true;
          } else {
            this.tours = res;
          }*/
        });
        /*if (this.tours.length == 0) {
          this.formShow = false;
        }*/
      }      
    },

    UserTourSave() {
      var data = { travel_code: this.travel_code };
      this.$api
        .POST("/api/tour-travel-save", data)
        .then((response) => {
          if (response == "error") {
            this.$swal.fire({
              icon: "error",
              title: "Try again",
              text: "Please enter valid travel code!",
            });
          } else {
            this.$swal.fire(
              "Valid Code",
              "Check your tour details.",
              "success"
            );
            this.tourListData();
          }
        })
        .catch((error) => {
          this.handleError(error);
        });
    },

    userData() {
      this.userinfo = this.$cookies.get("user");
      if (this.userinfo.status == 0) {
        this.$router.push("/user-information");
        return false;
      }
      /*if (this.userinfo.change_password == 0) {
        this.$swal.fire(
          "warning",
          "Please change your password for security purpose !!! <br>",
          "warning"
        );
      }*/
    },
  },
};
</script>

<style scoped>
.custom-flex {
  display: flex;
  align-content: center;
  flex-direction: row;
  font-size: 18px;
  font-weight: 400;
  padding-top: 1.5vh !important;
}
.trip-heading{
  font-size: 25px;
  font-weight: 500;
  padding-top: 4vh;
}
.icons{
  cursor: pointer;
  padding: 5px 10px;
}
.cusButton {
  height: 42px;
  width: 120px;
  padding: 0px 30px 0px 30px;
  border: 1px solid #464444;
  font-size: 17px !important;
  font-weight: 400 !important;
  color: #464444;
  display: block;
  margin-right: 15px;
  border-radius: 20px;
  background: white;
  outline: none;
}
.btnSelect{
  background: #00c4c4 !important;
  color: white !important;
  border: none !important;
}
</style>
