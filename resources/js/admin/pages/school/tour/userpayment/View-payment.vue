<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout>
    <template #viewdata>
      <div class="row pl-3" v-if="tour_view.tour_code">
        <div class="col-sm-4">
          <h5>School Name</h5>
          <p>
            <router-link :to="`/view-school/${tour_view.school_id}`">
              {{ tour_view.school_name }}</router-link
            >
          </p>
        </div>

        <div class="col-sm-4" v-if="tour_view.tour_code != null">
          <h5>Tour Code</h5>
          <p>{{ tour_view.tour_code }}</p>
        </div>
        <br />

        <div class="col-sm-4" v-if="tour_view.amount != null">
          <h5>Tour Price</h5>
          <p>{{ tour_view.amount }}/-</p>
        </div>

        <div class="col-sm-4">
          <h5>User Name</h5>
          <p>
            <router-link :to="`/user/${tour_view.user_id}`">
              {{ tour_view.user_name }}</router-link
            >
          </p>
        </div>

        <div class="col-sm-4">
          <h5>Added By</h5>
          <p>{{ tour_view.added_by }}</p>
        </div>

        <div class="col-sm-4" v-if="tour_view.schoolbankdetail_id != null">
          <h5>School Bank Detail ID</h5>
          <p>{{ tour_view.schoolbankdetail_id }}</p>
        </div>

        <div class="col-sm-4" v-if="tour_view.payment_mode != null">
          <h5>Payment By</h5>
          <p>{{ tour_view.payment_mode }}</p>
        </div>

        <div class="col-sm-4" v-if="tour_view.payment_type != null">
          <h5>Payment Type</h5>
          <p>{{ tour_view.payment_type }}</p>
        </div>
        <div class="col-sm-4" v-if="tour_view.ifsc_code != null">
          <h5>IFSC Code</h5>
          <p>{{ tour_view.ifsc_code }}</p>
        </div>
        <div class="col-sm-4" v-if="tour_view.amount != null">
          <h5>Amount</h5>
          <p>{{ tour_view.amount }}</p>
        </div>

        <div class="col-sm-4" v-if="tour_view.cheque_bank_name != null">
          <h5>Cheque Bank Name</h5>
          <p>{{ tour_view.cheque_bank_name }}</p>
        </div>
        <div class="col-sm-4" v-if="tour_view.date_of_issue != null">
          <h5>Date of Issue</h5>
          <p>{{ tour_view.date_of_issue }}</p>
        </div>

        <div class="col-sm-4" v-if="tour_view.status != null">
          <h5>Status</h5>
          <p>{{ tour_view.status }}</p>
        </div>
        <div class="col-sm-4">
          <h5>Added At</h5>
          <p>{{ tour_view.created_at }}</p>
        </div>

        <div class="col-sm-4" v-if="tour_view.total_tour_price != null">
          <h5>Amount Need to pay</h5>
          <p>{{ tour_view.total_tour_price }}</p>
        </div>

        <div class="col-sm-4" v-if="tour_view.collect_amount != null">
          <h5>Amount Collected</h5>
          <p>{{ tour_view.collect_amount }}</p>
        </div>

        <div class="col-sm-4" v-if="tour_view.payment_type == 'net'">
          <h5>
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
            <tr v-for="(value, key, i) in tour_view.payment_data" :key="i">
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
  name: "ViewTourPaymentUser",
  components: {
    "view-layout": ViewLayout,
  },
  data() {
    return {
      tour_view: [],
      show_json: false,
    };
  },
  created() {
    this.tourData();
  },
  methods: {
    tourData() {
      axios
        .get(`/api/userpayments/${this.$route.params.id}`)
        .then((response) => {
          this.tour_view = response.data;
        });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>