<?php
/* 
Created by : Manas
Purpose : View, Add or Remove User Role Permissions

*/
namespace App\Http\Controllers\Admin\RoleAndPermission;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Spatie\Permission\Models\Permission as sPermission;
use Spatie\Permission\Models\Role as sRole;

use App\Http\Resources\singlePermissionResource;
use App\Http\Resources\UserRolePermissionResource;
use App\Model\RoleAndPermission\UserRolePermission;
use App\Model\RoleAndPermission\SubPermissions;
use App\Model\RoleAndPermission\Permission;
use App\Model\RoleAndPermission\Department;
use App\Model\RoleAndPermission\UserRole;
use App\Model\RoleAndPermission\Role;
use App\User;

class UserRolePermissionController extends Controller
{

    /*public function all($size)
    {
        return response()->json(UserRolePermission::select([
            'id','user_roles_id', 'permission_id', 'sub_perms'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }*/

    
    public function showUserPermissions($userRoleId, $size)
    {
        $allData = UserRolePermission::where('user_roles_id', $userRoleId)
            ->latest('updated_at')
            ->paginate($size);

        return UserRolePermissionResource::collection($allData);
    }

    public function showPermission($userId)
    {
        $user = User::where('id', $userId)->first();
        $allData = UserRolePermission::where('user_roles_id', $user->user_role_id)->get();
        return UserRolePermissionResource::collection($allData);
    }

    public function UserPerm($permId, $userRoleId)
    {
        //$user = User::where('id', $userId)->first();
        $data = UserRolePermission::where('user_roles_id', $userRoleId)
            ->where('permission_id',  $permId)
            ->first();
        $userRole = UserRole::find($userRoleId);
        $permission = Permission::find($permId);
        //return new UserRolePermissionResource($data);
        if(!$data){
            $data = new \stdClass();
        }
        $data->user_id = $userRole->user_id;
        $data->permission_name = $permission->name;
        return response()->json($data);

    }
    /*public function index()
    {
        return UserRolePermission::all();
    }*/

    public function store(Request $request)
    {   
        /*foreach ($request->permission as $perm) {UserRolePermissionController
            UserRolePermission::create([

            ])
        }*/
        $data = UserRolePermission::where('user_roles_id', $request->user_roles_id)
            ->where('permission_id',  $request->permission_id)
            ->first();
        $user = User::where('id', $request->user_id)->first();

        if($request->view == 'true'){
            $user->givePermissionTo($request->permission_name);
        } else {
            $user->revokePermissionTo($request->permission_name);
        }
        if(!$data){
            $userRolePermission = new UserRolePermission;
            $userRolePermission->permission_id = $request->permission_id;
            $userRolePermission->user_roles_id = $request->user_roles_id;
            $userRolePermission->create = strval($request->create);
            $userRolePermission->delete = strval($request->delete);
            $userRolePermission->edit = strval($request->edit);
            $userRolePermission->view = strval($request->view);
            $userRolePermission->publish = strval($request->publish);
            $userRolePermission->save();
        } else {
            $data->create = strval($request->create);
            $data->delete = strval($request->delete);
            $data->edit = strval($request->edit);
            $data->view = strval($request->view);
            $data->publish = strval($request->publish);
            $data->save();
        }
        

        //PermissionUser::create($this->validateRequest($request));
        return response()->json("Permission Added");
    }


    public function edit(UserRolePermission $permission)
    {
        return response()->json($permission);
    }

    public function update(Request $request, UserRolePermission $permission)
    {
        $permission->update($this->validateRequest($request));
        return response()->json(['message'=>'Permission Updated']);
    }

    public function destroy(UserRolePermission $permission)
    {
        if($permission){
            $permission->delete();
            return response()->json(['message'=>'Permission Removed.']);
        } else {
            return response()->json(['message'=>'Permission Not Removed.']);
        }
        
    }

    public function validateRequest($request)
    {
      return $this->validate($request, [
        'user_roles_id' => 'required',
        'permission_id' => 'required',
        //'sub_perms' => 'required'
      ]);
    }
}
