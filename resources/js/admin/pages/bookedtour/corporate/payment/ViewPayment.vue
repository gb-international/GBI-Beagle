<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout>
    <template #viewdata>
      <div class="row pl-3" v-if="tour.tour_code">
        <div class="col-sm-4" v-if="tour.tour_code != null">
          <h5>Tour Code</h5>
          <p>{{ tour.tour_code }}</p>
        </div>

        <div class="col-sm-4" v-if="tour.amount != null">
          <h5>Tour Price</h5>
          <p>{{ tour.amount }}/-</p>
        </div>

        <div class="col-sm-4">
          <h5>User Name</h5>
          <p>
            <router-link :to="`/user/${tour.user_id}`">
              {{ tour.user.name }}</router-link
            >
          </p>
        </div>
        <div class="col-sm-4" v-if="tour.schoolbankdetail_id != null">
          <h5>School Bank Detail ID</h5>
          <p>{{ tour.schoolbankdetail_id }}</p>
        </div>

        <div class="col-sm-4" v-if="tour.payment_mode != null">
          <h5>Payment By</h5>
          <p>{{ tour.payment_mode }}</p>
        </div>

        <div class="col-sm-4" v-if="tour.payment_type != null">
          <h5>Payment Type</h5>
          <p>{{ tour.payment_type }}</p>
        </div>
        <div class="col-sm-4" v-if="tour.fsc_code != null">
          <h5>IFSC Code</h5>
          <p>{{ tour.ifsc_code }}</p>
        </div>
        <div class="col-sm-4" v-if="tour.cheque_bank_name != null">
          <h5>Cheque Bank Name</h5>
          <p>{{ tour.cheque_bank_name }}</p>
        </div>
        <div class="col-sm-4" v-if="tour.date_of_issue != null">
          <h5>Date of Issue</h5>
          <p>{{ tour.date_of_issue }}</p>
        </div>

        <div class="col-sm-4" v-if="tour.status != null">
          <h5>Status</h5>
          <p>{{ tour.status }}</p>
        </div>

        <div class="col-sm-4">
          <h5>Added At</h5>
          <p>{{ tour.created_at }}</p>
        </div>

        <div class="col-sm-4" v-if="tour.payment_data">
          <h5 v-if="tour.payment_type == 'net'">
            <button
              class="btn btn-info text-white"
              @click="show_json = !show_json"
            >
              Payment Details
            </button>
          </h5>
        </div>
      </div>
      <div class="row pl-4" v-if="show_json">
        <table>
          <tbody>
            <tr v-for="(value, key, i) in tour.payment_data" :key="i">
              <td>
                <p class="mr-5">
                  <b>{{ key }} : </b> <i>{{ value }} </i>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </view-layout>
</template>


<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
export default {
  name: "ViewTourStudnetPaymentList",
  components: {
    "view-layout": ViewLayout,
  },
  data() {
    return {
      tour: [],
      show_json: false,
    };
  },
  created() {
    this.tourData();
  },
  methods: {
    tourData() {
      axios
        .get(`/api/bookedusers-view/${this.$route.params.id}`)
        .then((res) => {
          console.log(res);
          this.tour = res.data;
        });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>