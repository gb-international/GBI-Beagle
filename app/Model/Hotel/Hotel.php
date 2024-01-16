<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    protected $guarded = [];
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

    // public function bookedhotels()
    // {
    // 	return $this->hasMany('App\Model\Reservation\Bookedhotel');
    // }

    public function amenities(){
        return $this->belongsToMany('App\Model\Hotel\Amenities');
    }
    
    public function rooms(){
        return $this->belongsToMany('App\Model\Hotel\Room');
    }

    public function banquets(){
        return $this->belongsToMany('App\Model\Hotel\Banquet');
    }

    public function metaKeyword()
    {
        return $this->belongsToMany('App\Model\Hotel\MetaKeyword')->select('id', 'title');
    }
    
    public function hotelimages()
	{
		return $this->hasMany('App\Model\Hotel\HotelImages')->select('id', 'hotel_id', 'alt', 'image');
	}

    public function hotel_states(){
    	return $this->hasOne('App\Model\Location\State', 'id', 'state_id')->select(['id', 'name']);
    }
    public function hotel_cities(){
    	return $this->hasOne('App\Model\Location\City', 'id', 'city_id')->select(['id', 'name']);;
    }
    public function hotel_countries(){
    	return $this->hasOne('App\Model\Location\Country', 'id', 'country_id')->select(['id', 'name']);;
    }
    public function traveller_policy(){
    	return $this->hasOne('App\Model\TravellerPolicy\TravellerPolicy', 'id', 'traveller_policy_id')->select(['id', 'name']);;
    }

    public function totalPrice(){
        $sum = 0;
        if($this->rooms->count()>0){
            foreach($this->rooms as $key => $val){
                $sum = $val->room_price->sum('net_rate')??0;
            }
        }
        return $sum;
    }
}
