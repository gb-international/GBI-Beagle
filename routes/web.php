<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('public/index');
});


Auth::routes();

Route::get('/admin', 'HomeController@index')->name('home');

//Route::get('/{anypath}','HomeController@index')->where('path','.*');

Route::group(['middleware' => ['auth']], function () {
    //Category

    Route::post('/add-category','CategoryController@add_category');
    Route::get('/category','CategoryController@all_category');
    Route::get('/category/{id}','CategoryController@delete_category');
    Route::get('/editcategory/{id}','CategoryController@edit_category');
    Route::post('/update-category/{id}','CategoryController@update_category');
    Route::get('/deletecategory/{id}','CategoryController@selected_category');

//Post
    Route::get('/post','PostController@all_Post');
    Route::post('/savepost','PostController@save_post');
    Route::get('/delete/{id}','PostController@delete_post');
    Route::get('/post/{id}','PostController@edit_post');
    Route::post('/update/{id}','PostController@update_post');

//Itineray
    Route::post('/add-itinerary','ItineraryController@storeItinerary');
    Route::get('/itinerary','ItineraryController@allItinerary');
    Route::get('/delete/{id}','ItineraryController@deleteItinerary');  
    Route::get('/itinerary/{id}','ItineraryController@editItinerary');
    Route::post('/update-itinerary/{id}','ItineraryController@updateItinerary');  

// Escort
   Route::get('/escort','EscortController@allEscort');
   Route::post('/add-escort','EscortController@save_escort');
   Route::get('/escort/{id}','EscortController@edit_escort');
   Route::post('/update-escort/{id}','EscortController@update_escort');
   Route::get('/delete-escort/{id}','EscortController@delete_escort');

// Client
   Route::get('/client','ClientController@allClient');
   Route::post('/add-client','ClientController@save_client');


//Itinerary Days router
   Route::get('/add-days-itinerary/{id}','ItineraryController@allDaysitinerary');
   Route::post('/add-itinerarydays/{id}','ItineraryDayController@storeDayitinerary');
});



Route::get('/blogpost','BlogController@get_all_blog_post');
Route::get('/singlepost/{id}','BlogController@getpost_by_id');
Route::get('/categories','BlogController@get_all_category');
Route::get('/categorypost/{id}','BlogController@get_all_post_by_cat_id');
Route::get('/search','BlogController@search_post');
Route::get('/latestpost','BlogController@latest_post');


/*start frony end router*/
Route::get('/home', 'ItineraryresourcesController@index')->name('home');
Route::post('/location', 'ItineraryresourcesController@getLocation')->name('location');

Route::get('/', function () { return view('front.home'); });
Route::get('/ourstory', 'ItineraryresourcesController@ourStories')->name('ourstory');
Route::get('/how-we-work', 'ItineraryresourcesController@howWework')->name('how-we-work');
Route::get('/travel-and-education', 'ItineraryresourcesController@travelEducation')->name('travel-and-education');
Route::get('/safety-and-security', 'ItineraryresourcesController@safetySecurity')->name('safety-and-security');
Route::get('/faq', 'ItineraryresourcesController@faq')->name('faq');
Route::get('/contact-us', 'ContactMassageController@contact')->name('contact-us');
Route::post('/contact-us/send', 'ContactMassageController@store')->name('contact.store');
Route::get('/join-our-team', 'JoinourteamController@joinTeam')->name('join-our-team');
Route::post('/join-our-team/send', 'JoinourteamController@resumeSend')->name('resume.send');
Route::get('/explore-destination', 'ExploredestinationController@expdestination')->name('explore-destination');

/*end front router*/
