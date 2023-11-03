<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;
    protected $table = "rooms";
    public function room_category(){
        return $this->hasMany('App\Model\Hotel\RoomCategory');
    }
}
