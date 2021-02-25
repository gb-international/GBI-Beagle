<template>
  <div class="container">
    <div class="row text-right">
      <button
        class="btn btn-info float-right mt-2"
        data-toggle="modal"
        data-target="#codeModal"
      >Add Tour Code</button>
      <!-- The Modal -->
      <div class="modal fade" id="codeModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <!-- Modal body -->
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <form class="form" method="post" @submit.prevent="UserTourSave()">
                <div class="form-group">
                  <label for="tour_code">Travel Code</label>
                  <input
                    type="text"
                    class="form-control input-border"
                    placeholder="Enter travel code"
                    v-model="travel_code"
                    required
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn profile_button">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="tours">
      <div class="row" v-for="tour in tours" :key="tour.id">
        
        <tourcard :tour="tour" :userinfo="userinfo"/>
        
      </div>
    </div>
  </div>
</template>

<script>
import TourCard from './tour-card';

export default {
  name: "Tour-list",
  components:{ tourcard:TourCard},
  data() {
    return {
      tours: [],
      formShow: false,
      userinfo: "",
      travel_code: "",
    };
  },
  mounted() {
    if (this.$cookies.get('access_token') == null) {
      this.$router.push("/");
    }
    this.userData();
    this.tourListData();
  },

  methods: {
    tourListData() {
      var data = [];
      this.$api.POST("/api/tour-list", [])
        .then((response) => {
          if (response.length == 0) {
            this.formShow = true;
          } else {
            this.tours = response;
          }
        });

        if(this.tours.length == 0){
          this.formShow = false;
        }

    },

    UserTourSave() {
      var data = { travel_code: this.travel_code };
      this.$api.POST("/api/tour-travel-save", data)
        .then((response) => {
          // this.alldata = response.data;
          if (response == "error") {
            this.$swal.fire({
              icon: "error",
              title: "Try again",
              text: "Please enter valid travel code!",
            });
          } else {
            this.$swal.fire(
              "Valid Code",
              "Check your tour details.",
              "success"
            );
            this.tourListData();
          }
        })
        .catch((error) => {
          this.handleError(error);
        });
    },

    userData() {
      this.userinfo = this.$cookies.get('user');
      if (this.userinfo.status == 0) {
        this.$router.push("/user-information");
        return false;
      }

      if(this.userinfo.change_password == 0){
        this.$swal.fire(
          "warning",
          "Please change your password for security purpose !!! <br>",
          "warning"
        );
      }
      
    },
  },
};
</script>
