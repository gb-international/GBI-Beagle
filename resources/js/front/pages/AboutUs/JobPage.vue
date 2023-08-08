<template>
      <!--************************************************
      Author:@Manas
      ****************************************************-->
  
  <div id="ourstory">
    <!-- <vue-headful
      title="About Us"
      description="@GoWithGBI Story On How GBI believes in its core values and implement the same  to make your educational travel program a successful one "
      keywords="@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs"
      image
      lang="en_US"
      ogLocale="en_US,en_UK"
      url="https://www.gowithgbi.com/about-us/our-story"
    /> -->

      <div class="advertismentpart">
        <img
          :src="$gbiAssets+'/assets/front/images/job-banner.png'"
          style="height: 100%; width: 100%"
          loading="lazy"
        />
      </div>

    <div class="container">
      <heading text="Jobs" style="margin-bottom: 35px !important; font-size: 26px !important"/>
      <sub-heading :text="jobDetails.title" style="margin-bottom: 10px !important; font-weight: 600 !important"/>
      <paragraph :text="jobDetails.description"/>
      <button class="btn profile_button" value="Submit" data-toggle="modal" data-target="#applyModal">
        Apply
      </button>
    </div>

    <div class="modal" id="applyModal">
      <div class="modal-dialog">
        <div class="modal-content modal-color">
          <div class="modal-body" style="background: #dcdcdc !important;">
            <button type="button" class="close" data-dismiss="modal">&times;</button>

            <applicationForm v-if="jobDetails.title" :job="jobDetails.title" class="appDiv"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Heading from '@/front/components/layout/Heading.vue';
import SubHeading from '@/front/components/layout/SubHeading.vue';
import Paragraph from '@/front/components/layout/Paragraph.vue';
import applicationForm from '@/front/components/form/applicationForm.vue';
import { VueBotUI } from 'vue-bot-ui'  

export default {
  name: "JobPage",
  components:{
    "heading":Heading,
    "sub-heading":SubHeading,
    "paragraph" : Paragraph,
    applicationForm
  },
  metaInfo: {
    title: 'JoinOurTeam | Jobs',
    meta:[
      { name: 'description', content: '@GoWithGBI Story On How GBI believes in its core values and implement the same  to make your educational travel program a successful one' },
      { name: 'keywords', content: '@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs' },
      { name: 'url', content: 'https://www.gowithgbi.com/about-us/our-story' },
    ]
  },
  data() {
    return {
      jobDetails: {}
    };
  },
  mounted(){
    this.getJob()
  },
  methods: {
    getJob(){
      this.$axios.get("/api/join-our-team/job/"+this.$route.params.id).then(response => {
        this.jobDetails = response.data;
        console.log(response);
      });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (files[0].size > 2097152) {
        swal.fire(
          "Alert!",
          "Resume size should not be more than 2 MB",
          "warning"
        );

        return false;
      }
      if (!files.length) return;

      this.createImage(files[0]);
      var fileData = e.target.files[0];
      this.form.filename = fileData.name;
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.form.resume = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    sendmailResume() {
      this.form
        .post("/api/join-our-team/send")
        .then((response) => {
          this.form.reset();
          this.form.filename = "";
          this.$swal.fire(
            "Successfully Submited!",
            "Your resume has been sent to HR Deparment..",
            "success"
          );
        })

        .catch(() => {});
    }, // end sendmailResume
  }
};
</script>

<style scoped>
.widthControl{
  width: 70% !important
}
.profile_button{
  margin-top: 5px;
  background-color: #00c4c4;
}
@media (min-width: 1024px) {
  .appDiv{
    width: 45vw;
  }
}
@media only screen and (max-width: 824px) {
.widthControl{
    width: 90% !important
  }
}
</style>