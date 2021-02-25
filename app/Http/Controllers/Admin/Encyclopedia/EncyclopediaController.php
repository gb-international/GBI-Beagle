<?php

namespace App\Http\Controllers\Admin\Encyclopedia;

use App\Model\Encyclopedia\Encyclopedia;
use App\Model\Encyclopedia\EncyclopediaImage;
use App\Model\Itinerary\Itinerary;
use App\Model\Itinerary\Itinerarypdf;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\Traits\ImageTrait;
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
    public function all($size)
    {
        return response()->json(Encyclopedia::select([
            'id','thumbnail','banner_image','state_name','updated_at'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }

    public function index()
    {
        return response()->json(Encyclopedia::select([
            'id','thumbnail','banner_image','state_name','updated_at'
            ])
            ->latest('updated_at')
            ->paginate(7));
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
    public function store(Request $request)
    {
        $this->data = $this->validateEncyclopedia($request);
        $this->uploadImages($request);
        $encyclopedia = Encyclopedia::create($this->data);
        $this->uploadMultipleImages($request,$encyclopedia->id);
        

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
        return response()->json(Encyclopedia::with(['itinerarypdfs','images'])->findOrFail($encyclopedia));
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
        $this->uploadImages($request);
        $encyclopedia->update($this->data);
        $this->uploadMultipleImages($request,$encyclopedia->id);

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
        $this->deleteImg('/encyclopedia/'.$image->image);
        $image->delete();
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
            'description'=>'required',
            'map_link'=>'required',
            'slug'=>'',
      ]);
    }

    public function uploadImages($request){

        if($request->thumbnail){
            $imagename = explode('.',$request->thumbnail[0]['name'])[0];
            $this->data['thumbnail'] = $this->singleFile($request->thumbnail[0]['file'],'/encyclopedia/',$imagename);
            $this->data['thumbnail_alt'] = $imagename;
        }
        
        if($request->banner_image){
            $imagename = explode('.',$request->banner_image[0]['name'])[0];
            $this->data['banner_image'] = $this->singleFile($request->banner_image[0]['file'],'/encyclopedia/',$imagename);
            $this->data['banner_image_alt'] = $imagename;
        }
        
    }

    public function uploadMultipleImages($request, $id){
        if(count($request->images) > 0){
            foreach ($request->images as $imagedata) {
                $imagename = explode('.',$imagedata['name'])[0];
                $image = $this->singleFile($imagedata['file'],'/encyclopedia/',$imagename);
                EncyclopediaImage::create([
                    'encyclopedia_id'=>$id,
                    'image'=>$image,
                    'alt'=>$imagename
                ]);
            }                
        }
    }

}
