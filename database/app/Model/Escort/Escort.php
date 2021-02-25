<?php

namespace App\Model\Escort;

use Illuminate\Database\Eloquent\Model;

class Escort extends Model
{
    protected $fillable = ['name','salaryPerday','phoneno','email','address','status'];

    public function bookedescorts()
    {
    	return $this->hasMany('App\Model\Reservation\Bookedescort');
    }
}
