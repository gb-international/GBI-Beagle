<?php

namespace App\Model\Encyclopedia;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EncyclopediasFood extends Model
{
    use HasFactory;
	protected $table = "encyclopedias_food";
    protected $fillable = [
        'encyclopedias_id',
        'food_image',
        'food_image_alt',
    ];
}
