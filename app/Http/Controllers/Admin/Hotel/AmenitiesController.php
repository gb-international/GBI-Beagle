<?php
/*
Created by : Manas
Purpose : Manage Amenities

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Controllers\Controller; 
use App\Http\Controllers\Admin\BaseController;
use App\Model\Hotel\Amenities;
use Illuminate\Http\Request;
use App\Traits\ImageTrait;
use Image;
use App\Http\Requests\Admin\Hotel\AmenitiesRequest;

class AmenitiesController extends BaseController
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

    public function all($size=null)
    {
        try{
            if (empty($size)) {
                $size = 10; 
            }
            $amenities = Amenities::latest()->paginate($size);
            return $this->sendResponse($amenities, 'success', 200);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    public function index()
    {
        return response()->json(Amenities::select(['id','description','title','updated_at'])->latest('updated_at')->get());
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
    public function store(AmenitiesRequest $request)
    {
        try{
            // return config('gbi.amenities_img');
            $this->data = array('title'=>$request->title??'',
            'description'=>$request->description??'');
            if($request->image){
                $imagename = explode('.',$request->image[0]['name'])[0];

                $this->data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.post_image'),$imagename);
                $this->data['alt'] = $imagename;
            }
            // exit;
            if($request->icon_image){
                $img_name = explode('.',$request->icon_image[0]['name'])[0];
                $this->data['icon_image'] = $this->AwsFileUpload($request->icon_image[0]['file'],config('gbi.amenities_img_icon'),$img_name);
                $this->data['icon_alt'] = $img_name;
            }
            Amenities::create($this->data);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('succesfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Post\Amenities  $amn
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $amenities = Amenities::where('id', $id)->first();
        if(!empty($amenities)){
            return response()->json($amenities);
        }
        else{
            return $this->sendError("Id does not exist", 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Post\Amenities  $amn
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $amenities = Amenities::where('id', $id)->first();
        if(!empty($amenities)){
            return response()->json($amenities);
        }
        else{
            return $this->sendError("Id does not exist", 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Post\Amenities  $amn
     * @return \Illuminate\Http\Response
     */
    public function update(AmenitiesRequest $request, $id)
    {
        try{
        $amenities = Amenities::where('id', $id)->first();
        if(!empty($amenities)){
            $this->data = array('title'=>$request->title??$amenities->title,
            'description'=>$request->description??$amenities->description);
            if($request->image){
                $img_name = explode('.',$request->image[0]['name'])[0];
                $this->data['image'] = $this->AwsFileUpload($request->image[0]['file'],config('gbi.amenities_img'),$img_name);
                $this->data['alt'] = $img_name;
                if($amenities->image){
                    $this->AwsDeleteImage($amenities->image);
                }
            }
            if($request->icon_image){
                $img_name = explode('.',$request->icon_image[0]['name'])[0];
                $this->data['icon_image'] = $this->AwsFileUpload($request->icon_image[0]['file'],config('gbi.amenities_img_icon'),$img_name);
                $this->data['icon_alt'] = $img_name;
                if($amenities->image_icon){
                    $this->AwsDeleteImage($amenities->image_icon);
                }
            }
           
             $amenities->update($this->data);
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
            return response()->json(['message'=>"updated successful"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Post\Amenities  $amn
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $amenities = Amenities::where('id', $id)->first();
            if(!empty($amenities)){
                if($amenities->image){
                    $this->AwsDeleteImage($amenities->image);
                }
                if($amenities->icon_image){
                    $this->AwsDeleteImage($amenities->icon_image);
                }
                $amenities->delete();
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfully deleted');
    }
}
