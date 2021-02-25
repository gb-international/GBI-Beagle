<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Frontbooking;
use App\Model\Tour\CityFrontbooking;
use App\Model\Tour\FrontbookingSightseeing;
use Auth;
use App\Jobs\FrontBookingAdminJob;
use App\Jobs\FrontBookingUserJob;
use App\Helpers\SendSms;

class FrontbookingController extends Controller
{
    public function booking(Request $request){
        $user = Auth::user();
        $validate = $this->validateBooking($request);
        $citylist = '';
        $transport = '';
        $sightseen = '';

        if($request->city_id != null){
            foreach ($request->city_id as $city) {
                $citylist  .= $city['name'].', ';
            }
        }
        if($request->transport != null){
            foreach ($request->transport as $mode) {
                $transport .= $mode.', ';
            }
        }

        if($request->sightseen != null){
            foreach ($request->sightseen as $sight) {
                $sightseen .= $sight['name'].', ';
            }
        }

        $validate['user_id'] = $user->id;
        $validate['noofday'] = $request->noofday;
        $validate['accomodation'] = $request->accommodation;
        $validate['itinerary_id'] = $request->itinerary_id;
        $validate['city'] = substr($citylist, 0, -2);
        $validate['transport'] = substr($transport, 0, -2);
        $validate['sightseen'] = substr($sightseen, 0, -2);
        $booking =  Frontbooking::create($validate);

        $this->sendAdminMail($user,$booking);
        $this->sendUserMail($user,$booking);

        $sendsms = new SendSms;
        $sendsms->frontBookingUserSms($user,$booking->itinerary->title);
        return response()->json('Booking query has sent Successfully');        
    }

    // sending email to admin

    public function sendAdminMail($user,$booking){
        $data = array(
                'email'=>$user->email,
                'name'=>$user->name,
                'mobile'=>$user->information->phone_no,
                'noofday'=>$booking->noofday,
                'accomodation'=>$booking->accomodation,
                'start_date'=>$booking->start_date,
                'end_date'=>$booking->end_date,
                'person'=>$booking->person,
                'room'=>$booking->room,
                'itinerary'=>$booking->itinerary->title,
                'city'=>$booking->city,
                'transport'=>$booking->transport,
                'sightseen'=>$booking->sightseen,
                'emailto'=>'ajay_yadav@gbinternational.in'
            );
        FrontBookingAdminJob::dispatch($data);
    }

    
    public function sendUserMail($user,$booking){
        $data = array(
                'noofday'=>$booking->noofday,
                'accomodation'=>$booking->accomodation,
                'start_date'=>$booking->start_date,
                'end_date'=>$booking->end_date,
                'person'=>$booking->person,
                'room'=>$booking->room,
                'itinerary'=>$booking->itinerary->title,
                'city'=>$booking->city,
                'transport'=>$booking->transport,
                'sightseen'=>$booking->sightseen,
                'emailto'=>$user->email
            );
        FrontBookingUserJob::dispatch($data);
    }



    public function validateBooking($request)
    {
      return $this->validate($request, [
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'person' => 'required',
            'room' => 'required',
            'occupancy_type' => 'required'
      ]);
    }
}
