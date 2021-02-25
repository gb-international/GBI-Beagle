<template>
      <!--************************************************
      Author:@Ajay
      ****************************************************-->
  <div id="faq">

    <div class="faq_banner text_on_image banner_bg explore_bg_img">
      <div class="content">
        <div class="row">
          <div class="col-sm-8 mb-3">
            <h1 class="heading mb-3">Frequently Asked Questions (FAQ)</h1>
            <div class="input-group p-2 bg-skyblue">
              <input
                type="text"
                class="form-control"
                v-model="searchQuery"
                placeholder="Got a question? Shoot at us"
                title="Type in a name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text_on_image">
      <section class="banner-block faq_banner"></section>
      <div class="content"></div>
    </div>
    <!-- Start how we work -->
    <section class="faq-question">
      <h3 class="text-center p-3 font-weight-normal">Confused? Need not worry, we have answers to your queries.</h3>
      <div class="container">
        <div class="mb-2" v-for="(data,i) in resultQuery" :key="i">
          <div class="row mt-1">
            <div class="col-1 text-right">
              <b>Que. </b>
            </div>
            <div class="col-11">
              {{ data.question }}
            </div>
          </div>
          
          <div class="row mt-1">
            <div class="col-1 text-right">
              <b>Ans.</b>
            </div>
            <div class="col-11">
              <div v-html="data.answer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Faq",
   metaInfo: {
    title: 'GBI Frequently Asked Question',
    meta:[
      { name: 'description', content: '@GoWithGBI helps you answer all your queries  regarding your travel program by just one click of a button' },
      { name: 'keywords', content: '@GoWithGBI,have a question,search for your answer,FAQ,Travel bookings queries,customer service,support helpdesk' },
      { name: 'url', content: 'https://www.gowithgbi.com/resources/faq' },
    ]
  },
  data(){
    return{
      searchQuery:null,
      questions_list:[
        {
          question:'What is GB International? How does it function?',
          answer: "<p>GB International is an educational specialist that has been serving the academic sector since last 35 years. GBI has successfully served more than hundred educational institutions through organized educational tours.</p><p>GBI helps students gain practical knowledge by bringing them closer to different technological innovations, culture while imparting them more knowledge of what they get to learn in textbooks also provide learnings outside them.</p>"
        },
        {
          question:"Cancellation and Refunds for International Tour (For Groups) , Cancellation and Refunds for International Tour (For Groups)",
          answer:"<p>If the tour is cancelled by any reason post reservation then 50 % of the total amount will be fortified.</p>                <p>If student cancels his/her trip 30 days prior to departure, 25% of the total amount is to be fortified; if 25-15 days prior to departure than 50% of the total amount and if cancellation is announced 7 days before departure than 100% of the balance amount will be fortified.</p>"
        },
        {
          question:"Cancellation and Refunds for Domestic Tour (For Groups)",
          answer:"<p>If the tour is cancelled by any reason, the 50% of the amount is to be fortified.</p><p>If the student cancels his/her trip post reservation 30 days prior to departure then 35% of the total amount is to be fortified.</p><p>30 days prior to departure charges would be 35%</p><p>20 days prior to departure charges would be 45%</p><p>14 days prior to departure charges would be 65%</p><p>06 days prior to departure charges would be 80%</p><p>days prior to departure charges would be 100%</p>"
        },
        {
          question:"What are the various mode of payment available?",
          answer:"<p>Student or school authority can make the payment through Cheque or Demand Draft. They can also do online payment through NEFT or RTGS but that has to be a one-time payment.</p>",
  
        },
        {
          question:"What are the basic amenities that GB International provide on a tour?",
          answer:"<p>GB International’s services include - Transportation fare, stay in the hotel, meals, 24/7 presence of reliable travel guide, full-time tour director, free entrances/shows and guided sightseeing.</p>"
        },
        {
          question:"What are the goods and services that GB International does not include in its basic amenities?",
          answer:"<p>In case of increase in the cost of the land arrangements due to the fluctuations, in exchange rates, the passengers shall have to pay the difference before the departure of the tour. Apart from this, students has to bear their own personal expenses.</p>"
        },
        {
          question:"What are the documents required for an International tour?",
          answer:"<p>For an International tour, GBI requires a Valid Passport (minimum valid period required is 6 months), recent colored passport size photograph and students should have a valid photo Identity card of the school they study.</p>"
        },
        {
          question:"What are the documents required for a domestic tour?",
          answer:"<p>For a domestic tour, GBI requires a valid student Identity card and recent colored Passport size photograph.</p>"
        },
        {
          question:"How old do I have to be to travel on GB International journey?",
          answer:"<p>GBI takes students of any age provided that the school authority has no objection to send its students on an educational tour.</p>"
        },
        {
          question:"How is GB International different from any other educational tour company?",
          answer:"<p>GBI believes in imparting true educational value. Adventure and fun activities are considered to be a part of practical learning. On every tours, GBI strive to deliver well-defined learning objective.</p><p>GBI follows a personalized customer-centric approach, therefore, it provides informative learning shared memories safety and comfort all at a competitive rate. Maintenance of quality is set priority of GB International.</p>"
        },
        {
          question:"How does GBI address on-going safety and security?",
          answer:"<p>GBI is a government recognized company with stringent practices when it comes to student’s safety and security. Students are accompanied by experienced and sensitive travel guide who looks after the safety of the students 24/7, during the tour.</p>"
        },
        {
          question:"Does GBI have any consumer privacy policy? If yes, what are those?",
          answer:'<p>Yes, GBI has consumer privacy policy for it believe in keeping its customers safe and worry-free.</p><p>Keeping in mind the comfort zone of the client, GBI try to take as limited information as possible, as permitted by the law. If any information needs to be shared internationally, GBI ensure that client’s privacy is maintained.</p><p class="td-font">GBI avert its client on a timely basis, in regard to the personal information used.</p>'
        },
        {
          question:"How much does GBI charge for an International tour?",
          answer:"The cost of the tour depends on the destination and the number of days planned by the client."
        },
        {
          question:"What are rights reserved under GBI?",
          answer:"<p>Tour itineraries are subject to change without any prior notice. GBI reserves the right to accept, retain and decline any person as a member of a tour at any time of the scheduled trip without any notice.</p><p>No refund is provided to a person, if he/she does not show up during the actual conduct of the tour.</p>"
        }
  
      ]
    }
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.questions_list.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.question.toLowerCase().includes(v));
        });
      } else {
        return this.questions_list;
      }
    }
  }
};
</script>
