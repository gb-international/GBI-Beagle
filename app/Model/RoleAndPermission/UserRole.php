<?php

namespace App\Model\RoleAndPermission;

use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{
	protected $guarded = [];
	
    public $table = 'user_roles';

    public function role(){
        return $this->hasOne('App\Model\RoleAndPermission\Roles','id','role_id');
    }
    public function department(){
        return $this->hasOne('App\Model\RoleAndPermission\Department','id','department_id');
    }
    public function user(){
        return $this->belongsTo('App\User');
    }
    public function userRolePermission(){
        return $this->hasMany('App\Model\RoleAndPermission\UserRolePermission');
    }
}
