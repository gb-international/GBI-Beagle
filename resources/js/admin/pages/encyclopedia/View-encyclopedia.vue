<!-- 

This is template is for the viewing the itineraray with the help of the id of the itinerary 
It takes id from the url and get the data from the api .

-->
<template>
  <view-layout backurl="/encyclopedias">
    <template #viewdata>
      <div class="row">
        <div class="col-sm-7">
          <div class="row">
            <div class="col-sm-6">
              <h5>State Name</h5>
              <p>{{ list_data.state_name }}</p>
            </div>
            <div class="col-sm-6">
              <h5>Slug</h5>
              <p>{{ list_data.slug }}</p>
            </div>

            <hr />
            <div class="col-sm-12">
              <h5>Banner Image</h5>
              <img
                :src="getImgUrl(list_data.banner_image)"
                class="img-thumbnail"
              />
            </div>
            <br />
            <div class="col-sm-12">
              <h5>Description</h5>
              <p v-html="list_data.description"></p>
            </div>
          </div>
        </div>
        <div class="col-sm-5">
          <div class="col-sm-12 card map_link p-0 w-100" v-html="list_data.map_link">
          </div>

          <div class="col-sm-5">
            <h5>Thumbnail</h5>
            <img :src="getImgUrl(list_data.thumbnail)" class="img-thumbnail" />
          </div>
        </div>
      </div>

      <h5>Images</h5>
      <div class="row images_row">
        <br />
        <br />
        <div class="col-sm-3" v-for="image in list_data.images" :key="image.image">
          <img :src="getImgUrl(image.image)" class="img-thumbnail" />
        </div>
      </div>

      <hr />
      <h5>Itinerary pdf</h5>
      <div class="row">
        <div class="col-sm-6">
          <ul>
            <li v-for="pdf in list_data.itinerarypdfs" :key="pdf.name">
              {{ pdf.name }}
            </li>
          </ul>
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
        .get(`/api/encyclopedias/${this.$route.params.id}`)
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
