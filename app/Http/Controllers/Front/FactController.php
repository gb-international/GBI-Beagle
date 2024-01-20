<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController;
use App\Model\Fact;

class FactController extends BaseController
{
    public function random_fact(){
        try{
            $data = Fact::where('status',1)->inRandomOrder()->select('id','name','description')->first();
            if(!empty($data)){
                return response()->json($data);
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
    public function random_fact_acc_to_city($city){
        try{
            $data = Fact::where('status',1)->whereHas('city',  function ($q) use ($city) {
                $q->where('name',$city);
            })->inRandomOrder()->select('id','name','description', 'city_id')->first(); 
            if(!empty($data)){
                $data->city;
                return response()->json($data);
            }
            else{
                return $this->sendError("Data not fount!", 404);
            }
        }
        catch(Exception $e){
            return $this->sendError($e->getMessage(), 500);
        }
    }
}
