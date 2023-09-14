<?php
namespace App\Http\Controllers\Admin\Article;
use App\Model\Admin\Article\Tags;
use Illuminate\Http\Request;
use App\Http\Requests\Admin\Article\TagRequest;
use App\Http\Controllers\Admin\BaseController;

class TagsController extends BaseController
{
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
    public function store(TagRequest $request)
    {
        try{
            $data = array();
            $data['title'] = $request->title??'';
            $tag = Tags::create($data);
            return $this->sendResponse($tag,'Successful Created', 201);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Admin\Article\Tags  $tags
     * @return \Illuminate\Http\Response
     */
    public function show(Tags $tags)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Admin\Article\Tags  $tags
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tags = Tags::where('id',$id??0)->firstOrFail();
        try{
            return $this->sendResponse($tags,'Successful', 200);
         }
         catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
         }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Admin\Article\Tags  $tags
     * @return \Illuminate\Http\Response
     */
    public function update(TagRequest $request, $id)
    {
        try{
            $tags = Tags::where('id',$id??0)->firstOrFail();
            $data = array();
            $data['title'] = $request->title??$tags->title;
            $tags->update($data);
            return $this->sendResponse($tags,'Successful updated', 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Admin\Article\Tags  $tags
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            Tags::where('id',$id??0)->delete();
            return $this->sendResponse('','Successfully Created', 200);
            }
            catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
            }
            
    }
    public function all($size = 0)
    {
        try{
            if (empty($size)) {
                $size = 10;
            }
            $tags = Tags::latest()->paginate($size);
            return $this->sendResponse($tags, 'success', 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
