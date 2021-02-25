<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div id="safetysecurity">
    <div class="safety_banner text_on_image banner_bg">
      <div class="content">
        <p class="heading">SAFETY & SECURITY</p>
      </div>
    </div>

    <div class="container">
      <!-- Start how we work -->
      <div class="safety-security">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-md-6 col-lg-6">
              <h1>Safety and Security</h1>
              <h2>Your Safety Our Responsibility</h2>
              <p>We curate and execute our programs in such a way that can enhance one’s living skills through the experience they gather while moving out of their comfort zone. We appreciate and understand the concern showed by parents and the institution towards the safety, security and comfort of the students during the proposed educational tour. We, therefore, intend to provide a worry-free experience. Our extensive experience, customized itineraries and risk management standards with safety protocols strive to deliver a hassle-free tour under the guidance of our trained escorts.</p>
            </div>
            <div class="col-md-6 col-lg-6">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  id="safetyimg1"
                  class="image__item safe-seu-img"
                  :data-url="`/assets/front/images/safety_security.jpg`"
                  alt="GBI safety security"
                />
              </figure>
            </div>
          </div>
          <h2>We Put Efforts to Make Your Trip Worth Breathe Taking</h2>
          <p>Students are accompanied by experienced and friendly travel guide ensuring their safety and security. Our guides have been carefully selected for their sensitivity and knowledge of the destination. Besides their day-to-day responsibilities, they are also trained to deal with an unforeseen circumstance. They work with all efforts to transform every experience into effective learning.</p>
        </div>
      </div>
      <!-- End how we work -->
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SafetySecurity",
   metaInfo: {
    title: 'Safety and Security',
    meta:[
      { name: 'description', content: '@GoWithGBI aims to provide complete safety of its travellers during the education programs,GBI team members assuers the safety of passengers and is known for it' },
      { name: 'keywords', content: '@GoWithGBI,travel safety tips,our security policies,GBI strict policies,GBI terms and conditions,safe travel' },
      { name: 'url', content: 'https://www.gowithgbi.com/about-us/safety-security' },
    ]
  },
};
</script>