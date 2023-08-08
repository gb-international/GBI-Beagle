<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Otp extends Model
{
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'otp_send'
    ];

    public function test($variable)
    {
    	return $variable;
    }
}
