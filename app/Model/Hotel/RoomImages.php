<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomImages extends Model
{
    use HasFactory;
    protected $table = "room_images";
    protected $fillable = ['room_id', 'image', 'alt'];
    
}
