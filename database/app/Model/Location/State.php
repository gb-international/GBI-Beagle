<?php

namespace App\Model\Location;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected  $fillable = ['country_id','name'];
    public function country()
    {
    	return $this->belongsTo('App\Model\Location\Country');
    }
    public function cities()
    {
    	return $this->hasMany('App\Model\Location\City');
    }
}
