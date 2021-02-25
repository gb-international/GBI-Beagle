<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class Bookeduser extends Model
{
    protected $fillable = [
        'tour_id',
        'tour_code',
        'travel_code',
        'user_id',
        'schoolbankdetail_id',
        'payment_mode',
        'payment_type',
        'ifsc_code',
        'cheque_number',
        'cheque_bank_name',
        'date_of_issue',
        'added_by',
        'total_tour_price',
        'collect_amount',
        'payment_data',
        'status',
        'visible_to_user'
    ];
    
    public function tour()
    {
    	return $this->belongsTo('App\Model\Tour\Tour','tour_id');
    }

    public function user()
    {
    	return $this->belongsTo('App\User');
    }

}
