<?php
/*
Created by : Manas 
Purpose : GBI Article Category manage here

*/
namespace App\Http\Controllers\Admin\Article;
use App\Http\Controllers\Controller;
use App\Model\Post\Category;
use App\Http\Requests\Article\CategoryRequest;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size)
    {
        return response()->json(Category::select([
            'id','description','title','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return response()->json(Category::select([
            'id','description','title','updated_at'
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
    public function store(CategoryRequest $request)
    {
        $data = $request->all();

        if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            $data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.category_image'),$imagename);
            $data['alt'] = $imagename;
        }
        Category::create($data);
        return response()->json('succesfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Article\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return response()->json($category);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Article\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        return response()->json($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Article\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, Category $category)
    {
        $data = $request->all();        
        if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            $data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.category_image'),$imagename);
            $this->AwsDeleteImage($category->image);
        }else{
            unset($data['image']);
        }
        $category->update($data);
        return response()->json('succesfull created');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Article\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $this->AwsDeleteImage($category->image);
        $category->delete();
        return response()->json('successfully deleted');
    }
}
