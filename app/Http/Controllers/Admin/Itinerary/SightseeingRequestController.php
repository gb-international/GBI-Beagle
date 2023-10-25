<?php

namespace App\Http\Controllers\Admin\Itinerary;

use App\Http\Controllers\Admin\BaseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Itinerary\ItinerarySightseeingRequest;

class SightseeingRequestController extends BaseController
{
    public function all($size=0){
        if (!$size) {
            $size = 10;
        }
        return response()->json(ItinerarySightseeingRequest::select('id', 'edu_institute_id', 'itinerary_id', 'itineraryday_id', 'sightseeing_id', 'status')->with(
            ['itinerary' => function ($query) {
            $query->select('id', 'title');
        }])->with(
        ['itinerarydays' => function ($query) {
            $query->select('id', 'day');
        }])->with(['edu_institute' => function ($query) {
            $query->select('id', 'name');
        }])->orderBy('iti_sightseeing_requests.id', 'DESC')
        ->paginate($size));
    }
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $data = ItinerarySightseeingRequest::where('id', $id)->select('id', 'edu_institute_id', 'itinerary_id', 'itineraryday_id', 'sightseeing_id', 'status')->with(
                ['itinerary' => function ($query) {
                $query->select('id', 'title');
            }])->with(
            ['itinerarydays' => function ($query) {
                $query->select('id', 'day');
            }])->with(['edu_institute' => function ($query) {
                $query->select('id', 'name');
            }])->first();
            if(empty($data)){
                return $this->sendError("data does not found", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try{
            $data = ItinerarySightseeingRequest::where('id', $id)->select('id', 'edu_institute_id', 'itinerary_id', 'itineraryday_id', 'sightseeing_id', 'status')->with(
                ['itinerary' => function ($query) {
                $query->select('id', 'title');
            }])->with(
            ['itinerarydays' => function ($query) {
                $query->select('id', 'day');
            }])->with(['edu_institute' => function ($query) {
                $query->select('id', 'name');
            }])->first();
            if(empty($data)){
                return $this->sendError("data does not found", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            $data = ItinerarySightseeingRequest::where('id', $id)->first();
            if(empty($data)){
                return $this->sendError("data does not found", 404);
            }
            
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $data = ItinerarySightseeingRequest::where('id',$id)->first();
            if(!empty($data)){
                $data->delete();
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('Successfully deleted');
    }
}
