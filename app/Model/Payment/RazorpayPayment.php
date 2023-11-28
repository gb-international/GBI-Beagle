<?php

namespace App\Model\Payment;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RazorpayPayment extends Model
{
    use HasFactory;
    protected $table = 'razorpay_payments';
    protected $fillable = ['id','payment_by_edu_institute_id','payment_by_user_id','discount_coupon_id','tour_id','school_id','order_id','razorpay_payment_id', 'amount', 'discount', 'tax_amount', 'fee_amount', 'total_amount', 'currency', 'payment_method', 'status', 'customer_type', 'created_at', 'updated_at', 'payment_date', 'deleted_at'];
}

