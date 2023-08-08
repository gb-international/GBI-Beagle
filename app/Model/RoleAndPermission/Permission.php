<?php

namespace App\Model\RoleAndPermission;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $guarded = [];
    
    public $table = 'permissions';

    public function userRolePermission(){
        return $this->hasMany('App\Model\RoleAndPermission\UserRolePermission');
    }
}