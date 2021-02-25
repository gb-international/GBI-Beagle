<template>
  <!--*****    Author:@Ajay  **********-->
  <div id="BlogList">
    <div class="banner-image-parent">
      <img :src="getImgPath(category.image)" />
      <div class="container">
        <h1 class="text-center blog-heading">{{category.title }}</h1>
      </div>
    </div>

    <div class="blog-list mt-3">
      <div class="container">
          <div class="mt-3 mb-3" v-html="category.description"></div>
          <h5>Blogs for {{ category.title }}</h5>
        <div class="row">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 border-radius-0" v-for="post in RelatedPosts" :key="post.id">
            <blog-card :post="post" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from './BlogCard';
export default {
  name: "BlogList",
  components:{ BlogCard },
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
      RelatedPosts:[],
      category:'',
    };
  },
  mounted(){
    this.blogList();
  },
  methods:{
    blogList(){
      this.$axios.get(`/api/category/${this.$route.params.slug}`).then(response => {
        this.category = response.data;
        this.getRelatedBlogs();
      });
    },
    getRelatedBlogs(){
      this.$axios.get(`/api/related-blog/${this.category.id}`).then(response => {
        this.RelatedPosts = response.data;
      });
    },
    getImgPath(img){
      return `/images/category/`+img;
    },
  }
};
</script>
