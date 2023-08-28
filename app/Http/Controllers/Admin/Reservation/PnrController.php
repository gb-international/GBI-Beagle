<?php

namespace App\Http\Controllers\Admin\Reservation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Reservation\Pnr;

use App\Http\Requests\Admin\Reservation\PnrRequest;
use App\Http\Controllers\Admin\BaseController;
class PnrController extends BaseController
{
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
    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PnrRequest $request)
    {
        try{
            $transport_type = $request->transport_type??'';
            $tour_code = $request->tour_code??''; 
            $data = $request->data??''; 
            foreach ($data as $val ) {
                if(!empty($val)){
                    $transport_id = '';
                    $pnr_number = '';
                    if($transport_type == "bus"){
                        $transport_id = $val['transport_bus_id']??'';
                        $pnr_number = $val['pnr_bus_number']??'';
                    }
                    else if($transport_type == "flight"){
                        $transport_id = $val['transport_flight_id']??'';
                        $pnr_number = $val['pnr_flight_number']??'';
                    }
                    else{
                        $transport_id = $val['transport_train_id']??'';
                        $pnr_number = $val['pnr_train_number']??'';
                    }
                    
                    // [{transport_id: 8, pnr_number: "123456"},…]
                    $result = Pnr::updateOrCreate(['transport_type'=>$transport_type, 'tour_code'=>$tour_code, 'transport_id'=>$transport_id, 'pnr_number'=>$pnr_number],['transport_type'=>$transport_type, 'tour_code'=>$tour_code, 'transport_id'=>$transport_id, 'pnr_number'=>$pnr_number]);
                }
            }
            return $this->sendResponse('','Successfully Created');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        // Pnr::insert($request->all());
        // return response()->json('success');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pnr  $Pnr
     * @return \Illuminate\Http\Response
     */
    public function show($tour_code)
    {
        $pnr = Pnr::where('tour_code',$tour_code)
            ->orderBy('transport_type')
            ->get();
        $train = [];
        $flight = [];
        $bus = [];
        foreach ($pnr as $row) {
            if($row['transport_type'] == 'train'){
                array_push($train,$row);
            }
            else if($row['transport_type'] == 'bus'){
                array_push($bus,$row);
            }
            else{
                array_push($flight,$row);
            }
        }
        return response()->json(
            [
            'trains'=>$train,'flights'=>$flight,'buses'=>$bus
            ]
        );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pnr  $Pnr
     * @return \Illuminate\Http\Response
     */
    public function edit(Pnr $pnr)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bookedbus  $bookedbus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pnr $pnr)
    {
        $this->validate($request,[
            'pnr_number'=>'required'
        ]);
        $pnr->pnr_number = $request->pnr_number;
        $pnr->save();
        return response()->json(['success'=>'successfully added']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pnr  $Pnr
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pnr $pnr)
    {
        $pnr->delete();
        return response()->json('Deleted');
    }

    public function getData(Request $request){
        $pnr = Pnr::where([
            'transport_id'=> $request->transport_id,
            'transport_type' => $request->transport_type,
            'tour_code' => $request->tour_code
        ])->get();
        return $pnr;
    }
}