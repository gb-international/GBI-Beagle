<?php
namespace App\Helpers;

class RazorpayPayment  
{
    protected $api;
    //Constructor to connected razorpay authentication
    protected function __construct() {
        $this->api = new Api(Config::get('services.razorpay.razorpay_key_id'), Config::get('services.razorpay.razorpay_secret'));
    }

    protected function createCustomer($data){

        return $customer;
    }
    protected function createOrder($data){

        return $order;
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