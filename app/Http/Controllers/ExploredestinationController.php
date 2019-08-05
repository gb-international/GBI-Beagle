<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\State;
use App\Itinerary;

class ExploredestinationController extends Controller
{

	public function index()
	{
		
	}

    public function expdestination()
    {
      	return view('front.explore-destination');
    }

    
    
}
