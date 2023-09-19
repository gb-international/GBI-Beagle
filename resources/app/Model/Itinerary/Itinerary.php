<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Model;
use \Sushi\Sushi;

class Itinerary extends Model
{

	protected $guarded = [];

	public function getPhotoAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.itinerary_image').$image);
        }else{
            return '';
        }
    }
	public function getDetailPhotoAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.itinerary_image').$image);
        }else{
            return '';
        }
    }

	public function itinerarydays()
	{
		return $this->hasMany('App\Model\Itinerary\Itineraryday');
	}

	public function tours()
	{
		return $this->hasMany('App\Model\Tour\Tour');
	}

	public function events()
	{
		return $this->hasMany('App\Model\Event\Event');
	}

	public function itineraryimages()
	{
		return $this->hasMany('App\Model\Itinerary\ItineraryImages');
	}

	public function popular()
	{
		return $this->hasMany('App\Model\Itinerary\Popular');
	}

	public function tourtypes(){
    	return $this->belongsToMany('App\Model\Tour\Tourtype');
    }

	public function seasons(){
    	return $this->belongsToMany('App\Model\Season\Season');
    }

    public function tourprograms(){
    	return $this->belongsToMany('App\Model\Tour\Tourprogram');
	}
	
	public function frontbooking()
	{
		return $this->hasMany('App\Model\Tour\Frontbooking');
	}

	public function tags()
    {
        return $this->belongsToMany('App\Model\Post\Tag');
    }
    
}
