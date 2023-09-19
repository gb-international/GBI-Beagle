<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Model\Itinerary\Itinerary;
use App\Model\Tour\Tour;
use Carbon\Carbon;
use App\User;

class FeedbackResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        $user = User::where('id', $this->user_id)->first();
        $tour = Tour::where('id', $this->tour_id)->first();
        $itinerary = Itinerary::where('id', $tour->itinerary_id)->first();
        $today = strtotime(date('Y-m-d H:i:s'));
        $updatedAt = date('h:i A',strtotime($this->updated_at));
        $days = $itinerary->noofdays.' Days';
        $ph_no = 'NA';
        $avgRate = (($this->trip_itenerary+$this->place_of_stay+$this->food_quality+$this->transport_arrangements+$this->escort_hospitality)/5);
        $userImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

        if($user->information){
            $ph_no = $user->information->phone_no;
            if($user->information->photo){
                $userImg = "https://gbi-assets.s3.ap-south-1.amazonaws.com/images/user/".$user->information->photo;
            }
        }

        if($today > (strtotime($this->updated_at) + 86400)){
            $updatedAt = date('d/m/Y', strtotime($this->updated_at));
        }

        if($itinerary->noofdays === 1){
            $days = $itinerary->noofdays.' Day';
        }
        

        return [
                'id'=>$this->id,
                'name'=>$user->name,
                'ph_no'=>$ph_no,
                'email'=>$user->email,
                'user_id'=>$this->user_id,
                'tour_id'=>$this->tour_id,
                'tour_code'=>$tour->tour_id,
                'itinerary_name'=> $itinerary->title,
                'trip_itenerary'=>$this->trip_itenerary,
                'place_of_stay'=>$this->place_of_stay,
                'food_quality'=>$this->food_quality,
                'transport_arrangements'=>$this->transport_arrangements,
                'recommend_to_others'=>$this->recommend_to_others,
                'travel_again'=>$this->travel_again,
                'escort_hospitality'=>$this->escort_hospitality,
                'comments'=>$this->comments,
                'time'=>$updatedAt,
                'days'=>$days,
                'fullDate'=> date('d M Y', strtotime($this->updated_at)),
                'profession'=>$user->user_profession,
                'avgRate'=> $avgRate,
                'photo'=>$userImg
        ];
    }
}
