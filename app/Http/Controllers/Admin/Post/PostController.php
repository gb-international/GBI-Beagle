<?php

namespace App\Http\Controllers\Admin\Post;
use App\Http\Controllers\Controller;
use App\Http\Requests\Post\PostRequest;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;
use App\Model\Post\Post;
use App\Model\Post\Category;
use App\Model\Post\Tag;
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;
    public function all($size)
    {
        return response()->json(Post::select([
            'id','status','title','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    
    public function index()
    {
        return response()->json(Post::select([
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
    public function store(PostRequest $request)
    {
        $data = $request->all();
        $tag_id= [];      
        foreach ($request->tags as $tag) {
            array_push($tag_id,$tag['id']);
        }

        if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            $data['image'] = $this->singleFile($request->image[0]['file'],'/images/post/',$imagename);
            $data['alt'] = $imagename;
        }

        $post = Post::create($data);
        $post->tags()->sync($tag_id);

        return response()->json('succesfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Post\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        $post->category;
        $post->tags;
        return response()->json($post);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Post\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        $post->category;
        $post->tags;
        return response()->json($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Post\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $data = $request->all();
        // $data['status'] = (int)$data['status'];
        $tag_id= [];       
        foreach ($request->tags as $tag) {
            array_push($tag_id,$tag['id']);
        }
        
        
        if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            $data['image'] = $this->singleFile($request->image[0]['file'],'/images/post/',$imagename);
            $this->deleteImg("/images/post/{$post->image}");
            $data['alt'] = $imagename;
        }

        $post->update($data);
        $post->tags()->sync($tag_id);
        return $data;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Post\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $path = '/images/post/'.$post->image;
        $this->deleteImg($path);
        $post->delete();
        return response()->json('successfully deleted');
    }
}
