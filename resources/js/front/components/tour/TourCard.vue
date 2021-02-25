<template>
  <div class="w-100">
    <!-- show payment button to only teacher at first 
     if teacher has selected payment mode then show to user -->
    <div
      class="bg-cover text-white tour_list_card mt-3"
      :style="{
        backgroundImage: `url('/uploadimage/${tour.tour.itinerary.detail_photo}')`,
      }"
    >
      <div class="container pt-4 font-weight-bold">
        <div class="row">
          <div class="col-sm-8">
            <p class="font-italic">
              <span class="display-4 font-weight-normal">Tour to</span>
              <small
                >({{ tour.tour.tour_start_date }} -
                {{ tour.tour.tour_end_date }})</small
              >
            </p>
            <p class="lead font-weight-normal">
              {{ tour.tour.itinerary.title }}
            </p>
          </div>
          <div class="col-sm-4 text-center mb-10 mt-5">
            <button
              class="btn btn-light"
              v-if="tour.paid_button == 'show'"
              @click="payTour(tour.tour_code)"
            >
              Pay Now
            </button>
            <img
              v-if="tour.payment == 'success'"
              class="w-45"
              src="/images/icons/paid.png"
            />
          </div>
        </div>

        <div class="row p-0">
          <div class="col-sm-12 p-0">
            <div
              class="text-center link bg-transparent-card p-t-15 pb-15 text-white link"
              v-if="tour.payment == 'success'"
              @click="showTourDetail(tour.tour_code)"
            >
              <img src="/images/icons/viewitinerary.png" class="w-20 mr-1" />
              View Itinerary
            </div>

            <div
              v-else
              class="text-center bg-transparent-card p-t-15 pb-15 text-white"
            >
              <img
                src="/images/icons/viewitinerary.png"
                class="w-20 mr-1"
              />View Itinerary
            </div>
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
  methods: {
    showTourDetail(tour_code) {
      this.$cookies.set("tour_code", tour_code);
      this.$router.push("/tour-detail");
    },
    payTour(tour_id) {
      this.$store.commit('PAYMENT_TOUR_DATA',{'tour_id':tour_id});
      this.$router.push('/tour-payment');
    },
  },
};
</script>