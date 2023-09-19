<?php

namespace App\Model\Encyclopedia;

use Illuminate\Database\Eloquent\Model;

class EncyclopediaImage extends Model
{
    protected $fillable = ['encyclopedia_id','image','alt'];

    public function getImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.encyclopedia_image').$image);
        }else{
            return '';
        }
    }

    public function gallery(){
        return $this->belongsTo('App\Model\Encyclopedia\Encyclopedia');
    }
}
