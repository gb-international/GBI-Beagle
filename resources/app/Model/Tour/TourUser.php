<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class TourUser extends Model
{
    protected $table = 'tour_user';
    protected $fillable = [
        'user_id',
        'travel_code',
        'tour_code',
        'user_type',
        'is_paid',
        'schoolbankdetail_id',
        'payment_mode',
        'payment_type',
        'ifsc_code',
        'cheque_number',
        'amount',
        'cheque_bank_name',
        'date_of_issue',
        'payment_data',
        'status',
        'added_by'
    ];

    public function tour(){
        return $this->belongsTo('App\Model\Tour\Tour','travel_code','travel_code');
    }

    public function user(){
        return $this->belongsTo('App\User');
    }

    protected $casts = [
        'payment_data' => 'array'
    ];
}
