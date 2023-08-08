<template>
  <div>
    <button
      class="position-absolute display-none"
      id="introButton"
      data-toggle="modal"
      data-target="#introModal"
      data-backdrop="static"
      data-keyboard="false"
    ></button>
    <div class="modal" id="introModal">
      <div class="modal-dialog modal-lg w-100">
        <div class="modal-content border-radius-0 border-0">
          <div class="modal-body">
            <div class="intro-image">
              <button
                type="button"
                class="close intro_close display-none"
                data-dismiss="modal"
              >
                &times;
              </button>
              <div class="intro" v-if="data">
                <transition name="fade" mode="out-in">
                  <img :src="data.path" class="intro-page-image" />
                </transition>
                <div class="text-center mt-2">
                  {{ data.text }}
                </div>

                <div class="text-center mt-2">
                  <span v-for="(dot,i) in images" :key="i" @click="showImage(i)">
                    <span v-if="preview_img_index == i" class="dot-active"/>
                    <span v-else class="dot"/>
                  </span>
                </div>

                <div class="intro-footer mt-4">
                  <div class="row">
                    <div class="col-4">
                      <button
                        type="button"
                        class="btn btn-outline-info border-radius-0 intro-btn"
                        @click="skipIntro()"
                      >
                        SKIP
                      </button>
                    </div>
                    <div class="col-8 text-right">
                      <button
                        type="button"
                        class="btn btn-outline-info border-radius-0 intro-btn"
                        @click="LeftImage()"
                      >
                        BACK
                      </button>
                      <button
                        v-if="right_btn"
                        type="button"
                        class="btn btn-outline-info border-radius-0 intro-btn"
                        @click="RightImage()"
                      >
                        NEXT
                      </button>
                      <button
                        v-if="finish_btn"
                        type="button"
                        class="btn btn-outline-info border-radius-0 intro-btn"
                        @click="FinishImage()"
                      >
                        FINISH
                      </button>
                    </div>
                  </div>
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
export default {
  data() {
    return {
      images: [
        {
          id:1,
          path: "/assets/front/intro/home.png",
          text: "Welcome to Go With GBI web platform .Learn ,explore ,discover and enjoy your journey with best in class quality and service.",
        },

        {
          id:2,
          path: "/assets/front/intro/explore.gif",
          text: "Now search your itineraries from the source/destinationof your choices and filter your itineraries search based on the travel category and number of days",
        },
        {
          id:3,
          path: "/assets/front/intro/resource.gif",
          text: "Get all your answers to your questions related to the journeys you plan with GBI. Learn about the cities and countries you want to explore.",
        },
        {
          id:4,
          path: "/assets/front/intro/blogs.gif",
          text: "Learn ,explore ,discover about the new places, new approach to educational travel, experiences you get to read ,review and share",
        },

        {
          id:5,
          path: "/assets/front/intro/gallery.gif",
          text: "gallery page",
        },
        {
          id:6,
          path: "/assets/front/intro/login.gif",
          text: "Enjoy all the benefits GBI has to offer to its clients on their dash board panel. Now you can book, search your history and get latest updates on sign up with GBI",
        },
      ],
      data: {
        path: "",
        text: "",
      },
      preview_img_index: 0,
      img_length: 0,
      finish_btn: false,
      right_btn: true,
    };
  },
  mounted() {
    if (!this.$cookies.isKey("intro_alert")) {
      this.showIntro();
    }
  },
  watch: {
    preview_img_index: function () {
      if (this.preview_img_index == this.img_length) {
        this.finish_btn = true;
        this.right_btn = false;
      } else {
        this.finish_btn = false;
        this.right_btn = true;
      }
    },
  },
  created() {
    this.setImage();

    this.img_length = this.images.length - 1;
  },
  methods: {
    showIntro() {
      $("#introButton").click();
    },
    setImage(index = 0) {
      this.data.path = this.images[index].path;
      this.data.text = this.images[index].text;
    },
    LeftImage() {
      if (
        this.preview_img_index <= this.img_length &&
        this.preview_img_index != 0
      ) {
        this.preview_img_index--;
        this.setImage(this.preview_img_index);
      }
    },
    RightImage() {
      if (this.preview_img_index < this.img_length) {
        this.preview_img_index++;
        this.setImage(this.preview_img_index);
      }
    },
    showImage(index){
      this.preview_img_index
      if(index>=0){
        this.preview_img_index = index;
        this.setImage(this.preview_img_index);
      }
    },
    skipIntro() {
      this.FinishImage();
    },
    FinishImage() {
      console.log("finish");
      // this.$cookies.set('intro_alert','yes','6s');
      this.$cookies.set("intro_alert", "yes", Infinity);
      window.$(".intro_close").click();
    },
  },
};
</script>