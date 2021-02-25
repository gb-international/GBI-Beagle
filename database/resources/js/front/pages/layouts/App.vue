<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div id="app">

    <nav class="navbar navbar-expand-md bg-white navbar-light fixed-top" id="navbar">
      <div class="container">
        <router-link class="navbar-brand" :to="`/`">
          <img src="/assets/front/images/logo.png" />
        </router-link>


        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon-bar top-bar"></span>
          <span class="icon-bar middle-bar"></span>
          <span class="icon-bar bottom-bar"></span>				
        </button>



        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li
              class="nav-item mr-10"
              
            >
              <router-link class="nav-link" :to="`/explore-destination`">Explore Destination</router-link>
            </li>
            <li
              class="nav-item dropdown mr-10"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Resources</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link
                  class="dropdown-item mt-10"
                  :to="`/resources/travel-education`"
                >Travel & Education</router-link>
                <router-link
                  class="dropdown-item mt-10"
                  :to="`/resources/safety-security`"
                >Safety & Security</router-link>
                <router-link class="dropdown-item mt-10" :to="`/resources/faq`">Faq</router-link>
                <router-link
                  class="dropdown-item mt-10"
                  :to="`/resources/travel-encyclopedia`"
                >Travel Encyclopedia</router-link>
              </div>
            </li>
            <li
              class="nav-item mr-10"
              
            >
              <router-link class="nav-link" :to="`/blog`">GBI Travel Blog</router-link>
            </li>
            <li
              class="nav-item mr-10 dropdown dropdown-submenu"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >About Us</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link class="dropdown-item mt-10" :to="`/about-us/our-story`">Our Story</router-link>
                <router-link class="dropdown-item mt-10" :to="`/about-us/how-we-work`">How We Work</router-link>
                <router-link
                  class="dropdown-item mt-10"
                  :to="`/about-us/join-our-team`"
                >Join Our Team</router-link>
                <a
                  class="dropdown-item mt-10 dropdown-toggle"
                  data-toggle="dropdown"
                  tabindex="-1"
                  href="#"
                >Image Gallery</a>


                <div class="dropdown-menu custom-dropdown dropright">
                  <router-link :to="`/image-gallery/domestic`" class="dropdown-item">Domestic </router-link>
                  <router-link :to="`/image-gallery/international`" class="dropdown-item">International</router-link>
                </div>

                
              </div>              
            </li>
            <li
              class="nav-item mr-10"
              
            >
              <router-link class="nav-link" :to="`/contact-us`">Contact Us</router-link>
            </li>
            <li class="nav-item mr-10" v-if="login == '1'">
              <a
                href="#"
                class="nav-link loginLink"
                id="loginButton"
                data-toggle="modal"
                data-target="#LoginForm"
              >
                login
                <img src="/images/icons/profile.png" class="icon-width">
              </a>
            </li>

            <li class="nav-item mr-10" v-else
              
            >
              <router-link class="nav-link" :to="`/dashboard`"> <img :src="`/uploadimage/${user.photo}`" class="img img-circle nav_profile"> {{ user.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="modal" id="LoginForm">
      <div class="modal-dialog w-100">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="closebutton">
            <button
              type="button"
              class="close login_close"
              data-dismiss="modal"
              style="padding: 5px 13px 0px 0px !important;"
            >&times;</button>
          </div>
          <!-- Modal body -->
          <div class="modal-body loginform">
            <login></login>
          </div>
        </div>
      </div>
    </div>
    
    <div class="body-content mt-85 pb-50">

      <transition 
        name="fade"
        mode="out-in">
        <router-view></router-view>
      </transition>
    
      <!-- Alert for cookies -->
      <Cookies />

      <!-- Intro modal -->
      <intro></intro>

    </div>
    <gbi-footer></gbi-footer>
    
  </div>
</template>
<script>
import login from "@/front/pages/user/Login.vue";
import Intro from "@/front/components/Intro.vue";
import Cookies from "@/front/components/Cookies.vue";
export default {
  name: "App",
  components: {
    login,
    Intro,
    Cookies
  },
  data() {
    return {
      login: 1,
      isLogged: 1,
      dashboard: false,
      token: this.$store.token,
      showModal: false,
      countDown: 0,
      isnav_active: false,
      user:{name:'',photo:''},
      cookies_alert:false,
      
    };
  },

  created: function() {
    this.$axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout);
        }
        throw err;
      });
    });



    this.$bus.$on("logged", () => {
      this.isLogged = this.loginCheck();
    });
  },
  mounted() {
    // this.$cookies.remove('access_token');
    // this.$cookies.remove('refresh_token');
    // this.$cookies.remove('user');
    // this.$cookies.set('login',1);
    // check is cookies is accepted or not

    this.loginCheck();
    this.login = this.$cookies.get('login');
    if(this.login == null){
      this.login = 1;
    }
    if(this.$cookies.get('user') && this.$cookies.get('access_token')){
      this.user = this.$cookies.get('user');
    }
    var url = '/api/details';
    // this.$cookies.set('access_token',localStorage.getItem('token'));
  },
  methods: {
    loginCheck() {
      const token = this.$cookies.get('access_token');
      if (token) {
        var data = [];
        this.$api.POST('/api/user-show',[]).then(response=>{
          this.user.name = response.success.name;
          this.user.photo = response.success.information.photo;
          this.$store.token = token;
          this.$store.commit('auth_success',token);
          this.$cookies.set('login',2);
          this.login = 2;
          return 2;
        });        
      }else{
        this.login = 2;
        if(this.$cookies.get('login') == 1){
          this.login = 1;
        }
      }
    },
    
    toggleClass() {
      if (this.isnav_active == false) {
        this.isnav_active = true;
      } else {
        this.isnav_active = false;
      }
    },    
    acceptCookies:function(){
      this.$cookies.set('cookies_alert','yes','1y');
      // this.$cookies.set('cookies_alert','yes','6s');
      this.cookies_alert = false;
    }
  }
};
</script>