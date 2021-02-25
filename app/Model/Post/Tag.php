<?php

namespace App\Model\Post;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['title'];

    public function posts()
    {
        return $this->belongsToMany('App\Model\Post\Post');
    }
}
