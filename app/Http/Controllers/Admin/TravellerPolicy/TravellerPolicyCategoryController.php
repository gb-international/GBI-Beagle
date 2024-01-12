<?php

namespace App\Http\Controllers\Admin\TravellerPolicy;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController;
use App\Model\TravellerPolicy\TravellerPolicyCategory;
use Illuminate\Validation\Rule;
use Validator;
class TravellerPolicyCategoryController extends BaseController
{
    //Fetch all data
    public function all($size=null){
        try{
            $size = empty($size)?10:$size;
            $data = TravellerPolicyCategory::paginate($size);
            return response()->json($data);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        try{
            $validator = Validator::make($request->all(), [ 
                'name' => ['required', Rule::unique('traveller_policy_categorys')],
            ]);
    
            if ($validator->fails()) { 
                return response()->json(['error'=>$validator->errors()], 422);            
            }
            $data = array("name" => $request->name??'');
            TravellerPolicyCategory::create($data);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successful created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $traveller_policy_category = TravellerPolicyCategory::where('id', $id)->first();
            if(!empty($traveller_policy_category)){
                return response()->json($traveller_policy_category);
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }   
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try{
            $traveller_policy_category = TravellerPolicyCategory::where('id', $id)->first();
            if(!empty($traveller_policy_category)){
                return response()->json($traveller_policy_category);
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            $validator = Validator::make($request->all(), [ 
                'name' => ['required', Rule::unique('traveller_policy_categorys')->ignore($id)],
            ]);

            if ($validator->fails()) {
                return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
            }

            $traveller_policy_category = TravellerPolicyCategory::where('id', $id)->first();
            
            if(!empty($traveller_policy_category)){
                $traveller_policy_category->name = $request->name??$traveller_policy_category->name;
                $traveller_policy_category->save();
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $traveller_policy_category = TravellerPolicyCategory::where('id', $id)->first();
            if(!empty($traveller_policy_category)){
                $traveller_policy_category->delete();
                return response()->json('successfully deleted');
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
