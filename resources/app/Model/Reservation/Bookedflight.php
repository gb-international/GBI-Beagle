<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class Bookedflight extends Model
{
    protected $fillable = ['flight_id','tour_id','tour_code','source','destination','flight_number','departure','arrival','price'];

    public function tour()
    {
    	return $this->belongsTo('App\Model\Tour\Tour');
    }

    public function flight()
    {
    	return $this->belongsTo('App\Model\Transport\Flight');
    }
    
    public function pnruser()
    {
    	return $this->hasMany('App\Model\Reservation\PnrUser','transport_id');
    }

}
