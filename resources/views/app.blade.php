<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head base href="/">
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-138734768-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-138734768-1');
  </script>  
  <script type="application/ld+json">
    {
    "@context": "https://schema.org",
    "@type": "Educational Travel Agency",
    "name": "GB International",
    "image": "https://gbi-assets.s3.ap-south-1.amazonaws.com/assets/front/images/logo.png",
    "logo": "https://gbi-assets.s3.ap-south-1.amazonaws.com/assets/front/images/logo.png",
    "@id": "",
    "url": "https://gowithgbi.com",
    "telephone": "+91 9717922240",
    "address": {
    "@type": "PostalAddress",
    "streetAddress": "Triveni complex, G-32, Sheikh Sarai Phase 1",
    "addressLocality": "Sheikh Sarai, New Delhi",
    "postalCode": "110017",
    "addressCountry": "India"
    } ,
    "sameAs": [
    "https://instagram.com/gowithgbi",
    "https://twitter.com/gowithgbi",
    "https://youtube.com/channel/UCYaTBxhqqXaMOUNZiAqvI_A",
    "https://linkedin.com/company/gowithgbi",
    "https://facebook.com/gowithgbi",
    "https://gowithgbi.com"
    ] 
    }
  </script>
  <meta name="author" content="@GBI" /> 
  <meta name="copyright" content="GB International" />
  <meta name="robots" content="follow"/>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="-1">
  <!-- CSRF Token -->
  <title>{{ config('app.name', 'GBI') }}</title>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="icon" type="image/png" href="{{ asset('assets/front/images/favicon.png') }}" />
  {{-- <link rel="icon" type="image/png" href="{{ secure_asset('assets/front/images/favicon.png') }}" /> --}}
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
  
  <!-- Font awesome Icons -->
  <script src="https://kit.fontawesome.com/5810dc9d6a.js" crossorigin="anonymous"></script>
  
  <!-- Fonts -->
  <link rel="dns-prefetch" href="//fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
  <link href='https://fonts.googleapis.com/css?family=Nunito Sans' rel='stylesheet'>
  
  @if($meta)
<meta property="og:title" content="{{$meta->title}}">
  <meta property="og:description" content="{{$meta->description}}">
  <meta property="og:keywords" content="{{$meta->keyword}}">
  <meta property="og:image" content="{{$meta->image}}">
  @else
  <meta property="og:title" content="Homepage | GB International - Your Travel Partner">
  <meta property="og:description" content="GB International provides the best practical learning experience to not only students but to the travellers as well.">
  <meta property="og:image" content="https://www.gowithgbi.com/assets/front/images/banner2.jpg">
  @endif
<meta property="og:site_name" content="gowithgbi.com">
  <meta property="og:url" content="{{Request::fullUrl()}}">
  <meta property="og:type" content="website">
  <!-- Styles -->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  {{-- <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet"> --}}
</head>
<body style="background: white !important">

  <div style="background: white !important">
    <div id="app" style="background: white !important">
      <App style="background: white !important;"></App>
    </div>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  <script src="https://cdn.socket.io/4.0.1/socket.io.min.js" integrity="sha384-LzhRnpGmQP+lOvWruF/lgkcqD+WDVt9fU3H4BWmwP5u5LTmkUGafMcpZKNObVMLU" crossorigin="anonymous"></script>

   <script src="{{ asset('js/app.js') }}" defer></script>
   {{-- <script src="{{ secure_asset('js/app.js') }}" defer></script> --}}
   {{-- {!! $ssr !!}
  <script src="{{ asset('js/app-client.js') }}" type="text/javascript"></script> 

  {!! ssr('js/app-server.js')->render() !!}
  <script src="{{ asset('js/app.js') }}" type="text/javascript"></script> --}}

{{-- <script>
    $("body").on("contextmenu", function () {  
      return false;  
    }); 
  </script> 
   <script>
            window.laravel_echo_port='{{env("LARAVEL_ECHO_PORT")}}';
    </script>
    <script src="//{{ Request::getHost() }}:{{env('LARAVEL_ECHO_PORT')}}/socket.io/socket.io.js"></script>
    <script src="{{ url('/js/laravel-echo-setup.js') }}" type="text/javascript"></script>
      
     <script type="text/javascript">
        //var i = 0;
        window.Echo.channel('gb_international_database_user-channel')
         .listen('.UserEvent', (data) => {
            //i++;
            //$("#notification").append('<div class="alert alert-success">'+i+'.'+data.title+'</div>');
            //console.log(data.title);
            
        });
    </script> --}}
    <style>
      .bread_nav{
          font-family: 'Nunito Sans';
          font-weight: 600;
          text-align: center;
          margin: 7px 0px;
        }
        strong{
          font-weight: bold;
        }
        .br_bgcl{
          background-color: #001041c7;
          border-radius: 5px;
          padding: 5px 15px;
        }
        .br_actv{
          color: #101010 !important;
        }
        .br_orange{
          color: #f77736 !important;
        }
        .br_grey{
          color: #858585d9 !important;
        }
        .br_white{
          color: white !important;
        }
        .bread_nav span{
          margin-right: 5px;
          font-size: 12px;
          margin-top: 3px;
        }
        .bread_nav br_cr{
          margin-right: 5px;
          font-size: 14px;
        }
        .bread_link:hover{
          text-decoration: underline;
        }
        .bread_nav p{
          margin-right: 5px;
          font-size: 14px;
        }
        .bread_link {
          margin-right: 5px;
          font-size: 14px;
        }
      /*.navbar .container, .navbar .container-fluid, .navbar .container-lg, .navbar .container-md, .navbar .container-sm, .navbar .container-xl {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
             flex-wrap: nowrap;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: justify;
            justify-content: space-between;
        }
        .navbar{
          padding: 0px !important;
        }
        .container {
          max-width: 1140px !important;
        }
        #navbar {
            height: 133px;
            width: 100%;
            font-family: "Nunito Sans";
            font-size: 16px;
        }*/
        .jexcel_container td tr{
          z-index: 10 !important;
          }
        .jexcel_content {
          z-index: 100 !important;
        }
        .vhd__datepicker__months {
            display: flex;
            flex-wrap: wrap;
            width: 74vw;
            justify-content: space-between;
        }
       .vhd__datepicker__close-button{
        z-index: 9999999 !important;
       }
       .vhd__datepicker{
          padding-top: 5px;
          z-index: 999999 !important;
      }
      @media (min-width: 992px) { 
        .vhd__datepicker__months{
          width: 40vw !important;
        }
      }
      @media screen and (max-width: 767px){
        .vhd__datepicker__months {
          width: 100vw;
        }
      }

      @media screen and (max-width: 767px){
        .qkb-bubble-btn {
          margin-bottom: 56px;
        }
      
    }

    /* @media only screen and (max-width: 345px){
      #navbar img {
          height: 60px;
          width: 125px;
      }
    } */

    *:not(i){
      font-family: 'Nunito Sans' !important;
    }

    .fa, .far, .fas {
        font-family: "Font Awesome 5 Free" !important;
    }

    </style>
</body>
</html>
