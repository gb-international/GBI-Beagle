<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class Bookedsightseeing extends Model
{
    protected $fillable = ['tour_id','tour_code','sightseeing_id','itineraryday_id','mark_arrive'];
    public function tour()
    {
    	return $this->belongsTo('App\Model\Tour\Tour');
    }

    public function sightseeing()
    {
    	return $this->belongsTo('App\Model\Reservation\Sightseeing');
    }
}
