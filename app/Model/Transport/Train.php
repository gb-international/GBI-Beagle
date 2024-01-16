<?php

namespace App\Model\Transport;

use Illuminate\Database\Eloquent\Model;

class Train extends Model
{
	protected $fillable = ['code','name', 'traveller_policy_id'];
    public function bookedtrains()
    {
    	return $this->hasMany('App\Model\Reservation\Bookedtrain');
    }
    public function traveller_policy(){
    	return $this->hasOne('App\Model\TravellerPolicy\TravellerPolicy', 'id', 'traveller_policy_id')->select(['id', 'name']);;
    }
}
