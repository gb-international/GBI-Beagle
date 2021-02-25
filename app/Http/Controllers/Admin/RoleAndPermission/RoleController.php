<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Role 

*/
namespace App\Http\Controllers\Admin\RoleAndPermission;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use DB;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function all($size)
    {
        return response()->json(Role::select([
            'id','name','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return \Spatie\Permission\Models\Role::all();
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
        $role = Role::create($this->validateRequest($request));
        return response()->json("Successfully Added");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role)
    {
        $role->permissions;
        return response()->json($role);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        $role->syncPermissions($request->permissions);
        $role->update($this->validateRequest($request));        
        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        $role->delete();
        return response()->json(['message'=>'Successfully Updated']);
    }

    public function validateRequest($request)
    {
      return $this->validate($request, [
        'name' => 'required',
      ]);
    }

}
