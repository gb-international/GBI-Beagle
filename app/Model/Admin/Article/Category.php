<?php

namespace App\Model\Admin\Article;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Helpers\UniqueSlug;

class Category extends Model
{
    use HasFactory;
    protected $table = "article_categories";
    protected $fillable = [
        'id', 'title', 'image','alt','slug','description','meta_title','meta_keyword','created_at','updated_at','deleted_at'];
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;        
        $category = new Category;
        $unique_slug_helper = new UniqueSlug(); 
        $unique_slug = $unique_slug_helper->unique_slug(Str::slug($value,'-'), $category);

        $this->attributes['slug'] = $unique_slug;
    }
}



