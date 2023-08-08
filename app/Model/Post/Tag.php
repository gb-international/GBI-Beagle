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
    public function encyclopedias()
    {
        return $this->belongsToMany('App\Model\Encyclopedia\Encyclopedia');
    }
    public function itineraries()
    {
        return $this->belongsToMany('App\Model\Itinerary\Itinerary');
    }
}
