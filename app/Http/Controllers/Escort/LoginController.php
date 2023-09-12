<?php
namespace App\Http\Controllers\Escort;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Escort\Escort;
use App\Helpers\SendSms;
use App\Otp;
use App\Rules\PhoneNubmerValidate;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Admin\BaseController;
class LoginController extends BaseController 
{
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'number'=>['required','numeric',new PhoneNubmerValidate],
        ]);
        if ($validator->fails()) {
            return $this->errorValidate($validator->errors(), 422);
        }
        $escort  = Escort::where('phoneno',$request->number)->first();
        if($escort){
            $mobile_number = $request->number;
            $response = [];
            $today = date("Y-m-d");
            $where = ['phone_no'=>$mobile_number,'otp_date'=>$today];
            $otp = rand(1000, 9999);
            try{
                $otp_add = new Otp();
                $otp_add->phone_no = $mobile_number;
                $otp_add->otp_send = $otp;
                $otp_add->otp_date = $today;            
                if($otp_add->save()){
                    $response['otp_id'] = $otp_add->id;
                    $sendsms = new SendSms;
                    $sendsms->otpSMS($mobile_number,$otp);
                    $response['success'] = 'success';
                    $response['id'] = $escort->id;
                    $response['name'] = $escort->name;
                }
                return $this->sendResponse($response,'successfull');
            }catch(Exception $e){
                return $this->sendError("Try again !!!!", 500);     
            }
            return $this->sendResponse($response,'successfull');
            // return $response;
        }else{
            return $this->sendError("wrong number", 500);
            // return 'wrong number';
        }
    }

    //Otp Verif

    public function otp_verify(Request $request){

        $validator = Validator::make($request->all(), [
            'otp'=>'required|numeric',
            'otp_id'=>'required|numeric|exists:otps,id',
        ]);
        if ($validator->fails()) {
            return $this->errorValidate($validator->errors(), 422);
        }

    	$otp = $request->otp;
        $id = $request->otp_id;
        $where = ['id'=>$id,'otp_send'=>$otp];
        $data = Otp::where($where)->get();

        if(count($data)>0){
            return response()->json(["type"=>"success", "message"=>"Your mobile number is verified!"]);
        }else{
            return response()->json(["type"=>"error", "message"=>"Mobile number verification failed"]);
        }
    }
}
