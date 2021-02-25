<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// front	

Route::namespace('Front')->group(function(){

	Route::get('/travel-program/{slug}','ItineraryController@travelProgram');
	Route::post('/search-itinerary','ItineraryController@searchItinerary');
	Route::get('/search','ItineraryController@search_post');
	Route::get('/itinerary-list/{count?}','ItineraryController@list');

	Route::post('/user-logout','FrontUserController@logout');
	Route::get('/tour-list/{id}','FrontUserController@user_tour_list');
	Route::get('/userdata/{id}','FrontUserController@userdata');
	Route::post('/join-our-team/send', 'JoinourteamController@resumeSend');
	Route::post('/contact-us/send', 'JoinourteamController@contactUs');
	Route::get('school-list','WebsiteController@school');
	// website
	Route::get('/travel-programs','WebsiteController@travel_programs');
	// Blog 
	Route::get('/blog-list/{count?}','BlogController@list');
	Route::get('/category-list','BlogController@categoryList');
	Route::get('/category/{slug}','BlogController@category');
	Route::get('/getpost/{slug}','BlogController@view');
	Route::get('/related-blog/{cat_id}','BlogController@relatedPost');
	Route::post('/search-post','BlogController@searchPost');
	Route::post('/add-post-comment','BlogController@addComment');
	// Front user controller 
	Route::post('login-user', 'AuthController@login');
	Route::post('register-user', 'AuthController@register');
	Route::post('refreshtoken','AuthController@refresh');

	Route::group(['middleware' => 'auth:api'], function(){
		Route::post('details', 'UserController@details');
		Route::post('/user-show', 'UserController@show');
		Route::post('/logout-user','AuthController@logout');
		Route::post('/user-info-update', 'UserController@infoUpdate');
		Route::post('/user-update','UserController@update');
		Route::post('/update-password','UserController@UpdatePassword');
		Route::post('/update-user-image','UserController@UserImage');
		Route::post('/tour-detail', 'TourController@tourDetail');
		Route::post('/tour-list', 'TourController@tourList');
		Route::post('/tour-travel-save', 'TourController@tourDetailSave');
		Route::post('/payment-tour', 'TourController@paymentTour');
		Route::post('/tour-bankdetail-student', 'SchoolbankdetailController@bankdetailsStudent');
		Route::post('/tour-bankdetail', 'SchoolbankdetailController@bankdetails');
		Route::post('/tour-bankdetail-store', 'SchoolbankdetailController@store');
		Route::post('/tour-submit-payment', 'UserpaymentController@store');
		Route::post('/tour-payment-status', 'UserpaymentController@tourPayStatus');
		// payment by ccavenue
		Route::post('/user-tour-payment','PaymentController@payment');
		// Comments
		Route::post('/encyclopedia-comments','EncyclopediaController@PostComment');
		Route::post('/booking','FrontbookingController@booking');
		Route::post('/group-member','GroupmemberController@index');
		Route::post('/group-add','GroupmemberController@studentStore');
		Route::post('/group-member-update','GroupmemberController@update');
		Route::post('/destroy-member','GroupmemberController@destroy');
	});
	Route::get('/flight-detail/{flightNumber}','WebsiteController@getFlightDetails');
	Route::get('/current-weather/{city}','WebsiteController@getCurrentWeather');
	Route::get('/forcast-weather/{city}','WebsiteController@getForcastWeather');
	// Otp
	Route::post('/sendotp','OtpController@send_otp');
	Route::post('/otpverify','OtpController@otp_verify');
	Route::post('/sendlink','EmailController@send_link_email');

	// Encyclopedia
	Route::get('/encyclopedia-list','EncyclopediaController@index');
	Route::get('/encyclopedia/{slug}','EncyclopediaController@view');
	Route::get('/ency-comments/{id}','EncyclopediaController@GetComment');

	Route::get('/city-list','LocationController@cityList');

	// Gallery
	Route::get('/galleries/{slug}','GalleryController@index');
	Route::get('/get-gallery/{slug}','GalleryController@show');

	// Subscriber
	Route::post('subscribe','SubscriberController@store');
});


//Ajax
Route::get('/country-state/{id}','AjaxController@CountryState');
Route::get('/state-city/{id}','AjaxController@StateCity');
Route::post('/city-sightseeing','AjaxController@CitySightseeing');
Route::get('/banknames','Front\SchoolbankdetailController@index');




