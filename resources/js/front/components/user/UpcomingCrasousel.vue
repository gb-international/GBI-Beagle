<template>
  <div class="dashboard-body-part-two-2" v-if="upcoming_list.length > 0">
    <VueSlickCarousel :dots="true" v-bind="settings">
      <div
        class="states_card card_scroll"
        v-for="state in upcoming_list"
        :key="state.id"
      >
        <div class="card">
          <figure v-lazyload class="image__wrapper card_image_ency">
            <ImageSpinner class="image__spinner" />
            <img
              class="image__item card-img-top"
              :data-url="`/uploadimage/${state.photo}`"
              alt="image"
            />
          </figure>

          <div class="card-img-overlay text-center">
            <p class="card-text">
              <router-link
                class="text-white"
                :to="`/explore-detail/${state.id}`"
                >{{ state.title }}</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "UpcomingTourCarousel",
  components: { VueSlickCarousel },
  props: {
    upcoming_list: {
      required: true,
    },
  },
  data() {
    return {
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
};
</script>