<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class Amenities extends Model
{
    protected $guarded = [];

    protected $table = "amenities";


    public function hotels(){
        return $this->hasMany('App\Model\Hotel\Hotel');
    }

    public function banquets(){
        return $this->hasMany('App\Model\Hotel\Banquet');
    }

    public function rooms(){
        return $this->hasMany('App\Model\Hotel\HotelRooms');
    }

}
