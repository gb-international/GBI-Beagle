<template>
  <!--*****    Author:@Ajay  **********-->
  <div id="BlogList">
    <div class="howwework_banner text_on_image banner_bg">
      <div class="content-blog-banner">
        <h1 class="text-center blog-heading">Travel Blog</h1>
        <div class="search-blog-form">
          <form method="post" novalidate="novalidate">
            <div class="col-lg-12">
              <div class="row justify-content-center">

                <div class="col-lg-8 col-md-5 col-sm-12 p-0">
                  <input
                    type="text"
                    v-model="form.title"
                    class="form-control search-slt"
                    placeholder="Enter the title"
                  />
                </div>
                
                <div class="col-lg-1 col-md-1 col-sm-12 p-0 or-section pt-2">
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
                </div>

              </div>
              <span v-if="error_message != ''" class="text-danger">{{ error_message }}</span>
            </div>
          </form>
        </div>

        <p class="text-center search-blog-btn"><button type="submit" class="btn btn-defalt btn-lg center-block profile_button" @click="SearchBlog()">Search</button></p>
      </div>
    </div>

    <div class="blog-list mt-3">
      <div class="container">

        <div class="row" v-if="search==false">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 border-radius-0" v-for="(post,index) in posts_list" :key="index">
            <blog-card :post="post" />
          </div>
        </div>

        
        <div class="row" v-else>
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 border-radius-0" v-for="post in search_list" :key="post.id">
            <blog-card :post="post" />
          </div>
        </div>

        <Observer @intersect="intersected" />


      </div>
    </div>
      <div class="loadingspinner" v-if="loading"></div>
  </div>
</template>

<script>
import Observer from "@/front/components/Observer";
import BlogCard from './BlogCard';
export default {
  name: "BlogList",
  components:{ BlogCard,Observer },

  data() {
    return {
      posts:[],
      posts_list:[],
      search_list:[],
      searchQuery:'',
      category_list:[],
      loading: false,
      form:{
        category_id:undefined,
        title : ''
      },
      error_message:'',
      search:false,
      page:1
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
      title: "GBI Blog",
      meta: [
        {
          name: "description",
          content:
            "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one",
        },
        {
          name: "keywords",
          content:this.posts.meta_keyword,
        },
        {
          name: "url",
          content: `https://www.gowithgbi.com/blog/${this.posts.slug}`,
        },
        { name: "type", content: "website" },
      ]
    }
  },

  mounted(){
    this.CategoryList();
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
        this.posts = response.data;
        this.posts_list = this.posts.data;
      });
    },
    
    CategoryList(){
      this.$axios.get("/api/category-list").then(response => {
        this.category_list = response.data;
      });
    },

    SearchBlog(){
      if((this.form.category_id == undefined ) && (this.form.title == '')){
        this.error_message = 'Try again!!!';
        return false;
      }
      
      this.error_message = '';
      this.$axios.post("/api/search-post",this.form).then(response => {
        this.search_list = response.data;
        console.log(response);
        this.search = true;
      });
    }

  },
};
</script>
