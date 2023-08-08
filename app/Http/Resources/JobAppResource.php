<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;
use App\User;

class JobAppResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        //$user = User::where('id', $this->user_id)->first();
        $today = strtotime(date('Y-m-d H:i:s'));
        $updatedAt = date('h:i A',strtotime($this->updated_at));
        $ph_no = 'NA';

        if($today > (strtotime($this->updated_at) + 86400)){
            $updatedAt = date('d/m/Y', strtotime($this->updated_at));
        }
        

        return [
                'id'=>$this->id,
                'firstname'=>$this->firstname,
                'lastname'=>$this->lastname,
                'email'=>$this->email,
                'contactno'=>$this->contactno,
                'address'=>$this->address,
                'state'=>$this->state,
                'city'=>$this->city,
                'zipcode'=>$this->zipcode,
                'applyingfor'=>$this->applyingfor,
                'resume'=>$this->resume,
                'messagescon'=>$this->messagescon,
                'current_company'=> $this->current_company,
                'job_exp'=> $this->job_exp,
                'status'=> $this->status,
                'fullDate'=> date('d M Y', strtotime($this->updated_at)),
                'link'=> $this->link
        ];
    }
}