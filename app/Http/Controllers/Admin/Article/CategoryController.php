<?php

namespace App\Http\Controllers\Admin\Article;

use App\Model\Admin\Article\Category;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;
use App\Http\Requests\Admin\Article\CategoryRequest;
use App\Http\Controllers\Admin\BaseController;
class CategoryController extends BaseController
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
    public function store(CategoryRequest $request)
    {
        try{
            $data = array();
            $data['title'] = $request->title??'';
            $data['description'] = $request->description??'';
            $data['meta_title'] = $request->meta_title??'';
            $data['meta_keyword'] = $request->meta_keyword??'';
            if($request->image){
                $imagename = explode('.',$request->image[0]['name'])[0];
                $data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.article_category_image'),$imagename);
                $data['alt'] = $imagename;
            }
            $category = Category::create($data);
            return $this->sendResponse($category,'Successful Created', 201);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Admin\Article\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Admin\Article\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        try{
            return $this->sendResponse($category,'Successful', 200);
         }
         catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
         }
         
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Admin\Article\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, Category $category)
    {
        try{
            $data = array();
            $data['title'] = $request->title??$category->title;
            $data['description'] = $request->description??$category->description;
            $data['meta_title'] = $request->meta_title??$category->meta_title;
            $data['meta_keyword'] = $request->meta_keyword??$category->meta_keyword;
            if($request->image){
                $imagename = explode('.',$request->image[0]['name'])[0];
                $data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.article_category_image'),$imagename);
                $data['alt'] = $imagename;
                $this->AwsDeleteImage($category->image);
            }
            $category->update($data);
            return $this->sendResponse($category,'Successful updated', 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Admin\Article\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        try{
            $this->AwsDeleteImage($category->image);
            $category->delete();
            return $this->sendResponse('','successfully deleted', 200);
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
            $category = Category::latest()->paginate($size);
            return $this->sendResponse($category, 'success', 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }

    }
}
