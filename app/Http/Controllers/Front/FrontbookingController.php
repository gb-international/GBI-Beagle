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
use App\Http\Controllers\API\BaseController;

class FrontbookingController extends BaseController
{
    public function booking(FrontbookingRequest $request){
        try{
            // $user = Auth::user();

            $user_type = $this->user_category("school");
            // return $user_type;
            // $user = Auth::user();
            
            // $user_category = new UserCategory(); 
            // $user_type = $user_category->user_category($request->user_profession??'');
            // return $user_type;
            $edu_institutes = Auth::guard($user_type)->user();
            $edu_institutes_id = 12;
            $edu_institutes = $this->educational_institute();
            // $validate = $this->validateBooking($request);
            $data = array();
            $data['start_date'] = $request->start_date??'';
            $data['end_date'] = $request->end_date??'';
            $data['person'] = $request->person??'';
            $data['adults'] = $request->adults??'';
            $data['children'] = $request->children??'';
            $data['infants'] = $request->infants??'';
            $data['room'] = $request->room??'';
            $data['occupancy_type'] = $request->occupancy_type??'';
            $data['noofday'] = $request->noofday??'';
            $data['itinerary_id'] = $request->itinerary_id??'';
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

            // $validate['user_id'] = $user->id;
            $data['edu_institute_id'] = $edu_institutes_id;
            $data['noofday'] = $request->noofday??0;
            $data['accomodation'] = $request->accommodation??0;
            // $data['itinerary_id'] = $request->itinerary_id;
            $data['city'] = substr($citylist, 0, -2);
            $data['transport'] = substr($transport, 0, -2);
            $data['sightseen'] = substr($sightseen, 0, -2);
            $booking =  Frontbooking::create($data);

            $this->sendAdminMail($edu_institutes, $booking);
            $this->sendUserMail($edu_institutes, $booking);

            $sendsms = new SendSms;
            // return $edu_institutes;
            $sendsms->frontBookingUserSms($edu_institutes,$booking->itinerary->title);
            return response()->json('Booking query has sent Successfully'); 
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
                'mobile'=>$user->phone_no,
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
        FrontBookingAdminJob::dispatchNow($data);
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
        FrontBookingUserJob::dispatchNow($data);
    }

    public function validateBooking($request)
    {
      return $this->validate($request, [
        'start_date' => 'required|date|after:today',
        'end_date' => 'required|date|after_or_equal:start_date',
        'person' => 'required',
        'adults'=>'required|numeric',
        'children'=>'required|numeric',
        'infants'=>'required|numeric',
        'room' => 'required|numeric',
        'occupancy_type' => 'required|in:Single,Double,Triple, Quad',
        'noofday' => 'numeric',
        'itinerary_id' => 'required|exists:itineraries,id',
      ]);
    }
}
