<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Admin\Article\Posts;
use App\Model\Admin\Article\Comment;
use App\Model\Admin\Article\Category;
use App\Model\Admin\Article\Tags;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Front\Article\CommentRequest;

class ArticleController extends BaseController
{
    public function postList($count=3)
    {
        
        return response()->json(Posts::with('category','tags')->latest()->paginate($count));
    }

    public function recentsPost()
    {        
        try{
            return $this->sendResponse(Posts::with('category','tags')->latest()->paginate(3),'success');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function category($slug)
    {
        try{
            return $this->sendResponse(Category::where('slug',$slug)->first(),'success');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function categoryList()
    {
        try{
            return $this->sendResponse(Category::latest()->get(),'success');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function keywordList()
    {
        try{
            return $this->sendResponse(Tags::latest()->get(),'success');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    
    public function postPerSlug($slug)
    {
        try{
            return $this->sendResponse(Posts::with('category','tags','comments')->where('slug',$slug)->first(),'success');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function postPerCategory($category_id)
    {
        try{
            return $this->sendResponse(Posts::with('category','tags')->where('category_id',$category_id)->latest()->get(),'success');
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function searchPost(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [
                'title'=>['required'],
                'category_id'=>'exists:article_categories,id',
            ]);
            if ($validator->fails()) {
                return $this->errorValidate($validator->errors(), 422);
            }
            $category_id = $request->category_id??0;
            if(empty($category_id)){
                $data = Posts::with('category','tags')
                ->where('title','like',"%$request->title%")->get();
            }
            else{
                $data = Post::with('category','tags')->where('title','like',"%$request->title%")->where('category_id',$request->category_id)->get();
                if($data->count() < 1){
                    $data = Posts::with('category','tags')->where('title','like',"%$request->title%")->get();
                }
            }
            return $this->sendResponse($data,'Successful', 200);
        }
        catch(Exception $e){
           return $this->sendError($e->getMessage(), 500);
        }
    }

    public function addComment(CommentRequest $request)
    {
        try{
            $data = array();
            $data['posts_id'] = $request->post_id??0;
            $data['name'] = $request->name??'';
            $data['description'] = $request->description??'';
            $comment = Comment::create($data);
            return $this->sendResponse($comment,'Successful', 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
