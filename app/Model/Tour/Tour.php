<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;
use App\Model\Itinerary\Itinerary;


class Tour extends Model
{
    protected $fillable = [
        'tour_id','travel_code','itinerary_id','school_id','tour_start_date','tour_end_date','tour_price','status'
    ];

    public function itinerary(){
    	return $this->belongsTo(itinerary::class);
    }
    public function school(){
    	return $this->belongsTo('App\Model\School\School');
    }
    public function bookedescorts()
    {
    	return $this->hasMany('App\Model\Reservation\Bookedescort');
    }
    public function bookedhotels()
    {
        return $this->hasMany('App\Model\Reservation\Bookedhotel');
    }
    
    public function bookedrestaurants()
    {
        return $this->hasMany('App\Model\Reservation\Bookedrestaurant');
    }

    public function bookedbuses()
    {
        return $this->hasMany('App\Model\Reservation\Bookedbus');
    }
     public function bookedtrains()
    {
        return $this->hasMany('App\Model\Reservation\Bookedtrain');
    }
    public function bookedflights()
    {
        return $this->hasMany('App\Model\Reservation\Bookedflight');
    }

    public function travel(){
        return $this->belongsTo('App\User','travel_code');
    }
}
