<?php

namespace App\Http\Controllers\Admin\Tour;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Tour\Tour;
use App\Model\Tour\Pax;

class PaxController extends Controller 
{
    public function index($tour_code){
        $pax = Pax::where('tour_code',$tour_code)->with('escort')->first();
        return response()->json($pax);
    }
}
