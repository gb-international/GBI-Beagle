<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <!-- Remove this dummy_height when you add some data to this page -->
  <div class="States">
    <div class="encyclopedia_banner text_on_image banner_bg explore_bg_img">
      <div class="content encyclopedia">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-4">
              <div class="encyclopedia-content">
                <h1 class="heading">Encyclopedia</h1>
                <span
                  class="sub"
                >Explore and embrace the vibrancy of cultures and traditions of the beautiful countries and states of the globe</span>
              </div>
            </div>
            <div class="col-sm-8 search_filter">
              <!--  serach itinerary list in serach bar-->
              <div class="search-p-top">
                <div class="input-group p-2 bg-skyblue">
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
                    :data-url="getImgUrl(state.thumbnail)"
                    alt="GBI Encyclopedia"
                  />
                </figure>
                <div class="card-img-overlay text-center">
                  <p class="card-text text-white">{{ state.state_name }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>



<script>
import { ModelSelect } from "vue-search-select";
export default {
  name: "States",
  components: {
    ModelSelect
  },
  data() {
    return {
      state_list: [],
      options: [],
      searchQuery: null
    };
  },
  created() {
    this.stateList();
    this.SelectBox();
  },
  watch: {
    searchQuery: function() {
      console.log(this.searchQuery);
    }
  },
  methods: {
    stateList() {
      this.$axios.get("/api/encyclopedia-list").then(response => {
        this.state_list = response.data;
      });
    },
    SelectBox() {
      this.$axios.get("/api/state").then(response => {
        for (var i = 0; i < response.data.length; i++) {
          this.options.push({
            value: response.data[i].name,
            text: response.data[i].name
          });
        }
      });
    },
    getImgUrl(img) {
      return "/encyclopedia/" + img;
    }
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.state_list.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.state_name.toLowerCase().includes(v));
        });
      } else {
        return this.state_list;
      }
    }
  }
};
</script>
  