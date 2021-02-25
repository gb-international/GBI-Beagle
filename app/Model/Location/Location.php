<?php

namespace App\Model\Location;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
     protected $fillable = [
        'fulladdress', 'state', 
    ];
}
