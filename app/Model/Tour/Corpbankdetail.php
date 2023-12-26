<?php

namespace App\Model\Tour;

use Illuminate\Database\Eloquent\Model;

class Corpbankdetail extends Model
{
	protected $table = 'corp_bankdetails';

    protected $fillable = ['id', 'user_id','company_user_id','tour_code','company_id','name','bank_name','account_number','ifsc_code', 'account_type', 'created', 'updated_at', 'deleted_at'
];

    public function scopeBanks($query,$value){
        $id =  config('gbi.bank_id');
        return $query->where('tour_code',$value)->orWhere('id',$id);
    }

    public function company_user(){
        return $this->belongsTo('App/CompanyUser');
    }
}
