<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Image;
use App\Itinerary;



class ItineraryController extends Controller
{


	//display all record
	public function allItinerary()
	{
		$itineraries = Itinerary::orderBy('id','desc')->get();
       	return response()->json([
           'itineraries'=>$itineraries ],200);




  //      	$itineraries = Itinerary::with('user')
		// ->where('user_id', '=', Auth::user()->id)
		// ->orderBy('id','desc')->get();
  //      	return response()->json([
  //          'itineraries'=>$itineraries ],200);

	}

	public function allDaysitinerary($id){
	        $itinerariesdays = Itinerary::find($id);
	        return response()->json([
	            'itinerariesdays'=>$itinerariesdays
	        ],200);
	        
    	}

	//add new itinerary
    public function storeItinerary(Request $request)
    {

    	/*return $request->all();*/
    	 $this->validate($request, [
            'source' => 'required|min:3|max:100',
            'destination' => 'required|min:3|max:100',
            'noofdays' => 'required|numeric|min:1|max:15',
            'title' => 'required|min:5|max:100',
            'description' => 'required',
            'tourtype' => 'required'

	        ]);
    	 
	    	$strpos = strpos($request->photo,';');
	        $sub = substr($request->photo,0,$strpos);
	        $ex = explode('/',$sub)[1];
	        $name = time().".".$ex;
	        $img = Image::make($request->photo)->resize(200, 200);
	        $upload_path = public_path()."/uploadimage/";
	        $img->save($upload_path.$name);
	        $itinerary = new Itinerary();
	        $itinerary->source = $request->source;
	        $itinerary->destination = $request->destination;
	        $itinerary->title = $request->title;
	        $itinerary->noofdays = $request->noofdays;
	        $itinerary->description = $request->description;
	        $itinerary->tourtype = $request->tourtype;
	        $itinerary->user_id = Auth::user()->id;
	        $itinerary->photo = $name;
	        $itinerary->save();
	     
	       return response()->json(['id' => $itinerary->id, 'days' => $itinerary->noofdays], 200);

    }

		//delete itinerary
		public function deleteItinerary($id){
	        $itinerary = Itinerary::find($id);
	        $image_path = public_path()."/uploadimage/";
	        $image = $image_path. $itinerary->image;
	        if(file_exists($image)){
	            @unlink($image);
	        }
	        $itinerary->delete();
    	}

    	//show detail with id
    	public function editItinerary($id){
	        $itinerary = Itinerary::find($id);
	        return response()->json([
	            'itinerary'=>$itinerary
	        ],200);
    	}

    	public function updateItinerary(Request $request, $id){
        $itinerary = Itinerary::find($id);
        $this->validate($request, [
            'source' => 'required|min:3|max:100',
            'destination' => 'required|min:3|max:100',
            'noofdays' => 'required|numeric|min:1|max:15',
            'title' => 'required|min:5|max:100',
            'description' => 'required',
            'tourtype' => 'required'
		]);


        if($request->photo!=$itinerary->photo){
            $strpos = strpos($request->photo,';');
            $sub = substr($request->photo,0,$strpos);
            $ex = explode('/',$sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->photo)->resize(200, 200);
            $upload_path = public_path()."/uploadimage/";
            $image = $upload_path. $itinerary->photo;
            $img->save($upload_path.$name);

            if(file_exists($image)){
                @unlink($image);
            }
        }else{
            $name = $itinerary->photo;
        }

        
     	$itinerary->source = $request->source;
	    $itinerary->destination = $request->destination;
	    $itinerary->title = $request->title;
	    $itinerary->noofdays = $request->noofdays;
	    $itinerary->description = $request->description;
	    $itinerary->tourtype = $request->tourtype;
	    $itinerary->user_id = Auth::user()->id;
	    $itinerary->photo = $name;
	    $itinerary->save();    
    }
}
