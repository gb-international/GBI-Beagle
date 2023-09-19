<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Model\Notification\Notification;
use App\Model\User\Subscriber;
use Carbon\Carbon;
use App\User;


class NotificationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

       $notif = Notification::find($this->notification_id);
       $sub = Subscriber::find($this->subscription_id);
       $today = strtotime(date('Y-m-d H:i:s'));
       $createdAt = date('h:i A',strtotime($this->created_at));
       $color = '#d9534f';
       $badge="new";

       if($today > (strtotime($this->created_at) + 86400)){
            $createdAt = date('d/m/Y', strtotime($this->created_at));
        }

        if($this->category == 'travel'){
            $color = '#337ab7';
            $badge = 'travel';
        } else if($this->category == 'payment'){
            $color = '#5cb85c';
            $badge = 'payment';
        } else if($this->category == 'promotion'){
            $color = '#5bc0de';
            $badge = 'promotion';
        } else if($this->category == 'website'){
            $color = '#f0ad4e';
            $badge = 'website';
        }

        return [
            'id' => $this->id,
            'email' => $sub->email,
            'status' => $this->status,
            'data' => json_decode($notif->data),
            'service' => $this->service,
            'category' => $this->category,
            'time'=>$createdAt,
            'created_at' => $this->created_at->format('Y-m-d'),
            'fullDate'=> date('d M Y, h:i A', strtotime($this->created_at)),
            'color'=> $color,
            'badge'=> $badge,
            'read'=> $this->read
        ];
    }
}
