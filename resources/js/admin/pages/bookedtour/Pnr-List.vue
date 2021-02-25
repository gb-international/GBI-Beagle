<template>
  <div id="pnrList">
    <div class="row">
      <div class="col-sm-9">
        <h3
          class="text-center pt-2"
          v-if="transport == 'bus'"
        >{{ transport | firstUppercase }} Number History</h3>
        <h3 class="text-center pt-2" v-else>{{ transport | firstUppercase }} PNR History</h3>
      </div>
      <div class="col-sm-3 pt-3">
        <router-link
          :to="`/pnr-users/${$route.params.transport}/${$route.params.id}/${$route.params.tour_id}`"
          class="btn btn-info"
        >Assign PNR to Students</router-link>
      </div>
    </div>

    <hr />
    <div class="flight-detail" v-if="list.length> 0">
      <div class="row">
        <div class="col-sm-6" v-for="(flight,index) in list" :key="flight.id">
          <div class="row">
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                v-model="flight.pnr_number"
                :readonly="index != edit_index"
              />
            </div>
            <div class="col-sm-2">
              <img
                v-if="index != edit_index"
                class="edit"
                :src="`/assets/front/icons/edit.png`"
                @click="edit_row(index)"
              />
              <img
                v-else
                class="edit"
                :src="`/assets/front/icons/update.png`"
                @click="update_row('flight',index)"
              />
              <img
                class="delete"
                :src="`/assets/front/icons/delete.png`"
                @click="delete_row('flight',index,flight.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center" v-else>
      <p>Table is empty..</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PnrList",
  data() {
    return {
      list: {},
      transport: "",
      edit_index: -1,
    };
  },
  mounted() {
    this.getPnr();
    this.transport = this.$route.params.transport;
  },
  methods: {
    getPnr() {
      var api = "/api/pnrs/get";
      var data = {
        transport_id: this.$route.params.id,
        tour_code: this.$route.params.tour_id,
        transport_type: this.$route.params.transport,
      };
      axios
        .post(api, data, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          this.list = response.data;
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
    edit_row(index) {
      this.edit_index = index;
    },
    update_row(type, index) {
      this.UserTourUpdate(this.list[index]);
      this.edit_index = "";
    },

    UserTourUpdate(data) {
      var api = "/api/pnrs/" + data.id;
      axios
        .patch(api, data, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          console.log(response);
          if (response.data == "error") {
            this.$swal.fire({
              icon: "error",
              title: "Try again",
              text: "Please enter valid travel code!",
            });
          } else {
            this.edit_index = -1;
            this.$swal.fire("Success", "PNR updated !!!", "success");
            // this.tourListData();
          }
        })
        .catch((error) => {
          this.handleError(error);
        });
    },
    delete_row(type, index, id) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.value) {
            var api = "/api/pnrs/" + id;
            var data = { id: id };
            axios
              .delete(api, data, {
                headers: { Authorization: `Bearer ${localStorage.token}` },
              })
              .then((response) => {
                this.list.splice(index, 1);
              })
              .catch((error) => {
                this.handleError(error);
              });
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },
  },
};
</script>