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
// Route::group(['middleware' => ['auth:api'],'namespace'=>'Front'],function(){
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
		Route::post('maps/get-location','MapsController@getLocation');
		Route::post('maps/get-map','MapsController@getMap');
		Route::post('maps/get-direction','MapsController@getDirection');
		Route::post('maps/get-matrix','MapsController@getDistMatrix');
		Route::post('maps/get-places','MapsController@getPlaces');
	});

	Route::namespace('Itinerary')->group(function(){
		Route::get('itinerary/all/{size}','ItineraryController@all');
		Route::resource('itinerary','ItineraryController');
		Route::get('itinerarydayget/{id}','ItinerarydayController@index');

		Route::get('itineraryrequst/all/{size}','ItineraryrequestController@all');
		Route::get('itineraryrequst/{id}','ItineraryrequestController@show');
		Route::delete('itineraryrequst/{id}','ItineraryrequestController@Destroy');

		Route::get('popular-itineraries/all/{size}','PopularItineraryController@all');
		Route::resource('popular-itineraries','PopularItineraryController');
	});

	Route::namespace('Tour')->group(function(){

		//Tour
		Route::get('tour/all/{size}','TourController@all');
		Route::resource('tour','TourController'); 
		Route::get('tourtype/all/{size}','TourtypeController@all');
		Route::resource('tourtype','TourtypeController');
		Route::get('tourprogram/all/{size}','TourprogramController@all');
		Route::resource('tourprogram','TourprogramController');
		
		//Booking
		Route::get('frontbooking/all/{size}','FrontbookingController@all');
		Route::get('frontbooking/{id}','FrontbookingController@show');
		Route::post('frontbooking-status','FrontbookingController@status');
		Route::delete('frontbooking-delete/{id}','FrontbookingController@destroy');
		Route::post('touruser-list','TouruserController@touruserList');
		Route::post('add-pnr-user','TouruserController@addPnrUser');
		Route::post('pnruser/get','TouruserController@PnrUserGet');
		Route::post('update-pnruser','TouruserController@update');

		//school
		//Route::get('tour/school/all','TourController@Allschool');
		Route::get('tour/school/{size}','TourController@school');
		Route::resource('schoolbankdetails','SchoolbankdetailController');
		Route::get('schoolbankdetails/all/{size}','SchoolbankdetailController@all');
		Route::get('userpayments/all/{size}','UserpaymentController@all');
		Route::resource('userpayments','UserpaymentController');

		//corporate
		//Route::get('tour/corporate/all','TourController@AllCorp');
		Route::get('corpbankdetails/all/{size}','CorpbankdetailController@all');
		Route::resource('corpbankdetails','CorpbankdetailController');
		Route::get('corppayments/all/{size}','CorpPaymentController@all');
		Route::resource('corppayments','CorpPaymentController');
		Route::get('tour/corporate/{size}','TourController@corporate');

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
		Route::get('hotel/all/{size}/{state}','HotelController@all');
		Route::resource('hotel','HotelController');
		Route::get('banquet/all/{size}','BanquetController@all');
		Route::resource('banquet','BanquetController');
		Route::get('room-categories/all/{size}','RoomCategoryController@all');
		Route::resource('room-categories','RoomCategoryController');
		Route::get('banquet-categories/all/{size}','BanquetCategoryController@all');
		Route::resource('banquet-categories','BanquetCategoryController');
	});
	Route::namespace('School')->group(function(){
		Route::get('school/all/{size}','SchoolController@all');
		Route::get('schools-login-details/{id}','SchoolController@login');
		Route::resource('school','SchoolController');
		Route::resource('student','StudentController');
		Route::get('groupmembers/{tour_code}/{type}','GroupmemberController@getMember');
		Route::get('groupmembers/{tour_code}/{type}/pending','GroupmemberController@getMemberPending');
		Route::post('groupmembers/update','GroupmemberController@updateMember');
		Route::post('groupmember/destroy','GroupmemberController@destroyMember');
		Route::post('groupmember/add','GroupmemberController@addMember');
		Route::post('groupmembers/addlogindetail','GroupmemberController@addlogindetail');
		Route::post('groupmembers/send-member-login','GroupmemberController@sendMemberLogin');
	});

	Route::namespace('Corporate')->group(function(){
		Route::get('company/all/{size}','CompanyController@all');
		Route::get('corporate-login-details/{id}','CompanyController@login');
		Route::resource('company','CompanyController');
		//Route::resource('student','StudentController');
		Route::get('corp-group/{tour_code}/{type}','CorpGroupmemberController@getMember');
		Route::post('corp-group/update','CorpGroupmemberController@updateMember');
		Route::post('corp-group/destroy','CorpGroupmemberController@destroyMember');
		Route::post('corp-group/add','CorpGroupmemberController@addMember');
		Route::post('corp-group/addlogindetail','CorpGroupmemberController@addlogindetail');
		Route::post('corp-group/send-member-login','CorpGroupmemberController@sendMemberLogin');
		
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
		Route::get('permission/all','PermissionController@index');
		Route::resource('permission','PermissionController');
		Route::post('permission/assign','UserRolePermissionController@store');//Assign user permissions
		Route::get('permission/remove/{permission}','UserRolePermissionController@destroy');//Remove user permissions
		Route::get('permissions/{userRoleId}/{size}','UserRolePermissionController@showUserPermissions'); //Check user permissions
		Route::get('user-permissions/{userId}','UserRolePermissionController@showPermission');
		Route::get('check/permission/{permId}/{userRoleId}','UserRolePermissionController@UserPerm');

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


		Route::post('corporate/payments/list','CorpPaymentController@paymentList');
		Route::post('corporate/payments/all','CorpPaymentController@paymentCorp');
		Route::post('corporate/createpayment','CorpPaymentController@createpayment');
		Route::post('corporate/addtourpayment','CorpPaymentController@addtourpayment');
		Route::post('corporate/updatetourpayment','CorpPaymentController@updatetourpayment');
		Route::post('corporate/gettourusers','CorpPaymentController@getTourUser');
		Route::get('corporate/getUserpayments/{id}','CorpPaymentController@getUserpayments');

	});
	Route::namespace('GbiMember')->group(function(){
		Route::get('/members/all/{size}','GBIMemberController@all');
		Route::get('/members','GBIMemberController@index');
		Route::post('/members/create','GBIMemberController@register');
		Route::get('/members/{id}/edit','GBIMemberController@edit');
		Route::put('/members/{id}','GBIMemberController@update');
		Route::post('/members/destroy/{user}',"GBIMemberController@destroy");
		Route::delete('/members/{id}',"GBIMemberController@destroy");
		Route::get('/members/salesman',"GBIMemberController@memberType");
		Route::get('/departments/all/{size}','DepartmentController@all');
		Route::resource('/departments',"DepartmentController");
		//Assign User
		Route::get('assign-user/{user}/{parentId}','AssignParentController@assignParent');
		Route::get('assign-users/remove/{user}','AssignParentController@removeParent');
		Route::get('assign-users-list/{role}/{size}/{dep_id}','AssignParentController@index');
	});
	Route::namespace('Account')->group(function(){
		Route::get('/accounts/all/{size}','AccountController@all');
		Route::resource('/accounts','AccountController');
	});

	Route::namespace('Encyclopedia')->group(function(){
		Route::post('/encyclopedia-img','EncyclopediaController@deleteImage');
		Route::post('/encyclopedia-pdf','EncyclopediaController@deletePdf');
		Route::get('encyclopedias/all/{type}/{size}','EncyclopediaController@all');
		Route::resource('encyclopedias','EncyclopediaController');
		//Route::get('encyclopedias/cities/{size}','EncyclopediaController@allCity');
		//Route::get('encyclopedias/cities/index','EncyclopediaController@indexCity');
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
		Route::post('posts/{post}/{status}/{user_id}','PostController@publish');
	});

	//Feedbacks
	Route::namespace('Feedback')->group(function(){
		Route::get('feedbacks/all','FeedbackController@index');
		Route::get('feedbacks/old','FeedbackController@indexOld');
		Route::post('feedback/send-link','FeedbackController@sendLink');
		Route::post('feedback/post-comment','FeedbackController@postComment');
		Route::post('finalprogram/send','FeedbackController@sendSms');
		
	});

	//Payment Link
	Route::namespace('Payment')->group(function(){
		Route::post('payment-link/send','PaymentLinkController@sendLink');
	});

	//Notifications
	Route::namespace('Notification')->group(function(){
		Route::get('notification/all/{timeSpan}/{category}/{status}/{service}','NotificationController@index');
		Route::get('notification/chart/{timeSpan}/{category}/{status}/{service}','NotificationController@chartIndex');
		Route::post('notification/store','NotificationController@store');
	});

	//User Details
	Route::namespace('User')->group(function(){
		Route::get('user/details','UserController@details');
		//Route::post('notification/store','NotificationController@store');
	});

	// Team Tree
	Route::namespace('TeamTree')->group(function(){
		Route::get('team-tree/list','TeamTreeController@index');
	});

	//Jobs
	Route::namespace('Jobs')->group(function(){
		Route::get('jobs/all/{size}','JobsController@all');
		Route::resource('jobs','JobsController');
		Route::get('job-applications/all','JobApplicationController@index');
		Route::get('job-applications/old','JobApplicationController@indexOld');
		Route::post('job-application/save-status', 'JobApplicationController@saveStatus');
	});	

	//Event
	Route::namespace('Event')->group(function(){
		Route::get('events/all/{size}','EventController@all');
		Route::resource('events','EventController');
	});

	//Season
	Route::namespace('Season')->group(function(){
		Route::get('season/all/{size}','SeasonController@all');
		Route::resource('season','SeasonController');
		Route::put('current-season/set', 'SeasonController@setSeason');
		Route::get('current-season', 'SeasonController@currentSeason');
	});

	//Final Program
	Route::namespace('FinalProgram')->group(function(){
		Route::post('finalprogram/send-sms','SmsController@sendSms');
	});

	//School Trip
	Route::namespace('SchoolTrip')->group(function(){
		Route::get('schooltrip/all/{size}','SchoolTripController@all');
		Route::resource('schooltrip','SchoolTripController');
	});
});





