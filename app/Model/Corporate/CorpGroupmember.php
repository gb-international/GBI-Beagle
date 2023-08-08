<?php

namespace App\Model\Corporate;

use Illuminate\Database\Eloquent\Model;

class CorpGroupmember extends Model
{
    protected $table = "corp_groupmembers";
    
    protected $fillable = [
        'tour_id','company_id','user_id','first_name', 'last_name', 'email','gender','mobile','age','user_type','is_paid'
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
