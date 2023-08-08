<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div class="row mt-35">
    <div class="col-lg-4 col-md-6 col-12 newCardList" v-for="(itinerary,index) in list" :key="index">
      <div @click="$router.push(`/explore-detail/${itinerary.id}`)" class="card-1" style="cursor: pointer">
        <div class="image-col">
          <figure v-lazyload class="image__wrapper">
            <ImageSpinner class="image__spinner" />
            <img
              class="image__item"
              :src="itinerary.photo"
              :data-url="itinerary.photo"
              :alt="itinerary.title"
            />
          </figure>
        </div>
        <div class="cardtext-col text-left pl-1 pr-1">
          <p class="m-0 pl-10 fw-b text-capitalize mt-2" style="font-size: 18px">{{itinerary.title | sortlength(30,"") | CapitalizeString }}{{itinerary.title.length > 30 ? '...' : ''}}</p>
          <p class="pl-10 mb-2" style="font-size: 16px">{{itinerary.noofdays}} Days Tour</p>
          <div class="d-flex flex-column pl-10">
            <p class="priceText mt-2" style="font-size: 19.5px; font-weight: 600; margin-bottom: 0px !important;  color: #4a4343;">₹{{(itinerary.price).toLocaleString()}}</p>
            <p class="personText" style="font-size: 15px; font-weight: 400; color: grey; margin-top: -6px;">per person</p>
          </div>
          <div class="d-flex flex-row justify-content-between pb-2 mt-2">
            <!-- Price & Icons -->
              <div class="pl-10 pt-1">
                  <div class="card-icon float-left p-0 mr-1" v-if="itinerary.hotel_type != '0'">
                    <img :src="$gbiAssets+'/images/icons/Itinerary_hotel_icon.svg'" class="explore-icon-width filter-gray">
                    <br />
                  </div>
                  <div class="card-icon float-left p-0 mr-1" v-if="itinerary.train == 1">
                    <img :src="$gbiAssets+'/images/icons/Itinerary_train_icon.svg'" class="explore-icon-width filter-gray">
                    <br />
                  </div>
                  <div class="card-icon float-left p-0 mr-1"  v-if="itinerary.bus =='1'">
                    <img :src="$gbiAssets+'/images/icons/Itinerary_bus_icon.svg'" class="explore-icon-width filter-gray">
                    <br />
                  </div>
                  <div class="card-icon float-left p-0" v-if="itinerary.flight == '1'">
                    <img :src="$gbiAssets+'/images/icons/Itinerary_flight_icon.svg'" class="explore-icon-width filter-gray">
                    <br />
                  </div>
                  <div class="card-icon float-left p-0 mr-1" v-if="itinerary.food != '0'">
                    <img :src="$gbiAssets+'/images/icons/Itinerary_lunch_icon.svg'" class="explore-icon-width filter-gray">
                    <br />
                  </div>
              </div>
            <!-- End Price & Icons -->
            <!-- Rating & Book Button -->
            <div class="mr-10 mt-2">
              <button type="button" class="btn bookbtn-custom">BOOK</button>
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
  }
};
</script>

<style scoped>
.filter-gray{
    filter: invert(25%) sepia(7%) saturate(497%) hue-rotate(314deg) brightness(94%) contrast(88%);

}
.fw-b {
    font-weight: 600;
}
</style>
