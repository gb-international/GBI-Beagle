<!--
This Template is for listing for the Job Applications .
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
            <b>{{item.firstname}} {{item.lastname}}</b>, +91{{item.contactno}}
            </div>
            <div class="date">{{item.time}}</div>
          </div>
          <div class="mail-info">
            <p>From: {{item.email}}</p>
            <p2>{{item.applyingfor}} ({{item.status}})</p2>
          </div>
        </div>
        <!-- End Single Mail Card -->
      </div>
      <!-- End Mail Cards -->
      <!-- Mail Right Side -->
      <div class="mail-right-side">
        <!-- <div class="mail-right-top">
           <button class="cButton sendLinkButton" @click="redirFeedbackLink">Send Feedback Link</button>
        </div> -->
        <div class="mail-right-body" v-if="currentItem">
          <div class="d-flex justify-content-between topDiv">
            <!-- Message Title -->
            <div class="message-title">
              <p>
                From: 
                <br/>To:
                <br/>Date:
                <br/>Mobile:
               </p>
                <p>
                  <b>{{currentItem.firstname}} {{currentItem.email_s}}</b>
                  <br/><b>GBI {{currentItem.admin_email}}</b>
                  <br/><b>{{currentItem.fullDate}}</b>
                  <br/><b>+91 {{currentItem.contactno}}</b>
                </p>
            </div>
            <div>
              <p class="cardTitle mt-0 ml-2">Status: </p>
              <select v-model="currentItem.status" class="customSelButton mb-4" :class="currentItem.status+'Color'" aria-label="application status" @change="saveAppStatus(currentItem.status, currentItem.id)">
                <option class="mx-4" style="color: grey">Pending</option>
                <option class="mx-4" style="color: orange">Selection</option>
                <option class="mx-4" style="color: green">Hired</option>
                <option class="mx-4" style="color: red">Rejected</option>
              </select>
            </div>
          </div>
          <!-- Message Body -->
          <div class="message-body">
            <p class="message-tour-info">Applying for {{currentItem.applyingfor}}</p>
            <div class="messages-Details">
              <!-- Detail 1 -->
              <div class="details_1">
                <p class="userInfo">
                  Email Id:
                </p>
                <p class="userInfo">
                  Applicant Name:
                </p>
                <p class="userInfo">
                  Mobile Number:
                </p>
                <p class="userInfo">
                  Current Company:
                </p>
                <p class="userInfo">
                  Work Experience:
                </p>
              </div>
              <!-- Detail 2 -->
              <div class="details_2">
                <p class="userInfo">
                  {{currentItem.email}}
                </p>
                <p class="userInfo">
                  {{currentItem.firstname}} {{currentItem.lastname}}
                </p>
                <p class="userInfo">
                  +91 {{currentItem.contactno}}
                </p>
                <p class="userInfo">
                  {{currentItem.current_company}}
                </p>
                <p class="userInfo">
                  {{currentItem.job_exp}}
                </p>
              </div>
            </div>
            <div class="attachments" v-if="currentItem.link">
              <p class="cardTitle">Attachments</p>
              <div class="card customCard cursor-pointer" @click="redirPdf(currentItem.link)">
                <img class="card-img-top customImg" src="https://cdn.pixabay.com/photo/2012/04/02/16/55/adobe-24943_960_720.png" alt="attachment Image">
                <div class="card-body">
                </div>
              </div>
            </div>
          </div>

          <div v-if="ShareModal" class="customDiv mx-2">
            <div class="d-flex justify-content-start align-items-end flex-column" style="margin-top: -2.3vh; margin-right: 12px;">
              <i class="fas fa-times cursor-pointer" @click="ShareModal = false"></i>
            </div>
            <div class="row py-2 mx-1">
              <div class="col-md-5">
                <input class="form-control" type="text" placeholder="Name" v-model="shareName">
              </div>
              <div class="col-md-5">
                <input class="form-control" type="email" placeholder="Email ID" v-model="shareEmail">
              </div>
              <div class="col-md-2">
                <button class="cButton sendButton" @click="shareApplication">Send</button>
              </div>
            </div>
          </div>
          
          <div class="bottom-items">
            <button class="cButton meetButton" @click="redirMeet()">Meeting Scheduler</button>
            <!-- <button class="cButton feedbackButton">Feedback</button> -->
            <button class="cButton replyButton" @click="showShare">Share</button>
          </div>
         
        </div>
        <div v-else class="mail-right-body" style="height: 70vh">
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
      ShareModal: false,
      shareName: '',
      shareEmail: '',
    };
  },
  mounted() {
    this.getitems(this.currentPage);
  },
  computed:{
    ...mapState(['items']),
  },
  methods:{
    redirMeet(){
      window.open('https://meet.google.com')
    },
    redirPdf(link){
      window.open(link)
    },
    showShare(){
      this.ShareModal = true;
    },
    shareApplication(){
      if(this.shareName == '' || this.shareEmail == '' ){
        return this.$toast.fire({
            icon: "error",
            title: "Fields empty.",
          });
      } else {
        this.shareName = ''
        this.shareEmail = ''
        this.$toast.fire({
              icon: "success",
              title: "Resume Sent.",
            });
      }
      
    },
    saveAppStatus(status, id){
      axios
        .post("/api/job-application/save-status", 
          {
            status: status,
            id: id
          }
        )
        .then((res) => {
          //this.Sending = false;
          this.$toast.fire({
            icon: "success",
            title: "Staus Changed.",
          });
        })
    },
    getitems(page) {
      this.$store.dispatch('getItems','/job-applications/all/?page='+page);
    },
    getoldItems(page){
      this.$store.dispatch('getItems','/job-applications/old/?page='+page);
    },
    selectMail(item){
      this.currentItem = item;
      this.currentItem.email_s = '<'+item.email+'>';
      this.currentItem.admin_email = '<admin@gbinternational.in>'
    },
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
.customCard{
  height: 12vh;
  width: 12vh;
}
.customImg{
  height: 100%;
  width: 100%;
}
.cardTitle{
  color: #1d1f21;
  margin: 4vh 0vh -0.06vh 0vh;
  font-size: 14px;
  font-weight: 500;
}
.cardCText{
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  background-color: grey;
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
.userInfo {
  margin: 2px 20px;
  margin-left: 0px;
  font-size: 15px;
  color: #1d1f21;
}
.details_1{
  font-weight: 500;
}
.details_2{
  font-weight: 700;
}
input[type='text'], input[type='email']{
  border: 0px;
  font-size: 14px;
  background-color: #f6f6f6 !important;
  color: #737879;
  width: 105%;
  height: 3.7vh;
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
  padding-bottom: 100px;
  margin: 20px 10px;
  color: #000000b8;

}
.topDiv {
  margin-top: -0.5vh;
}
.message-body {
  overflow: auto;
  height: 450px;
  width: 100%;
  margin-top: 18px;
  color: black;
}
.messages-Details{
    display: flex;
    color: grey;
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
  padding: 6px 32px;
  margin-top: 20px;
  margin-right: 15px;
  color: white;
  font-size: 15px !important;
  font-weight: 600;
  font-family: Hawaii 5-0, sans-serif;
  background-color: #3ebee4;
}
.sendButton{
  padding: 6px 20px;
  margin-right: 7px;
  color: white;
  font-size: 14px !important;
  font-weight: 500;
  font-family: Hawaii 5-0, sans-serif;
  background-color: #3ebee4;
}
.meetButton{
  padding: 6px 20px;
  margin-top: 20px;
  margin-right: 15px;
  color: #3ebee4;
  border: 2px solid #3ebee4;
  font-size: 15px !important;
  font-weight: 700;
  font-family: Hawaii 5-0, sans-serif;
  background-color: white;
}
.feedbackButton{
  padding: 6px 20px;
  margin-top: 20px;
  margin-right: 15px;
  color: #3ebee4;
  border: 2px solid #3ebee4;
  font-size: 15px !important;
  font-weight: 700;
  font-family: Hawaii 5-0, sans-serif;
  background-color: white;
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
.customSelButton {
  border: 1px solid grey;
  padding: 2px;
  border-radius: 25px;
  padding-left: 7px;
  font-size: 14px;
}
.PendingColor{
  color: grey !important;
}
.SelectionColor{
  color: orange !important;
}
.HiredColor{
  color: green !important;
}
.RejectedColor{
  color: red !important;
}
.customDiv{
  background: #e5e5e5;
  border: 1px solid #e5e5e5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);
  border-radius: 15px;
  padding-bottom: 45px !important;
  padding-top: 35px !important;
  margin-top: -5vh;
}
.customDiv input[type='text'], input[type='email']{
  border: 1px solid #d2d2d2;
  background-color: white;
  border-radius: 25px;
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