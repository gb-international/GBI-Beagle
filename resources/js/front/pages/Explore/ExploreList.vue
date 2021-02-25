<template>
  <!--************************************************
  Author:@Ajay
  ****************************************************-->
  <div id="exploreDestination">
    <div class="explore_banner text_on_image banner_bg explore_bg_img">
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 m-0 p-0">
              <form role="form" autocomplete="off">
                <div class="nav-sreach-explo">
                  <ul class="nav nav-tabs serch-explo-menu">
                    <li class="nav-item">
                      <a
                        class="nav-link active border-none"
                        data-toggle="tab"
                        href="#home"
                        v-on:click="multicity = !multicity"
                      >Oneway</a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link border-none"
                        data-toggle="tab"
                        href="#menu1"
                        v-on:click="multicity = !multicity"
                      >Multicity</a>
                    </li>
                  </ul>
                  <!-- start single location Tab panes serach bar for source and destination-->
                  <div class="tab-content explor-content pb-1">
                    <div id="home" class="container tab-pane active">
                      <br />
                      <div class="row p-0 parent_padding">
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding">
                          <model-select
                            :options="options"
                            v-model="sources"
                            placeholder="Leave from"
                            autocomplete="off"
                          ></model-select>
                        </div>
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding">
                          <model-select
                            :options="options"
                            v-model="destinations"
                            placeholder="Arrive at"
                          ></model-select>
                        </div>

                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                            <select
                              class="placeholder_color ui fluid search selection dropdown"
                              name="typetour"
                              @change="tourtypeOnChange($event)"
                            >
                              <option selected>In mood for</option>
                              <option
                                v-for="index in tourtype_option"
                                :key="index.id"
                                :value="index.id"
                              >{{ index.name }}</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                            <select
                              class="selectpicker ui selection dropdown"
                              name="noofday"
                              @change="noofdaysOnChange($event)"
                            >
                              <option selected>No. of days</option>
                              <option
                                v-for="index in noofdays_option"
                                :key="index.id"
                                :value="index"
                              >{{ index }}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end single location Tab panes serach bar for source and destination-->
                    <!-- start multiple location Tab panes serach bar for source and destination-->

                    <div id="menu1" class="container tab-pane">
                      <br />
                      <div class="row p-0 parent_padding">
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding">
                          <model-select
                            :options="options"
                            v-model="multi_source"
                            placeholder="Leave from"
                          ></model-select>
                        </div>
                        <div class="col-6 col-sm-4 col-lg-4 input-p nopadding">
                          <model-select
                            :options="options"
                            v-model="multi_destination"
                            placeholder="Arrive at"
                          ></model-select>
                        </div>
                      </div>

                      <div class="row p-0 parent_padding">
                        <div class="col-lg-8" v-for="(row, index) in rows" :key="index">
                          <div class="row">
                            <div class="col-6 col-sm-6 input-p nopadding">
                              <model-select
                                :options="options"
                                v-model="row['source']"
                                placeholder="Leave from"
                              ></model-select>
                            </div>
                            <div class="col-6 col-sm-6 input-p nopadding">
                              <model-select
                                :options="options"
                                v-model="row['destination']"
                                placeholder="Arrive at"
                              ></model-select>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-2">
                          <div class="row button_group">
                            <div class="col-12">
                              <div class="buttons save_btn link" v-if="city_button == current_counter">
                                  <img src="/images/icons/multiple_add.png"
                                  v-if="city_button == current_counter"
                                  class="" 
                                  v-bind:class="{ disable : save_disable_btn }"
                                  @click="addRow">
                              </div>

                              <div class="buttons remove_btn link" v-if="city_button == current_counter">
                                  <img src="/images/icons/multiple_minus.png" class="" v-bind:class="{ disable : remove_disable_btn }"
                                  @click="deleteRow(current_counter-1)">

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- tyype of tour and no of days -->
                      <div class="row parent_padding">
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                            <select
                              class="placeholder_color ui fluid search selection dropdown"
                              name="typetour"
                              @change="tourtypeOnChange($event)"
                            >
                              <option selected>In mood for</option>
                              <option
                                v-for="index in tourtype_option"
                                :key="index.id"
                                :value="index"
                              >{{ index.name}}</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 col-sm-2 col-lg-2 input-p nopadding">
                          <div class="select">
                            <select
                              class="selectpicker ui selection dropdown"
                              name="noofday"
                              @change="noofdaysOnChange($event)"
                            >
                              <option selected>No. of days</option>
                              <option
                                v-for="index in tourtype_option"
                                :key="index.id"
                                :value="index.id"
                              >{{ index.name }}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--End menu1-->
                    <!-- end multiple location Tab panes serach bar for source and destination-->
                  </div>
                </div>
                <p class="text-center">
                  <button
                    class="btn btn-defalt btn-lg center-block profile_button"
                    @click.prevent="searchAll()"
                    type="submit"
                    @click="show = !show"
                  >Search</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    <main class="pl-2 pr-2">
      <div class="container">
        <div class="row">
          <searchexplor :allSearchdata="allSearchdata"></searchexplor>
        </div>
      </div>

      <div class="container" v-if="allSearchdata == ''">
        <div class="row m-0">
          <div class="col-lg-12">
            <div class="row">
              <itinerary-list :list="items_list"></itinerary-list>
              <Observer @intersect="intersected" />
            </div>
          </div>
          <div class="loading-img-parent text-center w-100 mb-4" v-if="loading">
            <img class="loading-img" src="/images/icons/loader.gif">
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SearchExplor from "./SearchExplor.vue";
import { ModelSelect } from "vue-search-select";
import { Form, HasError } from "vform";
import ItineraryList from "@/front/components/ItineraryList";
import Observer from "@/front/components/Observer";
import _ from "lodash";

export default {
  name: "exploreDestination",
   metaInfo: {
    title: 'GBI Explore Destination',
    meta:[
      { name: 'description', content: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button' },
      { name: 'keywords', content: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs' },
      { name: 'url', content: 'https://www.gowithgbi.com/resources/explore-destination' },

    ]
  },
  
  components: {
    searchexplor: SearchExplor,
    ModelSelect,
    Form,
    HasError,
    ItineraryList,
    Observer,
  },
  data() {
    return {
      save_disable_btn: false,
      remove_disable_btn: true,
      multicity: false,
      noofdays_option: 10,
      tourtype_option: [],
      options: [],
      sources: { value: "", text: "" },
      destinations: { value: "", text: "" },
      multi_source: { value: "", text: "" },
      multi_destination: { value: "", text: "" },
      rows: [
        {
          source: { value: "", text: "" },
          destination: { value: "", text: "" }
        }
      ],
      city_button: 1,
      counter: 2,
      customers: [],
      current_counter: 1,
      show: true,
      data: [],
      datas: [],
      search: "",
      searchs: "",
      isOpen: false,
      isOpens: false,
      arrowCounter: 0,
      arrowCounters: 0,
      allSearchdata: [],
      noofday: "",
      tourtype: "",
      loading: false,
      page: 1,
      items_list: [],
      searchForm: new Form({
        source: [],
        destination: [],
        tourtype: [],
        noofday: []
      })
    };
  },
  computed: {
    // start filterdata source and destination
    filteredSource() {
      if (!this.search) return this.data;
      return this.data.filter(result => {
        return result.source.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    filteredData() {
      if (!this.searchs) return this.datas;
      return this.datas.filter(resultdata => {
        return resultdata.destination
          .toLowerCase()
          .includes(this.searchs.toLowerCase());
      });
    },
    alldata() {
      return this.$store.getters.getAllData;
    }
  },
  created() {
    this.$axios.get("/api/search").then(response => {
      this.data = response.data.data;
      this.datas = response.data.data;
    });
    this.$axios.get("/api/city").then(response => {
      for (var i = 0; i < response.data.data.length; i++) {
        this.options.push({
          value: response.data.data[i].name,
          text: response.data.data[i].name
        });
      }
    });
    this.tourTypeData();
    this.intersected();
  },
  methods: {

    async intersected() {
      if(this.loading == false){
        this.loading = true;
        
        var url = `/api/itinerary-list?page=` + this.page;
        const res = await fetch(url);
  
        this.page++;
        var items = await res.json();
        if(items.data.length > 0){
          this.items_list = [...this.items_list, ...items.data];
        }
        items = [];
        this.loading = false;        
      }
    },
    RealSearch: _.debounce(function() {
      this.$store.dispatch("SearchPost", this.keyword);
    }, 1000),

    tourTypeData() {
      this.$axios.get("/api/tourtype").then(response => {
        this.tourtype_option = response.data;
      });
    },

    reset() {
      this.item = {};
    },
    selectFromParentComponent1() {
      // select option from parent component
      this.item = this.options[0];
    },
    reset2() {
      this.item2 = "";
    },
    selectFromParentComponent2() {
      // select option from parent component
      this.item2 = this.options2[0].value;
    },
    tourtypeOnChange(value) {
      this.tourtype = event.target.value;
    },
    noofdaysOnChange(value) {
      this.noofday = event.target.value;
    },
    //add rows multiple location itinerary
    addRow: function() {
      var vm = this;
      var current = this.current_counter;
      var previous = current - 1;
      this.current_counter = this.current_counter + 1;
      this.city_button = this.city_button + 1;
      this.rows.push({
        source: { value: "", text: "" },
        destination: { value: "", text: "" }
      });
      // this.rows[current].source = this.rows[previous].destination;
      vm.rows[vm.current_counter - 1].destination = vm.multi_source;
    },
    //delete rows multiple location itinerary
    deleteRow: function(index) {
      this.current_counter = this.current_counter - 1;
      this.city_button = this.city_button - 1;
      this.rows.splice(index, 1);
    },
    //search autocompelete start
    onChange() {
      // Let's warn the parent that a change was made
      this.$emit("input", this.search);
      // Is the data given by an outside ajax request?
      if (this.isAsync) {
        this.isLoading = true;
      } else {
        // Let's search our flat array
        // this.filterResults();
        this.isOpen = true;
      }
    },
    onChanges() {
      this.$emit("input", this.searchs);
      // Let's search our flat array
      this.isOpens = true;
    },
    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
    setResults(resultdata) {
      this.searchs = resultdata;
      this.isOpens = false;
    },

    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    handleClickOutsides(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpens = false;
        this.arrowCounters = -1;
      }
    },

    searchAll() {
      // Submit form
      let vm = this;
      vm.searchForm.reset();
      let source = [];
      let destination = [];
      vm.searchForm.noofday = vm.noofday;
      vm.searchForm.tourtype = vm.tourtype;

      // if multicity search or simple search
      if (vm.multicity) {
        //Multiple city search
        destination = vm.multi_destination.text;
        source = vm.multi_source.text;
        if (source.length > 1 && destination.length > 1) {
          vm.searchForm.source.push(source);
          vm.searchForm.destination.push(destination);
        } else {
          console.log('hi');
          this.$swal.fire(
            'Error',
            'Please select all the fields',
            'error'
          );
          // swal.fire({
          //   text: "Select all the locations!",
          //   type: "warning"
          // });
        }
        var rows_length = vm.rows.length;
        for (var i = 0; i <= rows_length - 1; i++) {
          vm.searchForm.source.push(vm.rows[i].source.text);
          vm.searchForm.destination.push(vm.rows[i].destination.text);
        }
      } else {
        //Simple search
        vm.searchForm.source.push(vm.sources.text);
        vm.searchForm.destination.push(vm.destinations.text);
      }

      if (
        vm.searchForm.destination[0] != "" &&
        vm.searchForm.destination[0] != ""
      ) {
        vm.searchForm
          .post("api/search-itinerary")
          .then(response => {
            vm.allSearchdata = response.data.data;
            if (vm.allSearchdata.length == 0) {
              this.$swal.fire(
                'Alert',
                'Not Found!!1',
                'info'
              );
            }
          })
          .catch(error => {
            this.$swal.fire(
              'Alert',
              'please select the fields',
              'error'
            );
          });
      } else {
        this.$swal.fire(
          'Alert',
          'please select locations',
          'error'
        );
      }
    }
  },
  watch: {
    multi_source: function(value) {
      var self = this;
      if (self.rows[0]) {
        self.rows[this.current_counter - 1].destination = value;
      }
    },

    current_counter: function(value) {
      if (value == 1) {
        this.save_disable_btn = false;
        this.remove_disable_btn = true;
      }
      if (value == this.counter) {
        this.save_disable_btn = true;
        this.remove_disable_btn = false;
      }
    }
  },

  destroyed() {
    // search autocompelete start
    document.removeEventListener("click", this.handleClickOutside);
    document.removeEventListener("click", this.handleClickOutsides);
  }
};
</script>         
