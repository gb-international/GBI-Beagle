<template>
  <!--*****    Author:@Ajay  **********-->
  <errorState :imgName="'blog_500x500.png'" v-if="apiFailed"/>
  <div id="BlogList" v-else>
    <div class="howwework_banner text_on_image banner_bg">
      <div class="content-blog-banner">
        <h1 class="text-center blog-heading">Travel Blog</h1>
        <div class="search-blog-form" style="padding-top: 35px !important;">
          <form method="post" novalidate="novalidate">
            <div class="col-lg-12">
              
              <div class="row justify-content-center">

                <div class="col-lg-12 col-md-12 col-sm-12 p-0">
                  <input
                    type="text"
                    v-model="form.title"
                    class="form-control search-slt"
                    placeholder="Enter the title"
                  />
                </div>

                <!-- <div class="col-lg-1 col-md-1 col-sm-12 p-0 or-section pt-2">
                  <p class="text-center or-text"><b>OR</b></p>
                </div>


                <div class="col-lg-3 col-md-6 col-sm-12 p-0">
                  <div class="select-cat">
                    <select
                      class="form-control search-slt"
                      id="exampleFormControlSelect1"
                      v-model="form.category_id"
                    >
                      <option value="undefined" disabled>Select category</option>
                      <option v-for="cat in category_list" :key="cat.id" :value="cat.id">{{cat.title }}</option>
                    </select>
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div> -->
                

              </div>
              <span v-if="error_message != ''" class="text-danger">{{ error_message }}</span>
            </div>
          </form>
        </div>

        <div class="search-blog-form col-lg-12 col-md-12 col-sm-12">
          <form method="post" novalidate="novalidate">
            <div class="col-lg-12">
              <div class="row justify-content-between">

                 <div class="col-lg-12 p-0 pb-2">
                  <div class="select-cat">
                    <select
                      class="form-control search-slt"
                      id="exampleFormControlSelect1"
                      v-model="form.category_id"
                    >
                      <option value="undefined" disabled>Select category</option>
                      <option v-for="cat in category_list" :key="cat.id" :value="cat.id">{{cat.title }}</option>
                    </select>
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div>


               <!-- <div class="col-lg-6 col-md-6 col-sm-12 p-2">
                  <div class="select-cat">
                    <select
                      class="form-control search-slt"
                      id="exampleFormControlSelect1"
                      v-model="form.tag_id"
                    >
                      <option value="undefined" disabled>Select Keyword</option>
                      <option v-for="cat in keyword_list" :key="cat.id" :value="cat.id">{{cat.title}}</option>
                    </select>
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div> -->
                

              </div>
              <span v-if="error_message != ''" class="text-danger">{{ error_message }}</span>
            </div>
          </form>
           <p class="text-center">
            <button
              class="btn-defalt btn-lg center-block explore_custom_button"
              @click="SearchBlog()"
              type="submit"
            >
            SEARCH
            </button>
          </p>
        </div>
      </div>
    </div>

    <div class="blog-list mt-3">
      <div class="container">
                
        <div class="row" v-if="search==false">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 border-radius-0" v-for="(post,index) in posts_list" :key="index">
            <blog-card :post="post" />
          </div>
        </div>
        
        <div class="row" v-else-if="search_list.length">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 border-radius-0" v-for="post in search_list" :key="post.id">
            <blog-card :post="post" />
          </div>
        </div>

        <div v-else style="object-position: center; max-width: 350px; margin: auto;">
          <img :src="$gbiAssets+'/assets/errorImages/blog-search.png'"/> 
        </div>
        <div v-if="loading" class="row card-titles">
          <div class="col-sm-4"  v-for="(index) in 6" :key="index">
            <cardLoader />
          </div>
        </div>

        <Observer @intersect="intersected" v-if="search==false"/>

      </div>
    </div>
      <!-- <div class="loadingspinner" v-if="loading"></div> -->

  </div>
</template>

<script>
import Observer from "@/front/components/Observer";
import BlogCard from '@/front/components/blog//BlogCard';
import cardLoader from '@/front/components/loaders/cardLoaderBlog.vue';
//import errorState from '@/front/components/errorState.vue';

export default {
  name: "BlogList",
  components:{ BlogCard,Observer,cardLoader },

  data() {
    return {
      posts:[],
      posts_list:[],
      search_list:null,
      searchQuery:'',
      category_list:[],
      loading: false,
      travel_Loaded: false,
      form:{
        category_id:undefined,
        title : '',
        tag_id: undefined,
      },
      error_message:'',
      search:false,
      page:1,
      keyword_list:[],
      apiFailed: false,
    };
  },
  watch:{
    'form.title':function(){
      if(this.form.title ==''){
        this.search = false;
      }
    }
  },

   metaInfo() {
    return{
      title: "Read travel blogs and learn more about Incredible India| GOwithGBI",
      meta: [
        {
          name: "description",
          content:
            "Travel blogs that will help you learn more about India| Find out about the places before you go there| GOwithGBI",
        },
        {
          name: "keywords",
          content:"@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs",
        },
        {
          name: "url",
          content: `https://www.gowithgbi.com/blog`,
        },
        { name: "type", content: "website" },
      ]
    }
  },

  beforeCreate(){
    var metaInfo = {
      title: 'Read travel blogs and learn more about Incredible India| GOwithGBI',
      description: 'Travel blogs that will help you learn more about India| Find out about the places before you go there| GOwithGBI',
      keywords: '@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs',
      url: 'https://www.gowithgbi.com/blog',
      type: 'website'
    }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },

  mounted(){
    this.CategoryList();
    this.KeywordList();
  },
  methods:{
    async intersected() {
      this.loading = true;
      var url = `/api/blog-list?page=` + this.page;
      const res = await fetch(url);

      this.page++;
      const items = await res.json();
      
      this.posts_list = [...this.posts_list, ...items.data];
      this.loading = false;
    },
    blogList(){
      this.$axios.get("/api/blog-list").then(response => {
        if(!response.data){
          this.apiFailed = true
        }
          this.posts = response.data;
          this.posts_list = this.posts.data;
      });
    },
    
    CategoryList(){
      this.$axios.get("/api/category-list").then(response => {
        this.category_list = response.data;
      });
    },

    KeywordList(){
      this.$axios.get("/api/keyword-list").then(response => {
        this.keyword_list = response.data;
      });
    },

    SearchBlog(){
      if((this.form.category_id == undefined ) && (this.form.title == '') && (this.form.tag_id == undefined)){
        this.error_message = 'Fields Empty!';
        //return this.$swal.fire("Error", "Fields Empty!", "warning");
        return false;
      }
      this.error_message = '';
      this.search = true;
      this.$axios.post("/api/search-post",this.form).then(response => {
        this.search_list = response.data;
        /*if(this.search_list.length <= 0){
         //return this.$swal.fire("No Results.", "No Blogs Found!", "info");
        }*/
        //console.log(response);
      });
    }

  },
};
</script>
