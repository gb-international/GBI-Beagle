<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Booked flight 

*/

namespace App\Http\Controllers\Admin\Reservation;

use App\Model\Reservation\Bookedflight;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\Reservation\FlightsRequest;

class BookedflightController extends BaseController
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
    public function store(FlightsRequest $request)
    {
        try{
            $tour_id = $request->tour_id??0;
            $tour_code = $request->tour_code??'';
            $flight_id = $request->flight_id??'';
            $source = $request->source??'';
            $destination = $request->destination??'';
            $flight_number = $request->flight_number??'';
            $departure = $request->departure??'';
            $arrival = $request->arrival??'';
            $price = $request->price??0;

            $result = Bookedflight::updateOrCreate(['tour_id'=>$tour_id, 'tour_code'=>$tour_code, 'flight_id'=>$flight_id, 'source'=>$source, 'destination'=>$destination,'price'=>$price, 'flight_number'=>$flight_number, 'departure'=>$departure, 'arrival'=>$arrival],['tour_id'=>$tour_id, 'tour_code'=>$tour_code]);
            return $this->sendResponse($result,'Successfully Created');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }   
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bookedflight  $bookedflight
     * @return \Illuminate\Http\Response
     */
    public function show(Bookedflight $bookedflight)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bookedflight  $bookedflight
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {   
        $bookedflight = Bookedflight::where('id',$id)->with('flight')->first();
        return $bookedflight;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bookedflight  $bookedflight
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bookedflight $bookedflight)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bookedflight  $bookedflight
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bookedflight $bookedflight)
    {
        try{
            $bookedflight->delete();
            return $this->sendResponse('','Successfully deleted');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        // $bookedflight->delete();
        // return response()->json('Deleted');
    }
}
