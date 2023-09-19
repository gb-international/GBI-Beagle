<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Corppayment extends Model
{

    protected $table = 'corp_payments';
    
    protected $fillable = ['user_id','company_id','tour_code','corp_bankdetails_id','payment_mode','payment_type','ifsc_code','cheque_number','amount','cheque_bank_name','date_of_issue','status','added_by','collect_amount','payment_data'];

    public function adminFormat(){
        return  [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'user_name' => $this->user->name,
            'company_id' => $this->company_id,
            'company_name' => $this->company->company_name,
            'tour_code' => $this->tour_code,
            'corp_bankdetails_id' => $this->corp_bankdetails_id,
            'payment_mode' => $this->payment_mode,
            'payment_type' => $this->payment_type,
            'ifsc_code' => $this->ifsc_code,
            'amount' => $this->amount,
            'cheque_bank_name' => $this->cheque_bank_name,
            'date_of_issue' => $this->date_of_issue,
            'status' => $this->status,
            'added_by' => $this->added_by,
            'collect_amount'=>$this->collect_amount,
            'payment_data'=> json_decode($this->payment_data),
            'created_at' => $this->created_at->diffForHumans()
        ];
    }

    public function corpbankdetail(){
        return $this->belongsTo('App\Model\Tour\Corpbankdetail');
    }

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function company(){
        return $this->belongsTo('App\Model\Corporate\Company');
    }

}
