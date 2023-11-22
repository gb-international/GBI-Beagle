<?php

namespace App\Http\Controllers\Admin\Advertising_And_Discount;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Advertising_And_Discount\DiscountCoupon;
use App\Http\Controllers\Admin\BaseController;
use App\Http\Requests\Admin\Advertising_And_Discount\DiscountCouponRequest;
use App\Model\Advertising_And_Discount\AttermptDiscountCoupon;
use App\Traits\ImageTrait;
use Image;

class DiscountCouponController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ImageTrait;

    public function all($size=null)
    {
        if (empty($size)) {
            $size = 10; 
        }
        $data = DiscountCoupon::latest()->paginate($size);
        foreach ($data as $discount_coupon){
            $discount_coupon->edu_institutes;
        }
        return response()->json($data);
    }

    public function index()
    {
        //
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
    public function store(DiscountCouponRequest $request)
    {
        try{
            $discount_coupon = new DiscountCoupon();
            $discount_coupon->name = $request->name??'';
            $discount_coupon->description = $request->description??'';
            $discount_coupon->coupon_code = $request->coupon_code??'';
            $discount_coupon->price = $request->price??'';
            $discount_coupon->discount = $request->discount??'';
            $discount_coupon->use_time_per_user = $request->use_time_per_user??'';
            $discount_coupon->start_date = $request->start_date??'';
            $discount_coupon->end_date = $request->end_date??'';
            
            if($request->image){
                $imagename = explode('.',$request->image[0]['name'])[0];
                $discount_coupon->image = $this->AwsFileUpload($request->image[0]['file'],config('gbi.discount_coupon_image'),$imagename);
                $discount_coupon->alt = $imagename;
            }
            $discount_coupon->save();

            //Connected discount coupon to education institutes table
            $discount_coupon->edu_institutes()->sync(array_unique($request->edu_institute_id??''));
              
        } 
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successfull created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $data = DiscountCoupon::where('id',$id)->first();
            if(!empty($data)){
                $data->edu_institutes;
                return response()->json($data);
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try{
            $data = DiscountCoupon::where('id',$id)->first();
            if(!empty($data)){
                $data->edu_institutes;
                return response()->json($data);
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DiscountCouponRequest $request, DiscountCoupon $discount_coupon)
    {
        try{             
            if(!empty($discount_coupon)){
                $discount_coupon->name = $request->name??$discount_coupon->name;
                $discount_coupon->description = $request->description??$discount_coupon->description;
                $discount_coupon->coupon_code = $request->coupon_code??$discount_coupon->coupon_code;
                $discount_coupon->price = $request->price??$discount_coupon->price;
                $discount_coupon->discount = $request->discount??$discount_coupon->discount;
                $discount_coupon->use_time_per_user = $request->use_time_per_user??$discount_coupon->use_time_per_user;
                $discount_coupon->start_date = $request->start_date??$discount_coupon->start_date;
                $discount_coupon->end_date = $request->end_date??$discount_coupon->end_date;
                
                if($request->image){
                    if($discount_coupon->image){
                        $this->AwsDeleteImage($discount_coupon->image);
                    }
                    $imagename = explode('.',$request->image[0]['name'])[0];
                    $discount_coupon->image = $this->AwsFileUpload($request->image[0]['file'],config('gbi.discount_coupon_image'),$imagename);
                    $discount_coupon->alt = $imagename;
                }

                $discount_coupon->save();
    
                //Connected discount coupon to education institutes table
                if($request->edu_institute_id){
                    $discount_coupon->edu_institutes()->sync(array_unique($request->edu_institute_id??''));
                }
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        return response()->json('successful updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            //fetch data from table 
            $data = DiscountCoupon::where('id',$id)->first();
            if(!empty($data)){
                $data->delete();
                return response()->json("Deleted successful!");
            }
            else{
                return $this->sendError("Id does not exist", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
/**
 * Fetch customer used coupon details
 */
    public function attemptDiscountCoupon($size=null){
        if (empty($size)) {
            $size = 10; 
        }
        $data = AttermptDiscountCoupon::latest()->paginate($size);
        foreach ($data as $discount_coupon){
            $discount_coupon->education_institutes;
            $discount_coupon->discount_coupon;
        }
        return response()->json($data);
    }
}
