<?php

namespace App\Model\Article;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Article extends Model
{
    protected $fillable = ['category_id','title','image','alt','slug','summery','description','meta_title','meta_keyword','status', 'client_type', 'created_by', 'last_editor', 'published_by'];

    public function getImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.article_image').$image);
        }else{
            return '';
        }
    }

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
        return $this->hasMany('App\Model\Article\Comment')->orderBy('id','desc');
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value,'-');
    }
}
