<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Frontbooking extends Model
{
    protected $fillable = ['user_id','itinerary_id','start_date','end_date','person','room','occupancy_type','noofday','accomodation','city','transport','sightseen'];

    public function user(){
        return $this->belongsTo('App\User');
    }
    public function itinerary(){
        return $this->belongsTo('App\Model\Itinerary\Itinerary');
    }
}
