<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class Bookedtrain extends Model
{
    protected $fillable = ['train_id','tour_id','tour_code','source','destination','departure','arrival','price'];


    public function tour()
    {
    	return $this->belongsTo('App\Model\Tour\Tour');
    }

    public function train()
    {
    	return $this->belongsTo('App\Model\Transport\Train');
    }


}
