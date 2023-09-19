<?php

namespace App\Model\Location;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable = ['name'];
    
    public function state(){
        return $this->hasMany('App\Model\Location\State');
    }
    
    public function cities(){
        return $this->hasMany('App\Model\Location\City');
    }
    

}
