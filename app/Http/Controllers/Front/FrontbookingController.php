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
use App\Http\Requests\Front\FrontbookingRequest;
use App\Http\Controllers\Admin\BaseController;
use App\User;

class FrontbookingController extends BaseController
{
    public function booking(FrontbookingRequest $request){
        try{
            $user = Auth::user();
            $user = User::where('id',233)->first();
            // $validate = $this->validateBooking($request);
            $citylist = '';
            $transport = '';
            $sightseen = '';

            if($request->city_id != null){
                // $city = filter_array_keys($request->city_id, "name");
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

            $data = array();
            $data['start_date'] = $request->start_date??'';
            $data['end_date'] = $request->end_date??'';
            $data['person'] = $request->person??'';
            $data['adults'] = $request->adults??0;
            $data['children'] = $request->children??0;
            $data['infants'] = $request->infants??0;
            $data['room'] = $request->room??'';
            $data['occupancy_type'] = $request->occupancy_type??'';
            $data['user_id'] = $request->user_id??233;
            $data['noofday'] = $request->noofday??0;
            $data['accomodation'] = $request->accomodation??0;
            $data['itinerary_id'] = $request->itinerary_id??0;

            $data['city'] = substr($citylist, 0, -2);
            $data['transport'] = substr($transport, 0, -2);
            $data['sightseen'] = substr($sightseen, 0, -2);
            $booking =  Frontbooking::create($data);

            $this->sendAdminMail($user,$booking);
            $this->sendUserMail($user,$booking);

            $sendsms = new SendSms;
            $sendsms->frontBookingUserSms($user,$booking->itinerary->title);
            // return response()->json('Booking query has sent Successfully');        
            return $this->sendResponse($data,'Booking query has sent Successfully');

        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
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
                'adults'=>$booking->adults,
                'children'=>$booking->children,
                'infants'=>$booking->infants,
                'room'=>$booking->room,
                'itinerary'=>$booking->itinerary->title,
                'city'=>$booking->city,
                'transport'=>$booking->transport,
                'sightseen'=>$booking->sightseen,
                'emailto'=>'manas_bhowmick@gbinternational.in'
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
                'adults'=>$booking->adults,
                'children'=>$booking->children,
                'infants'=>$booking->infants,
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
            'adults'=>'required',
            'children'=>'required',
            'infants'=>'required',
            'room' => 'required',
            'occupancy_type' => 'required'
      ]);
    }
}
