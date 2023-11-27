<?php

// Route::get('/', function(){
//     return view('front.index');
// });

use App\Mail\ForgetPasswordMail;
use App\Mail\PasswordResetMail;
use App\Mail\WelcomeMail;

/*Route::post('/t', function () {
    event(new \App\Events\SendNotification('test'));
    dd('Event Run Successfully.');
});*/

Route::get('/clear', function() {

    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('config:cache');
    Artisan::call('view:clear');
    Artisan::call('route:clear');

    return "Cleared!";

});

Route::get('/event-test', function () {
    event(new App\Events\SendNotification('Guest'));
    return "Notif has been sent!";
});

Route::resource('projects', 'ProjectsController');

Route::get('/sh/{shCode}','Front\ShortLinkController@index');

Route::post('/payment','Front\PaymentController@payment');
Route::post('/response','Front\PaymentController@response');
Route::post('/cancel','Front\PaymentController@cancel');

// Admin Net Banking
Route::post('admin/payment','Admin\Reservation\PaymentController@payment');
Route::post('admin/response','Admin\Reservation\PaymentController@response');
Route::post('admin/cancel','Admin\Reservation\PaymentController@cancel');

// marketing
Route::get('/marketings/{slug}','Front\MarketingController@index');
Route::post('/marketings','Front\MarketingController@store');

// ---------------------------------------------

Route::post('/test-data', 'Front\PaymentController@test');
// ---------------------------------------------

Route::get('/check',function(){
//    $data = ['email'=>'ajay_yadav@gbinternational.in'];
    
    // Mail::send(['text'=>'email.welcome'], $data, function($message) {
    //      $message->to('abc@gmail.com', 'Tutorials Point')->subject
    //         ('Laravel Basic Testing Mail');
    //      $message->from('xyz@gmail.com','Virat Gandhi');
    //   });

        $data = ['name'=>'Ajay','email'=>'jackteny@gmail.com','link'=>'https:sdjf.com'];
        // Mail::to($data['email'])->send( new PasswordResetMail($data));
        Mail::to($data['email'])->send( new WelcomeMail($data));

        // dd('done');
   

        // $myEmail = 'ajay@gmail.com';
   
        // $details = [
        //     'title' => 'Mail Demo from ItSolutionStuff.com',
        //     'url' => 'https://www.itsolutionstuff.com'
        // ];
  
        // Mail::to($myEmail)->send(new ForgetPasswordMail($details));
   
        // dd("Mail Send Successfully");
    //   Mail::send(['text'=>'email.welcome'], $data, function($message) {
    //      $message->to('abc@gmail.com', 'Tutorials Point')->subject
    //         ('Laravel Basic Testing Mail');
    //      $message->from('xyz@gmail.com','Virat Gandhi');
    //   });
    //   echo "Basic Email Sent. Check your inbox.";

    // echo 'done';

});





Route::group(['middleware' => ['web']], function () {
    Auth::routes();
    Route::get('/admin', 'HomeController@index')->name('home');

    Route::namespace('Front')->group(function(){
        Route::get('/send-otp/{phoneo}/{mssage}','OtpController@send_sms');
        Route::get('/reset/{link}','EmailController@reset_email_password');
        Route::post('/submitpassword','EmailController@submit_password');
    });
    Route::namespace('Admin')->group(function(){
        Route::group(['middleware' => ['auth']], function () {
            Route::namespace('Account')->group(function (){
                Route::get('/send-notification','AccountController@sendNotification');
                Route::post('/account/store','AccountController@store');
                Route::get('/account/index','AccountController@index');
                Route::get('/account/destroy/{id}','AccountController@destroy');
                Route::get('/account/sales_itinerary','AccountController@sales_itinerary');
                Route::post('/account_booking/store/{id}','AccountController@account_booking_store');
                Route::get('/account/edit/{id}','AccountController@edit');
                Route::get('/account/show/{id}','AccountController@show');
                Route::post('/account/update/{id}','AccountController@update');
                 // Gbi user notification
                Route::get('/gbiuser/notifications','AccountController@notificationList');
                Route::get('/gbiuser/notification-mark-read/{id}','AccountController@markRead');
            });
        });
    }); 
}); 

// Route::get('/', function () {
//   return File::get(public_path() . '/index.html');
// });
Route::get('escort/{any}', 'Escort\AppController@index')->where('any', '.*');
Route::get('admin/{any}', 'HomeController@index')->where('any', '.*');

//Home
Route::get('/', 'Front\AppController@get');

//About Us
Route::get('/about-us/our-story', 'Front\AppController@get');
Route::get('/about-us/how-we-work', 'Front\AppController@get');
Route::get('/about-us/join-our-team', 'Front\AppController@get');
Route::get('/image-gallery/domestic', 'Front\AppController@get');
Route::get('/image-gallery/international', 'Front\AppController@get');
Route::get('/image-gallery/images/{slug}', 'Front\AppController@get');

//Contact Us
Route::get('/contact-us', 'Front\AppController@get');

//Explore Destination
Route::get('/explore-destination', 'Front\AppController@get');
Route::get('/explore-list', 'Front\AppController@get');
Route::get('/explore-detail/{id}', 'Front\AppController@get');

//Feedback Form (is needed?)
//Route::get('/feedback-link/{tourID}', 'Front\AppController@get');
//Route::get('/feedback-form/{tourID}', 'Front\AppController@get');

//GBI Blog
Route::get('/blog', 'Front\AppController@get');
Route::get('/blog/{slug}', 'Front\AppController@get');
//Route::get('/blog/category/{slug}', 'Front\AppController@get');

//GBI Ntifications (is needed?)
//Route::get('/notifications', 'Front\AppController@get');

//Payment Link
//Route::get('/payment-link/{tourID}/{amount}', 'Front\AppController@get');

//Popular Tours
//Route::get('/popular-tours/{userID}', 'Front\AppController@get');

//Recent Searches
//Route::get('/recent-search/{userID}', 'Front\AppController@get');

//Resources
Route::get('/resources/travel-education', 'Front\AppController@get');
Route::get('/resources/faq', 'Front\AppController@get');
Route::get('/resources/safety-security', 'Front\AppController@get');
Route::get('/resources/travel-encyclopedia', 'Front\AppController@get');
Route::get('/resources/travel-encyclopedia-international', 'Front\AppController@get');
Route::get('/encyclopedia/{id}', 'Front\AppController@get');
Route::get('/itinerary-pdf/{slug}', 'Front\AppController@get');

//Support
Route::get('/support', 'Front\AppController@get');
Route::get('/payment', 'Front\RazorpayPaymentController@formPage');

//Any
Route::get('/{any}', 'Front\AppController@get')->where('any', '.*');
