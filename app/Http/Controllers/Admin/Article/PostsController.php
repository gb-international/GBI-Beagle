<?php

namespace App\Http\Controllers\Admin\Article;

use App\Model\Admin\Article\Posts;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;
use App\Http\Requests\Admin\Article\PostRequest;
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
        //
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
    public function edit(Posts $posts)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Admin\Article\Posts  $posts
     * @return \Illuminate\Http\Response
     */
    public function update(PostRequest $request, Posts $posts)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Admin\Article\Posts  $posts
     * @return \Illuminate\Http\Response
     */
    public function destroy(Posts $posts)
    {
        
    }
}
