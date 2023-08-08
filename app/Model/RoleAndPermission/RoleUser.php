<?php

namespace App\Model\RoleAndPermission;

use Illuminate\Database\Eloquent\Model;

class RoleUser extends Model
{
	protected $guarded = [];
	
    public $table = 'model_has_roles';

    public function role(){
        return $this->hasOne('App\Model\RoleAndPermission\Roles','id','role_id');
    }
}
