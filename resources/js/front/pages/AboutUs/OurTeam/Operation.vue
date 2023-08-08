<template>
      <!--************************************************
      Author:@Ajay
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
      <sub-heading text="Operations" style="margin-bottom: 10px !important; font-weight: 600 !important"/>
      <paragraph text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore"/>

      <paragraph text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore"/>

      <div class="clear"></div>
    
      <button type="submit" class="btn profile_button" value="Submit">
        Apply
      </button>
    </div>
  </div>
</template>
<script>
import Heading from '@/front/components/layout/Heading.vue';
import SubHeading from '@/front/components/layout/SubHeading.vue';
import Paragraph from '@/front/components/layout/Paragraph.vue';
export default {
  name: "OurStory",
  components:{
    "heading":Heading,
    "sub-heading":SubHeading,
    "paragraph" : Paragraph
  },
  metaInfo: {
    title: 'JoinOurTeam | Operations',
    meta:[
      { name: 'description', content: '@GoWithGBI Story On How GBI believes in its core values and implement the same  to make your educational travel program a successful one' },
      { name: 'keywords', content: '@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs' },
      { name: 'url', content: 'https://www.gowithgbi.com/about-us/our-story' },
    ]
  },
  beforeCreate(){
    let metaInfo = {
      title: 'Our Story',
      description: '@GoWithGBI Story On How GBI believes in its core values and implement the same  to make your educational travel program a successful one',
      keywords: '@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs',
      url: 'https://www.gowithgbi.com/about-us/our-story',
      type: 'website'
    }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
  methods: {
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
@media only screen and (max-width: 824px) {
.widthControl{
  width: 90% !important
}
}
</style>