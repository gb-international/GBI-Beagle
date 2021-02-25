<?php

namespace App\Model\User;

use Illuminate\Database\Eloquent\Model;

class UserMoreInfo extends Model
{
    //
    protected $fillable = [
        'name','email', 'password','phone_no'
    ];
      protected $hidden = [
        'password', 'remember_token',
    ];
    public function getAuthPassword()
    {
      return $this->password;
    }
}
