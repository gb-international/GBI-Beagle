<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  
  <div id="ourstory">
    <!-- <vue-headful
      title="About Us"
      description="@GoWithGBI Story On How GBI believes in its core values and implement the same  to make your educational travel program a successful one "
      keywords="@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs"
      image
      lang="en_US"
      ogLocale="en_US,en_UK"
      url="https://www.gowithgbi.com/about-us/our-story"
    /> -->

    <div class="banner_ourstory text_on_image banner_bg">
      <div class="content">
        <p class="heading">Our Story</p>
      </div>
    </div>

    <div class="container">
      <h1 class="gbi_main-heading pt-3 text-capitalize" style="margin-bottom: 10px !important;">
          About Us
      </h1>
      <h4 class="gbi_sub-heading text-capitalize m-0 p-0">
          Welcome to GB International, ”Your Educational Travel Planner”&nbsp; . A one-stop-shop for all your travel needs
      </h4>
      <p class="gbi_paragraph pt-2">
          One’s Action Can Inspire Others To Dream Bigger
      </p>
      <p class="gbi_paragraph pt-2">
          In ancient times, the offset of travel was only on the sole purpose of spiritual fulfillment and medicinal offerings. During the course of time, people began to explore different destinations for knowledge, cultural exploration, scenic beauty and other special interests. But much of our great historical monuments and culture are still unseen and unheard to many people.
      </p>
      <p class="gbi_paragraph pt-2">
          And so the journey of GBI was set forth in 1983 by our CEO Mr. Jasbir Singh Rikhi single-handedly with the motive to release the pressure of classroom learning and allow young minds to learn from new and engaging environments outside their comfort zone through experiential journeys.Serving for around 40 yrs in the industry, we provide a platform for young minds and passionate travelers to explore and discover different cultural aspects and scientific explorations across the globe with journeys booked through our web platforms.
      </p>
      <section class="bgcolor-section">
          <div class="col-lg-12">
            <article class="about-story">
                <div class="d-flex flex-lg-row flex-column justify-content-between align-items-center">
                  <div class="ourstory-content">
                      <p class="gbi_paragraph pt-2">
                        Mr. Jasbir Singh Rikhi, a&nbsp; passionate traveler himself from the hospitality sector, whenever used to hit the road on his Royal Enfield to explore new places, he realized that people who came to pay a visit to that particular destination would click a photo and move on without showing any interest in its rich history, culture and not even admiring the architectural and technological advancements. This made a huge impact on him and made him realize that there is a greater need to educate people(young minds and passionate travelers about our rich cultural heritage through fun and innovative methods.
                      </p>
                      <p class="gbi_paragraph pt-2">
                        He has been leading a team of passionate travelers. A mission and vision aimed at helping travelers of any age to learn, explore and discover the world, not just by traveling, but by blending in and enjoying the cultural and historical experiences the destination has to offer.
                      </p>
                  </div>
                  <div class="ourstory-content widthControl">
                      <figure class="image__wrapper loaded">
                        <div class="loader-overlay image__spinner"></div>
                        <img id="ourstoryimg1" :data-url="$gbiAssets+'/assets/front/images/CEO.png'" alt="our story" class="image__item ic-cal-re widthControl" :src="$gbiAssets+'/assets/front/images/CEO.png'">
                      </figure>
                  </div>
                </div>
            </article>
          </div>
      </section>
      <section>
          <div class="col-lg-12">
            <article>
                <div class="d-flex flex-lg-row flex-column justify-content-between align-items-center">
                  <div class="ourstory-content">
                      <h1 class="gbi_main-heading pt-3 text-capitalize">
                        Our Achievement
                      </h1>
                      <h4 class="gbi_sub-heading text-capitalize m-0 p-0">
                        The choice of journey shapes mundane reality
                      </h4>
                      <p class="gbi_paragraph pt-2">
                        Our company’s success is not just by the world class service we provide. But&nbsp; how&nbsp; we as a team have brought a great impact in the life of a traveler. Our main aim has always been to educate young travelers and help them learn, explore and discover ; through real-world exposure. As we believe that children understand the best when they are left to discover, explore and learn on their own in physical learning environments. Not just young students but also catering services to travel enthusiasts of all age groups is our aim.&nbsp;
                      </p>
                      <p class="gbi_paragraph pt-2">
                        Working with different sectors of society like youngsters who attend school and college, corporates with a busy life, families to bond with, couples, and people from all age groups and backgrounds. It is a challenge but we promise to deliver the best of services and cater to all your needs at all times no matter which group you belong to.
                      </p>
                  </div>
                </div>
                <p class="gbi_paragraph pt-2 mt-1">
                  Our Milestone :GBI has sent more than two&nbsp; lakh students to different destinations across the globe.
                </p>
                <p class="gbi_paragraph pt-2 mt-1">
                  So, whether you're a student, a corporate team or a family, a first-time traveler or a seasoned jet-setter, we invite you to join us on your next adventure and discover the world with us.
                </p>
            </article>
          </div>
      </section>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import Heading from '@/front/components/layout/Heading.vue';
import SubHeading from '@/front/components/layout/SubHeading.vue';
import Paragraph from '@/front/components/layout/Paragraph.vue';
export default {
  name: "OurStory",
  components:{
    "heading":Heading,
    "sub-heading":SubHeading,
    "paragraph" : Paragraph
  },
  metaInfo: {
    title: 'Learn more about the best travel guide and agency| GowithGBI',
    meta:[
      { name: 'description', content: 'GOwithGBI is in the business of tourism and travel since last 40 years| learn about us while getting the affordable deals only on GowithGBI' },
      { name: 'keywords', content: '@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs' },
      { name: 'url', content: 'https://www.gowithgbi.com/about-us' },
    ]
  },
  beforeCreate(){
    let metaInfo = {
      title: 'Learn more about the best travel guide and agency| GowithGBI',
      description: 'GOwithGBI is in the business of tourism and travel since last 40 years| learn about us while getting the affordable deals only on GowithGBI',
      keywords: '@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs',
      url: 'https://www.gowithgbi.com/about-us',
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