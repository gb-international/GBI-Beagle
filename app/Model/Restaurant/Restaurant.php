<?php

namespace App\Model\Restaurant;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $fillable = ['city_id','name','address','contact_name','contact_number'];

    // public function bookedhotels()
    // {
    // 	return $this->hasMany('App\Model\Reservation\Bookedhotel');
    // }
}




