<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FamilyBankdetail extends Model
{
    use HasFactory;
    protected $table = 'family_bankdetails';

    protected $fillable = ['id', 'user_id','family_user_id','tour_code','name','bank_name','account_number','ifsc_code', 'account_type', 'created', 'updated_at', 'deleted_at'
];

    public function scopeBanks($query,$value){
        $id =  config('gbi.bank_id');
        return $query->where('tour_code',$value)->orWhere('id',$id);
    }

    public function family_user(){
        return $this->belongsTo('App/FamilyUser');
    }
}
