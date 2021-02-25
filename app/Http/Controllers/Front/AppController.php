<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppController extends Controller
{

  public function get(Request $request) 
  {
    return view('app');
  }
}