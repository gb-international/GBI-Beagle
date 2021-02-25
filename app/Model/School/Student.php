<?php

namespace App\Model\School;

use Illuminate\Database\Eloquent\Model;
Use App\Model\School\School;
class Student extends Model
{
    protected $fillable = [
        'school_id','user_id', 'first_name', 'last_name','gender','father_name','email','mobile','alternate_mobile','dob','class','address','status'
    ];

    public function school(){
    	return $this->belongsTo(School::class);
    }
}
