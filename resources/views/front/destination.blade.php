@extends('layouts.front-app')
        <title>GBI | Explore Destination</title>
        <meta name="description" content="Explore both domestic and international destination with GBI"/>
        <meta name="keywords" content="GB International, delhi, punjab, hyderabad"/>
@section('content')

  <!-- End Header -->
  <main>
  <!-- start banner area -->
   <!-- <section class="banner-block">
      <article class="banner-img">
        <img class="top-img" src="{{ asset('images/faq_banner.jpg') }}">
      </article>
    </section>  -->
  <!-- End banner area -->

  
  <!-- Start main content --> 
  
    <!-- Start how we work -->
   <section class="explore-destination">
     <article >
              <div class="panel-body">
                   <div class="col-md-4">
                    <ul class="list-group">
                      {{ $des }}
                      @if(count($statess) > 0)
                        @foreach($statess->all() as $statess)
                        <a href="{{ url('src/'.$des.'/des/'.$statess->name) }}"><li class="list-group-item"> {{ $statess->name }} </li></a>

                        @endforeach
                      @else 
                      <p>No State Found</p>
                      @endif
                      
                    </ul>
                   </div>
                 </div>
     </article>
   </section>
    <!-- End how we work -->

  <!--<section class="explore-destination">
     <article >
       <img class="under-img" src="{{ asset('images/UNDERCONSTRUCTION.png') }}">
     </article>
   </section>-->
<div class="clear"></div>
 </main>
  <!-- End main content --> 
      
 @endsection 