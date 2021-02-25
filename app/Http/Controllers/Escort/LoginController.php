<?php

namespace App\Http\Controllers\Escort;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Escort\Escort;
use App\Helpers\SendSms;
use App\Otp;

class LoginController extends Controller 
{
    public function login(Request $request){
        $this->validate($request,[
            'number'=>'required'
        ]);
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
                return $response;
            }catch(Exception $e){
                $response['error'] = 'Try again !!!!';
            }
            return $response;
        }else{
            return 'wrong number';
        }

    }

    //Otp Verif

    public function otp_verify(Request $request){
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
