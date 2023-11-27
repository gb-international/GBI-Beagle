<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController;
use Razorpay\Api\Api;
use Illuminate\Support\Facades\Auth;
use Validator;

class RazorpayPaymentController extends BaseController
{
    public $api;
    public function __construct() {
        $this->api = new Api(env('razorpay_key_id'), env('razorpay_secret'));
      }
    public function formPage(){
        // return "Hello";
        // $user_type = $this->user_category($request->user_type??'');
        // // $edu_institutes = Auth::guard($user_type)->user();
        // $edu_institutes = Auth::guard($user_type)->user();
        return view('front.payment');
    }
    public function makeOrder(Request $request){
        
        // customer_type
        // amount
        // $customer;
        // $user_type = $this->user_category($request->user_type??'');
        // $edu_institutes = Auth::guard($user_type)->user();
        // if($edu_institutes->customer_id){
        //     $customer = $api->customer->fetch($edu_institutes->customer_id);
        // }
        // if(empty($customer)){
        //     $customer = $api->customer->create(array('name' => $edu_institutes->name??'', 'email' => $edu_institutes->email??'','contact'=>$edu_institutes->phone_no??'', 'gstin'=>$edu_institutes->gstin??''));
        // }

        // $customerId = $this->getCustomer($request->customer_type??'');
        // $customerId = $this->saveCustomer($request->customer_type??'', $customerId);


        // $api->order->create(array('receipt' => '123', 'amount' => 100, 'currency' => 'INR', 'notes'=> array('key1'=> 'value3','key2'=> 'value2')));
        
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
