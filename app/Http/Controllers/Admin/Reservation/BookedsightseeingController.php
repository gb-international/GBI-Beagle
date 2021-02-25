<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Bookedsightseeing 

*/

namespace App\Http\Controllers\Admin\Reservation;

use App\Model\Reservation\Bookedsightseeing;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BookedsightseeingController extends Controller
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
        $data = [];
        foreach ($request->all() as $itineraryday ) {
            foreach ($itineraryday as $sightseeing ) {
                if($sightseeing['sightseeing_id'] != null){
                    array_push($data, $sightseeing);
                }
            }
        }
        if(count($data)> 0){
            $check = Bookedsightseeing::where([
                'tour_code' => $data[0]['tour_code'], 
                ])->get();
            if(count($check->all()) > 0){
                return '1';
            }else{
                foreach ($data as $row ) {
                    Bookedsightseeing::create($row);                
                }
                return response()->json('Successfully Created');            
            }
        }else{
            return '2';
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bookedsightseeing  $Bookedsightseeing
     * @return \Illuminate\Http\Response
     */
    public function show(Bookedsightseeing $Bookedsightseeing)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bookedsightseeing  $Bookedsightseeing
     * @return \Illuminate\Http\Response
     */
    public function edit(Bookedsightseeing $Bookedsightseeing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bookedsightseeing  $Bookedsightseeing
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bookedsightseeing $Bookedsightseeing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bookedsightseeing  $Bookedsightseeing
     * @return \Illuminate\Http\Response
     */
    public function destroy($tour_code)
    {
        
        Bookedsightseeing::where('tour_code',$tour_code)->delete();
        return response()->json('Deleted');
    }
}
