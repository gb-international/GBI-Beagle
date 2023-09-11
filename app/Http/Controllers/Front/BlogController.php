<?php
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Post\Post;
use App\Model\Post\Comment;
use App\Model\Post\Category;
use App\Model\Post\Tag;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Admin\BaseController;

class BlogController extends BaseController
{
    public function list($count=3)
    {
        return response()->json(Post::with('category','tags')->paginate($count));
    }

    public function recents()
    {
        return response()->json(Post::with('category','tags')->paginate(3));
    }

    public function category($slug)
    {
        $category = Category::where('slug',$slug)->first();
        return response()->json($category);
    }

    public function categoryList()
    {
        $category = Category::get();
        return response()->json($category);
    }

    public function keywordList()
    {
        $keyword = Tag::get();
        return response()->json($keyword);
    }
    
    public function view($slug)
    {
        return response()->json(Post::with('category','tags','comments')->where('slug',$slug)->first());
    }

    public function relatedPost($category_id)
    {
        return response()->json(Post::with('category','tags')->where('category_id',$category_id)->get());
    }

    public function searchPost(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [
                'title'=>['required'],
                'category_id'=>'exists:categories,id',
            ]);
            if ($validator->fails()) {
                return $this->errorValidate($validator->errors(), 422);
            }
            $category_id = $request->category_id??0;
            if(empty($category_id)){
                $data = Post::with('category','tags')
                ->where('title','like',"%$request->title%")->get();
            }
            else{
                $data = Post::with('category','tags')->where('title','like',"%$request->title%")->where('category_id',$request->category_id)->get();
                if($data->count() < 1){
                    $data = Post::with('category','tags')->where('title','like',"%$request->title%")->get();
                }
            }
            return $this->sendResponse($data,'Successful', 200);
        }
        catch(Exception $e){
           return $this->sendError($e->getMessage(), 500);
        }
    }

    public function addComment(Request $request)
    {
        $comment = Comment::create($request->all());
        return response()->json($comment);
    }

}
