<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $table = 'payments';
    protected $fillable = ['id','payment_by_edu_institute_id', 'schoolbankdetail_id', 'payment_by_user_id','discount_coupon_id','tour_id','school_id','order_id','payment_by', 'payment_mode', 'ifsc_code', 'cheque_bank_name', 'added_by','cheque_number', 'date_of_issue', 'total_tour_price', 'razorpay_payment_id', 'amount', 'discount', 'tax_amount', 'fee_amount', 'total_amount', 'currency', 'payment_method', 'status', 'razorpay_signature', 'customer_type', 'created_at', 'updated_at', 'payment_date', 'deleted_at'];
}
