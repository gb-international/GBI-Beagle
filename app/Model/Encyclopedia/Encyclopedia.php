<?php

/* ************************************************
      Author: Ajay 
      Edited by: Manas
      **************************************************** */
/* Edits: Added country field to DB & made it fillable */

namespace App\Model\Encyclopedia;

use Illuminate\Database\Eloquent\Model;

class Encyclopedia extends Model
{
    protected $fillable = [
        'state_name',
        'city_name',
        'country',
        'thumbnail',
        'banner_image',
        'description',
        'map_link',
        'slug',
        'thumbnail_alt',
        'banner_image_alt',
        'meta_title',
        'meta_keyword',
        'meta_description',
        'location',  
        'food_title',  
        'food_description',    
        'culture_title',  
        'culture_description',  
    ];

    public function getBannerImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.encyclopedia_image').$image);
        }else{
            return '';
        }
    }

    public function getThumbnailAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.encyclopedia_image').$image);
        }else{
            return '';
        }
    }

    public function images(){
        return $this->hasMany('App\Model\Encyclopedia\EncyclopediaImage');
    }
    
    public function tags()
    {
        return $this->belongsToMany('App\Model\Post\Tag');
    }

    public function comments(){
    	return $this->hasMany('App\Model\Encyclopedia\Encyclopediacomment');
    }
    public function itinerarypdfs(){
    	return $this->hasMany('App\Model\Itinerary\Itinerarypdf');
    }
    public function encyclopedias_cultural_imgs(){
    	return $this->hasMany('App\Model\Encyclopedia\EncyclopediasCultural');
    }
    public function encyclopedias_food_imgs(){
    	return $this->hasMany('App\Model\Encyclopedia\EncyclopediasFood');
    }
}
