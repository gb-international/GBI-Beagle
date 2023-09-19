<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class HotelBooking extends Model
{
    protected $guarded = [];

    protected $table = "hotel_booking_en";

    public function hotel(){
        return $this->belongsTo('App\Model\Hotel\Hotel');
    }

}