<?php

namespace App\Http\Controllers\Admin\Advertising_And_Discount;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Advertising_And_Discount\DiscountCoupon;
use App\Http\Requests\Admin\Advertising_And_Discount\DiscountCouponRequest;
class DiscountCouponController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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
            $discount_coupon->education_institutes()->sync(array_unique($request->edu_institute_id??''));
              
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
