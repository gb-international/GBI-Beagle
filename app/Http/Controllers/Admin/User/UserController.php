<?php

/* 
Created by : Manas
Purpose : Display User Details

*/

namespace App\Http\Controllers\Admin\User;
use App\Http\Controllers\Controller; 
use App\User;
use App\Model\User\Information;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;


class UserController extends Controller
{

    public function details()
    {
        $user = User::where('id', '24')->first();
        return response()->json('Hi');
    }

}
