<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <!-- start banner area display image for itinerary listing -->
  
  <div id="explorelist">
    <section class="banner-block explore_list_search mb-20">
      <div class="col-lg-12">
        <div class="container">
          <div class="row">
            <div class="col-10 search-p-top">
              <div class="input-group">
                <input
                  class="form-control border-secondary py-2 h-45 explo-list-search"
                  v-model="keyword"
                  @keyup="RealSearch"
                  type="search"
                  placeholder="Search your itinerary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
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

    
  </div>
</template>

<script>
import Observer from "@/front/components/Observer";
import ItineraryList from "@/front/components/ItineraryList";
import _ from "lodash";
export default {
  name: "ExploreList",
  components: {
    Observer,
    ItineraryList
  },
  data() {
    return {
      keyword: "",
      page: 1,
      items_list: [],
      itineraryData: {},
      loading: false
    }
  },
  // get api data itinerary data
  mounted() {
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
    }, 1000)
  }
};
</script>
