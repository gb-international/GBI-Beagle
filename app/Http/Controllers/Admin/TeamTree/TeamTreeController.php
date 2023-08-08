<?php

/* ************************************************
      Author: Manas
      **************************************************** */
/* Purpose: To fetch data for displaying GBI Members in Team Tree  */

namespace App\Http\Controllers\Admin\TeamTree;

use App\Model\RoleAndPermission\Permission;
use App\Model\RoleAndPermission\Department;
use App\Model\RoleAndPermission\UserRole;
use App\Http\Resources\OrgTreeResource;
use App\Http\Controllers\Controller;
use App\Model\User\Information;
use Illuminate\Http\Request;
use App\User;

class TeamTreeController extends Controller
{
    /**
     * Display a listing of the resource (sorted New to Old).
     */
    /*public function index($dep_id)
    {    

        $data = User::where('user_type', 'GBI Member')->where('department_id', $dep_id)->orderBy('cerated_at', 'desc')->get();
        return OrgTreeResource::collection($data);

    }*/

    public function index()
    {    
        $data = User::where('user_type', 'GBI Member')->where('user_role', 1)->first();
        return new OrgTreeResource($data);
    }
    
    public function show($id)
    {
      $data = User::where('id', $id)->first();
      return new OrgTreeResource($data);
    }

}
