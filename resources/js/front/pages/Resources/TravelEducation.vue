<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div id="traveleducation">
    <div class="education_banner text_on_image banner_bg">
      <div class="content">
        <p class="heading">TRAVEL & EDUCATION</p>
      </div>
    </div>

    <div class="container">
      <!-- Start main content -->

      <!-- Start heading -->
      <section class="edutravel-heading">
        <h1>Education and Travel</h1>
      </section>
      <!-- End heading -->
      <section class="bgcolor-section">
        <!-- Start main content -->

        <!-- Start travel education -->
        <section class="edutravel-content">
          <h2>Stimulate the Craze to Reinvent the Self</h2>
          <p>Travel is exciting, also scary at times but the outcome ought to be memorable. Leaving expectations of lives at home and embracing the customs of different culture, such journey can result in a lifelong personal transformation. Travel not only bring a new level of understanding about global culture but also opens the door to the unexpected and the wonderful. There is something surreal about stepping away from your wallflower persona, isn’t it!! The wander and awe at a sight, the typical emotions of a traveler leaves an overwhelming impact on the pretty much monotonous life. One trip push you constantly to embark on another. Tours can help you become more confident, adventures and open to the world around you.</p>
          <h2>Boost Your Conscious</h2>
          <p>GBI curate tours in a way that foster respect, inquisitiveness and appreciation. We are dedicated to provide real world learning opportunities that support your academic objective besides some amazing memories. Our experiential learning helps students return to the classroom refreshed and reinvigorated with practical knowledge and new skills.</p>
        </section>
        <!-- End travel education -->
      </section>
      <div class="col-sm-12 mb-30">
        <section class="section-edu">
          <h2>Real education happens outside the classroom and travel is the best way to learn. Get the opportunity to engage with the real.</h2>
          <article class="edu-blockcontent">
            <div class="col-sm-12">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item"
                  :data-url="`/assets/front/images/img/edu1.png`"
                  alt="GBI science"
                />
              </figure>

              <h3>Science and Tech Museum</h3>
              <p>Acknowledge about the human discoveries and learn how science and Tech have influenced the mundane reality of people</p>
            </div>
          </article>
          <article class="edu-blockcontent border-leftcontent">
            <div class="col-sm-12">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item"
                  :data-url="`/assets/front/images/img/edu2.png`"
                  alt="GBI flora"
                />
              </figure>

              <h3>Flora and Fauna</h3>
              <p>Visit the National Parks, Theme Parks and take pleasure in the awe-inspiring natural wonders of the world</p>
            </div>
          </article>
          <article class="edu-blockcontent border-leftcontent">
            <div class="col-sm-12">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item"
                  :data-url="`/assets/front/images/img/edu3.png`"
                  alt="GBI adventure"
                />
              </figure>
              <h3>Adventure and Activities</h3>
              <p>We indulge students in adventure activities like camping, Trekking, Rafting, Ziplining and many more</p>
            </div>
          </article>
          <article class="edu-blockcontent border-topcontent">
            <div class="col-sm-12">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item"
                  :data-url="`/assets/front/images/img/edu4.png`"
                  alt="GBI heritage"
                />
              </figure>
              <h3>Heritage Arts and Crafts</h3>
              <p>Get a hands on experience of age old art and craft from long standing history popular across the world</p>
            </div>
          </article>
          <article class="edu-blockcontent border-topcontent border-leftcontent">
            <div class="col-sm-12">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item"
                  :data-url="`/assets/front/images/img/edu5.png`"
                  alt="GBI brand"
                />
              </figure>
              <h3>Brand Factories</h3>
              <p>Visit to developed industries to help students gain a clear understanding of the nuances and strategies of setting up a successful business</p>
            </div>
          </article>
          <article class="edu-blockcontent border-topcontent border-leftcontent">
            <div class="col-sm-12">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item"
                  :data-url="`/assets/front/images/img/edu6.png`"
                  alt="GBI history"
                />
              </figure>
              <h3>History and Culture</h3>
              <p>Acknowledge the diverse culture reflected in distinct architectural styles, regional cuisines, traditional dance form and music.</p>
            </div>
          </article>
        </section>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: "TravelEducation",
   metaInfo: {
    title: 'Travel and Education',
    meta:[
      { name: 'description', content: '@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one' },
      { name: 'keywords', content: '@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs' },
      { name: 'url', content: 'https://www.gowithgbi.com/resources/travel-education' },
    ]
  },

};
</script>
