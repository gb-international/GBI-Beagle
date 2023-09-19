<?php
/* 
Created by : Ajay yadav 
Purpose : Manage Itinerary 

*/
namespace App\Http\Controllers\Admin\Itinerary;

use App\Model\Itinerary\Itineraryday;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ItinerarydayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        // return Itinerary::all();
        return Itineraryday::where('itinerary_id',$id)->get();
    }
}
