<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class Amenities extends Model
{
    protected $guarded = [];
    protected $table = "amenities";
    protected $fillable = ['id', 'title', 'description', 'image', 'alt', 'icon_image', 'icon_alt', 'created_at', 'updated_at'];
}
