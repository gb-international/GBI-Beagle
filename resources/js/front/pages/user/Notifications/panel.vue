<!--
Author: @Manas

This Template is for listing for the User Notifications.

Functions:

changeSort() - change sort Type (all/read/unread).
changeList() - Change List Type (old/new).
onResize() - window resize detector.
getList() - fetch notifications.
selectNotif() - select Notification card, fetch notification card value.
markRead() - Mark Unread as Read.
redirNotif() - redirect to single notification (mobile view).
redirList() - redirect to notification list (mobile view).

Filters:

htmlFilter() - Filter html Tags.
subjectFilter() - Filter categories into Subject lines.
contentFilter() - Filter categories into content starting lines.

-->
<template>
<section>
<h1 class="PageTitle">Notification Panel</h1>
<div class="feedback-container" v-if="notif_list && notif_list.meta">
  <div class="feedback-full">
    <div class="feedback-body">
     <!-- Mail Left Side Web -->
      <div class="mail-left-side">
        <div class="mail-left-top">
          <div>
            <button class="fas fa-chevron-left arrow-buttons" :disabled="currentPage===1" @click="getList(currentPage-=1)"></button>
            <button class="fas fa-chevron-right arrow-buttons" :disabled="notif_list.meta.last_page <= currentPage" @click="getList(currentPage+=1)"></button>
            <b-dropdown id="dropdown" size="sm" :text="sortType" variant="" class="filter-dd">
              <b-dropdown-item href="#" style="font-size: 13px;" @click="changeSort('All')">All</b-dropdown-item>
              <b-dropdown-item href="#" style="font-size: 13px;" @click="changeSort('Read')">Read</b-dropdown-item>
              <b-dropdown-item href="#" style="font-size: 13px;" @click="changeSort('Unread')">Unread</b-dropdown-item>
            </b-dropdown> 
          </div>
          <b-dropdown id="dropdown" size="sm" :text="'Page '+currentPage+' of '+notif_list.meta.last_page" variant="" class="filter-dd2">
            <b-dropdown-item href="#" style="font-size: 13px;"@click="changeList('all')">Newest</b-dropdown-item>
            <b-dropdown-item href="#" style="font-size: 13px;"@click="changeList('old')">Oldest</b-dropdown-item>
          </b-dropdown>
        </div>
        <!-- Single Mail Card Web-->
        <div class="mail-card" v-for="item in notif_list.data" v-bind:key="item.id" @click="selectNotif(item); markRead(item)" :style="`border-color: ${item.read == 0 ? 'red' : 'green'}`">
          <div class="mails">
            <div class="mail-names" style="clear: both;">
            <b>{{item.category | subjectFilter}}</b>
            </div>
            <div class="date">{{item.time}}</div>
          </div>
          <div class="mails">
            <div class="mail-info">
              <p>From: admin@gbinternational.in</p>
              <p2>Dear {{userData.name}}, please check out {{item.category | contentFilter}}...</p2>
            </div>
            <div>
              <!-- <img :src="$gbiAssets+'/assets/front/icons/'+item.badge+'.png'" /> -->
              <p class="ReadStatus" style="font-size: 12px; padding: 5px" :style="item.read == 0 ? 'border-color: red; color: red' : 'border-color: green; color: green' ">{{item.read == 0 ? 'Unread' : 'Read'}}</p>
            </div>
          </div>
        </div>

        <!-- End Single Mail Card -->
      </div>
      <!-- Mail Left Side Mobile -->
      <div class="mail-left-side-m" :style="{'display': leftDisplay}">
        <div class="mail-left-top">
          <div>
            <button class="fas fa-chevron-left arrow-buttons" :disabled="currentPage===1" @click="getList(currentPage-=1)"></button>
            <button class="fas fa-chevron-right arrow-buttons" :disabled="notif_list.meta.last_page <= currentPage" @click="getList(currentPage+=1)"></button>
            <b-dropdown id="dropdown" size="sm" :text="sortType" variant="" class="filter-dd">
              <b-dropdown-item href="#" style="font-size: 13px;" @click="changeSort('All')">All</b-dropdown-item>
              <b-dropdown-item href="#" style="font-size: 13px;" @click="changeSort('Read')">Read</b-dropdown-item>
              <b-dropdown-item href="#" style="font-size: 13px;" @click="changeSort('Unread')">Unread</b-dropdown-item>
            </b-dropdown> 
          </div>
          <b-dropdown id="dropdown" size="sm" :text="'Page '+currentPage+' of '+notif_list.meta.last_page" variant="" class="filter-dd2">
            <b-dropdown-item href="#" style="font-size: 13px;"@click="changeList('all')">Newest</b-dropdown-item>
            <b-dropdown-item href="#" style="font-size: 13px;"@click="changeList('old')">Oldest</b-dropdown-item>
          </b-dropdown>
        </div>
        <!-- Single Mail Card -->
        <div class="mail-card" v-for="item in notif_list.data" v-bind:key="item.id" @click="redirNotif(item); markRead(item)" :style="`border-color: ${item.read == 0 ? 'red' : 'green'}`">
          <div class="mails">
            <div class="mail-names" style="clear: both;">
            <b>{{item.category | subjectFilter}}</b>
            </div>
            <div class="date">{{item.time}}</div>
          </div>
          <div class="mails">
            <div class="mail-info">
              <p>admin@gbinternational.in</p>
              <p2>Dear {{userData.name}}, please check out {{item.category | contentFilter}}...</p2>
            </div>
            <div>
              <!-- <img :src="$gbiAssets+'/assets/front/icons/'+item.badge+'.png'" /> -->
              <p class="ReadStatus" style="font-size: 12px; padding: 5px" :style="item.read == 0 ? 'border-color: red; color: red' : 'border-color: green; color: green' ">{{item.read == 0 ? 'Unread' : 'Read'}}</p>
            </div>
          </div>
        </div>
        <!-- End Single Mail Card -->
      </div>
      <!-- End Mail Cards -->
      <!-- Mail Right Side -->
      <div class="mail-right-side" :style="{ 'display': rightDisplay }">
        <div>
          <button class="btn btn-info customButton" @click="redirList">Back</button>
        </div>
        <div class="mail-right-body" v-if="currentItem">
          <!-- Message Title -->
          <div class="message-top">
            <div class="message-title">
              <p>
                From: 
                <br/>Date:
                <!--<br/>Mobile:-->
               </p>
                <p>
                  <b>GBI {{currentItem.admin_email}}</b>
                  <br/><b>{{currentItem.fullDate}}</b>
                  <!-- <br/><b>+91 {{currentItem.ph_no}}</b> -->
                </p>
              </div>
              <img :src="$gbiAssets+'/assets/admin/default/icon/admin_logo.png'" class="logo-img">
          </div>
          <!-- Message Body -->
          <div class="message-body">
            <p class="message-tour-info"><b>Subject: </b>{{currentItem.category | subjectFilter}}</p>
            <p class="font-size: 15px; color: black;">
             Dear {{userData.name}}, please check out {{currentItem.category | contentFilter}}, more details mentioned below.
            </p>
            <p style="margin-top: 25px;">
               {{currentItem.data.body | htmlFilter}}
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
</section>
</template>

<script>
//import pagination  from 'laravel-vue-pagination';

export default {
  name: "FeedbackList",
  components:{
    //'pagination':pagination,
  },
  data() {
    return {
      notif_list: [],
      filter:'',
      perPage:'',
      options:[],
      currentItem: null,
      currentPage: 1,
      rightDisplay: '',
      leftDisplay: '',
      windowHeight: window.innerHeight,
      listType: 'all',
      userData: '',
      sortType: 'All'
    };
  },
    watch: {
        windowHeight(newHeight, oldHeight) {
              this.rightDisplay = ''
              this.leftDisplay = ''
        }
  },

  beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
  mounted() {
        this.userData = this.$cookies.get("user")
        this.getList(this.currentPage)
        //console.log(this.userData)
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
  },
  methods:{
    changeSort(sort){
      this.sortType = sort
      this.currentPage = 1
      this.getList(this.currentPage)
    },
    changeList(listType){
      this.listType = listType
      this.currentPage = 1
      this.getList(this.currentPage)
    },
    onResize() {
        this.windowHeight = window.innerHeight
    },
    getList(page) {
      this.$axios.get("/api/user-notifs/"+this.userData.id+"/"+this.sortType.toLowerCase()+"/"+this.listType+"?page="+page).then(response => {
        this.notif_list = response.data;
        //this.selectNotif(this.notif_list.data[0])
      });
    },
    selectNotif(item){
      this.currentItem = item;
      this.currentItem.email_s = '<'+item.email+'>';
      this.currentItem.admin_email = '<admin@gbinternational.in>'
    },
    markRead(item){
      if(item.read == 0){
        this.$axios
        .post("/api/notification/mark-read", {
          'id': item.id
        },
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          //console.log(response.data)
          //this.userData.notifCount = response.data;
          //this.$cookies.set('user',this.userData);
          this.$store.commit("notifCount", response.data)
        })
        item.read = 1
      }
    },
    redirNotif(item){
      if(item.read == 0){
        this.$axios
        .post("/api/notification/mark-read", {
          'id': item.id
        },
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          //console.log(response.data);
          this.userData.notifCount = response.data;
          this.$cookies.set('user',this.userData);
        })
        item.read = 1
      }
      this.rightDisplay = 'inline';
      this.leftDisplay = 'none';
      this.currentItem = item;
      this.currentItem.email_s = '<'+item.email+'>';
      this.currentItem.admin_email = '<admin@gbinternational.in>'
    },
    redirList(){
      this.rightDisplay = 'none';
      this.leftDisplay = 'inline';
    }
  },

  filters: {
     /*htmlFilter(val) {
        if(val.length > 50){
          return val.replace(/(<([^>]+)>)/gi, "").slice(0,50)+'...';
        } else {
            return val.replace(/(<([^>]+)>)/gi, "");
        }
      },*/
    htmlFilter(val) {
        return val.replace(/(<([^>]+)>)/gi, "");
    },
    contentFilter(val){
      if(val == 'itinerary'){
        return 'our newly added itinerary'
      } else if(val == 'blog'){
        return 'our new blog post'
      } else if(val == 'travel'){
        return 'the new updates for your recent travel booking'
      } else if(val == 'payment'){
        return 'your recent payment activity'
      } else if(val == 'website'){
        return 'our website alert'
      } else {
        return 'our newly added '+val
      }
    },
    subjectFilter(val){
      if(val == 'itinerary'){
        return 'New itinerary from GBI'
      } else if(val == 'blog'){
        return 'New blog from GBI'
      } else if(val == 'travel'){
        return 'New travel update from GBI'
      } else if(val == 'website'){
        return 'New website alert from GBI'
      } else if(val == 'payment'){
        return 'New payment update from GBI'
      } else {
        return 'New updates from GBI'
      }
    }
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
  outline: none;
  background: white;
}
body {
  margin: 0;
  font-family: Sans-serif;
}
.logo-img{
      height: 70px;
      margin-right: 2%;
      width: auto
    }
.PageTitle{
  text-align: center;
  font-size: 25px;
  padding: 30px 0px 5px 0px;
  font-weight: 550;
}
.feedback-full {
  background-color: white;
  width: 100%;
  padding: 8px 30px;
  display: flex;
  flex-direction: column;
}
.feedback-body {
  flex: 1;
  display: flex;
  margin: 0 auto;
  width: 80%;
}
.message-top{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.mail-left-side-m{
  width: 40%;
  height: 100%;
  overflow: auto;
  padding: 5px 0px 5px 0px;
  display: none;
}
.mail-card {
  background-color: white;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 15px 15px 15px 15px;
  transition: 0.3s;
  border: 1px solid;
  border-left: 5px solid;
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
  margin-top: 35px;
  margin-left: 35px;
  flex: 1;
}

.mail-right-body{
  background-color: white;
  position: relative;
  padding: 22px 20px 20px 20px;
  font-size: 16px;
  padding-bottom: 15px;
  margin: 20px 10px;
  color: #000000b8;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);
}

.message-body {
  overflow: auto;
  height: auto;
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
  font-size: 16px;
  font-weight: 500;
  color: #1f1c1c;
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
  background-color: white;
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

.customButton{
  display: none;
}

.ReadStatus{
  font-weight: 500; 
  font-size: 11px; 
  text-align: center; 
  border: solid 1px;
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

@media only screen and (max-width: 1024px) {
  .feedback-body {
    width: 90%;
  }
}

@media only screen and (max-width: 823px) {

  .logo-img{
      height: 45px;
      margin-right: 1px;
      margin-top: -15px;
  }

  .feedback-body {
    width: 100%;
  }

  .feedback-full {
    padding: 8px 30px;
  }

  .mail-right-body{
    margin: 20px 0px;
  }
  .mail-right-side {
    margin-left: 0px;
    width: 100%;
    display: none;
    margin-top: 0px;
  }
  .mail-left-side {
    width: 100%;
    display: none;
  }
  .mail-left-side-m {
    width: 100%;
    display: inline;
  }

  .customButton {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
    display: inline;
  }

  .PageTitle{
    font-size: 20px;
    padding: 18px 0px 5px 0px;
  }

  .mail-info {
    margin: 2px 65px;
    margin-left: 0px;
    font-weight: 500;
    font-size: 11px;
    color: grey;
  }
  .mail-info p {
   margin-top: -2.5px;
   margin-bottom: 6px;
   font-size: 12px;
   font-weight: 600;
  }
  .mail-names {
    color: #000000b8;
    font-size: 13px;
    font-weight: 500;
  }
}
</style>