<template>
  <!--************************************************
      Author:@Ajay
      Edited by:@Manas
      ****************************************************-->

  <errorState :imgName="'gallery_500x500.png'" v-if="apiFailed"/>
  <div id="imagegallery" v-else>
    <div class="howwework_banner text_on_image banner_bg">
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-sm-8 gallery-search">
            <div class="outer">
              <input
                type="search"
                class="form-control search-field"
                :placeholder="`Search`"
                v-model="searchQuery"
                v-on:keyup.enter="SearchGal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5 pt-5">
      <div v-if="gallery.length">
        <image-card :gallery="gallery" v-if="gallery.length > 0 && !search"></image-card>
        <image-card :gallery="resultQuery" v-else-if="search && resultQuery.length > 0"></image-card>
         <div v-else style="object-position: center; max-width: 350px; margin: auto;">
            <img :src="$gbiAssets+'/assets/errorImages/gallery-search.png'"/> 
          </div>
      </div>
      <Observer @intersect="intersected" />
  
     <div v-show="loading" class="row card-titles">
        <div class="col-sm-4"  v-for="(index) in 6" :key="index">
          <cardLoader />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Observer from "@/front/components/Observer";
import ImageCard from '@/front/components/ImageCard.vue';
import cardLoader from '@/front/components/loaders/cardImgLoader.vue';

export default {
  name: "HowWework",
  components:{
    ImageCard,
    Observer,
    cardLoader,
  },
  metaInfo: {
    title: "GBI Image Gallery",
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

  beforeCreate(){
      let metaInfo = {
        title: 'GBI Domestic Image Gallery',
        description: '@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one',
        keywords: '@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs',
        url: 'https://www.gowithgbi.com/image-gallery',
        type: 'website'
      }
      document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
    },

  data() {
    return {
      page:1,
      loading:false,
      gallery:[],
      //gallary: [],
      apiFailed: false,
      searchQuery: '',
      resultQuery: [],
      search: false,
    };
  },
  /*computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.gallery.filter(item => {
          return item.title
            .toLowerCase()
            //.split(" ")
            .includes(this.searchQuery.toLowerCase)
        });
      } else {
        return this.gallery;
      }
    }
  },*/
  methods:{
    async intersected() {
      this.loading = true;
      var url = `/api/galleries/domestic?page=` + this.page;
      const res = await fetch(url);
      if(!res){
        this.apiFailed = true;
      }
      this.page++;
      var items = await res.json();
      if(items.data.length > 0){
        this.gallery = [...this.gallery, ...items.data];
      }
      items = [];
      this.loading = false;
    },
    SearchGal(){
      if(this.searchQuery == ''){
        this.search = false;
        return false
      }
      this.$axios.get("/api/search-gallery/"+this.searchQuery+"/domestic").then(response => {
        this.resultQuery = response.data;
        if(this.resultQuery.length <= 0){
         //return this.$swal.fire("No Results!", "This Gallery is currently not available.", "info"); 
        }
        //console.log(this.resultQuery);
        this.search = true;
      });
    }
  }
};
</script>
