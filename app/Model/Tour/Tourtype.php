<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Tourtype extends Model
{
    protected $fillable = ['name'];

    public function itineraries(){
    	return $this->belongsToMany('App\Model\Itinerary\Itinerary');
    }
}
