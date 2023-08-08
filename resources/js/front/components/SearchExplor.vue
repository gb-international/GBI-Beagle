<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <!-- start banner area display image for itinerary listing -->
  <div id="explorelist" class="serachExplor w-100">
    <section class="banner-block">
      <img class="top-imgs" alt="image" />
    </section>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <itinerary-list :list="allSearchdata"></itinerary-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import ItineraryList from "@/front/components/ItineraryList";
export default {
  name: "ExploreList",
  props: ["allSearchdata"],
  components: {
    ItineraryList
  },
  data() {
    return {};
  }
};
</script>