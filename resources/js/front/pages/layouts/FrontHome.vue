<template>
  <!--************************************************
      Author:@Ajay
  ****************************************************-->
  <div id="fronthome">
    <div class="slidehome">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              class="img-fluid banner_img image-slide-1 banner_bg"
              id="bannerimg1"
              alt="GBI slide"
            ></div>
          </div>
          <!-- <div class="carousel-item">
            <div
              class="img-fluid banner_img image-slide-2 banner_bg"
              id="bannerimg2"
              alt="GBI slide"
            ></div>
          </div>
           <div class="carousel-item">
            <div
              class="img-fluid banner_img image-slide-3 banner_bg"
              id="bannerimg3"
              alt="GBI slide"
            ></div>
          </div> -->
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div class="container">
      <heading class="text-start mt-4" text="Our Travel Programs" />
      <sub-heading class="text-start mb-4" text="Immerge in a Riveting Journey" />
      
      <!-- If Loaded -->
      <div class="row card-titles" v-if="travel_Loaded">
        <div class="col-sm-4" v-for="program in travel_programs" :key="program.id">
          <div class="card card-1 mb-15">
            <router-link :to="`/explore-destination`">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item border-radius-travel"
                  :data-url="program.image"
                  :alt="program.title"
                />
              </figure>

              <div class="card-body">
                <h5 class="card-title">{{ program.title }}</h5>
                <p class="card-text" v-html="program.description"></p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- If Loading -->
      <div class="row card-titles" my-2 mb-4 v-else>
        <div class="col-sm-4"  v-for="(index) in 6" :key="index">
         <cardLoader />
        </div>
      </div>

      <!-- <sub-heading class="text-center pb-2" text="Join our adventures at GB International" />
      <section class="content-video">
        <div class="content" v-if="video_data.length > 0">
          <div class="rwd-media">
           <video width="400" controls controlslist="nodownload">
              <source :src="video_path" type="video/mp4" />Your browser does not support HTML5 video.
            </video> 
          </div>
        </div>
      </section> -->
    </div>
    
    <!-- VTour Section 
    <div class="container">
      <heading class="text-start mt-4" text="Virtual Tourism" />
      <sub-heading class="text-start mb-4" text="Lorem ipsum dolor sit amet" />  -->
      
      <!-- If Loaded 
      <div class="row card-titles" v-if="travel_Loaded">
        <div class="col-sm-4">
          <div class="card">
              <div class="card-horizontal">
                  <div class="mt-3" style="width: 50% !important; height: 100% !important">
                      <img class="" style="width: 100% !important; height: 100% !important" src="https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_960_720.jpg" alt="Card image cap">
                  </div>
                   <div class="card-body" style="width: 50% !important">
                    <h5 class="card-title">Lorem ipsum</h5>
                    <p class="card-text" v-html="'Lorem ipsum dolor sit amet, consectetur..'"></p>
                  </div>
              </div>
          </div>
        </div> 

        <div class="col-sm-4">
          <div class="card">
              <div class="card-horizontal">
                  <div class="mt-3" style="width: 50% !important; height: 100% !important">
                      <img class="" style="width: 100% !important; height: 100% !important" src="https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_960_720.jpg" alt="Card image cap">
                  </div>
                   <div class="card-body" style="width: 50% !important">
                    <h5 class="card-title">Lorem ipsum</h5>
                    <p class="card-text" v-html="'Lorem ipsum dolor sit amet, consectetur..'"></p>
                  </div>
              </div>
          </div>
        </div> 

        <div class="col-sm-4">
          <div class="card">
              <div class="card-horizontal">
                  <div class="mt-3" style="width: 50% !important; height: 100% !important">
                      <img class="" style="width: 100% !important; height: 100% !important" src="https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_960_720.jpg" alt="Card image cap">
                  </div>
                   <div class="card-body" style="width: 50% !important">
                    <h5 class="card-title">Lorem ipsum</h5>
                    <p class="card-text" v-html="'Lorem ipsum dolor sit amet, consectetur..'"></p>
                  </div>
              </div>
          </div>
        </div> 
      </div> -->
      <!-- If Loading 
      <div class="row card-titles" my-2 mb-4 v-else>
        <div class="col-sm-4"  v-for="(index) in 3" :key="index">
         <cardLoader />
        </div>
      </div>     
    </div> -->

    <!-- Offers Section 
    <div class="container">
      <heading class="text-start mt-4" text="Offers And Coupons" />
      <sub-heading class="text-start mb-4" text="Lorem ipsum dolor sit amet" /> -->
      
      <!-- If Loaded 
      <div class="row card-titles" v-if="travel_Loaded">
        <div class="col-sm-4">
          <div class="card">
            <figure v-lazyload class="image__wrapper">
              <ImageSpinner class="image__spinner" />
              <img
                class="image__item card-img-top"
                data-url="https://cdn.pixabay.com/photo/2015/08/11/08/21/coupon-883641_960_720.jpg"
                alt="image"
              />
            </figure>
          </div>
        </div> 

        <div class="col-sm-4">
          <div class="card">
            <figure v-lazyload class="image__wrapper">
              <ImageSpinner class="image__spinner" />
              <img
                class="image__item card-img-top"
                data-url="https://cdn.pixabay.com/photo/2015/08/11/08/21/coupon-883641_960_720.jpg"
                alt="image"
              />
            </figure>
          </div>
        </div> 

        <div class="col-sm-4">
          <div class="card">
            <figure v-lazyload class="image__wrapper">
              <ImageSpinner class="image__spinner" />
              <img
                class="image__item card-img-top"
                data-url="https://cdn.pixabay.com/photo/2015/08/11/08/21/coupon-883641_960_720.jpg"
                alt="image"
              />
            </figure>
          </div>
        </div> 

      </div> -->
      <!-- If Loading 
      <div class="row card-titles" my-2 mb-4 v-else>
        <div class="col-sm-4"  v-for="(index) in 6" :key="index">
         <cardLoader />
        </div>
      </div>     
    </div> -->

    <!-- <Review /> -->
  </div>
</template>

<script>
import Heading from '@/front/components/layout/Heading.vue';
import SubHeading from '@/front/components/layout/SubHeading.vue';
import cardLoader from '@/front/components/loaders/cardHome.vue';
import Review from "@/front/components/Reviews.vue"
import { sitemap } from "@/admin/helpers/sitemap.js";

export default {
  name: "FrontHome",
  components:{
    Heading,
    SubHeading,
    cardLoader,
    Review
  },
  data() {
    return {
      travel_programs: [],
      video_data: "",
      video_path: "video/video.mp4",
      travel_Loaded: false
    };
  },
  metaInfo: {
    title: 'Homepage | GB International - Your Travel Partner ',
    meta:[
      { property: 'og:description', content: 'GB International provides the best practical learning experience to not only students but to the travellers as well.' },
      { property: 'og:title', content: 'GB International - Your Travel Partner' },
      { property: 'og:image', content: 'https://www.gowithgbi.com/assets/front/images/banner2.jpg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'gowithgbi.com' },
      { property: 'og:url', content: 'https://www.gowithgbi.com' },
    ]
  },
  
  created() {
    this.TravelPorgrams();
    //sitemap();
  },
  methods: {
    TravelPorgrams() {
      this.$axios.get("/api/travel-programs").then(response => {
        this.travel_programs = response.data;
        this.travel_Loaded = true;
      });

      this.$axios.get("/api/website").then(response => {
        this.video_data = response.data[0].video;
      });
    }
  }
};
</script>
