<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;
use App\User;

class UserRoleResource extends JsonResource
{

    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'user_name' => $this->user->name,
            'department' => $this->department->name,
            'role' => $this->role->name,
            'created_at' => $this->created_at,
        ];
    }
}
