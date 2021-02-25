<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class Bookedrestaurant extends Model
{
    protected $fillable = ['tour_id','tour_code','restaurant_id','date_of_arrival'];
    public function tour()
    {
    	return $this->belongsTo('App\Model\Tour\Tour');
    }

    public function restaurant()
    {
    	return $this->belongsTo('App\Model\Restaurant\Restaurant');
    }
}
