<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class Sightseeing extends Model
{
    protected $fillable = ['name','state_id','city_id','address','image','alt','description','adult_price','child_price'];

    public function city(){
        return $this->belongsTo('App\Model\Location\City');
    }
    
    public function state(){
        return $this->belongsTo('App\Model\Location\State');
    }

}
