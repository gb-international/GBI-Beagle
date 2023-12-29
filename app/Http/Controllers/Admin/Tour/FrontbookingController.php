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
        $frontbooking = Frontbooking::where('id',$id)->first();
        $frontbooking->itinerary;
        $frontbooking->edu_institute;
        $frontbooking->user;
        $frontbooking->family_user;
        $frontbooking->company_user;
        return response()->json($frontbooking);
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
