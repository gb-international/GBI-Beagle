<?php

namespace App\Model\Post;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Helpers\UniqueSlug;
use App\Traits\ImageTrait;

class Category extends Model
{
    protected $fillable = ['title','image','alt','slug','description','meta_title','meta_keyword'];

    public function posts()
    {
        return $this->belongsToMany('App\Model\Post\Post');
    }

    public function getImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.category_image').$image);
        }else{
            return '';
        }
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $category = new Category;
        $unique_slug_helper = new UniqueSlug(); 
        $unique_slug = $unique_slug_helper->unique_slug(Str::slug($value,'-'), $category);
        $this->attributes['slug'] = $unique_slug;
    }
}
