<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Trackpayment extends Model
{
    protected $fillable = ['user_id','travel_code','amount','tour_id','school_id','added_by'];
}
