<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Userpayment extends Model
{
    protected $fillable = ['user_id','school_id','tour_code','schoolbankdetail_id','payment_mode','payment_type','ifsc_code','cheque_number','amount','cheque_bank_name','date_of_issue','status','added_by','collect_amount','payment_data'];

    public function adminFormat(){
        return  [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'user_name' => $this->user->name,
            'school_id' => $this->school_id,
            'school_name' => $this->school->school_name,
            'tour_code' => $this->tour_code,
            'schoolbankdetail_id' => $this->schoolbankdetail_id,
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

    public function schoolbankdetail(){
        return $this->belongsTo('App\Model\Tour\Schoolbankdetail');
    }

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function school(){
        return $this->belongsTo('App\Model\School\School');
    }

}
