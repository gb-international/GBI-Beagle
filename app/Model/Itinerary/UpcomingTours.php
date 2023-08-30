<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UpcomingTours extends Model
{
    use HasFactory;
    protected $guarded = [];

    protected $table = "upcoming_tours";
    protected $fillable = [
        'id',
        'itineraries_id',
        'season_id',
        'start_date',
        'end_date',
        'ranking',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function itinerary(){
    	return $this->belongsTo(itinerary::class);
    }

    public function season(){
    	return $this->belongsTo('App\Model\Season\Season');
    }
}
