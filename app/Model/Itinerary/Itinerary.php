<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Model;

class Itinerary extends Model
{
	protected $fillable = ['source','destination','title','photo','photo_alt','detail_photo','detail_photo_alt','noofdays','description','tourtype','hotel_type','bus','train','flight','food','price','status'];


	public function itinerarydays()
	{
		return $this->hasMany('App\Model\Itinerary\Itineraryday');
	}

	public function tours()
	{
		return $this->hasMany('App\Model\Tour\Tour');
	}

	public function tourtypes(){
    	return $this->belongsToMany('App\Model\Tour\Tourtype');
    }
    public function tourprograms(){
    	return $this->belongsToMany('App\Model\Tour\Tourprogram');
	}
	
	public function frontbooking()
	{
		return $this->hasMany('App\Model\Tour\Frontbooking');
	}
    
}
