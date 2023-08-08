<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Model\User\UserSocial;

class SocialResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $facebook = null;
        $instagram = null;
        $twitter = null;
        $linkedin = null;

        $social = UserSocial::where('user_id', $this->id)->get();

        foreach ($social as $sl) {

            if($sl->provider == 'facebook'){
                $facebook = $sl->code;
            }
            else if($sl->provider == 'instagram'){
                $instagram = $sl->code;
            }
            else if($sl->provider == 'twitter'){
                $twitter = $sl->code;
            }
            else if($sl->provider == 'linkedin'){
                $linkedin = $sl->code;
            }
        }


        return[
            'facebook'  =>  $facebook,
            'instagram' =>  $instagram,
            'twitter'   =>  $twitter,
            'linkedin'  =>  $linkedin,
        ];
    }
}
