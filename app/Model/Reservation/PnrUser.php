<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class PnrUser extends Model
{
    protected $fillable = ['user_id','pnr_id','tour_id','transport_id','transport_type'];
    protected $table = 'pnr_user';
    public $timestamps = false;

    public function format(){
        return [
            'id' => $this->id,
            'user_id' => $this->user->id,
            'pnr_id' => $this->pnr->id,
            'pnr_number' => $this->pnr->pnr_number,
            'name' => $this->user->name,
            'tour_id' => $this->tour_id,
            'transport_id' => $this->transport_id,
            'transport_type' => $this->transport_type
        ];
    }

    public function user(){
        return $this->belongsTo('App\User');
    }
    
    public function pnr(){
        return $this->belongsTo('App\Model\Reservation\Pnr');
    }



}
