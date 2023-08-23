<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Booked hotel 

*/

namespace App\Http\Controllers\Admin\Reservation;

use App\Model\Reservation\Bookedhotel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\Reservation\HotelRequest;

class BookedhotelController extends BaseController
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
    public function store(HotelRequest $request)
    {
        try{
            $tour_id = $request->tour_id??0;
            $tour_code = $request->tour_code??'';
            $hotel_id = $request->hotel_id??0;
            $price = $request->price??0;
            $check_in = $request->check_in??'';
            $check_out = $request->check_out??'';
            $result = Bookedhotel::updateOrCreate(['tour_id'=>$tour_id, 'tour_code'=>$tour_code, 'escort_id'=>$escort_id, 'hotel_id'=>$hotel_id, 'check_in'=>$check_in, 'check_out'=>$check_out,'price'=>$price],['tour_id'=>$tour_id, 'tour_code'=>$tour_code]);
            return $this->sendResponse($result,'Successfully deleted');
        }
        catch(Exception $e){
            $this->sendError($e->getMessage(), 500);
        }
        // $check = Bookedhotel::where(['tour_code' => $request->tour_code, 'hotel_id' => $request->hotel_id])->get();
        // if(count($check->all()) > 0){
        //     return '1';
        // }else{
        //     Bookedhotel::create($request->all());
        //     return response()->json('Successfully Created');            
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bookedhotel  $bookedhotel
     * @return \Illuminate\Http\Response
     */
    public function show(Bookedhotel $bookedhotel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bookedhotel  $bookedhotel
     * @return \Illuminate\Http\Response
     */
    public function edit(Bookedhotel $bookedhotel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bookedhotel  $bookedhotel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bookedhotel $bookedhotel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bookedhotel  $bookedhotel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bookedhotel $bookedhotel)
    {
        try{
            $bookedhotel->delete();
            return $this->sendResponse('','Successfully deleted');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }        
    }
}
