<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Bookedsightseeing 

*/

namespace App\Http\Controllers\Admin\Reservation;

use App\Model\Reservation\Bookedsightseeing;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Reservation\SightseeingsRequest;
use App\Http\Controllers\Admin\BaseController;

class BookedsightseeingController extends BaseController
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
    public function store(SightseeingsRequest $request)
    {
        try{
            $data = [];
            foreach ($request->all() as $itineraryday ) {
                if(!empty($sightseeing_id)){
                    foreach ($itineraryday as $sightseeing ) {
                        if(!empty($sightseeing)){
                            foreach ($sightseeing as $val ) {
                        
                                if($val['sightseeing_id'] != null){
                                    $tour_id = $val['sightseeing_id']??'';
                                    $tour_code = $val['tour_code']??'';
                                    $itineraryday_id = $val['itineraryday_id']??'';
                                    $sightseeing_id = $val['sightseeing_id']??''; 
                                    // array_push($data, $sightseeing);
                                    $result = Bookedsightseeing::updateOrCreate(['tour_id'=>$tour_id, 'tour_code'=>$tour_code, 'itineraryday_id'=>$itineraryday_id, 'sightseeing_id'=>$sightseeing_id],['tour_id'=>$tour_id, 'tour_code'=>$tour_code, 'sightseeing_id'=>$sightseeing_id]);
                                }
                            }
                        } 
                    }
                }
            }
            return $this->sendResponse('','Successfully Created', 201);
            // if(count($data)> 0){
            //     $check = Bookedsightseeing::where([
            //         'tour_code' => $data[0]['tour_code'], 
            //         ])->get();
            //     if(count($check->all()) > 0){
            //         return '1';
            //     }else{
            //         foreach ($data as $row ) {
            //             Bookedsightseeing::create($row);                
            //         }
            //         return response()->json('Successfully created');            
            //     }
            // }else{
            //     return '2';
            // }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
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
    public function destroy($tour_id)
    {
        try{
            if(Bookedsightseeing::where('tour_id',$tour_id)->count() > 0){
                Bookedsightseeing::where('tour_id',$tour_id)->delete();
                return $this->sendResponse('','Successfully deleted');
            }
            else{
                return $this->sendError("Data not found", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
