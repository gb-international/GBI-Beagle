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
                <div class="text-center">
                  {{ data.text }}
                </div>
                <div class="intro-footer">
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
          path: "/assets/front/intro/home.png",
          text: "Home page",
        },

        {
          path: "/assets/front/intro/explore.gif",
          text: "Explore page",
        },
        {
          path: "/assets/front/intro/resource.gif",
          text: "resource page",
        },
        {
          path: "/assets/front/intro/blogs.gif",
          text: "blogs page",
        },

        {
          path: "/assets/front/intro/gallery.gif",
          text: "gallery page",
        },
        {
          path: "/assets/front/intro/login.gif",
          text: "login page",
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
      window.$("#introButton").click();
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