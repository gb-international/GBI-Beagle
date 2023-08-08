<?php

namespace App\Http\Controllers\Front;
use App\Model\Hotel\Hotel;
use App\Model\Hotel\HotelBooking;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;
use Auth;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class HotelController extends Controller{

    public function HotelSearch(Request $request)
    {

        $data = [];
        $location = $request->location;
        $destination = $request->destination;
        $roomtype = $request->roomtype;
        if(count($location) > 1){
            $data = DB::table('hotels')
                ->where('room_type',$room_type)
                ->whereIn('location',$location)
                ->get();
            return response()->json([
                'data'=>$data
            ],200);
        }
       // return  $request->all();
        if($source !=null ){
            $source = explode(",",$request->location[0])[0];
            $data = Hotel::where([
                'location'=>$location,
                // 'noofdays' => $noofday,
            ])
            ->get();
        }

        return response()->json($data);
    }

    public function HotelBooking(Request $request){
        $booking = new HotelBooking;

        $booking['customer_id'] = $request->user_id;
        $booking['room_category'] = $request->room_category;
        $booking['hotel_id'] = $request->hotel_id;
        $booking['meal_plan'] = $request->meal_plan;
        $booking['price'] = $request->price;
        $booking['occupancy_type'] = $request->room_type;
        //$booking['max_capacity'] = $request->max_capacity;
        $booking['person'] = $request->person;
        $booking['adults'] = $request->adults;
        $booking['children'] = $request->children;
        $booking['infants'] = $request->infants;
        $booking['check_in'] = $request->state_date;
        $booking['chceck_out'] = $request->end_date;
        $booking->save();

        //$this->sendAdminMail($user,$booking);
        //$this->sendUserMail($user,$booking);

        //$sendsms = new SendSms;
        //$sendsms->frontBookingUserSms($user,$booking->itinerary->title);
        return response()->json('Booking query has sent Successfully');        
    }

    // sending email to admin

    /*public function sendAdminMail($user,$booking){
        $data = array(
                'email'=>$user->email,
                'name'=>$user->name,
                'mobile'=>$user->information->phone_no,
                'noofday'=>$booking->noofday,
                'accomodation'=>$booking->accomodation,
                'start_date'=>$booking->start_date,
                'end_date'=>$booking->end_date,
                'person'=>$booking->person,
                'adults'=>$booking->adults,
                'children'=>$booking->children,
                'infants'=>$booking->infants,
                'room'=>$booking->room,
                'emailto'=>'manas_bhowmick@gbinternational.in'
            );
        FrontBookingAdminJob::dispatch($data);
    }*/

    public function HotelSearch(Request $request)
    {

        $data = Hotel::where('city', $request->location)
        ->where('category',$request->room_type)
        //->where('room', '>=', $request->rooms)
        ->get();

        return response()->json($data);
    }

    

}