<?php

namespace App\Model\Admin\Article;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Helpers\UniqueSlug;

class Posts extends Model
{
    use HasFactory;
    protected $table = "article_posts";
    protected $fillable = [
        'id', 'title', 'description', 'summery', 'meta_title','meta_keyword','status','client_type','category_id','slug','image', 'alt', 'created_at','updated_at','deleted_at'
    ];
    public function getImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.article_post_image').$image);
        }else{
            return '';
        }
    }

    public function category()
    {
        return $this->belongsTo('App\Model\Admin\Article\Category');
    }
    
    public function tags()
    {
        return $this->belongsToMany('App\Model\Admin\Article\Tags');
    }

    public function comments()
    {
        return $this->hasMany('App\Model\Admin\Article\Comment')->orderBy('id','desc');
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $posts = new Posts;
        $unique_slug_helper = new UniqueSlug(); 
        $unique_slug = $unique_slug_helper->unique_slug(Str::slug($value,'-'), $posts);
        $this->attributes['slug'] = $unique_slug;
    }
}
