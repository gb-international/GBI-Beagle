<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;
    protected $table = "rooms";
    protected $fillable = ['id', 'room_category_id', 'description', 'maximum_occupancy', 'inches', 'length', 'width', 'height', 'currency_type', 'meal_plan_type'];
    public function room_category(){
        return $this->belongsTo('App\Model\Hotel\RoomCategory', 'id', 'room_category_id');
    }

    public function roomimages()
	{
		return $this->hasMany('App\Model\Hotel\RoomImages')->select('id', 'room_id', 'alt', 'image');
	}
}
