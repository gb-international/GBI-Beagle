<template>
  <!--************************************************
      Author:@Ajay
      ****************************************************-->

  <div class="State" v-if="state_data">
    <section class="banner-block">
      <img id="traveleduimg" class="top-img" :src="state_data.banner_image" />
    </section>
    <div class="container state_body mt-30">
      <div class="row">
        <div class="col-sm-8">
          <h4 class="state_name mb-20">{{ state_data.state_name }}</h4>
          <div class="state_description" v-html="state_data.description"></div>
        </div>
        <div class="col-sm-4">
          <div class="card state_card">
            <div class="map_show" v-html="state_data.map_link"></div>
          </div>

          <div class="state_images p-0">
            <div class="row p-0">
              <div
                class="col-6 p-0"
                v-for="img in state_data.images"
                :key="img.id"
              >
                <img
                  :src="img.image"
                  loading="lazy"
                  class="p-0"
                  :alt="img.alt"
                />
              </div>
            </div>
          </div>
          <div class="card state_card">
            <p class="p-0 m-0">Itinerary</p>
            <p
              class="link pl-2"
              v-for="pdf in state_data.itinerarypdfs"
              :key="pdf.id"
            >
              <router-link :to="`/itinerary-pdf/${pdf.slug}`"
                >{{ pdf.slug | pdfFilter }}
                <img class="encylopedia-pdf" :src="$gbiAssets+'/images/icons/pdf.png'"
              /></router-link>
            </p>
          </div>
        </div>
      </div>

      <!-- State carousel -->

      <div class="row">
        <div class="col-sm-12">
          <div class="state_list" v-if="state_list.length">
            <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
              <div
                class="card_scroll states_card"
                v-for="state in state_list"
                :key="state.id"
              >
                <div class="card">
                  <img
                    class="card-img-top"
                    :src="state.thumbnail"
                    loading="lazy"
                    :alt="state.state_name"
                  />
                  <div class="card-img-overlay text-center">
                    <p class="card-text text-white">
                      <router-link :to="`/encyclopedia/${state.slug}`">{{
                        state.state_name
                      }}</router-link>
                    </p>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>

        <div class="col-sm-12 p-0">
          <div class="col-md-8 w-100 p-0">
            <div class="comment_section w-100">
              <div class="container mt-3">
                <h4>Reviews</h4>

                <form class="form" @submit.prevent="addComment()">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      rows="3"
                      v-model="form.body"
                      placeholder="Share your experiences and insights with us"
                      :class="{ 'is-invalid': form.errors.has('body') }"
                    ></textarea>
                    <has-error :form="form" field="body"></has-error>
                    <div class="row">
                      <div class="col text-right">
                        <button
                          type="submit"
                          class="btn btn-info profile_button comment_btn"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <div
                  class="comment_section w-100"
                  v-for="comment in comment_list"
                  :key="comment.id"
                >
                  <div v-if="comment.parent_id == null">
                    <div v-if="comment.user" class="media p-0">
                      <img
                        :src="comment.user.information.photo"    alt="John Doe"
                        class="mr-3 rounded-circle w-45"
                      />
                      <div class="media-body">
                        <h6>
                          {{ comment.user.name }}
                          <small class="text-small">
                            <i>{{ comment.created_at | dateFormat }}</i>
                          </small>
                          <button
                            class="btn btn-outline-dark float-right replybtn"
                            @click="ReplyModal(comment.id)"
                          >
                            Reply
                          </button>
                        </h6>
                        <p>{{ comment.body }}</p>

                        <div
                          v-if="reply_modal == true && comment_id == comment.id"
                        >
                          <form class="form" @submit.prevent="ReplySubmit()">
                            <div class="form-group">
                              <textarea
                                class="form-control"
                                rows="3"
                                v-model="reply_input"
                                placeholder="Type here..."
                              ></textarea>
                              <div class="row">
                                <div class="col text-right">
                                  <button
                                    type="submit"
                                    class="btn btn-info profile_button comment_btn"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>

                        <div
                          v-for="reply in state_data.comments"
                          :key="reply.id"
                        >
                          <div
                            class="media p-0"
                            v-if="reply.parent_id == comment.id"
                          >
                            <img
                              :src="comment.user.information.photo"
                              alt="Jane Doe"
                              class="mr-3 rounded-circle w-45"
                            />
                            <div class="media-body">
                              <h6>
                                {{ comment.user.name }}
                                <small class="text-small">
                                  <i>{{ comment.created_at | dateFormat }}</i>
                                </small>
                              </h6>
                              <p>{{ reply.body }}</p>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import { Form, HasError, AlertError } from "vform";

export default {
  name: "State",
  metaInfo: {
    title: 'Encyclopedia | Know Before You Go ',
    meta:[
      { name: 'description', content: 'All the information you need to know about the countries or states you are visiting will be found here.' },
      { name: 'keywords', content: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs' },
      { name: 'url', content: 'https://www.gowithgbi.com/contact-us' },
    ]
  },
  components: { VueSlickCarousel, Form, HasError },
  data() {
    return {
      settings: {
        dots: true,
        infinite: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1500,
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

      state_data: [],
      comment_data: [],
      comment_list: [],
      state_list: [],
      reply_modal: false,
      comment_id: false,
      encyclopedia_id: "",
      reply_input: "",

      show: false,
      src: "",
      loadedRatio: 0,
      page: 1,
      numPages: 0,

      form: new Form({
        body: "",
        encyclopedia_id: "",
        parent_id: null,
      }),
    };
  },
  watch: {
    "$route.params.id": function (id) {
      this.stateData();
      //   this.scrollToTop();
    },
  },

  beforeCreate(){
    var metaInfo = {
      title: 'GBI Travel Encyclopedia',
      description: 'GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.',
      keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
      url: 'https://www.gowithgbi.com/resources/travel-encyclopedia-international',
      type: 'website'
    }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },

  created: function () {
    this.stateData();
    this.states();
    var metaInfo = {
      title: `GBI Travel Encyclopedia | ${this.state_data.state_name}`,
      description: this.state_data.description.slice(0,150),
      image: this.state_data.banner_image,
      keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
      url: `https://www.gowithgbi.com/encyclopedia/${this.state_data.slug}`,
      type: 'website'
    }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
    // this.scrollToTop();
  },
  methods: {
    updateCurrent(page_num) {
      this.page = page_num;
    },
    pdfShow(name) {
      this.src = "";
      this.show = true;
      this.src = "/encyclopedia/pdf/" + name;
    },
    password: function (updatePassword, reason) {
      updatePassword(prompt('password is "test"'));
    },
    error: function (err) {
      console.log(err);
    },

    stateData() {
      var api = `/api/encyclopedia/${this.$route.params.id}`;
      this.$axios(api).then((response) => {
        this.state_data = response.data;
        this.form.encyclopedia_id = this.state_data.id;

        var url = `/api/ency-comments/${this.form.encyclopedia_id}`;
        this.$axios(url).then((response) => {
          this.comment_list = response.data;
        });
      });
    },

    stateComments() {
      var url = `/api/ency-comments/${this.form.encyclopedia_id}`;
      this.$axios(url).then((response) => {
        return response.data;
      });
    },

    states() {
      this.$axios.get("/api/encyclopedia-list").then((response) => {
        this.state_list = response.data;
      });
    },

    ReplyModal(comment_row) {
      if (localStorage.token == undefined) {
        window.$("#loginButton").click();
        return false;
      }
      this.reply_modal = !this.reply_modal;
      this.comment_id = comment_row;
    },

    ReplySubmit() {
      this.reply_modal = !this.reply_modal;
      this.form.parent_id = this.comment_id;
      this.form.body = this.reply_input;
      this.reply_input = "";
      this.addComment();
    },

    getImgUrl(img) {
      return "/encyclopedia/" + img;
    },

    getProfileImage(img) {
      return "/uploadimage/" + img;
    },

    addComment() {
      if (localStorage.token == undefined) {
        alert("Please login first");
        window.$("#loginButton").click();
      } else {
        // add data to the database
        this.$axios
          .post("/api/encyclopedia-comments", this.form, {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          })
          .then((response) => {
            this.stateData();
            this.stateComments();
            this.form.body = "";
            this.form.parent_id = null;
          });
      }
    },

    goToState(slug) {
      var url = `/encyclopedia/` + slug;
      this.$router.push(url);
    },
    scrollToTop() {
      // if (typeof window !== 'undefined') {
      //   this.prototype.scrollTo(0,0);
      // }
    },
  },
  filters: {
    pdfFilter: function (string) {
      if (string) {
        return string.replace(".pdf", "");
      } else {
        return "";
      }
    },
    dateFormat: function (date) {
      date = new Date(date);
      const dateTimeFormat = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
      const [
        { value: month },
        ,
        { value: day },
        ,
        { value: year },
      ] = dateTimeFormat.formatToParts(date);
      return `${day}-${month}-${year}`;
    },
  },
};
</script>
