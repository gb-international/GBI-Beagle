<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class Bookedhotel extends Model
{
    protected $fillable = ['tour_id','tour_code','hotel_id','check_in','check_out','price'];
    public function tour()
    {
    	return $this->belongsTo('App\Model\Tour\Tour');
    }

    public function hotel()
    {
    	return $this->belongsTo('App\Model\Hotel\Hotel');
    }
    
}
