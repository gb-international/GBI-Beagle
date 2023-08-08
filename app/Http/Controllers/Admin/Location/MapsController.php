<?php
/* 
Created by : Manas
Purpose : Manage Maps 

*/

namespace App\Http\Controllers\Admin\Location;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Rules\AlphaSpace;
use GoogleMaps as Map;

class MapsController extends Controller
{

    public function getLocation(Request $request) {

        $data = \GoogleMaps::load('geocoding')
        ->setParam (['address' => $request->address])
        ->get();

        return $data;
    }

    public function getMap(Request $request) {
        $latlng = $request->lat.','.$request->lng;
        $data = \GoogleMaps::load('geocoding')
                ->setParamByKey('latlng', $latlng)
                 ->get('results');

        return $data;
    }

    public function getDirection(Request $request) {

        $data =   \GoogleMaps::load('directions')
                     
        ->setParamByKey('origin', $request->origin)
        ->setParamByKey('destination', $request->destination)    
        ->get();
 
        /*
        $data2 =   \GoogleMaps::load('directions')
                ->setParam([
                    'origin'          => 'place_id:ChIJ685WIFYViEgRHlHvBbiD5nE', 
                    'destination'     => 'place_id:ChIJA01I-8YVhkgRGJb0fW4UX7Y', 
                    'mode'            => 'driving',
                    'region'          => 'GB',
                    'departure_time'  => 'now',
                ])
            
            ->getResponseByKey('routes.legs.steps.html_instructions'); */
        
        return $data;
    }

    public function getDistMatrix(Request $request) {

 
            /*$data = \GoogleMaps::load('distancematrix')
                    
                    ->setParamByKey('origins', 'Vancouver+BC|Seattle')
                    ->setParamByKey('destinations', 'San Francisco|Victoria BC')
                    ->setParamByKey('mode', 'bicycling')                     
                    ->get();*/
  
                    
            $data2 = \GoogleMaps::load('distancematrix')                    
                    ->setParam([
                    'origins'       => $request->origin,
                    'destinations'  => $request->destination,
                    'mode' => $request->mode,
                    'language' => 'GB'
                ])
                ->getResponseByKey('rows.elements');
            
            return $data2;
    }

    public function getPlaces(Request $request) {

 
            /*$data = \GoogleMaps::load('nearbysearch')
                    
                    ->setParam([
                    'location'  => '-33.8670522,151.1957362',
                    'radius'    => '500',
                    'name'      => 'sydney',
                    'type'      => 'airport',
                ])
                ->getResponseByKey('results.photos');*/
  
                    
            $data2 = \GoogleMaps::load('nearbysearch')           
                    ->setParam([
                        'location'  => $request->origin,
                        'radius'    => $request->radius,
                        'name'      => $request->name,
                        'type'      => $request->type
                ])
                ->getResponseByKey('rows.elements');
            
            return $data2;
    }
}
