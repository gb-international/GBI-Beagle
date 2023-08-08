<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout backurl="/restaurant-list">
    <template #viewdata>
      <div class="row pl-3">
        <div class="col-sm-4">
          <h5>Restaurant Name</h5>
          <p>{{ viewData.name }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Restaurant Address</h5>
          <p>{{ viewData.address }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Contact Person</h5>
          <p>{{ viewData.contact_name }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Contact Number</h5>
          <p>{{ viewData.contact_number }}</p>
        </div>
      </div>
    </template>
  </view-layout>
</template>


<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
export default {
  name: "ViewRestaurant",
  components: {
    "view-layout": ViewLayout,
  },
  data() {
    return {
      client_view: [],
    };
  },
  mounted() {
    this.$store.dispatch(
      "getEditData",
      `/api/restaurants/${this.$route.params.id}/edit`
    );
  },
  computed: {
    viewData() {
      return this.$store.getters.getEditData; // Fill the form with the data
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>