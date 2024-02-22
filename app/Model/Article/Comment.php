<?php

namespace App\Model\Article;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['article_id','name','description'];
    public function article()
    {
        return $this->belongsTo('App\Model\Article\Article');
    }
}
