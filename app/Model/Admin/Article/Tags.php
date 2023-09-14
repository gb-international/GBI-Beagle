<?php

namespace App\Model\Admin\Article;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    use HasFactory;
   
    protected $table = "article_tags";
    protected $fillable = ['id', 'title', 'created_at', 'updated_at', 'deleted_at'];
}
