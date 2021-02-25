<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  
  <div id="contactus">
    <div class="contact_us_banner text_on_image banner_bg">
      <div class="content">
        <p class="heading">CONTACT US</p>
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
                  <h2 class="mb-3">HEAD OFFICE</h2>

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
                    <h2>REGIONAL OFFICE</h2>
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
                    <h2>Contact Us</h2>
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
  </div>
</template>

<script>
import ContactusForm from "@/front/components/ContactusForm.vue";
export default {
  name: "ContactUs",
   metaInfo: {
    title: 'GBI Contact Us',
    meta:[
      { name: 'description', content: 'Connect With GB International for organizing your educational travel plans any where any time' },
      { name: 'keywords', content: '@GoWithGBI,GB International,Connect With GB International,Email Us,Talk To Us,Need a travel solution' },
      { name: 'url', content: 'https://www.gowithgbi.com/contact-us' },
    ]
  },
  components:{
    ContactusForm
  }
};
</script>
