<?php

namespace App\Http\Controllers\Admin\Reservation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Userpayment;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use App\Model\School\School;
use App\Model\User\Information;
class UserpaymentController extends Controller
{
    public function paymentList(Request $request){
        // get school payment mode

        $school = School::where('id',$request->school_id)
            ->select('user_id')
            ->first();
        $userpayment = Userpayment::where([
            'tour_code'=>$request->tour_code,
            'user_id' => $school->user_id
        ])->with('user:id,name')->first();

        return response()->json($userpayment);
    }

    
    public function paymenStudent(Request $request){
        // get school payment mode
        $userpayment = Userpayment::where([
            'school_id'=>$request->school_id,
            'tour_code'=>$request->tour_code,
        ])->firstOrFail()->adminFormat();

        return response()->json($userpayment);
    }



    public function createpayment(Request $request){

        $payment = Userpayment::where('id',$request->id)->first();
        $payment->update($request->all());
        return $payment->adminFormat();
    }

    public function addtourpayment(Request $request){
        $this->validate($request, [ 
            'tour_code' => 'required',
            'payment_mode' => 'required',
            'amount' => 'required'
        ]);
        $checkDuplicate = Userpayment::where([
                'user_id'=>$request->user_id,
                'tour_code'=>$request->tour_code
            ])->first();
        if($checkDuplicate){
            return response()->json(['error'=>'You have already made payment']);
        }
        Userpayment::create($request->all());
        return response()->json('successfully paid');
    }
    
    public function getUserpayments($id){
        
        $data = Userpayment::where('id',$id)->first();
        return response()->json($data);
    }

    public function updatetourpayment(Request $request){
        $this->validate($request, [ 
            'tour_code' => 'required',
            'payment_mode' => 'required',
            'amount' => 'required'
        ]);
        $userpayment = Userpayment::where(['user_id'=>$request->user_id,'tour_code'=>$request->tour_code])->first();
        $data = [
            'payment_mode' => $request->payment_mode,
            'payment_type' => $request->payment_type,
            'tour_code' =>$request->tour_code,
            'schoolbankdetail_id' => $request->schoolbankdetail_id,
            'amount' => $request->amount,
            'user_id' => $request->user_id,
            'school_id' => $request->school_id,
            'cheque_bank_name' => $request->cheque_bank_name,
            'date_of_issue'=> $request->date_of_issue,
            'ifsc_code'=> $request->ifsc_code,
            'cheque_number'=> $request->cheque_number,
        ];
        $userpayment->update($data);
        return response()->json('successfully paid');
    }


    public function getSchoolUser(Request $request){
        $school=School::select('user_id')->where('id',$request->school_id)->first();
        return response()->json($school);
    }

    public function getTourUser(Request $request){
        $school=School::select('user_id')->where('id',$request->school_id)->first();
        $touramount = Tour::where('tour_id',$request->tour_code)->select('tour_price')->first();
        $tour = TourUser::where('tour_code',$request->tour_code)
            ->select('is_paid')
            ->groupBy('is_paid')
            ->selectRaw('count(*) as total, is_paid')
            ->get();
        return response()->json(['tour'=>$tour,'user_id'=>$school->user_id,'amount'=>$touramount->tour_price]);
    }

}
