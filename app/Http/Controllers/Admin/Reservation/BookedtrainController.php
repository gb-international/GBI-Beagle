<?php

/* 
Created by : Ajay yadav 
Purpose : Manage Booked train 

*/
namespace App\Http\Controllers\Admin\Reservation;

use App\Model\Reservation\Bookedtrain;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Reservation\TrainRequest;
use App\Http\Controllers\Admin\BaseController;

class BookedtrainController extends BaseController
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
    public function store(TrainRequest $request)
    {
        // $this->validate($request,[
        //     'train_id'=>'required',
        //     'price'=>'required',
        //     'source'=>'required',
        //     'destination' => 'required' ,
        //     'departure' => 'required',
        //     'arrival' => 'required' 
        // ]);

        // $check = Bookedtrain::where(['tour_code' => $request->tour_code, 'train_id' => $request->train_id])->get();
        // if(count($check->all()) > 0){
        //     return '1';
        // }else{
        //     Bookedtrain::create($request->all());
        // }
        try{
            $tour_id = $request->tour_id??0;
            $tour_code = $request->tour_code??'';
            $train_id = $request->train_id??0;
            $price = $request->price??0;
            $source = $request->source??0;
            $destination = $request->destination??0;
            $departure = $request->departure??0;
            $arrival = $request->arrival??0;
            $result = Bookedtrain::updateOrCreate(['tour_id'=>$tour_id, 'tour_code'=>$tour_code, 'train_id'=>$train_id, 'price'=>$price, 'source'=>$source, 'destination'=>$destination, 'departure'=>$departure, 'arrival'=>$arrival],['tour_id'=>$tour_id, 'tour_code'=>$tour_code]);
            return response()->json('Successfully Created');            
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bookedtrain  $bookedtrain
     * @return \Illuminate\Http\Response
     */
    public function show(Bookedtrain $bookedtrain)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bookedtrain  $bookedtrain
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $bookedtrain = Bookedtrain::where('id',$id)->with('train')->first();
        return $bookedtrain;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bookedtrain  $bookedtrain
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bookedtrain $bookedtrain)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bookedtrain  $bookedtrain
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bookedtrain $bookedtrain)
    {
        $bookedtrain->delete();
        return response()->json('Deleted');
    }
}
