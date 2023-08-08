<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class RoomCategory extends Model
{
    protected $guarded = [];

    protected $table = "room_categories";


    public function hotel(){
        return $this->hasMany('App\Model\Hotel\Hotel');
    }

    public function rooms(){
        return $this->hasMany('App\Model\Hotel\HotelRooms');
    }

}
