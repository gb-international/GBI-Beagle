<?php
namespace App\Helpers;
use Illuminate\Support\Facades\Config;
use App\Model\Tour\Payment as PaymentModel;
use Razorpay\Api\Api;

class RazorpayPayment  
{
    protected $api;
    //Constructor to connected razorpay authentication
    public function __construct() {
        $this->api = new Api(Config::get('services.razorpay.razorpay_key_id'), Config::get('services.razorpay.razorpay_secret'));
    }
    
    public function createCustomer($data){
        $customer = $this->api->customer->create(array("name"=>$data->name??'', "email"=>$data->email??'', "contact"=>$data->phone_no??'', "fail_existing"=>0, "gstin"=>$data->gstin??null, "notes"=>array("address"=>$data->address??null,"city"=>$data->city??null,"zip_code"=>$data->zip_code??null, "country"=>$data->country??null, "state"=>$data->state??null, "country_code"=>$data->country_code??null)));    
        $data->customer_id = $customer->id??'';
        $data->save();
        return $customer;
    }
    public function createOrder($data, $customer_type, $user){
            $discount = 0;
            if($data->discount_coupon_id){
                $discount = (($data->amount??0)*DiscountCoupon::where('id', $data->discount_coupon_id)->first('discount')->discount??0)/100;
            }
            $amount = ($data->amount??0)-$discount;
            $order = $this->api->order->create(array('amount' => $amount*100, 'currency' => 'INR'));

            $orderId = $order->id??'';
            $status = $order->status??'';
            $amount = ($order->amount??0)/100;
            $payment = new PaymentModel;
            $payment->amount = $amount;
            $payment->discount = $discount;
            $payment->order_id = $orderId;
            $payment->total_amount = $amount;
            $payment->status = $status;
            $payment->discount_coupon_id = $data->discount_coupon_id??null;
            $payment->tour_id = $data->tour_id;
            $payment->school_id = $data->school_id;
            $payment->customer_type = $customer_type;
            if($customer_type == "school"){
                $payment->payment_by_edu_institute_id = $user->id??null;
            }
            $payment->payment_mode = 'payment gateway';
            $payment->payment_by = $data->payment_by??null;
            $payment->tour_price = $data->tour_price??0;
            $payment->save();
            return $payment;  
    }
    protected function checkPayment($data, $type){
        return $customer;
    }
    protected function netbanking(){
        
    }
    protected function card(){

    }
    protected function upi(){

    }
    protected function wallet(){

    }
}