<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  
  <div id="howwework">
    <div class="howwework_banner text_on_image banner_bg">
      <div class="content">
        <p class="heading">How We Work</p>
      </div>
    </div>

    <div class="container mt-2">
      <heading text="How We Work" />
      <paragraph text="We at GB International follow a  ROFRE mechanism  which helps our teams to execute and plan the excursions based on the requirements of the clients (students and travelers). Every GBI  team member takes into the consideration the scope of the travel and based on the custom needs we plan and execute the trip. Our 40 years of research and experimental approach has helped us understand the customer and their needs better."/>
        <paragraph text="R-Requirement gathering"/>
        <paragraph text="O-Objective"/>
        <paragraph text="F-Financial Planning"/>
        <paragraph text="R-Road Map"/>
        <paragraph text="E-Execution"/>
        <paragraph text="Travel research for destination and market"/>
        <sub-heading text="Itinerary Development" />
        <paragraph text="Understanding the objective of travel plan include the main curriculum handpicked ,collaborate ,research problem, research and resource material, curriculum connection."/>
        <sub-heading text="Financial Planning" />
        <paragraph text="Gathering requirements and scope, creating a road map, performing analysis , travel and implementation planning and executing  the plan."/>
    </div>

    <!-- End how we work -->

    <!-- Start experience include-->
    <section class="bgcolor-section p-bottom-20 mt-4">
      <heading class="text-center" text="Your Experience Includes" />
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card-container">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item cards-img"
                  :data-url="`/assets/front/images/img/airfare.png`"
                  alt="airfare GBI"
                />
              </figure>

              <div class="card-block p-top-10">
                <h4 class="card-title">Airfare And Transportation</h4>
                <p
                  class="card-text p-l-r"
                >Round-trip airfares, railway fares and comfortable ac coach</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card-container">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item cards-img"
                  :data-url="`/assets/front/images/img/hotel.png`"
                  alt="hotel GBI"
                />
              </figure>

              <div class="card-block p-top-10">
                <h4 class="card-title">Hotel</h4>
                <p class="card-text p-l-r">Overnight stays in hotels with private washroom</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card-container">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item cards-img"
                  :data-url="`/assets/front/images/img/reginoal.png`"
                  alt="reginoal GBI"
                />
              </figure>
              <div class="card-block p-top-10">
                <h4 class="card-title">Regional-Style Meal</h4>
                <p class="card-text p-l-r">Includes three-time lip-smacking regional style meal</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card-container">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item cards-img"
                  :data-url="`/assets/front/images/img/gudided.png`"
                  alt="gudided GBI"
                />
              </figure>

              <div class="card-block p-top-10">
                <h4 class="card-title">Guided Sightseeing</h4>
                <p class="card-text p-l-r">Experience sightseeing with expert tour guides</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card-container">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item cards-img"
                  :data-url="`/assets/front/images/img/entrance.png`"
                  alt="entrance GBI"
                />
              </figure>

              <div class="card-block p-top-10">
                <h4 class="card-title">Entrances</h4>
                <p
                  class="card-text p-l-r"
                >Includes entry fees of both domestic as well as international sight scenes.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card-container">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item cards-img"
                  :data-url="`/assets/front/images/img/experiential.png`"
                  alt="experiential GBI"
                />
              </figure>

              <div class="card-block p-top-10">
                <h4 class="card-title">Experiential Learning</h4>
                <p class="card-text p-l-r">We compliment classroom learning with a touch of the real</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card-container">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item cards-img"
                  :data-url="`/assets/front/images/img/emergency-support.png`"
                  alt="emergency-support GBI"
                />
              </figure>

              <div class="card-block p-top-10">
                <h4 class="card-title">Emergency Support</h4>
                <p class="card-text p-l-r">We provide 24 hours safety and security to our students</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card-container">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item cards-img"
                  :data-url="`/assets/front/images/img/continous.png`"
                  alt="continous GBI"
                />
              </figure>

              <div class="card-block p-top-10">
                <h4 class="card-title">Continuous Support</h4>
                <p
                  class="card-text p-l-r"
                >Our GBI team will keep assisting you in every step of your journey with us.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4">
            <div class="card-container">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item cards-img"
                  :data-url="`/assets/front/images/img/finely.png`"
                  alt="finely GBI"
                />
              </figure>

              <div class="card-block p-top-10">
                <h4 class="card-title">Finely Curated Programs</h4>
                <p
                  class="card-text p-l-r"
                >Our team offers a number of tour programs covering a wide array of topics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Heading from '@/front/components/layout/Heading.vue';
import SubHeading from '@/front/components/layout/SubHeading.vue';
import Paragraph from '@/front/components/layout/Paragraph.vue';
export default {
  name: "HowWework",
  components:{
    "heading":Heading,
    "sub-heading":SubHeading,
    "paragraph" : Paragraph
  },
   metaInfo: {
    title: 'How We Work',
    meta:[
      { name: 'description', content: '@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one' },
      { name: 'keywords', content: '@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs' },
      { name: 'url', content: 'https://www.gowithgbi.com/about-us/how-we-work' },
      { name: 'type', content: 'website' },

    ]
  },
  
  data(){
    return {

    }
  },
  beforeCreate(){
    let metaInfo = {
      title: 'How We Work',
      description: '@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one',
      keywords: '@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs',
      url: 'https://www.gowithgbi.com/about-us/how-we-work',
      type: 'website'
    }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  }
};
</script>

<style scoped>
.card-title {
    font-family: 'Nunito Sans' !important;
    text-align: center !important;
    font-weight: 600 !important;
}
</style>
