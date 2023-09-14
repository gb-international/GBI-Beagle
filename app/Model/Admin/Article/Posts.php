<?php

namespace App\Model\Admin\Article;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;
    protected $table = "article_posts";
    protected $fillable = [
        'id', 'title', 'description', 'summery', 'meta_title','meta_keyword','status','client_type','category_id','slug','image', 'alt', 'created_at','updated_at','deleted_at'];
}
