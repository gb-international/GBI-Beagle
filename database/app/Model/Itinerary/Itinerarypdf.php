<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Model;

class Itinerarypdf extends Model
{
	protected $table = 'itinerarypdfs';
	protected $fillable = ['encyclopedia_id','name'];

    public function encyclopedia(){
    	return $this->belongsTo('App\Model\Encyclopedia\Encyclopedia');
    }
}


