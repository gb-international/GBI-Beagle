<?php
namespace App\Helpers;
use Illuminate\Support\Facades\Config;
use App\Model\Tour\Payment as PaymentModel;
use Razorpay\Api\Api;
use Carbon\Carbon;

class RazorpayPayment  
{
    protected $api;
    //Constructor to connected razorpay authentication
    public function __construct() {
        $this->api = new Api(Config::get('services.razorpay.razorpay_key_id'), Config::get('services.razorpay.razorpay_secret'));
    }

    /**
     * Created customer in razorpay
     * If exist So, fetch it (Check based on both mobile number & email id is same)
     * Save customer id in db based on customer type
    */

    public function createCustomer($data){
        $customer = $this->api->customer->create(array("name"=>$data->name??'', "email"=>$data->email??'', "contact"=>$data->phone_no??'', "fail_existing"=>0, "gstin"=>$data->gstin??null, "notes"=>array("address"=>$data->address??null,"city"=>$data->city??null,"zip_code"=>$data->zip_code??null, "country"=>$data->country??null, "state"=>$data->state??null, "country_code"=>$data->country_code??null)));
        $data->customer_id = $customer->id??'';
        $data->save();
        return $customer;
    }

    /**
     * Created Order in razorpay
     * Save record in order in db
    */
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
        else if($customer_type == "company"){
            $payment->payment_by_company_user_id = $user->id??null;
        }
        else if($customer_type == "family"){
            $payment->payment_by_family_user_id = $user->id??null;
        }
        $payment->payment_mode = 'payment gateway';
        $payment->payment_by = $data->payment_by??null;
        $payment->tour_price = $data->tour_price??0;
        $payment->order_payment_status = 0;
        $payment->save();
        return $payment;  
    }

    /**
     * Fetch payment details in razorpay by payment id
     * Save record in payment in db
    */
    public function checkPayment($request){
        $data = $this->api->payment->fetch($request->razorpay_payment_id??'');
        $payment = PaymentModel::where("order_id", $data->order_id??'')->first(); 
        $payment->razorpay_payment_id = $request->razorpay_payment_id??'';
        $payment->razorpay_signature = $request->razorpay_signature??'';
        $payment->amount = ($data->amount??0)/100;
        $payment->tax_amount = $data->tax??0;
        $payment->fee_amount = $data->fee??0;
        $payment->total_amount = (($data->amount??0)/100)+$data->tax??0+$data->fee??0;
        $payment->payment_method = $data->method??null;
        $payment->invoice_id = $data->invoice_id??null;
        $payment->international = $data->international??null;
        $payment->currency = $data->currency??null;
        $payment->amount_refunded = $data->amount_refunded??0;
        $payment->captured = $data->captured??0;
        $payment->refund_status = $data->refund_status??null;
        $payment->email = $data->email??null;
        $payment->contact = $data->contact??null;
        $payment->acquirer_data = $data->acquirer_data??'';
        $payment->captured = $data->captured??null;
        $payment->customer_id = $data->customer_id??null;
        
        if($payment->payment_method == "card"){
            $payment->card_id = $data->card_id??'';
            $payment->card_last_four_digit = $data->card->last4??'';
            $payment->card_details = $data->card??'';
        }
        else if($payment->payment_method == "upi"){
            $payment->vpa = $data->vpa??null;
            $payment->upi = $data->upi??'';
        }
        else if($payment->payment_method == "netbanking"){
            $payment->bank = $data->bank??null;
        }
        else if($payment->payment_method == "wallet"){
            $payment->wallet = $data->wallet??null;
        }
        $payment->status = $data->status;
        $payment->order_payment_status = 1;
        $payment->payment_date = Carbon::now('Asia/Kolkata')->format('Y-m-d H:i:s');
        $payment->save();   
    }
}