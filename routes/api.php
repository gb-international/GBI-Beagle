<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Front\AuthController;
use App\Http\Controllers\Front\ItinerarySightseeingController;
use App\Http\Controllers\Front\DiscountCoupon\DiscountCouponController;
use App\Http\Controllers\Front\UserController;
use App\Http\Controllers\Front\TourController;
use App\Http\Controllers\Front\EncyclopediaController;
use App\Http\Controllers\Front\FrontbookingController;
use App\Http\Controllers\Front\SchoolbankdetailController;
use App\Http\Controllers\Front\CompanybankdetailController;
use App\Http\Controllers\Front\FamilybankdetailController;
use App\Http\Controllers\Front\GroupmemberController;
use App\Http\Controllers\Front\Payment\BankDetailController;
use App\Http\Controllers\Front\UserpaymentController;

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
	Route::get('random-fact',[App\Http\Controllers\Front\FactController::class, 'random_fact']);
	Route::get('random-fact-acc-city/{city}',[App\Http\Controllers\Front\FactController::class, 'random_fact_acc_to_city']);
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
	Route::post('login-user', [AuthController::class, 'login']);

	// Route::post('login-user', 'AuthController@login');
	Route::post('register-user', 'AuthController@register');
	
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
	// Route::group(['middleware' => 'school.authentication'], function () {

	// });
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
	Route::get('/encyclopedia/{slug} ','EncyclopediaController@view');
	Route::get('/ency-comments/{id}','EncyclopediaController@GetComment');
	Route::get('/pdf/{slug}','EncyclopediaController@Pdf');
	Route::get('/city-list','LocationController@cityList');
	Route::group(['prefix' => '/encyclopedia', 'as' => 'encyclopedia.'], function () {
		Route::controller(EncyclopediaController::class)->group(function () {
			Route::get('/short-itinerary-based-on-encyclopedia/{state}/{limit?}', 'shortItineraryBasedOnEncyclopedia');
			Route::get('/itinerary-based-on-encyclopedia/{state}/{limit?}', 'itineraryBasedOnEncyclopedia');
			Route::get('/encyclopedia-based-on-itinerary-destinatiopn/{state}/{limit?}', 'encyclopediaBasedOnItineraryDestinatiopn');
		});	
	});
	

	// Gallery
	Route::get('/galleries/{categorytype}/{page?}','GalleryController@index');
	Route::get('/get-gallery/{slug}','GalleryController@show');
	Route::get('/search-gallery/{qry}/{categorytype}','GalleryController@search');

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
 
Route::group(['prefix' => '/razorpay-payment', 'as' => 'razorpay-payment.'], function () {
	Route::controller(\Front\RazorpayPaymentController::class)->group(function () {
		Route::post('make-order', 'makeOrder')->middleware(['auth:school-api']);
		Route::post('payment-record', 'paymentRecord')->middleware(['auth:school-api']);
		// Route::get('invoice', 'invoice')->middleware(['auth:school-api']);
	});	
});

//Company
Route::group(['prefix' => '{company}', 'middleware' => 'company.authentication'], function () {
	
	//Discount Coupon 
	Route::group(['prefix' => '/advertising', 'as' => 'advertising.'], function () {
		Route::post('check-discount-coupon',[DiscountCouponController::class, 'checkCouponValidation'])->where('company', 'company');
	});

	Route::group(['prefix' => 'payment', 'as' => 'payment.'], function () {
		Route::group(['prefix' => '/cash', 'as' => 'cash.'], function () {
			Route::post('record',[UserpaymentController::class, 'cashRecord'])->where('company', 'company');
		});
		
		Route::group(['prefix' => '/cheque', 'as' => 'cheque.'], function () {
			Route::post('cheque-draft-record',[UserpaymentController::class, 'chequeOrdraftRecord'])->where('company', 'company');
		});
	});
	Route::post('logout-user',[AuthController::class, 'logout'])->where('company', 'company');
	Route::post('refreshtoken',[AuthController::class, 'refresh'])->where('company', 'company');
	Route::group(['prefix' => '/payment', 'as' => 'payment.'], function() {		
		Route::group(['prefix' => '/payment-gateway', 'as' => 'payment-gateway.'], function() {
			Route::controller(\Front\UserpaymentController::class)->group(function() {
				Route::post('make-order', 'makeOrder')->where('company', 'company');
				Route::post('payment-record', 'paymentRecord')->where('company', 'company');
				Route::get('payment-history/{size?}', 'allHistory')->where('company', 'company');
			});	
		});
	});
	
	//Sightseeing 
	Route::group(['prefix' => '/itineray', 'as' => 'itineray.'], function () {
		Route::post('sightseeing', [ItinerarySightseeingController::class, 'itinerary_sightseeing_request'])->where('company', 'company');
	});
	Route::post('details',[UserController::class, 'details'])->where('company', 'company');
	Route::post('user-show',[UserController::class, 'show'])->where('company', 'company');
	Route::post('user-info-update',[UserController::class, 'infoUpdate'])->where('company', 'company');
	Route::post('user-update',[UserController::class, 'update'])->where('company', 'company');
	Route::post('update-password',[UserController::class, 'UpdatePassword'])->where('company', 'company');
	Route::post('update-user-image',[UserController::class, 'UserImage'])->where('company', 'company');
	Route::post('update-user-docs',[UserController::class, 'UserDocs'])->where('company', 'company');
	Route::post('tour-detail',[TourController::class, 'tourDetail'])->where('company', 'company');
	Route::post('tour-travel-save',[TourController::class, 'tourDetailSave'])->where('company', 'company');
	Route::post('payment-tour',[TourController::class, 'paymentTour'])->where('company', 'company');
	Route::post('tour-bankdetail',[CompanybankdetailController::class, 'bankdetails'])->where('company', 'company');
	Route::post('tour-bankdetail-store',[CompanybankdetailController::class, 'store'])->where('company', 'company');
	// Comments

	Route::post('encyclopedia-comments',[EncyclopediaController::class, 'PostComment'])->where('company', 'company');
	Route::post('booking',[FrontbookingController::class, 'booking'])->where('company', 'company');
	Route::post('group-add',[GroupmemberController::class, 'addGroupMember'])->where('company', 'company');
	Route::post('group-member',[GroupmemberController::class, 'index'])->where('company', 'company');
	Route::post('group-member-update',[GroupmemberController::class, 'update'])->where('company', 'company');
	Route::post('destroy-member',[GroupmemberController::class, 'destroy'])->where('company', 'company');
	Route::group(['prefix' => '/bankdetail', 'as' => 'bankdetail.'], function () {
		Route::post('store',[BankDetailController::class, 'store'])->where('company', 'company');
		Route::put('update/{id}',[BankDetailController::class, 'update'])->where('company', 'company');
		Route::delete('delete/{id}',[BankDetailController::class, 'destroy'])->where('company', 'company');
		Route::get('{id}/edit',[BankDetailController::class, 'edit'])->where('company', 'company');
		Route::get('{id}/show',[BankDetailController::class, 'show'])->where('company', 'company');
		Route::get('all/{size?}',[BankDetailController::class, 'all'])->where('company', 'company');
	});
	
	
});

// School
Route::group(['prefix' => '{school}', 'middleware' => 'school.authentication'], function () {
	//Discount Coupon 
	Route::group(['prefix' => '/advertising', 'as' => 'advertising.'], function () {
		Route::post('check-discount-coupon',[DiscountCouponController::class, 'checkCouponValidation'])->where('school', 'school');
	});
	Route::group(['prefix' => 'payment', 'as' => 'payment.'], function () {
		Route::group(['prefix' => '/cash', 'as' => 'cash.'], function () {
			Route::post('record',[UserpaymentController::class, 'cashRecord'])->where('school', 'school');
		});
		
		Route::group(['prefix' => '/cheque', 'as' => 'cheque.'], function () {
			Route::post('cheque-draft-record',[UserpaymentController::class, 'chequeOrdraftRecord'])->where('school', 'school');
		});
	});
	Route::post('logout-user',[AuthController::class, 'logout'])->where('school', 'school');
	Route::post('refreshtoken',[AuthController::class, 'refresh'])->where('school', 'school');
	Route::group(['prefix' => '/payment', 'as' => 'payment.'], function() {		
		Route::group(['prefix' => '/payment-gateway', 'as' => 'payment-gateway.'], function() {
			Route::controller(\Front\UserpaymentController::class)->group(function() {
				Route::post('make-order', 'makeOrder')->where('school', 'school');
				Route::post('payment-record', 'paymentRecord')->where('school', 'school');
				Route::get('payment-history/{size?}', 'allHistory')->where('school', 'school');
			});	
		});
	});
	
	//Sightseeing 
	Route::group(['prefix' => '/itineray', 'as' => 'itineray.'], function () {
		Route::post('sightseeing', [ItinerarySightseeingController::class, 'itinerary_sightseeing_request'])->where('school', 'school');
	});
	Route::post('details',[UserController::class, 'details'])->where('school', 'school');
	Route::post('user-show',[UserController::class, 'show'])->where('school', 'school');
	Route::post('user-info-update',[UserController::class, 'infoUpdate'])->where('school', 'school');
	Route::post('user-update',[UserController::class, 'update'])->where('school', 'school');
	Route::post('update-password',[UserController::class, 'UpdatePassword'])->where('school', 'school');
	Route::post('update-user-image',[UserController::class, 'UserImage'])->where('school', 'school');
	Route::post('update-user-docs',[UserController::class, 'UserDocs'])->where('school', 'school');
	
	Route::post('tour-detail',[TourController::class, 'tourDetail'])->where('school', 'school');

	// School
	// Route::post('/tour-list', 'TourController@tourList');
	
	// Corporate
	// Route::post('/corp-tour-list', 'TourController@corpTourList');
	
	// Route::post('/tour-submit-payment', 'UserpaymentController@store');
	// Route::post('/tour-payment-status', 'UserpaymentController@tourPayStatus');
	// payment by ccavenue
	// Route::post('/user-tour-payment','FrontPaymentController@payment');
	//Payment History - School
	// Route::post('/school/payment-history','FrontPaymentController@viewPaymentDeails');
	
	Route::post('tour-bankdetail',[SchoolbankdetailController::class, 'bankdetails'])->where('school', 'school');
	Route::post('tour-bankdetail-store',[SchoolbankdetailController::class, 'store'])->where('school', 'school');
	// Route::post('/tour-bankdetail-student', 'SchoolbankdetailController@bankdetailsStudent');
	Route::post('tour-travel-save',[TourController::class, 'tourDetailSave'])->where('school', 'school');
	Route::post('payment-tour',[TourController::class, 'paymentTour'])->where('school', 'school');
	// Comments
	Route::post('encyclopedia-comments',[EncyclopediaController::class, 'PostComment'])->where('school', 'school');
	Route::post('booking',[FrontbookingController::class, 'booking'])->where('school', 'school');
	Route::post('group-add',[GroupmemberController::class, 'addGroupMember'])->where('school', 'school');
	Route::post('group-member',[GroupmemberController::class, 'index'])->where('school', 'school');
	Route::post('group-member-update',[GroupmemberController::class, 'update'])->where('school', 'school');
	Route::post('destroy-member',[GroupmemberController::class, 'destroy'])->where('school', 'school');
	Route::group(['prefix' => '/bankdetail', 'as' => 'bankdetail.'], function () {
		Route::post('store',[BankDetailController::class, 'store'])->where('school', 'school');
		Route::put('update/{id}',[BankDetailController::class, 'update'])->where('school', 'school');
		Route::delete('delete/{id}',[BankDetailController::class, 'destroy'])->where('school', 'school');
		Route::get('{id}/edit',[BankDetailController::class, 'edit'])->where('school', 'school');
		Route::get('{id}/show',[BankDetailController::class, 'show'])->where('school', 'school');
		Route::get('all/{size?}',[BankDetailController::class, 'all'])->where('school', 'school');
	});
});

// Family
Route::group(['prefix' => '{family}', 'middleware' => 'family.authentication'], function () {
	
	//Discount Coupon 
	Route::group(['prefix' => '/advertising', 'as' => 'advertising.'], function () {
		Route::post('check-discount-coupon',[DiscountCouponController::class, 'checkCouponValidation'])->where('family', 'family');
	});

	Route::group(['prefix' => 'payment', 'as' => 'payment.'], function () {
		Route::group(['prefix' => '/cash', 'as' => 'cash.'], function () {
			Route::post('record',[UserpaymentController::class, 'cashRecord'])->where('family', 'family');
		});
		
		Route::group(['prefix' => '/cheque', 'as' => 'cheque.'], function () {
			Route::post('cheque-draft-record',[UserpaymentController::class, 'chequeOrdraftRecord'])->where('family', 'family');
		});
	});
	Route::post('logout-user',[AuthController::class, 'logout'])->where('family', 'family');
	Route::post('refreshtoken',[AuthController::class, 'refresh'])->where('family', 'family');
	Route::group(['prefix' => '/payment', 'as' => 'payment.'], function() {		
		Route::group(['prefix' => '/payment-gateway', 'as' => 'payment-gateway.'], function() {
			Route::controller(\Front\UserpaymentController::class)->group(function() {
				Route::post('make-order', 'makeOrder')->where('family', 'family');
				Route::post('payment-record', 'paymentRecord')->where('family', 'family');
				Route::get('payment-history/{size?}', 'allHistory')->where('family', 'family');
			});	
		});
	});
	
	//Sightseeing 
	Route::group(['prefix' => '/itineray', 'as' => 'itineray.'], function () {
		Route::post('sightseeing', [ItinerarySightseeingController::class, 'itinerary_sightseeing_request'])->where('family', 'family');
	});
	Route::post('details',[UserController::class, 'details'])->where('family', 'family');
	Route::post('user-show',[UserController::class, 'show'])->where('family', 'family');
	Route::post('user-info-update',[UserController::class, 'infoUpdate'])->where('family', 'family');
	Route::post('user-update',[UserController::class, 'update'])->where('family', 'family');
	Route::post('update-password',[UserController::class, 'UpdatePassword'])->where('family', 'family');
	Route::post('update-user-image',[UserController::class, 'UserImage'])->where('family', 'family');
	Route::post('update-user-docs',[UserController::class, 'UserDocs'])->where('family', 'family');
	Route::post('tour-detail',[TourController::class, 'tourDetail'])->where('family', 'family');
	Route::post('tour-travel-save',[TourController::class, 'tourDetailSave'])->where('family', 'family');
	Route::post('payment-tour',[TourController::class, 'paymentTour'])->where('family', 'family');
	
	Route::post('tour-bankdetail',[FamilybankdetailController::class, 'bankdetails'])->where('family', 'family');
	Route::post('tour-bankdetail-store',[FamilybankdetailController::class, 'store'])->where('family', 'family');
	// Comments
	Route::post('group-add',[GroupmemberController::class, 'addGroupMember'])->where('family', 'family');
	Route::post('group-member',[GroupmemberController::class, 'index'])->where('family', 'family');
	Route::post('group-member-update',[GroupmemberController::class, 'update'])->where('family', 'family');
	Route::post('destroy-member',[GroupmemberController::class, 'destroy'])->where('family', 'family');
	Route::post('encyclopedia-comments',[EncyclopediaController::class, 'PostComment'])->where('family', 'family');
	Route::post('booking',[FrontbookingController::class, 'booking'])->where('family', 'family');
	Route::group(['prefix' => '/bankdetail', 'as' => 'bankdetail.'], function () {
		Route::post('store',[BankDetailController::class, 'store'])->where('school', 'school');
		Route::put('update/{id}',[BankDetailController::class, 'update'])->where('school', 'school');
		Route::delete('delete/{id}',[BankDetailController::class, 'destroy'])->where('school', 'school');
		Route::get('{id}/edit',[BankDetailController::class, 'edit'])->where('school', 'school');
		Route::get('{id}/show',[BankDetailController::class, 'show'])->where('school', 'school');
		Route::get('all/{size?}',[BankDetailController::class, 'all'])->where('school', 'school');
	});
});

//User
Route::group(['prefix' => 'user', 'middleware' => 'user.authentication'], function () {
	Route::post('refreshtoken/{user}',[AuthController::class, 'refresh'])->where('user', 'user');
	Route::post('logout-user/{user}',[AuthController::class, 'logout'])->where('user', 'user');
});


