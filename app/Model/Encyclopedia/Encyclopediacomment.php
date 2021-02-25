<?php

namespace App\Model\Encyclopedia;

use Illuminate\Database\Eloquent\Model;

class Encyclopediacomment extends Model
{
	protected $fillable = ['encyclopedia_id','user_id','body','parent_id','status'];
    public function comments(){
    	return $this->belongsTo('App\Model\Encyclopedia\Encyclopedia')->orderBy('created_at');
    }
    public function user(){
    	return $this->belongsTo('App\User');
    }
}

