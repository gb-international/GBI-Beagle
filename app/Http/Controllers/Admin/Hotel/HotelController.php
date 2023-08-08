<?php
/* 
Created by : Manas
Purpose : Manage Hotel 

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Resources\Admin\HotelCollection;
use App\Model\Hotel\Hotel as Hotel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size, $state)
    {
        $state = str_replace('-', ' ', $state);
        $data = Hotel::where('state', $state)
        ->latest('updated_at')
        ->paginate($size);
        foreach ($data as $d){
            $d->images = unserialize($d->images);
            $d->banquet_categories = unserialize($d->banquet_categories);
            $d->amenities = unserialize($d->amenities);
            $d->alt = unserialize($d->alt);
            $d->meta_keywords = unserialize($d->meta_keywords);
            $d->room_categories = unserialize($d->room_categories);
        }
        return response()->json($data);
    }
    public function index()
    {
        $hotel = Hotel::select('name','id')->get();
        return response()->json($hotel);
        //return HotelCollection::collection(Hotel::all());
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
        //$data = $this->validateHotel($request);
        $data = $request->all();
        $data['meta_keywords'] = serialize($request->meta_keywords);
        $data['room_categories'] = serialize($request->room_categories);
        $data['banquet_categories'] = serialize($request->banquet_categories);
        $data['amenities'] = serialize($request->amenities);
        $data['alt'] = serialize($request->alt);

        $images = array();
        if($request->images){
            $count = 0;
            foreach($request->images as $img){
              $images[$count] = $this->AwsFileUpload($img,config('gbi.hotel_image'),$request->alt[$count]);
              $count++;
            }
        }
        $data['images'] = serialize($images);
        
        $hotel = Hotel::create($data);
        return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function show(Hotel $hotel)
    {
        $hotel->images = unserialize($hotel->images);
        $hotel->banquet_categories = unserialize($hotel->banquet_categories);
        $hotel->amenities = unserialize($hotel->amenities);
        $hotel->alt = unserialize($hotel->alt);
        $hotel->meta_keywords = unserialize($hotel->meta_keywords);
        $hotel->room_categories = unserialize($hotel->room_categories);
        return response()->json($hotel);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function edit(Hotel $hotel)
    {
        $hotel->images = unserialize($hotel->images);
        $hotel->banquet_categories = unserialize($hotel->banquet_categories);
        $hotel->amenities = unserialize($hotel->amenities);
        $hotel->alt = unserialize($hotel->alt);
        $hotel->meta_keywords = unserialize($hotel->meta_keywords);
        $hotel->room_categories = unserialize($hotel->room_categories);
        return response()->json($hotel);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Hotel $hotel)
    {

        //$data = $this->validateHotel($request);
        $data = $request->all();
        $data['meta_keywords'] = serialize($data['meta_keywords']);
        $data['room_categories'] = serialize($data['room_categories']);
        $data['banquet_categories'] = serialize($data['banquet_categories']);
        $data['amenities'] = serialize($data['amenities']);

       $newImages = array();
       $newAlts = array();
        if($data['newImages']){
            $count = 0;
            foreach($data['newImages'] as $img){
              $newImages[$count] = $this->AwsFileUpload($img,config('gbi.hotel_image'),'hotel_image_'.uniqid());
              $newAlts[$count] = 'hotel_image_'.uniqid();
              $count++;
            }
            array_push($data['images'], $newImages);
            array_push($data['alt'], $newAlts);
        }

        if($data['delImages']){
            $count = 0;
            foreach($data['delImages'] as $img){
               // $this->AwsDeleteImage($img);
                $count++;
            }
        }

        unset($data['newImages'], $data['delImages']);

        $data['images'] = serialize($data['images']);
        $data['alt'] = serialize($data['alt']);

        $hotel->update($data);
        return response()->json(['message'=>$data]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hotel $hotel)
    {
        $this->AwsDeleteImage($hotel->image);
        $hotel->delete();
        return response()->json('successfully deleted');
    }


    // Validate hotel

    public function validateHotel($request)
    {
         return $this->validate($request, [

            'name' => ['required',new AlphaSpace],
            'state'=>'required',
            'city' =>'required',
            'pincode' => 'required',
            'country' => 'required',
            'address' => 'required',
            'phoneno' => ['required','numeric',new PhoneNubmerValidate],
            'email' => ['required','email',new EmailValidate],
            'rooms'=>'required|numeric|min:1',
            'room_category' => 'required',
            'star_category' => 'required',
            'banquets' => 'required',
            'banquet_category' => 'required',
            'amenities' => 'required',
            'images' => 'required',
            'description' => 'required'
          
      ]);
    }

}
