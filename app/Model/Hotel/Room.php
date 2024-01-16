<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;
    protected $table = "rooms";
    protected $fillable = ['id', 'room_category_id', 'traveller_policy_id', 'description', 'maximum_occupancy', 'inches', 'length', 'width', 'height', 'currency_type', 'meal_plan_type', 'status'];
    public function room_category(){
        return $this->belongsTo('App\Model\Hotel\RoomCategory')->select(['id', 'title', 'description']);
    }

    public function roomimages()
	{
		return $this->hasMany('App\Model\Hotel\RoomImages')->select('id', 'room_id', 'alt', 'image');
	}
    public function room_price()
	{
		return $this->hasMany('App\Model\Hotel\RoomPriceDetail', 'room_id', 'id');
	}
    public function totalHotal(){
        return $this->belongsToMany('App\Model\Hotel\Hotel');
    }
    public function traveller_policy(){
    	return $this->hasOne('App\Model\TravellerPolicy\TravellerPolicy', 'id', 'traveller_policy_id')->select(['id', 'name']);;
    }
}
