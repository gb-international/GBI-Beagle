<template>
  <div>
    <transition name="fade" mode="out-in">
      <div class="accept_cookies" v-show="cookies_alert">
        <div class="cookies">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-10">
                <p class="m-0">
                  We use cookies to help us give you the best experience on our
                  website.<span class="mobile-hidden"
                    >If you continue without changing your settings, we'll
                    assume that you are happy to receive all cookies on our
                    website. However, if you would like to, you can change your
                    cookie settings at any time.</span
                  >
                </p>
                <p class="text-center m-0 mt-2">
                  <button class="cookie__accept ml-1" @click="acceptCookies()">
                    Accept cookies</button
                  ><button class="cookie__decline" @click="acceptCookies()">
                    Decline cookies
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Cookies",
  data() {
    return {
      cookies_alert: false,
    };
  },

  created() {
    if (!this.$cookies.isKey("cookies_alert")) {
      this.cookies_alert = true;
    }
  },
  methods: {
    acceptCookies: function () {
      this.$cookies.set("cookies_alert", "yes", "1y");
      // this.$cookies.set('cookies_alert','yes','6s');
      this.cookies_alert = false;
    },
  },
};
</script>