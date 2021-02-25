<?php

namespace App\Http\Controllers\Escort;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Escort\Escort;
use App\Model\Reservation\Bookedescort;
use App\Model\Reservation\Bookedsightseeing;
use App\Model\Reservation\Bookedhotel;
use App\Model\Reservation\Bookedflight;
use App\Model\Reservation\Bookedbus;
use App\Model\Reservation\Bookedtrain;
use App\Model\Reservation\Bookedrestaurant;
use App\Model\Reservation\PnrUser;
use App\Model\Restaurant\Restaurant;
use App\Model\Tour\Tour;
use App\Model\Tour\TourUser;
use App\Model\Tour\Food;

class TourController extends Controller 
{
    public function tourList($id){

        $data = Bookedescort::select('tour_code','tour_id')->where('escort_id',$id)
            ->with([
                'tour:id,tour_start_date,tour_end_date,itinerary_id',
                'tour.itinerary:id,title'
            ])->get();
        return response()->json($data);
    }

    public function sightseeingList($tour_code){
        $data = Bookedsightseeing::select('sightseeing_id','id','itineraryday_id','mark_arrive')
            ->where('tour_code',$tour_code)
            ->with('sightseeing:id,name')
            ->get()
            ->groupBy('itineraryday_id');
        return response()->json($data);
    }
    
    public function sightseeingStore(Request $request ,$tour_code){
        $data = []; // Add sightseeings in a single array
        foreach ($request->all() as $itineraryday ) {
            foreach ($itineraryday as $sightseeing ) {
                array_push($data, $sightseeing);
            }
        }
        // update mark_arrive 
        foreach ($data as $row ) {
            $sightseeing = Bookedsightseeing::where('id',$row['id'])->first();
            $sightseeing->mark_arrive = $row['mark_arrive'];
            $sightseeing->save();  
        }

        return response()->json('Successfully Created');                
    }

    public function itineraryTitle($tour_code){
        $data = Tour::select('id','itinerary_id')
            ->where('tour_id',$tour_code)
            ->with('itinerary:id,title')
            ->first();
        return response()->json($data);
    }
    
    public function packs($tour_code){
        $data = Food::select('id','name','quantity')
            ->where('tour_code',$tour_code)
            ->get();
        return response()->json($data);
    }
    
    public function hotels($tour_code){
        $data = Bookedhotel::select('hotel_id','id','tour_code','check_in','check_out')
            ->where('tour_code',$tour_code)
            ->with('hotel:id,name,phoneno')
            ->get();

            return response()->json($data);
    }
    
    public function flights($tour_code){

       return  $data = Bookedflight::select('id','flight_id','tour_code','departure','arrival','flight_number')
        ->where('tour_code',$tour_code)
            ->with('flight:id,name')
            ->withCount('pnruser')
            ->get();
        return response()->json($data);
    }
    
    public function buses($tour_code){
        $data = Bookedbus::select('id','bus_id','tour_code','departure','source','destination')
            ->where('tour_code',$tour_code)
            ->with('bus:id,company_name')
            ->get();
            
            return response()->json($data);
    }
    
    public function trains($tour_code){
        $data = Bookedtrain::select('id','train_id','tour_code','departure','source','destination','arrival')
        ->where('tour_code',$tour_code)
        ->with('train:id,name,code')
        ->get();
        
        return response()->json($data);
    }

    public function restaurants($tour_code){
        $data = Bookedrestaurant::select('id','tour_code','restaurant_id')
            ->where('tour_code',$tour_code)
            ->with('restaurant:id,name,address')
            ->get();
        return response()->json($data);
    }

    
    public function pax($tour_code){
        // select travel_code from tour table 
        $tour = Tour::where('tour_id',$tour_code)->select('travel_code')->first();
        // select user who are going on tour
        $data = TourUser::select('id','user_id')
                ->where('travel_code',$tour->travel_code)
                ->with('user:id','user.information:user_id,gender')
                ->get();
        $male = 0;$female = 0;
        // count male and female from data
        foreach ($data as $d ) {
            if($d->user->information->gender == 'male'){
                $male += 1;
            }
            if($d->user->information->gender == 'female'){
                $female += 1;
            }
        };
        // return male and female
        $response['male'] = $male;
        $response['female'] = $female;
        return response()->json($response);
    } 
        
}
