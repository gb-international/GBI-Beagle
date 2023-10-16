<?php

namespace App\Model\Reservation;

use Illuminate\Database\Eloquent\Model;

class PnrUser extends Model
{
    protected $fillable = ['user_id','pnr_id','tour_id','transport_id','transport_type', 'edu_institute_id'];
    protected $table = 'pnr_user';
    public $timestamps = false;

    public function format(){
        return [
            'id' => $this->id,
            'user_id' => $this->user->id??0,
            'pnr_id' => $this->pnr->id??0,
            'edu_institute_id' => $this->edu_institute->id,
            'pnr_number' => $this->pnr->pnr_number,
            'name' => $this->edu_institute->name,
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
    public function edu_institute(){
        return $this->belongsTo('App\Model\School\EducationInstitute');
    }
}
