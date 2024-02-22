<?php

namespace App\Model\Post;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['title'];

    public function articles()
    {
        return $this->belongsToMany('App\Model\Article\Article');
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
