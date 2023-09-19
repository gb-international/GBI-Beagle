<?php

namespace App\Model\User;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $fillable = ['client_type', 'sub_id', 'notif_type', 'template', 'body'];

    public function subscriber(){
        return $this->belongsTo('App\Model\User\Subscriber');
    }
    
}
