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

    <div class="container" v-if="jobList.length">
      <heading text="Jobs" style="margin-bottom: 35px !important; font-size: 26px !important"/>
        <div class="lDiv shadow row mx-2" v-for="job in jobList" v-bind:key="job.id">
          <div class="col-md-10 col-12">
            <sub-heading :text="job.title" style="margin-bottom: 10px !important; font-weight: 600 !important"/>
            <paragraph :text="job.description.slice(0, 100)"/>
          </div>
          <button class="col-md-2 col-8 btn profile_button" @click.prevent="$router.push('/about-us/join-our-team/job/'+job.id)">
            View
          </button>
        </div>
    </div>

    <heading v-else text="No jobs found" style="margin-left: 12px; margin-bottom: 35px !important; font-size: 20px !important"/>
  </div>
</template>
<script>
import Heading from '@/front/components/layout/Heading.vue';
import SubHeading from '@/front/components/layout/SubHeading.vue';
import Paragraph from '@/front/components/layout/Paragraph.vue';
export default {
  name: "JobTYpe",
  components:{
    "heading":Heading,
    "sub-heading":SubHeading,
    "paragraph" : Paragraph
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
      jobList: []
    };
  },
  created(){
    this.getJobs();
  },
  methods: {
    redirJob(id){
      this.$router.push('/about-us/join-our-team/job/'+id)
    },
    getJobs(){
      this.$axios.get("/api/join-our-team/jobs/"+this.$route.params.jobType).then(response => {
        this.jobList = response.data;
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
.lDiv{
  border: 1px solid grey;
  padding: 15px;
  margin-bottom: 2vh;
}
@media only screen and (max-width: 824px) {
.widthControl{
  width: 90% !important
}
}
</style>