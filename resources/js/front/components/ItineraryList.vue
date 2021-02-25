<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="row mt-35">
    <div class="col-lg-6 col-sm-12 cardlist mb-10" v-for="(itinerary,index) in list" :key="index">
      <router-link :to="`/explore-detail/${itinerary.id}`">
        <div class="image-col">
          <figure v-lazyload class="image__wrapper m-0">
            <ImageSpinner class="image__spinner" />
            <img
              class="image__item"
              :data-url="`/uploadimage/${itinerary.photo}`"
              :alt="itinerary.title"
            />
          </figure>
        </div>
        <div class="cardtext-col text-left">
          <p class="m-0 font-13 pl-10 font-weight-bold">{{itinerary.title | sortlength(35,"")}}</p>
          <p class="font-13 pl-10 mb-10">{{itinerary.noofdays}} Days Tour</p>
          <div class="pt-1 pb-2 pl-10">
            <div class="card-icon float-left p-0" v-if="itinerary.hotel_type != '0'">
              <img src="/images/icons/hotel.png" class="footer-icon-width">
              <br />
              <span>Hotel</span>
            </div>
            <div class="card-icon float-left p-0" v-if="itinerary.train == 1">
              <i class="fas fa-train" aria-hidden="true"></i>
              <br />
              <span>Train</span>
            </div>
            <div class="card-icon float-left p-0"  v-if="itinerary.bus =='1'">
              <img src="/images/icons/bus.png" class="footer-icon-width">
              <br />
              <span>Bus</span>
            </div>
            <div class="card-icon float-left p-0" v-if="itinerary.flight== '1'">
              <img src="/images/icons/flight.png" class="footer-icon-width">
              <br />
              <span>Flight</span>
            </div>
            <div class="card-icon float-left p-0" v-if="itinerary.food != '0'">
              <i class="fas fa-hotel" aria-hidden="true"></i>
              <br />
              <span>utensils</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {};
  }
};
</script>
