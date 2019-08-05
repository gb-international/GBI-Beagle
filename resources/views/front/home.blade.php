@extends('front.index')
@section('meta')
        <title>GB International</title>
        <meta name="description" content="Strategic planning of Adventure Tours, Day Return Tours and International Tour"/>
        <meta name="keywords" content="Top travel deals, Domestic travel packages, International travel packages, Cheapest travel packages, Cheap domestic tours, Cheap International tours, Budget tours, Budget domestic tours, Budget International tours , Domestic tour packages , International tour packages , Best Holiday packages for 2019, Best vacation packages for 2019 "/>
        <meta name="google-site-verification" content="7w6ZDsJtrPCqowojujVpirVzuEIgzm4v97ShQjG0MAw" />

       <meta name="csrf-token" content="{{ csrf_token() }}" />
@endsection      
@section('content')

  <!-- Start slider area -->
    
<div style="width:100%;margin: 4px auto;background:#ffffff;"><div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" id="bannerimg1" src="{{ asset('assets/front/images/banner.jpg') }}" alt="GBI slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" id="bannerimg2" src="{{ asset('assets/front/images/banner1.jpg') }}" alt="GBI slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" id="bannerimg3" src="{{ asset('assets/front/images/banner2.jpg') }}" alt="GBI slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
  <!-- End Slider area -->
  <main>

  <!-- Start main content -->
  
    <!-- Start Services -->
      <div class="container">
       <div class="card-titles">
         <h1>Our Travel Programs</h1>
          <h4>Immerge in a Riveting Journey</h4>
       </div> 
        
        <div class="card-deck">
          <div class="card card-1">
           <img class="card-imgs" src="{{ asset('assets/front/images/upcoming.png') }}">
            <div class="card-body">
              <h5 class="card-title">Upcoming Tours</h5>
              <p class="card-text">Stimulate the craze within you and gear up for more excitement. Get ready to embrace fun and adventure as part of your next getaway.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card card-1">
             <img class="card-imgs" src="{{ asset('assets/front/images/Adventure_tours.png') }}">
            <div class="card-body">
              <h5 class="card-title">Adventure Tours</h5>
              <p class="card-text">Shake up your routine and challenge the adventure within. Ramp up your personal fun quotient and experience a rugged new fitness challenge.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card card-1">
            <img class="card-imgs" src="{{ asset('assets/front/images/populartour.png') }}">
            <div class="card-body">
              <h5 class="card-title">Popular Tours</h5>
              <p class="card-text">Gear up to be awe-stuck by the land of fantasy, contrast and fascinating splendor. There is no dearth of stunning beaches, deserts or mountain ranges.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          </div>
         <div class="card-deck">
          <div class="card card-1">
            <img class="card-imgs" src="{{ asset('assets/front/images/europe.png') }}">
            <div class="card-body">
              <h5 class="card-title">Europe</h5>
              <p class="card-text">From the serenity of Switzerland to the stunning Eiffel tower in Paris, get connected to the histories and cultures of Europe for a lifetime.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card card-1">
            <img class="card-imgs" src="{{ asset('assets/front/images/asia.png') }}">
            <div class="card-body">
              <h5 class="card-title">Asia</h5>
              <p class="card-text">Explore the desert ruins and mega-malls of the Middle East to the magnificent monuments in South Asia and technology capitals of East Asia.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
           <div class="card card-1">
            <img class="card-imgs" src="{{ asset('assets/front/images/usa.png') }}">
            <div class="card-body">
              <h5 class="card-title">USA</h5>
              <p class="card-text">Traverse the arid deserts in the south, the beautiful pacific coastline in the west, the stunning rocky mountains in the north and spectacular cities in the east.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    <!-- End Services -->

    <!-- Start Video -->

    <section class="content-video">
      <article class="video-section">
        <p>Hola!! Come Let's Explore</p>
        <h1>GB International!!</h1>
      </article>
      
   <div class="content">
  
  <div class="rwd-media">
    <iframe src="https://player.vimeo.com/video/60814695?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="448" height="200" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
  </div>
  
  
</div>
    </section>
   <!-- <section class="video">
      
     </section>-->
    <!-- End Video -->

    <!-- Start Client Testimonials -->
    <section class="testimonials" id="testimonials">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="testimonials-area">
              <h1>Client Appreciation</h1>

              <div class="testimonials-block">
                <ul class="testimonial-slide">

                  <li>
                    <img class="rt-img" src="{{ asset('assets/front/images/img-2.jpg') }}" alt="img">
                    <p>Often the dates for the trips and the number of students fluctuated but you patiently take everything in your stride. Your smooth organization skills always render hassle free transport from picking to drop. Added to this, the hotels you select are very good, comfortable and secure. </p>
                    <h5 class="rt-name"><strong>Headmistress</strong></h5>
                    <span class="rt-title">Rosary Convent High School, Hyderabad</span>
                  </li>

                  <li>
                    <img class="rt-img" src="{{ asset('assets/front/images/img-2.jpg') }}" alt="img">
                    <p>The quality of food, accommodation provided to us in all the places to our students and staff, we appreciate the care taken by Mr. Rikhi and his team. We all felt at home throughout the tour. We look forward to many more such tours in the future.</p>
                    <h5 class="rt-name"><strong>Principal</strong></h5>
                    <span class="rt-title">Little Flower School, Uppal, Hyderabad</span>
                  </li>

                  <li>
                    <img class="rt-img" src="{{ asset('assets/front/images/img-2.jpg') }}" alt="img">
                    <p>We are grateful to Mr. Rikhi for making our tours a memorable one. He personally took great care to see that meals were served on time. We express our sincere thanks and appreciation to every member of the team who accompanied us on our trips and a special thanks to Mr. Rikhi who managed the programme excellently </p>
                    <h5 class="rt-name"><strong>Principal</strong></h5>
                    <span class="rt-title">St. Martin’s High School, Chintal, Hyderabad </span>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Client Testimonials -->

    
    <!-- Start Portfolio -->
    <section class="gallary">
      <article>
       <h2>Let's Peep Into Some</h2>
        <p>Amazing Memories of GBI</p>
          <div class="column">
            <img class="img-responsive" src="https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/855c0574-6fb4-4918-af5e-1517f452abe1.jpg" alt="image">
          </div> 
          <div class="column">
            <img class="img-responsive" src="https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/75475cee-17ca-4cf4-a161-44c3f662eafb.jpg" alt="image">
          </div>
          <div class="column">
            <img class="img-responsive" src="https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/35d3b6bd-e0ee-4963-a5f4-e8bd78fa6d72.jpg" alt="image">
          </div>
          <div class="column">
            <img class="img-responsive" src="https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/109d97e1-7fd7-48f6-a8b9-3619edc0a913.jpg" alt="image">
          </div>
          <div class="column">
            <img class="img-responsive" src="https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/c0098059-e4a9-4ffd-8563-dc2bc3b03e79.png" alt="image">
          </div>
          <div class="column">
            <img class="img-responsive" src="https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/2b96884f-838d-4615-a636-ec8f48efe1eb.png" alt="image">
          </div>
          <div class="column">
            <img class="img-responsive" src="https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/058b50af-0a97-487d-aa7a-041e4a240f68.png" alt="image">
          </div>
          <div class="column">
            <img class="img-responsive" src="https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/5485fc18-6d7a-4ca4-943c-7db9d095fa24.png" alt="image">
          </div>
          <div class="column">
            <img class="img-responsive" src="https://gallery.mailchimp.com/45bfb3b660ff417ad44228191/images/0608b008-4973-4f00-a9c7-7980d5d191a1.png" alt="image">
          </div>
          </article>
    </section>
    <div class="clear">
           
    </div>
    <!-- End Portfolio -->
</main>
  <!-- End main content --> 
 <script type="text/javascript">
   window.onload = function() {
  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    var lat = startPos.coords.latitude;
    var log = startPos.coords.longitude;
    var datajson = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + startPos.coords.latitude + "," + startPos.coords.longitude + "&sensor=true_or_false&key=AIzaSyB4YVYa_kkd_BJjeD23-hVEGHh2-I_EAA0";
       $.getJSON(datajson, function(data){
        var fulladdress = data.results[0].formatted_address;
         var state = data.results[8].formatted_address;
             $.ajax({
                url: "{{ route('location')}}",
                type: 'POST',
                dataType: 'json',
                Accept : 'application/json',
                data: {
                fulladdress : fulladdress,
                state : state,
                _token: "{{ csrf_token() }}",
                },

               success: function(response){ // What to do if we succeed
                     console.log(response); 
                    },
              error: function(response){
                  console.log('already exit');
                  }
              })    
           $.each(data, function (index, value) {
          
        });
    }); 
     
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
  
};

 </script>
 @endsection