<!--
This Template for the feedback form.
-->
<template>
<div class="feedback-container">

<h1 class="FormTitle">GBI FEEDBACK FORM</h1>

<h2 class="TourDetails" v-if="itinerary !== ''">{{itinerary.title}}</h2>

<form>
<div class="feedback-section "> 

<div class="FeedbackQ">
<p>1. Did you like the Itinerary of this trip?</p>
<!--  list-icon-start   -->

  <div class="listblock">
    <ul>
        <li @click="selectRate('Q1',2)" :class="feedback.trip_itenerary == 2 ? 'active' : '' "><img src="/worst.svg" alt=""></li>
        <li @click="selectRate('Q1',4)" :class="feedback.trip_itenerary == 4 ? 'active' : '' "><img src="/poor.svg" alt=""></li>
        <li @click="selectRate('Q1',6)" :class="feedback.trip_itenerary == 6 ? 'active' : '' "><img src="/average.svg" alt=""></li>
        <li @click="selectRate('Q1',8)" :class="feedback.trip_itenerary == 8 ? 'active' : '' "><img src="/good.svg" alt=""></li>
        <li @click="selectRate('Q1',10)" :class="feedback.trip_itenerary == 10 ? 'active' : '' "><img src="/excellent.svg" alt=""></li>
     </ul>      
  </div>

  <!--  list-icon-and   -->
 <!-- <input type="range" min="1" max="10" v-model="feedback.trip_itenerary" name="trip_itenerary" class="feedback-slider">
  <span class="range-value">{{feedback.trip_itenerary}}</span> -->
</div>

<div class="FeedbackQ">
<p>2. How Would You Rate Your Place Of Stay?</p>
<div class="listblock">
    <ul>
        <li @click="selectRate('Q2',2)" :class="feedback.place_of_stay == 2 ? 'active' : '' "><img src="/worst.svg" alt=""></li>
        <li @click="selectRate('Q2',4)" :class="feedback.place_of_stay == 4 ? 'active' : '' "><img src="/poor.svg" alt=""></li>
        <li @click="selectRate('Q2',6)" :class="feedback.place_of_stay == 6 ? 'active' : '' "><img src="/average.svg" alt=""></li>
        <li @click="selectRate('Q2',8)" :class="feedback.place_of_stay == 8 ? 'active' : '' "><img src="/good.svg" alt=""></li>
        <li @click="selectRate('Q2',10)" :class="feedback.place_of_stay == 10 ? 'active' : '' "><img src="/excellent.svg" alt=""></li>
     </ul>      
  </div>
</div>

<div class="FeedbackQ">
<p>3. How Would You Rate the food quality and service?</p>
<div class="listblock">
    <ul>
        <li @click="selectRate('Q3',2)" :class="feedback.food_quality == 2 ? 'active' : '' "><img src="/worst.svg" alt=""></li>
        <li @click="selectRate('Q3',4)" :class="feedback.food_quality == 4 ? 'active' : '' "><img src="/poor.svg" alt=""></li>
        <li @click="selectRate('Q3',6)" :class="feedback.food_quality == 6 ? 'active' : '' "><img src="/average.svg" alt=""></li>
        <li @click="selectRate('Q3',8)" :class="feedback.food_quality == 8 ? 'active' : '' "><img src="/good.svg" alt=""></li>
        <li @click="selectRate('Q3',10)" :class="feedback.food_quality == 10 ? 'active' : '' "><img src="/excellent.svg" alt=""></li>
     </ul>      
  </div>
</div>

<div class="FeedbackQ">
<p>4. How were your Transportation and other arrangements?</p>
<div class="listblock">
    <ul>
        <li @click="selectRate('Q4',2)" :class="feedback.transport_arrangements == 2 ? 'active' : '' "><img src="/worst.svg" alt=""></li>
        <li @click="selectRate('Q4',4)" :class="feedback.transport_arrangements == 4 ? 'active' : '' "><img src="/poor.svg" alt=""></li>
        <li @click="selectRate('Q4',6)" :class="feedback.transport_arrangements == 6 ? 'active' : '' "><img src="/average.svg" alt=""></li>
        <li @click="selectRate('Q4',8)" :class="feedback.transport_arrangements == 8 ? 'active' : '' "><img src="/good.svg" alt=""></li>
        <li @click="selectRate('Q4',10)" :class="feedback.transport_arrangements == 10 ? 'active' : '' "><img src="/excellent.svg" alt=""></li>
     </ul>      
  </div>
</div>

<div class="FeedbackQ">
<p>5. How likely would you Recommend GB International To Others?</p>
<div class="listblock">
    <ul>
        <li @click="selectRate('Q5',2)" :class="feedback.recommend_to_others == 2 ? 'active' : '' "><img src="/worst.svg" alt=""></li>
        <li @click="selectRate('Q5',4)" :class="feedback.recommend_to_others == 4 ? 'active' : '' "><img src="/poor.svg" alt=""></li>
        <li @click="selectRate('Q5',6)" :class="feedback.recommend_to_others == 6 ? 'active' : '' "><img src="/average.svg" alt=""></li>
        <li @click="selectRate('Q5',8)" :class="feedback.recommend_to_others == 8 ? 'active' : '' "><img src="/good.svg" alt=""></li>
        <li @click="selectRate('Q5',10)" :class="feedback.recommend_to_others == 10 ? 'active' : '' "><img src="/excellent.svg" alt=""></li>
     </ul>      
  </div>
</div>

<div class="FeedbackQ">
<p>6. Would you like to Travel with GBI again on a new Journey?</p>
<div class="listblock">
    <ul>
        <li @click="selectRate('Q6',2)" :class="feedback.travel_again == 2 ? 'active' : '' "><img src="/worst.svg" alt=""></li>
        <li @click="selectRate('Q6',4)" :class="feedback.travel_again == 4 ? 'active' : '' "><img src="/poor.svg" alt=""></li>
        <li @click="selectRate('Q6',6)" :class="feedback.travel_again == 6 ? 'active' : '' "><img src="/average.svg" alt=""></li>
        <li @click="selectRate('Q6',8)" :class="feedback.travel_again == 8 ? 'active' : '' "><img src="/good.svg" alt=""></li>
        <li @click="selectRate('Q6',10)" :class="feedback.travel_again == 10 ? 'active' : '' "><img src="/excellent.svg" alt=""></li>
     </ul>      
  </div>
</div>

<div class="FeedbackQ">
<p>7. How hospitable was our GBI Escort who accompanied with you on this trip?</p>
<div class="listblock">
    <ul>
        <li @click="selectRate('Q7',2)" :class="feedback.escort_hospitality == 2 ? 'active' : '' "><img src="/worst.svg" alt=""></li>
        <li @click="selectRate('Q7',4)" :class="feedback.escort_hospitality == 4 ? 'active' : '' "><img src="/poor.svg" alt=""></li>
        <li @click="selectRate('Q7',6)" :class="feedback.escort_hospitality == 6 ? 'active' : '' "><img src="/average.svg" alt=""></li>
        <li @click="selectRate('Q7',8)" :class="feedback.escort_hospitality == 8 ? 'active' : '' "><img src="/good.svg" alt=""></li>
        <li @click="selectRate('Q7',10)" :class="feedback.escort_hospitality == 10 ? 'active' : '' "><img src="/excellent.svg" alt=""></li>
     </ul>      
  </div>
</div>

<div class="FeedbackQ">
<p>Other Comments</p>
<textarea placeholder="" cols="" rows="5" v-model="feedback.comments" class="commentArea"></textarea>
</div>

<div class="FeedbackQ">
  <div class="row">
         <div class="col-sm-6">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                v-model="feedback.name"
              />
              <has-error :form="form" field="name"></has-error>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label for="ph_no">Phone Number</label>
              <input
                type="number"
                min=0
                class="form-control"
                placeholder="Phone Number"
                v-model="feedback.ph_no"
              />
              <has-error :form="form" field="ph_no"></has-error>
            </div>
          </div>
    </div>
     <div class="row">
         <div class="col-sm-12">
            <div class="form-group emailField">
              <label for="email">Email ID <span style="font-size: 14px;" v-if="$route.name == 'FeedbackForm2'">(Please enter your registered Email ID)</span></label>
              <input
                type="email"
                class="form-control"
                placeholder="Email ID"
                v-model="feedback.email"
              />
              <has-error :form="form" field="email"></has-error>
            </div>
          </div>
    </div>
</div>
</div>

<div class="submitDiv">
<button class="submitButton" @click="submitFeedback">SUBMIT</button>
</div>
</form>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "FeedbackLink",
  components:{
  },
  data() {
    return {
       itinerary: "",
       feedback: {
          name: "",
          ph_no: "",
          email: "",
          tour_id: "",
          trip_itenerary: 0,
          place_of_stay: 0,
          food_quality: 0,
          transport_arrangements: 0,
          recommend_to_others: 0,
          travel_again: 0,
          escort_hospitality: 0,
          comments: "",
       },
              
    };
  },
  beforeCreate(){
    let metaInfo = {
        title: 'GBI Feedback Form',
        description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
        keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
        url: 'https://www.gowithgbi.com/feedback',
        type: 'website'
      }
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) +"; path=/";
  },
  mounted() {
  this.feedback.tour_id = this.$route.params.tourID;
  this.getTour();
  },
  computed:{
  },
  methods:{

    selectRate(qs,val){
      console.log(qs,val)
      if(qs == 'Q1'){
        this.feedback.trip_itenerary = val;
      }
      if(qs == 'Q2'){
        this.feedback.place_of_stay = val;
      }
      if(qs == 'Q3'){
        this.feedback.food_quality = val;
      }
      if(qs == 'Q4'){
        this.feedback.transport_arrangements = val;
      }
      if(qs == 'Q5'){
        this.feedback.recommend_to_others = val;
      }
      if(qs == 'Q6'){
        this.feedback.travel_again = val;
      }
      if(qs == 'Q7'){
        this.feedback.escort_hospitality = val;
      }
    },

    getTour(){
      this.$axios.get("/api/get-tour/"+this.$route.params.tourID).then(response => {
          this.itinerary = response.data
        });
    },
    submitFeedback() {
      if(this.feedback.name == "" || this.feedback.ph_no == "" || this.feedback.email == "" || this.feedback.tour_id == "" || this.feedback.trip_itenerary == 0 || this.feedback.place_of_stay == 0 || this.feedback.food_quality == 0 || this.feedback.transport_arrangements == 0 || this.feedback.recommend_to_others == 0 || this.feedback.travel_again == 0 || this.feedback.escort_hospitality == 0){

         this.$swal.fire({
              icon: 'warning',
              title: "Error",
              text: "Please fill out all the fields correctly.",
            });

      }
      else if(String(this.feedback.ph_no).length !== 10){
        this.$toast.fire({
                icon: "error",
                title: "Please provide a valid phone number.",
              });
      }
      else{
      this.$axios
        .post("/api/feedback-submit", this.feedback, {
        })
        .then(response => {
          if (response.data == "error") {
            this.$swal.fire({
              icon: 'warning',
              title: "Error",
              text: "Error Occured, Please Try Again.",
            });
          }
        })
        this.$swal.fire(
              "Success",
              "Feedback Submitted",
              "success"
            );
        window.location.href = '/';
      }
    },
  },

};
</script>


<style scoped>

.feedback-container {
  height: 100%;
  width: 60%;
  font-family: sans-serif;
  margin: auto;
}

.FormTitle{
  text-align: center;
  font-size: 35px;
  padding-top: 60px; 
  padding-bottom: 40px;
  font-weight: 550;
  margin-left: -10px
}

.TourDetails{
  font-size: 25px;
  font-weight: 550;
  padding-bottom: 35px;
}

.FeedbackQ{
  font-size: 18px;
  font-weight: 500;
  color: black;
  margin-bottom: 45px;
}

.inputDiv{
  display: flex;
}

.form-control{
  border: solid gray 1px;
  height: 50px;
  border-radius: 0px;
  width: 98%;
}

.feedback-slider {
  -webkit-appearance: none;
  width: 300px;
  height: 12.5px;
  background: #d3d3d3;
  border-radius: 15px;
  margin-right: 7px;
}
.feedback-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: solid #17a2b8 6px;
  background: white;
  cursor: pointer;
}

.feedback-slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: solid #17a2b8 6px;
  background: white;
  cursor: pointer;
}

.feedback-slide::-ms-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: solid #17a2b8 6px;
  background: white;
  cursor: pointer;
}

.range-value {
  display: inline-block;
  position: relative;
  width: 60px;
  color: #fff;
  font-size: 16px;
  font-weight:bold;
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  background: #17a2b8;
  padding: 5px 10px;
  margin-left: 7px;
}
.range-value:after {
  position: absolute;
  top: 8px;
  left: -7px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 7px solid #17a2b8;
  border-bottom: 7px solid transparent;
  content: '';
}

.commentArea{
  /*background: #d3d3d3;
  border: none;*/
  outline-color: #17a2b8;
  width: 100%;

}

.submitButton{
  border-radius: 3px;
  border: 1px;
  border-radius: 0px;
  outline: none;
  padding: 15px 70px;
  margin-top: 10px;
  color: white;
  font-size: 20px !important;
  font-weight: 500;
  font-family: sans-serif;
  background-color: #17a2b8;
}

.submitDiv{
  display: flex;
  justify-content: center;
  align-items: center;
}

.emailField{
  width: 98.9%
}

.valDiv{
  margin-top: -5px; 
  font-size: 15px; 
  font-weight: 500;
  padding:  6px;
  background: grey;
}

input[type=range] {
  pointer-events: none;
}

input[type=range]::-webkit-slider-thumb {
  pointer-events: auto;
}

input[type=range]::-moz-range-thumb {
  pointer-events: auto;
}

input[type=range]::-ms-thumb {
  pointer-events: auto;
}

@media only screen and (max-width: 1024px) {
  .feedback-container {
    width: 90%;
  }
  .submitDiv{
    width: 90%;
  }
  .FormTitle{
    font-size: 25px;
  }
  .TourDetails{
    font-size: 20px;
  }
  .feedback-slider {
    width: 200px;
  }
}

@media only screen and (max-width: 720px) {
  .commentArea {
     width: 100%;
  }
  .emailField{
    width: 100%
  }
  .submitDiv{
    width: 100%;
  }
}


/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


ul, li { padding:0; margin:0; list-style: none; }
.listblock li { float: left;  margin: 4px; padding: 0px 0px 0px 0px; cursor: pointer; position: relative;
   transition: all 0.5s ease-in-out; -webkit-transition: all 0.5s ease-in-out;
   -moz-transition: all 0.5s ease-in-out; border-radius: 50%; }
.listblock li:hover, .listblock li.active { background:#2f2a52; border: 1px solid #2f2a52; }
.listblock ul li img{ height: 44px; margin-top: 0px; }
.listblock ul li img:hover, .listblock ul li.active img{ height: 50px; margin-top: 0px;}
/*.fa-angry:hover, .r-act .fa-angry {color: red; font-size:2.5em !important;}
.fa-tired:hover, .r-act .fa-tired {color: #FF4033; font-size:2.5em !important;}
.fa-sad-tear:hover, .r-act .fa-sad-tear {color: #00b7eb; font-size:2.5em !important;}
.fa-frown-open:hover, .r-act .fa-frown-open {color: #40e0d0; font-size:2.5em !important;}
.fa-meh:hover, .r-act .fa-meh {color: #f8de7e; font-size:2.5em !important;}
.fa-smile:hover, .r-act .fa-smile {color: #fcc200; font-size:2.5em !important;}
.fa-smile-beam:hover, .r-act .fa-smile-beam {color: #ffd700; font-size:2.5em !important;}
.fa-laugh:hover, .r-act .fa-laugh {color: #ff6700; font-size:2.5em !important;}
.fa-laugh-beam:hover, .r-act .fa-laugh-beam {color: #fe5a1d; font-size:2.5em !important;}
.fa-grin-stars:hover, .r-act .fa-grin-stars {color: #f94d00; font-size:2.5em !important;}*/
.listblock {
padding-bottom: 30px;
}
</style>