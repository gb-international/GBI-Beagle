  <template>
  <!--************************************************
      Author:@Manas
      ****************************************************-->
  <errorState :imgName="'career_1_500x500.png'" v-if="apiFailed"/>
  <div id="joinOurteam" v-else>
     <div class="advertismentpart">
        <img
          :src="$gbiAssets+'/assets/front/images/job-banner.png'"
          style="height: 100%; width: 100%"
          loading="lazy"
        />
      </div>

    <main>
      <div class="row customdiv">
          <div class=" col-md-10 col-12">
           <input class="form-control customSearch shadow" type="text" placeholder="Job Title" aria-label="Search" v-model="sField">
          </div>
          <div class="col-md-2 col-12">
           <button type="submit" class="btn btnCustom" @click.prevent="SearchJobs">SEARCH</button>
          </div>
         </div>
      <!-- End banner area -->
      <div v-if="dataLoading" class="row card-titles py-2 customdiv">
        <div class="col-sm-4"  v-for="(index) in 6" :key="index">
          <cardLoader />
        </div>
      </div>
      <section v-else-if="!search && !dataLoading">

         <div class="row py-2 customdiv">
            <div class="col-md-4 col-6">
              <div @click="redirJob('technology')" class="card shadow py-5 mb-3 customCard">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/assets/front/images/Technology-&-Design.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Technology & Design</p>    
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6">
              <div @click="redirJob('operation')" class="card shadow py-5 mb-3 customCard">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/assets/front/images/Operation.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Operation</p>    
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6">
              <div @click="redirJob('reservations')" class="card shadow py-5 mb-3 customCard">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/assets/front/images/Reservations.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Reservations</p>    
                </div>
              </div>
            </div>

           <div class="col-md-4 col-6">
              <div @click="redirJob('sales-marketing')" class="card shadow py-5 mb-3 customCard">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/assets/front/images/Sales-&-Marketing.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Sales & Marketing</p>    
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6">
              <div @click="redirJob('finance')" class="card shadow py-5 mb-3 customCard">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/assets/front/images/Finance.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Finance</p>    
                </div>
              </div>
            </div>

            <div class="col-md-4 col-6">
              <div @click="redirJob('product-project-management')" class="card shadow py-5 mb-3 customCard">
                <div class="card-body d-flex justify-content-center align-items-center flex-column">
                  <img
                    class="customImgJ"
                    :src="$gbiAssets+'/assets/front/images/Product-&-Project-Management.png'"
                    loading="lazy"
                  />
                  <p class="cardCText text-center">Product & Project Management</p>    
                </div>
              </div>
            </div>

          </div>
      </section>
      <div v-else-if="search_list.length" class="container">
        <heading text="Jobs" style="margin-bottom: 35px !important; font-size: 26px !important"/>
        <div class="lDiv shadow row mx-2" v-for="sjob in search_list" v-bind:key="sjob.id">
          <div class="col-md-10 col-12">
            <sub-heading :text="sjob.title" style="margin-bottom: 10px !important; font-weight: 600 !important"/>
            <paragraph :text="sjob.description.slice(0, 100)"/>
          </div>
           <button class="col-md-2 col-8 btn profile_button" @click.prevent="$router.push('/about-us/join-our-team/job/'+sjob.id)">
            View
          </button>
        </div>
      </div>
      <div v-else class="container">
        <heading text="No Jobs found." style="margin-left: 12px; margin-bottom: 35px !important; font-size: 20px !important"/>
      </div>
    </main>
  </div>
</template>

<script>
import { Form, HasError } from "vform";
import Heading from '@/front/components/layout/Heading.vue';
import SubHeading from '@/front/components/layout/SubHeading.vue';
import Paragraph from '@/front/components/layout/Paragraph.vue';
import cardLoader from '@/front/components/loaders/cardLoaderJobs.vue';

export default {
  name: "JoinOurTeam",
  metaInfo: {
    title: "Careers | Join Our Team",
    meta: [
      {
        name: "description",
        content:
          "Explore the world with us. Be a part of our team.",
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI,join our team,explore Your career with GBI,exciting journey,research oriented process,challenges,explore your travel instinct,discover ,travel passion,learn,explore,discover",
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/about-us/join-our-team",
      },
    ],
  },
  components: {
    HasError,
    Heading,
    "sub-heading":SubHeading,
    "paragraph" : Paragraph,
    cardLoader
  },
  data() {
    return {
      form: new Form({
        firstname: "",
        lastname: "",
        email: "",
        contactno: "",
        address: "",
        state: "",
        city: "",
        zipcode: "",
        postvancy: "",
        resume: "",
        filename: "",
        messagescon: "",
      }),
      positions:["Business Development Executive (Delhi)","Business Development Executive (Punjab)", "Business Development Executive (Hyderabad)", "Software Developer", "Business Lead Generation Executive"],
      search_list: [],
      search: false,
      sField: '',
      dataLoading: true,
      apiFailed: false,
    };
  },
  beforeCreate(){
    let metaInfo = {
      title: 'Careers | Join Our Team',
      description: 'Explore the world with us. Be a part of our team.',
      keywords: '@GoWithGBI,join our team,explore Your career with GBI,exciting journey,research oriented process,challenges,explore your travel instinct,discover ,travel passion,learn,explore,discover',
      url: 'https://www.gowithgbi.com/about-us/join-our-team',
      type: 'website'
    }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
  mounted(){
    setTimeout(() =>
        this.dataLoading = false, 
    2000);
  },
  methods: {
    SearchJobs(){
      if(this.sField == ''){
        return this.$swal.fire("Empty Search!", "No search value, please input your search.", "warning"); 
      }
      this.$axios.get("/api/join-our-team/search/"+this.sField).then(response => {
        this.search_list = response.data;
        if(this.search_list.length <=0 ){
          return this.$swal.fire("No Jobs found!", "There are no jobs matching your search.", "info"); 
        }
        //console.log(response);
        this.search = true;
      });
    },
    redirJob(page){
      this.$router.push('/about-us/join-our-team/'+page)
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
  },
};
</script>

<style scoped>
.customdiv{
  margin: 15px;
}
.customCard{
  height: 75px;
  width: 100%;
  border-radius: 0px;
}
.customSearch{
   margin-bottom: 15px;
   height: 46px;
   border-radius: 5px;
   font-size: 12px;
   font-weight: 400;
   color: gray;
}
.btnCustom{
  height: 42px;
  width: 95px;
  padding: 0px 15px 0px 15px;
  border: 1px solid #f77736;
  font-size: 14px !important;
  font-weight: 400 !important;
  color: #f77736;
  display: block;
  margin: 0 auto;
}
.customImgJ{
  margin-top: -25px;
  height: 50px;
  width: auto;
}
.cardCText{
  margin-top: 2px;
  font-size: 10px;
  font-weight: 500;
}
.lDiv{
  border: 1px solid grey;
  padding: 15px;
  margin-bottom: 2vh;
}
@media only screen and (min-width: 768px) {
  .customCard{
    height: 150px;
  }
  .customdiv{
    margin: 50px;
  }
  .btnCustom{
    width: 120px;
    margin-top: 1px;
  }
  .customSearch{
   margin-bottom: 0px;
  }
  .cardCText{
    font-size: 12px;
    font-weight: 500;
    margin-top: 8px;
  }
  .customImgJ{
    margin-top: 5px;
    height: 500%;
    width: auto;
  }
}

@media only screen and (min-width: 992px) {
  .customCard{
    height: 200px;
  }
  .btnCustom{
    width: 120px;
    margin-top: 1px;
  }
  .cardCText{
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;
  }
  .customImgJ{
    margin-top: 25px;
    height: 120%;
    width: auto;
  }
  
}

@media only screen and (min-width: 1200px) {
  .customCard{
    height: 300px;
  }
  .btnCustom{
    height: 45px;
    width: 200px;
    font-size: 17px !important;
    font-weight: 400 !important;
    margin-top: 0px;
  }
  .cardCText{
    font-size: 20px;
    font-weight: 500;
    margin-top: 25px;
  }
  .customImgJ{
    margin-top: 0px;
    height: 400%;
    width: auto;
  }
}
</style>