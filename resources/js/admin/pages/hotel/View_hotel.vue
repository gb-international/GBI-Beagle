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
          <p>{{ hotels.name }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Email</h5>
          <p>{{ hotels.email }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Phone Number</h5>
          <p>{{ hotels.phoneno }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Hotel Star</h5>
          <p>{{ hotels.type }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Address</h5>
          <p>{{ hotels.address }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Room</h5>
          <p>{{ hotels.room }}/-</p>
        </div>
        <div class="col-sm-4">
          <h5>Api Single</h5>
          <p>{{ hotels.api_single }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Api Double</h5>
          <p>{{ hotels.api_double }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Api Triple</h5>
          <p>{{ hotels.api_triple }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Api Quad</h5>
          <p>{{ hotels.api_quad }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Mapai Single</h5>
          <p>{{ hotels.mapi_single }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Mapai Double</h5>
          <p>{{ hotels.mapi_double }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Mapai Triple</h5>
          <p>{{ hotels.mapi_triple }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Mapai Quad</h5>
          <p>{{ hotels.mapi_quad }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Cpai Single</h5>
          <p>{{ hotels.cpai_single }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Cpai Double</h5>
          <p>{{ hotels.cpai_double }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Cpai Triple</h5>
          <p>{{ hotels.cpai_triple }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Cpai Quad</h5>
          <p>{{ hotels.cpai_quad }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Created At</h5>
          <p>{{ hotels.created_at }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Updated At</h5>
          <p>{{ hotels.updated_at }}</p>
        </div>
        
        <div class="col-sm-4">
          <h5>Image</h5>
          <p><img :src="hotels.image" class="width-140" /></p>
        </div>

      </div>
    </template>
  </view-layout>
</template>


<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
export default {
  name: "ViewHotel",
  components:{
    "view-layout": ViewLayout,
  },
  data() {
    return {
      hotels: [],
    };
  },
  created() {
    this.hotelView();
  },
  methods: {
    hotelView() {
      axios.get(`/api/hotel/${this.$route.params.id}`).then((res) => {
        this.hotels = res.data;
        console.log(res);
      });
    },
  },
};
</script>