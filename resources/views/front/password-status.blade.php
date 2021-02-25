<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head> 
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="author" content="gbinternational" />
        <meta name="language" content="en" />
        
        <meta name="author" content="@GBI" /> 
        <meta name="copyright" content="GB International" />
        <meta name="robots" content="follow"/>
        <meta http-equiv="X-UA-Compatible" content="IE=10">
        <meta http-equiv="cache-control" content="no-cache"/>
        <meta http-equiv="expires" content="exercise date in seconds"/>
        <meta http-equiv="expires" content="0"/> <meta http-equiv="expires" content="43200"/>

        <!-- Favicon -->
        <link rel="shortcut icon" type="image/icon" href="{{ asset('assets/front/images/favicon.png') }}"/>
        <!-- Font Awesome -->
        <!-- Ajay Added Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

        <link href="{{ asset('assets/front/css/reset.css') }}" rel="stylesheet">
        

        <!-- Fonts -->
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" /> 
        <!-- css stylesheet -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('assets/front/css/password_page.css') }}" rel="stylesheet">
      </head>
<body>


<img src="/assets/front/images/favicon.png" class="reset_logo">
<div class="container">
  



  <div class="row" id="reset_password_form">


    <div class="col-md-6 offset-md-3">
      @if(isset($success))
        
        <div class="container">
        <div class="alert-box">
          <div class="alert alert-success">
            <div class="alert-icon text-center">
              <i class="fa fa-check-square-o  fa-3x" aria-hidden="true"></i>
            </div>
            <div class="alert-message text-center">
              <strong>Success!</strong> Your Password Updated !!
              <p>You can login to  <a href="{{ url('/') }}">GB Internationl </a> now !</p>
            </div>
          </div>
        </div>
      </div>

      @endif
      
      @if(isset($error))
        <div class="alert alert-danger alert-dismissible fade show">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Error!</strong>Try Again !!!!
        </div>
      @endif
    </div>
  </div>

</div>



<script>
   window.Laravel = <?php echo json_encode([
       'csrfToken' => csrf_token(),
    ]); ?>
</script>


  <!-- vue JavaScript -->
  <script src="{{asset('js/app.js')}}"></script>
  
  <!-- Slick slider-->
    <script type="text/javascript" src="{{ asset('assets/front/js/slick.min.js') }}"></script>
    <!-- Custom js -->
    <script type="text/javascript" src="{{ asset('assets/front/js/custom.js') }}"></script>
    <script src="https://use.fontawesome.com/26d5579a34.js" type="text/javascript" ></script>
    <script type="text/javascript" src="{{ asset('assets/front/js/storage.js') }}"></script>
  <!---slider script-->
  

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
 </body>
</html>