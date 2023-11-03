<?php

namespace App\Model\Hotel;

use Illuminate\Database\Eloquent\Model;

class Banquet extends Model
{
    protected $guarded = [];
    protected $table = "banquets";
    
    public function getBannerImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.banquet_image').$image);
        }else{
            return '';
        }
    }

    public function setEmailAttribute($value){
        return $this->attributes['email'] = strtolower($value);
    }


    public function amenities(){
        return $this->hasMany('App\Model\Hotel\Amenities');
    }

    public function banquetCategory(){
        return $this->hasMany('App\Model\Hotel\BanquetCategories');
    }
}
