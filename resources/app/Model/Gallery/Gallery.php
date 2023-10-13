<?php

namespace App\Model\Gallery;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Helpers\UniqueSlug;

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
        $this_id = $this->id??0;
        $this->attributes['title'] = $value;
        $gallery = new Gallery;
        $unique_slug_helper = new UniqueSlug(); 
        $unique_slug = $unique_slug_helper->unique_slug(Str::slug($value,'-'), $gallery, $this_id, 'slug');
        $this->attributes['slug'] = $unique_slug;
    }

}
