<template>
  <div class="col-md-12">
    <div
      class="bg-cover text-white tour_list_card mt-3"
      :style="{ backgroundImage: `url('/uploadimage/${tour.tour.itinerary.detail_photo}')` }"
    >
      <div class="container pt-4 font-weight-bold">
        <div class="row">
          <div class="col-sm-8">
            <p class="font-italic">
              <span class="display-4 font-weight-normal">Tour to</span>
              <small>({{ tour.tour.tour_start_date }} - {{ tour.tour.tour_end_date }})</small>
            </p>
            <p class="lead font-weight-normal">{{ tour.tour.itinerary.title }}</p>
          </div>

          <div
            class="col-sm-4 text-center mb-10 mt-5"
            v-if="tour.payment == null || tour.payment.status != 'success'"
          >
            <router-link :to="`/tour-payment/${tour.tour.tour_id}`" class="btn btn-light">PAY NOW</router-link>
          </div>
        </div>

        <div class="row text-center" v-if="userinfo.user_profession == 'teacher'">
          <div class="col p-0">
            <router-link :to="`/tour-detail/${tour.tour.tour_id}`">
              <div class="text-center bg-transparent-card p-t-15 pb-15 text-white">
                <img src="/images/icons/viewitinerary.png" class="w-20 mr-1">View Itinerary
              </div>
            </router-link>
          </div>

          <div class="col p-0">
            <router-link :to="`/group-member/${tour.tour.tour_id}`">
              <div class="text-cente bg-transparent-card p-t-15 pb-15 ml-1 text-white">
                <img src="/images/icons/viewmemberlist.png" class="w-20 mr-1"> Group Members
              </div>
            </router-link>
          </div>
        </div>

        <div class="row text-center" v-if="userinfo.user_profession == 'student'">
          <div class="col p-0">
            <router-link :to="`/tour-detail/${tour.tour.tour_id}`">
              <div class="text-center bg-transparent-card p-t-15 pb-15 text-white">
                <img src="/images/icons/viewitinerary.png" class="w-20 mr-1"> View Itinerary
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
};
</script>