<?php

namespace App\Model\Advertising_And_Discount;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DiscountCoupon extends Model
{
    use HasFactory;
    protected $table = "discount_coupons";
    protected $fillable = ['name', 'description', 'coupon_code', 'price', 'discount', 'image', 'alt', 'use_time_per_user', 'start_date','end_date'];
    
    public function education_institutes(){
        return $this->belongsToMany('App\Model\School\EducationInstitute')->select(['id', 'name']);
    }
    public function getImageAttribute($image)
    {
        if($image){
            return \Storage::disk('s3')->url(config('gbi.discount_coupon_image').$image);
        }else{
            return '';
        }
    }
}