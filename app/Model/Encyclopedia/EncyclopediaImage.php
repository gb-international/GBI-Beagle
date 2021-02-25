<?php

namespace App\Model\Encyclopedia;

use Illuminate\Database\Eloquent\Model;

class EncyclopediaImage extends Model
{
    protected $fillable = ['encyclopedia_id','image','alt'];
    public function gallery(){
        return $this->belongsTo('App\Model\Encyclopedia\Encyclopedia');
    }
}
