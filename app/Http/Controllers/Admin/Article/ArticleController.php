<?php
/* 

Created by: Manas
Purpose : GBI Article Managment Controller

*/

namespace App\Http\Controllers\Admin\Article;

use App\Http\Controllers\Controller;
use App\Http\Requests\Article\ArticleRequest;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;
use App\Model\Article\Article;
use App\Model\Post\Category;
use App\Model\Post\Tag;
use App\Jobs\Notifications;

/**
     *
     * @OA\Tag(
     *     name="Articles",
     *     description="API Endpoints of Articles"
     * )
*/
class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    /**
     * @OA\Get(
     *      path="/articles/all/{size}",
     *      tags={"Articles"},
     *      summary="Get list of articles",
     *      description="Returns list of articles, paginated by page size mentioned",
     *      @OA\Parameter(
     *          name="size",
     *          description="Pagination size per page",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *     )
     */
    public function all($size)
    {
        return response()->json(Article::select([
            'id','status','title','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    

    public function index()
    {
        return response()->json(Article::select([
            'id','status','title','updated_at'
            ])
            ->latest('updated_at')
            ->get());
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

    /**
     * @OA\Post(
     *      path="/articles",
     *      tags={"Articles"},
     *      summary="Store new Article",
     *      description="Stores new data to the database and returns the stored data",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent
     *      ),
     *      @OA\Response(
     *          response=201,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     * )
    */
    public function store(ArticleRequest $request)
    {
        $data = $request->except('meta_keyword');
        $tag_id= array();
        $meta_keyword="";   
        foreach ($request->tags as $tag) {
            if($tag['id'] == ''){
                $tag = Tag::create($tag);
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

            $data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.article_image'),$imagename);
            $data['alt'] = $imagename;
        }

        $article = Article::create($data);

        if($article->status == 1){
            $article->published_by = $request->user_id;
        }
        $article->created_by = $request->user_id;
        $article->meta_keyword = $meta_keyword;
        $article->save();

        $article->tags()->sync($tag_id);
        /*$notifData = [
            'notification_type' => 'articles',
            'client_type' => $article->client_type,
            'category' => 'article',
            'category_id' => $article->id,
            'title' => $article->title,
            'body' => $article->summery,
        ];*/
        //return redirect()->route('notifRoute', $data);
        //return response()->json('succesfull created');
        /*setcookie('gbi_notification_type', 'articles', time() + 3600, "/");
        setcookie('gbi_notif_clientType', $article->client_type, time() + 3600, "/");
        setcookie('gbi_notif_category', 'article', time() + 3600, "/");
        setcookie('gbi_notif_categoryId', $article->id, time() + 3600, "/");
        setcookie('gbi_notif_title', $article->title, time() + 3600, "/");
        setcookie('gbi_notif_description', $article->summery, time() + 3600, "/");*/

        //$notif = (new NotificationController)->store();
        //dispatch(new Notifications($notifData));
        //event(new \App\Events\SendNotification($notifData));
        return response()->json('succesfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Article\Article  $article
     * @return \Illuminate\Http\Response
     */
     /**
     * @OA\Get(
     *      path="/articles/{id}",
     *      tags={"Articles"},
     *      summary="Get article information",
     *      description="Returns article data of the article id provided.",
     *      @OA\Parameter(
     *          name="id",
     *          description="Article Id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     * )
     */
    public function show(Article $article)
    {
        $category = Category::find($article->category_id);
        $article->category = $category->title;
        $article->tags;
        return response()->json($article);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Article\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        $article->category;
        $article->tags;
        return response()->json($article);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Article\Article  $article
     * @return \Illuminate\Http\Response
     */
    /**
     * @OA\Put(
     *      path="/articles/{id}",
     *      tags={"Articles"},
     *      summary="Update existing Article",
     *      description="Updates article data of the article id provided and returns the updated data",
     *      @OA\Parameter(
     *          name="id",
     *          description="Article Id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent
     *      ),
     *      @OA\Response(
     *          response=202,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="Resource Not Found"
     *      )
     * )
     */
    public function update(Request $request, Article $article)
    {

        $data = $request->except('meta_keyword');
        $tag_id= [];
        $meta_keyword="";   
        foreach ($request->tags as $tag) {
            if($tag['id'] == ''){
                $tag = Tag::create($tag);
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

            $data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.article_image'),$imagename);
            $data['alt'] = $imagename;
        }else{
            unset($data['image']);
        }

        $article->update($data);
        $article->last_editor = $request->user_id;
        $article->meta_keyword = $meta_keyword;
        //$article->status = 0;
        $article->save();
        $article->tags()->sync($tag_id);

        $notifData = [
            'notification_type' => 'articles',
            'client_type' => $article->client_type,
            'category' => 'article',
            'category_id' => $article->id,
            'title' => $article->title,
            'body' => $article->summery,
        ];
        dispatch(new Notifications($notifData));

        return $data;
    }
    
    public function publish(Article $article, $status, $user_id){

        $article->published_by = $user_id;
        if($status == 'publish'){
            $article->status = 1;
            $article->save();
            $notifData = [
                'notification_type' => 'articles',
                'client_type' => $article->client_type,
                'category' => 'article',
                'category_id' => $article->id,
                'title' => $article->title,
                'body' => $article->summery,
            ];
            dispatch(new Notifications($notifData));
        } else {
            $article->status = 0;
            $article->save();
        }
    }
    
    public function sendNotif($data){
        return redirect()->route('notifRoute', $data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Article\Article  $article
     * @return \Illuminate\Http\Response
     */

    /**
     * @OA\Delete(
     *      path="/articles/{id}",
     *      tags={"Articles"},
     *      summary="Delete existing Article",
     *      description="Deletes a record and returns no content",
     *      @OA\Parameter(
     *          name="id",
     *          description="Article Id",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *      ),
     *      @OA\Response(
     *          response=204,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="Resource Not Found"
     *      )
     * )
     */
    public function destroy(Article $article)
    {
        $this->AwsDeleteImage($article->image);
        $article->delete();
        return response()->json('successfully deleted');
    }
}
