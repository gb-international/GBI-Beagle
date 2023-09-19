<?php

namespace App\Http\Controllers\Admin\Reservation;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Corppayment;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use App\Model\Corporate\Company;
use App\Model\User\Information;
use App\Model\Corporate\CorpGroupmember;

class CorpPaymentController extends Controller
{
    public function paymentList(Request $request){
        // get Corporate payment mode

        $company = Company::where('id',$request->company_id)
            ->select('user_id')
            ->first();
        $userpayment = CorpGroupmember::where([
            'tour_id'=>$request->tour_code,
            'user_id' => $company->user_id
        ])->with('user:id,name')->first();

        return response()->json($userpayment);
    }

    
    public function paymentCorp(Request $request){
        // get company payment mode
        $userpayment = Corppayment::where([
            'company_id'=>$request->company_id,
            'tour_code'=>$request->tour_code,
        ])->firstOrFail()->adminFormat();

        return response()->json($userpayment);
    }

    public function createpayment(Request $request){

        $payment = Corppayment::where('id',$request->id)->first();
        CorpGroupmember::where('tour_id', $payment->tour_code)->update(['payment_status' => $request->status]);
        $payment->update($request->all());
        return $payment->adminFormat();
    }

    public function addtourpayment(Request $request){
        $this->validate($request, [ 
            'tour_code' => 'required',
            'payment_mode' => 'required',
            'amount' => 'required'
        ]);
        $checkDuplicate = Corppayment::where([
                'user_id'=>$request->user_id,
                'tour_code'=>$request->tour_code
            ])->first();
        if($checkDuplicate){
            return response()->json(['error'=>'You have already made payment']);
        }
        Corppayment::create($request->all());
        return response()->json('successfully paid');
    }
    
    public function getUserpayments($id){
        
        $data = Corppayment::where('id',$id)->first();
        return response()->json($data);
    }

    public function updatetourpayment(Request $request){
        $this->validate($request, [ 
            'tour_code' => 'required',
            'payment_mode' => 'required',
            'amount' => 'required'
        ]);
        $userpayment = Corppayment::where(['user_id'=>$request->user_id,'tour_code'=>$request->tour_code])->first();
        $data = [
            'payment_mode' => $request->payment_mode,
            'payment_type' => $request->payment_type,
            'tour_code' =>$request->tour_code,
            'corp_bankdetails_id' => $request->bankdetail_id,
            'amount' => $request->amount,
            'user_id' => $request->user_id,
            'company_id' => $request->company_id,
            'cheque_bank_name' => $request->cheque_bank_name,
            'date_of_issue'=> $request->date_of_issue,
            'ifsc_code'=> $request->ifsc_code,
            'cheque_number'=> $request->cheque_number,
        ];
        $userpayment->update($data);
        return response()->json('successfully paid');
    }


    public function getCompanyUser(Request $request){
        $company=Company::select('user_id')->where('id',$request->company_id)->first();
        return response()->json($company);
    }

    public function getTourUser(Request $request){
        $company=Company::select('user_id')->where('id',$request->company_id)->first();
        $touramount = Tour::where('tour_id',$request->tour_code)->select('tour_price')->first();
        $tour = CorpGroupmember::where('tour_id',$request->tour_code)
        ->select('is_paid')
            ->groupBy('is_paid')
            ->selectRaw('count(*) as total, is_paid')
            ->get();

        $members = CorpGroupmember::where('tour_id', $request->tour_code)->count();

        if(count($tour) == 1 && $tour[0]->is_paid == true){
            $arr = [
                "is_paid" => false,
                 "total"=> 0
             ];

             $tour->push($arr);
        } 
        else if(count($tour) == 1 && $tour[0]->is_paid == false){

            $arr = [
                "is_paid" => true,
                 "total"=> 0
             ];

            $tour->prepend($arr);
        }
        else if(count($tour) < 1){

            $arr1 = [
                "is_paid" => true,
                 "total"=> 0
             ];

            $tour->push($arr1);

             $arr2 = [
                "is_paid" => false,
                 "total"=> 0
             ];

             $tour->push($arr2);

        }

        return response()->json(['tour'=>$tour,'user_id'=>$company->user_id,'amount'=>$touramount->tour_price,'members'=>$members]);
    }

}