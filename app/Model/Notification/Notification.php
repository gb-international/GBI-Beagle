<?php

namespace App\Model\Notification;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $table = 'notification';
    
    protected $fillable = ['category', 'category_id', 'data'];


    public function itinerary(){
        return $this->belongsTo('App\Model\Itinerary\Itinerary');
    }

    public function post(){
        return $this->belongsTo('App\Model\Post\Post');
    }

    public function tour(){
        return $this->belongsTo('App\Model\Tour\Tour');
    }

    public function itineraryrequest(){
        return $this->belongsTo('App\Model\Itinerary\Itineraryrequest');
    }

    public function notifier(){
        return $this->hasMany('App\Model\Notification\Notifier');
    }
}
