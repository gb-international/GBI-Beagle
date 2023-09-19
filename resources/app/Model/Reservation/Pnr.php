<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class Pnr extends Model
{
    protected $fillable = ['transport_id','tour_id','transport_type','pnr_number'];
    public $timestamps = false;

    
}
