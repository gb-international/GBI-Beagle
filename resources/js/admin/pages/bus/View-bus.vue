<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout backurl="/bus-list">
    <template #viewdata>
      <div class="row pl-3">
        <div class="col-sm-3">
          <h5>Name</h5>
          <p>{{ bus_view.company_name }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Street</h5>
          <p>{{ bus_view.seater }}</p>
        </div>
        <div class="col-sm-3">
          <h5>City Name</h5>
          <p>{{ bus_view.seat_type }}</p>
        </div>
        <div class="col-sm-3">
          <h5>State Name</h5>
          <p>{{ bus_view.price }}</p>
        </div>

        <div class="col-sm-3">
          <h5>Created At</h5>
          <p>{{ bus_view.created_at }}</p>
        </div>

        <div class="col-sm-3">
          <h5>Updated At</h5>
          <p>{{ bus_view.updated_at }}</p>
        </div>
      </div>
    </template>
  </view-layout>
</template>

<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";

export default {
  name: "ViewBus",
  components: {
    "view-layout": ViewLayout,
  },
  data() {
    return {
      bus_view: [],
    };
  },
  created() {
    this.busView();
  },
  methods: {
    busView() {
      axios.get(`/api/bus/${this.$route.params.id}`).then((response) => {
        this.bus_view = response.data;
      });
    },
  },
};
</script>