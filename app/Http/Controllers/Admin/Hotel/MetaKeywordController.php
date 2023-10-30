<?php

namespace App\Http\Controllers\Admin\Hotel;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\BaseController;
use Illuminate\Http\Request;
use App\Model\Hotel\MetaKeyword;
use Validator;

class MetaKeywordController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size=null)
    {
        if (empty($size)) {
            $size = 10; 
        }
        return response()->json(MetaKeyword::select([
            'id','title','updated_at'])->latest('updated_at')->paginate($size));
    }
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
                'title'=>'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
            }
            $meta_keyword = new MetaKeyword();
            $meta_keyword->title = $request->title??'';
            $meta_keyword->save();
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $meta_keyword = MetaKeyword::find($id);
        return response()->json($meta_keyword);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $meta_keyword = MetaKeyword::find($id);
        return response()->json($meta_keyword);
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
                'title'=>'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
            }            
            $meta_keyword = MetaKeyword::find($id);
            $meta_keyword->title = $request->title??$meta_keyword->title;
            $meta_keyword->save();
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
            $data = MetaKeyword::where('id',$id)->first();
            if(!empty($data)){
                $data->delete();
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('Successfully deleted');
    }
}
