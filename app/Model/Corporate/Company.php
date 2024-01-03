<?php

namespace App\Model\Corporate;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = "companies";
    
    protected $fillable = [
        'company_name', 'street', 'city_name','state_name','country_name','pincode','company_email_id','incharge_email_id','mobile','address','incharge_name','incharge_mobile_number','user_id','company_user_id'
    ];

    public function setCompanyEmailIdEmailAttribute($value){
        return $this->attributes['company_email_id'] = strtolower($value);
    }
    
    public function setInchargeEmailIdEmailAttribute($value){
        return $this->attributes['incharge_email_id'] = strtolower($value);
    }

    public function tours()
    {
    	return $this->hasMany('App\Model\Tour\Tour');
    }
    
    public function incharge()
    {
        return $this->belongsTo('App\CompanyUser','company_user_id', 'id');
    }
}
