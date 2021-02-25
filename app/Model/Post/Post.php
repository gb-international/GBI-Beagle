<?php

namespace App\Model\Post;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Post extends Model
{
    protected $fillable = ['category_id','title','image','alt','slug','summery','description','meta_title','meta_keyword','status'];

    public function category()
    {
        return $this->belongsTo('App\Model\Post\Category');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Model\Post\Tag');
    }

    public function comments()
    {
        return $this->hasMany('App\Model\Post\Comment')->orderBy('id','desc');
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value,'-');
    }
}
