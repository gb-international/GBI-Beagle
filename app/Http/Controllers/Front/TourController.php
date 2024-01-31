<?php
/* 
Created by : Ajay yadav 
Edited by: Manas Bhowmick
Purpose : Manage front Tpur

Edits: Added tour_id & user_type field in the tourDetailSave(), and also changed post api for TourUser Model.
*/
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\User;
use App\Model\User\Information;
use App\Model\Tour\TourUser;
use App\Model\Tour\Payment as PaymentModel;
use App\Model\Reservation\Bookeduser;
use App\Model\Tour\Tour;
use App\Model\School\School;
use App\Model\Corporate\Company;
use App\Model\Tour\Userpayment;
use App\Model\Tour\Corppayment;
use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Client;
use App\Model\School\Groupmember;
use App\Model\Corporate\CorpGroupmember;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\SightsResource;
use App\Model\Reservation\Bookedsightseeing;
use App\Model\School\EducationInstitute as EduInstitute;
use App\Http\Controllers\Admin\BaseController;
use Validator;

class TourController extends BaseController{
    public function paymentThrough($guard_name, Request $request){
        try{

            $user = Auth::guard($guard_name."-api")->user();
            if($user->is_incharge == 0){
                return $this->sendError("Permission not allowed!");
            }
            $validator = Validator::make($request->all(), [ 
                'tour_id'=>'required|exists:tours,id',
                'payment_through_status'=>'required|in:0,1',
            ]);
            
            if ($validator->fails()) {
                return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
            }
            $payment_count = PaymentModel::where('tour_id', $request->tour_id)->count();
            if($payment_count > 0){
                return $this->sendError("Payment done or processing");
            }
            $tour = Tour::where('id', $request->tour_id)->first();
            $tour->payment_through_status = $request->payment_through_status??0;
            $tour->save();
            return response()->json('successfully updated!');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage());
        }
     }
    public function tourList(Request $request){
        $user_type = $this->user_category($request->user_type??'');
        // $edu_institutes = Auth::guard($user_type)->user();
        $edu_institutes = Auth::guard($user_type)->user();
        // $user = Auth::user();
        $total_pax = Groupmember::where('tour_id', $request->travel_code)->count();
        $already_paid = Groupmember::where('tour_id', $request->travel_code)->where('payment_status', 'success')->count();
        // return $edu_institutes->is_incharge;
            // if user is student or teacher
        if($edu_institutes->is_incharge == 0){
            $travels =  TourUser::with([
                'tour' => function($tour){
                    $tour->with(['itinerary'=>function($detail){
                        $detail->select('itineraries.id','itineraries.title','itineraries.detail_photo'); 
                    }]);
                    $tour->select('tours.tour_start_date','tours.travel_code','tours.tour_end_date','tours.itinerary_id','tours.tour_id','tours.id');
                }
            ])
            ->where('edu_institute_id',$edu_institutes->id)
            ->select('id','user_id', 'edu_institute_id', 'tour_code','travel_code','status','is_paid','user_type')
            ->get();
            // return $travels;
            if(count($travels) >0){
                $edu_institute = EduInstitute::where('school_id',$request->school_id)
                    ->select('id')
                    ->first();
                foreach ($travels as $travel) {
                    $date_now = date("Y-m-d"); 

                    if($travel['tour_start_date'] > $date_now){
                        $travel['tourType'] = 'upcoming';
                    } else if ($travel['tour_start_date'] <= $date_now && $travel['tour_end_date'] > $date_now){
                        $travel['tourType'] = 'current';
                    } else {
                        $travel['tourType'] = 'completed';
                    }

                    $incharge_paid = Userpayment::where([
                        'tour_code'=>$travel->tour->tour_id,
                        'edu_institute_id'=> $edu_institute->id??0
                    ])->first();
                    
                    if($incharge_paid){
                        // teacher payment mode by self
                        if($incharge_paid->payment_mode === 'self'){
                            if($incharge_paid->status === 'success'){
                                $travel['payment'] = 'success';
                            }
                        }
                        
                        if($incharge_paid->payment_mode === 'student'){
                            if($travel->status === 'success'){
                                $travel['payment'] = 'success';
                            }
                            else if($travel->user_type =='teacher'){
                                if($travel->is_paid == '1'){
                                    $travel['paid_button'] = 'show';
                                }else{
                                    $travel['paid_button'] = '';
                                }
                                $travel['payment'] = 'pending';
                            }
                            else{
                                $travel['payment'] = 'pending';
                                $travel['paid_button'] = 'show';
                            }
                        }
                    }else{
                        $travel['paid_button'] = '';
                    }
                }
            }
        }
        // if user is incharge
        if($edu_institutes->is_incharge == 1){
            $travels = Tour::where('school_id',$request->school_id)
                ->with('itinerary')
                ->select('id','tour_start_date','travel_code','tour_end_date','itinerary_id','tour_id')
                ->get();
            foreach ($travels as $travel) {
                $date_now = date("Y-m-d"); 

                if($travel['tour_start_date'] > $date_now){
                    $travel['tourType'] = 'upcoming';
                } else if ($travel['tour_start_date'] <= $date_now && $travel['tour_end_date'] > $date_now){
                    $travel['tourType'] = 'current';
                } else {
                    $travel['tourType'] = 'completed';
                }
                $incharge_paid = Userpayment::where([
                    'tour_code'=>$travel->tour_id,
                    'edu_institute_id'=> $edu_institutes->edu_institute_id
                ])->first();
                if($incharge_paid){
                    // teacher payment mode by self
                    $travel['paid_button'] = '';
                    if($incharge_paid->status == 'success'){
                        $travel['payment'] = 'success';
                    }else{
                        $travel['payment'] = 'pending';
                    }
                }else{
                    $travel['payment'] = 'pending';
                    $travel['paid_button'] = 'show';
                }
            }            
        }
        return response()->json($travels);
    }


    public function corpTourList(Request $request){
        $user = Auth::user();
        $total_pax = CorpGroupmember::where('tour_id', $request->travel_code)->count();
        $already_paid = CorpGroupmember::where('tour_id', $request->travel_code)->where('payment_status', 'success')->count();
        if($user->is_incharge == 0){
            $travels =  TourUser::with([
                'tour' => function($tour){
                    $tour->with(['itinerary'=>function($detail){
                        $detail->select('itineraries.id','itineraries.title','itineraries.detail_photo'); 
                    }]);
                    $tour->select('tours.tour_start_date','tours.travel_code','tours.tour_end_date','tours.itinerary_id','tours.tour_id','tours.id');
                }
            ])
            ->where('user_id',$user->id)
            ->select('id','user_id','tour_code','travel_code','status','is_paid','user_type')
            ->get();
            if(count($travels) >0){
                $company = Company::where('id',$request->company_id)
                    ->select('id','user_id')
                    ->first();
                foreach ($travels as $travel) {
                    $incharge_paid = Corppayment::where([
                        'tour_code'=>$travel->tour->tour_id,
                        'user_id'=> $company->user_id
                    ])->first();
                    if($incharge_paid){                        
                        if($incharge_paid->status === 'success'){
                                $travel['payment'] = 'success';
                        }
                    }else{
                        $travel['paid_button'] = '';
                    }
                }
            }
        }
        // if user is incharge
        if($user->is_incharge == 1){
            $travels = Tour::where('company_id',$request->company_id)
                ->with('itinerary:id,title,detail_photo')
                ->select('id','tour_start_date','travel_code','tour_end_date','itinerary_id','tour_id')
                ->get();
            foreach ($travels as $travel) {
                $incharge_paid = Corppayment::where([
                    'tour_code'=>$travel->tour_id,
                    'user_id'=> $user->id
                ])->first();
                if($incharge_paid){
                    // teacher payment mode by self
                    $travel['paid_button'] = '';
                    if($incharge_paid->status == 'success'){
                        $travel['payment'] = 'success';
                    }else{
                        $travel['payment'] = 'pending';
                    }
                }else{
                    $travel['payment'] = 'pending';
                    $travel['paid_button'] = 'show';
                }
            }            
        }
         return response()->json($travels);
    }

    public function tourDetail(Request $request){
        // $user = Auth::user();
        $user_type = $this->user_category($request->user_type??'');
        $edu_institutes = Auth::guard($user_type)->user();
        $tour = Tour::with(
            'itinerary:id,title,destination,source,startLoc,endLoc',
            'itinerary.itinerarydays',
            'bookedhotels:id,check_in,check_out,hotel_id,tour_id',
            'bookedhotels.hotel:id,name,type,image',
            'bookedflights:id,arrival,departure,destination,flight_id,flight_number,source,tour_id,tour_code',
            'bookedflights.flight:id,code,name',
        )
        ->where("tour_id",$request->travel_id)
        ->first();
        $tour['edu_institute_id'] = $edu_institutes->id??0;
        $locations = [];

        /*$locSource = \GoogleMaps::load('geocoding')
        ->setParam (['address' => $tour['itinerary']->source])
        ->get('results.geometry.location');

        //array_push($locations,$locSource);

        $locDestination = \GoogleMaps::load('geocoding')
        ->setParam (['address' => $tour['itinerary']->destination])
        ->get('results.geometry.location');*/
        
        $tour['startLoc'] = json_decode($tour['itinerary']['startLoc']??0);
        $tour['endLoc'] = json_decode($tour['itinerary']['endLoc']??0);
        $tour['sights'] = SightsResource::collection(
            Bookedsightseeing::where('tour_code',$request->travel_id)->get()
        );
        return response()->json($tour);
    }

    public function tourItinerary($id){
        $tour = Tour::where("id", $id)->first();
        return response()->json($tour->itinerary);
    }

    public function tourDetailSave($guard_name, Request $request){
        $this->validate($request, [ 
            'travel_code' => 'required|exists:tours,travel_code',
        ]);
        $user = Auth::guard($guard_name."-api")->user();
        $data = array();
        if($guard_name == "school"){
            $data['edu_institute_id'] = $user->id??0;
        }
        else if($guard_name == "company"){
            $data['company_user_id'] = $user->id??0;
        }
        else if($guard_name == "family"){
            $data['family_user_id'] = $user->id??0;
        }

        $data['travel_code']= $request->travel_code??'';

        $travel = TourUser::where($data)->get();
        if(count($travel) != 0){
            return response()->json('error');
        }
        $tour = Tour::where('travel_code',$request->travel_code)->first();
        
        $data['tour_code'] = $tour->tour_id??'';
        $data['user_type'] = $guard_name;
        $data['tour_type'] = $guard_name;
        TourUser::create($data);
        return response()->json(['success'=>"success"]);
    }

    public function paymentTour($guard_name, Request $request){
        $this->validate($request, [ 
            'travel_code' => 'required|exists:tours,tour_id',
        ]);
        $user = Auth::guard($guard_name."-api")->user();
        $data = array();
        
        $tour = Tour::select(['tour_price','travel_code'])
            ->where("tour_id", $request->travel_code)
            ->first();

        $data = [];
        if($user->is_incharge == 1){
        //---
            $tour_user = Groupmember::where('tour_id',$request->travel_code)
            ->select('is_paid')
            ->groupBy('is_paid')
            ->selectRaw('count(*) as total, is_paid')
            ->get();

        //---

            $data['paid_person'] = Groupmember::where('tour_id', $request->travel_code)->where('is_paid', '1')->count();
            $data['already_paid'] = Groupmember::where('tour_id', $request->travel_code)->where('is_paid', '1')->where('payment_status', 'success')->count();
            $data['unpaid_person'] = Groupmember::where('tour_id', $request->travel_code)->where('is_paid', '0')->count();
            $data['total_members'] = Groupmember::where('tour_id', $request->travel_code)->count();
            $data['price'] = $tour->tour_price * ($data['paid_person'] - $data['already_paid']);

            if($guard_name == "school"){
                $data['students'] = Groupmember::where('tour_id', $request->travel_code)->where('user_type', 'student')->count();
                $data['teachers'] = Groupmember::where('tour_id', $request->travel_code)->where('user_type', 'teacher')->count();
            }
            $data['base_price'] = $tour->tour_price;
            $data['travel_code'] = $tour->travel_code;
        }else{
            $data['base_price'] = $tour->tour_price??0;
            $data['travel_code'] = $tour->travel_code;
        }
        if($guard_name == "school"){
            $data['edu_institute_id'] = $user->id??0;
        }
        else if($guard_name == "company"){
            $data['company_user_id'] = $user->id??0;
        }
        else if($guard_name == "family"){
            $data['family_user_id'] = $user->id??0;
        }
        return response()->json($data);
    }
}
