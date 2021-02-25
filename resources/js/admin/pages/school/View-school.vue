<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout backurl="/schools">
    <template #viewdata>
      <div class="row pl-3">
        <div class="col-sm-3">
          <h5>Name</h5>
          <p>{{ client_view.school_name }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Street</h5>
          <p>{{ client_view.street }}</p>
        </div>
        <div class="col-sm-3">
          <h5>City Name</h5>
          <p>{{ client_view.city_name }}</p>
        </div>
        <div class="col-sm-3">
          <h5>State Name</h5>
          <p>{{ client_view.state_name }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Country Name</h5>
          <p>{{ client_view.country_name }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Pincode</h5>
          <p>{{ client_view.pincode }}/-</p>
        </div>
        <div class="col-sm-3">
          <h5>Finance Email</h5>
          <p>{{ client_view.finance_email_id }}</p>
        </div>

        <div class="col-sm-3">
          <h5>Principal Email</h5>
          <p>{{ client_view.principal_email_id }}</p>
        </div>

        <div class="col-sm-3">
          <h5>Mobile</h5>
          <p>{{ client_view.mobile }}</p>
        </div>

        <div class="col-sm-3">
          <h5>Created At</h5>
          <p>{{ client_view.created_at }}</p>
        </div>

        <div class="col-sm-3">
          <h5>Updated At</h5>
          <p>{{ client_view.updated_at }}</p>
        </div>
      </div>
      <hr />
      <h5>Tour History :</h5>
      <div class="row pl-3" v-if="client_view.tours">
        <div
          class="col-sm-4"
          v-for="(tour, index) in client_view.tours"
          :key="tour.id"
        >
          <h5>Tour ({{ index + 1 }})</h5>
          <p>
            <router-link :to="`/booked-tour/10`">{{
              tour.tour_id
            }}</router-link>
          </p>
        </div>
      </div>
    </template>
  </view-layout>
</template>

<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
export default {
  name: "View",
  components: {
    "view-layout": ViewLayout,
  },
  data() {
    return {
      client_view: [],
    };
  },
  mounted() {
    this.schoolData();
  },
  methods: {
    schoolData() {
      axios.get(`/api/school/${this.$route.params.id}`).then((response) => {
        this.client_view = response.data;
        console.log(response);
      });
    },
  },
};
</script>