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
    public function index(Request $request){
        $this->validate($request, [ 
            'tour_id' => 'required',
            'user_type'=>'required'
        ]);
        $where = ['tour_id'=>$request->tour_id,'user_type'=>$request->user_type];
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
        if($request->details){
            foreach ($request->details as $data) {
                if($guard_name == "school"){
                    $data['edu_institute_id'] = $user->id??0;
                    $data['school_id'] = $request->school_id??NULL;
                }
                else if($guard_name == "company"){
                    $data['company_user_id'] = $user->id??0;
                    $data['company_id'] = $request->company_id??NULL;
                }
                else if($guard_name == "family"){
                    $data['family_id'] = $user->id??NULL;
                }
                $data['tour_id'] = $request->tour_id??'';
                $data['user_type'] = $request->user_type??'';
                Groupmember::create($data);
            }
        }
        return response()->json(['success','Data added successfully']);
    }

    public function update(Request $request){
        $group_member = Groupmember::find($request->id);
        $group_member->update($request->all());
        return response()->json('success');
    }

    public function destroy(Request $request){
        $member = Groupmember::find($request->id);
        $member->delete();
        return response()->json("Successfully deleted");
    }
}
