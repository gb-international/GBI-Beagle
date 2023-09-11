<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Bookedrestaurant 

*/

namespace App\Http\Controllers\Admin\Reservation;

use App\Model\Reservation\Bookedrestaurant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\Reservation\RestaurantsRequest;
class BookedrestaurantController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RestaurantsRequest $request)
    {
        // $this->validate($request,[
        //     'date_of_arrival'=>'required',
        //     'restaurant_id' => 'required' 
        // ]);
        
        try{
            $tour_id = $request->tour_id??0;
            $tour_code = $request->tour_code??'';
            $restaurant_id = $request->restaurant_id??0;
            $date_of_arrival = $request->date_of_arrival??'';

            $result = Bookedrestaurant::updateOrCreate(['tour_id'=>$tour_id, 'tour_code'=>$tour_code, 'restaurant_id'=>$restaurant_id, 'date_of_arrival'=>$date_of_arrival],['tour_id'=>$tour_id, 'tour_code'=>$tour_code]);
            return $this->sendResponse($result,'Successfully Created');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }


        // $check = Bookedrestaurant::where([
        //     ])->get();
        // if(count($check->all()) > 0){
        //     return '1';
        // }else{
        //     Bookedrestaurant::create($request->all());
        //     return response()->json('Successfully Created');            
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bookedrestaurant  $Bookedrestaurant
     * @return \Illuminate\Http\Response
     */
    public function show(Bookedrestaurant $Bookedrestaurant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bookedrestaurant  $Bookedrestaurant
     * @return \Illuminate\Http\Response
     */
    public function edit(Bookedrestaurant $Bookedrestaurant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bookedrestaurant  $Bookedrestaurant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bookedrestaurant $Bookedrestaurant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bookedrestaurant  $Bookedrestaurant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bookedrestaurant $bookedrestaurant)
    {
        try{
            $bookedrestaurant->delete();
            return $this->sendResponse('','Successfully deleted');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
