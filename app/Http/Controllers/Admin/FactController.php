<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Fact;
use App\Http\Requests\Admin\FactRequest;
use Validator;
use Illuminate\Validation\Rule; //import Rule class 
use App\Http\Controllers\API\BaseController;

class FactController extends BaseController
{
    public function all($size=null){
        try{
            $size = empty($size)?10:$size;
            $data = Fact::paginate($size);
            if($data->count()>0){
                return response()->json($data);
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
    public function store(FactRequest $request)
    {
        try{
            $fact = new Fact;
            $fact->name = $request->name??NULL;
            $fact->description = $request->description??NULL;
            $fact->status = $request->status??0;
            $fact->city_id =$request->city_id??NULL;
            $fact->state_id = $request->state_id??NULL;
            $fact->country_id = $request->country_id??NULL;
            $fact->meta_keyword = $request->meta_keyword??NULL;
            $fact->meta_title = $request->meta_title??NULL;
            $fact->meta_description = $request->meta_description??NULL;
            $fact->save();
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
            $fact = Fact::where('id', $id)->first();
            if(!empty($fact)){
                return response()->json($fact);
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
            $fact = Fact::where('id', $id)->first();
            if(!empty($fact)){
                $fact->city;
                return response()->json($fact);
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
                'name' => ['required',Rule::unique('facts')->ignore($id)],
                'description' => 'required',
                'status' => 'required|in:0,1',
                'city_id' =>'exists:cities,id',
                'state_id'=>'exists:states,id',
                'country_id' => 'exists:countries,id',
            ]);
            if ($validator->fails()) { 
                return response()->json(['errors'=>$validator->errors()], 422);            
            }
            $fact = Fact::where('id', $id)->first();
            if(!empty($fact)){
                $fact->name = $request->name??$fact->name;
                $fact->description = $request->description??$fact->description;
                $fact->status = $request->status??$fact->status;
                $fact->city_id =$request->city_id??$fact->city_id;
                $fact->state_id = $request->state_id??$fact->state_id;
                $fact->country_id = $request->country_id??$fact->country_id;
                $fact->meta_keyword = $request->meta_keyword??$fact->meta_keyword;
                $fact->meta_title = $request->meta_title??$fact->meta_title;
                $fact->meta_description = $request->meta_description??$fact->meta_description;
                $fact->save();
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
            $fact = Fact::where('id', $id)->first();
            if(!empty($fact)){
                $fact->delete();
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
    /**
     * status the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function status($id, $status)
    {
        try{
            $fact = Fact::where('id', $id)->first();
            if(!empty($fact)){
                $fact->status = $status;
                $fact->save();
                return response()->json('Successfully updated!');
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
