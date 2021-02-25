<?php

namespace App\Http\Controllers\Admin\Gallery;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Gallery\Gallery;
use App\Model\Gallery\Galleryimage;
use App\Traits\ImageTrait;
class GalleryController extends Controller
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
    public function store(Request $request)
    {
        $data = $this->validate($request,[
            'title'=>'required',
            'school_id'=>'required',
            'category'=>'required',
            'slug'=>''
        ]);

        $gallery = Gallery::create($data);
        
        foreach ($request->images as $imagedata) {
            $imagename = explode('.',$imagedata['name'])[0];
            $path = $this->singleFile($imagedata['file'],'/images/gallery/',$imagename);
            Galleryimage::create([
                'gallery_id'=>$gallery->id,
                'path'=>$path,
                'alt'=>$imagename
                ]);
            }
            
        $gallery = $gallery->update(['slug'=>$gallery->slug.'-'.$gallery->id]);
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
        //
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
    public function update(Request $request,Gallery $gallery)
    {
        $data = $this->validate($request,[
            'title'=>'required',
            'school_id'=>'required',
            'category'=>'required',
            'slug'=>''
        ]);

        $gallery->update($data);
        foreach ($request->images as $imagedata) {
            $imagename = explode('.',$imagedata['name'])[0];
            $path = $this->singleFile($imagedata['file'],'/images/gallery/',$imagename);
            Galleryimage::create([
                'gallery_id'=>$gallery->id,
                'path'=>$path,
                'alt'=>$imagename
            ]);
        }
        $gallery = $gallery->update(['slug'=>$gallery->slug.'-'.$gallery->id]);
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
            $this->deleteImg('/images/gallery/'.$image->path);
        }
        $gallery->delete();
        return response()->json('Successfully Deleted');
    }

    public function galleryImageDelete(Request $request){
        $galleryimage = Galleryimage::where('id',$request->id)->first();
        // delete image 
        $this->deleteImg('/images/gallery/'.$galleryimage->path);
        $galleryimage->delete();
        return response()->json('Successfully deleted');
    }
}
