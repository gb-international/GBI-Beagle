<?php

namespace App\Http\Controllers\Admin\Corporate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Corporate\CorpGroupmember;
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
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\Corporate\CorpGroupmemberRequest;
use App\Http\Requests\Admin\Corporate\UpdateCorpGroupmemberRequest;
class CorpGroupmemberController extends BaseController
{
    public function getMember($tour_code,$type){
        $where = ['tour_id'=>$tour_code,'user_type'=>$type];
        return CorpGroupmember::where($where)->get();
    }
    public function updateMember(UpdateCorpGroupmemberRequest $request){
        try{
            $groupmember = CorpGroupmember::where('id',$request->id)->firstOrFail();

            $first_name = $request->first_name??$groupmember->first_name;
            $last_name = $request->last_name??$groupmember->first_name;
            $email = $request->email??$groupmember->first_name;
            $gender = $request->gender??$groupmember->first_name;
            $age = $request->age??$groupmember->first_name;
            $mobile = $request->mobile??$groupmember->first_name;
            $sr_no = $request->sr_no??$groupmember->first_name;
            $tour_id = $request->tour_id??$groupmember->first_name;
            $company_id = $request->company_id??$groupmember->company_id;
            $user_type = $request->user_type??$groupmember->user_type;
            $is_paid = $$request->is_paid??$groupmember->is_paid;

            $groupmember->update(['tour_id' => $tour_id, 'company_id' =>$company_id,'first_name' => $first_name, 'last_name' => $last_name, 'email' => $email, 'gender' => $gender, 'age' => $age, 'mobile' => $mobile, 'user_type' => $user_type, 'is_paid' => $is_paid]);
            return $this->sendResponse($groupmember, 'Successfully updated', 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function destroyMember(Request $request){
        $groupmember = CorpGroupmember::where('id',$request->id)->firstOrFail();
        $groupmember->delete();
        return response()->json('successfully delete');
    }

    public function addMember(CorpGroupmemberRequest $request){
        try{
            foreach ($request->all() as $row) {
                if(!empty($row)){
                    foreach ($row as $val){
                        $first_name = $val['first_name']??'';
                        $last_name = $val['last_name']??'';
                        $email = $val['email']??'';
                        $gender = $val['gender']??'';
                        $age = $val['age']??0;
                        $mobile = $val['mobile']??'';
                        $sr_no = $val['sr_no']??0;
                        $tour_id = $val['tour_id']??0;
                        $company_id = $val['company_id']??0;
                        $user_type = $val['user_type']??'';
                        $is_paid = $val['is_paid']??0;
                        CorpGroupmember::updateOrCreate(['tour_id'=>$tour_id, 'email'=>$email, 'company_id'=>$company_id],['tour_id' => $tour_id, 'company_id' => $company_id,'first_name' => $first_name,
                        'last_name' => $last_name,
                        'email' => $email,
                        'gender' => $gender,
                        'age' => $age,
                        'mobile' => $mobile,
                        'user_type' => $user_type,
                        'is_paid' => $is_paid,
                    ]);
                    }
                }
            }
            return $this->sendResponse('', 'Successfully Created', 201);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function addlogindetail(Request $request){
        $tour_id = $request->all()[0]['tour_id'];
        $travel_code = Tour::select('travel_code','id','tour_id')->where('tour_id',$tour_id)->first();

        foreach ($request->all() as $groupmember) {
            // validate if user email is already registered
            $user = User::where('email',$groupmember['email'])->first();
            
            if(!$user){
                $user = $this->createUser($groupmember);
                $message = 'Welcome in GBI-International Please login to GBI panel with credentials Email Id : '. $groupmember['email']. ' And password : '. $groupmember['email'].' Thank you.';
                // subscribe for newsletter
                if( !$subscriber = Subscriber::where('email',$user->email)->first()){
                    $data['email'] = $user->email;
                    $data['name'] = $user->name;
                    $data['user_id'] = $user->id;
                    $data['client_type'] = 'corporate';
                    Subscriber::create($data);
                }
            }else{
                $message = 'Welcome in GBI-International Please login to GBI panel with your existing Account Thank you.';
            }
            // validate if user id is already registered for the tour
            $tour = [
                'travel_code'=>$travel_code->travel_code,
                'user_id'=>$user->id,
                'tour_code'=>$tour_id,
                'user_type' => $groupmember['user_type'],
                'is_paid' => $groupmember['is_paid']
            ];
            $tour_user = TourUser::where($tour)->first();
            if(!$tour_user){
                $tour_user = TourUser::create($tour);
            }
            $tour['name'] =$groupmember['first_name'].' '.$groupmember['last_name'];
            $tour['email'] = $groupmember['email'];
            $tour['password'] = $groupmember['email'];
            $tour['travel_code'] = $travel_code->travel_code;
            $tour['phone_no'] = $groupmember['mobile'];
            
            // send notification to each user
            $sendsms = new SendSms;
            $sendsms->sendLoginDetails($groupmember['mobile'],$message);
        }
        return 'successfully added';
    }

    protected function createUser($groupmember){
        $user = new User();
        $user->name = $groupmember['first_name'].' '.$groupmember['last_name'];
        $user->email = $groupmember['email'];
        $user->user_type = 'corporate';
        $user->password = bcrypt($groupmember['email']);
        $user->status = 1;
        $user->save();
        
        $more  = new Information();
        $more->company_id = $groupmember['company_id'];
        $more->user_profession = 'corporate';
        $more->user_id = $user->id;
        $more->phone_no = $groupmember['mobile'];
        $more->varified = '1';
        $more->photo = 'user.png';
        $more->gender = $groupmember['gender'];
        $more->change_password = 0;
        $more->save();

        return $user;
    }


    public function sendMemberLogin(Request $request){

         $user = User::where('email',$request->email)->first();
        
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
            $user_info->company_id = $request->company_id;
            $user_info->save();

            if( !$subscriber = Subscriber::where('email', $user->email)->first()){
                    $data['email'] = $user->email;
                    $data['name'] = $user->name;
                    $data['user_id'] = $user->id;
                    $data['client_type'] = 'corporate';
                    Subscriber::create($data);
            }

            $user->password = $pass;
            Mail::send(new AccountRegistered($user));
        }

        return response()->json('Credentials Sent');

    }

}
