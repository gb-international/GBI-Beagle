<?php

namespace App\Http\Controllers\Front\DiscountCoupon;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Advertising_And_Discount\DiscountCoupon;
use App\Model\Advertising_And_Discount\AttermptDiscountCoupon;
use App\Http\Controllers\Admin\BaseController;
use Carbon\Carbon;
use Validator;
use Auth;

class DiscountCouponController extends BaseController
{
    /**
     * Check Coupon Validation & exist coupon for particular Customer or not
     */
    
    public function checkCouponValidation($guard_name, Request $request){
        
        try{
            $validator = Validator::make($request->all(), [ 
                'discount_coupon_id' => 'required|exists:discount_coupons,id,client_type,'.$guard_name, 
            ]);
    
            if ($validator->fails()) { 
                return response()->json(['error'=>$validator->errors()], 401);            
            }

            $user = Auth::guard($guard_name."-api")->user();
            $current_date = Carbon::now('Asia/Kolkata')->format('Y-m-d H:i:s');

            //fetch data from table 
            $discount_coupon = DiscountCoupon::where(array('id'=>$request->discount_coupon_id??0, 'client_type'=>$guard_name))->where('start_date', '<=', $current_date)->where('end_date', '>=', $current_date)->first();
            if(!empty($discount_coupon)){
                $use_time_per_customer = $discount_coupon->use_time_per_user??0;
                //Check for coupon is applicable for particular customer of school
                if($guard_name == "school" && $discount_coupon->edu_institutes->count() > 0){
                    //Check for coupon is exist for passing id of customer school 
                    if(empty($discount_coupon->edu_institutes->where('id', $user->id??0)->first())){
                        return $this->sendError("Invalid coupon", 404); 
                    }
                }

                //Check for coupon is applicable for particular customer of family
                if($guard_name == "family" && $discount_coupon->family_users->count() > 0){
                    //Check for coupon is exist for passing id of customer family 
                    if(empty($discount_coupon->family_users->where('id', $user->id??0)->first())){
                        return $this->sendError("Invalid coupon", 404); 
                    }
                }

                //Check for coupon is applicable for particular customer of company
                if($guard_name == "company" && $discount_coupon->company_users->count() > 0){
                    //Check for coupon is exist for passing id of customer company 
                    if(empty($discount_coupon->company_users->where('id', $user->id??0)->first())){
                        return $this->sendError("Invalid coupon", 404); 
                    }
                }
                $data = array();
                // Check Attempt of Customer
                if($guard_name == "school"){
                    $data['client_type'] = $guard_name;
                    $data['edu_institute_id'] = $user->id??null;
                }
                else if($guard_name == "company"){
                    $data['client_type'] = $guard_name;
                    $data['company_user_id'] = $user->id??null;
                }
                else if($guard_name == "family"){
                    $data['client_type'] = $guard_name;
                    $data['family_user_id'] = $user->id??null;
                }
                $data['discount_coupon_id'] = $request->discount_coupon_id??null;
                $attermpt_discount_coupon = AttermptDiscountCoupon::where($data)->first();
                $attermpt_discount_coupon_customer = $attermpt_discount_coupon->use_per_user??0;
                $attermpt_discount_coupon_customer += 1;
                if($attermpt_discount_coupon_customer <= $use_time_per_customer){
                    $attermpt_discount_coupon = $data;
                    $attermpt_discount_coupon['use_per_user'] = $attermpt_discount_coupon_customer;
                    
                    $result = AttermptDiscountCoupon::updateOrCreate($data, $attermpt_discount_coupon);
                    return response()->json('Coupon applied');
                }
                else{
                    return $this->sendError("Coupon already used", 404); 
                }
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
