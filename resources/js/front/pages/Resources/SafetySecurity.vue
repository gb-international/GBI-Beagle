<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div id="safetysecurity">
    <div class="safety_banner text_on_image banner_bg">
      <div class="content">
        <p class="heading">Safety & Security</p>
      </div>
    </div>

    <div class="container">
      <!-- Start how we work -->
      <div>
        <div class="row mt-5">
          <div class="col-md-6 col-lg-6">
            <heading text="Safety and Security" />
            <sub-heading text="Your Safety Our Responsibility" />
            <paragraph text="We are completely aware of your travel worries and equally concerned with the issues related to the safety of oneself and your fellow travelers.Thereby ensuring a complete well-planned itinerary where there are limited chances of any security lapses. Our extensive travel experience in handling practical scenarios and managing risks with safety protocols, we strive to deliver a hassle-free journey under the guidance of our thoroughly trained tour leaders." />
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
        <sub-heading text="We Put Efforts to Make Your Trip Worth Breathe Taking" />
        <paragraph text="Every group oriented journey that is planned with GBI, an experienced and a friendly tour leader is assigned who ensures your personal safety and security and other travel needs. Our tour leaders are carefully assessed and selected for their sensitivity and knowledge of that very destination. Besides their day-to-day responsibilities, they are also trained to deal with the unforeseen circumstances." />
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/front/components/layout/Heading.vue';
import SubHeading from '@/front/components/layout/SubHeading.vue';
import Paragraph from '@/front/components/layout/Paragraph.vue';
export default {
    name: "SafetySecurity",
    components:{
      "heading":Heading,
      "sub-heading":SubHeading,
      "paragraph" : Paragraph
    },
  beforeCreate(){
    let metaInfo = {
        title: 'Safety and Security',
        description: '@GoWithGBI aims to provide complete safety of its travellers during the education programs,GBI team members assuers the safety of passengers and is known for it',
        keywords: '@GoWithGBI,travel safety tips,our security policies,GBI strict policies,GBI terms and conditions,safe travel',
        url: 'https://www.gowithgbi.com/about-us/safety-security',
        type: 'website'
      }
     document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
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