<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout backurl="/schoolbankdetails">
    <template #viewdata>
      <div class="row pl-3">
        <div class="col-sm-4" v-for="(value,key,i) in list_data" :key="i">
          <h5 class="text-uppercase">{{key}}</h5>
          <p>{{ value }}</p>
        </div>
      </div>
    </template>
  </view-layout>
</template>

<script>
import ViewLayout from "@/admin/components/layout/ViewLayout.vue";
export default {
  name: "View",
  components: {
    "view-layout": ViewLayout,
  },
  data() {
    return {
      list_data: [],
    };
  },
  created() {
    this.encyclopediaData();
  },
  methods: {
    encyclopediaData() {
      axios
        .get(`/api/schoolbankdetails/${this.$route.params.id}`)
        .then((response) => {
          this.list_data = response.data;
          console.log(this.list_data);
        });
    },
    getImgUrl(img) {
      return "/encyclopedia/" + img;
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>