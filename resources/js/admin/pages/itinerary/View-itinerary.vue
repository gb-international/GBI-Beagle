<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout>
    <template #viewdata>
      <div class="row pl-3">
        <div class="col-sm-3">
          <h5>Source</h5>
          <p>{{ itineraryData.source }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Destination</h5>
          <p>{{ itineraryData.destination }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Number of Days</h5>
          <p>{{ itineraryData.noofdays }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Tour Type</h5>
          <p>{{ itineraryData.tourtype }}</p>
        </div>

        <div class="col-sm-12">
          <h5>Title</h5>
          <p>{{ itineraryData.title }}</p>
        </div>
        <div class="col-sm-12">
          <h5>Description</h5>
          <div>
            <p class="li-padding-18" v-html="itineraryData.description"></p>
          </div>
        </div>
        <!-- This div will show the itinerary days and its description -->
        <div
          class="col-sm-12"
          v-for="data in itineraryData.itinerarydays"
          :key="data.id"
        >
          <hr />
          <div class="row">
            <div class="col-sm-12">
              <h4>
                <strong>Day {{ data.day }}</strong>
              </h4>
              <h5>Title</h5>
              <p>{{ data.day_source }} - {{ data.day_destination }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <h5>Description</h5>
              <p class="li-padding-18" v-html="data.day_description"></p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </view-layout>
</template>

<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";

export default {
  name: "ViewItinerary",
  components: {
    "view-layout": ViewLayout,
  },
  data() {
    return {
      day: 0,
      itineraryData: [],
    };
  },

  created() {
    this.getData();
  },
  methods: {
    getData(){
      var api = `/api/itinerary/${this.$route.params.id}`;
      axios.get(api).then((response) => {
        this.itineraryData = response.data; // add data to the itineraryData
      });
    }
  },
};
</script>