<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class Bookedescort extends Model
{
	protected $fillable = ['escort_id','tour_id','tour_code'];
    public function tour()
    {
    	return $this->belongsTo('App\Model\Tour\Tour');
    }

    public function escort()
    {
    	return $this->belongsTo('App\Model\Escort\Escort');
    }
    
}
