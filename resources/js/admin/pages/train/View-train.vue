<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <section class="content">
    <!--************************************************
      Template Type: View Itinerary Deatails
      Author:@Ajay

      ****************************************************-->
    <div class="row justify-content-around">
      <div class="col-md-12">
        <div class="container container_admin_body">
          <div class="card_view">
            <br />
            <div class="row">
              <div class="col-sm-3">
                <h5>Name</h5>
                <p>{{ bus_view.company_name }}</p>
              </div>
              <div class="col-sm-3">
                <h5>Street</h5>
                <p>{{ bus_view.seater }}</p>
              </div>
              <div class="col-sm-3">
                <h5>City Name</h5>
                <p>{{ bus_view.seat_type }}</p>
              </div>
              <div class="col-sm-3">
                <h5>State Name</h5>
                <p>{{ bus_view.price }}</p>
              </div>

              <div class="col-sm-3">
                <h5>Created At</h5>
                <p>{{ bus_view.created_at }}</p>
              </div>

              <div class="col-sm-3">
                <h5>Updated At</h5>
                <p>{{ bus_view.updated_at }}</p>
              </div>
            </div>
            <button
              @click="goBack()"
              class="btn btn-primary itrn_add_btn back_btn"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ViewTrain",
  data() {
    return {
      bus_view: [],
    };
  },
  created() {
    this.busView();
  },
  methods: {
    busView() {
      axios.get(`/api/bus/${this.$route.params.id}`).then((response) => {
        this.bus_view = response.data;
        console.log(this.bus_view);
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>