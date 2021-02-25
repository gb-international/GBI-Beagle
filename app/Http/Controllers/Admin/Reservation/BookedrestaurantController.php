<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Bookedrestaurant 

*/

namespace App\Http\Controllers\Admin\Reservation;

use App\Model\Reservation\Bookedrestaurant;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BookedrestaurantController extends Controller
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
            'date_of_arrival'=>'required',
            'restaurant_id' => 'required' 
        ]);
        $check = Bookedrestaurant::where([
            'tour_code' => $request->tour_code, 
            'restaurant_id' => $request->restaurant_id
            ])->get();
        if(count($check->all()) > 0){
            return '1';
        }else{
            Bookedrestaurant::create($request->all());
            return response()->json('Successfully Created');            
        }
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
    public function destroy(Bookedrestaurant $Bookedrestaurant)
    {
        $Bookedrestaurant->delete();
        return response()->json('Deleted');
    }
}
