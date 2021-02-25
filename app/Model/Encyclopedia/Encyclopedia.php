<?php

namespace App\Model\Encyclopedia;

use Illuminate\Database\Eloquent\Model;

class Encyclopedia extends Model
{
    protected $fillable = [
        'state_name',
        'thumbnail',
        'banner_image',
        'description',
        'map_link',
        'slug',
        'thumbnail_alt',
        'banner_image_alt',
    ];

    public function images(){
        return $this->hasMany('App\Model\Encyclopedia\EncyclopediaImage');
    }
    
    
    public function comments(){
    	return $this->hasMany('App\Model\Encyclopedia\Encyclopediacomment');
    }
    public function itinerarypdfs(){
    	return $this->hasMany('App\Model\Itinerary\Itinerarypdf');
    }
}
