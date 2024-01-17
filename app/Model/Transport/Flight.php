<?php

namespace App\Model\Transport;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
	protected $fillable = ['code','name', 'traveller_policy_id'];
    public function bookedflights()
    {
    	return $this->hasMany('App\Model\Reservation\Bookedflight');
    }
    public function traveller_policy(){
    	return $this->hasOne('App\Model\TravellerPolicy\TravellerPolicy', 'id', 'traveller_policy_id')->select(['id', 'name', 'traveller_policy_category_id', 'policy_type', 'description', 'status']);
    }
}
