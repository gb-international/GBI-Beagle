<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Model;

class Popular extends Model
{
    protected $guarded = [];

    protected $table = "popular_itineraries";
    protected $fillable = [
        'id',
        'itinerary_id',
        'season_id',
        'start_date',
        'end_date',
        'created_at',
        'updated_at'
    ];

    public function itinerary(){
    	return $this->belongsTo(itinerary::class);
    }

    public function season(){
    	return $this->belongsTo('App\Model\Season\Season');
    }
}

