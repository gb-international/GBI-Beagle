<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Location\City;

class LocationController extends Controller
{
    public function cityList(){
        return response()->json(City::select(['id','name'])->get());
    }
}
