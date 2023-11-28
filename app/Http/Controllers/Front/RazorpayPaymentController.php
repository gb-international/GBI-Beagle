<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController;
use Razorpay\Api\Api;
use App\Model\Advertising_And_Discount\DiscountCoupon;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Config;
use App\Model\Payment\RazorpayPayment;

class RazorpayPaymentController extends BaseController
{
    public $api;
    public function __construct() {
        $this->api = new Api(Config::get('services.razorpay.razorpay_key_id'), Config::get('services.razorpay.razorpay_secret'));
      }
    public function formPage(){
        // return "Hello";
        // $user_type = $this->user_category($request->user_type??'');
        // // $edu_institutes = Auth::guard($user_type)->user();
        // $edu_institutes = Auth::guard($user_type)->user();
        return view('front.payment');
    }
    public function makeOrder(Request $request){
        try{
            $validator = Validator::make($request->all(), [ 
                'amount'  => 'required|numeric|gt:0',
                'tour_id' => 'required|exists:tours,id',
                'school_id' => 'required|exists:schools,id',
                'discount_coupon_id' => 'discount_coupons,id',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
            }
            $discount = 0;
            if($request->discount_coupon_id){
                $discount = (($request->amount??0)*DiscountCoupon::where('id', $request->discount_coupon_id)->first('discount')->discount??0)/100;
            }
            $amount = ($request->amount??0)-$discount;
            $user_type = $this->user_category($request->user_type??'');
            $edu_institutes = Auth::guard($user_type)->user();
            
            $edu_institute_id = $edu_institutes->id??0;
            $customer;
        
            $customer = $this->api->customer->create(array("name"=>$edu_institutes->name??'', "email"=>$edu_institutes->email??'', "contact"=>$edu_institutes->phone_no??'', "fail_existing"=>0, "gstin"=>$edu_institutes->gstin??null));

            $edu_institutes->customer_id = $customer->id??'';
            $edu_institutes->save();

            $order = $this->api->order->create(array('amount' => $amount*100, 'currency' => 'INR'));
            $orderId = $order->id??'';
            $status = $order->status??'';
            $amount = $order->amount??'';
            $razorpay_payment = new RazorpayPayment;
            $razorpay_payment->amount = $request->amount??0;
            $razorpay_payment->discount = $discount;
            $razorpay_payment->order_id = $orderId;
            $razorpay_payment->total_amount = $amount;
            $razorpay_payment->status =$status;
            $razorpay_payment->discount_coupon_id = $request->discount_coupon_id;
            $razorpay_payment->tour_id = $request->tour_id;
            $razorpay_payment->school_id = $request->school_id;
            $razorpay_payment->payment_by_edu_institute_id = $edu_institute_id;
            $razorpay_payment->save();

            return response()->json($razorpay_payment);
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
        
    }
public function getCustomer($customer_type){

    if($customer_type == "edu_institutes"){
        $user_type = $this->user_category($request->user_type??'');
        $edu_institutes = Auth::guard($user_type)->user();
        return array("name"=>$edu_institutes->name??'', "email"=>$edu_institutes->email??'', "phone_no"=>$edu_institutes->phone_no??'');
    }
    else if($customer_type == "user"){
    
    }
}
public function saveCustomer(){
    
}
}
