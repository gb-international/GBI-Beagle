<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Model;

class ItineraryImages extends Model
{
	protected $guarded = [];
    protected $table = "itinerary_images";

	public function itinerary()
    {
        return $this->belongsTo('App\Model\Itinerary\Itinerary');
    }
}