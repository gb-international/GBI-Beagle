<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout backurl="/tours">
    <template #viewdata>
      <div class="row pl-3" v-if="tour_view.itinerary">
        <div class="col-sm-6">
          <h5>Itinerary Title</h5>
          <p>{{ tour_view.itinerary.title }}</p>
        </div>
        <div class="col-sm-4">
          <h5>School Name</h5>
          <p>{{ tour_view.school.school_name }}</p>
        </div>

        <div class="col-sm-2">
          <h5>Tour Code</h5>
          <p>{{ tour_view.tour.tour_id }}</p>
        </div>
        <br />
        <div class="col-sm-3">
          <h5>School Travel Code</h5>
          <p>{{ tour_view.tour.travel_code }}</p>
        </div>

        <div class="col-sm-3">
          <h5>Tour Start Date</h5>
          <p>{{ tour_view.tour.tour_start_date }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Tour End Date</h5>
          <p>{{ tour_view.tour.tour_end_date }}</p>
        </div>
        <div class="col-sm-2">
          <h5>Tour Price</h5>
          <p>{{ tour_view.tour.tour_price }}/-</p>
        </div>
      </div>
    </template>
  </view-layout>
</template>

<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
export default {
  name: "ViewTour",
  components: {
    "view-layout": ViewLayout,
  },
  data() {
    return {
      tour_view: [],
    };
  },
  created() {
    this.tourData();
    console.log('hi');
  },
  methods: {
    tourData() {
      axios.get(`/api/tour/${this.$route.params.id}`).then((response) => {
        this.tour_view = response.data;
        console.log(this.tour_view);
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>