<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Front\Itinerary\ItinerarySightseeingRequest as ItiSightseeingRequest;
use App\Model\Itinerary\ItinerarySightseeingRequest;
class ItinerarySightseeingController extends BaseController
{
    public function itinerary_sightseeing_request(ItiSightseeingRequest $request){
        try{
            $user_type = $this->user_category($request->user_type??'');
            $edu_institutes = Auth::guard($user_type)->user();
            $itinerarySightseeingRequest = new ItinerarySightseeingRequest();
            $itinerarySightseeingRequest->edu_institute_id = $edu_institutes->id??0;
            $itinerarySightseeingRequest->sightseeing_id = $request->sightseeing_id??'';
            $itinerarySightseeingRequest->itineraryday_id = $request->itineraryday_id??0;
            $itinerarySightseeingRequest->itinerary_id = $request->itinerary_id??0;
            $itinerarySightseeingRequest->save();
            return response()->json("Successful created");
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}