<!--
This Template is for listing for the Hotel profile using function to get the 
data from the api to display the data about the Hotel from the backend .
-->
<template>
  <section class="content">
    <!--************************************************
      Template Type: Reservation List
      Author:@Ajay
    ****************************************************-->
    <div class="row justify-content-around">
      <div class="col-md-12">
        <div class="container container_admin_body">
          <div class="reservation">
            <h5 class="mb-3">
              <img
                class="back-icon cursor-pointer"
                @click="$router.go(-1)"
                src="/assets/front/icons/back.png"
              />
              Escort Update
            </h5>
            <div class="ml-4">
              <div class="ml-1">
                <p><label>Update from Escort</label></p>
                <div class="w-100" v-if="escort.escort">
                  <div class="row">
                    <table class="table">
                      <thead>
                        <th class="border-0">Gender</th>
                        <th class="text-center border-0">Passenger</th>
                        <th class="text-center border-0">Absent Passenger</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="border-0">Male</td>
                          <td class="text-center border-0">
                            {{ escort.total_male }}
                          </td>
                          <td class="text-center border-0">
                            {{ escort.absent_male }}
                          </td>
                        </tr>

                        <tr>
                          <td class="border-0">Female</td>
                          <td class="text-center border-0">
                            {{ escort.total_male }}
                          </td>
                          <td class="text-center border-0">
                            {{ escort.absent_male }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p class="m-0"><label>Comment from Escort</label></p>
                  <p class="m-0">{{ escort.message }}</p>
                  <p class="m-0 mt-3"><label>Escort Name</label></p>
                  <p class="">{{ escort.escort.name }}</p>
                </div>

                <div class="mt-5 text-center" v-else>
                  <p class="text-muted">No Updates from escort</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      escort: "",
    };
  },
  created() {
    this.escortUpdate();
  },
  methods: {
    escortUpdate() {
      axios
        .get(`/api/escortUpdates/${this.$route.params.tour_code}`)
        .then((res) => {
          this.escort = res.data;
        });
    },
    goBack() {
      this.$router.push(`/booked-tour/${this.$route.params.id}`);
    },
  },
};
</script>