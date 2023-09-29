<?php
/* 
Edited by : Rahul Rawat created edu_institute function
Purpose : Education Institute model connected with Feedback model 
*/

namespace App\Model\Feedback;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
	protected $table = "feedbacks";

    protected $fillable = [
    	'user_id',
    	'tour_id',
		'edu_institute_id',
	   	'name',
	   	'email',
		'ph_no',
		'trip_itenerary',
		'place_of_stay',
		'food_quality',
		'transport_arrangements',
		'recommend_to_others',
		'travel_again',
		'escort_hospitality',
		'comments'
	];

    public function tour()
    {
    	return $this->belongsTo('App\Model\Tour\Tour');
    }

    public function user()
    {
    	return $this->belongsTo('App\User');
    }
	public function edu_institute(){
        return $this->belongsTo('App\Model\School\EducationInstitute');
    }
}
