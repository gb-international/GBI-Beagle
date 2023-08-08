<?php

namespace App\Http\Controllers\Admin\GbiMember;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\RoleAndPermission\Department;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function all($size)
    {
        return response()->json(Department::select('name','id','updated_at')
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        $Department = Department::get();
        return response()->json($Department);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $this->validate($request,[
            'name'=>'required',
            //'description'=>'required',
        ]);

        Department::create($data);

        return response()->json('succesfull created');
        
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
    public function edit(Department $Department)
    {
        return response()->json($Department);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Department $Department)
    {
        $data = $this->validate($request,[
            'name'=>'required',
            //'description'=>'required',
        ]);

        $Department->update($data);

        return response()->json('succesfull updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $Department)
    {
        $Department->delete();
        return response()->json('Successfully Deleted');
    }
}
