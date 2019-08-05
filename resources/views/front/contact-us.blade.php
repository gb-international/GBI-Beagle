@extends('front.index')
@section('meta')
         <title>GBI | Contact Us</title>
        <meta name="description" content="Contact us to plan and book a trip"/>
        <meta name="keywords" content="Travel agent in Hyderabad, Travel agent in Punjab, Travel agent in Delhi, Travel agent in New Delhi, Travel agent in South Delhi, Travel agent in Delhi NCR , Travel Company in Hyderabad, Travel Company in Punjab, Travel Company in Delhi, Travel Company in New Delhi, Travel Company in South Delhi, Travel Company in Delhi NCR "/>
@endsection
@section('content')

  <!-- End Header -->
  <!-- start banner area -->
    <section class="banner-block">
        <img id="contact-us" class="top-img" src="{{ asset('assets/front/images/banner_contact.jpg') }}">
     </section>  
  <!-- End banner area -->
 <main>

  <!-- Start main content --> 
 

    <!-- Start how we work -->
      <div class="row">
      <div class="col-lg-12 pa-t-15">

     <article class="contactus">
       @if(count($errors)>0)
          <div class="alert alert-danger">
            <button type="button" class="close" data-dismiss="alert">x</button>
            <ul>
              @foreach($errors->all() as $error)
              <li>{{  $error }}</li><br>
              @endforeach
            </ul>

          </div>
         @endif
         @if ($message = Session::get('success'))
        <div class="alert alert-success alert-block">
        <button type="button" class="close" data-dismiss="alert">×</button> 
              <strong>{{ $message }}</strong>
        </div>
        @endif
       <div class="col-lg-6">
         <div class="col-lg-12">
          <h2>HEAD OFFICE</h2>
          <table class="table">
              <tbody>
                <tr>
                  <td><img src="{{ asset('assets/front/images/address_icon.png') }}"></td>
                  <td>G-32,DDA Commercial Complex, Sheikh Sarai Phase-1, New Delhi 110017</td>
                 </tr>
                <tr>
                  <td><img src="{{ asset('assets/front/images/phone_icon.png') }}"></td>
                  <td>011-26017120, 26011683 ,<br> +91 9810055102</td>
                 </tr>
                 <tr>
                  <td><img class="ic-mail" src="{{ asset('assets/front/images/email_icon.png') }}"></td>
                  <td>info@gbinternational.in<br>reservations@gbinternational.com</td>
                 </tr>
                 </tbody>
            </table>
            <div class="headline"><h2>REGIONAL OFFICE</h2></div>
             <table class="table">
              <tbody>
                <tr>
                  <td><img class="ic-add" src="{{ asset('assets/front/images/address_icon.png') }}"></td>
                  <td>302, Zeenath Residency Srinagar Colony, Plot #29, Hyderabad - 500073 Andhra Pradesh</td>
                 </tr>
                <tr>
                  <td><img class="ic-cal-re" src="{{ asset('assets/front/images/phone_icon.png') }}"></td>
                  <td>+91 9717922240,<br> +91 9810055102</td>
                 </tr>
               
                 </tbody>
            </table>
            </div>

         <div class="col-lg-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1110823555123!2d77.22139051508042!3d28.536380682455928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2214a7825c5%3A0xbef6ae1702026f1c!2sGB+International!5e0!3m2!1sen!2sin!4v1554198180729!5m2!1sen!2sin" width="100%" height="225" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      </div>

       <div class="col-lg-6">
       <article class="contact-form">
       <div class="title-contact"><h2>Contact Us</h2></div>
         <!--form contact us-->
        
        <form method="post" action="{{ route('contact.store') }}">
          {{ csrf_field() }}
         <div class="form-fullwidth">
          <label class="lable-title">Name</label>
          <input type="text" id="fname" name="name" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" placeholder="Name">
          @if ($errors->has('name'))
          <span class="invalid-feedback" role="alert">
          <strong>{{ $errors->first('name') }}</strong>
          </span>
          @endif
        </div>
       <div class="form-fullwidth">
        <label class="lable-title">E-Mail</label>
         <input type="text" id="email" name="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" placeholder="E-Mail">
         @if ($errors->has('email'))
          <span class="invalid-feedback" role="alert">
          <strong>{{ $errors->first('email') }}</strong>
          </span>
          @endif
        </div>
        <div class="form-fullwidth">
          <label class="lable-title">Mobile</label>
          <input type="text" id="contactno" name="mobile" class="form-control{{ $errors->has('mobile') ? ' is-invalid' : '' }}" placeholder="Mobile">
          @if ($errors->has('mobile'))
          <span class="invalid-feedback" role="alert">
          <strong>{{ $errors->first('mobile') }}</strong>
          </span>
          @endif
        </div>
        <div class="form-fullwidth">
          <label class="lable-title">Message</label>
            <textarea id="subject" name="messagecon" rows="3" cols="40" class="form-control{{ $errors->has('messagecon') ? ' is-invalid' : '' }}" placeholder="Message....."></textarea>
            @if ($errors->has('messagecon'))
          <span class="invalid-feedback" role="alert">
          <strong>{{ $errors->first('messagecon') }}</strong>
          </span>
          @endif
          </div>
           <div class="form-fullwidth alignbtn">
          <input type="submit" value="Submit" name="submit">
        </div>
       </form>
       
     </article>
      </div>
     </article>
   </div>
 </div>
    <!-- End how we work -->

<div class="clear"></div>
 </main>
  <!-- End main content --> 
      
    @endsection 