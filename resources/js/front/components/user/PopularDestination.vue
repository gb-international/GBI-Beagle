<template>
  <div class="dashboard-body-part-two-2" v-if="upcoming_list.length>=0">
    <VueSlickCarousel :dots="false" v-bind="settings">
      <div
        class="states_card card_scroll"
        v-for="state in upcoming_list"
        :key="state.id"
      >
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="state.photo" alt="Card image cap">
          <div class="card-body">
            <div>
              <h5 class="card-text">{{state.title}}</h5>
              <p class="card-text">
              {{state.noofdays}} Days<br/>
              Rs. {{(state.price).toLocaleString()}} /Person
              </p>
            </div>
            <div class="btn-div">
              <button class="bookBtn" @click="$router.push(`/explore-detail/${state.id}`)">BOOK</button>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
  <div v-else class="row card-titles reviewContainer mb-5">
    <div class="col-sm-4"  v-for="(index) in 3" :key="index">
      <cardLoader />
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import cardLoader from "@/front/components/loaders/cardLoaderDash";

export default {
  name: "UpcomingTourCarousel",
  components: { VueSlickCarousel, cardLoader },
  props: {
    upcoming_list: {
      required: true,
    },
  },
  data() {
    return {
      settings: {
        dots: false,
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
              infinite: false,
              dots: false,
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
};
</script>

<style scoped>
  .card-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .card-title {
    font-size: 15px !important;
  }
  .card-text{
    font-size: 12px !important;
  }
  .btn-div{
    align-self: center;
  }
  .card {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  .card:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .bookBtn{
    margin: 5px 0px;
    color: white;
    background-color: #00c4c4;
    border-color: #00c4c4;
    padding: 6px 25px 6px 25px;
    width: 95px;
    height: 35px;
    border: 0px;
    font-size: 15px;
    font-weight: 500;
}
.bookBtn:hover{
  box-shadow: 2px 2px grey;
}
</style>