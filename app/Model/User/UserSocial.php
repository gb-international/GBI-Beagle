<?php

namespace App\Model\User;

use Illuminate\Database\Eloquent\Model;

class UserSocial extends Model
{
    //
    protected $fillable = [
        'code','provider', 'user_id'
    ];
    protected $hidden = [
        'code',
    ];
    public function user(){
        return $this->belongsTo('App\User');
    }
}
