<?php

namespace App\Model\Transport;

use Illuminate\Database\Eloquent\Model;

class Bus extends Model
{
	protected $fillable = ['company_name','seater','seat_type','price', 'traveller_ policy_id', 'traveller_policy_id'];
    public function bookedbuses()
    {
    	return $this->hasMany('App\Model\Reservation\Bookedbus');
    } 
    public function traveller_policy(){
    	return $this->hasOne('App\Model\TravellerPolicy\TravellerPolicy', 'id', 'traveller_policy_id')->select(['id', 'name']);;
    }
}
