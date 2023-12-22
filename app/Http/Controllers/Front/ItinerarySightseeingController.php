<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\ItinerarySightseeingRequest as ItiSightseeingRequest;
use App\Model\Itinerary\ItinerarySightseeingRequest;
class ItinerarySightseeingController extends BaseController
{
    public function itinerary_sightseeing_request($guard_name, ItiSightseeingRequest $request){
        try{
            $user = Auth::guard($guard_name."-api")->user();
            $itinerarySightseeingRequest = new ItinerarySightseeingRequest();
            if($guard_name == "school"){
                $itinerarySightseeingRequest->edu_institute_id = $user->id??null;
            }
            else if($guard_name == "company"){
                $itinerarySightseeingRequest->company_user_id = $user->id??null;
            }
            else if($guard_name == "family"){
                $itinerarySightseeingRequest->family_user_id = $user->id??null;
            }
        
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