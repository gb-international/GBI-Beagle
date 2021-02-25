<?php

/* 
Created by : Ajay yadav 
Purpose : Manage Booked train 

*/
namespace App\Http\Controllers\Admin\Reservation;

use App\Model\Reservation\Bookedtrain;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BookedtrainController extends Controller
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
    public function store(Request $request)
    {
        $this->validate($request,[
            'train_id'=>'required',
            'price'=>'required',
            'source'=>'required',
            'destination' => 'required' ,
            'departure' => 'required',
            'arrival' => 'required' 
        ]);

        $check = Bookedtrain::where(['tour_code' => $request->tour_code, 'train_id' => $request->train_id])->get();
        if(count($check->all()) > 0){
            return '1';
        }else{
            Bookedtrain::create($request->all());
            return response()->json('Successfully Created');            
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
