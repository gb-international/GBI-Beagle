<?php
/* 
Created by : Manas
Purpose : Manage Hotel 

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Resources\Admin\HotelCollection;
use App\Model\Hotel\Hotel as Hotel;
use App\Model\Hotel\MetaKeyword; 
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;
use App\Http\Requests\Admin\Hotel\HotelRequest;
use App\Model\Hotel\HotelImages;
use App\Http\Controllers\Admin\BaseController;

class HotelController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size, $state_id)
    {
        $data = Hotel::where('state_id', $state_id)->latest()->paginate($size);
        foreach ($data as $hotel){
            $hotel->rooms;
            $hotel->hotelimages;
            $hotel->banquets;
            $hotel->amenities;
            $hotel->hotel_states;
            $hotel->hotel_cities;
            $hotel->hotel_countries;
        }
        return response()->json($data);
    }
    public function index()
    {
        $hotel = Hotel::select('name','id')->latest()->get();
        return response()->json($hotel);
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
    public function store(HotelRequest $request)
    {
        try{
            $data = array("name"=>$request->name, "description" => $request->description??'',"no_of_rooms"=>$request->no_of_room??0,
            "star_category"=>$request->star_category??0, "hotel_type"=>$request->hotel_type??0, "email" => $request->email??'', "phone_number" => $request->phone_number??'', "no_of_banquet" => $request->no_of_banquet??0, "hotel_policies_description" => $request->hotel_policies_description??'', "safety_hygiene_description" => $request->safety_hygiene_description??'', "address" => $request->address??'', "state_id"=>$request->state_id??0, "city_id"=>$request->city_id??0, "pincode"=>$request->pincode, "country_id" => $request->country_id??'');
            $hotel = Hotel::create($data);
            $hotel_id = $hotel->id??0;
            // $meta_keywords= [];
            // if($request->meta_keywords){
            //     foreach ($request->meta_keywords as $meta_keyword) {
            //         if($meta_keyword['id'] == ''){
            //             $meta_keyword = MetaKeyword::create($meta_keyword);
            //         }
            //         $meta_keywords[] = $meta_keyword['id']??'';
            //     }
            // }
            // $hotel->metaKeyword()->sync(array_unique($meta_keywords));
            if($request->images){
                foreach($request->images as $imagedata) {
                    $imagename = explode('.',$imagedata['name'])[0];
                    $img=$this->AwsFileUpload($imagedata['file'],config('gbi.hotel_image'),$imagename);
                    HotelImages::create(['hotel_id'=>$hotel_id,'image'=>$img,'alt'=>$imagename]);
                }
            }

            if($request->banner_image){
                $imagename = explode('.',$request->banner_image[0]['name'])[0];
                $hotel->banner_image = $this->AwsFileUpload($request->banner_image[0]['file'],config('gbi.banner_image'),$imagename);
                $hotel->banner_alt = $imagename;
                $hotel->save();
            }
            
            $hotel->rooms()->sync(array_unique($request->rooms??''));

            if($request->no_of_banquet??0 > 0){
                $hotel->banquets()->sync(array_unique($request->banquet??''));
            }

            $hotel->amenities()->sync(array_unique($request->amenities??''));    
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function show(Hotel $hotel)
    {
        $hotel->rooms;
        $hotel->hotelimages;
        $hotel->banquets;
        $hotel->amenities;
        $hotel->hotel_states;
        $hotel->hotel_cities;
        $hotel->hotel_countries;
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
        $hotel->rooms;
        $hotel->hotelimages;
        $hotel->banquet;
        $hotel->amenities;
        $hotel->hotel_states;
        $hotel->hotel_cities;
        $hotel->hotel_countries;
        return response()->json($hotel);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function update(HotelRequest $request, Hotel $hotel)
    {
        try{
            $data = array("name"=>$request->name??$hotel->name, "description" => $request->description??$hotel->description,"no_of_rooms"=>$request->no_of_room??$hotel->no_of_room,
            "star_category"=>$request->star_category??$hotel->star_category, "hotel_type"=>$request->hotel_type??$hotel->hotel_type, "email" => $request->email??$hotel->email, "phone_number" => $request->phone_number??$hotel->phone_number, "no_of_banquet" => $request->no_of_banquet??$hotel->no_of_banquet, "hotel_policies_description" => $request->hotel_policies_description??$hotel->hotel_policies_description, "safety_hygiene_description" => $request->safety_hygiene_description??$hotel->hotel_policies_description, "address" => $request->address??$hotel->address, "state_id"=>$request->state_id??$hotel->state_id, "city_id"=>$request->city_id??$hotel->city_id, "pincode"=>$request->pincode??$hotel->pincode, "country_id" => $request->country_id??$hotel->country_id, 'status'=>$request->status??$hotel->status);
            $hotel->update($data);
            if($request->new_images){
                foreach($request->new_images as $imagedata) {
                    $imagename = explode('.',$imagedata['name'])[0];
                    $img=$this->AwsFileUpload($imagedata['file'],config('gbi.hotel_image'),$imagename);
                    HotelImages::create(['hotel_id'=>$hotel->id,'image'=>$img,'alt'=>$imagename]);
                }
            }
            
            if($request->banner_image){
                $this->AwsDeleteImage($hotel->banner_image);
                $imagename = explode('.',$request->banner_image[0]['name'])[0];
                $hotel->banner_image = $this->AwsFileUpload($request->banner_image[0]['file'],config('gbi.banner_image'),$imagename);
                $hotel->banner_alt = $imagename;
                $hotel->save();
            }
            
            $hotel->rooms()->sync(array_unique($request->rooms??''));
 
            if($request->no_of_banquet??0 > 0){
                $hotel->banquets()->sync(array_unique($request->banquet??''));
            }

            $hotel->amenities()->sync(array_unique($request->amenities??''));    
            $hotel->save();             
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successful updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Hotel $hotel)
    {
        try{
            if($hotel->hotelimages){
                foreach($hotel->hotelimages as $img){
                    if($img->image){
                        $this->AwsDeleteImage($img->image);
                    }
                    $img->delete();
                }
            }
            $hotel->delete();
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }

        return response()->json('successfully deleted');
    }

    public function destroyImage($id){
        try{
            $data = HotelImages::where('id',$id)->first();
            if(!empty($data)){
                $data->delete();
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

    public function search(Request $request){
        $min = 4;
        // if($request->min_price && $request->min_price){
        //    $hotel = Hotel::WhereHas('rooms.room_price',  function ($q) use ($min) {
        //         $q->where('net_price' ,4);
        //     })->get();
           $hotel = Hotel::with('rooms.room_price')->get();
            return $hotel; 
        // }
    }
}
