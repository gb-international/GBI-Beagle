<?php

namespace App\Http\Controllers;

use App\Location;
use Illuminate\Http\Request;

class ItineraryresourcesController extends Controller
{
    //display home page
     public function index()
    {
        return view('front.home');
    }

    /*get browser location*/
    public function getLocation(Request $request) {
     /* $this->validate($request,[
            'fulladdress'=>'unique:fulladdress'
            
        ]);*/
           
    $location = new Location();
    $location->fulladdress = $request->fulladdress;
    $location->state = $request->state;
    $location->save();
    return response()->json(['location add'
            ],200);

      }

    public function ourStories()
    {
        return view('front.ourstory');
    }

    public function howWework()
    {
        return view('front.wework');
    }

    public function travelEducation()
    {
        return view('front.traveleducation');
    }

    public function safetySecurity()
    {
        return view('front.safetysecurity');
    }

    public function faq()
    {
        return view('front.faq');
    }

      

}
