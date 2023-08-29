<?php
/* 
Created by : Manas 
Purpose : Manage Popular Itineraries
*/
namespace App\Http\Controllers\Admin\Itinerary;

use App\Model\Itinerary\Popular;
//use App\Traits\ImageTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Itineraries\PopularItinerariesRequest;
use App\Http\Controllers\Admin\BaseController;

class PopularItineraryController extends BaseController
{
    public function all($size)
    {
        return response()->json(Popular::with(
            'itinerary',
            'season',
            )
            ->latest('updated_at')
            ->paginate($size));
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
            $popular = new Popular();
            // $popular = new Popular();
        // $data = array();
        $popular->itinerary_id = $request->itinerary_id??0;
        $popular->season_id = $request->season_id??0;
        $popular->start_date = $request->start_date??0;
        $popular->end_date = $request->end_date??0;
        $popular->save();
        return $this->sendResponse($popular,'Successfully Created');
        // return response()->json(['success'=>'Successfully added']);
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
        return response()->json(Popular::where('id', $id)->first()
        );
    }

    public function update(Request $request, $id)
    {
        $popular = Popular::find($id);
        $data = $this->validatePopular($request);

        $popular->update($data);
        return response()->json(['Message'=> 'successfull']);
    }

    public function destroy($id)
    {
        $popular = Popular::find($id);
        $popular->delete();
        return response()->json('successfully deleted');
    }

    public function validatePopular($request)
    {
        return $this->validate($request,[
            'season_id'=>'required',
            'itinerary_id'=>'required'
        ]);
    }
}
