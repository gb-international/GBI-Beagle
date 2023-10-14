<?php

namespace App\Model\Encyclopedia;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EncylopediaEvent extends Model
{
    use HasFactory;
    protected $table = "encylopedia_events";
    protected $fillable = [
        'id',
        'title',
        'city',
        'state',
        'type',
        'description',
        'image',
        'image_alt',
        'banner_image',
        'banner_image_alt',
        'created_at',
        'updated_at',
        'deleted_at',
    ];
    public function getBannerImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.encylopedia_event_banner_image').$image);
        }else{
            return '';
        }
    }
}
