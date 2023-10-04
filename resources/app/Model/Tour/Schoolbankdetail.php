<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Schoolbankdetail extends Model
{
    protected $fillable = ['id', 'edu_institute_id', 'user_id','tour_code', 'school_id','name','bank_name','account_number','account_type','ifsc_code', 'created_at', 'updated_at', 'deleted_at'];

    public function scopeBanks($query,$value){
        $id =  config('gbi.bank_id');
        return $query->where('tour_code',$value)->orWhere('id',$id);
    }



}
