<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MarketingController extends Controller
{
    public function index($file)
    {   
        $file = 'marketing.'.$file;
        return view($file);
    }
    public function store(Request $request){
        return $request->all();
    }
}
