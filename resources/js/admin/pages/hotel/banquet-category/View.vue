<!-- 

This template helps us to create a View Category it takes the data from the form and sumbit with the help of the api
to submit the data we are using a function.
 -->
<template>
  <view-layout backurl="/banquet-categories">
    <template #viewdata>
        <div class="col-sm-12">
          <h5>Banquet Category Name</h5>
          <p>{{categories.title }}</p>
        </div>

        <div class="col-sm-12">
          <h5>Description</h5>
          <p v-html="categories.description"></p>
        </div>
        
        <div class="col-sm-4">
          <h5>Created At </h5>
          <p>{{ categories.created_at }}</p>
        </div>
    </template>
  </view-layout>

</template>

<script>
import ViewLayout from '@/admin/components/layout/ViewLayout.vue';
export default {
  name: "ViewCategories",
  components:{
    'view-layout':ViewLayout
  },
  data() {
    return {
      categories:[]
    };
  },
  created() {
    this.categoryView();
  },
  methods: {
    categoryView() {
      axios.get(`/api/banquet-categories/${this.$route.params.id}`).then((response) => {
        this.categories = response.data;
      });
    },

    imagePath(img){
        return '/images/banquet-category/'+ img;
    },
  },
};
</script> 