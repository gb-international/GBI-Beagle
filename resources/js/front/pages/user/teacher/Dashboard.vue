<template>
      <!--************************************************
      Author:@Manas
      ****************************************************-->
  <div v-if="valid">
    <!-- <user-info-card :userinfo="userinfo"/> -->
    <div class="container">
      <!-- <booked-tour-button /> -->

      <div class="advertismentpart">
        <img
          src="https://cdn.pixabay.com/photo/2016/04/26/15/01/holiday-1354563_960_720.jpg"
          loading="lazy"
        />
      </div>
      
      <!-- <h5 class="title_section pt-4">Special Offers</h5>
      <offers-crasousel  :upcoming_list="upcoming_list"/>
      <p class="pl-2" style="font-size: 16px; font-family: Raleway">No Offers Available.</p>  -->
       <div class="pb-4 pt-4">
        <h5 class="title_section">
          Upcoming Events </h5>        
        <div class="resent_search" v-if="events_list.length>=1">
          <it-list  :list="events_list"/>
        </div>
        <p v-else style="font-size: 16px; font-family: Raleway">No Events Available.</p>
      </div>


      <div class="pb-4">
        <h5 class="title_section">
          Recent Searches </h5>        
        <div class="resent_search" v-if="rSearches.length>=1">
          <it-list  :list="rSearches.slice(-6)"/>
        </div>
        <p v-else style="font-size: 16px; font-family: Raleway">You have no recent searches.</p>
      </div>

      <div class="pb-4">
        <h5 class="title_section">
          Popular Tours </h5>        
        <div class="resent_search" v-if="popular_list.length>=1">
          <it-list  v-if="popular_list.length<=6" :list="popular_list"/>
          <it-list  v-else :list="popular_list.slice(6)"/>
        </div>
        <p v-else style="font-size: 16px; font-family: Raleway">No Popular searches.</p>
      </div>
      
       <h5 class="title_section pb-5">
        Travel Blogs
        </h5>
       <div class="row">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 border-radius-0 blog-list" v-for="(post,index) in posts_list" :key="index">
            <blog-card :post="post" />
          </div>
        </div>

      <!-- <div class="booksection">
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <div class="row" id="data">
              <div class="col">
                <a href="#">
                  <img src="assets/front/images/ebook.png" loading="lazy" />
                  <p>E-Book</p>
                </a>
              </div>
              <div class="col">
                <a href="#">
                  <img src="assets/front/images/quiz.png" loading="lazy" />
                  <p>Quiz</p>
                </a>
              </div>
              <div class="col">
                <a href="#">
                  <img src="assets/front/images/feedback.png" loading="lazy" />
                  <p>Feedback</p>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import Dashboard from '@/front/mixins/user/Dashboard';
import UserinfoCard from '@/front/components/user/UserinfoCard';
import BookedTourButton from '@/front/components/user/BookedTourButton';
import UpcomingCrasousel from '@/front/components/user/UpcomingCrasousel.vue';
import OffersCrasousel from '@/front/components/user/OffersCrasousel.vue';
import BlogCard from '@/front/components/blog//BlogCard';
import PopularDestination from '@/front/components/user/PopularDestination.vue';
import ItineraryList from "@/front/components/ItineraryList";

export default {
  name: "DashboardTeacher",
  components: {
    'user-info-card':UserinfoCard,
    'booked-tour-button':BookedTourButton,
    'upcoming-tour-crasousel':UpcomingCrasousel,
    'offers-crasousel':OffersCrasousel,
    'blog-card':BlogCard,
    'popular-tour': PopularDestination,
    'it-list': ItineraryList,
  },
  data() {
    return {
      posts:[],
      posts_list:[],
      rSearches: []
    };
  },
  mixins:[Dashboard],

  mounted(){
    this.blogList();
    this.rSearches = JSON.parse(localStorage.getItem("itSearches"));
    console.log(this.rSearches)
  },

  methods:{
    blogList(){
      this.$axios.get("/api/blog-recents").then(response => {
        this.posts = response.data;
        this.posts_list = this.posts.data;
      });
    },
  }
};
</script>