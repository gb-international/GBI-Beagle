<?php
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Itinerary\Itinerary;
use App\Model\Encyclopedia\Encyclopedia;
use App\Model\Tour\Tourprogram;
use App\Rules\EmailValidate;
use App\Model\Tour\Tour;
use App\Model\Event\Event;
use App\Model\Itinerary\Popular;
use App\Model\Season\Season;
use App\Model\DefaultSet\DefaultSet;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Front\ItineraryrequestRequest;
use App\Http\Requests\Front\ItinerarySearchRequest;
use App\Model\Itinerary\Itineraryrequest;

use DB;
use Carbon\Carbon;
use GoogleMaps as Map;
use App\Jobs\SendItineraryRequestToGbiMailJob;
class ItineraryController extends BaseController
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

    public function searchItinerary(ItinerarySearchRequest $request)
    {
        try{
            $data = [];
            $source = $request->source??'';
            $transport_type = $request->transport_type??'';
            $destination = $request->destination??'';
            $tourtype = $request->tourtype??'';
            $noofday = $request->noofday??0;
            $client_type = $request->client_type??'';
            $bus = $request->bus??0;
            $train = $request->train??0;
            $flight = $request->flight??0;
            if(count($source) > 1){
            // Search on the basis of source of the itinerary
                $data = Itinerary::where($transport_type,1)->whereIn('source',$source)->whereIn('destination',$destination)->where('client_type', $client_type)->orWhereHas('tourtypes',  function ($q) use ($tourtype) {
                        $q->where('id',$tourtype);
                    })->with('tourtypes')->get();
            }
            else{
                // echo $transport_type;
                // exit;
                $source = implode(",",array_filter($request->source??''));
                $destination = implode(",",array_filter($request->destination??''));

                $data = Itinerary::where([
                    'source'=>$source,
                    'destination'=>$destination,
                    $transport_type=>1,
                    'client_type'=> $client_type
                ])->orWhereHas('tourtypes',  function ($q) use ($tourtype) {
                    $q->where('id' ,$tourtype);
                })->with('tourtypes')->get();
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        if($data->count() > 0){
            return $this->sendResponse($data,'success');
        }
        else{
            return $this->sendError("Oops! We couldn’t find results for your search", 404);
        }
    }


    public function travelProgram($slug){
        $tour = Tourprogram::with('itinerary')->where('slug',$slug)->first();
        $tour_data = [];
        if($tour){
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
                $data['price'] = $itinerary->price;
                array_push($tour_data,$data);
            }
        }
        return response()->json($tour_data);
    }

    public function upcomingEvents(){
        $today = (Carbon::now())->toDateTimeString();
        $tours = Tour::where('tour_start_date', '>', $today)->get();
        $events = Event::where('date', '>', $today)->get();
        $tour_data = [];
        foreach($events as $evt){
            $itinerary = Itinerary::where('id', $evt->itinerary_id)->first();
            $data = [];
            $data['id'] = $itinerary->id;
            $data['title'] = $evt->name;
            $data['noofdays'] = $itinerary->noofdays;
            $data['hotel_type'] = $itinerary->hotel_type;
            $data['train'] = $itinerary->train;
            $data['bus'] = $itinerary->bus;
            $data['flight'] = $itinerary->flight;
            $data['food'] = $itinerary->food;
            $data['photo'] = $evt->photo;
            $data['price'] = $itinerary->price;
            array_push($tour_data, $data);
        }
        foreach($tours as $tour){
            $itinerary = $tour->itinerary;
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
            $data['price'] = $itinerary->price;
            array_push($tour_data, $data);
        }
        return response()->json($tour_data);
    }

    public function popularTours(){
        $today = (Carbon::now())->toDateTimeString();
        $cSeason = DefaultSet::where('id', '1')
        ->first();
        $season = Season::where('name', $cSeason->current)->first();
        $popular = Popular::where('season_id', $season->id)->get();
        $itineraries = Itinerary::where('count', '>', 10)->orderBy('count')->get();
        $tour_data = [];
        foreach($popular as $plr){
            $itinerary = Itinerary::where('id', $plr->itinerary_id)->first();
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
            $data['price'] = $itinerary->price;
            array_push($tour_data, $data);
        }
        foreach($itineraries as $itinerary){
            $seasonsIt = $itinerary->seasons->toArray();
            if(in_array($season, $seasonsIt)){
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
                $data['price'] = $itinerary->price;
                array_push($tour_data, $data);
            }
        }
        return response()->json($tour_data);
    }
    
    public function list($count=6)
    {
        return response()->json(Itinerary::simplePaginate($count));
    }

    public function requestItinerary(ItineraryrequestRequest $request){
        // $validated = $this->validate($request, [
        //     'tourtype' => 'required',
        //     'noofday' => 'required',
        //     'source' => 'required',
        //     'destination' => 'required',
        //     'phoneno' => 'required',
        //     'email' => ['required',new EmailValidate],
        // ]);
        try{
            $data = array();
            $data['source'] = $request->source??'';
            $data['destination'] = $request->source??'';
            $data['tourtype'] = $request->tourtype??'';
            $data['noofday'] = $request->noofday??'';
            $data['phoneno'] = $request->phoneno??'';
            $data['email'] = $request->email??'';
            $result = Itineraryrequest::create($data);
            SendItineraryRequestToGbiMailJob::dispatch($data);
            return $this->sendResponse($result,'success');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function view($id){
        $data = Itinerary::where('id',$id)->with([
            'tourtypes',
            'itinerarydays',
            'itineraryimages'
        ])->first();
       
        $data->count += 1;
        /*$mapData = \GoogleMaps::load('nearbysearch')           
        ->setParam([
            //'location'  => $data->destination,
            'radius'    => '500',
            'name'      => $data->destination,
            'type'      => 'airport'
        ])
        ->getResponseByKey('rows.elements');

        $data->mapData = $mapData;*/
        
        $data->save();
        if($data->itinerarydays){
            $iTcities = array();
            $itDays = $data->itinerarydays;
            $iTencyclopedia = array();
            foreach($itDays as $iday){
                array_push($iTcities, $iday->day_source);
                array_push($iTcities, $iday->day_destination);
            }
            $iTcities = array_unique($iTcities);
            foreach($iTcities as $iCity){
                $encyData = Encyclopedia::where('city_name',$iCity)->first();
                if($encyData){
                    array_push($iTencyclopedia, $encyData);
                }
                
            }
        }
        //$data->iTcities = $iTcities
        $data->Ency = $iTencyclopedia;
        return response()->json($data);
    }
}
