<?php

namespace App\Model\RoleAndPermission;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
	protected $guarded = [];

    public $table = 'department';
    
    public function userRole(){
        return $this->hasMany('App\Model\RoleAndPermission\UserRole');
    }
}
