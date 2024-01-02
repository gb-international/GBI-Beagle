<?php

namespace App\Http\Controllers\Admin;

use App\Model\School\EducationInstitute as EduInstitute; 
use App\Http\Controllers\Admin\BaseController;
use App\CompanyUser;
use App\Http\Requests\Admin\GroupMemberRequest;
use App\Model\School\Groupmember;
use Illuminate\Http\Request;

class GroupmemberController extends BaseController
{
    public function getMember($tour_code,$user_type, $tour_type){
        try{
            $where = ['tour_id'=>$tour_code,'user_type'=>$user_type, 'tour_type'=>$tour_type];
            $groupmember = Groupmember::where($where)->get();
            if($groupmember->count() > 0){
                return response()->json($groupmember);
            }
            else{
                return $this->sendError("Data not found!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function getMemberPending($tour_code,$user_type, $tour_type, $pending){
        try{
            $where = ['tour_id'=>$tour_code,'user_type'=>$user_type,'payment_status'=>$pending, 'tour_type'=>$tour_type];
            $groupmember = Groupmember::where($where)->get();
            if($groupmember->count() > 0){
                return response()->json($groupmember);
            }
            else{
                return $this->sendError("Data not found!", 404);
            }

        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function updateMember(Request $request){
        try{
            $group_member = Groupmember::where('id',$request->id)->firstOrFail();
            $group_member->first_name = $request->first_name??$group_member->first_name;
            $group_member->last_name = $request->last_name??$group_member->last_name;
            $group_member->email = $request->email??$group_member->email;
            $group_member->gender = $request->gender??$group_member->gender;
            $group_member->age = $request->age??$group_member->age;
            $group_member->mobile = $request->mobile??$group_member->mobile;
            $group_member->is_paid = $request->is_paid??$group_member->is_paid;
            $group_member->payment_status = $request->payment_status??$group_member->payment_status;
            $group_member->mobile = $request->mobile??$group_member->mobile;
            $group_member->save();
            return response()->json('successfull updated');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function destroyMember(Request $request){
        $groupmember = Groupmember::where('id',$request->id)->firstOrFail();
        $groupmember->delete();
        return response()->json('successfully delete');
    }
    public function addMember(GroupMemberRequest $request){
        try{
            $data = array();
            if($request->tour_type == "school"){
                $edu_institute = EduInstitute::where('school_id', $request->school_id??NULL)->first();
                if(!$edu_institute){
                    return $this->sendError("Invalid user", 404);
                }
                $data['edu_institute_id'] = $edu_institute->id??NULL;
                $data['school_id'] = $request->school_id??NULL;
            }
            else if($request->tour_type == "corporate"){
                $company_user = CompanyUser::where('company_id', $request->company_id??NULL)->first();
                if(!$company_user){
                    return $this->sendError("Invalid user", 404);
                }
                $data['company_user_id'] = $company_user->id??NULL;
                $data['company_id'] = $request->company_id??NULL;
            }
            else{
                $data['family_user_id'] = $request->family_user_id??NULL;
            }     
            $data['user_type'] = $request->user_type??NULL;
            $data['tour_type'] = $request->tour_type??NULL;
            $data['tour_id'] = $request->tour_id??'';
            if($request->details){
                foreach ($request->details as $detail) {
                    $data['first_name'] = $detail['first_name']??NULL;
                    $data['last_name'] = $detail['last_name']??NULL;
                    $data['email'] = $detail['email']??NULL;
                    $data['gender'] = $detail['gender']??NULL;
                    $data['age'] = $detail['age']??NULL;
                    $data['mobile'] = $detail['mobile']??NULL;
                    $data['is_paid']= $detail['is_paid']??NULL;
                    $data['payment_status'] = $detail['payment_status']??'pending';
                    Groupmember::create($data);
                }
            }
            return response()->json('succesfully added');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
