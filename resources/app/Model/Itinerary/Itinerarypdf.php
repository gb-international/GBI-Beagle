<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Model;
use Str;
class Itinerarypdf extends Model
{
	protected $table = 'itinerarypdfs';
	protected $fillable = ['encyclopedia_id','name'];

    public function encyclopedia(){
    	return $this->belongsTo('App\Model\Encyclopedia\Encyclopedia');
    }

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug(strtolower($value),'-');
    }    

	// public function getNameAttribute($image)
    // {
    //     if($image){
    //         return \Storage::disk('s3')->url(config('gbi.encyclopedia_pdf').$image);
    //     }else{
    //         return '';
    //     }
    // }


}


