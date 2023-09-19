<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Model;

class Itineraryrequest extends Model
{
    protected $fillable = [
        'source',
        'destination',
        'tourtype',
        'noofday',
        'phoneno',
        'email'
    ];
}
