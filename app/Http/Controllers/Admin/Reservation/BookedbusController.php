<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Bookedbus

*/
namespace App\Http\Controllers\Admin\Reservation;

use App\Model\Reservation\Bookedbus;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Reservation\BusesRequest;
use App\Http\Controllers\Admin\BaseController;

class BookedbusController extends BaseController
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
    public function store(BusesRequest $request)
    {
        //  $this->validate($request,[
        //     'bus_id'=>'required',
        //     'price'=>'required',
        //     'source'=>'required',
        //     'destination' => 'required' ,
        //     'departure' => 'required',
        //     'arrival' => 'required' 
        // ]);

        // $check = Bookedbus::where(['tour_code' => $request->tour_code, 'bus_id' => $request->bus_id])->get();
        // if(count($check->all()) > 0){
        //     return '1';
        // }else{
        //     Bookedbus::create($request->all());
        //     return response()->json('Successfully Created');            
        // }
        try{
            $tour_id = $request->tour_id??0;
            $tour_code = $request->tour_code??'';
            $bus_id = $request->bus_id??0;
            $source = $request->source??'';
            $destination = $request->destination??'';
            $departure = $request->departure??'';
            $arrival = $request->arrival??'';
            $price = $request->price??0;
            $result = Bookedbus::updateOrCreate(['tour_id'=>$tour_id, 'tour_code'=>$tour_code, 'bus_id'=>$bus_id, 'source'=>$source, 'destination'=>$destination, 'departure'=>$departure, 'arrival'=>$arrival, 'price'=>$price],['tour_id'=>$tour_id, 'tour_code'=>$tour_code]);
            return response()->json('Successfully Created');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bookedbus  $bookedbus
     * @return \Illuminate\Http\Response
     */
    public function show(Bookedbus $bookedbus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bookedbus  $bookedbus
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $bookedbus = Bookedbus::where('id',$id)->with('bus')->first();
        return $bookedbus;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bookedbus  $bookedbus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bookedbus $bookedbus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bookedbus  $bookedbus
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bookedbus $bookedbus)
    {
        $bookedbus->delete();
        return response()->json('Deleted');
    }
}
