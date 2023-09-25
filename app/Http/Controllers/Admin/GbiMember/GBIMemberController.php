<?php

/* 
Created by : Ajay yadav
Edited by: Manas
Purpose : Manage Gbi member 

*/

namespace App\Http\Controllers\Admin\GbiMember;

use App\User;
use Validator;
use App\Helpers\AssignPerms;
use App\Model\User\Information;
use App\Http\Controllers\Controller; 
//use Spatie\Permission\Traits\HasRoles;
//use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;
use App\Rules\EmailValidate;
use App\Rules\AlphaSpace;
use App\Rules\PhoneNubmerValidate;
use Illuminate\Validation\Rule;
use App\Jobs\GbiNewMemberWelcomeMailJob;
use App\Http\Resources\MemberResource;
use App\Model\RoleAndPermission\UserRole;
use App\Model\RoleAndPermission\Permission;
use App\Model\RoleAndPermission\UserRolePermission;


class GBIMemberController extends Controller
{

    public function all($size)
    {
        $members = User::where('user_type','GBI Member')
            ->latest('updated_at')
            ->paginate($size);
        
        return MemberResource::collection($members);
    }

	public function index()
	{
		return MemberResource::collection(
            User::where('user_type','GBI Member')->get()
        );

	}


    public function register(Request $request){ 

        $this->validate($request, [ 
            'name' => ['required',new AlphaSpace],
            'gender' => 'required',
            'address' => 'required|min:3',
            'email' => ['required','email',new EmailValidate],
            'phone_no' => ['required','numeric',new PhoneNubmerValidate, 'unique:informations,phone_no'],
            'password' => 'required', 
            'c_password' => 'required|same:password', 
            'role_id' => 'required|exists:roles,id',
            'department_id' => 'required|exists:department,id',
        ]);

        // if ($validator->fails()) { 
        //     return response()->json(['error'=>$validator->errors()], 401);            
        // }

        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input);

        //$user->assignRole($request->role_name);
        $userRole = new UserRole;
        $userRole->user_id = $user->id;
        $userRole->department_id = $request->department_id;
        $userRole->role_id = $request->role_id;
        $userRole->save();

        $user->user_role = $request->role_id; //not required
        $user->user_role_id = $userRole->id;
        $user->department_id = $request->department_id; //not required
        $user->user_type = 'GBI Member';
        $user->save();

        if($user->user_role == 1){
            //$permissions = Permission::all();
            //$user->syncPermissions($permissions);
            $user->assignRole('Admin');

            if($userRole->department_id == 1){
                $assignPerm = new AssignPerms;
                $assignPerm->management($user->user_role_id);
            }
        }

        if($user->user_role == 2){

        }

        if($user->user_role == 3){
            $userRolePermission = new UserRolePermission;
            $userRolePermission->permission_id = 81;
            $userRolePermission->user_roles_id = $user->user_role_id;
            $userRolePermission->create = 'true';
            $userRolePermission->delete = 'false';
            $userRolePermission->edit = 'true';
            $userRolePermission->view = 'true';
            $userRolePermission->publish = 'true';
            $userRolePermission->save();

            $userRolePermission = new UserRolePermission;
            $userRolePermission->permission_id = 94;
            $userRolePermission->user_roles_id = $user->user_role_id;
            $userRolePermission->create = 'true';
            $userRolePermission->delete = 'false';
            $userRolePermission->edit = 'true';
            $userRolePermission->view = 'true';
            $userRolePermission->publish = 'true';
            $userRolePermission->save();
        }

        if($userRole->department_id == 2){
            $assignPerm = new AssignPerms;
            $assignPerm->finance($user->user_role_id);
        }

        if($userRole->department_id == 3){
            $assignPerm = new AssignPerms;
            $assignPerm->reservations($user->user_role_id);
        }

        if($userRole->department_id == 4){
            $assignPerm = new AssignPerms;
            $assignPerm->operations($user->user_role_id);
        }

        if($userRole->department_id == 5){
            $assignPerm = new AssignPerms;
            $assignPerm->sales($user->user_role_id);
        }

        if($userRole->department_id == 6){
            $assignPerm = new AssignPerms;
            $assignPerm->multimedia($user->user_role_id);
        }

        if($userRole->department_id == 8){
            $assignPerm = new AssignPerms;
            $assignPerm->softdept($user->user_role_id);
        }
        
        // Add more information to the informations table
        
        $more  = new Information();
        $more->user_id = $user->id;
        $more->phone_no = $request->phone_no;
        $more->dob = $request->dob;
        $more->address = $request->address;
        $more->varified = '1';
        $more->photo = 'user.png';
        $more->gender = $request->gender;
        $more->save();
        // send mail 
        $data = ['name'=>$user->name,'email'=>$user->email ];
            
        GbiNewMemberWelcomeMailJob::dispatch($data);
        // End more information 
        return response()->json('Successfully Registered !!!');
    }

    public function edit($id){
        $member = User::where('id', $id)
            ->first();
        //return response()->json($member);
        return new MemberResource($member);
    }

   public function update(Request $request,$id){
    print_r($id);
    exit;
       $user = User::where('id',$id)->first();
       $information_id = (Information::where('user_id',$id)->first()->id)?(Information::where('user_id',$id)->first()->id):0;
       $this->validate($request, [ 
            'name' => ['required',new AlphaSpace],
            'gender' => 'required',
            'address' => 'required|min:3',
            'email' => [
                'required','email',new EmailValidate,
                'unique:users,email,'.$id.',id'
            ],
            'phone_no' => ['required','numeric',new PhoneNubmerValidate, 'unique:informations,phone_no,'.$information_id.',id'],
            'role_id' => 'required',
            'department_id' => 'required',
            'dob'=> 'required'
            ]);

        if($request->department_id !== $user->department_id){
            
            $assignPerm = new AssignPerms;
            $assignPerm->delPerms($user->user_role_id);

            if($request->department_id == 1){
                $assignPerm = new AssignPerms;
                $assignPerm->management($user->user_role_id);
            }

            if($request->department_id == 2){
                $assignPerm = new AssignPerms;
                $assignPerm->finance($user->user_role_id);
            }

            if($request->department_id == 3){
                $assignPerm = new AssignPerms;
                $assignPerm->reservations($user->user_role_id);
            }

            if($request->department_id == 4){
                $assignPerm = new AssignPerms;
                $assignPerm->operations($user->user_role_id);
            }

            if($request->department_id == 5){
                $assignPerm = new AssignPerms;
                $assignPerm->sales($user->user_role_id);
            }

            if($request->department_id == 6){
                $assignPerm = new AssignPerms;
                $assignPerm->multimedia($user->user_role_id);
            }

            if($request->department_id == 8){
                $assignPerm = new AssignPerms;
                $assignPerm->softdept($user->user_role_id);
            }
        }
        
        $user->update([
            'name' => $request->name,
            //'gender' => $request->gender,
            'email' => $request->email,
            'department_id' => $request->department_id,
            'user_role' => $request->role_id
        ]);

        if($user->user_role == 1){
            //$permissions = Permission::all();
            //$user->syncPermissions($permissions);
            $user->assignRole('Admin');
        } else {
            $user->removeRole('Admin');
        }

        $info = [
            'user_id' => $user->id,
            'phone_no' => $request->phone_no,
            'address' => $request->address,
            'dob' => $request->dob,
            'gender' => $request->gender
        ];
        $userRole = [
            'user_id' => $user->id,
            'department_id' => $request->department_id,
            'role_id' => $request->role_id,
        ];

        if($user->userRole){
            $user->userRole->update($userRole);
        }else{
            $uRole = UserRole::create($userRole);
            $user->update([
                'user_role_id' => $uRole->id
            ]);
        }

        if($user->information){
            $user->information->update($info);
        }else{
            Information::create($info);
        }

        /*if($request->old_role != $request->role_name){
            if($request->old_role != ''){
                $user->removeRole($request->old_role);
            }
            $user->assignRole($request->role_name);
        }*/

        return $user;
   }

    public function destroy($id){
        $user = User::where('id', $id)->first();
        $user->delete();
        return response()->json('Member deleted');
    }

    // Sales man list
    
    public function memberType($type = 'salesman')
    {
        return User::select('id','name','email')->where('user_type', $type)->get();
    }
}
