<?php

namespace App\Http\Controllers\Admin\Tour;

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
        foreach ($request->all() as $row) {
            PnrUser::create($row);
        }
        return response()->json(['success',true]);
    }

    public function PnrUserGet(Request $request){
        $pnr = PnrUser::where([
            'transport_id'=> $request->transport_id,
            'transport_type' => $request->transport_type,
            'tour_id' => $request->tour_code
        ])->with(['user','pnr'])
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
