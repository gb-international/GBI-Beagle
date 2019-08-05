@extends('front.index')
@section('meta')
       <title>GBI | FAQ</title>
        <meta name="description" content="Frequently asked Questions about Educational Expedition "/>
        <meta name="keywords" content="Queries, Safety and Security, Payment, Terms and Condition, Documents, Privacy Policy"/>
@endsection 
@section('content')

  <!-- End Header -->
  <main>
  <!-- start banner area -->
    <section class="banner-block">
      <div class="col-sm-12">
        <img id="faqimg" class="top-img" src="{{ asset('assets/front/images/faq_banner.jpg') }}">
          <div class="searchbarfaq">
           <h1>Frequently Asked Questions (FAQ)</h1> 
           <div class="col-sm-6">
          <input type="text" class="searchbar-faq" id="myInputs" placeholder="Search for Questions.." title="Type in a name">
        </div>
      </div>
  </div>
    </section> 
  <!-- End banner area -->
  <!-- Start main content --> 
  
    <!-- Start how we work -->
   <section class="faq-question">
      <h3>Confused? Need not worry, we have answers to your queries.</h3>
      <article class="faq-content-search">
        <table id="myTables">
          <tr>
          <td class="ques-content"> Que. </td>
          <td>What is GB International? How does it function?</td>
        </tr>
        <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"> <p> 
           GB International is an educational specialist that has been serving the academic sector since last 35 years. GBI has successfully served more than hundred educational institutions through organized educational tours. </p>
          <p>GBI helps students gain practical knowledge by bringing them closer to different technological innovations, culture while imparting them more knowledge of what they get to learn in textbooks also provide learnings outside them. 
          </p></td>
        </tr>
        <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> Cancellation and Refunds for International Tour (For Groups) , Cancellation and Refunds for International Tour (For Groups)</td>
        </tr>
        <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"><p> If the tour is cancelled by any reason post reservation then 50 % of the total amount will be fortified. </p>
          <p>If student cancels his/her trip 30 days prior to departure, 25% of the total amount is to be fortified; if 25-15 days prior to departure than 50% of the total amount and if cancellation is announced 7 days before departure than 100% of the balance amount will be fortified. </p></td>
        </tr>
        <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> Cancellation and Refunds for Domestic Tour (For Groups)</td>
        </tr>
        <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"><p> If the tour is cancelled by any reason, the 50% of the amount is to be fortified.</p> 
        <p>If the student cancels his/her trip post reservation 30 days prior to departure then 35% of the total amount is to be fortified.</p>
        <p>30 days prior to departure charges would be 35%</p>
        <p>20 days prior to departure charges would be 45% </p>
        <p>14 days prior to departure charges would be 65% </p>
        <p>06 days prior to departure charges would be 80% </p>
        <p>days prior to departure charges would be 100%</p></td>
        </tr>
        <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> What are the various mode of payment available?</td>
        </tr>
        <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"><p> Student or school authority can make the payment through Cheque or Demand Draft. They can also do online payment through NEFT or RTGS but that has to be a one-time payment. </p></td>
        </tr>
        <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> What are the basic amenities that GB International provide on a tour?</td>
        </tr>
         <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"> <p> GB International’s services include - Transportation fare, stay in the hotel, meals, 24/7 presence of reliable travel guide, full-time tour director, free entrances/shows and guided sightseeing.</p></td>
        </tr>
        <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> What are the goods and services that GB International does not include in its basic amenities?</td>
        </tr>
        <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"><p> In case of increase in the cost of the land arrangements due to the fluctuations, in exchange rates, the passengers shall have to pay the difference before the departure of the tour. Apart from this, students has to bear their own personal expenses.</p></td>
        </tr>
        <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> What are the documents required for an International tour?</td>
        </tr>
        <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"><p> For an International tour, GBI requires a Valid Passport (minimum valid period required is 6 months), recent colored passport size photograph and students should have a valid photo Identity card of the school they study.</p> </td>
        </tr>
         <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> What are the documents required for a domestic tour?</td>
        </tr>
         <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"><p> For a domestic tour, GBI requires a valid student Identity card and recent colored Passport size photograph. </p></td>
        </tr>
         <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> How old do I have to be to travel on GB International journey?</td>
        </tr>
         <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"><p> GBI takes students of any age provided that the school authority has no objection to send its students on an educational tour.</p></td>
        </tr>
        <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> How is GB International different from any other educational tour company?</td>
        </tr>
        <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"> <p> GBI believes in imparting true educational value. Adventure and fun activities are considered to be a part of practical learning. On every tours, GBI strive to deliver well-defined learning objective.</p>
            <p>GBI follows a personalized customer-centric approach, therefore, it provides informative learning shared memories safety and comfort all at a competitive rate. Maintenance of quality is set priority of GB International.</p></td>
        </tr>
        <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> How does GBI address on-going safety and security?</td>
        </tr>
         <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"><p> GBI is a government recognized company with stringent practices when it comes to student’s safety and security. Students are accompanied by experienced and sensitive travel guide who looks after the safety of the students 24/7, during the tour. </p></td>
        </tr>
        <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> Does GBI have any consumer privacy policy? If yes, what are those?</td>
        </tr>
        <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"><p> Yes, GBI has consumer privacy policy for it believe in keeping its customers safe and worry-free.</p>
          <p>Keeping in mind the comfort zone of the client, GBI try to take as limited information as possible, as permitted by the law. If any information needs to be shared internationally, GBI ensure that client’s privacy is maintained. </p>
          <p class="td-font">GBI avert its client on a timely basis, in regard to the personal information used. </p></td>
        </tr>
        <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> How much does GBI charge for an International tour?</td>
        </tr>
        <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"><p> The cost of the tour depends on the destination and the number of days planned by the client. </p></td>
        </tr>
        <tr>
          <td class="ques-content">Que. </td>
          <td class="td-font"> What are rights reserved under GBI?</td>
        </tr>
         <tr>
          <td class="ques-content">Ans. </td>
          <td class="td-font"><p> Tour itineraries are subject to change without any prior notice. GBI reserves the right to accept, retain and decline any person as a member of a tour at any time of the scheduled trip without any notice. </p>
              <p>No refund is provided to a person, if he/she does not show up during the actual conduct of the tour.  </p></td>
        </tr>
      </table>
    
     </article>
   </section>

    <!-- End how we work -->


<div class="clear"></div>
 </main>
 <script>
function myFunction() {

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputs");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTables");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {

    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
</script>
  <!-- End main content --> 
      
 @endsection 