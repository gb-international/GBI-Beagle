<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class CompanyUser extends Authenticatable
{
    use HasApiTokens, Notifiable, HasFactory;
    protected $table = 'company_users';
    protected $guard = 'company';
    protected $fillable = ['id', 'name', 'company_id', 'department', 'email', 'email_verified_at', 'password', 'reset_link', 'link_time', 'status', 'change_password', 'gbi_link', 'client_input', 'phone_no', 'otp', 'father_name','mother_name', 'dob', 'address1','address2', 'city', 'state', 'country', 'zip_code','varified', 'photo','gender','doc_front', 'doc_back', 'doc_type', 'employee_id', 'register_by', 'is_incharge', 'customer_id', 'gstin', 'company_name', 'company_address', 'company_code', 'created_at', 'updated_at','deleted_at'];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
