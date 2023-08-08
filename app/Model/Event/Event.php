<?php

namespace App\Model\Event;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $guarded = [];

    protected $table = "events";

    public function itinerary(){
    	return $this->belongsTo(itinerary::class);
    }
    public function getPhotoAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.event_image').$image);
        }else{
            return '';
        }
    }
	public function getDetailPhotoAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.event_image').$image);
        }else{
            return '';
        }
    }

}

