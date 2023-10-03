<?php
/*
Edited by : Rahul Rawat studentStore function
Purpose : Manage studentStore function and validation  
*/
namespace App\Http\Controllers\Front;
use App\Http\Controllers\Controller;
use App\Model\School\EducationInstitute as EduInstitute;
use App\Http\Requests\Front\StudentTeacherRequest;
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

    public function studentStore(StudentTeacherRequest $request){
        $user_type = $this->user_category("school");
        $edu_institutes = Auth::guard($user_type)->user();
        $edu_institutes_id =  12;
        // $user = Auth::user();
        if($request->details){
            foreach ($request->details as $data) {
                $data['edu_institute_id'] = $edu_institutes_id;
                $data['tour_id'] = $request->tour_id??'';
                $data['school_id'] = $request->school_id??'';
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
