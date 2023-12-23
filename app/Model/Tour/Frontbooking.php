<?php

/* 
Edited by : Rahul Rawat created edu_institute function
Purpose : Education Institute model connected with Front booking model 
*/

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Frontbooking extends Model
{ 
    protected $fillable = ['tour_type', 'company_user_id', 'family_user_id', 'user_id', 'edu_institute_id', 'itinerary_id','start_date','end_date','person','room','occupancy_type','noofday','accomodation','city','transport','sightseen', 'adults', 'children', 'infants'];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function itinerary(){
        return $this->belongsTo('App\Model\Itinerary\Itinerary');
    }

    public function edu_institute(){
        return $this->belongsTo('App\Model\School\EducationInstitute');
    }

    
}
