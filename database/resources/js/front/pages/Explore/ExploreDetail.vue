<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->

  <div id="explorelist">
    <section class="banner-block">
      <img
        
        :src="`/uploadimage/${itineraryData.detail_photo}`"
        loading="lazy"
        alt="itinerary"
      />
    </section>
    {{editData}}
    <div class="container">
      <div class="w-100 text-right mt-2">
        <button
          class="btn profile_button text-white book_btn"
          data-toggle="modal"
          data-target="#bookModal"
        >Book Now</button>
      </div>
      <div class="w-100 pt-2 text-center">
        <h1 class="font-20 text-uppercase pt-2 pb-2"><u>{{itineraryData.title}}</u></h1>
      </div>
      <div class="description" v-html="description"></div>
      <div class="row w-100 pt-3" id="explore_detail_part">
        <div class="col-sm-4" v-for="data in itineraryData.itinerarydays" :key="data.id">
          <h4 class="day_tab">Day {{ data.day}}</h4>
          <h1
            class="explor-head"
            v-if="data.day_source != data.day_destination"
          >{{data.day_source.toUpperCase() }} - {{data.day_destination.toUpperCase()}}</h1>
          <h1 class="explor-head" v-else>{{ data.day_source.toUpperCase() }}</h1>
          <div class="card-text card-text-ul" v-html="data.day_description"></div>
        </div>
      </div>
    </div>

    <!-- Booking Modal -->
    <div class="modal" id="bookModal">
      <div class="modal-dialog">
        <div class="modal-content modal-color">
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <booking></booking>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  booking  from "@/front/components/Booking.vue";

export default {
  name: "ExploreDetail",
  components: {
    booking
  },
  metaInfo: {
    title: "GBI Explore Destination",
    meta: [
      {
        name: "description",
        content:
          "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button"
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs"
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/resources/explore-destination"
      }
    ]
  },
  data() {
    return {
      day: 0,
      description: "",
      itineraryData: [],
      
    };
  },

  mounted() {
    this.$store.dispatch(
      "getEditData",
      `/api/itinerary/${this.$route.params.id}`
    );
  },

  computed: {
    editData() {
      this.itineraryData = this.$store.getters.getEditData;
    }
  },
  methods: {
    
  }
};
</script>
