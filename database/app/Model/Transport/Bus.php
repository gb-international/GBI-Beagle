<?php

namespace App\Model\Transport;

use Illuminate\Database\Eloquent\Model;

class Bus extends Model
{
	protected $fillable = ['company_name','seater','seat_type','price'];
    public function bookedbuses()
    {
    	return $this->hasMany('App\Model\Reservation\Bookedbus');
    }
}
