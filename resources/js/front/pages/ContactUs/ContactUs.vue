<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  
  <div id="contactus">
    <div class="contact_us_banner text_on_image banner_bg">
      <div class="content">
        <p class="heading">Contact Us</p>
      </div>
    </div>
    <!-- End banner area -->
    <main>
      <div class="row">
        <div class="col-lg-12 p-t-15">
          <article class="container contactus">
            <div class="row">
              <div class="col-lg-6">
                <div class="col-lg-12 icons">
                  <heading class="mb-3" text="Head Office" />

                  <div class="row mb-3">
                    <div class="col-1">
                      <figure v-lazyload class="image__wrapper">
                        <ImageSpinner class="image__spinner" />
                        <img
                          class="image__item"
                          :data-url="`assets/front/images/address_icon.png`"
                          alt="address"
                        />
                      </figure>
                    </div>
                    <div class="col-11">G-32,DDA Commercial Complex, Sheikh Sarai Phase-1, New Delhi 110017</div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-1">
                      <figure v-lazyload class="image__wrapper">
                        <ImageSpinner class="image__spinner" />
                        <img
                          class="image__item"
                          :data-url="`assets/front/images/phone_icon.png`"
                          alt="address"
                        />
                      </figure>
                    </div>
                    <div class="col-11">011-26017120, 26011683 ,
                          <br />+91 9810055102</div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-1">
                      <figure v-lazyload class="image__wrapper">
                        <ImageSpinner class="image__spinner" />
                        <img
                          class="image__item ic-mail"
                          :data-url="`assets/front/images/email_icon.png`"
                          alt="address"
                        />
                      </figure>
                    </div>
                    <div class="col-11">info@gbinternational.in
                          <br />reservations@gbinternational.in</div>
                  </div>

                  <div class="headline mb-3">
                    <heading text="Regional Office" />
                  </div>

                  <div class="row mb-3">
                    <div class="col-1">
                      <figure v-lazyload class="image__wrapper">
                        <ImageSpinner class="image__spinner" />
                        <img
                          class="image__item ic-add"
                          :data-url="`assets/front/images/address_icon.png`"
                          alt="address"
                        />
                      </figure>
                    </div>
                    <div class="col-11">302, Zeenath Residency Srinagar Colony, Plot #29, Hyderabad - 500073 Andhra Pradesh</div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-1">
                      <figure v-lazyload class="image__wrapper">
                        <ImageSpinner class="image__spinner" />
                        <img
                          class="image__item ic-cal-re"
                          :data-url="`assets/front/images/phone_icon.png`"
                          alt="number"
                        />
                      </figure>
                    </div>
                    <div class="col-11">+91 9717922240,<br />+91 9810055102</div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1110823555123!2d77.22139051508042!3d28.536380682455928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2214a7825c5%3A0xbef6ae1702026f1c!2sGB+International!5e0!3m2!1sen!2sin!4v1554198180729!5m2!1sen!2sin"
                    width="100%"
                    height="190"
                    frameborder="0"
                    loading="lazy"
                    style="border:0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div class="col-lg-6">
                <article class="contact-form">
                  <div class="title-contact">
                    <h2 class="contact-h2">Contact Us</h2>
                  </div>
                  <!--form contact us-->
                  <ContactusForm />
                </article>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
     <!-- Modal body -->
         <!-- <div :class="showCount ? 'modal fade show' : 'modal fade d-none' " aria-modal="true" style="padding-right: 17px; display: block;" id="counterModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-div" role="document">
              <div class="modal-content">
                <div class="" style="margin: 2px 10px !important;">
                  <button type="button" class="close" @click="showCount = false">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <h5 class="counter-title" id="counterModal">We are under development</h5>
                  <h5 class="counter-text my-4" id="counterModal">We are currently improving the web app to serve our customers better, we will be back soon with more enhanched features.</h5>
                 <div class="CountDiv my-4">
                  <div class="text-center CountDiv2">
                   <span class="counterDigits">
                      <p class="counter-style1" id="countDownD1"></p>
                      <p class="counter-style1" id="countDownD2"></p>
                   </span>
                   <span class="counter-style2">Days</span> 
                  </div>
                  <div class="text-center CountDiv2">
                   <span class="counterDigits">
                      <p class="counter-style1" id="countDownH1"></p>
                      <p class="counter-style1" id="countDownH2"></p>
                   </span>
                   <span class="counter-style2">Hours</span> 
                  </div>
                  <div class="text-center CountDiv2">
                   <span class="counterDigits">
                      <p class="counter-style1" id="countDownM1"></p>
                      <p class="counter-style1" id="countDownM2"></p>
                   </span>
                   <span class="counter-style2">Minutes</span> 
                  </div>
                  <div class="text-center CountDiv2">
                   <span class="counterDigits">
                      <p class="counter-style1" id="countDownS1"></p>
                      <p class="counter-style1" id="countDownS2"></p>
                   </span>
                   <span class="counter-style2">Seconds</span> 
                  </div>
                </div>  -->
               <!-- </div>
              </div>
            </div>
          </div> -->
  </div>
</template>

<script>
import ContactusForm from "@/front/components/ContactusForm.vue";
import Heading from '@/front/components/layout/Heading.vue';
import counter from "@/front/pages/ContactUs/counter.js";
export default {
  name: "ContactUs",
   metaInfo: {
    title: 'Contact the best Travel and tourism agency and guide in the town| GOwithGBI',
    meta:[
      { name: 'description', content: 'Contact GOwithGBI for any related queries regarding your upcoming tours or regarding booking tours. Best travel agency in India| GOwithGBI' },
      { name: 'keywords', content: '@GoWithGBI,GB International,Connect With GB International,Email Us,Talk To Us,Need a travel solution' },
      { name: 'url', content: 'https://www.gowithgbi.com/contact-us' },
    ]
  },
  components:{
    ContactusForm,
    counter,
    Heading,
  },
  data() {
    return {
        showCount: true
    };
  },
  beforeCreate(){
    var metaInfo = {
      title: 'Contact the best Travel and tourism agency and guide in the town| GOwithGBI',
      description: 'Contact GOwithGBI for any related queries regarding your upcoming tours or regarding booking tours. Best travel agency in India| GOwithGBI',
      keywords: '@GoWithGBI,GB International,Connect With GB International,Email Us,Talk To Us,Need a travel solution',
      url: 'https://www.gowithgbi.com/contact-us',
      type: 'website'
    }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
};
</script>

<style scoped>
.contact-h2 {
    font-size: 21px;
    padding-top: 26px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    color: black;
}
.counter-title{
  font-size: 39px;
  font-family: 'Nunito Sans';
  font-weight: 700;
  color: #212529;
  text-align: center;
  padding: 5px;
  margin-right: 1.6vw;
  margin-bottom: 15px;
}
.counter-text{
  font-size: 18px;
  font-family: 'Nunito Sans';
  font-weight: 600;
  color: #212529;
  text-align: center;
  padding: 5px;
  margin-right: 1.6vw;
  margin-bottom: 50px;
}
.counterDigits{
  display: flex;
  justify-content: center;
  margin-right: 1.6vw;
}
.counter-style1{
  font-size: 28px;
  font-family: 'Nunito Sans';
  font-weight: 600;
  color: white;
  background: black;
  text-align: center;
  border: solid 1px;
  border-radius: 5px;
  margin-right: 1px;
  padding: 5px 10px;
}
.counter-style2{
  font-size: 15px;
  font-family: 'Nunito Sans';
  font-weight: 600;
  color: black;
  text-align: center;
  margin-right: 1.6vw;
  padding: 5px;
  margin-top: -10px;
}
.CountDiv{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.CountDiv2{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.modal-div {
    display: inline-block;
    text-align: center;
    width: 650px;
}
.modal-head {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: none !important;
}

@media (max-width: 665px) { 
  .modal-div {
    display: inline-block;
    text-align: center;
    width: 350px;
 }
 .counter-title{
  font-size: 22px;
  margin-bottom: 5px;
}
.counter-text{
  font-size: 14px;
  margin-bottom: 30px;
}
.counter-style1{
  font-size: 17px;
}
.counter-style2{
  font-size: 13px;
}
}
</style>