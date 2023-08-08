<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout backurl="/itinerary-request">
    <template #viewdata>
      <div class="row pl-3">
        <div class="col-sm-3">
          <h5>Source</h5>
          <p>{{ viewData.source }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Destination</h5>
          <p>{{ viewData.destination }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Phone Number</h5>
          <p>{{ viewData.phoneno }}</p>
        </div>
        <div class="col-sm-3">
          <h5>No Of Days</h5>
          <p>{{ viewData.noofday }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Email</h5>
          <p>{{ viewData.email }}</p>
        </div>
        
        <div class="col-sm-3">
          <h5>Request Received At</h5>
          <p>{{ viewData.created_at }}</p>
        </div>

      </div>
    </template>
  </view-layout>
</template>


<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
export default {
  name: "ViewItineraryRequest",
  components: {
    "view-layout": ViewLayout,
  },
  data() {
    return {
      viewData: [],
    };
  },
  mounted() {
    this.schoolData();
  },
  methods: {
    schoolData() {
      axios.get(`/api/itineraryrequst/${this.$route.params.id}`).then((response) => {
        this.viewData = response.data;
        console.log(response);
      });
    },
  },
};
</script>