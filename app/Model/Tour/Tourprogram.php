<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Tourprogram extends Model
{
    protected $fillable = ['title','description','image','alt'];

    public function itinerary(){
    	return $this->belongsToMany('App\Model\Itinerary\Itinerary');
    }
}
