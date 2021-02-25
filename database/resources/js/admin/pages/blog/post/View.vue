<!-- 

This template helps us to create a View Category it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <view-layout backurl="/posts">
    <template #viewdata>
      <div class="col-sm-12">
        <h5>Title</h5>
        <p>{{ posts.title }}</p>
      </div>

      <div class="col-sm-4">
        <h5>Banner image</h5>
        <img :src="imagePath(posts.image)" class="w-100" />
      </div>

      <div class="col-sm-12">
        <h5>Description</h5>
        <p v-html="posts.description"></p>
      </div>

      <div class="col-sm-4">
        <h5>Slug</h5>
        <p>{{ posts.slug }}</p>
      </div>

      <div class="col-sm-4">
        <h5>Meta Title</h5>
        <p>{{ posts.meta_title }}</p>
      </div>

      <div class="col-sm-4">
        <h5>Meta Keyword</h5>
        <p>{{ posts.meta_keyword }}</p>
      </div>

      <div class="col-sm-4">
        <h5>Created At</h5>
        <p>{{ posts.created_at }}</p>
      </div>

      <div class="col-sm-4">
        <h5>Category</h5>
        <span v-for="cat in posts.categories" :key="cat.id"
          >{{ cat.title }},</span
        >
      </div>

      <div class="col-sm-4">
        <h5>Tags</h5>
        <span v-for="cat in posts.tags" :key="cat.id">{{ cat.title }},</span>
      </div>
    </template>
  </view-layout>
</template>

<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
export default {
  name: "ViewCategories",
  components: {
    "view-layout": ViewLayout,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.categoryView();
  },
  methods: {
    categoryView() {
      axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
        this.posts = response.data;
        console.log(this.posts);
      });
    },

    imagePath(img) {
      return "/images/post/" + img;
    },
    goBack() {
      this.$router.push("/posts");
    },
  },
};
</script> 