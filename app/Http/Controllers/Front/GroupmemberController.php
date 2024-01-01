<?php
/*
Edited by : Rahul Rawat studentStore function
Purpose : Manage studentStore function and validation  
*/

namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller;
use App\Model\School\EducationInstitute as EduInstitute;
use App\Http\Requests\Front\GroupMemberRequest;
use App\Http\Controllers\Admin\BaseController;
use Illuminate\Http\Request;
use App\Model\School\Groupmember;
use App\User;
use Auth;

class GroupmemberController extends BaseController
{
    public function index($guard_name, Request $request){
        $this->validate($request, [ 
            'tour_id' => 'required',
        ]);
        $where = ['tour_id'=>$request->tour_id,'tour_type'=>$guard_name];
        $data = Groupmember::where($where)
            ->get([
                'id','user_type','tour_id',
                'first_name','last_name',
                'email','gender','mobile','age'
            ]);
        return response()->json($data);
    }

    public function addGroupMember($guard_name, GroupMemberRequest $request){
        $user = Auth::guard($guard_name."-api")->user();
        $data = array();
        $data['tour_type'] = $guard_name;
        if($guard_name == "school"){
            $data['edu_institute_id'] = $user->id??0;
            $data['school_id'] = $request->school_id??NULL;
        }
        else if($guard_name == "company"){
            $data['company_user_id'] = $user->id??0;
            $data['company_id'] = $request->company_id??NULL;
        }
        else if($guard_name == "family"){
            $data['family_user_id'] = $user->id??NULL;
        }
        $data['user_type'] = $request->user_type??NULL;
        $data['tour_id'] = $request->tour_id??NULL;
        if($request->details){
            foreach ($request->details as $data) {
                $data['first_name'] = $data->first_name??NULL;
                $data['last_name'] = $data->last_name??NULL;
                $data['email'] = $data->email??NULL;
                $data['gender'] = $data->gender??NULL;
                $data['age'] = $data->age??NULL;
                $data['mobile'] = $data->mobile??NULL;
                $data['is_paid']= $data->is_paid??NULL;
                $data['payment_status'] = $data->payment_status??NULL;
                Groupmember::create($data);
            }
        }
        return response()->json('Data added successfully');
    }

    public function update($guard_name, Request $request){
        try{
            $user = Auth::guard($guard_name."-api")->user();
            $group_member = Groupmember::find($request->id);
        
            // return response()->json('success');
            if($group_member){
                $group_member->tour_id = $request->tour_id??$group_member->tour_id;
                $group_member->first_name = $request->first_name??$group_member->first_name;
                $group_member->last_name = $request->last_name??$group_member->last_name;
                $group_member->email = $request->email??$group_member->email;
                $group_member->gender = $request->gender??$group_member->gender;
                $group_member->age = $request->age??$group_member->age;
                $group_member->mobile = $request->mobile??$group_member->mobile;
                $group_member->is_paid = $request->is_paid??$group_member->is_paid;
                $group_member->payment_status = $request->payment_status??$group_member->payment_status;
                $group_member->mobile = $request->mobile??$group_member->mobile;
                $group_member->tour_type= $guard_name??$group_member->mobile;     
                if($guard_name == "school"){
                    $group_member->edu_institute_id = $user->id??$group_member->company_id;
                    $group_member->school_id = $request->school_id??$group_member->school_id;
                }
                else if($guard_name == "company"){
                    $group_member->company_user_id = $user->id??$group_member->company_user_id;
                    $group_member->company_id = $request->company_id??$group_member->company_id;
                }
                else if($guard_name == "family"){
                    $group_member->family_user_id = $user->id??$group_member->family_user_id;
                }
                $group_member->save();
                return response()->json('Data updated successfully');
            }
            else{
                return $this->sendError("Data not found!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        
    }

    public function destroy($guard_name, Request $request){
       try{
            $member = Groupmember::find($request->id);
            if($member){
                $member->delete();
                return response()->json("Successfully deleted");
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
