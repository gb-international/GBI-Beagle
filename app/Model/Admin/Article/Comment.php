<?php

namespace App\Model\Admin\Article;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $table = "article_comments";
    protected $fillable = ['id', 'post_id','name','description', 'created_at','updated_at','deleted_at'];
    public function post()
    {
        return $this->belongsToMany('App\Model\Admin\Article\Posts');
    }
}
