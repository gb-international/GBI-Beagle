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

    public function all($size, $state)
    {
        $data = Hotel::where('state', $state)->latest('updated_at')->paginate($size);
        foreach ($data as $hotel){
            $hotel->roomCategory;
            $hotel->banquetCategory;
            $hotel->amenities;
            $hotel->metaKeyword;
            $hotel->hotelimages;
        }
        return response()->json($data);
    }
    public function index()
    {
        $hotel = Hotel::select('name','id')->get();
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
            $data = array("name"=>$request->name, "state"=>$request->state, "city"=>$request->city, "pincode"=>$request->pincode, "country" => $request->country??'',"address" => $request->address??'', "phoneno" => $request->phoneno??'',"email" => $request->email??'', "room"=>$request->rooms??'',"star_category" => $request->star_category??'', "banquets" => $request->banquets??'', "description" => $request->description??'', "meta_title" => $request->meta_title??'', "meta_description"=> $request->meta_description??'');
            $hotel = Hotel::create($data);
            $hotel_id =  $hotel->id??0;
            $meta_keywords= [];
            if($request->meta_keywords){
                foreach ($request->meta_keywords as $meta_keyword) {
                    if($meta_keyword['id'] == ''){
                        $meta_keyword = MetaKeyword::create($meta_keyword);
                    }
                    $meta_keywords[] = $meta_keyword['id']??'';
                }
            }
            if($request->images){
                foreach($request->images as $imagedata) {
                    $imagename = explode('.',$imagedata['name'])[0];
                    $img=$this->AwsFileUpload($imagedata['file'],config('gbi.hotel_image'),$imagename);
                    HotelImages::create(['hotel_id'=>$hotel_id,'image'=>$img,'alt'=>$imagename]);
                }
            }
            $hotel->metaKeyword()->sync(array_unique($meta_keywords));
            $hotel->roomCategory()->sync(array_unique($request->room_categories??''));
            $hotel->banquetCategory()->sync(array_unique($request->banquet_categories??''));
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
        $hotel->roomCategory;
        $hotel->banquetCategory;
        $hotel->amenities;
        $hotel->metaKeyword;
        $hotel->hotelimages;
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
        $hotel->roomCategory;
        $hotel->banquetCategory;
        $hotel->amenities;
        $hotel->metaKeyword;
        $hotel->hotelimages;
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
            $data = array("name"=>$request->name??$hotel->name, "state"=>$request->state??$hotel->state, "city"=>$request->city??$hotel->city, "pincode"=>$request->pincode??$hotel->pincode, "country" => $request->country??$hotel->country,"address" => $request->address??$hotel->address, "phoneno" => $request->phoneno??$hotel->phoneno,"email" => $request->email??$hotel->email, "room"=>$request->rooms??$hotel->rooms,"star_category" => $request->star_category??$hotel->star_category, "banquets" => $request->banquets??$hotel->banquets, "description" => $request->description??$hotel->description, "meta_title" => $request->meta_title??$hotel->meta_title, "meta_description"=> $request->meta_description??$hotel->meta_description);
            $hotel->update($data);
            if($request->new_images){
                foreach($request->new_images as $imagedata) {
                    $imagename = explode('.',$imagedata['name'])[0];
                    $img=$this->AwsFileUpload($imagedata['file'],config('gbi.hotel_image'),$imagename);
                    HotelImages::create(['hotel_id'=>$hotel->id,'image'=>$img,'alt'=>$imagename]);
                }
            }
            $meta_keywords= [];
            if($request->meta_keywords){
                foreach ($request->meta_keywords as $meta_keyword) {
                    if($meta_keyword['id'] == ''){
                        $meta_keyword = MetaKeyword::create($meta_keyword);
                    }
                    $meta_keywords[] = $meta_keyword['id']??'';
                }
            }
            $hotel->metaKeyword()->sync(array_unique($meta_keywords));
            $hotel->roomCategory()->sync(array_unique($request->room_categories??''));
            $hotel->banquetCategory()->sync(array_unique($request->banquet_categories??''));
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
            'room_categories' => '',
            'star_category' => 'required',
            'banquets' => 'required',
            'banquet_categories' => '',
            'amenities' => '',
            'images' => '',
            'description' => '',
            'meta_title' => '',
            'meta_keywords' => '',
            'meta_description' => ''
          
      ]);
    }

}
