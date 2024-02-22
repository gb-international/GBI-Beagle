<?php
/* 
Created by : Ajay yadav 
Edited by: Manas
Purpose : Manage Itinerary 

*/
namespace App\Http\Controllers\Admin\Itinerary;

use App\Model\Itinerary\Itinerary;
use App\Model\Post\Tag;
use App\Model\Itinerary\Itineraryday;
use App\Model\Itinerary\ItineraryImages;
use App\Model\Tour\Tourtype;
use App\Model\Season\Season;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;
use App\Jobs\Notifications;
use Illuminate\Support\Str;


/**
     *
     * @OA\Tag(
     *     name="Itineraries",
     *     description="API Endpoints of Itineraries"
     * )
*/

class ItineraryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;
    public function all($size)
    {

       /* $It = Itinerary::all();
        foreach ($It as $itn) {
            $itinerary = Itinerary::where('id', $itn->id)->first();
            $itinerary->slug = $this->createSlug($itinerary->title);
            $itinerary->save();
        }*/

        return response()->json(Itinerary::select([
            'id','title','source','destination','noofdays'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        // return Itinerary::all();
       return response()->json(Itinerary::all());
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
        
        $data = $this->validateItinerary($request);
        $tag_id= array();
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
       /* $data['detail_photo_alt'] = serialize($request->detail_photo_alt);
        $images = array();
        if($request->detail_photo){
            $count = 0;
            foreach($request->detail_photo as $img){
              $images[$count] = $this->AwsFileUpload($img,config('gbi.detail_photo'),$request->detail_photo_alt[$count]);
              $count++;
            }
        }
        $data['detail_photo'] = serialize($images);*/

        $data['detail_photo_alt'] = 'itinerary_image_'.uniqid();
        $data['detail_photo'] = 'itinerary_image_'.uniqid();
       
        if($request->photo){
            $data['photo'] = $this->AwsFileUpload($request->photo,config('gbi.itinerary_image'),$request->photo_alt);
        }
        /*if($request->detail_photo){
            $data['detail_photo'] = $this->AwsFileUpload($request->detail_photo,config('gbi.detail_photo'),$request->detail_photo_alt);
        }*/

        $data['slug'] = $this->createSlug($request->title);

        $itinerary = new Itinerary();
        $id = $itinerary->insertGetId($data);
        $itinerary = Itinerary::where('id',$id)->first();

        $dayModels = [];
        foreach ($request->itinerarydays as $data) {
            $dayModels[] = new Itineraryday($data);
        }
        $itinerary->itinerarydays()->saveMany($dayModels);

        // Tour Type
        $tourtypeModels = [];
        foreach ($request->tourtypes as $data) {
            $tourtypeModels[] = $data['id'];
        }
        $tourtypeModels = Tourtype::find($tourtypeModels);
        $itinerary->tourtypes()->attach($tourtypeModels);

        // Tour Season
        $seasonModels = [];
        foreach ($request->seasons as $data) {
            $seasonModels[] = $data['id'];
        }
        $seasonModels = Season::find($seasonModels);
        $itinerary->seasons()->attach($seasonModels);

        $itinerary->meta_keyword = $meta_keyword;

        $itinerary->save();

        // Itinerary Banner Images
        if($request->detail_photo){
            foreach ($request->detail_photo as $img) {
                //$itineraryimagesModels[] = $img;
                $imge = $this->AwsFileUpload($img,config('gbi.detail_photo'),'itinerary_image_'.uniqid());
                $images = new ItineraryImages;
                $images->itinerary_id = $itinerary->id;
                $images->image = $imge;
                $images->save();
            }
            //$itinerary->itineraryimages()->saveMany($itineraryimagesModels);
        }
        $itinerary->tags()->sync($tag_id);

        $notifData = [
            'notification_type' => 'travel',
            'client_type' => $itinerary->client_type,
            'category' => 'itinerary',
            'category_id' => $itinerary->id,
            'title' => $itinerary->title,
            'body' => $itinerary->description,
        ];

        dispatch(new Notifications($notifData));

        $locSource = \GoogleMaps::load('geocoding')
        ->setParam (['address' => $itinerary->source])
        ->get('results.geometry.location');

        $locDestination = \GoogleMaps::load('geocoding')
        ->setParam (['address' => $itinerary->destination])
        ->get('results.geometry.location');

        if($locSource['results']){
            $itinerary->startLoc = $locSource['results'][0]['geometry']['location'];
        }
        if($locDestination['results']){
            $itinerary->endLoc = $locDestination['results'][0]['geometry']['location'];
        }

        $itinerary->save();
        //event(new \App\Events\SendNotification($notifData));

        return response()->json(['success'=>'Successfully added']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function show(Itinerary $itinerary)
    {
        $itinerary->itinerarydays;
        $itinerary->tourtypes;
        $itinerary->seasons;
        $itinerary->tags;
        $itinerary->itineraryimages;
        return response()->json($itinerary);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function edit(Itinerary $itinerary)
    {
        $itinerary->itineraryimages;
        $itinerary->itinerarydays;
        $itinerary->tourtypes;
        $itinerary->seasons;
        $itinerary->tags;
        return response()->json($itinerary);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Itinerary $itinerary)
    {
        $data = $this->validateItinerary($request);
        //$data = $request->all();
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
        // thumbnail photo upload
        if($request->photo != $itinerary->photo){
            $data['photo'] = $this->AwsFileUpload($request->photo,config('gbi.itinerary_image'),$request->photo_alt);
            $this->AwsDeleteImage($itinerary->photo);
        }else{
            unset($data['photo']);
            unset($data['photo_alt']);
        }
        // detail photo upload
        /*if($request->detail_photo != $itinerary->detail_photo){
            $data['detail_photo'] = $this->AwsFileUpload($request->detail_photo,config('gbi.itinerary_image'),$request->detail_photo_alt);
            $this->AwsDeleteImage($itinerary->detail_photo);
        }else{
            unset($data['detail_photo']);
            unset($data['detail_photo_alt']);
        }*/

        $newImages = array();
        $newAlts = array();

         if($request->newImages){
             $count = 0;
             foreach($request->newImages as $img){
                $newImages[$count] = $this->AwsFileUpload($img,config('gbi.detail_photo'),'itinerary_image_'.uniqid());
                $ItImages = new ItineraryImages;
                $ItImages->itinerary_id = $itinerary->id;
                $ItImages->image = $newImages[$count];
                $ItImages->save();

               //$newAlts[$count] = 'itinerary_image'.uniqid();
               $count++;
             }
             //array_push($data['detail_photo'], $newImages);
             //array_push($data['detail_photo_alt'], $newAlts);
         }
 
         if($request->delImages){
             $count = 0;
             foreach($request->delImages as $img){
                 //$this->AwsDeleteImage($img);
                 $delItImg = ItineraryImages::where('image',$img)->first();
                 $delItImg->delete();
                 $count++;
             }
         }
 
         //$data['detail_photo'] = serialize($data['detail_photo']);
         //$data['detail_photo_alt'] = serialize($data['detail_photo_alt']);

         unset($data['newImages'], $data['delImages']);

         $data['slug'] = $this->createSlug($request->title);

         $itinerary->update($data);
        
        // Itinerary Day 
        $itinerary->itinerarydays()->delete();
        $dayModels = [];
        foreach ($request->itinerarydays as $data) {
            $dayModels[] = new Itineraryday($data);
        }
        $itinerary->itinerarydays()->saveMany($dayModels);

        $itinerary->meta_keyword = $meta_keyword;
        $itinerary->save();
        $itinerary->tags()->sync($tag_id);
        

       // Itinerary tour type
        $tourtypeModels = [];
        foreach ($request->tourtypes as $data) {
            $tourtypeModels[] = $data['id'];
        }
        $tourtypeModels = Tourtype::find($tourtypeModels);
        $itinerary->tourtypes()->sync($tourtypeModels);

        // Itinerary season type
        $seasonModels = [];
        foreach ($request->seasons as $data) {
            $seasonModels[] = $data['id'];
        }
        $seasonModels = Season::find($seasonModels);
        $itinerary->seasons()->sync($seasonModels);

        $locSource = \GoogleMaps::load('geocoding')
        ->setParam (['address' => $itinerary->source])
        ->get('results.geometry.location');

        $locDestination = \GoogleMaps::load('geocoding')
        ->setParam (['address' => $itinerary->destination])
        ->get('results.geometry.location');
        if($locSource['results']){
            $itinerary->startLoc = $locSource['results'][0]['geometry']['location'];
        }
        if($locDestination['results']){
            $itinerary->endLoc = $locDestination['results'][0]['geometry']['location'];
        }
        $itinerary->save();

        return response()->json(['message'=>'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Itinerary  $itinerary
     * @return \Illuminate\Http\Response
     */
    public function destroy(Itinerary $itinerary)
    {
        $this->AwsDeleteImage($itinerary->photo);
        $this->AwsDeleteImage($itinerary->detail_photo);
        $itinerary->delete();
        return response()->json('successfully deleted');
    }

    public function validateItinerary($request)
    {
      return $this->validate($request, [
            'source' => 'required|min:2|max:100',
            'destination' => 'required|min:3|max:100',
            'noofdays' => 'required|numeric|min:1|max:15',
            'title' => 'required|min:3|max:150',
            'description' => 'required|min:3',
            'tourtype' => 'required',
            'food' => 'required',
            'photo_alt' => '',
            'detail_photo_alt'=>'',
            'hotel_type'=>'',
            'bus'=>'',
            'train'=>'',
            'flight'=>'',
            'price'=>'',
            'client_type'=>'',
            'meta_title'=>'required',
            'meta_description' => 'required'     
      ]);
    }

    public function createSlug($val){
        $slug = Str::slug($val);
        if (Itinerary::where('slug', $slug)->exists()) {
            $slug = $slug.'-'.Str::random(4);
        }
        return $slug;
    }


}
