<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Itineraryday extends Model
{
     public  function user(){
      return $this->belongsTo(User::class);
  }

  public  function itinerary(){
        return $this->belongsTo(Itinerary::class,'itinerary_id');
    }
}
