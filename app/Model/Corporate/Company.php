<?php

namespace App\Model\Corporate;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = "companies";
    
    protected $fillable = [
        'company_name', 'street', 'city_name','state_name','country_name','pincode','company_email_id','incharge_email_id','mobile','address','incharge_name','incharge_mobile_number','user_id'
    ];

    public function setFinanceEmailIdEmailAttribute($value){
        return $this->attributes['finance_email_id'] = strtolower($value);
    }
    
    public function setDirectorEmailIdEmailAttribute($value){
        return $this->attributes['director_email_id'] = strtolower($value);
    }

    public function tours()
    {
    	return $this->hasMany('App\Model\Tour\Tour');
    }
    public function informations(){
        return $this->hasMany('App\Model\User\Information');
    }

    public function incharge(){
        return $this->hasOne('App\User','id','user_id');
    }
    
}
