<?php

 /* 
Edited by : Rahul Rawat created edu_institute function
Purpose : Education Institute model connected with Encyclopedia comment model 
*/

namespace App\Model\Encyclopedia;

use Illuminate\Database\Eloquent\Model;

class Encyclopediacomment extends Model
{
	protected $fillable = ['edu_institute_id', 'encyclopedia_id','user_id','body','parent_id','status'];

    public function comments(){
    	return $this->belongsTo('App\Model\Encyclopedia\Encyclopedia')->orderBy('created_at');
    }

    public function user(){
    	return $this->belongsTo('App\User');
    }
    
    public function edu_institute(){
        return $this->belongsTo('App\Model\School\EducationInstitute');
    }
}

