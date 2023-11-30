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
use Carbon\Carbon;

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
        return view('order_details');
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
            $customer = $this->api->customer->create(array("name"=>$edu_institutes->name??'', "email"=>$edu_institutes->email??'', "contact"=>$edu_institutes->phone_no??'', "fail_existing"=>0, "gstin"=>$edu_institutes->gstin??null, "notes"=>array("address"=>$edu_institutes->address??null,"city"=>$edu_institutes->city??null,"zip_code"=>$edu_institutes->zip_code??null, "country"=>$edu_institutes->country??null, "state"=>$edu_institutes->state??null, "country_code"=>$edu_institutes->country_code??null)));    
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
            $razorpay_payment->total_amount = $amount/100;
            $razorpay_payment->status =$status;
            $razorpay_payment->discount_coupon_id = $request->discount_coupon_id;
            $razorpay_payment->tour_id = $request->tour_id;
            $razorpay_payment->school_id = $request->school_id;
            $razorpay_payment->payment_by_edu_institute_id = $edu_institute_id;
            $razorpay_payment->save();
            $razorpay_payment->customer_id = $customer->id??'';
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
    public function paymentRecord(Request $request){
        try{
            $validator = Validator::make($request->all(), [ 
                'razorpay_order_id' => 'required',
                'razorpay_payment_id'  => 'required',
            ]);            
            if ($validator->fails()) {
                return response()->json(['message' => "The given data was invalid.", 'errors' =>$validator->errors()]);
            }
            
            $data = $this->api->payment->fetch($request->razorpay_payment_id??'');
            if($data->order_id){
                $razorpay_payment = RazorpayPayment::where("order_id", $data->order_id??'')->first(); 
                $razorpay_payment->razorpay_payment_id = $request->razorpay_payment_id??'';
                $razorpay_payment->razorpay_signature = $request->razorpay_signature??'';
                $razorpay_payment->tax_amount = $data->tax??0;
                $razorpay_payment->fee_amount = $data->fee??0;
                $razorpay_payment->total_amount = $data->amount??0+$data->tax??0+$data->fee??0;
                $razorpay_payment->payment_method = $data->method??'';
                $razorpay_payment->status = $data->status;
                $razorpay_payment->payment_date = Carbon::now('Asia/Kolkata')->format('Y-m-d H:i:s');
                $razorpay_payment->save();
                return response()->json($razorpay_payment);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }  
    }

    public function invoice(){

        // $data = $this->api->Item->create(array("name" => "Book / English August","description" => "An indian story, Booker prize winner.","amount" => 20000,"currency" => "INR"));
        // return response()->json(($data->id));

        $data = $this->api->invoice->create(array ('type' => 'invoice', 'customer_id'=> 'cust_N6YV0AsWKQEGZH', 'line_items'=>array(array('item_id'=>'item_N6akfFncR02NKE'))));
        // $json = json_encode($data);
        return response()->json(($data->toArray()));
    }
}
