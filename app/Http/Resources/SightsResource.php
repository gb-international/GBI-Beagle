<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Model\Reservation\Bookedsightseeing;
use Carbon\Carbon;
use App\User;

class SightsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *~~
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {        
        $onG = Bookedsightseeing::where('tour_code',$this->tour_code)->where('mark_arrive', 0)->first();
        // print_r($onG->sightseeing->latlng);
        // exit;
        $stR = Bookedsightseeing::where('tour_code',$this->tour_code)->where('mark_arrive', 1)->orderBy('updated_at', 'DESC')->first();
        if($onG){
            $onG = ['latLng' => json_decode($onG->sightseeing->latlng??0)];
        }

        if($stR){
            $stR = ['latLng' => json_decode($stR->sightseeing->latlng??0)];
        }

        if($stR && !$onG){
            $comp = true;
        } else {
            $comp = false;
        }
         
        return [
                'id'=>$this->id,
                'name'=>$this->sightseeing->name??'NA',
                'sightseeing_id'=>$this->sightseeing_id??'NA',
                'itineraryday_id'=>$this->itineraryday_id??'NA',
                'latLng'=>json_decode($this->sightseeing->latlng??'NA'),
                'onG'=> $onG,
                'stR'=> $stR,
                'completed' => $comp,
                'mark_arrive'=>$this->mark_arrive,
        ];
    }
}