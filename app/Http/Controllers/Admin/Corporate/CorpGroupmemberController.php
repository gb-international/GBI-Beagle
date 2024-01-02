<?php

namespace App\Http\Controllers\Admin\Corporate;

use App\Http\Requests\Admin\GroupMemberRequest;
use Illuminate\Http\Request;
use App\Model\User\Subscriber;
use App\Model\Tour\Tour;
use App\Model\Tour\TourUser;
use App\CompanyUser;
use App\Helpers\SendSms;
use Illuminate\Support\Facades\Mail;
use App\Mail\AccountRegistered;
use App\Http\Controllers\Admin\BaseController;
use Validator; 
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;

class CorpGroupmemberController extends BaseController
{
    public function addlogindetail(GroupMemberRequest $request){
        try{
            $travel_code = Tour::select('travel_code','id','tour_id')->where('tour_id',$request->tour_id)->first();
            foreach ($request->details as $groupmember) {
                // validate if user email is already registered
                $company_user = CompanyUser::where('email',$groupmember['email'])->first();
                if(!$company_user){
                    $company_user = $this->createUser($groupmember, $request->company_id);
                    $message = 'Welcome in GBI-International Please login to GBI panel with credentials Email Id : '. $groupmember['email']. ' And password : '. $groupmember['email'].' Thank you.';
                    // subscribe for newsletter
                    if( !$subscriber = Subscriber::where(array('email'=>$groupmember['email'], 'client_type'=>$request->tour_type))->first()){
                        
                        $data['email'] = $company_user->email;
                        $data['name'] = $company_user->name;
                        $data['company_user_id'] = $company_user->id;
                        $data['client_type'] = $request->tour_type;
                        Subscriber::create($data);
                    }
                }else{
                    $message = 'Welcome in GBI-International Please login to GBI panel with your existing Account Thank you.';
                }
                // validate if user id is already registered for the tour
                $tour = [
                    'travel_code'=>$travel_code->travel_code,
                    'company_user_id'=>$company_user->id,
                    'tour_code'=>$request->tour_id,
                    'user_type' => $request->tour_type,
                    'tour_type' => 'company',
                    'is_paid' => $groupmember['is_paid']??0
                ];
                $tour_user = TourUser::where($tour)->first();
                if(!$tour_user){
                    $tour_user = TourUser::create($tour);
                }
                // send notification to each user
                $sendsms = new SendSms;
                $sendsms->sendLoginDetails($groupmember['mobile'],$message);
            }
            return response()->json('succesfully added');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    protected function createUser($groupmember, $company_id){
        $company_user = new CompanyUser();
        $company_user->name = trim($groupmember['first_name'].' '.$groupmember['last_name']);
        $company_user->email = $groupmember['email'];
        $company_user->password = bcrypt($groupmember['email']);
        $company_user->status = 1;
        $company_user->company_id = $company_id;
        $company_user->phone_no = $groupmember['mobile'];
        $company_user->varified = '1';
        $company_user->photo = 'user.png';
        $company_user->gender = $groupmember['gender'];
        $company_user->change_password = 0;
        $company_user->save();
        return $company_user;
    }


    public function sendMemberLogin(Request $request){
        $validator = Validator::make($request->all(), [ 
            'first_name' => 'required',  
            'mobile' => ['required',new PhoneNubmerValidate],
            'email' => ['required', 'email',new EmailValidate, 'unique:company_users,email'],
            'company_id' => 'required|exists:companies,id',
        ]);
       
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }
         $company_user = CompanyUser::where('email',$request->email)->first();
        try{
            if($company_user === null){
                $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyz@#%^&*()-';
                $pass = substr(str_shuffle($permitted_chars), 0, 15);

                $company_user = new CompanyUser;
                $company_user->name = trim($request->first_name.' '.$request->last_name);
                $company_user->email = $request->email;
                $company_user->password = bcrypt($pass);
                $company_user->phone_no = $request->mobile;
                $company_user->gender = $request->gender;
                $company_user->company_id = $request->company_id;
                $company_user->save();
                
                if(!$subscriber = Subscriber::where(['email'=> $company_user->email, 'client_type'=>'corporate'])->first()){
                    $data['email'] = $company_user->email;
                    $data['name'] = $company_user->name;
                    $data['company_user_id'] = $company_user->id;
                    $data['client_type'] = 'corporate';
                    Subscriber::create($data);
                }
                $company_user->password = $pass;
                Mail::send(new AccountRegistered($company_user));
            }
            else{
                return $this->sendError("Already exist!", 409);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('Credentials Sent');
    }
}
