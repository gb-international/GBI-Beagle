<?php

namespace App\Model\School;

use Illuminate\Database\Eloquent\Model;

class Groupmember extends Model
{
    protected $fillable = [
        'tour_id','school_id','user_id','first_name', 'last_name', 'email','gender','mobile','age','user_type','is_paid'
    ];

    protected $casts = [
        'is_paid'=>'boolean'
    ];

    public function setIsPaidAttribute($value)
    {
        if($value == true){
            $this->attributes['is_paid'] = '1';
        }else{
            
            $this->attributes['is_paid'] = '0';
        }
    }
}
