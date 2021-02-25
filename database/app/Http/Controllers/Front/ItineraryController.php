<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Itinerary 

*/
namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Itinerary\Itinerary;
use App\Model\Tour\Tourprogram;

use DB;

class ItineraryController extends Controller
{
    public function search_post(){

        $search = \Request::get('s');
        $data = [];
        if($search!=null){
            $data = DB::table('itineraries')
                ->where('source','LIKE',"%$search%")
                ->orWhere('destination','LIKE',"%$search%")
                ->get();
            return response()->json([
                'data'=>$data
            ],200);
        }else{
           return $data;
        }

    }

     // explore destination searchbar get data 

    public function searchItinerary(Request $request)
    {
        $this->validate($request, [
            'tourtype' => 'required',
            'noofday' => 'required'
        ]);
        
        $source = $request->source;
        $destination = $request->destination;
        $tourtype = $request->tourtype;
        $noofday = $request->noofday;
        if(count($source) > 1){ // Search on the basis of source of the itinerary
            $data = DB::table('itineraries')
                ->where('noofdays',$noofday)
                ->whereIn('source',$source)
                ->get();
            return response()->json([
                'data'=>$data
            ],200);
        }
       // return  $request->all();
        if($source !=null ){
            $data = DB::table('itineraries')
                ->where('noofdays',$noofday)
                ->whereIn('source',$source)
                ->OrWhereIn('destination',$destination)
                ->get();
            return response()->json([
                'data'=>$data
            ],200);
        }
    }


    public function travelProgram($slug){
        $tour = Tourprogram::with('itinerary')->where('slug',$slug)->first();
        $tour_data = [];
        foreach($tour->itinerary as $itinerary){
            $data = [];
            $data['id'] = $itinerary->id;
            $data['title'] = $itinerary->title;
            $data['noofdays'] = $itinerary->noofdays;
            $data['hotel_type'] = $itinerary->hotel_type;
            $data['train'] = $itinerary->train;
            $data['bus'] = $itinerary->bus;
            $data['flight'] = $itinerary->flight;
            $data['food'] = $itinerary->food;
            $data['photo'] = $itinerary->photo;
            array_push($tour_data,$data);
        }
        
        return response()->json($tour_data);
    }
    
    public function list($count=8)
    {
        return response()->json(Itinerary::simplePaginate($count));
    }
}
