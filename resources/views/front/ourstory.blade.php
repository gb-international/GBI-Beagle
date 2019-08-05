@extends('front.index')
@section('meta')
        <title>GBI | Our Story</title>
        <meta name="description" content="Travel Educationist rooted in experiential learning"/>
        <meta name="keywords" content="Travel agency in Hyderabad, Travel agency in Punjab, Travel agency in Delhi, Travel agency in New Delhi, Travel agency in South Delhi, Travel agency in Delhi NCR , Travel agency near me "/>
@endsection
@section('content')

  <!-- End Header -->
  <main>
  <!-- start banner area -->
    <section class="banner-block">
        <img id="ourstoryimg" class="top-img" src="{{ asset('assets/front/images/our_story.jpg') }}">
     </section>  
  <!-- End banner area -->


  <!-- Start main content -->
  

    <!-- Start how we work -->
    <div class="col-lg-12">
     <article class="how-we-work">
       <h1>Our Story</h1>
       <h2>One’s action can inspire others to dream bigger </h2>
       <p>The journey of GB International dates back to 1983 when Mr. Jasbir Singh Rikhi founded the company single-handedly with the desire of guiding students for a better future.  He seeks to use travel as a tool to guide young minds learn from experiences outside their comfort zone. GBI has been working hard to transform this very idea into reality through finely curated travel tours.   </p><br>
        <h2>Success does not lie in results but in efforts </h2>
        <p>At GBI, we believe that to travel is to learn. It’s a belief that has shaped our path for the last 35 years and something that drive us to keep “moving ahead with time”. We foster a worldwide perspective and are attuned socially and culturally to the ever changing landscape of the classroom and the competitive global market. Keeping this in mind, we offer a number of tour programs covering a wide array of topics. Since its inception, GBI has sent more than one lakh students to different destinations across the globe.</p>
     </article>
   </div>
    <!-- End how we work -->



 <!-- Start Mission-->
   <section class="bgcolor-section">
   	 <div class="col-lg-12">
      <article class="about-story">
       <div class="col-lg-6">
       <div class="ourstory-content">
       	 <h1>Mission</h1>
       	<h2>Learn from the diversity</h2>
         <p>Our mission is to facilitate a true connection between the students and the educational tour by trying to compliment classroom learning with a touch of the real. At GBI, we strive to combine reliable travel support with practical knowledge of textbooks to create an enriching travel experience that last a lifetime. </p>
       </div>
   		</div>
   		<div class="col-lg-6">
       <div class="ourstory-content">
       	<img id="ourstoryimg1" src="{{ asset('assets/front/images/mission.png') }}">
       </div>
   		</div>
      </article>
  	</div>
     </section>

    <section class="whitebg-section">
     <div class="col-lg-12">
   
 	 <article class="about-vision pa-t-15">
      <div class="col-lg-6">
      <div class="ourstory-content">
         <img id="ourstoryimg2" src="{{ asset('assets/front/images/vision.png') }}">
        </div>
       </div>
       <div class="col-lg-6">
       <div class="ourstory-content">
       	  <h1>Vision</h1>
         <h2>The choice of journey shapes mundane reality</h2>
         <p>GBI’s philosophy behind all its program is to reach out to young minds to bring in them confidence and expand their horizons to prepare them face the challenges of mundane reality. We aim to enhance their skills through excursion to understand how various culture and different countries work.</p>
       </div>
   		</div>
       </article>
   </div>
  </section>
    <!-- End Mission -->

    <!-- Start Behind Face GBI-->
   <section class="bgcolor-section">
   	 <div class="col-lg-12">
       <article class="about-story-face">
       <h1> FACES BEHIND GBI</h1>

      <div class="our-experience">
         <img src="{{ asset('assets/front/images/user.jpg') }}">
         <h2>Mr. Jasbir Singh Rikhi</h2>
         <p>CEO </p>
       </div>
       <div class="our-experience">
         <img src="{{ asset('assets/front/images/user.jpg') }}">
         <h2>Mr. Chanpreet Rikhi</h2>
         <p>Director  Operations </p>
       </div>
       <div class="our-experience">
         <img src="{{ asset('assets/front/images/user.jpg') }}">
         <h2>Mrs. Gurpreet Kaur Rikhi</h2>
         <p>Assistant Director </p>
       </div>
       
      </article>
  		</div>
     </section>
    <!-- End Behind Face GBI -->
   
  <div class="clear"></div>
 </main>
  <!-- End main content --> 
   @endsection 