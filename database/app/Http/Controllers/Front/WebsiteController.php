<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Tour\Tourprogram;
use App\Model\Website;
use App\Model\School\School;
use App\Model\Itinerary\Itinerary;

class WebsiteController extends Controller
{
    public function travel_programs(){
    	return response()->json(Tourprogram::get());
    }
    public function school(){
    	return response()->json(School::select('id','school_name')->get());
    }


    public function getFlightDetails($flightNumber){
        $client = new \GuzzleHttp\Client();
        // $url = "http://csrikhi:64e780a62060d137cd0be76a4e2711e481cb6258@flightxml.flightaware.com/json/FlightXML2/FlightInfoEx?ident=IGO2752&howMany=1&offset=0";
        $url = "http://api.aviationstack.com/v1/flights?access_key=9170b312dcc65083c86baf65a6163bd4&flight_iata=$flightNumber";        
        $response = $client->get($url);
        return $response->getBody();
    }


    public function getCurrentWeather($city){
        $client = new \GuzzleHttp\Client();        
        $url = "http://api.openweathermap.org/data/2.5/weather?q=$city&units=metric&appid=d538ded243ed895d75aa34b9eb928779"; 
        $response = $client->get($url);
        return $response->getBody();
    }
    public function getForcastWeather($city){
        $client = new \GuzzleHttp\Client();        
        $url = "http://api.openweathermap.org/data/2.5/forecast?q=$city&units=metric&appid=d538ded243ed895d75aa34b9eb928779"; 
        $response = $client->get($url);
        return $response->getBody();
    }

    


}
