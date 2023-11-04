<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    protected $guarded = [];
    public function getBannerImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.banner_image').$image);
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

    public function room(){
        return $this->hasMany('App\Model\Hotel\Room');
    }
    public function banquet(){
        return $this->hasMany('App\Model\Hotel\Banquet');
    }

    // public function roomCategory(){
    //     return $this->hasMany('App\Model\Hotel\RoomCategory');
    // }

    // public function banquetCategory(){
    //     return $this->hasMany('App\Model\Hotel\BanquetCategory');
    // }

    public function amenities(){
        return $this->hasMany('App\Model\Hotel\Amenities');
    }
    public function metaKeyword()
    {
        return $this->belongsToMany('App\Model\Hotel\MetaKeyword');
    }
}
