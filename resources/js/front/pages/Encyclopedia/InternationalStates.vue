<template>
      <!--************************************************
      Author: @Ajay, @Manas
      ****************************************************-->
  <!-- Edits: Edits were made to functions - stateList(), SelectBox(), resultQuery(), to make international country searches. Custom text was added for error message on no data searches. -->
  <errorState :imgName="'encyclopedia_500x500.png'" v-if="apiFailed"/>
  <div class="States" v-else>
    <div class="encyclopedia_banner text_on_image banner_bg explore_bg_img">
      <div class="content encyclopedia">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-4">
              <div class="encyclopedia-content">
                <h1 class="heading">International Encyclopedia</h1>
                <span
                  class="sub"
                >Explore and embrace the vibrancy of cultures and traditions of the beautiful countries and states of the globe</span>
              </div>
            </div>
            <div class="col-sm-8 search_filter">
              <!--  serach itinerary list in serach bar-->
              <div class="search-p-top">
                <div class="input-group p-2 bg-light-card">
                  <model-select
                    :options="options"
                    v-model="searchQuery"
                    placeholder="Search encyclopedia..."
                  ></model-select>
                </div>
              </div>
            </div>
            <div class="col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <div class="container">
      <div class="container">
        <div class="row" v-if="state_list.length">
          <div class="col-sm-4 states_card" v-for="state in resultQuery" :key="state.id">
            <router-link :to="`/encyclopedia/${state.slug}`">
              <div class="card">
                <figure v-lazyload class="image__wrapper card_image_ency">

                  <ImageSpinner class="image__spinner" />
                  <img
                    class="image__item card-img-top"
                    :src="state.thumbnail"
                    :data-url="state.thumbnail"
                    :alt="state.state_name"
                  />
                </figure>
                
                <div class="card-img-overlay text-center">
                  <p class="card-text text-white">{{ state.state_name }}</p>
                </div>
              </div>
            </router-link>
          </div>
          <div v-show="resultQuery.length < 1" style="object-position: center; max-width: 350px; margin: auto;">
            <img :src="$gbiAssets+'/assets/errorImages/encyclopedia-search.png'"/> 
          </div>
          <!-- <p v-show="resultQuery.length < 1" style="color: black; margin-top: 10vh; font-size: 20px;">Information about this State/Region is current not available, we will update it soon.</p> -->
        </div>
        <!-- If Loading -->
        <div class="row" v-else>
          <div class="col-sm-4 states_card" v-for="(index) in 12" :key="index">
              <cardLoader />
          </div>
        </div>

      </div>
      <br />
    </div>
  </div>
</template>



<script>
import { ModelSelect } from "vue-search-select";
import cardLoader from '@/front/components/loaders/CardLoaderEncy';
export default {
  name: "InternationalStates",
  components: {
    ModelSelect,
    cardLoader
  },
  data() {
    return {
      state_list: [],
      options: [],
      searchQuery: null,
      apiFailed: false
    };
  },
  beforeCreate(){
    var metaInfo = {
      title: 'GBI Travel Encyclopedia | International States',
      description: 'GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.',
      keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
      url: 'https://www.gowithgbi.com/resources/travel-encyclopedia-international',
      type: 'website'
    }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
  created() {
    this.stateList();
    this.SelectBox();
  },
  watch: {
    resultQuery: function() {
      //console.log(this.searchQuery);
      if(this.resultQuery.length <= 0){
      // return this.$swal.fire("No Results!", "Information about this State/Region is current not available.", "info"); 
      }
    }
  },
  methods: {
    stateList() {
      this.$axios.get("/api/encyclopedia-list").then(response => {
        //this.state_list = response.data;
        if(!response.data){
          this.apiFailed = true
        }
        for (let i = 0; i < response.data.length; i++) {
              if(response.data[i].country !== 'India' ){
                  this.state_list.push(response.data[i]);
              }
            }
            console.log(this.state_list)
        });
      },
      SelectBox() {
        this.$axios.get("/api/country").then(response => {
          for (var i = 0; i < response.data.length; i++) {
            if(response.data[i].id !== 2 ){
              this.options.push({
                value: response.data[i].name,
                text: response.data[i].name
              });
            }
          }
      });
    },
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.state_list.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.country.toLowerCase().includes(v));
        });
      } else {
        return this.state_list;
      }
    }
  }
};
</script>
  