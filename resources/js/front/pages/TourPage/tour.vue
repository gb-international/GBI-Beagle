<template>
      <!--************************************************
      Author:@Manas
      ****************************************************-->
  <div id="tourPage">

    <div class="text_on_image banner_bg" style="background-image:url('https://gbi-assets.s3.ap-south-1.amazonaws.com/itinerary-image-63fc4ca9d91b5-1677479081129070.jpeg'); background-position: center;">
      <div class="content">
        <!-- <p class="heading">Tour Details</p> -->
      </div>
    </div>

    <div class="container">
      <h1 class="gbi_main-heading pt-3 text-capitalize" style="margin-bottom: 10px !important;">
          Trip To KOCHI TRIVANDRUM KANYAKUMARI
      </h1>
      <h4 class="gbi_sub-heading text-capitalize m-0 p-0">
          Start Date: 25/08/2023 | End Date: 30/08/2023
      </h4>
      <p class="gbi_paragraph pt-1">
          School Name: GB International School
      </p>
      <p class="gbi_paragraph pt-1">
          Number of Students: 25
      </p>
      <p class="gbi_paragraph pt-1">
          Total amount paid: 50,000
      </p>
      <p class="gbi_paragraph pt-1">
          Last Payment date: 20/08/2023
      </p>
      <p class="gbi_paragraph pt-1">
          Payment Status: <span style="color: green">Complete</span>
      </p>
      <p class="gbi_paragraph pt-1">
          Booking Status: <span style="color: orange">In Progress</span>
      </p>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>

import tourLogin from "@/front/pages/TourPage/tourLogin.vue";
import Heading from '@/front/components/layout/Heading.vue';
import SubHeading from '@/front/components/layout/SubHeading.vue';
import Paragraph from '@/front/components/layout/Paragraph.vue';
export default {
  name: "TourPage",
  components:{
    "heading":Heading,
    "sub-heading":SubHeading,
    "paragraph" : Paragraph
  },
  data() {
    return {
      logged: true,
    };
  },
  metaInfo: {
    title: 'Tour Page | GBI',
    meta:[
      { name: 'description', content: 'We, GB International deal in providing customized itineraries to educational institutions, corporates, and to family travellers.' },
      { name: 'keywords', content: '@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs' },
      { name: 'url', content: 'https://www.gowithgbi.com/' },
    ]
  },
  beforeCreate(){
    let metaInfo = {
      title: 'Tour Page | GBI',
      description: 'We, GB International deal in providing customized itineraries to educational institutions, corporates, and to family travellers.',
      keywords: '@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs',
      url: 'https://www.gowithgbi.com/',
      type: 'website'
    }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
};
</script>

<style scoped>
.widthControl{
  width: 70% !important
}
@media only screen and (max-width: 824px) {
.widthControl{
  width: 90% !important
}
}
</style>