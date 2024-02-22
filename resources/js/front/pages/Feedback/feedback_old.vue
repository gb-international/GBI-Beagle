<!--
This Template for the feedback form.
-->
<template>
<div class="feedback-container">

<h1 class="FormTitle">GBI FEEDBACK FORM</h1>

<h2 class="TourDetails" v-if="itinerary !== ''">{{itinerary.noofdays}} DAYS TOUR TO {{itinerary.title}}</h2>

<form>
<div class="feedback-section "> 

<div class="FeedbackQ">
<p>Did you like the Itinerary of this trip?</p>
<!--  list-icon-start   -->

  <div class="listblock">
    <ul>
        <li class="active"><img src="http://localhost:8000/sad.svg" alt=""></li>
        <li class=""><img src="http://localhost:8000/sad.svg" alt=""></li>
        <li class=""><img src="http://localhost:8000/sad.svg" alt=""></li>
        <li class=""><img src="http://localhost:8000/smiley.svg" alt=""></li>
        <li class=""><img src="http://localhost:8000/smiley.svg" alt=""></li>
        <li class=""><img src="http://localhost:8000/smiley.svg" alt=""></li>
        <li class=""><img src="http://localhost:8000/smiley.svg" alt=""></li>
        <li class=""><img src="http://localhost:8000/smiley.svg" alt=""></li>
        <li class=""><img src="http://localhost:8000/smiley.svg" alt=""></li>
        <li class=""><img src="http://localhost:8000/smiley.svg" alt=""></li>
     </ul>      
  </div>

  <!--  list-icon-and   -->
 <!-- <input type="range" min="1" max="10" v-model="feedback.trip_itenerary" name="trip_itenerary" class="feedback-slider">
  <span class="range-value">{{feedback.trip_itenerary}}</span> -->
</div>

<div class="FeedbackQ">
<p>How Would You Rate Your Place Of Stay?</p>
<input type="range" min="1" max="10" v-model="feedback.place_of_stay" class="feedback-slider">
<span class="range-value">{{feedback.place_of_stay}}</span>
</div>

<div class="FeedbackQ">
<p>How Would You Rate the food quality and service?</p>
<input type="range" min="1" max="10" v-model="feedback.food_quality" class="feedback-slider">
<span class="range-value">{{feedback.food_quality}}</span>
</div>

<div class="FeedbackQ">
<p>How were your Transportation and other arrangements?</p>
<input type="range" min="1" max="10" v-model="feedback.transport_arrangements" class="feedback-slider">
<span class="range-value">{{feedback.transport_arrangements}}</span>
</div>

<div class="FeedbackQ">
<p>How likely would you Recommend GB International To Others?</p>
<input type="range" min="1" max="10" v-model="feedback.recommend_to_others" class="feedback-slider">
<span class="range-value">{{feedback.recommend_to_others}}</span>
</div>

<div class="FeedbackQ">
<p>Would you like to Travel with GBI again on a new Journey?</p>
<input type="range" min="1" max="10" v-model="feedback.travel_again" class="feedback-slider">
<span class="range-value">{{feedback.travel_again}}</span>
</div>

<div class="FeedbackQ">
<p>How hospitable was our GBI Escort who accompanied with you on this trip?</p>
<input type="range" min="1" max="10" v-model="feedback.escort_hospitality" class="feedback-slider">
<span class="range-value">{{feedback.escort_hospitality}}</span>
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
  $(".feedback-slider").mousemove(function (e) {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    var percent = val * 100;

    $(this).css('background-image',
        '-webkit-gradient(linear, left top, right top, ' +
        'color-stop(' + percent + '%, #17a2b8), ' +
        'color-stop(' + percent + '%, #d3d3d3)' +
        ')');

    $(this).css('background-image',
        '-moz-linear-gradient(left center, #17a2b8 0%, #17a2b8 ' + percent + '%, #17a2b8 ' + percent + '%, #17a2b8 100%)');
  });
  $(".feedback-slider").on("touchmove", function(e) {
      var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      var percent = val * 100;

      $(this).css('background-image',
          '-webkit-gradient(linear, left top, right top, ' +
          'color-stop(' + percent + '%, #17a2b8), ' +
          'color-stop(' + percent + '%, #d3d3d3)' +
          ')');

      $(this).css('background-image',
          '-moz-linear-gradient(left center, #17a2b8 0%, #17a2b8 ' + percent + '%, #17a2b8 ' + percent + '%, #17a2b8 100%)');
  });

  $(".feedback-slider").on("tap", function(e) {
      var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      var percent = val * 100;

      $(this).css('background-image',
          '-webkit-gradient(linear, left top, right top, ' +
          'color-stop(' + percent + '%, #17a2b8), ' +
          'color-stop(' + percent + '%, #d3d3d3)' +
          ')');

      $(this).css('background-image',
          '-moz-linear-gradient(left center, #17a2b8 0%, #17a2b8 ' + percent + '%, #17a2b8 ' + percent + '%, #17a2b8 100%)');
  });

  this.feedback.tour_id = this.$route.params.tourID;
  this.getTour();
  },
  computed:{
  },
  methods:{

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
        .catch(error => {
        });
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
  background: #d3d3d3;
  border: none;
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
.listblock li:hover, .listblock li.active { background:#2f2a52; border: 3px solid #2f2a52; }
.listblock ul li img{ height: 33px; margin-top: -3px; }
</style>