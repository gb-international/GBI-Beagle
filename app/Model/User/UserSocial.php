<?php
/* 
Edited by : Rahul Rawat created edu_institute function
Purpose : Education Institute model connected with User Social model 
*/

namespace App\Model\User;

use Illuminate\Database\Eloquent\Model;

class UserSocial extends Model
{
    //
    protected $fillable = [
        'code','provider', 'user_id', 'edu_institute_id',
    ];

    protected $hidden = [
        'code',
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function edu_institute(){
        return $this->belongsTo('App\Model\School\EducationInstitute');
    }
}
