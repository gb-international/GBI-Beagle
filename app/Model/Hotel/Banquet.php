<?php

namespace App\Model\Hotel;
use Illuminate\Database\Eloquent\Model;

class Banquet extends Model
{
    protected $guarded = [];
    protected $table = "banquets";
    
    public function getBannerImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.banquet_image').$image);
        }else{
            return '';
        }
    }

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }

    public function amenities(){
        return $this->belongsToMany('App\Model\Hotel\Amenities');
    }

    public function banquetCategory(){
        return $this->belongsToMany('App\Model\Hotel\BanquetCategory');
    }

    public function banquet_states(){
    	return $this->hasOne('App\Model\Location\State', 'id', 'state_id')->select(['id', 'name']);
    }
    public function banquet_cities(){
    	return $this->hasOne('App\Model\Location\City', 'id', 'city_id')->select(['id', 'name']);;
    }
    public function banquet_countries(){
    	return $this->hasOne('App\Model\Location\Country', 'id', 'country_id')->select(['id', 'name']);;
    }
    public function traveller_policy(){
    	return $this->hasOne('App\Model\TravellerPolicy\TravellerPolicy', 'id', 'traveller_policy_id')->select(['id', 'name']);;
    }

}
