<?php

namespace App\Helpers;
use App\Model\RoleAndPermission\Permission;
use App\Model\RoleAndPermission\UserRolePermission;

class AssignPerms  
{
    public function assign($permId,  $userRoleId, $perms){

    	$userRolePermission = new UserRolePermission;
        $userRolePermission->permission_id = $permId;
        $userRolePermission->user_roles_id = $userRoleId;
        $userRolePermission->create = $perms['create'];
        $userRolePermission->delete = $perms['delete'];
        $userRolePermission->edit = $perms['edit'];
        $userRolePermission->view = $perms['view'];
        $userRolePermission->publish = $perms['publish'];
        $userRolePermission->save();
    }

    public function management($userRoleId){

    	$perms = Permission::all();

    	foreach ($perms as $perm) {
    		$userRolePermission = new UserRolePermission;
	        $userRolePermission->permission_id = $perm->id;
	        $userRolePermission->user_roles_id = $userRoleId;
	        $userRolePermission->create = 'true';
	        $userRolePermission->delete = 'true';
	        $userRolePermission->edit = 'true';
	        $userRolePermission->view = 'true';
	        $userRolePermission->publish = 'true';
	        $userRolePermission->save();
    	}
    	
    }

    public function finance($userRoleId){

    	$perms = ermission::whereIn('id', [58, 57, 84, 83, 62, 64, 63, 86, 88, 93, 92, 87, 75, 66, 61, 60, 59, 56, 91, 54])->get();

    	foreach ($perms as $perm) {
    		$userRolePermission = new UserRolePermission;
	        $userRolePermission->permission_id = $perm->id;
	        $userRolePermission->user_roles_id = $userRoleId;
	        $userRolePermission->create = 'true';
	        $userRolePermission->delete = 'false';
	        $userRolePermission->edit = 'true';
	        $userRolePermission->view = 'true';
	        $userRolePermission->publish = 'false';
	        $userRolePermission->save();
    	}
    	
    }

    public function reservations($userRoleId){

    	$perms = ermission::whereIn('id', [93, 91, 88, 86, 84, 71, 70, 62, 63, 64, 59, 58, 54])->get();

    	foreach ($perms as $perm) {
    		$userRolePermission = new UserRolePermission;
	        $userRolePermission->permission_id = $perm->id;
	        $userRolePermission->user_roles_id = $userRoleId;
	        $userRolePermission->create = 'true';
	        $userRolePermission->delete = 'true';
	        $userRolePermission->edit = 'true';
	        $userRolePermission->view = 'true';
	        $userRolePermission->publish = 'false';
	        $userRolePermission->save();
    	}
    	
    }

    public function sales($userRoleId){
    	
    	$perms = [];

    	foreach ($perms as $perm) {
    		$userRolePermission = new UserRolePermission;
	        $userRolePermission->permission_id = $perm->id;
	        $userRolePermission->user_roles_id = $userRoleId;
	        $userRolePermission->create = 'true';
	        $userRolePermission->delete = 'false';
	        $userRolePermission->edit = 'true';
	        $userRolePermission->view = 'true';
	        $userRolePermission->publish = 'true';
	        $userRolePermission->save();
    	}
    	
    }

    public function multimedia($userRoleId){
    	
    	$perms = ermission::whereIn('id', [/*78, 79,*/ 76, 77, 72, 71, 70, 59, 58, 57])->get();

    	foreach ($perms as $perm) {
    		$userRolePermission = new UserRolePermission;
	        $userRolePermission->permission_id = $perm->id;
	        $userRolePermission->user_roles_id = $userRoleId;
	        $userRolePermission->create = 'true';
	        $userRolePermission->delete = 'true';
	        $userRolePermission->edit = 'true';
	        $userRolePermission->view = 'true';
	        $userRolePermission->publish = 'true';
	        $userRolePermission->save();
    	}
    	
    }

    public function operations($userRoleId){

    	$perms = Permission::whereIn('id', [93, 91, 60, 61, 54, 66, 57])->get();

    	foreach ($perms as $perm) {
    		$userRolePermission = new UserRolePermission;
	        $userRolePermission->permission_id = $perm->id;
	        $userRolePermission->user_roles_id = $userRoleId;
	        if($perm->id == 66 || $perm->id == 93 || $perm->id == 54 || $perm->id == 57){
	        	$userRolePermission->create = 'false';
	        	$userRolePermission->edit = 'false';
	        } else {
	        	$userRolePermission->create = 'true';
	        	$userRolePermission->edit = 'true';
	        }
	        $userRolePermission->delete = 'false';
	        $userRolePermission->view = 'true';
	        $userRolePermission->publish = 'false';
	        $userRolePermission->save();
    	}
    	
    }

    public function softdept($userRoleId){

    	$perms = Permission::all();

    	foreach($perms as $perm) {
    		$userRolePermission = new UserRolePermission;
	        $userRolePermission->permission_id = $perm->id;
	        $userRolePermission->user_roles_id = $userRoleId;
	        $userRolePermission->create = 'true';
	        $userRolePermission->delete = 'false';
	        $userRolePermission->edit = 'true';
	        $userRolePermission->view = 'true';
	        $userRolePermission->publish = 'true';
	        $userRolePermission->save();
    	}
    	
    }

    public function delPerms($userRoleId){

    	$perms = UserRolePermission::where('user_roles_id', $userRoleId)->get();

    	foreach ($perms as $perm) {
    		$data = UserRolePermission::find($perm->id);
	        $data->delete();
    	}
    	
    }
}
