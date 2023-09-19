<?php
/* 
Created by : Ajay yadav
Edited by: Manas
Purpose : Manage Permission 
Edits: Changes in the Index & Validate request with new fields.

*/
namespace App\Http\Controllers\Admin\RoleAndPermission;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

//use App\Model\RoleAndPermission\Permission;
//use Spatie\Permission\Models\Role;

use App\Model\RoleAndPermission\Role;
use App\Model\RoleAndPermission\Permission;


class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(Permission::select([
            'id','name','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        return response()->json(Permission::all());
    }

    public function sub_perms()
    {
        return response()->json(Permission::select([
            'id','name'
            ])
            ->all()
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $permission = Permission::create($this->validateRequest($request));
        return response()->json("Successfully Added");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function show(Permission $permission)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function edit(Permission $permission)
    {
        return response()->json($permission);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Permission $permission)
    {
        $permission->update($this->validateRequest($request));
        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();
        return response()->json(['message'=>'Successfully Updated']);
    }

    public function validateRequest($request)
    {
      return $this->validate($request, [
        'name' => 'required|unique:permissions',
      ]);
    }
}
