<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Pax extends Model
{
    protected $fillable = [
        'tour_code',
        'total_male',
        'total_female',
        'absent_male',
        'absent_female',
        'message',
        'escort_id',
    ];

    public function tour(){
        return $this->belongsTo('App\Model\Tour\Tour','tour_code','tour_id');
    }

    public function escort(){
        return $this->belongsTo('App\Model\Escort\Escort');
    }
}
