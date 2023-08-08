<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="row mt-35">
    <div class="col-lg-4 col-md-6 col-12 newCardList" v-for="(data,index) in list" :key="index">
      <div @click="showTourDetail(data.tour_id)" class="card-1" style="cursor: pointer">
        <div class="image-col">
          <figure v-lazyload class="image__wrapper">
            <ImageSpinner class="image__spinner" />
            <img
              class="image__item"
              :src="data.itinerary.photo"
              :data-url="data.itinerary.photo"
              :alt="data.itinerary.title"
            />
          </figure>
        </div>
        <div class="cardtext-col text-left pl-1 pr-1">
          <p class="m-0 pl-10 font-weight-bold text-capitalize" style="font-size: 18px" :class="data.itinerary.title.length<=34 ? 'cardPadding' : ''" >{{data.itinerary.title | sortlength(50,"") | CapitalizeString }}</p>
          <p class="pl-10 mb-1" style="font-size: 16px" :class="data.itinerary.title.length<=34 ? '-mt-2' : ''">{{data.itinerary.noofdays}} Days Tour</p>
          <div class="d-flex flex-column pl-10">
            <p class="priceText" style="font-size: 19.5px; font-weight: 550; margin-bottom: 0px !important;  color: #4a4343;">Rs. 10,000/-</p>
            <p class="personText" style="font-size: 15px; font-weight: 400; color: grey; margin-top: -6px;">per person</p>
          </div>
          <div class="d-flex flex-row justify-content-between pb-2 mt-1">
            <!-- Price & Icons -->
              <div class="pl-10">
                  <div class="card-icon float-left p-0" v-if="data.itinerary.hotel_type != '0'">
                    <img :src="$gbiAssets+'/images/icons/Itinerary_hotel_icon.png'" class="explore-icon-width">
                    <br />
                  </div>
                  <div class="card-icon float-left p-0" v-if="data.itinerary.train == 1">
                    <img :src="$gbiAssets+'/images/icons/Itinerary_bus_icon.png'" class="explore-icon-width">
                    <br />
                  </div>
                  <div class="card-icon float-left p-0"  v-if="data.itinerary.bus =='1'">
                    <img :src="$gbiAssets+'/images/icons/Itinerary_bus_icon.png'" class="explore-icon-width">
                    <br />
                  </div>
                  <div class="card-icon float-left p-0" v-if="data.itinerary.flight== '1'">
                    <img :src="$gbiAssets+'/images/icons/Itinerary_flight_icon.png'" class="explore-icon-width">
                    <br />
                  </div>
                  <div class="card-icon float-left p-0" v-if="data.itinerary.food != '0'">
                    <img :src="$gbiAssets+'/images/icons/Itinerary_lunch_icon.png'" class="explore-icon-width">
                    <br />
                  </div>
              </div>
            <!-- End Price & Icons -->
            <!-- Rating & Book Button -->
            <div class="mr-10">
              <!-- <button type="button" class="btn bookbtn-custom">BOOK</button> -->
              <img v-if="data.payment == 'success'" :src="$gbiAssets+'/TripIcons/paid_icon.png'" class="img-custom">
              <img v-else :src="$gbiAssets+'/TripIcons/unpaid_icon.png'" class="img-custom">
            </div>
            <!-- End Rating & Book Button -->

          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {};
  },
  methods: {
    showTourDetail(tour_code) {
      this.$cookies.set("tour_code", tour_code);
      this.$router.push("/tour-detail");
    },
    payTour(tour_id) {
      this.$store.commit('PAYMENT_TOUR_DATA',{'tour_id':tour_id});
      this.$router.push('/tour-payment');
    },
  }
};
</script>
