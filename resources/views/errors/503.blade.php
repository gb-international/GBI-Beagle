{{-- <div>
  <h1>Website is under maintenance</h1>
  <h3>We will be back up soon !</h3>  
</div>
<style type="text/css">
  div{
    background-image: url('assets/front/images/500.png');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding-top: 15%;
    width: 100%;
    height: 380px;;
    color: #123a84;
  }

</style> --}}

<div class="error-image">
   <a href="/"  class="brand-link logo_link">
        <img src="{{asset('assets/admin/default/icon/logo.png')}}" class="logo-img">
    </a>
</div>
<div class="error-msg-container">
  <h1>Site Under Maintenance!</h1>
  <p>We are working on the site right now, we will be back live shortly. If you require any immediate assistance, please contact us at <a href="mailto:support@gbinternational.in" style="color: #2588c1"><b>support@gbinternational.in</b></a> </p>
  <p>We apologize for any inconvenience caused.</p>
</div>

<style>
  body {
  margin-top: 20vh;
  background: #332f58;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

.error-container {
  display: flex;
align-items: center;
justify-content: center;
}

.error-image {
  max-width: 720px;
  width: 90%;
  margin: auto;
  text-align: center;
}

.error-msg-container {
  margin: 18px auto 30px auto;
  max-width: 800px;
  width: 80%;
  text-align: center;
}

.error-msg-container h1 {
  font-size: 42px;
  max-width: 560px;
  margin: auto auto 48px;
}

.error-msg-container p {
  font-size: 20px;
}
@media only screen and (max-width: 1024px) {

    .logo-img{
      width: 25%
    }

  .error-msg-container h1 {
      font-size: 45px;
      max-width: 560px;
      margin: auto auto 48px;
    }
    .error-msg-container p {
    font-size: 23px;
  }
}
</style>