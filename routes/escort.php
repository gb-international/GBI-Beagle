<?php
// Escort Routes

Route::namespace('Escort')->group(function(){

    Route::post('/login','LoginController@login');
    Route::post('/login-verify','LoginController@otp_verify');
    Route::get('/tour-list/{id}','TourController@tourList');
    Route::get('/sightseeing/{id}','TourController@sightseeingList');
    Route::post('/sightseeing/{id}','TourController@sightseeingStore');
    Route::get('/itinerary-title/{id}','TourController@itineraryTitle');
    Route::get('/packs/{id}','TourController@packs');
    Route::get('/hotels/{id}','TourController@hotels');
    Route::get('/flights/{id}','TourController@flights');
    Route::get('/buses/{id}','TourController@buses');
    Route::get('/trains/{id}','TourController@trains');
    Route::get('/restaurants/{id}','TourController@restaurants');
    Route::get('/pax/{id}','TourController@pax');
    Route::get('/pax/{id}','TourController@pax');
    Route::get('/pax/get/{id}','PaxController@index');
    Route::post('/pax/store','PaxController@store');


});