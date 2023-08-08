<?php

/* 
Created by: Manas
Purpose : Assign/View Parent Members

*/

namespace App\Http\Controllers\Admin\GbiMember;
use App\Http\Resources\MemberResource;
use App\Http\Controllers\Controller; 
use App\User;

class AssignParentController extends Controller
{

    public function index($role, $size, $dep_id)
    {
    	if($role == 1){
    		$members = User::where('user_type','GBI Member')
        	->where('user_role', 3)
        	->where('user_type', 'GBI Member')
            ->latest('updated_at')
            ->paginate($size);
    	}
    	else if($role == 3){
    		$members = User::where('user_type','GBI Member')
        	->whereIn('user_role', [4, 2])
        	->where('department_id', $dep_id)
        	->where('user_type', 'GBI Member')
            ->latest('updated_at')
            ->paginate($size);
    	}
    	else if($role == 4 || $role == 2){
    		$members = User::where('user_type','GBI Member')
        	->where('user_role', 5)
        	->where('department_id', $dep_id)
        	->where('user_type', 'GBI Member')
            ->latest('updated_at')
            ->paginate($size);
    	}
        
        return MemberResource::collection($members);
    }

   /* public function indexExecutives($size)
    {
        $members = User::where('user_type','GBI Member')
        	->where('user_role', 5)
        	->where('user_type', 'GBI Member')
            ->latest('updated_at')
            ->paginate($size);
        
        return MemberResource::collection($members);
    }

    public function assignedUnder($userId){
    	$members = User::where('parent_user', $userId)
    		->where('user_type', 'GBI Member')
            ->latest('updated_at')
            ->get();
        return MemberResource::collection($members);
    } */

    public function assignParent(User $user, $parentId)
    {
        $user->parent_user = $parentId;
        $user->save();
        return response()->json('Successfully Assigned.');
    }

    public function removeParent(User $user)
    {
        $user->parent_user = Null;
        $user->save();
        return response()->json('Successfully Assigned.');
    }

}
