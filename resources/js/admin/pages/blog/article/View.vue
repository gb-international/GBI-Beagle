<!-- 

This template helps us to create a View Category it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <view-layout backurl="/articles">
    <template #viewdata>
      <div class="col-sm-12">
        <h5>Title</h5>
        <p>{{ articles.title }}</p>
      </div>

      <div class="col-sm-4">
        <h5>Banner image</h5>
        <img :src="articles.image" class="w-100" />
      </div>

      <div class="col-sm-12">
        <h5>Description</h5>
        <p v-html="articles.description"></p>
      </div>

      <div class="col-sm-4">
        <h5>Slug</h5>
        <p>{{ articles.slug }}</p>
      </div>

      <div class="col-sm-4">
        <h5>Meta Title</h5>
        <p>{{ articles.meta_title }}</p>
      </div>

      <div class="col-sm-4">
        <h5>Meta Keyword</h5>
        <span v-for="cat in articles.tags" :key="cat.id">{{ cat.title }}, </span>
      </div>

      <div class="col-sm-4 mt-2">
        <h5>Created At</h5>
        <p>{{ articles.created_at }}</p>
      </div>

      <div class="col-sm-4">
        <h5>Category</h5>
        <p>{{ articles.category }}</p>
      </div>
    </template>
  </view-layout>
</template>

<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
export default {
  name: "ViewPost",
  components: {
    "view-layout": ViewLayout,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.categoryView();
  },
  methods: {
    categoryView() {
      axios.get(`/api/articles/${this.$route.params.id}`).then((response) => {
        this.articles = response.data;
      });
    },
  },
};
</script> 