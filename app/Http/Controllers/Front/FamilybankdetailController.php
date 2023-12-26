<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\BaseController;
use Illuminate\Http\Request;
use App\Http\Requests\FamilyBankDetailRequest;
use App\Model\Tour\FamilyBankdetail;
use Auth;

class FamilybankdetailController extends BaseController
{
    public function store($guard_name, FamilyBankDetailRequest $request){
        try{
            $user = Auth::guard($guard_name."-api")->user();
            $school_bank_detail = new FamilyBankdetail();
            $school_bank_detail->name = $request->name??'';
            $school_bank_detail->bank_name = $request->bank_name??'';
            $school_bank_detail->account_number = $request->account_number??'';
            $school_bank_detail->account_type = $request->account_type??'';
            $school_bank_detail->ifsc_code = $request->ifsc_code??'';
            $school_bank_detail->tour_code = $request->tour_code??'';
            $school_bank_detail->family_user_id = $user->id??NULL;
            $school_bank_detail->save();
            return response()->json("Successfully created");
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function bankdetails($guard_name, Request $request){
        try{
            $user = Auth::guard($guard_name."-api")->user();
            $data = FamilyBankdetail::where('family_user_id',$user->id??0)->get();
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
}
