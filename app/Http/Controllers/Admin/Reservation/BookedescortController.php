<?php
// php artisan make:controller Reservation\BookedescortController --resource --model=Bookedescort
/* 
Created by : Ajay yadav 
Purpose : Manage Booked escort 

*/
namespace App\Http\Controllers\Admin\Reservation;
use App\Http\Resources\BookedescortCollection;
use App\Model\Reservation\Bookedescort;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\Reservation\EscortsRequest;
class BookedescortController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new BookedescortCollection(Bookedescort::with('tour')->get());
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
    public function store(EscortsRequest $request)
    {
        try{
            $escort_id = $request->escort_id??0;
            $tour_id = $request->tour_id??0;
            $tour_code = $request->tour_code??'';
            $result = Bookedescort::updateOrCreate(['tour_id'=>$tour_id, 'tour_code'=>$tour_code, 'escort_id'=>$escort_id],['tour_id'=>$tour_id, 'tour_code'=>$tour_code]);
            return $this->sendResponse($result,'Successfully Created');

        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        // $check = Bookedescort::where(['tour_code'=>$tour_code,'escort_id'=>$escort_id])->get();
        // if(count($check->all()) > 0){
        //     return '1';
        // }else{
        //     Bookedescort::create($request->all());
        //     return response()->json('Successfully Created');            
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Bookedescort  $bookedescort
     * @return \Illuminate\Http\Response
     */
    public function show(Bookedescort $bookedescort)
    {
        return Bookedescort::with(['tour','escort'])->where('tour_id',$id)->get(); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bookedescort  $bookedescort
     * @return \Illuminate\Http\Response
     */
    public function edit(Bookedescort $bookedescort)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bookedescort  $bookedescort
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bookedescort $bookedescort)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bookedescort  $bookedescort
     * @return \Illuminate\Http\Response
     */
     public function destroy(Bookedescort $bookedescort)
    {
        try{
            $bookedescort->delete();
            return $this->sendResponse('','Successfully deleted');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
