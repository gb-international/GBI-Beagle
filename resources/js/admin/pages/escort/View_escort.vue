<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout backurl="/escort-list">
    <template #viewdata>
      <div class="row pl-3">
        <div class="col-sm-3">
          <h5>Name</h5>
          <p>{{ viewData.name }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Email</h5>
          <p>{{ viewData.email }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Phone Number</h5>
          <p>{{ viewData.phoneno }}</p>
        </div>
        <div class="col-sm-3">
          <h5>Salary Per Day</h5>
          <p>{{ viewData.salaryPerday }}/-</p>
        </div>
        <div class="col-sm-3">
          <h5>Address</h5>
          <p>{{ viewData.address }}</p>
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
    this.$store.dispatch("getEditData", `/api/escort/${this.$route.params.id}`);
  },
  computed: {
    viewData() {
      return this.$store.getters.getEditData; // Fill the form with the data
    },
  },
};
</script>