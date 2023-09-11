<template>
      <!--************************************************
      Author:@Manas
      ****************************************************-->
  <div id="tourPage" v-if="allCreated">
    <section v-if="logged == 'logged'">
      <div class="text_on_image banner_bg" style="background-image:url('https://gbi-assets.s3.ap-south-1.amazonaws.com/itinerary-image-63fc4ca9d91b5-1677479081129070.jpeg'); background-position: center;">
        <div class="content">
          <!-- <p class="heading">Tour Details</p> -->
        </div>
      </div>

      <div class="container" v-if="allCreated">
        <h1 class="gbi_main-heading pt-3 text-capitalize" style="margin-bottom: 10px !important;">
            {{tourData.school_name}}
        </h1>
        <h4 class="gbi_sub-heading text-capitalize m-0 p-0">
            {{tourData.trip_name}}
        </h4>
        <p class="gbi_paragraph mt-5">
            <b>Tour Starting from:</b> {{formatDate(tourData.start_date)}} 
        </p>
        <p class="gbi_paragraph pt-1">
            <b>Tour Ends on:</b> {{formatDate(tourData.end_date)}}
        </p>
        <p class="gbi_paragraph pt-1">
            <b>Number of students travelling:</b> {{tourData.no_of_student}}
        </p>
        <p class="gbi_paragraph pt-1">
            <b>Number of teachers travelling:</b> {{tourData.no_of_teachers}}
        </p>
        <p class="gbi_paragraph pt-1">
            <b>Total cost per student:</b> ₹{{tourData.amt_per_pax.toLocaleString()}}
        </p>
        <p class="gbi_paragraph pt-1">
            <b>Total Amount:</b> ₹{{tourData.amount_total.toLocaleString()}}
        </p>
        <p class="gbi_paragraph pt-1">
            <b>Total Paid:</b> ₹{{tourData.amount_paid.toLocaleString()}}
        </p>
        <p class="gbi_paragraph pt-1">
            <b>Pending Amount:</b> ₹{{tourData.amount_pending.toLocaleString()}}
        </p>
        <p class="gbi_paragraph pt-1">
            <b>Payment Status:</b> 
            <span v-if="tourData.payment_status == 1" style="color: green">Complete</span>
            <span v-else-if="tourData.payment_status == 3" style="color: orange">In Progress</span>
            <span v-else style="color: yellow">Pending</span>
        </p>
        <p class="gbi_paragraph pt-1">
            <b>Booking Status:</b> <span :style="tourData.booking_status == 1 ? 'color: green' : 'color: orange' ">{{tourData.booking_status == 1 ? 'Confirmed' : 'In Progress'}}</span>
        </p>
        <div class="clear"></div>
      </div>
    </section>
    <section v-else>
      <div id="LoginForm" class="modal show" aria-modal="true" style="padding-right: 17px; display: block;">
        <div class="modal-dialog w-100">
          <div class="modal-content">      
            <!-- Modal body -->
            <div class="modal-body loginform">
              <tour-login></tour-login>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import tourLogin from "@/front/pages/TourPage/tourLogin.vue";
import Heading from '@/front/components/layout/Heading.vue';
import SubHeading from '@/front/components/layout/SubHeading.vue';
import Paragraph from '@/front/components/layout/Paragraph.vue';
export default {
  name: "TourPage",
  components:{
    "heading":Heading,
    "sub-heading":SubHeading,
    "paragraph" : Paragraph,
    "tour-login": tourLogin,
  },
  data() {
    return {
      tourData: [],
      allCreated: false,
      logged: false
    };
  },
  metaInfo: {
    title: 'Tour Page | GBI',
    meta:[
      { name: 'description', content: 'We, GB International deal in providing customized itineraries to educational institutions, corporates, and to family travellers.' },
      { name: 'keywords', content: '@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs' },
      { name: 'url', content: 'https://www.gowithgbi.com/' },
    ]
  },
  beforeCreate(){
    let metaInfo = {
      title: 'Tour Page | GBI',
      description: 'We, GB International deal in providing customized itineraries to educational institutions, corporates, and to family travellers.',
      keywords: '@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs',
      url: 'https://www.gowithgbi.com/',
      type: 'website'
    }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
    
  },
  created(){
    this.getTour();
  },
  beforeMount(){
    if(this.logged == 'logged'){
      this.getTour();
    }
  },
  mounted() {
    this.$root.$on('login-tour', () => {
      this.getTour();
      this.logFunc();
      this.$swal.fire("Logged", "You are logged in", "success");
    })
  },
  methods: {
    getTour() {
      let tour_otp = localStorage.getItem("tour_otp");
      let tour_otp_id = localStorage.getItem("tour_otp_id");

      this.$axios.get(`/api/tour-data/${this.$route.params.name}/${this.$route.params.id}/${tour_otp}/${tour_otp_id}`).then((res)=>{
        if(res.data.logged == false){
            localStorage.setItem("tourLog", '');
            this.logged = localStorage.getItem("tourLog");
            this.$root.$emit('tour-log');
            this.allCreated = true;
            //this.$router.go()
        } else {
          this.tourData = res.data;
          this.logFunc()
          this.allCreated = true;
        }
      });
    },

    logFunc(){
      localStorage.setItem("tourLog", 'logged');
      this.$root.$emit('tour-log');
      this.logged = localStorage.getItem("tourLog");
    },

    formatDate (val) {
      var dateVal = val.match(/\d+/g),
      year = dateVal[0].substring(2), // get only two digits
      month = dateVal[1], day = dateVal[2];

      return day+'/'+month+'/'+year;
    }

  }
};
</script>

<style scoped>
.widthControl{
  width: 70% !important
}
@media only screen and (max-width: 824px) {
.widthControl{
  width: 90% !important
}
}
</style>