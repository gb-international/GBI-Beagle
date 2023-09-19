<?php

namespace App\Model\Location;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $fillable = ['name','country_id','state_id'];

    public function state(){
        return $this->belongsTo('App\Model\Location\State');
    }

    public function country(){
        return $this->belongsTo('App\Model\Location\Country');
    }



}
