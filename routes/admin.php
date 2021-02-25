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


// Route::post('/payment','Front\PaymentController@payment');

Route::namespace('Admin')->group(function (){

	Route::namespace('Transport')->group(function(){
		Route::get('bus/all/{size}','BusController@all');
		Route::resource('bus', 'BusController');
		Route::get('train/all/{size}','TrainController@all');
		Route::resource('train', 'TrainController');
		Route::get('flight/all/{size}','FlightController@all');
		Route::resource('flight', 'FlightController');
	});

	Route::namespace('Location')->group(function(){
		Route::get('country/all/{size}','CountryController@all');
		Route::resource('country','CountryController');
		Route::get('city/all/{size}','CityController@all');
		Route::resource('city','CityController');
		Route::get('state/all/{size}','StateController@all');
		Route::resource('state','StateController');
		Route::get('sightseeings/all/{size}','SightseeingController@all');
		Route::resource('sightseeings','SightseeingController');
	});

	Route::namespace('Itinerary')->group(function(){
		Route::get('itinerary/all/{size}','ItineraryController@all');
		Route::resource('itinerary','ItineraryController');
		Route::get('itinerarydayget/{id}','ItinerarydayController@index');
	});

	Route::namespace('Tour')->group(function(){
		Route::get('tour/all/{size}','TourController@all');
		Route::resource('tour','TourController');
		Route::get('tourtype/all/{size}','TourtypeController@all');
		Route::resource('tourtype','TourtypeController');
		Route::get('tourprogram/all/{size}','TourprogramController@all');
		Route::resource('tourprogram','TourprogramController');
		Route::get('schoolbankdetails/all/{size}','SchoolbankdetailController@all');
		Route::resource('schoolbankdetails','SchoolbankdetailController');
		Route::get('userpayments/all/{size}','UserpaymentController@all');
		Route::resource('userpayments','UserpaymentController');
		Route::get('frontbooking/all/{size}','FrontbookingController@all');
		Route::get('frontbooking/{id}','FrontbookingController@show');
		Route::post('frontbooking-status','FrontbookingController@status');
		Route::delete('frontbooking-delete/{id}','FrontbookingController@destroy');
		Route::post('touruser-list','TouruserController@touruserList');
		Route::post('add-pnr-user','TouruserController@addPnrUser');
		Route::post('pnruser/get','TouruserController@PnrUserGet');
		Route::post('update-pnruser','TouruserController@update');
		// foods
		Route::get('foods/{id}','FoodController@index');
		Route::post('foods','FoodController@store');
		Route::patch('foods/{id}','FoodController@update');
		Route::delete('foods/{id}','FoodController@destroy');
		//escortUpdate
		Route::get('escortUpdates/{id}','PaxController@index');
	});
	Route::namespace('Restaurant')->group(function(){
		Route::get('restaurants/all/{size}','RestaurantController@all');
		Route::resource('restaurants','RestaurantController');		
	});

	Route::namespace('Hotel')->group(function(){
		Route::get('hotel/all/{size}','HotelController@all');
		Route::resource('hotel','HotelController');
	});
	Route::namespace('School')->group(function(){
		Route::get('school/all/{size}','SchoolController@all');
		Route::get('schools-login-details/{id}','SchoolController@login');
		Route::resource('school','SchoolController');
		Route::resource('student','StudentController');
		Route::get('groupmembers/{tour_code}/{type}','GroupmemberController@getMember');
		Route::post('groupmembers/update','GroupmemberController@updateMember');
		Route::post('groupmember/destroy','GroupmemberController@destroyMember');
		Route::post('groupmember/add','GroupmemberController@addMember');
		Route::post('groupmembers/addlogindetail','GroupmemberController@addlogindetail');
		
	});

	Route::namespace('Escort')->group(function(){
		Route::get('escort/all/{size}','EscortController@all');
		Route::post('escort-login-link','EscortController@sendLink');
		Route::resource('escort','EscortController');
	});
	
	Route::namespace('Gallery')->group(function(){
		Route::post('gallery-img-delete','GalleryController@galleryImageDelete');
		Route::get('gallery/all/{size}','GalleryController@all');
		Route::resource('gallery','GalleryController');
	});


	Route::namespace('RoleAndPermission')->group(function(){
		Route::get('role/all/{size}','RoleController@all');
		Route::resource('role','RoleController');
		Route::get('permission/all/{size}','PermissionController@all');
		Route::resource('permission','PermissionController');
	});

	Route::namespace('Reservation')->group(function(){
		Route::resource('bookedescorts','BookedescortController');
		Route::resource('bookedhotels','BookedhotelController');
		Route::resource('bookedrestaurants','BookedrestaurantController');
		Route::resource('bookedsightseeings','BookedsightseeingController');
		Route::resource('bookedflights','BookedflightController');
		Route::resource('bookedtrains','BookedtrainController');
		Route::resource('bookedbuses','BookedbusController');
		Route::resource('pnrs','PnrController');
		Route::get('/bookedusers/bankdetails/{id}','BookeduserController@bankdetails');
		Route::get('/bookedusers/{id}','BookeduserController@all');
		Route::get('/bookedusers-view/{id}','BookeduserController@show');
		Route::resource('bookedusers','BookeduserController');

		Route::post('pnrs/get','PnrController@getData');
		Route::post('payments/list','UserpaymentController@paymentList');
		Route::post('payments/student','UserpaymentController@paymentStudent');
		Route::post('createpayment','UserpaymentController@createpayment');
		Route::post('addtourpayment','UserpaymentController@addtourpayment');
		Route::post('updatetourpayment','UserpaymentController@updatetourpayment');
		Route::post('gettourusers','UserpaymentController@getTourUser');
		Route::get('getUserpayments/{id}','UserpaymentController@getUserpayments');
	});
	Route::namespace('GbiMember')->group(function(){
		Route::get('/members/all/{size}','GBIMemberController@all');
		Route::get('/members','GBIMemberController@index');
		Route::post('/members/create','GBIMemberController@register');
		Route::post('/members/destroy/{user}',"GBIMemberController@destroy");
		Route::get('/members/salesman',"GBIMemberController@memberType");
	});
	Route::namespace('Account')->group(function(){
		Route::get('/accounts/all/{size}','AccountController@all');
		Route::resource('/accounts','AccountController');
	});

	Route::namespace('Encyclopedia')->group(function(){
		Route::post('/encyclopedia-img','EncyclopediaController@deleteImage');
		Route::get('encyclopedias/all/{size}','EncyclopediaController@all');
		Route::resource('encyclopedias','EncyclopediaController');
		Route::resource('encyclopediacomments','EncyclopediacommentController');
	});

	Route::namespace('Website')->group(function(){
		
		Route::get('subscribers/all/{size}','SubscriberController@all');
		Route::post('subscribers','SubscriberController@store');
		Route::delete('subscribers/{id}','SubscriberController@destroy');
		
		Route::resource('website','WebsiteController');
		Route::get('user','UserController@index');
		Route::get('user/all/{size}','UserController@all');
		Route::get('user/{id}','UserController@show');
		Route::post('/images','ImageController@upload');
		Route::post('/images/delete','ImageController@delete');
	});

	Route::namespace('Post')->group(function(){
		Route::get('categories/all/{size}','CategoryController@all');
		Route::resource('categories','CategoryController');
		Route::get('posts/all/{size}','PostController@all');
		Route::resource('posts','PostController');
		Route::get('tags/all/{size}','TagController@all');
		Route::resource('tags','TagController');
	});
	
});





