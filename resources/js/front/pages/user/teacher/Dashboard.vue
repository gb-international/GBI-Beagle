<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div v-if="valid">
    <user-info-card :userinfo="userinfo"/>
    <div class="container">
      <booked-tour-button />
      
      <h5 class="title_section">Upcoming Event</h5>
      <upcoming-tour-crasousel  :upcoming_list="upcoming_list"/>
      <h5 class="title_section">
        Popular Destination
        <router-link class="view_link" :to="`/explore-list`">View more</router-link>
      </h5>
      <div class="popular_destination">
        <div class="row"></div>
      </div>
      <div class="advertismentpart">
        <img
          src="https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/make-a-twitch-banner2/Twitch-Banner-Blue-1024x324.png"
          loading="lazy"
        />
      </div>
      <div class="booksection">
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
      </div>
      <h5 class="title_section">
        Recent Search
        <a href="#" class="view_link">View More</a>
      </h5>
      <div class="resent_search">
        <div class="row">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Dashboard from '@/front/mixins/user/Dashboard';
import UserinfoCard from '@/front/components/user/UserinfoCard';
import BookedTourButton from '@/front/components/user/BookedTourButton';
import UpcomingCrasousel from '@/front/components/user/UpcomingCrasousel.vue';
export default {
  name: "DashboardTeacher",
  components: {
    'user-info-card':UserinfoCard,
    'booked-tour-button':BookedTourButton,
    'upcoming-tour-crasousel':UpcomingCrasousel,
  },
  mixins:[Dashboard]
};
</script>
