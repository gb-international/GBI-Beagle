<template>
  <div class="w-100">
     <!-- show payment button to only teacher at first 
     if teacher has selected payment mode then show to user -->
    <div
      class="bg-cover text-white tour_list_card mt-3"
      :style="{ backgroundImage: `url('/uploadimage/${tour.itinerary.detail_photo}')` }"
    >
      <div class="container pt-4 font-weight-bold">
        
        <div class="row">
          <div class="col-sm-8">
            <p class="font-italic">
              <span class="display-4 font-weight-normal">Tour to</span>
              <small>({{ tour.tour_start_date }} - {{ tour.tour_end_date }})</small>
            </p>
            <p class="lead font-weight-normal">{{ tour.itinerary.title }}</p>
          </div>

          <div class="col-sm-4 text-center mb-10 mt-5">
            <button class="btn btn-light" v-if="tour.paid_button == 'show'" @click="payTour(tour.tour_id)">Pay Now</button>
            <!-- <router-link v-if="tour.paid_button == 'show'" :to="`/tour-payment/${tour.tour_id}`" class="btn btn-light">PAY NOW</router-link> -->

            <img v-if="tour.payment == 'success'" class="w-45" src="/images/icons/paid.png" />
          </div>
        </div>

        <div class="row text-center">
          <div class="col p-0">
            <!-- <div class="text-center bg-transparent-card p-t-15 pb-15 text-white" 
            v-if="tour.payment == 'pending'">
                <img src="/images/icons/viewitinerary.png" class="w-20 mr-1">View Itinerary
            </div> -->
            <div class="text-center link bg-transparent-card p-t-15 pb-15 text-white link" @click="showTourDetail(tour.tour_id)">
                <img src="/images/icons/viewitinerary.png" class="w-20 mr-1"> View Itinerary
              </div>

          </div>
          <div class="col p-0">
            <router-link :to="`/group-member/${tour.tour_id}`">
              <div class="text-cente bg-transparent-card p-t-15 pb-15 ml-1 text-white">
                <img src="/images/icons/viewmemberlist.png" class="w-20 mr-1"> Group Members
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tour", "userinfo"],
  data() {
    return {};
  },
  methods:{
    showTourDetail(tour_code){
      this.$cookies.set('tour_code',tour_code);
      this.$router.push('/tour-detail');
    },
    payTour(tour_id){
      this.$store.commit('PAYMENT_TOUR_DATA',{'tour_id':tour_id});
      this.$router.push('/tour-payment');
    }
  }
};
</script>