<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout backurl="/front-booking">
    <template #viewdata v-if="booking.user">
      <div class="row pl-3">
        <div class="col-sm-4">
          <h5>User Name</h5>
          <p>
            <router-link :to="`/user/${booking.user.id}`"
              >{{ booking.user.name }} (ID: {{ booking.user.id }})</router-link
            >
          </p>
        </div>

        <div class="col-sm-8">
          <h5>Itinerary</h5>
          <p>
            <router-link :to="`/view-itinerary/${booking.itinerary.id}`">{{
              booking.itinerary.title
            }}</router-link>
          </p>
        </div>
        <div class="col-sm-4">
          <h5>Start Date</h5>
          <p>{{ booking.start_date }}</p>
        </div>

        <div class="col-sm-4">
          <h5>End Date</h5>
          <p>{{ booking.end_date }}</p>
        </div>
        <div class="col-sm-4">
          <h5>No. of Person</h5>
          <p>{{ booking.person }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Rooms</h5>
          <p>{{ booking.room }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Occupancy Type</h5>
          <p>{{ booking.occupancy_type }}</p>
        </div>
        <div class="col-sm-4">
          <h5>No. of Days</h5>
          <p>{{ booking.noofday }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Accomodation</h5>
          <p>{{ booking.accomodation }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Cities</h5>
          <p>{{ booking.city }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Transports</h5>
          <p>{{ booking.transport }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Sightseen</h5>
          <p>{{ booking.sightseen }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Status</h5>
          <label class="label-switch switch-success">
            <input
              type="checkbox"
              class="switch switch-bootstrap status"
              name="status"
              id="status"
              value="1"
              v-model="booking.status"
              @change="upadateStatus"
            />
            <span class="lable"></span>
          </label>
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
      booking: [],
    };
  },

  mounted() {
    var api = `/api/frontbooking/${this.$route.params.id}`;
    axios.get(api).then((response) => {
      this.booking = response.data;
      if (this.booking.status == 0) {
        this.booking.status = false;
      } else {
        this.booking.status = true;
      }
    });
  },
  computed: {},

  methods: {
    upadateStatus(id) {
      var data = { id: this.$route.params.id, status: this.booking.status };
      axios
        .post("/api/frontbooking-status/", data)
        .then((response) => {
          this.$toast.fire({
            icon: "success",
            title: "Tour Status Updated !!!!",
          });
        })
        .catch(() => {});
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>