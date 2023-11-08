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
use App\Http\Requests\Admin\Hotel\BanquetRequest;

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
        $data = Banquet::latest()->paginate($size);
        // return $data;
        foreach ($data as $b){
            $b->banquetCategory;
            $b->amenities;
            $b->banquet_states;
            $b->banquet_cities;
            $b->banquet_countries;
        }
        return response()->json($data);
    }
    public function index()
    {
        $banquet = Banquet::select('id','name','description',  'no_of_banquet', 'star_category', 'email', 'phone_number', 'address', 'city_id', 'state_id', 'country_id', 'pincode', 'banner_image', 'banner_alt', 'status')->latest()->get();
        foreach ($banquet as $b){
            $b->banquetCategory;
            $b->amenities;
            $b->banquet_states;
            $b->banquet_cities;
            $b->banquet_countries;
        }
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
    public function store(BanquetRequest $request)
    {
        try{
            $data = array("name"=>$request->name, "description" => $request->description??'', "no_of_banquet" =>$request->no_of_banquet??0, "star_category"=>$request->star_category??0, "email" => $request->email??'', "phone_number" => $request->phone_number??'', "address" => $request->address??'', "state_id"=>$request->state_id??0, "city_id"=>$request->city_id??0, "pincode"=>$request->pincode, "country_id" => $request->country_id??''); 
            $banquet = Banquet::create($data);
            $banquet_id =  $banquet->id??0;
            if($request->banner_image){
                $imagename = explode('.',$request->banner_image[0]['name'])[0];
                $banquet->banner_image = $this->AwsFileUpload($request->banner_image[0]['file'],config('gbi.banner_image'),$imagename);
                $banquet->banner_alt = $imagename;
                $banquet->save();
            }
             
            $banquet->banquetCategory()->sync(array_unique($request->banquet_category??''));
            $banquet->amenities()->sync(array_unique($request->amenities??''));
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\banquet  $banquet
     * @return \Illuminate\Http\Response
     */
    public function show(Banquet $banquet)
    {
        $banquet->banquetCategory;
        $banquet->amenities;
        $banquet->banquet_states;
        $banquet->banquet_cities;
        $banquet->banquet_countries;
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
        $banquet->banquetCategory;
        $banquet->amenities;
        $banquet->banquet_states;
        $banquet->banquet_cities;
        $banquet->banquet_countries;
        return response()->json($banquet);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\banquet  $banquet
     * @return \Illuminate\Http\Response
     */
    public function update(BanquetRequest $request, Banquet $banquet)
    {
        try{
            $data = array("name"=>$request->name??$banquet->name, "description" => $request->description??$banquet->description, "no_of_banquet" => $request->no_of_banquet??$banquet->no_of_banquet,     "star_category"=>$request->star_category??$banquet->star_category, "email" => $request->email??$banquet->email, "phone_number" => $request->phone_number??$banquet->phone_number, "address" => $request->address??$banquet->address, "state_id"=>$request->state_id??$banquet->state_id, "city_id"=>$request->city_id??$banquet->city_id, "pincode"=>$request->pincode??$banquet->pincode, "country_id" => $request->country_id??$banquet->country_id, 'status'=>$request->status??$banquet->status); 
            $banquet->update($data);
            if($request->banner_image){
                $this->AwsDeleteImage($banquet->banner_image);
                $imagename = explode('.',$request->banner_image[0]['name'])[0];
                $banquet->banner_image = $this->AwsFileUpload($request->banner_image[0]['file'],config('gbi.banner_image'),$imagename);
                $banquet->banner_alt = $imagename;
                $banquet->save();
            }
            
            $banquet->banquetCategory()->sync(array_unique($request->banquet_category??''));
            $banquet->amenities()->sync(array_unique($request->amenities??''));
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\banquet  $banquet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Banquet $banquet)
    {
        $this->AwsDeleteImage($banquet->banner_image);
        $banquet->delete();
        return response()->json('successful deleted');
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
