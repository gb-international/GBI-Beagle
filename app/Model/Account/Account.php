<?php

namespace App\Model\Account;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $fillable = [
        'itinerary_id', 'price', 'salesdp_id',
    ];
}
