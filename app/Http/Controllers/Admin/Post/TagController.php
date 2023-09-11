<?php
/*
Created by : Ajay yadav 
Purpose : GBI Post Tag (Blog ) manage here

*/
namespace App\Http\Controllers\Admin\Post;
use App\Http\Controllers\Controller;
use App\Model\Post\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Admin\BaseController;
use App\Rules\AlphaSpace;
class TagController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all($size)
    {
        return response()->json(Tag::select([
            'id','title','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return response()->json(Tag::select([
            'id','title','updated_at'
            ])
            ->latest('updated_at')
            ->get(7));
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
        $validator = Validator::make($request->all(), [
            'title'=>['required',new AlphaSpace],
        ]);
        if ($validator->fails()) {
            return $this->errorValidate($validator->errors(), 422);
        }

        try{
            $tag = Tag::create($request->all());
            return $this->sendResponse($tag,'Successfully Created');
        }

        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }  
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Post\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function show(Tag $tag)
    {
        return response()->json($tag);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Post\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function edit(Tag $tag)
    {
        return response()->json($tag);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Post\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tag $tag)
    {
        $validator = Validator::make($request->all(), [
            'title'=>['required',new AlphaSpace],
        ]);
        if ($validator->fails()) {
            return $this->errorValidate($validator->errors(), 422);
        }

        try{
            $tag->update($request->all());
            return $this->sendResponse($tag,'Successfully Created');
        }

        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Post\Tag  $tag
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tag $tag)
    {
        $tag->delete();
        return response()->json('successfully deleted');
    }
}
