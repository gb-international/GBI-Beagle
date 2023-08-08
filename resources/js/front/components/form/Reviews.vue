<template>
  <div class="dashboard-body-part-two-2 reviewBody" v-if="review_list.length > 0">
    <VueSlickCarousel :dots="true" v-bind="settings">
      <div
        class="reviewContainer mb-5 card_scroll"
        v-for="state in review_list"
        :key="state.id"
      >
        <div class="singleCard">
          <b-card
            tag="article"
            style="max-width: 50rem;"
            class="mb-2 p-1 pb-5 cardBorder"
          >
            <b-card-text>
              <p>
                {{state.comments | reviewFilter}}<br/>
                <b>Rated: {{state.avgRate}}/10</b>
              </p>
            </b-card-text>
          </b-card>
          <div class="reviewUserInfo">
            <div class="reviewUserImg">
              <img 
              :src="state.photo"
              alt="user image"
              class="userImg" 
              />
            </div>
            <div class="reviewUser">
              <p><b>{{state.name}}</b></br>
              {{state.profession}}</p>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "ReviewCarousel",
  components: { VueSlickCarousel },
  data() {
    return {
      review_list: [],
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  mounted(){
    this.getList()
  },
  methods:{
    getList(){
        this.$axios.get("/api/feedback-list").then(response => {
          this.review_list = response.data.data;
        });
      },
    },
  filters: {
    reviewFilter(val) {
      if(val.length > 100){
        return val.slice(0,100)+'...';
      } else {
        return val;
      }
    },
  },
};
</script>

<style scoped>
.reviewContainer{
  display: flex;
  align-items: center;
  justify-content: center;
}

.singleCard{
  margin-right: 35px;
}
.cardBorder{
  border: 1px solid grey !important; 
  z-index: 99;
  height: 12rem;
}
.reviewBody{
  margin: 5px 50px 5px 50px !important;
}
.reviewUserInfo{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 25px;
}
.reviewUserImg{
  width: 80px;
  height: 80px;
  margin-top: -71px;
  z-index: 999;
  margin-right: 7px;
  border: 2px solid grey;
}
.userImg{
  border: 4px solid white;
}
.reviewUser{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -7px;
}
.reviewUser p{
  font-size: 13px;
  font-weight: 500;
} 

@media only screen and (max-width: 1024px) {
  .reviewContainer{
    flex-direction: column;
    align-content: space-around;
  }
  .singleCard{
    margin-right: 0px;
    margin-bottom: 15px;
  }
  .reviewBody{
    margin: 5px 10px 5px 10px !important;
  }
}

</style>