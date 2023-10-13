<?php

namespace App\Http\Controllers\Admin\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Gallery\Gallery;
use App\Model\Gallery\Galleryimage;
use App\Traits\ImageTrait;
use App\Http\Requests\Admin\GalleryRequest;
use App\Http\Controllers\Admin\BaseController;

class GalleryController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size)
    {
        return response()->json(Gallery::with('school:id,school_name')
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        $gallery = Gallery::with('school:id,school_name')->get();
        return response()->json($gallery);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(GalleryRequest $request)
    {
        try{
            $gallery = Gallery::create(["title"=>$request->title??"", "school_id"=>$request->school_id??0, "category"=>$request->category??""]);
            if(count($request->images) > 0){
                foreach ($request->images as $imagedata) {
                    $imagename = explode('.',$imagedata['name'])[0];
                    $path=$this->AwsFileUpload($imagedata['file'],config('gbi.gallery_image'),$imagename);
                    $data = ['gallery_id'=>$gallery->id,'path'=>$path,'alt'=>$imagename];
                    Galleryimage::create($data);
                }
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        } 
        return response()->json('succesfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $gallery = Gallery::where('id', $id)->first();
        $gallery->images;
        return response()->json($gallery);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Gallery $gallery)
    {
        $gallery->images;
        return response()->json($gallery);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(GalleryRequest $request,Gallery $gallery)
    {
        try{
            $gallery->update(["title"=>$request->title??$gallery->title, "school_id"=>$request->school_id??$gallery->school_id, "category"=>$request->category??$gallery->category]);
            foreach ($request->images as $imagedata) {
                $imagename = explode('.',$imagedata['name'])[0];
                $path=$this->AwsFileUpload($imagedata['file'],config('gbi.gallery_image'),$imagename);
                $data = ['gallery_id'=>$gallery->id,'path'=>$path,'alt'=>$imagename];
                Galleryimage::create($data);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('succesfull updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gallery $gallery)
    {
        foreach ($gallery->images as $image) {
            $this->AwsDeleteImage($image->path);
        }
        $gallery->delete();
        return response()->json('Successfully Deleted');
    }

    public function galleryImageDelete(Request $request){
        try{
            $galleryimage = Galleryimage::where('id',$request->id)->first();
            if(!empty($galleryimage)){
                $this->AwsDeleteImage($galleryimage->path);
                $galleryimage->delete();
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('Successfully deleted');
    }
}
