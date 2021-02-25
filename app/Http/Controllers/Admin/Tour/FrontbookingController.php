<?php

namespace App\Http\Controllers\Admin\Tour;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Frontbooking;
use Auth;

class FrontbookingController extends Controller
{

    public function all($size)
    {
        return response()->json(Frontbooking::latest('updated_at')
            ->paginate($size));
    }

    public function show($id){
        return response()->json(Frontbooking::with(['itinerary','user'])->where('id',$id)->first());
    }

    public function status(Request $request){
        $booking = Frontbooking::where('id',$request->id)->first();
        $booking->status = ($request->status == true) ? 1:0;
        $booking->save();
        return response()->json('successfully udpate');
    }

    public function destroy(Request $request){
        $booking = Frontbooking::where('id',$request->id)->first();
        $booking->delete();
        return response()->json('successfully deleted');
    }
}
