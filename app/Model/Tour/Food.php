<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $table = 'foods';
    protected $fillable = ['tour_id','tour_code','name','quantity'];
}
