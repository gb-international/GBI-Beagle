<template>
  <!--************************************************
      Author:@Ajay
      ****************************************************-->

  <div id="imagegallery">
    <div class="howwework_banner text_on_image banner_bg">
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-sm-8 gallery-search">
            <div class="outer">
              <input
                type="search"
                class="form-control search-field"
                :placeholder="`Search`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5 pt-5">

      <image-card :gallery="gallery"></image-card>

      <Observer @intersect="intersected" />

      <div class="loading-img-parent text-center w-100 mb-4" v-if="loading">
          <img class="loading-img" src="/icons/loader.gif">
      </div>

    </div>
  </div>
</template>

<script>
import Observer from "@/front/components/Observer";
import ImageCard from '@/front/components/ImageCard.vue'
export default {
  name: "HowWework",
  components:{
    ImageCard,
    Observer
  },
  metaInfo: {
    title: "How We Work",
    meta: [
      {
        name: "description",
        content:
          "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one",
      },
      {
        name: "keywords",
        content:
          "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs",
      },
      {
        name: "url",
        content: "https://www.gowithgbi.com/about-us/how-we-work",
      },
      { name: "type", content: "website" },
    ],
  },

  data() {
    return {
      page:1,
      loading:false,
      gallery:[],
    };
  },
  methods:{

    async intersected() {
      this.loading = true;
      var url = `/api/galleries/domestic?page=` + this.page;
      const res = await fetch(url);

      this.page++;
      var items = await res.json();
      if(items.data.length > 0){
        this.gallery = [...this.gallery, ...items.data];
      }
      items = [];
      this.loading = false;
    }
  }
};
</script>
