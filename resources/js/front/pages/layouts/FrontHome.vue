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
          <div class="carousel-item">
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
          </div>
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
      <div class="card-titles">
        <h1>Our Travel Programs</h1>
        <h4>Immerge in a Riveting Journey</h4>
      </div>
      <div class="row" v-if="travel_programs">
        <div class="col-sm-4" v-for="program in travel_programs" :key="program.id">
          <div class="card card-1 mb-15">
            <router-link :to="`/explore-destination`">
              <figure v-lazyload class="image__wrapper">
                <ImageSpinner class="image__spinner" />
                <img
                  class="image__item"
                  :data-url="`/images/tourprogram/`+program.image"
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

      <section class="content-video">
        <article class="card-titles">
          <h1>Join our adventures at GB International</h1>
        </article>
        <div class="content mt-35" v-if="video_data.length > 0">
          <div class="rwd-media">
            <video width="400" controls controlslist="nodownload">
              <source :src="video_path" type="video/mp4" />Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </section>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "FrontHome",
  data() {
    return {
      travel_programs: [],
      video_data: "",
      video_path: "video/video.mp4"
    };
  },
  metaInfo: {
    title: 'GB-International',
    meta:[
      { property: 'og:description', content: 'GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.' },
      { property: 'og:title', content: 'G.B International is a travel educational specialist for young minds.' },
      { property: 'og:image', content: 'https://www.gowithgbi.com/assets/front/images/banner2.jpg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'gowithgbi.com' },
      { property: 'og:url', content: 'https://www.gowithgbi.com' },
    ]
  },
  
  created() {
    this.TravelPorgrams();
  },
  methods: {
    TravelPorgrams() {
      this.$axios.get("/api/travel-programs").then(response => {
        this.travel_programs = response.data;
      });

      this.$axios.get("/api/website").then(response => {
        this.video_data = response.data[0].video;
      });
    }
  }
};
</script>
