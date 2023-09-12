<?php
namespace App\Http\Controllers\Escort;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Tour\Tour;
use App\Model\Tour\Pax;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Escort\Pax\PaxRequest;

class PaxController extends BaseController 
{
    public function index($tour_code){
        $pax = Pax::where('tour_code',$tour_code)->first();
        return response()->json($pax);
    }
    public function store(PaxRequest $request){
        $pax = Pax::updateOrCreate(
            ['tour_code'=>$request->tour_code,'escort_id'=>$request->escort_id],
            [
                'tour_code'=>$request->tour_code,
                'escort_id'=>$request->escort_id,
                'total_male'=>$request->total_male,
                'total_female'=>$request->total_female,'absent_male'=>$request->absent_male,'absent_female'=>$request->absent_female,
                'message'=>$request->message,
            ]);
        return response()->json($pax);
    }

}
