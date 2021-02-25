<?php

namespace App\Model\Gallery;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Gallery extends Model
{
    protected $fillable = ['category','title','slug','school_id'];

    public function images(){
        return $this->hasMany('App\Model\Gallery\Galleryimage');
    }
    
    public function school(){
        return $this->belongsTo('App\Model\School\School');
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value,'-');
    }

}
