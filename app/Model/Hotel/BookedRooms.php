<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class BookedRooms extends Model
{
    protected $guarded = [];

    protected $table = "booked-rooms";

    public function hotel(){
        return $this->belongsTo('App\Model\Hotel\HotelNew');
    }

}