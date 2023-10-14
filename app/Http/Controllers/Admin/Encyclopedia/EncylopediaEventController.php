<?php

namespace App\Http\Controllers\Admin\Encyclopedia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;
use Image;
use App\Model\Encyclopedia\EncylopediaEvent;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\EncyclopediaEventRequest;
class EncylopediaEventController extends BaseController
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

    public function all($size = 0)
    {
        try{
            if (empty($size)) {
                $size = 10;
            }
            $encylopedia_event = EncylopediaEvent::latest()->paginate($size);
            if($encylopedia_event->count() > 0){
                foreach ($encylopedia_event as $d){
                    $d->image = unserialize($d->image);
                    $d->image_alt = unserialize($d->image_alt);
                }
            }
            return $this->sendResponse($encylopedia_event, 'success', 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function index()
    {

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
    public function store(EncyclopediaEventRequest $request)
    {
        try{
            $this->data = array("title"=>$request->title??'', "city"=>$request->city??'', "state"=>$request->state??'', "type"=>$request->type??'', "description"=>$request->description??'');

            //Multiple image
            $images = array();
            if($request->images){
                foreach($request->images as $key=> $img){
                    $images[$key] = $this->AwsFileUpload($img,config('gbi.encylopedia_event_image'),$request->image_alt[$key]);
                }
                $this->data['image_alt'] = serialize($request->image_alt);
                $this->data['image'] = serialize($images);   
            }
            //End multiple image

            //Banner image 
                $this->uploadImages($request);
            //End banner image 

            EncylopediaEvent::create($this->data);
            return response()->json(['Message'=> 'Successfully Added...']);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage());
        }
    }
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if(!empty($encylopedia_event)){
            $encylopedia_event->image = unserialize($encylopedia_event->image);
            $encylopedia_event->image_alt = unserialize($encylopedia_event->image_alt);
            return response()->json($encylopedia_event);
        }
        else{
            return $this->sendError("Id does not exist", 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $encylopedia_event = EncylopediaEvent::where('id', $id)->first();
        if(!empty($encylopedia_event)){
            $encylopedia_event->image = unserialize($encylopedia_event->image);
            $encylopedia_event->image_alt = unserialize($encylopedia_event->image_alt);
            return response()->json($encylopedia_event);
        }
        else{
            return $this->sendError("Id does not exist", 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $encylopedia_event = EncylopediaEvent::where('id', $id)->first();
        if(!empty($encylopedia_event)){
            $this->data = array("title"=>$request->title??$encylopedia_event->title, "city"=>$request->city??$encylopedia_event->city, "state"=>$request->state??$encylopedia_event->state, "type"=>$request->type??$encylopedia_event->type, "description"=>$request->description??$encylopedia_event->description);
            $new_images = array();
            $new_alts = array();
             if($request->new_images){
                $count = 0;
                 foreach($request->new_images as $new_key => $img){
                    if($request->del_images){
                        if(!is_numeric(array_search($img,$request->del_images,true))){
                            $new_images[$count] = $this->AwsFileUpload($img,config('gbi.encylopedia_event_image'),$request->new_image_alt[$count]);
                            $new_alts[$count] = $request->new_image_alt[$count];
                            $count =+1;
                        }
                        else{
                            $this->AwsDeleteImage($img);  
                        }
                    }
                    else{
                        $new_images[$count] = $this->AwsFileUpload($img,config('gbi.encylopedia_event_image'),$request->new_image_alt[$count]);
                        $new_alts[$count] = $request->new_image_alt[$count];
                        $count =+1;
                    }
                 }
                 $this->data['image'] = serialize( $new_images);
                 $this->data['image_alt'] = serialize($new_alts);
             }
     
            if($request->banner_image){
                //Banner image 
                $this->uploadImages($request);
                //End banner image 
                if($encylopedia_event->banner_image){
                    $this->AwsDeleteImage($encylopedia_event->banner_image);
                }
             }
             $encylopedia_event->update($this->data);
             return response()->json(['message'=>$encylopedia_event]);
        }
        else{
            return $this->sendError("Id does not exist", 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $encylopedia_event = EncylopediaEvent::where('id',$id)->first();
            if(!empty($encylopedia_event)){
                if($encylopedia_event->banner_image){
                    $this->AwsDeleteImage($encylopedia_event->banner_image);
                }
                $images = unserialize($encylopedia_event->image);
                if(!empty($images)){
                    foreach($images as $img){
                        $this->AwsDeleteImage($img);
                    }
                }
                $encylopedia_event->delete();
                return response()->json('successfully deleted');
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function uploadImages($request){
        if($request->banner_image){
            $banner_image = explode('.',$request->banner_image[0]['name'])[0];            
            $this->data['banner_image'] = $this->AwsFileUpload($request->banner_image[0]['file'],config('gbi.encylopedia_event_banner_image'),$banner_image);
            $this->data['banner_image_alt'] = $banner_image;
        }         
    }
}
