<?php
namespace App\Http\Controllers\Front;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Location\City;
use App\Model\Location\Country;
class LocationController extends Controller
{
    public function cityList(){
        return response()->json(City::select(['id','name'])->get());
    }
    public function relatedCities($name){
        $data = City::select('country_id','id')->where('name',$name)->first();
        $cities = [];
        if($data){
            $cities = City::where('country_id',$data->country_id)->get();
        }
        return response()->json($cities);
    }
    
    public function regionalCities($region){
        $data = [];
        $cities = [];
        if($region == 'national'){
            $data = Country::select('id','name')
                ->with('cities:id,country_id,name')
                ->where('name','india')
                ->get();
            $country = $data[0]['name'];
            foreach ($data[0]->cities as $d ) {
                $d->city = $d->name;
                $d->name = $d->name.','.$country;
                array_push($cities,$d);
            }
        }
        if($region == 'international'){
            $data = Country::select('id','name')
                ->with('cities:id,country_id,name')
                ->where('name','!=', 'india')
                ->get();
            foreach($data as $row){
                $country = $row['name'];
                foreach ($row->cities as $d ) {
                    $d->city = $d->name;
                    $d->name = $d->name.','.$country;
                    array_push($cities,$d);
                }
            }
        }
        return response()->json($cities);
    }

    public function airportsInt($city){

        $portArray = array();

        $json = file_get_contents('https://gbi-api-data.s3.ap-south-1.amazonaws.com/airplane-api/airports.json');
        $json_data = json_decode($json, true);
        foreach ($json_data as $port){
            if($port['city'] == $city){
                 array_push($portArray, $port);
            }
        }
        return response()->json($portArray);
        
    }

     public function airports($city){

        $portArray = array();

        $json = file_get_contents('https://gbi-api-data.s3.ap-south-1.amazonaws.com/airplane-api/airports.json');
        $json_data = json_decode($json, true);
        foreach ($json_data as $port){
            if(strtolower($port['city']) == strtolower($city) && $port['country'] == 'India'){
                 array_push($portArray, $port);
            }
        }
        return response()->json($portArray);
        
    }


    public function allAirportsNational(){

        $portArray = array();

        //$file = \Storage::disk('APIs3')->files('airplane-api/airports.json');
        $json = file_get_contents('https://gbi-api-data.s3.ap-south-1.amazonaws.com/airplane-api/airports.json');

        $json_data = json_decode($json, true);
        foreach ($json_data as $port){
            if($port['country'] == 'India'){
                 array_push($portArray, $port);
            }
        }
        return response()->json($portArray);
        
    }

    public function allAirportsInt(){

        $portArray = array();
        //$file = \Storage::disk('APIs3')->files('airplane-api/airports.json');
        $json = file_get_contents('https://gbi-api-data.s3.ap-south-1.amazonaws.com/airplane-api/airports.json');
        $json_data = json_decode($json, true);
        foreach ($json_data as $port){
            array_push($portArray, $port);
        }
        return response()->json($portArray);
        
    }

    public function allRailways(){
        $portArray = array();
        //$file = \Storage::disk('APIs3')->files('Train-api/train-api.json');
        $json = json_decode(file_get_contents('https://gbi-api-data.s3.ap-south-1.amazonaws.com/Train-api/train-api.json'));
        return response()->json($json->data);
    }

}
