<template>
  <!--************************************************
      Author: @Ajay, 
      Edited by: @Manas
      ****************************************************-->
  <!-- Edits: Added dropdowns to Travel Encyclopedia, Added Dropdown to Profile  -->
  <div id="app" class="relative" style="background: white !important; max-width: 100% !important">
    <nav
      class="navbar navbar-expand-md bg-white navbar-light fixed-top"
      id="navbar" style="width: 100% !important"
    >

    <div class="d-flex flex-column" style="width: 100% !important">
      <div class="container mt-4" style="width: 100% !important">
        <router-link v-if="!toggleOpen" class="navbar-brand" :to="`/`">
          <img :src="$gbiAssets+'/assets/front/images/logo.png'" />
        </router-link>


        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleOpen = !toggleOpen"
        >
          <span class="icon-bar top-bar"></span>
          <span class="icon-bar middle-bar"></span>
          <span class="icon-bar bottom-bar"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul class="navbar-nav">
            <li class="nav-item mr-10">
              <router-link class="nav-link" :to="`/explore-destination`"
                >Explore Destination</router-link
              >
            </li>
            <li class="nav-item dropdown mr-10">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Resources</a
              >
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >

                <router-link class="dropdown-item mt-10" 
                  :to="`/blog`"
                  >GBI Travel Blog
                </router-link>

                <router-link
                  class="dropdown-item mt-10"
                  :to="`/resources/travel-education`"
                  >Travel & Education
                </router-link>
                 
              

              <router-link
                  class="dropdown-item mt-10"
                  :to="`/resources/safety-security`"
                  >Safety & Security</router-link
                >
                <router-link class="dropdown-item mt-10" :to="`/resources/faq`"
                  >Faq</router-link
                >
                <a
                  class="dropdown-item mt-10 dropdown-toggle"
                  data-toggle="dropdown"
                  tabindex="-1"
                  href="#"
                  >Travel Encyclopedia</a
                >

                <div class="dropdown-menu custom-dropdown custom-dd">
                  <router-link
                    :to="`/resources/travel-encyclopedia`"
                    class="dropdown-item"
                    >Domestic (India)
                  </router-link>
                  <router-link
                    :to="`/resources/travel-encyclopedia-international`"
                    class="dropdown-item"
                    >International</router-link
                  >
                </div>
              </div>
            </li>
            <li class="nav-item mr-10 dropdown dropdown-submenu">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >About Us</a
              >
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link
                  class="dropdown-item mt-10"
                  :to="`/about-us/our-story`"
                  >Our Story</router-link
                >
                <router-link
                  class="dropdown-item mt-10"
                  :to="`/about-us/how-we-work`"
                  >How We Work</router-link
                >
                <router-link
                  class="dropdown-item mt-10"
                  :to="`/about-us/join-our-team`"
                  >Join Our Team</router-link
                >
                <a
                  class="dropdown-item mt-10 dropdown-toggle"
                  data-toggle="dropdown"
                  tabindex="-1"
                  href="#"
                  >Image Gallery</a
                >

                <div class="dropdown-menu custom-dropdown dropright">
                  <router-link
                    :to="`/image-gallery/domestic`"
                    class="dropdown-item"
                    >Domestic (India)
                  </router-link>
                  <router-link
                    :to="`/image-gallery/international`"
                    class="dropdown-item"
                    >International</router-link
                  >
                </div>
              </div>
            </li>
            <li class="nav-item mr-10" v-if="login !== '1'">
              <router-link class="nav-link" :to="`/contact-us`"
                >Contact Us</router-link
              >
            </li>
            <li class="nav-item mr-10" v-if="login != '1'">
              <router-link class="nav-link" :to="`/notifications`"
                >
                  <i class="far fa-bell" style="font-size: 22px; z-index: -1;"></i>
                  <div class="notifIcon"><p class="text-center px-1">{{ $store.getters.notifCount }}</p></div>
                </router-link
              >
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
                <img :src="$gbiAssets+'/images/icons/profile.png'" class="bell-icon-width" style="width: 20px; height: 20px;"/>
              </a>
            </li>

            <li class="nav-item dropdown mr-10" v-else>
              <a class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#" 
              >
                <img
                  :src="$store.getters.user.photo"
                  class="img img-circle nav_profile"
                />
                {{ $store.getters.user.name }}
                </a>
              <div
                class="dropdown-menu dropdown-menu-right pt-2"
                aria-labelledby="navbarDropdownMenuLink"
              >
              <router-link
                  :to="`/dashboard`"
                  class="dropdown-item pt-10"
                  >
                  <div class="profileDD">
                    <div> <img
                    :src="$gbiAssets+'/images/icons/dashboard.png'"
                    class="img mr-3 mb-3 dd_icons_2"/> </div>
                    <div>
                      <b>Dashboard</b>
                      <p>Your dashboard to manage your account
                      </br> and tours.</p>
                    </div>
                  </div>
                </router-link>

                <router-link
                  :to="`/tour-list`"
                  class="dropdown-item pt-10"
                  >
                  <div class="profileDD">
                    <div> <img
                    :src="$gbiAssets+'/images/icons/trip_dd.png'"
                    class="img mr-3 mb-3 dd_icons_1"/> </div>
                    <div>
                      <b>My Trip</b>
                      <br/> <p>See booking details, Print e-ticket, Cancel Booking
                      <br/>Modify Booking, Check Refund Status & More..</p>
                    </div>
                  </div>
                </router-link
                >
                <a
                  class="dropdown-item pt-10"
                  >
                  <div class="profileDD">
                    <div> <img
                    :src="$gbiAssets+'/images/icons/payment_dd.png'"
                    class="img mr-3 mb-3 dd_icons_1"/> </div>
                    <div>
                      <b>Make Payment</b> 
                      <br/><p>Complete your pending payments here.
                      </p>
                    </div>
                  </div>
                  </a
                >

                <router-link
                  :to="`/profile-edit`"
                  class="dropdown-item pt-10"
                  >
                  <div class="profileDD">
                    <div> <img
                    :src="$gbiAssets+'/images/icons/profile_dd.png'"
                    class="img mr-3 mb-3 dd_icons_2"/> </div>
                    <div>
                      <b>Profile</b>
                      <p>Manage your profile, traveller details, login details
                      </br> and password.</p>
                    </div>
                  </div>
                  </router-link>

                <a class="dropdown-item pt-10 "
                  >
                  <div 
                    class="logout"
                    @click="logout"
                    style="cursor: pointer;"
                  >
                    <img
                    :src="$gbiAssets+'/images/icons/logout_dd.png'"
                    class="img mr-3 dd_icons_2"
                  /><b>Logout</b>
                </div>
                </a>
              </div>
            </li>

          </ul>
        </div>
      </div>
       <div v-if="!toggleOpen && $route.name !== 'home'" aria-label="breadcrumb container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
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
              style="padding: 5px 13px 0px 0px !important"
            >
              &times;
            </button>
          </div>
          <!-- Modal body -->
          <div class="modal-body loginform">
            <login></login>
          </div>
        </div>
      </div>
    </div>

    <div :class="$route.name == 'wonderla' ? 'body-content mt-85 py-5' : 'body-content mt-85 pb-5' ">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <!-- Alert for cookies 
      <Cookies v-if="$route.name != 'TourForm'"/> -->
      <!-- Intro modal 
      <intro v-if="$route.name != 'TourForm'"></intro> -->
    </div>
    <gbi-footer></gbi-footer>
    <chat> </chat>
  </div>
</template>
<script>
import login from "@/front/pages/user/Login.vue";
import Intro from "@/front/components/Intro.vue";
import Cookies from "@/front/components/Cookies.vue";
//import Review from "@/front/components/Reviews.vue";
import chat from "@/front/components/chat.vue";
import io from 'socket.io-client';

export default {
  name: "App",
  components: {
    login,
    Intro,
    Cookies,
    chat
  },
  data() {
    return {
      login: 1,
      isLogged: 1,
      toggleOpen: false,
      dashboard: false,
      token: this.$store.token,
      showModal: false,
      countDown: 0,
      isnav_active: false,
      user: { name: "", photo: "" },
      cookies_alert: false,
      socket : io(this.$hostName)
    };
  },

  created: function () {
    this.$axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
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
    var userData = this.$cookies.get("user")
    document.cookie = "GBIMeta =" + localStorage.getItem('front_meta.jwt') +"; path=/";
    //console.log(userData.subscription_id)

    if(userData){
      this.$store.dispatch('getNotifCount', userData.subscription_id) 

      /*Echo.channel('notifications')
         .listen('UserEvent', (data) => {
          setTimeout(() =>
            this.$store.dispatch('getNotifCount', userData.subscription_id), 2000)
        });*/

        this.socket.on('sendToClient', (message) => {
            //alert(message)
            setTimeout(() =>
            this.$store.dispatch('getNotifCount', userData.subscription_id), 2000)
        });
      
    }    

    this.loginCheck();
    //this.login = this.$cookies.get("login");
    /*if (this.login == null) {
      this.login = 1;
    }*/
    // if(this.$cookies.get('user') && this.$cookies.get('access_token')){
    //   this.user = this.$cookies.get('user');
    // }
    var url = "/api/details";
    // this.$cookies.set('access_token',localStorage.getItem('token'));
  },
  methods: {

   logout() {
          this.$api.POST('/api/logout-user', []).then(response => {
              this.$cookies.remove('access_token');
              this.$store.dispatch("logout").then(() => {
                  this.$bus.$emit("logged", "User loogedout");
                  this.$router.push("/");
              })
          }).catch(error => {
              this.$store.dispatch("logout").then(() => {
                  this.$bus.$emit("logged", "User loogedout");
                  this.$router.push("/");
              })
          })
    },
    loginCheck() {
      const token = this.$cookies.get("access_token");
      if (token) {
        this.$api.POST("/api/user-show", []).then((response) => {
          // this.user.name = response.success.name;
          // this.user.photo = response.success.information.photo;
          this.$store.token = token;
          this.$store.commit("auth_success", token);
          this.$cookies.set("login", 2);
          this.login = 2;
          return 2;
        });
      } else {
        //this.login = 2;
        if (this.$cookies.get("login") == 1) {
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
    acceptCookies: function () {
      this.$cookies.set("cookies_alert", "yes", "1y");
      // this.$cookies.set('cookies_alert','yes','6s');
      this.cookies_alert = false;
    },
  },
};
</script>


<style scoped>
.custom-dd{
  margin-top: -32px; 
  margin-left: 19vh;
}

.dropdown-menu {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);
}
.dropdown-item b{
  font-size: 15px;
  font-weight: 600;
  font-family: sans-serif;
}
.dropdown-item p{
  font-size: 12px;
  font-weight: 400;
  font-family: sans-serif;
}
.profileDD {
  padding-top: 5px;
  padding-bottom: 5px; 
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  height: 70px;
  width: auto;
}

.logout {
  padding: 7px 5px 7px 5px;
}

.dd_icons_1 {
  width: 38px !important; 
  height: auto !important;
}
.dd_icons_2 {
  width: 35px !important; 
  height: auto !important;
}

.notifIcon{
  background: red; 
  border-radius: 100px; 
  position: relative; 
  margin-top: -30px; 
  margin-left: 10px;
  width: 20px;
}

.notifIcon p{
  font-size: 11px; 
  font-weight: 500;
  padding: 1px 1px 1px 1px;
  color: white;
}

.breadcrumb {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color:#f77736;
    border-radius: 0.25rem;
    font-family: "Nunito Sans";
}

@media only screen and (max-width: 720px) {

  .dd_icons_2 {
    width: 31px !important;
    height: 31px !important;
  }
}
</style>