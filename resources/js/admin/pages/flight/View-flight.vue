<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout backurl="/flight-list">
    <template #viewdata>
      <div class="row pl-3">
        <div class="col-sm-3">
          <h5>Code</h5>
          <p>{{ flight_view.code }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Name</h5>
          <p>{{ flight_view.name }}</p>
        </div>

        <div class="col-sm-3">
          <h5>Created At</h5>
          <p>{{ flight_view.created_at }}</p>
        </div>

        <div class="col-sm-3">
          <h5>Updated At</h5>
          <p>{{ flight_view.updated_at }}</p>
        </div>
      </div>
    </template>
  </view-layout>
</template>


<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
export default {
  name: "View",
  components:{
    "view-layout": ViewLayout,
  },
  data() {
    return {
      flight_view: [],
    };
  },
  created() {
    this.busView();
  },
  methods: {
    busView() {
      axios.get(`/api/flight/${this.$route.params.id}`).then((response) => {
        this.flight_view = response.data;
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>