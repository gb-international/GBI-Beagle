<?php

namespace App\Http\Controllers\Admin\Itinerary;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Itinerary\UpcomingTours;
use App\Http\Requests\Admin\Itineraries\UpcomingToursRequest;
use App\Http\Controllers\Admin\BaseController;
class UpcomingToursController extends BaseController
{
    public function all($size)
    {
        try{
            $result = UpcomingTours::orderBy('ranking', 'DESC')->paginate($size);
            return $this->sendResponse($result,'Successful',201);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
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
    public function store(UpcomingToursRequest $request)
    {
        try{
            $itinerary_id = $request->itinerary_id??0;
            $season_id = $request->season_id??0;
            $start_date = $request->start_date??0;
            $end_date = $request->end_date??0;
            $ranking = $request->ranking??0;
            $result = UpcomingTours::updateOrCreate(
                ['itineraries_id'=>$itinerary_id, 'season_id'=>$season_id],
                ['itineraries_id'=>$itinerary_id, 'season_id'=>$season_id, 'start_date'=>$start_date, 'end_date'=>$end_date, 'ranking'=>$ranking]);
                return $this->sendResponse($result,'Successfully Created',201);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return $this->sendResponse(UpcomingTours::where('id', $id)->first(),'success',200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpcomingToursRequest $request, $id)
    {
        try{
            $upcoming_tours = UpcomingTours::where('id', $id)->first();
            if($upcoming_tours){
                $upcoming_tours->itineraries_id = $request->itinerary_id??0;
                $upcoming_tours->season_id = $request->season_id??0;
                $upcoming_tours->start_date = $request->start_date??0;
                $upcoming_tours->end_date = $request->end_date??0;
                $upcoming_tours->ranking = $request->ranking??0;
                $result = $upcoming_tours->save();
                return $this->sendResponse($upcoming_tours,'Successfully updated',200);
            }
            else{
                return $this->sendError("Record doesn't exist;", 404);  
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
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
            $upcoming_tours = UpcomingTours::where('id', $id)->first();
            if($upcoming_tours){
                $upcoming_tours->delete();
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
