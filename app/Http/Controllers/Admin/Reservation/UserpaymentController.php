<?php

namespace App\Http\Controllers\Admin\Reservation;
use App\Http\Requests\Admin\UserPaymentRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Tour\Userpayment;
use App\Model\Tour\TourUser;
use App\Model\Tour\Tour;
use Validator;
use App\Model\School\School;
use App\Model\User\Information;
use App\Model\School\Groupmember;
use App\Model\School\EducationInstitute as EduInstitute;

class UserpaymentController extends Controller
{
    public function paymentList(UserPaymentRequest $request){
        // get school payment mode


        $edu_institute = EduInstitute::where('school_id',$request->school_id)
            ->select('id')
            ->first();

        $userpayment = Userpayment::where([
            'tour_code'=>$request->tour_code,
            'edu_institute_id' => $edu_institute->id??0
        ])->with('edu_institute:id,name')->latest()->first();

        return response()->json($userpayment);
    }

    
    public function paymentStudent(UserPaymentRequest $request){

        $userpayment = Userpayment::where([
            'school_id'=>$request->school_id,
            'tour_code'=>$request->tour_code,
        ])->firstOrFail()->adminFormat();

        return response()->json($userpayment);
    }

    public function createpayment(Request $request){
        $validator = Validator::make($request->all(), [ 
            'id'=>'required|exists:userpayments,id',
            'status'=>'required|in:pending,success',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
        }

        $payment = Userpayment::where('id',$request->id)->first();
        Groupmember::where('tour_id', $payment->tour_code)->update(['payment_status' => $request->status]);
        $payment->update($request->all());
        return $payment->adminFormat();
    }

    public function addtourpayment(Request $request){
        $validator = Validator::make($request->all(), [ 
            'tour_code'=>'required|exists:tours,tour_id',
            'edu_institute_id'=>'required|exists:edu_institutes,id',
            'payment_mode' => 'required',
            'amount' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
        }
        
        $checkDuplicate = Userpayment::where([
            'edu_institute_id'=>$request->edu_institute_id,
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
        ]);
        $validator = Validator::make($request->all(), [ 
            'tour_code'=>'required|exists:tours,tour_id',
            'edu_institute_id'=>'required|exists:edu_institutes,id',
            'payment_mode' => 'required',
            'amount' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
        }

        $userpayment = Userpayment::where(['edu_institute_id'=>$request->edu_institute_id,'tour_code'=>$request->tour_code])->first();
        $data = [
            'payment_mode' => $request->payment_mode??$userpayment->payment_mode,
            'payment_type' => $request->payment_type??$userpayment->payment_type,
            'tour_code' =>$request->tour_code??$userpayment->tour_code,
            'schoolbankdetail_id' => $request->schoolbankdetail_id??$userpayment->schoolbankdetail_id,
            'amount' => $request->amount??$userpayment->amount,
            'user_id' => $request->user_id??$userpayment->user_id,
            'school_id' => $request->school_id??$userpayment->school_id,
            'cheque_bank_name' => $request->cheque_bank_name??$userpayment->cheque_bank_name,
            'date_of_issue'=> $request->date_of_issue??$userpayment->date_of_issue,
            'ifsc_code'=> $request->ifsc_code??$userpayment->ifsc_code,
            'cheque_number'=> $request->cheque_number??$userpayment->cheque_number,
        ];
        $userpayment->update($data);
        return response()->json('successfully paid');
    }


    public function getSchoolUser(Request $request){
        $school=School::select('user_id')->where('id',$request->school_id)->first();
        return response()->json($school);
    }

    public function getTourUser(Request $request){
        // $school=School::select('user_id')->where('id',$request->school_id)->first();
        $validator = Validator::make($request->all(), [ 
            'tour_code'=>'required|exists:tours,tour_id',
            'school_id'=>'required|exists:schools,id',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
        }
        $edu_institute = EduInstitute::where('school_id',$request->school_id)
        ->select('id')
        ->first();

        $touramount = Tour::where('tour_id',$request->tour_code)->select('tour_price')->first();
        $tour = Groupmember::where('tour_id',$request->tour_code)
            ->select('is_paid')
            ->groupBy('is_paid')
            ->selectRaw('count(*) as total, is_paid')
            ->get();

        $students = Groupmember::where('tour_id', $request->tour_code)->where('user_type', 'student')->count();
        $teachers = Groupmember::where('tour_id', $request->tour_code)->where('user_type', 'teacher')->count();

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

        return response()->json(['tour'=>$tour,'edu_institute'=>$edu_institute->id,'amount'=>$touramount->tour_price,'students'=>$students, 'teachers'=>$teachers]);
    }

}