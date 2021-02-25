<?php

namespace App\Http\Controllers\Escort;

use App\Http\Controllers\Controller;

class AppController extends Controller 
{
    public function index(){
        return view('escort.index');
    }
}
