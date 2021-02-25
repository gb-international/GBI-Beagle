<?php
/* 
Created by : Ajay yadav 
Purpose : Manage front Tpur

*/
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\User;
use App\Model\User\Information;
use App\Model\Tour\TourUser;
use App\Model\Reservation\Bookeduser;
use App\Model\Tour\Tour;
use App\Model\School\School;
use App\Model\Tour\Userpayment;
use Illuminate\Support\Facades\Auth;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Hash;

class TourController extends Controller{

     public function tourList(Request $request){
        $user = Auth::user();
         // if user is student or teacher
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
                $school = School::where('id',$request->school_id)
                    ->select('id','user_id')
                    ->first();
                foreach ($travels as $travel) {
                    $incharge_paid = Userpayment::where([
                        'tour_code'=>$travel->tour->tour_id,
                        'user_id'=> $school->user_id
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
        if($user->is_incharge == 1){
            $travels = Tour::where('school_id',$request->school_id)
                ->with('itinerary:id,title,detail_photo')
                ->select('id','tour_start_date','travel_code','tour_end_date','itinerary_id','tour_id')
                ->get();
            foreach ($travels as $travel) {
                $incharge_paid = Userpayment::where([
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
        $user = Auth::user();
        $tour = Tour::with('itinerary','itinerary.itinerarydays','bookedhotels','bookedhotels.hotel','bookedflights','bookedflights.flight')->where("tour_id",$request->travel_id)->first();
        $tour['user_id'] = $user->id;
        return response()->json($tour);
    }

   

    
    public function tourDetailSave(Request $request){
        $this->validate($request, [ 
            'travel_code' => 'required',
        ]);
        
        $user = Auth::user();
        $data = ['user_id'=>$user->id,'travel_code'=>$request->travel_code];
        $travel = TourUser::where($data)->get();
        if(count($travel) != 0){
            return response()->json('error');
        }
        $tour = Tour::where('travel_code',$request->travel_code)->get();
        if(count($tour) == 0){
            return response()->json('error');
        }        
        TourUser::create($data);
        return response()->json(['success'=>"success"]);   
    }

    public function paymentTour(Request $request){
        $user = Auth::user();
        $tour = Tour::select(['tour_price','travel_code'])
            ->where('tour_id',$request->travel_code)
            ->firstOrFail();
        $data = [];
        if($user->is_incharge == '1'){
            $tour_user = TourUser::where('tour_code',$request->travel_code)
                ->select('is_paid')
                ->groupBy('is_paid')
                ->selectRaw('count(*) as total, is_paid')
                ->get();
            $data['paid_person'] = $tour_user[1]->total;
            $data['unpaid_person'] = $tour_user[0]->total;
            $data['total_members'] = $tour_user[0]->total + $tour_user[1]->total;
            $data['price'] = $tour->tour_price * $data['paid_person'];
            $data['base_price'] = $tour->tour_price;
            $data['user_id'] = $user->id;
            $data['travel_code'] = $tour->travel_code;
        }else{
            $data['base_price'] = $tour->tour_price;
            $data['user_id'] = $user->id;
            $data['travel_code'] = $tour->travel_code;
        }
        return response()->json($data);
    }

}
