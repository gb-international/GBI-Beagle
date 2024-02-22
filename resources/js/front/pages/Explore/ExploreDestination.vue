<template>
  <!--************************************************
  Author:@Ajay
  Editor: @Manas
  ****************************************************-->
  <errorState :imgName="'explore_destination_500x500.png'" v-if="apiFailed"/>
  <div id="exploreDestination" v-else>
    <div :class="'explore_banner_'+clientType" class="text_on_image banner_bg2 explore_bg_img">
      <div class="content">
        <div class="container-custom">
          <div class="row">
            <div class="col-12 m-0 p-0">
              <form role="form" autocomplete="off">
                <div class="nav-sreach-explo">
                  <ul class="nav nav-tabs serch-explo-menu">
                    <li class="nav-item">
                      <a
                       :class="clientType"
                        class="nav-link active border-none"
                        data-toggle="tab"
                        href="#home"
                        v-on:click="panel = 'Itinerary'" 
                        >Itinerary</a
                      >
                    </li>
                    <!-- <li class="nav-item">
                      <a
                        class="nav-link border-none"
                        data-toggle="tab"
                        href="#menu1"
                        v-on:click="panel = 'Hotels'"
                        >Hotels</a
                      >
                    </li> -->
                  </ul>
                  <!-- start single location Tab panes serach bar for source and destination-->
                  <div :class="clientType == 'Student' ? 'explor-content' : 'explor-'+clientType" class="pb-1" v-if="panel == 'Itinerary'">
                    <div class="container" v-if="tripType == 'return'">
                      <div class="row search-radio">
                        <div class="col-sm-6">
                          <div class="row pt-3 pb-3">
                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="national"
                                  name="customRadio"
                                  value="return"
                                  class="custom-control-input"
                                  v-model="tripType"
                                />
                                <label
                                  class="custom-control-label"
                                  for="national"
                                  ><b>Return</b></label
                                >
                              </div>
                            </div>

                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="international"
                                  name="customRadio"
                                  value="multicity"
                                  class="custom-control-input"
                                  v-model="tripType"
                                />
                                <label
                                  class="custom-control-label"
                                  for="international"
                                  ><b>Multicity</b></label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row p-0 parent_padding">

                        <div class="col-12 col-sm-6 col-lg-9 px-2 nopadding">
                            <div class="col-sm-12 mt-1">
                              <custLabel class="pl-2">Choose your transport</custLabel>
                                <div class="row pb-2">
                                  <div class="col-4 col-md-4 col-lg-2 mb-2 exp-icon" @click="portType = 'bus'; getCities()" :class=" portType == 'bus' ? 'filter-cl' : '' ">
                                    <img :src="$gbiAssets + '/images/icons/bus_explore_icon.svg' " class="cursor-pointer exp-icon-wd mr-1">
                                     Bus
                                  </div>
                                  <div class="col-4 col-md-4 col-lg-2 mb-2 exp-icon" @click="portType = 'car'; getCities()" :class=" portType == 'car' ? 'filter-cl' : '' ">
                                    <img :src="$gbiAssets + '/images/icons/car_explore_icon.svg' " class="cursor-pointer exp-icon-wd mr-2">
                                     Car
                                  </div>
                                  <div class="col-4 col-md-4 col-lg-2 mb-2 exp-icon" @click="portType = 'train'; getCities()" :class=" portType == 'train' ? 'filter-cl' : '' " >
                                    <img :src="$gbiAssets + '/images/icons/train_explore_icon.svg' " class="cursor-pointer exp-icon-wd mr-1">
                                     Train
                                  </div>
                                   <div class="col-4 col-md-4 col-lg-2 mb-2 exp-icon" @click="portType = 'plane'; getCities()" :class=" portType == 'plane' ? 'filter-cl' : '' " >
                                    <img :src="$gbiAssets + '/images/icons/flight_explore_icon.svg' " class="cursor-pointer exp-icon-wd mr-1">
                                     Plane
                                  </div>
                                </div>
                             </div>
                        </div>

                         <div class="col-12 col-sm-6 col-lg-3 px-2">
                            <div class="row parent_padding">
                              <div class="col-12 input-p nopadding">
                                <div class="select select-style">
                                  <select
                                    class="placeholder_color ui fluid search selection dropdown"
                                    name="typetour"
                                    @change="clientTypeOnChange($event)"
                                  >
                                    <!-- <option selected disabled>Client Type</option> -->
                                    <option
                                      v-for="index in clientType_option"
                                      :key="index.id"
                                      :value="index.name"
                                    >
                                      {{ index.name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                        </div>
     
                        <div class="col-6 col-sm-6 col-lg-3 input-p nopadding">
                          <model-select
                            :options="options"
                            v-model="sources"
                            placeholder="Leave from"
                            autocomplete="off"
                          ></model-select>
                        </div>
                        <div class="col-6 col-sm-6 col-lg-3 input-p nopadding">
                          <model-select
                            :options="destinationCities"
                            v-model="destinations"
                            placeholder="Arrive at"
                          ></model-select>
                        </div>

                        <div class="col-6 col-sm-6 col-lg-3 input-p nopadding">
                          <div class="select">
                            <select
                              class="placeholder_color ui fluid search selection dropdown"
                              name="typetour"
                              @change="tourtypeOnChange($event)"
                            >
                              <option selected disabled>In mood for</option>
                              <option
                                v-for="index in tourtype_option"
                                :key="index.id"
                                :value="index.id"
                              >
                                {{ index.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 col-sm-6 col-lg-3 input-p nopadding">
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
                              >
                                {{ index }}
                              </option>
                            </select>
                          </div>
                        </div>
                        
                      </div>
                      <p class="text-center">
                        <button
                          class="btn-defalt btn-lg center-block"
                          :class="clientType == 'Student' ? 'explore_custom_button' : 'explore_custom_button_'+clientType"
                          @click.prevent="searchAll()"
                          type="submit"
                          @click="show = !show"
                        >
                          SEARCH
                        </button>
                      </p>
                    </div>
                    <!-- end single location Tab panes serach bar for source and destination-->
                    <!-- start multiple location Tab panes serach bar for source and destination-->

                    <div v-else class="container"> <!-- Start of Multicity -->
                    <div class="row search-radio">
                        <div class="col-sm-6">
                          <div class="row pt-3 pb-3">
                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="national"
                                  name="customRadio"
                                  value="return"
                                  class="custom-control-input"
                                  v-model="tripType"
                                />
                                <label
                                  class="custom-control-label"
                                  for="national"
                                  ><b>Return</b></label
                                >
                              </div>
                            </div>

                            <div class="col">
                              <div class="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="international"
                                  name="customRadio"
                                  value="multicity"
                                  class="custom-control-input"
                                  v-model="tripType"
                                />
                                <label
                                  class="custom-control-label"
                                  for="international"
                                  ><b>Multicity</b></label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                      <div class="row p-0 parent_padding">

                        <div class="col-12 col-sm-6 col-lg-9 px-2 nopadding">
                            <div class="col-sm-12 mt-1">
                              <custLabel class="pl-2">Choose your transport</custLabel>
                                <div class="row pb-2">
                                  <div class="col-4 col-md-4 col-lg-2 mb-2 exp-icon" @click="portType = 'bus'; getCities()" :class=" portType == 'bus' ? 'filter-cl' : '' ">
                                    <img :src="$gbiAssets + '/images/icons/bus_explore_icon.svg' " class="cursor-pointer exp-icon-wd mr-1 ">
                                     Bus
                                  </div>
                                  <div class="col-4 col-md-4 col-lg-2 mb-2 exp-icon" @click="portType = 'car'; getCities()" :class=" portType == 'car' ? 'filter-cl' : '' ">
                                    <img :src="$gbiAssets + '/images/icons/car_explore_icon.svg' " class="cursor-pointer exp-icon-wd mr-2">
                                     Car
                                  </div>
                                  <div class="col-4 col-md-4 col-lg-2 mb-2 exp-icon" @click="portType = 'train'; getCities()" :class=" portType == 'train' ? 'filter-cl' : '' " >
                                    <img :src="$gbiAssets + '/images/icons/train_explore_icon.svg' " class="cursor-pointer exp-icon-wd mr-1">
                                     Train
                                  </div>
                                   <div class="col-4 col-md-4 col-lg-2 mb-2 exp-icon" @click="portType = 'plane'; getCities()" :class=" portType == 'plane' ? 'filter-cl' : '' " >
                                    <img :src="$gbiAssets + '/images/icons/flight_explore_icon.svg' " class="cursor-pointer exp-icon-wd mr-1">
                                     Plane
                                  </div>
                                </div>
                             </div>
                        </div>


                         <div class="col-12 col-sm-6 col-lg-3 px-2">
                            <div class="row parent_padding">
                              <div class="col-12 input-p nopadding">
                                <div class="select select-style">
                                  <select
                                    class="placeholder_color ui fluid search selection dropdown"
                                    name="typetour"
                                    @change="clientTypeOnChange($event)"
                                  >
                                    <option
                                      v-for="index in clientType_option"
                                      :key="index.id"
                                      :value="index.name"
                                    >
                                      {{ index.name }}
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                        </div>

                        <div class="col-6 col-sm-6 col-lg-6 input-p nopadding">
                          <model-select
                            :options="options"
                            v-model="multi_source"
                            placeholder="Leave from"
                          ></model-select>
                        </div>
                        <div class="col-6 col-sm-6 col-lg-6 input-p nopadding">
                          <model-select
                            :options="options"
                            v-model="multi_destination"
                            placeholder="Arrive at"
                          ></model-select>
                        </div>
                      </div>

                      <div class="row">
                        <div
                          class="col-sm-12 col-12"
                          v-for="(row, index) in rows"
                          :key="index"
                        >
                          <div class="row p-0 parent_padding">
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
                        <div class="col-8 col-md-10 col-lg-10">
                        </div>
                        <div class="col-4 col-md-2 col-lg-2">
                          <div class="row button_group">
                            <div class="col-12">
                              <div
                                class="buttons save_btn link"
                              >
                                <p v-if="current_counter < 2" @click="addRow" class="text-right addCity"> + Another City</p>
                                <p v-else @click="deleteRow(current_counter - 1)" class="text-right removeCity">- Remove City</p>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- type of tour and no of days -->
                      <div class="row parent_padding">
                        <div class="col-6 col-sm-6 col-lg-6 input-p nopadding">
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
                              >
                                {{ index.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 col-sm-6 col-lg-6 input-p nopadding">
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
                                :value="index.id"
                              >
                                {{ index.name }}
                              </option>
                            </select>
                          </div>
                        </div>

                      </div>
                      <p class="text-center">
                        <button
                          class="btn-defalt btn-lg center-block"
                          :class="clientType == 'Student' ? 'explore_custom_button' : 'explore_custom_button_'+clientType"
                          @click.prevent="searchAll()"
                          type="submit"
                          @click="show = !show"
                        >
                          SEARCH
                        </button>
                      </p>
                    </div>
                    <!--End menu1-->
                    <!-- end multiple location Tab panes serach bar for source and destination-->
                  </div>
                  <!--Start menu2 -->
                  <!-- start single location Tab panes serach bar for source and destination -->                 

                  <div class="explor-content pb-1" style="padding: 4.5vh !important;" v-else>
                    <div class="container">

                      <div style="background-color: white; padding: 45px;"> 
                        <p class="text-center" style="color: black; font-weight: bold; font-size: 20px; font-family: Raleway">Feature Under Development</p>
                      </div>
                      <!-- <div class="row p-0 parent_padding">
                        <div class="col-6 col-sm-6 col-lg-6 input-p nopadding">
                          <model-select
                            :options="optionsHotel"
                            v-model="sources"
                            placeholder="Location"
                            autocomplete="off"
                          ></model-select>
                        </div>

                        <div class="col-6 col-sm-6 col-lg-6 input-p nopadding">
                            <input
                              type="text"
                              class="form-control"
                              id="number_of_person"
                              data-toggle="modal"
                              data-target="#personsModal"
                              @click="showPersonModal = true"
                              v-model="people"
                              placeholder="Guests"
                              readonly
                            />
                            <has-error :form="form" field="start_date"></has-error>
                            <div class="modal" tabindex="-1" role="dialog" id="personsModal" v-if="showPersonModal">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" style="color: black">Guests</h5>
                                  <button type="button" class="close" aria-label="Close" @click="showPersonModal = false">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <div class="marginT">
                                      <label for="number_of_adults" class="personLables">Adults(>12 years)</label>
                                       <fieldset>
                                          <input type="button" value="-" class="decrease" @click="decrVal('adults')"/>
                                          <input type="passengers" id="incrdcr" v-model="adults" readonly/>
                                          <input type="button" value="+" class="increase" @click="incrVal('adults')"/>
                                       </fieldset>
                                    </div>
                                    <div class="marginT">
                                      <label for="number_of_children" class="personLables">Children(2 to 12 years)</label>
                                      <fieldset>
                                          <input type="button" value="-" class="decrease" @click="decrVal('children')"/>
                                          <input type="passengers" id="incrdcr" v-model="children" readonly/>
                                          <input type="button" value="+" class="increase" @click="incrVal('children')"/>
                                       </fieldset>
                                    </div>
                                    <div class="marginT">
                                      <label for="number_of_infants" class="personLables">Infants(3 days to 2 years)</label>
                                     <fieldset>
                                          <input type="button" value="-" class="decrease" @click="decrVal('infants')"/>
                                          <input type="passengers" id="incrdcr" v-model="infants" readonly/>
                                          <input type="button" value="+" class="increase" @click="incrVal('infants')"/>
                                       </fieldset>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-primary" @click="savePersons">Confirm</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-6 col-sm-6 col-lg-3 input-p nopadding">
                          <div class="select">
                            <select
                              class="selectpicker ui selection dropdown"
                              name="noofday"
                              @change="changeRoomType($event)"
                            >
                              <option selected>Room Category</option>
                              <option
                                v-for="index in room_types"
                                :key="index.id"
                                :value="index"
                              >
                                {{ index }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-6 col-sm-6 col-lg-3 input-p nopadding">
                          <input
                              type="text"
                              class="form-control"
                              id="number_of_rooms"
                              data-toggle="modal"
                              data-target="#roomsModal"
                              @click="showRoomModal = true"
                              v-model="room_text"
                              placeholder="No. of Rooms"
                              readonly
                            />
                          <div class="modal" tabindex="-1" role="dialog" id="roomsModal" v-if="showRoomModal">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" style="color: black">No. of Rooms</h5>
                                  <button type="button" class="close" aria-label="Close" @click="showRoomModal = false">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                    <div class="marginT">
                                      <label for="number_of_infants" class="personLables" style="color: gray">Number of rooms required?</label>
                                     <fieldset>
                                          <input type="button" value="-" class="decrease" @click="decrVal('rooms')"/>
                                          <input type="passengers" id="incrdcr" v-model="rooms" readonly/>
                                          <input type="button" value="+" class="increase" @click="incrVal('rooms')"/>
                                       </fieldset>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-primary" @click="saveRooms">Confirm</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-12 col-lg-6 input-p nopadding">
                         <HotelDatePicker />
                        </div>
                        <div class="col-12 col-sm-6 col-lg-6 ml-2">
                          <div class="row search-radio">
                            <div class="col-sm-12">
                              <custLabel2 class="pt-3">Customer type</custLabel2>
                              <div class="row pb-3">
                                <div class="col-md-4 col-6">
                                  <div class="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      id="student"
                                      name="customRadio2"
                                      value="student"
                                      class="custom-control-input"
                                      v-model="searchForm.clientType"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="student"
                                      >Student</label
                                    >
                                  </div>
                                </div>

                                <div class="col-md-4 col-6">
                                  <div class="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      id="corporate"
                                      name="customRadio2"
                                      value="corporate"
                                      class="custom-control-input"
                                      v-model="searchForm.clientType"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="corporate"
                                      >Corporate</label
                                    >
                                  </div>
                                </div>

                                <div class="col-md-4 col-6">
                                  <div class="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      id="family"
                                      name="customRadio2"
                                      value="family"
                                      class="custom-control-input"
                                      v-model="searchForm.clientType"
                                    />
                                    <label
                                      class="custom-control-label"
                                      for="family"
                                      >Family</label
                                    >
                                  </div>
                                </div>

                              </div>

                            </div>
                          </div>
                        </div>                           
                      </div>
                      <p class="text-center">
                        <button
                          class="btn-defalt btn-lg center-block explore_custom_button"
                          @click.prevent="searchHotels()"
                          type="submit"
                          @click="show = !show"
                        >
                          SEARCH
                        </button>
                      </p>  --> 
                    </div>
                    <!-- end single location Tab panes serach bar for source and destination -->
                  </div>
                </div> 
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>

    <main class="pl-2 pr-2">
      <div class="container">
        <!-- <div v-if="!upcoming_data && !popular_data">

          <heading class="text-center mt-5" text="Upcoming Tour" />
          <div class="row card-titles">
            <div class="col-sm-4"  v-for="(index) in 6" :key="index">
              <cardLoader />
            </div>
          </div>

          <heading class="text-center mt-5" text="Popular Tour" />
          <div class="row card-titles">
            <div class="col-sm-4"  v-for="(index) in 6" :key="index">
              <cardLoader />
            </div>
          </div>

        </div> -->

        <div class="p-0" v-if="allSearchdata == ''">
          <heading class="text-center mt-2" text="All Tours" />
          <itinerary-list :list="items_list"></itinerary-list>
          <Observer @intersect="intersected" />
          <div class="loading-img-parent text-center mt-5 w-100 mb-4" v-if="loading">
            <img class="loading-img" :src="$gbiAssets+'/images/icons/loader.gif'" />
          </div>
          <!-- <heading class="text-center" text="Upcoming Tour" />
          <itinerary-list :list="upcoming_data" />
          <div class="nopadding m-b-15">
            <router-link to="/explore-list" class="listexplore"
              >View More</router-link
            >
          </div>
          <heading class="text-center" text="Popular Tour" />
          <itinerary-list :list="popular_data" />
          <div class="nopadding m-b-15">
            <router-link to="/explore-list" class="listexplore"
              >View More</router-link
            >
          </div> -->
        </div>
        <div v-else>
          <itinerary-list :list="allSearchdata"></itinerary-list>
        </div>

        <alert-modals 
          
          :sources="sources" 
          :destinations="destinations"
          :noofdays="noofday" 
          :tourtypes="tour_type_text"
        />

      </div>
    </main>
  </div>
</template>

<script>
import Heading from "@/front/components/layout/Heading.vue";
import SubHeading from "@/front/components/layout/SubHeading.vue";
import ExploreSearchMixin from "@/front/mixins/user/ExploreSearchMixin";
import AlertModals from '@/front/components/Explore/AlertModals.vue';
import HotelDatePicker from 'vue-hotel-datepicker'
import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css';
import cardLoader from '@/front/components/loaders/cardLoaderExplore.vue';
import Observer from "@/front/components/Observer";

export default {
  name: "exploreDestination",
  mixins: [ExploreSearchMixin],
  metaInfo: {
    title: "Get best tour packages and deals only at GOwithGBI",
    meta: [
      {
        name: "description",
        content:
          "Best travel agency in India| explore India with best deals for tours and travel packages only on GowithGBI.",
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs",
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/explore-destination",
      },
    ],
  },

  components: {
    Observer,
    Heading,
    SubHeading,
    HotelDatePicker,
    cardLoader,
    'alert-modals':AlertModals
  },
  data() {
    return {
      upcoming_data: null,
      popular_data: null,
      allTour_data: null,
      CheckInOut: [],
      room_options: [],
      room_types: ["Single", "Double", "Triple", "Quad"],
      showPersonModal: false,
      showRoomModal: false,
      person: 2,
      adults: 2,
      children: 0,
      infants: 0,
      room: '',
      room_text: '',
      rooms: 1,
      apiFailed: false,
      //travel_Loaded: false
    };
  },

  beforeCreate(){
      let metaInfo = {
        title: 'Get best tour packages and deals only at GOwithGBI',
        description: 'Best travel agency in India| explore India with best deals for tours and travel packages only on GowithGBI.',
        keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
        url: 'https://www.gowithgbi.com/explore-destination',
        type: 'website'
      }
      document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },

  created() {
    //this.UpcomingData();
    //this.popularTour();
    //this.AllTours();
  },
  methods: {
    async intersected() {
      if (this.loading == false) {
        this.loading = true;

        var url = `/api/itinerary-list?page=` + this.page;
        const res = await fetch(url);

        this.page++;
        var items = await res.json();
        if (items.data.length > 0) {
          this.items_list = [...this.items_list, ...items.data];
        }
        items = [];
        this.loading = false;
      }
    },
    incrVal(data){
        if(data == 'adults'){
          this.adults += 1
        } else if(data == 'children'){
          this.children +=1
        } else if(data == 'infants'){
          this.infants += 1
        } else if(data == 'rooms'){
          this.rooms += 1
        }
    },
     decrVal(data){
        if(data == 'adults' && this.adults > 0){
          this.adults -= 1
        } else if(data == 'children' && this.children > 0){
          this.children -=1
        } else if(data == 'infants' && this.infants > 0){
          this.infants -= 1
        } else if(data == 'rooms' && this.rooms > 0){
          this.rooms -= 1
        }
    },
    savePersons(){
      this.person = parseInt(this.children) + parseInt(this.adults);
      let guest = 'Guest'
      if(this.person > 1){
        guest = 'Guests'
      }
      if(this.infants > 0){
        this.people =  this.person +' ' + guest + ' + '+ this.infants+' Infant(s)';
        
      } else {
        this.people =  this.person +' ' + guest;
      }
      this.showPersonModal = false;
    },
    saveRooms(){
      this.room = this.rooms ;
      this.room_text = this.room + ' Rooms';
      this.showRoomModal = false;
    },
    popularTour() {
      this.$axios.get("/api/travel-program/popular-tour").then((response) => {
        if(!response.data){
          this.apiFailed = true
        }
        this.popular_data = response.data;
      });
    },
    UpcomingData() {
      this.$axios.get("/api/travel-program/upcoming-tour").then((response) => {
        if(!response.data){
          this.apiFailed = true
        }
        this.upcoming_data = response.data;
        console.log(response.data)
      });
    },
    AllTours() {
      this.$axios.get("/api/travel-program/upcoming-tour").then((response) => {
        if(!response.data){
          this.apiFailed = true
        }
        this.allTour_data = response.data;
        console.log(response.data)
      });
    },

    searchHotels(){
      this.$cookies.set("hotelSearch_Location", this.sources.city);
      this.$cookies.set("hotelSearch_rooms", this.room);
      this.$cookies.set("hotelSearch_room_type", this.room_type);
      this.$cookies.set("hotelSearch_guests", this.person);
      this.$router.push('/hotel-search')
    },

    searchAll() {
      // Submit form
      console.log(this.tourtype_option)
      let vm = this;
      if(vm.noofday == '' || vm.tourtype == '' || vm.noofday == 'No. of days' || vm.tourtype == 'In mood for' || vm.clientType == 'Client Type'){
        return this.$swal.fire("Error", "Please select all the fields", "warning");
      }
      vm.searchForm.reset();
      let source = [];
      let destination = [];
      vm.searchForm.noofday = vm.noofday;
      vm.searchForm.tourtype = vm.tourtype;
      vm.searchForm.clientType = vm.clientType;
      // if multicity search or simple search
      if (vm.tripType == 'multicity') {
        //Multiple city search
        destination = vm.multi_destination.value;
        source = vm.multi_source.value;
        if (source.length > 1 && destination.length > 1) {
          vm.searchForm.source.push(source);
          vm.searchForm.destination.push(destination);
        } else {
          this.$swal.fire("Error", "Please select all the fields", "error");
        }
        var rows_length = vm.rows.length;
        for (var i = 0; i <= rows_length - 1; i++) {
          vm.searchForm.source.push(vm.rows[i].source.value);
          vm.searchForm.destination.push(vm.rows[i].destination.value);
        }
      } else {
        //Simple search
        vm.searchForm.source.push(vm.sources.value);
        vm.searchForm.destination.push(vm.destinations.value);
      }

      if (
        vm.searchForm.destination[0] != "" &&
        vm.searchForm.destination[0] != ""
      ) {
        vm.searchForm
          .post("api/search-itinerary")
          .then((res) => {
            vm.allSearchdata = res.data.data;
            if (vm.allSearchdata.length == 0) {
              this.modoals_show = true;
              $("#AlertModalForExplore").modal('show');
            }
          })
          .catch((error) => {
            //console.log(error)
            this.$swal.fire("Sorry", "No results found.", "info");
          });
      } else {
        this.$swal.fire("Alert", "please select locations", "error");
      }
    },
  },
};

</script>

<style scoped>
.explor-content input[type="text"], .explor-content select, .explor-content textarea,
.explor-Corporate input[type="text"], .explor-Corporate select, .explor-Corporate textarea,
.explor-General input[type="text"], .explor-General select, .explor-General textarea
 {
    border: 0px solid #ccc !important;
    width: 100%;
    height: 46.2px;
    border-radius: 4px;
    padding-left: 15px;
    font-size: 15px;

}
.marginT {
  margin-top: 10px !important;
}
legend {
    padding-bottom: 14px;
    text-align: left;
}
fieldset {
    margin-bottom: 14px;
    padding-bottom: 14px;
}
fieldset, input[type="button"] {
    border: 0;
}
input[type="button"] {
    background-color: #3490dc;
    color: #fff;
    cursor: pointer;
    width: 35px;
    height: 35px;
    font-size: 17px;
    border-radius: 20px;
    padding-bottom: 5px;

}
input[type="passengers"] {
    border: 1px solid #F4F3F3;
    height: 40px;
    width: 60%;
    text-align: center;
    outline: 2px solid transparent;
    outline-offset: 2px;
}
.personLables{
  color: grey;
  text-align: center;
  font-weight: 600;
}
.btn-primary{
  background-color: #3490dc !important;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.filter-cl{
    /*filter: invert(54%) sepia(71%) saturate(1853%) hue-rotate(338deg) brightness(101%) contrast(94%);*/
    background: #f77736;
    border-color: #f77736 !important;
}
.exp-icon{
    align-items: center;
    border: 1px solid #fff;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-family: Nunito Sans;
    font-size: 14px;
    justify-content: center;
    justify-items: center;
    margin-right: 35px;
    padding: 10px 12px;
    text-align: center;
}
.exp-icon-wd{
  width: 25px !important;
}
.select-style{
  margin-top: 5px;
}

@media (min-width: 576px){
  .select-style{
    margin-top: 36px;
  }
}

</style> 
