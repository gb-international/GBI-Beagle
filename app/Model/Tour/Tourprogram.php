<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Tourprogram extends Model
{
    protected $fillable = ['title','description','image','alt'];

    public function getImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.tourprogram_image').$image);
        }else{
            return '';
        }
    }

    public function itinerary(){
    	return $this->belongsToMany('App\Model\Itinerary\Itinerary');
    }
}
