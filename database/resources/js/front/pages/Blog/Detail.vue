<template>
  <!--*****    Author:@Ajay  **********-->
  <div id="BlogDetail">
    <div class="banner-image-parent">
      <img :src="getImgPath(posts.image)" />
      <div class="container">
        <div class="blog-title">
          <h1 class="text-center blog-heading">{{posts.title }}</h1>
        </div>
      </div>
    </div>
    

    <div class="container mt-2">
        <div class="blog-detail">
            <p class="text-muted pt-3 pb-3" v-if="posts.category"><router-link :to="`/blog`">GBI Travel Blog </router-link >> <router-link :to="`/blog/category/${posts.category.slug}`" class="text-underscore"><b>{{ posts.category.title }}</b></router-link> >{{ posts.slug}}</p>

            <div class="text-left mb-2 author-blog">
              <img src="/assets/front/images/logo-avatar.png" class="img-rounded avatar-author mr-2" />
              <p class="m-0 font-14 text-muted">GBI-Author<br>Last updated : {{ posts.updated_at }}</p>
            </div>
            <div class="description mb-2">
              <!-- Write Description here -->
              <p v-html="posts.description"></p>
              <div class="mt-3">
                <span class="text-dark card-tag mr-2 p-1 pr-2 pl-2" v-for="tag in posts.tags" :key="tag.id">{{ tag.title }}</span>
              </div>
            </div>
            <div class="mt-4">
              <b>Read More : </b>
              <div class="col-sm-12">
                <div class="posts blog-list" v-if="RelatedPosts.length">
                  <VueSlickCarousel v-bind="settings">
                      <div v-for="relatedPost in RelatedPosts" :key="relatedPost.id" class="mr-1 p-2">
                        <blog-card :post="relatedPost" />

                      </div>
                  </VueSlickCarousel>
                </div>
              </div>
 
            </div>
            <div class="comment-section mt-2">
              <h4 class="">Comment : </h4>
              
              <div class="row">
                <div class="col-sm-8">
                  <form class="form" @submit.prevent="addComment()">


                    <div class="form-group">
                      <input type="text" v-model="form.name" class="form-control border-1-grey" placeholder="Enter name"><br />
                      <textarea
                        class="form-control"
                        rows="3"
                        v-model="form.description"
                        placeholder="Type here..."
                        :class="{ 'is-invalid': form.errors.has('description') }"
                      ></textarea>
                      <has-error :form="form" field="description"></has-error>
                      <p v-if="error_message != ''" class="text-danger">{{ error_message}}</p>
                      <div class="row">
                        <div class="col text-right">
                          <button type="submit" class="btn btn-info profile_button comment_btn">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="media border p-3 mb-2" v-for="comment in posts.comments" :key="comment.id">
                    <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="John Doe" class="avatar-author mr-3 mt-3 rounded-circle">
                    <div class="media-body">
                      <h6>{{ comment.name}} <small><i>{{ comment.created_at}}</i></small></h6>
                      <p>{{ comment.description}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import { Form, HasError, AlertError } from "vform";
import BlogCard from './BlogCard';
export default {
  name: "BlogDetail",
    components: { VueSlickCarousel, Form, HasError, BlogCard },

  data(){
    return{
      settings: {
        arrows:true,
        infinite: false,
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        dots:true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
      },
      posts:{
        title:'',
        description:'',
        slug:'',
        meta_title:'',
        meta_keyword:''
      },
      RelatedPosts:[],

      form: new Form({
        name: "",
        description: "",
        post_id:''
      }),
      error_message:'',
      title: 'Foo Bar Baz'
    }
  },

  metaInfo() {
    return{
      title: this.posts.title,
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

  watch: {
    "$route.params.slug": function(id) {
      this.getBlogDetail();
    }
  },
  created(){
    this.getBlogDetail();
  },
  methods:{
    getBlogDetail(){
      this.$axios.get(`/api/getpost/${this.$route.params.slug}`).then(response => {
        this.posts = response.data;
        console.log(this.posts);
        this.getRelatedBlogs()
      });
    },
    
    getRelatedBlogs(){
      this.$axios.get(`/api/related-blog/${this.posts.category_id}`).then(response => {
        this.RelatedPosts = response.data;
      });
    },

    addComment(){
      if(this.form.name == '' || this.form.description == ''){
        this.error_message = "Please fill the fields";
        return false;
      }
      this.form.post_id = this.posts.id;
      this.$axios.post(`/api/add-post-comment`,this.form).then(response => {
        this.posts.comments.unshift(response.data);
        this.form.name = '';
        this.form.description = '';
      });
    },
    getImgPath(img){
      return `/images/post/`+img;
    },
  }
};
</script>
