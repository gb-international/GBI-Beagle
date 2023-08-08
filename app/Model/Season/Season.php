<?php

namespace App\Model\Season;

use Illuminate\Database\Eloquent\Model;

class Season extends Model
{
    protected $guarded = [];

    protected $table = "seasons";

    public function popular()
	{
		return $this->hasMany('App\Model\Itinerary\Popular');
	}

    public function itineraries(){
    	return $this->belongsToMany('App\Model\Itinerary\Itinerary');
    }

}