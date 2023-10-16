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

    public function bankdetails(Request $request){
        $user_type = $this->user_category($request->user_type??'');
        $edu_institutes = Auth::guard($user_type)->user();
        return Schoolbankdetail::where('edu_institute_id',$edu_institutes->id??0)->orWhere('user_id',26)->get();
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

    public function store(SchoolBankDetailRequest $request){
        try{
            $user_type = $this->user_category($request->user_type??'');
            $edu_institutes = Auth::guard($user_type)->user();

            $school_bank_detail = new Schoolbankdetail();
            //On left field name in DB and on right field name in Form/view/request
            $school_bank_detail->name = $request->name??'';
            $school_bank_detail->bank_name = $request->bank_name??'';
            $school_bank_detail->account_number = $request->account_number??'';
            $school_bank_detail->account_type = $request->account_type??'';
            $school_bank_detail->ifsc_code = $request->ifsc_code??'';
            $school_bank_detail->tour_code = $request->tour_code??'';
            $school_bank_detail->edu_institute_id = $edu_institutes->id??12;
            $school_bank_detail->school_id = $edu_institutes->school_id??963;
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
