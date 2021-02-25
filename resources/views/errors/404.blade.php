@extends('front.index')
@section('meta')
       <title>404</title>
        
@endsection 
@section('content')

  <!-- End Header -->
  <main>
  	<section class="banner-block">
      <div class="col-sm-12">
        <img class="img-responsive error404" src="{{ asset('assets/front/images/404error.png') }}" alt="404 error">
         
  </div>
    </section>
  </main>
 
  <!-- End main content --> 
      
 @endsection 