<?php

namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller; 
use App\Model\Tour\Schoolbankdetail;
use Illuminate\Http\Request;
use App\Model\Tour\Bankname;
use App\Model\Tour\Userpayment;
use Auth;
class SchoolbankdetailController extends Controller
{
    public function index(){
        return Bankname::get();
    }

    public function bankdetails(Request $request){
        // admin id = 26 ( default bank details )
        $user = Auth::user();
        return Schoolbankdetail::where('user_id',$user->id)->orWhere('user_id',26)->get();
    }

    
    public function bankdetailsStudent(Request $request){
        // admin id = 26 ( default bank details )
        $school_id = Auth::user()->information->school_id;
        $bank = Userpayment::where([
            'school_id'=>$school_id,
            'tour_code'=>$request->tour_code,
        ])
        ->with('schoolbankdetail')
        ->first();
        if($bank){
            return $bank->schoolbankdetail;
        }
        return $bank;
        
    }

    public function store(Request $request){
        $user = Auth::user();
        $validated = $this->validateBankdetail($request);
        $validated['user_id'] = $user->id;
        $validated['school_id'] = $user->information->school_id;
        Schoolbankdetail::create($validated);
        return response()->json("Successfully created");
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
