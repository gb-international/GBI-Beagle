<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class CompanyUser extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $table = 'company_users';
    protected $guard = 'company';
    protected $fillable = ['id', 'name', 'company_id', 'department', 'email', 'email_verified_at', 'password', 'reset_link', 'link_time', 'status', 'change_password', 'gbi_link', 'client_input', 'phone_no', 'otp', 'father_name','mother_name', 'dob', 'address1','address2', 'city', 'state', 'country', 'zip_code','varified', 'photo','gender','doc_front', 'doc_back', 'doc_type', 'employee_id', 'register_by', 'is_incharge','created_at', 'updated_at','updated_at'];    
}
