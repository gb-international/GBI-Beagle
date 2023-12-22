<?php
namespace App\Model\Itinerary;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItinerarySightseeingRequest extends Model
{
    use HasFactory;
    protected $table = "iti_sightseeing_requests";
    protected $fillable = ['id', 'company_user_id', 'family_user_id', 'edu_institute_id', 'itinerary_id', 'itineraryday_id','sightseeing_id', 'status', 'created_at','updated_at', 'deleted_at'];

    public function itinerary()
    {
        return $this->belongsTo('App\Model\Itinerary\Itinerary');
    }
 
    public function edu_institute(){
        return $this->belongsTo('App\Model\School\EducationInstitute');
    }

    public function company_user(){
        return $this->belongsTo('App\CompanyUser');
    }

    public function family_user(){
        return $this->belongsTo('App\FamilyUser');
    }
    
    public function itinerarydays()
    {
        return $this->belongsTo('App\Model\Itinerary\Itineraryday', 'itineraryday_id','id');
    }

    public function setSightseeingIdAttribute($value)
    {
        $this->attributes['sightseeing_id'] = serialize($value);
    }

    public function getSightseeingIdAttribute($value)
    {
        return unserialize($value);
    }
}
