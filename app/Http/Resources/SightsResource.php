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
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {        
        $onG = Bookedsightseeing::where('tour_code',$this->tour_code)->where('mark_arrive', 0)->first();
        $stR = Bookedsightseeing::where('tour_code',$this->tour_code)->where('mark_arrive', 1)->orderBy('updated_at', 'DESC')->first();

        if($onG){
            $onG = ['latLng' => json_decode($onG->sightseeing->latlng??'')];
        }

        if($stR){
            $stR = ['latLng' => json_decode($stR->sightseeing->latlng??'')];
        }

        if($stR && !$onG){
            $comp = true;
        } else {
            $comp = false;
        }
         
        return [
                'id'=>$this->id??0,
                'name'=>$this->sightseeing->name??'',
                'sightseeing_id'=>$this->sightseeing_id??'',
                'itineraryday_id'=>$this->itineraryday_id??'',
                'latLng'=>json_decode($this->sightseeing->latlng??''),
                'onG'=> $onG,
                'stR'=> $stR,
                'completed' => $comp,
                'mark_arrive'=>$this->mark_arrive??'',
        ];
    }
}