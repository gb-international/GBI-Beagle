<?php

namespace App\Http\Controllers\Admin\GbiMember;

use Validator;
use App\Http\Controllers\Admin\BaseController;
use Illuminate\Http\Request;
use App\Model\RoleAndPermission\Department;

class DepartmentController extends BaseController
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
        $validator = Validator::make($request->all(), [
            'name'=>'required',
        ]);
        // return $this->sendError("dd", 500);
        if ($validator->fails()) {
            // return response()->json(["status"=>422, $validator->errors()], 422);
            // $e->getMessage(), 500
            return $this->errorValidate($validator->errors());
        }
        try{
            $data = array(); 
            $data['name'] = $request->name??''; 
            Department::create($data);
            return response()->json('succesfull created');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
            // return response()->json(['status' => 500, 'message' => $e->getMessage()], 500, [], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
        }
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
        // $data = $this->validate($request,[
        //     'name'=>'required',
        //     //'description'=>'required',
        // ]);
        $validator = Validator::make($request->all(), [
            'name'=>'required',
        ]);

        if ($validator->fails()) {
            return $this->errorValidate($validator->errors());    
        }
        try{
            $data = array(); 
            $data['name'] = $request->name??''; 
            // Department::create($data);
            // return response()->json('succesfull created');
            $Department->update($data);
            return response()->json('succesfull updated');
        }
        catch(Exception $e){
            $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $Department)
    {
        try{
            $Department->delete();
            return response()->json('Successfully Deleted');
        }catch(Exception $e){
            $this->sendError($e->getMessage(), 500);
        }
    }
}
