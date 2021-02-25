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
        <img class="back-icon cursor-pointer pl-4" @click="goBack()" src="/assets/front/icons/back.png">
        <div class="container container_admin_body">
          <div class="row">
            <div class="col-sm-4">
              <h6>SCHOOL NAME</h6>
              <p>{{ school.school_name }}</p>
            </div>
            <div class="col-sm-2">
              <h6>PRICE</h6>
              <p>{{ tour.tour_price }}</p>
            </div>

            <div class="col-sm-2">
              <h6>TOUR CODE</h6>
              <p>{{ tour.tour_id }}</p>
            </div>
            <div class="col-sm-2">
              <h6>TOUR START DATE</h6>
              <p>{{ tour.tour_start_date }}</p>
            </div>
            <div class="col-sm-2">
              <h6>TOUR END DATE</h6>
              <p>{{ tour.tour_end_date }}</p>
            </div>
          </div>
          <hr />

          <div class="row m-30 tour_list_block">
            <div class="col-sm-3 mb-3">
              <router-link :to="`/booked-tour-manager/${tour.id}`">
                <img :src="`assets/admin/default/icon/tour-manager.png`" />
              </router-link>
            </div>
            <div class="col-sm-3 mb-3">
              <router-link :to="`/booked-tour-hotel/${tour.id}`">
                <img :src="`assets/admin/default/icon/hotel.png`" />
              </router-link>
            </div>

            <div class="col-sm-3 mb-3">
              <router-link
                :to="`/booked-tour-restaurant/${tour.id}/${tour.tour_id}`"
              >
                <img :src="`assets/admin/default/icon/restaurant.png`" />
              </router-link>
            </div>

            <div class="col-sm-3 mb-3 m-30">
              <router-link :to="`/booked-tour-flight/${tour.id}`">
                <img :src="`assets/admin/default/icon/airlines.png`" />
              </router-link>
            </div>

            <div class="col-sm-3 mb-3 m-30">
              <router-link :to="`/booked-tour-train/${tour.id}`">
                <img :src="`assets/admin/default/icon/train-icon.png`" />
              </router-link>
            </div>

            <div class="col-sm-3 mb-3 m-30">
              <router-link :to="`/booked-tour-bus/${tour.id}`">
                <img :src="`assets/admin/default/icon/bus-icon.png`" />
              </router-link>
            </div>
            <div class="col-sm-3 mb-3 m-30">
              <router-link
                :to="`/booked-tour-student/${school.id}/${tour.tour_id}`"
              >
                <img :src="`assets/admin/default/icon/student.png`" />
              </router-link>
            </div>

            <div class="col-sm-3 mb-3 m-30">
              <router-link :to="`/payments/${school.id}/${tour.tour_id}`">
                <img :src="`assets/admin/default/icon/payment.png`" />
              </router-link>
            </div>

            <div class="col-sm-3 mb-3 m-30">
              <router-link :to="`/foods/${tour.id}/${tour.tour_id}`">
                <img :src="`assets/admin/default/icon/snacks.png`" />
              </router-link>
            </div>

            <div class="col-sm-3 mb-3 m-30" v-if="itinerary">
              <router-link
                :to="`/booked-sightseen/${tour.id}/${tour.tour_id}/${itinerary.id}`"
              >
                <img :src="`assets/admin/default/icon/sightseeing.png`" />
              </router-link>
            </div>
            
            <div class="col-sm-3 mb-3 m-30">
              <router-link
                :to="`/escort-update/${tour.id}/${tour.tour_id}`"
              >
                <img :src="`assets/admin/default/icon/escort_Update.png`" />
              </router-link>
            </div>

          </div>
          <hr />
          <div class="card" v-if="escorts.length > 0">
            <h4>Tour Manager</h4>
            <div class="row" v-for="escort in escorts" :key="escort.id">
              <div class="col-sm-2">
                <label>Name</label>
                <p>{{ escort["escort"].name }}</p>
              </div>
              <div class="col-sm-3">
                <label>Perday Allowance</label>
                <p>{{ escort["escort"].salaryPerday }}</p>
              </div>
              <div class="col-sm-2">
                <label>Contact</label>
                <p>{{ escort["escort"].phoneno }}</p>
              </div>
              <div class="col-sm-3">
                <label>Email</label>
                <p>{{ escort["escort"].email }}</p>
              </div>
              <div class="col-sm-1 p-0">
                <label>Login Link</label>
                <p class="cursor-pointer text-info" @click="sendLink(escort['escort'].phoneno,escort['escort'].name)"><b>Send Link</b></p>
              </div>
              <div class="col-sm-1">
                <a
                  href
                  v-if="$can('delete clients')"
                  class="delete_link"
                  @click.prevent="deleteBookedEscort(escort.id)"
                >
                  <span class="badge badge-danger">
                    <i class="far fa-trash-alt"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="card" v-if="hotel.length > 0">
            <h4>Hotel</h4>
            <div class="row" v-for="hotel in hotel" :key="hotel.id">
              <div class="col-sm-2">
                <label>Name</label>
                <p>{{ hotel["hotel"].name }}</p>
              </div>
              <div class="col-sm-3">
                <label>Address</label>
                <p>{{ hotel["hotel"].address }}</p>
              </div>
              <div class="col-sm-3">
                <label>Contact</label>
                <p>{{ hotel["hotel"].phoneno }}</p>
              </div>
              <div class="col-sm-3">
                <label>Email</label>
                <p>{{ hotel["hotel"].email }}</p>
              </div>

              <div class="col-sm-1">
                <a
                  href
                  v-if="$can('delete clients')"
                  class="delete_link"
                  @click.prevent="deleteBookedHotel(hotel.id)"
                >
                  <span class="badge badge-danger">
                    <i class="far fa-trash-alt"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="card" v-if="restaurant.length > 0">
            <h4>Restaurant</h4>
            <div class="row" v-for="rest in restaurant" :key="rest.id">
              <div class="col-sm-2">
                <label>Name</label>
                <p>{{ rest["restaurant"].name }}</p>
              </div>
              <div class="col-sm-3">
                <label>Address</label>
                <p>{{ rest["restaurant"].address }}</p>
              </div>
              <div class="col-sm-3">
                <label>Contact</label>
                <p>{{ rest["restaurant"].contact_number }}</p>
              </div>
              <div class="col-sm-3">
                <label>Person</label>
                <p>{{ rest["restaurant"].contact_name }}</p>
              </div>

              <div class="col-sm-1">
                <a
                  href
                  v-if="$can('delete clients')"
                  class="delete_link"
                  @click.prevent="deleteBookedRestaurant(rest.id)"
                >
                  <span class="badge badge-danger">
                    <i class="far fa-trash-alt"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="card" v-if="Object.keys(sightseeing).length > 0">
            <h4>Sightseeings </h4>
            <div class="row">
              <div class="col-sm-11">
                <div class="row" v-for="(parent,key,i) in sightseeing" :key="i+i">
                  <div class="col-sm-4">
                    <p>Day {{ ++i }}</p>
                  </div>
                  <div class="col-sm-8">
                    <div
                      class="text-dark"
                      v-for="(single, index) in parent"
                      :key="single.id"
                    >
                      {{ ++index }}. {{ single.sightseeing.name }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-1">
                <a
                  href
                  v-if="$can('delete clients')"
                  class="delete_link"
                  @click.prevent="deleteBookedsightseeing()"
                >
                  <span class="badge badge-danger">
                    <i class="far fa-trash-alt"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="card" v-if="train.length > 0">
            <h4>Train</h4>
            <div class="row" v-for="train in train" :key="train.id">
              <div class="col-sm-2">
                <label>Name</label>
                <p>{{ train["train"].name }}</p>
              </div>
              <div class="col-sm-2">
                <label>Code</label>
                <p>{{ train["train"].code }}</p>
              </div>
              <div class="col-sm-2">
                <label>Price</label>
                <p>{{ train.price }}</p>
              </div>
              <div class="col-sm-3">
                <label>Travel</label>
                <p>{{ train.source }} - {{ train.destination }}</p>
              </div>

              <div class="col-sm-2 text-center">
                <label>PNR</label>
                <br />
                <span
                  class="btn btn-sm btn-primary text-white cursor-pointer mr-1"
                  data-toggle="modal"
                  data-target="#pnrModal"
                  @click="tranportModal(train.id, 'train')"
                  >Add</span
                >
                <router-link
                  :to="`/booked-tour-pnr/${
                    'train/' + train.id + '/' + tour.tour_id
                  }`"
                  class="btn btn-sm btn-info text-white cursor-pointer mr-1"
                  >List</router-link
                >
              </div>

              <div class="col-sm-1 text-center">
                <a
                  href
                  v-if="$can('delete clients')"
                  class="delete_link"
                  @click.prevent="deleteBookedTrain(train.id)"
                >
                  <span class="badge badge-danger">
                    <i class="far fa-trash-alt"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="card" v-if="flight.length > 0">
            <h4>Flight</h4>
            <div class="row" v-for="flight in flight" :key="flight.id">
              <div class="col-sm-2">
                <label>Name</label>
                <p>{{ flight["flight"].name }}</p>
              </div>
              <div class="col-sm-2">
                <label>Seat Type</label>
                <p>{{ flight["flight"].code }}</p>
              </div>
              <div class="col-sm-2">
                <label>Price</label>
                <p>{{ flight.price }}</p>
              </div>
              <div class="col-sm-3">
                <label>Travel</label>
                <p>{{ flight.source }} - {{ flight.destination }}</p>
              </div>

              <div class="col-sm-2 text-center">
                <label>PNR</label>
                <br />
                <span
                  class="btn btn-sm btn-primary text-white cursor-pointer mr-1"
                  data-toggle="modal"
                  data-target="#pnrModal"
                  @click="tranportModal(flight.id, 'flight')"
                  >Add</span
                >
                <router-link
                  :to="`/booked-tour-pnr/${
                    'flight/' + flight.id + '/' + tour.tour_id
                  }`"
                  class="btn btn-sm btn-info text-white cursor-pointer mr-1"
                  >List</router-link
                >
              </div>

              <div class="col-sm-1 text-center">
                <a
                  href
                  v-if="$can('delete clients')"
                  class="delete_link"
                  @click.prevent="deleteBookedFlight(flight.id)"
                >
                  <span class="badge badge-danger">
                    <i class="far fa-trash-alt"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="card" v-if="bus.length > 0">
            <h4>Bus</h4>
            <div class="row" v-for="bus in bus" :key="bus.id">
              <div class="col-sm-2">
                <label>Company Name</label>
                <p>{{ bus["bus"].company_name }}</p>
              </div>
              <div class="col-sm-2">
                <label>Seat Type</label>
                <p>{{ bus["bus"].seat_type }}</p>
              </div>
              <div class="col-sm-2">
                <label>Price</label>
                <p>{{ bus.price }}</p>
              </div>
              <div class="col-sm-3">
                <label>Travel</label>
                <p>{{ bus.source }} - {{ bus.destination }}</p>
              </div>

              <div class="col-sm-2 text-center">
                <label>Bus Number</label>
                <br />
                <span
                  class="btn btn-sm btn-primary text-white cursor-pointer mr-1"
                  data-toggle="modal"
                  data-target="#pnrModal"
                  @click="tranportModal(bus.id, 'bus')"
                  >Add</span
                >
                <router-link
                  :to="`/booked-tour-pnr/${
                    'bus/' + bus.id + '/' + tour.tour_id
                  }`"
                  class="btn btn-sm btn-info text-white cursor-pointer mr-1"
                  >List</router-link
                >
              </div>

              <div class="col-sm-1 text-center">
                <a
                  href
                  v-if="$can('delete clients')"
                  class="delete_link"
                  @click.prevent="deleteBookedBus(bus.id)"
                >
                  <span class="badge badge-danger">
                    <i class="far fa-trash-alt"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--PNR Modal -->
      <div class="modal" id="pnrModal">
        <div class="modal-dialog">
          <div class="modal-content simple-form-bg">
            <div class="modal-body" v-if="modal_pnr">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <p>Enter {{ label }} Number</p>
              <form class="form simple-form">
                <div class="row">
                  <div
                    class="col-sm-6"
                    v-for="(row, index) in total_row"
                    :key="index"
                  >
                    <div class="row mb-2">
                      <div class="col pt-1">{{ ++index }}</div>
                      <div class="col-sm-10">
                        <input
                          class="form-control"
                          type="text"
                          :placeholder="placeholderValue"
                          v-model="row.pnr_number"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-sm-5">
                    <button
                      type="button"
                      class="btn text-white"
                      @click="submitForm()"
                    >
                      SAVE
                    </button>
                  </div>
                  <div class="col-sm-3 pt-2 text-right">Add Row :</div>

                  <div class="col-sm-4">
                    <div class="input-group">
                      <input
                        type="number"
                        class="form-control"
                        v-model="row_input"
                        placeholder="1"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn text-white"
                          type="button"
                          @click="add_row()"
                        >
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "View",
  data() {
    return {
      client_view: [],
      school: [],
      tour: [],
      train: [],
      hotel: [],
      restaurant: [],
      escorts: [],
      bus: [],
      flight: [],
      modal_pnr: false,
      transportId: "",
      transportType: "",
      label: "PNRs",
      row_input: 2,
      tour_code: 0,
      total_row: [],
      placeholderValue: "",
      itinerary: "",
      sightseeing: [],
      counter: 0,
    };
  },
  created() {
    this.getAllData();
    this.labelChange();
  },
  watch: {
    transportType: function () {
      this.labelChange();
    },
  },

  methods: {
    labelChange() {
      if (this.transportType == "bus") {
        this.label = "Buses";
        this.placeholderValue = "Enter Bus Number";
      } else if (this.transportType == "train") {
        this.label = "PNRs";
        this.placeholderValue = "Enter 10 Digits PNR";
      } else {
        this.label = "PNRs";
        this.placeholderValue = "Enter 6 Digits PNR";
      }
    },
    add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.total_row.push({
          transport_id: this.transportId,
          transport_type: this.transportType,
          tour_code: this.tour.tour_id,
          pnr_number: "",
        });
      }
      this.row_input = "";
    },
    tranportModal(id, type) {
      this.total_row = [];
      this.row_input = 2;
      this.transportId = id;
      this.transportType = type;
      this.add_row();
      this.modal_pnr = true;
    },
    sendLink(phoneno,name){
      let data = {'escort_phone_no':phoneno,'name':name};
      axios.post('/api/escort-login-link',data).then(response=>{
        console.log(response);
        this.$toast.fire({
            icon: "success",
            title: "Link sent to the Escort successfully!!!",
          });
      })
    },
    submitForm() {
      for (var i = this.total_row.length - 1; i >= 0; i--) {
        var pnr = this.total_row[i]["pnr_number"];
        if (pnr == "") {
          this.total_row.splice(i, 1);
        }

        if (this.transportType == "train" && pnr.length != 10) {
          this.$toast.fire({
            icon: "error",
            title: "PNR Number should be 10 Digits long !!",
          });
          return false;
        } else if (this.transportType == "flight" && pnr.length != 6) {
          this.$toast.fire({
            icon: "error",
            title: "PNR Number should be 6 Digits long !!",
          });
          return false;
        } else {
        }
      }

      var path = `/api/pnrs`;
      axios
        .post(path, this.total_row)
        .then((response) => {
          this.total_row = [
            {
              transport_id: this.transport_id,
              transport_type: this.transport_type,
              tour_code: this.tour_code,
              pnr_number: "",
            },
            {
              transport_id: this.transport_id,
              transport_type: this.transport_type,
              tour_code: this.tour_code,
              pnr_number: "",
            },
          ];
          this.$toast.fire({
            icon: "success",
            title: "Successfully Added !!!",
          });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
    },
    getAllData() {
      axios.get(`/api/tour/${this.$route.params.id}`).then((response) => {
        if (response.data) {
          this.tour = response.data["tour"];
          this.train = response.data["train"];
          this.hotel = response.data["hotel"];
          this.restaurant = response.data["restaurant"];
          this.escorts = response.data["escort"];
          this.bus = response.data["bus"];
          this.flight = response.data["flight"];
          this.school = response.data["school"];
          this.itinerary = response.data["itinerary"];
          this.sightseeing = response.data["sightseeing"];
        }
      });
    },

    deleteBookedTrain(id) {
      var uri = "api/bookedtrains/" + id;
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
            axios.delete(uri).then((response) => {
              this.getAllData();
            });
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },

    deleteBookedsightseeing() {
      var uri = "api/bookedsightseeings/" + this.tour.tour_id;
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
            axios.delete(uri).then((response) => {
              this.getAllData();
            });
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },

    deleteBookedHotel(id) {
      var uri = "api/bookedhotels/" + id;
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
            axios.delete(uri).then((response) => {
              this.getAllData();
            });
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },

    deleteBookedRestaurant(id) {
      var uri = "api/bookedrestaurants/" + id;
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
            axios.delete(uri).then((response) => {
              this.getAllData();
            });
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },

    deleteBookedEscort(id) {
      var uri = "api/bookedescorts/" + id;
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
            axios.delete(uri).then((response) => {
              this.getAllData();
            });
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },

    deleteBookedFlight(id) {
      var uri = "api/bookedflights/" + id;
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
            axios.delete(uri).then((response) => {
              this.getAllData();
            });
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },
    deleteBookedBus(id) {
      var uri = "api/bookedbuses/" + id;
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
            axios.delete(uri).then((response) => {
              this.getAllData();
            });
            this.$swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },

    goBack() {
      this.$router.push("/tours");
    },
  },
};
</script>