<?php

namespace App\Model\Hotel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomPriceDetail extends Model
{
    use HasFactory;
    protected $table = "room_price_details";
    protected $fillable = ['room_id', 'occupancy_type', 'net_rate', 'rack_rate', 'discount', 'created_at', 'updated_at'];
    
    
}
