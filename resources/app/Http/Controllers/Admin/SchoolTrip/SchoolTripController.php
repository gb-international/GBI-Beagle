<?php
/* 
Created by : Manas 
Purpose : Manage Trips
*/
namespace App\Http\Controllers\Admin\SchoolTrip;

use App\Model\SchoolTrip\SchoolTrip;
use App\Traits\ImageTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

class SchoolTripController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;
    public function all($size)
    {
        return response()->json(SchoolTrip::latest('updated_at')
            ->paginate($size));
    }
    public function index()
    {
        return response()->json(SchoolTrip::get());
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
        $banner_name = 'trip_banner_'.Str::random(9);
        
        $data = SchoolTrip::create($this->validateTrip($request));
        $data['slug1'] = Str::slug($request->school_name);
        $data['slug2'] = $this->createSlug($request->school_name, $request->trip_name);

        if($request->banner_link){
            $data->banner_link = $this->AwsFileUpload($request->banner_link,config('gbi.schoolTrip_img'),$banner_name);
        }
        $data->save();
        return response()->json(['Message'=> 'successfull']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SchoolTrip  $schooltrip
     * @return \Illuminate\Http\Response
     */
    public function show(SchoolTrip $schooltrip)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SchoolTrip  $schooltrip
     * @return \Illuminate\Http\Response
     */
    public function edit(SchoolTrip $schooltrip)
    {
        return response()->json($schooltrip);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SchoolTrip  $schooltrip
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SchoolTrip $schooltrip)
    {
        $data = $this->validateTrip($request);
        $banner_name = 'trip_banner_'.Str::random(9);
        if($request->school_name != $schooltrip->school_name ){
            $data['slug1'] = Str::slug($request->school_name);
        }
        if($request->trip_name != $schooltrip->trip_name){
            $data['slug2'] = $this->createSlug($request->school_name, $request->trip_name);
        }
        //banner upload
        if($request->banner_link != $schooltrip->banner_link){
            $data['banner_link'] = $this->AwsFileUpload($request->banner_link,config('gbi.schoolTrip_img'),$banner_name);
            if($schooltrip->banner_link){
                $this->AwsDeleteImage($schooltrip->banner_link);
            }
        }else{
            unset($data['banner_link']);
        }
        $schooltrip->update($data);
        return response()->json(['Message'=> 'successfull']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SchoolTrip  $schooltrip
     * @return \Illuminate\Http\Response
     */
    public function destroy(SchoolTrip $schooltrip)
    {
        //$this->AwsDeleteImage($schooltrip->banner_link);
        $schooltrip->delete();
        return response()->json('successfully deleted');
    }

    public function validateTrip($request)
    {
        return $this->validate($request,[
            'school_name' => 'required',
            'trip_name' => 'required',
            'no_of_student'=> 'required|numeric',
            'no_of_teachers'=> 'required|numeric',
            'ph_no' => 'required|numeric',
            'banner_link'=> 'required',
            'slug1'=> '',
            'slug2'=> '',
            //'source'=> '',
            //'destination'=> '',
            'amount_paid'=> 'required|numeric',
            'amount_pending'=> 'required|numeric',
            'amount_total'=> 'required|numeric',
            'amt_per_pax'=> 'required|numeric',
            'start_date'=> 'required|date_format:Y-m-d',
            'end_date'=> 'required|date_format:Y-m-d',
            'payment_date'=> 'required|date_format:Y-m-d',
            'payment_status'=> 'required',
            'booking_status'=> 'required',
        ]);
    }
    
    public function createSlug($val1, $val2){
        $slug1 = Str::slug($val1);
        $slug2 = Str::slug($val2);
        if (SchoolTrip::where('slug1', $slug1)->where('slug2', $slug2)->exists()) {
            $slug2 = $slug2.'-'.Str::random(4);
        }
  
        return $slug2;
    }
}
