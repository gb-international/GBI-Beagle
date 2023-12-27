<?php

namespace App\Model\School;

use Illuminate\Database\Eloquent\Model;

class Groupmember extends Model
{
    protected $fillable = [
        'tour_id','school_id','user_id', 'company_id', 'company_user_id', 'family_user_id', 'first_name', 'last_name', 'email','gender','mobile','age','user_type','is_paid', 'edu_institute_id', 'payment_status', 'tour_type'
    ];

    protected $casts = [
        'is_paid'=>'boolean'
    ];

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }

    public function setIsPaidAttribute($value)
    {
        if($value == true){
            $this->attributes['is_paid'] = '1';
        }else{
            
            $this->attributes['is_paid'] = '0';
        }
    }
}
