<?php

/* ************************************************
      Author: Ajay 
      Edited by: Manas
      **************************************************** */
/* Edits: Added cities system, country field to json responses, Added Meta Properties and tags */

namespace App\Http\Controllers\Admin\Encyclopedia;

use App\Http\Requests\Admin\EncyclopediaRequest;
use App\Model\Encyclopedia\Encyclopedia;
use App\Model\Encyclopedia\EncyclopediasCultural;
use App\Model\Encyclopedia\EncyclopediasFood;
use App\Model\Encyclopedia\EncyclopediaImage;
use App\Model\Itinerary\Itinerary;
use App\Model\Itinerary\Itinerarypdf;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\Traits\ImageTrait;
use Illuminate\Support\Facades\File;
use App\Model\Post\Tag;
use Image;

class EncyclopediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;
    protected $data;

    public function __construct(){
        $this->data = [];
    }
    public function all($type, $size)
    {
        
        if($type == 'Cities'){
            return response()->json(Encyclopedia::whereNotNull('city_name')
            ->select([
            'id','thumbnail','banner_image','state_name','city_name','country','updated_at','slug'
            ])
            ->latest('updated_at')
            ->paginate($size));
        } else {
            return response()->json(Encyclopedia::whereNull('city_name')
            ->select([
            'id','thumbnail','banner_image','state_name','country','updated_at','slug'
            ])
            ->latest('updated_at')
            ->paginate($size));
        }
        
    }

    public function index()
    {
        return response()->json(Encyclopedia::select([
            'id','thumbnail','banner_image','state_name','city_name','country','updated_at','slug'
            ])
            ->latest('updated_at')
            ->paginate(7));
    }

    /*public function allCity($size)
    {
        return response()->json(Encyclopedia::whereNotNull('city_name')
            ->select([
            'id','thumbnail','banner_image','state_name','city_name','country','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function indexCity()
    {
        return response()->json(Encyclopedia::whereNotNull('city_name')
            ->select([
            'id','thumbnail','banner_image','state_name','city_name','country','updated_at'
            ])
            ->latest('updated_at')
            ->paginate(7));
    }*/

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
    public function store(EncyclopediaRequest $request)
    {
        $data = array();
        $data['state_name'] = $request->state_name??'';
        $data['city_name'] = $request->city_name??'';
        $data['country'] = $request->country??'';
        $data['description'] = $request->description??'';
        $data['map_link'] = $request->map_link??'';
        $data['slug'] = $request->slug??'';
        $data['meta_title'] = $request->meta_title??'';
        $data['meta_description'] = $request->meta_description??'';
        $data['food_title'] = $request->food_title??'';
        $data['food_description'] = $request->food_description??'';
        $data['culture_title'] = $request->culture_title??'';
        $data['culture_description'] = $request->culture_description??'';
        $this->data = $data; 
        $tag_id= array();
        $meta_keyword="";   
        foreach ($request->tags as $tag) {
            if( $tag['id'] == ''){
                $tag = Tag::create($tag);
            }
            array_push($tag_id,$tag['id']);
            if($meta_keyword ==""){
                $meta_keyword = $meta_keyword . $tag['title'];
            } else {
                $meta_keyword = $meta_keyword .' '. $tag['title'];
            }
        }

        $this->uploadImages($request);

        $encyclopedia = Encyclopedia::create($this->data);
        $this->uploadMultipleImages($request,$encyclopedia->id);
        // Added Cultural Image
        $this->uploadMultipleImagesInCultural($request,$encyclopedia->id);
        // Added Food Image
        $this->uploadMultipleImagesInFood($request,$encyclopedia->id);

        $encyclopedia->meta_keyword = $meta_keyword;
        $encyclopedia->save();
        $encyclopedia->tags()->sync($tag_id);

        if(count($request->input('files')) > 0){
            $pdf = [];
            foreach ($request->input('files') as $file) {
                $data = ['name'=>$this->uploadPdf($file['filename'],$file['content'])];
                $pdf[] = new Itinerarypdf($data);
                $data = [];
            }
            $encyclopedia->itinerarypdfs()->saveMany($pdf);            
        }
        return response()->json('Successfully Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Encyclopedia  $encyclopedia
     * @return \Illuminate\Http\Response
     */
    public function show($encyclopedia)
    {
        $encyclopedia = Encyclopedia::with(['itinerarypdfs','images'])->findOrFail($encyclopedia);
        $encyclopedia->tags;
        return response()->json($encyclopedia);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Encyclopedia  $encyclopedia
     * @return \Illuminate\Http\Response
     */
    public function edit($encyclopedia)
    {   
        $encyclopedia = Encyclopedia::with(['itinerarypdfs','images'])->findOrFail($encyclopedia);
        $encyclopedia->tags;
        return response()->json($encyclopedia);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Encyclopedia  $encyclopedia
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,Encyclopedia $encyclopedia)
    {
        $this->data = $this->validateEncyclopedia($request);
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
        $this->uploadImages($request);
        $encyclopedia->update($this->data);
        $this->uploadMultipleImages($request,$encyclopedia->id);

        $encyclopedia->meta_keyword = $meta_keyword;
        $encyclopedia->save();
        $encyclopedia->tags()->sync($tag_id);

        if(count($request->input('files')) > 0){
            $pdf = [];
            foreach ($request->input('files') as $file) {
                $data = ['name'=>$this->uploadPdf($file['filename'],$file['content'])];
                $pdf[] = new Itinerarypdf($data);
                $data = [];
            }
            $encyclopedia->itinerarypdfs()->saveMany($pdf);            
        }
        return response()->json('Successfully Added');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Encyclopedia  $encyclopedia
     * @return \Illuminate\Http\Response
     */
    

    public function destroy($encyclopedia)
    {
        Encyclopedia::where('id',$encyclopedia)->delete();
        return response()->json('successfully deleted');
    }
    
    public function deleteImage(Request $request)
    {
        $image = EncyclopediaImage::where('id',$request->id)->first();
        $this->AwsDeleteImage($image->image);
        $image->delete();
        return response()->json('successfully deleted');
    }

    
    public function deletePdf(Request $request)
    {
        $pdf_data = Itinerarypdf::where('id',$request->id)->first();
        $pdf = public_path()."/encyclopedia/pdf/$pdf_data->name";
        if (File::exists($pdf)) { 
            unlink($pdf);
        }
        $pdf_data->delete();
        return response()->json('successfully deleted');
    }




    public function uploadPdf($filename,$data){
        $explode = explode(',', $data); // explode file 
        $data = base64_decode($explode[1]);
        $url =  public_path().'/encyclopedia/pdf/' . $filename;
        file_put_contents($url , $data);
        return $filename;
    }  

     public function validateEncyclopedia($request)
    {
      return $this->validate($request, [
            'state_name'=>'required',
            'city_name'=>'nullable',
            'country'=>'required',
            'description'=>'required',
            'map_link'=>'required',
            'slug'=>'',
            'meta_title'=>'required',
            'meta_description' => 'required',
            'food_title' => 'required',
            'food_description' => 'required',
            'culture_title' => 'required',
            'culture_description' => 'required',
      ]);
    }

    public function uploadImages($request){

        if($request->thumbnail){
            $imagename = explode('.',$request->thumbnail[0]['name'])[0];
            // $this->data['thumbnail'] = $this->singleFile($request->thumbnail[0]['file'],'/encyclopedia/',$imagename);
            
            $this->data['thumbnail'] = $this->AwsFileUpload($request->thumbnail[0]['file'],config('gbi.encyclopedia_image'),$imagename);
            $this->data['thumbnail_alt'] = $imagename;
        }
        
        if($request->banner_image){
            $imagename = explode('.',$request->banner_image[0]['name'])[0];
            // $this->data['banner_image'] = $this->singleFile($request->banner_image[0]['file'],'/encyclopedia/',$imagename);
            $this->data['banner_image'] = $this->AwsFileUpload($request->banner_image[0]['file'],config('gbi.encyclopedia_image'),$imagename);
            $this->data['banner_image_alt'] = $imagename;
        }
        
    }

    public function uploadMultipleImages($request, $id){
        if(count($request->images) > 0){
            foreach ($request->images as $imagedata) {
                $imagename = explode('.',$imagedata['name'])[0];
                // $image = $this->singleFile($imagedata['file'],'/encyclopedia/',$imagename);
                $image = $this->AwsFileUpload($imagedata['file'],config('gbi.encyclopedia_image'),$imagename);
                EncyclopediaImage::create([
                    'encyclopedia_id'=>$id,
                    'image'=>$image,
                    'alt'=>$imagename
                ]);
            }                
        }
    }
    public function uploadMultipleImagesInFood($request, $id){
        if(count($request->food_images) > 0){
            foreach ($request->food_images as $img_data) {
                $food_img_name = explode('.',$img_data['name'])[0];
                $food_image = $this->AwsFileUpload($img_data['file'],config('gbi.encyclopedia_food'),$food_img_name);
                EncyclopediasFood::create([
                    'encyclopedias_id'=>$id,
                    'food_image'=>$food_image,
                    'food_image_alt'=>$food_img_name
                ]);
            }                
        }
    }
    public function uploadMultipleImagesInCultural($request, $id){
        if(count($request->cultural_images) > 0){
            foreach ($request->cultural_images as $cultural_img_data) {
                $cultural_img_name = explode('.',$cultural_img_data['name'])[0];
                $cultural_image = $this->AwsFileUpload($cultural_img_data['file'],config('gbi.encyclopedia_cultural'),$cultural_img_name);
                EncyclopediasCultural::create([
                    'encyclopedias_id'=>$id,
                    'cultural_image'=>$cultural_image,
                    'cultural_image_alt'=>$cultural_img_name
                ]);
            }                
        }
    }
}



