<?php
/* 
Created by : Manas
Purpose : Assign or Remove User Department & Roles

*/
namespace App\Http\Controllers\Admin\RoleAndPermission;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Model\RoleAndPermission\UserRolePermission;
//use Spatie\Permission\Models\SubPermissions;
//use Spatie\Permission\Models\Permission;
//use Spatie\Permission\Models\Department;
use App\Http\Resources\UserRoleResource;
use App\Model\RoleAndPermission\UserRole;
use App\Model\RoleAndPermission\Role;

class UserRoleController extends Controller
{

    public function all($size)
    {
        $allData = UserRole::latest('updated_at')
            ->paginate($size);

        return UserRoleResource::collection($allData);
    }

    /*public function index()
    {
        return UserRolePermission::all();
    }*/


    public function store(Request $request)
    {   
        $userRole = new UserRole;

        $userRole->user_id = $request->user_id;
        $userRole->department_id = $request->department_id;
        $userRole->role_id = $request->role_id;
        $userRole->save();

        //PermissionUser::create($this->validateRequest($request));
        return response()->json("Role & Department Assigned");
    }


   /* public function edit(UserRolePermission $permission)
    {
        return response()->json($permission);
    } */

    public function update(Request $request, UserRole $userRole)
    {
        $userRole->update($this->validateRequest($request));
        return response()->json(['message'=>'Updated Succesfully']);
    }

    public function destroy(UserRole $userRole)
    {
        $userRole->delete();
        return response()->json(['message'=>'Removed Succesfully']);
    }

    public function validateRequest($request)
    {
      return $this->validate($request, [
        'user_id' => 'required',
        'department_id' => 'required',
        'role_id' => 'required'
      ]);
    }
}
