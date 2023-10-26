<?php

namespace App\Http\Controllers\Admin\Itinerary;

use App\Http\Controllers\Admin\BaseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Http\Requests\ItinerarySightseeingRequest as ItiSightseeingRequest;
use App\Model\Itinerary\ItinerarySightseeingRequest;
use App\Model\School\EducationInstitute as EduInstitute;
use App\Jobs\ItinerarySightseeingRequestJob;

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
    public function update(ItiSightseeingRequest $request, $id)
    {
        try{
            $data = ItinerarySightseeingRequest::where('id', $id)->first();
            if(empty($data)){
                return $this->sendError("data does not found", 404);
            }
            $data->sightseeing_id = $request->sightseeing_id??$data->sightseeing_id;
            $data->itineraryday_id = $request->itineraryday_id??0;
            $data->itinerary_id = $request->itinerary_id??0;
            $data->save();
            return response()->json(['Message'=> 'successfull']);
            
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
    public function statusUpdate(Request $request){
        try{
            $validator = Validator::make($request->all(), [ 
                'id'=>'required|exists:iti_sightseeing_requests,id',
                'status'=>'required|in:0,1,2',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
            }
            $data = ItinerarySightseeingRequest::where('id',$request->id)->first();
            $data->status = $request->status??0;
            $data->save();
            return response()->json(['Message'=> 'successfull']);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('Successfully updated');
    }

    public function sendConfirmationMail(Request $request){
        try{
            $validator = Validator::make($request->all(), [ 
                'id'=>'required|exists:iti_sightseeing_requests,id',
            ]);

            if ($validator->fails()) {
                return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
            }
            $data = ItinerarySightseeingRequest::where('id',$request->id)->first();
            $edu_institute_id = $data->edu_institute_id??0;
            $edu_institute = EduInstitute::where('id',$edu_institute_id)->first()->toArray();

            ItinerarySightseeingRequestJob::dispatchNow($edu_institute);

            return response()->json(['Message'=> 'successfull']);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('Successfully updated');
    }
}
