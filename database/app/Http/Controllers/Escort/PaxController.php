<?php

namespace App\Http\Controllers\Escort;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Tour\Tour;
use App\Model\Tour\Pax;

class PaxController extends Controller 
{
    public function index($tour_code){
        $pax = Pax::where('tour_code',$tour_code)->first();
        return response()->json($pax);
    }
    public function store(Request $request){
        $pax = Pax::updateOrCreate(
            ['tour_code'=>$request->tour_code,'escort_id'=>$request->escort_id],
            [
                'tour_code'=>$request->tour_code,
                'total_male'=>$request->total_male,
                'total_female'=>$request->total_female,'absent_male'=>$request->absent_male,'absent_female'=>$request->absent_female,
                'message'=>$request->message,
            ]);
        return response()->json($pax);
    }

}
