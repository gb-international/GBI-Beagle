<?php

namespace App\Model\RoleAndPermission;

use Illuminate\Database\Eloquent\Model;

class UserRolePermission extends Model
{
	protected $guarded = [];
	
    public $table = 'user_role_permissions';

    public function userRole(){
        return $this->belongsTo('App\Model\RoleAndPermission\UserRole');
    }
    public function permission(){
        return $this->hasOne('App\Model\RoleAndPermission\Permissions','id','permission_id');
    }
}
