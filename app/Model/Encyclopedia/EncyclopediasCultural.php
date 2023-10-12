<?php

namespace App\Model\Encyclopedia;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EncyclopediasCultural extends Model
{
    use HasFactory;
    protected $table = "encyclopedias_cultural";
    protected $fillable = [
        'encyclopedias_id',
        'cultural_image',
        'cultural_image_alt',
    ];
    public function getCulturalImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.encyclopedia_cultural').$image);
        }else{
            return '';
        }
    }
}
