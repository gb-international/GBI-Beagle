<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Booked flight 

*/

namespace App\Http\Controllers\Admin\Reservation;

use App\Model\Reservation\Bookedflight;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BookedflightController extends Controller
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
            'flight_id'=>'required',
            'price'=>'required',
            'flight_number'=>'required',
            'source'=>'required',
            'destination' => 'required' ,
            'departure' => 'required',
            'arrival' => 'required' 
        ]);

        $check = Bookedflight::where(['tour_code' => $request->tour_code, 'flight_id' => $request->flight_id])->get();
        if(count($check->all()) > 0){
            return '1';
        }else{
            Bookedflight::create($request->all());
            return response()->json('Successfully Created');            
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
        $bookedflight->delete();
        return response()->json('Deleted');
    }
}
