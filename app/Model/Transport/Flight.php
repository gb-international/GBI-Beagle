<?php

namespace App\Model\Transport;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
	protected $fillable = ['code','name'];
    public function bookedflights()
    {
    	return $this->hasMany('App\Model\Reservation\Bookedflight');
    }
}
