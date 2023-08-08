<?php

namespace App\Model\Notification;

use Illuminate\Database\Eloquent\Model;

class Notifier extends Model
{
    protected $table = 'notifier';
    
    protected $fillable = ['notification_id', 'subscription_id', 'status', 'service', 'read_at', 'category'];

    public function subscriber(){
        return $this->belongsTo('App\Model\User\Subscriber');
    }

    public function notification(){
        return $this->belongsTo('App\Model\Notification\Notification');
    }
    
}
