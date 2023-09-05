<?php

namespace App\Http\Controllers\Admin\Tour;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Frontbooking;
use Auth;
use App\Http\Controllers\Admin\BaseController;

class FrontbookingController extends BaseController
{

    public function all($size)
    {
        $bookings = Frontbooking::latest('updated_at')->paginate($size);
        foreach ($bookings as $booking) {
            $booking->type = 'Individual';
            if($booking->person >= 10){
                $booking->type = 'Group';
            }
        }
        return response()->json($bookings);
    }

    public function show($id){
        return response()->json(Frontbooking::with(['itinerary','user'])->where('id',$id)->first());
    }

    public function status(Request $request){
        try{
            $booking = Frontbooking::where('id',$request->id)->first();
            $booking->status = ($request->status == true) ? 1:0;
            $booking->save();
            // return response()->json('successfully udpate');
            return $this->sendResponse($booking,'successfully udpate');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        
    }

    public function destroy(Request $request){
        try{
            $booking = Frontbooking::where('id',$request->id)->first();
            $booking->delete();
            return $this->sendResponse('','successfully deleted');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
