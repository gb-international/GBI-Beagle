<?php

namespace App\Http\Controllers\Admin\School;

use App\Http\Controllers\Controller;
use App\Model\School\EducationInstitute as EduInstitute; 
use Illuminate\Http\Request;
use App\Model\School\Groupmember;
use App\Model\User\Subscriber;
use App\Model\User\Information;
use App\Model\Tour\Tour;
use App\Model\Tour\TourUser;
use App\Model\Reservation\Bookeduser;
use App\User;
use App\Helpers\SendSms;
use Illuminate\Support\Facades\Mail;
use App\Mail\AccountRegistered;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Admin\GroupMemberRequest;

class GroupmemberController extends Controller
{
    public function getMember($tour_code,$type){
        $where = ['tour_id'=>$tour_code,'user_type'=>$type];
        return Groupmember::where($where)->get();
    }
    public function getMemberPending($tour_code,$type){
        $where = ['tour_id'=>$tour_code,'user_type'=>$type,'payment_status'=>'pending'];
        return Groupmember::where($where)->get();
    }
    public function updateMember(Request $request){
        $groupmember = Groupmember::where('id',$request->id)->firstOrFail();
        $this->validate($request,[
            'first_name'=>'required',
            'last_name'=>'required',
            'email'=>'required',
            'gender'=>'required'
        ]);
        $groupmember->update($request->all());

        return response()->json('successfull updated');
    }
    public function destroyMember(Request $request){
        $groupmember = Groupmember::where('id',$request->id)->firstOrFail();
        $groupmember->delete();
        return response()->json('successfully delete');
    }

    public function addMember(GroupMemberRequest $request){
        $edu_institute = EduInstitute::where('school_id', $request->school_id??0)->first();
        $edu_institutes_id = $edu_institute->id??0;
        if($request->details){
            foreach ($request->details as $data) {
                $data['edu_institute_id'] = $edu_institutes_id;
                $data['tour_id'] = $request->tour_id??'';
                $data['school_id'] = $request->school_id??'';
                Groupmember::create($data);
            }
        }
        return response()->json('succesfully added');
    }

    public function addlogindetail(GroupMemberRequest $request){
        $travel_code = Tour::select('travel_code','id','tour_id')->where('tour_id',$request->tour_id)->first();
        foreach ($request->details as $groupmember) {
            // validate if user email is already registered
            $edu_institute = EduInstitute::where('email',$groupmember['email'])->first();
            if(!$edu_institute){
                $edu_institute  = $this->createEduInstitute($groupmember, $request->school_id);
                $message = 'Welcome in GBI-International Please login  to GBI panel with credentials Email Id : '. $groupmember['email']. ' And password : '. $groupmember['email'].' Thank you.';
                // subscribe for newsletter
                if( !$subscriber = Subscriber::where('email',$edu_institute->email)->first()){
                    $data['email'] = $edu_institute->email;
                    $data['edu_institute_id'] = $edu_institute->id;
                    Subscriber::create($data);
                }
            }else{
                $message = 'Welcome in GBI-International Please login to GBI panel with your existing Account Thank you.';
            }
            $user_type =($request->user_type == 0)?'student':'teacher';
            // validate if user id is already registered for the tour
            $tour = [
                'travel_code'=>$travel_code->travel_code,
                'edu_institute_id'=>$edu_institute->id,
                'tour_code'=>$request->tour_id,
                'user_type' => $user_type,
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
        return 'successfully added';
    }

    protected function createEduInstitute($groupmember, $school_id){
        $edu_institute = new EduInstitute();
        $edu_institute->name = $groupmember['first_name'].' '.$groupmember['last_name'];
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

         $user = User::where('email',$request->email)->first();
         $groupmember = Groupmember::where('email',$request->email)->first();
        
        if($user === null){

            $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyz@#%^&*()-';
            $pass = substr(str_shuffle($permitted_chars), 0, 15);

            $user = new User;
            $user->name = $request->first_name.' '.$request->last_name;
            $user->email = $request->email;
            $user->password = Hash::make($pass);
            $user->user_role = '2';
            $user->save();

            $user_info = new Information;
            $user_info->user_id = $user->id;
            $user_info->phone_no = $request->mobile;
            $user_info->client_type = $request->user_type;
            $user_info->gender = $request->gender;
            $user_info->school_id = $request->school_id;
            $user_info->save();
           
            if( !$subscriber = Subscriber::where('email',$user->email)->first()){
                $data['email'] = $user->email;
                $data['user_id'] = $user->id;
                $data['name'] = $user->name;
                $data['client_type'] = 'eduInstitute';
                Subscriber::create($data);
            }
            $user->password = $pass;
            Mail::send(new AccountRegistered($user));
            
        }

        return response()->json('Credentials Sent');

    }

}
