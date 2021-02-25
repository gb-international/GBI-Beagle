<?php

namespace App\Model\Post;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    protected $fillable = ['title','image','alt','slug','description','meta_title','meta_keyword'];

    public function posts()
    {
        return $this->belongsToMany('App\Model\Post\Post');
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value,'-');
        
    }
}
