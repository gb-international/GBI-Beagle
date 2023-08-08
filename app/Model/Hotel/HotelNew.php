<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class HotelNew extends Model
{
    protected $guarded = [];

    protected $table = "hotel";

    public function getImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.hotel_image').$image);
        }else{
            return '';
        }
    }

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }

    public function bookedhotels()
    {
    	return $this->hasMany('App\Model\Reservation\Bookedhotel');
    }

    public function rooms(){
        return $this->hasMany('App\Model\Hotel\HotelRooms');
    }

    public function roomCategory(){
        return $this->hasMany('App\Model\Hotel\RoomCategory');
    }

    public function banquetCategory(){
        return $this->hasMany('App\Model\Hotel\BanquetCategory');
    }

    public function amenities(){
        return $this->hasMany('App\Model\Hotel\Amenities');
    }
}
