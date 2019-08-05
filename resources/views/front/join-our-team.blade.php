@extends('front.index')
@section('meta')
        <title>GBI | Join Our Team</title>
        <meta name="description" content="Seek your Career in GBI "/>
        <meta name="keywords" content="Travel Job, Travel Company Recruitment, Recruitment in Travel Agency, Employee Recruitment, Travel agency job, Travel agency recruitment"/>
@endsection
@section('content')

   <!-- End Header -->
    <main>
  <!-- start banner area -->
    <section class="banner-block">
        <img id="jointeamimg" class="top-img" src="{{ asset('assets/front/images/career.jpg') }}">
    </section>  
  <!-- End banner area -->
  <!-- Start main content --> 
  

    <!-- Start how we work -->
   <section>
     <article class="join-team">
    
         @if ($message = Session::get('success'))
        <div class="alert alert-success alert-block">
        <button type="button" class="close" data-dismiss="alert">×</button> 
        <strong>{{ $message }}</strong>
        </div>
        @endif
      <h1>JOIN OUR BRILLIANT MINDS</h1>
      <form method="post" action="{{ route('resume.send') }}" enctype="multipart/form-data">
         {{ csrf_field() }}
        <div class="form-input">
        <input type="text" id="fname" name="firstname" placeholder="First Name" class="{{ $errors->has('firstname') ? ' errormsg' : '' }}">
          
        </div>
        <div class="form-input">
        <input type="text" id="lname" name="lastname" placeholder="Last Name" class="{{ $errors->has('lastname') ? ' errormsg' : '' }}">
        </div>
        <div class="form-input">
        <input type="text" id="email" name="email" placeholder="E-Mail" class="{{ $errors->has('email') ? ' errormsg' : '' }}">
        
        </div>
        <div class="form-input">
            <input type="text" id="contactno" name="contactno" placeholder="Contact Number" class="{{ $errors->has('contactno') ? ' errormsg' : '' }}">
        </div>
        <div class="form-input">
            <input type="text" id="address" name="address" placeholder="Address" class="{{ $errors->has('address') ? ' errormsg' : '' }}">
        </div>
        <div class="form-input">
            <input type="text" id="state" name="state" placeholder="State" class="{{ $errors->has('state') ? ' errormsg' : '' }}">
        </div>
        <div class="form-input">
            <input type="text" id="city" name="city" placeholder="City" class="{{ $errors->has('city') ? ' errormsg' : '' }}">
        </div>
        <div class="form-input">
            <input type="text" id="zipcode" name="zipcode" placeholder="ZipCode" class="{{ $errors->has('zipcode') ? ' errormsg' : '' }}">
        </div>
         <div class="form-input">
            <select id="postvancy" name="postvancy" class="{{ $errors->has('firstname') ? ' errormsg' : '' }}">
              <option value="">Select Post</option>
              <option value="Business Development Executive">Business Development Executive (Delhi)</option>
              <option value="Business Development Executive">Business Development Executive (Panjab)</option>
              <option value="Business Development Executive">Business Development Executive (Hyderabad)</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Business Lead Generation Executive">Business Lead Generation Executive</option>
            </select>
          </div>
           <div class="form-fullwidth">
            <div class="upload-btn-wrapper {{ $errors->has('resume') ? ' errormsg' : '' }}">
              <button class="btn">Upload a file</button>
              <input type="file" name="resume" />
            </div>
          </div>
         <div class="form-fullwidth">
            <textarea id="messagescon" name="messagescon" class="{{ $errors->has('messagescon') ? ' errormsg' : '' }}" placeholder="Write something.."></textarea>
          </div>
           <div class="form-fullwidth alignbtn">
          <input type="submit" value="Submit">
        </div>
       </form>
      </article>
   </section>
    <section class="bgimg" style="background-image: url('{{ asset('assets/front/images/team.png') }}');"></section>
    <!-- End how we work -->
  <div class="clear"></div>
 </main>
  <!-- End main content --> 
      
   @endsection 