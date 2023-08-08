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
    <div class="row">
      <div class="col-md-12 calculator">
        <div class="container container_admin_body">
          <h3 class="text-center">{{ itineraryData.title }}</h3>
          <h4>Total : <input type="text" readonly="" v-model="total" /></h4>
          <!-- Hotel Calculate -->
          <div class="card_calculator">
            <h6>Hotel</h6>
            <form class="form">
              <div class="row">
                <div class="col-sm-12">
                  <div
                    class="row"
                    v-for="(data, index) in hotel_row"
                    :key="data.id"
                  >
                    <div class="col-sm-3">
                      <label>Select Hotel</label>

                      <dropdown-list 
                        :itemList="hotel_list" 
                        v-model="data.hotel_id" 
                        @change="onChange(index, 'hotel',data.hotel_id)" 
                      />


                      <!-- <select
                        class="form-control select-field"
                        v-model="data.hotel_id"
                        @change="onChange(index, $event, 'hotel')"
                      >
                        <option
                          v-for="hotel in hotel_list"
                          :value="hotel.id"
                          :key="hotel.id"
                        >
                          {{ hotel.name }}
                        </option>
                      </select> -->
                    </div>
                    <div class="col-sm-8" v-if="data.hotel_id != ''">
                      <div class="row">
                        <!-- APAI -->
                        <div class="col-sm-2">
                          <label>APAI Single</label>
                          <div
                            class="custom-control custom-checkbox"
                            v-if="data.apai_single != undefined"
                          >
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              :id="index + '1'"
                              name="example1"
                              :value="data.apai_single / 1"
                              v-model="hotel_selected"
                              @click="check($event)"
                            />
                            <label
                              class="custom-control-label"
                              :for="index + '1'"
                              >{{ data.apai_single }}/-</label
                            >
                          </div>
                        </div>

                        <div class="col-sm-2">
                          <label>APAI Double</label>
                          <div class="custom-control custom-checkbox" v-if="data.apai_double != null">
                            <input
                              type="checkbox"
                              
                              class="custom-control-input"
                              :id="index + '2'"
                              name="example1"
                              :value="data.apai_double / 2"
                              v-model="hotel_selected"
                              @click="check($event)"
                            />
                            <label
                              class="custom-control-label"
                              :for="index + '2'"
                              >{{ data.apai_double }}/-</label
                            >
                          </div>
                        </div>

                        <div class="col-sm-2">
                          <label>APAI Triple</label>
                          <div class="custom-control custom-checkbox" v-if="data.apai_triple != null">
                            <input
                              type="checkbox"
                              
                              class="custom-control-input"
                              :id="index + '3'"
                              name="example1"
                              :value="data.apai_triple / 3"
                              v-model="hotel_selected"
                              @click="check($event)"
                            />
                            <label
                              class="custom-control-label"
                              :for="index + '3'"
                              >{{ data.apai_triple }}/-</label
                            >
                          </div>
                        </div>

                        <div class="col-sm-2">
                          <label>APAI Quad</label>
                          <div class="custom-control custom-checkbox" v-if="data.apai_quad != null">
                            <input
                              type="checkbox"
                              
                              class="custom-control-input"
                              :id="index + '4'"
                              name="example1"
                              :value="data.apai_quad / 4"
                              v-model="hotel_selected"
                              @click="check($event)"
                            />
                            <label
                              class="custom-control-label"
                              :for="index + '4'"
                              >{{ data.apai_quad }}/-</label
                            >
                          </div>
                        </div>

                        <!-- MAPAI -->

                        <div class="col-sm-2">
                          <label>MAPAI Single</label>
                          <div class="custom-control custom-checkbox" v-if="data.mapai_single != null">
                            <input
                              type="checkbox"
                              
                              class="custom-control-input"
                              :id="index + '5'"
                              name="example1"
                              :value="data.mapai_single / 1"
                              v-model="hotel_selected"
                              @click="check($event)"
                            />
                            <label
                              class="custom-control-label"
                              :for="index + '5'"
                              >{{ data.mapai_single }}/-</label
                            >
                          </div>
                        </div>

                        <div class="col-sm-2">
                          <label>MAPAI Double</label>
                          <div class="custom-control custom-checkbox" v-if="data.mapai_double != null">
                            <input
                              type="checkbox"
                              
                              class="custom-control-input"
                              :id="index + '6'"
                              name="example1"
                              :value="data.mapai_double / 2"
                              v-model="hotel_selected"
                              @click="check($event)"
                            />
                            <label
                              class="custom-control-label"
                              :for="index + '6'"
                              >{{ data.mapai_double }}/-</label
                            >
                          </div>
                        </div>

                        <div class="col-sm-2">
                          <label>MAPAI Triple</label>
                          <div class="custom-control custom-checkbox" v-if="data.mapai_triple != null">
                            <input
                              type="checkbox"
                              
                              class="custom-control-input"
                              :id="index + '7'"
                              name="example1"
                              :value="data.mapai_triple / 3"
                              v-model="hotel_selected"
                              @click="check($event)"
                            />
                            <label
                              class="custom-control-label"
                              :for="index + '7'"
                              >{{ data.mapai_triple }}/-</label
                            >
                          </div>
                        </div>

                        <div class="col-sm-2">
                          <label>MAPAI Quad</label>
                          <div class="custom-control custom-checkbox" v-if="data.mapai_quad != null">
                            <input
                              type="checkbox"
                              
                              class="custom-control-input"
                              :id="index + '8'"
                              name="example1"
                              :value="data.mapai_quad / 4"
                              v-model="hotel_selected"
                              @click="check($event)"
                            />
                            <label
                              class="custom-control-label"
                              :for="index + '8'"
                              >{{ data.mapai_quad }}/-</label
                            >
                          </div>
                        </div>

                        <!-- CPAI -->

                        <div class="col-sm-2">
                          <label>CPAI Single</label>
                          <div class="custom-control custom-checkbox" v-if="data.cpai_single != null">
                            <input
                              type="checkbox"
                              
                              class="custom-control-input"
                              :id="index + '9'"
                              name="example1"
                              :value="data.cpai_single / 1"
                              v-model="hotel_selected"
                              @click="check($event)"
                            />
                            <label
                              class="custom-control-label"
                              :for="index + '9'"
                              >{{ data.cpai_single }}/-</label
                            >
                          </div>
                        </div>

                        <div class="col-sm-2">
                          <label>CPAI Double</label>
                          <div class="custom-control custom-checkbox" v-if="data.cpai_double != null">
                            <input
                              type="checkbox"
                              
                              class="custom-control-input"
                              :id="index + '10'"
                              name="example1"
                              :value="data.cpai_double / 2"
                              v-model="hotel_selected"
                              @click="check($event)"
                            />
                            <label
                              class="custom-control-label"
                              :for="index + '10'"
                              >{{ data.cpai_double }}/-</label
                            >
                          </div>
                        </div>

                        <div class="col-sm-2">
                          <label>CPAI Triple</label>
                          <div class="custom-control custom-checkbox" v-if="data.cpai_triple != null">
                            <input
                              type="checkbox"
                              
                              class="custom-control-input"
                              :id="index + '11'"
                              name="example1"
                              :value="data.cpai_triple / 3"
                              v-model="hotel_selected"
                              @click="check($event)"
                            />
                            <label
                              class="custom-control-label"
                              :for="index + '11'"
                              >{{ data.cpai_triple }}/-</label
                            >
                          </div>
                        </div>

                        <div class="col-sm-2">
                          <label>CPAI Quad</label>
                          <div class="custom-control custom-checkbox" v-if="data.cpai_quad != null">
                            <input
                              type="checkbox"
                              
                              class="custom-control-input"
                              :id="index + '12'"
                              name="example1"
                              :value="data.cpai_quad / 4"
                              v-model="hotel_selected"
                              @click="check($event)"
                            />
                            <label
                              class="custom-control-label"
                              :for="index + '12'"
                              >{{ data.cpai_quad }}/-</label
                            >
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                    <div v-else class="col-sm-8"></div>

                    <div class="col-sm-1 pt-2">
                      <button
                        type="button"
                        class="btn btn_plus text-white"
                        title="Add Row"
                        v-if="hotel_row.length >= 0 && index == 0"
                        @click="add_row('hotel')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                      <!-- remove hotel button -->
                      <button
                        type="button"
                        class="btn btn_plus text-white"
                        title="Remove Row"
                        v-else
                        @click="remove_row('hotel',index)"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                    <hr />
                  </div>
                </div>
                
              </div>
            </form>
          </div>
          <!-- End hotel -->
          <!-- Start Transport -->
          <div class="card_calculator">
            <div class="bus">
              <h6>Bus Price :</h6>
              <div class="row">
                <div class="col-sm-12">
                  <div
                    class="row"
                    v-for="(bus_data, index) in bus_row"
                    :key="bus_data.id"
                  >
                    <div class="col-sm-3">
                      <label>Select Bus</label>
                      <dropdown-list 
                        :itemList="bus_list" 
                        v-model="bus_data.bus_id" 
                        @change="onChange(index, 'bus',bus_data.bus_id)" 
                      />

                    </div>
                    <div class="col-sm-2">
                      <label>Seater</label>
                      <p>{{ bus_data.seater }}</p>
                    </div>
                    <div class="col-sm-3">
                      <label>Seat Type</label>
                      <p>{{ bus_data.seat_type }}</p>
                    </div>
                    <div class="col-sm-3">
                      <label>Price</label>
                      <p>{{ bus_data.price }} /-</p>
                    </div>
                    <div class="col-sm-1 pt-2">
                      <button
                        type="button"
                        class="btn btn_plus text-white"
                        title="Add Row"
                        v-if="bus_row.length >= 0 && index == 0"
                        @click="add_row('bus')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                      <!-- remove bus button -->
                      <button
                        type="button"
                        class="btn btn_plus text-white"
                        title="Remove Row"
                        v-else
                        @click="remove_row('bus',index)"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Bus -->
          <!-- Start Tran -->
          <div class="card_calculator">
            <div class="bus">
              <h6>Train Price :</h6>
              <div class="row">
                <div class="col-sm-12">
                  <div
                    class="row"
                    v-for="(train_data, index) in train_row"
                    :key="train_data.id"
                  >
                    <div class="col-sm-3">
                      <label>Select Train</label>

                      <dropdown-list 
                        :itemList="train_list" 
                        v-model="train_data.train_id" 
                        @change="onChange(index, 'train',train_data.train_id)" 
                      />

                    </div>
                    <div class="col-sm-4">
                      <label>Code</label>
                      <p>{{ train_data.code }}</p>
                    </div>
                    <div class="col-sm-4">
                      <label>Price</label>
                      <input
                        type="number"
                        name="price"
                        v-model="train_data.price"
                      />
                    </div>
                    <div class="col-sm-1 pt-2">
                      <button
                        type="button"
                        class="btn btn_plus text-white"
                        title="Add Row"
                        v-if="train_row.length >= 0 && index == 0"
                        @click="add_row('train')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                      <!-- remove train button -->
                      <button
                        type="button"
                        class="btn btn_plus text-white"
                        title="Remove Row"
                        v-else
                        @click="remove_row('train',index)"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Train -->
          <!-- Start Air -->
          <div class="card_calculator">
            <div class="bus">
              <h6>Flight Price :</h6>
              <div class="row">
                <div class="col-sm-12">
                  <div
                    class="row"
                    v-for="(flight_data, index) in flight_row"
                    :key="flight_data.id"
                  >
                    <div class="col-sm-3">
                      <label>Select Flight</label>

                      <dropdown-list 
                        :itemList="flight_list" 
                        v-model="flight_data.flight_id" 
                        @change="onChange(index, 'flight',flight_data.flight_id)" 
                      />

                    </div>
                    <div class="col-sm-4">
                      <label>Code</label>
                      <p>{{ flight_data.code }}</p>
                    </div>
                    <div class="col-sm-4">
                      <label>Price</label>
                      <input
                        type="number"
                        name="price"
                        v-model="flight_data.price"
                      />
                    </div>
                    <div class="col-sm-1 pt-2">
                      <button
                        type="button"
                        class="btn btn_plus text-white"
                        title="Add Row"
                        v-if="flight_row.length >= 0 && index == 0"
                        @click="add_row('flight')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                      <!-- remove flight button -->
                      <button
                        type="button"
                        class="btn btn_plus text-white"
                        title="Remove Row"
                        v-else
                        @click="remove_row('flight',index)"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Flight -->
          <!-- Start sightseeing -->
          <div class="card_calculator">
            <div class="bus">
              <h6>Sightseeing Price :</h6>
              <div class="row">
                <div class="col-sm-12">
                  <div
                    class="row"
                    v-for="(sight_data, index) in sight_row"
                    :key="sight_data.id"
                  >
                    <div class="col-sm-3">
                      <label>Select SightSeeing</label>

                      <dropdown-list 
                        :itemList="sight_list" 
                        v-model="sight_data.sight_id" 
                        @change="onChange(index, 'sight',sight_data.sight_id)" 
                      />

                    </div>
                    <div class="col-sm-3">
                      <label>City</label>
                      <p>{{ sight_data.city }}</p>
                    </div>
                    <div class="col-sm-3">
                      <label>Adult Price</label>
                      <div class="custom-control custom-checkbox" v-if="sight_data.adult_price">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          :id="index + 'adultprice'"
                          :value="sight_data.adult_price"
                          v-model="sight_selected"
                          @click="check($event)"
                        />
                        <label
                          class="custom-control-label"
                          :for="index + 'adultprice'"
                          >{{ sight_data.adult_price }}/-</label
                        >
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <label>Child Price</label>
                      <div class="custom-control custom-checkbox" v-if="sight_data.child_price">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          :id="index + 'childchild'"
                          :value="sight_data.child_price"
                          v-model="sight_selected"
                          @click="check($event)"
                        />
                        <label
                          class="custom-control-label"
                          :for="index + 'childchild'"
                          >{{ sight_data.child_price }}/-</label
                        >
                      </div>
                    </div>
                    <div class="col-sm-1 pt-2">
                      <button
                        type="button"
                        class="btn btn_plus text-white"
                        title="Add Row"
                        v-if="sight_row.length >= 0 && index == 0"
                        @click="add_row('sight')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                      <!-- remove sight button -->
                      <button
                        type="button"
                        class="btn btn_plus text-white"
                        title="Remove Row"
                        v-else
                        @click="remove_row('sight',index)"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End SightSeeing -->
          <!-- Start Air -->
          <div class="card_calculator">
            <div class="bus">
              <h6>Escort Price :</h6>
              <div class="row">
                <div class="col-sm-12">
                  <div
                    class="row"
                    v-for="(escort_data, index) in escort_row"
                    :key="escort_data.id"
                  >
                    <div class="col-sm-3">
                      <label>Select Escort</label>

                      <dropdown-list 
                        :itemList="escort_list" 
                        v-model="escort_data.escort_id" 
                        @change="onChange(index, 'escort',escort_data.escort_id)" 
                      />


                    </div>
                    <div class="col-sm-4">
                      <label>Phone No</label>
                      <p>{{ escort_data.phoneno }}</p>
                    </div>
                    <div class="col-sm-4">
                      <label>Per Day Salary</label>
                      <p>{{ escort_data.salaryPerday }}/-</p>
                    </div>
                    <div class="col-sm-1 pt-2">
                      <button
                        type="button"
                        class="btn btn_plus text-white"
                        title="Add Row"
                        v-if="escort_row.length >= 0 && index == 0"
                        @click="add_row('escort')"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                      <!-- remove escort button -->
                      <button
                        type="button"
                        class="btn btn_plus text-white"
                        title="Remove Row"
                        v-else
                        @click="remove_row('escort',index)"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Preview -->
          <div v-if="showModal">
            <transition name="modal">
              <div class="modal-mask">
                <div class="modal-wrapper">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Calculator Preview</h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true" @click="showModal = false"
                            >&times;</span
                          >
                        </button>
                      </div>
                      <div class="modal-body">
                        <table class="table table-bordered">
                          <tr>
                            <td><b>Hotel </b></td>
                            <td>{{ hotel_total }}</td>
                          </tr>
                          <tr>
                            <td><b>Train</b></td>
                            <td>{{ train_total }}</td>
                          </tr>
                          <tr>
                            <td><b>Bus</b></td>
                            <td>{{ bus_total }}</td>
                          </tr>
                          <tr>
                            <td><b>Flight</b></td>
                            <td>{{ flight_total }}</td>
                          </tr>
                          <tr>
                            <td><b>Sightseeing</b></td>
                            <td>{{ sight_seeing_total }}</td>
                          </tr>
                        </table>
                      </div>
                      <div class="modal-footer">
                        <h4 class="mr-auto">Total : {{ total }}</h4>
                        <button
                          type="button"
                          class="btn btn-secondary"
                          @click="showModal = false"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <!-- End Preview -->
          <div>
            <p class="text-center">
              <router-link
                :to="`/itinerary-list`"
                class="btn btn-primary itrn_add_btn back_btn"
              >
                Back
              </router-link>
              <button type="button" class="btn itrn_add_btn" @click="sumData()">
                Submit
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DropdownList from "@/admin/components/form/DropdownList.vue";
export default {
  name: "ListCalculator",
  components:{
    "dropdown-list": DropdownList,
  },
  data() {
    return {
      showModal: false,
      total: 0,
      itineraryData: "",
      row_input: "hotel",
      hotel_counter: 0,
      hotel_list: [],
      bus_list: [],
      train_list: [],
      flight_list: [],
      sight_list: [],
      escort_list: [],
      hotel_selected: [],
      bus_selected: [],
      sight_selected: [],
      escort_selected: [],
      hotel_row: [
        {
          hotel_id: "",
          apai_single: "",
          apai_double: "",
          apai_triple: "",
          apai_quad: "",
          mapai_single: "",
          mapai_double: "",
          mapai_triple: "",
          mapai_quad: "",
          cpai_single: "",
          cpai_double: "",
          cpai_triple: "",
          cpai_quad: "",
        },
      ],
      bus_row: [{ bus_id: "", seater: "", seat_type: "", price: "" }],
      train_row: [{ train_id: "", code: "", price: 0 }],
      flight_row: [{ flight_id: "", code: "", price: 0 }],
      sight_row: [{ sight_id: "", city: "", adult_price: "", child_price: "" }],
      escort_row: [{ escort_id: "", phoneno: "", salaryPerday: "" }],

      hotel_total: 0,
      bus_total: 0,
      train_total: 0,
      flight_total: 0,
      escrot_total: 0,
      sight_seeing_total: 0,
    };
  },

  created() {
    var api = `api/itinerary/${this.$route.params.id}`;
    axios.get(api).then((response) => {
      this.itineraryData = response.data; // add data to the itineraryData
    });
    axios.get(`/api/hotel`).then((response) => {
      if (response.data) {
        this.hotel_list = response.data;
      }
    });

    axios.get(`/api/bus`).then((response) => {
      if (response.data) {
        for(let i = 0;i<response.data.data.length;i++){
          this.bus_list.push({
            name:response.data.data[i].company_name,
            id:response.data.data[i].id
          });
        }
      }
    });

    axios.get(`/api/train`).then((response) => {
      if (response.data) {
        this.train_list = response.data;
      }
    });

    axios.get(`/api/flight`).then((response) => {
      if (response.data) {
        this.flight_list = response.data;
      }
    });

    axios.get(`/api/sightseeings`).then((response) => {
      if (response.data) {
        this.sight_list = response.data.data;
      }
    });

    axios.get(`/api/escort`).then((response) => {
      if (response.data) {
        this.escort_list = response.data.data;
      }
    });
  },
  watch: {},
  computed: {},

  methods: {
    check: function (e) {},
    sumData() {
      this.hotel_total = this.calculate(this.hotel_selected);
      console.log(this.hotel_selected);
      this.escort_total = this.calculate(this.escort_selected);
      this.sight_seeing_total = this.calculate(this.sight_selected);
      this.bus_total = this.calculate(this.bus_selected);
      this.train_total = this.calculate_other(this.train_row);
      this.flight_total = this.calculate_other(this.flight_row);
      this.total =
        this.hotel_total +
        this.escort_total +
        this.sight_seeing_total +
        this.bus_total +
        this.train_total +
        this.flight_total;
      this.showModal = true;
    },
    calculate(array) {
      var sum = 0;
      if (array.length > 0) {
        for (var i = array.length - 1; i >= 0; i--) {
          sum += parseInt(array[i]);
        }
        return sum;
      } else {
        return sum;
      }
    },
    calculate_other(array) {
      var sum = 0;
      if (array.length > 0) {
        for (var i = array.length - 1; i >= 0; i--) {
          sum += parseInt(array[i].price);
        }
        return sum;
      } else {
        return (sum = 0);
      }
    },

    add_row(type) {
      if (type == "hotel") {
        this.hotel_row.push({
          hotel_id: "",
          apai_single: "",
          apai_double: "",
          apai_triple: "",
          apai_quad: "",
          mapai_single: "",
          mapai_double: "",
          mapai_triple: "",
          mapai_quad: "",
          cpai_single: "",
          cpai_double: "",
          cpai_triple: "",
          cpai_quad: "",
        });
        this.hotel_counter = this.hotel_counter + 1;
      } else if (type == "bus") {
        this.bus_row.push({ bus_id: "", seater: "", seat_type: "", price: "" });
      } else if (type == "train") {
        this.train_row.push({ train_id: "", code: "", price: 0 });
      } else if (type == "flight") {
        this.flight_row.push({ flight_id: "", code: "", price: 0 });
      } else if (type == "sight") {
        this.sight_row.push({
          sight_id: "",
          city: "",
          adult_price: "",
          child_price: "",
        });
      } else if (type == "escort") {
        this.escort_row.push({ escort_id: "", phoneno: "", salaryPerday: "" });
      }
    },
    onChange(index, type,value) {
      if (type == "hotel") {
        var path = `/api/hotel/` + value + "/edit";
        axios.get(path).then((response) => {
          var data = response.data;
          this.hotel_row[index].apai_single = data.apai_single;
          this.hotel_row[index].apai_double = data.apai_double;
          this.hotel_row[index].apai_triple = data.apai_triple;
          this.hotel_row[index].apai_quad = data.apai_quad;

          this.hotel_row[index].mapai_single = data.mapai_single;
          this.hotel_row[index].mapai_double = data.mapai_double;
          this.hotel_row[index].mapai_triple = data.mapai_triple;
          this.hotel_row[index].mapai_quad = data.mapai_quad;

          this.hotel_row[index].cpai_single = data.cpai_single;
          this.hotel_row[index].cpai_double = data.cpai_double;
          this.hotel_row[index].cpai_triple = data.cpai_triple;
          this.hotel_row[index].cpai_quad = data.cpai_quad;
        });
      } else if (type == "bus") {
        var path = `/api/bus/` + value + "/edit";
        axios.get(path).then((response) => {
          var data = response.data;
          this.bus_row[index].seater = data.seater;
          this.bus_row[index].seat_type = data.seat_type;
          this.bus_row[index].price = data.price;
          this.bus_selected[index] = parseInt(data.price);
        });
      } else if (type == "train") {
        var path = `/api/train/` + value + "/edit";
        axios.get(path).then((response) => {
          var data = response.data;
          this.train_row[index].code = data.code;
        });
      } else if (type == "flight") {
        var path = `/api/flight/` + value + "/edit";
        axios.get(path).then((response) => {
          var data = response.data;
          this.flight_row[index].code = data.code;
        });
      } else if (type == "sight") {
        var path = `/api/sightseeings/` + value + "/edit";
        axios.get(path).then((response) => {
          var data = response.data;
          this.sight_row[index].city = data.name;
          this.sight_row[index].adult_price = data.adult_price;
          this.sight_row[index].child_price = data.child_price;
        });
      } else if (type == "escort") {
        var path = `/api/escort/` + value + "/edit";
        axios.get(path).then((response) => {
          var data = response.data;
          this.escort_row[index].phoneno = data.phoneno;
          this.escort_row[index].salaryPerday = data.salaryPerday;
          this.escort_selected[index] = parseInt(data.salaryPerday);
        });
      }
    },
    remove_row(data, index){
      if(data == 'hotel'){
        this.hotel_row.splice(index,1);
      }
      else if(data == 'bus'){
        this.bus_row.splice(index,1);
      }
      else if(data == 'train'){
        this.train_row.splice(index,1);
      }
      else if(data == 'flight'){
        this.flight_row.splice(index,1);
      }
      else if(data == 'sight'){
        this.sight_row.splice(index,1);
      }
      else if(data == 'escort'){
        this.escort_row.splice(index,1);
      }else{
        console.log('no selected item');
      }
    }
  },
};
</script>