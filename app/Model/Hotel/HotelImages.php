<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelImages extends Model
{
    use HasFactory;
    protected $table = "hotel_images";
    protected $fillable = ['id', 'hotel_id', 'alt', 'image', 'created_at', 'updated_at', 'deleted_at'];
}
