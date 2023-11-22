<?php

namespace App\Http\Controllers\Front\DiscountCoupon;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Advertising_And_Discount\DiscountCoupon;
use App\Model\Advertising_And_Discount\AttermptDiscountCoupon;
use App\Http\Controllers\Admin\BaseController;
use Carbon\Carbon;
use Validator;

class DiscountCouponController extends BaseController
{
    /**
     * Check Coupon Validation & exist coupon for particular Customer or not
     */
    
    public function checkCouponValidation(Request $request){
        
        try{
            $validator = Validator::make($request->all(), [ 
                'edu_institute_id' => 'required|exists:edu_institutes,id', 
                'discount_coupon_id' => 'required|exists:discount_coupons,id', 
            ]);
    
            if ($validator->fails()) { 
                return response()->json(['error'=>$validator->errors()], 401);            
            }
    
            $current_date = Carbon::now('Asia/Kolkata')->format('Y-m-d H:i');

            //fetch data from table 
            $data = DiscountCoupon::where('id',$request->discount_coupon_id??0)->where('start_date', '<=', $current_date)
            ->where('end_date', '>=', $current_date)->first();
            if(!empty($data)){
                $use_time_per_customer = $data->use_time_per_user??0;
                //Check for coupon is applicable for particular customer
                if($data->edu_institutes->count() > 0){
                    //Check for coupon is exist for passing id of customer 
                    if(empty($data->edu_institutes->where('id', $request->edu_institute_id)->first())){
                        return $this->sendError("Invalid coupon", 404); 
                    }
                }
                // Check Attempt of Customer
                $attermpt_discount_coupon = AttermptDiscountCoupon::where(['edu_institute_id' => $request->edu_institute_id, 'discount_coupon_id' => $request->discount_coupon_id])->first();
                $attermpt_discount_coupon_customer = $attermpt_discount_coupon->use_per_user??0;
                $attermpt_discount_coupon_customer += 1;
                if($attermpt_discount_coupon_customer > $use_time_per_customer){
                    return $this->sendError("Coupon already used", 404); 
                }
                $result = AttermptDiscountCoupon::updateOrCreate(['discount_coupon_id'=>$request->discount_coupon_id, 'edu_institute_id'=>$request->edu_institute_id],['discount_coupon_id'=>$request->discount_coupon_id, 'edu_institute_id'=>$request->edu_institute_id,'use_per_user'=>$attermpt_discount_coupon_customer]);
                return response()->json('Coupon applied');
            }
            else{
                return $this->sendError("Invalid coupon", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }


     }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

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
    public function store(Request $request)
    {
        //
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
