<?php

namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItinerarySightseeingRequest extends Model
{
    use HasFactory;
    protected $table = "iti_sightseeing_requests";
    protected $fillable = ['id', 'edu_institute_id', 'itinerary_id', 'itineraryday_id','sightseeing_id', 'status', 'created_at','updated_at', 'deleted_at'];
    public function setSightseeingIdAttribute($value)
    {
        $this->attributes['sightseeing_id'] = serialize($value);
    }

    public function getSightseeingIdAttribute($value)
    {
        return unserialize($value);
    }
}
