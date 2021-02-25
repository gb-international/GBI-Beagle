<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class Bookedbus extends Model
{
   protected $fillable = ['bus_id','tour_id','tour_code','source','destination','departure','arrival','price'];

   public function tour()
    {
    	return $this->belongsTo('App\Model\Tour\Tour');
    }

    public function bus()
    {
    	return $this->belongsTo('App\Model\Transport\Bus');
    }


}
