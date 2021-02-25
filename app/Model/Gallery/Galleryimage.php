<?php

namespace App\Model\Gallery;

use Illuminate\Database\Eloquent\Model;

class Galleryimage extends Model
{
    protected $fillable = ['gallery_id','path','alt'];

    public function gallery(){
        return $this->belongsTo('App\Model\Gallery\Gallery');
    }
}
