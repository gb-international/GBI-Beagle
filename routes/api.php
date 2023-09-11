<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Front\EncyclopediaController;
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
	Route::get('/upcoming-events','ItineraryController@upcomingEvents');
	Route::get('/popular-tours','ItineraryController@popularTours');
	Route::post('/search-itinerary','ItineraryController@searchItinerary');
	Route::get('/search','ItineraryController@search_post');
	Route::get('/itinerary-list/{count?}','ItineraryController@list');
	Route::get('/itinerary-view/{id}','ItineraryController@view');

	Route::post('/hotel-search','HotelController@searchHotel');
	Route::post('/hotel-booking','HotelController@HotelBooking');

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
	Route::get('/blog-recents','BlogController@recents');
	Route::get('/category-list','BlogController@categoryList');
	Route::get('/keyword-list','BlogController@keywordList');
	Route::get('/category/{slug}','BlogController@category');
	Route::get('/getpost/{slug}','BlogController@view');
	Route::get('/related-blog/{cat_id}','BlogController@relatedPost');
	Route::post('/search-post','BlogController@searchPost');
	Route::post('/add-post-comment','BlogController@addComment');
	// Front user controller 
	Route::post('login-user', 'AuthController@login');
	Route::post('register-user', 'AuthController@register');
	Route::post('refreshtoken','AuthController@refresh');

	// Related Cities
	Route::get('/related-cities/{id}','LocationController@relatedCities');
	Route::get('/regional-cities/{region}','LocationController@regionalCities');

	// Airports
	Route::get('/airports-national','LocationController@allAirportsNational');
	Route::get('/airports-international','LocationController@allAirportsInt');

	Route::get('/flight-national/{city}','LocationController@airports');
	Route::get('/flight-international/{city}','LocationController@airportsInt');

	//Railways
	Route::get('/stations-national','LocationController@allRailways');


	Route::post('/user/save-social','UserController@socialAuth');
	Route::post('/user/social/{userId}','UserController@socialIndex');

	Route::group(['middleware' => 'auth:api'], function(){
		Route::post('details', 'UserController@details');
		Route::post('/user-show', 'UserController@show');
		Route::post('/logout-user','AuthController@logout');
		Route::post('/user-info-update', 'UserController@infoUpdate');
		Route::post('/user-update','UserController@update');
		Route::post('/update-password','UserController@UpdatePassword');
		Route::post('/update-user-image','UserController@UserImage');
		Route::post('/update-user-docs','UserController@UserDocs');
		Route::post('/tour-detail', 'TourController@tourDetail');

		// School
		Route::post('/tour-list', 'TourController@tourList');

		// Corporate
		Route::post('/corp-tour-list', 'TourController@corpTourList');

		Route::post('/tour-travel-save', 'TourController@tourDetailSave');
		Route::post('/payment-tour', 'TourController@paymentTour');
		Route::post('/tour-bankdetail-student', 'SchoolbankdetailController@bankdetailsStudent');
		Route::post('/tour-bankdetail', 'SchoolbankdetailController@bankdetails');
		Route::post('/tour-bankdetail-store', 'SchoolbankdetailController@store');
		Route::post('/tour-submit-payment', 'UserpaymentController@store');
		Route::post('/tour-payment-status', 'UserpaymentController@tourPayStatus');
		// payment by ccavenue
		Route::post('/user-tour-payment','FrontPaymentController@payment');
		//Payment History - School
		Route::post('/schoool/payment-history','FrontPaymentController@viewPaymentDeails');
		// Comments
		Route::post('/encyclopedia-comments','EncyclopediaController@PostComment');
		Route::post('/booking','FrontbookingController@booking');
		Route::post('/group-member','GroupmemberController@index');
		Route::post('/group-add','GroupmemberController@studentStore');
		Route::post('/group-member-update','GroupmemberController@update');
		Route::post('/destroy-member','GroupmemberController@destroy');

		Route::group(['prefix' => '/encyclopedia', 'as' => 'encyclopedia.'], function () {
			Route::post('search', [EncyclopediaController::class, 'search']);
		});
	});
	Route::get('/flight-detail/{flightNumber}','WebsiteController@getFlightDetails');
	Route::get('/current-weather/{city}','WebsiteController@getCurrentWeather');
	Route::get('/forcast-weather/{city}','WebsiteController@getForcastWeather');
	// Otp
	Route::post('/sendotp','OtpController@send_otp');
	Route::post('/sendotp2','OtpController@send_otp2');
	Route::post('/otpverify','OtpController@otp_verify');
	Route::post('/sendlink','EmailController@send_link_email');

	// Tour Page Otp
	Route::post('/sendotp3','OtpController@send_otp3');
	Route::post('/otpverify-tour','OtpController@otpTour');

	// Encyclopedia
	Route::get('/encyclopedia-list','EncyclopediaController@index');
	Route::get('/encyclopedia/{slug}','EncyclopediaController@view');
	Route::get('/ency-comments/{id}','EncyclopediaController@GetComment');
	Route::get('/pdf/{slug}','EncyclopediaController@Pdf');
	Route::get('/city-list','LocationController@cityList');

	// Gallery
	Route::get('/galleries/{slug}','GalleryController@index');
	Route::get('/get-gallery/{slug}','GalleryController@show');
	Route::get('/search-gallery/{qry}/{type}','GalleryController@search');

	// Subscriber
	Route::post('subscribe','SubscriberController@store');

	// request itinerary
	Route::post('/request-itinerary','ItineraryController@requestItinerary');

	// Feedback Submit
	Route::post('/feedback-submit','FeedbackController@store');
	Route::get('/feedback-list','FeedbackController@list');

	//Tour Itinerary Detail
	Route::get('/get-tour/{id}','TourController@tourItinerary');

	//Tour Page
	Route::get('/tour-data/{slug1}/{slug2}/{otp}/{oid}','TourPageController@getData');

	//Notifications
	Route::get('/user-notifs/{userId}/{sort}/all','NotifsController@index');
	Route::get('/user-notifs/{userId}/{sort}/old','NotifsController@indexOld');
	Route::get('/user-notifs/view/{id}','NotifsController@show');
	Route::post('/notification/mark-read','NotifsController@markRead');
	Route::get('/notif-count/{sub_id}','NotifsController@notifCount');
	
	//Join our Team
	Route::get('/join-our-team/search/{title}', 'JoinourteamController@sIndex');
	Route::get('/join-our-team/jobs/{jobtype}', 'JoinourteamController@jobs');
	Route::get('/join-our-team/job/{id}', 'JoinourteamController@show');
});


//Ajax
Route::get('/country-state/{id}','AjaxController@CountryState');
Route::get('/state-city/{id}','AjaxController@StateCity');
Route::post('/city-sightseeing','AjaxController@CitySightseeing');
Route::get('/banknames','Front\SchoolbankdetailController@index');

// School Trip Payment
Route::group(['prefix' => '/school_trip_payment', 'as' => 'school_trip_payment.'], function () {
	Route::controller(\Admin\TourPayment\SchoolTripPaymentController::class)->group(function () {
		Route::post('school_trip_payment', 'store');
		Route::get('/all/{page?}', 'all');
		Route::put('school_trip_payment/{id}', 'update');
		Route::get('school_trip_payment/{id}', 'show');
		Route::delete('school_trip_payment/{id}', 'delete');
	});
});

// School Trip
Route::group(['prefix' => '/school_trip_payment', 'as' => 'school_trip_payment.'], function () {
	Route::controller(\Api\SchoolTrip\SchoolTripPaymentController::class)->group(function () {
		Route::post('school_trip_payment', 'store');
		Route::get('/all/{page?}', 'all');
		Route::put('school_trip_payment/{id}', 'update');
		Route::get('school_trip_payment/{id}', 'show');
		Route::delete('school_trip_payment/{id}', 'delete');
	});
	
	
});



