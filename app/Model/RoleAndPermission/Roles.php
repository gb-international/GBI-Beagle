<?php

namespace App\Model\RoleAndPermission;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
	protected $guarded = [];
	
    public $table = 'roles';
    public function userRole(){
        return $this->hasMany('App\Model\RoleAndPermission\UserRole');
    }
}
