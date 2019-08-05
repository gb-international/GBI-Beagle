<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="gbinternational" />
        <meta name="language" content="en" />
         @yield('meta')
        <meta name="author" content="@GBI" /> 
        <meta name="copyright" content="GB International" />
        <meta name="robots" content="follow"/>
        <!--<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">-->
        <meta http-equiv="X-UA-Compatible" content="IE=10">
        <meta http-equiv="cache-control" content="no-cache"/>
        <meta http-equiv="expires" content="exercise date in seconds"/>
        <meta http-equiv="expires" content="0"/> <meta http-equiv="expires" content="43200"/>

        <!-- Favicon -->
        <link rel="shortcut icon" type="image/icon" href="{{ secure_asset('assets/front/images/favicon.png') }}"/>
        <!-- Font Awesome -->
     <!--    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet"> -->
          <!-- Bootstrap CSS -->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
       <!-- Slick slider -->
        <link href="{{ secure_asset('assets/front/css/slickcss.css') }}" rel="stylesheet">
        <link href="{{ secure_asset('assets/front/css/reset.css') }}" rel="stylesheet">
        <!-- Fonts -->
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" /> 
       <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- css stylesheet -->
        
        <!-- <link href="{{ asset('assets/front/minify-css/app.min.css') }}" rel="stylesheet"> -->
        <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">
       <meta name="csrf-token" content="{{ csrf_token() }}">
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
       <!-- Global site tag (gtag.js) - Google Analytics -->
       <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138734768-1"></script>
       <script>
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'UA-138734768-1');
      </script>
      </head>
  <body>
  
    
      <!--START SCROLL TOP BUTTON -->
    <!-- <a class="scrollToTop" href="#">
      <i class="fa fa-angle-up"></i>
    </a> -->
  
  <!-- END SCROLL TOP BUTTON -->
    
    <!-- Start Header -->
    <!-- id="contents" -->
  <div class="container">  
  <div class="row">
  <section class="navigation" id="myHeader">
  <div class="nav-container">
    <div class="brand">
      <a href="{{ url('/') }}"> <img src="{{ asset('assets/front/images/logo.png') }}" alt="GBI Logo"></a>
    </div>
    <div class="nav-custom">
    <nav>
      <div class="nav-mobile"><a id="nav-toggle" href="javascript:void(0);"><span></span></a></div>
      <ul class="nav-list">
        <li>
          <a href="{{ route('explore-destination') }}">Explore Destination</a>
        </li>
         <li>
          <a href="javascript:void(0);">Resources</a>
          <ul class="nav-dropdown">
            <li><a href="{{ route('travel-and-education') }}">Travel & Education</a></li>
            <li><a href="{{ route('safety-and-security') }}">Safety & Security</a></li>
            <li><a href="{{ route('faq') }}">FAQ</a></li>
          </ul>
        </li>
         <li><a href="https://gowithgbi.wordpress.com/" target="_blank">GBI Travel Blog</a></li>
        <li>
          <a href="javascript:void(0);">About Us</a>
          <ul class="nav-dropdown">
            <li><a href="{{ route('ourstory') }}">Our Story</a></li>
            <li><a href="{{ route('how-we-work') }}">How We Work</a></li>
            <li><a href="{{ route('join-our-team') }}">Join Our Team</a></li>
          </ul>
        </li>
         <li><a href="{{ route('contact-us') }}">Contact Us</a></li>
      </ul>
    </nav>
  </div>
  </div>
</section>

 @yield('content') 
   <!-- <div id="app">
  
        {{--Vue Routing--}}
        <home-main></home-main>
   
  </div> -->

<footer id="footer">
    <div class="footer-top">
      <div class="footer-content">
          <div class="single-footer">
              <h3>ACCREDITAION & RECOGNITIONS</h3> 
                <ul>
                   <li><img class="footr-img" src="{{ asset('assets/front/images/lato_logo.png') }}" alt="GBI tourisum"></li>
                   <li><img class="footr-img" src="{{ asset('assets/front/images/telangana_tourisum.png') }}" alt="telangana tourisum"></li>
                   <li><img class="footr-img" src="{{ asset('assets/front/images/mt_log.png') }}" alt="minisrty of tourism"></li>
                </ul>
            </div>
            <div class="single-footer">
              <ul>
                  
                   <li>
                      <h3>GBI Holidays Pvt. ltd.</h3>
                      <p>G-32,DDA Commercial Complex</p>
                      <p>Sheikh Sarai Phase-1</p>
                      <p>New Delhi 110017</p>
                   </li>
                   <li>
                     <p><i class="fa fa-phone fa-lg" aria-hidden="true"></i> 011-41864453</p>
                     <p><i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i>csrikhi@gbinternational.in</p>
                     <p>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;info@gbinternational.in</p>
                   </li>
                    
                   <li>
                    <h3>Connect With Us</h3>
                    <a href="https://www.facebook.com/gowithgbi/"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                    <a href="https://twitter.com/gowithgbi"> <i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/company/13592478/admin/"> <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a>
                    <a href="https://wordpress.com/view/gowithgbi.wordpress.com"> <i class="fa fa-wordpress fa-lg" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/gbirikhi/">  <i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
                    <a href="#"> <i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i></a>
                   </li>
                </ul>
            </div>
        </div>
      </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="footer-bottom-area">
              <p class="copy-right">&copy; 2019 GBI Holidays Pvt. ltd. All right reserved.</p>
            </div>
            <div class="footer-bottom-term">
              <p class="copy-left"><a herf="#"> Terms & Condition</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </footer>
         <div class="col-md-12 m-bottom">
            <div class="navbar-bottom">
                 <a href="{{ url('/') }}" class="active">
                  <div class="nav-font">
                    <i class="fas fa-home"></i>
                    </div>
                    <div class="nav-font"> home
                    </div>
                  </a>
                  <a href="{{ route('explore-destination') }}">
                  <div class="nav-font">
                    <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <div class="nav-font"> explore
                    </div>
                  </a>
                  <a href="{{ route('explore-destination') }}">
                  <div class="nav-font">
                    <i class="fas fa-phone tranform-icon"></i>
                    </div>
                    <div class="nav-font"> call
                    </div>
                  </a>
                  <a href="#home">
                  <div class="nav-font">
                    <i class="fas fa-user-alt"></i>
                    </div>
                    <div class="nav-font"> profile
                    </div>
                  </a>
                  
                 
                </div>
              </div>
          
  </div>
</div>
  <!-- End footer -->
  <!-- vue JavaScript -->
  <script src="{{secure_asset('js/app.js')}}"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" type="text/javascript" ></script>
   <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
        
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
  <!-- Slick slider-->
    <script type="text/javascript" src="{{ secure_asset('assets/front/js/slick.min.js') }}"></script>
    <!-- Custom js -->
    <script type="text/javascript" src="{{ secure_asset('assets/front/js/custom.js') }}"></script>
    <script src="https://use.fontawesome.com/26d5579a34.js" type="text/javascript" ></script>
    <script type="text/javascript" src="{{ secure_asset('assets/front/js/storage.js') }}"></script>
  <!---slider script-->
  
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/js/bootstrap.js">
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js" ></script>  
 
<script type="text/javascript">
/**/

 
</script>
<script type="text/javascript">
  (function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery


</script>
<script>
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
</script>
 </body>
</html>