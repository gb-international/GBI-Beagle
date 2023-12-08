<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $table = 'payments';

    protected $fillable = ['id','payment_by_edu_institute_id', 'schoolbankdetail_id', 'payment_by_user_id','discount_coupon_id','tour_id','school_id','order_id','payment_by', 'payment_mode', 'ifs_code', 'bank_name', 'added_by','cheque_number', 'date_of_issue', 'tour_price', 'razorpay_payment_id', 'amount', 'discount', 'tax_amount', 'fee_amount', 'total_amount', 'currency', 'payment_method', 'status', 'razorpay_signature', 'customer_type', 'doc_proof', 'account_number', 'invoice_id', 'discount', 'international', 'amount_refunded', 'refund_status', 'email', 'contact', 'card_id', 'vpa', 'bank', 'wallet','upi', 'card_last_four_digit', 'card_details', 'acquirer_data', 'captured', 'created_at', 'updated_at', 'branch', 'bank_holder_name', 'customer_id', 'payment_date', 'deleted_at'];
    
    // Serialize column of acquirer_data 
    public function setAcquirerDataAttribute($value)
    {
        $this->attributes['acquirer_data'] = serialize($value);
    }
    
    // Unserialize column of acquirer_data 
    public function getAcquirerDataAttribute($value)
    {
        return unserialize($value);
    }

    // Serialize column of card_details 
    public function setCardDetailsAttribute($value)
    {
        $this->attributes['card_details'] = serialize($value);
    }
    
    // Unserialize column of card_details 
    public function getCardDetailsAttribute($value)
    {
        return unserialize($value);
    }

    // Serialize column of upi 
    public function setUpiAttribute($value)
    {
        $this->attributes['upi'] = serialize($value);
    }
    
    // Unserialize column of upi 
    public function getUpiAttribute($value)
    {
        return unserialize($value);
    }
}