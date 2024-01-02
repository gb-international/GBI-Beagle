<?php

namespace App\Http\Controllers\Admin\School;

use App\Model\School\EducationInstitute as EduInstitute;
use App\Http\Requests\Admin\GroupMemberRequest;
use Illuminate\Http\Request;
use App\Model\School\Groupmember;
use App\Model\User\Subscriber;
use App\Model\Tour\Tour;
use App\Model\Tour\TourUser;
use App\User;
use App\Helpers\SendSms;
use Illuminate\Support\Facades\Mail;
use App\Mail\AccountRegistered;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use Validator; 

use App\Http\Controllers\Admin\BaseController;

class GroupmemberController extends BaseController
{
    public function addlogindetail(GroupMemberRequest $request){
        try{
            $travel_code = Tour::select('travel_code','id','tour_id')->where('tour_id',$request->tour_id)->first();
            foreach ($request->details as $groupmember) {
                // validate if user email is already registered
                $edu_institute = EduInstitute::where('email',$groupmember['email'])->first();
                if(!$edu_institute){
                    $edu_institute  = $this->createEduInstitute($groupmember, $request->school_id);
                    $message = 'Welcome in GBI-International Please login  to GBI panel with credentials Email Id : '. $groupmember['email']. ' And password : '. $groupmember['email'].' Thank you.';
    
                    // subscribe for newsletter
                    if(!$subscriber = Subscriber::where(array('email'=>$edu_institute->email, 'client_type'=>$request->tour_type))->first()){
                        $data['email'] = $edu_institute->email;
                        $data['edu_institute_id'] = $edu_institute->id;
                        $data['name'] = $edu_institute->name;
                        $data['client_type'] = $request->tour_type;
                        Subscriber::create($data);
                    }
                }else{
                    $message = 'Welcome in GBI-International Please login to GBI panel with your existing Account Thank you.';
                }
                // $user_type =($request->role_type == 0)?'student':'teacher';
                // validate if user id is already registered for the tour
                $tour = [
                    'travel_code'=>$travel_code->travel_code,
                    'edu_institute_id'=>$edu_institute->id,
                    'tour_code'=>$request->tour_id,
                    'user_type' => $request->user_type??'',
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

    protected function createEduInstitute($groupmember, $school_id){
        $edu_institute = new EduInstitute();
        $edu_institute->name = trim($groupmember['first_name'].' '.$groupmember['last_name']);
        $edu_institute->email = $groupmember['email']??'';
        $edu_institute->password = bcrypt($groupmember['email']);
        $edu_institute->status = 1;
        $edu_institute->school_id = $school_id;
        $edu_institute->role_type = 0;
        $edu_institute->phone_no = $groupmember['mobile']??'';
        $edu_institute->varified = '1';
        $edu_institute->photo = 'user.png';
        $edu_institute->gender = $groupmember['gender']??'';
        $edu_institute->change_password = 0;
        $edu_institute->save();
        return $edu_institute;
    }

    public function sendMemberLogin(Request $request){
        $validator = Validator::make($request->all(), [ 
            'first_name' => 'required',  
            'mobile' => ['required',new PhoneNubmerValidate],
            'email' => ['required', 'email',new EmailValidate, 'unique:edu_institutes,email'],
            'school_id' => 'required|exists:schools,id',
        ]);
       
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 422);            
        }

        $eduInstitute = EduInstitute::where('email',$request->email)->first();
        if($eduInstitute === null){
            $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyz@#%^&*()-';
            $pass = substr(str_shuffle($permitted_chars), 0, 15);
            $eduInstitute = new EduInstitute;
            $eduInstitute->name = trim($request->first_name.' '.$request->last_name);
            $eduInstitute->email = $request->email;
            $eduInstitute->password = bcrypt($pass);
            $eduInstitute->role_type = '2';
            $eduInstitute->phone_no = $request->mobile;
            $eduInstitute->gender = $request->gender;
            $eduInstitute->school_id = $request->school_id;
            $eduInstitute->save();
            if(!$subscriber = Subscriber::where(array('email'=>$eduInstitute->email, 'client_type'=>'school'))->first()){
                $data['email'] = $eduInstitute->email;
                $data['edu_institute_id'] = $eduInstitute->id;
                $data['name'] = $eduInstitute->name;
                $data['client_type'] = 'school';
                Subscriber::create($data);
            }
            $eduInstitute->password = $pass;
            Mail::send(new AccountRegistered($eduInstitute));  
        }
        else{
            return $this->sendError("Already exist!", 409);
        }
        return response()->json('Credentials Sent');
    }
}
