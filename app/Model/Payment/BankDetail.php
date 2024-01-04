<?php

namespace App\Model\Payment;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankDetail extends Model
{
    use HasFactory;
    protected $table = 'bank_details';
    protected $fillable = ['id','user_types', 'edu_institute_id','company_user_id','family_user_id','user_id','name','bank_name','account_number', 'account_type', 'ifsc_code', 'created_at', 'updated_at', 'deleted_at'];

    public function education_institude(){
        return $this->belongsTo('App\Model\School\EducationInstitute','edu_institute_id','id')->select(['id', 'name']);
    }

    public function company_user(){
        return $this->belongsTo('App\CompanyUser','company_user_id','id')->select(['id', 'name']);
    }

    public function family_user(){
        return $this->belongsTo('App\FamilyUser','family_user_id','id')->select(['id', 'name']);
    }
}
