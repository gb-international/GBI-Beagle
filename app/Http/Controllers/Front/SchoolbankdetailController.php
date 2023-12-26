<?php
namespace App\Http\Controllers\Front;
use App\Http\Requests\SchoolBankDetailRequest;
use App\Http\Controllers\API\BaseController;
use App\Http\Controllers\Controller; 
use App\Model\Tour\Schoolbankdetail;
use Illuminate\Http\Request;
use App\Model\Tour\Bankname;
use App\Model\Tour\Userpayment;
use Auth;

class SchoolbankdetailController extends BaseController
{
    public function index(){
        return Bankname::get();
    }

    public function bankdetails($guard_name, Request $request){
        try{
            $user = Auth::guard($guard_name."-api")->user();
            $data = Schoolbankdetail::where('edu_institute_id',$user->id??0)->get();
            if($data->count()>0){
                return response()->json($data);
            }
            else{
                return $this->sendError("Data not found!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    
    public function bankdetailsStudent(Request $request){
        $user_type = $this->user_category($request->user_type??'');
        $edu_institutes = Auth::guard($user_type)->user();
        $bank = Userpayment::where([
            'school_id'=>$edu_institutes->school_id??0,
            'tour_code'=>$request->tour_code,
        ])
        ->with('schoolbankdetail')
        ->first();
        return $bank;
        if($bank){
            return $bank->schoolbankdetail;
        }
        return $bank;
    }

    public function store($guard_name, SchoolBankDetailRequest $request){
        try{
            $user = Auth::guard($guard_name."-api")->user();
            $school_bank_detail = new Schoolbankdetail();
            $school_bank_detail->name = $request->name??'';
            $school_bank_detail->bank_name = $request->bank_name??'';
            $school_bank_detail->account_number = $request->account_number??'';
            $school_bank_detail->account_type = $request->account_type??'';
            $school_bank_detail->ifsc_code = $request->ifsc_code??'';
            $school_bank_detail->tour_code = $request->tour_code??'';
            $school_bank_detail->edu_institute_id = $user->id??NULL;
            $school_bank_detail->school_id = $user->school_id??NULL;
            $school_bank_detail->save();
            return response()->json("Successfully created");
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function validateBankdetail($request)
    {
      return $this->validate($request, [
            'name' => 'required',
            'bank_name' => 'required',
            'account_number' => 'required|unique:Schoolbankdetails',
            'account_type' => 'required',
            'ifsc_code' => 'required',
            'tour_code' => 'required',
      ]);
    }
}
