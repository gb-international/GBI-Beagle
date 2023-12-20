<?php
/* 
Edited by : Rahul Rawat created edu_institute function
Purpose : Education Institute model connected with Subscriber model 
*/
namespace App\Model\User;

use Illuminate\Database\Eloquent\Model;

class Subscriber extends Model
{
    protected $fillable = ['edu_institute_id', 'email', 'name', 'client_type', 'company_user_id', 'family_user_id', 'user_id','status', 'promotion_notification', 'posts_notification', 'travel_notification', 'website_notification'];
    
    public function user(){
        return $this->belongsTo('App\User');
    }
    
    public function edu_institute(){
        return $this->belongsTo('App\Model\School\EducationInstitute');
    }
    
    public function notification(){
        return $this->hasMany('App\Model\User\Notification');
    }

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }
}
