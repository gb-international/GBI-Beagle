<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Hotel 

*/
namespace App\Http\Controllers\Admin\Hotel;
use App\Http\Resources\Admin\HotelCollection;
use App\Model\Hotel\Hotel;
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

    public function all($size)
    {
        return response()->json(Hotel::select([
            'id','type','name','address','phoneno'
            ])
            ->latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        $hotel = Hotel::select('name','id')->get();
        return response()->json($hotel);
        return HotelCollection::collection(Hotel::all());
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
       $hotel = Hotel::create($this->validateHotel($request));

       if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            $path = $this->singleFile($request->image[0]['file'],'/images/hotel/',$imagename);
            $hotel->alt = $imagename;

        }else{
            $path = $hotel->image;
        }
        $hotel->image = $path;
        $hotel->save();

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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function edit(Hotel $hotel)
    {
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

        $data = $hotel->update($this->validateHotel($request));
        if($request->image){
            $imagename = explode('.',$request->image[0]['name'])[0];
            $path = $this->singleFile($request->image[0]['file'],'/images/hotel/',$imagename);
            $hotel->alt = $imagename;

        }else{
            $path = $hotel->image;
        }
        $hotel->image = $path;
        $hotel->save();


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
        $hotel->delete();
        return response()->json('successfully deleted');
    }


    // Validate hotel

    public function validateHotel($request)
    {
         return $this->validate($request, [

            'address' => 'required|min:3',
            'type' => 'required',
            'name' => ['required',new AlphaSpace],
            'state'=>'required',
            'city' =>'required',
            'address' => 'required',
            'phoneno' => ['required','numeric',new PhoneNubmerValidate],
            'email' => ['required','email',new EmailValidate],
            'room'=>'required|numeric|min:1',

            'apai_single' => '',
            'apai_double' => '',
            'apai_triple' => '',
            'apai_quad' => '',

            'mapai_single' => '',
            'mapai_double' => '',
            'mapai_triple' => '',
            'mapai_quad' => '',

            'cpai_single' => '',
            'cpai_double' => '',
            'cpai_triple' => '',
            'cpai_quad' => '',
          
      ]);
    }

}
