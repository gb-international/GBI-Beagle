<?php

namespace App\Http\Controllers\Admin\Tour;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use App\Model\Reservation\PnrUser;
class TouruserController extends Controller
{
    public function touruserList(Request $request){
        $code = Tour::select('travel_code')->where('tour_id',$request->tour_id)->first();

        $data = TourUser::where('travel_code',$code->travel_code)->with('user')->get();
        return response()->json($data);
    }

    public function addPnrUser(Request $request){
        $validator = Validator::make($request->all(), [ 
            "details" => "required|array",
            "details.*.edu_institute_id"=>"required|exists:edu_institutes,id",
            "details.*.pnr_id" => "required|exists:pnrs,id",
            "details.*.tour_id" =>"required|exists:tours,tour_id",
            "details.*.transport_id"=> "required",
            "details.*.transport_type"=> "required|in:bus,train,flight"
        ]);
    
        if ($validator->fails()) {
            return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
        }
        // return $request->details;
        if($request->details){
            foreach ($request->details as $row) {
                PnrUser::create($row);
            }
        }
        return response()->json(['success',true]);
    }

    public function PnrUserGet(Request $request){
        $validator = Validator::make($request->all(), [ 
            "tour_code" =>"required|exists:tours,tour_id",
            "transport_id"=> "required",
            "transport_type"=> "required|in:bus,train,flight"
        ]);
    
        if ($validator->fails()) {
            return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
        }

        $pnr = PnrUser::where([
            'transport_id'=> $request->transport_id,
            'transport_type' => $request->transport_type,
            'tour_id' => $request->tour_code
        ])->with(['user','pnr', 'edu_institute'])
        ->get()
        ->map->format();
        return $pnr;
    }

    public function update(Request $request){
        $data = PnrUser::where('id',$request->id)->first();
        $data->pnr_id = $request->pnr_id;
        $data->update();
        return response()->json(['success'=>true]);
    }
}
