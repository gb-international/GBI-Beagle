<?php

// Route::get('/', function(){
//     return view('front.index');
// });

use App\Mail\ForgetPasswordMail;
use App\Mail\PasswordResetMail;
use App\Mail\WelcomeMail;




Route::post('/payment','Front\PaymentController@payment');
Route::post('/response','Front\PaymentController@response');
Route::post('/cancel','Front\PaymentController@cancel');
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

        $data = ['name'=>'Ajay','email'=>'ajay_yadav@gbinternational.in','link'=>'https:sdjf.com'];
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

Route::get('escort/{any}', 'Escort\AppController@index')->where('any', '.*');

Route::get('/{any}', 'Front\AppController@get')->where('any', '.*');

