<?php
use Illuminate\Http\Request;
use App\Http\Controllers\Admin\Itinerary\SightseeingRequestController as SightseeingRequest;
use App\Http\Controllers\Admin\Advertising_And_Discount\MarketingCampaignController;
use App\Http\Controllers\Admin\Advertising_And_Discount\DiscountCouponController;
use App\Http\Controllers\Admin\Payment\BankDetailController;
use App\Http\Controllers\Admin\Tour\UserpaymentController;
use App\Http\Controllers\Admin\TravellerPolicy\TravellerPolicyCategoryController;
use App\Http\Controllers\Admin\TravellerPolicy\TravellerPolicyController;

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

// Route::group(['middleware' => ['auth:api'],'namespace'=>'Front'],function(){
// Route::group(['middleware' => ['auth:user-api', 'scopes:user', 'admin.authentication']], function () {
// Route::group(['middleware' => ['admin.authentication', 'user.authentication']], function () {
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
			Route::get('all-country','CountryController@getAllCountry');
			Route::resource('country','CountryController');
			Route::get('city/all/{size}','CityController@all');
			Route::resource('city','CityController');
			Route::get('all-city-per-state/{state_id}','CityController@allCityPerState');
			Route::get('all-state-per-country/{country_id}','StateController@allStatePerCountry');
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
			Route::post('tour-payment-through-status','TourController@paymentThrough');
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
			// Route::resource('schoolbankdetails','SchoolbankdetailController');
			// Route::get('schoolbankdetails/all/{size}','SchoolbankdetailController@all');
			Route::get('userpayments/all/{size}','UserpaymentController@all');
			Route::resource('userpayments','UserpaymentController');

			//corporate
			//Route::get('tour/corporate/all','TourController@AllCorp');
			// Route::get('corpbankdetails/all/{size}','CorpbankdetailController@all');
			// Route::resource('corpbankdetails','CorpbankdetailController');
			Route::get('corppayments/all/{size}','CorpPaymentController@all');
			Route::resource('corppayments','CorpPaymentController');
			Route::get('tour/corporate/{size}','TourController@corporate');
			
			//Family
			// Route::resource('familybankdetails',FamilybankdetailController::class);
			// Route::get('familybankdetails/all/{size?}',[FamilybankdetailController::class, 'all']);

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
			
			Route::get('meta-keyword/all/{size?}','MetaKeywordController@all');
			Route::resource('meta-keyword','MetaKeywordController');
			Route::get('amenities/all/{size?}/{type?}','AmenitiesController@all');
			Route::resource('amenities','AmenitiesController');
			Route::get('hotel/all/{size}/{state}','HotelController@all');
			Route::get('hotel-publish/{id}','HotelController@publish');
			Route::resource('hotel','HotelController');
			Route::get('hotel-image/{id}','HotelController@destroyImage');
			Route::get('banquet/all/{size}','BanquetController@all');
			Route::resource('banquet','BanquetController');
			Route::get('banquet-publish/{id}','BanquetController@publish');
			Route::get('room-categories/all/{size}','RoomCategoryController@all');
			Route::resource('room-categories','RoomCategoryController');
			Route::get('all-room/{size?}','RoomController@all');
			Route::get('delete-room-image/{id}','RoomController@destroyImage');
			Route::resource('room','RoomController');
			Route::get('room-publish/{id}','RoomController@publish');
			Route::post('admin-hotel-search', 'HotelController@search');
			Route::get('banquet-categories/all/{size}','BanquetCategoryController@all');
			Route::resource('banquet-categories','BanquetCategoryController');
		});
		
		Route::namespace('School')->group(function(){
			Route::get('school/all/{size}','SchoolController@all');
			Route::get('schools-login-details/{id}','SchoolController@login');
			Route::resource('school','SchoolController');
			Route::resource('student','StudentController');
			// Route::post('groupmembers/update','GroupmemberController@updateMember');
			// Route::post('groupmember/destroy','GroupmemberController@destroyMember');
			// Route::post('groupmember/add','GroupmemberController@addMember');

			// Route::get('groupmembers/{tour_code}/{type}','GroupmemberController@getMember');
			// Route::get('groupmembers/{tour_code}/{type}/pending','GroupmemberController@getMemberPending');
		});

		Route::namespace('Corporate')->group(function(){
			Route::get('company/all/{size}','CompanyController@all');
			Route::get('corporate-login-details/{id}','CompanyController@login');
			Route::resource('company','CompanyController');
			//Route::resource('student','StudentController');
			// Route::get('corp-group/{tour_code}/{type}','CorpGroupmemberController@getMember');
			// Route::post('corp-group/update','CorpGroupmemberController@updateMember');
			// Route::post('corp-group/destroy','CorpGroupmemberController@destroyMember');
			// Route::post('corp-group/add','CorpGroupmemberController@addMember');
			// Route::post('corp-group/addlogindetail','CorpGroupmemberController@addlogindetail');
			// Route::post('corp-group/send-member-login','CorpGroupmemberController@sendMemberLogin');
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
			Route::resource('/depaJobrtments',"DepartmentController");
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
			Route::group(['prefix' => '/encyclopedia', 'as' => 'encyclopedia.'], function () {
				Route::controller(EncyclopediaController::class)->group(function () {
					Route::delete('food-image/{id}', 'deleteFood');
					Route::delete('cultural-image/{id}', 'deleteCultural');
				});	
				Route::resource('event','EncylopediaEventController');
				Route::get('event/all/{size}','EncylopediaEventController@all');
			});
			Route::post('/encyclopedia-img','EncyclopediaController@deleteImage');
			Route::post('/encyclopedia-pdf','EncyclopediaController@deletePdf');
			Route::get('encyclopedias/all/{type}/{size}','EncyclopediaController@all');
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
		
		Route::group(['prefix' => '/itineray', 'as' => 'itineray.'], function () {
			Route::resource('sightseeing-request',Itinerary\SightseeingRequestController::class);
			Route::get('all-sightseeing-request/{size?}',[SightseeingRequest::class, 'all']);
			Route::post('sightseeing-request/status-update',[SightseeingRequest::class, 'statusUpdate']);
			Route::post('sightseeing-request/confirmation',[SightseeingRequest::class, 'sendConfirmationMail']);
		});

		Route::group(['prefix' => '/advertising', 'as' => 'advertising.'], function () {
			Route::resource('marketing-campaign',Advertising_And_Discount\MarketingCampaignController::class);
			Route::get('all-marketing-campaign/{size?}',[MarketingCampaignController::class, 'all']);
			Route::group(['prefix' => '/{client_type}/discount-coupon/', 'as'=>'discount-coupon.'], function () {
				Route::post('store',[DiscountCouponController::class, 'store'])->where('client_type', 'school|company|family');
				Route::put('update/{id}',[DiscountCouponController::class, 'update'])->where('client_type', 'school|company|family');
				Route::delete('delete/{id}',[DiscountCouponController::class, 'destroy'])->where('client_type', 'school|company|family');
				Route::get('{id}/edit',[DiscountCouponController::class, 'edit'])->where('client_type', 'school|company|family');
				Route::get('{id}/show',[DiscountCouponController::class, 'show'])->where('client_type', 'school|company|family');
				// Route::resource('discount-coupon',Advertising_And_Discount\DiscountCouponController::class);
				Route::get('all-discount-coupon/{size?}',[DiscountCouponController::class, 'all'])->where('client_type', 'school|company|family');
				Route::get('attempt-discount-coupon/{size?}',[DiscountCouponController::class, 'attemptDiscountCoupon'])->where('client_type', 'school|company|family');
			});
		});

		Route::group(['prefix' => '{user}/{tour_type}/payment', 'as' => 'payment.'], function () {
			Route::group(['prefix' => '/cash', 'as' => 'cash.'], function () {
				Route::post('record',[UserpaymentController::class, 'cashRecord'])->where('user', 'user')->where('tour_type','school|company|family');
			});
			Route::get('payment-history/{tour_id}/{size?}',[UserpaymentController::class, 'allHistory'])->where('user', 'user')->where('tour_type','school|company|family');
			
			Route::group(['prefix' => '/cheque', 'as' => 'cheque.'], function () {
				Route::post('cheque-draft-record',[UserpaymentController::class, 'chequeOrdraftRecord'])->where('user', 'user')->where('tour_type','school|company|family');
				Route::post('cheque-status',[UserpaymentController::class, 'chequeStatus'])->where('user', 'user')->where('tour_type','school|company|family');
			});	
		});
		Route::group(['prefix' => '/groupmember', 'as' => 'groupmember.'], function () {
			Route::controller(\GroupmemberController::class)->group(function () {
				Route::post('update','updateMember');
				Route::post('destroy','destroyMember');
				Route::post('add','addMember');
				Route::get('{tour_code}/{user_type}/{tour_type}','getMember');
				Route::get('{tour_code}/{user_type}/{tour_type}/{pending}','getMemberPending')->where('pending', 'pending');	
			});
			Route::group(['prefix' => '/school', 'as' => 'school.'], function () {
				Route::controller(School\GroupmemberController::class)->group(function () {
					Route::post('addlogindetail','addlogindetail');
					Route::post('send-member-login','sendMemberLogin');
				});
			});
			Route::group(['prefix' => '/corporate', 'as' => 'corporate.'], function () {
				Route::controller(Corporate\CorpGroupmemberController::class)->group(function () {
					Route::post('addlogindetail','addlogindetail');
					Route::post('send-member-login','sendMemberLogin');
				});
			});
		});
		
		Route::group(['prefix' => '/{user_type}/bank-detail', 'as' => 'bank-detail.'], function () {
			Route::post('store',[BankDetailController::class, 'store'])->where('user_type', 'school|company|family');
			Route::put('update/{id}',[BankDetailController::class, 'update'])->where('user_type', 'school|company|family');
			Route::delete('delete/{id}',[BankDetailController::class, 'destroy'])->where('user_type', 'school|company|family');
			Route::get('{id}/edit',[BankDetailController::class, 'edit'])->where('user_type', 'school|company|family');
			Route::get('{id}/show',[BankDetailController::class, 'show'])->where('user_type', 'school|company|family');
			Route::get('all/{size?}',[BankDetailController::class, 'all'])->where('user_type', 'school|company|family');
		});
		Route::group(['prefix' => '/traveller-policy-category', 'as' => 'traveller-policy-category.'], function () {
			Route::post('store',[TravellerPolicyCategoryController::class, 'store']);
			Route::put('update/{id}',[TravellerPolicyCategoryController::class, 'update']);
			Route::delete('delete/{id}',[TravellerPolicyCategoryController::class, 'destroy']);
			Route::get('{id}/edit',[TravellerPolicyCategoryController::class, 'edit']);
			Route::get('{id}/show',[TravellerPolicyCategoryController::class, 'show']);
			Route::get('all/{size?}',[TravellerPolicyCategoryController::class, 'all']);
		});
		Route::group(['prefix' => '/traveller-policy', 'as' => 'traveller-policy.'], function () {
			Route::post('store',[TravellerPolicyController::class, 'store']);
			Route::put('update/{id}',[TravellerPolicyController::class, 'update']);
			Route::delete('delete/{id}',[TravellerPolicyController::class, 'destroy']);
			Route::get('{id}/edit',[TravellerPolicyController::class, 'edit']);
			Route::get('{id}/show',[TravellerPolicyController::class, 'show']);
			Route::get('all/{size?}',[TravellerPolicyController::class, 'all']);
			Route::get('policy-per-category/{category_id}/{size?}',[TravellerPolicyController::class, 'all']);
			Route::post('policy-per-category',[TravellerPolicyController::class, 'getAllPolicy']);
			Route::post('status',[TravellerPolicyController::class, 'publish']);
		});
		Route::group(['prefix' => '/fact', 'as' => 'fact.'], function () {
			Route::resource('fact',FactController::class);
			Route::get('all/{size?}',[App\Http\Controllers\Admin\FactController::class, 'all']);
			Route::get('status/{id}/{status}',[App\Http\Controllers\Admin\FactController::class, 'status'])->where('status', '0|1');
		});
	});

// });





