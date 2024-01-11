<?php

namespace App\Model\Advertising_And_Discount;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttermptDiscountCoupon extends Model
{
    use HasFactory;
    protected $table = "attermpt_user_coupons";
    protected $fillable = ['client_type', 'family_user_id', 'company_user_id', 'edu_institute_id', 'discount_coupon_id', 'use_per_user'];
    
    public function education_backinstitutes(){
        return $this->belongsTo('App\Model\School\EducationInstitute', 'edu_institute_id', 'id')->select(['id', 'name', 'school_id']);
    }
    public function family_users(){
        return $this->belongsTo('App\FamilyUser', 'family_user_id', 'id')->select(['id', 'name']);
    }
    public function company_users(){
        return $this->belongsTo('App\CompanyUser', 'company_user_id', 'id')->select(['id', 'name', 'company_id']);
    }

    public function discount_coupon(){
        return $this->belongsTo('App\Model\Advertising_And_Discount\DiscountCoupon')->select(['id', 'name', 'coupon_code', 'price', 'discount', 'use_time_per_user', 'client_type']);
    }
}
