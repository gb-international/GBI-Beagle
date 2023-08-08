<!--
This Template is for listing for the Feedbacks & sending Feedback Links .
-->
<template>
<div class="feedback-container" v-if="items && items.meta">
  <div class="feedback-full">
    <div class="feedback-body">
      <!-- Mail Left Side -->
      <div class="mail-left-side">
        <div class="mail-left-top">
          <div>
            <button class="fas fa-chevron-left arrow-buttons" :disabled="currentPage===1" @click="getitems(currentPage-=1)"></button>
            <button class="fas fa-chevron-right arrow-buttons" :disabled="items.meta.last_page <= currentPage" @click="getitems(currentPage+=1)"></button>
           <!-- <b-dropdown id="dropdown" size="sm" text="Unread" variant="" class="filter-dd">
              <b-dropdown-item href="#" style="font-size: 13px;">All</b-dropdown-item>
              <b-dropdown-item href="#" style="font-size: 13px;">Read</b-dropdown-item>
            </b-dropdown> -->
          </div>
          <b-dropdown id="dropdown" size="sm" :text="'Page '+currentPage+' of '+items.meta.last_page" variant="" class="filter-dd2">
            <b-dropdown-item href="#" style="font-size: 13px;"@click="getitems(currentPage=1)">Newest</b-dropdown-item>
            <b-dropdown-item href="#" style="font-size: 13px;"@click="getoldItems(currentPage=1)">Oldest</b-dropdown-item>
          </b-dropdown>
        </div>
        <!-- Single Mail Card -->
        <div class="mail-card" v-for="item in items.data" v-bind:key="item.id" @click="selectMail(item)" :style="currentItem == item ? 'box-shadow: none;' : '' ">
          <div class="mails">
            <div class="mail-names" style="clear: both;">
            <b>{{item.name}}</b>, +91{{item.ph_no}}
            </div>
            <div class="date">{{item.time}}</div>
          </div>
          <div class="mail-info">
            <p>From: {{item.email}}</p>
            <p2>{{item.days}} Tour to {{item.itinerary_name}}</p2>
          </div>
        </div>
        <!-- End Single Mail Card -->
      </div>
      <!-- End Mail Cards -->
      <!-- Mail Right Side -->
      <div class="mail-right-side">
        <div class="mail-right-top">
           <button class="cButton sendLinkButton" @click="redirFeedbackLink">Send Feedback Link</button>
        </div>
        <div class="mail-right-body" v-if="currentItem">
          <!-- Message Title -->
          <div class="message-title">
            <p>
              From: 
              <br/>To:
              <br/>Date:
              <br/>Mobile:
             </p>
              <p>
                <b>{{currentItem.name.toUpperCase()}} {{currentItem.email_s}}</b>
                <br/><b>GBI {{currentItem.admin_email}}</b>
                <br/><b>{{currentItem.fullDate}}</b>
                <br/><b>+91 {{currentItem.ph_no}}</b>
              </p>
            </div>
          <!-- Message Body -->
          <div class="message-body">
            <p class="message-tour-info">{{currentItem.days}} Tour to {{currentItem.itinerary_name}}</p>
            <p class="font-size: 15px; color: black;">
              <b>Q1: Did you like the Itinerary of this trip?</b>
              <br/>Ans: {{currentItem.trip_itenerary | ratingFilter}}
            </p>
            <p>
             <b>Q2: How Would You Rate Your Place Of Stay?</b>
              <br/>Ans: {{currentItem.place_of_stay | ratingFilter}}
            </p>
            <p>
             <b>Q3: How Would You Rate the food quality and service?</b>
              <br/>Ans: {{currentItem.food_quality | ratingFilter}}
            </p>
            <p>
             <b>Q4: How were your Transportation and other arrangements?</b>
              <br/>Ans: {{currentItem.transport_arrangements | ratingFilter}}
            </p>
            <p>
             <b>Q5: How likely would you Recommend GB International To Others?</b>
              <br/>Ans: {{ currentItem.recommend_to_others | ratingFilter2}}
            </p>
            <p>
             <b>Q6: Would you like to Travel with GBI again on a new Journey?</b>
              <br/>Ans: {{ currentItem.travel_again | ratingFilter2}}
            </p>
            <p>
             <b>Q7: How hospitable was our GBI Escort who accompanied with you on this trip?</b>
              <br/>Ans: {{ currentItem.escort_hospitality | ratingFilter }}
            </p>
            <p style="margin-top: 25px;">
             <b>Comment</b> <a href="#" style="float: right; font-weight: 500; text-decoration: underline;" @click="postComment(currentItem.id)">Post Comment</a>
              <br/>{{currentItem.comments}}
            </p>
          </div>
          <!-- <div class="bottom-items">
            <a class="fas fa-paperclip attachIcon"></a>
            <button class="cButton replyButton">Reply</button>
          </div> -->
        </div>
        <div v-else class="mail-right-body" style="height: 80vh">
        </div>
      </div>
      <!-- End Mail Right Side -->
    </div>
  </div>
</div>
</template>

<script>
import { Form, HasError } from "vform";
import { mapState } from 'vuex';

export default {
  name: "FeedbackList",
  components:{
    //'pagination':pagination,
  },
  data() {
    return {
      form: new Form({
        id: "",
      }),
      filter:'',
      perPage:'',
      options:[],
      currentItem: null,
      currentPage: 1,
    };
  },
  mounted() {
    this.getitems(this.currentPage);
  },
  computed:{
    ...mapState(['items']),
  },
  methods:{
    getitems(page) {
      this.$store.dispatch('getItems','/feedbacks/all/?page='+page);
    },
    getoldItems(page){
      this.$store.dispatch('getItems','/feedbacks/old/?page='+page);
    },
    selectMail(item){
      this.currentItem = item;
      this.currentItem.email_s = '<'+item.email+'>';
      this.currentItem.admin_email = '<admin@gbinternational.in>'
    },
    redirFeedbackLink(){
      this.$router.push('/send-feedback-link');
    },
    postComment(id){
      this.form.id = id;
      this.form
        .post("/api/feedback/post-comment")
        .then((res) => {
          //this.Sending = false;
        })
        .catch(() => {});
        this.$toast.fire({
            icon: "success",
            title: "Feedback published on website.",
        });
    }

  },

  filters: {
      ratingFilter(val) {
        if (val < 3 ) { return 'Not Good' }
        else if (val < 5 ) { return 'OK' }
        else if (val < 7 ) { return 'Good' }
        else if (val < 9 ) { return 'Very Good' }
        else if (val === 9 || val === 10) { return 'Excellent' }
      },
      ratingFilter2(val) {
          if (val < 3 ) { return 'Not Likely' }
          else if (val < 5 ) { return 'Maybe' }
          else if (val < 7 ) { return 'Quite Likely' }
          else if (val < 9 ) { return 'Yes, Definitely' }
          else if (val === 9 || val === 10) { return 'Absolutely' }
        },
    },

};
</script>


<style scoped>
* {
  box-sizing: border-box;
  outline: none;
}
body {
  margin: 0;
  font-family: Sans-serif;
}
.feedback-full {
  background-color: #f2f3f7;
  width: 100%;
  padding: 8px 30px;
  display: flex;
  flex-direction: column;
}
.feedback-body {
  flex: 1;
  display: flex;
}
.feedback-container {
  height: 100%;
  display: flex;
}
.mail-left-side {
  width: 40%;
  height: 100%;
  overflow: auto;
  padding: 20px 0px 5px 0px;
}
.mail-card {
  background-color: #dad7d79c;
  border-radius: 21px;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 15px 15px 15px 15px;
  transition: 0.3s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);
}
.mail-card:hover {
  box-shadow: none;
}

.mail-names {
  color: #000000b8;
  font-size: 16px;
  font-weight: 500;
}

.mails {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mail-info {
  margin: 2px 65px;
  margin-left: 0px;
  font-weight: 500;
  font-size: 12.5px;
  color: grey;
}
.mail-info p {
 margin-top: -2.5px;
 margin-bottom: 6px;
 font-size: 15px;
 font-weight: 600;
}
.date {
  color: grey;
  float: right;
  font-size: 12px;
  font-weight: 500;
}
.mail-right-side {
  margin-left: 35px;
  flex: 1;
}

.mail-right-body{
  background-color: #e1e1e1e1;
  position: relative;
  padding: 22px 20px 20px 20px;
  border-radius: 18px;
  font-size: 16px;
  padding-bottom: 150px;
  margin: 20px 10px;
  color: #000000b8;

}

.message-body {
  overflow: auto;
  height: 600px;
  width: 100%;
  margin-top: 18px;
  color: black;
}
.message-title {
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: grey;
}
.message-title b{
  font-size: 14px;
  padding-left: 5px;
  color: #000000b8;
  font-weight: 700;
}
.message-tour-info{
  font-size: 18px;
  font-weight: 700;
  color: #7f7a7a;
  margin-bottom: 21px;
}
.mail-right-top{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 10px;
}
.cButton {
  border-radius: 3px;
  border: 1px;
  border-radius: 100px;
  outline: none;
}
.replyButton {
  padding: 12px 38px;
  margin-top: 20px;
  color: white;
  font-size: 19px !important;
  font-weight: 600;
  font-family: Hawaii 5-0, sans-serif;
  background-color: #3ebee4;
}
.sendLinkButton{
  padding: 7px 38px;
  margin-top: 12px;
  color: #3ebee4;
  font-size: 17px !important;
  font-weight: 600;
  font-family: Hawaii 5-0, sans-serif;
  background-color: #f4f6f9;
  border: solid 2px #3ebee4;
}

.attachIcon{
  font-size: 32px; 
  padding-right: 10px; 
  font-weight: 300; 
  color: grey;
}
.filter-dd{
  border-radius: 10px; 
  margin-left: 30px;
}

.filter-dd2{
  border-radius: 10px; 
  
}
.arrow-buttons{
  padding: 5px 20px;
  border: none;
  background-color: #dad7d79c;
  margin-left: 10px;
}
.mail-left-top{
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;
  margin-top: 7px;
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 15px;
}
.bottom-items{
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>