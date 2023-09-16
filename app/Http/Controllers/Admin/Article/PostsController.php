<?php

namespace App\Http\Controllers\Admin\Article;

use App\Model\Admin\Article\Posts;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;
use App\Model\Admin\Article\Tags;
use App\Http\Requests\Admin\Article\PostRequest;
use Illuminate\Support\Facades\Validator;

use App\Http\Controllers\Admin\BaseController;

class PostsController extends BaseController
{
    use ImageTrait;
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
    public function store(PostRequest $request)
    {
        try{
            $data = array();
            $data['title'] = $request->title??'';
            $data['description'] = $request->description??'';
            $data['summery'] = $request->summery??'';
            $data['meta_title'] = $request->meta_title??'';
            $data['status'] = $request->status??'';
            $data['category_id'] = $request->category_id??0;
            $data['client_type'] = $request->client_type??'eduInstitute';
            $tag_id= array();
            $meta_keyword="";   
            foreach ($request->tags as $tag) {
                if($tag['id']??'' == ''){
                    $tag = Tags::create($tag);
                }
                array_push($tag_id,$tag['id']);
                if($meta_keyword ==""){
                    $meta_keyword = $meta_keyword . $tag['title'];
                } else {
                    $meta_keyword = $meta_keyword .' '. $tag['title'];
                }
            }
            if($request->image){
                $imagename = explode('.',$request->image[0]['name'])[0];
                $data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.post_image'),$imagename);
                $data['alt'] = $imagename;
            }
    
            $post = Posts::create($data);
    
            if($post->status == 1){
                $post->published_by = $request->user_id;
            }
            $post->created_by = $request->user_id;
            $post->meta_keyword = $meta_keyword;
            $post->save();
            $post->tags()->sync($tag_id);
            return $this->sendResponse($post,'Successful Created', 201);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Admin\Article\Posts  $posts
     * @return \Illuminate\Http\Response
     */
    public function show(Posts $posts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Admin\Article\Posts  $posts
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try{
            $posts = Posts::where('id',$id??0)->firstOrFail();
            $posts->category;
            $posts->tags;
            return $this->sendResponse($posts,'Successful', 200);
         }
         catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
         }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Admin\Article\Posts  $posts
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, $id)
    {
        try{
            $post = Posts::where('id',$id??0)->firstOrFail();
            $data = array();
            $data['title'] = $request->title??$post->title;
            $data['description'] = $request->description??$post->description;
            $data['summery'] = $request->summery??$post->summery;
            $data['meta_title'] = $request->meta_title??$post->meta_title;
            $data['status'] = $request->status??$post->status;
            $data['category_id'] = $request->category_id??$post->category_id;
            $data['client_type'] = $request->client_type??$post->client_type;
            $tag_id= array();
            $meta_keyword="";   
            foreach ($request->tags as $tag) {
                if($tag['id']??'' == ''){
                    $tag = Tags::create($tag);
                }
                array_push($tag_id,$tag['id']);
                if($meta_keyword ==""){
                    $meta_keyword = $meta_keyword . $tag['title'];
                } else {
                    $meta_keyword = $meta_keyword .' '. $tag['title'];
                }
            }
            if($request->image){
                $imagename = explode('.',$request->image[0]['name'])[0];
                $data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.post_image'),$imagename);
                $data['alt'] = $imagename;
                $this->AwsDeleteImage($post->image);
            }
            $post->update($data);
            $post->last_editor = $request->user_id??$post->last_editor;
            $post->meta_keyword = $meta_keyword??$post->meta_keyword;
            //$post->status = 0;
            $post->save();
            $post->tags()->sync($tag_id);
            return $this->sendResponse($post,'Successful Created', 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Admin\Article\Posts  $posts
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $post = Posts::where('id',$id??0)->firstOrFail();
            $this->AwsDeleteImage($post->image);
            $post->delete();
            return $this->sendResponse('','Successful', 200);
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
            $post = Posts::with('category','tags')->latest()->paginate($size);
            return $this->sendResponse($post, 'success', 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function publish(Request $req){
        try{
            $validator = Validator::make($req->all(), [
                'post_id' => 'required|exists:article_posts,id',
                'user_id'=>'required|exists:users,id',
                "status"=> "required|in:0,1",
            ]);
            if ($validator->fails()) {
                return $this->errorValidate($validator->errors(), 422);
            }
            $post = Posts::where('id',$req->post_id??0)->firstOrFail();
            $post->published_by = $req->user_id??0;
            $post->status = $req->status??0;
            $post->save();
            return $this->sendResponse($post, 'success', 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
