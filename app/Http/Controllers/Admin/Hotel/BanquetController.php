<?php
/* 
Created by : Manas
Purpose : Manage Banquets 

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Model\Hotel\Banquet;
use App\Model\Hotel\BanquetCategories;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits\ImageTrait;
use Image;
use App\Rules\EmailValidate;
use App\Rules\PhoneNubmerValidate;
use App\Rules\AlphaSpace;

class BanquetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size)
    {
        $data = Banquet::latest('updated_at')
        ->paginate($size);
        foreach ($data as $d){
            $d->images = unserialize($d->images);
            //$d->banquet_categories = unserialize($d->banquet_categories);
            //$d->amenities = unserialize($d->amenities);
            $d->alt = unserialize($d->alt);
        }
        return response()->json($data);
    }
    public function index()
    {
        $banquet = Banquet::select('id','name','address','phoneno', 'star_category', 'price')->get();
        /*foreach ($banquet as $b){
            $b->images = unserialize($b->images);
        }*/
        return response()->json($banquet);
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
         //$data = $this->validateBanquet($request);
         $data = $request->except(['banquetCategory', 'amenities']);
         //$data['banquet_categories'] = serialize($request->banquet_categories);
         //$data['amenities'] = serialize($request->amenities);
         $data['alt'] = serialize($request->alt);
 
         $images = array();
         if($request->images){
             $count = 0;
             foreach($request->images as $img){
               $images[$count] = $this->AwsFileUpload($img,config('gbi.banquet_image'),$request->alt[$count]);
               $count++;
             }
         }
         $data['images'] = serialize($images);
         $banquet = Banquet::create($data);
         $bCount = 0;

         foreach($request->banquetCategory[0] as $dimen){
            BanquetCategories::create([
                'banquet_id' => $banquet->id,
                'amenities' => serialize($request->amenities),
                'dimension_type' => $dimen['dimen_type'],
                'length' => $dimen['length'],
                'width' => $dimen['width'],
                'height' => $dimen['height'],
                'area' => $dimen['area'],
                'seating_type' => $dimen['seat_type'],
                'people' => $dimen['people']
            ]);
            $bCount++;
         }

         return response()->json(['Message'=> 'Successfully Added...']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\banquet  $banquet
     * @return \Illuminate\Http\Response
     */
    public function show(Banquet $banquet)
    {
        //$banquet->banquet_categories = unserialize($banquet->banquet_categories);
        $banquet->amenities = unserialize($banquet->amenities);
        $banquet->alt = unserialize($banquet->alt);
        return response()->json($banquet);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\banquet  $banquet
     * @return \Illuminate\Http\Response
     */
    public function edit(Banquet $banquet)
    {
        //$banquet->banquet_categories = unserialize($banquet->banquet_categories);
        $banquet->amenities = unserialize($banquet->amenities);
        $banquet->alt = unserialize($banquet->alt);
        return response()->json($banquet);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\banquet  $banquet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Banquet $banquet)
    {

        //$data = $this->validateBanquet($request);
        $data = $request->all();
        //$data->meta_keywords = serialize($data->meta_keywords);
        //$data->room_categories = serialize($data->room_categories);
        //$data->banquet_categories = serialize($data->banquet_categories);
        $data->amenities = serialize($data->amenities);

        if($request->images){
            $count = 0;
            foreach($request->images as $img){
             if($img != $banquet->images[$count]){
                $data['images'][$count] = $this->AwsFileUpload($img,config('gbi.banquet_image'),$request->alt[$count]);
                $this->AwsDeleteImage($banquet->images[$count]);
             }
             $count++;
            }
        }
        $banquet->update($data);
        return response()->json(['message'=>$data]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\banquet  $banquet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Banquet $banquet)
    {
        $this->AwsDeleteImage($banquet->image);
        $banquet->delete();
        return response()->json('successfully deleted');
    }


    // Validate banquet

    public function validateBanquet($request)
    {
         return $this->validate($request, [

            'hotel_id' => '',
            'name' => ['required',new AlphaSpace],
            'state'=>'required',
            'city' =>'required',
            'pincode' => 'required',
            'country' => 'required',
            'address' => 'required',
            'phoneno' => ['required','numeric',new PhoneNubmerValidate],
            'email' => ['required','email',new EmailValidate],
            'banquet_category' => 'required',
            'star_category' => 'required',
            'amenities' => 'required',
            'image' => 'required',
            'description' => 'required',
            'check_in' => 'required',
            'check_out' => 'required',
            'price' => 'required',
          
      ]);
    }

}
