<?php
/* 
Created by : Manas 
Purpose : Manage Popular Itineraries
*/
namespace App\Http\Controllers\Admin\Itinerary;

use App\Model\Itinerary\Popular;
//use App\Traits\ImageTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Itineraries\PopularItinerariesRequest;
use App\Http\Controllers\Admin\BaseController;
use App\Model\Itinerary\Itinerary;

class PopularItineraryController extends BaseController
{
    public function all($size)
    {
        try{
            $currentTime = Carbon::now()->format('Y-m-d');
            $popular_itinerary_id = Popular::where('start_date', '<=', $currentTime)->groupby('itinerary_id')->distinct()->pluck('itinerary_id')->toArray();
            $popular_itinerary = Popular::where('start_date', '<=', $currentTime)->with('itinerary','season')->paginate($size);
            $itinerary = Itinerary::whereNotIn('id', $popular_itinerary_id)->orderBy('count', 'DESC')->paginate($size);
            $response = [
                'status' => true,
                'status_code' => 200,
                'itinerary' => $itinerary,
                'popular_itinerary' => $popular_itinerary,
            ];
            return response()->json($response, 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function index()
    {
        return response()->json(Popular::with(
            'itinerary',
            'season',
            )
            ->get()
        );
    }

    public function create()
    {
        //
    }
    
    public function store(PopularItinerariesRequest $request)
    {
        try{
            $itinerary_id = $request->itinerary_id??0;
            $season_id = $request->season_id??0;
            $start_date = $request->start_date??0;
            $end_date = $request->end_date??0;
            $result = Popular::updateOrCreate(['itinerary_id'=>$itinerary_id, 'season_id'=>$season_id],
            ['itinerary_id'=>$itinerary_id, 'season_id'=>$season_id, 'start_date'=>$start_date, 'end_date'=>$end_date]);
            return $this->sendResponse($result,'Successfully Created',201);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function show(Popular $popular)
    {
        //
    }

    public function edit($id)
    {
        return $this->sendResponse(Popular::where('id', $id)->first(),'success',200);
    }

    public function update(PopularItinerariesRequest $request, $id)
    {
        try{
            $popular = Popular::where('id', $id)->first();
            if($popular){
                $popular->itinerary_id = $request->itinerary_id??0;
                $popular->season_id = $request->season_id??0;
                $popular->start_date = $request->start_date??0;
                $popular->end_date = $request->end_date??0;
                $result = $popular->save();
                return $this->sendResponse($popular,'Successfully updated',200);
            }
            else{
                return $this->sendError("Record doesn't exist;", 404);  
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function destroy($id)
    {
        try{
            $popular = Popular::where('id', $id)->first();
            if($popular){
                $popular->delete();
                return $this->sendResponse('','Successfully deleted',200);
            }
            else{
                return $this->sendError("Record doesn't exist;", 404);  
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
