<?php

namespace App\Model\Post;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['post_id','name','description'];
    public function post()
    {
        return $this->belongsTo('App\Model\Post\Post');
    }
}
