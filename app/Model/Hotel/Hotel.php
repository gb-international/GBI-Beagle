<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;


class Hotel extends Model
{
    protected $guarded = [];
    public function getImageAttribute($image)
    {
        /*if($image){
            return \Storage::disk('s3')->url(config('gbi.hotel_image').$image);
        }else{
            return '';
        }*/
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
        return $this->belongsToMany('App\Model\Hotel\RoomCategory')->select('id', 'title', 'description');
    }

    public function banquetCategory(){
        return $this->belongsToMany('App\Model\Hotel\BanquetCategory')->select('id', 'title', 'description');
    }

    public function amenities(){
        return $this->belongsToMany('App\Model\Hotel\Amenities')->select('id', 'title','description', 'alt', 'image', 'icon_alt', 'icon_image');
    }
    public function metaKeyword()
    {
        return $this->belongsToMany('App\Model\Hotel\MetaKeyword')->select('id', 'title')->select('id', 'title');
    }
    public function hotelimages()
	{
		return $this->hasMany('App\Model\Hotel\HotelImages')->select('id', 'hotel_id', 'alt', 'image');
	}

}
