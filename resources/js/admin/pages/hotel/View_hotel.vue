<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout backurl="/hotel-list">
    <template #viewdata>
      <div class="row pl-3">
        <div class="col-sm-4">
          <h5>Name</h5>
          <p>{{ viewData.name }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Email</h5>
          <p>{{ viewData.email }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Phone Number</h5>
          <p>{{ viewData.phoneno }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Hotel Star</h5>
          <p>{{ viewData.type }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Address</h5>
          <p>{{ viewData.address }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Room</h5>
          <p>{{ viewData.room }}/-</p>
        </div>
        <div class="col-sm-4">
          <h5>Api Single</h5>
          <p>{{ viewData.api_single }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Api Double</h5>
          <p>{{ viewData.api_double }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Api Triple</h5>
          <p>{{ viewData.api_triple }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Api Quad</h5>
          <p>{{ viewData.api_quad }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Mapai Single</h5>
          <p>{{ viewData.mapi_single }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Mapai Double</h5>
          <p>{{ viewData.mapi_double }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Mapai Triple</h5>
          <p>{{ viewData.mapi_triple }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Mapai Quad</h5>
          <p>{{ viewData.mapi_quad }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Cpai Single</h5>
          <p>{{ viewData.cpai_single }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Cpai Double</h5>
          <p>{{ viewData.cpai_double }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Cpai Triple</h5>
          <p>{{ viewData.cpai_triple }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Cpai Quad</h5>
          <p>{{ viewData.cpai_quad }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Created At</h5>
          <p>{{ viewData.created_at }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Updated At</h5>
          <p>{{ viewData.updated_at }}</p>
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
      client_view: [],
    };
  },
  mounted() {
    this.$store.dispatch(
      "getEditData",
      `/api/hotel/${this.$route.params.id}/edit`
    );
  },
  computed: {
    viewData() {
      return this.$store.getters.getEditData; // Fill the form with the data
    },
  },
};
</script>