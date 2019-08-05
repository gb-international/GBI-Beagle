<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Auth;
use Image;
use App\Itinerary;
use App\Itineraryday;

class ItineraryDayController extends Controller
{
    public function storeDayitinerary(Request $request, $id)
    {
    	return $request->all();

    	 /*	$itinerary = Itinerary::find($id);
    		
    	 	$input = Input::all();
			for ($idx = 0; $idx < count($request->input('itinerary_day')); $idx++)
	            {
	                $itineraryday = new Itineraryday;
	                $itineraryday->itinerary_id = $itinerary->id;
	                $itineraryday->daytitle = $input['daytitle'][$idx];
	                $itineraryday->daydescription = $input['daydescription'][$idx];
	                $itineraryday->user_id = Auth::user()->id;
	                $itineraryday->save();
	            }
	        
	     
	       return response()->json(['itineraryday' => $itineraryday], 200);*/
    }
}
